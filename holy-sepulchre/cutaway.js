// Bedrock stratigraphy cutaway — a west–east section through the site, and a
// city-scale map of the shifting wall circuits.
//
// SECTION: viewBox 1000 x 620, west at left. Vertical and horizontal scale are
// both about 7 px = 1 m. Datum lines: quarry floor y=400, pre-quarry rock
// surface y=330, west hill crest y=250, rock base y=560.
//
// Each shape carries k[0..3], one entry per stage (AD 33 / 135 / 326 / 1149).
// null = the shape does not exist in that stage. Where two neighbouring stages
// both have points, the renderer interpolates between them, so dragging the
// stage slider morphs one model into the next. Point counts must match.

const K = (a, b, c, d) => [a, b, c, d];

const CUT_STAGES = [
  {
    n: 'I', date: 'AD 33', label: 'An open quarry on the edge of town',
    text: 'A limestone quarry, worked out and abandoned perhaps a century before, lying outside the city wall on the north-west. Its floors are stepped down through the rock; soil has collected in the hollows and is being cultivated. One pillar of cracked, flawed stone stands where the quarrymen refused to cut it. Into the west face, someone wealthy has recently hewn a new bench tomb with an unused burial shelf.',
    verse: 'John 19:41 — “in the place where he was crucified there was a garden; and in the garden a new sepulchre.”'
  },
  {
    n: 'II', date: 'AD 135', label: 'Hadrian buries the site',
    text: 'Aelia Capitolina is laid out over the ruins of Jerusalem, and the new grid runs straight across the old quarry. The hollow is packed with earth and rubble to bring it up to street level, a monumental retaining platform is raised over the fill, and a temple precinct is built on the terrace. Tomb, garden and rock pillar all disappear under the made ground — and, in disappearing, are preserved and their position remembered.',
    verse: 'Eusebius, Life of Constantine 3.26 — the site “covered over with earth” and given a pagan shrine.'
  },
  {
    n: 'III', date: 'AD 326', label: 'Constantine cuts the tomb free',
    text: 'The temple is pulled down and the fill dug out. Against expectation the tomb is found under it. Constantine’s masons then do something drastic: rather than tunnel to the cave, they chisel away all the rock around it, so that the burial chamber is left standing free on the new church floor as an isolated block of stone. A small shrine is built over the block, and a great domed rotunda — the Anastasis — is raised around the shrine.',
    verse: 'Eusebius, Life of Constantine 3.28 — the cave appeared “contrary to all expectation”.'
  },
  {
    n: 'IV', date: 'AD 1149', label: 'One roof over everything',
    text: 'For eight centuries Golgotha, the tomb and the courtyard were separate buildings around an open court. The Crusaders roof the court over with a Romanesque nave and choir, so that for the first time the rock of Calvary, the Edicule and the crypt where the Cross was said to be found stand inside a single church. That is the building you walk into today: a quarry, a tomb and a hill, enclosed.',
    verse: 'Dedication inscription, 15 July 1149 — fifty years to the day after the city was taken.'
  }
];

const CUT = [
  { id: 'bedrock', q: 's', l: 'Meleke limestone — the soft, creamy bed Jerusalem is quarried from and built of. Everything above it is human.',
    fill: '#ded1b2', stroke: '#a8946f', sw: 1.4,
    k: K('40,392 140,396 262,400 418,400 424,366 496,360 504,400 664,404 706,404 706,306 830,296 960,290 960,520 40,520',
         '40,392 140,396 262,400 418,400 424,366 496,360 504,400 664,404 706,404 706,306 830,296 960,290 960,520 40,520',
         '40,392 140,396 262,400 418,400 424,366 496,360 504,400 664,404 706,404 706,306 830,296 960,290 960,520 40,520',
         '40,392 140,396 262,400 418,400 424,366 496,360 504,400 664,404 706,404 706,306 830,296 960,290 960,520 40,520') },

  { id: 'westhill', q: 'p', l: 'The hillside west of the quarry, still standing at its natural height',
    fill: '#e8dfcb', stroke: '#a8946f', sw: 1.4,
    k: K('40,250 132,262 140,396 40,392', '40,250 132,262 140,396 40,392', '40,250 132,262 140,396 40,392', '40,250 132,262 140,396 40,392') },

  { id: 'scarpW', q: 's', l: 'Quarried rock face. Tool marks and half-cut blocks survive on faces like this inside the church today.',
    fill: 'none', stroke: '#6f5f42', sw: 3,
    k: K('140,262 140,396', '140,262 140,396', '140,262 140,396', '140,262 140,396'), line: 1 },

  { id: 'shelf', q: 's', l: 'The block of rock holding the tomb. In AD 33 it is part of the hillside; by 326 it has been cut away on every side.',
    fill: '#cdb994', stroke: '#6b5b3e', sw: 1.8,
    k: K('140,330 258,332 262,400 200,400 168,400 140,396',
         '140,330 258,332 262,400 200,400 168,400 140,396',
         '176,330 250,332 254,400 216,400 192,400 176,396',
         '176,330 250,332 254,400 216,400 192,400 176,396') },

  { id: 'chamber', q: 's', l: 'The burial chamber — a small room cut back into the rock, with room for one body on a shelf',
    fill: '#302a22', stroke: '#15120e', sw: 1,
    k: K('204,352 250,354 250,392 204,390', '204,352 250,354 250,392 204,390',
         '200,352 244,354 244,392 200,390', '200,352 244,354 244,392 200,390') },

  { id: 'bench', q: 's', l: 'The burial shelf itself — the stone inside the Edicule today. Mortar under it dated to the mid-4th century when it was uncovered in 2016.',
    fill: '#efe2c6', stroke: '#15120e', sw: 1,
    k: K('208,358 236,359 236,368 208,367', '208,358 236,359 236,368 208,367', '206,358 234,359 234,368 206,367', '206,358 234,359 234,368 206,367') },

  { id: 'stone', q: 'r', l: 'Blocking stone across the door. Round rolling stones are rare in 1st-century Jerusalem; a square stopper is the likelier form.', dis: 1,
    fill: '#8c7a5a', stroke: '#3b3225', sw: 1,
    k: K('250,366 264,362 266,386 252,390', null, null, null) },

  { id: 'soil1', q: 'p', l: 'Garden soil collected in the abandoned quarry floor and cultivated — the garden of John 19:41',
    fill: '#8fa06a', stroke: 'none', sw: 0, op: 0.85,
    k: K('262,390 418,390 418,400 262,400', null, null, null) },

  { id: 'soil2', q: 'p', l: 'Cultivated soil in the eastern hollow of the quarry',
    fill: '#8fa06a', stroke: 'none', sw: 0, op: 0.85,
    k: K('504,392 700,396 700,404 504,400', null, null, null) },

  { id: 'golg', q: 's', l: 'The pillar of flawed rock left standing in the quarry — Golgotha. About 5 m above the quarry floor.',
    fill: '#b9a37c', stroke: '#5e4f36', sw: 2.2,
    k: K('418,400 424,366 496,360 504,400', '418,400 424,366 496,360 504,400', '418,400 424,366 496,360 504,400', '418,400 424,366 496,360 504,400') },

  { id: 'fill', q: 's', l: 'Hadrian’s fill: earth, quarry chips and rubble packed into the hollow to bring it up to the new street level. It sealed the site — and preserved it.',
    fill: '#cbbb9a', stroke: '#7d6f52', sw: 1.2, dash: '6 4',
    k: K(null, '140,396 706,404 706,330 140,330', '520,402 706,404 706,330 520,330', '520,402 706,404 706,330 520,330') },

  { id: 'podium', q: 'p', l: 'The paved terrace over the fill — a monumental platform, the largest single engineering act on this site',
    fill: '#d8caa8', stroke: '#5b5040', sw: 1.6,
    k: K(null, '160,330 940,326 940,316 160,320', '500,330 940,326 940,316 500,320', '500,330 940,326 940,316 500,320') },

  { id: 'podiumwall', q: 'p', l: 'Face of the Hadrianic retaining wall. Courses of it still stand under the Russian Alexander Hospice, east of the church.',
    fill: '#c2b391', stroke: '#5b5040', sw: 1.6,
    k: K(null, '146,320 168,320 168,404 146,404', null, null) },

  { id: 'aphrodite', q: 'r', l: 'The temple on the terrace — Aphrodite or Venus, according to Eusebius and Jerome. Nothing of it has been found; its plan and position are reconstruction.', dis: 1,
    fill: '#bfae8b', stroke: '#4a4032', sw: 2,
    k: K(null, '600,316 762,314 762,250 600,252', null, null) },

  { id: 'aphroof', q: 'r', l: 'Roof of the temple precinct — wholly reconstructed',
    fill: '#a89573', stroke: '#4a4032', sw: 2,
    k: K(null, '588,252 774,250 681,212', null, null) },

  { id: 'chisel', q: 's', l: 'Where the rock was cut away. Constantine’s masons removed the whole shelf around the tomb rather than tunnel to it — the boldest decision in the history of the site.',
    fill: 'none', stroke: '#b8452f', sw: 2, dash: '7 5',
    k: K(null, null, '140,396 176,396 176,330 250,332 254,400 262,400', '140,396 176,396 176,330 250,332 254,400 262,400'), line: 1, op: 0.75 },

  { id: 'cfloor', q: 's', l: 'Floor of the Anastasis, laid on the cleared quarry bottom',
    fill: '#f2ead8', stroke: '#c8b99b', sw: 1.2,
    k: K(null, null, '140,396 520,400 520,390 140,390', '140,396 520,400 520,390 140,390') },

  { id: 'rotW', q: 's', l: 'West wall of the Rotunda — 4th-century masonry still standing to gallery height today',
    fill: '#2b2620', stroke: '#15120e', sw: 1,
    k: K(null, null, '148,392 172,392 172,242 148,242', '148,392 172,392 172,242 148,242') },

  { id: 'rotE', q: 's', l: 'East wall of the Rotunda',
    fill: '#2b2620', stroke: '#15120e', sw: 1,
    k: K(null, null, '296,394 320,394 320,242 296,242', '296,394 320,394 320,242 296,242') },

  { id: 'pier1', q: 's', l: 'Colonnade carrying the gallery and the dome',
    fill: '#3a3329', stroke: '#15120e', sw: 1,
    k: K(null, null, '196,392 210,392 210,300 196,300', '196,392 210,392 210,300 196,300') },

  { id: 'pier2', q: 's', l: 'Colonnade carrying the gallery and the dome',
    fill: '#3a3329', stroke: '#15120e', sw: 1,
    k: K(null, null, '258,392 272,392 272,300 258,300', '258,392 272,392 272,300 258,300') },

  { id: 'dome', q: 'r', l: 'The dome over the tomb — about 34 m above the floor. Its 4th-century form is reconstruction; the present dome is of 1868 and 1997.',
    fill: 'none', stroke: '#5a5044', sw: 7,
    k: K(null, null, '148,242 158,206 186,176 234,164 282,176 310,206 320,242', '148,242 158,206 186,176 234,164 282,176 310,206 320,242'), line: 1 },

  { id: 'edicule', q: 'r', l: 'The shrine built over the freed rock. Rebuilt after 1009, again in 1810, and structurally rescued in 2016–17.',
    fill: 'none', stroke: '#8a4b3c', sw: 3,
    k: K(null, null, '172,392 256,392 256,318 172,318', '166,392 260,392 260,306 166,306'), line: 1 },

  { id: 'nave', q: 's', l: 'The Crusader nave and choir, thrown over what had been an open courtyard between the Rotunda and Calvary',
    fill: 'rgba(200,190,164,0.5)', stroke: '#2b2620', sw: 2.4,
    k: K(null, null, null, '330,400 620,404 620,250 330,248') },

  { id: 'naveroof', q: 'p', l: 'Romanesque roof and the dome over the crossing, about 27 m above the floor',
    fill: '#b7a888', stroke: '#2b2620', sw: 2,
    k: K(null, null, null, '318,248 632,250 476,196') },

  { id: 'calvary', q: 's', l: 'Calvary: the rock enclosed in a chapel at first-floor level, reached by a stair from the church floor',
    fill: 'rgba(214,204,176,0.55)', stroke: '#2b2620', sw: 2,
    k: K(null, null, null, '414,368 514,362 514,300 414,304') },

  { id: 'helena', q: 'p', l: 'Chapel of St Helena and St Vartan, cut down into the old quarry. The ancient quarry face and the pilgrim “ship” drawing are on its walls.',
    fill: '#e8dfcb', stroke: '#4a4238', sw: 2, dash: '6 4',
    k: K(null, null, null, '626,404 706,406 706,462 626,458') },

  { id: 'helenastair', q: 'p', l: 'The long stair down to the crypt — twenty-nine steps',
    fill: 'none', stroke: '#4a4238', sw: 2,
    k: K(null, null, null, '600,404 626,458'), line: 1 },

  { id: 'cardo', q: 's', l: 'The Cardo Maximus, the colonnaded main street of Aelia Capitolina — today the Souq Khan el-Zeit',
    fill: '#d6d1c4', stroke: '#8f897c', sw: 1.2,
    k: K(null, '830,296 960,290 960,280 830,286', '830,296 960,290 960,280 830,286', '830,296 960,290 960,280 830,286') }
];

// Labels: st = which stages show this label (1-indexed)
const CUT_LABELS = [
  { x: 336, y: 424, text: 'Quarry floor', st: [1], a: 'middle' },
  { x: 340, y: 380, text: 'Garden soil', st: [1], a: 'middle' },
  { x: 200, y: 344, text: 'New bench tomb', st: [1], a: 'middle' },
  { x: 460, y: 350, text: 'The flawed pillar — Golgotha', st: [1], a: 'middle' },
  { x: 84, y: 300, text: 'Hillside', st: [1, 2, 3, 4], a: 'middle' },
  { x: 420, y: 372, text: 'Earth and rubble fill', st: [2], a: 'middle' },
  { x: 300, y: 340, text: 'Tomb and garden sealed beneath', st: [2], a: 'middle' },
  { x: 640, y: 336, text: 'Hadrian’s retaining platform', st: [2], a: 'middle' },
  { x: 681, y: 238, text: 'Temple of Aphrodite', st: [2], a: 'middle' },
  { x: 330, y: 424, text: 'Fill dug out', st: [3], a: 'middle' },
  { x: 214, y: 424, text: 'Rock cut away on every side', st: [3], a: 'middle' },
  { x: 234, y: 200, text: 'Anastasis Rotunda', st: [3, 4], a: 'middle' },
  { x: 214, y: 300, text: 'Edicule', st: [3], a: 'middle' },
  { x: 213, y: 290, text: 'Edicule', st: [4], a: 'middle' },
  { x: 460, y: 352, text: 'Rock of Golgotha', st: [3, 4], a: 'middle' },
  { x: 476, y: 228, text: 'Crusader nave, 1149', st: [4], a: 'middle' },
  { x: 464, y: 326, text: 'Calvary chapel', st: [4], a: 'middle' },
  { x: 666, y: 480, text: 'Chapel of St Helena', st: [4], a: 'middle' },
  { x: 893, y: 268, text: 'Cardo Maximus', st: [2, 3, 4], a: 'middle' },
  { x: 52, y: 506, text: 'WEST', st: [1, 2, 3, 4], a: 'start' },
  { x: 948, y: 506, text: 'EAST', st: [1, 2, 3, 4], a: 'end' }
];


// ── City wall circuits ─────────────────────────────────────────────────────
// Schematic map of Jerusalem, viewBox 1000 x 700, north up. Positions are
// relative and approximate: this is a locator diagram, not a survey.

const CITY = {
  church: { x: 372, y: 332, r: 9 },
  golgotha: { x: 372, y: 332 },
  landmarks: [
    { x: 600, y: 400, w: 168, h: 128, text: 'Temple Mount', sub: 'Haram al-Sharif' },
    { x: 246, y: 440, w: 54, h: 58, text: 'Citadel', sub: 'Herod’s palace' }
  ],
  gates: [
    { x: 520, y: 196, text: 'Damascus Gate' },
    { x: 214, y: 452, text: 'Jaffa Gate' },
    { x: 800, y: 420, text: 'Golden Gate' }
  ],
  circuits: [
    {
      id: 'first', label: 'First Wall', date: 'Hasmonean, 2nd c. BC',
      colour: '#7a6a55', closed: false, q: 'p', lx: 470, ly: 516, la: 'middle',
      pts: '246,470 300,486 420,492 560,496 700,500 800,470',
      note: 'The old south-western circuit, running from the Citadel east along the line of the present David Street. The quarry lay well outside it.'
    },
    {
      id: 'second', label: 'Second North Wall', date: 'standing in AD 33',
      colour: '#b8452f', closed: false, q: 'r', dis: 1, lx: 662, ly: 296, la: 'start',
      pts: '286,462 352,412 424,382 496,354 570,326 648,302',
      note: 'The wall that decides the question. Its exact line has never been found and is argued over, but every proposed course runs south and east of the quarry — which is to say the crucifixion and burial happened outside the gate, as Hebrews 13:12 says, and the site only came inside the city later.'
    },
    {
      id: 'third', label: 'Third Wall', date: 'Herod Agrippa I, AD 41–44',
      colour: '#5a6b1f', closed: false, q: 'p', lx: 470, ly: 146, la: 'middle',
      pts: '236,352 258,258 320,190 470,156 640,158 762,196 800,268',
      note: 'Begun about a decade after the crucifixion. It swept the whole northern suburb — including the old quarry — inside the city for the first time. Nothing about the ground changed; the boundary moved.'
    },
    {
      id: 'ottoman', label: 'Ottoman wall', date: 'Suleiman the Magnificent, 1538',
      colour: '#3f5a70', closed: true, q: 's', lx: 240, ly: 236, la: 'start',
      pts: '212,300 240,244 520,196 706,214 802,268 812,470 690,566 470,592 246,540 200,430',
      note: 'The wall you see today, and the reason the church appears to sit in the middle of the Old City. It is fifteen centuries younger than the events inside it.'
    }
  ]
};

export { CUT, CUT_STAGES, CUT_LABELS, CITY };
