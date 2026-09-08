import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildTemple, VIEWS } from './temple-model.js';
import { LABELS, GROUPS, TOUR, VERSES, PATHS, SIGHTS, CERTAINTY, CERT_LEVELS, CURRICULUM, typo } from './temple-labels.js';

const el = id => document.getElementById(id);
const stageEl = el('stage');

// ---------- renderer / scene ----------
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
// The sun only moves when the hour changes, and nothing in the scene animates, so the
// shadow map is re-rendered on demand instead of on every frame.
renderer.shadowMap.autoUpdate = false;
let shadowFrames = 3;
function invalidateShadows(n = 2) { shadowFrames = Math.max(shadowFrames, n); }
const hooks = [];      // per-frame extras, added by the sections further down
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
// no atmospheric fog — distant city and valley features stay legible from any camera

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

const __build0 = performance.now();
const { model, features } = buildTemple();
window.__buildMs = Math.round(performance.now() - __build0);
scene.add(model);

// daylight falling into the two Huldah passages where they open in the court, so the
// stair out of the platform reads as a stair rather than a black rectangle
[[-18, 214], [30, 214]].forEach(([x, z]) => {
  const p = new THREE.PointLight(0xffe4b4, 2.6, 26, 1.6);
  p.position.set(x, -1.5, z);
  scene.add(p);
});
// and light from the clerestory into the nave of the Royal Stoa, which is otherwise a
// roofed hall 280 m long with no windows the sun can reach
[-108, -36, 36, 108].forEach(x => {
  const p = new THREE.PointLight(0xfff0d4, 1.5, 130, 1.4);
  p.position.set(x, 13, 213);
  scene.add(p);
});

// ---------- cameras / controls ----------
const camera = new THREE.PerspectiveCamera(50, 1, 0.4, 9000);
camera.position.set(116, 238, 420);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-24, 8, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 3;
controls.maxDistance = 2400;

let mode = 'orbit';
const walk = { pos: new THREE.Vector3(90, 0, 80), yaw: Math.PI, pitch: -0.05, eye: 1.72, keys: {},
  yawT: Math.PI, pitchT: -0.05,        // where the look is heading; yaw/pitch chase it
  vel: new THREE.Vector3(),            // metres per second, world space
  eyeY: null, bob: 0, glide: 0, lock: false };
const EYE = 1.72;

// ---------- picking ----------
const ray = new THREE.Raycaster();
const down = new THREE.Raycaster();
down.far = 620;

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
  for (const h of hits) if (solid(h.object)) return h.point.y;
  return -25;
}

function solid(o) {
  if (!o.visible || o.userData.layer === 'pin') return false;
  for (let p = o.parent; p; p = p.parent) if (!p.visible) return false;
  return true;
}
function floorNear(x, z, ceilY, loY, hiY) {
  down.set(new THREE.Vector3(x, ceilY, z), new THREE.Vector3(0, -1, 0));
  for (const h of down.intersectObject(model, true)) {
    if (!solid(h.object)) continue;
    const y = h.point.y;
    if (hiY != null && y > hiY) continue;      // that is the roof over the room
    if (loY != null && y < loY) return NaN;    // below the thing entirely: wrong level
    return y;
  }
  return NaN;
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
  el('p-scripture-head').textContent = `Scripture · ${vs.length} passage${vs.length === 1 ? '' : 's'}`;
  el('p-sources').innerHTML = L.sources.map(s => `<li>${typo(s)}</li>`).join('');
  el('p-note').innerHTML = L.note ? `<span>Where the sources differ</span>${typo(L.note)}` : '';
  el('p-note').style.display = L.note ? 'block' : 'none';
  panel.classList.add('open');
  applyViewOffset();
  if (isNarrow()) {
    el('index').classList.remove('open'); el('tools').classList.remove('open');
    walk.keys.KeyW = walk.keys.KeyS = walk.keys.ArrowLeft = walk.keys.ArrowRight = false;
    joyPan.x = joyPan.y = 0;
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

// selection highlight — a tinted clone of the material, so only the selected feature
// lights up. (Tinting the material itself lit every wall in the city that shared it.)
let hl = [];
const hlClones = new Map();
function highlight(id) {
  hl.forEach(({ o, m }) => { o.material = m; });
  hl = [];
  if (!id || !features[id]) return;
  features[id].traverse(o => {
    if (!o.isMesh) return;
    let c = hlClones.get(o.material.uuid);
    if (!c) {
      c = o.material.clone();
      c.name = o.material.name + '_selected';
      c.emissive.setHex(0x6b4f12); c.emissiveIntensity = 0.5;
      hlClones.set(o.material.uuid, c);
    }
    hl.push({ o, m: o.material });
    o.material = c;
  });
}

const VIEW = id => {
  const v = VIEWS[id];
  return v ? { t: [v.t[0], v.t[1], -v.t[2]], c: [v.c[0], v.c[1], -v.c[2]], w: [v.w[0], -v.w[1]] } : null;
};

// ---------- standing places ----------
// Walking to a station used to drop you on top of it, nose to the floor or craning at
// the sky. Instead: measure the thing, stand back far enough to frame it, keep the
// look level-ish, and step round until the line of sight is clear.
const bboxCache = new Map();
function featBox(id) {
  if (bboxCache.has(id)) return bboxCache.get(id);
  const f = features[id];
  let b = null;
  if (f) { const bb = new THREE.Box3().setFromObject(f); if (!bb.isEmpty() && Number.isFinite(bb.min.x)) b = bb; }
  bboxCache.set(id, b);
  return b;
}
function anchor(id) {
  const v = VIEW(id);
  const b = featBox(id);
  const stored = new THREE.Vector3(...v.t);
  if (!b) return { center: stored, size: new THREE.Vector3(12, 8, 12), aim: stored, trusted: true };
  const c = b.getCenter(new THREE.Vector3());
  const size = b.getSize(new THREE.Vector3());
  const inside = stored.y > b.min.y - 4 && stored.y < b.max.y + 4
    && stored.x > b.min.x - 6 && stored.x < b.max.x + 6
    && stored.z > b.min.z - 6 && stored.z < b.max.z + 6;
  return { center: c, size, aim: inside ? stored : c, trusted: inside };
}
const sightRay = new THREE.Raycaster();
function ownsMesh(o, id) {
  for (let p = o; p; p = p.parent) if (p.userData.feature === id) return true;
  return false;
}
function clearSight(from, to, id) {
  const d = to.clone().sub(from);
  const len = d.length();
  if (len < 1) return true;
  sightRay.set(from, d.normalize());
  sightRay.far = len * 0.94;
  const hits = sightRay.intersectObject(model, true);
  return !hits.some(h => solid(h.object) && h.object.userData.layer !== 'roof'
    && h.distance < len * 0.9 && !(id && ownsMesh(h.object, id)));
}
// The curated standing point is usually right — it was chosen inside the correct
// court. Trust it first; only walk round the thing when the view from there is blocked.
// Where a visitor stands to look at each thing. Third value, where given, is the floor
// height: the sanctuary floor is 9.75, the azarah 6.75, the court of the women 3, the
// chel terrace 3, the esplanade 0 — stated outright rather than guessed at by probing.
const WALK_SPOTS = {
  // inside the house
  hekhal: [-57, 0, 9.9], menorah: [-67, 3.4, 9.9], shewbread: [-67, -3.4, 9.9],
  incense: [-69.5, 0, 9.9], veil: [-70, 0, 9.9],
  // west of the parochet, inside the room itself — from the Hekhal side the cutaway
  // shows nothing but a wall of cloth
  holyofholies: [-76.5, 0, 9.9], rock: [-84.4, 2.6, 9.9],
  // on the azarah, the court of the priests
  cells: [-36, 23, 6.9], facade: [-16, 19, 6.9], vine: [-22, 14, 6.9],
  steps12: [-25, 11, 6.9], altar: [-9, 0, 6.9], ramp: [-20, -14, 6.9],
  laver: [-38, -8, 6.9], slaughter: [-26, -20, 6.9], priests: [-30, 17, 6.9],
  israel: [-3, 0, 6.9],
  // the court of the women and its gates
  nicanor: [24, 0, 3.1], women: [50, 0, 3.1], chambers: [42, 26, 3.1],
  beautiful: [30, 0, 3.1],
  // the terrace, the outer court and the porticoes
  chel: [80, 0, 3.1], soreg: [98, 0, 0.1], gentiles: [112, 42, 0.1],
  // inside the basilica, in the middle aisle, on its own floor at 0.7
  porticoes: [118, -150, 0.1], royalstoa: [0, 213, 0.8], mount: [70, 60, 0.1],
  // out in the city, where the ground decides the height
  siloam: [-64, 562], bethesda: [-30, -330], golgotha: [-393, -190, 29.3], huldah: [-12, 302]
};
const stationCache = new Map();
function walkStation(id) {
  const key = id + (state.cutaway ? '|cut' : '');
  if (stationCache.has(key)) return stationCache.get(key);
  const st = computeStation(id);
  stationCache.set(key, st);
  return st;
}
// Where the eye should rest, for the few places whose middle is not what you look at.
const WALK_AIM = {
  holyofholies: [-82, 10.2, 0],   // west across the floor of the empty room
  rock: [-81, 9.9, 0],            // down onto the crown of the stone
  veil: [-76, 14, 0],
  hekhal: [-70, 13, 0],
  royalstoa: [110, 7, 213]        // east down the length of the nave
};
function computeStation(id) {
  const v = VIEW(id); if (!v) return null;
  const b = featBox(id);
  const an = anchor(id);
  const c = an.center, size = an.size;
  // the floor the thing itself stands on — so a station lands in the same room
  const probeY = b ? b.max.y + 0.5 : c.y + 3;
  const tall = b ? b.max.y - b.min.y : 6;
  const ceilCut = b ? b.max.y - Math.max(1.6, Math.min(3, tall * 0.12)) : null;  // its own lid
  const pitCut = b ? b.min.y - Math.max(2, tall * 0.25) : null;      // its foundations
  const floorY = b ? Math.max(b.min.y, b.max.y - 30) : c.y;
  // the level a visitor could plausibly stand on: near the height the panel aims at,
  // never up on a ceiling and never down in a foundation
  const refY = an.aim.y;
  const standable = gy => Number.isFinite(gy) && gy < refY + 4.5 && gy > refY - 26;
  const gap = clamp(Math.max(size.x, size.z) * 0.7 + 7, 8, 70);

  // points on the thing worth looking at: its middle, a little above its middle, and
  // a quarter of the way up from its foot
  const marks = [];
  if (b) {
    marks.push(new THREE.Vector3(c.x, c.y, c.z));
    marks.push(new THREE.Vector3(c.x, Math.min(b.max.y - 0.4, c.y + (b.max.y - c.y) * 0.55), c.z));
    marks.push(new THREE.Vector3(c.x, b.min.y + (b.max.y - b.min.y) * 0.2 + 0.6, c.z));
  } else {
    marks.push(new THREE.Vector3(...v.t));
  }
  if (WALK_AIM[id]) marks.unshift(new THREE.Vector3(...WALK_AIM[id]));

  // candidate standing places: the curated one first, then round the four sides —
  // east is the way every pilgrim came in
  const cands = [];
  if (WALK_SPOTS[id]) cands.push(WALK_SPOTS[id]);
  cands.push([v.w[0], v.w[1]]);
  if (b) {
    cands.push([b.max.x + gap, c.z]);
    cands.push([c.x, b.max.z + gap]);
    cands.push([c.x, b.min.z - gap]);
    cands.push([b.min.x - gap, c.z]);
    cands.push([b.max.x + gap * 0.7, b.max.z + gap * 0.7]);
    cands.push([b.max.x + gap * 0.7, b.min.z - gap * 0.7]);
  }

  let best = null;
  const curated = WALK_SPOTS[id];
  if (curated) {
    const gy = curated.length > 2 ? curated[2]
      : floorNear(curated[0], curated[1], probeY, pitCut, ceilCut);
    if (curated.length > 2 || standable(gy)) {
      if (WALK_AIM[id]) {
        const m = new THREE.Vector3(...WALK_AIM[id]);
        const flatA = Math.max(2.5, Math.hypot(m.x - curated[0], m.z - curated[1]));
        return {
          x: curated[0], z: curated[1], y: gy,
          yaw: Math.atan2(m.x - curated[0], m.z - curated[1]) + Math.PI,
          pitch: clamp(Math.atan2(m.y - (gy + EYE), flatA), -0.62, 0.62)
        };
      }
      const flat = Math.hypot(c.x - curated[0], c.z - curated[1]);
      const eye = new THREE.Vector3(curated[0], gy + EYE, curated[1]);
      let picked = null;
      for (const m of marks) {
        const p = Math.atan2(m.y - eye.y, Math.max(flat, 4));
        if (p < -0.34 || p > 0.34) continue;
        if (!clearSight(eye, m, id)) continue;
        picked = { m, p };
        break;
      }
      if (!picked && curated.length > 2) {
        const eye2 = new THREE.Vector3(curated[0], gy + EYE, curated[1]);
        let bestM = null;
        for (const m of marks) {
          const p = Math.atan2(m.y - eye2.y, Math.max(flat, 4));
          if (!bestM || Math.abs(p) < Math.abs(bestM.p)) bestM = { m, p };
        }
        picked = bestM;
      }
      if (picked) {
        const yaw0 = Math.atan2(picked.m.x - curated[0], picked.m.z - curated[1]) + Math.PI;
        return { x: curated[0], z: curated[1], y: gy, yaw: yaw0, pitch: clamp(picked.p, -0.32, 0.32) };
      }
    }
  }
  for (let rank = 0; rank < cands.length; rank++) {
    if (best && best.score >= 112) break;            // good enough; stop raycasting
    const [px, pz] = cands[rank];
    const gy = floorNear(px, pz, probeY, pitCut, ceilCut);
    if (!standable(gy)) continue;
    const flat = Math.hypot(c.x - px, c.z - pz);
    if (flat < 3) continue;
    const eye = new THREE.Vector3(px, gy + EYE, pz);
    let picked = null;
    for (const m of marks) {
      const p = Math.atan2(m.y - eye.y, Math.max(flat, 4));
      if (p < -0.34 || p > 0.34) continue;         // never floor-stare, never sky-stare
      if (!clearSight(eye, m, id)) continue;
      picked = { m, p };
      break;
    }
    // prefer: something visible, standing on the thing's own level, the curated spot
    const score = (picked ? 120 : 0) - Math.abs(floorY - gy) * 1.4 - rank * 2
      - Math.max(0, flat - 90) * 0.5;
    if (!best || score > best.score) best = { px, pz, gy, flat, picked, score };
  }

  if (!best) {
    const gy = floorNear(v.w[0], v.w[1], probeY, pitCut, ceilCut);
    best = { px: v.w[0], pz: v.w[1], gy: Number.isFinite(gy) ? gy : floorAt(v.w[0], v.w[1], 180),
             flat: Math.max(6, Math.hypot(c.x - v.w[0], c.z - v.w[1])), picked: null };
  }
  const aimTo = best.picked ? best.picked.m : marks[0];
  const yaw = Math.atan2(aimTo.x - best.px, aimTo.z - best.pz) + Math.PI;
  const pitch = clamp(best.picked ? best.picked.p
    : Math.atan2(aimTo.y - (best.gy + EYE), Math.max(best.flat, 5)), -0.32, 0.32);
  return { x: best.px, z: best.pz, y: best.gy, yaw, pitch };
}

// ---------- camera flight ----------
function updateWalkCamera(dt) {
  walk.pos.y = floorAt(walk.pos.x, walk.pos.z, walk.pos.y + 2.6);
  const targetEye = walk.pos.y + walk.eye;
  if (walk.eyeY == null || dt == null) walk.eyeY = targetEye;
  else {
    // ease the eye over stairs and kerbs instead of snapping a step at a time
    const k = 1 - Math.exp(-12 * dt);
    walk.eyeY += (targetEye - walk.eyeY) * k;
    if (Math.abs(targetEye - walk.eyeY) > 2.2) walk.eyeY = targetEye; // a real drop: don't float
  }
  const sp = Math.hypot(walk.vel.x, walk.vel.z);
  if (dt) walk.bob += dt * (4.6 + sp * 0.5);
  const bob = Math.sin(walk.bob) * Math.min(sp / 4, 1) * 0.028;
  camera.position.set(walk.pos.x, walk.eyeY + bob, walk.pos.z);
  const d = new THREE.Vector3(-Math.sin(walk.yaw), Math.tan(walk.pitch), -Math.cos(walk.yaw));
  camera.lookAt(camera.position.clone().add(d));
}

let flight = null;
function goTo(id, instant) {
  const v = VIEW(id); if (!v) return;
  if (mode === 'walk') {
    const st = walkStation(id) || { x: v.w[0], z: v.w[1], yaw: Math.PI, pitch: 0 };
    walk.pos.set(st.x, st.y == null ? 0 : st.y, st.z);
    walk.yaw = walk.yawT = st.yaw;
    walk.pitch = walk.pitchT = st.pitch;
    walk.vel.set(0, 0, 0); walk.glide = 0; walk.eyeY = null;
    updateWalkCamera();
    return;
  }
  const an = anchor(id);
  let to = { c: new THREE.Vector3(...v.c), t: new THREE.Vector3(...v.t) };
  const radius = Math.max(an.size.x, an.size.y, an.size.z) * 0.5;
  const frame = Math.max(24, Math.min(1200, radius * 2.3 + 16));
  // recompute when the stored station aims at nothing, or sits so far back that the
  // thing itself is a speck
  if (!an.trusted || to.c.distanceTo(to.t) > frame * 2.2) {
    const dist = frame;
    const dir = new THREE.Vector3(...v.c).sub(new THREE.Vector3(...v.t));
    if (dir.lengthSq() < 1) dir.set(1, 0.7, 1);
    dir.normalize();
    if (dir.y < 0.3) { dir.y = 0.3; dir.normalize(); }
    const tgt = an.trusted ? new THREE.Vector3(...v.t) : an.center.clone();
    const cam = tgt.clone().add(dir.multiplyScalar(dist));
    const g = floorAt(cam.x, cam.z, 180);
    if (Number.isFinite(g)) cam.y = Math.max(cam.y, g + 10);
    to = { c: cam, t: tgt };
  }
  if (isNarrow()) {   // give the panel room: pull back further and look down more, so nearby walls don't block the view
    const dir = to.c.clone().sub(to.t);
    dir.y += dir.length() * 0.4;
    to.c = to.t.clone().add(dir.multiplyScalar(2.2));
    const g = floorAt(to.c.x, to.c.z, 900);
    to.c.y = Math.max(to.c.y, Number.isFinite(g) ? g + 14 : 40);
  }
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
let standArmed = false;      // "Stand here" waiting for a click (see the section below)
const tmp = new THREE.Vector3();
let blockRects = [];
function refreshBlockRects() {
  blockRects = [];
  const base = stageEl.getBoundingClientRect();
  const add = node => {
    if (!node) return;
    const cs = getComputedStyle(node);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    const r = node.getBoundingClientRect();
    if (!r.width || !r.height) return;
    blockRects.push([r.left - base.left - 8, r.top - base.top - 6, r.right - base.left + 8, r.bottom - base.top + 6]);
  };
  add(document.querySelector('.bar'));
  add(el('compass'));
  add(el('plan'));
  add(el('hint'));
  if (el('cap-card') && el('cap-card').classList.contains('open')) add(el('cap-card'));
  if (el('measure-out') && el('measure-out').classList.contains('open')) add(el('measure-out'));
  if (el('cert-key') && el('cert-key').classList.contains('open')) add(el('cert-key'));
}
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
    const pw = p.el.offsetWidth || 120, ph = p.el.offsetHeight || 22;
    const l = sx - pw / 2, t = sy - ph, r2 = sx + pw / 2, b2 = sy;
    const overChrome = blockRects.some(([bl, bt, br, bb]) => l < br && r2 > bl && t < bb && b2 > bt);
    const crowded = inGutter || overChrome || (p.id !== current && (placed.length > 9 || placed.some(q => Math.abs(q[0] - sx) < 170 && Math.abs(q[1] - sy) < 26)));
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
  invalidateShadows();
}
const state = { roofs: true, cutaway: false, autoCut: false };
function setCutaway(on) {
  state.cutaway = on; setLayer('shell', !on);
  if (on && state.roofs) { state.roofs = false; setLayer('roof', false); el('t-roofs').classList.add('off'); }
  else if (!on && !state.roofs && state.autoCut) {   // the auto-cutaway that hid the roof is over — bring it back
    state.roofs = true; setLayer('roof', true); el('t-roofs').classList.remove('off');
  }
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
  invalidateShadows();
  e.currentTarget.classList.toggle('off', !cityOn);
});

// time of day
const HOURS = [
  { name: 'Dawn', sun: [190, 90, 320], warm: 0xffcf9a, si: 1.9, hemi: 0.75, sky: ['#2c3f6b', '#8f7f8e', '#e0b184', '#c79a6a'], exp: 0.9, amb: 0xb9c4de },
  { name: 'Morning', sun: [320, 420, 180], warm: 0xfff3dd, si: 2.5, hemi: 1.15, sky: ['#5b86ba', '#a8c3d8', '#dcd6c4', '#c9b795'], exp: 0.92, amb: 0xdfe9f2 },
  { name: 'Noon', sun: [40, 620, 60], warm: 0xffffff, si: 2.9, hemi: 1.3, sky: ['#4a7cc0', '#9dc0dd', '#dee3d9', '#cbbfa4'], exp: 0.88, amb: 0xeaf1f8 },
  { name: 'Dusk', sun: [-360, 110, -180], warm: 0xffb877, si: 1.7, hemi: 0.7, sky: ['#20305e', '#6b5f86', '#c98a63', '#9c7550'], exp: 0.95, amb: 0xa8b0cf }
];
// Four of the hours are astronomical simulations: the sun's altitude and bearing are computed
// for the latitude of Jerusalem on a representative feast date, approximating where shadows fell.
// Dates are proleptic Gregorian equivalents of the festival days in c. 30 CE, and the
// clock is local apparent (sundial) time, which is what the temple service kept.
const JLAT = 31.7781, JLON = 35.2354;
function solarAltAz(y, mo, d, localSolarHour) {
  const utcHour = localSolarHour - JLON / 15;
  const dt = new Date(Date.UTC(2000, mo, d, 0, 0, 0));
  dt.setUTCFullYear(y);
  const jd = dt.getTime() / 86400000 + 2440587.5 + utcHour / 24;
  const n = jd - 2451545.0;
  const L = (280.460 + 0.9856474 * n) % 360;                      // mean longitude
  const g = ((357.528 + 0.9856003 * n) % 360) * Math.PI / 180;    // mean anomaly
  const lam = (L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * Math.PI / 180;
  const eps = (23.439 - 0.0000004 * n) * Math.PI / 180;
  const dec = Math.asin(Math.sin(eps) * Math.sin(lam));
  const ha = (localSolarHour - 12) * 15 * Math.PI / 180;          // apparent solar time
  const lat = JLAT * Math.PI / 180;
  const alt = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(ha));
  let az = Math.atan2(-Math.sin(ha) * Math.cos(dec),
    Math.cos(lat) * Math.sin(dec) - Math.sin(lat) * Math.cos(dec) * Math.cos(ha));  // from north, +east
  if (az < 0) az += Math.PI * 2;
  return { alt, az };
}
// world axes: east = +x, north = -z (the model is flipped on build)
function sunVector(alt, az) {
  const ca = Math.cos(alt);
  return new THREE.Vector3(Math.sin(az) * ca, Math.max(0.03, Math.sin(alt)), -Math.cos(az) * ca).multiplyScalar(620);
}
const SKIES = {
  low:  ['#2c3f6b', '#8f7f8e', '#e0b184', '#c79a6a'],
  mid:  ['#5b86ba', '#a8c3d8', '#dcd6c4', '#c9b795'],
  high: ['#4a7cc0', '#9dc0dd', '#dee3d9', '#cbbfa4']
};
const SOLAR = [
  { name: 'Passover dawn', date: [30, 3, 5], h: 6.3, sub: '15 Nisan, c. 30 CE — the hour of the morning sacrifice' },
  { name: 'Passover noon', date: [30, 3, 5], h: 12.0, sub: '15 Nisan — the sun over the altar' },
  { name: 'Atonement morning', date: [30, 8, 28], h: 9.4, sub: '10 Tishri — the hour the high priest went in' },
  { name: 'Tabernacles dusk', date: [30, 9, 3], h: 17.4, sub: '15 Tishri — the lamps lit in the Court of the Women' }
].map(s => {
  const { alt, az } = solarAltAz(s.date[0], s.date[1], s.date[2], s.h);
  const deg = alt * 180 / Math.PI;
  const sky = deg < 12 ? SKIES.low : deg < 42 ? SKIES.mid : SKIES.high;
  return Object.assign({}, s, {
    solar: true, alt: deg, az: az * 180 / Math.PI,
    sun: sunVector(alt, az).toArray(),
    warm: deg < 10 ? 0xffc286 : deg < 28 ? 0xffe6c2 : 0xfff6e6,
    si: 1.3 + Math.min(1.7, deg / 34), hemi: 0.62 + Math.min(0.68, deg / 60),
    sky, exp: deg < 12 ? 0.96 : 0.9, amb: deg < 12 ? 0xb1bcd8 : 0xdfe9f2
  });
});
const LIGHTS = HOURS.concat(SOLAR);
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
  hour = (i + LIGHTS.length) % LIGHTS.length;
  const h = LIGHTS[hour];
  sun.position.set(...h.sun); sun.color.setHex(h.warm); sun.intensity = h.si;
  hemi.intensity = h.hemi; hemi.color.setHex(h.amb);
  renderer.toneMappingExposure = h.exp;
  const t = skyTex(h.sky);
  scene.background = t; scene.environment = t;
  el('t-hour').textContent = h.name;
  el('t-hour').classList.toggle('on', !!h.solar);
  el('t-hour').title = h.solar
    ? `${h.sub} · sun ${h.alt.toFixed(0)}° above the horizon, bearing ${h.az.toFixed(0)}° from north`
    : 'The hour of the day — four stylised hours, then four astronomical simulations for representative festival dates';
  if (h.solar) caption(h.name, h.sub,
    `The sun stands ${h.alt.toFixed(0)}° above the horizon on a bearing of ${h.az.toFixed(0)}° from north, an astronomical simulation for a selected representative date at Jerusalem's latitude (31.78° N). It approximates the shadows for that festival; it does not claim an exact recovered calendar day.`);
  invalidateShadows(3);
}
el('t-hour').addEventListener('click', () => setHour(hour + 1));

const HINTS = {
  orbit: 'Click anything to read it &middot; <b>double-click</b> the ground to stand there &middot; <b>drag</b> to orbit, <b>scroll</b> to zoom',
  walk: '<b>W A S D</b> to walk &middot; <b>drag</b> to look &middot; <b>Shift</b> to run &middot; <b>double-click</b> for free look &middot; click anything to read it',
  walkLock: 'Free look &mdash; move the mouse to look &middot; <b>W A S D</b> to walk &middot; click the crosshair on anything to read it &middot; <b>Esc</b> to release',
  mobile: 'Tap anything to read it &middot; drag to look around, pinch to zoom',
  mobileWalk: 'Tap anything to read it &middot; drag to look, joystick to move',
  stand: 'Click any point on the model to stand there'
};
function setHint() {
  const key = standArmed ? 'stand' : isNarrow() ? (mode === 'walk' ? 'mobileWalk' : 'mobile') : (mode === 'walk' && walk.lock ? 'walkLock' : mode);
  el('hint').innerHTML = HINTS[key] + '<div id="coords"></div>';
}

// mode switch
function setMode(m) {
  mode = m;
  if (isNarrow()) { el('index').classList.remove('open'); el('tools').classList.remove('open'); applyViewOffset(); }
  document.body.classList.toggle('walking', m === 'walk');
  el('m-orbit').classList.toggle('on', m === 'orbit');
  el('m-walk').classList.toggle('on', m === 'walk');
  controls.enabled = m === 'orbit';
  if (m === 'walk') {
    const st = (current && walkStation(current)) || { x: 90, z: 80, yaw: Math.PI, pitch: 0.04 };
    walk.pos.set(st.x, st.y == null ? 0 : st.y, st.z);
    walk.yaw = walk.yawT = st.yaw;
    walk.pitch = walk.pitchT = st.pitch;
    walk.vel.set(0, 0, 0); walk.glide = 0; walk.eyeY = null;
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
let pathKey = 'full';
function step(d) {
  const seq = path.ids;
  const i = current ? seq.indexOf(current) : -1;
  const n = (i + d + seq.length) % seq.length;
  const id = seq[i < 0 ? 0 : n];
  openLabel(id); goTo(id);
}
el('tour-select').addEventListener('change', e => {
  const v = e.target.value;
  if (v.slice(0, 6) === 'sight:') { showSight(v.slice(6)); return; }
  pathKey = v.replace(/^tour:/, '');
  path = PATHS[pathKey] || PATHS.full;
  el('handout-title').textContent = pathKey === 'full'
    ? 'Study handout — 43 locations, 162 passages'
    : 'Tour handout — ' + path.name;
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
renderer.domElement.addEventListener('dblclick', e => {
  if (mode !== 'walk') { standAtPointer(e); return; }   // orbit: drop in where you clicked
  if (isTouch()) return;
  if (document.pointerLockElement === renderer.domElement) document.exitPointerLock();
  else { try { renderer.domElement.requestPointerLock(); } catch (err) {} }
});
document.addEventListener('pointerlockchange', () => {
  walk.lock = document.pointerLockElement === renderer.domElement;
  document.body.classList.toggle('looking', walk.lock);
  setHint();
});
addEventListener('pointercancel', () => { look = null; });
renderer.domElement.addEventListener('pointermove', e => {
  if (downPt && Math.hypot(e.clientX - downPt[0], e.clientY - downPt[1]) > 5) dragged = true;
  if (mode !== 'walk') return;
  if (document.pointerLockElement === renderer.domElement) {
    walk.yawT -= e.movementX * 0.0022;
    walk.pitchT = clamp(walk.pitchT - e.movementY * 0.0022, -1.2, 1.1);
    return;
  }
  if (look) {                                  // drag anywhere on the view to look around
    walk.yawT -= (e.clientX - look.x) * 0.0038;
    walk.pitchT = clamp(walk.pitchT - (e.clientY - look.y) * 0.0038, -1.2, 1.1);
    look = { x: e.clientX, y: e.clientY };
  }
});
renderer.domElement.addEventListener('click', e => {
  if (dragged) return;
  const r = renderer.domElement.getBoundingClientRect();
  const ndc = (mode === 'walk' && walk.lock) ? new THREE.Vector2(0, 0)
    : new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  const id = featureAt(ndc);
  if (id && LABELS[id]) openLabel(id); else if (mode === 'orbit') closeLabel();
});
// Walking: the wheel drives you forward and back, the way a mouse expects to.
renderer.domElement.addEventListener('wheel', e => {
  if (mode !== 'walk') return;
  e.preventDefault();
  walk.glide = clamp(walk.glide + clamp(-e.deltaY * 0.05, -6, 6), -9, 9);
}, { passive: false });

addEventListener('keydown', e => {
  walk.keys[e.code] = true;
  if (mode === 'walk' && /^(Arrow|Space|Page)/.test(e.code)) e.preventDefault();
  if (mode === 'walk') { if (e.code === 'ArrowUp') walk.keys.KeyW = true; if (e.code === 'ArrowDown') walk.keys.KeyS = true; }
  if (mode === 'walk' && e.code === 'Space') { e.preventDefault(); walk.vel.set(0, 0, 0); walk.glide = 0; }
  if (e.code === 'Escape') {
    if (el('cfm-overlay').style.display === 'flex') closeCfm();
    else if (el('handout-overlay').style.display === 'flex') closeHandout();
    else closeLabel();
  }
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
  const want = 'study-guide.html' + (pathKey === 'full' ? '' : '?tour=' + pathKey);
  if (f.dataset.want !== want) { f.dataset.want = want; f.src = want; }
});
function closeHandout() { el('handout-overlay').style.display = 'none'; }
el('handout-close').addEventListener('click', closeHandout);
el('handout-print').addEventListener('click', () => {
  const f = el('handout-frame');
  try { f.contentWindow.focus(); f.contentWindow.print(); } catch (err) { window.open(f.dataset.want || 'study-guide.html', '_blank'); }
});

// ---------- loop ----------
const fwd = new THREE.Vector3(), side = new THREE.Vector3(), probe = new THREE.Raycaster();
probe.far = 1.4;
const WALK_SPEED = 4.4, RUN_MULT = 2.6, ACCEL = 26, DRAG = 11, STEP_UP = 0.62, SHOULDER = 0.62;
// True if a body-width sweep in this direction runs into something solid.
function hits(dir, reach) {
  const eyeY = walk.pos.y;
  for (const h of [0.45, 1.45]) {             // shin height and chest height
    for (const off of [-SHOULDER * 0.6, 0, SHOULDER * 0.6]) {
      const o = new THREE.Vector3(-dir.z * off, 0, dir.x * off);
      probe.set(new THREE.Vector3(walk.pos.x + o.x, eyeY + h, walk.pos.z + o.z), dir);
      if (probe.intersectObject(model, true).some(x => x.object.userData.layer !== 'roof' && x.distance < reach)) return true;
    }
  }
  return false;
}
// Try to move by (dx,dz); if blocked, slide along whichever axis is free.
function tryMove(dx, dz) {
  const attempts = [[dx, dz], [dx, 0], [0, dz]];
  for (const [ax, az] of attempts) {
    const len = Math.hypot(ax, az);
    if (len < 1e-5) continue;
    const dir = new THREE.Vector3(ax / len, 0, az / len);
    if (hits(dir, len + 0.5)) continue;
    const nx = walk.pos.x + ax, nz = walk.pos.z + az;
    const fy = floorAt(nx, nz, walk.pos.y + 6);
    if (!Number.isFinite(fy) || fy < -24) continue;
    if (fy - walk.pos.y > STEP_UP) continue;   // too high to climb in one stride
    walk.pos.set(nx, fy, nz);
    return true;
  }
  return false;
}
function moveWalk(dt) {
  const k = walk.keys;
  let f = 0, s = 0;
  if (k.KeyW) f += 1;
  if (k.KeyS) f -= 1;
  if (k.KeyA || k.KeyQ) s -= 1;
  if (k.KeyD || k.KeyE) s += 1;
  if (walk.glide) {                             // the wheel adds a forward push that decays
    f += clamp(walk.glide, -1.4, 1.4);
    walk.glide *= Math.exp(-4.5 * dt);
    if (Math.abs(walk.glide) < 0.02) walk.glide = 0;
  }
  fwd.set(Math.sin(walk.yaw), 0, Math.cos(walk.yaw)).multiplyScalar(-1);
  side.set(fwd.z, 0, -fwd.x);
  const want = new THREE.Vector3();
  if (f || s) want.copy(fwd).multiplyScalar(f).add(side.clone().multiplyScalar(s));
  if (want.lengthSq() > 1) want.normalize();
  const top = WALK_SPEED * ((k.ShiftLeft || k.ShiftRight) ? RUN_MULT : 1);
  want.multiplyScalar(top);
  // ease toward the wanted velocity, coast to a stop when nothing is held
  const rate = want.lengthSq() > 0 ? ACCEL : DRAG;
  const kk = 1 - Math.exp(-rate * dt);
  walk.vel.x += (want.x - walk.vel.x) * kk;
  walk.vel.z += (want.z - walk.vel.z) * kk;
  if (Math.hypot(walk.vel.x, walk.vel.z) < 0.02) { walk.vel.set(0, 0, 0); return; }
  if (!tryMove(walk.vel.x * dt, walk.vel.z * dt)) walk.vel.multiplyScalar(0.35);
}

window.__t = { THREE, renderer, scene, camera, controls, model, features, walk, goTo, openLabel, viewFor: VIEW, pins, setMode: m => setMode(m), walkStation, anchor };

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
    if (joyPan.x || joyPan.y) {
      const dist = camera.position.distanceTo(controls.target);
      const speed = dist * 0.7 * dt;
      const fwd = new THREE.Vector3(); camera.getWorldDirection(fwd);
      const right = new THREE.Vector3().crossVectors(fwd, camera.up).normalize();
      const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
      const off = right.multiplyScalar(joyPan.x * speed).add(up.multiplyScalar(-joyPan.y * speed));
      camera.position.add(off); controls.target.add(off);
    }
    controls.update();
    // never let the orbit camera sink below the ground it is looking at
    const g = floorAt(camera.position.x, camera.position.z, 900);
    if (g > -24 && camera.position.y < g + 2) camera.position.y = g + 2;
  }
  else {
    const k = walk.keys, turn = 1.6 * dt * ((k.ShiftLeft || k.ShiftRight) ? 1.7 : 1);
    if (k.ArrowLeft) walk.yawT += turn;
    if (k.ArrowRight) walk.yawT -= turn;
    if (k.PageUp) walk.pitchT = clamp(walk.pitchT + turn * 0.6, -1.2, 1.1);
    if (k.PageDown) walk.pitchT = clamp(walk.pitchT - turn * 0.6, -1.2, 1.1);
    const ease = 1 - Math.exp(-18 * dt);        // the look chases the input, so drags glide
    walk.yaw += (walk.yawT - walk.yaw) * ease;
    walk.pitch += (walk.pitchT - walk.pitch) * ease;
    moveWalk(dt);
    updateWalkCamera(dt);
    el('coords').textContent = `${walk.pos.x.toFixed(0)}, ${walk.pos.z.toFixed(0)} · floor ${walk.pos.y.toFixed(1)} m`;
  }
  layoutPins();
  const dir = new THREE.Vector3(); camera.getWorldDirection(dir);
  el('compass-dial').style.transform = `rotate(${-Math.atan2(dir.x, -dir.z) * 180 / Math.PI}deg)`;
  if (shadowFrames > 0) { renderer.shadowMap.needsUpdate = true; shadowFrames--; }
  renderer.render(scene, camera);
  for (const h of hooks) { try { h(dt, now); } catch (err) {} }
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

  try { frame(now); } catch (err) { if (!tick.warned) { tick.warned = true; console.error(err); } }
requestAnimationFrame(tick);
}
// fallback in case rAF is throttled (hidden tab, capture tooling)
setInterval(() => { if (performance.now() - last > 240) frame(performance.now()); }, 240);

function isNarrow() { return window.matchMedia('(max-width: 1200px)').matches; }   // phone and tablet chrome alike
const indexEl = () => el('index');
let gutter = { left: 0, right: 0 };
function applyViewOffset() {
  const w = stageEl.clientWidth, h = stageEl.clientHeight;
  const idx = indexEl();
  // the sidebar counts as a gutter only while it is actually on screen
  const base = stageEl.getBoundingClientRect();
  const ir = idx ? idx.getBoundingClientRect() : null;
  const idxOn = !!(ir && ir.width && getComputedStyle(idx).display !== 'none'
    && ir.right - base.left > 6 && ir.top - base.top < h - 6);
  const side = idxOn ? Math.max(0, ir.right - base.left) : 0;
  if (isNarrow()) {
    const landscape = matchMedia('(orientation: landscape)').matches;
    if (landscape) {   // sheets dock to the left half here, so the model stays visible on the right
      const anyOpen = [panel, el('tools'), idx].some(sheetEl => sheetEl && sheetEl.classList.contains('open'));
      const leftW = anyOpen ? Math.min(w * 0.5, 420) : 0;
      gutter.left = leftW; gutter.right = 0;
      camera.setViewOffset(w, h, -leftW / 2, 0, w, h);
      const hint2 = el('hint');
      hint2.style.left = `calc(50% + ${leftW / 2}px)`;
      hint2.style.maxWidth = `min(560px, ${Math.max(160, w - leftW - 24)}px)`;
      refreshBlockRects();
      return;
    }
    gutter.left = 0; gutter.right = 0;
    // covered fraction comes from the CSS breakpoints directly — measuring the sheet's
    // rect right after toggling 'open' would still read the pre-transition (closed) box
    const tabletW = w >= 700;
    let coverFrac = 0;
    if (panel.classList.contains('open')) coverFrac = tabletW ? 0.5 : 0.56;
    else if (el('tools').classList.contains('open') || idx.classList.contains('open')) coverFrac = tabletW ? 0.34 : 0.25;
    const bottomH = h * coverFrac;
    camera.setViewOffset(w, h, 0, bottomH / 2, w, h);
    const hint2 = el('hint');
    hint2.style.left = '50%'; hint2.style.maxWidth = '92vw';
    refreshBlockRects();
    return;
  }
  gutter.left = side;
  gutter.right = panel.classList.contains('open') ? panel.getBoundingClientRect().width : 0;
  const shift = (gutter.left - gutter.right) / 2;
  camera.setViewOffset(w, h, -shift, 0, w, h);
  const hint = el('hint');
  const gap = Math.max(160, w - gutter.left - gutter.right);
  hint.style.left = (gutter.left + gap / 2) + 'px';
  hint.style.maxWidth = (gap - 24) + 'px';
  refreshBlockRects();
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
function isTouch() {
  try { return window.matchMedia('(pointer: coarse)').matches; } catch (e) { return false; }
}
function syncMobileClass() {
  const m = isNarrow();
  document.body.classList.toggle('mobile', m);
  document.body.classList.toggle('touch', isTouch());   // a separate question entirely
  if (!m) { el('index').classList.remove('open'); el('tools').classList.remove('open'); }
  setHint();
  applyViewOffset();
}
syncMobileClass();
try { window.matchMedia('(max-width: 1200px)').addEventListener('change', syncMobileClass); } catch (e) {}
try { window.matchMedia('(pointer: coarse)').addEventListener('change', syncMobileClass); } catch (e) {}
addEventListener('resize', syncMobileClass);            // the class always matches the width

function sheet(which) {
  const a = el(which), b = el(which === 'index' ? 'tools' : 'index');
  b.classList.remove('open');
  const opening = !a.classList.contains('open');
  a.classList.toggle('open', opening);
  applyViewOffset();
  if (opening) closeLabel();
  el('m-menu').classList.toggle('on', el('tools').classList.contains('open') || el('index').classList.contains('open'));
}
el('m-menu').addEventListener('click', () => sheet('tools'));
el('m-places2').addEventListener('click', () => { el('tools').classList.remove('open'); sheet('index'); });
el('index').addEventListener('click', ev => {
  if (isNarrow() && ev.target.closest('button')) {
    el('index').classList.remove('open');
    el('m-menu').classList.remove('on');
    applyViewOffset();
  }
});
el('tools').addEventListener('click', ev => {
  if (isNarrow() && ev.target.closest('.exp') && ev.target.id !== 'm-places2') {
    el('tools').classList.remove('open');
    el('m-menu').classList.remove('on');
    applyViewOffset();
  }
});

// thumb joystick: forward/back/strafe in Walk, pan up/down/left/right in Orbit — pinch still zooms
const joyPan = { x: 0, y: 0 };
(function () {
  const base = el('joy-base'), thumb = el('joy-thumb');
  if (!base) return;
  const R = 42, DEAD = 0.22;
  let id = null, cx = 0, cy = 0;
  function setVec(dx, dy) {
    const len = Math.hypot(dx, dy), k = len > R ? R / len : 1;
    dx *= k; dy *= k;
    thumb.style.transform = `translate(${dx}px, ${dy}px)`;
    const nx = dx / R, ny = dy / R;
    walk.keys.KeyW = ny < -DEAD; walk.keys.KeyS = ny > DEAD;
    walk.keys.KeyA = nx < -DEAD; walk.keys.KeyD = nx > DEAD;
    joyPan.x = Math.abs(nx) > DEAD ? nx : 0;
    joyPan.y = Math.abs(ny) > DEAD ? ny : 0;
  }
  function reset() {
    thumb.style.transform = 'translate(0,0)';
    walk.keys.KeyW = walk.keys.KeyS = walk.keys.KeyA = walk.keys.KeyD = false;
    joyPan.x = joyPan.y = 0;
  }
  base.addEventListener('pointerdown', ev => {
    ev.preventDefault(); id = ev.pointerId;
    const r = base.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2;
    try { base.setPointerCapture(id); } catch (e) {}
    setVec(ev.clientX - cx, ev.clientY - cy);
  });
  base.addEventListener('pointermove', ev => { if (ev.pointerId === id) { ev.preventDefault(); setVec(ev.clientX - cx, ev.clientY - cy); } });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => base.addEventListener(t, ev => {
    if (ev.pointerId !== id) return; id = null; reset();
  }));
})();
el('joy-run').addEventListener('click', () => {
  const running = !walk.keys.ShiftLeft;
  walk.keys.ShiftLeft = running;
  el('joy-run').classList.toggle('on', running);
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

// ============================================================
// caption card — used by the sight lines, the arrival, and the computed hours
// ============================================================
const capCard = el('cap-card');
let capTimer = null;
function caption(title, sub, text, foot) {
  el('cap-title').textContent = title;
  el('cap-sub').textContent = sub || '';
  el('cap-sub').style.display = sub ? 'block' : 'none';
  el('cap-text').textContent = text || '';
  el('cap-foot').textContent = foot || '';
  el('cap-foot').style.display = foot ? 'block' : 'none';
  capCard.classList.add('open');
  clearTimeout(capTimer);
}
function hideCaption() { capCard.classList.remove('open'); clearTimeout(capTimer); }
el('cap-close').addEventListener('click', () => { hideCaption(); stopArrival(); });

// ---------- sight lines ----------
function flyPose(c, t, dur = 1700) {
  if (mode === 'walk') setMode('orbit');
  flight = {
    fc: camera.position.clone(), ft: controls.target.clone(),
    tc: new THREE.Vector3(c[0], c[1], -c[2]),
    tt: new THREE.Vector3(t[0], t[1], -t[2]),
    t0: performance.now(), dur
  };
}
function showSight(key) {
  const s = SIGHTS[key]; if (!s) return;
  stopArrival();
  closeLabel();
  if (key === 'unseen' && state.cutaway) { setCutaway(false); state.autoCut = false; }
  flyPose(s.c, s.t);
  caption(s.name, s.ref, s.text, 'A sight line, not a station — drag to look about from where you have been put.');
}

// ---------- the arrival: ninety seconds from Olivet to the veil ----------
const ARRIVAL = [
  { c: [700, 170, -60], t: [-30, 20, 0], hold: 5200, title: 'Coming up from Jericho',
    text: 'The road from the Jordan crosses the ridge of Olivet and the whole house appears at once, across the ravine: four hundred and fifty metres of enclosure, and a facade of gold facing the sunrise.' },
  { c: [330, 24, -110], t: [150, -22, -60], hold: 4600, title: 'The Kidron',
    text: 'The valley first. From the floor of the Kidron the retaining wall stands some forty-five metres above your head, and the platform it holds up is man-made ground.' },
  { c: [30, 42, -350], t: [-6, -10, -272], hold: 5000, title: 'The southern stairs',
    text: 'Pilgrims arrived here, at the great stairway under the Huldah gates: treads of alternating width, so that no one could run at the house of God.' },
  { c: [46, 18, -206], t: [-24, 12, -140], hold: 4800, title: 'Through the Royal Stoa',
    text: 'You come up out of a tunnel into a basilica of a hundred and sixty-two columns — money changed, doves sold, and the noise of a market under a cedar roof.' },
  { c: [128, 22, -66], t: [30, 8, 0], hold: 4600, title: 'The Court of the Gentiles',
    text: 'Open ground, open to all the earth: the one court where anyone at all might stand.' },
  { c: [96, 6, 0], t: [58, 12, 0], hold: 4800, title: 'The lattice',
    text: 'A stone screen a metre and a half high, with notices in Greek and Latin: no foreigner beyond this point, on pain of death. Paul was nearly killed over the charge of having brought a Greek past it.' },
  { c: [54, 12, 12], t: [0, 13, 0], hold: 4600, title: 'The Court of the Women',
    text: 'Twelve steps up, and through the eastern gate into the court of assembly, with the treasury chests along its wall and galleries above.' },
  { c: [22, 14, 0], t: [-24, 15, 0], hold: 4800, title: 'The gate of Nicanor',
    text: 'Fifteen semicircular steps, where the Levites sang, and a gate of Corinthian bronze. Beyond it the ground belongs to the service.' },
  { c: [2, 26, 0], t: [-45, 26, 0], hold: 5000, title: 'The altar and the house',
    text: 'Fire, blood and smoke in the open air, and behind them a hundred cubits of gold. The layman comes eleven cubits inside this court and no further.' },
  { c: [-34, 17, 22], t: [-72, 14, 0], hold: 5600, cut: true, title: 'Within',
    text: 'The house opened: lampstand, table of bread, altar of incense, and the two curtains at the west end with a cubit of space between them.' },
  { c: [-64, 13, 14], t: [-82, 11, 0], hold: 5200, cut: true, title: 'Behind the veil',
    text: 'An empty room, dark, twenty cubits square, entered by one man on one day in the year with blood and a censer of coals. This is the room the whole apparatus exists to keep.' },
  { c: [116, 238, -420], t: [-24, 8, 0], hold: 4200, title: 'The whole of it',
    text: 'Now the survey: forty-three annotated places, the city around them, and the hour of the day to set the shadows. Click anything to read it.' }
];
let arr = null;
function stopArrival() {
  if (!arr) return;
  arr = null;
  if (state.autoCut) { setCutaway(false); state.autoCut = false; }
  el('arrive-btn').classList.remove('on');
}
function startArrival() {
  stopArrival();
  closeLabel(); hideCaption();
  if (mode === 'walk') setMode('orbit');
  arr = { i: -1, next: 0 };
  el('arrive-btn').classList.add('on');
  advanceArrival(performance.now());
}
function advanceArrival(now) {
  arr.i++;
  if (arr.i >= ARRIVAL.length) { stopArrival(); return; }
  const s = ARRIVAL[arr.i];
  if (s.cut && !state.cutaway) { setCutaway(true); state.autoCut = true; }
  if (!s.cut && state.autoCut) { setCutaway(false); state.autoCut = false; }
  flyPose(s.c, s.t, 2400);
  caption(s.title, `${arr.i + 1} of ${ARRIVAL.length} · the arrival`, s.text,
    'Press Esc, or close this card, to stop and explore on your own.');
  arr.next = now + 2400 + s.hold;
}
hooks.push((dt, now) => { if (arr && now >= arr.next) advanceArrival(now); });
el('arrive-btn').addEventListener('click', () => { arr ? stopArrival() : startArrival(); });
el('welcome-arrive').addEventListener('click', () => { dismissWelcome(); startArrival(); });

// ---------- certainty layer ----------
// Nothing else in this app is as easy to mistake for a photograph as a 3D model, so
// the model can be asked to show how much of itself is actually known.
// colourblind-safe patterning: each certainty level gets its own hatch density/angle
// as well as its own tint, so the three levels stay distinct under any colour-vision
// deficiency (and on a greyscale printout of a screenshot).
const CERT_PATTERNS = { attested: 'dot', inferred: 'diag', conjectural: 'cross' };
function certPatternTexture(pattern, tintHex) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const tint = '#' + tintHex.toString(16).padStart(6, '0');
  g.fillStyle = tint; g.fillRect(0, 0, 128, 128);
  g.strokeStyle = 'rgba(20,16,10,.45)'; g.fillStyle = 'rgba(20,16,10,.45)'; g.lineWidth = 5;
  if (pattern === 'dot') {
    for (let y = 16; y < 128; y += 32) for (let x = 16; x < 128; x += 32) { g.beginPath(); g.arc(x, y, 6, 0, Math.PI * 2); g.fill(); }
  } else if (pattern === 'diag') {
    for (let i = -128; i < 256; i += 22) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 128, 128); g.stroke(); }
  } else { // cross
    for (let i = -128; i < 256; i += 22) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 128, 128); g.stroke(); }
    for (let i = -128; i < 256; i += 22) { g.beginPath(); g.moveTo(i, 128); g.lineTo(i + 128, 0); g.stroke(); }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 4); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const certMats = {};
Object.entries(CERT_LEVELS).forEach(([k, v]) => {
  certMats[k] = new THREE.MeshStandardMaterial({
    color: v.tint, roughness: 0.85, metalness: 0, side: THREE.DoubleSide, name: 'certainty_' + k,
    map: certPatternTexture(CERT_PATTERNS[k], v.tint)
  });
});
let certOn = false;
function setCertainty(on) {
  certOn = on;
  highlight(null);            // put every material back before swapping them wholesale
  Object.entries(features).forEach(([id, f]) => {
    const level = CERTAINTY[id] || 'inferred';
    f.traverse(o => {
      if (!o.isMesh) return;
      if (on) {
        if (!o.userData._mat) o.userData._mat = o.material;
        o.material = certMats[level];
      } else if (o.userData._mat) {
        o.material = o.userData._mat; o.userData._mat = null;
      }
    });
  });
  el('cert-key').classList.toggle('open', on);
  el('t-cert').classList.toggle('on', on);
  if (current) highlight(current);          // the selection survives the swap, both ways
  invalidateShadows();
}
el('t-cert').addEventListener('click', () => setCertainty(!certOn));
el('cert-key').innerHTML = '<h6>How much is known</h6><p class="ck-caveat">Each level has its own hatch pattern as well as its own colour, so the key still reads correctly for colour-blind viewers or on a black-and-white printout. This single badge per location collapses several separate questions \u2014 physical survival, textual attestation, reconstructed appearance, and (where relevant) biblical-event association. A location can be attested while its depicted form, function, or connection to a specific event remains conjectural; see each location\u2019s note for the breakdown.</p>' + Object.entries(CERT_LEVELS).map(([k, v]) =>
  `<div class="ck"><i class="pat-${CERT_PATTERNS[k]}" style="background-color:#${v.tint.toString(16).padStart(6, '0')}"></i><b>${v.name}</b><span>${v.blurb}</span></div>`).join('');

// ---------- people ----------
let peopleOn = true;
el('t-people').addEventListener('click', e => {
  peopleOn = !peopleOn;
  setLayer('figures', peopleOn);
  e.currentTarget.classList.toggle('off', !peopleOn);
});

// ---------- measuring tape ----------
// Two taps give a distance in metres and in cubits, which is the unit the sources argue in.
const measure = { pts: [], on: false };
const measureGroup = new THREE.Group(); measureGroup.name = 'measure'; scene.add(measureGroup);
function clearMeasure() {
  measure.pts = [];
  measureGroup.clear();
  el('measure-out').innerHTML = 'Tap two points on the model. Model-space estimate only, not an excavated or archaeologically exact measurement.';
}
function setMeasure(on) {
  measure.on = on;
  el('t-measure').classList.toggle('on', on);
  el('measure-out').classList.toggle('open', on);
  document.body.classList.toggle('measuring', on);
  if (on) { clearMeasure(); hideCaption(); } else { measureGroup.clear(); measure.pts = []; }
}
function addMeasurePoint(ndc) {
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObject(model, true).find(h => solid(h.object) && h.object.userData.layer !== 'pin');
  if (!hit) return;
  if (measure.pts.length === 2) clearMeasure();
  measure.pts.push(hit.point.clone());
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xffe9a8 }));
  dot.position.copy(hit.point); measureGroup.add(dot);
  if (measure.pts.length === 2) {
    const [a, b] = measure.pts;
    const g = new THREE.BufferGeometry().setFromPoints([a, b]);
    measureGroup.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xffe9a8 })));
    const d = a.distanceTo(b);
    const dh = Math.hypot(b.x - a.x, b.z - a.z), dv = Math.abs(b.y - a.y);
    el('measure-out').innerHTML =
      `<b>${d.toFixed(1)} m &middot; ${(d / 0.5).toFixed(0)} cubits</b>` +
      `<span>horizontal ${dh.toFixed(1)} m &middot; vertical ${dv.toFixed(1)} m</span>` +
      `<span class="measure-warn">Model-space estimate. Basis: normalized geometry, not an excavated or archaeologically exact measurement.</span>` +
      `<span class="cite">Reckoned at the Mishnaic cubit of Middot, taken here at 0.5 m &mdash; a round figure inside the range the sources allow.</span>` +
      `<button id="measure-clear">Clear</button>`;
    el('measure-clear').addEventListener('click', clearMeasure);
  } else {
    el('measure-out').innerHTML = 'One point set. Tap the second.';
  }
}
el('t-measure').addEventListener('click', () => setMeasure(!measure.on));

// the click handler above opens labels; in measure mode the click measures instead
renderer.domElement.addEventListener('click', e => {
  if (!measure.on || dragged) return;
  e.stopImmediatePropagation();
  const r = renderer.domElement.getBoundingClientRect();
  const ndc = (mode === 'walk' && walk.lock) ? new THREE.Vector2(0, 0)
    : new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  addMeasurePoint(ndc);
}, true);

// ---------- ambient sound, off by default ----------
// No recordings: a filtered noise bed whose loudness follows the crowd, so the outer
// court murmurs, the inner court quietens, and the room behind the veil is silent.
const audio = { ctx: null, on: false, gain: null, crowd: null, air: null };
function initAudio() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return false;
  const ctx = new AC();
  const buf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let l = 0;
  for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; l = (l + 0.02 * w) / 1.02; d[i] = l * 3.2; }
  const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
  const crowdF = ctx.createBiquadFilter(); crowdF.type = 'bandpass'; crowdF.frequency.value = 620; crowdF.Q.value = 0.7;
  const crowdG = ctx.createGain(); crowdG.gain.value = 0;
  const airF = ctx.createBiquadFilter(); airF.type = 'lowpass'; airF.frequency.value = 240;
  const airG = ctx.createGain(); airG.gain.value = 0.05;
  const master = ctx.createGain(); master.gain.value = 0.9;
  src.connect(crowdF).connect(crowdG).connect(master);
  src.connect(airF).connect(airG).connect(master);
  master.connect(ctx.destination);
  // a slow wander, so the murmur never sits still
  const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
  const lfoG = ctx.createGain(); lfoG.gain.value = 180;
  lfo.connect(lfoG).connect(crowdF.frequency); lfo.start();
  src.start();
  Object.assign(audio, { ctx, gain: master, crowd: crowdG, air: airG });
  return true;
}
function soundLevel() {
  const p = camera.position;
  const inHouse = p.x < -50 && p.x > -92 && Math.abs(p.z) < 12 && p.y > 8 && p.y < 32;
  if (inHouse) return p.x < -74 ? 0.0 : 0.02;            // behind the veil: nothing at all
  const inAzarah = p.x > -101 && p.x < -6 && Math.abs(p.z) < 34 && p.y > 5 && p.y < 26;
  if (inAzarah) return 0.06;
  const inWomen = p.x > -6 && p.x < 60 && Math.abs(p.z) < 30 && p.y < 22;
  if (inWomen) return 0.15;
  const onMount = Math.abs(p.x) < 150 && Math.abs(p.z) < 235;
  const high = Math.max(0, Math.min(1, (p.y - 60) / 200));
  return (onMount ? 0.2 : 0.09) * (1 - high * 0.85);
}
el('t-sound').addEventListener('click', e => {
  if (!audio.ctx && !initAudio()) { e.currentTarget.classList.add('off'); return; }
  audio.on = !audio.on;
  if (audio.on && audio.ctx.state === 'suspended') audio.ctx.resume();
  e.currentTarget.classList.toggle('on', audio.on);
  e.currentTarget.textContent = audio.on ? 'Sound on' : 'Sound';
});
hooks.push((dt) => {
  if (!audio.ctx) return;
  const want = audio.on ? soundLevel() : 0;
  const g = audio.crowd.gain, t = audio.ctx.currentTime;
  g.setTargetAtTime(want, t, 0.6);
  audio.air.gain.setTargetAtTime(audio.on ? 0.04 : 0, t, 0.6);
});

// ---------- keyboard and screen readers ----------
// The location list is the navigation: make it behave like one.
index.setAttribute('role', 'listbox');
index.setAttribute('aria-label', 'All 43 annotated locations');
index.querySelectorAll('button').forEach(b => { b.setAttribute('role', 'option'); b.setAttribute('aria-selected', 'false'); });
// a keyboard activation moves the reading focus into the panel, so a screen reader
// lands on the title and reads down through the commentary
index.addEventListener('click', ev => {
  const b = ev.target.closest('button');
  if (b && ev.detail === 0) el('p-title').focus();
});
index.addEventListener('keydown', e => {  if (!/^Arrow(Up|Down)$|^Home$|^End$/.test(e.key)) return;
  const bs = [...index.querySelectorAll('button')];
  const i = bs.indexOf(document.activeElement);
  let n = i;
  if (e.key === 'ArrowDown') n = i < 0 ? 0 : Math.min(bs.length - 1, i + 1);
  if (e.key === 'ArrowUp') n = i < 0 ? bs.length - 1 : Math.max(0, i - 1);
  if (e.key === 'Home') n = 0;
  if (e.key === 'End') n = bs.length - 1;
  if (n !== i && bs[n]) { e.preventDefault(); bs[n].focus(); }
});
function markSelected(id) {
  index.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
}
addEventListener('keydown', e => {
  if (e.key === 'Escape') { hideCaption(); stopArrival(); if (measure.on) setMeasure(false); }
  if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
  if (e.key === '?') el('about-btn').click();
});

// ---------- modal focus trapping (WCAG 2.4.3 / 2.1.2) ----------
// Whichever dialog-role overlay is currently visible keeps Tab/Shift+Tab inside it,
// and Escape returns focus to whatever opened it.
let lastFocusedBeforeModal = null;
function visibleModal() {
  const candidates = [el('panel'), el('about-overlay'), el('cfm-overlay'), el('handout-overlay'), el('welcome')];
  return candidates.find(m => m && (m.classList.contains('open') || getComputedStyle(m).display === 'flex'));
}
addEventListener('focusin', e => {
  const m = visibleModal();
  if (m && !lastFocusedBeforeModal) lastFocusedBeforeModal = document.activeElement === m ? null : e.relatedTarget || null;
});
addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const modal = visibleModal();
  if (!modal) return;
  const focusables = [...modal.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter(x => x.offsetParent !== null && !x.disabled);
  if (!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  else if (!modal.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
});

// ---------- populate the guided select with the sight lines ----------
(function fillGuided() {
  const sel = el('tour-select');
  sel.innerHTML = '';
  const g1 = document.createElement('optgroup'); g1.label = 'Guided tours';
  Object.entries(PATHS).forEach(([k, p]) => {
    const o = document.createElement('option'); o.value = 'tour:' + k; o.textContent = p.name; g1.appendChild(o);
  });
  const g2 = document.createElement('optgroup'); g2.label = 'Sight lines';
  Object.entries(SIGHTS).forEach(([k, s]) => {
    const o = document.createElement('option'); o.value = 'sight:' + k; o.textContent = s.name; g2.appendChild(o);
  });
  sel.appendChild(g1); sel.appendChild(g2);
  sel.value = 'tour:full';
})();

// keep aria-selected in step with the panel
hooks.push(() => { if (markSelected.last !== current) { markSelected(current); markSelected.last = current; } });

// ---------- Weekly Reading index ----------
// The handout carries the same table in print; this is the version you teach from.
el('cfm-body').innerHTML = CURRICULUM.map(vol =>
  `<h3>${vol.vol}</h3>` + vol.blocks.map((b, i) =>
    `<div class="cfm-row"><div class="cfm-ref">${typo(b.ref)}</div>` +
    `<div class="cfm-theme">${typo(b.theme)}</div>` +
    `<div class="cfm-places">${b.ids.filter(id => LABELS[id]).map(id =>
      `<button data-id="${id}">${typo(LABELS[id].title)}</button>`).join('')}</div></div>`).join('')
).join('');
function closeCfm() { el('cfm-overlay').style.display = 'none'; }
el('cfm-btn').addEventListener('click', () => { el('cfm-overlay').style.display = 'flex'; });
el('cfm-close').addEventListener('click', closeCfm);
el('cfm-overlay').addEventListener('click', ev => { if (ev.target.id === 'cfm-overlay') closeCfm(); });
el('cfm-body').addEventListener('click', ev => {
  const b = ev.target.closest('button[data-id]');
  if (!b) return;
  closeCfm();
  openLabel(b.dataset.id); goTo(b.dataset.id);
});
el('cfm-print').addEventListener('click', () => {
  const ov = el('handout-overlay');
  closeCfm();
  ov.style.display = 'flex';
  const f = el('handout-frame');
  const want = 'study-guide.html#cfm';
  if (f.dataset.want !== want) { f.dataset.want = want; f.src = want; }
  el('handout-title').textContent = 'Weekly Reading index — inside the full handout';
});

// ---------- building phases of the platform ----------
// Leen Ritmeyer's reading of Middot 2:1: the platform Herod inherited was a square of
// 500 cubits, its eastern side the old wall whose seam is still visible above the
// Herodian courses; the Hasmoneans had already carried it south; Herod added the rest.
// Drawn as three coloured floors over the esplanade, one per phase.
const PHASE_BANDS = [
  { name: 'The 500-cubit square (Ritmeyer)', color: 0xd9b451, rects: [[-112.5, -131.25, 150, 131.25]],
    text: 'A square of five hundred cubits — about 262 m — described in Middot 2:1. Leen Ritmeyer proposes this square preserves a pre-Herodian, possibly Iron Age phase, and associates it with building work under Hezekiah; that attribution is debated and cannot be verified by direct excavation of the platform. Its eastern side is the oldest masonry on the mount: the straight joint or \u201cseam\u201d in the eastern wall, some 32 m north of the south-east angle, is where Herod\u2019s courses butt against it. Its western line survives as one step at the north-west corner of the raised Muslim platform, built of pre-Herodian blocks and square to the eastern wall rather than to anything around it.' },
  { name: 'The Hasmonean extension', color: 0xb5654a, rects: [[-112.5, 131.25, 150, 196]],
    text: 'Before Herod, the Hasmoneans had already carried the platform south of the old square — the stretch of the eastern wall between the seam and the Hasmonean masonry below it.' },
  { name: "Herod's additions", color: 0x8fae7a, rects: [[-112.5, -235, 150, -131.25], [-150, -235, -112.5, 235], [-112.5, 196, 150, 235]],
    text: 'Herod roughly doubled the enclosure, extending it north, west and south, filling a deep valley at the north-east to do it, and finishing the new ground with porticoes on three sides and the Royal Stoa on the fourth.' }
];
const phaseGroup = new THREE.Group();
phaseGroup.name = 'phases';
phaseGroup.visible = false;
PHASE_BANDS.forEach(band => {
  const m = new THREE.MeshBasicMaterial({ color: band.color, transparent: true, opacity: 0.3, depthWrite: false });
  band.rects.forEach(([x0, z0, x1, z1]) => {
    const g = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), m);
    g.rotation.x = -Math.PI / 2;
    g.position.set((x0 + x1) / 2, 0.4, (z0 + z1) / 2);
    g.renderOrder = 3;
    phaseGroup.add(g);
  });
});
// the two lines that carry the argument: the old eastern wall, and the surviving step
[[150, 'the seam in the eastern wall'], [-112.5, 'the pre-Herodian western wall']].forEach(([x]) => {
  const g = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 262.5),
    new THREE.MeshBasicMaterial({ color: 0xfff1c4, transparent: true, opacity: 0.75, depthWrite: false }));
  g.position.set(x, 0.55, 0);
  g.renderOrder = 4;
  phaseGroup.add(g);
});
scene.add(phaseGroup);
let phasesOn = false;
el('t-phases').addEventListener('click', () => {
  phasesOn = !phasesOn;
  phaseGroup.visible = phasesOn;
  el('t-phases').classList.toggle('on', phasesOn);
  if (phasesOn) {
    if (mode === 'walk') setMode('orbit');
    closeLabel();
    flyPose([116, 300, -300], [-24, 8, 0], 1400);
    caption('Ritmeyer phase reconstruction',
      'Gold: the 500-cubit square · Red: the Hasmonean extension · Green: Herod',
      PHASE_BANDS.map(b => b.name + ' — ' + b.text).join('\n\n'),
      'This overlay follows Leen Ritmeyer\u2019s reconstruction (The Quest, 2006) of Mishnah Middot 2:1 against the Temple Mount excavations — not a scholarly consensus. The exact boundaries, dates, and the attribution of the oldest square to Hezekiah remain debated; the eastern-wall seam itself is the one directly visible piece of evidence. Note that this model centres its courts on the platform, while Middot gives unequal spaces around them — largest to the south, then east, then north, least to the west — so the square here sits further east of the sanctuary than it did on the ground.');
  } else hideCaption();
});

// ---------- stand where you click ----------
// Double-click the ground in orbit, or arm "Stand here" and tap once: you are put on
// that spot on foot, facing the way you were already looking.
function ndcOf(e) {
  const r = renderer.domElement.getBoundingClientRect();
  return new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
}
function standAt(point, keepLook) {
  const fy = floorAt(point.x, point.z, point.y + 3);
  const y = Number.isFinite(fy) && fy > -26 ? fy : point.y;
  if (!Number.isFinite(y)) return false;
  const d = new THREE.Vector3();
  camera.getWorldDirection(d);
  const yaw = keepLook === false ? walk.yaw : Math.atan2(-d.x, -d.z);
  const pitch = keepLook === false ? walk.pitch : clamp(Math.atan2(d.y, Math.hypot(d.x, d.z)), -0.5, 0.35);
  if (mode !== 'walk') setMode('walk');
  walk.pos.set(point.x, y, point.z);
  walk.yaw = walk.yawT = yaw;
  walk.pitch = walk.pitchT = pitch;
  walk.vel.set(0, 0, 0); walk.glide = 0; walk.eyeY = null;
  updateWalkCamera();
  return true;
}
function standAtPointer(e) {
  if (measure.on) return false;
  ray.setFromCamera(ndcOf(e), camera);
  const hit = ray.intersectObject(model, true)
    .find(h => solid(h.object) && h.object.userData.layer !== 'pin' && h.object.userData.layer !== 'roof');
  if (!hit) return false;
  const ok = standAt(hit.point);
  if (ok) {
    hideCaption();
    caption('Standing here', `${hit.point.x.toFixed(0)}, ${hit.point.z.toFixed(0)} · floor ${walk.pos.y.toFixed(1)} m`,
      'You are on foot at the point you clicked. W A S D to walk, drag to look, Shift to run — and double-click the ground again to move somewhere else.');
    capTimer = setTimeout(hideCaption, 6000);
  }
  return ok;
}
function setStandArmed(on) {
  standArmed = on;
  el('t-stand').classList.toggle('on', on);
  document.body.classList.toggle('standing', on);
  setHint();
}
el('t-stand').addEventListener('click', () => setStandArmed(!standArmed));
// armed single click, ahead of the label and measure handlers
renderer.domElement.addEventListener('click', e => {
  if (!standArmed || dragged) return;
  e.stopImmediatePropagation();
  standAtPointer(e);
  setStandArmed(false);
}, true);

// ---------- the secondary tools popover ----------
const moreWrap = el('more-wrap');
el('t-more').addEventListener('click', e => {
  e.stopPropagation();
  const open = !moreWrap.classList.contains('open');
  moreWrap.classList.toggle('open', open);
  el('t-more').setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', e => {
  if (!moreWrap.contains(e.target)) { moreWrap.classList.remove('open'); el('t-more').setAttribute('aria-expanded', 'false'); }
});
moreWrap.addEventListener('click', e => {
  if (isNarrow()) return;
  if (e.target.id === 'arrive-btn') { moreWrap.classList.remove('open'); el('t-more').setAttribute('aria-expanded', 'false'); }
});

// caption and legend move the pins about, so re-measure the chrome when they change
['cap-card', 'measure-out', 'cert-key'].forEach(id => {
  try { new MutationObserver(() => refreshBlockRects()).observe(el(id), { attributes: true, attributeFilter: ['class'] }); } catch (e) {}
});

// initial shadow pass once everything is in place
invalidateShadows(4);

window.__temple = { scene, camera, renderer, VIEWS, showSight, startArrival, setCertainty, setMeasure, invalidateShadows };

// ---------- getting rid of a panel ----------
// One observer keeps the scrim, the floating close and the Menu button in step with
// whatever opened or closed a sheet, whichever of the many paths did it.
function syncSheets() {
  const on = el('index').classList.contains('open') || el('tools').classList.contains('open');
  const landscapeDock = isNarrow() && matchMedia('(orientation: landscape)').matches;
  document.body.classList.toggle('sheeting', on && isNarrow() && !landscapeDock && innerWidth < 700);
  el('m-menu').classList.toggle('on', on);
}
const sheetObs = new MutationObserver(syncSheets);
[el('index'), el('tools'), panel].forEach(n => sheetObs.observe(n, { attributes: true, attributeFilter: ['class'] }));
addEventListener('resize', syncSheets);
syncSheets();

function closeSheets() {
  el('index').classList.remove('open');
  el('tools').classList.remove('open');
  syncSheets();
  applyViewOffset();
}
el('scrim').addEventListener('click', closeSheets);
el('sheet-x').addEventListener('click', closeSheets);
el('tools-x').addEventListener('click', closeSheets);

// the commentary: a close in the head at every size, and a grab bar that raises the
// phone sheet from half the screen to the whole of it
el('p-x').addEventListener('click', closeLabel);
el('p-grab').addEventListener('click', () => { panel.classList.toggle('tall'); applyViewOffset(); });

// the list of places folds away behind its own tab on tablets and desktops
const idxHandle = el('idx-handle');
function setIndexOff(off) {
  document.body.classList.toggle('index-off', off);
  idxHandle.innerHTML = off ? '<span>Places</span>\u203a' : '<span>Places</span>\u2039';
  idxHandle.title = off ? 'Show the list of places' : 'Hide the list of places';
  el('m-places').classList.toggle('on', !off);
  setTimeout(() => { applyViewOffset(); resize(); }, 320);   // after the slide has finished
}
idxHandle.addEventListener('click', () => setIndexOff(!document.body.classList.contains('index-off')));
el('m-places').addEventListener('click', () => setIndexOff(!document.body.classList.contains('index-off')));

requestAnimationFrame(tick);
