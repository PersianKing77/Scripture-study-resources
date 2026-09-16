const LAT0 = 31.7855, LON0 = 35.2238, MLAT = 110900, MLON = 94650;
const VW = 1646, VH = 1852;

const P = {"ottoman":[[31.77661,35.22755],[31.77745,35.22705],[31.77845,35.22655],[31.77931,35.22628],[31.77995,35.2262],[31.78065,35.2276],[31.7812,35.229],[31.78164,35.2305],[31.78215,35.2318],[31.78265,35.233],[31.783,35.23375],[31.7833,35.2352],[31.78338,35.2365],[31.78083,35.23694],[31.77985,35.23694],[31.77889,35.23694],[31.7775,35.23706],[31.77596,35.23718],[31.77545,35.2362],[31.775,35.2348],[31.77472,35.23389],[31.7742,35.2325],[31.77365,35.2309],[31.77315,35.2298],[31.77286,35.22936],[31.773,35.2285],[31.77375,35.2277],[31.7747,35.22735],[31.7757,35.22735]],"platform":[[31.77567,35.23407],[31.77596,35.23706],[31.7802,35.23698],[31.78007,35.23365]],"jebusite":[[31.7747,35.23485],[31.77445,35.236],[31.7735,35.23648],[31.7725,35.23628],[31.7717,35.236],[31.77155,35.2352],[31.7725,35.235],[31.7737,35.23478]],"cityOfDavid":[[31.7748,35.2348],[31.7745,35.23608],[31.7734,35.23655],[31.7723,35.2363],[31.7712,35.23608],[31.7703,35.23575],[31.77,35.23495],[31.7712,35.23488],[31.7725,35.23495],[31.7738,35.2347]],"westernHillIron":[[31.776,35.2279],[31.77568,35.2301],[31.7751,35.2323],[31.7745,35.2333],[31.7733,35.2333],[31.7723,35.2326],[31.7716,35.231],[31.7715,35.2295],[31.7719,35.2282],[31.773,35.2276],[31.7745,35.2275]],"broadWall":[[31.77578,35.2302],[31.77558,35.2308]],"solomonic":[[31.7772,35.2341],[31.7773,35.2364],[31.78,35.23632],[31.7799,35.23404]],"ophel":[[31.7748,35.2348],[31.77567,35.2347],[31.77596,35.23731],[31.7745,35.23608]],"secondTemple":[[31.7765,35.22755],[31.7769,35.2301],[31.777,35.2325],[31.777,35.234],[31.78007,35.234],[31.7802,35.23724],[31.77596,35.23731],[31.7748,35.2366],[31.7738,35.2367],[31.7726,35.2364],[31.7713,35.23615],[31.7703,35.23575],[31.7699,35.2347],[31.7706,35.2335],[31.7713,35.2318],[31.7715,35.2299],[31.7719,35.2282],[31.773,35.2275],[31.7748,35.22735]],"firstWall":[[31.7765,35.2277],[31.777,35.2296],[31.7772,35.2318],[31.777,35.2333],[31.7769,35.234],[31.776,35.2347],[31.7752,35.2356],[31.7742,35.23595],[31.773,35.236],[31.7716,35.2357],[31.7704,35.23545],[31.7699,35.2346],[31.7701,35.2323],[31.7708,35.23],[31.7718,35.2286],[31.7742,35.2278]],"baris":[[31.78,35.2347],[31.78006,35.2357],[31.7807,35.23566],[31.78064,35.23466]],"hasmoneanBridge":[[31.777,35.2333],[31.777,35.234]],"secondWall":[[31.7769,35.2299],[31.7779,35.2304],[31.7788,35.2315],[31.7797,35.233],[31.7804,35.2345],[31.7806,35.2352]],"thirdWall":[[31.7765,35.22755],[31.783,35.22715],[31.7856,35.229],[31.786,35.2335],[31.7845,35.237],[31.78243,35.2367]],"temple":[[31.77762,35.2344],[31.77772,35.23575],[31.77852,35.2357],[31.77842,35.23435]],"royalStoa":[[31.776,35.2342],[31.7761,35.2372],[31.7765,35.23718],[31.7764,35.23418]],"antonia":[[31.7801,35.2348],[31.78016,35.236],[31.7809,35.23596],[31.78084,35.23476]],"citadel":[[31.77585,35.22752],[31.77592,35.22822],[31.77655,35.22816],[31.77648,35.22746]],"ironAgeCity":[[31.7762,35.22795],[31.77595,35.229],[31.77578,35.2302],[31.77558,35.2308],[31.77555,35.232],[31.77558,35.2333],[31.77562,35.2343],[31.77558,35.2353],[31.77552,35.236],[31.7748,35.23625],[31.774,35.23648],[31.773,35.2366],[31.772,35.23648],[31.7711,35.2362],[31.7704,35.23585],[31.77015,35.2352],[31.77045,35.2343],[31.77075,35.2333],[31.771,35.2323],[31.77118,35.2312],[31.77135,35.23],[31.7716,35.229],[31.772,35.2283],[31.7733,35.22795],[31.7747,35.22785]],"nehemiah":[[31.7747,35.23478],[31.7742,35.23545],[31.7734,35.23572],[31.7725,35.23568],[31.7716,35.23548],[31.7711,35.23528]],"umayyad":[[31.77505,35.23425],[31.77522,35.236],[31.7756,35.23594],[31.77543,35.23419]],"tunnel":[[31.773,35.236],[31.7728,35.23545],[31.77245,35.2356],[31.77215,35.2352],[31.7717,35.23548],[31.7712,35.2352],[31.77075,35.23548],[31.7703,35.2354]],"cardoW":[[31.7809,35.2301],[31.78,35.2302],[31.779,35.23032],[31.778,35.23042],[31.777,35.2305],[31.7762,35.23056]],"cardoWext":[[31.7762,35.23056],[31.7752,35.23064],[31.7745,35.2307]],"cardoE":[[31.7809,35.2305],[31.78,35.2309],[31.779,35.2314],[31.778,35.2319],[31.777,35.2325],[31.7762,35.233],[31.7756,35.2335]],"decumanus":[[31.7766,35.2279],[31.7767,35.229],[31.7768,35.23],[31.7769,35.231],[31.77695,35.232],[31.777,35.233],[31.777,35.2339]],"decumanusN":[[31.78134,35.23694],[31.7812,35.236],[31.781,35.2352],[31.7807,35.2344],[31.7802,35.2338],[31.7799,35.233],[31.7796,35.2322],[31.7794,35.2314],[31.779,35.2306],[31.7787,35.2299]],"nea":[[31.7741,35.23048],[31.77418,35.2313],[31.7748,35.23124],[31.77472,35.23042]],"constantinian":[[31.77808,35.2293],[31.77816,35.2305],[31.77872,35.23044],[31.77864,35.22924]],"sepulchre":[[31.77812,35.22945],[31.77818,35.23008],[31.77868,35.23002],[31.77862,35.22939]],"dome":[[31.77772,35.23486],[31.77772,35.23546],[31.77832,35.23546],[31.77832,35.23486]],"aqsa":[[31.77592,35.23552],[31.77596,35.23604],[31.77648,35.236],[31.77644,35.23548]],"quarry":[[31.778,35.229],[31.77812,35.2302],[31.779,35.2301],[31.77888,35.2289]],"bethesda":[[31.78118,35.23562],[31.78124,35.23628],[31.78176,35.23622],[31.7817,35.23556]],"siloam":[[31.77,35.23508],[31.77006,35.23562],[31.77046,35.23556],[31.7704,35.23502]],"wwPlaza":[[31.7762,35.2333],[31.777,35.23325],[31.77706,35.234],[31.77612,35.23404]],"jewishQ":[[31.7742,35.2313],[31.7756,35.231],[31.7769,35.2315],[31.777,35.2333],[31.7749,35.2337],[31.7741,35.232]],"muslimQ":[[31.7772,35.2307],[31.781,35.2302],[31.7823,35.2328],[31.7812,35.2369],[31.7772,35.234]],"christianQ":[[31.777,35.2274],[31.7794,35.22698],[31.7811,35.22712],[31.7812,35.23],[31.7772,35.2306]],"armenianQ":[[31.7739,35.228],[31.7766,35.2276],[31.7769,35.2301],[31.7742,35.2312]],"streets":[[[31.7776,35.22868],[31.7786,35.22878],[31.7795,35.22888],[31.7801,35.22898]],[[31.779,35.2279],[31.77948,35.22858],[31.77988,35.22928]],[[31.7764,35.2279],[31.7753,35.22815],[31.7744,35.2286],[31.774,35.22932]],[[31.7769,35.23125],[31.776,35.23148],[31.7751,35.23174],[31.77452,35.23208]],[[31.777,35.22996],[31.7762,35.23004]],[[31.777,35.23021],[31.7762,35.23029]],[[31.777,35.23046],[31.7762,35.23054]],[[31.779,35.23262],[31.77902,35.23392]],[[31.77962,35.23232],[31.77964,35.23378]],[[31.7756,35.23372],[31.77505,35.23386],[31.77477,35.23394]],[[31.78062,35.23108],[31.77992,35.23078],[31.7793,35.2302],[31.7788,35.22992]]],"valleys":{"kidron":[[31.7842,35.2383],[31.781,35.23805],[31.778,35.23795],[31.775,35.23768],[31.772,35.23705],[31.7698,35.23605],[31.769,35.2352]],"hinnom":[[31.7752,35.226],[31.773,35.2265],[31.7715,35.228],[31.77,35.23],[31.7692,35.2325],[31.769,35.2348]],"tyropoeon":[[31.782,35.2305],[31.78,35.23125],[31.778,35.23235],[31.7765,35.2332],[31.775,35.234],[31.773,35.2345],[31.771,35.2348],[31.7698,35.2352]]}};

const T = {
  "en": {
    "kicker": "Jerusalem — comparative survey",
    "title": "The city under the city",
    "sub": "One map, thirteen layers. Slide through time to see exactly where the Jerusalem of each era sits beneath — and outside — the walls you walk today.",
    "fit": "FIT",
    "modern": "Today's city",
    "valleys": "Valleys",
    "legend": "Legend",
    "north": "North ↑",
    "timeline": "Slide through time",
    "look": "What you can still see on the ground",
    "sectionKicker": "Why it doesn't look right",
    "sectionTitle": "Cross-section, west to east — the buried valley",
    "sectionBody": "The single biggest reason the Old City confuses people is vertical. Jerusalem was built on two ridges split by a deep ravine, the Tyropoeon. Twenty centuries of rubble, ruin and rebuilding filled that ravine in. Where a first-century pilgrim climbed monumental stairs out of a valley, you now stroll across a flat plaza — the valley is still there, twelve metres under your shoes.",
    "sources": "How to read this: solid warm lines are walls and structures whose course is established by excavation. Dashed red lines are reconstructions where scholars genuinely disagree — chiefly the Second and Third Walls of the Second Temple period. The cool blue line is the standing Ottoman wall of 1538 and today's street plan, drawn to the same scale and position. Reconstruction follows the mainstream consensus (Avigad's Jewish Quarter excavations, Mazar's Temple Mount and Ophel excavations, Reich & Shukron at the City of David, and the Madaba mosaic map for the Byzantine city). Today's streets, buildings and gates are live OpenStreetMap data, not drawn by hand — so every lane of the souq is in its real place, and you can zoom in as far as the alley you are standing in. The historical layers are plotted on the same coordinates for orientation; some lines combine excavated segments with topographically constrained inference or schematic extent, so coordinates support orientation, not survey or excavation planning.",
    "eraOf": "Layer",
    "of": "of"
  }
};

const LEG = {
  "en": [
    [
      "solid #b98c46 3px",
      "Excavated / established ancient line"
    ],
    [
      "dashed #a8452f 3px",
      "Reconstruction — scholars disagree"
    ],
    [
      "solid #3d6076 3px",
      "Standing Ottoman wall (1538) & today's streets"
    ],
    [
      "dashed #a8906a 3px",
      "Valley floor (mostly buried today)"
    ],
    [
      "solid #4a7f86 3px",
      "Water: springs, pools, Hezekiah's Tunnel"
    ],
    [
      "solid rgba(138,106,62,.45) 5px",
      "Roman street corridors — schematic; the exact line is the modern street beneath"
    ]
  ]
};

const ICONKEY = {
  "en": {
    "btn": "Key",
    "g1": "Drawn on the overlay",
    "g2": "On the street map (local-names view)",
    "rows": [
      "Major building of the chosen era",
      "Pool, cistern or reservoir",
      "Spring — the reason the city is here",
      "Golgotha and the tomb",
      "Gate, tower or excavated point",
      "Church, monastery or convent",
      "Mosque",
      "Synagogue",
      "Archaeological site or ruin",
      "Museum or visitor centre",
      "Viewpoint",
      "Restaurant",
      "Café",
      "Fast food or takeaway",
      "Bakery or sweets",
      "Shop or gift stall",
      "Parking",
      "Drinking water or fountain",
      "Public toilets",
      "Playground"
    ]
  }
};

const SECKEYS = {
  "en": [
    [
      "dashed #8a6a3e 3px",
      "Bedrock and the first-century surface"
    ],
    [
      "solid #3d6076 3px",
      "The surface you walk on today"
    ],
    [
      "solid #b98c46 5px",
      "Herod's retaining walls — the same stones, top to bottom"
    ]
  ]
};

const CS = [
  {
    "x": 58,
    "y": 182,
    "a": "middle",
    "fs": 15,
    "w": 600,
    "c": "#4a4132",
    "t": {
      "en": "Jaffa Gate"
    }
  },
  {
    "x": 215,
    "y": 99,
    "a": "middle",
    "fs": 17,
    "w": 600,
    "c": "#8a5a2b",
    "t": {
      "en": "Upper City 775 m"
    }
  },
  {
    "x": 452,
    "y": 240,
    "a": "middle",
    "fs": 16,
    "w": 700,
    "c": "#a8452f",
    "t": {
      "en": "Tyropoeon Valley"
    }
  },
  {
    "x": 455,
    "y": 298,
    "a": "middle",
    "fs": 14,
    "w": 400,
    "c": "#6d3a2c",
    "t": {
      "en": "≈ 12 m of fill"
    }
  },
  {
    "x": 508,
    "y": 160,
    "a": "end",
    "fs": 15,
    "w": 600,
    "c": "#8a5a2b",
    "t": {
      "en": "Western Wall"
    }
  },
  {
    "x": 700,
    "y": 132,
    "a": "middle",
    "fs": 17,
    "w": 600,
    "c": "#8a5a2b",
    "t": {
      "en": "Temple Mount 740 m"
    }
  },
  {
    "x": 1005,
    "y": 318,
    "a": "middle",
    "fs": 16,
    "w": 600,
    "c": "#4a4132",
    "t": {
      "en": "Kidron 625 m"
    }
  },
  {
    "x": 1215,
    "y": 112,
    "a": "end",
    "fs": 15,
    "w": 600,
    "c": "#4a4132",
    "t": {
      "en": "Mount of Olives →"
    }
  },
  {
    "x": 26,
    "y": 340,
    "a": "start",
    "fs": 12,
    "w": 400,
    "c": "#8a7550",
    "t": {
      "en": "vertical exaggeration ×1.55"
    }
  }
];

const ERAS = [
  {
    "key": "canaan",
    "tick": {
      "en": "Canaanite"
    },
    "date": {
      "en": "1800 BC"
    },
    "title": {
      "en": "Canaanite Jerusalem — the City of David ridge"
    },
    "years": {
      "en": "c. 1800 – 1000 BC"
    },
    "body": {
      "en": "Jerusalem begins entirely outside today's walls. The whole city — about five hectares, smaller than the Temple Mount platform — sits on a narrow spur running south from the Mount, chosen for one reason: the Gihon Spring, the only permanent water in the region. Most of the area inside the Ottoman gates you walk through today was bare hillside and quarry in this period."
    },
    "look": {
      "en": [
        "The Gihon Spring and the Middle Bronze spring tower, reached by stairs below the City of David visitor centre.",
        "Warren's Shaft — a natural shaft within the city's water system; its use for drawing water in this period is disputed.",
        "Massive Canaanite fortification blocks, some over three metres thick, on the east slope above the Kidron."
      ]
    }
  },
  {
    "key": "david",
    "tick": {
      "en": "David"
    },
    "date": {
      "en": "1000–930 BC"
    },
    "title": {
      "en": "David's city and Solomon's Temple"
    },
    "years": {
      "en": "c. 1000 – 930 BC"
    },
    "body": {
      "en": "David takes the Jebusite stronghold and it stays almost exactly the size it already was: a fortified ridge of about five hectares, entirely outside today's walls. He builds no temple. He buys Araunah's threshing floor on the rock to the north — at that moment still open ground beyond the city. It is Solomon who builds the Temple and his palace complex up there, and who ties them to the old town across the saddle called the Millo. For the whole of David's reign, everything your group calls the Old City is empty hillside."
    },
    "look": {
      "en": [
        "The Stepped Stone Structure on the eastern slope — the huge terracing usually identified with the Millo of 2 Samuel 5:9.",
        "The Large Stone Structure above it, which its excavator identified as David's palace. The identification is contested.",
        "Warren's Shaft and the Gihon Spring — the water system traditionally linked to David's men entering the city."
      ]
    },
    "disputed": {
      "en": "Very little here is settled. The Large Stone Structure's identification as David's palace is actively contested, the extent of Solomon's platform is unknown, and no wall of David or Solomon has been securely identified on the western or northern sides. Read the outline as the ridge the city occupied, not as a surveyed wall line."
    }
  },
  {
    "key": "hezekiah",
    "tick": {
      "en": "Hezekiah"
    },
    "date": {
      "en": "715–686 BC"
    },
    "title": {
      "en": "Hezekiah's Jerusalem — the city doubles"
    },
    "years": {
      "en": "c. 715 – 686 BC"
    },
    "body": {
      "en": "Refugees from the fallen northern kingdom pour in and Jerusalem spills west for the first time, across the Tyropoeon Valley and onto the Western Hill. Hezekiah throws a wall seven metres thick around the new quarter — the Broad Wall you can stand beside in the Jewish Quarter — producing a single continuous circuit that holds the Western Hill, the old ridge and the Temple platform together. Facing Sennacherib's siege in 701 BC he also cuts a 533-metre tunnel through solid rock to bring the Gihon's water inside the walls, to the Pool of Siloam. The city jumps from about five hectares to something on the order of fifty or sixty — the largest Jerusalem will be until Herod."
    },
    "look": {
      "en": [
        "The Broad Wall itself — seven metres thick, still standing shoulder-high in the Jewish Quarter.",
        "Hezekiah's Tunnel: you can wade all 533 metres of it, from the Gihon Spring to the Pool of Siloam.",
        "The Israelite Tower and the remains of a city gate at the north end of the Jewish Quarter excavations."
      ]
    },
    "disputed": {
      "en": "The honest limits for this era. Fixed by excavation: the Broad Wall — drawn here at its real length and place in the Jewish Quarter, not stretched into a whole northern wall — plus the tunnel and the Siloam pool. Inferred from the Broad Wall: the rest of the northern line. Estimated: the wall along the western crest, the southern line above the Hinnom, and where it crossed the Tyropoeon. Unknown: how the Temple precinct was enclosed, so that stretch of wall is simply not drawn and the dashed rectangle is only the presumed platform."
    }
  },
  {
    "key": "return",
    "tick": {
      "en": "Return"
    },
    "date": {
      "en": "538–332 BC"
    },
    "title": {
      "en": "Return from exile — the small city of Ezra and Nehemiah"
    },
    "years": {
      "en": "538 – 332 BC"
    },
    "body": {
      "en": "The exiles come back to a city a fraction of its former size. The Western Hill and Mount Zion are abandoned and stay in ruins for the next four centuries; Jerusalem contracts back onto the old ridge and the Temple platform, with perhaps a few thousand people. Zerubbabel's modest Second Temple rises on the same rock in 516 BC — no grand esplanade yet. Nehemiah rebuilds the wall in fifty-two days in 445 BC, and because the Iron Age wall down the eastern slope had collapsed into rubble he builds his higher up the ridge. This is the one era where the city gets smaller at the moment of its restoration."
    },
    "look": {
      "en": [
        "The wall segment at the top of the City of David's eastern slope, identified by its excavator as Nehemiah's.",
        "The collapsed Iron Age terraces below it — the rubble Nehemiah's builders could not clear (Nehemiah 4:10).",
        "Nothing at all on the Western Hill: four centuries of empty ground is itself the evidence."
      ]
    },
    "disputed": {
      "en": "The attribution of that wall segment to Nehemiah is contested, and the size of the post-exilic Temple platform is simply unknown — both are drawn here as best estimates."
    }
  },
  {
    "key": "hasmonean",
    "tick": {
      "en": "Maccabees"
    },
    "date": {
      "en": "167–37 BC"
    },
    "title": {
      "en": "Maccabean and Hasmonean Jerusalem — the four hundred years usually skipped"
    },
    "years": {
      "en": "167 – 37 BC"
    },
    "body": {
      "en": "Between Nehemiah's small city and the one Jesus saw lies the period most timelines jump straight over, and it is the period in which the shape of the later city was decided. The Maccabean revolt against Antiochus IV recaptured and rededicated the Temple in 164 BC — the event Hanukkah remembers, and the feast John 10:22 places Jesus at. Under the Hasmonean kings who followed, Jerusalem climbed back onto the Western Hill for the first time since 586 BC and enclosed it with the circuit Josephus calls the First Wall: from the citadel by today's Jaffa Gate, east along the line of David Street and Chain Street to the Temple, then round the City of David ridge and back up the Hinnom side. Herod inherited that wall rather than building it. They also threw a viaduct across the Tyropoeon Valley to link the Upper City to the Temple, replaced the Seleucid citadel with their own fortress, the Baris, north of the platform, and enlarged the Temple courts. When Herod arrived in 37 BC he did not design a new city; he rebuilt this one at greater scale."
    },
    "look": {
      "en": [
        "The Hasmonean tower in the base of the Citadel by Jaffa Gate — the oldest standing fortification in the Old City.",
        "Wilson's Arch, whose Hasmonean predecessor carried the viaduct from the Upper City to the Temple across the buried valley.",
        "The First Wall's line under David Street and Chain Street: walk it and you are walking the northern edge of the Maccabean city.",
        "Excavated stretches of the First Wall on Mount Zion, outside today's Zion Gate.",
        "The Hasmonean aqueduct and reservoirs that first brought water to the city from the south."
      ]
    },
    "disputed": {
      "en": "The First Wall's course is the best-attested ancient circuit here, from Josephus and from excavation, and it is drawn solid. The Baris fortress is placed north of the platform where Herod later built the Antonia, but its size is unknown. The Akra — the Seleucid citadel of 1 and 2 Maccabees — is deliberately not drawn: its location is genuinely unsettled, with proposals on the Western Hill, the Ophel and the City of David, and a 2015 excavation south of the platform is one candidate rather than a conclusion. The extent of the Hasmonean Temple courts is also unknown; Herod's platform buried the evidence."
    },
    "flag": {
      "en": "The layer that explains Hanukkah, and where Herod's city came from."
    }
  },
  {
    "key": "herod",
    "tick": {
      "en": "Second Temple"
    },
    "date": {
      "en": "37 BC–AD 70"
    },
    "title": {
      "en": "Second Temple Jerusalem — the city Jesus saw"
    },
    "years": {
      "en": "37 BC – AD 70"
    },
    "body": {
      "en": "This is the Jerusalem of the Gospels. Herod doubles the Temple platform to the size it still is — the retaining walls you touch at the Western Wall are his. The Upper City of priestly mansions covers the Western Hill, separated from the Temple by the deep Tyropoeon Valley and joined to it by monumental stairs at Wilson's and Robinson's Arches. And Golgotha, with its rock-cut tombs, lies in an abandoned quarry OUTSIDE the Second Wall. That is the single fact that unlocks the Old City: the Church of the Holy Sepulchre stands inside the walls today because the wall moved, not the tomb."
    },
    "flag": {
      "en": "The key layer for a Gospel itinerary — most features here are first-century; the Third Wall, dated on the map, was built after Jesus' ministry."
    },
    "look": {
      "en": [
        "Robinson's Arch and the collapsed stones still lying on the Herodian street where Roman soldiers threw them in AD 70.",
        "The Southern Steps, worn and uneven by design, where pilgrims entered the Temple courts.",
        "Wilson's Arch, now deep inside the Western Wall tunnels, once carrying a bridge over the valley from the Upper City.",
        "The Pool of Siloam's monumental steps — the pool of John 9, still being excavated."
      ]
    },
    "disputed": {
      "en": "The Second Wall's course is genuinely disputed — no continuous stretch has been found — but every proposed line leaves Golgotha outside the city. The Third Wall (dashed, far north) was built by Agrippa I in AD 41–44, after Jesus' lifetime, and its identification is also contested."
    }
  },
  {
    "key": "aelia",
    "tick": {
      "en": "Roman"
    },
    "date": {
      "en": "c. AD 130–324"
    },
    "title": {
      "en": "Aelia Capitolina — the grid that survives"
    },
    "years": {
      "en": "c. AD 130 – 324"
    },
    "body": {
      "en": "After AD 70 the city is levelled; Hadrian founds it as a Roman colony, Aelia Capitolina, around AD 130, and its urban form develops further after the Bar Kokhba revolt is crushed in AD 135. Two colonnaded cardines run south from the north gate; a decumanus runs east from the west gate to the Temple Mount. This is the single most useful thing a visitor can know: the souq you get lost in is not a medieval accident, it is a Roman grid. Khan el-Zeit and El-Wad are the two cardines; David Street and Chain Street are the decumanus. The southern hills — the City of David, Mount Zion — are left outside, and stay outside from now on."
    },
    "look": {
      "en": [
        "The Roman paving and column bases of the Cardo, exposed under the Jewish Quarter.",
        "Hadrian's triple gate under today's Damascus Gate — you can walk down to the Roman threshold.",
        "The Lithostrotos paving stones beneath the Sisters of Zion convent, Roman, not the pavement of Pilate's trial."
      ]
    }
  },
  {
    "key": "byz",
    "tick": {
      "en": "Byzantine"
    },
    "date": {
      "en": "AD 324–638"
    },
    "title": {
      "en": "Byzantine Jerusalem — the Madaba Map city"
    },
    "years": {
      "en": "AD 324 – 638"
    },
    "body": {
      "en": "Constantine's engineers cut the hillside away around the tomb, quarry Golgotha into a free-standing rock, and raise the first Church of the Holy Sepulchre facing the Cardo. Two centuries later Justinian extends the Cardo south to the vast Nea Church. The Madaba mosaic map, made about 560, shows this exact city from above: colonnaded main street, two great churches — with little emphasis given to the former Temple precinct. Byzantine rule was not continuous throughout this span: a Sasanian Persian army captured the city in 614, and Byzantine control was only restored in 629 after a fifteen-year interruption — this layer shows the city's Byzantine-built form, not uninterrupted Byzantine governance."
    },
    "look": {
      "en": [
        "The rock of Golgotha, still standing inside the church, its quarried face visible in the Chapel of Adam.",
        "Justinian's Nea Church foundations and cistern at the south edge of the Jewish Quarter.",
        "The Madaba Map itself — worth showing your group before you walk in through the Jaffa Gate."
      ]
    }
  },
  {
    "key": "muslim",
    "tick": {
      "en": "Early Muslim"
    },
    "date": {
      "en": "637/638–1099"
    },
    "title": {
      "en": "Early Muslim Jerusalem — the Haram takes shape"
    },
    "years": {
      "en": "637/638 – 1099"
    },
    "body": {
      "en": "Jerusalem surrenders in 637/638, and the Temple Mount — which had long contained extensive open and ruined areas after AD 70 — becomes the centre of the city again. The Dome of the Rock is finished in 691/692, al-Aqsa about 705, and an Umayyad palace quarter rises immediately south of the platform. Major inherited street corridors continue, with alteration, but the weight of the city shifts east and south toward the Haram. This is the era that produced the skyline your group photographs from the Mount of Olives: the golden dome is Umayyad, not biblical, and it stands within the ancient Temple precinct, near one leading proposed location of the sanctuary — the exact footprint is not archaeologically established."
    },
    "look": {
      "en": [
        "The Dome of the Rock itself — an Umayyad building of 691, the oldest surviving Islamic monument in the world.",
        "The excavated Umayyad palaces and administrative buildings in the Ophel park, immediately south of the Haram.",
        "The Double Gate and its stairs in the southern wall: Herodian courses below, Umayyad work above — one wall, two eras."
      ]
    }
  },
  {
    "key": "crusader",
    "tick": {
      "en": "Crusader"
    },
    "date": {
      "en": "1099–1187"
    },
    "title": {
      "en": "Crusader Jerusalem — the quarters take shape"
    },
    "years": {
      "en": "1099 – 1187"
    },
    "body": {
      "en": "The Crusaders inherit the Roman-Byzantine street plan, with its major corridors continuing, and organise the city into several religious and institutional districts. The familiar four-quarter division handed to tourists on a map today was standardized much later, chiefly by nineteenth-century Western mapmakers. The Crusaders gather Constantine's separate shrines under a single Romanesque roof: the church you walk into is essentially their building. The Dome of the Rock becomes Templum Domini, al-Aqsa becomes the Templars' headquarters, and the covered markets of the Muristan are laid out."
    },
    "look": {
      "en": [
        "The Holy Sepulchre's south façade and bell tower — twelfth-century work, largely unaltered.",
        "The three parallel vaulted market streets south of David Street, still trading.",
        "St Anne's Church by the Pool of Bethesda, the purest Crusader interior in the city."
      ]
    }
  },
  {
    "key": "ayyubid",
    "tick": {
      "en": "Ayyubid"
    },
    "date": {
      "en": "1187–1260"
    },
    "title": {
      "en": "Ayyubid Jerusalem — walls torn down, then debated"
    },
    "years": {
      "en": "1187 – 1260"
    },
    "body": {
      "en": "Saladin retakes the city from the Crusaders in 1187, and the Ayyubid sultans who follow hold it, with an interruption, until the Mamluks take over in 1260. The most consequential act of this period is a demolition, not a construction: in 1219, fearing he could not defend the city against a new Crusade, al-Malik al-Mu'azzam Isa ordered the walls torn down. Jerusalem stood unwalled for much of the rest of the period, and the circuit was not substantially rebuilt until the Ottomans. Do not read this layer's wall line as continuously standing — treat it as the inherited circuit before 1219, since no separate unwalled-state geometry is drawn here."
    },
    "look": {
      "en": [
        "The Citadel by Jaffa Gate, refortified piecemeal through the period despite the wider demolition.",
        "Scattered wall stubs and gate foundations from before 1219, now isolated rather than continuous.",
        "The continuing Mamluk-era construction boom just beginning at the Haram's edges, a preview of the next layer."
      ]
    },
    "disputed": {
      "en": "The 1219 demolition is well documented in the sources but its full extent (which stretches came down, and when partial rebuilding began under later Ayyubid rule) is debated. This layer reuses the Crusader-period wall line for orientation; it should not be read as evidence that a continuous fortification stood throughout 1219–1260."
    }
  },
  {
    "key": "mamluk",
    "tick": {
      "en": "Mamluk"
    },
    "date": {
      "en": "1260–1517"
    },
    "title": {
      "en": "Mamluk Jerusalem — where the maze comes from"
    },
    "years": {
      "en": "1260 – 1517"
    },
    "body": {
      "en": "The street plan continues largely as inherited, but the texture changes markedly. The Mamluks pack the approaches to the Haram with madrasas, pilgrim hostels, tombs and markets, stacked two and three storeys over the Roman line and roofed across it. This is the layer that makes visitors say 'maze': the grid is still under your feet, but it has been vaulted over, built into and narrowed for three centuries. If a street feels like a tunnel, you are in a Mamluk street."
    },
    "look": {
      "en": [
        "Chain Street (Tariq Bab al-Silsila): a continuous run of Mamluk façades with striped masonry and stalactite portals.",
        "The Ashrafiyya and Tankiziyya madrasas built right up against the Haram's western edge.",
        "Ablutions fountains and sabils still set into the walls along the approaches."
      ]
    }
  },
  {
    "key": "ottoman",
    "tick": {
      "en": "Ottoman"
    },
    "date": {
      "en": "c. 1538"
    },
    "title": {
      "en": "Suleiman's walls, 1538 — the walls everyone assumes are ancient"
    },
    "years": {
      "en": "1538 – 1917"
    },
    "body": {
      "en": "Suleiman the Magnificent rebuilds the circuit — and this is the crux of the whole confusion. These walls are less than 500 years old, and they follow the Roman-Byzantine line, not the biblical one. As a result, the oldest Jerusalem there is falls outside them: the City of David, the Gihon Spring, the Pool of Siloam and Mount Zion all end up outside the gates. A group that only walks inside these walls never sets foot in the city of David, Hezekiah, or the Siloam of John 9."
    },
    "look": {
      "en": [
        "Suleiman's dedicatory inscriptions over the Jaffa and Damascus Gates, dated by the Muslim year.",
        "The seam in the eastern wall south of the Golden Gate, where Ottoman masonry sits on Herodian courses.",
        "The ramparts walk — the fastest way to show a group what the walls include and, crucially, exclude."
      ]
    }
  },
  {
    "key": "today",
    "tick": {
      "en": "Today"
    },
    "date": {
      "en": "now"
    },
    "title": {
      "en": "The Old City today — everything at once"
    },
    "years": {
      "en": "1917 – present"
    },
    "body": {
      "en": "What makes the Old City hard to read is that nothing was ever demolished flat — it was built over. Roman paving lies under Crusader vaults under Mamluk façades under twentieth-century reconstruction, and the ground has risen by up to twelve metres. The Tyropoeon Valley is buried, which is why the Western Wall plaza feels level. Set this layer against the Herodian one and the geography snaps into place: the walls shrank away from the south, the valley filled, several streets still trace, though not always exactly, the corridors Rome laid down."
    },
    "look": {
      "en": [
        "Stand on the Western Wall plaza and point down, not up: the Herodian street is about twelve metres below the paving.",
        "Walk David Street and Chain Street end to end — you have just walked a Roman decumanus.",
        "Leave by the Dung Gate and keep going downhill: only then are you entering the original Jerusalem."
      ]
    }
  }
];

const LB = [
  {
    "k": "firstwall",
    "la": 31.77706,
    "lo": 35.2309,
    "e": [
      "hasmonean"
    ],
    "dx": 0,
    "dy": -16,
    "a": "middle",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "The First Wall — Hasmonean"
    },
    "s": {
      "en": "Herod inherited this circuit"
    }
  },
  {
    "k": "baris",
    "la": 31.78035,
    "lo": 35.23518,
    "e": [
      "hasmonean"
    ],
    "dx": 14,
    "dy": -6,
    "a": "start",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "The Baris fortress"
    },
    "s": {
      "en": "Herod rebuilt it as the Antonia"
    }
  },
  {
    "k": "hasmtemple",
    "la": 31.7786,
    "lo": 35.2352,
    "e": [
      "hasmonean"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "The Second Temple, rededicated 164 BC"
    },
    "s": {
      "en": "the Hanukkah temple"
    }
  },
  {
    "k": "hasmbridge",
    "la": 31.777,
    "lo": 35.23365,
    "e": [
      "hasmonean"
    ],
    "dx": -14,
    "dy": 0,
    "a": "end",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Viaduct to the Temple"
    },
    "s": {
      "en": "under Wilson’s Arch"
    }
  },
  {
    "k": "modwall",
    "la": 31.78315,
    "lo": 35.2318,
    "e": [],
    "mod": true,
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 700,
    "c": "#2f4f66",
    "n": {
      "en": "Today's Old City wall — Ottoman, 1538"
    },
    "s": {
      "en": "less than 500 years old"
    }
  },
  {
    "k": "neh",
    "la": 31.7734,
    "lo": 35.23572,
    "e": [
      "return"
    ],
    "dx": 16,
    "dy": 0,
    "a": "start",
    "w": 700,
    "c": "#8a5a2b",
    "n": {
      "en": "Nehemiah's wall, 445 BC"
    },
    "s": {
      "en": "built higher up the slope than the old wall"
    }
  },
  {
    "k": "abandoned",
    "la": 31.7739,
    "lo": 35.2302,
    "e": [
      "return"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#a8452f",
    "n": {
      "en": "Western Hill — abandoned"
    },
    "s": {
      "en": "in ruins for four centuries"
    }
  },
  {
    "k": "zerub",
    "la": 31.7786,
    "lo": 35.2352,
    "e": [
      "return"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#7a5a2a",
    "n": {
      "en": "Zerubbabel's Temple, 516 BC"
    },
    "s": {
      "en": "platform size unknown"
    }
  },
  {
    "k": "millo",
    "la": 31.7744,
    "lo": 35.2352,
    "e": [
      "david"
    ],
    "dx": -14,
    "dy": 0,
    "a": "end",
    "w": 600,
    "c": "#7a5a2a",
    "n": {
      "en": "The Millo / Stepped Stone Structure"
    }
  },
  {
    "k": "threshing",
    "la": 31.7786,
    "lo": 35.23516,
    "e": [
      "david"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#7a5a2a",
    "n": {
      "en": "Araunah's threshing floor"
    },
    "s": {
      "en": "bought by David, built on by Solomon"
    }
  },
  {
    "k": "stChristian",
    "la": 31.7789,
    "lo": 35.22878,
    "e": [],
    "mod": true,
    "dx": -13,
    "dy": 0,
    "a": "end",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Christian Quarter Rd"
    }
  },
  {
    "k": "stFrancis",
    "la": 31.77962,
    "lo": 35.22892,
    "e": [],
    "mod": true,
    "dx": 13,
    "dy": 0,
    "a": "start",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "St Francis St"
    }
  },
  {
    "k": "stArm",
    "la": 31.7745,
    "lo": 35.22855,
    "e": [],
    "mod": true,
    "dx": 13,
    "dy": 0,
    "a": "start",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Armenian Patriarchate Rd"
    }
  },
  {
    "k": "stJewish",
    "la": 31.7751,
    "lo": 35.23172,
    "e": [],
    "mod": true,
    "dx": 13,
    "dy": 0,
    "a": "start",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Jewish Quarter Rd"
    }
  },
  {
    "k": "stSouq",
    "la": 31.77655,
    "lo": 35.23028,
    "e": [],
    "mod": true,
    "dx": -13,
    "dy": 0,
    "a": "end",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Triple souq (Muristan)"
    }
  },
  {
    "k": "gNew",
    "la": 31.77931,
    "lo": 35.22628,
    "e": [
      "ottoman",
      "today"
    ],
    "dx": -13,
    "dy": 0,
    "a": "end",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "New Gate"
    }
  },
  {
    "k": "gHerod",
    "la": 31.783,
    "lo": 35.23375,
    "e": [
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": -13,
    "a": "middle",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "Herod's Gate"
    }
  },
  {
    "k": "gZion",
    "la": 31.77286,
    "lo": 35.22936,
    "e": [
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 13,
    "a": "middle",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "Zion Gate"
    }
  },
  {
    "k": "gihon",
    "la": 31.773,
    "lo": 35.236,
    "e": "all",
    "dx": 16,
    "dy": 4,
    "a": "start",
    "w": 500,
    "c": "#2f6b72",
    "n": {
      "en": "Gihon Spring"
    }
  },
  {
    "k": "siloam",
    "la": 31.77021,
    "lo": 35.23538,
    "e": [
      "muslim",
      "return",
      "hezekiah",
      "herod",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 16,
    "dy": 4,
    "a": "start",
    "w": 500,
    "c": "#2f6b72",
    "n": {
      "en": "Pool of Siloam"
    },
    "s": {
      "en": "outside today's walls"
    }
  },
  {
    "k": "cod",
    "la": 31.77235,
    "lo": 35.23558,
    "e": "all",
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "City of David ridge"
    },
    "s": {
      "en": "the original Jerusalem"
    }
  },
  {
    "k": "tunnel",
    "la": 31.7716,
    "lo": 35.2356,
    "e": [
      "return",
      "hezekiah",
      "herod",
      "today"
    ],
    "dx": 16,
    "dy": 4,
    "a": "start",
    "w": 500,
    "c": "#2f6b72",
    "n": {
      "en": "Hezekiah's Tunnel"
    }
  },
  {
    "k": "tm",
    "la": 31.7796,
    "lo": 35.2356,
    "e": [
      "muslim",
      "herod",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "Temple Mount / Haram al-Sharif"
    },
    "s": {
      "en": "Largely preserves Herod's platform outline"
    }
  },
  {
    "k": "temple",
    "la": 31.77805,
    "lo": 35.23505,
    "e": [
      "herod"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "Herod's Temple"
    }
  },
  {
    "k": "stoa",
    "la": 31.7762,
    "lo": 35.23575,
    "e": [
      "herod"
    ],
    "dx": 16,
    "dy": 4,
    "a": "start",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Royal Stoa"
    }
  },
  {
    "k": "antonia",
    "la": 31.7805,
    "lo": 35.2354,
    "e": [
      "herod"
    ],
    "dx": 16,
    "dy": -6,
    "a": "start",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Antonia Fortress"
    }
  },
  {
    "k": "ww",
    "la": 31.7768,
    "lo": 35.234,
    "e": [
      "muslim",
      "herod",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": -14,
    "dy": 0,
    "a": "end",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "Western Wall"
    }
  },
  {
    "k": "rob",
    "la": 31.77606,
    "lo": 35.23431,
    "e": [
      "herod"
    ],
    "dx": -14,
    "dy": 22,
    "a": "end",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Robinson's Arch"
    }
  },
  {
    "k": "wil",
    "la": 31.777,
    "lo": 35.23445,
    "e": [
      "herod"
    ],
    "dx": -14,
    "dy": -20,
    "a": "end",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Wilson's Arch"
    }
  },
  {
    "k": "hs",
    "la": 31.77839,
    "lo": 35.22972,
    "e": [
      "muslim",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": -14,
    "dy": 0,
    "a": "end",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "Church of the Holy Sepulchre"
    }
  },
  {
    "k": "golg",
    "la": 31.7786,
    "lo": 35.2296,
    "e": [
      "herod"
    ],
    "dx": -14,
    "dy": 0,
    "a": "end",
    "w": 700,
    "c": "#a8452f",
    "n": {
      "en": "Golgotha & the tomb"
    },
    "s": {
      "en": "OUTSIDE the city wall"
    }
  },
  {
    "k": "broad",
    "la": 31.77568,
    "lo": 35.2305,
    "e": [
      "hezekiah"
    ],
    "dx": 0,
    "dy": -16,
    "a": "middle",
    "w": 700,
    "c": "#7a5a2a",
    "n": {
      "en": "Broad Wall"
    },
    "s": {
      "en": "Hezekiah, 8th c. BC"
    }
  },
  {
    "k": "kidron",
    "la": 31.779,
    "lo": 35.2386,
    "e": "all",
    "dx": 0,
    "dy": 0,
    "a": "start",
    "w": 500,
    "c": "#8a7550",
    "n": {
      "en": "Kidron Valley"
    }
  },
  {
    "k": "hinnom",
    "la": 31.7702,
    "lo": 35.2278,
    "e": "all",
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 500,
    "c": "#8a7550",
    "n": {
      "en": "Hinnom Valley"
    }
  },
  {
    "k": "tyro",
    "la": 31.7742,
    "lo": 35.23452,
    "e": "all",
    "dx": -14,
    "dy": 0,
    "a": "end",
    "w": 600,
    "c": "#8a7550",
    "n": {
      "en": "Tyropoeon Valley"
    },
    "s": {
      "en": "buried under the modern city"
    }
  },
  {
    "k": "zion",
    "la": 31.77181,
    "lo": 35.22879,
    "e": [
      "muslim",
      "hezekiah",
      "herod",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#7a5a2a",
    "n": {
      "en": "Mount Zion"
    }
  },
  {
    "k": "cit",
    "la": 31.77618,
    "lo": 35.22782,
    "e": [
      "muslim",
      "herod",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": -14,
    "dy": -10,
    "a": "end",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Citadel / Tower of David"
    }
  },
  {
    "k": "jaffa",
    "la": 31.77661,
    "lo": 35.22755,
    "e": [
      "ottoman",
      "today"
    ],
    "dx": -14,
    "dy": 14,
    "a": "end",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "Jaffa Gate"
    }
  },
  {
    "k": "dam",
    "la": 31.78164,
    "lo": 35.2305,
    "e": [
      "muslim",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": -14,
    "a": "middle",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "Damascus Gate"
    }
  },
  {
    "k": "dung",
    "la": 31.77472,
    "lo": 35.23389,
    "e": [
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 22,
    "a": "middle",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "Dung Gate"
    }
  },
  {
    "k": "lions",
    "la": 31.78083,
    "lo": 35.23694,
    "e": [
      "ottoman",
      "today"
    ],
    "dx": 14,
    "dy": 0,
    "a": "start",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "Lions' Gate"
    }
  },
  {
    "k": "cardow",
    "la": 31.77935,
    "lo": 35.23032,
    "e": [
      "muslim",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": -14,
    "dy": 0,
    "a": "end",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Cardo → Khan el-Zeit"
    }
  },
  {
    "k": "cardoe",
    "la": 31.77878,
    "lo": 35.23212,
    "e": [
      "muslim",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 14,
    "dy": 0,
    "a": "start",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "East Cardo → El-Wad St"
    }
  },
  {
    "k": "decn",
    "la": 31.78088,
    "lo": 35.2334,
    "e": [
      "muslim",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": -18,
    "a": "middle",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "North Decumanus → Via Dolorosa"
    }
  },
  {
    "k": "umay",
    "la": 31.77535,
    "lo": 35.2351,
    "e": [
      "muslim"
    ],
    "dx": 0,
    "dy": 22,
    "a": "middle",
    "w": 600,
    "c": "#7a5a2a",
    "n": {
      "en": "Umayyad palaces, 8th c."
    }
  },
  {
    "k": "dec",
    "la": 31.7769,
    "lo": 35.2293,
    "e": [
      "muslim",
      "aelia",
      "byz",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 20,
    "a": "middle",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Decumanus → David St / Chain St"
    }
  },
  {
    "k": "nea",
    "la": 31.77445,
    "lo": 35.23085,
    "e": [
      "byz"
    ],
    "dx": 0,
    "dy": 22,
    "a": "middle",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Nea Church"
    }
  },
  {
    "k": "beth",
    "la": 31.78145,
    "lo": 35.23593,
    "e": [
      "herod",
      "byz",
      "crusader"
    ],
    "dx": 14,
    "dy": 0,
    "a": "start",
    "w": 500,
    "c": "#2f6b72",
    "n": {
      "en": "Pool of Bethesda"
    }
  },
  {
    "k": "upper",
    "la": 31.7738,
    "lo": 35.2294,
    "e": [
      "herod"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#7a5a2a",
    "n": {
      "en": "Upper City"
    },
    "s": {
      "en": "priestly mansions"
    }
  },
  {
    "k": "ophel",
    "la": 31.7752,
    "lo": 35.2357,
    "e": [
      "david",
      "return",
      "hezekiah",
      "herod"
    ],
    "dx": 14,
    "dy": 0,
    "a": "start",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Ophel"
    }
  },
  {
    "k": "2w",
    "la": 31.779,
    "lo": 35.2313,
    "e": [
      "herod"
    ],
    "dx": -14,
    "dy": -6,
    "a": "end",
    "w": 600,
    "c": "#a8452f",
    "n": {
      "en": "Second Wall"
    },
    "s": {
      "en": "course disputed"
    }
  },
  {
    "k": "3w",
    "la": 31.7856,
    "lo": 35.2305,
    "e": [
      "herod"
    ],
    "dx": 0,
    "dy": -16,
    "a": "middle",
    "w": 600,
    "c": "#a8452f",
    "n": {
      "en": "Third Wall — Agrippa I, AD 41–44"
    },
    "s": {
      "en": "after Jesus' lifetime; line disputed"
    }
  },
  {
    "k": "muslimq",
    "la": 31.78,
    "lo": 35.2338,
    "e": [
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Muslim Quarter"
    }
  },
  {
    "k": "jewishq",
    "la": 31.7754,
    "lo": 35.232,
    "e": [
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Jewish Quarter"
    }
  },
  {
    "k": "christq",
    "la": 31.7795,
    "lo": 35.2281,
    "e": [
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Christian Quarter"
    }
  },
  {
    "k": "armq",
    "la": 31.7748,
    "lo": 35.2288,
    "e": [
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 0,
    "a": "middle",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Armenian Quarter"
    }
  },
  {
    "k": "wwp",
    "la": 31.77655,
    "lo": 35.2332,
    "e": [
      "today"
    ],
    "dx": -12,
    "dy": 20,
    "a": "end",
    "w": 600,
    "c": "#2f4f66",
    "n": {
      "en": "Western Wall plaza"
    },
    "s": {
      "en": "flat — the valley is beneath it"
    }
  },
  {
    "k": "dome",
    "la": 31.77802,
    "lo": 35.23516,
    "e": [
      "muslim",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 0,
    "dy": 2,
    "a": "middle",
    "w": 600,
    "c": "#7a5a2a",
    "n": {
      "en": "Dome of the Rock"
    }
  },
  {
    "k": "aqsa",
    "la": 31.77618,
    "lo": 35.23576,
    "e": [
      "muslim",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 14,
    "dy": 4,
    "a": "start",
    "w": 500,
    "c": "#7a5a2a",
    "n": {
      "en": "Al-Aqsa Mosque"
    }
  },
  {
    "k": "golden",
    "la": 31.77889,
    "lo": 35.23694,
    "e": [
      "muslim",
      "crusader",
      "ayyubid",
      "mamluk",
      "ottoman",
      "today"
    ],
    "dx": 14,
    "dy": 0,
    "a": "start",
    "w": 500,
    "c": "#2f4f66",
    "n": {
      "en": "Golden Gate"
    }
  }
];

window.JD = { P, T, LEG, SECKEYS, CS, ERAS, LB };
