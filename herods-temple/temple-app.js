import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildTemple, VIEWS } from './temple-model.js';
import { LABELS, GROUPS, TOUR, VERSES, PATHS , typo } from './temple-labels.js';

const el = id => document.getElementById(id);
const stageEl = el('stage');

// ---------- renderer / scene ----------
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.92;
stageEl.appendChild(renderer.domElement);

const scene = new THREE.Scene();
(function sky() {
  const c = document.createElement('canvas'); c.width = 8; c.height = 256;
  const g = c.getContext('2d'), grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, '#5b86ba'); grd.addColorStop(0.55, '#a8c3d8'); grd.addColorStop(0.78, '#dcd6c4'); grd.addColorStop(1, '#c9b795');
  g.fillStyle = grd; g.fillRect(0, 0, 8, 256);
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.SRGBColorSpace;
  scene.background = t; scene.environment = t; scene.environmentIntensity = 0.55;
})();
scene.fog = new THREE.FogExp2(0xc2cfd8, 0.00055);

const hemi = new THREE.HemisphereLight(0xdfe9f2, 0x8a7a5f, 1.15);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff3dd, 2.5);
sun.position.set(320, 420, 180);
sun.castShadow = true;
sun.shadow.mapSize.set(3072, 3072);
const sc = sun.shadow.camera;
sc.left = -280; sc.right = 280; sc.top = 280; sc.bottom = -280; sc.near = 10; sc.far = 1400;
sun.shadow.normalBias = 0.04;
sun.shadow.bias = -0.0006;
scene.add(sun);
scene.add(new THREE.DirectionalLight(0xd8e6f5, 0.35).translateX(-200).translateY(120).translateZ(-260));

// lamplight within the house (the interior has no windows onto the sun)
const flames = [];
[[-65, 14, 0, 0xffe7b2, 3.4, 48], [-48, 16, 0, 0xffeccb, 2.4, 40],
 [-80, 13.5, 0, 0xffdca0, 5.5, 42], [-84, 11, 2, 0xffe0ae, 3.0, 26], [-81, 12.5, 0.5, 0xfff0cf, 5.5, 15], [-78.5, 10.6, 0, 0xffe6bb, 2.2, 12], [-73, 11.6, -3.2, 0xffcf7a, 2.0, 14]]
  .forEach(([x, y, z, c, i, d]) => {
    const p = new THREE.PointLight(c, i, d, 1.6); p.position.set(x, y, z); scene.add(p);
    flames.push({ l: p, base: i, ph: Math.random() * 6.283, sp: 1.7 + Math.random() * 2.4 });
  });

const { model, features } = buildTemple();
scene.add(model);

// ---------- cameras / controls ----------
const camera = new THREE.PerspectiveCamera(50, 1, 0.4, 3000);
camera.position.set(116, 238, 420);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-24, 8, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 3;
controls.maxDistance = 900;

let mode = 'orbit';
const walk = { pos: new THREE.Vector3(90, 0, 80), yaw: Math.PI, pitch: -0.05, eye: 1.72, keys: {} };
const EYE = 1.72;

// ---------- picking ----------
const ray = new THREE.Raycaster();
const down = new THREE.Raycaster();
down.far = 400;

function featureAt(ndc) {
  ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObject(model, true);
  for (const h of hits) {
    let o = h.object;
    while (o) { if (o.userData.feature) return o.userData.feature; o = o.parent; }
  }
  return null;
}

function floorAt(x, z, fromY) {
  down.set(new THREE.Vector3(x, fromY, z), new THREE.Vector3(0, -1, 0));
  const hits = down.intersectObject(model, true);
  for (const h of hits) if (h.object.userData.layer !== 'pin') return h.point.y;
  return -25;
}

// ---------- label panel ----------
let current = null;
const panel = el('panel');
function openLabel(id) {
  const L = LABELS[id]; if (!L) return;
  current = id;
  autoCutaway(id);
  el('p-title').innerHTML = typo(L.title);
  el('p-sub').innerHTML = typo(L.sub);
  el('p-body').innerHTML = typo(L.body);
  const vs = VERSES[id] || [];
  el('p-verses').innerHTML = vs.map(v => `<blockquote><cite>${typo(v.ref)}</cite>${typo(v.text)}</blockquote>`).join('');
  el('p-scripture').style.display = vs.length ? 'block' : 'none';
  el('p-scripture-head').textContent = `Scripture — King James Version · ${vs.length} passage${vs.length === 1 ? '' : 's'}`;
  el('p-sources').innerHTML = L.sources.map(s => `<li>${typo(s)}</li>`).join('');
  el('p-note').innerHTML = L.note ? `<span>Where the sources differ</span>${typo(L.note)}` : '';
  el('p-note').style.display = L.note ? 'block' : 'none';
  panel.classList.add('open');
  if (isNarrow()) {
    el('index').classList.remove('open'); el('tools').classList.remove('open');
    walk.keys.KeyW = walk.keys.KeyS = walk.keys.ArrowLeft = walk.keys.ArrowRight = false;
    const mm = el('m-menu');
    if (mm) mm.classList.remove('on');
  }
  applyViewOffset();
  document.querySelectorAll('#index button').forEach(b => b.classList.toggle('active', b.dataset.id === id));
  const nar = path.notes && path.notes[id];
  el('p-narration').textContent = nar || '';
  el('p-narration').style.display = nar ? 'block' : 'none';
  const i = path.ids.indexOf(id);
  el('p-pos').textContent = i >= 0 ? `${i + 1} / ${path.ids.length}` : '';
  highlight(id);
}
function closeLabel() { panel.classList.remove('open'); applyViewOffset(); current = null; highlight(null); document.querySelectorAll('#index button').forEach(b => b.classList.remove('active')); }

// selection highlight via emissive tint
let hl = [];
function highlight(id) {
  hl.forEach(({ m, e, i }) => { m.emissive.setHex(e); m.emissiveIntensity = i; });
  hl = [];
  if (!id || !features[id]) return;
  const seen = new Set();
  features[id].traverse(o => {
    if (o.isMesh && !seen.has(o.material)) {
      seen.add(o.material);
      hl.push({ m: o.material, e: o.material.emissive.getHex(), i: o.material.emissiveIntensity });
      o.material.emissive.setHex(0x6b4f12); o.material.emissiveIntensity = 0.5;
    }
  });
}

const VIEW = id => {
  const v = VIEWS[id];
  return v ? { t: [v.t[0], v.t[1], -v.t[2]], c: [v.c[0], v.c[1], -v.c[2]], w: [v.w[0], -v.w[1]] } : null;
};

// ---------- camera flight ----------
function updateWalkCamera() {
  walk.pos.y = floorAt(walk.pos.x, walk.pos.z, walk.pos.y + 6);
  camera.position.set(walk.pos.x, walk.pos.y + walk.eye, walk.pos.z);
  const d = new THREE.Vector3(-Math.sin(walk.yaw), Math.tan(walk.pitch), -Math.cos(walk.yaw));
  camera.lookAt(camera.position.clone().add(d));
}

let flight = null;
function goTo(id, instant) {
  const v = VIEW(id); if (!v) return;
  if (mode === 'walk') {
    const [x, z] = v.w;
    walk.pos.set(x, 0, z);
    const t = new THREE.Vector3(...v.t);
    walk.yaw = Math.atan2(t.x - x, t.z - z) + Math.PI;
    const fy = floorAt(x, z, 60) + walk.eye;
    walk.pitch = Math.max(-0.9, Math.min(1.0, Math.atan2(t.y - fy, Math.hypot(t.x - x, t.z - z))));
    updateWalkCamera();
    return;
  }
  const to = { c: new THREE.Vector3(...v.c), t: new THREE.Vector3(...v.t) };
  if (instant) { camera.position.copy(to.c); controls.target.copy(to.t); return; }
  flight = { fc: camera.position.clone(), ft: controls.target.clone(), tc: to.c, tt: to.t, t0: performance.now(), dur: 1100 };
}

// ---------- pins ----------
const pinLayer = el('pins');
const pins = TOUR.filter(id => VIEWS[id] && LABELS[id]).map(id => {
  const d = document.createElement('button');
  d.className = 'pin'; d.dataset.id = id;
  d.innerHTML = `<i></i><span>${LABELS[id].title}</span>`;
  d.addEventListener('click', e => { e.stopPropagation(); openLabel(id); goTo(id); });
  pinLayer.appendChild(d);
  return { id, el: d, v: new THREE.Vector3(...VIEW(id).t) };
});
let showPins = true;
const tmp = new THREE.Vector3();
function layoutPins() {
  const w = stageEl.clientWidth, h = stageEl.clientHeight;
  const placed = [];
  const order = pins.slice().sort((a, b) => camera.position.distanceTo(a.v) - camera.position.distanceTo(b.v));
  for (const p of order) {
    if (!showPins) { p.el.style.display = 'none'; continue; }
    tmp.copy(p.v).project(camera);
    const dist = camera.position.distanceTo(p.v);
    const vis = tmp.z < 1 && Math.abs(tmp.x) < 1.05 && Math.abs(tmp.y) < 1.05 && dist < 340;
    const sx = (tmp.x * 0.5 + 0.5) * w, sy = (-tmp.y * 0.5 + 0.5) * h;
    const inGutter = sx < gutter.left + 40 || sx > w - gutter.right - 10;
    const crowded = inGutter || (p.id !== current && (placed.length > 9 || placed.some(q => Math.abs(q[0] - sx) < 170 && Math.abs(q[1] - sy) < 26)));
    p.el.style.display = vis && !crowded ? 'flex' : 'none';
    if (!vis || crowded) continue;
    placed.push([sx, sy]);
    p.el.style.transform = `translate(-50%,-100%) translate(${sx}px,${sy}px)`;
    p.el.style.opacity = String(Math.max(0.35, 1 - dist / 380));
    p.el.classList.toggle('near', dist < 90);
    p.el.classList.toggle('sel', p.id === current);
  }
}

// ---------- index ----------
const index = el('index');
GROUPS.forEach(g => {
  const h = document.createElement('h4'); h.textContent = g.name; index.appendChild(h);
  g.ids.forEach(id => {
    const b = document.createElement('button');
    b.dataset.id = id; b.textContent = LABELS[id].title;
    b.addEventListener('click', () => { openLabel(id); goTo(id); });
    index.appendChild(b);
  });
});

// ---------- toggles ----------
function setLayer(layer, visible) {
  model.traverse(o => { if (o.isMesh && o.userData.layer === layer) o.visible = visible; });
}
const state = { roofs: true, cutaway: false, autoCut: false };
function setCutaway(on) {
  state.cutaway = on; setLayer('shell', !on);
  if (on && state.roofs) { state.roofs = false; setLayer('roof', false); el('t-roofs').classList.add('off'); }
  el('t-cutaway').classList.toggle('on', on);
}
// Selecting anything inside the sanctuary opens it automatically, and closes it again on the way out.
const INTERIOR = new Set(['hekhal', 'menorah', 'shewbread', 'incense', 'veil', 'holyofholies', 'rock']);
function autoCutaway(id) {
  const inside = INTERIOR.has(id);
  if (inside && !state.cutaway) { setCutaway(true); state.autoCut = true; }
  else if (!inside && state.autoCut) { setCutaway(false); state.autoCut = false; }
}
el('t-roofs').addEventListener('click', e => {
  state.roofs = !state.roofs; setLayer('roof', state.roofs);
  e.currentTarget.classList.toggle('off', !state.roofs);
});
el('t-cutaway').addEventListener('click', e => {
  state.autoCut = false;
  setCutaway(!state.cutaway);
});
el('t-pins').addEventListener('click', e => { showPins = !showPins; e.currentTarget.classList.toggle('off', !showPins); });
const CITY = ['uppercity', 'cityofdavid', 'bezetha', 'golgotha', 'siloam', 'bethesda', 'olives', 'kidron', 'hinnom'];
let cityOn = true;
el('t-city').addEventListener('click', e => {
  cityOn = !cityOn;
  CITY.forEach(id => { if (features[id]) features[id].visible = cityOn; });
  e.currentTarget.classList.toggle('off', !cityOn);
});

// time of day
const HOURS = [
  { name: 'Dawn', sun: [190, 90, 320], warm: 0xffcf9a, si: 1.9, hemi: 0.75, sky: ['#2c3f6b', '#8f7f8e', '#e0b184', '#c79a6a'], exp: 0.9, amb: 0xb9c4de },
  { name: 'Morning', sun: [320, 420, 180], warm: 0xfff3dd, si: 2.5, hemi: 1.15, sky: ['#5b86ba', '#a8c3d8', '#dcd6c4', '#c9b795'], exp: 0.92, amb: 0xdfe9f2 },
  { name: 'Noon', sun: [40, 620, 60], warm: 0xffffff, si: 2.9, hemi: 1.3, sky: ['#4a7cc0', '#9dc0dd', '#dee3d9', '#cbbfa4'], exp: 0.88, amb: 0xeaf1f8 },
  { name: 'Dusk', sun: [-360, 110, -180], warm: 0xffb877, si: 1.7, hemi: 0.7, sky: ['#20305e', '#6b5f86', '#c98a63', '#9c7550'], exp: 0.95, amb: 0xa8b0cf }
];
let hour = 1;
function skyTex(stops) {
  const c = document.createElement('canvas'); c.width = 8; c.height = 256;
  const g = c.getContext('2d'), grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, stops[0]); grd.addColorStop(0.55, stops[1]); grd.addColorStop(0.78, stops[2]); grd.addColorStop(1, stops[3]);
  g.fillStyle = grd; g.fillRect(0, 0, 8, 256);
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function setHour(i) {
  hour = (i + HOURS.length) % HOURS.length;
  const h = HOURS[hour];
  sun.position.set(...h.sun); sun.color.setHex(h.warm); sun.intensity = h.si;
  hemi.intensity = h.hemi; hemi.color.setHex(h.amb);
  renderer.toneMappingExposure = h.exp;
  const t = skyTex(h.sky);
  scene.background = t; scene.environment = t;
  el('t-hour').textContent = h.name;
}
el('t-hour').addEventListener('click', () => setHour(hour + 1));

const HINTS = {
  orbit: 'Click anything to read it &middot; <b>drag</b> to orbit, <b>scroll</b> to zoom',
  walk: '<b>W</b> forward &middot; <b>S</b> back &middot; <b>A</b> <b>D</b> sidestep &middot; <b>scroll</b> or <b>&uarr; &darr;</b> to move &middot; <b>drag</b> or <b>&larr; &rarr;</b> to look &middot; <b>Shift</b> to run',
  mobile: 'Tap anything to read it &middot; drag to turn, pinch to zoom'
};
function setHint() {
  const m = document.body.classList.contains('mobile');
  el('hint').innerHTML = (m ? HINTS.mobile : HINTS[mode]) + '<div id="coords"></div>';
}

// mode switch
function setMode(m) {
  mode = m;
  if (isNarrow()) { el('index').classList.remove('open'); el('tools').classList.remove('open'); }
  document.body.classList.toggle('walking', m === 'walk');
  el('m-orbit').classList.toggle('on', m === 'orbit');
  el('m-walk').classList.toggle('on', m === 'walk');
  controls.enabled = m === 'orbit';
  if (m === 'walk') {
    const from = current && VIEWS[current] ? VIEW(current).w : [90, 80];
    walk.pos.set(from[0], 0, from[1]);
    const t = current ? new THREE.Vector3(...VIEW(current).t) : new THREE.Vector3(-44.5, 20, 0);
    walk.yaw = Math.atan2(t.x - walk.pos.x, t.z - walk.pos.z) + Math.PI;
    const fy0 = floorAt(walk.pos.x, walk.pos.z, 60) + walk.eye;
    walk.pitch = Math.max(-0.9, Math.min(1.0, Math.atan2(t.y - fy0, Math.hypot(t.x - walk.pos.x, t.z - walk.pos.z))));
    if (state.roofs) { state.roofs = false; setLayer('roof', false); el('t-roofs').classList.add('off'); }
    updateWalkCamera();
  } else {
    controls.target.copy(current && VIEWS[current] ? new THREE.Vector3(...VIEW(current).t) : new THREE.Vector3(-24, 8, 0));
    goTo(current || 'mount', true);
  }
  setHint();
}
el('m-orbit').addEventListener('click', () => setMode('orbit'));
el('m-walk').addEventListener('click', () => setMode('walk'));

// tour stepping
let path = PATHS.full;
function step(d) {
  const seq = path.ids;
  const i = current ? seq.indexOf(current) : -1;
  const n = (i + d + seq.length) % seq.length;
  const id = seq[i < 0 ? 0 : n];
  openLabel(id); goTo(id);
}
el('tour-select').addEventListener('change', e => {
  path = PATHS[e.target.value] || PATHS.full;
  openLabel(path.ids[0]); goTo(path.ids[0]);
});
el('p-prev').addEventListener('click', () => step(-1));
el('p-next').addEventListener('click', () => step(1));
el('p-close').addEventListener('click', closeLabel);
el('start-tour').addEventListener('click', () => { openLabel(path.ids[0]); goTo(path.ids[0]); });

// ---------- input ----------
let dragged = false, downPt = null, look = null;
const clamp = (v, a2, b) => Math.max(a2, Math.min(b, v));
renderer.domElement.addEventListener('pointerdown', e => {
  dragged = false; downPt = [e.clientX, e.clientY];
  if (mode === 'walk') {
    look = { x: e.clientX, y: e.clientY };
    try { renderer.domElement.setPointerCapture(e.pointerId); } catch (err) {}
  }
});
addEventListener('pointerup', () => { look = null; });
addEventListener('pointercancel', () => { look = null; });
renderer.domElement.addEventListener('pointermove', e => {
  if (downPt && Math.hypot(e.clientX - downPt[0], e.clientY - downPt[1]) > 5) dragged = true;
  if (mode !== 'walk') return;
  if (document.pointerLockElement === renderer.domElement) {
    walk.yaw -= e.movementX * 0.0024;
    walk.pitch = clamp(walk.pitch - e.movementY * 0.0024, -1.25, 1.15);
    return;
  }
  if (look) {                                  // drag anywhere on the view to look around
    walk.yaw -= (e.clientX - look.x) * 0.0042;
    walk.pitch = clamp(walk.pitch - (e.clientY - look.y) * 0.0042, -1.25, 1.15);
    look = { x: e.clientX, y: e.clientY };
    updateWalkCamera();
  }
});
renderer.domElement.addEventListener('click', e => {
  if (dragged) return;
  const r = renderer.domElement.getBoundingClientRect();
  const ndc = mode === 'walk' ? new THREE.Vector2(0, 0)
    : new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  const id = featureAt(ndc);
  if (id && LABELS[id]) openLabel(id); else if (mode === 'orbit') closeLabel();
});
// Walking: the wheel drives you forward and back, the way a mouse expects to.
renderer.domElement.addEventListener('wheel', e => {
  if (mode !== 'walk') return;
  e.preventDefault();
  const stepD = Math.max(-4, Math.min(4, -e.deltaY * 0.012));
  const nx = walk.pos.x - Math.sin(walk.yaw) * stepD, nz = walk.pos.z - Math.cos(walk.yaw) * stepD;
  const fy = floorAt(nx, nz, walk.pos.y + 6);
  if (fy > -24 && fy - walk.pos.y < 0.75) { walk.pos.set(nx, fy, nz); updateWalkCamera(); }
}, { passive: false });

addEventListener('keydown', e => {
  walk.keys[e.code] = true;
  if (mode === 'walk' && /^(Arrow|Space|Page)/.test(e.code)) e.preventDefault();
  if (mode === 'walk') { if (e.code === 'ArrowUp') walk.keys.KeyW = true; if (e.code === 'ArrowDown') walk.keys.KeyS = true; }
  if (e.code === 'Escape') { if (el('handout-overlay').style.display === 'flex') closeHandout(); else closeLabel(); }
  if (e.code === 'BracketRight') step(1);
  if (e.code === 'BracketLeft') step(-1);
  if (e.code === 'KeyM') setMode(mode === 'orbit' ? 'walk' : 'orbit');
});
addEventListener('keyup', e => { walk.keys[e.code] = false;
  if (e.code === 'ArrowUp') walk.keys.KeyW = false;
  if (e.code === 'ArrowDown') walk.keys.KeyS = false;
});

// handout (window.open is blocked in some embeds, so fall back to navigating)
el('about-btn').addEventListener('click', () => { el('about-overlay').style.display = 'flex'; });
el('about-close').addEventListener('click', () => { el('about-overlay').style.display = 'none'; });
el('about-overlay').addEventListener('click', ev => { if (ev.target.id === 'about-overlay') el('about-overlay').style.display = 'none'; });

el('handout').addEventListener('click', ev => {
  ev.preventDefault();
  const ov = el('handout-overlay');
  ov.style.display = 'flex';
  const f = el('handout-frame');
  if (!f.src) f.src = 'study-guide.html';
});
function closeHandout() { el('handout-overlay').style.display = 'none'; }
el('handout-close').addEventListener('click', closeHandout);
el('handout-print').addEventListener('click', () => {
  const f = el('handout-frame');
  try { f.contentWindow.focus(); f.contentWindow.print(); } catch (err) { window.open('study-guide.html', '_blank'); }
});

// ---------- loop ----------
const fwd = new THREE.Vector3(), side = new THREE.Vector3(), probe = new THREE.Raycaster();
probe.far = 1.4;
function moveWalk(dt) {
  const k = walk.keys;
  const sprint = k.ShiftLeft || k.ShiftRight ? 3.1 : 1;
  const speed = 7.5 * sprint * dt;
  let f = 0, s = 0;
  if (k.KeyW || k.ArrowUp) f += 1;
  if (k.KeyS || k.ArrowDown) f -= 1;
  if (k.KeyA || k.KeyQ) s -= 1;
  if (k.KeyD || k.KeyE) s += 1;
  if (!f && !s) return;
  fwd.set(Math.sin(walk.yaw), 0, Math.cos(walk.yaw)).multiplyScalar(-1);
  side.set(fwd.z, 0, -fwd.x);
  const dir = fwd.clone().multiplyScalar(f).add(side.clone().multiplyScalar(s)).normalize();
  const eyeY = walk.pos.y + walk.eye;
  probe.set(new THREE.Vector3(walk.pos.x, eyeY - 0.5, walk.pos.z), dir);
  const blocked = probe.intersectObject(model, true).some(h => h.object.userData.layer !== 'roof' && h.distance < 0.85);
  if (blocked) return;
  const nx = walk.pos.x + dir.x * speed, nz = walk.pos.z + dir.z * speed;
  const fy = floorAt(nx, nz, walk.pos.y + 6);
  if (fy - walk.pos.y > 0.75) return; // too high to climb in one stride
  walk.pos.set(nx, fy, nz);
}

window.__t = { renderer, scene, camera, controls, model, features, walk, goTo, openLabel, viewFor: VIEW, pins, setMode: m => setMode(m) };

// ---------- plan locator ----------
const planCv = el('plan'), pg = planCv && planCv.getContext('2d');
let planOn = true, planNext = 0;
function bboxOf(key) {
  const f = features[key]; if (!f) return null;
  const b = new THREE.Box3().setFromObject(f);
  return b.isEmpty() ? null : b;
}
const planGeom = (() => {
  if (!pg) return null;
  const fin = b => b && [b.min.x, b.min.z, b.max.x, b.max.z].every(Number.isFinite) ? b : null;
  const outer = fin(bboxOf('walls')) || fin(new THREE.Box3().setFromObject(model));
  if (!outer || outer.max.x - outer.min.x < 1 || outer.max.z - outer.min.z < 1) return null;
  const rects = ['women', 'israel', 'priests'].map(k => fin(bboxOf(k))).filter(Boolean);
  const inner = rects.length ? rects.reduce((a, b) => a.union(b), rects[0].clone()) : null;
  return { outer, inner, sanctuary: fin(bboxOf('hekhal')), altar: fin(bboxOf('altar')) };
})();
function drawPlan() {
  if (!pg || !planOn || !planGeom) return;
  const now2 = performance.now();
  if (now2 < planNext) return;
  planNext = now2 + 90;
  const W = planCv.width, H = planCv.height, pad = 14;
  const o = planGeom.outer;
  const ow = o.max.x - o.min.x, oz = o.max.z - o.min.z;
  const s = Math.min((W - pad * 2) / ow, (H - pad * 2) / oz);
  const ox = W / 2 - ((o.min.x + o.max.x) / 2) * s, oy = H / 2 - ((o.min.z + o.max.z) / 2) * s;
  const px = x => ox + x * s, py = z => oy + z * s;
  const rect = (b, stroke, fill, lw) => {
    if (!b) return;
    const x = px(b.min.x), y = py(b.min.z), w = (b.max.x - b.min.x) * s, h = (b.max.z - b.min.z) * s;
    if (fill) { pg.fillStyle = fill; pg.fillRect(x, y, w, h); }
    if (stroke) { pg.strokeStyle = stroke; pg.lineWidth = lw || 2; pg.strokeRect(x, y, w, h); }
  };
  pg.clearRect(0, 0, W, H);
  rect(planGeom.outer, 'rgba(217,180,81,.55)', 'rgba(232,224,207,.07)', 2.5);
  rect(planGeom.inner, 'rgba(217,180,81,.45)', 'rgba(232,224,207,.09)', 2);
  rect(planGeom.sanctuary, 'rgba(240,208,120,.9)', 'rgba(240,208,120,.42)', 2);
  if (planGeom.altar) {
    const c = planGeom.altar.getCenter(new THREE.Vector3());
    pg.fillStyle = 'rgba(255,138,74,.9)';
    pg.beginPath(); pg.arc(px(c.x), py(c.z), 3.4, 0, 6.283); pg.fill();
  }
  // view cone
  const d = new THREE.Vector3(); camera.getWorldDirection(d);
  const yaw = Math.atan2(d.x, d.z);
  const half = Math.atan(Math.tan((camera.fov * Math.PI / 180) / 2) * (camera.aspect || 1.6));
  const cx = px(camera.position.x), cy = py(camera.position.z);
  let len = (mode === 'walk' ? 70 : camera.position.distanceTo(controls.target) * 0.9) * s;
  if (!Number.isFinite(len)) len = 60;
  len = Math.max(26, Math.min(H, len));
  if (!Number.isFinite(cx) || !Number.isFinite(cy)) return;
  const dirPt = (a, r) => [cx + Math.sin(a) * r, cy + Math.cos(a) * r];
  const g2 = pg.createRadialGradient(cx, cy, 0, cx, cy, len);
  g2.addColorStop(0, 'rgba(255,236,190,.42)'); g2.addColorStop(1, 'rgba(255,236,190,0)');
  pg.fillStyle = g2;
  pg.beginPath(); pg.moveTo(cx, cy);
  pg.lineTo(...dirPt(yaw - half, len)); pg.lineTo(...dirPt(yaw, len * 1.06)); pg.lineTo(...dirPt(yaw + half, len));
  pg.closePath(); pg.fill();
  pg.fillStyle = '#f4efe3';
  pg.beginPath(); pg.arc(cx, cy, 3.6, 0, 6.283); pg.fill();
  pg.fillStyle = 'rgba(244,239,227,.5)';
  pg.font = '600 15px system-ui, sans-serif'; pg.textAlign = 'center';
  pg.fillText('N', W / 2, 15);
}
if (planCv) {
  el('t-plan').addEventListener('click', e => {
    planOn = !planOn;
    planCv.classList.toggle('hidden', !planOn);
    e.currentTarget.classList.toggle('off', !planOn);
    planNext = 0;
  });
}

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (flight) {
    const p = Math.min(1, (now - flight.t0) / flight.dur);
    const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    camera.position.lerpVectors(flight.fc, flight.tc, e);
    controls.target.lerpVectors(flight.ft, flight.tt, e);
    if (p >= 1) flight = null;
  }
  if (mode === 'orbit') {
    controls.update();
    // never let the orbit camera sink below the ground it is looking at
    const g = floorAt(camera.position.x, camera.position.z, 900);
    if (g > -24 && camera.position.y < g + 2) camera.position.y = g + 2;
  }
  else {
    const k = walk.keys, turn = 1.9 * dt * ((k.ShiftLeft || k.ShiftRight) ? 1.7 : 1);
    if (k.ArrowLeft) walk.yaw += turn;
    if (k.ArrowRight) walk.yaw -= turn;
    if (k.PageUp) walk.pitch = clamp(walk.pitch + turn * 0.6, -1.25, 1.15);
    if (k.PageDown) walk.pitch = clamp(walk.pitch - turn * 0.6, -1.25, 1.15);
    moveWalk(dt);
    updateWalkCamera();
    el('coords').textContent = `${walk.pos.x.toFixed(0)}, ${walk.pos.z.toFixed(0)} · floor ${walk.pos.y.toFixed(1)} m`;
  }
  layoutPins();
  const dir = new THREE.Vector3(); camera.getWorldDirection(dir);
  el('compass-dial').style.transform = `rotate(${-Math.atan2(dir.x, -dir.z) * 180 / Math.PI}deg)`;
  renderer.render(scene, camera);
  // Cosmetic extras run last and can never take the render loop down with them.
  try {
    flames.forEach(f => {
      const t = now / 1000;
      f.l.intensity = f.base * (0.88 + 0.12 * Math.sin(t * f.sp + f.ph) + 0.06 * Math.sin(t * f.sp * 2.7 + f.ph * 1.7));
    });
    drawPlan();
  } catch (err) { if (!frame.warned) { frame.warned = true; console.error('plan/flames', err); } }
}
function tick(now) {
  const w = stageEl.clientWidth, h = stageEl.clientHeight;
  if (w && h && (w !== sizedW || h !== sizedH)) resize();
  const bh = Math.round(document.querySelector('.bar').getBoundingClientRect().height);
  if (bh && bh !== barSized) applyViewOffset();
  try { frame(now); } catch (err) { if (!tick.warned) { tick.warned = true; console.error(err); } }
  window.__temple = { scene, camera, renderer, VIEWS };
requestAnimationFrame(tick);
}
// fallback in case rAF is throttled (hidden tab, capture tooling)
setInterval(() => { if (performance.now() - last > 240) frame(performance.now()); }, 240);

function isNarrow() { return window.matchMedia('(max-width: 780px)').matches; }
const indexEl = () => el('index');
let gutter = { left: 0, right: 0 };
function applyViewOffset() {
  const barH = Math.round(document.querySelector('.bar').getBoundingClientRect().height);
  if (barH) { document.documentElement.style.setProperty('--bar-h', barH + 'px'); barSized = barH; }
  const w = stageEl.clientWidth, h = stageEl.clientHeight;
  const idx = indexEl();
  if (isNarrow()) {
    gutter.left = 0; gutter.right = 0;
    camera.setViewOffset(w, h, 0, 0, w, h);
    const hint2 = el('hint');
    hint2.style.left = '50%'; hint2.style.maxWidth = '92vw';
    return;
  }
  gutter.left = getComputedStyle(idx).display === 'none' ? 0 : idx.getBoundingClientRect().width;
  gutter.right = panel.classList.contains('open') ? panel.getBoundingClientRect().width : 0;
  const shift = (gutter.left - gutter.right) / 2;
  camera.setViewOffset(w, h, -shift, 0, w, h);
  const hint = el('hint');
  const gap = Math.max(160, w - gutter.left - gutter.right);
  hint.style.left = (gutter.left + gap / 2) + 'px';
  el('compass').style.left = (gutter.left + 18) + 'px';
  if (planCv) planCv.style.left = (gutter.left + 18) + 'px';
  hint.style.maxWidth = (gap - 24) + 'px';
}
let sizedW = 0, sizedH = 0, barSized = -1;
function resize() {
  const w = stageEl.clientWidth, h = stageEl.clientHeight;
  if (!w || !h) return;                      // container not laid out yet; the frame loop retries
  sizedW = w; sizedH = h;
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  applyViewOffset();
}
addEventListener('resize', resize);
resize();
applyViewOffset();
try {
  const ro = new ResizeObserver(() => { applyViewOffset(); resize(); });
  ro.observe(document.querySelector('.bar'));
  ro.observe(stageEl);
  ro.observe(document.documentElement);
} catch (e) {}
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { applyViewOffset(); resize(); });
// deep link:  #altar  or  #walk/altar
(function fromHash() {
  const meta = document.querySelector('meta[name="start-view"]');
  const h = decodeURIComponent(location.hash.replace('#', '')) || (meta ? meta.content : '');
  if (!h) return;
  const [a1, a2] = h.split('/');
  const id = (a1 === 'walk' ? a2 : a1);
  if (a1 === 'walk') setMode('walk');
  if (id && LABELS[id]) { openLabel(id); goTo(id, true); }
})();

el('loading').style.display = 'none';

// ---------- mobile chrome: sheets, touch drive, welcome, share ----------
function syncMobileClass() {
  const m = isNarrow();
  document.body.classList.toggle('mobile', m);
  if (!m) { el('index').classList.remove('open'); el('tools').classList.remove('open'); }
  setHint();
  applyViewOffset();
}
syncMobileClass();
try { window.matchMedia('(max-width: 780px)').addEventListener('change', syncMobileClass); } catch (e) {}

function sheet(which) {
  const a = el(which), b = el(which === 'index' ? 'tools' : 'index');
  b.classList.remove('open');
  const opening = !a.classList.contains('open');
  a.classList.toggle('open', opening);
  if (opening) closeLabel();
  el('m-menu').classList.toggle('on', el('tools').classList.contains('open') || el('index').classList.contains('open'));
}
el('m-menu').addEventListener('click', () => sheet('tools'));
el('m-places2').addEventListener('click', () => { el('tools').classList.remove('open'); sheet('index'); });
el('index').addEventListener('click', ev => {
  if (isNarrow() && ev.target.closest('button')) {
    el('index').classList.remove('open');
    el('m-menu').classList.remove('on');
  }
});
el('tools').addEventListener('click', ev => {
  if (isNarrow() && ev.target.closest('.exp') && ev.target.id !== 'm-places2') {
    el('tools').classList.remove('open');
    el('m-menu').classList.remove('on');
  }
});

// touch drive pad
[['tp-fwd', 'KeyW'], ['tp-back', 'KeyS'], ['tp-l', 'ArrowLeft'], ['tp-r', 'ArrowRight']].forEach(([id, code]) => {
  const b = el(id);
  const on = ev => { ev.preventDefault(); walk.keys[code] = true; };
  const off = () => { walk.keys[code] = false; };
  b.addEventListener('pointerdown', on);
  b.addEventListener('pointerup', off);
  b.addEventListener('pointerleave', off);
  b.addEventListener('pointercancel', off);
});
el('tp-run').addEventListener('click', () => {
  const running = !walk.keys.ShiftLeft;
  walk.keys.ShiftLeft = running;
  el('tp-run').style.background = running ? 'rgba(176,138,46,.85)' : '';
  el('tp-run').style.color = running ? '#16150f' : '';
});

// copy a link straight to this location
el('p-link').addEventListener('click', () => {
  if (!current) return;
  const url = location.href.split('#')[0] + '#' + (mode === 'walk' ? 'walk/' : '') + current;
  const done = () => { const b = el('p-link'); b.textContent = 'Copied'; setTimeout(() => { b.textContent = 'Copy link'; }, 1600); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(done, () => fallbackCopy(url, done));
  } else fallbackCopy(url, done);
});
function fallbackCopy(text, done) {
  const t = document.createElement('textarea');
  t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
  document.body.appendChild(t); t.select();
  try { document.execCommand('copy'); done(); } catch (e) { prompt('Copy this link:', text); }
  t.remove();
}

// first-visit welcome (skipped for deep links)
try {
  if (!location.hash && !localStorage.getItem('temple-welcomed-v1')) {
    el('welcome').style.display = 'flex';
  }
} catch (e) {}
function dismissWelcome() {
  el('welcome').style.display = 'none';
  try { localStorage.setItem('temple-welcomed-v1', '1'); } catch (e) {}
}
el('welcome-go').addEventListener('click', dismissWelcome);
el('welcome').addEventListener('click', ev => { if (ev.target.id === 'welcome') dismissWelcome(); });

window.__temple = { scene, camera, renderer, VIEWS };
requestAnimationFrame(tick);
