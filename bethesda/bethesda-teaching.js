// Teaching layer: scripture hotspots, clickable essay terms, textual notes,
// takeaway card, and the stratigraphic column for the section view.

// ---- scripture & find hotspots ----------------------------------------
export const PINS = {
  herodian: [
    {
      x: 26, y: 15, z: 13, tilt: 44, zoom: 1.4,
      where: "Portico II — the north colonnade",
      ref: "John 5:2–3",
      kjv: "Now there is at Jerusalem by the sheep market a pool, which is called in the Hebrew tongue Bethesda, having five porches. In these lay a great multitude of impotent folk, of blind, halt, withered, waiting for the moving of the water.",
      gloss: "The covered walkways were full of sick people — and they were waiting for one thing: for the water to move."
    },
    {
      x: 80, y: 108, z: -6, tilt: 34, zoom: 1.5,
      where: "The corner stair into the Lower Pool",
      ref: "John 5:7",
      kjv: "Sir, I have no man, when the water is troubled, to put me into the pool: but while I am coming, another steppeth down before me.",
      gloss: "Look at the drop. The basin is cut thirteen metres into rock, and the only way in is a stair in the corner. A man who cannot walk cannot get down it — and by the time he is halfway, someone quicker has already reached the water."
    },
    {
      x: 56, y: 148, z: 1, tilt: 34, zoom: 1.35,
      where: "The way out, south toward the Sheep Gate and the Temple",
      ref: "John 5:8–9",
      kjv: "Rise, take up thy bed, and walk. And immediately the man was made whole, and took up his bed, and walked.",
      gloss: "No water, no waiting, no one to help him in. A command, and he walks out of the sanctuary carrying the mat he had been lying on."
    },
    {
      x: 120, y: 74, z: 2, tilt: 40, zoom: 1.5,
      where: "The eastern basins and grottoes",
      ref: "John 5:3–4",
      kjv: "…waiting for the moving of the water. For an angel went down at a certain season into the pool, and troubled the water: whosoever then first after the troubling of the water stepped in was made whole of whatsoever disease he had.",
      gloss: "This is the verse the earliest manuscripts do not have — see the note on the text below the essay. What the archaeology does show is a row of small basins here, fed by an intermittent trickle that would surge without warning."
    }
  ],
  aelia: [
    {
      x: 108, y: 104, z: 4.5, tilt: 42, zoom: 1.5,
      where: "The votive deposit on the sanctuary terrace",
      ref: "A find, not a text",
      kjv: "Pompeia Lucilia dedicated this to the god.",
      gloss: "A carved marble foot, inscribed in Greek by a woman giving thanks for a cure. Dozens of offerings like it came out of these caves — feet, limbs, eyes — dedicated to Asclepius and Serapis. The hope at Bethesda outlived the God it was addressed to."
    }
  ]
};

// ---- the five porticoes, numbered -------------------------------------
export const PORTICOES = [
  { n: "I", x: 16, y: 70, z: 9, t: "West" },
  { n: "II", x: 54, y: 15, z: 9, t: "North" },
  { n: "III", x: 95, y: 70, z: 9, t: "East" },
  { n: "IV", x: 56, y: 125, z: 9, t: "South" },
  { n: "V", x: 76, y: 63.5, z: 9, t: "On the dam" }
];

// ---- clickable terms in the essays ------------------------------------
// t must be an exact substring of the essay text; the first match wins.
export const TERMS = {
  iron: [
    { t: "a dam was thrown across the valley", x: 54, y: 63.5, z: 1, label: "The dam across the Beth Zeta valley", tilt: 34, zoom: 1.5 },
    { t: "great rectangular basin", x: 54, y: 41, z: -6, label: "The Upper Pool, cut some 13 m into rock", tilt: 30, zoom: 1.4 },
    { t: "Stone stairs descended into the corners", x: 32, y: 27, z: -6, label: "Corner stair down to the pool floor", tilt: 26, zoom: 1.6 },
    { t: "channel cut into the bedrock", x: 55, y: 140, z: 0, label: "The rock-cut conduit toward the Temple", tilt: 46, zoom: 1.5 },
    { t: "pockmarked with quarries", x: 116, y: 23, z: 0, label: "Quarries on the northern slope", tilt: 44, zoom: 1.4 }
  ],
  hasmonean: [
    { t: "a second enormous basin", x: 54, y: 91, z: -6, label: "The Lower Pool", tilt: 30, zoom: 1.4 },
    { t: "separated by the broad dam", x: 54, y: 63.5, z: 1, label: "The dam, now a causeway between two pools", tilt: 34, zoom: 1.5 },
    { t: "sluices in the dam wall", x: 54, y: 63.5, z: 0.6, label: "Sluice from the upper pool to the lower", tilt: 40, zoom: 1.7 },
    { t: "small stepped basins", x: 118, y: 70, z: 1, label: "The eastern basins, cut into the rock scarp", tilt: 38, zoom: 1.6 }
  ],
  herodian: [
    { t: "which has five porticoes", x: 54, y: 70, z: 8, label: "The five porticoes — four round the basins, one on the dam", tilt: 40, zoom: 1.1 },
    { t: "a fifth across the middle", x: 54, y: 63.5, z: 8, label: "Portico V, carried on the dam", tilt: 32, zoom: 1.5 },
    { t: "along the eastern side, where the rock rises", x: 118, y: 74, z: 1, label: "The eastern basins and grottoes", tilt: 38, zoom: 1.5 },
    { t: "water at a distance and below", x: 54, y: 91, z: -7, label: "The Lower Pool — the drop the paralysed man faced", tilt: 26, zoom: 1.4 },
    { t: "the Antonia", x: 54, y: 140, z: 0, label: "South, toward the Antonia and the Temple", tilt: 44, zoom: 1.3 }
  ],
  aelia: [
    { t: "marble foot", x: 108, y: 104, z: 4.5, label: "The votive deposit — Pompeia Lucilia's ex-voto", tilt: 42, zoom: 1.6 },
    { t: "a raised terrace or podium on the eastern side", x: 120, y: 67, z: 10, label: "The temple podium above the healing caves", tilt: 36, zoom: 1.4 },
    { t: "the same eastern caves", x: 116, y: 74, z: 1, label: "The eastern caves, reused by the Roman cult", tilt: 38, zoom: 1.5 },
    { t: "partly filled during the Roman centuries", x: 54, y: 41, z: -4, label: "The Upper Pool, partly vaulted and filled", tilt: 32, zoom: 1.4 }
  ],
  byzantine: [
    { t: "out over the water on arches", x: 66, y: 44, z: -6, label: "Pier arcades rising from the floor of the pools", tilt: 24, zoom: 1.4 },
    { t: "ending in an apse at the east", x: 109, y: 75, z: 6, label: "The eastern apse", tilt: 38, zoom: 1.5 },
    { t: "colonnaded atrium at the west", x: 12, y: 74, z: 5, label: "The atrium", tilt: 40, zoom: 1.5 },
    { t: "reworked into a crypt", x: 61, y: 75, z: -4, label: "The crypt and the stair down to the water", tilt: 26, zoom: 1.6 }
  ],
  earlyislamic: [
    { t: "the Moustier", x: 69, y: 66, z: 5, label: "The Moustier — the small chapel on the surviving vaults", tilt: 36, zoom: 1.6 },
    { t: "Silt accumulated", x: 54, y: 91, z: -4, label: "The silted Lower Pool", tilt: 32, zoom: 1.4 },
    { t: "tons of masonry", x: 66, y: 74, z: 0.6, label: "The field of collapse from the basilica", tilt: 34, zoom: 1.3 }
  ],
  crusader: [
    { t: "three-aisled basilica about thirty-four metres long", x: 119, y: 113, z: 10, label: "The church of Saint Anne", tilt: 34, zoom: 1.4 },
    { t: "is the crypt", x: 119, y: 113, z: -3, label: "The crypt grotto beneath the church", tilt: 24, zoom: 1.7 },
    { t: "known as the Moustier", x: 69, y: 66, z: 5, label: "The Chapel of the Paralytic, on the old vaults", tilt: 36, zoom: 1.6 },
    { t: "cultivated the silted basins", x: 54, y: 80, z: -1, label: "The convent garden over the buried pools", tilt: 40, zoom: 1.2 }
  ],
  madrasa: [
    { t: "Converting the newly built church of Saint Anne into a law school", x: 119, y: 113, z: 10, label: "Al-Salahiyya — the church as a college of law", tilt: 34, zoom: 1.4 },
    { t: "cells, a courtyard", x: 118, y: 62, z: 4, label: "Courtyard and students' cells", tilt: 40, zoom: 1.5 },
    { t: "the ground level over the ancient reservoirs had risen", x: 54, y: 80, z: 0, label: "Fill and houses over the buried basins", tilt: 42, zoom: 1.2 }
  ],
  modern: [
    { t: "The southern basin is largely open to the sky", x: 54, y: 91, z: -7, label: "The excavated Lower Pool", tilt: 28, zoom: 1.4 },
    { t: "visible from walkways above", x: 93, y: 90, z: 1.4, label: "The visitor walkway over the ruins", tilt: 36, zoom: 1.6 },
    { t: "the church of Saint Anne, restored", x: 119, y: 113, z: 10, label: "The church of Saint Anne, standing", tilt: 34, zoom: 1.4 },
    { t: "The northern pool remains largely unexcavated", x: 54, y: 41, z: 0, label: "The Upper Pool, still buried", tilt: 44, zoom: 1.3 }
  ]
};

// ---- note on the text -------------------------------------------------
export const NOTES = {
  herodian: {
    title: "A note on the text: John 5:3b–4",
    body: [
      "If you read John 5 in the King James Version you will find an explanation of the pool's power: an angel came down at a certain season, troubled the water, and the first person into the water afterwards was healed. If you read it in most modern translations, that sentence is gone, or sits in a footnote. Neither translation is playing games with you; they are following different manuscripts.",
      "The oldest and best copies of John's Gospel — the papyri known as P66 and P75, both from around AD 200, and the great fourth-century codices Sinaiticus and Vaticanus — do not contain the angel. The sentence appears in later manuscripts, and in some of them it is marked with the symbols scribes used for a passage they doubted. The usual conclusion is that a scribe added it, in good faith, to explain a custom his readers no longer understood.",
      "What is not in doubt is the custom itself. Verse 3 has the crowd 'waiting' — and verse 7, which nobody disputes, has the sick man say that when the water is troubled he cannot get down in time. The stirring water is in the earliest text. Only the explanation for it is late.",
      "The archaeology gives that custom a setting. The eastern side of the site is a row of small basins cut into the rock, fed not by the great reservoirs but by an intermittent seepage that surges after rain and then stops. Water that moves suddenly, with no visible cause, in a place people already came to for healing — that is enough to produce the practice John describes without any explanation at all.",
      "It also tells us what the hope looked like. From the same caves came dozens of votive offerings — carved marble feet and limbs, lamps, inscriptions — dedicated to Asclepius and Serapis, the healing gods of the Graeco-Roman world. Most of those finds are later than the Gospel scene, from the Roman colony of the second and third centuries; whether a non-Jewish cult was already quietly operating here in the first century is one of the real arguments about this site. Either way the shape of the belief is the same in every period: get into the water, at the right moment, before anyone else.",
      "That is what makes the encounter in John 5 land the way it does. The man explains his problem in the only terms the place offers — no one to carry him, someone always quicker. He is not told to try again, or to wait for a better season. He is told to stand up."
    ]
  },
  aelia: {
    title: "A note on the finds: Asclepius, Serapis, and a marble foot",
    body: [
      "The votive offerings from the eastern caves are the hardest physical evidence anyone has for what people wanted at Bethesda. They are small, personal, and specific: a carved foot, a limb, an eye, dedicated in thanks for a cure of that exact part of the body. The finest is a marble foot inscribed in Greek by a woman named Pompeia Lucilia.",
      "The gods named in the finds and inscriptions are Asclepius, the Greek god of medicine, and Serapis, the Graeco-Egyptian deity who had absorbed much the same role by the second century. Their sanctuaries elsewhere in the empire worked the way this one did: water, caves, bathing, sleeping in the precinct in hope of a curative dream.",
      "The dating matters for how you read the Gospel scene. Most of these offerings belong to Aelia Capitolina, the Roman colony founded after AD 135 — a century after the healing in John 5, in a city whose Jewish population had been expelled. Some scholars argue a small non-Jewish cult was already here before AD 70, serving the garrison in the Antonia and the foreign residents of the city; others think a pagan shrine that close to the Temple is unimaginable. The evidence does not settle it.",
      "What the finds do settle is the continuity of the practice. The gods change, the language of the inscriptions changes, the population of the city is replaced twice over — and people keep coming to the same holes in the same rock, for the same reason."
    ]
  }
};

// ---- takeaway card ----------------------------------------------------
export const TAKEAWAY = {
  herodian: {
    title: "For a class: the water, and the word",
    point: "Everything at Bethesda ran on being first. The water moved on its own schedule, healing was thought to belong to the moment it moved, and the moment belonged to whoever could get down the steps quickest. It was a system that rewarded the least disabled person present — which is why a man who had been ill thirty-eight years was still lying there. When Jesus arrives, he does not fix the man's access to the system. He does not carry him to the water, or hold the crowd back, or wait for the season. He ignores the pool entirely and speaks. The healing at Bethesda is the one thing the sanctuary could not offer: something given, at once, to the person least able to compete for it.",
    questions: [
      "Look at the model of the Lower Pool from a low angle. Thirteen metres of rock, and one stair in the corner. What does that drop tell you about who could realistically reach the water first?",
      "Jesus asks 'Wilt thou be made whole?' and the man answers by explaining why he cannot be. Why might someone answer a direct offer with the reasons it will not work?",
      "The sanctuary at Bethesda kept working for centuries under three different sets of gods, and the practice barely changed. What does that say about how durable a religious habit can be, apart from what it is officially about?",
      "The man is told to carry his mat — the evidence of thirty-eight years — out through the porticoes past everyone still waiting. Why might that detail be part of the healing rather than an afterthought?"
    ]
  }
};

// ---- stratigraphic column for the section view ------------------------
// Depths in metres below the present rim of the pools. Illustrative:
// the real sequence varies sharply across the site.
export const STRATA = [
  { top: 1.5, bot: 0, era: "1856 – present", name: "Modern surface, garden and walkways", cat: "modern" },
  { top: 0, bot: -1.6, era: "1187 – 1856", name: "Ottoman and Mamluk fill: houses, waste ground", cat: "islamic" },
  { top: -1.6, bot: -3.0, era: "1100 – 1187", name: "Crusader construction debris and garden soil", cat: "fill" },
  { top: -3.0, bot: -5.6, era: "614 – 1099", name: "Collapse of the Byzantine basilica, then silt", cat: "rubble" },
  { top: -5.6, bot: -7.2, era: "450 – 614", name: "Byzantine church floor and vault springing", cat: "church" },
  { top: -7.2, bot: -9.0, era: "135 – 324", name: "Roman sanctuary deposits and votive offerings", cat: "pagan" },
  { top: -9.0, bot: -10.8, era: "40 BC – AD 70", name: "First-century installations, plaster and basins", cat: "cave" },
  { top: -10.8, bot: -12.4, era: "c. 200 BC", name: "Hellenistic relining of the basins", cat: "plaster" },
  { top: -12.4, bot: -13.4, era: "c. 800 BC", name: "Rock-cut floor of the Iron Age reservoir", cat: "bedrock" }
];
