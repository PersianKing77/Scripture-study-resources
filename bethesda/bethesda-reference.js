// Loaded as a plain script so the file works offline as a single bundle.
(function () {
  // Reference apparatus for the Bethesda atlas: the full Gospel passage,
  // cross-references, handout content, and the self-check exercises.

  // The King James Version is discussed (never quoted at length) in the notes
  // below, since UK reproduction rights are held by the Crown/Cambridge
  // University Press and this build ships without that permission secured.
  // American Standard Version (1901). Public domain in the United States, which
  // makes it the only translation this atlas needs to be sold there. It also
  // teaches the textual question directly: the ASV committee declined to print
  // verse 4 at all.
  const JOHN5_ASV = [
    { v: 1, t: "After these things there was a feast of the Jews; and Jesus went up to Jerusalem." },
    { v: 2, t: "Now there is in Jerusalem by the sheep gate a pool, which is called in Hebrew Bethesda, having five porches.", note: "Some translations supply 'market' here instead of 'gate'. The Greek supplies neither: it says only 'by the sheep'. The word is a translation decision, not a fixed fact." },
    { v: 3, t: "In these lay a multitude of them that were sick, blind, halt, withered.", note: "The ASV stops here. 'Waiting for the moving of the water' is absent, because it is absent from the oldest manuscripts." },
    { v: 4, t: "(no verse 4 is printed)", note: "The 1901 committee left the verse out of the text and put it in the margin: 'Many ancient authorities insert, wholly or in part, waiting for the moving of the water: for an angel of the Lord went down at certain seasons into the pool, and troubled the water: whosoever then first after the troubling of the water stepped in was made whole, with whatsoever disease he was holden.' Other editions print it as scripture. Neither choice is careless; they are answering the manuscript evidence differently." },
    { v: 5, t: "And a certain man was there, who had been thirty and eight years in his infirmity." },
    { v: 6, t: "When Jesus saw him lying, and knew that he had been now a long time in that case, he saith unto him, Wouldest thou be made whole?" },
    { v: 7, t: "The sick man answered him, Sir, I have no man, when the water is troubled, to put me into the pool: but while I am coming, another steppeth down before me.", note: "'Steppeth down' is literal: the basin floor lies some 13 m below the rim, reached by stairs cut into the rock." },
    { v: 8, t: "Jesus saith unto him, Arise, take up thy bed, and walk." },
    { v: 9, t: "And straightway the man was made whole, and took up his bed and walked. Now it was the sabbath on that day." },
    { v: 10, t: "So the Jews said unto him that was cured, It is the sabbath, and it is not lawful for thee to take up thy bed." },
    { v: 11, t: "But he answered them, He that made me whole, the same said unto me, Take up thy bed, and walk." },
    { v: 12, t: "They asked him, Who is the man that said unto thee, Take up thy bed, and walk?" },
    { v: 13, t: "But he that was healed knew not who it was; for Jesus had conveyed himself away, a multitude being in the place." },
    { v: 14, t: "Afterward Jesus findeth him in the temple, and said unto him, Behold, thou art made whole: sin no more, lest a worse thing befall thee.", note: "From the pools the Temple lay a short walk south-west and downhill — the direction the exit pin marks on the model." },
    { v: 15, t: "The man went away, and told the Jews that it was Jesus who had made him whole." },
    { v: 16, t: "And for this cause the Jews persecuted Jesus, because he did these things on the sabbath." }
  ];

  const TRANSLATIONS = [
    {
      key: "asv",
      short: "ASV",
      name: "American Standard Version",
      year: "1901",
      status: "Public domain in the United States — the only translation this atlas quotes at length.",
      note: "The committee left verse 4 out of the text and recorded it in the margin instead. Other editions, including the King James Version, print it as scripture — discussed here, not reproduced, since UK rights in that translation are held by the Crown."
    }
  ];

  const CROSSREFS = [
    { ref: "Nehemiah 3:1", t: "The Sheep Gate is rebuilt and dedicated by the high priest — the gate in the city's north wall that gives John 5:2 its landmark.", tie: "Where 'by the sheep' points." },
    { ref: "Nehemiah 12:39", t: "The dedication procession passes the Sheep Gate, placing it in the same north-eastern stretch of wall.", tie: "Provides plausible northeastern-city context." },
    { ref: "2 Kings 18:17 · Isaiah 7:3 · Isaiah 36:2", t: "The conduit of the upper pool — a named reservoir on Jerusalem's water system in the eighth century BC.", tie: "Some identify this with the Iron Age basin here; other locations in Jerusalem remain proposed, so the tie is not certain." },
    { ref: "2 Chronicles 32:30", t: "Hezekiah stops the upper watercourse of Gihon and brings it down west of the city of David.", tie: "The engineering culture that built the dam." },
    { ref: "Ben Sira 50:3", t: "Praises the high priest Simon for having a reservoir quarried out, comparing its size to the sea. Written about the second century BC, around the period the second basin is thought to have been cut.", tie: "One proposal links this reservoir to the southern basin; the text does not name Bethesda." },
    { ref: "Copper Scroll 3Q15", t: "Names Beth Eshdatayin, 'the place of two pools', with a treasure hidden at its smaller basin.", tie: "The dual form behind the name Bethesda." },
    { ref: "Leviticus 15", t: "Bathing in water as the ordinary remedy for ritual impurity.", tie: "Why rock-cut baths cluster at a water source." },
    { ref: "John 9:1–7", t: "A second Jerusalem healing at a second pool, Siloam, where the man is sent to wash.", tie: "The Gospel's paired water miracles." }
  ];

  // Per-phase handout content: what to look for, three discussion questions,
  // and the vocabulary a reader needs before the essay makes sense.
  const SHEET = {
    iron: {
      notice: [
        "The dam is the whole design: a wall across a valley floor, catching winter runoff rather than tapping a spring.",
        "Water leaves by gravity through a channel cut toward the Temple mount, downhill and to the south-west.",
        "There is one basin here, not two. Everything later is an addition to this single reservoir."
      ],
      questions: [
        "Why would a city build its reservoir outside the wall, on the wrong side of a valley?",
        "What does depending on winter rain rather than a spring mean for how the city plans a year?",
        "Isaiah meets Ahaz at the conduit of the upper pool. What kind of place does the model suggest that conversation happened in?"
      ],
      vocab: [
        ["Dam", "A wall built across a valley to hold back water — here the north side of the pool."],
        ["Reservoir", "A store of collected water, as opposed to a well or spring."],
        ["Gravity feed", "Moving water without pumps, by letting it run downhill through a channel."]
      ]
    },
    hasmonean: {
      notice: [
        "A second basin is cut south of the dam, so the dam becomes a partition between two pools.",
        "The name in the Copper Scroll is a dual — the place of two pools — and this is the phase that makes it true.",
        "Both basins are plastered rock-cut cuttings, not masonry tanks. The rock is the wall."
      ],
      questions: [
        "Why double the capacity rather than deepen what already exists?",
        "The Copper Scroll calls this Beth Eshdatayin. What does it cost a reader when a place has several names in several languages?",
        "What would the dam between the two pools have been used for, besides holding water back?"
      ],
      vocab: [
        ["Hasmonean", "The Jewish dynasty ruling Judaea between the Maccabean revolt and Herod."],
        ["Dual form", "A Hebrew and Aramaic grammatical form meaning exactly two of something."],
        ["Partition", "The dividing wall between the two basins — here the earlier dam."]
      ]
    },
    transition: {
      questions: [
        "The site sat between two Roman destructions — AD 70 and AD 135 — sixty-five years apart. What can and can't we say about those sixty-five years from the excavated remains alone?",
        "Why might a project choose to model a phase this restrained rather than filling the gap with plausible guesses?"
      ],
      vocab: [
        ["Interval/gap phase", "A modeled period defined mainly by what is not yet established, rather than by new construction."],
        ["Bar Kokhba revolt", "The second Jewish revolt against Rome, AD 132–135, crushed shortly before Aelia Capitolina was founded."]
      ]
    },
    herodian: {
      notice: [
        "The double-pool plan can accommodate four perimeter porticoes and a fifth across the central partition — a strong architectural fit with John 5:2, though the remains are incomplete and the full colonnade system is reconstructed.",
        "Where within the complex John's healing scene belongs is disputed. One influential proposal (von Wahlde) points to the stepped southern pool and its porticoes; tradition points to the eastern rock-cut basins. The evidence does not settle which.",
        "The basin floor lies roughly 13 m below the ancient rim. That is not a fixed water-surface depth — levels varied seasonally, and broad steps allowed descent as they changed. John 5:7 says another person 'goes down' before the man; it does not fix a thirteen-metre descent."
      ],
      questions: [
        "John 5:2 says five porches — an awkward number for a rectangle. What did the excavators find, and why does that matter to a reader?",
        "The sick lie in the porticoes, not in the water. What does that tell you about who could actually reach the pool?",
        "Does knowing the water was four storeys down change how you hear 'while I am coming, another steppeth down before me'?"
      ],
      vocab: [
        ["Portico", "A roofed colonnade — columns carrying a roof, open along one side."],
        ["Miqveh", "A stepped pool for ritual immersion, cut into rock and fed by undrawn water."],
        ["Bethesda / Bethzatha / Bethsaida", "The three name forms preserved across John's manuscript tradition; which is earliest, and what each means, remains disputed."],
        ["Stylobate", "The stone platform a row of columns stands on."]
      ]
    },
    aelia: {
      notice: [
        "The city is refounded as a Roman colony and the healing site becomes a formal sanctuary of Asclepius and Serapis.",
        "Votive offerings — including a carved foot dedicated by Pompeia Lucilia — are the evidence for that cult.",
        "The reservoirs go on working as reservoirs. Religion changes faster than plumbing."
      ],
      questions: [
        "Rome builds a healing shrine on a place already known for healing. Continuity, or takeover?",
        "What does a votive carving of a foot tell you that a temple inscription would not?",
        "Why might a Gospel written late in the first century describe a site that a second-century reader knew as pagan?"
      ],
      vocab: [
        ["Aelia Capitolina", "The Roman colony founded on Jerusalem's ruins by Hadrian, AD 135."],
        ["Asclepius", "The Greek god of healing, whose sanctuaries centred on water and sleep."],
        ["Votive", "An object given to a god in payment of a vow, often shaped like the healed body part."]
      ]
    },
    byzantine: {
      notice: [
        "Saint Mary of the Probatica is built partly over the pools, carried on arches sprung from the pool floor.",
        "Building across a 13 m void is the whole engineering problem, and the arch springers are still there.",
        "The pools stop being water and start being foundation."
      ],
      questions: [
        "Why build a church over the water rather than beside it?",
        "What is gained, and what is lost, when a working reservoir becomes a holy site?",
        "The basilica's builders read John 5 as a location, not just a story. How does that shape what they built?"
      ],
      vocab: [
        ["Basilica", "A long rectangular church with aisles either side of a central nave."],
        ["Probatica", "From the Greek for 'of the sheep' — the Byzantine name for the site."],
        ["Springer", "The lowest stone of an arch, where it starts to curve out from its support."]
      ]
    },
    earlyislamic: {
      notice: [
        "Early seventh-century damage, abandonment, and reuse begin centuries of collapse rather than rebuilding; later tradition ties the ruin to the Persian conquest of 614, but the site-specific sequence is uncertain.",
        "Silt and rubble fill the basins from the bottom up — this is where most of the 15 m of fill comes from.",
        "One small chapel, the Moustier, keeps the memory of the place alive on top of the vaults."
      ],
      questions: [
        "What keeps a site remembered when its buildings are gone?",
        "Rubble is usually treated as the absence of history. What history does this rubble actually record?",
        "Why do small chapels survive where large basilicas do not?"
      ],
      vocab: [
        ["Silt", "Fine waterborne sediment that settles out and accumulates."],
        ["Vault", "An arched ceiling of stone or brick."],
        ["Moustier", "A small monastery or chapel; the name given to the surviving oratory here."]
      ]
    },
    crusader: {
      notice: [
        "Saint Anne's is built over the grotto identified as the birthplace of the Virgin — not over the pools.",
        "The centre of gravity of the site moves off the water and onto the cave.",
        "The Crusader church is the one building here still standing whole."
      ],
      questions: [
        "Why does the twelfth century commemorate a birth here rather than a healing?",
        "The pools are within sight of the new church and are not rebuilt. What does that tell you about medieval priorities?",
        "What makes a building survive eight centuries when its neighbours did not?"
      ],
      vocab: [
        ["Romanesque", "A style of round arches, thick walls and small windows, before the Gothic."],
        ["Grotto", "A cave, here the one venerated as the Virgin's birthplace."],
        ["Convent", "The residential buildings of a religious community."]
      ]
    },
    madrasa: {
      notice: [
        "Saladin converts the church into the Salahiyya, a school of Islamic law, and the inscription recording it survives.",
        "Conversion, not demolition, is what saves the building.",
        "Around it the quarter rises steadily on its own debris — the top metres of the fill above the pools."
      ],
      questions: [
        "Why convert a church into a law school instead of pulling it down?",
        "What does it mean that the most intact ancient building on the site was preserved by its conquerors?",
        "How much of the 15 m you now walk down is simply people living on the same spot for centuries?"
      ],
      vocab: [
        ["Madrasa", "A school, especially of Islamic law and religious sciences."],
        ["Salahiyya", "Named for Salah al-Din — Saladin — who captured Jerusalem in 1187 and endowed the school in 1192, per its surviving foundation inscription."],
        ["Occupation debris", "The rubbish, rubble and collapse that raises ground level where people live."]
      ]
    },
    modern: {
      notice: [
        "France is given the ruined church in 1856; the White Fathers hold the site and excavation begins.",
        "The basins are open to the sky for the first time in over a thousand years — but 15 m down.",
        "You are looking at nine sites at once, stacked, with most of them removed to show the earliest."
      ],
      questions: [
        "Excavation destroys in order to reveal. What was removed to give you this view?",
        "Standing on the walkway, what can you not see that the model shows you?",
        "Should the later phases have been left in place? Who decides?"
      ],
      vocab: [
        ["Stratigraphy", "The layered sequence of deposits, read as a record of time."],
        ["White Fathers", "The Missionaries of Africa, custodians of the Saint Anne compound."],
        ["Domaine", "The French compound enclosing the church, pools and gardens."]
      ]
    }
  };

  // ---- self-check --------------------------------------------------------
  const QUIZ = {
    match: {
      prompt: "Put each phase with its dates.",
      pairs: [
        { k: "iron", label: "Iron Age Reservoir", answer: "c. 800 – 600 BC" },
        { k: "hasmonean", label: "The Twin Pools", answer: "c. 200 – 40 BC" },
        { k: "herodian", label: "Second Temple Sanctuary", answer: "c. 40 BC – AD 70" },
        { k: "transition", label: "Destruction & Reuse", answer: "AD 70 – 130/135" },
        { k: "aelia", label: "Aelia Capitolina", answer: "AD 135 – 324" },
        { k: "byzantine", label: "Byzantine Basilica", answer: "AD 450 – 614" },
        { k: "crusader", label: "Crusader Saint Anne's", answer: "AD 1100 – 1187" }
      ],
      options: ["c. 800 – 600 BC", "c. 200 – 40 BC", "c. 40 BC – AD 70", "AD 70 – 130/135", "AD 135 – 324", "AD 450 – 614", "AD 1100 – 1187"]
    },
    seen: {
      prompt: "Could a visitor in AD 30 have seen it?",
      items: [
        { t: "The five porticoes", yes: true, why: "Built in the Second Temple phase, and the reason John 5:2 can count five." },
        { t: "Two large rock-cut basins divided by a partition", yes: true, why: "The southern basin was cut in the Hasmonean phase, two centuries earlier." },
        { t: "The Iron Age dam", yes: true, why: "Still standing — by then it was the partition between the pools." },
        { t: "Rock-cut bathing installations east of the pools", yes: true, why: "In use in the first century; one of two disputed locations proposed for John's healing scene, alongside the southern pool and porticoes." },
        { t: "A church carried on arches over the pools", yes: false, why: "Byzantine, from about AD 450 — four centuries later." },
        { t: "A carved votive foot dedicated to Asclepius", yes: false, why: "Roman colonial, after AD 135. The formal pagan sanctuary is later than the Gospel scene." },
        { t: "The Romanesque church of Saint Anne", yes: false, why: "Crusader, about AD 1100." },
        { t: "An inscription naming the Salahiyya law school", yes: false, why: "AD 1192, when Saladin endowed the church as a law school — he had captured the city five years earlier, in 1187." }
      ]
    },
    facts: {
      prompt: "Three from the model.",
      items: [
        {
          q: "About how far below today's rim does the excavated basin floor lie?",
          options: ["About 3 m — waist-deep from the edge", "About 13 m — roughly four storeys", "About 30 m — deeper than the Temple was tall"],
          answer: 1,
          why: "The basin floor is cut some 13 m into the rock. Water levels varied with the seasons, and broad steps allowed descent as they changed — the floor depth, not a fixed water line, is the securely measured figure."
        },
        {
          q: "How many porticoes did the excavators find, and where was the odd one?",
          options: ["Four, one on each side", "Five: four round the basins and one on the partition", "Five, all along the eastern side"],
          answer: 1,
          why: "The fifth ran along the dam between the two pools — the arrangement that makes an odd number sensible."
        },
        {
          q: "Where does most of the 15 m of fill above the pools come from?",
          options: ["A single Roman levelling operation", "Deliberate infilling by the Crusaders", "Centuries of collapse, silt and people living on the same spot"],
          answer: 2,
          why: "Post-614 collapse and silt, then the medieval and Ottoman quarter rising on its own debris."
        }
      ]
    }
  };

  // Fuller citations. Full source-figure/page provenance for modeled geometry
  // is tracked separately in the project's provenance register; where a page
  // range is not given here, cite the work generally rather than a specific page.
  const SOURCES = [
    {
      k: "Excavation",
      t: "C.-E. Mauss, La piscine de Béthesda à Jérusalem (Paris, 1888), reporting the clearance of 1863 for the White Fathers."
    },
    {
      k: "Excavation",
      t: "J.-M. Rousée, preliminary reports on the École Biblique campaigns at Sainte-Anne, Revue Biblique 69 (1962); with R. de Vaux, A. Duprez and P. Benoit, 1957–62."
    },
    {
      k: "Excavation",
      t: "A. Duprez, Jésus et les dieux guérisseurs: à propos de Jean V, Cahiers de la Revue Biblique 12 (Paris: Gabalda, 1970) — the case for a healing cult at the site."
    },
    {
      k: "Re-examination",
      t: "U. C. von Wahlde, 'The Puzzling Pool of Bethesda', Biblical Archaeology Review 37:5 (2011), and his fuller treatment in Archaeology and the New Testament (2019), re-reading the excavation records phase by phase."
    },
    {
      k: "Re-examination",
      t: "S. Gibson, 'The Pool of Bethesda in Jerusalem and Jewish Purification Practices of the Second Temple Period', Proche-Orient Chrétien 55 (2005) — the ritual-bath reading."
    },
    {
      k: "Ancient",
      t: "John 5:1–16. Textual apparatus for 5:3b–4 in the Nestle-Aland Novum Testamentum Graece, 28th ed. (2012), critical apparatus at John 5."
    },
    {
      k: "Ancient",
      t: "2 Kings 18:17; Isaiah 7:3; 36:2; 2 Chronicles 32:30; Nehemiah 3:1; 12:39; Ben Sira 50:3; the Copper Scroll (3Q15) col. XI; Josephus, Jewish War V; Eusebius, Onomasticon 58; the Bordeaux Pilgrim (333); the Piacenza Pilgrim (c. 570); Theoderich, Libellus de locis sanctis (c. 1172)."
    },
    {
      k: "Imagery",
      t: "Aerial imagery: not included. This build ships with no default imagery provider; the optional overlay stays inactive until the user enters the URL of a tile service they hold a commercial licence to use."
    },
    {
      k: "Coordinates",
      t: "Church of Saint Anne, 31.7814 N, 35.2366 E. The pools lie immediately to its north-west; the overlay is anchored on the church and rotated 12.3° east of the plan's north."
    },
    {
      k: "Caveat",
      t: "Plans here are schematic reconstructions in a common coordinate frame, not survey drawings. Elevations above ground level are informed estimate throughout. This is a teaching aid and a Beta: corrections are welcome."
    }
  ];


  // Carried in the page so the single-file offline build satisfies OFL 1.1
  // clause 2 on its own, with no sibling files to rely on.
  const FONT_NOTICES = [
    "Copyright 2017 The EB Garamond Project Authors (https://github.com/octaviopardo/EBGaramond12)",
    "Copyright \u00a9 2017 IBM Corp. with Reserved Font Name \"Plex\"",
    "Both faces are licensed under the SIL Open Font License, Version 1.1, reproduced in full below."
  ];

  const OFL_TEXT = [
    ["SIL OPEN FONT LICENSE Version 1.1 \u2014 26 February 2007", ""],
    ["Preamble", "The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others.\n\nThe OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives."],
    ["Definitions", "\u201cFont Software\u201d refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may include source files, build scripts and documentation.\n\n\u201cReserved Font Name\u201d refers to any names specified as such after the copyright statement(s).\n\n\u201cOriginal Version\u201d refers to the collection of Font Software components as distributed by the Copyright Holder(s).\n\n\u201cModified Version\u201d refers to any derivative made by adding to, deleting, or substituting \u2014 in part or in whole \u2014 any of the components of the Original Version, by changing formats or by porting the Font Software to a new environment.\n\n\u201cAuthor\u201d refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software."],
    ["Permission & conditions", "Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:\n\n1) Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.\n\n2) Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license. These can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the user.\n\n3) No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder. This restriction only applies to the primary font name as presented to the users.\n\n4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written permission.\n\n5) The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be distributed under any other license. The requirement for fonts to remain under this license does not apply to any document created using the Font Software."],
    ["Termination", "This license becomes null and void if any of the above conditions are not met."],
    ["Disclaimer", "THE FONT SOFTWARE IS PROVIDED \u201cAS IS\u201d, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE."]
  ].map(function (row) { return { h: row[0], t: row[1] }; });



  // Reader-facing credits. What a person holding this atlas would want to know
  // about where it came from — nothing about clearing rights to sell it.
  const CREDITS = [
    {
      group: "About this project",
      items: [
        { n: "Independent educational project", t: "This atlas is an independent educational resource. It is not officially endorsed by, sponsored by, or affiliated with the Missionaries of Africa, the Basilica of Saint Anne, the \u00c9cole Biblique et Arch\u00e9ologique Fran\u00e7aise de J\u00e9rusalem, the Israel Antiquities Authority, Cambridge University Press, Esri, Maxar, The Church of Jesus Christ of Latter-day Saints, or any other institution, publisher, or copyright holder referenced in the scholarly apparatus above. Reconstructions reflect the compiler's reading of the published scholarship and are offered for teaching, not as a claim to archaeological proof." }
      ]
    },
    {
      group: "Scripture",
      items: [
        { n: "American Standard Version, 1901", t: "The 1901 American Standard Version is in the public domain in the United States and is used throughout this edition, for John 5:1\u201316 and for the cross-referenced passages." },
        { n: "Authorized (King James) Version, 1611", t: "Discussed in the notes on the text, never quoted at length. In the United Kingdom rights in the Authorized Version are vested in the Crown and administered by its patentee, Cambridge University Press; this build reproduces none of its text, so no permission from that office is required." }
      ]
    },
    {
      group: "Excavation and scholarship",
      lead: "The reconstructions are drawn from the published record of the site.",
      items: [
        { n: "Mauss, C.-\u00c9. La piscine de Bethesda \u00e0 J\u00e9rusalem. Paris, 1888.", t: "Publication of the clearance he began at Sainte-Anne in 1863, and the first systematic plan of the site." },
        { n: "Rous\u00e9e, J.-M., with R. de Vaux, A. Duprez and P. Benoit. \u00c9cole Biblique campaigns of 1957\u201362; preliminary reports in Revue Biblique 69 (1962).", t: "Source of the basin dimensions, the line of the partition, the phase sequence used throughout, and the placement of the site relative to the Second Temple city." },
        { n: "Duprez, A. J\u00e9sus et les dieux gu\u00e9risseurs. Cahiers de la Revue Biblique. Paris, 1970.", t: "The Roman healing installations east of the pools and the votive material found with them." },
        { n: "von Wahlde, U. C. \u2018The Puzzling Pool of Bethesda.\u2019 Biblical Archaeology Review 37, no. 5 (2011), and subsequent studies.", t: "Re-reading of the excavation records; the basis for how this atlas divides the periods." },
        { n: "Gibson, S. \u2018The Pool of Bethesda in Jerusalem and Jewish Purification Practices of the Second Temple Period.\u2019 Proche-Orient Chr\u00e9tien 55 (2005).", t: "The purification-bath interpretation of the eastern basins, given in the essays as one reading among several." },
        { n: "Palestine Exploration Fund. Surveys of Jerusalem, nineteenth century.", t: "Position of the site relative to the city wall." }
      ]
    },
    {
      group: "Ancient and medieval sources",
      items: [
        { n: "Josephus, Jewish War V", t: "The Bezetha quarter and the north-eastern wall." },
        { n: "Copper Scroll, 3Q15", t: "Beth Eshdatayin, \u2018the place of two pools\u2019." },
        { n: "Ben Sira 50:3", t: "A reservoir quarried in the high priesthood of Simon." },
        { n: "Eusebius, Onomasticon 58", t: "Fourth-century notice of the twin pools." },
        { n: "Itinerarium Burdigalense (333); Piacenza Pilgrim (c. 570); Theoderich, Libellus de locis sanctis (c. 1172)", t: "Descriptions of the Byzantine and Crusader phases." },
        { n: "Nestle-Aland, Novum Testamentum Graece, 28th ed. Stuttgart, 2012.", t: "Manuscript evidence for John 5:3b\u20134." }
      ]
    },
    {
      group: "The site",
      items: [
        { n: "Missionaries of Africa, Basilica of Saint Anne, Jerusalem", t: "The excavations lie within their compound." },
        { n: "Israel Antiquities Authority", t: "Custodian of the national archaeological record." },
        { n: "\u00c9cole Biblique et Arch\u00e9ologique Fran\u00e7aise de J\u00e9rusalem", t: "Conducted the excavations of 1957\u201362 and published the reports." }
      ]
    },
    {
      group: "Illustrations",
      items: [
        { n: "Reconstructions, plans and section", t: "Drawn for this atlas in a single coordinate frame. Schematic reconstructions rather than survey drawings; heights above ground level are estimated." },
        { n: "Photographs", t: "None included." },
        { n: "Aerial imagery", t: "Not included. This build ships with no default imagery provider; the optional overlay is inactive until the user supplies a licensed tile-service URL of their own." },
        { n: "Coordinates", t: "Church of Saint Anne, 31.7814\u00b0 N, 35.2366\u00b0 E (WGS 84). The overlay is anchored on the church and rotated 12.3\u00b0 east of plan north." },
        { n: "Units", t: "Distances convert at 0.525 m to the royal cubit and 0.445 m to the common cubit." }
      ]
    },
    {
      group: "Typefaces",
      items: [
        { n: "EB Garamond", t: "Georg Duffner and Octavio Pardo. Running text." },
        { n: "IBM Plex Mono", t: "IBM Corporation. Labels and apparatus." },
        { n: "Licence", t: "Both are licensed under the SIL Open Font License 1.1. The notices and full licence text are below." }
      ]
    },
    {
      group: "Author",
      items: [
        { n: "Taylor Halverson, Ph.D.", t: "Essays, reconstructions, study sheet and self-check. \u00a9 Taylor Halverson." }
      ]
    }
  ];

  const CREDITS_USE = [
    { n: "Citation", t: "Taylor Halverson, Pool of Bethesda Timeline (Beta), giving the phase and the date consulted. The phase and view are recorded in the address, so a copied link reopens the same state." },
    { n: "Classroom use", t: "The study sheet may be printed and the model projected." },
    { n: "Edition", t: "Beta. Corrections are welcome." }
  ];

  window.BETHESDA = Object.assign(window.BETHESDA || {}, {
    JOHN5_ASV: JOHN5_ASV,
    TRANSLATIONS: TRANSLATIONS,
    CREDITS: CREDITS,
    CREDITS_USE: CREDITS_USE,
    CROSSREFS: CROSSREFS,
    SHEET: SHEET,
    QUIZ: QUIZ,
    SOURCES: SOURCES,
    FONT_NOTICES: FONT_NOTICES,
    OFL_TEXT: OFL_TEXT
  });
})();
