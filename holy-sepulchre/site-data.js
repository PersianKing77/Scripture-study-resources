// Geometry for the Church of the Holy Sepulchre site, all periods.
// Plan view, north up, east right. viewBox 1000 x 760. Scale: ~5.46 units = 1 m.
// Confidence: s = SECURE (excavated or standing), p = PROBABLE (strong indirect
// evidence), r = RECONSTRUCTED (texts, pilgrim accounts, comparanda).
// dis: 1 marks an element scholars actively disagree about.

const CX = 230, CY = 365;

const ring = (cx, cy, ro, ri) =>
  `M${cx - ro},${cy} a${ro},${ro} 0 1,0 ${ro * 2},0 a${ro},${ro} 0 1,0 ${-ro * 2},0 Z ` +
  `M${cx - ri},${cy} a${ri},${ri} 0 1,0 ${ri * 2},0 a${ri},${ri} 0 1,0 ${-ri * 2},0 Z`;
const circ = (cx, cy, r) =>
  `M${cx - r},${cy} a${r},${r} 0 1,0 ${r * 2},0 a${r},${r} 0 1,0 ${-r * 2},0 Z`;
const R = (x, y, w, h, c, q, l, extra) =>
  Object.assign({ t: 'rect', x: x, y: y, w: w, h: h, c: c, q: q, l: l }, extra || {});
const T = (x, y, text, s) => ({ t: 'txt', x: x, y: y, text: text, s: s || 13, c: 'anno' });

const QUARRY_RIM = '138,196 214,178 330,186 432,208 520,238 596,296 614,378 578,470 484,540 344,562 224,548 152,482';
const FLOOR_MID = '186,240 300,224 420,250 500,300 510,400 430,482 300,512 212,470';
const FLOOR_DEEP = '196,292 292,274 372,310 382,402 300,458 220,442';
const GOLG = '414,424 448,418 462,440 456,466 424,472 410,450';
const CRUSADER_BODY = 'M322,282 H460 a84,84 0 0 1 0,166 H322 Z';

const bedrock = () => [
  R(0, 0, 1000, 760, 'bedrock', 'p', 'Meleke limestone bedrock — the soft, creamy building stone that Jerusalem is quarried from and built of'),
  { t: 'poly', pts: '0,0 1000,0 1000,116 700,150 420,120 180,144 0,110', c: 'slope', q: 'p', l: 'Ground rising towards the northern hill' }
];

const quarryBody = (q) => [
  { t: 'poly', pts: QUARRY_RIM, c: 'floorA', q: q || 's', l: 'Upper quarry floor — the hillside cut back to roughly one storey below its natural surface' },
  { t: 'poly', pts: FLOOR_MID, c: 'floorB', q: 's', l: 'Middle quarry floor — a second working level, stepped down about 2 m' },
  { t: 'poly', pts: FLOOR_DEEP, c: 'floorC', q: 's', l: 'Deepest quarry floor, beneath the present rotunda — reached by the 2022– excavations' },
  { t: 'scarp', pts: QUARRY_RIM + ' 138,196', side: -1, c: 'scarp', q: 's', l: 'Quarried rock face (scarp). Tool marks and half-cut blocks survive on faces like this inside the church.' },
  { t: 'scarp', pts: FLOOR_MID, side: -1, c: 'scarp2', q: 'p', l: 'Inner cut face between working levels' }
];

const golgotha = (q, l) => [
  { t: 'poly', pts: GOLG, c: 'knoll', q: q || 's', l: l || 'A pillar of cracked, flawed stone the quarrymen refused to cut away — the future Golgotha' }
];

const tombs = (q) => [
  { t: 'path', d: 'M196,336 h64 v58 h-64 z', c: 'tombrock', q: q || 's', l: 'The block of rock containing the tomb later venerated as the Tomb of Christ' },
  R(210, 350, 32, 28, 'tomb', q || 's', 'Burial chamber cut back into the western rock face'),
  R(212, 352, 26, 9, 'bench', 's', 'Arcosolium — an arched burial shelf cut along one wall. This shelf is the stone inside the Edicule today.'),
  R(242, 348, 20, 32, 'tomb', 'p', 'Antechamber and forecourt in front of the tomb door'),
  { t: 'circ', cx: 266, cy: 364, r: 7, c: 'stone', q: 'r', l: 'Blocking stone. Round rolling stones are rare in 1st-century Jerusalem; a square stopper is the likelier form.', dis: 1 },
  R(124, 400, 42, 42, 'tomb', q || 's', 'Kokhim tomb west of the rotunda, shown to pilgrims as the Tomb of Joseph of Arimathea'),
  R(108, 404, 16, 9, 'tomb', 's', 'Kokh — a narrow shaft cut for a single body'),
  R(108, 418, 16, 9, 'tomb', 's', 'Kokh'),
  R(108, 432, 16, 9, 'tomb', 's', 'Kokh'),
  R(130, 442, 9, 17, 'tomb', 's', 'Kokh'),
  R(148, 442, 9, 17, 'tomb', 's', 'Kokh'),
  R(276, 240, 32, 26, 'tomb', 'p', 'Rock-cut tomb north of the venerated tomb (traces recorded beneath the north side of the rotunda)'),
  R(196, 506, 28, 24, 'tomb', 'p', 'Further rock-cut tomb in the southern scarp'),
  R(330, 300, 24, 20, 'tomb', 'r', 'Tomb reported by early excavators; position approximate', { dis: 1 })
];

const cardo = () => [
  R(855, 118, 80, 564, 'street', 's', 'Cardo Maximus — the colonnaded main street of Aelia Capitolina, about 12 m wide'),
  { t: 'colrow', x1: 862, y1: 130, x2: 862, y2: 670, n: 20, rad: 5, c: 'column', q: 's', l: 'West colonnade of the Cardo' },
  { t: 'colrow', x1: 928, y1: 130, x2: 928, y2: 670, n: 20, rad: 5, c: 'column', q: 's', l: 'East colonnade of the Cardo' },
  R(936, 118, 62, 564, 'wallP', 'p', 'Shops and porticoes along the east side of the street')
];

const rotundaShell = (q) => [
  { t: 'path', d: ring(CX, CY, 92, 80), fr: 1, c: 'wallS', q: q || 'p', l: 'Outer wall of the Anastasis Rotunda. The lower courses standing in the church today are 4th-century work.' },
  { t: 'path', d: circ(CX, CY, 80), c: 'floor', q: 'p', l: 'Ambulatory floor circling the tomb' },
  { t: 'cols', cx: CX, cy: CY, r: 57, n: 12, rad: 7, c: 'column', q: q || 'p', l: 'Twelve columns, in groups of three, carrying the rotunda' },
  { t: 'piers', cx: CX, cy: CY, r: 57, c: 'wallS', q: q || 'p', l: 'Four pier groups on the diagonals' }
];

const edicule4 = () => [
  { t: 'path', d: 'M204,342 h52 a5,5 0 0 1 5,5 v36 a5,5 0 0 1 -5,5 h-52 z', c: 'rockcut', q: 'r', l: 'The Edicule of Constantine: the hillside was cut away to leave the tomb standing free as an island of rock, then dressed with columns and a conical roof. Known only from texts, pilgrim sketches and souvenir flasks.' },
  R(210, 350, 32, 28, 'tomb', 'p', 'Tomb chamber'),
  R(212, 352, 26, 9, 'bench', 's', 'The burial shelf — surviving original rock'),
  { t: 'cols', cx: CX, cy: CY, r: 34, n: 8, rad: 4, c: 'column', q: 'r', l: 'Columns of the Edicule canopy, reconstructed from the Narbonne model and pilgrim flasks' }
];

// Present-day church. hz = measured height in plan units (5.46 = 1 m), so the
// same list can be drawn as a flat outline or as a solid massing model.
const TODAY_OUTLINE = [
  { t: 'path', d: circ(CX, CY, 92), c: 'today', q: 's', hz: 115, l: 'Rotunda — outer wall to the cornice, about 21 m' },
  { t: 'path', d: circ(CX, CY, 62), c: 'today', q: 's', hz: 186, l: 'Drum and dome of the rotunda — the apex stands about 34 m above the floor' },
  { t: 'path', d: CRUSADER_BODY, c: 'today', q: 's', hz: 110, l: 'Katholikon, transept and ambulatory — vaults about 20 m high' },
  { t: 'path', d: circ(390, 365, 34), c: 'today', q: 's', hz: 150, l: 'Dome of the Katholikon, about 27 m' },
  R(430, 448, 72, 62, 'today', 's', 'Calvary chapels — the rock stands about 4.5 m above the church floor, the chapel roof about 15 m', { hz: 82 }),
  R(366, 528, 108, 88, 'today', 's', 'Parvis — the open south courtyard, paved, no roof', { hz: 2 }),
  R(322, 528, 44, 48, 'today', 's', 'Bell tower — five surviving storeys, about 22 m; two more were taken down after earthquake damage', { hz: 120 }),
  R(512, 386, 76, 70, 'today', 's', 'Chapel of St Helena — below the church floor, reached by 29 steps', { hz: 26 }),
  R(200, 336, 68, 58, 'today', 's', 'The Edicule of 1810 — about 6 m high, 8.3 m long', { hz: 33 })
];

const PERIODS = [
  {
    id: 'quarry', n: '01', label: 'The quarry', date: 'c. 800 – 100 BCE',
    era: 'Iron Age to Late Hellenistic', accent: '#7a6a4e',
    strap: 'A working stone quarry on the hillside outside Jerusalem',
    els: [].concat(bedrock(), quarryBody(), golgotha(), [
      { t: 'chisel', x: 240, y: 300, w: 120, h: 70, c: 'tool', q: 's', l: 'Extraction beds — the rectangular channels cut round each block before it was levered free' },
      { t: 'chisel', x: 424, y: 296, w: 84, h: 58, c: 'tool', q: 's', l: 'Extraction beds on the middle floor' },
      { t: 'chisel', x: 224, y: 416, w: 96, h: 40, c: 'tool', q: 's', l: 'Extraction beds on the deep floor' },
      R(620, 566, 210, 124, 'wallP', 'r', 'Field walls and agricultural terracing east of the quarry, inferred from soil layers'),
      R(196, 300, 90, 84, 'dig', 's', 'Sapienza University trench, 2022– : quarry floor and Iron Age pottery found beneath the rotunda', { dash: 1 }),
      R(332, 234, 72, 60, 'dig', 's', 'Excavation trench, north side', { dash: 1 }),
      T(690, 196, 'OUTSIDE THE CITY', 16),
      { t: 'arrow', x1: 756, y1: 632, x2: 890, y2: 700, c: 'anno', q: 'p', l: 'Towards the Gennath Gate and the city' },
      T(690, 218, 'to the city gate')
    ])
  },
  {
    id: 'garden', n: '02', label: 'Garden and tombs', date: 'c. 100 BCE – 30 CE',
    era: 'Late Second Temple', accent: '#2f6b52',
    strap: 'The worked-out quarry becomes a garden and a cemetery',
    els: [].concat(bedrock(), quarryBody('p'), [
      { t: 'poly', pts: FLOOR_MID, c: 'soil', q: 's', l: 'Ploughsoil and garden earth washed and carried into the quarry hollow. Seeds and pollen from this layer show real cultivation.' },
      { t: 'poly', pts: '300,320 400,330 420,420 330,470 250,450', c: 'soil', q: 's', l: 'Cultivated ground — olive, vine and cereal remains recovered from 2022 onwards' }
    ], golgotha(), tombs(), [
      { t: 'path', d: 'M700,760 L648,528 L700,430 L900,240', c: 'citywall', q: 'r', l: 'The Second Wall. Its course is unknown and fiercely argued; every line on every map of it is an educated guess.', dis: 1, dash: 1 },
      T(660, 500, 'SECOND WALL — disputed', 14),
      T(150, 640, 'outside the walls')
    ])
  },
  {
    id: 'thirdwall', n: '03', label: 'Inside the city', date: 'c. 41 – 44 CE',
    era: 'Agrippa I', accent: '#4a6f9c',
    strap: 'Agrippa\u2019s Third Wall pulls the cemetery inside the growing city',
    els: [].concat(bedrock(), quarryBody('p'), [
      { t: 'poly', pts: FLOOR_MID, c: 'soil', q: 'p', l: 'Garden ground, now being levelled for building' }
    ], golgotha(), tombs('p'), [
      T(60, 96, 'THIRD WALL, 450 m north'),
      R(0, 22, 1000, 36, 'citywall', 'p', 'The Third Wall of Agrippa I — schematic. The real line runs roughly 450 m further north, off this plan. Burial inside the walls was forbidden, so this cemetery closed.'),
      R(560, 176, 124, 92, 'wallP', 'p', 'New houses and workshops spreading over the old quarry ground'),
      R(704, 296, 104, 84, 'wallP', 'p', 'New houses'),
      R(624, 468, 132, 94, 'wallP', 'p', 'New houses'),
      { t: 'path', d: 'M700,760 L648,528 L700,430 L900,240', c: 'citywall', q: 'r', l: 'The Second Wall, now redundant inside the enlarged city', dash: 1, dis: 1 }
    ])
  },
  {
    id: 'hadrian', n: '04', label: 'Aelia Capitolina', date: 'c. 130 – 325 CE',
    era: 'Roman colony', accent: '#8a6d2f',
    strap: 'Hadrian buries the quarry under fill, a platform, a forum and a temple',
    els: [].concat(bedrock(), [
      { t: 'poly', pts: QUARRY_RIM, c: 'fillmass', q: 's', l: 'The quarry hollow packed solid with earth and rubble — the fill that accidentally preserved everything beneath it' },
      R(300, 186, 640, 372, 'fillmass', 'p', 'Made ground raising the whole area to a single level'),
      { t: 'vaults', x: 306, y: 200, w: 330, h: 340, c: 'vault', q: 'p', l: 'Vaults carrying the western part of the platform over the deepest part of the hollow' },
      { t: 'path', d: 'M296,182 h648 v380 h-648 z', c: 'wallS', q: 's', l: 'Retaining wall of the Hadrianic platform. Great blocks of it survive in the foundations of the church and in the Russian Alexander Hospice next door.', hollow: 14 },
      R(380, 296, 148, 138, 'podium', 'p', 'Temple podium, sitting over the buried tombs', { dis: 1 }),
      R(396, 312, 116, 106, 'wallP', 'r', 'Cella of the temple of Aphrodite / Venus. Named by Eusebius and Jerome; never excavated.', { dis: 1 }),
      { t: 'cols', cx: 454, cy: 365, r: 88, n: 20, rad: 6, c: 'column', q: 'r', l: 'Peristyle columns, reconstructed by analogy with other colonial temples' },
      R(640, 220, 200, 240, 'floor', 'p', 'Forum / market square fronting the Cardo'),
      { t: 'colrow', x1: 652, y1: 232, x2: 828, y2: 232, n: 8, rad: 6, c: 'column', q: 'p', l: 'Forum portico' },
      { t: 'colrow', x1: 652, y1: 448, x2: 828, y2: 448, n: 8, rad: 6, c: 'column', q: 'p', l: 'Forum portico' },
      { t: 'ghost', pts: '196,336 260,336 260,394 196,394', c: 'ghost', q: 's', l: 'The tomb, entombed. Its rock survived precisely because the fill sealed and protected it.' },
      { t: 'ghost', pts: GOLG, c: 'ghost', q: 's', l: 'Golgotha, buried up to its neck in the new fill' }
    ], cardo())
  },
  {
    id: 'constantine', n: '05', label: 'The Constantinian complex', date: '325 – c. 380 CE',
    era: 'Late Roman / Early Byzantine', accent: '#7b3f9d',
    strap: 'Three linked buildings climb from the street to the tomb',
    els: [].concat(bedrock(), [
      R(300, 182, 644, 380, 'terrace', 'p', 'The Hadrianic platform, reused as the foundation for the Christian complex'),
      R(800, 300, 52, 130, 'steps', 'r', 'Propylaeum — a monumental stair and triple gate up from the Cardo'),
      { t: 'colrow', x1: 806, y1: 306, x2: 846, y2: 306, n: 4, rad: 5, c: 'column', q: 'r', l: 'Columns of the propylaeum gate' },
      R(710, 280, 92, 170, 'floor', 'p', 'Atrium — an open forecourt'),
      { t: 'colrow', x1: 722, y1: 292, x2: 790, y2: 292, n: 5, rad: 6, c: 'column', q: 'p', l: 'Atrium portico' },
      { t: 'colrow', x1: 722, y1: 438, x2: 790, y2: 438, n: 5, rad: 6, c: 'column', q: 'p', l: 'Atrium portico' },
      R(460, 255, 250, 220, 'floor', 'p', 'The Martyrium — a five-aisled basilica, roughly 46 m by 40 m'),
      { t: 'path', d: 'M458,253 h254 v224 h-254 z', c: 'wallS', q: 'p', l: 'Walls of the Martyrium basilica. Footings and part of the apse survive below the modern streets and in cellars.', hollow: 10 },
      { t: 'colrow', x1: 482, y1: 302, x2: 688, y2: 302, n: 11, rad: 7, c: 'column', q: 'p', l: 'North nave colonnade' },
      { t: 'colrow', x1: 482, y1: 428, x2: 688, y2: 428, n: 11, rad: 7, c: 'column', q: 'p', l: 'South nave colonnade' },
      { t: 'colrow', x1: 482, y1: 276, x2: 688, y2: 276, n: 11, rad: 5, c: 'column', q: 'r', l: 'Outer aisle colonnade' },
      { t: 'colrow', x1: 482, y1: 454, x2: 688, y2: 454, n: 11, rad: 5, c: 'column', q: 'r', l: 'Outer aisle colonnade' },
      { t: 'path', d: 'M460,332 a33,33 0 0 0 0,66 z', c: 'wallP', q: 'p', l: 'Western apse of the Martyrium, ringed by twelve columns — the "hemisphere" Eusebius describes' },
      R(322, 262, 138, 206, 'court', 'p', 'The Triportico — an open courtyard with porticoes on three sides'),
      { t: 'colrow', x1: 336, y1: 274, x2: 446, y2: 274, n: 6, rad: 6, c: 'column', q: 'p', l: 'North portico' },
      { t: 'colrow', x1: 336, y1: 456, x2: 446, y2: 456, n: 6, rad: 6, c: 'column', q: 'p', l: 'South portico' }
    ], cardo(), golgotha('s', 'The Rock of Golgotha, trimmed square and left standing free in the south-east corner of the courtyard'), [
      { t: 'circ', cx: 436, cy: 442, r: 6, c: 'cross', q: 'r', l: 'The jewelled cross set on the rock, described by pilgrims from the 380s onwards' }
    ], rotundaShell('p'), edicule4(), [
      R(136, 340, 14, 50, 'wallP', 'r', 'Western niche or entrance of the rotunda')
    ])
  },
  {
    id: 'modestus', n: '06', label: 'Sack and repair', date: '614 – 626 CE',
    era: 'Sasanian war', accent: '#b0592a',
    strap: 'Fire, then a hurried rebuilding under the abbot Modestus',
    els: [].concat(bedrock(), [
      R(300, 182, 644, 380, 'terrace', 'p', 'The platform'),
      R(710, 280, 92, 170, 'floor', 'p', 'Atrium'),
      R(460, 255, 250, 220, 'burn', 'p', 'The Martyrium: burned in 614, patched up by Modestus with a timber roof, plain masonry and no marble'),
      { t: 'path', d: 'M458,253 h254 v224 h-254 z', c: 'wallP', q: 'p', l: 'Basilica walls, repaired rather than rebuilt', hollow: 10 },
      { t: 'colrow', x1: 482, y1: 302, x2: 688, y2: 302, n: 11, rad: 7, c: 'column', q: 'r', l: 'Nave colonnade re-erected from salvaged shafts' },
      { t: 'colrow', x1: 482, y1: 428, x2: 688, y2: 428, n: 11, rad: 7, c: 'column', q: 'r', l: 'Nave colonnade re-erected' },
      { t: 'path', d: 'M460,332 a33,33 0 0 0 0,66 z', c: 'wallP', q: 'p', l: 'Western apse' },
      R(322, 262, 138, 206, 'court', 'p', 'Courtyard')
    ], cardo(), golgotha(), rotundaShell('p'), [
      { t: 'path', d: ring(CX, CY, 92, 80), fr: 1, c: 'burn', q: 'p', l: 'Rotunda wall: scorched but standing. Fire-cracked 4th-century blocks have been recorded inside the building.' }
    ], edicule4(), [
      R(496, 470, 96, 74, 'wallP', 'r', 'Chapels of the Virgin, St John and the Trinity, added by Modestus. Their positions are guesswork.', { dis: 1 })
    ])
  },
  {
    id: 'hakim', n: '07', label: 'Destruction', date: '638 – 1009 CE',
    era: 'Early Islamic', accent: '#6b6b6b',
    strap: 'Four mostly quiet centuries, then the demolition ordered by al-Hakim',
    els: [].concat(bedrock(), [
      R(300, 182, 644, 380, 'terrace', 'p', 'The platform, now partly built over with houses and shops'),
      { t: 'rubble', x: 460, y: 255, w: 250, h: 220, c: 'rubble', q: 'p', l: 'The Martyrium basilica levelled to its foundations in 1009 and never rebuilt' },
      { t: 'ghost', pts: '460,255 710,255 710,475 460,475', c: 'ghost', q: 's', l: 'Footprint of the lost basilica' },
      { t: 'rubble', x: 322, y: 262, w: 138, h: 206, c: 'rubble', q: 'p', l: 'Courtyard buried under fallen masonry' }
    ], golgotha('p', 'Golgotha: the rock survives, but the chapel over it is thrown down'), [
      { t: 'path', d: ring(CX, CY, 92, 80), fr: 1, c: 'wallRuin', q: 'p', l: 'Rotunda wall pulled down to roughly 11 m. The lower courses were too massive to break apart — which is why they are still standing today.' },
      { t: 'path', d: circ(CX, CY, 80), c: 'rubblef', q: 'p', l: 'Ambulatory choked with debris' },
      { t: 'path', d: 'M204,342 h52 a5,5 0 0 1 5,5 v36 a5,5 0 0 1 -5,5 h-52 z', c: 'hacked', q: 's', l: 'The rock tomb deliberately hacked apart with picks on al-Hakim\u2019s order. Everything above the shelf was destroyed; the Edicule today is a shell around the stump.' },
      R(212, 352, 26, 9, 'bench', 's', 'The burial shelf: the one substantial piece of original rock to survive the wrecking')
    ])
  },
  {
    id: 'monomachos', n: '08', label: 'Monomachos rebuilds', date: '1042 – 1048',
    era: 'Middle Byzantine', accent: '#2f7f8c',
    strap: 'A smaller church: the rotunda restored, the basilica abandoned',
    els: [].concat(bedrock(), [
      R(300, 182, 644, 380, 'terrace', 'p', 'The platform'),
      { t: 'ghost', pts: '460,255 710,255 710,475 460,475', c: 'ghost', q: 's', l: 'The Martyrium was NOT rebuilt. Its site was left as open ground, gardens and eventually houses.' },
      R(322, 262, 138, 206, 'court', 'p', 'Open courtyard east of the rotunda')
    ], golgotha('s', 'Golgotha, now enclosed in a small chapel at the courtyard\u2019s south-east corner'), [
      R(404, 412, 66, 68, 'wallP', 'p', 'Chapel of Calvary'),
      { t: 'path', d: ring(CX, CY, 92, 80), fr: 1, c: 'wallS', q: 's', l: 'Rotunda wall: 4th-century courses below, 11th-century rebuilding above. The join is visible in the masonry today.' },
      { t: 'path', d: circ(CX, CY, 80), c: 'floor', q: 'p', l: 'Ambulatory, now with an upper gallery' },
      { t: 'cols', cx: CX, cy: CY, r: 57, n: 12, rad: 7, c: 'column', q: 's', l: 'Colonnade carrying gallery and dome' },
      { t: 'piers', cx: CX, cy: CY, r: 57, c: 'wallS', q: 's', l: 'Pier groups' },
      { t: 'path', d: 'M310,326 a58,58 0 0 1 0,78 l44,-8 v-62 z', c: 'wallP', q: 'p', l: 'A new eastern apse cut through the rotunda wall. With no basilica left, the altar had to come to the tomb.' },
      R(202, 340, 58, 48, 'edicule', 'r', 'Rebuilt Edicule — masonry, not living rock, wrapped around the hacked remains'),
      R(212, 352, 26, 9, 'bench', 's', 'Surviving burial shelf'),
      R(148, 296, 42, 42, 'wallP', 'p', 'Chapels ringing the ambulatory'),
      R(148, 392, 42, 42, 'wallP', 'p', 'Chapels ringing the ambulatory')
    ])
  },
  {
    id: 'crusader', n: '09', label: 'Crusader unification', date: '1149',
    era: 'Latin Kingdom of Jerusalem', accent: '#a8323b',
    strap: 'One roof at last: rotunda, Calvary and tomb joined in a single church',
    els: [].concat(bedrock(), [
      R(300, 182, 644, 380, 'terrace', 'p', 'The platform'),
      { t: 'ghost', pts: '460,255 710,255 710,475 460,475', c: 'ghost', q: 'p', l: 'Site of the vanished Martyrium, now streets and houses' },
      { t: 'urban', x: 560, y: 200, w: 380, h: 300, c: 'urban', q: 'p', l: 'The Patriarch\u2019s quarter and the canons\u2019 buildings, built over the site of the vanished basilica' }
    ], rotundaShell('s'), [
      { t: 'path', d: circ(CX, CY, 80), c: 'floor', q: 's', l: 'Ambulatory' },
      R(202, 340, 58, 48, 'edicule', 'r', 'The Edicule inherited from the 11th-century rebuilding, refurbished by the Crusaders. Masonry, not living rock, wrapped around the hacked remains of the tomb.'),
      R(212, 352, 26, 9, 'bench', 's', 'The burial shelf inside — the surviving original rock'),
      { t: 'path', d: CRUSADER_BODY, c: 'floor', q: 's', l: 'The new Romanesque church — transept, choir and ambulatory, built where the open courtyard had been' },
      { t: 'path', d: 'M320,280 H460 a86,86 0 0 1 0,170 H320 Z', c: 'wallS', q: 's', l: 'Walls of the Crusader church. This is the building you walk through today.', hollow: 12 },
      { t: 'cols', cx: 452, cy: 365, r: 44, n: 8, rad: 8, c: 'column', q: 's', l: 'Piers of the choir and ambulatory' },
      R(478, 296, 30, 28, 'wallP', 's', 'Radiating chapel — St Longinus'),
      R(492, 350, 30, 30, 'wallP', 's', 'Radiating chapel — the Division of the Robes'),
      R(478, 406, 30, 28, 'wallP', 's', 'Radiating chapel — the Mocking'),
      R(430, 448, 72, 62, 'floor', 's', 'Calvary chapel floor, at first-floor level above the church'),
      { t: 'path', d: 'M430,448 h72 v62 h-72 z', c: 'wallS', q: 's', l: 'Calvary: the rock enclosed in a two-bay chapel at first-floor level, reached by a stair from the church', hollow: 10 },
      { t: 'poly', pts: '440,458 470,454 482,472 476,496 448,502 436,480', c: 'knoll', q: 's', l: 'The Rock of Golgotha inside its chapel' },
      R(512, 386, 76, 70, 'wallP', 'p', 'Chapel of St Helena, cut down into the old quarry and reached by a long stair', { dash: 1 }),
      R(366, 528, 108, 88, 'court', 's', 'Parvis — the paved south courtyard'),
      R(364, 502, 112, 26, 'wallS', 's', 'South facade with twin portals — the great entrance front, still the only way in'),
      R(326, 532, 36, 40, 'floor', 's', 'Bell tower ground stage'),
      R(322, 528, 44, 48, 'wallS', 's', 'Bell tower, finished about 1170'),
      R(476, 528, 40, 44, 'wallP', 'p', 'Chapel of the Franks and monastic buildings')
    ])
  },
  {
    id: 'komnenos', n: '10', label: 'Fire and rebuilding', date: '1808 – 1810',
    era: 'Ottoman', accent: '#5a6b1f',
    strap: 'The rotunda burns; a Greek architect rebuilds it, and the Edicule',
    els: [].concat(bedrock(), [
      R(300, 182, 644, 380, 'terrace', 'p', 'The platform'),
      { t: 'urban', x: 560, y: 200, w: 380, h: 320, c: 'urban', q: 'p', l: 'Convents and houses built hard up against the church' },
      { t: 'path', d: ring(CX, CY, 92, 80), fr: 1, c: 'wallS', q: 's', l: 'Rotunda wall: still the 4th- and 11th-century masonry, refaced above after the fire' },
      { t: 'path', d: circ(CX, CY, 80), c: 'floor', q: 's', l: 'Ambulatory' },
      { t: 'cols', cx: CX, cy: CY, r: 57, n: 12, rad: 9, c: 'addition', q: 's', l: 'Komnenos\u2019s heavier piers, thickened after the fire cracked the medieval shafts' },
      R(200, 336, 68, 58, 'addition', 's', 'The Edicule of 1810 — the pink-and-cream Ottoman baroque shell that stands today, built by Nikolaos Komnenos of Mytilene'),
      R(212, 352, 26, 9, 'bench', 's', 'The burial shelf, still inside'),
      { t: 'path', d: CRUSADER_BODY, c: 'floor', q: 's', l: 'Crusader choir' },
      { t: 'path', d: 'M320,280 H460 a86,86 0 0 1 0,170 H320 Z', c: 'wallS', q: 's', l: 'Crusader walls, which survived the fire', hollow: 12 },
      { t: 'cols', cx: 452, cy: 365, r: 44, n: 8, rad: 8, c: 'column', q: 's', l: 'Crusader choir piers, still standing' },
      R(478, 296, 30, 28, 'wallP', 's', 'Radiating chapel — St Longinus'),
      R(492, 350, 30, 30, 'wallP', 's', 'Radiating chapel — the Division of the Robes'),
      R(478, 406, 30, 28, 'wallP', 's', 'Radiating chapel — the Mocking'),
      { t: 'path', d: 'M336,298 h108 v134 h-108 z', c: 'addition', q: 's', l: 'The Katholikon: Komnenos walls the Crusader choir off as an enclosed Greek Orthodox church, cutting the building in two', hollow: 9, dis: 1 },
      R(430, 448, 72, 62, 'floor', 's', 'Calvary chapel floor'),
      { t: 'path', d: 'M430,448 h72 v62 h-72 z', c: 'wallS', q: 's', l: 'Calvary chapels, refitted', hollow: 10 },
      { t: 'poly', pts: '440,458 470,454 482,472 476,496 448,502 436,480', c: 'knoll', q: 's', l: 'The Rock of Golgotha' },
      R(512, 386, 76, 70, 'wallP', 's', 'Chapel of St Helena', { dash: 1 }),
      R(366, 528, 108, 88, 'court', 's', 'Parvis'),
      R(364, 502, 112, 26, 'wallS', 's', 'South facade. The eastern of the two doors had been walled up centuries before.'),
      R(326, 532, 36, 40, 'floor', 's', 'Bell tower ground stage'),
      R(322, 528, 44, 48, 'wallS', 's', 'Bell tower, cut down to two storeys after earthquake damage')
    ])
  },
  {
    id: 'today', n: '11', label: 'The church today', date: '1852 – present',
    era: 'The Status Quo, and the new excavations', accent: '#b8452f',
    strap: 'A frozen settlement, a rescued Edicule, and the floor finally opened',
    els: [].concat(bedrock(), [
      { t: 'urban', x: 540, y: 180, w: 400, h: 360, c: 'urban', q: 'p', l: 'Convents, chapels and the Muristan quarter, standing over the Martyrium site' },
      { t: 'path', d: ring(CX, CY, 92, 80), fr: 1, c: 'wallS', q: 's', l: 'Rotunda wall — 4th, 11th and 19th-century masonry in a single elevation' },
      { t: 'path', d: circ(CX, CY, 80), c: 'floor', q: 's', l: 'Ambulatory' },
      { t: 'cols', cx: CX, cy: CY, r: 57, n: 12, rad: 9, c: 'column', q: 's', l: 'Rotunda piers and columns' },
      R(200, 336, 68, 58, 'addition', 's', 'The Edicule, structurally restored in 2016–17 by the National Technical University of Athens after decades held together by a British iron cage'),
      R(212, 352, 26, 9, 'bench', 's', 'The burial shelf, uncovered for sixty hours in October 2016. Mortar beneath it dated to the middle of the 4th century.'),
      { t: 'path', d: CRUSADER_BODY, c: 'floor', q: 's', l: 'Katholikon, choir and ambulatory' },
      { t: 'path', d: 'M320,280 H460 a86,86 0 0 1 0,170 H320 Z', c: 'wallS', q: 's', l: 'Crusader walls', hollow: 12 },
      { t: 'cols', cx: 452, cy: 365, r: 44, n: 8, rad: 8, c: 'column', q: 's', l: 'Crusader choir piers' },
      R(478, 296, 30, 28, 'wallP', 's', 'Radiating chapel — St Longinus'),
      R(492, 350, 30, 30, 'wallP', 's', 'Radiating chapel — the Division of the Robes'),
      R(478, 406, 30, 28, 'wallP', 's', 'Radiating chapel — the Mocking'),
      { t: 'path', d: 'M336,298 h108 v134 h-108 z', c: 'addition', q: 's', l: 'Katholikon of the Greek Orthodox Patriarchate — walled off from the ambulatory, as it is today', hollow: 9 },
      R(430, 448, 72, 62, 'floor', 's', 'Calvary chapel floor'),
      { t: 'path', d: 'M430,448 h72 v62 h-72 z', c: 'wallS', q: 's', l: 'Calvary: Greek Orthodox chapel to the east, Roman Catholic chapel to the west', hollow: 10 },
      { t: 'poly', pts: '440,458 470,454 482,472 476,496 448,502 436,480', c: 'knoll', q: 's', l: 'The Rock of Golgotha, visible through glass beside the altar' },
      R(512, 386, 76, 70, 'wallP', 's', 'Chapel of St Helena and St Vartan, where the ancient quarry face and the "ship" drawing can be seen', { dash: 1 }),
      R(366, 528, 108, 88, 'court', 's', 'Parvis'),
      R(364, 502, 112, 26, 'wallS', 's', 'South facade: one door in use. The immovable ladder stands on the ledge above.'),
      R(326, 532, 36, 40, 'floor', 's', 'Bell tower ground stage'),
      R(322, 528, 44, 48, 'wallS', 's', 'Bell tower'),
      R(196, 300, 90, 84, 'dig', 's', 'Sapienza University of Rome excavation, 2022– : quarry floor, garden soil and Constantinian foundations', { dash: 1 }),
      R(330, 300, 100, 60, 'dig', 's', 'Excavation trench beneath the Katholikon floor', { dash: 1 }),
      R(408, 250, 72, 48, 'dig', 's', 'Excavation trench, north ambulatory', { dash: 1 })
    ])
  }
];


// ── present-day city around the church (for the modern-map overlay) ─────────
// hz = height in plan units (5.46 units = 1 m), from published building heights.
const M = (x, y, w, h, hz, l, q) => ({ t: 'rect', x: x, y: y, w: w, h: h, c: 'modBlock', hz: hz, q: q || 's', l: l });
const MODERN = [
  { t: 'rect', x: 56, y: 0, w: 38, h: 760, c: 'modStreet', q: 's', l: 'Christian Quarter Road — the modern street west of the church' },
  { t: 'rect', x: 862, y: 0, w: 46, h: 760, c: 'modStreet', q: 's', l: 'Souq Khan el-Zeit — the market street that runs along the line of the Roman Cardo' },
  { t: 'rect', x: 0, y: 700, w: 1000, h: 34, c: 'modStreet', q: 's', l: 'David Street — the main east–west bazaar of the Old City' },
  { t: 'rect', x: 94, y: 628, w: 300, h: 26, c: 'modStreet', q: 's', l: 'St Helena Road and the lane into the parvis — the way most visitors arrive' },
  { t: 'rect', x: 560, y: 556, w: 250, h: 26, c: 'modStreet', q: 's', l: 'Souq ed-Dabbagha, along the north edge of the Muristan' },
  M(118, 148, 116, 104, 66, 'Coptic Patriarchate and St Helena Coptic church'),
  M(60, 296, 74, 178, 66, 'Greek Orthodox Patriarchate buildings'),
  M(248, 206, 28, 28, 142, 'Minaret of the Khanqah al-Salahiyya, built 1417 — 26 m'),
  M(292, 146, 262, 100, 66, 'Blocks of the Christian Quarter north of the church'),
  M(586, 466, 96, 88, 82, 'Lutheran Church of the Redeemer, 1898'),
  M(592, 470, 34, 34, 210, 'Bell tower of the Church of the Redeemer — about 38 m, the tallest thing on this plan'),
  M(700, 372, 104, 90, 87, 'Alexander Nevsky Church and the Russian Alexander Hospice, over the Hadrianic retaining wall'),
  M(560, 596, 250, 96, 60, 'The Muristan — 19th-century market blocks over the Crusader Hospital of St John'),
  M(816, 372, 44, 320, 60, 'Souq blocks along Khan el-Zeit'),
  M(912, 120, 88, 560, 60, 'Blocks east of the souq'),
  M(394, 636, 26, 26, 131, 'Minaret of the Mosque of Omar, 1465 — 24 m'),
  M(292, 660, 260, 36, 60, 'Buildings south of the parvis'),
  M(512, 318, 78, 68, 33, 'Deir es-Sultan — the Ethiopian monastery on the roof of the Chapel of St Helena'),
  M(140, 490, 130, 116, 60, 'Greek and Armenian convent buildings west of the rotunda'),
  { t: 'txt', x: 616, y: 620, text: 'MURISTAN', s: 14, c: 'modtxt' },
  { t: 'txt', x: 100, y: 690, text: 'CHRISTIAN QTR RD', s: 12, c: 'modtxt' },
  { t: 'txt', x: 620, y: 726, text: 'DAVID STREET', s: 13, c: 'modtxt' },
  { t: 'txt', x: 700, y: 108, text: 'SOUQ KHAN EL-ZEIT', s: 12, c: 'modtxt' }
];

export { PERIODS, TODAY_OUTLINE, MODERN };
