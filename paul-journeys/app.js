/* The Journeys of Paul — interactive study atlas */
(function () {
const P = window.PAUL_PLACES, J = window.PAUL_JOURNEYS, LETTER_SITES = window.PAUL_LETTER_SITES || [];
const T0 = 4, T1 = 69;
const STORE = "paulAtlas.v1";
const $ = (s) => document.querySelector(s);
/* Keyboard/screen-reader parity for div-based rows: role="button" + tabindex are set in the
   markup; this wires Enter/Space to fire the same click each row already listens for. */
function activatable(nodeList) {
  nodeList.forEach(el => {
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); }
    });
  });
}

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
  overlay: { on: false, a: null, b: null, sharedOnly: false, prev: null },
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
  minZoom: 3, maxZoom: 17, attributionControl: false });
/* No live tile service is used: hosted basemap tiles (Esri, OpenStreetMap, etc.) carry usage
   policies and, at commercial scale, licensing terms this atlas has not cleared. Coastlines are
   instead drawn once from a static, public-domain vector file (Natural Earth land boundaries,
   via the world-atlas package) — a versioned data file, not a hosted map/tile service — so every
   place, route and label still sits on real geography with nothing tracked per view. */
document.body.classList.add("notiles");
let baseIdx = 0;
const BASES = [{ id: "none", label: "No basemap imagery", attribution: "" }];
if (window.topojson) {
  const fetchLand = () => window.PAUL_LAND ? Promise.resolve(window.PAUL_LAND)
    : fetch("data/land-50m.json").then(r => { if (!r.ok) throw new Error(String(r.status)); return r.json(); });
  /* one retry after a beat: a slow/flaky mobile connection is the main reason this ever fails */
  fetchLand().catch(() => new Promise(res => setTimeout(res, 1200)).then(fetchLand)).then(topo => {
    const land = topojson.feature(topo, topo.objects.land);
    scrubLandArtifacts(land);
    L.geoJSON(land, { interactive: false, className: "landmass" })
      .addTo(map).bringToBack();
    document.body.classList.remove("notiles");
  }).catch(() => { /* still unavailable: falls back to the plain sea ground below */ });
}
/* the 50m land file carries a handful of degenerate simplification artifacts near the poles —
   rings that span most of the globe's longitude while barely varying in latitude, painting as a
   spurious horizontal band across the ocean. Real coastlines never do this, so drop any ring
   that does before it ever reaches the renderer. */
function scrubLandArtifacts(land) {
  const keepRing = (ring) => {
    let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
    ring.forEach(([lng, lat]) => {
      if (lng < minLng) minLng = lng; if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat; if (lat > maxLat) maxLat = lat;
    });
    return !(maxLng - minLng > 100 && maxLat - minLat < 8);
  };
  (land.features || []).forEach(f => {
    const g = f.geometry; if (!g) return;
    if (g.type === "Polygon") g.coordinates = g.coordinates.filter(keepRing);
    else if (g.type === "MultiPolygon") g.coordinates = g.coordinates.map(poly => poly.filter(keepRing)).filter(poly => poly.length);
  });
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
  if (layerState.gospel) { styleGospel(); updateGospelLabels(); }

  if (state.overlay.on) styleComparedCities(present);
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
  const gWeek = state.cfm.week != null && !state.cfm.journeys.size
    ? CFM.find(w => w.week === state.cfm.week) : null;
  if (gWeek) {
    /* Gospel weeks have no itinerary on the clock, so the timeline label carries the lesson instead */
    document.body.classList.add("gweek");
    $("#eventlabel").innerHTML = `<b>${gWeek.readings}</b> &nbsp;<span
      style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.06em;color:var(--muted)">
      STUDY WEEK ${gWeek.week}</span> &nbsp;· ${gWeek.coverage}`;
  } else if (e) {
    document.body.classList.remove("gweek");
    const p = P[e.s.place];
    $("#eventlabel").innerHTML = `<b>${p.name}</b> &nbsp;<span style="color:${e.j.color}">▬</span>
      <span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.06em;color:var(--muted)">
      ${e.j.name.toUpperCase()}</span> &nbsp;· ${e.s.date} &nbsp;·
      <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--gold)">${e.s.ref}</span>`;
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
        <div style="font-size:11.5px;color:var(--muted);line-height:1.5;padding:6px 0 2px">${j.summary}</div></div>
    </div>`;
  }).join("");

  $("#railnote").innerHTML = `<b style="color:var(--parch-dim)">Legend.</b> Solid line = journey travelled;
    dotted = route not yet reached at this point on the timeline; dashes = disputed, post-Acts route.
    Curved links are sea passages. Distances are route estimates (Roman roads and sailing tracks),
    not straight lines. Dates follow the Gallio inscription (Acts 18:12), which fixes Corinth to AD 51–52.
    <br><br>Also on the map: <b style="color:var(--parch-dim)">Colossae</b>, a church Paul wrote to but never visited.`;

  $("#jlist").querySelectorAll(".jrow").forEach(row => {
    row.setAttribute("aria-label", row.querySelector(".jname").textContent + " — toggle or open itinerary");
    row.addEventListener("click", (e) => {
      if (e.target.classList.contains("jswatch")) { toggleJourney(row.dataset.j); return; }
      setActive(row.dataset.j, true);
    });
  });
  activatable($("#jlist").querySelectorAll(".jrow"));
  $("#jlist").querySelectorAll(".stop[data-i]").forEach(st => {
    st.setAttribute("aria-label", "Open " + (st.querySelector(".nm") ? st.querySelector(".nm").textContent : "stop"));
    st.addEventListener("click", () => {
      const j = journeyOf(st.dataset.j), i = +st.dataset.i;
      state.year = j.timeline[i]; state.active = j.id;
      selectPlace(j.stops[i].place, { jid: j.id, i });
      flyToVisible(P[j.stops[i].place].lat, P[j.stops[i].place].lng, Math.max(map.getZoom(), 7), { duration: .8 });
      renderAll();
    });
  });
  activatable($("#jlist").querySelectorAll(".stop[data-i]"));
}
function toggleJourney(id) {
  if (state.overlay.on) exitCompare();
  state.visible.has(id) ? state.visible.delete(id) : state.visible.add(id);
  buildRail(); renderAll();
}
function setActive(id, fit) {
  if (state.overlay.on && id !== state.overlay.a && id !== state.overlay.b) exitCompare();
  state.active = id;
  if (!state.visible.has(id)) state.visible.add(id);
  const j = journeyOf(id);
  state.year = j.timeline[j.timeline.length - 1];
  if (fit) {
    const pts = j.stops.map(s => [P[s.place].lat, P[s.place].lng]);
    map.flyToBounds(L.latLngBounds(pts).pad(0.18), { duration: .9, ...fitPad() });
    if (isCompact()) document.body.classList.remove("rail-open");
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
    flyToVisible(P[gid].lat, P[gid].lng, Math.max(map.getZoom(), 6), { duration: .9 });
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
    if (prev.t === "passage") showPassagePanel(prev.k);
  });
  const cl = d.querySelector(".dclose"); if (cl) cl.onclick = closeDetail;
  $("#app").classList.add("detail-open");
  if (isCompact()) document.body.classList.remove("rail-open");
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
      <p style="font-size:12px;color:var(--muted);margin-top:8px">Click a place to open it on the map.</p>`) +
    sect("Itineraries", journeys.length ? journeys.map(j => `<div class="occ" data-j="${j.id}">
      <div class="dot" style="background:${j.color}"></div>
      <div><span class="occname">${j.name}</span><div class="om">${j.years} · ${j.acts}</div></div></div>`).join("")
      : `<p style="color:var(--muted)">Named only outside the itineraries.</p>`) +
    sect("Scripture", `<div class="tags">${pp.refs.map(r =>
      `<span class="chip" data-passage="${r.replace(/[–—]/g, "-")}">${r}</span>`).join("")}</div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px">Click a reference to read it in full (WEB).</p>`) +
    (letters.length ? sect("Letters", `<div class="tags">${letters.map(l =>
      `<span class="chip" data-letterp="${l.id}">${l.name}</span>`).join("")}</div>`) : "") +
    sect("Named alongside", `<div class="tags">${alongside.map(x =>
      `<span class="chip" data-person="${x.o.name}">${x.o.name}</span>`).join("")}</div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px">People named at the same places — ordered by how many they share.</p>`);
  wirePanel();
  $("#detail").querySelectorAll(".occ[data-j]").forEach(el => el.addEventListener("click", () => {
    setActive(el.dataset.j, true);
  }));
  // light the places on the map
  const pts = pp.places.filter(id => P[id]).map(id => [P[id].lat, P[id].lng]);
  if (pts.length > 1) map.flyToBounds(L.latLngBounds(pts).pad(0.25), { duration: .9, ...fitPad() });
  else if (pts.length) flyToVisible(pts[0][0], pts[0][1], Math.max(map.getZoom(), 6), { duration: .9 });
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
    panelHead(l.name, `${l.date} · written from ${a ? a.name : "unknown origin"} · sent to ${b.name}`, "LETTER") +
    sect("Occasion", `<p>${l.occasion}</p>`) +
    sect("Key verse", `<div class="verse"><div class="ref" data-passage="${l.key.replace(/[–—]/g, "-")}">${l.key}</div><p>${l.keyText}</p></div>
      <div class="tags"><span class="chip" data-passage="${readRef.replace(/[–—]/g, "-")}">Read ${readRef} in full</span></div>`) +
    sect("Where it travelled", `<div class="tags">
      ${a ? `<span class="chip" data-go="${l.from}">Written at ${a.name}</span>` : `<span class="chip" style="cursor:default">Origin unknown</span>`}
      <span class="chip" data-go="${l.to}">Sent to ${b.name}</span></div>`) +
    (people.length ? sect("People named in it", `<div class="tags">${people.map(pp =>
      `<span class="chip" data-person="${pp.name}">${pp.name}</span>`).join("")}</div>`) : "") +
    sect("On the evidence", `<p style="color:var(--parch)">${l.note}</p>`);
  wirePanel();
  const pts = (a ? [a, b] : [b]).map(x => [x.lat, x.lng]);
  if (pts.length > 1) map.flyToBounds(L.latLngBounds(pts).pad(0.3), { duration: .9 });
  else flyToVisible(b.lat, b.lng, Math.max(map.getZoom(), 6), { duration: .9 });
  if (!layerState.letters) { setLayer("letters", true); const cb = document.querySelector('#layers input[data-layer="letters"]'); if (cb) cb.checked = true; }
}

function selectPlace(id, ctx) {
  if (quiz.on) return quizAnswer(id);
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
      <p style="font-size:12.5px;color:var(--parch)">${G.confidence.basis} <br>Marker: ${G.coord}</p>
      ${G.wiki ? `<div id="photoslot"><div class="photocred" style="margin:0">This atlas embeds no third-party photographs (each image's licence and attribution vary by source and can't be verified in bulk).
        <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(G.wiki)}" target="_blank" rel="noopener">Read about ${G.wiki.replace(/_/g, " ")} on Wikipedia →</a></div></div>` : ""}</div>` : "";
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
    ${weeksFor(id).length ? sect("Study weeks", `<div class="tags">${weeksFor(id)
        .map(w => `<span class="chip" data-week="${w.week}">Week ${w.week} — ${w.readings}</span>`).join("")}</div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px">Weeks whose reading is set here. Click one to
      enter lesson focus mode.</p>`) : ""}
    ${sect("What happened here", `<p>${p.narrative}</p>`)}
    ${gazHead}
    ${leg ? sect("Getting there", `<p><b>From ${leg.from}</b> · ${leg.mode === "sea" ? "by sea" : "overland"} ·
        ~${fmtDist(leg.km)} · ${daysFor(leg.km, leg.mode)} of travel${leg.mode === "sea"
        ? " with a working wind" : " on foot at c. 27 km a day"}.</p>${leg.note ? `<p>${leg.note}</p>` : ""}
        ${prof ? `<div class="prof">${prof.pts.map(v => `<i style="height:${Math.max(6, Math.round(v / Math.max.apply(null, prof.pts) * 100))}%" title="${v} m"></i>`).join("")}</div>
        <p style="font-size:12px;color:var(--muted)"><b style="color:var(--parch-dim)">${prof.label}</b> — elevation profile, ${Math.min.apply(null, prof.pts)}–${Math.max.apply(null, prof.pts)} m. ${prof.note}</p>` : ""}`) : ""}
    ${sect("Scripture — World English Bible", p.scripture.map(s =>
        `<div class="verse"><div class="ref" data-passage="${s.ref.replace(/[–—]/g, "-")}">${s.ref}</div><p>${s.text}</p></div>`).join("") +
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
      <p style="font-size:12px;color:var(--muted);margin-top:8px">Gold names open a full entry — every other place
      they are named at, the passages, and who they travelled with. Plain names are people the record leaves
      unnamed or mentions only here.</p>`) : ""}
    ${sect("Your notes", `<textarea id="note" placeholder="Notes on ${p.name} — saved in this browser">${store.note(id)}</textarea>`)}
  `;
  $("#app").classList.add("detail-open");
  if (isCompact()) document.body.classList.remove("rail-open");
  $("#detail").scrollTop = 0;
  wirePanel();
  $("#btnMark").onclick = () => { store.toggle(id); panelHist.pop(); selectPlace(id, ctx); renderMap(); };
  $("#btnZoom").onclick = () => flyToVisible(p.lat, p.lng, 13, { duration: 1.1 });
  const n = $("#note"); if (n) n.addEventListener("input", () => store.note(id, n.value));
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


function closeDetail() {
  state.place = null; panelHist.length = 0; $("#app").classList.remove("detail-open");
  document.body.classList.remove("sheet-full");
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
  box.querySelectorAll(".res[data-id]").forEach(el => {
    el.setAttribute("aria-label", "Open " + (el.querySelector("b") ? el.querySelector("b").textContent : "result"));
    el.addEventListener("click", () => {
      const id = el.dataset.id, p = P[id];
      box.classList.remove("on"); $("#search").value = "";
      const occ = occurrences(id);
      if (occ.length) { state.active = occ[0].j.id; state.year = Math.max(state.year, occ[0].j.timeline[occ[0].i]); }
      selectPlace(id); buildRail(); renderAll();
      flyToVisible(p.lat, p.lng, Math.max(map.getZoom(), 7), { duration: .9 });
    });
  });
  activatable(box.querySelectorAll(".res[data-id]"));
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
const REDUCE_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (REDUCE_MOTION) {
  const _flyTo = map.flyTo.bind(map), _flyToBounds = map.flyToBounds.bind(map);
  map.flyTo = (latlng, zoom, opts) => _flyTo(latlng, zoom, { ...(opts || {}), duration: 0 });
  map.flyToBounds = (bounds, opts) => _flyToBounds(bounds, { ...(opts || {}), duration: 0 });
}
let modalLastFocus = null;
function openModal(title, html) {
  modalLastFocus = document.activeElement;
  $("#mtitle").textContent = title; $("#mbody").innerHTML = html; $("#modal").classList.add("on");
  const sheet = document.querySelector("#modal .sheet");
  if (sheet) { sheet.setAttribute("tabindex", "-1"); sheet.focus(); }
}
function closeModal() {
  $("#modal").classList.remove("on");
  if (modalLastFocus && modalLastFocus.focus) modalLastFocus.focus();
}
$("#modal").addEventListener("keydown", e => {
  if (e.key !== "Tab" || !$("#modal").classList.contains("on")) return;
  const f = Array.from($("#modal").querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"))
    .filter(el => el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
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
    </div>
    <div style="display:flex;align-items:center;gap:12px;margin-top:18px">
      <button class="tool" id="cmpOverlay">Overlay both on the map</button>
      <span style="font-size:12px;color:var(--muted)">Draws the two routes together — the second dashed —
        and rings every city they share.</span>
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
      <div class="om" style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted);margin-bottom:10px">${j.acts}</div>
      <p style="font-size:13px;line-height:1.6;color:var(--parch-dim)">${j.summary}</p>
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
  $("#cmpOverlay").onclick = () => { closeModal(); enterCompare($("#cA").value, $("#cB").value); };
};

/* ---------- two itineraries side by side on the map ---------- */
function sharedCities(a, b) {
  const A = new Set(journeyOf(a).stops.map(s => s.place));
  return new Set(journeyOf(b).stops.map(s => s.place).filter(id => A.has(id)));
}
function styleComparedCities(present) {
  const O = state.overlay;
  const shared = sharedCities(O.a, O.b);
  const inEither = new Set([...journeyOf(O.a).stops, ...journeyOf(O.b).stops].map(s => s.place));
  allPlaceIds.forEach(id => {
    const m = placeMarks[id]; if (!m) return;
    const sh = shared.has(id), here = inEither.has(id);
    const dim = !here || (O.sharedOnly && !sh);
    m.setStyle({
      opacity: dim ? .1 : 1,
      color: sh ? "#fff3cf" : state.place === id ? "#c9a227" : "#f2e9d6",
      fillColor: sh ? "#c9a227" : "#c9873a",
      fillOpacity: dim ? .2 : .9,
      weight: (sh ? 4 : 2) * (present ? 1.6 : 1),
      radius: ((P[id].tier === "major" ? 6.5 : 4.5) + (sh ? 3 : 0)) * (present ? 1.5 : 1)
    });
  });
}
function enterCompare(a, b) {
  if (a === b) { const alt = J.find(j => j.id !== a); b = alt ? alt.id : b; }
  pause();
  if (state.cfm.week != null) exitCFM();
  const O = state.overlay;
  if (!O.on) O.prev = { visible: new Set(state.visible), year: state.year, active: state.active };
  O.on = true; O.a = a; O.b = b; O.sharedOnly = false;
  state.visible = new Set([a, b]);
  state.active = a;
  state.year = T1;                       // routes draw up to the clock, so run it to the end
  $("#scrub").value = state.year;
  J.forEach(j => drawn[j.id].setStyle({ dashArray: j.id === b ? "9 7" : null }));
  const pts = [];
  [a, b].forEach(id => journeyOf(id).stops.forEach(s => pts.push([P[s.place].lat, P[s.place].lng])));
  if (pts.length) map.fitBounds(L.latLngBounds(pts).pad(0.12));
  const n = sharedCities(a, b).size;
  $("#cbtitle").innerHTML = `<b style="color:${journeyOf(a).color}">${journeyOf(a).name}</b>
    <span style="color:var(--muted)">vs</span>
    <b style="color:${journeyOf(b).color}">${journeyOf(b).name}</b>
    <span style="color:var(--muted);font-size:12px">· ${n} ${n === 1 ? "city" : "cities"} in both</span>`;
  $("#cbSwap").classList.remove("on");
  $("#cmpbadge").classList.add("on");
  buildRail(); renderAll();
}
function exitCompare() {
  const O = state.overlay;
  if (!O.on) return;
  J.forEach(j => drawn[j.id].setStyle({ dashArray: null }));
  if (O.prev) { state.visible = O.prev.visible; state.year = O.prev.year; state.active = O.prev.active; }
  state.overlay = { on: false, a: null, b: null, sharedOnly: false, prev: null };
  $("#scrub").value = state.year;
  $("#cmpbadge").classList.remove("on");
  buildRail(); renderAll();
}
$("#cbExit").onclick = exitCompare;
$("#cbSwap").onclick = () => {
  state.overlay.sharedOnly = !state.overlay.sharedOnly;
  $("#cbSwap").classList.toggle("on", state.overlay.sharedOnly);
  renderAll();
};

$("#btnCalc").onclick = () => {
  const S = window.PAUL_SEASONS;
  const now = { m: 3, mode: "sea" };
  openModal("Distance, season & travel time", `
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:6px">
      <select id="dA">${placeOptions("corinth")}</select>
      <span style="color:var(--muted)">to</span>
      <select id="dB">${placeOptions("ephesus")}</select>
      <select id="dM"><option value="sea">by sea</option><option value="land">overland</option></select>
    </div>
    <div class="season" id="months">${S.months.map((m, i) =>
      `<span class="mon" data-m="${i}">${m.slice(0, 3)}</span>`).join("")}</div>
    <div class="calcout" id="dOut" style="margin-top:18px"></div>
    <p style="font-size:12px;color:var(--muted);line-height:1.6;margin-top:16px" id="dNote"></p>
    <p style="font-size:12px;color:var(--muted);line-height:1.6">
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
         <b style="color:var(--warn)">No sailing in ${S.months[now.m]}.</b> The sea was closed; the journey waits for spring.`
      : `<b>${a.name}</b> to <b>${b.name}</b> — ${fmtDist(km)} in a straight line, heading ${dir}.<br>
         ${mode === "sea" ? "Under sail" : "On foot"} in ${S.months[now.m]}:
         about <b>${Math.max(1, Math.round(lo))}–${Math.max(2, Math.round(hi))} days</b>
         ${headwind ? "<span style=\"color:var(--caution)\">beating against the etesian northerlies</span>" :
           mode === "sea" ? "with a working wind" : "walking daylight hours"}.`;
    $("#dNote").innerHTML = `<b style="color:var(--parch-dim)">${S.months[now.m]}, ${mode === "sea" ? "by sea" : "overland"}:</b> ${season.note}`;
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
  const row = (id) => `<div class="bmk" data-id="${id}"><div class="dot" style="width:8px;height:8px;border-radius:50%;background:var(--gold);margin-top:6px"></div>
    <div><div class="bnm">${P[id] ? P[id].name : id}</div>
    <div class="bnote">${store.note(id) ? store.note(id).replace(/</g, "&lt;") : "<i>no note</i>"}</div></div></div>`;
  openModal("Bookmarks & notes", (ids.length || noted.length)
    ? ids.concat(noted).map(row).join("")
    : `<p style="color:var(--muted);font-size:13.5px;line-height:1.6">No bookmarks yet. Open any city and use
       ☆ Bookmark, or type in its notes field — both are kept in this browser.</p>`);
  $("#mbody").querySelectorAll(".bmk").forEach(el => el.addEventListener("click", () => {
    closeModal(); selectPlace(el.dataset.id);
    flyToVisible(P[el.dataset.id].lat, P[el.dataset.id].lng, Math.max(map.getZoom(), 7), { duration: .9 });
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
    <p style="font-size:12.5px;color:var(--muted);margin:0 0 12px">Every city's Gazetteer block carries one of
      these grades and the evidence behind it.</p>
    ${M.confidence.map(c => { const cc = document.body.classList.contains("light") && c.cl ? c.cl : c.c;
      return `<div class="prow" style="border-left:3px solid ${cc};padding-left:11px">
      <h4 style="color:${cc}">${c.g}</h4><p>${c.t}</p></div>`; }).join("")}
    <h3 style="margin:24px 0 10px;font-size:19px">The five fixed points</h3>
    <p>${M.fixed}</p>
    <h3 style="margin:24px 0 10px;font-size:19px">Works consulted</h3>
    ${M.works.map(w => `<h4 style="margin:16px 0 7px;font-family:'IBM Plex Mono',monospace;font-size:10px;
      letter-spacing:.14em;text-transform:uppercase;color:var(--gold)">${w.sect}</h4>
      <ul style="margin:0;padding-left:18px">${w.items.map(i =>
        `<li style="font-size:13px;line-height:1.6;color:var(--parch-dim);margin-bottom:6px">${i}</li>`).join("")}</ul>`).join("")}
    <h3 style="margin:24px 0 10px;font-size:19px">Known limits</h3>
    <ul style="margin:0;padding-left:18px">${M.limits.map(l =>
      `<li style="font-size:13px;line-height:1.6;color:var(--parch-dim);margin-bottom:7px">${l}</li>`).join("")}</ul>
    <p style="margin-top:20px;font-size:12.5px;color:var(--muted)">Errors are the author's, not the sources'.
      Corrections and better evidence are welcome, and are worked into the next revision.</p>
  </div>`);
};

function openAbout(tab) {
  const YR = new Date().getFullYear();
  openModal("About this atlas", `<div class="help">
  <div class="railtabs" id="abtabs" style="position:static;margin:-6px 0 18px">
    <button class="rtab on" data-atab="about">About</button>
    <button class="rtab" data-atab="credits">Credits &amp; Licences</button>
    <button class="rtab" data-atab="terms">Terms of Use</button>
  </div>

  <div data-apane="about">
  <p style="color:var(--muted);font-size:13px">This beta presents a schematic educational reconstruction based on selected published research. Dates,
  elevations, dimensions, routes, and disputed identifications may be simplified. Where evidence is uncertain,
  the presentation offers one plausible interpretation rather than a definitive conclusion.</p>
  <p style="color:var(--gold)"><b>A living edition.</b> The atlas is revised as scholarship moves; articles,
  routes and dates carry the evidence behind them so a reader can weigh each one.</p>

  <h3 style="margin:20px 0 8px;font-size:19px">What this is</h3>
  <p>An interactive atlas of the journeys of Paul, built for a reader who wants to study rather than skim:
  every stop on every itinerary with what happened there, the city's Greco-Roman history, what survives on
  the ground today, the people named, the letters written or received, the travel leg with its distance and
  sailing season, and the scripture text — with the full chapter a click away. Around it sit a
  people index, an epistle layer, three competing chronologies, a reading plan through Acts, a Roman road and
  province overlay, a Gospel-era gazetteer on its own layer for the places of the life of Jesus, and the
  52-week New Testament reading year wired into the map.</p>
  <p>Two rules govern the data. Geography comes from real coordinates and attested sites, never from drawing;
  where a site identification is disputed the gazetteer says so and grades its confidence. And where the
  evidence is thin — a road alignment between known stations, a letter's place of origin, the date of an
  event — the atlas states the uncertainty rather than smoothing it over.</p>

  <p style="font-size:12.5px;color:var(--muted);border-left:2px solid var(--line);padding-left:11px">
  <b style="color:var(--parch-dim)">Independent study aid.</b> This atlas is published by Taylor Halverson.
  It is not affiliated with, endorsed by, or published by any church, curriculum publisher or tour operator.
  The 52-week reading year lists scripture ranges as plain references and links to publishers' own sites;
  all titles, coverage notes, prompts and articles here are the author's own work.</p>

  <h3 style="margin:22px 0 8px;font-size:19px">Getting started</h3>
  <p>Press <b>?</b> in the toolbar for the full guide. In brief: click any city marker to open its article;
  drag the timeline to watch the routes draw themselves, or press <b>Play</b>; use the left rail to focus one
  itinerary, walk Acts in order, or pick a study week; and search for a city, a person, a verse or a
  phrase from any article.</p>

  <h3 style="margin:22px 0 8px;font-size:19px">Taylor Halverson, Ph.D.</h3>
  <p style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.08em;color:var(--muted);
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
    text-transform:uppercase;color:var(--gold)">Academic training</h4>
  <p style="margin:0">Ph.D., Judaism &amp; Christianity in Antiquity — Indiana University<br>
  Ph.D., Instructional Systems Technology — Indiana University<br>
  M.A., Biblical Studies — Yale University<br>
  B.A., Ancient Near Eastern Studies — Brigham Young University</p>
  <p style="color:var(--muted)">Two doctorates in two separate fields — the ancient world, and the design of
  learning. Both of them are in this tool.</p>

  <h4 style="margin:18px 0 6px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;
    text-transform:uppercase;color:var(--gold)">Elsewhere</h4>
  <div class="tags">
    <a class="chip" href="https://insights.taylorhalverson.com" target="_blank" rel="noopener">insights.taylorhalverson.com ↗</a>
    <a class="chip" href="https://books.taylorhalverson.com" target="_blank" rel="noopener">books.taylorhalverson.com ↗</a>
    <a class="chip" href="https://exodustours.com" target="_blank" rel="noopener">exodustours.com ↗</a>
  </div>

  <p style="margin-top:22px;font-size:12.5px;color:var(--muted)">Full credits, sources and licence terms are
  on the <b>Credits &amp; Licences</b> tab above.</p>
  </div>

  <div data-apane="credits" hidden>
  <p>Sources, licences and acknowledgements for the material used in this atlas.</p>

  ${CH("The work")}
  <p><b>The Journeys of Paul: An Interactive Study Atlas.</b> Text, research, design and code by Taylor
  Halverson. &copy; ${YR} Taylor Halverson.</p>

  ${CH("Scripture")}
  <p>The World English Bible (WEB), a modern translation dedicated to the public domain worldwide. Every
  cited verse and full chapter is bundled in the atlas and opens right here, in the reading panel — nothing
  links out and nothing is fetched over the network.</p>

  ${CH("Ancient authors")}
  <p>Strabo, <i>Geography</i>. Josephus, <i>Jewish War</i> and <i>Jewish Antiquities</i>. Tacitus, <i>Annals</i>
  and <i>Histories</i>. Suetonius, <i>Lives of the Caesars</i>. Pliny the Elder, <i>Natural History</i>. Pliny
  the Younger, <i>Letters</i>. Pausanias, <i>Description of Greece</i>. Vegetius, <i>De re militari</i>.
  Inscriptions from <i>Corpus Inscriptionum Latinarum</i>, <i>Inscriptiones Graecae</i>, and the Delphi
  inscription of Gallio (<i>Syll.</i>³ 801d). Renderings are the author's, from the ancient texts.</p>

  ${CH("Reference works")}
  <p>Richard J. A. Talbert, ed., <i>Barrington Atlas of the Greek and Roman World</i> (Princeton, 2000) and its
  <i>Map-by-Map Directory</i>. <i>Pleiades</i>, the community gazetteer of ancient places (pleiades.stoa.org),
  CC BY. <i>Tabula Imperii Romani</i>. Excavation reports and critical commentaries for individual sites are
  listed under <b>Sources</b> in the toolbar.</p>

  ${CH("Cartography")}
  <p>Site coordinates from published survey and gazetteer data. Road alignments and provincial boundaries after
  the <i>Barrington Atlas</i> and <i>Tabula Imperii Romani</i>, generalised for atlas scale. This atlas draws no
  live basemap imagery — hosted map-tile services carry usage and licensing terms of their own, so every place,
  route and label here is plotted by exact coordinate on a plain ground instead.</p>

  ${CH("Photographs")}
  <p>This atlas does not embed third-party site photographs — image licensing on Wikimedia varies file by
  file and can't be verified in bulk, so a place panel instead links out to the site's own Wikipedia article.</p>

  ${CH("Software")}
  <p>Leaflet 1.9.4, &copy; 2010&ndash;2024 Volodymyr Agafonkin, &copy; 2010&ndash;2011 CloudMade, BSD 2-Clause
  Licence. topojson-client 3.1.0 and world-atlas 2.0.2, &copy; Mike Bostock, ISC Licence. Natural Earth coastline
  data is in the public domain. Full notices: THIRD_PARTY_NOTICES.txt, included with this release.</p>

  ${CH("Typefaces")}
  <p>EB Garamond, by Georg Duffner and Octavio Pardo after Claude Garamont. IBM Plex Sans and IBM Plex Mono, by
  Mike Abbink and Bold Monday for IBM. SIL Open Font License 1.1.</p>

  ${CH("Study resources")}
  <p>Weekly background reading links to the author's
  <a href="https://insights.taylorhalverson.com/p/new-testament-resources" target="_blank" rel="noopener">New
  Testament Resource Hub</a>. Weekly readings are given as chapter-and-verse references; lesson links go to the
  publishers' own pages.</p>

  ${CH("Independence")}
  <p>Published by the author. Not affiliated with or endorsed by any church, curriculum publisher, university or
  tour operator.</p>

  ${CH("How to cite")}
  <p style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;line-height:1.75;color:var(--parch-dim)">
  Halverson, Taylor. <i>The Journeys of Paul: An Interactive Study Atlas</i>. ${YR}.<br>
  Cite a single place or week by its permalink &mdash; the <b>Copy link</b> tool in the toolbar returns the
  exact address of the view on screen.</p>

  <p style="margin-top:20px;font-size:12.5px;color:var(--muted)">Corrections and source suggestions are
  welcome by way of <a href="https://insights.taylorhalverson.com" target="_blank" rel="noopener">insights.taylorhalverson.com</a>.</p>
  </div>

  <div data-apane="terms" hidden>
  ${CH("1. What this is")}
  <p style="color:var(--muted);font-size:13px">This beta presents a schematic educational reconstruction based on selected published research. Dates,
  elevations, dimensions, routes, and disputed identifications may be simplified. Where evidence is uncertain,
  the presentation offers one plausible interpretation rather than a definitive conclusion.</p>
  <p>The Journeys of Paul: An Interactive Study Atlas is a teaching aid and reconstruction, built and owned by
  Taylor Halverson, Ph.D. It is not a survey document or a work of original scholarship &mdash; see the
  <b>About</b> tab and the <b>Sources &amp; method</b> panel for what that means and what confidence each part
  of it carries.</p>

  ${CH("2. License to use")}
  <p>Taylor Halverson grants anyone accessing this atlas a personal, non-exclusive, non-transferable license to
  view and use it for personal study, teaching, and classroom use. Redistribution of the atlas itself, or
  extraction of its data, essays, or maps for republication elsewhere, requires the author's prior written
  permission. Third-party components (typefaces, code libraries) remain under their own licenses; see the
  <b>Credits &amp; Licences</b> tab.</p>

  ${CH("3. Scripture text")}
  <p>Scripture quotations are from the World English Bible (WEB), which is dedicated to the public domain
  worldwide; no permission is required to reproduce it, and none is claimed here beyond what this license
  already grants for the atlas as a whole.</p>

  ${CH("4. No warranty of scholarly conclusion")}
  <p>Because this atlas represents disputed historical and geographical reconstructions, Taylor Halverson makes
  no warranty that any specific dating, identification, route or interpretation shown will not be revised in a
  later edition. It is provided "as is" for its stated teaching purpose.</p>

  ${CH("5. Limitation of liability")}
  <p>To the extent permitted by law, liability for any claim arising from this atlas is limited to the amount
  paid for access to it, if any.</p>

  ${CH("6. Contact")}
  <p>For licensing, permissions, or rights questions, contact by way of
  <a href="https://insights.taylorhalverson.com" target="_blank" rel="noopener">insights.taylorhalverson.com</a>.</p>
  </div>
</div>`);
  const tabs = [...document.querySelectorAll("#abtabs .rtab")];
  const panes = [...document.querySelectorAll("[data-apane]")];
  tabs.forEach(b => b.onclick = () => {
    tabs.forEach(x => x.classList.toggle("on", x === b));
    panes.forEach(p => { p.hidden = p.dataset.apane !== b.dataset.atab; });
  });
  if (tab === "credits") tabs[1].click();
  if (tab === "terms") tabs[2].click();
}
const CH = (t) => `<h4 style="margin:22px 0 6px;font-family:'IBM Plex Mono',monospace;font-size:10px;` +
  `letter-spacing:.14em;text-transform:uppercase;color:var(--gold)">${t}</h4>`;
$("#btnAbout").onclick = () => openAbout("about");

$("#btnHelp").onclick = () => openModal("How to use this atlas", `<div class="help">
  <p><span class="chip" data-tour="1">Take the guided tour</span></p>
  <p><b>The timeline is the spine.</b> Drag the scrubber, or press <kbd>Space</kbd> to watch the journeys
  draw themselves in sequence; <kbd>←</kbd> and <kbd>→</kbd> step one recorded stop at a time. Routes appear
  only up to the year you are standing in, so you see what Paul had done by any given date.</p>
  <p><b>The left rail lists the seven itineraries.</b> Click a name to focus it and fit it on the map;
  click its coloured dot to hide it. Click any stop to open that city.</p>
  <p><b>Every city panel carries eight things:</b> where it appears in the itineraries, what happened there,
  how he got there and how long it took, the scripture in the World English Bible, the city's own
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
  <p><b>Study weeks.</b> The third rail tab lists a 52-week reading year through the New Testament. Pick a
  week and the map enters <i>lesson focus</i>: it flies to the theatre of that reading, brightens the places
  and itineraries the block covers, dims everything else, and opens a lesson card with the reading, a Gospel
  Library link, the letters in view, the Acts passages set there, and two discussion questions. Step weeks with
  the arrows on the badge over the map; ✕ leaves focus. Every city panel also lists which weeks are set there.
  Weeks 1–26 draw on the Gospel gazetteer and turn that layer on for you; weeks 27–52 follow Paul.</p>
  <p><b>Sources</b> gives the bibliography, the rules the atlas is built on, how site-identification
  confidence is graded, and the five external anchors the whole chronology hangs from. <b>Print</b> makes
  study sheets — one Letter page per city or per itinerary, with your own notes and ruled space, ready for a
  notebook or a PDF. <b>Copy link</b> copies a permalink to exactly the view you are looking at: the city,
  the study week, the itinerary and the year all travel in the address, so you can send a class
  straight to one place (<i>…#philippi</i>, <i>…#week=30</i>, <i>…#corinth&amp;week=34</i>).</p>
  <p><b>The map</b> uses a bundled schematic coastline rather than live basemap imagery. Zoom and pan to
  explore places and routes. <b>Present</b> increases route weight, marker size, labels, and article text for
  classroom projection; that choice is remembered.</p>
  <p><b>Map layers.</b> Roman roads are traced through cities and road-stations named in the ancient
  itineraries. Provinces are labelled but deliberately <i>not</i> outlined: provincial boundaries moved
  repeatedly in this century and no trustworthy geometry for them exists.</p>
  <p><b>Under the timeline</b> run the emperors, the governors of Judea and the dated events of the wider
  world — click any of them to jump the map to that year and read the note. <b>Companions</b> charts which
  named person appears on which itinerary. <b>Distance</b> now takes a month: the sea was legally and
  practically closed from November to March, and the summer etesian northerlies made westward runs crawl.
  The <b>km</b> button cycles kilometres, Roman miles (1,479 m) and stadia (185 m).</p>
  <p><b>Reading the text.</b> 'Read the full passage' in any city panel, in a reading-plan entry, or beside
  a person's references links out to the World English Bible (WEB) at biblegateway.com — this atlas calls
  no scripture API of its own.</p>
  <p><b>Compare</b> puts two journeys side by side with distances, sea-versus-land mileage, companions and
  the letters written in each period, and will <b>overlay both routes on the map</b> — the second drawn
  dashed, every city they share ringed in gold, with a 'shared only' filter.
  <b>Distance</b> measures between any two sites at ancient rates of travel.</p>
  <p><b>The Gospels.</b> Turn on <b>Gospel sites</b> in the map layers for thirty-two places from the life
  of Jesus — Bethlehem, Nazareth, Capernaum, Caesarea Philippi, Gethsemane, Golgotha and the rest — graded
  for confidence the same way Paul's cities are. Study weeks 1–26 turn the layer on for you and
  focus the map on that week's ground. <b>Quiz</b> drills the map: read the clue, click the place, and a
  wrong click tells you how far off you were.</p>
  <p><b>Textual notes.</b> Where the Received Text behind a familiar reading is not supported by the earliest
  manuscripts — the longer ending of Mark, the woman taken in adultery, Acts 8:37, the Johannine Comma — the
  passage reader says so plainly underneath the text.</p>
  <p style="color:var(--muted);font-size:12.5px"><b>On the dating.</b> Absolute years are reconstructions.
  The fixed points are Gallio's proconsulship of Achaia in AD 51–52 (the Delphi inscription, cf. Acts 18:12),
  the death of Aretas IV c. AD 40 (2 Cor 11:32), and Festus succeeding Felix c. AD 59. Everything else is
  counted forward and backward from those, so dates here may differ by a year or two from other schemes.
  The final journey is shown dashed because it rests on the Pastoral Epistles and on Clement of Rome
  rather than on Acts.</p></div>`);

/* ---------- overlay layers: roads, provinces, epistles ---------- */
const layerState = { roads: false, provinces: false, letters: false, gospel: false };
const roadLayer = L.layerGroup(), provLayer = L.layerGroup(), letterLayer = L.layerGroup();

/* ---------- Gospel-era sites (data/gospels.js) ----------
   Their own layer, off by default: this is Paul's atlas, and the Gospel gazetteer is
   for study weeks 1–26. Cool blue markers keep the two eras visually distinct. */
const gospelLayer = L.layerGroup();
const GOSPEL_IDS = (window.GOSPEL_SITE_IDS || []).filter(id => P[id]);
const gospelMarks = {};
GOSPEL_IDS.forEach(id => {
  const p = P[id], major = p.tier === "major";
  const m = L.circleMarker([p.lat, p.lng], { radius: major ? 6 : 4.5, weight: 2,
    color: "#a9d2e0", fillColor: "#20475a", fillOpacity: .95, opacity: .9, className: "marker-dot" })
    .addTo(gospelLayer);
  m.on("click", () => selectPlace(id));
  m.bindTooltip(p.name.split(" (")[0], { permanent: true, direction: "right", offset: [7, 0],
    className: "plabel gospel" + (major ? "" : " small") });
  gospelMarks[id] = m;
});
function styleGospel() {
  if (!layerState.gospel) return;
  const F = state.cfm.week != null ? state.cfm : null;
  const present = document.body.classList.contains("present");
  GOSPEL_IDS.forEach(id => {
    const m = gospelMarks[id], sel = state.place === id, rel = !F || F.places.has(id);
    m.setStyle({
      opacity: rel ? 1 : .14, fillOpacity: rel ? .95 : .2,
      color: sel ? "#c9a227" : rel && F ? "#dff0f6" : "#a9d2e0",
      fillColor: sel ? "#c9a227" : "#20475a",
      weight: (sel ? 4 : F && rel ? 3 : 2) * (present ? 1.6 : 1),
      radius: ((P[id].tier === "major" ? 6 : 4.5) + (sel ? 2.5 : F && rel ? 1.5 : 0)) * (present ? 1.5 : 1)
    });
  });
}
function updateGospelLabels() {
  if (!layerState.gospel) return;
  const z = map.getZoom(), F = state.cfm.week != null ? state.cfm : null, kept = [];
  GOSPEL_IDS.forEach(id => {
    const t = gospelMarks[id].getTooltip(), el = t && t.getElement(); if (!el) return;
    const major = P[id].tier === "major", focus = F && F.places.has(id);
    const show = focus || z >= 9 || (major && z >= 7);
    el.style.display = show ? "" : "none";
    if (!show) return;
    const r = el.getBoundingClientRect();
    const clash = kept.some(k => !(r.right < k.left - 2 || r.left > k.right + 2 ||
      r.bottom < k.top - 1 || r.top > k.bottom + 1));
    if (clash) el.style.display = "none"; else kept.push(r);
  });
}
map.on("zoomend", updateGospelLabels);
map.on("moveend", () => setTimeout(updateGospelLabels, 100));

(window.PAUL_ROADS || []).forEach(r => {
  L.polyline(r.pts, { color: "#8a6a2f", weight: 2.4, opacity: .55, dashArray: "1 7",
    lineCap: "round" }).bindTooltip(`<b style="font-family:'EB Garamond',serif;font-size:14px">${r.name}</b>
      <div style="max-width:250px;font-size:11.5px;line-height:1.5;color:var(--parch-dim);margin-top:3px">${r.note}</div>`,
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
  const g = key === "roads" ? roadLayer : key === "provinces" ? provLayer
    : key === "gospel" ? gospelLayer : letterLayer;
  on ? g.addTo(map) : map.removeLayer(g);
  if (key === "letters" && on) setTimeout(updateLetterLabels, 60);
  if (key === "gospel") { styleGospel(); setTimeout(updateGospelLabels, 60); }
}
map.on("zoomend", updateLetterLabels);
map.on("moveend", () => setTimeout(updateLetterLabels, 100));
document.querySelectorAll("#layers input[data-layer]").forEach(cb =>
  cb.addEventListener("change", () => setLayer(cb.dataset.layer, cb.checked)));

function showLetter(id) {
  const l = (window.PAUL_LETTERS || []).find(x => x.id === id); if (!l) return;
  openModal(l.name, `
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.08em;color:var(--muted);margin-bottom:14px">
      ${l.date} · WRITTEN FROM ${P[l.from] ? P[l.from].name.toUpperCase() : "ORIGIN UNKNOWN"} · SENT TO ${P[l.to].name.toUpperCase()}${l.authorship ? ` · <span style="color:${l.authorship === "undisputed" ? "var(--muted)" : "#b5793a"}">${l.authorship.toUpperCase()} AUTHORSHIP</span>` : ""}</div>
    ${l.carrier ? `<div class="sect"><h4>Carried by</h4><p style="font-size:15px;color:var(--parch);
      font-family:'EB Garamond',serif;margin:0 0 6px">${l.carrier}</p>
      <p style="font-size:12.5px;color:var(--muted);line-height:1.6;margin:0">${l.carrierNote}</p></div>` : ""}
    <p style="font-size:14px;line-height:1.7;color:var(--parch-dim);text-wrap:pretty">${l.occasion}</p>
    <div class="verse" style="margin:18px 0"><div class="ref">${l.key}</div><p>${l.keyText}</p></div>
    <p style="font-size:12.5px;line-height:1.6;color:var(--muted)">${l.note}</p>
    <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
      ${P[l.from] ? `<span class="chip" data-go="${l.from}">Open ${P[l.from].name}</span>` : ""}
      <span class="chip" data-go="${l.to}">Open ${P[l.to].name}</span></div>`);
  $("#mbody").querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => {
    closeModal(); selectPlace(el.dataset.go);
    flyToVisible(P[el.dataset.go].lat, P[el.dataset.go].lng, Math.max(map.getZoom(), 6), { duration: .9 });
  }));
}

$("#btnLetters").onclick = () => {
  openModal("The thirteen letters", `
    <p style="font-size:13px;line-height:1.65;color:var(--muted);margin:0 0 16px">
      Where each letter was written and where it went. Turn on <b style="color:var(--parch-dim)">Epistles — written &amp; sent</b>
      in the map layers to see them drawn as arcs.</p>
    <div class="plist">${(window.PAUL_LETTERS || []).map(l => `<div class="prow" data-openl="${l.id}" style="cursor:pointer">
      <h4 style="color:var(--parch)">${l.name} <span style="font-size:11px;color:var(--muted)">— open →</span></h4>
      <div class="prole">${l.date} · from ${P[l.from] ? P[l.from].name : "unknown origin"} → to ${P[l.to].name}${l.authorship && l.authorship !== "undisputed" ? ` · <span style="color:#b5793a">${l.authorship}</span>` : ""}</div>
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
      style="width:100%;background:var(--ink);border:1px solid var(--line);color:var(--parch);padding:9px 11px;
      border-radius:3px;font-family:inherit;font-size:13px;margin-bottom:16px">
    <div class="plist" id="plist"></div>`);
  const draw = (q) => {
    q = (q || "").trim().toLowerCase();
    const rows = people.filter(pp => !q || (pp.name + " " + pp.role + " " + pp.note + " " +
      pp.refs.join(" ") + " " + pp.places.map(id => P[id] ? P[id].name : "").join(" ")).toLowerCase().indexOf(q) > -1);
    $("#plist").innerHTML = rows.length ? rows.map(pp => `<div class="prow" data-open="${pp.name}" style="cursor:pointer">
      <h4 style="color:var(--parch)">${pp.name} <span style="font-size:11px;color:var(--muted)">— open →</span></h4><div class="prole">${pp.role}</div>
      <p>${pp.note}</p>
      <div style="margin:6px 0">${pp.places.map(id => P[id]
        ? `<span class="chip" data-go="${id}">${P[id].name}</span>` : "").join("")}</div>
      <div class="pref">${pp.refs.join(" · ")}</div></div>`).join("")
      : `<p style="color:var(--muted);font-size:13px">No one by that name in the atlas.</p>`;
    $("#plist").querySelectorAll("[data-open]").forEach(el => el.addEventListener("click", e => {
      if (e.target.closest("[data-go]")) return;
      closeModal(); showPerson(el.dataset.open);
    }));
    $("#plist").querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => {
      closeModal(); selectPlace(el.dataset.go);
      flyToVisible(P[el.dataset.go].lat, P[el.dataset.go].lng, Math.max(map.getZoom(), 7), { duration: .9 });
    }));
  };
  $("#pq").addEventListener("input", e => draw(e.target.value));
  draw("");
};

/* ---------- chronology ---------- */
$("#btnDates").onclick = () => {
  const C = window.PAUL_CHRONOLOGY;
  openModal("Chronology — three reconstructions", `
    <p style="font-size:13px;line-height:1.65;color:var(--parch-dim);margin:0 0 8px">
      Not one date in Paul's life is given in the New Testament. Every year below is reconstructed from
      a handful of external fixed points. The middle column is the scheme this map uses.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin:12px 0 18px">
      ${C.schemes.map(s => `<div style="flex:1 1 220px"><div style="font-family:'IBM Plex Mono',monospace;
        font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${s.id === "std" ? "var(--gold)" : "var(--muted)"}">
        ${s.label}</div><div style="font-size:12px;line-height:1.55;color:var(--parch-dim);margin-top:4px">${s.note}</div></div>`).join("")}
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
      <span style="color:var(--muted)">— ${tr.dataset.y} on the standard scheme. ${tr.querySelector(".bs") ? tr.querySelector(".bs").textContent : ""}</span>`;
  }));
};

/* ---------- reading plan ---------- */
const READ = window.PAUL_READING || [];
let readIdx = -1;
function buildReading() {
  $("#readlist").innerHTML = READ.map((r, i) => `<div class="ritem${i === readIdx ? " on" : ""}" data-r="${i}">
    <div class="rref">${r.ref}</div><div class="rttl">${r.title}</div>
    <div class="rask">${r.ask}<div style="margin-top:8px"><span class="chip" data-read="${i}">Read the passage — full WEB text</span></div></div></div>`).join("");
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
  if (p) flyToVisible(p.lat, p.lng, Math.max(map.getZoom(), 6), { duration: .9 });
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
  document.body.classList.toggle("railfocus", tab.dataset.tab !== "itin");
  railEl.scrollTop = 0;
}));

/* When the article panel overlays the map (tablet landscape, 821–1080px) its width is
   reserved as padding so a fitted route never lands underneath it. */
/* one definition of "compact chrome": phone portrait, or any short landscape screen */
function isCompact() {
  const w = window.innerWidth, h = window.innerHeight;
  return w <= 820 || (h <= 540 && w <= 1000);
}
function fitPad() {
  const w = window.innerWidth, h = window.innerHeight;
  if (!$("#app").classList.contains("detail-open")) return {};
  if (w <= 820 && h > w)                                    // phone portrait: half-height sheet
    return { paddingBottomRight: [0, Math.round(h * 0.52)] };
  if (h <= 540 && w <= 1000)                                // phone landscape: panel on the left
    return { paddingTopLeft: [Math.max(296, Math.min(430, w * 0.46)), 0] };
  if (w > 820 && w <= 1080)                                 // tablet: overlay panel on the right
    return { paddingBottomRight: [Math.min(380, w * 0.82), 0] };
  return {};
}
/* fly so the target lands centred in whatever part of the map isn't covered by an open panel,
   instead of dead-centre on the whole map div (which can be half hidden behind the panel) */
function flyToVisible(lat, lng, zoom, opts) {
  const z = zoom != null ? zoom : map.getZoom();
  const pad = fitPad();
  const tl = pad.paddingTopLeft || [0, 0], br = pad.paddingBottomRight || [0, 0];
  if (!tl[0] && !tl[1] && !br[0] && !br[1]) { map.flyTo([lat, lng], z, opts); return; }
  const markerPx = map.project([lat, lng], z);
  const centerPx = markerPx.add(L.point((br[0] - tl[0]) / 2, (br[1] - tl[1]) / 2));
  map.flyTo(map.unproject(centerPx, z), z, opts);
}

/* the sheet's grab bar expands it to full height and back */
$("#detail").addEventListener("click", e => {
  if (window.innerWidth > 820 || window.innerHeight < window.innerWidth) return;
  if (e.target.closest("button, a, .chip, input")) return;
  const head = e.target.closest(".dhead");
  if (!head || e.clientY - head.getBoundingClientRect().top > 22) return;
  document.body.classList.toggle("sheet-full");
  setTimeout(() => map.invalidateSize(true), 300);
});

/* bottom action bar (<=820px). Each button dismisses whatever overlays the map,
   lets the map re-measure, and only then changes what is shown. */
function tabMark(id) {
  document.querySelectorAll("#tabbar button").forEach(b => b.classList.toggle("on", b.id === id));
}
function railTo(tab, id) {   /* kept for keyboard and deep links */
  const open = !document.body.classList.contains("rail-open") ||
    !document.querySelector('.rtab[data-tab="' + tab + '"]').classList.contains("on");
  document.body.classList.toggle("rail-open", open);
  if (open) {
    const t = document.querySelector('.rtab[data-tab="' + tab + '"]');
    if (t && !t.classList.contains("on")) t.click();
  }
  tabMark(open ? id : "tbMap");
}
/* one Menu button: the drawer already carries itineraries, weeks, reading and tools */
$("#railClose").onclick = () => {
  if (document.body.classList.contains("rail-open")) {
    document.body.classList.remove("rail-open");
    tabMark("tbMap");
  } else {
    document.body.classList.add("rail-collapsed");
    $("#btnRailToggle").classList.remove("on");
    store.set("railcollapsed", "1");
    setTimeout(() => { map.invalidateSize(true); renderMap(); }, 300);
  }
};
$("#tbIndex").onclick = () => {
  const open = document.body.classList.toggle("rail-open");
  if (open) {
    railEl.scrollTop = 0;
    const itin = document.querySelector('.rtab[data-tab="itin"]');
    if (itin && !itin.classList.contains("on")) itin.click();
  }
  tabMark(open ? "tbIndex" : "tbMap");
};

/* the timeline is a tool, not furniture: on a small screen it stays out of the way
   until it is asked for, and the map keeps the room */
function setTimeline(on) {
  document.body.classList.toggle("timeline-on", on);
  $("#btnTimeTop").classList.toggle("on", on);
  $("#tbTime").classList.toggle("on", on);
  store.set("timeline", on ? "1" : "");
  setTimeout(() => { map.invalidateSize(true); renderMap(); }, 300);
}
const toggleTimeline = () => setTimeline(!document.body.classList.contains("timeline-on"));
$("#btnTimeTop").onclick = toggleTimeline;
$("#tbTime").onclick = toggleTimeline;
setTimeline(store.get("timeline") === "1");   /* off unless the reader asked for it */

/* tablet landscape: the index column folds away so the map can have the width */
$("#btnRailToggle").onclick = () => {
  const off = document.body.classList.toggle("rail-collapsed");
  $("#btnRailToggle").classList.toggle("on", !off);
  store.set("railcollapsed", off ? "1" : "");
  setTimeout(() => { map.invalidateSize(true); renderMap(); }, 300);
};
if (store.get("railcollapsed") === "1") document.body.classList.add("rail-collapsed");
else $("#btnRailToggle").classList.add("on");
$("#tbMap").onclick = () => {
  document.body.classList.remove("rail-open");
  if ($("#app").classList.contains("detail-open")) closeDetail();
  else setTimeout(() => map.invalidateSize(true), 300);
  tabMark("tbMap");
};
$("#tbRead").onclick = () => {
  document.body.classList.add("rail-open");
  document.querySelector('.rtab[data-tab="read"]').click();
  tabMark("tbRead");
};

/* mobile drawer + tool relocation */
$("#btnMenu").onclick = () => document.body.classList.toggle("rail-open");
$("#map").addEventListener("pointerdown", () => {
  document.body.classList.remove("rail-open");
  if (isCompact()) tabMark("tbMap");
});
const toolsEl = $("#tools"), headerEl = document.querySelector("header"), railEl = $("#rail");
const moreWrap = $("#moreWrap"), moreMenu = $("#moreMenu"), btnMore = $("#btnMore"),
  pinnedEl = document.querySelector(".pinned");
function closeMore() { moreMenu.classList.remove("open"); btnMore.classList.remove("on"); }
btnMore.onclick = e => {
  e.stopPropagation();
  const open = moreMenu.classList.toggle("open");
  btnMore.classList.toggle("on", open);
};
moreMenu.addEventListener("click", e => { if (e.target.closest("button")) closeMore(); });
document.addEventListener("click", e => { if (!moreWrap.contains(e.target)) closeMore(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMore(); });

function placeTools() {
  const narrow = window.innerWidth <= 1150, phone = isCompact();
  if (narrow && toolsEl.parentElement !== railEl) railEl.insertBefore(toolsEl, railEl.firstChild);
  if (!narrow && toolsEl.parentElement !== headerEl) headerEl.insertBefore(toolsEl, pinnedEl);
  /* on a phone the header has no room for Map — it joins the rail set; Light/Dark stays pinned */
  const roam = [];
  roam.forEach(b => {
    if (phone && b.parentElement !== toolsEl) toolsEl.appendChild(b);
    if (!phone && b.parentElement !== pinnedEl) pinnedEl.insertBefore(b, $("#btnTheme"));
  });  /* pull everything back, then spill whatever will not fit into the More menu */
  while (moreMenu.firstChild) toolsEl.appendChild(moreMenu.firstChild);
  closeMore();
  if (narrow) { moreWrap.classList.remove("on"); return; }
  moreWrap.classList.add("on");
  /* secondary tools always live in the menu, so the header set never shuffles with window width */
  [...toolsEl.children].filter(b => b.hasAttribute("data-secondary"))
    .forEach(b => moreMenu.appendChild(b));
  let guard = 40;
  while (toolsEl.scrollWidth > toolsEl.clientWidth + 1 && toolsEl.children.length > 1 && guard--)
    moreMenu.insertBefore(toolsEl.lastElementChild, moreMenu.firstChild);
  moreWrap.classList.toggle("on", moreMenu.children.length > 0);
}
placeTools();
window.addEventListener("resize", placeTools);

/* ---------- WEB passage reader (links out on demand; nothing fetched by this app) ---------- */
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
function variantNotes(q) {
  const V = window.WEB_VARIANTS || [];
  const m = String(q).match(/^\s*((?:[1-3]\s*)?[A-Za-z]+(?:\s+[A-Za-z]+)?)\s+(\d+)/);
  if (!m) return "";
  const book = m[1].toLowerCase().replace(/\s+/g, " ").trim(), ch = +m[2];
  const hits = V.filter(v => book.indexOf(v.book) > -1 && v.ch === ch);
  if (!hits.length) return "";
  const seen = {};
  return `<div style="margin-top:22px;padding-top:14px;border-top:1px solid var(--line)">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;letter-spacing:.18em;
      text-transform:uppercase;color:var(--gold);margin-bottom:8px">Textual note</div>
    ${hits.filter(v => (seen[v.ref] ? false : (seen[v.ref] = true))).map(v => `
      <p style="font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;line-height:1.65;
        color:var(--parch-dim);margin:0 0 10px"><b style="color:var(--parch)">${v.ref} — ${v.title}.</b>
        ${v.note}</p>`).join("")}
    <p style="font-family:'IBM Plex Sans',sans-serif;font-size:11.5px;line-height:1.6;color:var(--muted);margin:0">
      Noted because the atlas grades the confidence of a site identification, and the text deserves
      the same candour. Nothing here is a reason to distrust the passage.</p></div>`;
}
/* Scripture text: the full New Testament (World English Bible, public domain) is bundled in
   data/web-nt.js as window.WEB_TEXT, so every passage renders here, offline, with no link-out. */
function localPassage(q) {
  const T = window.WEB_TEXT; if (!T) return null;
  // "Book", "Book C", "Book C1-C2" (whole chapters), "Book C:V", "Book C:V1-V2" (one chapter),
  // or "Book C1:V1-C2:V2" (a verse range spanning chapters, e.g. reading-plan segments).
  const m = String(q).trim().match(/^((?:[1-3]\s*)?[A-Za-z][A-Za-z ]*?)(?:\s+(\d+)(?::(\d+))?(?:-(?:(\d+):)?(\d+))?)?$/);
  if (!m) return null;
  const want = m[1].trim().toLowerCase();
  const bookKey = Object.keys(T).find(b => b.toLowerCase() === want
    || b.toLowerCase().replace(/\s+/g, "") === want.replace(/\s+/g, ""));
  if (!bookKey) return null;
  const allCh = Object.keys(T[bookKey]).map(Number);
  const hasCh = m[2] != null, vFromGiven = m[3] != null, hasDash = m[5] != null;
  const chFrom = hasCh ? +m[2] : Math.min.apply(null, allCh);
  const vFrom = vFromGiven ? +m[3] : 1;
  let chTo, vTo;
  if (!hasCh) { chTo = Math.max.apply(null, allCh); vTo = 9999; }
  else if (hasDash && m[4] != null) { chTo = +m[4]; vTo = +m[5]; }
  else if (hasDash && vFromGiven) { chTo = chFrom; vTo = +m[5]; }
  else if (hasDash) { chTo = +m[5]; vTo = 9999; }
  else { chTo = chFrom; vTo = vFromGiven ? vFrom : 9999; }
  const verses = [];
  for (let c = chFrom; c <= chTo; c++) {
    const ch = T[bookKey][c]; if (!ch) continue;
    Object.keys(ch).map(Number).sort((a, b) => a - b)
      .filter(v => (c > chFrom || v >= vFrom) && (c < chTo || v <= vTo))
      .forEach(v => verses.push({ chapter: c, verse: v, text: ch[String(v)] }));
  }
  if (!verses.length) return null;
  const ref = !hasCh ? bookKey
    : chFrom === chTo
      ? `${bookKey} ${chFrom}${vFromGiven ? ":" + vFrom + (hasDash ? "-" + vTo : "") : ""}`
      : `${bookKey} ${chFrom}${vFromGiven ? ":" + vFrom : ""}-${chTo}${(m[4] != null || vFromGiven) ? ":" + vTo : ""}`;
  return { reference: ref, verses, local: true };
}
function openPassage(ref) {
  if (!ref) return;
  const q = ref.replace(/[–—]/g, "-").trim();
  const local = localPassage(q);
  if (local) {
    openModal(q + " — World English Bible", `<div class="passage" id="ptext"></div>`);
    return render(local);
  }
  openModal(q + " — World English Bible", `<div class="passage" style="color:var(--muted);font-size:13.5px;line-height:1.7">
    "${q}" isn't in the atlas's bundled New Testament text (the World English Bible, public domain worldwide).
    Every reference cited elsewhere in this atlas is bundled and readable offline — try Search above, or the
    Read Acts tab in the left rail, for the full passage.</div>`);
  function render(data) {
    const box = $("#ptext"); if (!box) return;
    box.style.color = "";
    box.innerHTML = (data.verses || []).map(v =>
      `<span class="vn">${v.chapter}:${v.verse}</span>${linkPlaces(v.text.trim())} `).join("") +
      `<div style="margin-top:18px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted);
        letter-spacing:.06em">${data.reference || q} · WORLD ENGLISH BIBLE (WEB) — public domain worldwide</div>` +
      variantNotes(data.reference || q);
    box.querySelectorAll("[data-pl]").forEach(el => el.addEventListener("click", () => {
      const id = el.dataset.pl; closeModal(); selectPlace(id);
      flyToVisible(P[id].lat, P[id].lng, Math.max(map.getZoom(), 6), { duration: .9 });
    }));
  }
}
function showPassagePanel(ref) {
  if (!ref) return;
  const q = ref.replace(/[–—]/g, "-").trim();
  panelHist.push({ t: "passage", k: q });
  state.place = null;
  const data = localPassage(q);
  $("#detail").innerHTML = panelHead(q, "WORLD ENGLISH BIBLE (WEB) — public domain worldwide", "SCRIPTURE") +
    `<div class="sect"><div class="passage" id="ptext">${data ? "" :
      `<p style="color:var(--muted);font-size:13.5px;line-height:1.7">"${q}" isn't in the atlas's bundled
       New Testament text. Every reference cited elsewhere in this atlas is bundled and readable offline —
       try Search above instead.</p>`}</div></div>`;
  wirePanel();
  if (data) {
    const box = $("#ptext");
    box.innerHTML = data.verses.map(v =>
      `<span class="vn">${v.chapter}:${v.verse}</span>${linkPlaces(v.text.trim())} `).join("") +
      variantNotes(data.reference);
    box.querySelectorAll("[data-pl]").forEach(el => el.addEventListener("click", () => {
      const id = el.dataset.pl; selectPlace(id);
      flyToVisible(P[id].lat, P[id].lng, Math.max(map.getZoom(), 6), { duration: .9 });
    }));
  }
}
document.addEventListener("click", e => {
  const chip = e.target.closest("[data-passage]");
  if (chip) showPassagePanel(chip.dataset.passage);
  const rd = e.target.closest("[data-read]");
  if (rd && !e.target.closest("#detail")) { e.stopPropagation(); showPassagePanel(READ[+rd.dataset.read].ref); }
});

/* ---------- world-events lanes under the timeline ---------- */
function buildContext() {
  const C = window.PAUL_CONTEXT; if (!C) return;
  const lanes = C.lanes.map(l => `<div class="lane"><div class="lbl">${l.label}</div>
    <div class="strip">${l.items.map((it, i) => {
      const a = Math.max(T0, it.t0), b = Math.min(T1, it.t1);
      return `<div class="seg" data-lane="${l.id}" data-i="${i}"
        style="left:${((a - T0) / (T1 - T0)) * 100}%;width:${((b - a) / (T1 - T0)) * 100}%;
        background:${l.color};color:${readableOn(l.color)}">${it.name}</div>`;
    }).join("")}</div></div>`).join("");
  const evts = `<div class="lane"><div class="lbl">Events</div><div class="strip">
    ${C.events.map((e, i) => `<div class="evt" data-evt="${i}"
      style="left:${((e.t - T0) / (T1 - T0)) * 100}%"></div>`).join("")}</div></div>`;
  $("#ctxlanes").innerHTML = lanes + evts;
  const say = (title, note, year) => {
    if (year != null) { pause(); state.year = year; renderAll(); }
    $("#eventlabel").innerHTML = `<b>${title}</b> <span style="color:var(--muted)">— ${note}</span>`;
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
    <p style="font-size:13px;line-height:1.65;color:var(--parch-dim);margin:0 0 6px">
      A filled dot means this person is named at a place on that itinerary. It is a map of overlap in the
      record, not a claim that they walked every stage — Luke names companions only when it matters to him.</p>
    <p style="font-size:12px;color:var(--muted);margin:0 0 16px">Sorted by how many itineraries each appears in.
      Click a name for their entry.</p>
    <div class="netwrap"><table class="net">
      <thead><tr><th class="who">Person</th>${J.map(j =>
        `<th><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${j.color};
          margin-bottom:3px"></span><br>${j.name.replace(/^The /, "").replace(" Journey", "")}</th>`).join("")}
        <th>Total</th></tr></thead>
      <tbody>${rows.map(r => `<tr>
        <td class="who" data-person="${r.pp.name}">${r.pp.name}</td>
        ${r.per.map((on, i) => `<td><span class="cell" style="background:${on ? J[i].color : "#1d282f"}"></span></td>`).join("")}
        <td style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted)">${r.n}</td></tr>`).join("")}
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

/* ---------- study weeks: lesson focus mode ---------- */
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
    ${w.places.length ? "" : `<div class="wo">${w.week === 0 ? "ORIENTATION" : "OUTSIDE THIS ATLAS"}</div>`}</div>`).join("");
  $("#wlist").querySelectorAll(".witem").forEach(el =>
    el.addEventListener("click", () => setWeek(+el.dataset.w)));
  if (state.cfm.week != null) $("#cfmsel").value = String(state.cfm.week);
}
function setWeek(n) {
  const w = CFM.find(x => x.week === n); if (!w) return;
  pause();
  state.cfm = { week: n, places: new Set(w.places), journeys: new Set(w.journeys) };
  /* Gospel weeks: turn the Gospel-site layer on automatically, since that is where their places live */
  if (w.places.some(id => GOSPEL_IDS.indexOf(id) > -1) && !layerState.gospel) {
    setLayer("gospel", true);
    const cb = document.querySelector('#layers input[data-layer="gospel"]');
    if (cb) cb.checked = true;
  }
  w.journeys.forEach(id => state.visible.add(id));
  // routes only draw up to the current year, so wind the clock to the end of the relevant itineraries
  let end = 0;
  w.journeys.forEach(id => { const j = journeyOf(id); if (j) end = Math.max(end, j.timeline[j.timeline.length - 1]); });
  if (end) { state.year = end; if (w.journeys.length) state.active = w.journeys[w.journeys.length - 1]; }
  buildRail(); buildCFM(); renderAll();
  $("#focusbadge").classList.add("on");
  $("#fbtitle").textContent = w.title;
  const pts = w.places.map(id => P[id]).filter(Boolean).map(p => [p.lat, p.lng]);
  const b = pts.length ? L.latLngBounds(pts) : L.latLngBounds(w.bounds[0], w.bounds[1]);
  map.flyToBounds(b.pad(0.12), { padding: [40, 40], duration: 1.2, maxZoom: 9, ...fitPad() });
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
  document.body.classList.remove("gweek");
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
        text-transform:uppercase;color:var(--muted);margin-bottom:5px">${g.label}</div>
      ${items.map(i => `<a href="${i.u}" target="_blank" rel="noopener" style="display:block;
        font-family:'EB Garamond',serif;font-size:14.5px;line-height:1.35;color:var(--parch-dim);
        text-decoration:none;padding:4px 0 4px 10px;border-left:1px solid var(--line)">${i.t} <span
        style="color:var(--muted);font-size:11px">↗</span></a>`).join("")}</div>`;
  }).join("");
  return `<div class="sect"><h4>Background &amp; study resources</h4>
    <p style="font-size:12px;color:var(--muted);margin:0 0 12px">Videos, articles and books for this lesson from
      Taylor Halverson's <a href="${window.CFM_HUB}#week-${String(w.week).padStart(2, "0")}"
      target="_blank" rel="noopener">New Testament Resource Hub</a>${R.date ? ` · lesson week of ${R.date}` : ""}.</p>
    ${rows}</div>`;
}

function showCFMPanel(n) {
  const w = CFM.find(x => x.week === n); if (!w) return;
  panelHist.push({ t: "cfm", k: n });
  const sect = (t, h) => h ? `<div class="sect"><h4>${t}</h4>${h}</div>` : "";
  const ls = lettersFor(w);
  const readSegs = w.readings.split(";").map(s => s.trim()).filter(s => localPassage(s.replace(/[–—]/g, "-")));
  const actsReads = (window.PAUL_READING || []).filter(r => {
    const m = (w.readings.match(/Acts (\d+)[–-](\d+)/) || null);
    if (!m || r.ref.indexOf("Acts ") !== 0) return false;
    const ch = parseInt(r.ref.slice(5), 10);
    return ch >= +m[1] && ch <= +m[2];
  });
  $("#detail").innerHTML = `<div class="dhead">
    <button class="dclose" title="Close">×</button>
    <div class="dactions" style="margin-bottom:9px">
      <button class="tool" id="cfmPrev2">← Previous week</button>
      <button class="tool" id="cfmNext2">Next week →</button>
    </div>
    <div class="dsub" style="margin:0 0 5px">STUDY WEEK</div>
    <h2>${w.title}</h2>
    <div class="dsub">${w.readings}</div></div>` + `
    ${sect("Reading", `<p>${w.readings}</p>
      ${readSegs.length ? `<div class="tags">${readSegs.map(s =>
          `<span class="chip" data-passage="${s.replace(/[–—]/g, "-")}">Read ${s} — WEB text</span>`).join("")}</div>
        <p style="font-size:12px;color:var(--muted);margin-top:8px">Opens the full text right here.</p>`
        : `<p style="font-size:12.5px;color:var(--muted)">No set-apart scripture text for this week.</p>`}`)}
    ${resourceHTML(w)}
    ${sect("Where this happens", `<p>${w.coverage}</p>`)}
    ${w.places.length ? sect("Places in this lesson", `<div class="tags">${w.places
      .filter(id => P[id]).map(id => `<span class="chip" data-go="${id}">${P[id].name}</span>`).join("")}</div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px">Click a name to open it and centre the map.</p>`) : ""}
    ${w.journeys.length ? sect("Itineraries highlighted", `<div class="tags">${w.journeys.map(id => {
        const j = journeyOf(id); return j ? `<span class="chip" data-jump="${id}">${j.name} · ${j.years}</span>` : ""; }).join("")}</div>`) : ""}
    ${ls.length ? sect("Letters in view", ls.map(l => `<p style="margin:0 0 10px"><b style="color:var(--parch)">${l.name}</b> —
        written from <b>${P[l.from] ? P[l.from].name : l.from}</b> to <b>${P[l.to] ? P[l.to].name : l.to}</b>, ${l.date}.
        ${l.carrier ? `<br><span style="font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.1em;
          text-transform:uppercase;color:var(--carrier)">carried by ${l.carrier}</span>` : ""}
        <span class="chip" data-letterp="${l.id}">Open</span></p>`).join("") +
        `<p style="font-size:12px;color:var(--muted);margin:2px 0 0">The arcs are drawn on the map: origin → destination,
        with the courier named where scripture names one.</p>`) : ""}
    ${actsReads.length ? sect("Passages set on the map", `<div class="tags">${actsReads.map(r =>
        `<span class="chip" data-read="${r.ref}">${r.ref} — ${r.title}</span>`).join("")}</div>`) : ""}
    ${sect("For discussion", w.prompts.map(q => `<div class="discq"><p>${q}</p></div>`).join(""))}
  `;
  wirePanel();
  $("#cfmPrev2").onclick = () => stepWeek(-1);
  $("#cfmNext2").onclick = () => stepWeek(1);
  $("#detail .dclose").onclick = () => { exitCFM(); closeDetail(); };
  $("#detail").querySelectorAll("[data-jump]").forEach(el => el.addEventListener("click", () => {
    setActive(el.dataset.jump, true);
  }));
  $("#detail").querySelectorAll("[data-read]").forEach(el => el.addEventListener("click", () => showPassagePanel(el.dataset.read)));
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
  if (isCompact()) document.body.classList.add("rail-open");
  if (state.cfm.week != null) showCFMPanel(state.cfm.week);
};
$("#btnRead").onclick = () => {
  document.querySelector('.rtab[data-tab="read"]').click();
  if (isCompact()) document.body.classList.add("rail-open");
  document.body.classList.remove("rail-collapsed");
};

/* light / dark theme: remembered, defaults to the system setting */
(() => {
  const btn = $("#btnTheme"), meta = document.querySelector('meta[name="color-scheme"]');
  const apply = t => {
    const light = t === "light";
    document.body.classList.toggle("light", light);
    btn.textContent = light ? "Dark" : "Light";
    btn.title = light ? "Switch to dark mode" : "Switch to light mode";
    if (meta) meta.setAttribute("content", light ? "light" : "dark");
    try { localStorage.setItem("paul-theme", t); } catch (e) {}
  };
  let t = null;
  try { t = localStorage.getItem("paul-theme"); } catch (e) {}
  if (t !== "light" && t !== "dark")
    t = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  apply(t);
  btn.onclick = () => apply(document.body.classList.contains("light") ? "dark" : "light");
})();

/* basemap cycle */
/* basemap cycle: removed — the atlas ships with no live tile provider (see map init above) */

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
    ${sec("Scripture — World English Bible (WEB)", p.scripture.map(s =>
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
    ${wk.length ? sec("Study weeks", `<p class="small">${wk.map(w =>
      `Week ${w.week} — ${w.readings}`).join("<br>")}</p>`) : ""}
    <h2>Notes</h2>
    ${store.note(id) ? `<p>${stripTags(store.note(id)).replace(/\n/g, "<br>")}</p>` : ""}
    <div class="lines">${"<i></i>".repeat(6)}</div>
    <div class="foot"><b>Project Created by Taylor Halverson, Ph.D. (Beta mode)</b><br>
      The Journeys of Paul — an interactive atlas ·
      Scripture: World English Bible (WEB) · Dates are reconstructions; see Sources &amp; method.</div>
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
    <div class="foot"><b>Project Created by Taylor Halverson, Ph.D. (Beta mode)</b><br>
      The Journeys of Paul — an interactive atlas ·
      Dates are reconstructions; see Sources &amp; method.</div>
  </div>`;
}
function printSheets(html) {
  $("#printsheet").innerHTML = html;
  setTimeout(() => window.print(), 120);
}
window.addEventListener("afterprint", () => { $("#printsheet").innerHTML = ""; });

$("#btnExport").onclick = () => {
  const marked = Object.keys(store.d.marks).filter(id => P[id]);
  const cityIds = [...allPlaceIds];
  const wk = state.cfm.week != null ? CFM.find(w => w.week === state.cfm.week) : null;
  const view = [
    wk ? `Study week ${wk.week} — ${wk.readings}` : null,
    state.place ? P[state.place].name : null,
    state.active ? journeyOf(state.active).name : null,
    "AD " + state.year.toFixed(0)
  ].filter(Boolean).join(" · ");
  openModal("Export this lesson", `<div class="help">
    <p style="margin-bottom:14px">Everything a class needs to follow you: the link reopens this exact view,
    the handout is the same material on paper.</p>
    <h4 style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:7px">This view</h4>
    <p style="font-size:13px">${view}</p>
    <div style="display:flex;gap:8px;align-items:center;margin:6px 0 20px">
      <input id="exLink" readonly value="${location.href}"
        style="flex:1;min-width:0;background:var(--ink);border:1px solid var(--line);color:var(--parch-dim);
        border-radius:3px;padding:8px 10px;font-family:'IBM Plex Mono',monospace;font-size:11px">
      <button class="tool" id="exCopy">Copy link</button>
    </div>
    <h4 style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:7px">Handout</h4>
    <p style="font-size:13px">One Letter page per city or itinerary: narrative, scripture, history,
    archaeology, ancient testimony, gazetteer, and ruled space. Your saved notes print with the sheet.</p>
    <div class="tags" style="margin:12px 0 4px">
      ${state.place ? `<span class="chip" data-print="city:${state.place}">This city — ${P[state.place].name}</span>` : ""}
      ${state.active ? `<span class="chip" data-print="journey:${state.active}">This itinerary — ${journeyOf(state.active).name}</span>` : ""}
      ${wk && wk.places && wk.places.length ? `<span class="chip" data-print="week">This week — ${wk.places.length} ${wk.places.length === 1 ? "city" : "cities"}</span>` : ""}
      ${marked.length ? `<span class="chip" data-print="marks">All ${marked.length} bookmarked ${marked.length === 1 ? "city" : "cities"}</span>` : ""}
      <span class="chip" data-print="alljourneys">All seven itineraries</span>
      <span class="chip" data-print="allcities">Every city of Paul — ${cityIds.length} pages</span>
      ${GOSPEL_IDS.length ? `<span class="chip" data-print="gospel">Every Gospel site — ${GOSPEL_IDS.length} pages</span>` : ""}
    </div>
    <p class="small" style="font-size:12px;color:var(--muted);margin-top:12px">Your browser's print dialog opens;
    choose “Save as PDF” there if you want a file rather than paper.</p>
  </div>`);
  $("#exCopy").onclick = () => {
    const f = $("#exLink"); f.select();
    const done = ok => { $("#exCopy").textContent = ok ? "Copied" : "Copy failed";
      setTimeout(() => { $("#exCopy").textContent = "Copy link"; }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(f.value).then(() => done(true), () => done(false));
    else done(false);
  };
  $("#mbody").querySelectorAll("[data-print]").forEach(el => el.addEventListener("click", () => {
    const [kind, arg] = el.dataset.print.split(":");
    let html = "";
    if (kind === "city") html = citySheet(arg);
    else if (kind === "journey") html = journeySheet(arg);
    else if (kind === "week") html = wk.places.map(citySheet).join("");
    else if (kind === "marks") html = marked.map(citySheet).join("");
    else if (kind === "alljourneys") html = J.map(j => journeySheet(j.id)).join("");
    else if (kind === "allcities") html = cityIds.map(citySheet).join("");
    else if (kind === "gospel") html = GOSPEL_IDS.map(citySheet).join("");
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
    setTimeout(() => flyToVisible(p.lat, p.lng, Math.max(map.getZoom(), 6), { duration: .8 }), 260);
  }
  return true;
}
window.addEventListener("hashchange", () => { if (!hashLock) readHash(); });
function copyLink() {
  writeHash();
  const url = location.href;
  const done = (ok) => {
    const b = $("#btnExport"); if (!b) return;
    b.textContent = ok ? "Link copied" : "Copy failed";
    setTimeout(() => { b.textContent = "Export"; }, 1800);
  };
  if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => done(true), () => done(false));
  else done(false);
}
/* ---------- first-run guided tour ---------- */
const TOUR = [
  { sel: "#rail", side: "right", title: "Start with a journey",
    text: "The rail lists seven itineraries, from the pre-ministry years to the disputed voyage after Acts. Click one to follow it; click its coloured dot to hide it. Every stop underneath is clickable." },
  { sel: "footer", side: "top", title: "Then move through the years",
    text: "The timeline is the clock for the whole atlas. Drag it and the routes draw themselves as Paul travelled them; the lanes below show what was happening in Rome and Judaea at the same moment. Press Play to watch it run." },
  { sel: "#map", side: "center", title: "Click any city",
    text: "Eighty-five sites — Paul's cities and, on their own layer, the places of the Gospels — each with the narrative, the World English Bible text, the Greco-Roman history, what archaeology has actually found, and how confident the identification is. Bookmark the ones you want back." },
  { sel: "#btnCFM", side: "below", title: "Teaching this week?",
    text: "Weeks opens the reading year. Pick a week and the atlas focuses itself on the places that week's reading covers. Export then gives you the link and the printed handout together." }
];
let tourAt = -1;
function tourShow(i) {
  const prev = document.querySelector(".coach");
  if (prev) prev.classList.remove("coach");
  if (i < 0 || i >= TOUR.length) return tourEnd();
  tourAt = i;
  const s = TOUR[i], card = $("#introcard");
  $("#intro").classList.add("on");
  $("#istep").textContent = `Step ${i + 1} of ${TOUR.length}`;
  $("#ititle").textContent = s.title;
  $("#itext").textContent = s.text;
  $("#idots").innerHTML = TOUR.map((_, n) => `<i class="${n === i ? "on" : ""}"></i>`).join("");
  $("#inext").textContent = i === TOUR.length - 1 ? "Done" : "Next";
  const el = document.querySelector(s.sel);
  const vis = el && el.getBoundingClientRect().width > 40 && el.getBoundingClientRect().height > 24;
  card.style.cssText = "";
  if (!vis || s.side === "center") {
    card.style.left = "50%"; card.style.top = "50%"; card.style.transform = "translate(-50%,-50%)";
    return;
  }
  el.classList.add("coach");
  const r = el.getBoundingClientRect(), w = Math.min(360, innerWidth * 0.88), pad = 16;
  const clampL = x => Math.max(pad, Math.min(x, innerWidth - w - pad));
  if (s.side === "right") { card.style.left = clampL(r.right + pad) + "px"; card.style.top = Math.min(r.top + 90, innerHeight - 260) + "px"; }
  else if (s.side === "top") { card.style.left = clampL(r.left + 20) + "px"; card.style.bottom = (innerHeight - r.top + 14) + "px"; }
  else { card.style.left = clampL(r.right - w) + "px"; card.style.top = (r.bottom + 12) + "px"; }
}
function tourEnd() {
  const prev = document.querySelector(".coach");
  if (prev) prev.classList.remove("coach");
  $("#intro").classList.remove("on");
  tourAt = -1;
  store.set("intro", "1");
}
function startTour() { tourShow(0); }
$("#inext").onclick = () => tourShow(tourAt + 1);
$("#iskip").onclick = tourEnd;
$("#intro").addEventListener("click", e => { if (e.target === $("#intro")) tourEnd(); });
document.addEventListener("keydown", e => {
  if (!$("#intro").classList.contains("on")) return;
  if (e.key === "Escape") tourEnd();
  if (e.key === "ArrowRight" || e.key === "Enter") tourShow(tourAt + 1);
  if (e.key === "ArrowLeft") tourShow(Math.max(0, tourAt - 1));
});
document.addEventListener("click", e => { if (e.target.closest("[data-tour]")) { closeModal(); startTour(); } });
if (store.get("intro") !== "1") setTimeout(startTour, 700);

/* ---------- map recall drill ----------
   Eight cities, one at a time: read the clue, click the place on the map. Wrong clicks say
   how far off you were, which teaches the geography better than a right/wrong buzzer. */
const quiz = { on: false, queue: [], i: 0, score: 0, tries: 0 };
function quizPool() {
  const paul = [...allPlaceIds].filter(id => P[id] && (P[id].tier === "major" || P[id].tier === "letter"));
  const gos = layerState.gospel ? GOSPEL_IDS.filter(id => P[id].tier === "major") : [];
  return paul.concat(gos);
}
function startQuiz() {
  const pool = quizPool();
  if (pool.length < 4) return;
  closeModal();
  if (state.overlay.on) exitCompare();
  pause();
  const picked = [];
  while (picked.length < Math.min(8, pool.length)) {
    const id = pool[Math.floor(Math.random() * pool.length)];
    if (picked.indexOf(id) < 0) picked.push(id);
  }
  Object.assign(quiz, { on: true, queue: picked, i: 0, score: 0, tries: 0 });
  state.visible = new Set(J.map(j => j.id));
  state.year = T1;
  $("#scrub").value = state.year;
  buildRail(); renderAll();
  map.flyTo([37.2, 28.5], 5, { duration: .8 });
  $("#quizbadge").classList.add("on");
  quizAsk();
}
function quizClue(id) {
  const p = P[id], G = (window.PAUL_GAZ || {})[id];
  const bits = [];
  if (p.region) bits.push(p.region);
  if (p.modern) bits.push("today " + p.modern);
  if (G && G.confidence) bits.push(G.confidence.level + " identification");
  return bits.join(" · ");
}
function quizAsk() {
  const id = quiz.queue[quiz.i];
  quiz.tries = 0;
  $("#quizbadge").classList.remove("right", "wrong");
  $("#qzstep").textContent = `Find the place — ${quiz.i + 1} of ${quiz.queue.length} · score ${quiz.score}`;
  $("#qztitle").innerHTML = `${P[id].name} <span style="color:var(--muted);font-size:12px">${quizClue(id)}</span>`;
}
function quizAnswer(clicked) {
  const want = quiz.queue[quiz.i], badge = $("#quizbadge");
  if (clicked === want) {
    quiz.score += quiz.tries === 0 ? 1 : 0.5;
    badge.classList.add("right");
    $("#qzstep").textContent = quiz.tries === 0 ? "Right" : "Right — second attempt";
    setTimeout(quizNext, 850);
    return;
  }
  quiz.tries++;
  badge.classList.add("wrong");
  const km = Math.round(haversine(P[clicked], P[want]));
  $("#qzstep").textContent = quiz.tries === 1
    ? `That is ${P[clicked].name} — ${fmtDist(km)} away. Try again.`
    : `Still ${P[clicked].name}. The answer is shown.`;
  if (quiz.tries >= 2) {
    const w = P[want];
    map.flyTo([w.lat, w.lng], Math.max(map.getZoom(), 6), { duration: .8 });
    setTimeout(quizNext, 1600);
  }
}
function quizNext() {
  quiz.i++;
  if (quiz.i >= quiz.queue.length) return quizEnd();
  quizAsk();
}
function quizEnd() {
  const total = quiz.queue.length, score = quiz.score;
  const done = quiz.queue.slice();
  quiz.on = false;
  $("#quizbadge").classList.remove("on", "right", "wrong");
  openModal("Drill finished", `<div class="help">
    <p style="font-size:16px;font-family:'EB Garamond',serif">You scored
      <b style="color:var(--gold)">${score % 1 ? score.toFixed(1) : score}</b> out of ${total} —
      a full point first time, a half on the second attempt.</p>
    <p>The places in this round:</p>
    <div class="tags">${done.map(id => `<span class="chip" data-go="${id}">${P[id].name}</span>`).join("")}</div>
    <div style="display:flex;gap:8px;margin-top:18px">
      <button class="tool" id="qzAgain">Another eight</button>
      <button class="tool" id="qzDone">Done</button>
    </div></div>`);
  $("#qzAgain").onclick = startQuiz;
  $("#qzDone").onclick = closeModal;
  $("#mbody").querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => {
    closeModal(); selectPlace(el.dataset.go);
  }));
}
function quizExit() {
  quiz.on = false;
  $("#quizbadge").classList.remove("on", "right", "wrong");
}
$("#btnQuiz").onclick = startQuiz;
$("#qzExit").onclick = quizExit;
$("#qzSkip").onclick = () => { if (quiz.on) quizNext(); };

/* keyboard: / focuses search, Escape backs out of whatever mode is running */
document.addEventListener("keydown", e => {
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (e.key === "/" && !typing) { e.preventDefault(); $("#search").focus(); $("#search").select(); return; }
  if (e.key !== "Escape") return;
  if ($("#intro").classList.contains("on")) return;
  if ($("#modal").classList.contains("on")) return closeModal();
  if (quiz.on) return quizExit();
  if (state.overlay.on) return exitCompare();
  if (state.cfm.week != null) return exitCFM();
  if (state.place) return closeDetail();
});

/* Lane and band colours come from the data and vary widely in luminance, so the label colour
   is chosen per segment rather than fixed by the theme. */
function readableOn(hex) {
  const m = String(hex).replace("#", "").match(/^([0-9a-f]{6})$/i);
  if (!m) return "#100d06";
  const v = parseInt(m[1], 16), ch = [(v >> 16) & 255, (v >> 8) & 255, v & 255].map(c => {
    c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  const lum = 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
  return lum > 0.35 ? "#100d06" : "#fdf4e0";
}

/* credits & licences live on the About panel's second tab */
$("#btnLicence").onclick = () => openAbout("credits");

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
  map.invalidateSize(true);          // must happen before fitBounds, or the SVG stays 0×0
  map.fitBounds(bootBounds);
  updateLabels();
  booted = true;
}
/* The SVG renderer keeps whatever size it was created with, so the poll below re-measures
   it until it reports real geometry. */
map.whenReady(() => requestAnimationFrame(bootFit));
if (window.ResizeObserver) {
  const t0 = Date.now();
  let lastW = 0, lastH = 0, roTimer = null;
  const ro = new ResizeObserver(entries => {
    const r = entries[0].contentRect;
    const w = Math.round(r.width), h = Math.round(r.height);
    /* for the first few seconds always re-measure: a same-size report can still mean the
       renderer was created at 0x0 and never resized */
    if (Date.now() - t0 > 3000 && w === lastW && h === lastH) return;
    lastW = w; lastH = h;
    clearTimeout(roTimer);
    roTimer = setTimeout(() => { booted ? map.invalidateSize(true) : bootFit(); }, 120);
  });
  ro.observe(map.getContainer());
}
window.addEventListener("resize", () => { if (!booted) bootFit(); });
/* Poll until the renderer genuinely has a size. Fixed timeouts are not enough: on a slow
   load every one of them can fire before the grid cell resolves, and nothing retries after. */
(() => {
  let n = 0;
  const iv = setInterval(() => {
    if (++n > 60) return clearInterval(iv);            // ~15 s ceiling, then give up quietly
    const el = map.getContainer();
    if (!el.clientWidth || !el.clientHeight) return;
    if (!booted) return bootFit();
    const svg = document.querySelector("#map .leaflet-overlay-pane svg");
    if (!svg || !svg.getBoundingClientRect().width) {
      map.invalidateSize(true); renderMap(); updateLabels();
      return;
    }
    clearInterval(iv);
  }, 250);
})();
// a permalink overrides the default opening view
setTimeout(() => { readHash(); }, 500);
["place", "year", "cfm", "active"].forEach(() => {});
})();
