// Schematic site plan of the Pool of Bethesda / Saint Anne's, Jerusalem.
// Coordinates are approximate metres in a 170 x 160 plan frame, north up.
// Based on published excavation plans (Mauss; de Vaux / Rousée / Duprez, École Biblique;
// later re-examinations). Reconstruction, not survey.

const R = (x, y, w, h) => `${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`;

export const CATS = {
  bedrock:   { fill: "#D8CBAB", stroke: "#A08A5C", name: "Bedrock, quarry & rock scarp" },
  water:     { fill: "#4C8B87", stroke: "#255553", name: "Open water / plastered reservoir" },
  channel:   { fill: "#77ADA9", stroke: "#255553", name: "Channel, sluice & conduit" },
  wall:      { fill: "#7B6A50", stroke: "#463A28", name: "Dam, retaining & precinct wall" },
  colonnade: { fill: "#C6A25A", stroke: "#8A6825", name: "Portico / colonnade" },
  cave:      { fill: "#9C8464", stroke: "#584526", name: "Rock-cut cave, grotto & bathing basin" },
  pagan:     { fill: "#7B6A9E", stroke: "#4B3C72", name: "Graeco-Roman sanctuary" },
  church:    { fill: "#A85B3D", stroke: "#6B301D", name: "Church & Christian building" },
  rubble:    { fill: "#9B9284", stroke: "#5C564A", name: "Ruin, collapse & rubble field" },
  fill:      { fill: "#C7B693", stroke: "#8A7A57", name: "Silt, earth fill & garden" },
  islamic:   { fill: "#5F7F5A", stroke: "#31502D", name: "Madrasa & Islamic-period building" },
  modern:    { fill: "#B03A2C", stroke: "#772115", name: "Standing today / modern structure" },
  excav:     { fill: "#8FA9A6", stroke: "#3B605D", name: "Excavated & exposed remains" }
};

const G = {
  valley:      "8,4 152,4 158,152 12,152",
  northPool:   "28,22 80,22 82,60 26,60",
  dam:         "22,60 86,60 86,67 22,67",
  southPool:   "24,67 84,67 88,116 20,116",
  scarpW:      "14,18 26,18 20,120 8,120",
  scarpE:      "82,18 94,18 98,120 86,120",
  stepsNW:     R(29, 23, 7, 7),
  stepsSW:     R(25, 104, 8, 8),
  stepsSE:     R(76, 104, 9, 8),
  conduit:     "50,116 57,116 60,152 53,152",
  sluice:      R(50, 60, 9, 7),
  quarry:      R(102, 16, 22, 16),
  porticoW:    "10,14 24,14 18,126 4,126",
  porticoN:    R(24, 8, 60, 12),
  porticoE:    "82,14 96,14 100,126 86,126",
  porticoS:    "16,120 92,120 92,132 14,132",
  porticoMid:  R(22, 54, 64, 14),
  caveA:       R(100, 50, 15, 11),
  caveB:       R(100, 65, 13, 10),
  caveC:       R(100, 80, 17, 11),
  bathA:       R(119, 54, 11, 9),
  bathB:       R(119, 68, 13, 10),
  bathC:       R(119, 84, 15, 10),
  eastTerrace: "96,44 138,44 138,106 96,106",
  templePod:   R(108, 52, 24, 30),
  votive:      R(102, 100, 17, 11),
  vaultedN:    R(28, 22, 54, 38),
  basilica:    "30,50 104,50 104,98 30,98",
  apse:        "104,62 118,68 118,82 104,90",
  narthex:     R(22, 50, 9, 48),
  atrium:      "6,54 22,54 22,94 6,94",
  archA:       R(32, 26, 68, 4),
  archB:       R(32, 37, 68, 4),
  archC:       R(32, 48, 68, 4),
  crypt:       R(46, 68, 28, 18),
  baptistry:   R(34, 100, 21, 14),
  monastic:    R(108, 96, 32, 22),
  moustier:    R(56, 56, 26, 22),
  oratory:     R(36, 102, 16, 13),
  stAnne:      "100,100 138,100 138,126 100,126",
  stAnneApse:  "138,104 147,110 147,117 138,123",
  stAnneCrypt: R(112, 112, 13, 10),
  convent:     "94,76 142,76 142,98 94,98",
  cloister:    R(100, 80, 30, 14),
  garden:      "24,20 84,20 88,114 20,114",
  madrasaCt:   R(96, 56, 44, 18),
  madrasaCell: R(88, 128, 54, 18),
  houses:      R(24, 82, 42, 26),
  whiteFath:   R(140, 34, 20, 72),
  museum:      R(96, 40, 26, 14),
  walkway:     R(90, 60, 6, 62),
  pathS:       R(16, 132, 118, 6),
  siteWall:    "4,2 158,2 162,154 8,154"
};

const f = (g, cat, label, opts) => Object.assign({ points: G[g], cat, label }, opts || {});

export const PERIODS = [
  {
    key: "iron", essay: "iron",
    name: "Iron Age Reservoir",
    span: "c. 800 – 600 BC",
    tick: "800 BC",
    strap: "A dam is thrown across the Beth Zeta valley; the Upper Pool feeds the Temple by gravity.",
    features: [
      f("valley", "bedrock", "Beth Zeta valley floor", { ghostOnly: true }),
      f("quarry", "bedrock", "Quarries & rock-cut tombs"),
      f("scarpW", "bedrock", "Rock scarp, west"),
      f("scarpE", "bedrock", "Rock scarp, east"),
      f("northPool", "water", "Upper Pool — rock-cut reservoir, c. 53 × 40 m"),
      f("stepsNW", "wall", "Corner stair to pool floor"),
      f("dam", "wall", "Dam wall, c. 6.5 m thick — carries the road"),
      f("conduit", "channel", "Rock-cut conduit toward the Temple", { dashed: true })
    ],
    labels: [
      { x: 54, y: 42, t: "UPPER POOL" },
      { x: 54, y: 65.5, t: "DAM" },
      { x: 54, y: 92, t: "valley floor — still dry", small: true },
      { x: 113, y: 26, t: "quarries", small: true },
      { x: 62, y: 140, t: "to the Temple", small: true }
    ]
  },
  {
    key: "hasmonean", essay: "hasmonean",
    name: "The Twin Pools",
    span: "c. 200 – 40 BC",
    tick: "200 BC",
    strap: "A second basin is cut south of the dam. 'Beth Eshdatayin' — the place of two pools.",
    features: [
      f("scarpW", "bedrock", "Rock scarp, west"),
      f("scarpE", "bedrock", "Rock scarp, east"),
      f("northPool", "water", "Upper Pool"),
      f("southPool", "water", "Lower Pool — cut c. 200 BC, c. 60 × 50 m"),
      f("dam", "wall", "Dam / causeway between the pools"),
      f("sluice", "channel", "Sluice from upper to lower pool"),
      f("stepsNW", "wall", "Corner stair"),
      f("stepsSW", "wall", "Corner stair"),
      f("stepsSE", "wall", "Corner stair"),
      f("conduit", "channel", "Conduit toward the Temple", { dashed: true }),
      f("caveA", "cave", "Rock cavity adapted as a stepped basin"),
      f("caveB", "cave", "Rock cavity adapted as a stepped basin"),
      f("bathB", "cave", "Small immersion basin (miqveh?)", { dashed: true })
    ],
    labels: [
      { x: 54, y: 42, t: "UPPER POOL" },
      { x: 54, y: 92, t: "LOWER POOL" },
      { x: 54, y: 65.5, t: "DAM" },
      { x: 118, y: 74, t: "eastern basins & caves", small: true }
    ]
  },
  {
    key: "herodian", essay: "herodian",
    name: "Second Temple Sanctuary",
    span: "c. 40 BC – AD 70",
    tick: "AD 1",
    strap: "Five porticoes frame the pools; the eastern rock becomes a place of bathing and healing.",
    features: [
      f("scarpE", "bedrock", "Rock scarp, east"),
      f("northPool", "water", "Upper Pool"),
      f("southPool", "water", "Lower Pool"),
      f("dam", "wall", "Dam"),
      f("sluice", "channel", "Sluice"),
      f("porticoW", "colonnade", "Portico I — west"),
      f("porticoN", "colonnade", "Portico II — north"),
      f("porticoE", "colonnade", "Portico III — east"),
      f("porticoS", "colonnade", "Portico IV — south"),
      f("porticoMid", "colonnade", "Portico V — on the dam, between the pools"),
      f("caveA", "cave", "Rock-cut chamber & basin"),
      f("caveB", "cave", "Rock-cut chamber & basin"),
      f("caveC", "cave", "Rock-cut chamber & basin"),
      f("bathA", "cave", "Small bathing basin"),
      f("bathB", "cave", "Stepped ritual bath"),
      f("bathC", "cave", "Small bathing basin"),
      f("conduit", "channel", "Conduit toward the Temple", { dashed: true })
    ],
    labels: [
      { x: 54, y: 40, t: "UPPER POOL" },
      { x: 54, y: 92, t: "LOWER POOL" },
      { x: 54, y: 61, t: "PORTICO V" },
      { x: 54, y: 14, t: "PORTICO II" },
      { x: 54, y: 126, t: "PORTICO IV" },
      { x: 122, y: 74, t: "healing basins & grottoes", small: true },
      { x: 62, y: 140, t: "Sheep Gate & Temple", small: true }
    ]
  },
  {
    key: "aelia", essay: "aelia",
    name: "Aelia Capitolina",
    span: "AD 135 – 324",
    tick: "AD 135",
    strap: "A Roman colony; the healing installations become a sanctuary of Asclepius and Serapis.",
    features: [
      f("northPool", "water", "Upper Pool — partly vaulted over"),
      f("vaultedN", "rubble", "Vaulting / fill over the upper basin", { dashed: true }),
      f("southPool", "water", "Lower Pool, still collecting runoff"),
      f("dam", "wall", "Dam"),
      f("eastTerrace", "pagan", "Terrace of the healing sanctuary"),
      f("templePod", "pagan", "Podium of a small temple (Asclepius / Serapis)", { dashed: true }),
      f("caveA", "cave", "Grotto shrine"),
      f("caveB", "cave", "Grotto shrine"),
      f("caveC", "cave", "Grotto shrine"),
      f("bathA", "cave", "Curative basin"),
      f("bathB", "cave", "Curative basin"),
      f("bathC", "cave", "Curative basin"),
      f("votive", "pagan", "Votive deposit — marble ex-voto foot of Pompeia Lucilia"),
      f("pathS", "wall", "Street of the Roman colony")
    ],
    labels: [
      { x: 54, y: 40, t: "UPPER POOL" },
      { x: 54, y: 92, t: "LOWER POOL" },
      { x: 120, y: 48, t: "ASCLEPIEION", small: true },
      { x: 110, y: 106, t: "votives", small: true }
    ]
  },
  {
    key: "byzantine", essay: "byzantine",
    name: "Byzantine Basilica",
    span: "AD 450 – 614",
    tick: "AD 450",
    strap: "Saint Mary of the Probatica: a basilica carried on arches sprung from the floor of the pools.",
    features: [
      f("northPool", "water", "Upper Pool, beneath the arches"),
      f("southPool", "water", "Lower Pool, beneath the arches"),
      f("archA", "wall", "Pier arcade rising from the pool floor"),
      f("archB", "wall", "Pier arcade rising from the pool floor"),
      f("archC", "wall", "Pier arcade rising from the pool floor"),
      f("dam", "wall", "Dam — foundation of the church"),
      f("atrium", "church", "Colonnaded atrium"),
      f("narthex", "church", "Narthex"),
      f("basilica", "church", "Three-aisled nave over the pools"),
      f("apse", "church", "Eastern apse"),
      f("crypt", "church", "Crypt & stair down to the water"),
      f("baptistry", "church", "Baptistery"),
      f("monastic", "church", "Monastic & pilgrim buildings"),
      f("caveB", "cave", "Older grotto, retained beneath the church"),
      f("caveC", "cave", "Older grotto, retained beneath the church")
    ],
    labels: [
      { x: 66, y: 74, t: "BASILICA OF ST MARY" },
      { x: 66, y: 80, t: "of the Probatic Pool", small: true },
      { x: 14, y: 74, t: "ATRIUM", small: true },
      { x: 66, y: 33, t: "arches over the upper pool", small: true }
    ]
  },
  {
    key: "earlyislamic", essay: "earlyislamic",
    name: "Ruins & the Moustier",
    span: "AD 614 – 1099",
    tick: "AD 614",
    strap: "Persian sack, then centuries of quiet: collapse, silt, and one small chapel on the vaults.",
    features: [
      f("basilica", "rubble", "Collapsed basilica — piers and wall stubs", { dashed: true }),
      f("apse", "rubble", "Ruined apse", { dashed: true }),
      f("archB", "rubble", "Surviving vault"),
      f("northPool", "fill", "Upper Pool, silted and choked with collapse"),
      f("southPool", "fill", "Lower Pool, silted; water still gathers in winter"),
      f("moustier", "church", "The 'Moustier' — small chapel on the surviving vaults"),
      f("caveC", "cave", "Grotto, still visited"),
      f("monastic", "rubble", "Ruined monastic buildings", { dashed: true })
    ],
    labels: [
      { x: 68, y: 67, t: "THE MOUSTIER", small: true },
      { x: 54, y: 100, t: "silted basins", small: true },
      { x: 54, y: 40, t: "collapse & rubble", small: true }
    ]
  },
  {
    key: "crusader", essay: "crusader",
    name: "Crusader Saint Anne's",
    span: "AD 1100 – 1187",
    tick: "1100",
    strap: "A Romanesque church over the grotto of the Virgin's birth, with a convent and gardens.",
    features: [
      f("garden", "fill", "Silted basins used as convent garden"),
      f("moustier", "church", "Chapel of the Paralytic, on the vaults"),
      f("archB", "wall", "Byzantine vault, reused"),
      f("stAnne", "church", "Church of Saint Anne, c. 1131–1138"),
      f("stAnneApse", "church", "Three eastern apses"),
      f("stAnneCrypt", "cave", "Crypt grotto — venerated birthplace of the Virgin"),
      f("convent", "church", "Convent buildings"),
      f("cloister", "church", "Cloister court"),
      f("caveC", "cave", "Rock-cut cistern & cave"),
      f("basilica", "rubble", "Ruins of the Byzantine basilica", { dashed: true })
    ],
    labels: [
      { x: 118, y: 113, t: "SAINT ANNE'S" },
      { x: 118, y: 87, t: "convent", small: true },
      { x: 68, y: 67, t: "chapel", small: true },
      { x: 54, y: 100, t: "garden over the pools", small: true }
    ]
  },
  {
    key: "madrasa", essay: "madrasa",
    name: "Salahiyya Madrasa",
    span: "AD 1187 – 1856",
    tick: "1187",
    strap: "Saladin turns the church into a law school; the quarter rises on its own debris.",
    features: [
      f("garden", "fill", "Buried basins — gardens, then waste ground"),
      f("stAnne", "islamic", "Al-Salahiyya madrasa (the church, converted 1192)"),
      f("stAnneApse", "islamic", "Eastern end of the hall"),
      f("madrasaCt", "islamic", "Courtyard & students' cells"),
      f("madrasaCell", "islamic", "Later rooms along the street"),
      f("houses", "islamic", "Ottoman-period houses over the fill"),
      f("moustier", "rubble", "Chapel, ruined", { dashed: true }),
      f("basilica", "rubble", "Byzantine ruins, buried", { dashed: true })
    ],
    labels: [
      { x: 118, y: 113, t: "AL-SALAHIYYA" },
      { x: 118, y: 65, t: "courtyard", small: true },
      { x: 44, y: 96, t: "houses & waste ground", small: true }
    ]
  },
  {
    key: "modern", essay: "modern",
    name: "The Site Today",
    span: "1856 – present",
    tick: "Today",
    strap: "French domain, White Fathers, and a century of excavation: the pools open to the sky again.",
    features: [
      f("southPool", "excav", "Lower Pool — excavated and open to the sky"),
      f("northPool", "fill", "Upper Pool — still largely unexcavated"),
      f("dam", "excav", "Dam, exposed"),
      f("archB", "excav", "Byzantine piers & vaults, consolidated"),
      f("basilica", "excav", "Foundations of the Byzantine basilica", { dashed: true }),
      f("moustier", "excav", "Crusader chapel, standing as a shell"),
      f("caveA", "excav", "Eastern caves & basins, exposed"),
      f("caveB", "excav", "Eastern caves & basins, exposed"),
      f("caveC", "excav", "Eastern caves & basins, exposed"),
      f("bathA", "excav", "Roman-period basins"),
      f("bathB", "excav", "Roman-period basins"),
      f("bathC", "excav", "Roman-period basins"),
      f("stAnne", "modern", "Church of Saint Anne — standing, restored from 1863"),
      f("stAnneApse", "modern", "Eastern apses"),
      f("stAnneCrypt", "modern", "Crypt grotto"),
      f("whiteFath", "modern", "White Fathers' seminary & residence"),
      f("museum", "modern", "Small museum & finds store"),
      f("walkway", "modern", "Visitor walkway over the ruins"),
      f("pathS", "modern", "Garden path"),
      f("siteWall", "modern", "Wall of the Domaine de Sainte-Anne", { outlineOnly: true })
    ],
    labels: [
      { x: 118, y: 113, t: "SAINT ANNE'S" },
      { x: 54, y: 96, t: "EXCAVATED POOLS" },
      { x: 54, y: 40, t: "unexcavated", small: true },
      { x: 149, y: 70, t: "seminary", small: true }
    ]
  }
];
