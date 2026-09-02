// 2.5D model of the Pool of Bethesda / Saint Anne's, Jerusalem.
// Coordinates: metres. x = east, y = south, z = height above the present rim of the pools.
// Reconstruction from published excavation plans (Mauss 1863; de Vaux / Rousée / Duprez,
// École Biblique 1957-62; later re-examinations). Heights are informed estimates.

export const CENTER = { x: 84, y: 74 };

export const CATS = {
  bedrock:   { fill: "#D6C8A6", name: "Bedrock, quarry & open ground" },
  plaster:   { fill: "#CFC0A0", name: "Plastered rock-cut basin wall" },
  water:     { fill: "#3E8380", name: "Standing water" },
  channel:   { fill: "#79ADA9", name: "Channel, sluice & conduit" },
  wall:      { fill: "#7B6A50", name: "Dam, pier & retaining wall" },
  colonnade: { fill: "#C6A25A", name: "Portico / colonnade" },
  cave:      { fill: "#9C8464", name: "Rock-cut cave, grotto & bathing basin" },
  pagan:     { fill: "#7B6A9E", name: "Graeco-Roman sanctuary" },
  church:    { fill: "#A85B3D", name: "Church & Christian building" },
  rubble:    { fill: "#9B9284", name: "Ruin, collapse & rubble" },
  fill:      { fill: "#C7B693", name: "Silt, earth fill & garden" },
  islamic:   { fill: "#5F7F5A", name: "Madrasa & Islamic-period building" },
  modern:    { fill: "#B0503E", name: "Standing today / modern structure" },
  excav:     { fill: "#8FA9A6", name: "Excavated & exposed remains" }
};

const R = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
const oct = (cx, cy, r) => {
  const p = [];
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i + Math.PI / 8;
    p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return p;
};

const P = {
  ground:    [[2, -2], [166, -2], [172, 156], [6, 156]],
  northPool: [[28, 22], [80, 22], [82, 60], [26, 60]],
  southPool: [[24, 67], [84, 67], [88, 116], [20, 116]],
  dam:       [[22, 60], [86, 60], [86, 67], [22, 67]],
  stairNW:   R(29, 23, 7, 8),
  stairSW:   R(25, 103, 8, 9),
  stairSE:   R(76, 103, 9, 9),
  sluice:    R(50, 60, 9, 7),
  conduit:   [[50, 116], [57, 116], [61, 154], [54, 154]],
  quarry:    R(104, 14, 24, 18),
  dryValley: [[24, 67], [84, 67], [88, 116], [20, 116]],
  caveA:     R(100, 48, 15, 12),
  caveB:     R(100, 64, 13, 11),
  caveC:     R(100, 80, 17, 12),
  bathA:     R(120, 52, 11, 10),
  bathB:     R(120, 67, 13, 11),
  bathC:     R(120, 83, 15, 11),
  terrace:   [[96, 40], [140, 40], [140, 108], [96, 108]],
  podium:    R(106, 50, 28, 34),
  cella:     R(111, 55, 18, 24),
  votive:    R(100, 98, 17, 12),
  street:    R(12, 130, 124, 9),
  pierA:     R(31, 25, 70, 5),
  pierB:     R(31, 38, 70, 5),
  pierC:     R(31, 51, 70, 5),
  churchSlab:[[28, 48], [106, 48], [106, 100], [28, 100]],
  nave:      R(36, 58, 66, 32),
  aisleN:    R(36, 50, 66, 8),
  aisleS:    R(36, 90, 66, 8),
  naveRoof:  R(38, 60, 62, 28),
  apse:      [[102, 62], [117, 68], [117, 82], [102, 88]],
  narthex:   R(28, 50, 8, 48),
  atriumW:   R(6, 52, 5, 44),
  atriumN:   R(6, 52, 22, 5),
  atriumS:   R(6, 91, 22, 5),
  crypt:     R(48, 66, 26, 18),
  baptistry: R(34, 102, 20, 15),
  monastic:  R(108, 96, 32, 22),
  moustier:  R(56, 55, 26, 23),
  vault:     R(31, 38, 70, 5),
  stAnne:    R(100, 100, 38, 26),
  stAnneRf:  R(102, 102, 34, 22),
  dome:      oct(119, 113, 7),
  apses:     [[138, 103], [148, 110], [148, 118], [138, 124]],
  convent:   R(94, 74, 48, 22),
  cloister:  R(100, 78, 32, 14),
  garden:    [[24, 22], [84, 22], [88, 114], [20, 114]],
  courtyard: R(96, 52, 44, 20),
  cells:     R(88, 128, 54, 16),
  houses:    R(26, 80, 44, 26),
  seminary:  R(142, 30, 22, 74),
  museum:    R(96, 36, 26, 16),
  walkway:   R(90, 58, 6, 64),
  path:      R(16, 130, 116, 7),
  siteWall:  [[2, -2], [166, -2], [172, 156], [6, 156]]
};

const pit   = (k, depth, water, label, cat) => ({ kind: "pit", poly: P[k], depth, water, label, cat: cat || "plaster" });
const box   = (k, z0, h, cat, label, o) => Object.assign({ kind: "box", poly: P[k], z0, h, cat, label }, o || {});
const flat  = (k, z, cat, label, o) => Object.assign({ kind: "flat", poly: P[k], z, cat, label }, o || {});
const colon = (a, b, n, h, label) => ({ kind: "colonnade", a, b, n, h, cat: "colonnade", label });

export const PERIODS = [
  {
    key: "iron", essay: "iron", name: "Iron Age Reservoir", span: "c. 800 – 600 BC", tick: "800 BC",
    strap: "A dam is thrown across the Beth Zeta valley; the Upper Pool feeds the Temple downhill by gravity.",
    features: [
      flat("quarry", 0, "bedrock", "Quarries and rock-cut tombs on the northern slope"),
      flat("dryValley", -1.5, "bedrock", "Southern half of the valley — still dry rock"),
      pit("northPool", 13, 9.5, "Upper Pool — rock-cut reservoir, c. 53 × 40 m and some 13 m deep"),
      box("stairNW", -13, 13, "wall", "Corner stair down to the pool floor"),
      box("dam", -13, 13.6, "wall", "Dam wall, c. 6.5 m thick — wide enough to carry a road"),
      flat("conduit", -0.5, "channel", "Rock-cut conduit running south toward the Temple")
    ],
    labels: [
      { x: 54, y: 40, z: 2, t: "UPPER POOL" },
      { x: 54, y: 63, z: 1.5, t: "DAM", small: true },
      { x: 54, y: 92, z: 0, t: "valley floor, still dry", small: true },
      { x: 116, y: 23, z: 0, t: "quarries", small: true },
      { x: 58, y: 146, z: 0, t: "to the Temple", small: true }
    ]
  },
  {
    key: "hasmonean", essay: "hasmonean", name: "The Twin Pools", span: "c. 200 – 40 BC", tick: "200 BC",
    strap: "A second basin is cut south of the dam — 'Beth Eshdatayin', the place of two pools.",
    features: [
      pit("northPool", 13, 10, "Upper Pool"),
      pit("southPool", 13, 8.5, "Lower Pool — cut c. 200 BC, c. 60 × 50 m"),
      box("dam", -13, 13.6, "wall", "Dam and causeway between the two pools"),
      box("stairNW", -13, 13, "wall", "Corner stair"),
      box("stairSW", -13, 13, "wall", "Corner stair"),
      box("stairSE", -13, 13, "wall", "Corner stair"),
      flat("sluice", 0.6, "channel", "Sluice carrying water from the upper pool to the lower"),
      flat("conduit", -0.5, "channel", "Conduit toward the Temple"),
      pit("caveA", 3, 1.2, "Rock cavity adapted as a stepped basin", "cave"),
      pit("caveB", 3, 1.2, "Rock cavity adapted as a stepped basin", "cave"),
      pit("bathB", 2.5, 1, "Small immersion basin — a miqveh?", "cave")
    ],
    labels: [
      { x: 54, y: 40, z: 2, t: "UPPER POOL" },
      { x: 54, y: 92, z: 2, t: "LOWER POOL" },
      { x: 54, y: 63, z: 1.5, t: "DAM", small: true },
      { x: 116, y: 74, z: 1, t: "eastern basins", small: true }
    ]
  },
  {
    key: "herodian", essay: "herodian", name: "Second Temple Sanctuary", span: "c. 40 BC – AD 70", tick: "AD 1",
    strap: "Five porticoes frame the pools; the eastern rock becomes a place of bathing and healing.",
    features: [
      pit("northPool", 13, 10, "Upper Pool"),
      pit("southPool", 13, 9, "Lower Pool"),
      box("dam", -13, 13.6, "wall", "Dam"),
      box("stairNW", -13, 13, "wall", "Corner stair"),
      box("stairSE", -13, 13, "wall", "Corner stair"),
      colon([14, 18], [18, 122], 15, 6.5, "Portico I — the west colonnade"),
      colon([26, 15], [84, 15], 11, 6.5, "Portico II — the north colonnade"),
      colon([93, 18], [97, 122], 15, 6.5, "Portico III — the east colonnade"),
      colon([22, 125], [90, 125], 12, 6.5, "Portico IV — the south colonnade"),
      colon([26, 63.5], [84, 63.5], 11, 6.5, "Portico V — on the dam, between the two pools"),
      pit("caveA", 3.5, 1.4, "Rock-cut chamber and basin", "cave"),
      pit("caveB", 3.5, 1.4, "Rock-cut chamber and basin", "cave"),
      pit("caveC", 3.5, 1.4, "Rock-cut chamber and basin", "cave"),
      pit("bathA", 2.5, 1, "Small bathing basin", "cave"),
      pit("bathB", 2.5, 1, "Stepped ritual bath", "cave"),
      pit("bathC", 2.5, 1, "Small bathing basin", "cave"),
      flat("conduit", -0.5, "channel", "Conduit toward the Temple")
    ],
    labels: [
      { x: 60, y: 36, z: 2, t: "UPPER POOL" },
      { x: 46, y: 98, z: 2, t: "LOWER POOL" },
      { x: 54, y: 63.5, z: 9, t: "PORTICO V" },
      { x: 54, y: 15, z: 9, t: "PORTICO II", small: true },
      { x: 54, y: 125, z: 9, t: "PORTICO IV", small: true },
      { x: 126, y: 102, z: 1, t: "healing basins & grottoes", small: true }
    ]
  },
  {
    key: "aelia", essay: "aelia", name: "Aelia Capitolina", span: "AD 135 – 324", tick: "AD 135",
    strap: "A Roman colony; the healing installations become a sanctuary of Asclepius and Serapis.",
    features: [
      pit("northPool", 13, 7, "Upper Pool — partly vaulted and filled"),
      pit("southPool", 13, 8, "Lower Pool, still collecting winter runoff"),
      box("dam", -13, 13.6, "wall", "Dam"),
      box("terrace", 0, 4, "pagan", "Terrace of the healing sanctuary"),
      box("podium", 4, 3, "pagan", "Podium of a small temple"),
      box("cella", 7, 9, "pagan", "Temple of Asclepius / Serapis — reconstructed"),
      colon([108, 86], [132, 86], 6, 8, "Temple portico — reconstructed"),
      pit("caveA", 3.5, 1.2, "Grotto shrine", "cave"),
      pit("caveB", 3.5, 1.2, "Grotto shrine", "cave"),
      pit("caveC", 3.5, 1.2, "Grotto shrine", "cave"),
      pit("bathA", 2.5, 1, "Curative basin", "cave"),
      pit("bathB", 2.5, 1, "Curative basin", "cave"),
      pit("bathC", 2.5, 1, "Curative basin", "cave"),
      flat("votive", 4.1, "pagan", "Votive deposit — the marble ex-voto foot of Pompeia Lucilia"),
      flat("street", 0, "wall", "Street of the Roman colony")
    ],
    labels: [
      { x: 54, y: 40, z: 2, t: "UPPER POOL", small: true },
      { x: 54, y: 92, z: 2, t: "LOWER POOL" },
      { x: 120, y: 46, z: 16, t: "ASCLEPIEION" },
      { x: 108, y: 104, z: 5, t: "votives", small: true }
    ]
  },
  {
    key: "byzantine", essay: "byzantine", name: "Byzantine Basilica", span: "AD 450 – 614", tick: "AD 450",
    strap: "Saint Mary of the Probatica: a basilica carried on arches sprung from the floor of the pools.",
    features: [
      pit("northPool", 13, 6, "Upper Pool, in darkness beneath the church"),
      pit("southPool", 13, 6, "Lower Pool, beneath the church"),
      box("pierA", -13, 13, "wall", "Pier arcade rising from the floor of the pool"),
      box("pierB", -13, 13, "wall", "Pier arcade rising from the floor of the pool"),
      box("pierC", -13, 13, "wall", "Pier arcade rising from the floor of the pool"),
      box("dam", -13, 13.6, "wall", "Dam — the church's foundation"),
      flat("churchSlab", 0.8, "church", "Church floor, carried on vaults over the water"),
      box("aisleN", 0.8, 9, "church", "North aisle"),
      box("aisleS", 0.8, 9, "church", "South aisle"),
      box("nave", 0.8, 15, "church", "Three-aisled nave"),
      box("naveRoof", 15.8, 2.2, "church", "Nave roof"),
      box("apse", 0.8, 11, "church", "Eastern apse"),
      box("narthex", 0.8, 9, "church", "Narthex"),
      box("atriumW", 0.8, 6, "church", "Atrium colonnade"),
      box("atriumN", 0.8, 6, "church", "Atrium colonnade"),
      box("atriumS", 0.8, 6, "church", "Atrium colonnade"),
      box("baptistry", 0.8, 7, "church", "Baptistery"),
      box("monastic", 0, 7, "church", "Monastic and pilgrim buildings"),
      pit("caveC", 3.5, 1, "Older grotto, kept beneath the church", "cave")
    ],
    labels: [
      { x: 66, y: 74, z: 20, t: "ST MARY OF THE PROBATICA" },
      { x: 14, y: 74, z: 8, t: "atrium", small: true },
      { x: 66, y: 34, z: -4, t: "arches over the upper pool", small: true }
    ]
  },
  {
    key: "earlyislamic", essay: "earlyislamic", name: "Ruins & the Moustier", span: "AD 614 – 1099", tick: "AD 614",
    strap: "Persian sack, then centuries of quiet: collapse, silt, and one small chapel on the vaults.",
    features: [
      pit("northPool", 7, 2, "Upper Pool, silted and choked with collapse", "fill"),
      pit("southPool", 8, 2.5, "Lower Pool, silted; water still gathers in winter", "fill"),
      box("dam", -8, 8.4, "wall", "Dam"),
      box("pierB", -8, 8, "rubble", "Surviving pier and vault"),
      flat("churchSlab", 0.6, "rubble", "Field of collapsed masonry from the basilica"),
      box("apse", 0.6, 4, "rubble", "Ruined apse"),
      box("moustier", 1, 7, "church", "The 'Moustier' — small chapel kept on the surviving vaults"),
      box("monastic", 0, 2.5, "rubble", "Ruined monastic buildings"),
      pit("caveC", 3.5, 0.8, "Grotto, still visited", "cave")
    ],
    labels: [
      { x: 69, y: 66, z: 11, t: "THE MOUSTIER" },
      { x: 54, y: 100, z: -3, t: "silted basins", small: true },
      { x: 44, y: 32, z: -2, t: "collapse & rubble", small: true }
    ]
  },
  {
    key: "crusader", essay: "crusader", name: "Crusader Saint Anne's", span: "AD 1100 – 1187", tick: "1100",
    strap: "A Romanesque church over the grotto of the Virgin's birth, with a convent and gardens.",
    features: [
      flat("garden", -2, "fill", "Silted basins cultivated as the convent garden"),
      box("pierB", -6, 6, "rubble", "Byzantine vault, reused"),
      box("moustier", 0.5, 7, "church", "Chapel of the Paralytic, on the old vaults"),
      box("stAnne", 0, 14, "church", "Church of Saint Anne, c. 1131–1138 — 34 × 20 m"),
      box("stAnneRf", 14, 2.4, "church", "Roof"),
      box("dome", 14, 6, "church", "Dome over the crossing"),
      box("apses", 0, 10, "church", "Three eastern apses within a flat outer wall"),
      pit("stAnne", 6, 0, "Crypt grotto below — venerated birthplace of the Virgin", "cave"),
      box("convent", 0, 7, "church", "Convent buildings"),
      flat("cloister", 0.3, "fill", "Cloister court"),
      flat("churchSlab", 0.4, "rubble", "Ruins of the Byzantine basilica")
    ],
    labels: [
      { x: 119, y: 113, z: 22, t: "SAINT ANNE'S" },
      { x: 118, y: 85, z: 9, t: "convent", small: true },
      { x: 69, y: 66, z: 10, t: "chapel", small: true },
      { x: 50, y: 100, z: -1, t: "garden over the buried pools", small: true }
    ]
  },
  {
    key: "madrasa", essay: "madrasa", name: "Salahiyya Madrasa", span: "AD 1187 – 1856", tick: "1187",
    strap: "Saladin turns the church into a law school; the quarter slowly rises on its own debris.",
    features: [
      flat("garden", -0.5, "fill", "Buried basins — gardens, then waste ground"),
      box("stAnne", 0, 14, "islamic", "Al-Salahiyya madrasa — the church, converted in 1192"),
      box("stAnneRf", 14, 2.4, "islamic", "Roof"),
      box("dome", 14, 6, "islamic", "Dome over the crossing"),
      box("apses", 0, 10, "islamic", "Eastern end of the hall"),
      box("courtyard", 0, 5, "islamic", "Courtyard and students' cells"),
      box("cells", 0, 5.5, "islamic", "Later rooms along the street"),
      box("houses", 0, 6, "islamic", "Ottoman-period houses built over the fill"),
      flat("moustier", 0.4, "rubble", "Chapel, fallen"),
      flat("churchSlab", 0.2, "rubble", "Byzantine ruins, buried")
    ],
    labels: [
      { x: 119, y: 113, z: 22, t: "AL-SALAHIYYA" },
      { x: 118, y: 62, z: 7, t: "courtyard", small: true },
      { x: 48, y: 93, z: 8, t: "houses & waste ground", small: true }
    ]
  },
  {
    key: "modern", essay: "modern", name: "The Site Today", span: "1856 – present", tick: "Today",
    strap: "French domain, White Fathers, and a century of excavation: the pools open to the sky again.",
    features: [
      pit("southPool", 13, 0, "Lower Pool — excavated and open to the sky", "excav"),
      flat("northPool", -0.5, "fill", "Upper Pool — still largely unexcavated"),
      box("dam", -13, 13.4, "excav", "Dam, exposed"),
      box("pierB", -13, 13, "excav", "Byzantine piers and vaults, consolidated"),
      flat("churchSlab", 0.3, "excav", "Foundations of the Byzantine basilica"),
      box("moustier", 0.4, 6, "excav", "Crusader chapel, standing as a shell"),
      pit("caveA", 3.5, 0, "Eastern caves and basins, exposed", "excav"),
      pit("caveB", 3.5, 0, "Eastern caves and basins, exposed", "excav"),
      pit("caveC", 3.5, 0, "Eastern caves and basins, exposed", "excav"),
      pit("bathB", 2.5, 0, "Roman-period basins", "excav"),
      box("stAnne", 0, 14, "modern", "Church of Saint Anne — standing, restored from 1863"),
      box("stAnneRf", 14, 2.4, "modern", "Roof"),
      box("dome", 14, 6, "modern", "Dome over the crossing"),
      box("apses", 0, 10, "modern", "Eastern apses"),
      box("seminary", 0, 13, "modern", "White Fathers' seminary and residence"),
      box("museum", 0, 5, "modern", "Small museum and finds store"),
      flat("walkway", 1.4, "modern", "Visitor walkway over the ruins"),
      flat("path", 0, "modern", "Garden path")
    ],
    labels: [
      { x: 119, y: 113, z: 22, t: "SAINT ANNE'S" },
      { x: 54, y: 96, z: -3, t: "EXCAVATED POOLS" },
      { x: 54, y: 40, z: 0, t: "unexcavated", small: true },
      { x: 153, y: 66, z: 15, t: "seminary", small: true }
    ]
  }
];
