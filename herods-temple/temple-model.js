// Herodian Temple complex, c. 30 CE. Meters, y-up. East = +x, north = +z.
// 1 cubit = 0.5 m (the Mishnaic cubit of Middot). Plan follows Mishnah Middot
// for the inner precinct and Josephus for the outer platform and porticoes.
import * as THREE from 'three';

const C = 0.5, cu = n => n * C;

// ---------- procedural surface detail (canvas textures; not carried by OBJ export) ----------
function cnv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tx(canvas, rx, ry) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = 8;
  t.colorSpace = THREE.SRGBColorSpace; return t;
}
function ashlarTex(base, joint) {
  const c = cnv(512, 512), g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, 512, 512);
  const courses = 4, per = 512 / courses;
  for (let r = 0; r < courses; r++) {
    const n = 3, w = 512 / n, off = (r % 2) * w / 2;
    for (let i = -1; i <= n; i++) {
      const x = i * w + off, y = r * per;
      const v = 6 - ((i * 7 + r * 5) % 5) * 3;
      g.fillStyle = `rgb(${217 + v},${208 + v},${187 + v})`;
      g.fillRect(x + 2, y + 2, w - 4, per - 4);
      g.fillStyle = 'rgba(255,252,244,.5)';           // raised boss
      g.fillRect(x + 9, y + 9, w - 18, per - 18);
      g.strokeStyle = joint; g.lineWidth = 3;          // marginal draft + joint
      g.strokeRect(x + 9, y + 9, w - 18, per - 18);
      g.strokeStyle = 'rgba(120,108,86,.55)'; g.lineWidth = 4;
      g.strokeRect(x + 2, y + 2, w - 4, per - 4);
    }
  }
  return c;
}
function pavingTex(base) {
  const c = cnv(512, 512), g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    const v = ((i * 5 + j * 3) % 4) * 5;
    g.fillStyle = `rgba(${255 - v},${248 - v},${230 - v},.85)`;
    g.fillRect(i * 128 + 3, j * 128 + 3, 122, 122);
  }
  g.strokeStyle = 'rgba(120,110,88,.35)'; g.lineWidth = 3;
  for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 128, 0); g.lineTo(i * 128, 512); g.moveTo(0, i * 128); g.lineTo(512, i * 128); g.stroke(); }
  return c;
}
function marbleTex() {
  const c = cnv(512, 512), g = c.getContext('2d');
  g.fillStyle = '#f2ede1'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 26; i++) {
    g.strokeStyle = `rgba(186,176,156,${0.06 + Math.random() * 0.12})`;
    g.lineWidth = 1 + Math.random() * 3; g.beginPath();
    let x = Math.random() * 512, y = Math.random() * 512;
    g.moveTo(x, y);
    for (let k = 0; k < 6; k++) { x += (Math.random() - 0.5) * 160; y += (Math.random() - 0.5) * 120; g.lineTo(x, y); }
    g.stroke();
  }
  return c;
}
function goldTex() {
  const c = cnv(256, 256), g = c.getContext('2d');
  g.fillStyle = '#f2d05e'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = `rgba(${Math.random() > .5 ? 255 : 196},${Math.random() > .5 ? 240 : 168},${Math.random() > .5 ? 190 : 96},${Math.random() * .28})`;
    g.fillRect(Math.random() * 256, Math.random() * 256, 3, 3);
  }
  return c;
}
// blue (tekhelet), purple (argaman), scarlet (shani) and fine white linen — Exodus 26:31; Josephus War 5.212
function veilTex() {
  const c = cnv(512, 512), g = c.getContext('2d');
  const bands = ['#e8dcc2', '#2d4382', '#e3d7bd', '#6f3560', '#e8dcc2', '#9c2b31'];
  const w = 512 / bands.length;
  bands.forEach((col, i) => { g.fillStyle = col; g.fillRect(i * w, 0, w + 1, 512); });
  for (let y = 0; y < 512; y += 3) { g.fillStyle = 'rgba(0,0,0,.07)'; g.fillRect(0, y, 512, 1); }
  for (let x = 0; x < 512; x += 4) { g.fillStyle = 'rgba(255,255,255,.05)'; g.fillRect(x, 0, 1, 512); }
  g.strokeStyle = 'rgba(201,162,39,.55)'; g.lineWidth = 2;                 // embroidered gold
  for (let i = 0; i < 8; i++) { g.beginPath(); g.arc(64 + (i % 4) * 128, 90 + Math.floor(i / 4) * 260, 34, 0, Math.PI * 2); g.stroke(); }
  return c;
}
function cofferTex() {
  const c = cnv(512, 512), g = c.getContext('2d');
  g.fillStyle = '#5e3a20'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    const x = i * 256, y = j * 256;
    g.fillStyle = '#7a4c2b'; g.fillRect(x + 16, y + 16, 224, 224);
    g.fillStyle = '#4d2f19'; g.fillRect(x + 44, y + 44, 168, 168);
    g.fillStyle = '#8a5731'; g.fillRect(x + 70, y + 70, 116, 116);
    g.fillStyle = '#3c2513'; g.beginPath(); g.arc(x + 128, y + 128, 26, 0, 6.3); g.fill();
  }
  return c;
}
// A variegated weave of blue, purple, scarlet and fine linen with a figured
// border and cherubim medallions (Exodus 26:31; 2 Chronicles 3:14).
function parochetTex() {
  const c = cnv(512, 1024), g = c.getContext('2d');
  const COL = ['#2b3f86', '#6d2a58', '#a3202c', '#e3d6ba'];
  g.fillStyle = '#6b2b4b'; g.fillRect(0, 0, 512, 1024);
  for (let x = 0; x < 512; x += 2) {                        // warp threads
    g.globalAlpha = (x / 2) % 4 === 3 ? 0.62 : 0.46;
    g.fillStyle = COL[(x / 2) % 4]; g.fillRect(x, 0, 2, 1024);
  }
  for (let y = 0; y < 1024; y += 3) {                       // weft, crossing the warp
    g.globalAlpha = 0.22;
    g.fillStyle = COL[(y / 3 + 2) % 4]; g.fillRect(0, y, 512, 1);
  }
  g.globalAlpha = 1;
  // border
  g.strokeStyle = '#c8a13a'; g.lineWidth = 6; g.strokeRect(20, 20, 472, 984);
  g.lineWidth = 2; g.strokeRect(34, 34, 444, 956);
  for (let i = 0; i < 40; i++) {                            // lozenge chain in the border
    const t = i / 40 * 984 + 20;
    g.beginPath(); g.moveTo(27, t); g.lineTo(34, t + 12); g.lineTo(27, t + 24); g.lineTo(20, t + 12);
    g.closePath(); g.stroke();
    g.beginPath(); g.moveTo(485, t); g.lineTo(492, t + 12); g.lineTo(485, t + 24); g.lineTo(478, t + 12);
    g.closePath(); g.stroke();
  }
  // cherubim medallions, woven as figured work
  for (let r = 0; r < 6; r++) for (let cI = 0; cI < 3; cI++) {
    const cx = 106 + cI * 150, cy = 116 + r * 158;
    g.strokeStyle = 'rgba(206,168,66,.85)'; g.lineWidth = 2.4;
    g.beginPath(); g.arc(cx, cy, 46, 0, 6.3); g.stroke();
    g.lineWidth = 1.6;
    g.beginPath(); g.arc(cx, cy, 39, 0, 6.3); g.stroke();
    g.beginPath(); g.arc(cx - 15, cy - 3, 24, -0.5, 2.1); g.stroke();
    g.beginPath(); g.arc(cx + 15, cy - 3, 24, 1.0, 3.6); g.stroke();
    g.beginPath(); g.moveTo(cx, cy - 22); g.lineTo(cx, cy + 20); g.stroke();
    g.beginPath(); g.arc(cx, cy - 27, 5.5, 0, 6.3); g.stroke();
    g.beginPath(); g.moveTo(cx - 10, cy + 20); g.lineTo(cx + 10, cy + 20); g.stroke();
    g.strokeStyle = 'rgba(227,214,186,.45)';
    g.beginPath(); g.arc(cx, cy, 52, 0, 6.3); g.stroke();
  }
  return c;
}
// Josephus, War 5.212-214: the curtain before the sanctuary door was embroidered
// with a panorama of the heavens.
function heavensTex() {
  const c = cnv(512, 1024), g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 1024);
  grd.addColorStop(0, '#1e2d6b'); grd.addColorStop(0.55, '#32439b'); grd.addColorStop(1, '#4c3378');
  g.fillStyle = grd; g.fillRect(0, 0, 512, 1024);
  for (let x = 0; x < 512; x += 3) { g.globalAlpha = 0.16; g.fillStyle = x % 9 === 0 ? '#e3d6ba' : x % 6 ? '#6d2a58' : '#a3202c'; g.fillRect(x, 0, 2, 1024); }
  g.globalAlpha = 1;
  const stars = [];
  for (let i = 0; i < 420; i++) {
    const x = 46 + Math.random() * 420, y = 46 + Math.random() * 932, r = Math.random() * 2.6 + 0.6;
    stars.push([x, y, r]);
    g.fillStyle = `rgba(255,236,180,${0.4 + Math.random() * 0.6})`;
    g.beginPath(); g.arc(x, y, r, 0, 6.3); g.fill();
    if (r > 2.2) { g.strokeStyle = 'rgba(255,236,180,.5)'; g.lineWidth = 1; g.beginPath(); g.moveTo(x - r * 3, y); g.lineTo(x + r * 3, y); g.moveTo(x, y - r * 3); g.lineTo(x, y + r * 3); g.stroke(); }
  }
  g.strokeStyle = 'rgba(255,236,180,.28)'; g.lineWidth = 1;
  for (let i = 0; i < 26; i++) {
    const a = stars[Math.floor(Math.random() * stars.length)], b = stars[Math.floor(Math.random() * stars.length)];
    if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 150) { g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
  }
  g.strokeStyle = '#c8a13a'; g.lineWidth = 6; g.strokeRect(20, 20, 472, 984);
  g.fillStyle = '#a3202c'; g.fillRect(20, 20, 472, 14); g.fillRect(20, 990, 472, 14);
  g.fillStyle = '#6d2a58'; g.fillRect(20, 34, 472, 8); g.fillRect(20, 982, 472, 8);
  g.fillStyle = '#e3d6ba'; g.fillRect(20, 30, 472, 4); g.fillRect(20, 990, 472, 4);
  return c;
}
function terrainTex() {
  const c = cnv(512, 512), g = c.getContext('2d');
  g.fillStyle = '#b5a482'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 1400; i++) {
    const r = 2 + Math.random() * 16;
    g.fillStyle = `rgba(${150 + Math.random() * 60},${134 + Math.random() * 54},${100 + Math.random() * 40},${Math.random() * .35})`;
    g.beginPath(); g.arc(Math.random() * 512, Math.random() * 512, r, 0, 6.3); g.fill();
  }
  for (let i = 0; i < 90; i++) {                    // rock outcrops and terrace lines
    g.strokeStyle = `rgba(122,110,88,${.1 + Math.random() * .2})`; g.lineWidth = 1 + Math.random() * 3;
    g.beginPath(); const y = Math.random() * 512; g.moveTo(0, y);
    g.bezierCurveTo(140, y + 20, 320, y - 24, 512, y + 6); g.stroke();
  }
  return c;
}
function woodTex() {
  const c = cnv(256, 256), g = c.getContext('2d');
  g.fillStyle = '#6f4526'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 90; i++) {
    g.strokeStyle = `rgba(${60 + Math.random() * 60},${34 + Math.random() * 30},${18},${.15 + Math.random() * .25})`;
    g.lineWidth = 1 + Math.random() * 2; g.beginPath(); const y = Math.random() * 256;
    g.moveTo(0, y); g.bezierCurveTo(80, y + 6, 170, y - 6, 256, y); g.stroke();
  }
  return c;
}

const T = {
  ashlar: tx(ashlarTex('#d9d0bb', 'rgba(150,138,112,.5)'), 1, 1),
  ashlarFine: tx(ashlarTex('#ded5c0', 'rgba(150,138,112,.42)'), 1, 1),
  paving: tx(pavingTex('#c9bda3'), 1, 1),
  pavingFine: tx(pavingTex('#e7e0cf'), 1, 1),
  marble: tx(marbleTex(), 1, 1),
  gold: tx(goldTex(), 1, 1),
  veil: tx(veilTex(), 2.4, 2),
  wood: tx(woodTex(), 1, 1),
  coffer: tx(cofferTex(), 1, 1),
  parochet: tx(parochetTex(), 1, 1),
  heavens: tx(heavensTex(), 1, 1),
  terrain: tx(terrainTex(), 130, 130)
};

// ---------- materials ----------
const mat = (name, o) => Object.assign(new THREE.MeshStandardMaterial(o), { name });
export const M = {
  stone:    mat('limestone',      { color: 0xdfd7c3, roughness: 0.82, metalness: 0, map: T.ashlarFine, bumpMap: T.ashlarFine, bumpScale: 1.4 }),
  ashlar:   mat('ashlar_wall',    { color: 0xdcd3bd, roughness: 0.86, metalness: 0, map: T.ashlar, bumpMap: T.ashlar, bumpScale: 2.2 }),
  stoneWarm:mat('limestone_warm', { color: 0xd6cbb2, roughness: 0.88, metalness: 0, map: T.paving, bumpMap: T.paving, bumpScale: 0.9 }),
  stoneDark:mat('limestone_shade',{ color: 0xa89c85, roughness: 0.92, metalness: 0 }),
  marble:   mat('marble',         { color: 0xf3efe4, roughness: 0.35, metalness: 0, map: T.marble }),
  courtPave:mat('court_paving',   { color: 0xefe9db, roughness: 0.42, metalness: 0, map: T.pavingFine, bumpMap: T.pavingFine, bumpScale: 0.5 }),
  coffer:   mat('cedar_coffer',   { color: 0x6a4326, roughness: 0.7, metalness: 0, map: T.coffer, bumpMap: T.coffer, bumpScale: 1.6 }),
  gold:     mat('gold',           { color: 0xfff4cf, roughness: 0.3, metalness: 0.35, map: T.gold }),
  bronze:   mat('bronze',         { color: 0x8a6534, roughness: 0.42, metalness: 0.8 }),
  cedar:    mat('cedar',          { color: 0x74492a, roughness: 0.68, metalness: 0, map: T.wood, bumpMap: T.wood, bumpScale: 0.6 }),
  veil:     mat('veil_cloth',     { color: 0xffffff, roughness: 0.95, metalness: 0, side: THREE.DoubleSide, map: T.veil }),
  parochet: mat('parochet',       { color: 0xffffff, roughness: 0.96, metalness: 0, side: THREE.DoubleSide, map: T.parochet }),
  heavens:  mat('babylonian_curtain', { color: 0xffffff, roughness: 0.95, metalness: 0, side: THREE.DoubleSide, map: T.heavens }),
  iron:     mat('iron',           { color: 0x3b3a38, roughness: 0.55, metalness: 0.7 }),
  silver:   mat('silver',         { color: 0xd6d7d2, roughness: 0.28, metalness: 0.92 }),
  altarStone: mat('altar_stone', { color: 0x9c8f78, roughness: 0.95, metalness: 0 }),
  soot:     mat('soot',           { color: 0x4a3a2c, roughness: 1, metalness: 0 }),
  ember:    mat('altar_fire',     { color: 0xd9601f, roughness: 0.9, metalness: 0, emissive: 0xb03505, emissiveIntensity: 1.5 }),
  ash:      mat('ash',            { color: 0xb8b0a2, roughness: 1, metalness: 0 }),
  earth:    mat('ground',         { color: 0xc3b391, roughness: 1, metalness: 0, map: T.terrain, bumpMap: T.terrain, bumpScale: 1.2 })
};

// texture tiles per metre, so a 60 m wall and a 2 m block share one stone scale
[['ashlar', 0.34], ['stone', 0.34], ['stoneWarm', 0.11], ['courtPave', 0.2],
 ['marble', 0.16], ['gold', 0.45], ['cedar', 0.25], ['coffer', 0.16]].forEach(([k, v]) => { if (M[k]) M[k].userData.dens = v; });

function tileBoxUV(g, w, h, d, s) {
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    const [a, b] = dims[f];
    for (let i = 0; i < 4; i++) {
      const k = f * 4 + i;
      uv.setXY(k, uv.getX(k) * Math.max(1, a * s), uv.getY(k) * Math.max(1, b * s));
    }
  }
  uv.needsUpdate = true;
}

// a hanging cloth: gathered into vertical folds, drawn tighter at the beam
function cloth(w, h, folds, amp, material, x, y, z, name) {
  const g = new THREE.PlaneGeometry(w, h, 64, 24);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const px = p.getX(i), py = p.getY(i);
    const taper = 0.25 + 0.75 * ((h / 2 - py) / h);
    p.setZ(i, Math.sin((px / w + 0.5) * Math.PI * 2 * folds) * amp * taper);
  }
  g.computeVertexNormals();
  g.rotateY(Math.PI / 2);
  const mesh = new THREE.Mesh(g, material);
  mesh.position.set(x, y, z); mesh.name = name;
  mesh.castShadow = true; mesh.receiveShadow = true;
  return mesh;
}

// a simplified human figure, 1.72 m tall, for scale
function figure(x, y, z, robe, facing, name) {
  const g = new THREE.Group(); g.name = name || 'figure';
  const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.26, 0.95, 10), robe);
  legs.position.y = 0.48;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.21, 0.62, 10), robe);
  body.position.y = 1.24;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 10), robe);
  head.position.y = 1.66;
  [legs, body, head].forEach(p => { p.castShadow = true; p.receiveShadow = true; g.add(p); });
  g.position.set(x, y, z); g.rotation.y = facing || 0;
  return g;
}

// ---------- helpers ----------
function box(w, h, d, material, x, y, z, name) {
  const geo = new THREE.BoxGeometry(w, h, d);
  if (material.userData && material.userData.dens) tileBoxUV(geo, w, h, d, material.userData.dens);
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z); m.name = name || 'block';
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
function cyl(r, h, material, x, y, z, name, seg = 24) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), material);
  m.position.set(x, y, z); m.name = name || 'cylinder';
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
function group(name, ...kids) {
  const g = new THREE.Group(); g.name = name; kids.flat().forEach(k => k && g.add(k)); return g;
}
function tag(obj, layer) { obj.traverse(o => { if (o.isMesh) o.userData.layer = layer; }); return obj; }

// a monolithic column: moulded base, shaft with entasis, spreading capital
const colGeoCache = new Map();
function columnGeo(h, r) {
  const key = h.toFixed(2) + '|' + r.toFixed(2);
  if (colGeoCache.has(key)) return colGeoCache.get(key);
  const p = [], V = (a, b) => p.push(new THREE.Vector2(a, b));
  V(0.001, 0); V(r * 1.62, 0); V(r * 1.62, h * 0.016); V(r * 1.34, h * 0.028);
  V(r * 1.16, h * 0.042); V(r * 1.04, h * 0.058);
  for (let i = 0; i <= 8; i++) { const t = i / 8; V(r * (1.0 - 0.17 * t * t), h * (0.06 + t * 0.84)); }
  V(r * 0.86, h * 0.906); V(r * 1.0, h * 0.922); V(r * 0.9, h * 0.936);
  V(r * 1.28, h * 0.966); V(r * 1.52, h * 0.99); V(r * 1.56, h);
  V(0.001, h);
  const g = new THREE.LatheGeometry(p, 28);
  colGeoCache.set(key, g);
  return g;
}
function column(x, z, h, r) {
  const mesh = new THREE.Mesh(columnGeo(h, r), M.marble);
  mesh.position.set(x, 0, z); mesh.name = 'column';
  mesh.castShadow = true; mesh.receiveShadow = true;
  return mesh;
}
// row of columns along an axis
function colonnade(axis, from, to, other, count, h, r, y = 0) {
  const g = new THREE.Group(); g.name = 'colonnade';
  for (let i = 0; i < count; i++) {
    const t = from + (to - from) * (i / (count - 1));
    const c = axis === 'x' ? column(t, other, h, r) : column(other, t, h, r);
    c.position.y = y; g.add(c);
  }
  return g;
}
// straight flight of steps. dir: +1 rises toward +axis
function stairs(axis, startCoord, dir, count, rise, tread, width, y0, otherCoord, material = M.stoneWarm, baseY) {
  const g = new THREE.Group(); g.name = 'stairs';
  for (let i = 0; i < count; i++) {
    const top = y0 + rise * (i + 1);
    const bottom = baseY === undefined ? top - rise : baseY;
    const h = Math.max(rise, top - bottom);
    const y = top - h / 2;
    const c = startCoord + dir * (tread * (i + 0.5));
    const s = axis === 'x' ? box(tread, h, width, material, c, y, otherCoord, 'step_' + (i + 1))
                           : box(width, h, tread, material, otherCoord, y, c, 'step_' + (i + 1));
    g.add(s);
  }
  return g;
}

// ============================================================
export function buildTemple() {
  const root = new THREE.Group(); root.name = 'HerodsTemple';
  const F = {}; // id -> group
  const feat = (id, ...kids) => { const g = group(id, ...kids); g.userData.feature = id; F[id] = g; root.add(g); return g; };

  // ---------- topography ----------
  // Heights are modelled from the real relief: the Kidron on the east, the Mount of
  // Olives beyond it (about 75 m above the temple platform), the Tyropoeon valley on
  // the west with the Upper City hill above it, the City of David spur running south
  // to Siloam, and the Hinnom valley closing the city on the south.
  const G = (d, s) => Math.exp(-(d * d) / (2 * s * s));
  function terrainY(x, z) {
    const d = Math.max(Math.abs(x) / 205, Math.abs(z) / 340);
    const mask = Math.min(1, Math.max(0, (d - 1) / 0.5));
    let y = 0;
    y += -82 * G(x - 275, 72);                        // Kidron valley
    y += 95 * G(x - 790, 250);                        // Mount of Olives
    y += -42 * G(x + 220, 74);                        // Tyropoeon (central) valley
    y += 62 * G(x + 520, 215);                        // western hill: the Upper City
    y += -52 * G(z + 830, 180);                       // valley of Hinnom
    y += 24 * G(x + 40, 130) * G(z + 470, 300);       // City of David spur
    y += -0.085 * Math.max(0, -z - 300);              // the fall southward to Siloam
    y += 14 * G(z - 560, 250);                        // Bezetha, the new city north
    return -26 + mask * y;
  }
  const tGeo = new THREE.PlaneGeometry(2600, 2600, 190, 190);
  tGeo.rotateX(-Math.PI / 2);
  const tp = tGeo.attributes.position;
  for (let i = 0; i < tp.count; i++) {
    const x = tp.getX(i), z = tp.getZ(i);
    tp.setY(i, terrainY(x, z) + (Math.sin(x * 0.021) * Math.cos(z * 0.017)) * 1.6 + (Math.sin(x * 0.13 + z * 0.09)) * 0.5);
  }
  tGeo.computeVertexNormals();
  const terrain = new THREE.Mesh(tGeo, M.earth);
  terrain.name = 'jerusalem_terrain'; terrain.receiveShadow = true;
  root.add(terrain);

  // ---------- platform + walls ----------
  const PX = 150, PZ = 235; // half extents (E-W 300 m, N-S 470 m)
  feat('mount',
    box(PX * 2, 2, PZ * 2, M.stoneWarm, 0, -1, 0, 'esplanade_pavement'),
    box(PX * 2 - 8, 64, PZ * 2 - 8, M.stoneDark, 0, -32, 0, 'platform_fill'));

  const wallParts = [];
  const WT = 4.5, WH = 66;
  [[PX, 0, WT, PZ * 2], [-PX, 0, WT, PZ * 2]].forEach(([x, z, t, l], i) =>
    wallParts.push(box(t, WH, l, M.ashlar, x, -WH / 2 + 0.2, z, i ? 'western_wall' : 'eastern_wall')));
  wallParts.push(box(PX * 2, WH, WT, M.ashlar, 0, -WH / 2 + 0.2, -PZ, 'southern_wall'));
  wallParts.push(box(PX * 2, WH, WT, M.ashlar, 0, -WH / 2 + 0.2, PZ, 'northern_wall'));
  // top course band + parapet
  [[PX, 0], [-PX, 0]].forEach(([x]) => wallParts.push(box(WT + 0.6, 1.6, PZ * 2, M.stone, x, 0.8, 0, 'wall_parapet')));
  [[0, PZ], [0, -PZ]].forEach(([, z]) => wallParts.push(box(PX * 2, 1.6, WT + 0.6, M.stone, 0, 0.8, z, 'wall_parapet')));
  for (let x = -PX + 6; x <= PX - 6; x += 6.5) {
    wallParts.push(box(1.3, 1.7, 1.3, M.stone, x, 2.45, PZ, 'merlon'));
    wallParts.push(box(1.3, 1.7, 1.3, M.stone, x, 2.45, -PZ, 'merlon'));
  }
  for (let z = -PZ + 6; z <= PZ - 6; z += 6.5) {
    wallParts.push(box(1.3, 1.7, 1.3, M.stone, PX, 2.45, z, 'merlon'));
    wallParts.push(box(1.3, 1.7, 1.3, M.stone, -PX, 2.45, z, 'merlon'));
  }
  feat('walls', wallParts);

  // ---------- southern stairs & Huldah gates ----------
  const south = [];
  south.push(stairs('z', -PZ - 66, 1, 34, 0.5, 1.85, 68, -25, -12, M.stone, -26));
  south.push(box(72, 1.6, 12, M.stone, -12, -7.4, -PZ - 8, 'stair_landing'));
  south.push(box(14, 12, 3.4, M.stoneDark, -18, -14, -PZ - 1.7, 'double_gate'));
  south.push(box(20, 11, 3.4, M.stoneDark, 30, -13.5, -PZ - 1.7, 'triple_gate'));
  south.push(box(17, 2, 4.4, M.stone, -18, -7.6, -PZ - 2, 'double_gate_lintel'));
  south.push(box(23, 2, 4.4, M.stone, 30, -7.6, -PZ - 2, 'triple_gate_lintel'));
  for (let i = 0; i < 9; i++) south.push(box(2.4, 2.6, 2.4, M.stone, -56 + i * 12, -23.5, -PZ - 70, 'mikveh_kerb_' + (i + 1)));
  feat('huldah', south);

  // ---------- the city of Jerusalem ----------
  const houseMats = [M.stoneWarm, M.stone, M.stoneDark];
  // insulae laid along streets: blocks of flat-roofed courtyard houses, packed tight
  function houses(zone, seedBase) {
    const out = [];
    const step = 26, gap = 9;
    let i = 0;
    for (let x = zone.x0; x < zone.x1; x += step) {
      for (let z = zone.z0; z < zone.z1; z += step) {
        if ((i * 37 + Math.floor(x / step) * 13) % 11 === 0) { i++; continue; }   // streets and yards
        const jx = ((i * 53) % 9) - 4, jz = ((i * 91) % 9) - 4;
        const cx = x + jx, cz = z + jz;
        const gy = terrainY(cx, cz);
        const slope = Math.abs(terrainY(cx + 12, cz) - terrainY(cx - 12, cz)) + Math.abs(terrainY(cx, cz + 12) - terrainY(cx, cz - 12));
        if (gy < zone.minY || slope > 13) { i++; continue; }
        for (let q = 0; q < 4; q++) {
          if ((i * 7 + q * 3) % 5 === 0) continue;
          const w = 6.5 + ((i + q) % 3) * 1.8, dz = 6 + ((i + q * 2) % 3) * 1.8;
          const h = 4 + ((i * 3 + q) % 4) * 1.9;
          const hx = cx + (q % 2 ? 1 : -1) * (step / 2 - gap / 2 - 1), hz = cz + (q < 2 ? -1 : 1) * (step / 2 - gap / 2 - 1);
          const g2 = terrainY(hx, hz);
          const b = box(w, h + 4, dz, houseMats[(i + q) % 3], hx, g2 + h / 2 - 2, hz, 'house');
          b.rotation.y = (((i + q) % 5) - 2) * 0.03;
          out.push(b);
          if ((i + q) % 3 === 0) out.push(box(w * 0.5, 0.9, dz * 0.5, M.stoneWarm, hx + 1, g2 + h + 0.4, hz - 1, 'roof_parapet'));
        }
        i++;
      }
    }
    return out;
  }
  function cityWall(pts, h, name) {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, z1] = pts[i], [x2, z2] = pts[i + 1];
      const len = Math.hypot(x2 - x1, z2 - z1), mx = (x1 + x2) / 2, mz = (z1 + z2) / 2;
      const gy = terrainY(mx, mz);
      const seg = box(len, h + 10, 3.6, M.ashlar, mx, gy + (h + 10) / 2 - 10, mz, name + '_segment');
      seg.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
      out.push(seg);
      out.push(box(6.5, h + 14, 6.5, M.ashlar, x1, terrainY(x1, z1) + (h + 14) / 2 - 10, z1, name + '_tower'));
    }
    return out;
  }

  // Upper City on the western hill, with Herod's palace and its three great towers
  const upper = [];
  upper.push(...houses({ x0: -646, x1: -252, z0: -434, z1: 148, minY: -14 }, 11));
  upper.push(box(96, 22, 62, M.stone, -560, terrainY(-560, -120) + 10, -120, 'herods_palace'));
  upper.push(box(102, 3, 68, M.stone, -560, terrainY(-560, -120) + 22.5, -120, 'palace_cornice'));
  [[-600, -60, 44, 'phasael_tower'], [-560, -52, 36, 'hippicus_tower'], [-520, -60, 32, 'mariamne_tower']]
    .forEach(([x, z, th, nm]) => {
      upper.push(box(19, th, 19, M.ashlar, x, terrainY(x, z) + th / 2 - 1, z, nm));
      upper.push(box(22, 3, 22, M.stone, x, terrainY(x, z) + th + 0.5, z, nm + '_crown'));
    });
  upper.push(box(54, 12, 34, M.marble, -262, terrainY(-262, -60) + 5, -60, 'the_xystus'));
  upper.push(...cityWall([[-660, -150], [-660, 60], [-520, 150], [-300, 150], [-215, 96]], 11, 'first_wall_north'));
  upper.push(...cityWall([[-660, -150], [-560, -380], [-380, -520], [-150, -620]], 11, 'first_wall_south'));
  feat('uppercity', upper);

  // the Lower City on the City of David spur, running south from the Mount
  const lower = [];
  lower.push(...houses({ x0: -152, x1: 62, z0: -676, z1: -272, minY: -78 }, 37));
  lower.push(...cityWall([[-150, -620], [40, -660], [130, -520], [150, -300]], 10, 'first_wall_east'));
  feat('cityofdavid', lower);

  // Bezetha, the new quarter north of the Mount, and the second wall
  const bez = [];
  bez.push(...houses({ x0: -302, x1: 118, z0: 296, z1: 556, minY: -24 }, 59));
  bez.push(...cityWall([[-215, 96], [-330, 300], [-180, 430], [60, 400], [150, 300]], 10, 'second_wall'));
  feat('bezetha', bez);

  // Golgotha: a quarried knoll outside the second wall, north-west of the city
  const knollGeo = new THREE.SphereGeometry(26, 24, 14);
  const kp = knollGeo.attributes.position;
  for (let i = 0; i < kp.count; i++) {
    const x = kp.getX(i), y = kp.getY(i), z = kp.getZ(i);
    kp.setXYZ(i, x * (1 + 0.12 * Math.sin(z * 0.3)), Math.max(0, y) * 0.34, z * (1 + 0.1 * Math.cos(x * 0.25)));
  }
  knollGeo.computeVertexNormals();
  const knoll = new THREE.Mesh(knollGeo, M.stoneDark);
  knoll.position.set(-395, terrainY(-395, 250) - 0.5, 250); knoll.name = 'golgotha_knoll';
  knoll.receiveShadow = true; knoll.castShadow = true;
  feat('golgotha', knoll,
    ...Array.from({ length: 5 }, (_, i) => box(9, 4, 7, M.stoneDark, -350 + i * 13, terrainY(-350 + i * 13, 292) + 1.4, 292, 'rock_cut_tomb_' + (i + 1))));

  // Pools: Siloam at the south end of the spur, Bethesda north of the Mount
  const water = mat('pool_water', { color: 0x3f6b74, roughness: 0.14, metalness: 0.1 });
  const siloamY = terrainY(-40, -690);
  feat('siloam',
    box(46, 2, 34, water, -40, siloamY + 0.4, -690, 'pool_of_siloam'),
    box(54, 3, 42, M.stone, -40, siloamY - 0.6, -690, 'siloam_kerb'),
    ...Array.from({ length: 8 }, (_, i) => box(3.4, 1.1, 42, M.stone, -66 + i * 6.6, siloamY + 1.1 + i * 0.42, -690, 'siloam_step_' + (i + 1))));
  const bethY = terrainY(-40, 330);
  feat('bethesda',
    box(40, 2.4, 30, water, -62, bethY + 0.5, 330, 'bethesda_north_pool'),
    box(40, 2.4, 30, water, -62, bethY + 0.5, 372, 'bethesda_south_pool'),
    box(96, 2, 8, M.stone, -62, bethY + 1.2, 351, 'bethesda_central_dam'),
    ...Array.from({ length: 10 }, (_, i) => cyl(0.8, 8, M.marble, -104 + i * 9.4, bethY + 4, 351, 'bethesda_colonnade_' + (i + 1), 16)),
    box(96, 1.2, 46, M.cedar, -62, bethY + 8.4, 351, 'bethesda_porches_roof'));

  // the Kidron and Hinnom valleys, and the Mount of Olives with its olive groves
  const olive = mat('olive_foliage', { color: 0x6d7a5a, roughness: 0.95, metalness: 0 });
  const trunk = mat('olive_trunk', { color: 0x5c4a35, roughness: 0.9, metalness: 0 });
  const groves = [];
  for (let i = 0; i < 30; i++) {
    const x = 330 + (i % 6) * 58 + ((i * 31) % 21), z = -200 + Math.floor(i / 6) * 110 + ((i * 17) % 27);
    const gy = terrainY(x, z);
    const t2 = cyl(0.42, 3.1, trunk, x, gy + 1.5, z, 'olive_trunk', 8);
    t2.rotation.z = ((i % 5) - 2) * 0.05; groves.push(t2);
    for (let b = 0; b < 3; b++) {                       // three splayed boughs
      const lb = cyl(0.16, 2.2, trunk, x + Math.cos(b * 2.1) * 0.7, gy + 3.6, z + Math.sin(b * 2.1) * 0.7, 'olive_bough', 6);
      lb.rotation.set(0.32 * Math.sin(b * 2.1), 0, -0.32 * Math.cos(b * 2.1)); groves.push(lb);
    }
    for (let c = 0; c < 4; c++) {                       // clumped canopy rather than one ball
      const r = 1.5 + ((i + c) % 3) * 0.45;
      const cr = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), olive);
      cr.position.set(x + Math.cos(c * 1.7) * 1.5, gy + 4.6 + (c % 2) * 0.8, z + Math.sin(c * 1.7) * 1.5);
      cr.scale.set(1.15, 0.72, 1.15); cr.name = 'olive_canopy'; cr.castShadow = true;
      groves.push(cr);
    }
  }
  feat('olives', groves,
    box(30, 5, 24, M.stone, 352, terrainY(352, 40) + 1.6, 40, 'gethsemane_press'));
  // dry stream beds laid along the true valley floors
  function wadi(axis, from, to, step, other, width, name) {
    const out = [];
    for (let t = from; t <= to; t += step) {
      let bx = axis === 'z' ? other : t, bz = axis === 'z' ? t : other;
      let best = Infinity, bo = other;                       // find the lowest line across the valley
      for (let o = other - 70; o <= other + 70; o += 6) {
        const y = axis === 'z' ? terrainY(o, bz) : terrainY(bx, o);
        if (y < best) { best = y; bo = o; }
      }
      if (axis === 'z') bx = bo; else bz = bo;
      const seg = box(axis === 'z' ? width : step * 1.15, 0.9, axis === 'z' ? step * 1.15 : width,
        M.stoneDark, bx, best + 0.35, bz, name);
      out.push(seg);
    }
    return out;
  }
  feat('kidron', wadi('z', -640, 560, 40, 285, 26, 'kidron_stream_bed'));
  feat('hinnom', wadi('x', -640, 180, 40, -830, 26, 'hinnom_valley_bed'));

  // ---------- porticoes ----------
  const northRows = [
    colonnade('x', -140, 140, PZ - 6, 41, 12.5, 0.85),
    colonnade('x', -140, 140, PZ - 14, 41, 12.5, 0.85)
  ];
  const westRows = [
    colonnade('z', -PZ + 30, PZ - 30, -PX + 6, 55, 12.5, 0.85),
    colonnade('z', -PZ + 30, PZ - 30, -PX + 14, 55, 12.5, 0.85)
  ];
  const porticoRoofs = [
    box(PX * 2 - 10, 1.6, 18, M.cedar, 0, 14.1, PZ - 10, 'portico_roof_north'),
    box(18, 1.6, PZ * 2 - 60, M.cedar, -PX + 10, 14.1, 0, 'portico_roof_west'),
    box(PX * 2 - 12, 0.4, 17, M.coffer, 0, 13.1, PZ - 10, 'portico_ceiling_north'),
    box(17, 0.4, PZ * 2 - 62, M.coffer, -PX + 10, 13.1, 0, 'portico_ceiling_west'),
    box(PX * 2 - 10, 1.1, 19, M.stone, 0, 15.4, PZ - 10, 'portico_cornice_north'),
    box(19, 1.1, PZ * 2 - 60, M.stone, -PX + 10, 15.4, 0, 'portico_cornice_west')
  ];
  feat('porticoes', northRows, westRows, tag(group('roofs_portico', porticoRoofs), 'roof'),
    box(PX * 2, 14, 2, M.stone, 0, 7, PZ - 2.6, 'portico_back_wall_north'),
    box(2, 14, PZ * 2, M.stone, -PX + 2.6, 7, 0, 'portico_back_wall_west'));

  const eastRows = [
    colonnade('z', -PZ + 30, PZ - 30, PX - 6, 55, 12.5, 0.9),
    colonnade('z', -PZ + 30, PZ - 30, PX - 14, 55, 12.5, 0.9)
  ];
  feat('solomons', eastRows,
    tag(group('solomons_roof',
      box(18, 1.6, PZ * 2 - 60, M.cedar, PX - 10, 14.1, 0, 'solomons_porch_roof'),
      box(17, 0.4, PZ * 2 - 62, M.coffer, PX - 10, 13.1, 0, 'solomons_ceiling'),
      box(19, 1.1, PZ * 2 - 60, M.stone, PX - 10, 15.4, 0, 'solomons_cornice')), 'roof'),
    box(2, 14, PZ * 2, M.stone, PX - 2.6, 7, 0, 'portico_back_wall_east'));

  // ---------- Royal Stoa (south) ----------
  const stoa = [];
  const rows = [-PZ + 7, -PZ + 16, -PZ + 25, -PZ + 34];
  rows.forEach((z, ri) => stoa.push(colonnade('x', -142, 142, z, ri < 2 ? 41 : 40, ri === 1 || ri === 2 ? 18 : 12.5, 1.1)));
  stoa.push(tag(group('stoa_roofs',
    box(PX * 2 - 12, 1.8, 12, M.cedar, 0, 14.2, -PZ + 8, 'stoa_aisle_roof_s'),
    box(PX * 2 - 12, 1.8, 12, M.cedar, 0, 14.2, -PZ + 33, 'stoa_aisle_roof_n'),
    box(PX * 2 - 12, 2.4, 14, M.cedar, 0, 20.4, -PZ + 20.5, 'stoa_nave_roof'),
    box(PX * 2 - 14, 0.4, 13, M.coffer, 0, 19.1, -PZ + 20.5, 'stoa_nave_ceiling'),
    box(PX * 2 - 14, 0.4, 11, M.coffer, 0, 13.1, -PZ + 8, 'stoa_aisle_ceiling_s'),
    box(PX * 2 - 14, 0.4, 11, M.coffer, 0, 13.1, -PZ + 33, 'stoa_aisle_ceiling_n'),
    box(PX * 2 - 10, 1.2, 15, M.stone, 0, 21.8, -PZ + 20.5, 'stoa_nave_cornice'),
    box(PX * 2 - 12, 6, 1.2, M.stone, 0, 17, -PZ + 13.8, 'stoa_clerestory_s'),
    box(PX * 2 - 12, 6, 1.2, M.stone, 0, 17, -PZ + 27.2, 'stoa_clerestory_n')), 'roof'));
  feat('royalstoa', stoa);

  // ---------- outer court ----------
  feat('gentiles', box(PX * 2 - 40, 0.3, PZ * 2 - 100, M.stoneWarm, 0, 0.15, -10, 'outer_court_paving'));

  // ---------- Antonia ----------
  // the fortress stands beyond the north-west angle of the enclosure, on higher rock,
  // with stairs down into the porticoes (Josephus, War 5.238-247; Acts 21:31-40)
  feat('antonia',
    box(78, 31, 64, M.stoneDark, -112, -9.5, 272, 'antonia_rock_scarp'),
    box(64, 30, 50, M.ashlar, -112, 21, 272, 'antonia_keep'),
    box(68, 2.4, 54, M.stone, -112, 37.2, 272, 'antonia_cornice'),
    box(62, 1.4, 48, M.stone, -112, 36.6, 272, 'antonia_roof'),
    ...Array.from({ length: 24 }, (_, i) => {
      const per = 6, t = i % per / per;
      const side = Math.floor(i / per);
      const x = side === 0 ? -143 + t * 62 : side === 1 ? -143 + t * 62 : side === 2 ? -143 : -81;
      const z = side === 0 ? 246 : side === 1 ? 298 : 246 + t * 52;
      return box(1.4, 2, 1.4, M.stone, x, 39.4, z, 'antonia_merlon_' + (i + 1));
    }),
    ...[[-140, 250], [-140, 294], [-84, 250], [-84, 294]].map(([x, z], i) =>
      box(16, 44, 16, M.ashlar, x, 28, z, 'antonia_tower_' + (i + 1))),
    box(12, 9, 4, M.stoneDark, -112, 10.5, 241, 'antonia_gate'),
    box(15, 2, 5, M.stone, -112, 16, 240.6, 'antonia_gate_lintel'),
    stairs('z', 232, 1, 12, 0.5, 0.95, 11, 0, -112, M.stone, -1),
    box(11, 1.4, 8, M.stone, -112, 5.3, 248, 'antonia_landing'));

  // Shushan Gate — the eastern gate, through which the red heifer went out
  feat('shushan',
    box(9, 26, 26, M.ashlar, PX + 1, -6, 0, 'shushan_gate_tower'),
    box(4, 11, 6, M.stoneDark, PX + 3.6, -13.5, 0, 'shushan_gate_passage'),
    box(10, 2.4, 30, M.stone, PX + 1, 7.6, 0, 'shushan_gate_cornice'),
    box(0.4, 9, 2.7, M.bronze, PX + 1.2, -12.5, 1.45, 'shushan_door_north'),
    box(0.4, 9, 2.7, M.bronze, PX + 1.2, -12.5, -1.45, 'shushan_door_south'),
    box(16, 1.6, 26, M.stone, PX + 13, -7.4, 0, 'shushan_landing'));

  // Tadi Gate — the northern gate, not used for ordinary entry
  feat('tadi',
    box(20, 22, 8, M.ashlar, -30, -8, PZ + 1, 'tadi_gate_tower'),
    box(6, 9, 4, M.stoneDark, -30, -13.5, PZ + 3.4, 'tadi_gate_passage'),
    box(24, 2.2, 9, M.stone, -30, 4.2, PZ + 1, 'tadi_gate_cornice'),
    box(20, 1.6, 10, M.stone, -30, -7.4, PZ + 9, 'tadi_landing'),
    stairs('z', PZ + 78, -1, 34, 0.5, 2.1, 20, -25, -30, M.stone, -26));

  // Western gates: Kiponus, Wilson's Arch viaduct, Barclay's Gate, and the
  // Robinson's Arch staircase down to the street
  const west = [];
  west.push(box(9, 24, 22, M.ashlar, -PX - 1, -7, -60, 'kiponus_gate_tower'));
  west.push(box(4, 10, 6, M.stoneDark, -PX - 3.6, -7.5, -60, 'kiponus_gate_passage'));
  west.push(box(10, 2.2, 26, M.stone, -PX - 1, 6.2, -60, 'kiponus_cornice'));
  // Wilson's Arch: a bridge on piers carrying the street from the upper city
  for (let i = 0; i < 4; i++) west.push(box(9, 17, 13, M.ashlar, -PX - 12 - i * 20, -16.5, -60, 'viaduct_pier_' + (i + 1)));
  west.push(box(84, 2.6, 15, M.stone, -PX - 44, -6.7, -60, 'wilsons_arch_deck'));
  for (let i = 0; i < 4; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(7.6, 1.5, 10, 22, Math.PI), M.ashlar);
    t.rotation.y = Math.PI / 2; t.position.set(-PX - 22 - i * 20, -8.2, -60); t.name = 'viaduct_arch_' + (i + 1);
    west.push(t);
  }
  // Barclay's Gate, low in the wall
  west.push(box(3.5, 11, 9, M.stoneDark, -PX - 2, -14, -108, 'barclays_gate'));
  west.push(box(4.5, 1.6, 11, M.stone, -PX - 2, -8, -108, 'barclays_lintel'));
  // Robinson's Arch: monumental stair on arches, descending southward
  for (let i = 0; i < 4; i++) {
    const z = -PZ - 46 + i * 14, top = -25 + 4 + i * 4.6;
    west.push(box(11, top + 25, 9, M.ashlar, -PX - 8, (top - 25) / 2, z, 'robinson_pier_' + (i + 1)));
    const t = new THREE.Mesh(new THREE.TorusGeometry(6.4, 1.4, 10, 20, Math.PI), M.ashlar);
    t.rotation.y = Math.PI / 2; t.position.set(-PX - 8, top + 1.5, z + 7); t.name = 'robinson_arch_' + (i + 1);
    west.push(t);
  }
  west.push(box(13, 2, 14, M.stone, -PX - 8, -7, -PZ - 2, 'robinson_landing'));
  feat('kiponus', west);

  // ============ inner precinct podium ============
  // Court of the Women floor y = 3 ; azarah floor y = 6.75 ; sanctuary floor y = 9.75
  const IPx0 = -105, IPx1 = 66, IPz = 38.75;      // chel platform
  const AZx0 = -100, AZx1 = -6.5, AZz = 33.75;    // azarah (187 x 135 cubits)

  feat('chel',
    box(IPx1 - IPx0, 3, IPz * 2, M.stoneWarm, (IPx0 + IPx1) / 2, 1.5, 0, 'chel_terrace'),
    stairs('x', IPx1, 1, 12, 0.25, 0.5, 50, 0, 0),
    stairs('z', IPz, 1, 12, 0.25, 0.5, 60, 0, -40),
    stairs('z', -IPz, -1, 12, 0.25, 0.5, 60, 0, -40));

  // soreg
  const soreg = [];
  const sx0 = IPx0 - 5, sx1 = IPx1 + 5, sz = IPz + 5;
  for (let x = sx0; x <= sx1; x += 3) { soreg.push(box(0.25, 1.5, 0.25, M.stone, x, 0.75, sz, 'soreg_post')); soreg.push(box(0.25, 1.5, 0.25, M.stone, x, 0.75, -sz, 'soreg_post')); }
  for (let z = -sz; z <= sz; z += 3) { soreg.push(box(0.25, 1.5, 0.25, M.stone, sx1, 0.75, z, 'soreg_post')); soreg.push(box(0.25, 1.5, 0.25, M.stone, sx0, 0.75, z, 'soreg_post')); }
  [[0, sz], [0, -sz]].forEach(([, z]) => { soreg.push(box(sx1 - sx0, 0.18, 0.32, M.stone, (sx0 + sx1) / 2, 1.42, z, 'soreg_rail')); soreg.push(box(sx1 - sx0, 0.14, 0.3, M.stone, (sx0 + sx1) / 2, 0.7, z, 'soreg_rail')); });
  [sx0, sx1].forEach(x => { soreg.push(box(0.32, 0.18, sz * 2, M.stone, x, 1.42, 0, 'soreg_rail')); soreg.push(box(0.3, 0.14, sz * 2, M.stone, x, 0.7, 0, 'soreg_rail')); });
  [[sx1 + 0.3, 12], [sx1 + 0.3, -12], [-40, sz + 0.3], [-40, -sz - 0.3]].forEach(([x, z], i) =>
    soreg.push(box(i < 2 ? 0.14 : 1.1, 0.75, i < 2 ? 1.1 : 0.14, M.marble, x, 1.05, z, 'warning_inscription')));
  feat('soreg', soreg);

  // ---------- Court of the Women ----------
  const CWx0 = -6.5, CWx1 = 61, CWz = 33.75;
  const cw = [];
  cw.push(box(CWx1 - CWx0, 0.3, CWz * 2, M.courtPave, (CWx0 + CWx1) / 2, 3.15, 0, 'court_of_women_paving'));
  // enclosing walls (north, south, east with gate opening)
  cw.push(box(CWx1 - CWx0, 16, 2.5, M.stone, (CWx0 + CWx1) / 2, 11, CWz, 'women_wall_north'));
  cw.push(box(CWx1 - CWx0, 16, 2.5, M.stone, (CWx0 + CWx1) / 2, 11, -CWz, 'women_wall_south'));
  // colonnade + gallery inside
  cw.push(colonnade('x', CWx0 + 8, CWx1 - 8, CWz - 5, 12, 9, 0.6, 3.3));
  cw.push(colonnade('x', CWx0 + 8, CWx1 - 8, -CWz + 5, 12, 9, 0.6, 3.3));
  cw.push(colonnade('z', -CWz + 10, CWz - 10, CWx1 - 6, 10, 9, 0.6, 3.3));
  cw.push(box(CWx1 - CWx0 - 10, 0.6, 5, M.cedar, (CWx0 + CWx1) / 2, 12.6, CWz - 5, 'women_gallery_north'));
  cw.push(box(CWx1 - CWx0 - 10, 0.6, 5, M.cedar, (CWx0 + CWx1) / 2, 12.6, -CWz + 5, 'women_gallery_south'));
  cw.push(box(5, 0.6, CWz * 2 - 20, M.cedar, CWx1 - 6, 12.6, 0, 'women_gallery_east'));
  // thirteen shofar chests
  for (let i = 0; i < 13; i++) {
    const zz = -24 + i * 4;
    cw.push(cyl(0.35, 1.2, M.bronze, CWx0 + 9, 3.9, zz, 'shofar_chest', 12));
    cw.push(cyl(0.16, 0.7, M.bronze, CWx0 + 9, 4.85, zz, 'shofar_chest_neck', 10));
  }
  // two great candelabra of the water-drawing
  [[24, 14], [24, -14]].forEach(([x, z]) => {
    cw.push(cyl(0.9, 0.4, M.stone, x, 3.5, z, 'candelabrum_base', 16));
    cw.push(cyl(0.28, 13, M.bronze, x, 10, z, 'candelabrum_shaft', 12));
    for (let k = 0; k < 4; k++) cw.push(cyl(0.5, 0.4, M.gold, x + (k < 2 ? -1.1 : 1.1), 16.6, z + (k % 2 ? -1.1 : 1.1), 'candelabrum_bowl', 12));
  });
  feat('women', cw);

  feat('chambers', ...[[CWx1 - 11, CWz - 11], [CWx1 - 11, -CWz + 11], [CWx0 + 11, CWz - 11], [CWx0 + 11, -CWz + 11]]
    .map(([x, z], i) => group('corner_chamber_' + (i + 1),
      box(20, 8, 1.2, M.stone, x, 7.3, z + 10, 'chamber_wall'),
      box(20, 8, 1.2, M.stone, x, 7.3, z - 10, 'chamber_wall'),
      box(1.2, 8, 20, M.stone, x + 10, 7.3, z, 'chamber_wall'),
      box(1.2, 8, 20, M.stone, x - 10, 7.3, z, 'chamber_wall'))));

  // Beautiful Gate (east entrance of the Court of the Women)
  feat('beautiful',
    box(3, 20, 12, M.stone, CWx1 + 1.5, 13, 8.5, 'beautiful_gate_jamb'),
    box(3, 20, 12, M.stone, CWx1 + 1.5, 13, -8.5, 'beautiful_gate_jamb'),
    box(3.4, 4, 17, M.stone, CWx1 + 1.5, 21, 0, 'beautiful_gate_lintel'),
    box(0.35, 12, 2.4, M.bronze, CWx1 + 1.5, 9.2, 1.35, 'beautiful_gate_door'),
    box(0.35, 12, 2.4, M.bronze, CWx1 + 1.5, 9.2, -1.35, 'beautiful_gate_door'),
    stairs('x', CWx1 + 3.2, 1, 12, 0.25, 0.55, 18, 0, 0));

  // ---------- azarah podium & wall, Nicanor Gate ----------
  const az = [];
  az.push(box(AZx1 - AZx0, 3.75, AZz * 2, M.stoneWarm, (AZx0 + AZx1) / 2, 4.875, 0, 'azarah_podium'));
  az.push(box(AZx1 - AZx0, 0.3, AZz * 2, M.courtPave, (AZx0 + AZx1) / 2, 6.9, 0, 'azarah_paving'));
  const AW = 15; // inner court wall height
  az.push(box(AZx1 - AZx0, AW, 3, M.stone, (AZx0 + AZx1) / 2, 6.75 + AW / 2, AZz, 'inner_court_wall_north'));
  az.push(box(AZx1 - AZx0, AW, 3, M.stone, (AZx0 + AZx1) / 2, 6.75 + AW / 2, -AZz, 'inner_court_wall_south'));
  az.push(box(3, AW, AZz * 2, M.stone, AZx0 + 1.5, 6.75 + AW / 2, 0, 'inner_court_wall_west'));
  // service chambers ranged inside the north and south walls
  for (let i = 0; i < 6; i++) {
    const x = AZx0 + 14 + i * 14;
    az.push(box(11, 7, 8, M.stoneDark, x, 10.25, AZz - 5.5, 'service_chamber'));
    az.push(box(11, 7, 8, M.stoneDark, x, 10.25, -AZz + 5.5, i === 4 ? 'chamber_of_hewn_stone' : 'service_chamber'));
  }
  feat('priests', az, box(AZx1 - AZx0 - 20, 0.2, 30, M.marble, -50, 7.05, 0, 'court_of_priests_paving'));

  // east wall with the Nicanor gate opening (10 x 20 cubits)
  const nic = [];
  nic.push(box(3, AW, (AZz - 2.5), M.stone, AZx1 - 1.5, 6.75 + AW / 2, AZz / 2 + 1.25, 'east_wall_north_of_gate'));
  nic.push(box(3, AW, (AZz - 2.5), M.stone, AZx1 - 1.5, 6.75 + AW / 2, -AZz / 2 - 1.25, 'east_wall_south_of_gate'));
  nic.push(box(3, 5, 5, M.stone, AZx1 - 1.5, 19.25, 0, 'nicanor_lintel'));
  nic.push(box(0.3, 10, 1.2, M.bronze, AZx1 - 1.4, 11.75, 1.3, 'nicanor_door_north'));
  nic.push(box(0.3, 10, 1.2, M.bronze, AZx1 - 1.4, 11.75, -1.3, 'nicanor_door_south'));
  for (let i = 0; i < 15; i++) { // fifteen semicircular steps
    const r = 8.5 - i * 0.45;
    const g = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.25, 28, 1, false, -Math.PI / 2, Math.PI), M.marble);
    g.position.set(AZx1, 3.15 + 0.125 + i * 0.25, 0); g.name = 'nicanor_step_' + (i + 1);
    g.castShadow = true; g.receiveShadow = true; nic.push(g);
  }
  feat('nicanor', nic);

  feat('israel', box(5.5, 0.35, AZz * 2 - 12, M.marble, AZx1 - 5.75, 7.08, 0, 'court_of_israel_floor'),
    box(0.4, 0.5, AZz * 2 - 12, M.stoneDark, AZx1 - 8.5, 7.15, 0, 'dividing_step'));

  // ---------- altar of burnt offering ----------
  const AC = -25.5, AY = 6.9; // altar centre x, azarah floor
  feat('altar',
    box(16, 0.5, 16, M.altarStone, AC, AY + 0.25, 0, 'altar_base_32c'),
    box(15, 2.5, 15, M.altarStone, AC, AY + 1.75, 0, 'altar_lower_course_30c'),
    box(14, 1.5, 14, M.altarStone, AC, AY + 3.75, 0, 'altar_priests_walkway_28c'),
    box(13, 0.5, 13, M.soot, AC, AY + 4.75, 0, 'altar_hearth'),
    ...[[-6.25, -6.25], [-6.25, 6.25], [6.25, -6.25], [6.25, 6.25]].map(([dx, dz], i) =>
      box(0.5, 0.5, 0.5, M.altarStone, AC + dx, AY + 5.25, dz, 'altar_horn_' + (i + 1))),
    box(9, 0.35, 9, M.iron, AC, AY + 5.1, 0, 'altar_fire_grate'),
    ...Array.from({ length: 12 }, (_, i) => {
      const a = i / 12 * Math.PI * 2, r = 1.5 + (i % 3) * 0.5;
      const w = cyl(0.16, 2.2, M.cedar, AC + Math.cos(a) * r, AY + 5.5, Math.sin(a) * r, 'altar_wood_' + (i + 1), 8);
      w.rotation.set(Math.PI / 2 * 0.82, a, 0); return w;
    }),
    box(3.4, 0.5, 3.4, M.ember, AC, AY + 5.5, 0, 'altar_fire'),
    (() => { const c = new THREE.Mesh(new THREE.ConeGeometry(2.4, 0.85, 20), M.ash); c.position.set(AC, AY + 5.6, 0); c.name = 'ash_heap'; return c; })(),
    cyl(0.4, 0.3, M.stoneDark, AC + 7.6, AY + 0.15, -7.6, 'blood_drain', 12));

  // ramp on the south
  const rshape = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(16, 0), new THREE.Vector2(0, 5)]);
  const rgeo = new THREE.ExtrudeGeometry(rshape, { depth: 8, bevelEnabled: false });
  rgeo.rotateY(Math.PI / 2); rgeo.translate(AC - 4, AY, -8);
  const ramp = new THREE.Mesh(rgeo, M.altarStone); ramp.name = 'altar_ramp';
  ramp.castShadow = true; ramp.receiveShadow = true;
  feat('ramp', ramp, box(3, 2.4, 5, M.altarStone, AC - 6.5, AY + 1.2, -11, 'minor_ramp_west'),
    box(3, 2.4, 5, M.altarStone, AC + 6.5, AY + 1.2, -11, 'minor_ramp_east'));

  // ---------- brazen laver ----------
  feat('laver',
    cyl(1.1, 0.35, M.stone, -40, AY + 0.17, -4, 'laver_plinth', 20),
    cyl(0.55, 1.2, M.bronze, -40, AY + 0.95, -4, 'laver_stand', 20),
    cyl(1.5, 1.3, M.bronze, -40, AY + 2.2, -4, 'brazen_laver_basin', 32),
    ...Array.from({ length: 12 }, (_, i) => {
      const a = i / 12 * Math.PI * 2;
      const s = cyl(0.09, 0.45, M.bronze, -40 + Math.cos(a) * 1.5, AY + 1.8, -4 + Math.sin(a) * 1.5, 'laver_spout_' + (i + 1), 8);
      s.rotation.z = Math.PI / 2 * 0.35; return s;
    }));

  // ---------- place of slaughtering ----------
  const sl = [];
  for (let i = 0; i < 8; i++) {
    const x = AC - 7 + i * 2;
    sl.push(box(0.45, 2.6, 0.45, M.stone, x, AY + 1.3, 12, 'slaughter_pillar_' + (i + 1)));
    sl.push(box(0.6, 0.25, 0.6, M.cedar, x, AY + 2.7, 12, 'cedar_block'));
    sl.push(box(0.12, 0.5, 0.12, M.iron, x, AY + 2.35, 12.35, 'iron_hook'));
    sl.push(box(1.6, 0.15, 0.9, M.marble, x, AY + 0.9, 15, 'marble_table_' + (i + 1)));
    sl.push(box(0.12, 0.75, 0.12, M.marble, x, AY + 0.45, 15, 'table_leg'));
  }
  for (let i = 0; i < 24; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 6, 16), M.iron);
    t.rotation.x = Math.PI / 2;
    t.position.set(AC - 7.5 + (i % 8) * 2.1, AY + 0.06, 8 + Math.floor(i / 8) * 1.4);
    t.name = 'slaughter_ring_' + (i + 1); sl.push(t);
  }
  sl.push(box(2.2, 0.15, 1.1, M.marble, AC + 8, AY + 0.9, 10, 'table_of_limbs'));
  sl.push(box(2.2, 0.15, 1.1, M.silver, AC + 8, AY + 0.9, 12, 'table_of_vessels'));
  feat('slaughter', sl);

  // ---------- the House ----------
  const SF = 9.75;                 // sanctuary floor
  const Xporch = -44.5;            // east face of the porch
  const bodyZ = 17.5, bodyH = 30, facadeH = 50;
  feat('steps12', stairs('x', Xporch + 6, -1, 12, 0.25, 0.5, 34, AY, 0, M.marble));

  // porch screen wall with the 40 x 20 cubit opening
  const fac = [];
  const scrX = Xporch - 1.25; // 2.5 m thick
  // The front is a screen wall of 100 cubits square (Middot 4:7) — no wider — with the
  // 40 x 20 cubit doorway in the middle, and the whole face plated with gold
  // (Josephus, War 5.207-208, 222: at sunrise a man had to look away from it).
  fac.push(box(2.5, facadeH, 20, M.gold, scrX, SF + facadeH / 2, 15, 'facade_north_of_door'));
  fac.push(box(2.5, facadeH, 20, M.gold, scrX, SF + facadeH / 2, -15, 'facade_south_of_door'));
  fac.push(box(2.5, facadeH - 20, 10, M.gold, scrX, SF + 20 + (facadeH - 20) / 2, 0, 'facade_over_door'));
  fac.push(box(3.4, 1.8, 51, M.stone, scrX, SF + facadeH + 0.9, 0, 'facade_cornice'));
  fac.push(box(3.1, 1.1, 51, M.stone, scrX, SF + facadeH - 1.4, 0, 'facade_cornice_lower'));
  fac.push(box(2.7, 1.3, 12, M.stone, scrX - 0.12, SF + 20.7, 0, 'door_lintel'));
  fac.push(box(2.7, 21, 1.1, M.stone, scrX - 0.08, SF + 10, 5.6, 'door_jamb_north'));
  fac.push(box(2.7, 21, 1.1, M.stone, scrX - 0.08, SF + 10, -5.6, 'door_jamb_south'));
  for (let i = 1; i < 8; i++)                                   // seams between the gold plates
    fac.push(box(2.56, 0.16, 50, M.stoneWarm, scrX - 0.01, SF + i * 6.2, 0, 'gold_plate_seam_' + i));
  // porch flanking walls and roof
  fac.push(box(8.5, facadeH * 0.62, 2.6, M.stone, Xporch - 4.5, SF + facadeH * 0.31, bodyZ + 6.2, 'porch_wall_north'));
  fac.push(box(8.5, facadeH * 0.62, 2.6, M.stone, Xporch - 4.5, SF + facadeH * 0.31, -bodyZ - 6.2, 'porch_wall_south'));
  fac.push(tag(box(7, 1.2, 48, M.cedar, Xporch - 6.2, SF + facadeH * 0.62, 0, 'porch_roof'), 'roof'));
  feat('facade', fac);

  // golden vine over the doorway
  const vine = [];
  vine.push(box(2.4, 0.4, 12, M.gold, scrX - 0.35, SF + 23.4, 0, 'vine_beam'));
  for (let i = 0; i < 6; i++) {
    const z = -4.2 + i * 1.7;
    vine.push(cyl(0.09, 1.6 + (i % 3) * 0.5, M.gold, scrX - 1.1, SF + 24.2 + (i % 3) * 0.3, z, 'vine_cluster_stem', 8));
    for (let k = 0; k < 5; k++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10), M.gold);
      s.position.set(scrX - 1.05 + (k % 2 ? 0.2 : -0.2), SF + 25.4 + (i % 3) * 0.3 - k * 0.38, z + (k % 3 - 1) * 0.18);
      s.name = 'vine_berry'; vine.push(s);
    }
  }
  feat('vine', vine);

  // sanctuary body shell (walls + side cells), interior hollow
  const shell = [];
  const bx0 = -94.5, bx1 = -52.5;
  shell.push(box(bx1 - bx0, bodyH, bodyZ - 5, M.stone, (bx0 + bx1) / 2, SF + bodyH / 2, (5 + bodyZ) / 2, 'house_wall_north'));
  shell.push(box(bx1 - bx0, bodyH, bodyZ - 5, M.stone, (bx0 + bx1) / 2, SF + bodyH / 2, -(5 + bodyZ) / 2, 'house_wall_south'));
  shell.push(box(8.5, bodyH, bodyZ * 2, M.stone, bx0 + 4.25, SF + bodyH / 2, 0, 'house_wall_west'));
  // east wall of the Holy Place with its 20 x 10 cubit doorway
  shell.push(box(3, bodyH, (bodyZ * 2 - 5) / 2, M.stone, -54, SF + bodyH / 2, (5 + bodyZ * 2) / 4 + 1.25, 'hekhal_wall_north_of_door'));
  shell.push(box(3, bodyH, (bodyZ * 2 - 5) / 2, M.stone, -54, SF + bodyH / 2, -((5 + bodyZ * 2) / 4 + 1.25), 'hekhal_wall_south_of_door'));
  shell.push(box(3, bodyH - 10, 5, M.stone, -54, SF + 10 + (bodyH - 10) / 2, 0, 'hekhal_wall_over_door'));
  shell.push(tag(box(bx1 - bx0 + 1.5, 1.6, bodyZ * 2 + 1.5, M.cedar, (bx0 + bx1) / 2, SF + bodyH + 0.8, 0, 'house_roof'), 'roof'));
  shell.push(tag(box(bx1 - bx0 + 2.4, 0.8, bodyZ * 2 + 2.4, M.gold, (bx0 + bx1) / 2, SF + bodyH + 1.9, 0, 'roof_gold_cornice'), 'roof'));
  for (let i = 0; i < 26; i++) {
    const t = i / 25;
    for (const z of [-bodyZ - 0.6, bodyZ + 0.6]) {
      const sp = new THREE.Mesh(new THREE.ConeGeometry(0.14, 1.5, 8), M.gold);
      sp.position.set(bx0 + 1 + t * (bx1 - bx0 - 2), SF + bodyH + 3, z);
      sp.name = 'golden_spike'; sp.castShadow = true;
      shell.push(tag(sp, 'roof'));
    }
  }
  // three storeys of cells expressed as string courses on the flanks
  [10, 20].forEach(h => {
    shell.push(box(bx1 - bx0 + 0.4, 0.7, bodyZ * 2 + 0.4, M.stoneDark, (bx0 + bx1) / 2, SF + h, 0, 'cell_string_course'));
  });
  feat('cells', shell.map(s => s), box(3.2, bodyH, 3.2, M.stone, -55.5, SF + bodyH / 2, bodyZ - 1.6, 'spiral_stair_turret'));
  // The shell meshes belong to the sanctuary structure; mark them so the cutaway can hide them.
  F.cells.traverse(o => { if (o.isMesh && o.name !== 'spiral_stair_turret' && !o.userData.layer) o.userData.layer = 'shell'; });

  // Holy Place interior
  feat('hekhal',
    box(30.5, 0.35, 10, M.gold, -70.75, SF + 0.17, 0, 'hekhal_floor'),
    box(20, 20, 0.3, M.gold, -65.5, SF + 10, 5, 'hekhal_gold_panel_north'),
    box(20, 20, 0.3, M.gold, -65.5, SF + 10, -5, 'hekhal_gold_panel_south'),
    box(20, 0.4, 10.4, M.gold, -65.5, SF + 20.2, 0, 'hekhal_ceiling'),
    cloth(5, 10, 5, 0.22, M.heavens, -55.7, SF + 5, 0, 'babylonian_curtain_doorway'),
    box(0.24, 0.24, 5.6, M.gold, -55.7, SF + 10.2, 0, 'doorway_curtain_beam'));

  // ---- the golden candlestick (south side) ----
  // Exodus 25:31-40: a beaten-work shaft with three branches out of each side, its
  // knops and flowers; the seven lamps level with one another. Branch curvature
  // follows the rounded form of the Arch of Titus relief.
  const men = [];
  const mx = -73, mz = -3.2, LAMP = 1.62;      // lamp line, a little over 3 cubits above the floor
  const gy = y => SF + y;
  men.push(cyl(0.42, 0.09, M.gold, mx, gy(0.045), mz, 'menorah_base_lower', 32));
  men.push(cyl(0.34, 0.10, M.gold, mx, gy(0.14), mz, 'menorah_base_upper', 32));
  men.push(cyl(0.20, 0.09, M.gold, mx, gy(0.235), mz, 'menorah_pedestal', 28));
  men.push(cyl(0.085, LAMP - 0.28, M.gold, mx, gy(0.28 + (LAMP - 0.28) / 2), mz, 'menorah_shaft', 24));
  [0.46, 0.78, 1.10].forEach((y, i) => {                        // knops and flowers on the shaft
    const k = new THREE.Mesh(new THREE.SphereGeometry(0.115, 20, 14), M.gold);
    k.position.set(mx, gy(y), mz); k.name = 'menorah_knop_' + (i + 1); men.push(k);
  });
  // each branch is a quarter-circle centred on the shaft at the lamp line, so it
  // leaves the shaft horizontally and arrives under its lamp vertically
  const RAD = [0.30, 0.55, 0.80];
  RAD.forEach((r, i) => {
    for (const s of [1, -1]) {
      const geo = new THREE.TorusGeometry(r, 0.043, 14, 44, Math.PI / 2);
      geo.rotateZ(-Math.PI / 2);
      const arc = new THREE.Mesh(geo, M.gold);
      arc.rotation.y = s > 0 ? -Math.PI / 2 : Math.PI / 2;
      arc.position.set(mx, gy(LAMP), mz);
      arc.name = 'menorah_branch_' + (i + 1) + (s > 0 ? '_north' : '_south');
      arc.castShadow = true; men.push(arc);
      for (const f of [0.42, 0.76]) {                            // knops and flowers on each branch
        const ang = Math.PI / 2 * f;
        const knop = new THREE.Mesh(new THREE.SphereGeometry(0.058, 16, 12), M.gold);
        knop.position.set(mx, gy(LAMP - r * Math.cos(ang)), mz + s * r * Math.sin(ang));
        knop.name = 'menorah_branch_knop'; men.push(knop);
      }
    }
  });
  for (let i = -3; i <= 3; i++) {
    const z = i === 0 ? mz : mz + Math.sign(i) * RAD[Math.abs(i) - 1];
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.055, 0.13, 20), M.gold);
    cup.position.set(mx, gy(LAMP + 0.02), z); cup.name = 'menorah_lamp_' + (i + 4); men.push(cup);
    const flower = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 10, 20), M.gold);
    flower.rotation.x = Math.PI / 2; flower.position.set(mx, gy(LAMP + 0.085), z); flower.name = 'lamp_rim'; men.push(flower);
    const wick = new THREE.Mesh(new THREE.SphereGeometry(0.05, 14, 12), M.gold);
    wick.position.set(mx + 0.09, gy(LAMP + 0.1), z); wick.scale.set(0.6, 1.5, 0.6); wick.name = 'lamp_flame'; men.push(wick);
  }
  feat('menorah', men);

  // table of shewbread (north side)
  const tb = [];
  tb.push(box(1.0, 0.12, 0.5, M.gold, -73, SF + 0.74, 3.2, 'shewbread_table_top'));
  tb.push(box(0.95, 0.1, 0.45, M.gold, -73, SF + 0.6, 3.2, 'shewbread_table_rim'));
  [[-0.42, -0.18], [-0.42, 0.18], [0.42, -0.18], [0.42, 0.18]].forEach(([dx, dz], i) =>
    tb.push(box(0.09, 0.68, 0.09, M.gold, -73 + dx, SF + 0.34, 3.2 + dz, 'table_leg_' + (i + 1))));
  for (let i = 0; i < 12; i++)
    tb.push(box(0.34, 0.09, 0.4, M.stoneWarm, -73 + (i < 6 ? -0.22 : 0.22), SF + 0.85 + (i % 6) * 0.09, 3.2, 'shewbread_loaf_' + (i + 1)));
  [[-0.3, 0], [0.3, 0]].forEach(([dx], i) => tb.push(cyl(0.11, 0.16, M.gold, -73 + dx, SF + 1.42, 3.2, 'frankincense_dish_' + (i + 1), 12)));
  feat('shewbread', tb);

  // altar of incense
  feat('incense',
    box(0.5, 0.14, 0.5, M.gold, -74.6, SF + 0.07, 0, 'incense_altar_base'),
    box(0.5, 0.78, 0.5, M.gold, -74.6, SF + 0.53, 0, 'altar_of_incense'),
    box(0.66, 0.1, 0.66, M.gold, -74.6, SF + 0.97, 0, 'incense_altar_crown'),
    ...[[-0.26, -0.26], [-0.26, 0.26], [0.26, -0.26], [0.26, 0.26]].map(([dx, dz], i) =>
      box(0.1, 0.16, 0.1, M.gold, -74.6 + dx, SF + 1.1, dz, 'incense_horn_' + (i + 1))));

  // Two veils a cubit apart (Mishnah Yoma 5:1): forty cubits high, twenty wide,
  // a handbreadth thick, woven of blue, purple, scarlet and fine twined linen with
  // cherubim of cunning work. The outer is looped back at the south end, the inner
  // at the north, so the high priest walked between them.
  const vl = [];
  const VH = 20, VW = 10, VY = SF + VH / 2;
  vl.push(cloth(VW - 0.7, VH, 7, 0.34, M.parochet, -75.6, VY, 0.35, 'outer_veil'));
  vl.push(cloth(VW - 0.7, VH, 7, 0.34, M.parochet, -76.1, VY, -0.35, 'inner_veil'));
  // the looped-back edges: outer gathered to the south, inner to the north
  vl.push(cloth(1.5, VH, 3, 0.28, M.parochet, -75.35, VY, -4.7, 'outer_veil_looped_south'));
  vl.push(cloth(1.5, VH, 3, 0.28, M.parochet, -76.35, VY, 4.7, 'inner_veil_looped_north'));
  vl.push(box(0.3, 0.16, 0.9, M.gold, -75.35, SF + 0.08, -4.7, 'veil_hem_weight_south'));
  vl.push(box(0.3, 0.16, 0.9, M.gold, -76.35, SF + 0.08, 4.7, 'veil_hem_weight_north'));
  // golden beams and rings above each curtain
  for (const [bx, nm] of [[-75.6, 'outer'], [-76.1, 'inner']]) {
    vl.push(box(0.26, 0.26, VW + 0.9, M.gold, bx, SF + VH + 0.35, 0, 'veil_beam_' + nm));
    for (let i = 0; i < 13; i++) {
      const t = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.024, 8, 18), M.gold);
      t.rotation.y = Math.PI / 2; t.position.set(bx, SF + VH + 0.12, -4.8 + i * 0.8);
      t.name = 'veil_ring'; vl.push(t);
    }
  }
  vl.push(box(0.8, 0.5, VW + 1.6, M.gold, -75.85, SF + VH + 0.85, 0, 'veil_valance'));
  feat('veil', vl);

  // Holy of Holies
  feat('holyofholies',
    box(10, 0.35, 10, M.gold, -81, SF + 0.17, 0, 'holy_of_holies_floor'),
    box(0.3, 20, 10, M.gold, -86.1, SF + 10, 0, 'devir_gold_wall_west'),
    box(10, 20, 0.3, M.gold, -81, SF + 10, 5.1, 'devir_gold_wall_north'),
    box(10, 20, 0.3, M.gold, -81, SF + 10, -5.1, 'devir_gold_wall_south'),
    box(10.4, 0.4, 10.4, M.gold, -81, SF + 20.2, 0, 'devir_ceiling'));

  // the Foundation Stone
  const rockGeo = new THREE.IcosahedronGeometry(4.2, 3);
  const pos = rockGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const n = 0.82 + 0.18 * Math.sin(x * 1.7) * Math.cos(z * 1.3) + 0.1 * Math.sin(y * 2.1);
    pos.setXYZ(i, x * n * 1.05, y * n * 0.34, z * n * 0.78);
  }
  rockGeo.computeVertexNormals();
  const rock = new THREE.Mesh(rockGeo, M.stone);
  rock.position.set(-81, SF - 1.05, 0); rock.name = 'even_ha_shetiyah';
  rock.castShadow = true; rock.receiveShadow = true;
  feat('rock', rock);

  // ---------- figures, for scale ----------
  const linen = mat('priestly_linen', { color: 0xf2ecdd, roughness: 0.9, metalness: 0 });
  const cloak = mat('woollen_cloak', { color: 0x8d7a5f, roughness: 0.95, metalness: 0 });
  const cloak2 = mat('dyed_cloak', { color: 0x6b5a6e, roughness: 0.95, metalness: 0 });
  const people = new THREE.Group(); people.name = 'figures';
  const place = (x, z, robe, face, floor) => people.add(figure(x, floor, z, robe, face, 'figure'));
  // priests at the altar, the ramp and the laver (azarah floor 6.9)
  [[-25.5, 9.6], [-25.5, -9.6], [-21, 6.4], [-30, 6.4]].forEach(([x, z], i) => place(x, z, linen, i % 2 ? 1.6 : -1.6, 6.9));
  [[-27, -14], [-24, -18], [-26, -21]].forEach(([x, z]) => place(x, z, linen, 0.2, 8.4));
  [[-40, -6.5], [-41.5, -3]].forEach(([x, z]) => place(x, z, linen, 1.2, 6.9));
  [[-13, 6], [-13, -6], [-11, 12]].forEach(([x, z], i) => place(x, z, cloak, -1.5, 6.9));      // Court of Israel
  // the Court of the Women (floor 3.15)
  for (let i = 0; i < 22; i++) {
    const x = 2 + ((i * 137) % 52), z = -26 + ((i * 71) % 52);
    place(x, z, i % 3 ? cloak : cloak2, ((i * 53) % 62) / 10, 3.15);
  }
  // pilgrims on the southern stairs and the outer court
  for (let i = 0; i < 16; i++) {
    const z = -300 + i * 3.6, x = -30 + ((i * 91) % 60);
    place(x, z, i % 2 ? cloak : cloak2, 1.55, -25 + (i * 3.6) * (17 / 63) + 0.6);
  }
  for (let i = 0; i < 14; i++) place(70 + ((i * 113) % 60), -140 + ((i * 97) % 260), i % 2 ? cloak : cloak2, ((i * 37) % 62) / 10, 0.2);
  root.add(people);

  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  Object.values(M).forEach(mm => { mm.side = THREE.DoubleSide; });
  root.scale.z = -1;                      // authored north = +z  ->  world north = -z
  root.updateMatrixWorld(true);
  return { model: root, features: F };
}

// focus target, orbit camera station, and walking position for each label
export const VIEWS = {
  hinnom:       { t: [-230, -70, -820], c: [120, 60, -1020], w: [-200, -800] },
  olives:       { t: [510, 26, -30],  c: [792, 132, -74], w: [430, -34] },
  kidron:       { t: [265, -60, -60],c: [420, 40, -220],  w: [268, -60] },
  cityofdavid:  { t: [-40, -30, -460], c: [220, 130, -700], w: [-40, -430] },
  siloam:       { t: [-40, -38, -690], c: [90, 20, -800],  w: [-10, -700] },
  uppercity:    { t: [-520, 10, -80], c: [-820, 150, -400], w: [-420, -80] },
  bezetha:      { t: [-100, -12, 400], c: [180, 130, 640], w: [-100, 380] },
  golgotha:     { t: [-395, -8, 250], c: [-560, 60, 470],  w: [-360, 250] },
  bethesda:     { t: [-62, -14, 350], c: [130, 60, 470],   w: [-30, 330] },
  mount:        { t: [-24, 8, 0],    c: [116, 238, -420], w: [70, -60] },
  walls:        { t: [-150, -12, 0], c: [-250, 10, 90],  w: [-120, 0] },
  huldah:       { t: [0, -14, -250], c: [40, 20, -330],  w: [0, -250] },
  shushan:      { t: [158, -6, 0],   c: [256, 40, 70],   w: [140, 0] },
  tadi:         { t: [-30, -4, 240], c: [-30, 30, 310],  w: [-30, 220] },
  kiponus:      { t: [-165, -8, -70],c: [-250, 30, -150], w: [-140, -60] },
  royalstoa:    { t: [0, 10, -215],  c: [70, 45, -300],  w: [0, -215] },
  porticoes:    { t: [0, 8, 224],    c: [10, 30, 150],   w: [0, 218] },
  solomons:     { t: [140, 8, 0],    c: [70, 26, 20],    w: [138, 0] },
  gentiles:     { t: [70, 2, -60],   c: [176, 104, -196], w: [90, -80] },
  antonia:      { t: [-112, 12, 268], c: [56, 118, 470], w: [-112, 232] },
  soreg:        { t: [71, 1, 0],     c: [115, 22, 34],   w: [78, 0] },
  chel:         { t: [66, 3, -18],   c: [104, 24, -46],  w: [72, -18] },
  beautiful:    { t: [62, 9, 0],     c: [96, 14, 0],     w: [70, 0] },
  women:        { t: [27, 4, 0],     c: [30, 46, 62],    w: [30, 0] },
  chambers:     { t: [50, 5, 23],    c: [72, 24, 44],    w: [50, 12] },
  nicanor:      { t: [-6.5, 9, 0],   c: [16, 13, 0],     w: [8, 0] },
  israel:       { t: [-10, 7.2, 0],  c: [6, 15, 12],     w: [-9, 0] },
  priests:      { t: [-24, 7, 8],    c: [4, 26, 30],     w: [-16, 12] },
  altar:        { t: [-25.5, 10, 0], c: [8, 34, 40],    w: [-15, 0] },
  ramp:         { t: [-25.5, 8.5, -14], c: [-12, 15, -26], w: [-25, -20] },
  laver:        { t: [-40, 8.5, -4], c: [-31, 12, -13],  w: [-35, -6] },
  slaughter:    { t: [-25, 8, 13],   c: [-11, 15, 27],   w: [-25, 20] },
  steps12:      { t: [-41, 8.5, 0],  c: [-28, 14, 9],    w: [-38, 0] },
  facade:       { t: [-44.5, 28, 0], c: [4, 34, 2],      w: [-12, 0] },
  vine:         { t: [-45.5, 33, 0], c: [-33, 32, 6],   w: [-38, 0] },
  hekhal:       { t: [-66, 14, 0],   c: [-50, 13, 0],    w: [-60, 0] },
  menorah:      { t: [-73, 10.9, -3.2], c: [-68.6, 11.4, -1.0], w: [-69, -2] },
  shewbread:    { t: [-73, 10.6, 3.2],  c: [-68.6, 11.3, 1.0],  w: [-69, 2] },
  incense:      { t: [-74.6, 10.7, 0],  c: [-70.2, 11.4, -1.6], w: [-71, 0] },
  veil:         { t: [-75.8, 14, 0], c: [-68, 13, 1.5],  w: [-71, 0] },
  holyofholies: { t: [-84, 13, 0],   c: [-77.4, 13.5, 0], w: [-80, 0] },
  rock:         { t: [-81.4, 9.4, 0],c: [-77.4, 11.4, 3.4], w: [-78, 2.5] },
  cells:        { t: [-75, 14, -17.5], c: [-66, 22, -42], w: [-70, -30] }
};
