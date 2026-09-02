/* The Journeys of Paul — interactive study atlas */
(function () {
const P = window.PAUL_PLACES, J = window.PAUL_JOURNEYS, LETTER_SITES = window.PAUL_LETTER_SITES || [];
const T0 = 4, T1 = 69;
const STORE = "paulAtlas.v1";
const $ = (s) => document.querySelector(s);

const store = (() => {
  let d = { marks: {}, notes: {} };
  try { d = Object.assign(d, JSON.parse(localStorage.getItem(STORE) || "{}")); } catch (e) {}
  return {
    d, save() { try { localStorage.setItem(STORE, JSON.stringify(d)); } catch (e) {} },
    marked(id) { return !!d.marks[id]; },
    toggle(id) { d.marks[id] ? delete d.marks[id] : (d.marks[id] = Date.now()); this.save(); },
    note(id, v) { if (v === undefined) return d.notes[id] || ""; v ? (d.notes[id] = v) : delete d.notes[id]; this.save(); },
    get(k) { return d[k]; }, set(k, v) { d[k] = v; this.save(); }
  };
})();

const state = {
  year: 46, visible: new Set(J.map(j => j.id)), active: "j1",
  place: null, ctx: null, playing: false, evIdx: 0,
  cfm: { week: null, places: new Set(), journeys: new Set() }
};

/* ---------- geometry helpers ---------- */
const R = 6371;
function haversine(a, b) {
  const rad = Math.PI / 180, dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const la1 = a.lat * rad, la2 = b.lat * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function curve(a, b, mode) {
  const n = 26, out = [];
  const bend = mode === "sea" ? 0.13 : 0.045;
  const mx = (a.lat + b.lat) / 2, my = (a.lng + b.lng) / 2;
  const dx = b.lat - a.lat, dy = b.lng - a.lng;
  const cx = mx - dy * bend, cy = my + dx * bend;      // control point, perpendicular offset
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    out.push([u * u * a.lat + 2 * u * t * cx + t * t * b.lat, u * u * a.lng + 2 * u * t * cy + t * t * b.lng]);
  }
  return out;
}
function legKm(j, i) {
  const s = j.stops[i], prev = j.stops[i - 1];
  if (!prev || s.mode === "none") return 0;
  if (s.km) return s.km;
  return Math.round(haversine(P[prev.place], P[s.place]) / 5) * 5;
}
function daysFor(km, mode) {
  if (!km) return "—";
  const d = mode === "sea" ? km / 130 : km / 27;
  return d < 1.2 ? "about a day" : Math.round(d) + " days";
}
/* distance units: kilometres, Roman miles (1,479 m) or stadia (185 m) */
const UNITS = { key: store.d.units || "km" };
function fmtDist(km) {
  if (!km) return "—";
  if (UNITS.key === "mi") return Math.round(km / 1.479).toLocaleString() + " Roman mi";
  if (UNITS.key === "st") return Math.round(km / 0.185).toLocaleString() + " stadia";
  return Math.round(km).toLocaleString() + " km";
}
function journeyKm(j) { return j.stops.reduce((s, _, i) => s + legKm(j, i), 0); }

/* ---------- map ---------- */
const map = L.map("map", { center: [37.6, 27.5], zoom: 5, zoomControl: true, worldCopyJump: false,
  minZoom: 3, maxZoom: 17, attributionControl: true });
/* Esri's World Topographic basemap: keyless, and labelled in Latin script / English exonyms
   (standard OSM tiles label each place in its local script — Arabic, Hebrew, Greek).
   Falls back to OpenStreetMap if the service is unreachable. */
const ATTRIB = 'Tiles © Esri — Esri, DeLorme, NAVTEQ, USGS, NPS · Place data © OpenStreetMap contributors';
const intlTiles = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
  attribution: ATTRIB, maxZoom: 19, detectRetina: false
}).addTo(map);
let tileFails = 0, swapped = false;
intlTiles.on("tileerror", () => {
  if (swapped || ++tileFails < 6) return;
  swapped = true;
  map.removeLayer(intlTiles);
  const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors', maxZoom: 19
  }).addTo(map);
  // no network at all: fall back to a plain sea ground so routes and labels still read
  let osmFails = 0;
  osm.on("tileerror", () => {
    if (++osmFails < 6 || document.body.classList.contains("notiles")) return;
    map.removeLayer(osm);
    document.body.classList.add("notiles");
  });
});
if (navigator.onLine === false) document.body.classList.add("notiles");

/* basemap choices. Satellite and relief carry no printed place names, so the atlas's own
   labels are all that show — often the clearest way to read ancient terrain. */
const BASES = [
  { id: "topo", label: "Topographic", layer: intlTiles },
  { id: "sat", label: "Satellite", url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: 'Imagery © Esri — Maxar, Earthstar Geographics, USDA FSA, USGS, Aerogrid, IGN, IGP' },
  { id: "relief", label: "Relief (no labels)", url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
    attribution: 'Shaded relief © Esri' }
];
let baseIdx = 0;
function setBase(i) {
  const cur = BASES[baseIdx], next = BASES[i % BASES.length];
  if (next === cur) return;
  if (cur.layer) map.removeLayer(cur.layer);
  if (!next.layer) next.layer = L.tileLayer(next.url, { attribution: next.attribution, maxZoom: 19 });
  next.layer.addTo(map); next.layer.bringToBack();
  baseIdx = i % BASES.length;
  store.set("base", next.id);
  document.body.classList.toggle("sat", next.id === "sat");
  const b = $("#btnBase"); if (b) b.textContent = next.label === "Topographic" ? "Map" : next.label.split(" ")[0];
  updateLabels();
}

const routeLayer = L.layerGroup().addTo(map);
const markerLayer = L.layerGroup().addTo(map);
const geom = {}, ghost = {}, drawn = {}, headMark = { halo: null, dot: null };
const placeMarks = {}, placeLabels = {};

J.forEach(j => {
  const segs = [];
  for (let i = 1; i < j.stops.length; i++) {
    const a = P[j.stops[i - 1].place], b = P[j.stops[i].place];
    if (!a || !b) continue;
    segs.push({ pts: curve(a, b, j.stops[i].mode), t0: j.timeline[i - 1], t1: j.timeline[i], idx: i, mode: j.stops[i].mode });
  }
  geom[j.id] = segs;
  ghost[j.id] = L.polyline(segs.map(s => s.pts), { color: j.color, weight: 1.1, opacity: .28,
    dashArray: "3 6", interactive: false });
  drawn[j.id] = L.polyline([], { color: j.color, weight: 3, opacity: .95, lineJoin: "round",
    dashArray: j.dashed ? "7 7" : null, interactive: false });
  routeLayer.addLayer(ghost[j.id]); routeLayer.addLayer(drawn[j.id]);
});

// every place that appears anywhere gets one marker
const allPlaceIds = new Set(LETTER_SITES);
J.forEach(j => j.stops.forEach(s => allPlaceIds.add(s.place)));
allPlaceIds.forEach(id => {
  const p = P[id]; if (!p) return;
  const isMajor = p.tier === "major";
  const m = L.circleMarker([p.lat, p.lng], {
    radius: isMajor ? 6.5 : 4.5, weight: 2, color: "#e8dcc0", fillColor: "#0e1418",
    fillOpacity: .95, opacity: .55, className: "marker-dot"
  }).addTo(markerLayer);
  m.on("click", () => selectPlace(id));
  m.bindTooltip(p.name.split(" (")[0], { permanent: true, direction: "right", offset: [7, 0],
    className: "plabel" + (isMajor ? "" : " small") });
  placeMarks[id] = m;
});

/* label thinning: at low zoom only the major cities carry names */
function updateLabels() {
  const z = map.getZoom(), cands = [];
  allPlaceIds.forEach(id => {
    const m = placeMarks[id], p = P[id]; if (!m || !p) return;
    const tip = m.getTooltip(); const el = tip && tip.getElement(); if (!el) return;
    const inVisible = J.some(j => state.visible.has(j.id) && j.stops.some(s => s.place === id))
      || LETTER_SITES.indexOf(id) > -1;
    const onActive = J.some(j => j.id === state.active && j.stops.some(s => s.place === id));
    const major = p.tier === "major" || p.tier === "letter" || p.tier === "disputed";
    let show = false;
    if (!inVisible) show = false;
    else if (z >= 9) show = true;
    else if (z >= 7) show = major || onActive;
    else if (z >= 5.5) show = major;
    else show = major && onActive;
    el.style.display = show ? "" : "none";
    el.style.opacity = firstYear[id] <= state.year ? 1 : .5;
    if (show) cands.push({ id, el, prio: (state.place === id ? 0 : 0) + (onActive ? 1 : 3) + (major ? 0 : 1) });
  });
  // greedy de-collision: keep the higher-priority label, hide whatever overlaps it
  cands.sort((a, b) => a.prio - b.prio);
  const kept = [];
  cands.forEach(c => {
    const r = c.el.getBoundingClientRect();
    const clash = kept.some(k => !(r.right < k.left - 2 || r.left > k.right + 2 ||
      r.bottom < k.top - 1 || r.top > k.bottom + 1));
    if (clash) c.el.style.display = "none"; else kept.push(r);
  });
}
map.on("zoomend", updateLabels);
let mvTimer = null;
map.on("moveend", () => { clearTimeout(mvTimer); mvTimer = setTimeout(updateLabels, 90); });

function firstYearOf(id) {
  let best = 999;
  J.forEach(j => j.stops.forEach((s, i) => { if (s.place === id) best = Math.min(best, j.timeline[i]); }));
  return best;
}
const firstYear = {}; allPlaceIds.forEach(id => firstYear[id] = firstYearOf(id));

function journeyOf(id) { return J.find(j => j.id === id); }

/* ---------- render map for current year ---------- */
function renderMap() {
  const F = state.cfm.week != null ? state.cfm : null;
  const present = document.body.classList.contains("present");
  J.forEach(j => {
    const on = state.visible.has(j.id), rel = !F || F.journeys.has(j.id);
    ghost[j.id].setStyle({ opacity: !on ? 0 : !rel ? (present ? .1 : .06) : (state.active === j.id ? .38 : .2),
      weight: present ? 2 : 1.1 });
    if (!on) { drawn[j.id].setLatLngs([]); return; }
    const lines = [];
    geom[j.id].forEach(s => {
      if (state.year >= s.t1) lines.push(s.pts);
      else if (state.year > s.t0) {
        const f = (state.year - s.t0) / (s.t1 - s.t0);
        const k = Math.max(2, Math.round(f * (s.pts.length - 1)) + 1);
        lines.push(s.pts.slice(0, k));
      }
    });
    drawn[j.id].setLatLngs(lines);
    const PB = present ? 1.9 : 1;
    drawn[j.id].setStyle({ weight: (!rel ? 1.4 : state.active === j.id ? 3.6 : 2.2) * PB,
      opacity: !rel ? (present ? .24 : .16) : state.active === j.id ? .98 : (present ? .78 : .6) });
  });

  allPlaceIds.forEach(id => {
    const m = placeMarks[id]; if (!m) return;
    const reached = firstYear[id] <= state.year;
    const inVisible = J.some(j => state.visible.has(j.id) && j.stops.some(s => s.place === id))
      || LETTER_SITES.indexOf(id) > -1;
    const sel = state.place === id, bm = store.marked(id);
    const prel = !F || F.places.has(id);
    m.setStyle({
      opacity: !prel ? .12 : inVisible ? (reached ? 1 : .35) : .12,
      color: sel ? "#c9a227" : F && prel ? "#f6e3a8" : bm ? "#e0b955" : reached ? "#f2e9d6" : "#7d8a8c",
      fillColor: sel ? "#c9a227" : F && prel ? "#c9a227" : reached ? "#c9873a" : "#0e1418",
      fillOpacity: !prel ? .3 : reached ? .9 : .5,
      weight: (sel ? 4 : F && prel ? 3 : 2) * (present ? 1.6 : 1),
      radius: ((P[id].tier === "major" ? 6.5 : 4.5) + (sel ? 2.5 : F && prel ? 1.5 : 0)) * (present ? 1.5 : 1)
    });
  });
  updateLabels();

  // travelling head
  let head = null, headJ = null;
  J.forEach(j => {
    if (!state.visible.has(j.id)) return;
    geom[j.id].forEach(s => {
      if (state.year > s.t0 && state.year < s.t1) {
        const f = (state.year - s.t0) / (s.t1 - s.t0);
        const k = Math.min(s.pts.length - 1, Math.round(f * (s.pts.length - 1)));
        head = s.pts[k]; headJ = j;
      }
    });
  });
  if (head) {
    if (!headMark.dot) {
      headMark.halo = L.circleMarker(head, { radius: 12, color: "#c9a227", weight: 1, opacity: .5,
        fillColor: "#c9a227", fillOpacity: .12, interactive: false }).addTo(markerLayer);
      headMark.dot = L.circleMarker(head, { radius: 4.5, color: "#fff3cf", weight: 2,
        fillColor: "#c9a227", fillOpacity: 1, interactive: false }).addTo(markerLayer);
    }
    headMark.halo.setLatLng(head); headMark.dot.setLatLng(head);
    headMark.halo.setStyle({ opacity: .5 }); headMark.dot.setStyle({ opacity: 1, fillOpacity: 1 });
    if (state.playing && !map.getBounds().pad(-0.12).contains(L.latLng(head))) map.panTo(head, { animate: true });
  } else if (headMark.dot) {
    headMark.halo.setStyle({ opacity: 0, fillOpacity: 0 });
    headMark.dot.setStyle({ opacity: 0, fillOpacity: 0 });
  }
  return headJ;
}

/* ---------- timeline ---------- */
const pct = (y) => ((y - T0) / (T1 - T0)) * 100;
function buildTimeline() {
  $("#bands").innerHTML = J.map(j => {
    const a = j.timeline[0], b = j.timeline[j.timeline.length - 1];
    return `<div class="band${j.dashed ? " dash" : ""}" data-j="${j.id}" title="${j.name}"
      style="left:${pct(a)}%;width:${Math.max(0.4, pct(b) - pct(a))}%;background:${j.color}"></div>`;
  }).join("");
  $("#ticks").innerHTML = [10, 20, 30, 40, 50, 60].map(y =>
    `<div class="tick" style="left:${pct(y)}%">AD ${y}</div>`).join("");
  $("#bands").querySelectorAll(".band").forEach(b => b.addEventListener("click", () => setActive(b.dataset.j)));
}

function events() {
  const out = [];
  J.forEach(j => { if (state.visible.has(j.id)) j.stops.forEach((s, i) => out.push({ j, s, i, t: j.timeline[i] })); });
  return out.sort((a, b) => a.t - b.t);
}
function currentEvent() {
  const ev = events();
  let cur = ev[0];
  ev.forEach(e => { if (e.t <= state.year + 1e-6) cur = e; });
  return cur;
}
function renderTimeline() {
  const y = state.year;
  const yr = y < 1 ? "" : "AD " + Math.floor(y);
  $("#year").innerHTML = `${yr}<small>TIMELINE</small>`;
  $("#scrub").value = y;
  const e = currentEvent();
  if (e) {
    const p = P[e.s.place];
    $("#eventlabel").innerHTML = `<b>${p.name}</b> &nbsp;<span style="color:${e.j.color}">▬</span>
      <span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.06em;color:#8d9a9c">
      ${e.j.name.toUpperCase()}</span> &nbsp;· ${e.s.date} &nbsp;·
      <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#c9a227">${e.s.ref}</span>`;
  }
  // highlight the current stop in the rail
  document.querySelectorAll(".stop").forEach(el => el.classList.remove("now"));
  if (e && e.j.id === state.active) {
    const el = document.querySelector(`.stop[data-j="${e.j.id}"][data-i="${e.i}"]`);
    if (el) el.classList.add("now");
  }
}

/* ---------- rail ---------- */
function buildRail() {
  $("#jlist").innerHTML = J.map(j => {
    const km = journeyKm(j);
    return `<div class="jrow${state.active === j.id ? " active" : ""}${state.visible.has(j.id) ? "" : " off"}" data-j="${j.id}">
      <div class="jswatch" style="background:${j.color};border-color:${j.color}"></div>
      <div><div class="jname">${j.name}</div>
        <div class="jmeta">${j.years} · ${j.stops.length} stops · ~${fmtDist(km)}</div></div>
    </div>
    <div class="itin" data-itin="${j.id}">
      ${j.stops.map((s, i) => `<div class="stop" data-j="${j.id}" data-i="${i}">
        <div class="yr">${s.date.split("—")[0].trim()}</div>
        <div><span class="nm">${P[s.place] ? P[s.place].name : s.place}</span>
        ${i ? ` <span class="mode">${s.mode === "sea" ? "⛵ " + fmtDist(legKm(j, i)) : s.mode === "land" ? "⛬ " + fmtDist(legKm(j, i)) : ""}</span>` : ""}
        </div></div>`).join("")}
      <div class="stop" style="grid-template-columns:1fr;padding-left:30px">
        <div style="font-size:11.5px;color:#8d9a9c;line-height:1.5;padding:6px 0 2px">${j.summary}</div></div>
    </div>`;
  }).join("");

  $("#railnote").innerHTML = `<b style="color:#cbc2b0">Legend.</b> Solid line = journey travelled;
    dotted = route not yet reached at this point on the timeline; dashes = disputed, post-Acts route.
    Curved links are sea passages. Distances are route estimates (Roman roads and sailing tracks),
    not straight lines. Dates follow the Gallio inscription (Acts 18:12), which fixes Corinth to AD 51–52.
    <br><br>Also on the map: <b style="color:#cbc2b0">Colossae</b>, a church Paul wrote to but never visited.`;

  $("#jlist").querySelectorAll(".jrow").forEach(row => {
    row.addEventListener("click", (e) => {
      if (e.target.classList.contains("jswatch")) { toggleJourney(row.dataset.j); return; }
      setActive(row.dataset.j, true);
    });
  });
  $("#jlist").querySelectorAll(".stop[data-i]").forEach(st => {
    st.addEventListener("click", () => {
      const j = journeyOf(st.dataset.j), i = +st.dataset.i;
      state.year = j.timeline[i]; state.active = j.id;
      selectPlace(j.stops[i].place, { jid: j.id, i });
      map.flyTo([P[j.stops[i].place].lat, P[j.stops[i].place].lng], Math.max(map.getZoom(), 7), { duration: .8 });
      renderAll();
    });
  });
}
function toggleJourney(id) {
  state.visible.has(id) ? state.visible.delete(id) : state.visible.add(id);
  buildRail(); renderAll();
}
function setActive(id, fit) {
  state.active = id;
  if (!state.visible.has(id)) state.visible.add(id);
  const j = journeyOf(id);
  state.year = j.timeline[j.timeline.length - 1];
  if (fit) {
    const pts = j.stops.map(s => [P[s.place].lat, P[s.place].lng]);
    map.flyToBounds(L.latLngBounds(pts).pad(0.18), { duration: .9 });
    if (window.innerWidth <= 760) document.body.classList.remove("rail-open");
  }
  buildRail(); renderAll();
}

/* ---------- detail panel ---------- */
function occurrences(id) {
  const out = [];
  J.forEach(j => j.stops.forEach((s, i) => { if (s.place === id) out.push({ j, s, i }); }));
  return out;
}
function chapterSpan(refs) {
  if (!refs || !refs.length) return null;
  const parse = (r) => {
    const m = r.replace(/[–—]/g, "-").match(/^(.+?)\s+(\d+)(?::|$)/);
    return m ? { book: m[1], ch: +m[2] } : null;
  };
  const first = parse(refs[0].ref || refs[0]); if (!first) return null;
  const chs = refs.map(r => parse(r.ref || r)).filter(x => x && x.book === first.book).map(x => x.ch);
  const lo = Math.min.apply(null, chs), hi = Math.min(Math.max.apply(null, chs), lo + 2);
  const ref = lo === hi ? `${first.book} ${lo}` : `${first.book} ${lo}-${hi}`;
  return { ref, label: lo === hi ? `Read all of ${first.book} ${lo}` : `Read ${first.book} ${lo}–${hi}` };
}

/* ---------- shared panel plumbing: places, people and letters all open on the right ---------- */
const panelHist = [];
function wirePanel() {
  const d = $("#detail");
  d.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => {
    const gid = el.dataset.go; if (!P[gid]) return;
    selectPlace(gid);
    map.flyTo([P[gid].lat, P[gid].lng], Math.max(map.getZoom(), 6), { duration: .9 });
  }));
  d.querySelectorAll("[data-person]").forEach(el =>
    el.addEventListener("click", () => showPerson(el.dataset.person)));
  d.querySelectorAll("[data-letterp]").forEach(el =>
    el.addEventListener("click", () => showLetterPanel(el.dataset.letterp)));
  d.querySelectorAll("[data-week]").forEach(el =>
    el.addEventListener("click", () => setWeek(+el.dataset.week)));
  const back = d.querySelector("#panelBack");
  if (back) back.addEventListener("click", () => {
    panelHist.pop();                       // current
    const prev = panelHist.pop();
    if (!prev) return closeDetail();
    if (prev.t === "place") selectPlace(prev.k, prev.ctx);
    if (prev.t === "person") showPerson(prev.k);
    if (prev.t === "letter") showLetterPanel(prev.k);
    if (prev.t === "cfm") showCFMPanel(prev.k);
  });
  const cl = d.querySelector(".dclose"); if (cl) cl.onclick = closeDetail;
  $("#app").classList.add("detail-open");
  if (window.innerWidth <= 760) document.body.classList.remove("rail-open");
  d.scrollTop = 0;
  setTimeout(() => map.invalidateSize(), 320);
}
function panelHead(title, sub, crumb) {
  return `<div class="dhead">
    <button class="dclose" title="Close">×</button>
    ${panelHist.length > 1 ? `<button class="tool" id="panelBack" style="margin-bottom:9px">← Back</button>` : ""}
    ${crumb ? `<div class="dsub" style="margin:0 0 5px">${crumb}</div>` : ""}
    <h2>${title}</h2>
    <div class="dsub">${sub}</div></div>`;
}
function peopleAt(placeId) {
  return (window.PAUL_PEOPLE || []).filter(pp => pp.places.indexOf(placeId) > -1);
}
const PERSON_ALIASES = { "Silas": "Silas (Silvanus)", "Silvanus": "Silas (Silvanus)",
  "Peter": "Peter (Cephas)", "Cephas": "Peter (Cephas)", "Mark": "John Mark",
  "Ananias": "Ananias of Damascus", "Priscilla": "Aquila and Priscilla",
  "Aquila": "Aquila and Priscilla", "Aquila and Priscilla": "Aquila and Priscilla",
  "Bernice": "Herod Agrippa II and Bernice", "Eunice": "Eunice and Lois", "Lois": "Eunice and Lois",
  "Sopater": "Sopater of Berea", "Elymas": "Elymas (Bar-Jesus)", "Bar-Jesus": "Elymas (Bar-Jesus)" };
function personByName(name) {
  const list = window.PAUL_PEOPLE || [];
  if (!name) return null;
  const exact = (n) => list.find(pp => pp.name === n);
  let hit = exact(name); if (hit) return hit;
  if (PERSON_ALIASES[name]) { hit = exact(PERSON_ALIASES[name]); if (hit) return hit; }
  const bare = name.replace(/\s*\(.*$/, "").trim();          // "Timothy (left in charge…)" → "Timothy"
  hit = exact(bare) || (PERSON_ALIASES[bare] && exact(PERSON_ALIASES[bare])); if (hit) return hit;
  // "Silas" → "Silas (Silvanus)"
  hit = list.find(pp => pp.name.indexOf(bare + " (") === 0); if (hit) return hit;
  // "Julius the centurion" → "Julius"; "Philip the evangelist and his daughters" → "Philip the evangelist"
  hit = list.find(pp => bare.indexOf(pp.name + " the ") === 0 ||
    (pp.name.indexOf(" ") > -1 && bare.indexOf(pp.name + " ") === 0));
  return hit || null;
}
function showPerson(name) {
  const pp = personByName(name); if (!pp) return;
  panelHist.push({ t: "person", k: pp.name });
  state.place = null;
  const journeys = J.filter(j => pp.places.some(id => j.stops.some(s => s.place === id)));
  const alongside = (window.PAUL_PEOPLE || []).filter(o => o !== pp &&
    o.places.some(id => pp.places.indexOf(id) > -1))
    .map(o => ({ o, shared: o.places.filter(id => pp.places.indexOf(id) > -1).length }))
    .sort((a, b) => b.shared - a.shared).slice(0, 10);
  const letters = (window.PAUL_LETTERS || []).filter(l =>
    pp.refs.some(r => r.split(" ").slice(0, -1).join(" ").toLowerCase() === l.name.toLowerCase()));
  const sect = (t, h) => h ? `<div class="sect"><h4>${t}</h4>${h}</div>` : "";
  $("#detail").innerHTML =
    panelHead(pp.name, pp.role, "PERSON") +
    sect("In brief", `<p>${pp.note}</p>`) +
    sect("Places named at", `<div class="tags">${pp.places.map(id => P[id]
      ? `<span class="chip" data-go="${id}">${P[id].name}</span>` : "").join("")}</div>
      <p style="font-size:12px;color:#8d9a9c;margin-top:8px">Click a place to open it on the map.</p>`) +
    sect("Itineraries", journeys.length ? journeys.map(j => `<div class="occ" data-j="${j.id}">
      <div class="dot" style="background:${j.color}"></div>
      <div><span class="occname">${j.name}</span><div class="om">${j.years} · ${j.acts}</div></div></div>`).join("")
      : `<p style="color:#8d9a9c">Named only outside the itineraries.</p>`) +
    sect("Scripture", `<div class="tags">${pp.refs.map(r =>
      `<span class="chip" data-passage="${r.replace(/[–—]/g, "-")}">${r}</span>`).join("")}</div>
      <p style="font-size:12px;color:#8d9a9c;margin-top:8px">Click a reference to read it in full (KJV).</p>`) +
    (letters.length ? sect("Letters", `<div class="tags">${letters.map(l =>
      `<span class="chip" data-letterp="${l.id}">${l.name}</span>`).join("")}</div>`) : "") +
    sect("Named alongside", `<div class="tags">${alongside.map(x =>
      `<span class="chip" data-person="${x.o.name}">${x.o.name}</span>`).join("")}</div>
      <p style="font-size:12px;color:#8d9a9c;margin-top:8px">People named at the same places — ordered by how many they share.</p>`);
  wirePanel();
  $("#detail").querySelectorAll(".occ[data-j]").forEach(el => el.addEventListener("click", () => {
    setActive(el.dataset.j, true);
  }));
  // light the places on the map
  const pts = pp.places.filter(id => P[id]).map(id => [P[id].lat, P[id].lng]);
  if (pts.length > 1) map.flyToBounds(L.latLngBounds(pts).pad(0.25), { duration: .9 });
  else if (pts.length) map.flyTo(pts[0], Math.max(map.getZoom(), 6), { duration: .9 });
}
function showLetterPanel(id) {
  const l = (window.PAUL_LETTERS || []).find(x => x.id === id); if (!l) return;
  panelHist.push({ t: "letter", k: id });
  state.place = null;
  const a = P[l.from], b = P[l.to];
  const chMatch = l.key.match(/(\d+):/);
  const readRef = chMatch ? l.name + " " + chMatch[1] : l.name;
  const sect = (t, h) => h ? `<div class="sect"><h4>${t}</h4>${h}</div>` : "";
  const people = (window.PAUL_PEOPLE || []).filter(pp =>
    pp.refs.some(r => r.toLowerCase().indexOf(l.name.toLowerCase()) === 0)).slice(0, 12);
  $("#detail").innerHTML =
    panelHead(l.name, `${l.date} · written from ${a.name} · sent to ${b.name}`, "LETTER") +
    sect("Occasion", `<p>${l.occasion}</p>`) +
    sect("Key verse", `<div class="verse"><div class="ref">${l.key}</div><p>${l.keyText}</p></div>
      <div class="tags"><span class="chip" data-passage="${readRef.replace(/[–—]/g, "-")}">Read ${readRef} in full</span></div>`) +
    sect("Where it travelled", `<div class="tags">
      <span class="chip" data-go="${l.from}">Written at ${a.name}</span>
      <span class="chip" data-go="${l.to}">Sent to ${b.name}</span></div>`) +
    (people.length ? sect("People named in it", `<div class="tags">${people.map(pp =>
      `<span class="chip" data-person="${pp.name}">${pp.name}</span>`).join("")}</div>`) : "") +
    sect("On the evidence", `<p style="color:#a9b2ac">${l.note}</p>`);
  wirePanel();
  const pts = [a, b].map(x => [x.lat, x.lng]);
  map.flyToBounds(L.latLngBounds(pts).pad(0.3), { duration: .9 });
  if (!layerState.letters) { setLayer("letters", true); const cb = document.querySelector('#layers input[data-layer="letters"]'); if (cb) cb.checked = true; }
}

function selectPlace(id, ctx) {
  const p = P[id]; if (!p) return;
  state.place = id; state.ctx = ctx || null;
  panelHist.push({ t: "place", k: id, ctx: ctx || null });
  const occ = occurrences(id);
  const c = ctx ? { j: journeyOf(ctx.jid), i: ctx.i } : (occ[0] ? { j: occ[0].j, i: occ[0].i } : null);
  const leg = c && c.i > 0 ? { km: legKm(c.j, c.i), mode: c.j.stops[c.i].mode, note: c.j.stops[c.i].note,
    from: P[c.j.stops[c.i - 1].place].name } : null;

  const sect = (title, html) => html ? `<div class="sect"><h4>${title}</h4>${html}</div>` : "";
  const G = (window.PAUL_GAZ || {})[id];
  const prof = c && c.i > 0 ? (window.PAUL_PROFILES || {})[c.j.stops[c.i - 1].place + ">" + id] : null;
  const letterChips = (window.PAUL_LETTERS || []).filter(l => l.from === id || l.to === id)
    .map(l => `<span class="chip" data-letterp="${l.id}">${l.name} — ${l.from === id ? "written here" : "sent here"}</span>`).join("");
  const gazHead = G ? `<div class="sect"><h4>Gazetteer</h4>
      <div class="tags" style="margin-bottom:9px">
        <span class="conf ${G.confidence.level}">Site identification: <b>${G.confidence.level}</b></span>
        ${G.elev != null ? `<span class="tag">${G.elev} m above sea level</span>` : ""}</div>
      <p style="font-size:13px">${[G.names.greek ? "<b>Greek:</b> " + G.names.greek : "",
        G.names.latin ? "<b>Latin:</b> " + G.names.latin : "",
        G.names.other ? G.names.other : ""].filter(Boolean).join(" &nbsp;·&nbsp; ")}</p>
      <p style="font-size:12.5px;color:#a9b2ac">${G.confidence.basis} <br>Marker: ${G.coord}</p>
      ${G.wiki ? `<div id="photoslot"></div>` : ""}</div>` : "";
  $("#detail").innerHTML = `
    <div class="dhead">
      <button class="dclose" title="Close">×</button>
      ${panelHist.length > 1 ? `<button class="tool" id="panelBack" style="margin-bottom:9px">← Back</button>` : ""}
      <h2>${p.name}</h2>
      <div class="dsub">${p.modern}<br>${p.region} · ${p.dates}</div>
      <div class="dactions">
        <button class="tool" id="btnMark">${store.marked(id) ? "★ Bookmarked" : "☆ Bookmark"}</button>
        <button class="tool" id="btnZoom">Zoom in</button>
      </div>
    </div>
    ${occ.length ? sect("Appears in", occ.map(o => `<div class="occ" data-j="${o.j.id}" data-i="${o.i}">
        <div class="dot" style="background:${o.j.color}"></div>
        <div><span class="occname">${o.j.name}</span>
        <div class="om">${o.s.date} · ${o.s.ref}</div></div></div>`).join("")) : ""}
    ${weeksFor(id).length ? sect("Come, Follow Me", `<div class="tags">${weeksFor(id)
        .map(w => `<span class="chip" data-week="${w.week}">Week ${w.week} — ${w.readings}</span>`).join("")}</div>
      <p style="font-size:12px;color:#8d9a9c;margin-top:8px">Weeks whose reading is set here. Click one to
      enter lesson focus mode.</p>`) : ""}
    ${sect("What happened here", `<p>${p.narrative}</p>`)}
    ${gazHead}
    ${leg ? sect("Getting there", `<p><b>From ${leg.from}</b> · ${leg.mode === "sea" ? "by sea" : "overland"} ·
        ~${fmtDist(leg.km)} · ${daysFor(leg.km, leg.mode)} of travel${leg.mode === "sea"
        ? " with a working wind" : " on foot at c. 27 km a day"}.</p>${leg.note ? `<p>${leg.note}</p>` : ""}
        ${prof ? `<div class="prof">${prof.pts.map(v => `<i style="height:${Math.max(6, Math.round(v / Math.max.apply(null, prof.pts) * 100))}%" title="${v} m"></i>`).join("")}</div>
        <p style="font-size:12px;color:#8d9a9c"><b style="color:#cbc2b0">${prof.label}</b> — elevation profile, ${Math.min.apply(null, prof.pts)}–${Math.max.apply(null, prof.pts)} m. ${prof.note}</p>` : ""}`) : ""}
    ${sect("Scripture — Authorized (King James) Version", p.scripture.map(s =>
        `<div class="verse"><div class="ref">${s.ref}</div><p>${s.text}</p></div>`).join("") +
        (chapterSpan(p.scripture) ? `<div><span class="chip" data-passage="${chapterSpan(p.scripture).ref}">${chapterSpan(p.scripture).label} in full</span></div>` : ""))}
    ${sect("The city in Greco-Roman history", `<p>${p.greco}</p>`)}
    ${sect("Archaeology — what survives", `<p>${p.archaeology}</p>`)}
    ${G && G.sources ? sect("Ancient testimony", G.sources.map(s => `<div class="src">
        <div class="who">${s.who} <span class="kind">— ${s.type === "quote" ? "quoted" : "summarised"}</span></div>
        <p>${s.text}</p></div>`).join("")) : ""}
    ${G && G.later ? sect("What became of it", `<p>${G.later}</p>`) : ""}
    ${p.epistles && p.epistles.length ? sect("Letters", `<p>${p.epistles.join("<br>")}</p>` +
        (letterChips ? `<div class="tags" style="margin-top:9px">${letterChips}</div>` : "")) :
        (letterChips ? sect("Letters", `<div class="tags">${letterChips}</div>`) : "")}
    ${p.people && p.people.length ? sect("People here", `<div class="tags">${p.people.map(x => {
        const pp = personByName(x);
        return pp ? `<span class="chip" data-person="${pp.name}">${x}</span>` : `<span class="tag">${x}</span>`;
      }).join("")}</div>
      <p style="font-size:12px;color:#8d9a9c;margin-top:8px">Gold names open a full entry — every other place
      they are named at, the passages, and who they travelled with. Plain names are people the record leaves
      unnamed or mentions only here.</p>`) : ""}
    ${sect("Your notes", `<textarea id="note" placeholder="Notes on ${p.name} — saved in this browser">${store.note(id)}</textarea>`)}
  `;
  $("#app").classList.add("detail-open");
  if (window.innerWidth <= 760) document.body.classList.remove("rail-open");
  $("#detail").scrollTop = 0;
  wirePanel();
  $("#btnMark").onclick = () => { store.toggle(id); panelHist.pop(); selectPlace(id, ctx); renderMap(); };
  $("#btnZoom").onclick = () => map.flyTo([p.lat, p.lng], 13, { duration: 1.1 });
  const n = $("#note"); if (n) n.addEventListener("input", () => store.note(id, n.value));
  if (G && G.wiki) loadPhoto(G.wiki);
  $("#detail").querySelectorAll(".occ").forEach(el => el.addEventListener("click", () => {
    const j = journeyOf(el.dataset.j), i = +el.dataset.i;
    state.active = j.id; state.year = j.timeline[i];
    if (!state.visible.has(j.id)) state.visible.add(j.id);
    panelHist.pop();
    selectPlace(id, { jid: j.id, i }); buildRail(); renderAll();
  }));
  setTimeout(() => map.invalidateSize(), 320);
  renderMap();
}
/* site photographs, pulled on demand from Wikipedia's public REST summary endpoint */
const photoCache = {};
function loadPhoto(title) {
  const slot = $("#photoslot"); if (!slot) return;
  const render = (d) => {
    const s = $("#photoslot"); if (!s || !d || !d.thumb) return;
    s.innerHTML = `<img class="sitephoto" src="${d.thumb}" alt="${d.title}" loading="lazy">
      <div class="photocred">${d.title} — photograph via Wikipedia;
      <a href="${d.url}" target="_blank" rel="noopener">source and licence</a></div>`;
  };
  if (photoCache[title]) return render(photoCache[title]);
  fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title))
    .then(r => r.ok ? r.json() : null)
    .then(j => {
      if (!j) return;
      const d = { title: j.title, url: (j.content_urls && j.content_urls.desktop && j.content_urls.desktop.page) || "",
        thumb: (j.originalimage && j.originalimage.source) || (j.thumbnail && j.thumbnail.source) || "" };
      photoCache[title] = d; render(d);
    }).catch(() => {});
}

function closeDetail() {
  state.place = null; panelHist.length = 0; $("#app").classList.remove("detail-open");
  setTimeout(() => { map.invalidateSize(); renderMap(); }, 320);
}

/* ---------- search ---------- */
const index = [];
Object.keys(P).forEach(id => {
  const p = P[id];
  index.push({ id, name: p.name, hay: [p.name, p.modern, p.region, p.dates, p.narrative, p.greco,
    p.archaeology, (p.people || []).join(" "), (p.epistles || []).join(" "),
    p.scripture.map(s => s.ref + " " + s.text).join(" ")].join(" ").toLowerCase(), p });
});
function snippet(text, q) {
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return text.slice(0, 120) + "…";
  const s = Math.max(0, i - 55), t = text.slice(s, i + q.length + 90);
  return (s ? "…" : "") + t.replace(new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>") + "…";
}
function runSearch(q) {
  q = q.trim().toLowerCase();
  const box = $("#results");
  if (q.length < 2) { box.classList.remove("on"); return; }
  const hits = index.filter(e => e.hay.indexOf(q) > -1).sort((a, b) => {
    const an = a.name.toLowerCase().indexOf(q) > -1 ? 0 : 1, bn = b.name.toLowerCase().indexOf(q) > -1 ? 0 : 1;
    return an - bn;
  }).slice(0, 24);
  if (!hits.length) { box.innerHTML = `<div class="res"><i>No match in the atlas.</i></div>`; box.classList.add("on"); return; }
  box.innerHTML = hits.map(h => {
    const p = h.p;
    const verse = p.scripture.find(s => (s.ref + " " + s.text).toLowerCase().indexOf(q) > -1);
    const body = verse ? verse.ref + " — " + verse.text
      : [p.narrative, p.greco, p.archaeology, (p.people || []).join(", ")].find(t => t && t.toLowerCase().indexOf(q) > -1) || p.narrative;
    return `<div class="res" data-id="${h.id}"><b>${p.name}</b><i>${p.modern} · ${p.region}</i>
      <p>${snippet(body, q)}</p></div>`;
  }).join("");
  box.classList.add("on");
  box.querySelectorAll(".res[data-id]").forEach(el => el.addEventListener("click", () => {
    const id = el.dataset.id, p = P[id];
    box.classList.remove("on"); $("#search").value = "";
    const occ = occurrences(id);
    if (occ.length) { state.active = occ[0].j.id; state.year = Math.max(state.year, occ[0].j.timeline[occ[0].i]); }
    selectPlace(id); buildRail(); renderAll();
    map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 7), { duration: .9 });
  }));
}
$("#search").addEventListener("input", e => runSearch(e.target.value));
document.addEventListener("click", e => {
  if (!e.target.closest(".searchwrap")) $("#results").classList.remove("on");
});

/* ---------- playback ---------- */
let raf = null, lastTick = 0;
const EV_MS = 1500;
function play() {
  state.playing = true; $("#btnPlay").textContent = "❙❙ Pause"; $("#btnPlay").classList.add("on");
  const ev = events();
  if (state.year >= ev[ev.length - 1].t - 0.001) state.year = ev[0].t;
  lastTick = performance.now();
  const step = (now) => {
    if (!state.playing) return;
    const dt = now - lastTick; lastTick = now;
    const list = events();
    let next = list.find(e => e.t > state.year + 1e-6);
    if (!next) { pause(); return; }
    const prevT = (list.filter(e => e.t <= state.year + 1e-6).pop() || list[0]).t;
    const span = Math.max(0.001, next.t - prevT);
    state.year += (dt / EV_MS) * span;
    if (state.year > next.t) state.year = next.t;
    renderAll();
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
}
function pause() {
  state.playing = false; $("#btnPlay").textContent = "▶ Play"; $("#btnPlay").classList.remove("on");
  if (raf) cancelAnimationFrame(raf);
}
$("#btnPlay").onclick = () => state.playing ? pause() : play();
$("#scrub").addEventListener("input", e => { pause(); state.year = +e.target.value; renderAll(); });

function stepEvent(dir) {
  pause();
  const list = events();
  const next = dir > 0 ? list.find(e => e.t > state.year + 1e-4)
    : list.filter(e => e.t < state.year - 1e-4).pop();
  if (!next) return;
  state.year = next.t; state.active = next.j.id;
  buildRail(); renderAll();
  selectPlace(next.s.place, { jid: next.j.id, i: next.i });
}
document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (e.code === "Space") { e.preventDefault(); state.playing ? pause() : play(); }
  if (e.key === "ArrowRight") { e.preventDefault(); stepEvent(1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); stepEvent(-1); }
  if (e.key === "Escape") { closeModal(); closeDetail(); }
});

/* ---------- modals ---------- */
function openModal(title, html) { $("#mtitle").textContent = title; $("#mbody").innerHTML = html; $("#modal").classList.add("on"); }
function closeModal() { $("#modal").classList.remove("on"); }
$("#mclose").onclick = closeModal;
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });

const placeOptions = (sel) => Object.keys(P).sort((a, b) => P[a].name.localeCompare(P[b].name))
  .map(id => `<option value="${id}"${id === sel ? " selected" : ""}>${P[id].name}</option>`).join("");

$("#btnCompare").onclick = () => {
  const opts = (sel) => J.map(j => `<option value="${j.id}"${j.id === sel ? " selected" : ""}>${j.name} (${j.years})</option>`).join("");
  openModal("Compare two itineraries", `
    <div class="cmpgrid">
      <div><select id="cA">${opts("j2")}</select><div class="cmpcol" id="outA"></div></div>
      <div><select id="cB">${opts("j3")}</select><div class="cmpcol" id="outB"></div></div>
    </div>`);
  const letters = { pre: [], j1: ["Galatians (probably, soon after)"], council: [], j2: ["1 Thessalonians", "2 Thessalonians"],
    j3: ["1 Corinthians", "2 Corinthians", "Romans"], rome: ["Ephesians", "Philippians", "Colossians", "Philemon"],
    j4: ["1 Timothy", "Titus", "2 Timothy"] };
  const draw = (which) => {
    const j = journeyOf($("#c" + which).value);
    const sea = j.stops.filter((s, i) => i && s.mode === "sea"), land = j.stops.filter((s, i) => i && s.mode === "land");
    const seaKm = j.stops.reduce((t, s, i) => t + (i && s.mode === "sea" ? legKm(j, i) : 0), 0);
    const landKm = j.stops.reduce((t, s, i) => t + (i && s.mode === "land" ? legKm(j, i) : 0), 0);
    const row = (a, b) => `<div class="statrow"><span>${a}</span><span>${b}</span></div>`;
    $("#out" + which).innerHTML = `<h4 style="color:${j.color}">${j.name}</h4>
      <div class="om" style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:#8d9a9c;margin-bottom:10px">${j.acts}</div>
      <p style="font-size:13px;line-height:1.6;color:#ded4c0">${j.summary}</p>
      ${row("Dates", j.years)} ${row("Duration", j.stats.duration)}
      ${row("Stops recorded", j.stops.length)}
      ${row("Total distance", "~" + fmtDist(journeyKm(j)))}
      ${row("By sea", sea.length + " passages · ~" + fmtDist(seaKm))}
      ${row("Overland", land.length + " stages · ~" + fmtDist(landKm))}
      ${row("Est. travelling time", Math.round(landKm / 27 + seaKm / 130) + " days in motion")}
      ${row("Letters from this period", letters[j.id].length ? letters[j.id].join("<br>") : "—")}
      ${row("Companions", j.stats.companions)}
      ${row("Furthest point", (() => { let f = j.stops[0]; j.stops.forEach(s => { if (P[s.place].lng < P[f.place].lng) f = s; }); return P[f.place].name; })())}`;
  };
  ["A", "B"].forEach(w => { $("#c" + w).onchange = () => draw(w); draw(w); });
};

$("#btnCalc").onclick = () => {
  const S = window.PAUL_SEASONS;
  const now = { m: 3, mode: "sea" };
  openModal("Distance, season & travel time", `
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:6px">
      <select id="dA">${placeOptions("corinth")}</select>
      <span style="color:#8d9a9c">to</span>
      <select id="dB">${placeOptions("ephesus")}</select>
      <select id="dM"><option value="sea">by sea</option><option value="land">overland</option></select>
    </div>
    <div class="season" id="months">${S.months.map((m, i) =>
      `<span class="mon" data-m="${i}">${m.slice(0, 3)}</span>`).join("")}</div>
    <div class="calcout" id="dOut" style="margin-top:18px"></div>
    <p style="font-size:12px;color:#8d9a9c;line-height:1.6;margin-top:16px" id="dNote"></p>
    <p style="font-size:12px;color:#8d9a9c;line-height:1.6">
      Distance is measured great-circle between the two sites, so real road and coasting routes were longer.
      Rates follow Casson and the ORBIS model: 25–30 km a day on foot; 100–150 km a day under sail with a
      working wind, and as little as 30–50 km beating to windward. The seasonal model applies the etesian
      northerlies of high summer and the closed sea of winter — which together explain why the westward
      autumn voyage of Acts 27 failed where a spring run succeeded.</p>`);
  const bearingOf = (a, b) => {
    const rad = Math.PI / 180, y = Math.sin((b.lng - a.lng) * rad) * Math.cos(b.lat * rad);
    const x = Math.cos(a.lat * rad) * Math.sin(b.lat * rad) -
      Math.sin(a.lat * rad) * Math.cos(b.lat * rad) * Math.cos((b.lng - a.lng) * rad);
    return (Math.atan2(y, x) / rad + 360) % 360;
  };
  const draw = () => {
    const a = P[$("#dA").value], b = P[$("#dB").value], mode = $("#dM").value;
    now.mode = mode;
    const km = Math.round(haversine(a, b));
    const brg = bearingOf(a, b);
    const season = (mode === "sea" ? S.sea : S.land)[now.m];
    const summer = now.m >= 5 && now.m <= 7;
    // etesians blow from the north-west: penalise northward and westward headings in high summer
    const headwind = mode === "sea" && summer && (brg > 250 || brg < 20);
    let lo = mode === "sea" ? km / 150 : km / 30, hi = mode === "sea" ? km / 100 : km / 25;
    if (headwind) { lo = km / 60; hi = km / 30; }
    if (season.state === "risky") { hi *= 1.35; }
    const dirs = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];
    const dir = dirs[Math.round(brg / 45) % 8];
    $("#months").querySelectorAll(".mon").forEach(el => {
      const st = (mode === "sea" ? S.sea : S.land)[+el.dataset.m].state;
      el.className = "mon " + st + (+el.dataset.m === now.m ? " on" : "");
    });
    $("#dOut").innerHTML = season.state === "closed" && mode === "sea"
      ? `<b>${a.name}</b> to <b>${b.name}</b> — ${fmtDist(km)} in a straight line, heading ${dir}.<br>
         <b style="color:#d98a7c">No sailing in ${S.months[now.m]}.</b> The sea was closed; the journey waits for spring.`
      : `<b>${a.name}</b> to <b>${b.name}</b> — ${fmtDist(km)} in a straight line, heading ${dir}.<br>
         ${mode === "sea" ? "Under sail" : "On foot"} in ${S.months[now.m]}:
         about <b>${Math.max(1, Math.round(lo))}–${Math.max(2, Math.round(hi))} days</b>
         ${headwind ? "<span style=\"color:#d9b45c\">beating against the etesian northerlies</span>" :
           mode === "sea" ? "with a working wind" : "walking daylight hours"}.`;
    $("#dNote").innerHTML = `<b style="color:#cbc2b0">${S.months[now.m]}, ${mode === "sea" ? "by sea" : "overland"}:</b> ${season.note}`;
  };
  ["dA", "dB", "dM"].forEach(id => $("#" + id).onchange = draw);
  $("#months").querySelectorAll(".mon").forEach(el => el.addEventListener("click", () => {
    now.m = +el.dataset.m; draw();
  }));
  draw();
};

$("#btnMarks").onclick = () => {
  const ids = Object.keys(store.d.marks).sort((a, b) => store.d.marks[b] - store.d.marks[a]);
  const noted = Object.keys(store.d.notes).filter(id => ids.indexOf(id) < 0);
  const row = (id) => `<div class="bmk" data-id="${id}"><div class="dot" style="width:8px;height:8px;border-radius:50%;background:#c9a227;margin-top:6px"></div>
    <div><div class="bnm">${P[id] ? P[id].name : id}</div>
    <div class="bnote">${store.note(id) ? store.note(id).replace(/</g, "&lt;") : "<i>no note</i>"}</div></div></div>`;
  openModal("Bookmarks & notes", (ids.length || noted.length)
    ? ids.concat(noted).map(row).join("")
    : `<p style="color:#8d9a9c;font-size:13.5px;line-height:1.6">No bookmarks yet. Open any city and use
       ☆ Bookmark, or type in its notes field — both are kept in this browser.</p>`);
  $("#mbody").querySelectorAll(".bmk").forEach(el => el.addEventListener("click", () => {
    closeModal(); selectPlace(el.dataset.id);
    map.flyTo([P[el.dataset.id].lat, P[el.dataset.id].lng], Math.max(map.getZoom(), 7), { duration: .9 });
  }));
};

/* sources & method */
$("#btnSources").onclick = () => {
  const M = window.PAUL_METHOD; if (!M) return;
  openModal("Sources & method", `<div class="help">
    <p>${M.intro}</p>
    <h3 style="margin:22px 0 10px;font-size:19px">How the atlas is built</h3>
    ${M.rules.map(r => `<div class="prow"><h4>${r.h}</h4><p>${r.t}</p></div>`).join("")}
    <h3 style="margin:24px 0 10px;font-size:19px">How confidence is graded</h3>
    <p style="font-size:12.5px;color:#8d9a9c;margin:0 0 12px">Every city's Gazetteer block carries one of
      these grades and the evidence behind it.</p>
    ${M.confidence.map(c => `<div class="prow" style="border-left:3px solid ${c.c};padding-left:11px">
      <h4 style="color:${c.c}">${c.g}</h4><p>${c.t}</p></div>`).join("")}
    <h3 style="margin:24px 0 10px;font-size:19px">The five fixed points</h3>
    <p>${M.fixed}</p>
    <h3 style="margin:24px 0 10px;font-size:19px">Works consulted</h3>
    ${M.works.map(w => `<h4 style="margin:16px 0 7px;font-family:'IBM Plex Mono',monospace;font-size:10px;
      letter-spacing:.14em;text-transform:uppercase;color:#c9a227">${w.sect}</h4>
      <ul style="margin:0;padding-left:18px">${w.items.map(i =>
        `<li style="font-size:13px;line-height:1.6;color:#ded4c0;margin-bottom:6px">${i}</li>`).join("")}</ul>`).join("")}
    <h3 style="margin:24px 0 10px;font-size:19px">Known limits</h3>
    <ul style="margin:0;padding-left:18px">${M.limits.map(l =>
      `<li style="font-size:13px;line-height:1.6;color:#ded4c0;margin-bottom:7px">${l}</li>`).join("")}</ul>
    <p style="margin-top:20px;font-size:12.5px;color:#8d9a9c">Errors are the author's, not the sources'.
      If you find one, it is worth reporting — four review passes have already corrected several.</p>
  </div>`);
};

$("#btnAbout").onclick = () => openModal("About this atlas", `<div class="help">
  <p style="color:#c9a227"><b>This is a beta.</b> Routes, dates and articles are still being checked and
  extended. Treat what you read here as a working draft and verify against your own sources.</p>

  <h3 style="margin:20px 0 8px;font-size:19px">What this is</h3>
  <p>An interactive atlas of the journeys of Paul, built for a reader who wants to study rather than skim:
  every stop on every itinerary with what happened there, the city's Greco-Roman history, what survives on
  the ground today, the people named, the letters written or received, the travel leg with its distance and
  sailing season, and the Authorized (King James) text — with the full chapter a click away. Around it sit a
  people index, an epistle layer, three competing chronologies, a reading plan through Acts, a Roman road and
  province overlay, and the 52-week Come, Follow Me curriculum wired into the map.</p>
  <p>Two rules govern the data. Geography comes from real coordinates and attested sites, never from drawing;
  where a site identification is disputed the gazetteer says so and grades its confidence. And where the
  evidence is thin — a road alignment between known stations, a letter's place of origin, the date of an
  event — the atlas states the uncertainty rather than smoothing it over.</p>

  <h3 style="margin:22px 0 8px;font-size:19px">Getting started</h3>
  <p>Press <b>?</b> in the toolbar for the full guide. In brief: click any city marker to open its article;
  drag the timeline to watch the routes draw themselves, or press <b>Play</b>; use the left rail to focus one
  itinerary, walk Acts in order, or pick a Come, Follow Me week; and search for a city, a person, a verse or a
  phrase from any article.</p>

  <h3 style="margin:22px 0 8px;font-size:19px">Taylor Halverson, Ph.D.</h3>
  <p style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.08em;color:#8d9a9c;
    text-transform:uppercase;margin:-4px 0 12px">Author · Teacher · Tour leader · Scripture scholar</p>
  <p>Taylor Halverson is a scholar of scripture and a teacher of learners — an entrepreneurship professor in
  the BYU Marriott School of Business who spends his working life helping people find and act on the best
  ideas and tools available to them.</p>
  <p>He is the author and editor of more than fifty books and nearly a thousand articles and blog posts, and a
  builder of scripture study resources: the ScripturePlus app with Scripture Central, whose scripture YouTube
  channel he co-hosted to more than fifty million views, and BYU's Virtual Scripture Group, whose team spent
  more than five years reconstructing New Testament Jerusalem in three dimensions. This atlas of Paul's
  journeys belongs to that same body of work — tools made so that ordinary readers can see what specialists
  see.</p>
  <p>He leads tours to Israel and the Middle East, China, India, Central America, Europe, and the national
  parks of the American West, where he unfolds how geology, geography, civilization, and scriptural texts
  created our beautiful present day.</p>

  <h4 style="margin:18px 0 6px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;
    text-transform:uppercase;color:#c9a227">Academic training</h4>
  <p style="margin:0">Ph.D., Judaism &amp; Christianity in Antiquity — Indiana University<br>
  Ph.D., Instructional Systems Technology — Indiana University<br>
  M.A., Biblical Studies — Yale University<br>
  B.A., Ancient Near Eastern Studies — Brigham Young University</p>
  <p style="color:#8d9a9c">Two doctorates in two separate fields — the ancient world, and the design of
  learning. Both of them are in this tool.</p>

  <h4 style="margin:18px 0 6px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;
    text-transform:uppercase;color:#c9a227">Elsewhere</h4>
  <div class="tags">
    <a class="chip" href="https://insights.taylorhalverson.com" target="_blank" rel="noopener">insights.taylorhalverson.com ↗</a>
    <a class="chip" href="https://books.taylorhalverson.com" target="_blank" rel="noopener">books.taylorhalverson.com ↗</a>
    <a class="chip" href="https://exodustours.com" target="_blank" rel="noopener">exodustours.com ↗</a>
  </div>

  <h3 style="margin:22px 0 8px;font-size:19px">Credits</h3>
  <p>Scripture text: the Authorized (King James) Version, public domain. Base mapping: Esri World
  Topographic, World Imagery and Shaded Relief tiles. Site photographs: Wikipedia's public REST endpoint, loaded on demand.
  Come, Follow Me background resources: Taylor Halverson's
  <a href="https://insights.taylorhalverson.com/p/new-testament-resources" target="_blank" rel="noopener">New
  Testament Resource Hub</a>. Ancient testimony is quoted or summarised from Strabo, Josephus, Tacitus,
  Suetonius, Pausanias, Pliny and the standard inscription corpora, each attributed in the city article where
  it appears.</p>
</div>`);

$("#btnHelp").onclick = () => openModal("How to use this atlas", `<div class="help">
  <p style="color:#c9a227"><b>This is a beta.</b> The routes, dates and articles are still being checked and
  extended; treat anything here as a working draft rather than a settled edition, and verify against your
  own sources before teaching from it.</p>
  <p><b>The timeline is the spine.</b> Drag the scrubber, or press <kbd>Space</kbd> to watch the journeys
  draw themselves in sequence; <kbd>←</kbd> and <kbd>→</kbd> step one recorded stop at a time. Routes appear
  only up to the year you are standing in, so you see what Paul had done by any given date.</p>
  <p><b>The left rail lists the seven itineraries.</b> Click a name to focus it and fit it on the map;
  click its coloured dot to hide it. Click any stop to open that city.</p>
  <p><b>Every city panel carries eight things:</b> where it appears in the itineraries, what happened there,
  how he got there and how long it took, the scripture in the Authorized Version, the city's own
  Greco-Roman history, what survives archaeologically, the letters tied to it, and the people met there.
  Bookmark it or keep notes — both persist in this browser.</p>
  <p><b>Search reaches everything</b> — city names, people, epistles, archaeology, and the full text of
  every verse quoted. Try <i>proconsul</i>, <i>Aquila</i>, <i>Euroclydon</i>, or <i>mosaic</i>.</p>
  <p><b>Read Acts</b> (second tab in the left rail) walks Acts 13–28 in order with the epistles slotted in
  where they were written; each passage moves the map and timeline to the right place and adds a study
  question. <b>People</b> is a searchable roster of everyone named, linked to their cities.
  <b>Letters</b> lists all thirteen epistles — and the <i>Epistles</i> map layer draws each one as an arc
  from where it was written to where it went. <b>Chronology</b> sets three published dating schemes side
  by side with the evidence each rests on.</p>
  <p><b>Everything cross-links into the right-hand panel.</b> A person's name in <i>People here</i> opens
  their own entry — every other place they are named, the passages, the itineraries they appear on, and who
  they were named alongside; a letter opens its own entry with its origin and destination as links. Rows in
  <b>People</b>, <b>Letters</b> and <b>Companions</b> open there too, and a row in <b>Chronology</b> moves the
  timeline to that year. <b>← Back</b> retraces your steps through the panel.</p>
  <p><b>Come, Follow Me.</b> The third rail tab lists all 52 weeks of the New Testament curriculum. Pick a
  week and the map enters <i>lesson focus</i>: it flies to the theatre of that reading, brightens the places
  and itineraries the block covers, dims everything else, and opens a lesson card with the reading, a Gospel
  Library link, the letters in view, the Acts passages set there, and two discussion questions. Step weeks with
  the arrows on the badge over the map; ✕ leaves focus. Every city panel also lists which weeks are set there.
  Weeks marked <i>outside this atlas</i> are the Gospels and general epistles — this atlas maps Paul, so those
  weeks frame the region and say plainly that the sites are not in the gazetteer.</p>
  <p><b>Sources</b> gives the bibliography, the rules the atlas is built on, how site-identification
  confidence is graded, and the five external anchors the whole chronology hangs from. <b>Print</b> makes
  study sheets — one Letter page per city or per itinerary, with your own notes and ruled space, ready for a
  notebook or a PDF. <b>Copy link</b> copies a permalink to exactly the view you are looking at: the city,
  the Come, Follow Me week, the itinerary and the year all travel in the address, so you can send a class
  straight to one place (<i>…#philippi</i>, <i>…#week=30</i>, <i>…#corinth&amp;week=34</i>).</p>
  <p><b>The basemap</b> cycles with the <b>Map</b> button: topographic, satellite imagery, and shaded relief
  with no printed names at all — the last two are often the clearest way to read ancient terrain, since only
  this atlas's own labels appear. <b>Present</b> is for a classroom screen: heavier routes, larger markers and
  labels, and article text at projection size. Both choices are remembered.</p>
  <p><b>Map layers.</b> Roman roads are traced through cities and road-stations named in the ancient
  itineraries. Provinces are labelled but deliberately <i>not</i> outlined: provincial boundaries moved
  repeatedly in this century and no trustworthy geometry for them exists.</p>
  <p><b>Under the timeline</b> run the emperors, the governors of Judea and the dated events of the wider
  world — click any of them to jump the map to that year and read the note. <b>Companions</b> charts which
  named person appears on which itinerary. <b>Distance</b> now takes a month: the sea was legally and
  practically closed from November to March, and the summer etesian northerlies made westward runs crawl.
  The <b>km</b> button cycles kilometres, Roman miles (1,479 m) and stadia (185 m).</p>
  <p><b>Reading the text.</b> 'Read the full passage' in any city panel, in a reading-plan entry, or beside
  a person's references opens the whole passage in the Authorized Version, with every place name in it
  clickable. The text is fetched from bible-api.com the first time and then cached in your browser, so an
  internet connection is needed only once per passage.</p>
  <p><b>Compare</b> puts two journeys side by side with distances, sea-versus-land mileage, companions and
  the letters written in each period. <b>Distance</b> measures between any two sites at ancient rates of travel.</p>
  <p style="color:#8d9a9c;font-size:12.5px"><b>On the dating.</b> Absolute years are reconstructions.
  The fixed points are Gallio's proconsulship of Achaia in AD 51–52 (the Delphi inscription, cf. Acts 18:12),
  the death of Aretas IV c. AD 40 (2 Cor 11:32), and Festus succeeding Felix c. AD 59. Everything else is
  counted forward and backward from those, so dates here may differ by a year or two from other schemes.
  The final journey is shown dashed because it rests on the Pastoral Epistles and on Clement of Rome
  rather than on Acts.</p></div>`);

/* ---------- overlay layers: roads, provinces, epistles ---------- */
const layerState = { roads: false, provinces: false, letters: false };
const roadLayer = L.layerGroup(), provLayer = L.layerGroup(), letterLayer = L.layerGroup();

(window.PAUL_ROADS || []).forEach(r => {
  L.polyline(r.pts, { color: "#8a6a2f", weight: 2.4, opacity: .55, dashArray: "1 7",
    lineCap: "round" }).bindTooltip(`<b style="font-family:'EB Garamond',serif;font-size:14px">${r.name}</b>
      <div style="max-width:250px;font-size:11.5px;line-height:1.5;color:#cbc2b0;margin-top:3px">${r.note}</div>`,
    { sticky: true, className: "letterlabel" }).addTo(roadLayer);
});
(window.PAUL_PROVINCES || []).forEach(p => {
  L.marker([p.lat, p.lng], { interactive: false, icon: L.divIcon({ className: "provlabel",
    html: p.name, iconSize: null }) }).addTo(provLayer);
});
const shortCarrier = (c) => {
  if (!c || /^Unnamed/i.test(c)) return "";                     // no courier named
  const hedge = /^Probably\s+/i.test(c);
  let n = c.replace(/^Probably\s+/i, "").split(",")[0]          // drop the hedge and any epithet
    .replace(/\s+himself$/i, "").replace(/\s+and two brethren$/i, " & others")
    .replace(/\s+and\s+/i, " & ").replace(/\s+or\s+/i, " / ");
  return "by " + n + (hedge ? "?" : "");
};
const letterTags = [], letterLines = {};
(window.PAUL_LETTERS || []).forEach((l, li) => {
  const a = P[l.from], b = P[l.to]; if (!a || !b) return;
  const pts = curve(a, b, "sea");
  const line = L.polyline(pts, { color: "#b06a8f", weight: 2, opacity: .8,
    dashArray: "6 5", className: "letterarc" }).addTo(letterLayer);
  letterLines[l.id] = line;
  const mid = pts[[9, 13, 17, 11, 15][li % 5]];
  const tag = L.marker(mid, { icon: L.divIcon({ className: "letterlabel",
    html: `${l.name}${shortCarrier(l.carrier) ? `<span class="carrier">${shortCarrier(l.carrier)}</span>` : ""}`,
    iconSize: null }) }).addTo(letterLayer);
  letterTags.push(tag);
  const open = () => { closeModal(); showLetterPanel(l.id); };
  line.on("click", open); tag.on("click", open);
  line.bindTooltip(`<b>${l.name}</b> — written from ${a.name} to ${b.name}, ${l.date}` +
    (l.carrier && !/^Unnamed/i.test(l.carrier) ? `<br>carried by ${l.carrier}` : ""), { sticky: true, className: "letterlabel" });
});
function updateLetterLabels() {
  if (!layerState.letters) return;
  const kept = [];
  letterTags.forEach(t => {
    const el = t.getElement(); if (!el) return;
    el.style.display = "";
    const r = el.getBoundingClientRect();
    const clash = kept.some(k => !(r.right < k.left - 3 || r.left > k.right + 3 ||
      r.bottom < k.top - 2 || r.top > k.bottom + 2));
    if (clash) el.style.display = "none"; else kept.push(r);
  });
}
function setLayer(key, on) {
  layerState[key] = on;
  const g = key === "roads" ? roadLayer : key === "provinces" ? provLayer : letterLayer;
  on ? g.addTo(map) : map.removeLayer(g);
  if (key === "letters" && on) setTimeout(updateLetterLabels, 60);
}
map.on("zoomend", updateLetterLabels);
map.on("moveend", () => setTimeout(updateLetterLabels, 100));
document.querySelectorAll("#layers input[data-layer]").forEach(cb =>
  cb.addEventListener("change", () => setLayer(cb.dataset.layer, cb.checked)));

function showLetter(id) {
  const l = (window.PAUL_LETTERS || []).find(x => x.id === id); if (!l) return;
  openModal(l.name, `
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.08em;color:#8d9a9c;margin-bottom:14px">
      ${l.date} · WRITTEN FROM ${P[l.from].name.toUpperCase()} · SENT TO ${P[l.to].name.toUpperCase()}</div>
    ${l.carrier ? `<div class="sect"><h4>Carried by</h4><p style="font-size:15px;color:#e7c9d8;
      font-family:'EB Garamond',serif;margin:0 0 6px">${l.carrier}</p>
      <p style="font-size:12.5px;color:#8d9a9c;line-height:1.6;margin:0">${l.carrierNote}</p></div>` : ""}
    <p style="font-size:14px;line-height:1.7;color:#ded4c0;text-wrap:pretty">${l.occasion}</p>
    <div class="verse" style="margin:18px 0"><div class="ref">${l.key}</div><p>${l.keyText}</p></div>
    <p style="font-size:12.5px;line-height:1.6;color:#8d9a9c">${l.note}</p>
    <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
      <span class="chip" data-go="${l.from}">Open ${P[l.from].name}</span>
      <span class="chip" data-go="${l.to}">Open ${P[l.to].name}</span></div>`);
  $("#mbody").querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => {
    closeModal(); selectPlace(el.dataset.go);
    map.flyTo([P[el.dataset.go].lat, P[el.dataset.go].lng], Math.max(map.getZoom(), 6), { duration: .9 });
  }));
}

$("#btnLetters").onclick = () => {
  openModal("The thirteen letters", `
    <p style="font-size:13px;line-height:1.65;color:#8d9a9c;margin:0 0 16px">
      Where each letter was written and where it went. Turn on <b style="color:#cbc2b0">Epistles — written &amp; sent</b>
      in the map layers to see them drawn as arcs.</p>
    <div class="plist">${(window.PAUL_LETTERS || []).map(l => `<div class="prow" data-openl="${l.id}" style="cursor:pointer">
      <h4 style="color:#e7c9d8">${l.name} <span style="font-size:11px;color:#8d9a9c">— open →</span></h4>
      <div class="prole">${l.date} · from ${P[l.from].name} → to ${P[l.to].name}</div>
      <p>${l.occasion}</p>
      <div class="pref">${l.key} — “${l.keyText}”</div>
    </div>`).join("")}</div>`);
  $("#mbody").querySelectorAll("[data-openl]").forEach(el =>
    el.addEventListener("click", () => { closeModal(); showLetterPanel(el.dataset.openl); }));
};

/* ---------- people index ---------- */
$("#btnPeople").onclick = () => {
  const people = window.PAUL_PEOPLE || [];
  openModal("People index", `
    <input id="pq" placeholder="Filter by name, role, place or reference…" autocomplete="off"
      style="width:100%;background:#0e1418;border:1px solid #2b3a42;color:#f2e9d6;padding:9px 11px;
      border-radius:3px;font-family:inherit;font-size:13px;margin-bottom:16px">
    <div class="plist" id="plist"></div>`);
  const draw = (q) => {
    q = (q || "").trim().toLowerCase();
    const rows = people.filter(pp => !q || (pp.name + " " + pp.role + " " + pp.note + " " +
      pp.refs.join(" ") + " " + pp.places.map(id => P[id] ? P[id].name : "").join(" ")).toLowerCase().indexOf(q) > -1);
    $("#plist").innerHTML = rows.length ? rows.map(pp => `<div class="prow" data-open="${pp.name}" style="cursor:pointer">
      <h4 style="color:#e7d7b0">${pp.name} <span style="font-size:11px;color:#8d9a9c">— open →</span></h4><div class="prole">${pp.role}</div>
      <p>${pp.note}</p>
      <div style="margin:6px 0">${pp.places.map(id => P[id]
        ? `<span class="chip" data-go="${id}">${P[id].name}</span>` : "").join("")}</div>
      <div class="pref">${pp.refs.join(" · ")}</div></div>`).join("")
      : `<p style="color:#8d9a9c;font-size:13px">No one by that name in the atlas.</p>`;
    $("#plist").querySelectorAll("[data-open]").forEach(el => el.addEventListener("click", e => {
      if (e.target.closest("[data-go]")) return;
      closeModal(); showPerson(el.dataset.open);
    }));
    $("#plist").querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => {
      closeModal(); selectPlace(el.dataset.go);
      map.flyTo([P[el.dataset.go].lat, P[el.dataset.go].lng], Math.max(map.getZoom(), 7), { duration: .9 });
    }));
  };
  $("#pq").addEventListener("input", e => draw(e.target.value));
  draw("");
};

/* ---------- chronology ---------- */
$("#btnDates").onclick = () => {
  const C = window.PAUL_CHRONOLOGY;
  openModal("Chronology — three reconstructions", `
    <p style="font-size:13px;line-height:1.65;color:#ded4c0;margin:0 0 8px">
      Not one date in Paul's life is given in the New Testament. Every year below is reconstructed from
      a handful of external fixed points. The middle column is the scheme this map uses.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin:12px 0 18px">
      ${C.schemes.map(s => `<div style="flex:1 1 220px"><div style="font-family:'IBM Plex Mono',monospace;
        font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${s.id === "std" ? "#c9a227" : "#8d9a9c"}">
        ${s.label}</div><div style="font-size:12px;line-height:1.55;color:#ded4c0;margin-top:4px">${s.note}</div></div>`).join("")}
    </div>
    <div style="overflow-x:auto"><table class="chron">
      <thead><tr><th>Event</th><th>Early</th><th>Standard (used here)</th><th>Late</th><th>Evidence</th></tr></thead>
      <tbody>${C.rows.map(r => `<tr class="std" data-y="${r.std}" style="cursor:pointer"><td class="ev">${r.event}</td>
        <td class="yr">${r.early}</td><td class="yr std">${r.std}</td><td class="yr">${r.late}</td>
        <td class="bs">${r.basis}</td></tr>`).join("")}</tbody></table></div>
    <h3 style="margin:24px 0 10px;font-size:19px">The fixed points</h3>
    ${C.anchors.map(a => `<div class="prow"><h4>${a.name}</h4><p>${a.text}</p></div>`).join("")}`);
  $("#mbody").querySelectorAll("tr[data-y]").forEach(tr => tr.addEventListener("click", () => {
    const m = tr.dataset.y.match(/(\d{2})/g);
    if (!m) return;
    const a = +m[0], b = m[1] != null ? +m[1] : null;
    const y = (b != null && b - a > 0 && b - a <= 5) ? (a + b) / 2 : a + .4;
    pause(); state.year = Math.max(T0, Math.min(T1, y)); renderAll(); closeModal();
    $("#eventlabel").innerHTML = `<b>${tr.querySelector(".ev").textContent}</b>
      <span style="color:#8d9a9c">— ${tr.dataset.y} on the standard scheme. ${tr.querySelector(".bs") ? tr.querySelector(".bs").textContent : ""}</span>`;
  }));
};

/* ---------- reading plan ---------- */
const READ = window.PAUL_READING || [];
let readIdx = -1;
function buildReading() {
  $("#readlist").innerHTML = READ.map((r, i) => `<div class="ritem${i === readIdx ? " on" : ""}" data-r="${i}">
    <div class="rref">${r.ref}</div><div class="rttl">${r.title}</div>
    <div class="rask">${r.ask}<div style="margin-top:8px"><span class="chip" data-read="${i}">Read the passage — full KJV text</span></div></div></div>`).join("");
  $("#readlist").querySelectorAll(".ritem").forEach(el =>
    el.addEventListener("click", () => gotoReading(+el.dataset.r)));
}
function gotoReading(i) {
  if (i < 0 || i >= READ.length) return;
  readIdx = i;
  const r = READ[i];
  pause();
  if (r.jid) { state.active = r.jid; state.visible.add(r.jid); }
  if (r.t) state.year = r.t;
  buildRail(); buildReading(); renderAll();
  selectPlace(r.place);
  const p = P[r.place];
  if (p) map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 6), { duration: .9 });
  const el = $(`#readlist .ritem[data-r="${i}"]`);
  if (el) $("#rail").scrollTop = Math.max(0, el.offsetTop - 160);
  document.body.classList.remove("rail-open");
}
$("#readPrev").onclick = () => gotoReading(readIdx <= 0 ? 0 : readIdx - 1);
$("#readNext").onclick = () => gotoReading(readIdx + 1 >= READ.length ? READ.length - 1 : readIdx + 1);

/* rail tabs */
document.querySelectorAll(".rtab").forEach(tab => tab.addEventListener("click", () => {
  document.querySelectorAll(".rtab").forEach(t => t.classList.toggle("on", t === tab));
  document.querySelectorAll(".tabpane").forEach(p => p.hidden = p.dataset.pane !== tab.dataset.tab);
}));

/* mobile drawer + tool relocation */
$("#btnMenu").onclick = () => document.body.classList.toggle("rail-open");
$("#map").addEventListener("pointerdown", () => document.body.classList.remove("rail-open"));
const toolsEl = $("#tools"), headerEl = document.querySelector("header"), railEl = $("#rail");
function placeTools() {
  const narrow = window.innerWidth <= 1150;
  if (narrow && toolsEl.parentElement !== railEl) railEl.insertBefore(toolsEl, railEl.firstChild);
  if (!narrow && toolsEl.parentElement !== headerEl) headerEl.appendChild(toolsEl);
}
placeTools();
window.addEventListener("resize", placeTools);

/* ---------- KJV passage reader (text fetched on demand, cached locally) ---------- */
const PLACE_ALIASES = [
  ["Antioch in Pisidia", "antiochPisidia"], ["Antioch of Pisidia", "antiochPisidia"],
  ["Fair havens", "fairHavens"], ["fair havens", "fairHavens"], ["Samothracia", "samothrace"],
  ["Cenchrea", "cenchreae"], ["Colosse", "colossae"], ["Ptolemais", "ptolemais"], ["Seleucia", "seleucia"],
  ["Amphipolis", "amphipolis"], ["Apollonia", "apollonia"], ["Thessalonica", "thessalonica"],
  ["Jerusalem", "jerusalem"], ["Damascus", "damascus"], ["Antioch", "antioch"], ["Tarsus", "tarsus"],
  ["Caesarea", "caesarea"], ["Corinth", "corinth"], ["Ephesus", "ephesus"], ["Athens", "athens"],
  ["Philippi", "philippi"], ["Berea", "berea"], ["Troas", "troas"], ["Miletus", "miletus"],
  ["Melita", "malta"], ["Syracuse", "syracuse"], ["Rhegium", "rhegium"], ["Puteoli", "puteoli"],
  ["Rome", "rome"], ["Tyre", "tyre"], ["Sidon", "sidon"], ["Patara", "patara"], ["Rhodes", "rhodes"],
  ["Coos", "cos"], ["Samos", "samos"], ["Chios", "chios"], ["Mitylene", "mitylene"], ["Assos", "assos"],
  ["Derbe", "derbe"], ["Lystra", "lystra"], ["Iconium", "iconium"], ["Perga", "perga"],
  ["Attalia", "attalia"], ["Paphos", "paphos"], ["Salamis", "salamis"], ["Neapolis", "neapolis"],
  ["Myra", "myra"], ["Cnidus", "cnidus"], ["Clauda", "clauda"], ["Nicopolis", "nicopolis"],
  ["Crete", "crete"], ["Arabia", "arabia"], ["Spain", "spain"]
];
function linkPlaces(text) {
  let out = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const used = [];
  PLACE_ALIASES.forEach(([word, id]) => {
    if (!P[id] || used.indexOf(id) > -1) return;
    const re = new RegExp("(^|[^A-Za-z>])(" + word + ")\\b", "g");
    if (re.test(out)) { used.push(id); out = out.replace(re, `$1<span class="pl" data-pl="${id}">$2</span>`); }
  });
  return out;
}
function openPassage(ref) {
  if (!ref) return;
  const q = ref.replace(/[–—]/g, "-").trim();
  const cacheKey = "paulAtlas.kjv." + q;
  openModal(q + " — Authorized (King James) Version",
    `<div class="passage" id="ptext" style="color:#8d9a9c">Fetching the text…</div>`);
  const render = (data) => {
    const box = $("#ptext"); if (!box) return;
    box.style.color = "";
    box.innerHTML = (data.verses || []).map(v =>
      `<span class="vn">${v.chapter}:${v.verse}</span>${linkPlaces(v.text.trim())} `).join("") +
      `<div style="margin-top:18px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:#63757c;
        letter-spacing:.06em">${data.reference || q} · KING JAMES VERSION (PUBLIC DOMAIN) · TEXT VIA BIBLE-API.COM</div>`;
    box.querySelectorAll("[data-pl]").forEach(el => el.addEventListener("click", () => {
      const id = el.dataset.pl; closeModal(); selectPlace(id);
      map.flyTo([P[id].lat, P[id].lng], Math.max(map.getZoom(), 6), { duration: .9 });
    }));
  };
  let cached = null;
  try { cached = JSON.parse(localStorage.getItem(cacheKey) || "null"); } catch (e) {}
  if (cached) return render(cached);
  fetch("https://bible-api.com/" + encodeURIComponent(q) + "?translation=kjv")
    .then(r => r.ok ? r.json() : null)
    .then(j => {
      if (!j || !j.verses) throw new Error("no text");
      try { localStorage.setItem(cacheKey, JSON.stringify({ reference: j.reference, verses: j.verses })); } catch (e) {}
      render(j);
    })
    .catch(() => {
      const box = $("#ptext"); if (!box) return;
      box.innerHTML = `<div style="font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;line-height:1.7;color:#d99a7c">
        The full text could not be fetched just now — the reader needs an internet connection.
        The verses quoted in each city panel are stored in the atlas itself and always available.</div>`;
    });
}
document.addEventListener("click", e => {
  const chip = e.target.closest("[data-passage]");
  if (chip) openPassage(chip.dataset.passage);
  const rd = e.target.closest("[data-read]");
  if (rd) { e.stopPropagation(); openPassage(READ[+rd.dataset.read].ref); }
});

/* ---------- world-events lanes under the timeline ---------- */
function buildContext() {
  const C = window.PAUL_CONTEXT; if (!C) return;
  const lanes = C.lanes.map(l => `<div class="lane"><div class="lbl">${l.label}</div>
    <div class="strip">${l.items.map((it, i) => {
      const a = Math.max(T0, it.t0), b = Math.min(T1, it.t1);
      return `<div class="seg" data-lane="${l.id}" data-i="${i}"
        style="left:${((a - T0) / (T1 - T0)) * 100}%;width:${((b - a) / (T1 - T0)) * 100}%;
        background:${l.color}">${it.name}</div>`;
    }).join("")}</div></div>`).join("");
  const evts = `<div class="lane"><div class="lbl">Events</div><div class="strip">
    ${C.events.map((e, i) => `<div class="evt" data-evt="${i}"
      style="left:${((e.t - T0) / (T1 - T0)) * 100}%"></div>`).join("")}</div></div>`;
  $("#ctxlanes").innerHTML = lanes + evts;
  const say = (title, note, year) => {
    if (year != null) { pause(); state.year = year; renderAll(); }
    $("#eventlabel").innerHTML = `<b>${title}</b> <span style="color:#8d9a9c">— ${note}</span>`;
  };
  $("#ctxlanes").querySelectorAll(".seg").forEach(el => {
    const l = C.lanes.find(x => x.id === el.dataset.lane), it = l.items[+el.dataset.i];
    el.title = it.name + " (AD " + it.t0 + "–" + it.t1 + ")";
    el.dataset.full = it.name;
    el.addEventListener("click", () => {
      say(it.name + " (AD " + it.t0 + "–" + it.t1 + ")", it.note, Math.max(T0 + .1, it.t0 + .3));
    });
  });
  $("#ctxlanes").querySelectorAll(".evt").forEach(el => {
    const e = C.events[+el.dataset.evt];
    el.title = e.name + " — c. AD " + Math.floor(e.t);
    el.addEventListener("click", () => say(e.name + " (c. AD " + Math.floor(e.t) + ")", e.note, e.t));
  });
}
function trimSegLabels() {
  document.querySelectorAll("#ctxlanes .seg").forEach(el => {
    const full = el.dataset.full || "";
    el.textContent = full;
    const fits = () => el.scrollWidth <= el.clientWidth + 1;
    if (fits() || !full) return;
    // progressively shorten: binary-search the longest prefix that fits with an ellipsis
    let lo = 3, hi = full.length - 1, best = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      el.textContent = full.slice(0, mid).trimEnd() + "…";
      if (fits()) { best = mid; lo = mid + 1; } else hi = mid - 1;
    }
    el.textContent = best > 0 ? full.slice(0, best).trimEnd() + "…" : "";
  });
}
function renderContextNow() {
  const C = window.PAUL_CONTEXT; if (!C) return;
  $("#ctxlanes").querySelectorAll(".seg").forEach(el => {
    const l = C.lanes.find(x => x.id === el.dataset.lane), it = l.items[+el.dataset.i];
    el.classList.toggle("now", state.year >= it.t0 && state.year < it.t1);
  });
  $("#ctxlanes").querySelectorAll(".evt").forEach(el => {
    const e = C.events[+el.dataset.evt];
    el.classList.toggle("now", Math.abs(e.t - state.year) < 0.6);
  });
}

/* ---------- companions network ---------- */
$("#btnNet").onclick = () => {
  const people = (window.PAUL_PEOPLE || []);
  const rows = people.map(pp => {
    const per = J.map(j => pp.places.some(id => j.stops.some(s => s.place === id)));
    return { pp, per, n: per.filter(Boolean).length };
  }).filter(r => r.n > 0).sort((a, b) => b.n - a.n || a.pp.name.localeCompare(b.pp.name));
  openModal("Companions — who was with Paul, and when", `
    <p style="font-size:13px;line-height:1.65;color:#ded4c0;margin:0 0 6px">
      A filled dot means this person is named at a place on that itinerary. It is a map of overlap in the
      record, not a claim that they walked every stage — Luke names companions only when it matters to him.</p>
    <p style="font-size:12px;color:#8d9a9c;margin:0 0 16px">Sorted by how many itineraries each appears in.
      Click a name for their entry.</p>
    <div class="netwrap"><table class="net">
      <thead><tr><th class="who">Person</th>${J.map(j =>
        `<th><span style="color:${j.color}">${j.name.replace(/^The /, "").replace(" Journey", "")}</span></th>`).join("")}
        <th>Total</th></tr></thead>
      <tbody>${rows.map(r => `<tr>
        <td class="who" data-person="${r.pp.name}">${r.pp.name}</td>
        ${r.per.map((on, i) => `<td><span class="cell" style="background:${on ? J[i].color : "#1d282f"}"></span></td>`).join("")}
        <td style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#8d9a9c">${r.n}</td></tr>`).join("")}
      </tbody></table></div>`);
  $("#mbody").querySelectorAll("[data-person]").forEach(el => el.addEventListener("click", () => {
    closeModal(); showPerson(el.dataset.person);
  }));
};

/* ---------- units toggle ---------- */
const unitLabel = { km: "km", mi: "Roman mi", st: "stadia" };
function applyUnits() {
  $("#btnUnits").textContent = unitLabel[UNITS.key];
  $("#btnUnits").title = UNITS.key === "km" ? "Kilometres — click for Roman miles"
    : UNITS.key === "mi" ? "Roman miles of 1,479 m — click for stadia"
    : "Stadia of 185 m — click for kilometres";
  buildRail(); if (state.place) selectPlace(state.place, state.ctx);
}
$("#btnUnits").onclick = () => {
  UNITS.key = UNITS.key === "km" ? "mi" : UNITS.key === "mi" ? "st" : "km";
  store.d.units = UNITS.key; store.save(); applyUnits();
};

/* ---------- Come, Follow Me: lesson focus mode ---------- */
const CFM = window.CFM_SCHEDULE || [];
function weeksFor(placeId) { return CFM.filter(w => w.places.indexOf(placeId) > -1); }
function lettersFor(w) {
  const r = (w.readings || "").toLowerCase();
  return (window.PAUL_LETTERS || []).filter(l => {
    const book = l.name.split(" ").pop().toLowerCase();
    if (r.indexOf(book) < 0) return false;
    const num = l.name.match(/^([12]) /);
    if (!num) return true;
    if (r.indexOf("1 and 2 " + book) > -1) return true;
    return new RegExp("(^|[^0-9])" + num[1] + " " + book).test(r);
  });
}
function buildCFM() {
  if (!CFM.length) return;
  $("#cfmsel").innerHTML = CFM.map(w =>
    `<option value="${w.week}">${w.title}</option>`).join("");
  $("#wlist").innerHTML = CFM.map(w => `<div class="witem${state.cfm.week === w.week ? " on" : ""}" data-w="${w.week}">
    <div class="wk">WEEK ${w.week}</div>
    <div class="wr">${w.readings}</div>
    ${w.places.length ? "" : `<div class="wo">OUTSIDE THIS ATLAS</div>`}</div>`).join("");
  $("#wlist").querySelectorAll(".witem").forEach(el =>
    el.addEventListener("click", () => setWeek(+el.dataset.w)));
  if (state.cfm.week != null) $("#cfmsel").value = String(state.cfm.week);
}
function setWeek(n) {
  const w = CFM.find(x => x.week === n); if (!w) return;
  pause();
  state.cfm = { week: n, places: new Set(w.places), journeys: new Set(w.journeys) };
  w.journeys.forEach(id => state.visible.add(id));
  // routes only draw up to the current year, so wind the clock to the end of the relevant itineraries
  let end = 0;
  w.journeys.forEach(id => { const j = journeyOf(id); if (j) end = Math.max(end, j.timeline[j.timeline.length - 1]); });
  if (end) { state.year = end; if (w.journeys.length) state.active = w.journeys[w.journeys.length - 1]; }
  buildRail(); buildCFM(); renderAll();
  $("#focusbadge").classList.add("on");
  $("#fbtitle").textContent = w.title;
  const b = w.bounds;
  map.flyToBounds(L.latLngBounds(b[0], b[1]), { padding: [40, 40], duration: 1.2, maxZoom: 9 });
  showCFMPanel(n);
  // epistle weeks: the letter arcs are the point, so turn the layer on unasked
  const ls = lettersFor(w);
  if (ls.length && !layerState.letters) {
    setLayer("letters", true);
    const cb = document.querySelector('#layers input[data-layer="letters"]');
    if (cb) cb.checked = true;
  }
  Object.values(letterLines).forEach(ln => ln.setStyle({ opacity: ls.length ? .18 : .8, weight: 2 }));
  ls.forEach(l => { const ln = letterLines[l.id];
    if (ln) { ln.setStyle({ opacity: 1, weight: 3.4 }); ln.bringToFront(); } });
  document.body.classList.remove("rail-open");
}
function exitCFM() {
  state.cfm = { week: null, places: new Set(), journeys: new Set() };
  Object.values(letterLines).forEach(ln => ln.setStyle({ opacity: .8, weight: 2 }));
  $("#focusbadge").classList.remove("on");
  buildCFM(); renderAll();
}
function stepWeek(d) {
  const cur = state.cfm.week == null ? -1 : CFM.findIndex(w => w.week === state.cfm.week);
  const next = Math.max(0, Math.min(CFM.length - 1, cur + d));
  setWeek(CFM[next].week);
}
const RES_GROUPS = [
  { k: "video", label: "Watch" }, { k: "free", label: "Read free" },
  { k: "circle", label: "Teacher's Circle" }, { k: "plus", label: "Insights+" },
  { k: "article", label: "Background articles" }, { k: "book", label: "Books" }
];
function resourceHTML(w) {
  const R = (window.CFM_RESOURCES || {})[w.week];
  if (!R) return "";
  const rows = RES_GROUPS.map(g => {
    const items = R.items.filter(i => i.k === g.k);
    if (!items.length) return "";
    return `<div style="margin:0 0 12px">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:.14em;
        text-transform:uppercase;color:#8d9a9c;margin-bottom:5px">${g.label}</div>
      ${items.map(i => `<a href="${i.u}" target="_blank" rel="noopener" style="display:block;
        font-family:'EB Garamond',serif;font-size:14.5px;line-height:1.35;color:#e2d6bd;
        text-decoration:none;padding:4px 0 4px 10px;border-left:1px solid #2b3a42">${i.t} <span
        style="color:#8d9a9c;font-size:11px">↗</span></a>`).join("")}</div>`;
  }).join("");
  return `<div class="sect"><h4>Background &amp; study resources</h4>
    <p style="font-size:12px;color:#8d9a9c;margin:0 0 12px">Videos, articles and books for this lesson from
      Taylor Halverson's <a href="${window.CFM_HUB}#week-${String(w.week).padStart(2, "0")}"
      target="_blank" rel="noopener">New Testament Resource Hub</a>${R.date ? ` · lesson week of ${R.date}` : ""}.</p>
    ${rows}</div>`;
}

function showCFMPanel(n) {
  const w = CFM.find(x => x.week === n); if (!w) return;
  panelHist.push({ t: "cfm", k: n });
  const sect = (t, h) => h ? `<div class="sect"><h4>${t}</h4>${h}</div>` : "";
  const ls = lettersFor(w);
  const reads = (window.PAUL_READING || []).filter(r => {
    const m = (w.readings.match(/Acts (\d+)[–-](\d+)/) || null);
    if (!m || r.ref.indexOf("Acts ") !== 0) return false;
    const ch = parseInt(r.ref.slice(5), 10);
    return ch >= +m[1] && ch <= +m[2];
  });
  $("#detail").innerHTML = panelHead(w.title, w.readings, "COME, FOLLOW ME") + `
    <div class="sect"><div class="dactions">
      <button class="tool" id="cfmPrev2">← Previous week</button>
      <button class="tool" id="cfmNext2">Next week →</button>
      <button class="tool" id="cfmOut">Leave focus</button>
    </div></div>
    ${sect("Reading", `<p>${w.readings}</p>
      <div class="tags"><a class="chip" href="${w.url}" target="_blank" rel="noopener">Read in Gospel Library ↗</a></div>`)}
    ${resourceHTML(w)}
    ${sect("Where this happens", `<p>${w.coverage}</p>`)}
    ${w.places.length ? sect("Places in this lesson", `<div class="tags">${w.places
      .filter(id => P[id]).map(id => `<span class="chip" data-go="${id}">${P[id].name}</span>`).join("")}</div>
      <p style="font-size:12px;color:#8d9a9c;margin-top:8px">Click a name to open it and centre the map.</p>`) : ""}
    ${w.journeys.length ? sect("Itineraries highlighted", `<div class="tags">${w.journeys.map(id => {
        const j = journeyOf(id); return j ? `<span class="chip" data-jump="${id}">${j.name} · ${j.years}</span>` : ""; }).join("")}</div>`) : ""}
    ${ls.length ? sect("Letters in view", ls.map(l => `<p style="margin:0 0 10px"><b style="color:#e7c9d8">${l.name}</b> —
        written from <b>${P[l.from] ? P[l.from].name : l.from}</b> to <b>${P[l.to] ? P[l.to].name : l.to}</b>, ${l.date}.
        ${l.carrier ? `<br><span style="font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.1em;
          text-transform:uppercase;color:#d7a3bd">carried by ${l.carrier}</span>` : ""}
        <span class="chip" data-letterp="${l.id}">Open</span></p>`).join("") +
        `<p style="font-size:12px;color:#8d9a9c;margin:2px 0 0">The arcs are drawn on the map: origin → destination,
        with the courier named where scripture names one.</p>`) : ""}
    ${reads.length ? sect("Passages set on the map", `<div class="tags">${reads.map(r =>
        `<span class="chip" data-read="${r.ref}">${r.ref} — ${r.title}</span>`).join("")}</div>`) : ""}
    ${sect("For discussion", w.prompts.map(q => `<div class="verse"><p>${q}</p></div>`).join(""))}
  `;
  wirePanel();
  $("#cfmPrev2").onclick = () => stepWeek(-1);
  $("#cfmNext2").onclick = () => stepWeek(1);
  $("#cfmOut").onclick = () => { exitCFM(); closeDetail(); };
  $("#detail").querySelectorAll("[data-jump]").forEach(el => el.addEventListener("click", () => {
    setActive(el.dataset.jump, true);
  }));
  $("#detail").querySelectorAll("[data-read]").forEach(el => el.addEventListener("click", () => {
    const i = (window.PAUL_READING || []).findIndex(r => r.ref === el.dataset.read);
    if (i > -1) { document.querySelector('.rtab[data-tab="read"]').click(); gotoReading(i); }
  }));
}
$("#cfmsel").addEventListener("change", e => setWeek(+e.target.value));
$("#cfmPrev").onclick = () => stepWeek(-1);
$("#cfmNext").onclick = () => stepWeek(1);
$("#cfmReset").onclick = () => { exitCFM(); if (state.place == null) closeDetail(); };
$("#fbPrev").onclick = () => stepWeek(-1);
$("#fbNext").onclick = () => stepWeek(1);
$("#fbCard").onclick = () => { if (state.cfm.week != null) showCFMPanel(state.cfm.week); };
$("#fbExit").onclick = () => exitCFM();
$("#btnCFM").onclick = () => {
  document.querySelector('.rtab[data-tab="cfm"]').click();
  if (window.innerWidth <= 760) document.body.classList.add("rail-open");
  if (state.cfm.week != null) showCFMPanel(state.cfm.week);
};

/* basemap cycle */
$("#btnBase").onclick = () => setBase(baseIdx + 1);
(() => {
  const want = store.get("base");
  const i = BASES.findIndex(b => b.id === want);
  if (i > 0) setBase(i);
})();

/* presenter mode: bigger type, heavier routes, for classroom projection */
$("#btnPresent").onclick = () => {
  const on = document.body.classList.toggle("present");
  store.set("present", on ? "1" : "");
  $("#btnPresent").textContent = on ? "Presenting" : "Present";
  renderAll(); setTimeout(() => { map.invalidateSize(); updateLabels(); updateLetterLabels(); }, 60);
};
if (store.get("present") === "1") {
  document.body.classList.add("present");
  $("#btnPresent").textContent = "Presenting";
}

/* ---------- printable study sheets ---------- */
const stripTags = (s) => String(s || "").replace(/<[^>]*>/g, "");
function citySheet(id) {
  const p = P[id]; if (!p) return "";
  const G = (window.PAUL_GAZ || {})[id];
  const occ = occurrences(id);
  const letters = (window.PAUL_LETTERS || []).filter(l => l.from === id || l.to === id);
  const wk = weeksFor(id);
  const sec = (h, b) => b ? `<h2>${h}</h2>${b}` : "";
  return `<div class="sheet">
    <h1>${p.name}</h1>
    <div class="sub">${p.modern} · ${p.region} · ${p.dates}</div>
    ${sec("Appears in", occ.length ? `<p class="small">${occ.map(o =>
      `${o.j.name} — ${o.s.date}, ${o.s.ref}`).join("<br>")}</p>` : "")}
    ${sec("What happened here", `<p>${p.narrative}</p>`)}
    ${sec("Scripture — Authorized Version", p.scripture.map(s =>
      `<blockquote><span class="ref">${s.ref}</span>${s.text}</blockquote>`).join(""))}
    ${sec("The city in Greco-Roman history", `<p>${p.greco}</p>`)}
    ${sec("Archaeology — what survives", `<p>${p.archaeology}</p>`)}
    ${G && G.sources ? sec("Ancient testimony", G.sources.map(s =>
      `<p class="small"><b>${s.who}</b> — ${s.type === "quote" ? "quoted" : "summarised"}: ${s.text}</p>`).join("")) : ""}
    ${G ? sec("Gazetteer", `<p class="small">${[G.names.greek ? "Greek: " + G.names.greek : "",
      G.names.latin ? "Latin: " + G.names.latin : ""].filter(Boolean).join(" · ")}<br>
      Site identification: <b>${G.confidence.level}</b> — ${G.confidence.basis}<br>
      ${G.elev != null ? G.elev + " m above sea level · " : ""}Marker: ${G.coord}</p>`) : ""}
    ${letters.length ? sec("Letters", `<p class="small">${letters.map(l =>
      `<b>${l.name}</b> — ${l.from === id ? "written here" : "sent here"}, ${l.date}${
      l.carrier && !/^Unnamed/i.test(l.carrier) ? "; carried by " + l.carrier : ""}`).join("<br>")}</p>`) : ""}
    ${p.people && p.people.length ? sec("People here", `<p class="small">${p.people.join(" · ")}</p>`) : ""}
    ${wk.length ? sec("Come, Follow Me", `<p class="small">${wk.map(w =>
      `Week ${w.week} — ${w.readings}`).join("<br>")}</p>`) : ""}
    <h2>Notes</h2>
    ${store.note(id) ? `<p>${stripTags(store.note(id)).replace(/\n/g, "<br>")}</p>` : ""}
    <div class="lines">${"<i></i>".repeat(6)}</div>
    <div class="foot">The Journeys of Paul — an interactive atlas (beta) · Taylor Halverson ·
      Scripture: Authorized (King James) Version · Dates are reconstructions; see Sources &amp; method.</div>
  </div>`;
}
function journeySheet(jid) {
  const j = journeyOf(jid); if (!j) return "";
  let land = 0, sea = 0;
  j.stops.forEach((s, i) => { if (!i) return; const km = legKm(j, i);
    s.mode === "sea" ? sea += km : land += km; });
  const letters = (window.PAUL_LETTERS || []).filter(l =>
    l.date && j.stops.some(s => s.place === l.from));
  return `<div class="sheet">
    <h1>${j.name}</h1>
    <div class="sub">${j.years} · ${j.stops.length} stops · ${fmtDist(land + sea)} total</div>
    <p>${j.summary || ""}</p>
    <h2>The itinerary</h2>
    <ul>${j.stops.map((s, i) => `<li><b>${P[s.place].name}</b> — ${s.date}; ${s.ref}${
      i ? ` <span class="small">(${s.mode === "sea" ? "by sea" : "overland"} from ${P[j.stops[i - 1].place].name}, ~${fmtDist(legKm(j, i))})</span>` : ""}</li>`).join("")}</ul>
    <h2>By the numbers</h2>
    <p class="small">Overland: ${fmtDist(land)} · By sea: ${fmtDist(sea)} ·
      Estimated time in motion: ${Math.round(land / 27 + sea / 130)} days<br>
      Companions: ${j.stats ? j.stats.companions : "—"}</p>
    ${letters.length ? `<h2>Letters written in this period</h2><p class="small">${letters.map(l =>
      `${l.name} — from ${P[l.from].name} to ${P[l.to].name}, ${l.date}`).join("<br>")}</p>` : ""}
    <h2>Notes</h2>
    <div class="lines">${"<i></i>".repeat(9)}</div>
    <div class="foot">The Journeys of Paul — an interactive atlas (beta) · Taylor Halverson ·
      Dates are reconstructions; see Sources &amp; method.</div>
  </div>`;
}
function printSheets(html) {
  $("#printsheet").innerHTML = html;
  setTimeout(() => window.print(), 120);
}
window.addEventListener("afterprint", () => { $("#printsheet").innerHTML = ""; });

$("#btnPrint").onclick = () => {
  const marked = Object.keys(store.d.marks).filter(id => P[id]);
  const cityIds = [...allPlaceIds];
  openModal("Print study sheets", `<div class="help">
    <p>Each sheet is one Letter page for a notebook: the narrative, the scripture, the city's history and
    archaeology, the ancient testimony, the gazetteer entry, and ruled space for your own notes. Your saved
    notes print with the sheet.</p>
    <div class="tags" style="margin:14px 0 4px">
      ${state.place ? `<span class="chip" data-print="city:${state.place}">This city — ${P[state.place].name}</span>` : ""}
      ${state.active ? `<span class="chip" data-print="journey:${state.active}">This itinerary — ${journeyOf(state.active).name}</span>` : ""}
      ${marked.length ? `<span class="chip" data-print="marks">All ${marked.length} bookmarked ${marked.length === 1 ? "city" : "cities"}</span>` : ""}
      <span class="chip" data-print="alljourneys">All seven itineraries</span>
      <span class="chip" data-print="allcities">Every city — ${cityIds.length} pages</span>
    </div>
    <p class="small" style="font-size:12px;color:#8d9a9c;margin-top:12px">Your browser's print dialog opens;
    choose "Save as PDF" there if you want a file rather than paper.</p>
  </div>`);
  $("#mbody").querySelectorAll("[data-print]").forEach(el => el.addEventListener("click", () => {
    const [kind, arg] = el.dataset.print.split(":");
    let html = "";
    if (kind === "city") html = citySheet(arg);
    else if (kind === "journey") html = journeySheet(arg);
    else if (kind === "marks") html = Object.keys(store.d.marks).filter(id => P[id]).map(citySheet).join("");
    else if (kind === "alljourneys") html = J.map(j => journeySheet(j.id)).join("");
    else if (kind === "allcities") html = cityIds.map(citySheet).join("");
    closeModal();
    printSheets(html);
  }));
};

/* ---------- permalinks: #philippi, #week=30, #year=57.4, #journey=j2, combinable ---------- */
let hashLock = false;
function writeHash() {
  if (hashLock) return;
  const parts = [];
  if (state.place) parts.push(state.place);
  if (state.cfm.week != null) parts.push("week=" + state.cfm.week);
  else {
    if (state.active) parts.push("journey=" + state.active);
    parts.push("year=" + state.year.toFixed(1));
  }
  const h = "#" + parts.join("&");
  if (location.hash !== h) history.replaceState(null, "", h);
}
function readHash() {
  const raw = location.hash.replace(/^#/, "");
  if (!raw) return false;
  const parts = raw.split("&").filter(Boolean);
  let place = null, week = null, year = null, jid = null;
  parts.forEach(p => {
    const [k, v] = p.indexOf("=") > -1 ? p.split("=") : [null, p];
    if (k === "week") week = +v;
    else if (k === "year") year = parseFloat(v);
    else if (k === "journey") jid = v;
    else if (P[v]) place = v;
  });
  hashLock = true;
  if (week != null && CFM.some(w => w.week === week)) setWeek(week);
  else {
    if (jid && journeyOf(jid)) { state.active = jid; state.visible.add(jid); }
    if (year != null && year >= T0 && year <= T1) state.year = year;
    buildRail(); renderAll();
  }
  if (place) selectPlace(place);
  hashLock = false;
  if (place) {
    const p = P[place];
    setTimeout(() => map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 6), { duration: .8 }), 260);
  }
  return true;
}
window.addEventListener("hashchange", () => { if (!hashLock) readHash(); });
function copyLink() {
  writeHash();
  const url = location.href;
  const done = (ok) => {
    const b = $("#btnLink"); if (!b) return;
    b.textContent = ok ? "Link copied" : "Copy failed";
    setTimeout(() => { b.textContent = "Copy link"; }, 1800);
  };
  if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => done(true), () => done(false));
  else done(false);
}
$("#btnLink").onclick = copyLink;

/* ---------- boot ---------- */
function renderAll() { renderMap(); renderTimeline(); renderContextNow(); writeHash(); }
buildTimeline(); buildContext(); buildRail(); buildReading(); buildCFM(); applyUnits(); renderAll();
requestAnimationFrame(trimSegLabels);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => trimSegLabels());
setTimeout(trimSegLabels, 1200);
let segTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(segTimer); segTimer = setTimeout(trimSegLabels, 140);
});
// The #map cell is sized by CSS grid, so Leaflet may still measure 0 at script end —
// fit only once the container has a real size, and re-fit if it arrives later.
const bootBounds = L.latLngBounds(journeyOf("j1").stops.map(s => [P[s.place].lat, P[s.place].lng])).pad(0.18);
let booted = false;
function bootFit() {
  const el = map.getContainer();
  if (!el.clientWidth || !el.clientHeight) return;
  map.invalidateSize();
  map.fitBounds(bootBounds);
  updateLabels();
  booted = true;
}
map.whenReady(() => requestAnimationFrame(bootFit));
if (window.ResizeObserver) {
  let lastW = 0, lastH = 0, roTimer = null;
  const ro = new ResizeObserver(entries => {
    const r = entries[0].contentRect;
    const w = Math.round(r.width), h = Math.round(r.height);
    if (w === lastW && h === lastH) return;          // ignore no-op reports
    lastW = w; lastH = h;
    clearTimeout(roTimer);
    roTimer = setTimeout(() => { booted ? map.invalidateSize() : bootFit(); }, 120);
  });
  ro.observe(map.getContainer());
}
window.addEventListener("resize", () => { if (!booted) bootFit(); });
setTimeout(() => { if (!booted) bootFit(); }, 400);
// a permalink overrides the default opening view
setTimeout(() => { readHash(); }, 500);
["place", "year", "cfm", "active"].forEach(() => {});
})();
