/* Interactive New Testament Atlas — data
   Coordinates are real (WGS84). Where a site's identification is debated,
   `uncertain: true` marks it and the panel says so. */

const PLACES = [
/* ——— GALILEE ——— */
{
  id: "nazareth", name: "Nazareth", greek: "Ναζαρέτ", modern: "Nāṣerat / Nazareth, Israel",
  lat: 32.7021, lon: 35.2978, cat: "town", region: "Galilee (Herod Antipas)",
  blurb: "An obscure agricultural village of perhaps 200–400 people, hidden in a limestone bowl a mile off the Via Maris.",
  scriptures: [
    { ref: "Luke 1:26–27", text: "Now in the sixth month, the angel Gabriel was sent from God to a city of Galilee, named Nazareth, to a virgin pledged to be married to a man whose name was Joseph, of David’s house. The virgin’s name was Mary." },
    { ref: "John 1:46", text: "Nathanael said to him, “Can any good thing come out of Nazareth?” Philip said to him, “Come and see.”" },
    { ref: "Luke 4:16", text: "He came to Nazareth, where he had been brought up. He entered, as was his custom, into the synagogue on the Sabbath day, and stood up to read." },
    { ref: "Luke 4:28–29", text: "They were all filled with wrath in the synagogue, as they heard these things. They rose up, threw him out of the city, and led him to the brow of the hill that their city was built on, that they might throw him off the cliff." }
  ],
  greco: "Nazareth is unmentioned in the Old Testament, Josephus (who names dozens of Galilean towns), or the Talmud. It lay four miles from Sepphoris, Antipas' Greek-styled capital — close enough that a village builder (τέκτων) would plausibly have found work on its theatre and colonnades, and close enough that Greek was heard in the marketplace.",
  jewish: "Excavated houses show ritual purity concerns: stone vessels (which the Mishnah holds cannot contract impurity) and stepped plaster miqva'ot. This was a conservative, observant, Torah-keeping village — not a Hellenized one. Luke 4 preserves the earliest surviving description of synagogue practice: standing to read the prophets, sitting to expound.",
  arch: "Beneath the Church of the Annunciation: rock-cut silos, cisterns, wine and olive presses, and courtyard-house foundations. In 2009 a first-century house was uncovered near Mary's Well. No public buildings, no paved street, no inscriptions — the material record matches Nathanael's contempt.",
  geo: "A hollow at ~1,150 ft in the Nazareth ridge, screened from the Jezreel Valley by the hill of the 'brow.' From the crest above the village the whole Esdraelon plain is visible: Megiddo, Mount Tabor, Gilboa, Carmel — the corridor along which every army and caravan of the ancient Near East passed. Jesus grew up watching the world go by from a place the world ignored.",
  why: "The Incarnation is anchored in a village with no résumé. Every claim about Jesus' authority had to survive the question 'isn't this the carpenter?' (Mark 6:3). Nazareth is where the scandal of particularity is geographical.",
  questions: [
    "What does it mean that God chose a village so unimportant it left no written trace?",
    "Jesus reads Isaiah 61 and stops before the line about vengeance. Why does that omission enrage them?",
    "Where is the 'Nazareth' in your own assumptions about where God works?"
  ]
},
{
  id: "sepphoris", name: "Sepphoris", greek: "Σεπφωρίς / Autokratoris", modern: "Tzippori, Israel",
  lat: 32.7524, lon: 35.2794, cat: "city", region: "Galilee (Herod Antipas)",
  blurb: "Antipas' first capital, four miles from Nazareth — the Greco-Roman city Jesus never once enters in the Gospels.",
  scriptures: [
    { ref: "Matthew 4:23", text: "Jesus went about in all Galilee, teaching in their synagogues, preaching the Good News of the Kingdom, and healing every disease and every sickness among the people." }
  ],
  greco: "Josephus calls it 'the ornament of all Galilee.' Burned by Rome in 4 BC after the revolt of Judas son of Ezekias and its people enslaved, it was rebuilt by Antipas as Autokratoris with a theatre seating several thousand, a colonnaded cardo, and mosaic villas — including the famous 'Mona Lisa of the Galilee.'",
  jewish: "After AD 135 Sepphoris became a rabbinic centre: Rabbi Judah ha-Nasi moved the Sanhedrin here and compiled the Mishnah in this city c. AD 200. Yet even in its Roman heyday its coins bear no pagan image, and the city held dozens of miqva'ot — Hellenistic form, Jewish substance.",
  arch: "Theatre, Roman villa mosaics, a Nile Festival building, a 4th-century synagogue with a zodiac mosaic, and an extensive network of ritual baths and cisterns.",
  geo: "On a hill commanding the road from the Mediterranean to the Sea of Galilee, with the Beth Netofa valley as its breadbasket. Visible from the ridge above Nazareth.",
  why: "The Gospels' silence is itself data. Jesus works the villages and avoids the two Herodian capitals (Sepphoris, Tiberias) — a deliberate strategy of the margins, not the centre.",
  questions: [
    "Why might Jesus have avoided the region's two largest cities?",
    "How does knowing a Roman theatre stood four miles from Nazareth change how you picture Jesus' upbringing?"
  ]
},
{
  id: "capernaum", name: "Capernaum", greek: "Καφαρναούμ (Kefar Naḥum)", modern: "Kfar Nahum, Israel",
  lat: 32.8808, lon: 35.5751, cat: "city", region: "Galilee (Herod Antipas)",
  blurb: "Jesus' operational base — 'his own city' — a fishing and customs town of ~1,500 on the lake's north shore.",
  scriptures: [
    { ref: "Matthew 4:13", text: "Leaving Nazareth, he came and lived in Capernaum, which is by the sea, in the region of Zebulun and Naphtali," },
    { ref: "Mark 1:21–22", text: "They went into Capernaum, and immediately on the Sabbath day he entered into the synagogue and taught. They were astonished at his teaching, for he taught them as having authority, and not as the scribes." },
    { ref: "Mark 2:3–5", text: "Four people came, carrying a paralytic to him. When they could not come near to him for the crowd, they removed the roof where he was. When they had broken it up, they let down the mat that the paralytic was lying on. Jesus, seeing their faith, said to the paralytic, “Son, your sins are forgiven you.”" },
    { ref: "Matthew 11:23", text: "You, Capernaum, who are exalted to heaven, you will go down to Hades. For if the mighty works had been done in Sodom which were done in you, it would have remained until today." }
  ],
  greco: "A border town: the frontier between Antipas' Galilee and Philip's territory ran just east, which is why a customs post (Matthew's τελώνιον) and a garrison officer stood here. The centurion of Luke 7 was probably an officer of Antipas' auxiliaries rather than a legionary — Rome kept no legion in Galilee before AD 66.",
  jewish: "The white limestone synagogue standing today is 4th–5th century, but it sits on black basalt foundations of the first-century synagogue — which some excavators identify with the one the centurion built (Luke 7:5); others regard that identification as plausible but unproven. A stone frieze here carries a carved image of the Ark of the Covenant on wheels.",
  arch: "Basalt insulae of courtyard houses with shared roofs of beams, brush and packed mud — exactly the roof four men could dig through. An octagonal Byzantine church stands over a first-century house venerated from the 4th century as Peter's; fishhooks and net weights were found in its floor.",
  geo: "At 686 ft below sea level on the lake's north-west shore, at the junction of the Via Maris with the lake road, with seven springs and the richest fishing grounds of the Kinneret nearby. A boat could reach Bethsaida, Magdala, Gennesaret, or the Gentile east shore within hours.",
  why: "Capernaum is the base camp of the Gospel: the synagogue teaching, the paralytic, Peter's mother-in-law, the centurion's servant, Jairus' daughter, the tax-money fish, the Bread of Life discourse. Most privileged town in history — and the one Jesus curses hardest.",
  questions: [
    "Why is Jesus' harshest word (Matt 11:23) spoken over the town that saw the most?",
    "What does it cost the four friends to dig through another family's roof?",
    "How does a border town shape a ministry — customs officers, soldiers, travellers?"
  ]
},
{
  id: "bethsaida", name: "Bethsaida (Julias)", greek: "Βηθσαϊδά", modern: "et-Tell / el-Araj, Israel",
  lat: 32.9106, lon: 35.6299, cat: "town", region: "Gaulanitis (Herod Philip)",
  blurb: "'House of the fisherman' — hometown of Peter, Andrew and Philip, raised to a Greek polis by Herod Philip.",
  uncertain: true,
  scriptures: [
    { ref: "John 1:44", text: "Now Philip was from Bethsaida, of the city of Andrew and Peter." },
    { ref: "Mark 8:22–25", text: "He came to Bethsaida. They brought a blind man to him, and begged him to touch him. He took hold of the blind man by the hand, and brought him out of the village. When he had spat on his eyes, and laid his hands on him, he asked him if he saw anything. He looked up, and said, “I see men; for I see them like trees walking.” Then again he laid his hands on his eyes. He looked intently, and was restored, and saw everyone clearly." },
    { ref: "Luke 9:10–11", text: "The apostles, when they had returned, told him what things they had done. He took them, and withdrew apart to a desert region of a city called Bethsaida. But the multitudes, perceiving it, followed him. He welcomed them, and spoke to them of God’s Kingdom, and he cured those who needed healing." }
  ],
  greco: "Philip the tetrarch refounded it as Julias c. AD 30, honouring a member of the imperial family — Josephus names Julia; whether he means Augustus' daughter or (after her fall from favour) Livia under her adopted name is debated. Philip was buried there — a village upgraded into a Greek city with the tetrarch's tomb in it. Outside Antipas' jurisdiction, it was Jesus' nearest political bolt-hole from Galilee.",
  jewish: "A mixed frontier population: Jewish fishing families like Peter's alongside Greek-speaking settlers, which explains why three of the Twelve carry Greek names (Philip, Andrew) and why Greek-speaking pilgrims later approach Jesus through Philip (John 12:20–22).",
  arch: "Two candidate sites, and the balance has shifted. Et-Tell, on a basalt spur about a mile inland, yields an Iron Age gate and Roman-period remains, but its distance from the water has troubled scholars since 1880 and no Byzantine church has been found there. El-Araj, on the shoreline, has produced a first-century fishing village beneath a fifth-century basilica whose mosaic — uncovered in 2022 — asks the intercession of the 'chief and commander of the heavenly apostles', matching the eighth-century pilgrim Willibald's account of a church at Bethsaida over the house of Peter and Andrew. Excavators now regard el-Araj as the stronger candidate, though they stop short of calling it proven. The marker here stands at et-Tell; el-Araj lies nearer the shore.",
  geo: "East of the Jordan's inflow into the lake, in the fertile, marshy Bethsaida plain. The 'desert place' of the feeding of the 5,000 lies on the grassy slopes just east.",
  why: "Bethsaida supplies a third of the inner circle, hosts the only two-stage healing in the Gospels, and shares Capernaum's woe (Matt 11:21). It is also where crossing a border becomes a ministry tactic.",
  questions: [
    "Why does Jesus heal the blind man in two stages — and why immediately before Peter's half-seeing confession?",
    "What does it mean that Jesus repeatedly crosses a political border to find rest?"
  ]
},
{
  id: "chorazin", name: "Chorazin", greek: "Χοραζίν", modern: "Korazim, Israel",
  lat: 32.9073, lon: 35.5637, cat: "town", region: "Galilee (Herod Antipas)",
  blurb: "A basalt hill town two miles above Capernaum, named in the Gospels only to be judged.",
  scriptures: [
    { ref: "Matthew 11:21", text: "“Woe to you, Chorazin! Woe to you, Bethsaida! For if the mighty works had been done in Tyre and Sidon which were done in you, they would have repented long ago in sackcloth and ashes." }
  ],
  greco: "Never mentioned by Josephus; a purely local agricultural centre producing grain and olive oil for the lake towns.",
  jewish: "The Talmud singles out Chorazin's wheat for quality (Menaḥot 85a). Its excavated synagogue contains a carved basalt 'Seat of Moses' — the seat from which the Torah scroll was read, illuminating Matthew 23:2, 'the scribes and the Pharisees sit in Moses' seat.'",
  arch: "A 3rd–4th century basalt synagogue, a residential quarter, olive presses, miqva'ot, and the stone throne. First-century remains are sparse — the town was small.",
  geo: "On the plateau 900 ft above the lake, on black volcanic rock, with a commanding view down to Capernaum and the Kinneret.",
  why: "The 'woes' triangle (Chorazin–Bethsaida–Capernaum) shows that the greatest guilt attaches to the most exposure, not the most sin. Chorazin's only biblical claim to fame is having seen too much.",
  questions: [
    "What would it look like for your own church or town to be 'Chorazin'?",
    "Why does Jesus compare Jewish towns unfavourably with pagan Tyre and Sidon?"
  ]
},
{
  id: "magdala", name: "Magdala (Taricheae)", greek: "Μαγδαλά / Ταριχέαι", modern: "Migdal, Israel",
  lat: 32.8272, lon: 35.5160, cat: "town", region: "Galilee (Herod Antipas)",
  blurb: "The lake's fish-salting industrial town, and the home of Mary called Magdalene.",
  scriptures: [
    { ref: "Matthew 15:39", text: "Then he sent away the multitudes, got into the boat, and came into the borders of Magdala." },
    { ref: "Luke 8:2–3", text: "and certain women who had been healed of evil spirits and infirmities: Mary who was called Magdalene, from whom seven demons had gone out; and Joanna, the wife of Chuzas, Herod’s steward; Susanna; and many others; who served them from their possessions." }
  ],
  greco: "Its Greek name Taricheae means 'the salt-fish factories.' Magdalan salted fish was exported across the empire; Strabo knows the trade. Josephus made it his headquarters in the revolt, and Rome's naval battle on the lake in AD 67 was fought off its harbour.",
  jewish: "A synagogue of the AD 20s–60s was found here in 2009 — one of only a handful of certain first-century synagogues in Galilee, and a room of the kind in which Jesus taught elsewhere; no surviving text places him in this particular building. Its carved 'Magdala Stone' shows a seven-branched menorah, possibly carved by someone who had seen the Jerusalem Temple's own lampstand.",
  arch: "A first-century synagogue with frescoed walls and mosaic floor, found in 2009; the Magdala Stone; a second first-century synagogue identified nearby since — as of the most recent published excavation reports, the only settlement of the period known to have two; a harbour with mooring stones; miqva'ot fed by groundwater; and a market and fish-processing quarter.",
  geo: "At the north end of the fertile Plain of Gennesaret, where the Via Maris runs along the shore beneath the cliffs of Arbel.",
  why: "The first witness of the Resurrection came from a hard industrial town and a history of torment. Magdala also quietly documents that women financed the movement 'of their substance.'",
  questions: [
    "What difference does it make that the Resurrection's first preacher was a woman from Magdala?",
    "Luke says women funded the ministry. How does that reshape your picture of the Twelve on the road?"
  ]
},
{
  id: "tiberias", name: "Tiberias", greek: "Τιβεριάς", modern: "Tverya, Israel",
  lat: 32.7940, lon: 35.5320, cat: "city", region: "Galilee (Herod Antipas)",
  blurb: "Antipas' new lakeside capital, named for the emperor — mentioned once, never entered.",
  scriptures: [
    { ref: "John 6:23", text: "However boats from Tiberias came near to the place where they ate the bread after the Lord had given thanks." }
  ],
  greco: "Founded between about AD 17 and 20 with a stadium, a palace decorated with animal images, and a Greek civic constitution. Because it was built over a cemetery, observant Jews initially refused to live there and Antipas had to compel settlers.",
  jewish: "Declared ritually unclean at its founding; later purified by Rabbi Shimon bar Yoḥai. After AD 200 it became the seat of the Sanhedrin, the home of the Jerusalem Talmud (completed c. AD 400) and of the Masoretes who fixed the vowel-pointing of the Hebrew Bible.",
  arch: "Southern city gate, cardo, basilica, bath complex, a Roman theatre, and the hot springs of Hammat Tiberias with their zodiac-mosaic synagogue.",
  geo: "On the lake's west shore, 682 ft below sea level, beside sulphur springs, with the Galilean hills rising sharply behind.",
  why: "The second capital Jesus never visits. The Gospel spreads through fishing villages while the seat of power hears of it only by rumour — and Antipas eventually wants a show (Luke 23:8).",
  questions: [
    "Why do the Gospels record no sermon in either Galilean capital?",
    "What does it say that the city built on a graveyard became the birthplace of the Talmud?"
  ]
},
{
  id: "beatitudes", name: "Mount of Beatitudes", greek: "τὸ ὄρος", modern: "Mt. Eremos / Karei Deshe, Israel",
  lat: 32.8811, lon: 35.5556, cat: "site", region: "Galilee (Herod Antipas)",
  blurb: "The traditional hillside above Capernaum where Jesus delivered the Sermon on the Mount.",
  uncertain: true,
  scriptures: [
    { ref: "Matthew 5:1–3", text: "Seeing the multitudes, he went up onto the mountain. When he had sat down, his disciples came to him. He opened his mouth and taught them, saying, “Blessed are the poor in spirit, for theirs is the Kingdom of Heaven." },
    { ref: "Matthew 7:28–29", text: "When Jesus had finished saying these things, the multitudes were astonished at his teaching, for he taught them with authority, and not like the scribes." },
    { ref: "Luke 6:12–13", text: "In these days, he went out to the mountain to pray, and he continued all night in prayer to God. When it was day, he called his disciples, and from them he chose twelve, whom he also named apostles:" }
  ],
  greco: "Open-air teaching to a seated crowd was the recognised posture of a philosopher gathering disciples; Matthew's readers would hear a claim to a school. The hillside forms a shallow natural amphitheatre facing the water, and visitors have long noted how far an unaided voice carries across it.",
  jewish: "'He went up into a mountain and sat' is Moses language: Sinai, the mountain, the new Torah — but this teacher says 'but I say unto you.' The Beatitudes' form matches wisdom blessings found in the Dead Sea Scrolls (4Q525).",
  arch: "No first-century structure; a 4th-century Byzantine chapel stood lower down at Tabgha, and the present Italian church dates to 1938. The location is traditional, not excavated.",
  geo: "A grassy slope between Capernaum and Gennesaret, rising 300 ft from the shore, with the whole northern lake in view and the Golan heights beyond.",
  why: "The constitution of the kingdom is issued on an unmarked Galilean hillside rather than in a temple or a forum — legislation without a capital.",
  questions: [
    "How does the setting — a hillside, not a synagogue — shape the Sermon's authority?",
    "Which Beatitude most unsettles the culture you actually live in?"
  ]
},
{
  id: "cana", name: "Cana of Galilee", greek: "Κανὰ τῆς Γαλιλαίας", modern: "Kafr Kanna / Khirbet Qana, Israel",
  lat: 32.7490, lon: 35.3392, cat: "town", region: "Galilee (Herod Antipas)",
  blurb: "Site of the first sign — water into wine at a village wedding.",
  uncertain: true,
  scriptures: [
    { ref: "John 2:6–11", text: "Now there were six water pots of stone set there after the Jews’ way of purifying, containing two or three metretes apiece. Jesus said to them, “Fill the water pots with water.” They filled them up to the brim. He said to them, “Now draw some out, and take it to the ruler of the feast.” So they took it. When the ruler of the feast tasted the water now become wine, and didn’t know where it came from (but the servants who had drawn the water knew), the ruler of the feast called the bridegroom, and said to him, “Everyone serves the good wine first, and when the guests have drunk freely, then that which is worse. You have kept the good wine until now!” This beginning of his signs Jesus did in Cana of Galilee, and revealed his glory; and his disciples believed in him." },
    { ref: "John 4:46–47", text: "Jesus came therefore again to Cana of Galilee, where he made the water into wine. There was a certain nobleman whose son was sick at Capernaum. When he heard that Jesus had come out of Judea into Galilee, he went to him, and begged him that he would come down and heal his son, for he was at the point of death." }
  ],
  greco: "A village wedding was a week-long public feast financed by the groom's family; running out of wine was a lasting social humiliation in an honour-shame culture, not a catering problem.",
  jewish: "The 'six waterpots of stone, after the manner of the purifying of the Jews' are the stone vessels of halakhic purity law — Jesus fills the machinery of ritual washing with celebration wine. Roughly 120–180 gallons.",
  arch: "Khirbet Qana, eight miles north of Nazareth, has produced a first-century village with a venerated cave containing stone vessel fragments, and is favoured by many archaeologists; Kafr Kanna holds the older pilgrim tradition.",
  geo: "On the northern edge of the Beth Netofa valley, a half-day's walk from Nazareth and a day from Capernaum — 'he went down to Capernaum' is literal: 1,150 ft above sea level to 686 ft below.",
  why: "The first sign is not a healing or an exorcism but the rescue of a party. John frames the whole ministry as a wedding feast whose best wine comes last.",
  questions: [
    "Why does John choose a wedding, and abundance, as sign number one?",
    "What is being said by using the purification jars for the wine?"
  ]
},
{
  id: "nain", name: "Nain", greek: "Ναΐν", modern: "Nein, Israel",
  lat: 32.6318, lon: 35.3436, cat: "town", region: "Galilee (Herod Antipas)",
  blurb: "Where Jesus stopped a funeral procession and raised a widow's only son.",
  scriptures: [
    { ref: "Luke 7:12–15", text: "Now when he came near to the gate of the city, behold, one who was dead was carried out, the only son of his mother, and she was a widow. Many people of the city were with her. When the Lord saw her, he had compassion on her, and said to her, “Don’t cry.” He came near and touched the coffin, and the bearers stood still. He said, “Young man, I tell you, arise!” He who was dead sat up, and began to speak. And he gave him to his mother." }
  ],
  greco: "Burial took place the same day, outside the walls; professional mourners and flute players led the bier. A widow with no son had no legal claim on anyone's support — this is destitution as well as grief.",
  jewish: "Touching a bier transmits corpse impurity (Numbers 19). Jesus deliberately touches it. Elijah raised a widow's son at Zarephath and Elisha at Shunem — Shunem lies two miles across the valley in plain sight, which is why the crowd cries 'a great prophet is risen up among us.'",
  arch: "A small modern village on the ancient site; tombs cut into the hillside east of the village mark the ancient cemetery outside the gate.",
  geo: "On the north slope of the Hill of Moreh, looking across the Jezreel Valley to Mount Gilboa, one day's walk from Capernaum.",
  why: "The only raising in Luke before Jairus' daughter, and the trigger for John the Baptist's question from prison (Luke 7:18–22). Compassion here precedes any expression of faith — nobody asked.",
  questions: [
    "No one in this story asks for anything. What does that reveal?",
    "Why does Luke put this miracle just before John's doubts?"
  ]
},
{
  id: "tabor", name: "Mount Tabor", greek: "Ἰταβύριον", modern: "Har Tavor, Israel",
  lat: 32.6873, lon: 35.3903, cat: "site", region: "Galilee (Herod Antipas)",
  blurb: "The traditional Mount of Transfiguration — a dome rising alone from the Jezreel plain.",
  uncertain: true,
  scriptures: [
    { ref: "Matthew 17:1–2", text: "After six days, Jesus took with him Peter, James, and John his brother, and brought them up into a high mountain by themselves. He was transfigured before them. His face shone like the sun, and his garments became as white as the light." },
    { ref: "Mark 9:7", text: "A cloud came, overshadowing them, and a voice came out of the cloud, “This is my beloved Son. Listen to him.”" }
  ],
  greco: "Tabor held a fortified settlement; Josephus walled its summit in AD 66. A garrisoned hilltop makes a poor place for a private retreat, which is the strongest argument for the alternative site.",
  jewish: "Tabor is the battlefield of Deborah and Barak (Judges 4) and a covenant-witness mountain in Psalm 89:12 and Hosea 5:1. The Transfiguration's cloud, voice, and shining face are Sinai imagery; the presence of Moses and Elijah stages Law and Prophets in conversation with the Son.",
  arch: "Byzantine and Crusader church remains under the 1924 Basilica of the Transfiguration; Iron Age and Hellenistic fortification traces on the summit.",
  geo: "An isolated limestone dome rising 1,300 ft above the Jezreel Valley to 1,886 ft. Mount Hermon (9,232 ft), near Caesarea Philippi where the previous scene is set, is the leading alternative candidate.",
  why: "Six days after Peter's confession and the first passion prediction, the disciples are shown a glory that the crucifixion will seem to contradict — wherever the mountain stood.",
  questions: [
    "Why does the Transfiguration come immediately after Jesus predicts his death?",
    "Compare Tabor with Hermon as the site. Does the geography change the meaning?"
  ]
},
{
  id: "gennesaret", name: "Plain of Gennesaret", greek: "Γεννησαρέτ", modern: "Ginosar, Israel",
  lat: 32.8475, lon: 35.5228, cat: "site", region: "Galilee (Herod Antipas)",
  blurb: "The lake's fertile crescent — and the shore where a first-century fishing boat was found.",
  scriptures: [
    { ref: "Mark 6:53–56", text: "When they had crossed over, they came to land at Gennesaret, and moored to the shore. When they had come out of the boat, immediately the people recognized him, and ran around that whole region, and began to bring those who were sick, on their mats, to where they heard he was. Wherever he entered, into villages, or into cities, or into the country, they laid the sick in the marketplaces, and begged him that they might just touch the fringe of his garment; and as many as touched him were made well." },
    { ref: "Luke 5:4–6", text: "When he had finished speaking, he said to Simon, “Put out into the deep, and let down your nets for a catch.” Simon answered him, “Master, we worked all night, and took nothing; but at your word I will let down the net.” When they had done this, they caught a great multitude of fish, and their net was breaking." }
  ],
  greco: "Josephus rhapsodises over the plain: walnut, palm, fig, olive and grape all fruiting in one place, watered by the spring of Capharnaum, 'the ambition of nature.' Its produce fed the lake's export economy.",
  jewish: "The lake is called Kinneret in the Hebrew Bible, Gennesaret by Luke, and 'the sea of Tiberias' by John — three names marking three cultural layers over one body of water.",
  arch: "In 1986 a drought exposed the Galilee Boat on the shore between Ginosar and Magdala: a 27-ft fishing vessel of the first century, cedar planks on oak frames, patched from ten to twelve different woods, crewed by five and able to carry about fifteen. It matches the boats of the Gospel scenes in size and type — though nothing beyond its date connects it to Jesus himself.",
  geo: "A four-mile crescent of alluvial soil between Magdala and Capernaum, ringed by hills that funnel evening downdrafts onto the water — the mechanism behind the sudden squalls of Mark 4.",
  why: "The physical evidence of ordinary Galilean life: a poor man's patched boat, a farmer's soil, a fisherman's night shift. This is the texture in which the Kingdom was announced.",
  questions: [
    "How does a patched, salvaged boat change how you read 'they left their nets'?",
    "Why does Luke set the call of Peter in the middle of a failed working night?"
  ]
},

/* ——— DECAPOLIS & THE EAST ——— */
{
  id: "kursi", name: "Kursi (country of the Gadarenes/Gerasenes)", greek: "χώρα τῶν Γερασηνῶν", modern: "Kursi, Golan, Israel",
  lat: 32.8265, lon: 35.6513, cat: "site", region: "Decapolis / Gaulanitis",
  blurb: "The east-shore landing where the Legion demoniac met Jesus and the swine ran down the slope.",
  uncertain: true,
  scriptures: [
    { ref: "Mark 5:2–5", text: "When he had come out of the boat, immediately a man with an unclean spirit met him out of the tombs. He lived in the tombs. Nobody could bind him any more, not even with chains, because he had been often bound with fetters and chains, and the chains had been torn apart by him, and the fetters broken in pieces. Nobody had the strength to tame him. Always, night and day, in the tombs and in the mountains, he was crying out, and cutting himself with stones." },
    { ref: "Mark 5:9", text: "He asked him, “What is your name?” He said to him, “My name is Legion, for we are many.”" },
    { ref: "Mark 5:19–20", text: "He didn’t allow him, but said to him, “Go to your house, to your friends, and tell them what great things the Lord has done for you, and how he had mercy on you.” He went his way, and began to proclaim in Decapolis how Jesus had done great things for him, and everyone marveled." }
  ],
  greco: "'Legion' is a Roman military unit of ~5,000 men — the name of the occupier. Swine were the sacrificial animal of pagan cult and the mascot of Rome's Legio X Fretensis. To a Greek city of the Decapolis a herd of 2,000 pigs was legitimate commerce; its destruction was a serious economic loss, which is why the townspeople ask Jesus to leave.",
  jewish: "Tombs, pigs, an unclean spirit, and a Gentile territory: the scene stacks every category of impurity in Jewish law at once, and Jesus walks straight into it. The man 'clothed and in his right mind' becomes the first commissioned missionary — and he is sent to Gentiles, told to speak, where Jewish recipients of miracles are told to be silent.",
  arch: "A large 5th-century monastery and church complex at Kursi, the biggest Byzantine complex in the Golan, commemorates the miracle; a chapel stands above it beside a rock outcrop. Tombs are cut in the hillside; the shoreline here is the only place on the eastern lake where a steep slope runs down to the water.",
  geo: "On the east shore below the Golan escarpment, roughly a two-hour night crossing from Capernaum, in the territory of the Decapolis city of Hippos.",
  why: "The Kingdom crosses into Gentile, unclean, Roman-occupied space and beats it. This is the hinge on which the Gospel's Gentile mission turns — and the healed man's Decapolis preaching prepares the crowds Jesus feeds there later (Mark 7:31, 8:1).",
  questions: [
    "Why is this man told to tell everyone, when others are told to keep silent?",
    "What does the townspeople's fear (Mark 5:15–17) reveal about the cost of deliverance?",
    "How should the naming of 'Legion' shape our reading of the occupation?"
  ]
},
{
  id: "hippos", name: "Hippos (Susita)", greek: "Ἵππος", modern: "Sussita, Golan, Israel",
  lat: 32.7787, lon: 35.6600, cat: "decapolis", region: "Decapolis",
  blurb: "A Decapolis city on a flat-topped mountain directly across the water from Capernaum.",
  scriptures: [
    { ref: "Matthew 5:14", text: "You are the light of the world. A city located on a hill can’t be hidden." },
    { ref: "Mark 7:31", text: "Again he departed from the borders of Tyre and Sidon, and came to the sea of Galilee, through the middle of the region of Decapolis." }
  ],
  greco: "A Hellenistic foundation of the Seleucid period, later one of the Decapolis league; Pompey freed it in 63 BC. Colonnaded decumanus, forum, basilica, temples to Tyche and to the imperial cult, and a Roman bath fed by a six-mile aqueduct. Its coins read 'Antiocheia Hippos, sacred and autonomous.'",
  jewish: "The Mishnah and Tosefta treat Susita as a Gentile city on Jewish borders and debate produce brought from it. Josephus records violent Jewish–Gentile reprisals between Hippos and its Galilean neighbours in AD 66 — the friction was real and remembered.",
  arch: "Extensive excavation of the forum, two basilicas, city gates, the Kalybe (imperial shrine), a Roman theatre, and a nymphaeum, all on a saddle-backed plateau reached by a single narrow ridge.",
  geo: "On a 1,150-ft plateau (1,850 ft above the lake surface) two miles east of the shore — visible from Capernaum, Magdala and the Mount of Beatitudes. At night its lamps hung in the dark above the water.",
  why: "The most likely 'city set on a hill' in the sightline of the Sermon. Gentile Hippos stood in view of every crowd Jesus taught on the northern shore — the mission field was always literally visible.",
  questions: [
    "If Jesus' hearers could see a pagan city glowing on the ridge, how does Matthew 5:14–16 land differently?",
    "What does it mean that Jewish villages and Greek cities lived within sight of one another?"
  ]
},
{
  id: "gadara", name: "Gadara", greek: "Γάδαρα", modern: "Umm Qais, Jordan",
  lat: 32.6553, lon: 35.6840, cat: "decapolis", region: "Decapolis",
  blurb: "A Decapolis city of poets and philosophers, whose territory reached the lake.",
  scriptures: [
    { ref: "Matthew 8:28", text: "When he came to the other side, into the country of the Gergesenes, two people possessed by demons met him there, coming out of the tombs, exceedingly fierce, so that nobody could pass that way." }
  ],
  greco: "Gadara was a genuine intellectual centre — birthplace of Menippus the satirist, Philodemus the Epicurean (teacher of Virgil's circle), and Meleager the poet, who described his Syrian birthplace as a kind of Athens abroad. It had a theatre, hippodrome, and the hot springs of Hammat Gader nearby.",
  jewish: "Rabbinic sources know Gadara's baths and debate bathing there on the Sabbath. A Jewish minority lived in the city; Josephus says Gadarene Jews were attacked in AD 66. Gadara's territory (chōra) extended north to the lake, which reconciles Matthew's 'Gadarenes' with Mark's 'Gerasenes.'",
  arch: "Colonnaded street, two theatres, basilica terrace, Roman baths, and an octagonal Byzantine church. Extensive tomb fields line the approach roads.",
  geo: "On a ridge above the Yarmuk gorge, six miles south-east of the lake, 1,200 ft up, with the Sea of Galilee, the Golan and Mount Hermon all visible from the acropolis.",
  why: "Gadara is the Greco-Roman mind at close range: Epicurean philosophy and satire, a day's walk from Nazareth. The Gospel was not proclaimed in a cultural vacuum.",
  questions: [
    "Epicurean philosophy taught the gods were indifferent. How does the Gerasene story answer it?",
    "How do the differing names — Gadarenes, Gerasenes, Gergesenes — affect your confidence in the Gospels?"
  ]
},
{
  id: "gerasa", name: "Gerasa", greek: "Γέρασα", modern: "Jerash, Jordan",
  lat: 32.2811, lon: 35.8911, cat: "decapolis", region: "Decapolis",
  blurb: "The best-preserved Roman provincial city in the Near East, and a Decapolis heavyweight.",
  scriptures: [
    { ref: "Mark 5:1", text: "They came to the other side of the sea, into the country of the Gadarenes." },
    { ref: "Mark 8:1–3", text: "In those days, when there was a very great multitude, and they had nothing to eat, Jesus called his disciples to himself, and said to them, “I have compassion on the multitude, because they have stayed with me now three days, and have nothing to eat. If I send them away fasting to their home, they will faint on the way, for some of them have come a long way.”" }
  ],
  greco: "'Antioch on the Chrysorhoas.' Oval forum, a colonnaded cardo running most of a mile, two theatres, a hippodrome, nymphaeum, and a vast Temple of Artemis approached by a monumental stair. This is what 'Decapolis' looked like at full strength — a Greek city planted in Semitic countryside.",
  jewish: "Josephus notes that when Jews were massacred elsewhere in AD 66, Gerasa protected its Jewish residents and escorted those who wished to leave — a rare notice of good relations. A synagogue with a mosaic of Noah's ark was later built here.",
  arch: "Hadrian's Arch, the oval plaza, Temples of Zeus and Artemis, two theatres, a hippodrome, baths, and fifteen Byzantine churches. Much of the site is still unexcavated.",
  geo: "In the Gilead highlands 37 miles from the lake and 25 from the Jordan, on the King's Highway trade corridor.",
  why: "The feeding of the 4,000 happens on Gentile ground with seven baskets left over (seven: the nations). The Decapolis is where the Gospel rehearses its future.",
  questions: [
    "Why does Mark record two feedings, one Jewish and one Gentile?",
    "What does the scale of Gerasa tell you about the world the apostles later walked into?"
  ]
},
{
  id: "scythopolis", name: "Scythopolis (Beth Shean)", greek: "Σκυθόπολις", modern: "Beit She'an, Israel",
  lat: 32.5003, lon: 35.5008, cat: "decapolis", region: "Decapolis",
  blurb: "The only Decapolis city west of the Jordan, and its leading member.",
  scriptures: [
    { ref: "Mark 7:31", text: "Again he departed from the borders of Tyre and Sidon, and came to the sea of Galilee, through the middle of the region of Decapolis." }
  ],
  greco: "The Decapolis' largest city and its de facto capital. Nysa-Scythopolis claimed to be the burial place of Dionysus' nurse; it had a 7,000-seat theatre, a colonnaded street, an amphitheatre, and monumental baths. Its linen was famous throughout the empire.",
  jewish: "Beth Shean is where the Philistines hung Saul's body (1 Samuel 31:10). The Mishnah treats Beth Shean as the border of the Land for tithing purposes — a boundary case, half in and half out.",
  arch: "One of the largest excavations in Israel: theatre, bathhouses, cardo, Byzantine street, temple, mosaic-floored Roman villas, and a 6th-century synagogue — all beneath the towering Old Testament tel.",
  geo: "At the junction of the Jezreel and Jordan valleys, 400 ft below sea level, controlling the crossroads between Galilee, Samaria, and the Transjordan. Galilean pilgrims heading to Jerusalem through Perea passed here.",
  why: "The bottleneck through which Galilee met both Rome and the wider Jewish world. Anyone travelling from Nazareth to Jerusalem the eastern way walked through a Greek city.",
  questions: [
    "The route from Galilee to Jerusalem ran through Greek cities. What does that add to the phrase 'going up to Jerusalem'?",
    "Why would the Mishnah need to argue over whether Beth Shean counted as the Land?"
  ]
},
{
  id: "pella", name: "Pella", greek: "Πέλλα", modern: "Ṭabaqat Faḥl, Jordan",
  lat: 32.4570, lon: 35.6170, cat: "decapolis", region: "Decapolis",
  blurb: "Decapolis city named for Alexander's birthplace — refuge of the Jerusalem church in AD 66–70.",
  scriptures: [
    { ref: "Matthew 24:15–16", text: "“When, therefore, you see the abomination of desolation, which was spoken of through Daniel the prophet, standing in the holy place (let the reader understand), then let those who are in Judea flee to the mountains." }
  ],
  greco: "Named after Alexander the Great's Macedonian birthplace, a statement of Hellenistic identity. Destroyed by the Hasmonean Alexander Jannaeus for refusing to adopt Jewish customs; rebuilt under Pompey's settlement of 63 BC.",
  jewish: "A tradition preserved by Eusebius, writing in the fourth century, says that before the siege of Jerusalem the Christian community, warned by an oracle, withdrew across the Jordan to Pella. Matthew 24 commands flight to the mountains but does not name Pella; the tradition's historicity and timing remain debated among scholars.",
  arch: "Civic complex, odeon, Roman baths, a Hellenistic and Byzantine city, and Bronze Age levels — one of the longest continuously occupied sites in Jordan.",
  geo: "In the Jordan Valley foothills opposite Scythopolis, with perennial springs, on the road between the valley and the Gilead plateau.",
  why: "The Gentile Decapolis, where Jesus was once asked to leave, becomes the sanctuary that keeps the Jerusalem church alive.",
  questions: [
    "What does it mean that the church survived by fleeing to a pagan city?",
    "How does Matthew 24 read differently once you know where they went?"
  ]
},
{
  id: "philadelphia", name: "Philadelphia (Rabbath Ammon)", greek: "Φιλαδέλφεια", modern: "Amman, Jordan",
  lat: 31.9539, lon: 35.9450, cat: "decapolis", region: "Decapolis",
  blurb: "The southernmost Decapolis city, on the King's Highway.",
  scriptures: [
    { ref: "Mark 7:31", text: "Again he departed from the borders of Tyre and Sidon, and came to the sea of Galilee, through the middle of the region of Decapolis." }
  ],
  greco: "Renamed by Ptolemy II Philadelphus in the 3rd century BC. Its acropolis carried a Temple of Hercules; a large Roman theatre, an odeon, and a nymphaeum filled the valley below.",
  jewish: "Rabbath Ammon, the Ammonite capital where Uriah was killed (2 Samuel 11:15–17). The Ammonites are one of the perennial 'neighbours' of Israel's story.",
  arch: "Temple of Hercules, Roman theatre, odeon, nymphaeum, and the Iron Age citadel of the Ammonite kings.",
  geo: "On the Transjordan plateau at 2,600 ft, at the head of the Wadi Amman, controlling the north–south King's Highway and the desert caravan routes to Arabia.",
  why: "Marks the outer edge of the Decapolis and the reach of Greek civic culture into Arabia — the trade world through which the Gospel would soon travel.",
  questions: [
    "How far did the Decapolis actually extend, and what held the ten cities together?"
  ]
},
{
  id: "abila", name: "Abila", greek: "Ἄβιλα", modern: "Quwayliba, Jordan",
  lat: 32.6800, lon: 35.8680, cat: "decapolis", region: "Decapolis",
  blurb: "A Decapolis city in the fertile Wadi Quweilbeh, midway between Gadara and Gerasa.",
  scriptures: [
    { ref: "Mark 5:20", text: "He went his way, and began to proclaim in Decapolis how Jesus had done great things for him, and everyone marveled." }
  ],
  greco: "Listed by Pliny among the ten cities. Its wealth came from grain and olives; an aqueduct tunnel over a mile long carried water to the city.",
  jewish: "Part of the Gentile ring around Jewish Galilee and Perea; its rural population was largely Semitic Aramaic-speaking despite the Greek civic veneer.",
  arch: "Twin tells, a theatre, basilica, bath complex, an extensive tomb necropolis with painted chambers, and five Byzantine churches.",
  geo: "In a well-watered valley on the Gilead plateau, twelve miles east of the Jordan.",
  why: "One of the towns the Gerasene demoniac would have reached with his testimony — the Decapolis mission had a real, mappable footprint.",
  questions: [
    "What does it mean that the first Gentile evangelist was a formerly demonised man with no training?"
  ]
},
{
  id: "canatha", name: "Canatha", greek: "Κάναθα", modern: "Qanawat, Syria",
  lat: 32.7570, lon: 36.6180, cat: "decapolis", region: "Decapolis",
  blurb: "The most remote Decapolis city, high on the western slope of the Jebel Druze.",
  scriptures: [
    { ref: "Mark 7:31", text: "Again he departed from the borders of Tyre and Sidon, and came to the sea of Galilee, through the middle of the region of Decapolis." }
  ],
  greco: "A basalt city with a Temple of Zeus, a nymphaeum, and an odeon; later it became part of the province of Arabia. Its territory bordered the Nabataean and desert worlds.",
  jewish: "The eastern frontier of the Decapolis league; near the Trachonitis badlands ruled by Herod Philip, notorious as brigand country.",
  arch: "Temple ruins, a nymphaeum, a theatre-like odeon, a peripteral temple, and the Byzantine 'Seraya' complex, all in black basalt.",
  geo: "At 4,000 ft on the volcanic Hauran massif, 60 miles east of the Sea of Galilee.",
  why: "Fixes the true extent of the Decapolis: not a tidy cluster but a scattered league stretching from Beth Shean to the Syrian desert.",
  questions: [
    "Why did Rome want a belt of allied Greek cities on Judea's eastern flank?"
  ]
},
{
  id: "damascus", name: "Damascus", greek: "Δαμασκός", modern: "Dimashq, Syria",
  lat: 33.5138, lon: 36.2920, cat: "city", region: "Syria / Decapolis league",
  blurb: "The great caravan city north-east of Galilee, and the road on which Saul was stopped.",
  scriptures: [
    { ref: "Acts 9:3–5", text: "As he traveled, he got close to Damascus, and suddenly a light from the sky shone around him. He fell on the earth, and heard a voice saying to him, “Saul, Saul, why do you persecute me?” He said, “Who are you, Lord?” The Lord said, “I am Jesus, whom you are persecuting." },
    { ref: "Acts 9:25", text: "but his disciples took him by night, and let him down through the wall, lowering him in a basket." }
  ],
  greco: "Counted by Pliny among the Decapolis cities. A Seleucid grid city with a colossal Temple of Jupiter Damascenus and the mile-long Via Recta — the 'street which is called Straight' of Acts 9:11. At the time of Paul's escape it was under Nabataean influence (2 Cor 11:32).",
  jewish: "A large diaspora Jewish community with multiple synagogues — which is exactly why Saul carried letters there. The Dead Sea Scrolls' Damascus Document makes 'Damascus' a symbol of exile and renewal for a sectarian community.",
  arch: "The Roman Temple of Jupiter's temenos underlies the Umayyad Mosque; the Straight Street survives as the Bab Sharqi–Bab al-Jabiya axis; sections of the Roman wall remain.",
  geo: "An oasis on the Barada river at 2,300 ft, at the meeting of the King's Highway, the Via Maris, and the desert routes to Palmyra and Mesopotamia — 135 miles from Jerusalem, six days' hard travel.",
  why: "The persecutor's road becomes the mission's launch. Geography again: the Gospel's next leap happens on a trade highway, not in a temple.",
  questions: [
    "Why was Damascus worth a persecutor's six-day journey?",
    "What does Paul's basket escape say about the cost of his new allegiance?"
  ]
},

/* ——— THE NORTH ——— */
{
  id: "caesarea-philippi", name: "Caesarea Philippi", greek: "Καισάρεια ἡ Φιλίππου / Panias", modern: "Banias, Golan",
  lat: 33.2483, lon: 35.6944, cat: "city", region: "Gaulanitis (Herod Philip)",
  blurb: "A pagan sanctuary at the springs of the Jordan, where Peter confessed the Christ.",
  scriptures: [
    { ref: "Matthew 16:13–16", text: "Now when Jesus came into the parts of Caesarea Philippi, he asked his disciples, saying, “Who do men say that I, the Son of Man, am?” They said, “Some say John the Baptizer, some, Elijah, and others, Jeremiah, or one of the prophets.” He said to them, “But who do you say that I am?” Simon Peter answered, “You are the Christ, the Son of the living God.”" },
    { ref: "Matthew 16:18", text: "I also tell you that you are Peter, and on this rock I will build my assembly, and the gates of Hades will not prevail against it." },
    { ref: "Matthew 16:21", text: "From that time, Jesus began to show his disciples that he must go to Jerusalem and suffer many things from the elders, chief priests, and scribes, and be killed, and the third day be raised up." }
  ],
  greco: "Panias was a sanctuary of Pan: a great cliff face with a cave mouth, niches for statues, a spring gushing from the rock, and a court where goats were sacrificed. Herod the Great built a temple to Augustus here; his son Philip made it his capital and renamed it Caesarea Philippi. The cave was associated with the entrance to the underworld — the 'gates of Hades' — and a cult of the goat-god's fertility rites was celebrated on the terrace.",
  jewish: "Pilgrims knew this as one of the sources of the Jordan, the river of Israel's entry into the Land. To confess a Messiah in front of a shrine to Caesar and a shrine to Pan is a deliberately located act of political and religious defiance.",
  arch: "The Pan cave and cliff with Greek dedicatory inscriptions and statue niches, the Augusteum platform, a palace of Agrippa II, and the springs feeding the Nahal Hermon.",
  geo: "At 1,150 ft at the foot of Mount Hermon, 25 miles north of Capernaum — two days' walk — where snowmelt emerges as one of the Jordan's three headwaters.",
  why: "The Church's foundation is confessed at the geographical edge of Israel, in front of a pagan cave, under the shadow of Caesar's temple. From here Jesus turns toward Jerusalem and the cross.",
  questions: [
    "Why here, of all places, does Jesus ask 'who do you say that I am'?",
    "If 'the gates of hell' had a physical address in view, how does the promise change?",
    "Peter confesses rightly and is rebuked six verses later. What is he still getting wrong?"
  ]
},
{
  id: "hermon", name: "Mount Hermon", greek: "Ἀερμών", modern: "Jebel esh-Sheikh",
  lat: 33.4160, lon: 35.8570, cat: "site", region: "Iturea / Phoenicia border",
  blurb: "The snow-capped 'high mountain apart' — the leading alternative site of the Transfiguration.",
  uncertain: true,
  scriptures: [
    { ref: "Mark 9:2", text: "After six days Jesus took with him Peter, James, and John, and brought them up onto a high mountain privately by themselves, and he was changed into another form in front of them." },
    { ref: "Psalm 133:3", text: "like the dew of Hermon, that comes down on the hills of Zion: for there Yahweh gives the blessing, even life forever more." }
  ],
  greco: "Hermon's summit held a walled temenos and shrines; it was a mountain of the gods in Phoenician and Greek religion, dotted with high-place sanctuaries.",
  jewish: "In 1 Enoch, Hermon is where the rebellious watchers descend and swear their oath — a tradition alive in the first century. Deuteronomy makes Hermon the northern limit of the Promised Land.",
  arch: "Numerous Roman-period temples on its slopes (Qasr Antar near the summit is the highest known temple in the ancient world), with Greek inscriptions.",
  geo: "9,232 ft, snow-covered much of the year, 12 miles north of Caesarea Philippi and immediately above it. Mark's 'six days after' fits a mountain in the region he has just named.",
  why: "If the Transfiguration happens on Hermon, glory is revealed at the very edge of the Land, above a mountain associated with rebellion — and the shining face is answered from a cloud.",
  questions: [
    "Does the site of the Transfiguration matter theologically, or only devotionally?",
    "Compare Sinai, Hermon and Zion as mountains of revelation."
  ]
},
{
  id: "tyre", name: "Tyre", greek: "Τύρος", modern: "Sur, Lebanon",
  lat: 33.2705, lon: 35.1960, cat: "city", region: "Phoenicia (Roman Syria)",
  blurb: "Phoenician port city where a Gentile mother out-argued Jesus and won her daughter's healing.",
  scriptures: [
    { ref: "Mark 7:24–30", text: "From there he arose, and went away into the borders of Tyre and Sidon. He entered into a house, and didn’t want anyone to know it, but he couldn’t escape notice. For a woman, whose little daughter had an unclean spirit, having heard of him, came and fell down at his feet. Now the woman was a Greek, a Syrophoenician by race. She begged him that he would cast the demon out of her daughter. But Jesus said to her, “Let the children be filled first, for it is not appropriate to take the children’s bread and throw it to the dogs.” But she answered him, “Yes, Lord. Yet even the dogs under the table eat the children’s crumbs.” He said to her, “For this saying, go your way. The demon has gone out of your daughter.” She went away to her house, and found the child having been laid on the bed, with the demon gone out." },
    { ref: "Matthew 11:21–22", text: "“Woe to you, Chorazin! Woe to you, Bethsaida! For if the mighty works had been done in Tyre and Sidon which were done in you, they would have repented long ago in sackcloth and ashes. But I tell you, it will be more tolerable for Tyre and Sidon on the day of judgment than for you." }
  ],
  greco: "The greatest Phoenician trading city, famous for murex purple dye and a Temple of Melqart-Herakles. Alexander besieged it for seven months in 332 BC by building a causeway that turned the island into a peninsula — still there.",
  jewish: "Tyre bought Galilean grain, so Galilean farmers fed the city that Ezekiel 26–28 condemned. Rabbinic texts treat Tyre as the classic Gentile city, and Josephus calls the Tyrians Israel's bitterest enemies. 'Dogs' was standard Jewish slang for Gentiles — and 'crumbs' was her way of accepting the category and defeating it.",
  arch: "The Roman hippodrome (one of the largest known), a monumental necropolis, colonnaded street, baths, and the Al-Mina harbour district.",
  geo: "35 miles north-west of Capernaum on the Mediterranean coast; Jesus' longest journey outside Jewish territory.",
  why: "The only debate Jesus loses on purpose. A Gentile woman's persistence pulls the mission forward before its time, and the feeding of the 4,000 in the Decapolis follows.",
  questions: [
    "Is Jesus testing her, or is she genuinely changing the timing of the mission?",
    "Why does Mark place this Gentile faith immediately after a dispute about clean and unclean (Mark 7:1–23)?"
  ]
},
{
  id: "sidon", name: "Sidon", greek: "Σιδών", modern: "Saida, Lebanon",
  lat: 33.5630, lon: 35.3690, cat: "city", region: "Phoenicia (Roman Syria)",
  blurb: "The northernmost point Jesus is recorded reaching — deep in Gentile country.",
  scriptures: [
    { ref: "Mark 7:31", text: "Again he departed from the borders of Tyre and Sidon, and came to the sea of Galilee, through the middle of the region of Decapolis." },
    { ref: "Luke 4:25–26", text: "But truly I tell you, there were many widows in Israel in the days of Elijah, when the sky was shut up three years and six months, when a great famine came over all the land. Elijah was sent to none of them, except to Zarephath, in the land of Sidon, to a woman who was a widow." }
  ],
  greco: "Older than Tyre, famed for glassblowing (invented in this region) and purple dye, with temples to Eshmun and Astarte and a strong Greek civic culture under Rome.",
  jewish: "Zarephath, between Tyre and Sidon, is where Elijah was fed by a Gentile widow — the text Jesus quotes in Nazareth, and the reason they try to kill him. Jesus then goes and does exactly what he said Elijah did.",
  arch: "The Temple of Eshmun with its healing pools, the sea castle, and extensive royal necropoleis (source of the 'Alexander Sarcophagus').",
  geo: "50 miles north-west of Capernaum. The route back — 'through the midst of the coasts of Decapolis' — means a long circuit around Jewish Galilee.",
  why: "Nazareth rejected him for suggesting God favours Gentiles; the Gospel narrative then walks him to those Gentiles. Geography as argument.",
  questions: [
    "Why did the Nazareth sermon's Gentile examples provoke murder?",
    "Trace the Mark 7:31 route on the map. What does the detour suggest?"
  ]
},

/* ——— SAMARIA & THE COAST ——— */
{
  id: "sychar", name: "Sychar / Jacob's Well", greek: "Συχάρ", modern: "Balata, near Nablus",
  lat: 32.2035, lon: 35.2815, cat: "site", region: "Samaria (Roman prefect)",
  blurb: "The well at the foot of Gerizim where Jesus asked a Samaritan woman for a drink.",
  scriptures: [
    { ref: "John 4:6–10", text: "Jacob’s well was there. Jesus therefore, being tired from his journey, sat down by the well. It was about the sixth hour. A woman of Samaria came to draw water. Jesus said to her, “Give me a drink.” For his disciples had gone away into the city to buy food. The Samaritan woman therefore said to him, “How is it that you, being a Jew, ask for a drink from me, a Samaritan woman?” (For Jews have no dealings with Samaritans.) Jesus answered her, “If you knew the gift of God, and who it is who says to you, ‘Give me a drink,’ you would have asked him, and he would have given you living water.”" },
    { ref: "John 4:20–24", text: "Our fathers worshiped in this mountain, and you Jews say that in Jerusalem is the place where people ought to worship.” Jesus said to her, “Woman, believe me, the hour comes, when neither in this mountain, nor in Jerusalem, will you worship the Father. You worship that which you don’t know. We worship that which we know; for salvation is from the Jews. But the hour comes, and now is, when the true worshipers will worship the Father in spirit and truth, for the Father seeks such to be his worshipers. God is spirit, and those who worship him must worship in spirit and truth.”" }
  ],
  greco: "Nearby Sebaste (Samaria) was Herod's Greek-style city with a temple to Augustus; Samaria was a Roman administrative district under the prefect at Caesarea. Public conversation between a man and an unrelated woman at a well was socially transgressive in any Mediterranean village.",
  jewish: "Samaritans held the Pentateuch alone, worshipped on Gerizim, and awaited a Messiah called the Taheb. Their temple on Gerizim was destroyed by the Hasmonean John Hyrcanus — Josephus dates this to 128 BC, but the coins from the excavated site put it around 110 BC — a wound still raw two centuries later. The Mishnah debates whether Samaritan food and vessels convey impurity; John's aside 'the Jews have no dealings' is precise halakhic reporting.",
  arch: "Jacob's Well, over 100 ft deep, still yields water beneath a church at Bir Ya'qub; Tell Balata is biblical Shechem, with Middle Bronze walls and a temple.",
  geo: "In the pass between Mount Gerizim (2,890 ft) and Mount Ebal (3,084 ft), on the Ridge Route — the direct road between Judea and Galilee. Josephus records both direct and Perea/Jordan Valley travel by Galileans; a universal avoidance of Samaria is not well established.",
  why: "The longest recorded conversation Jesus has with anyone, and it is with a Samaritan woman of dubious reputation. The first person he tells plainly 'I am he' (John 4:26) is outside Israel's fold.",
  questions: [
    "Why does John give this woman more dialogue than any disciple?",
    "'Neither in this mountain, nor at Jerusalem' — what is being dismantled?",
    "What does Jesus' thirst and tiredness add to the scene?"
  ]
},
{
  id: "sebaste", name: "Sebaste (Samaria)", greek: "Σεβαστή", modern: "Sebastia, West Bank",
  lat: 32.2765, lon: 35.1905, cat: "city", region: "Samaria (Roman prefect)",
  blurb: "Herod the Great's Greek city on the old capital of Israel; later evangelised by Philip.",
  scriptures: [
    { ref: "Acts 8:5–8", text: "Philip went down to the city of Samaria, and proclaimed to them the Christ. The multitudes listened with one accord to the things that were spoken by Philip, when they heard and saw the signs which he did. For unclean spirits came out of many of those who had them. They came out, crying with a loud voice. Many who had been paralyzed and lame were healed. There was great joy in that city." },
    { ref: "Acts 1:8", text: "But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.”" }
  ],
  greco: "Herod renamed Samaria 'Sebaste' — Greek for Augustus — settled 6,000 veterans there, and crowned it with a temple to the emperor on the acropolis, plus a stadium, forum, and colonnaded street. Sebastene troops formed a mainstay of the Herodian and later Roman auxiliary forces in Judea.",
  jewish: "The Omride capital of the northern kingdom, denounced by Amos and Hosea, destroyed by Assyria in 722 BC. To Jews of Jesus' day it was doubly compromised: schismatic and imperial.",
  arch: "Temple of Augustus and its monumental staircase, a Roman theatre, stadium, forum, basilica, and the Israelite palace with its carved ivories.",
  geo: "On a commanding hill in the Samarian highlands, on the Ridge Route between Shechem and the Jezreel Valley.",
  why: "The Acts 1:8 map is a real map. Samaria is the second step, and it happens in an emperor-worship city.",
  questions: [
    "Why is Samaria the hinge between Jerusalem and 'the uttermost part of the earth'?",
    "How does a city built to honour Caesar receive the news of another king?"
  ]
},
{
  id: "caesarea", name: "Caesarea Maritima", greek: "Καισάρεια", modern: "Caesarea, Israel",
  lat: 32.5000, lon: 34.8920, cat: "city", region: "Judea (Roman prefect)",
  blurb: "Rome's engineered harbour capital of Judea — where Pilate governed and Cornelius believed.",
  scriptures: [
    { ref: "Acts 10:1–2", text: "Now there was a certain man in Caesarea, Cornelius by name, a centurion of what was called the Italian Regiment, a devout man, and one who feared God with all his house, who gave gifts for the needy generously to the people, and always prayed to God." },
    { ref: "Acts 10:34–35", text: "Peter opened his mouth and said, “Truly I perceive that God doesn’t show favoritism; but in every nation he who fears him and works righteousness is acceptable to him." }
  ],
  greco: "Herod built it in twelve years with hydraulic concrete shipped from Italy, creating a vast artificial harbour (Sebastos) on an open coast with no natural bay. A temple to Rome and Augustus, a theatre, a hippodrome, and an aqueduct from the Carmel springs. It was the seat of the Roman prefect — Pilate lived here, not in Jerusalem.",
  jewish: "A mixed city whose Jewish–Gentile civic dispute helped ignite the revolt of AD 66. Rabbi Akiva taught here. In June 1961 the 'Pilate Stone' was found here, reused as a step in the theatre: a dedication naming *Pontius Pilatus, praefectus Iudaeae*, and the first inscription of his name ever recovered from his own lifetime. It confirms his contemporary official title, prefect of Judaea — correcting later sources that call him procurator; the Gospels themselves use a general term translated 'governor' and do not preserve the Latin title.",
  arch: "Herod's harbour moles (now submerged), promontory palace, theatre, hippodrome, aqueduct, and the Pilate inscription.",
  geo: "On the Mediterranean 65 miles from Jerusalem, linked by a Roman road. Paul was imprisoned here two years and sailed for Rome from this harbour.",
  why: "Where the Gospel goes formally Gentile (Acts 10) and where Paul's appeal to Caesar begins. The Roman machinery that killed Jesus becomes the road system that carries his message.",
  questions: [
    "Why did God open the Gentile door through a soldier of the occupying army?",
    "What does Pilate's residence at Caesarea tell you about why he was in Jerusalem at Passover?"
  ]
},
{
  id: "joppa", name: "Joppa", greek: "Ἰόππη", modern: "Yafo, Israel",
  lat: 32.0540, lon: 34.7520, cat: "city", region: "Judea (Roman prefect)",
  blurb: "The old Jewish port where Peter saw the vision that unlocked the Gentile mission.",
  scriptures: [
    { ref: "Acts 10:9–15", text: "Now on the next day as they were on their journey, and got close to the city, Peter went up on the housetop to pray at about noon. He became hungry and desired to eat, but while they were preparing, he fell into a trance. He saw heaven opened and a certain container descending to him, like a great sheet let down by four corners on the earth, in which were all kinds of four-footed animals of the earth, wild animals, reptiles, and birds of the sky. A voice came to him, “Rise, Peter, kill and eat!” But Peter said, “Not so, Lord; for I have never eaten anything that is common or unclean.” A voice came to him again the second time, “What God has cleansed, you must not call unclean.”" },
    { ref: "Acts 9:36–40", text: "Now there was at Joppa a certain disciple named Tabitha, which when translated, means Dorcas. This woman was full of good works and acts of mercy which she did. In those days, she became sick, and died. When they had washed her, they laid her in an upper room. As Lydda was near Joppa, the disciples, hearing that Peter was there, sent two men to him, imploring him not to delay in coming to them. Peter got up and went with them. When he had come, they brought him into the upper room. All the widows stood by him weeping, and showing the coats and garments which Dorcas had made while she was with them. Peter sent them all out, and knelt down and prayed. Turning to the body, he said, “Tabitha, get up!” She opened her eyes, and when she saw Peter, she sat up." },
    { ref: "Jonah 1:3", text: "But Jonah rose up to flee to Tarshish from the presence of Yahweh. He went down to Joppa, and found a ship going to Tarshish; so he paid its fare, and went down into it, to go with them to Tarshish from the presence of Yahweh." }
  ],
  greco: "A poor natural harbour but the only Jewish-controlled port; Simon Maccabeus took it for the Hasmoneans. Peter lodges with a tanner ('Simon a tanner') — a trade despised for its stench and impurity.",
  jewish: "Joppa is where Jonah fled from a mission to Gentile Nineveh. Peter, at the same port, is told three times to stop refusing. Luke's readers would not have missed it.",
  arch: "Tel Yafo with Egyptian gate remains; Hellenistic and Roman levels; an extensive Jewish necropolis with Greek inscriptions.",
  geo: "On the Judean coast 35 miles from Jerusalem and 30 south of Caesarea.",
  why: "Where the ceremonial law's boundary is redrawn — not by argument but by a vision, a knock at the door, and three men waiting outside.",
  questions: [
    "Why does the vision have to be repeated three times?",
    "Peter is at Jonah's port. What is Luke telling us?"
  ]
},

/* ——— JUDEA, PEREA & THE JORDAN ——— */
{
  id: "bethabara", name: "Bethany beyond Jordan", greek: "Βηθανία πέραν τοῦ Ἰορδάνου", modern: "al-Maghtas, Jordan",
  lat: 31.8370, lon: 35.5390, cat: "site", region: "Perea (Herod Antipas)",
  blurb: "John's baptising place on the east bank — where Jesus was baptised and identified.",
  uncertain: true,
  scriptures: [
    { ref: "Matthew 3:13–17", text: "Then Jesus came from Galilee to the Jordan to John, to be baptized by him. But John would have hindered him, saying, “I need to be baptized by you, and you come to me?” But Jesus, answering, said to him, “Allow it now, for this is the fitting way for us to fulfill all righteousness.” Then he allowed him. Jesus, when he was baptized, went up directly from the water: and behold, the heavens were opened to him. He saw the Spirit of God descending as a dove, and coming on him. Behold, a voice out of the heavens said, “This is my beloved Son, with whom I am well pleased.”" },
    { ref: "John 1:28–29", text: "These things were done in Bethany beyond the Jordan, where John was baptizing. The next day, he saw Jesus coming to him, and said, “Behold, the Lamb of God, who takes away the sin of the world!" },
    { ref: "Matthew 3:4", text: "Now John himself wore clothing made of camel’s hair, with a leather belt around his waist. His food was locusts and wild honey." }
  ],
  greco: "The east bank was Perea, Antipas' territory — the reason John's criticism of Antipas' marriage got him arrested and taken to Machaerus, also in Perea.",
  jewish: "This is where Israel crossed into the Land under Joshua and where Elijah was taken up (2 Kings 2). John's camel hair and leather belt are Elijah's costume (2 Kings 1:8): a prophet staging a new entry into the land, calling Israel to come out and come back in. Immersion in flowing 'living water' was the highest grade of ritual purification in Jewish law.",
  arch: "Wadi al-Kharrar / al-Maghtas on the Jordanian side has Byzantine churches, baptismal pools, and a pilgrim complex built around the tradition; the site is a UNESCO World Heritage listing.",
  geo: "In the Jordan Valley at ~1,100 ft below sea level, five miles north of the Dead Sea and opposite Jericho — a hot, barren rift-floor location a day's walk from Jerusalem.",
  why: "The ministry begins with a re-entry into the Promised Land, in the wilderness rather than the Temple. The Father speaks; the Spirit descends; the Son is named — the Trinity's clearest scene has a map reference.",
  questions: [
    "Why does the Messiah submit to a baptism of repentance?",
    "Why start the renewal of Israel outside the land, at the crossing point?",
    "What is John's clothing arguing before he says a word?"
  ]
},
{
  id: "jericho", name: "Jericho", greek: "Ἱεριχώ", modern: "Ariha / Tulul Abu al-Alayiq",
  lat: 31.8700, lon: 35.4440, cat: "city", region: "Judea (Roman prefect)",
  blurb: "Oasis city of palms and balsam, tax hub, and the last stop before the climb to Jerusalem.",
  scriptures: [
    { ref: "Luke 19:1–6", text: "He entered and was passing through Jericho. There was a man named Zacchaeus. He was a chief tax collector, and he was rich. He was trying to see who Jesus was, and couldn’t because of the crowd, because he was short. He ran on ahead, and climbed up into a sycamore tree to see him, for he was going to pass that way. When Jesus came to the place, he looked up and saw him, and said to him, “Zacchaeus, hurry and come down, for today I must stay at your house.” He hurried, came down, and received him joyfully." },
    { ref: "Mark 10:46–52", text: "They came to Jericho. As he went out from Jericho, with his disciples and a great multitude, the son of Timaeus, Bartimaeus, a blind beggar, was sitting by the road. When he heard that it was Jesus the Nazarene, he began to cry out, and say, “Jesus, you son of David, have mercy on me!” Many rebuked him, that he should be quiet, but he cried out much more, “You son of David, have mercy on me!” Jesus stood still, and said, “Call him.” They called the blind man, saying to him, “Cheer up! Get up. He is calling you!” He, casting away his cloak, sprang up, and came to Jesus. Jesus asked him, “What do you want me to do for you?” The blind man said to him, “Rabboni, that I may see again.” Jesus said to him, “Go your way. Your faith has made you well.” Immediately he received his sight, and followed Jesus on the way." },
    { ref: "Luke 10:30", text: "Jesus answered, “A certain man was going down from Jerusalem to Jericho, and he fell among robbers, who both stripped him and beat him, and departed, leaving him half dead." }
  ],
  greco: "Herod the Great built a winter palace complex here with pools, a hippodrome-theatre, and Roman baths; he died in Jericho in 4 BC. Its balsam plantations were a state monopoly of enormous value — Mark Antony gave them to Cleopatra. That revenue explains a 'chief among the publicans' being rich.",
  jewish: "Jericho housed a large population of priests who served in Jerusalem in rotation — which is why the priest and the Levite in the Good Samaritan parable are travelling that exact road. Rahab's city, and Joshua's first conquest.",
  arch: "Tell es-Sultan (Old Testament Jericho, with the world's oldest known town wall), Herod's three winter palaces at Tulul Abu al-Alayiq, Hasmonean pools, and a Roman-period aqueduct system.",
  geo: "846 ft below sea level, fed by the spring of Elisha, at the mouth of the Wadi Qelt. The 17-mile road up to Jerusalem climbs 3,300 ft through ravines that sheltered bandits — the 'going down' of the parable is literal.",
  why: "The last town before the Passion. Two very different encounters — a rich collaborator and a blind beggar — are Luke's and Mark's final portraits of who the Kingdom receives.",
  questions: [
    "Why does Jesus choose to lodge with the most hated man in a priestly town?",
    "Bartimaeus is the only person to shout 'Son of David' before the entry into Jerusalem. Why does it matter here?",
    "How does the real terrain of the Jericho road change the Good Samaritan?"
  ]
},
{
  id: "qumran", name: "Qumran", greek: "—", modern: "Khirbet Qumran, West Bank",
  lat: 31.7410, lon: 35.4590, cat: "site", region: "Judea (Roman prefect)",
  blurb: "Desert settlement of a separatist Jewish community — and the library that reframed the New Testament.",
  scriptures: [
    { ref: "Matthew 3:1–3", text: "In those days, John the Baptizer came, preaching in the wilderness of Judea, saying, “Repent, for the Kingdom of Heaven is at hand!” For this is he who was spoken of by Isaiah the prophet, saying, “The voice of one crying in the wilderness, make ready the way of the Lord. Make his paths straight.”" }
  ],
  greco: "Pliny the Elder describes a celibate Essene community by the Dead Sea; Josephus and Philo describe Essene discipline, common property, and rejection of the Temple establishment as corrupt.",
  jewish: "The Dead Sea Scrolls (found 1947–56) include the oldest Hebrew Bible manuscripts, sectarian rules (Community Rule, Damascus Document), a War Scroll, and messianic texts expecting two messiahs. They give us the Jewish vocabulary of 'sons of light,' 'the new covenant,' and 'the many' — words the New Testament also uses. Isaiah 40:3, the very verse the community applied to itself, is the verse the Gospels apply to John.",
  arch: "A scriptorium with inkwells, at least ten stepped miqva'ot fed by an aqueduct from the wadi, a refectory with a pantry of over a thousand vessels, a pottery workshop and kilns, and a cemetery of some 1,100–1,200 graves in orderly rows — of which only about forty-three have ever been excavated. Roughly 900 scrolls, most of them fragmentary, came from eleven caves nearby; de Vaux dated the settlement's occupation to c. 130 BC–AD 68.",
  geo: "On a marl terrace above the Dead Sea's north-west shore, at 1,000 ft below sea level, nine miles from Jericho and thirteen from Jerusalem.",
  why: "Qumran shows that first-century Judaism was plural and expectant. It supplies context for John the Baptist, ritual immersion, and apocalyptic hope, and illuminates the antiquity, transmission and textual diversity of the Hebrew Scriptures Jesus knew — without proving that any single later textual form was identical to his.",
  questions: [
    "John and the Qumran community both cite Isaiah 40:3. How do their programmes differ?",
    "How does a plural, arguing first-century Judaism change how you read the Pharisees?"
  ]
},
{
  id: "machaerus", name: "Machaerus", greek: "Μαχαιροῦς", modern: "Mukawir, Jordan",
  lat: 31.5670, lon: 35.6250, cat: "site", region: "Perea (Herod Antipas)",
  blurb: "Antipas' fortress-palace east of the Dead Sea, where John the Baptist was beheaded.",
  scriptures: [
    { ref: "Mark 6:17–18", text: "For Herod himself had sent out and arrested John, and bound him in prison for the sake of Herodias, his brother Philip’s wife, for he had married her. For John said to Herod, “It is not lawful for you to have your brother’s wife.”" },
    { ref: "Mark 6:27–29", text: "Immediately the king sent out a soldier of his guard, and commanded to bring John’s head, and he went and beheaded him in the prison, and brought his head on a platter, and gave it to the young lady; and the young lady gave it to her mother. When his disciples heard this, they came and took up his corpse, and laid it in a tomb." },
    { ref: "Matthew 11:2–3", text: "Now when John heard in the prison the works of Christ, he sent two of his disciples and said to him, “Are you he who comes, or should we look for another?”" }
  ],
  greco: "Josephus names Machaerus as John's prison and death place: 'John was sent as a prisoner, out of Herod's suspicious temper, to Machaerus, the castle I already mentioned, and was put to death' (Antiquities 18.119) — independent confirmation of John's imprisonment and execution there, though not of the Gospels' banquet narrative. But the two accounts weigh the motive differently: Josephus says Antipas feared John's hold on the crowds might spark a revolt, while the Gospels put the marriage at the centre. Both can be true at once. The birthday banquet with a dancing girl and a rash oath is a set piece of Hellenistic court decadence; Antipas' court copied Rome.",
  jewish: "John's charge was Levitical: Antipas had married his half-brother's wife, forbidden in Leviticus 18:16. A prophet died for applying the Torah to a king — the pattern of Elijah and Ahab.",
  arch: "First fortified by the Hasmonean Alexander Jannaeus and rebuilt in luxury by Herod the Great: a hilltop citadel with a peristyle courtyard and garden, mosaic floors, a Roman-style bath and apodyterium, a triclinium, several miqva'ot, cisterns, and a lower town. Two Herodian columns have been re-erected on site.",
  geo: "A cone-shaped hill at 2,300 ft on the Perean escarpment above the Dead Sea's east shore, with Jerusalem's Temple Mount visible 25 miles away on a clear day.",
  why: "The forerunner's end, and the reason Jesus withdrew to a desert place (Matt 14:13). John dies asking whether he was right — and Jesus answers with a list of works, not a defence.",
  questions: [
    "Jesus answers John's doubt with Isaiah's signs rather than reassurance. Why?",
    "What does it cost to speak the truth to power when power owns the fortress?"
  ]
},
{
  id: "bethlehem", name: "Bethlehem", greek: "Βηθλέεμ", modern: "Bayt Laḥm, West Bank",
  lat: 31.7054, lon: 35.2024, cat: "town", region: "Judea (Roman prefect)",
  blurb: "David's village, six miles from Jerusalem — the Nativity and the massacre of the innocents.",
  scriptures: [
    { ref: "Luke 2:4–7", text: "Joseph also went up from Galilee, out of the city of Nazareth, into Judea, to David’s city, which is called Bethlehem, because he was of the house and family of David; to enroll himself with Mary, who was pledged to be married to him as wife, being pregnant. While they were there, the day had come for her to give birth. She gave birth to her firstborn son. She wrapped him in bands of cloth, and laid him in a feeding trough, because there was no room for them in the inn." },
    { ref: "Micah 5:2", text: "But you, Bethlehem Ephrathah, being small among the clans of Judah, out of you one will come out to me that is to be ruler in Israel; whose goings out are from of old, from ancient times." },
    { ref: "Matthew 2:16", text: "Then Herod, when he saw that he was mocked by the wise men, was exceedingly angry, and sent out, and killed all the male children who were in Bethlehem and in all the surrounding countryside, from two years old and under, according to the exact time which he had learned from the wise men." }
  ],
  greco: "Roman provincial censuses for taxation are well attested, though Luke's dating remains debated. Herod the Great's ruthlessness toward rivals is documented by Josephus — he executed three of his own sons and a wife.",
  jewish: "Bethlehem is Rachel's burial road, Ruth's field, and David's anointing place. Bethlehem lay within Jerusalem's pastoral hinterland; later rabbinic texts discuss livestock kept in the region, but the Gospels do not identify these shepherds or their flocks as suppliers of Temple sacrifices.",
  arch: "The Church of the Nativity (built by Constantine c. AD 339, rebuilt by Justinian) stands over a cave venerated by at least the second century. Luke names a manger but does not describe the building; the cave identification belongs to early Christian tradition, not to the Gospel text itself.",
  geo: "At 2,550 ft on the Judean ridge, five miles south of Jerusalem on the Ridge Route, at the edge of the wilderness where the shepherds' pastures begin.",
  why: "The prophesied birthplace, an imperial census, a manger, and a paranoid king. The Incarnation is embedded in real politics from the first page.",
  questions: [
    "Why does Micah's 'little among the thousands' matter to the Gospel writers?",
    "What does it mean that the announcement came first to shepherds — ritually marginal workers?"
  ]
},
{
  id: "bethany", name: "Bethany", greek: "Βηθανία", modern: "al-Eizariya, West Bank",
  lat: 31.7712, lon: 35.2640, cat: "town", region: "Judea (Roman prefect)",
  blurb: "Home of Mary, Martha and Lazarus — Jesus' base during Passion Week, and the place of the Ascension.",
  scriptures: [
    { ref: "John 11:38–44", text: "Jesus therefore, again groaning in himself, came to the tomb. Now it was a cave, and a stone lay against it. Jesus said, “Take away the stone.” Martha, the sister of him who was dead, said to him, “Lord, by this time there is a stench, for he has been dead four days.” Jesus said to her, “Didn’t I tell you that if you believed, you would see God’s glory?” So they took away the stone from the place where the dead man was lying. Jesus lifted up his eyes, and said, “Father, I thank you that you listened to me. I know that you always listen to me, but because of the multitude standing around I said this, that they may believe that you sent me.” When he had said this, he cried with a loud voice, “Lazarus, come out!” He who was dead came out, bound hand and foot with wrappings, and his face was wrapped around with a cloth. Jesus said to them, “Free him, and let him go.”" },
    { ref: "John 11:25–26", text: "Jesus said to her, “I am the resurrection and the life. He who believes in me will still live, even if he dies. Whoever lives and believes in me will never die. Do you believe this?”" },
    { ref: "Mark 14:3", text: "While he was at Bethany, in the house of Simon the leper, as he sat at the table, a woman came having an alabaster jar of ointment of pure nard—very costly. She broke the jar, and poured it over his head." },
    { ref: "Luke 24:50–51", text: "He led them out as far as Bethany, and he lifted up his hands, and blessed them. While he blessed them, he withdrew from them, and was carried up into heaven." }
  ],
  greco: "About fifteen stadia (roughly two miles) from Jerusalem — farther than the conventional 2,000-cubit Sabbath limit, though an eruv or other legal device could extend a permitted journey — a legitimate lodging for a pilgrim who did not want to sleep inside the crowded, watched city.",
  jewish: "Rabbinic thought held the soul hovered near the body three days; John's 'four days' (11:39) closes that door deliberately. Rock-cut tombs with a rolling or plug stone and a burial shroud with a separate face cloth are exactly the local practice.",
  arch: "The Tomb of Lazarus, a rock-cut chamber reached by steps, venerated since at least the 4th century, with Byzantine and Crusader church remains above it.",
  geo: "On the eastern slope of the Mount of Olives, on the Jericho road, out of sight of the Temple Mount but fifteen minutes' walk from it.",
  why: "The last and greatest sign — and the one that triggers the plot to kill him (John 11:53). Bethany is also where he is anointed for burial and where he leaves the earth: the Gospel's domestic centre.",
  questions: [
    "Why does Jesus weep if he intends to raise Lazarus?",
    "Why does raising a man from death get Jesus killed?",
    "What does it mean that Jesus' safe house was a family home, not a synagogue?"
  ]
},
{
  id: "emmaus", name: "Emmaus", greek: "Ἐμμαούς", modern: "Imwas / Latrun (or Abu Ghosh)",
  lat: 31.8390, lon: 34.9890, cat: "town", region: "Judea (Roman prefect)",
  blurb: "The road where the risen Jesus walked unrecognised and expounded the Scriptures.",
  uncertain: true,
  scriptures: [
    { ref: "Luke 24:13–16", text: "Behold, two of them were going that very day to a village named Emmaus, which was sixty stadia from Jerusalem. They talked with each other about all of these things which had happened. While they talked and questioned together, Jesus himself came near, and went with them. But their eyes were kept from recognizing him." },
    { ref: "Luke 24:27", text: "Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself." },
    { ref: "Luke 24:30–32", text: "When he had sat down at the table with them, he took the bread and gave thanks. Breaking it, he gave it to them. Their eyes were opened, and they recognized him, and he vanished out of their sight. They said to one another, “Weren’t our hearts burning within us, while he spoke to us along the way, and while he opened the Scriptures to us?”" }
  ],
  greco: "'Threescore furlongs' is 60 stadia, about seven miles — a two-and-a-half-hour walk, which is why they urge him to stay as evening falls. Candidates include Imwas (160 stadia, matching some manuscripts), Abu Ghosh, and el-Qubeibeh.",
  jewish: "Emmaus/Ammaus was the site of Judas Maccabeus' victory over Gorgias (1 Maccabees 3–4) — a place associated with deliverance from foreign rule, which is precisely the deliverance the two travellers thought had failed.",
  arch: "Imwas has a Byzantine basilica and Roman-period remains; Abu Ghosh has a Crusader church over a Roman fort and spring. The identification is unresolved.",
  geo: "West of Jerusalem on the descent from the Judean hills to the coastal plain, on the road toward Joppa and Lydda.",
  why: "The resurrection is taught before it is recognised. The pattern — Scripture opened on the road, then bread broken at table — became the shape of Christian worship.",
  questions: [
    "Why does Jesus give a Bible study before revealing himself?",
    "What does 'their eyes were holden' suggest about how recognition works?",
    "How would you retell the whole Old Testament as being 'concerning himself'?"
  ]
},

/* ——— JERUSALEM (inset) ——— */
{
  id: "jerusalem", name: "Jerusalem", greek: "Ἱερουσαλήμ / Ἱεροσόλυμα", modern: "Yerushalayim / al-Quds",
  lat: 31.7784, lon: 35.2354, cat: "capital", region: "Judea (Roman prefect)",
  blurb: "The Holy City — Temple, Sanhedrin, Roman garrison, and the destination toward which the whole Gospel moves.",
  scriptures: [
    { ref: "Luke 9:51", text: "It came to pass, when the days were near that he should be taken up, he intently set his face to go to Jerusalem," },
    { ref: "Luke 13:34", text: "“Jerusalem, Jerusalem, that kills the prophets, and stones those who are sent to her! How often I wanted to gather your children together, like a hen gathers her own brood under her wings, and you refused!" },
    { ref: "Luke 19:41–42", text: "When he came near, he saw the city and wept over it, saying, “If you, even you, had known today the things which belong to your peace! But now, they are hidden from your eyes." },
    { ref: "Acts 2:5–8", text: "Now there were dwelling in Jerusalem Jews, devout men, from every nation under the sky. When this sound was heard, the multitude came together, and were bewildered, because everyone heard them speaking in his own language. They were all amazed and marveled, saying to one another, “Behold, aren’t all these who speak Galileans? How do we hear, everyone in our own native language?" }
  ],
  greco: "Resident population estimates vary widely, commonly 40,000–80,000; festival crowds are harder to establish, and Josephus's own figures are difficult to reconcile with the city's size. The prefect came up from Caesarea for the feasts with extra troops and lodged in Herod's palace; the Antonia fortress overlooked the Temple courts. Titus destroyed the city in AD 70; the Arch of Titus in Rome still shows the menorah being carried away.",
  jewish: "The Temple was the centre of the world's largest religious economy: three annual pilgrim feasts, a half-shekel tax from every adult male Jew across the empire, and a priestly aristocracy under the Sadducean high priest. Pharisaic schools of Hillel and Shammai debated here; Gamaliel taught Saul of Tarsus in this city.",
  arch: "The Western and Southern Temple Mount walls with Robinson's Arch and the Herodian street beneath (buried under toppled stones from AD 70), the Temple Warning inscription, the 'Trumpeting Place' stone, the Pool of Siloam, the Bethesda pools, first-century tombs, and the burnt house of the Bar Kathros priestly family.",
  geo: "At 2,500 ft on the Judean watershed, ringed by the Kidron and Hinnom valleys, with no harbour, no river, and no trade road of consequence — a city that mattered for one reason only.",
  why: "Everything converges here: the entry, the cleansing, the trials, the crucifixion, the resurrection, Pentecost, and the church's first decade. In AD 70 the Temple and its sacrificial system were destroyed, as Jesus had predicted — reshaping both Judaism and the Jesus movement, though Jewish covenantal life did not end.",
  questions: [
    "Why does Luke structure his Gospel as a journey to Jerusalem?",
    "How does Jesus' weeping over the city sit beside his cleansing of the Temple?",
    "What changed for the church when the Temple fell?"
  ]
},
{
  id: "jerusalem-unspecified", name: "Jerusalem (room unknown)", greek: "—", modern: "Jerusalem",
  lat: 31.7784, lon: 35.2354, cat: "jerusalem", region: "Jerusalem",
  uncertain: true,
  nonSite: true,
  blurb: "A city-level marker for events the Gospels and Acts set inside Jerusalem without naming a house or room.",
  scriptures: [
    { ref: "Luke 22:19–20", text: "He took bread, and when he had given thanks, he broke, and gave it to them, saying, “This is my body which is given for you. Do this in memory of me.” Likewise, he took the cup after supper, saying, “This cup is the new covenant in my blood, which is poured out for you." },
    { ref: "Acts 2:1–4", text: "Now when the day of Pentecost had come, they were all with one accord in one place. Suddenly there came from the sky a sound like the rushing of a mighty wind, and it filled all the house where they were sitting. Tongues like fire appeared and were distributed to them, and one sat on each of them. They were all filled with the Holy Spirit, and began to speak with other languages, as the Spirit gave them the ability to speak." }
  ],
  greco: "Neither narrative names a host, a street, or a quarter of the city — only 'a certain house' or an upper room furnished for the occasion.",
  jewish: "A furnished upper room for a Passover meal, and a gathering large enough to hold the 'about a hundred and twenty' of Acts 1:15, both fit ordinary Jerusalem domestic and communal space; neither text ties either room to a priestly residence.",
  arch: "No excavated room in Jerusalem is securely identified with either event. The Cenacle on Mount Zion and the traditions around the Caiaphas/Upper-Room quarter are later veneration, not textual identification.",
  geo: "Somewhere within the walled first-century city — precision beyond 'Jerusalem' is not recoverable from the text.",
  why: "Two founding scenes — the Last Supper and Pentecost — are anchored to the city, not to a coordinate. This marker keeps that distinction visible on the map.",
  questions: [
    "What changes if these events are certain as to city, but unknown as to room?"
  ]
},
{
  id: "temple-mount", name: "The Temple & Court of the Gentiles", greek: "τὸ ἱερόν", modern: "Haram al-Sharif",
  lat: 31.7780, lon: 35.2354, cat: "jerusalem", region: "Jerusalem",
  blurb: "Herod's 36-acre platform — the largest sacred precinct in the Roman world.",
  scriptures: [
    { ref: "Mark 11:15–17", text: "They came to Jerusalem, and Jesus entered into the temple, and began to throw out those who sold and those who bought in the temple, and overthrew the money changers’ tables, and the seats of those who sold the doves. He would not allow anyone to carry a container through the temple. He taught, saying to them, “Isn’t it written, ‘My house will be called a house of prayer for all the nations?’ But you have made it a den of robbers!”" },
    { ref: "Mark 13:1–2", text: "As he went out of the temple, one of his disciples said to him, “Teacher, see what kind of stones and what kind of buildings!” Jesus said to him, “Do you see these great buildings? There will not be left here one stone on another, which will not be thrown down.”" },
    { ref: "Luke 2:46–47", text: "After three days they found him in the temple, sitting in the middle of the teachers, both listening to them, and asking them questions. All who heard him were amazed at his understanding and his answers." },
    { ref: "Mark 12:41–44", text: "Jesus sat down opposite the treasury, and saw how the multitude cast money into the treasury. Many who were rich cast in much. A poor widow came, and she cast in two small brass coins, which equal a quadrans coin. He called his disciples to himself, and said to them, “Most certainly I tell you, this poor widow gave more than all those who are giving into the treasury, for they all gave out of their abundance, but she, out of her poverty, gave all that she had to live on.”" }
  ],
  greco: "Herod doubled the platform with retaining walls of dressed ashlars, the largest of them — the 'Western Stone', 44 ft long — estimated at anywhere from 285 to 570 tons, since its depth into the wall has never been measured. The Royal Stoa on the south side — Josephus counts 162 columns, four rows of forty with two more at the western gate, in a hall he thought deserved mention above anything else under the sun — was the commercial and judicial centre: money-changing (pilgrims' foreign coin into Tyrian shekels for the Temple tax) and the sale of approved sacrificial animals happened here. Greek and Latin inscriptions warned Gentiles, on pain of death, not to pass the barrier into the inner courts.",
  jewish: "Concentric holiness: Court of the Gentiles → Court of the Women → Court of Israel → Court of the Priests → the Holy Place → the Holy of Holies, entered once a year on Yom Kippur. The 'den of thieves' quotation joins Isaiah 56:7 ('house of prayer for all nations') to Jeremiah 7:11 — a claim that the outermost court, the only place a Gentile could pray, had been turned into a market.",
  arch: "Two surviving fragments of the Greek Temple Warning inscription; the Western Wall and Robinson's Arch; the Herodian street with first-century shops; the Trumpeting Place inscription; ritual baths at the southern steps where pilgrims immersed before ascending.",
  geo: "The eastern hill of the city, above the Kidron; the Mount of Olives rises opposite, giving the view from which Jesus predicted its fall.",
  why: "The Temple action is not anti-worship but pro-access: the court reserved for the nations had been monetised. Two days later he is condemned partly on Temple charges (Mark 14:58).",
  questions: [
    "Why does Jesus act in the Court of the Gentiles specifically?",
    "How do the concentric courts shape the meaning of the torn veil?",
    "What replaces the Temple in the New Testament's imagination?"
  ]
},
{
  id: "gethsemane", name: "Gethsemane", greek: "Γεθσημανί (gat shemanim, 'oil press')", modern: "Mount of Olives slope",
  lat: 31.7794, lon: 35.2397, cat: "jerusalem", region: "Jerusalem",
  blurb: "An olive grove across the Kidron where Jesus prayed and was arrested.",
  scriptures: [
    { ref: "Mark 14:32–36", text: "They came to a place which was named Gethsemane. He said to his disciples, “Sit here, while I pray.” He took with him Peter, James, and John, and began to be greatly troubled and distressed. He said to them, “My soul is exceedingly sorrowful, even to death. Stay here, and watch.” He went forward a little, and fell on the ground, and prayed that, if it were possible, the hour might pass away from him. He said, “Abba, Father, all things are possible to you. Please remove this cup from me. However, not what I desire, but what you desire.”" },
    { ref: "Luke 22:44", text: "Being in agony he prayed more earnestly. His sweat became like great drops of blood falling down on the ground." },
    { ref: "John 18:3", text: "Judas then, having taken a detachment of soldiers and officers from the chief priests and the Pharisees, came there with lanterns, torches, and weapons." }
  ],
  greco: "John's 'band' (σπεῖρα) is the word for a Roman cohort, suggesting the arrest party included auxiliaries from the Antonia as well as Temple police — an official, coordinated night operation timed to avoid the festival crowds.",
  jewish: "Passover pilgrims were required to spend the night within an extended boundary of Jerusalem, and the Mount of Olives slopes were full of camping pilgrims. An olive press cave gave shelter. David fled over this same ridge weeping when Absalom betrayed him (2 Samuel 15:30).",
  arch: "A cave with an ancient olive press stands near the Church of All Nations. Of the eight ancient olives in the garden, three were radiocarbon-dated in 2012 by Italy's National Research Council to 1092, 1166 and 1198; the other five are too hollowed to date. Genetic testing found all eight share a single genotype — cuttings from one parent tree. No first-century tree could have survived in any case: Josephus records that the Romans felled everything around Jerusalem for siege works in AD 70. But olives regenerate from their roots, so the stock beneath may descend from far older trees.",
  geo: "At the foot of the Mount of Olives, just across the Kidron from the Temple's east wall — perhaps a ten-minute walk from where the Last Supper was eaten.",
  why: "The decision that makes the cross possible is taken here, not at Golgotha. 'Not what I will, but what thou wilt' is the hinge of the Passion.",
  questions: [
    "Why does Mark record the disciples sleeping three times?",
    "What does 'Abba' add to the prayer?",
    "Gethsemane means 'oil press.' Is that coincidence, or commentary?"
  ]
},
{
  id: "caiaphas", name: "House of Caiaphas", greek: "—", modern: "Mount Zion, Jerusalem",
  lat: 31.7718, lon: 35.2290, cat: "jerusalem", region: "Jerusalem",
  blurb: "The priestly aristocratic quarter on the western hill — the night trial and Peter's denial. A separate, competing tradition places the Last Supper and Pentecost at the Cenacle nearby, not at this site.",
  scriptures: [
    { ref: "Matthew 26:57–65", text: "Those who had taken Jesus led him away to Caiaphas the high priest, where the scribes and the elders were gathered together. But Peter followed him from a distance, to the court of the high priest, and entered in and sat with the officers, to see the end. Now the chief priests, the elders, and the whole council sought false testimony against Jesus, that they might put him to death; and they found none. Even though many false witnesses came forward, they found none. But at last two false witnesses came forward, and said, “This man said, ‘I am able to destroy the temple of God, and to build it in three days.’” The high priest stood up, and said to him, “Have you no answer? What is this that these testify against you?” But Jesus held his peace. The high priest answered him, “I adjure you by the living God, that you tell us whether you are the Christ, the Son of God.” Jesus said to him, “You have said it. Nevertheless, I tell you, after this you will see the Son of Man sitting at the right hand of Power, and coming on the clouds of the sky.” Then the high priest tore his clothing, saying, “He has spoken blasphemy! Why do we need any more witnesses? Behold, now you have heard his blasphemy." },
    { ref: "Luke 22:61–62", text: "The Lord turned, and looked at Peter. Then Peter remembered the Lord’s word, how he said to him, “Before the rooster crows you will deny me three times.” He went out, and wept bitterly." },
  ],
  greco: "Caiaphas was high priest AD 18–36, appointed by Rome and removed by Rome — the office was a political instrument. In December 1990 a bulldozer opened a burial cave in the Peace Forest south of the Old City containing twelve ossuaries; one, ornately carved and inscribed twice 'Yehosef bar Qayafa' — Joseph son of Caiaphas — held the bones of a man of about sixty.",
  jewish: "Later rabbinic legal traditions preserved in the Mishnah prohibit several features of this kind of hearing — night sessions, festival-eve trials, a same-day death sentence — but historians debate how directly those later norms reflect Jerusalem procedure in the AD 30s. The high priest's tearing of his garments is the prescribed response to blasphemy.",
  arch: "The 'Burnt House' and the Herodian mansions of the Jewish Quarter show the priestly elite's world: frescoes, mosaic floors, imported glass, stone tables and multiple miqva'ot. The Cenacle on Mount Zion is a Crusader hall over a much older venerated site.",
  geo: "The western hill, higher and wealthier than the City of David, with a direct view across the Tyropoeon Valley to the Temple.",
  why: "In one small quarter of the city: the Messiah condemned and the chief apostle broken — a single dense scene in the Passion narrative.",
  questions: [
    "Why does Jesus stay silent through most of the trial and then answer that one question?",
    "How does Peter's denial function as good news rather than only failure?"
  ]
},
{
  id: "praetorium", name: "The Praetorium (Herod's Palace)", greek: "πραιτώριον", modern: "Jaffa Gate / Citadel area",
  lat: 31.7765, lon: 35.2277, cat: "jerusalem", region: "Jerusalem",
  blurb: "Where Pilate judged — most likely Herod's palace at the western wall, not the Antonia.",
  uncertain: true,
  scriptures: [
    { ref: "John 18:28", text: "They led Jesus therefore from Caiaphas into the Praetorium. It was early, and they themselves didn’t enter into the Praetorium, that they might not be defiled, but might eat the Passover." },
    { ref: "John 18:36–38", text: "Jesus answered, “My Kingdom is not of this world. If my Kingdom were of this world, then my servants would fight, that I wouldn’t be delivered to the Jews. But now my Kingdom is not from here.” Pilate therefore said to him, “Are you a king then?” Jesus answered, “You say that I am a king. For this reason I have been born, and for this reason I have come into the world, that I should testify to the truth. Everyone who is of the truth listens to my voice.” Pilate said to him, “What is truth?” When he had said this, he went out again to the Jews, and said to them, “I find no basis for a charge against him." },
    { ref: "John 19:15–16", text: "They cried out, “Away with him! Away with him! Crucify him!” Pilate said to them, “Shall I crucify your King?” The chief priests answered, “We have no king but Caesar!” So then he delivered him to them to be crucified. So they took Jesus and led him away." },
    { ref: "Mark 15:15", text: "Pilate, wishing to please the multitude, released Barabbas to them, and handed over Jesus, when he had flogged him, to be crucified." }
  ],
  greco: "A Roman prefect held cognitio extra ordinem — summary jurisdiction over non-citizens, with the ius gladii, the right of the sword. 'We have no king but Caesar' invoked maiestas: a governor who released a claimant king risked his own career. Philo and Josephus both record Pilate provoking Jewish riots; he was recalled to Rome in AD 36.",
  jewish: "The chief priests will not enter a Gentile building on the eve of Passover. The Sanhedrin lacked authority to execute (John 18:31), so the charge is translated from blasphemy into sedition for Roman ears — 'king of the Jews.'",
  arch: "Herod's palace platform survives under the Citadel and the Armenian Garden, where excavations found a large paved courtyard; many scholars now place the trial here rather than at the Antonia, where the traditional Via Dolorosa begins.",
  geo: "At the highest, western edge of the city beside the Jaffa Gate, roughly 500 yards from Golgotha.",
  why: "The trial is where two kingdoms name their terms. Pilate asks about truth and washes his hands; the crowd chooses Caesar; the innocent is scourged and handed over.",
  questions: [
    "Why does Jesus answer Pilate at length but Herod not at all (Luke 23:9)?",
    "What is Rome's actual charge, and how does it differ from the Sanhedrin's?",
    "'My kingdom is not of this world' — what does that not mean?"
  ]
},
{
  id: "golgotha", name: "Golgotha & the Garden Tomb", greek: "Γολγοθᾶ ('place of a skull')", modern: "Church of the Holy Sepulchre",
  lat: 31.7784, lon: 35.2298, cat: "jerusalem", region: "Jerusalem",
  blurb: "An abandoned quarry outside the wall — execution site and rock-cut tomb, yards apart.",
  scriptures: [
    { ref: "John 19:17–19", text: "He went out, bearing his cross, to the place called “The Place of a Skull”, which is called in Hebrew, “Golgotha”, where they crucified him, and with him two others, on either side one, and Jesus in the middle. Pilate wrote a title also, and put it on the cross. There was written, “JESUS OF NAZARETH, THE KING OF THE JEWS.”" },
    { ref: "Mark 15:33–39", text: "When the sixth hour had come, there was darkness over the whole land until the ninth hour. At the ninth hour Jesus cried with a loud voice, saying, “Eloi, Eloi, lama sabachthani?” which is, being interpreted, “My God, my God, why have you forsaken me?” Some of those who stood by, when they heard it, said, “Behold, he is calling Elijah.” One ran, and filling a sponge full of vinegar, put it on a reed, and gave it to him to drink, saying, “Let him be. Let’s see whether Elijah comes to take him down.” Jesus cried out with a loud voice, and gave up the spirit. The veil of the temple was torn in two from the top to the bottom. When the centurion, who stood by opposite him, saw that he cried out like this and breathed his last, he said, “Truly this man was the Son of God!”" },
    { ref: "John 19:41–42", text: "Now in the place where he was crucified there was a garden. In the garden was a new tomb in which no man had ever yet been laid. Then because of the Jews’ Preparation Day (for the tomb was near at hand) they laid Jesus there." },
    { ref: "John 20:15–16", text: "Jesus said to her, “Woman, why are you weeping? Who are you looking for?” She, supposing him to be the gardener, said to him, “Sir, if you have carried him away, tell me where you have laid him, and I will take him away.” Jesus said to her, “Mary.” She turned and said to him, “Rabboni!” which is to say, “Teacher!”" }
  ],
  greco: "Crucifixion was Rome's terror penalty for slaves and rebels, deliberately public and beside a road. The titulus in three languages advertised the charge. In 1968 Vassilios Tzaferis excavated a tomb at Giv'at ha-Mivtar, north-east of Jerusalem, containing the ossuary of a young man named Yehohanan with an 11.5 cm iron nail still driven through his right heel bone — still the clearest skeletal evidence of crucifixion recovered anywhere. A re-examination by Zias and Sekeles in 1985 corrected the first published reconstruction: only one heel was pierced, the legs probably straddled the upright, and the arms were most likely tied rather than nailed.",
  jewish: "Execution had to be outside the camp (Leviticus 24:14; Hebrews 13:12), and a body could not remain overnight (Deuteronomy 21:23) — hence the haste. Rolling-stone or plug-stone tombs with burial benches and ossuary reburial after a year are precisely the Judean practice; a rich man's new tomb near a quarry fits Joseph of Arimathea.",
  arch: "The Holy Sepulchre encloses a quarry face, rock-cut kokhim tombs of the first century, and the surviving stump of the outcrop identified as Golgotha. In AD 135 Hadrian built a temple over the site; whether that construction preserved an earlier Christian identification, or the continuity of memory before Constantine, remains debated. Excavation supports that the area probably lay outside the first-century wall.",
  geo: "Just north-west of the city wall of AD 30, beside a road out of the city, in a disused quarry that had been landscaped into a garden with tombs.",
  why: "The centre of the Christian claim, and the point where the geography stops mattering: the tomb is empty, so the Gospel leaves the map.",
  questions: [
    "Why do all four Gospels insist the crucifixion happened outside the city?",
    "What does the torn veil (Mark 15:38) declare?",
    "Mary mistakes him for a gardener in a garden. What is John doing with Eden?"
  ]
},
{
  id: "bethesda", name: "Pool of Bethesda", greek: "Βηθεσδά", modern: "St. Anne's, Muslim Quarter",
  lat: 31.7815, lon: 35.2364, cat: "jerusalem", region: "Jerusalem",
  blurb: "A twin reservoir with five porches, where a man waited thirty-eight years.",
  scriptures: [
    { ref: "John 5:2–9", text: "Now in Jerusalem by the sheep gate, there is a pool, which is called in Hebrew, “Bethesda”, having five porches. In these lay a great multitude of those who were sick, blind, lame, or paralyzed, waiting for the moving of the water; for an angel went down at certain times into the pool, and stirred up the water. Whoever stepped in first after the stirring of the water was healed of whatever disease he had. A certain man was there, who had been sick for thirty-eight years. When Jesus saw him lying there, and knew that he had been sick for a long time, he asked him, “Do you want to be made well?” The sick man answered him, “Sir, I have no one to put me into the pool when the water is stirred up, but while I’m coming, another steps down before me.” Jesus said to him, “Arise, take up your mat, and walk.” Immediately, the man was made well, and took up his mat and walked. Now it was the Sabbath on that day." },
    { ref: "John 5:16–18", text: "For this cause the Jews persecuted Jesus, and sought to kill him, because he did these things on the Sabbath. But Jesus answered them, “My Father is still working, so I am working, too.” For this cause therefore the Jews sought all the more to kill him, because he not only broke the Sabbath, but also called God his own Father, making himself equal with God." }
  ],
  greco: "Pagan baths dedicated to Asclepius, god of healing, lie immediately east of the pools, and a votive carved foot thanking him for a cure was found above them. Their date is disputed: some place a healing cult here in Jesus' day, others attribute the sanctuary to Hadrian's rebuilding of the city after AD 135, which would put it a century too late for John 5.",
  jewish: "Carrying a mat is one of the 39 categories of Sabbath labour listed in Mishnah Shabbat 7:2 — the objection reflects a real category of Sabbath dispute. Scholars debate the pools' original function; a public miqveh serving pilgrims and a facility for washing sacrificial sheep near the Sheep Gate are both proposed for their Second Temple use. A pagan healing cult developed at the site only after Jesus' time and should not be read back into John 5.",
  arch: "Excavations by the Church of St. Anne revealed two large rock-cut reservoirs separated by a central partition, colonnaded on four sides plus the partition — exactly 'five porches.' John's incidental detail was vindicated by the spade.",
  geo: "Just north of the Temple Mount, inside the wall near the Sheep Gate, fed by rainwater channels.",
  why: "John 5 turns a healing into the first open claim of equality with the Father, and the first death threat. The 'five porches' also makes John a writer who knew pre-70 Jerusalem.",
  questions: [
    "Why does Jesus ask a man who has waited 38 years whether he wants to be healed?",
    "How should Sabbath conflict shape our idea of what religion is for?"
  ]
},
{
  id: "siloam", name: "Pool of Siloam", greek: "Σιλωάμ", modern: "City of David, Jerusalem",
  lat: 31.7703, lon: 35.2354, cat: "jerusalem", region: "Jerusalem",
  blurb: "The great stepped pool at the city's south end — pilgrim immersion, and a blind man's sight.",
  scriptures: [
    { ref: "John 9:6–7", text: "When he had said this, he spat on the ground, made mud with the saliva, anointed the blind man’s eyes with the mud, and said to him, “Go, wash in the pool of Siloam” (which means “Sent”). So he went away, washed, and came back seeing." },
    { ref: "John 9:39", text: "Jesus said, “I came into this world for judgment, that those who don’t see may see; and that those who see may become blind.”" },
    { ref: "John 7:37–38", text: "Now on the last and greatest day of the feast, Jesus stood and cried out, “If anyone is thirsty, let him come to me and drink! He who believes in me, as the Scripture has said, from within him will flow rivers of living water.”" }
  ],
  greco: "The pool sat at the low, poor end of the city, at the outlet of Hezekiah's 8th-century BC tunnel — a piece of Iron Age engineering still walkable today.",
  jewish: "At the Feast of Tabernacles a priest drew water from Siloam in a golden pitcher and poured it out at the altar while the crowd sang Isaiah 12:3 — the ceremony behind Jesus' cry in John 7:37 on 'the last day, that great feast.' Pilgrims immersed here before ascending to the Temple.",
  arch: "In 2004 a sewer repair uncovered monumental stepped stone terraces of a large first-century pool, with the stepped street running from it up to the Temple Mount — the very route the healed man walked back.",
  geo: "At the southern tip of the City of David, 200 ft below the Temple platform, fed by the Gihon Spring.",
  why: "Sight given at the pilgrim washing-place, on a Sabbath, at the poorest end of the city — then a formal interrogation and expulsion from the synagogue (John 9:34) that mirrors what Christians would soon face.",
  questions: [
    "Why send the man to wash rather than heal him on the spot?",
    "Trace John 9's growing confession ('a man', 'a prophet', 'Lord'). How does understanding grow?"
  ]
},
{
  id: "gerizim", name: "Mount Gerizim", greek: "Γαριζίν", modern: "Jebel et-Tur, near Nablus",
  lat: 32.2000, lon: 35.2730, cat: "site", region: "Samaria (Roman prefect)",
  blurb: "The Samaritans' holy mountain — 'this mountain' of the woman at the well, and the reason for a 700-year schism.",
  scriptures: [
    { ref: "John 4:20–21", text: "Our fathers worshiped in this mountain, and you Jews say that in Jerusalem is the place where people ought to worship.” Jesus said to her, “Woman, believe me, the hour comes, when neither in this mountain, nor in Jerusalem, will you worship the Father." },
    { ref: "Deuteronomy 11:29", text: "It shall happen, when Yahweh your God brings you into the land where you go to possess it, that you shall set the blessing on Mount Gerizim, and the curse on Mount Ebal." },
    { ref: "Luke 9:52–53", text: "and sent messengers before his face. They went, and entered into a village of the Samaritans, so as to prepare for him. They didn’t receive him, because he was traveling with his face set towards Jerusalem." }
  ],
  greco: "Antiochus IV rededicated the Gerizim sanctuary to Zeus Hellenios during the persecution of the 160s BC — the same policy that desecrated the Jerusalem Temple and triggered the Maccabean revolt. Under Rome, Samaria was administered from Caesarea, and a Samaritan uprising on Gerizim in AD 36 was crushed by Pilate, which cost him his office.",
  jewish: "The Samaritan Pentateuch reads Deuteronomy 27:4 as commanding an altar on Gerizim, not Ebal — one letter's difference underwriting a whole rival cult. John Hyrcanus destroyed the sanctuary; Josephus dates it to 128 BC, but the coin evidence from the summit points to about 110 BC. The Mishnah debates whether Samaritan produce and vessels convey impurity; John's aside that 'the Jews have no dealings with the Samaritans' is precise reporting, not prejudice.",
  arch: "Excavations on the summit uncovered a large fortified sacred precinct of the Persian and Hellenistic periods with a walled temenos, priestly quarter and thousands of animal-bone deposits — the physical remains of the temple Hyrcanus destroyed. A Byzantine church of Mary Theotokos was later built over the site.",
  geo: "2,890 ft, rising directly above the pass at Shechem opposite Mount Ebal (3,084 ft), with Jacob's Well at its foot. The Ridge Route runs through the gap between the two mountains — every traveller between Judea and Galilee walked between the blessing and the curse.",
  why: "Two peoples with the same Torah, the same patriarchs and different mountains. Jesus does not adjudicate between them; he says the question is about to stop mattering — worship in spirit and in truth needs no summit.",
  questions: [
    "Jesus dismisses both mountains. What replaces sacred geography?",
    "The Samaritans held the same five books. How do people with the same scripture end up in schism?",
    "Luke 9:53 says they rejected him because he was headed for Jerusalem. What does that reveal about the wound?"
  ]
},
{
  id: "kerioth", name: "Kerioth", greek: "—", modern: "Khirbet el-Qaryatein (probable), Judea",
  lat: 31.3060, lon: 35.0700, cat: "town", region: "Judea (Roman prefect)",
  blurb: "The likely home town of Judas Iscariot — and, if so, the one non-Galilean among the Twelve.",
  uncertain: true,
  scriptures: [
    { ref: "John 6:70–71", text: "Jesus answered them, “Didn’t I choose you, the twelve, and one of you is a devil?” Now he spoke of Judas, the son of Simon Iscariot, for it was he who would betray him, being one of the twelve." },
    { ref: "Matthew 26:14–16", text: "Then one of the twelve, who was called Judas Iscariot, went to the chief priests, and said, “What are you willing to give me, that I should deliver him to you?” They weighed out for him thirty pieces of silver. From that time he sought opportunity to betray him." },
    { ref: "Joshua 15:25", text: "Hazor Hadattah, Kerioth Hezron (also called Hazor)," }
  ],
  greco: "'Iscariot' is most often read as ish-Kerioth, 'man of Kerioth', a Judean village in the arid south. Two rival explanations exist: a link to the Latin sicarius, 'dagger-man', hinting at insurgent sympathies, or a family name. The town reading is the oldest and the plainest.",
  jewish: "If Judas was Judean, the Twelve had one southerner among eleven Galileans — and he kept the money bag (John 12:6). Galileans were mocked in rabbinic sources for their accent and looked down on by Judeans; an insider from the south would have carried different assumptions about what the Messiah should do in Jerusalem.",
  arch: "The identification is not settled. Khirbet el-Qaryatein, south of Hebron on the edge of the Negev, is the leading candidate for the Kerioth of Joshua 15:25; no excavation ties it to the first century.",
  geo: "In the dry Judean south, roughly 20 miles below Hebron and some 90 miles from Capernaum — the far end of the country from where the movement began.",
  why: "A small, contested detail with real weight: the betrayer may have been the one man in the group who was not a Galilean outsider, and the only one who was home when they reached Jerusalem.",
  questions: [
    "If Judas alone was Judean, how might he have read the entry into Jerusalem differently from the others?",
    "Why do the Gospels never explain his motive, only his act?"
  ]
},
{
  id: "egypt", name: "Egypt — the flight", greek: "Αἴγυπτος", modern: "Nile Delta / Old Cairo",
  lat: 30.0060, lon: 31.2300, cat: "site", region: "Roman province of Egypt",
  blurb: "Where the holy family fled from Herod — the house of bondage turned place of refuge.",
  uncertain: true,
  scriptures: [
    { ref: "Matthew 2:13–15", text: "Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream, saying, “Arise and take the young child and his mother, and flee into Egypt, and stay there until I tell you, for Herod will seek the young child to destroy him.” He arose and took the young child and his mother by night, and departed into Egypt, and was there until the death of Herod; that it might be fulfilled which was spoken by the Lord through the prophet, saying, “Out of Egypt I called my son.”" },
    { ref: "Hosea 11:1", text: "“When Israel was a child, then I loved him, and called my son out of Egypt." },
    { ref: "Matthew 2:19–21", text: "But when Herod was dead, behold, an angel of the Lord appeared in a dream to Joseph in Egypt, saying, “Arise and take the young child and his mother, and go into the land of Israel, for those who sought the young child’s life are dead.” He arose and took the young child and his mother, and came into the land of Israel." }
  ],
  greco: "Egypt was a Roman province and the empire's grain supply, outside Herod's jurisdiction and reachable on the coastal Via Maris through Gaza and the Sinai — the obvious destination for anyone fleeing a Judean king. Alexandria held the largest Jewish community outside the homeland, with its own quarter, synagogues and civic disputes.",
  jewish: "Philo puts the Jewish population of Egypt at no fewer than a million (In Flaccum 43). The Septuagint — the Greek Old Testament the New Testament usually quotes — was made in Alexandria, and a rival Jewish temple operated at Leontopolis for two centuries. Egypt is Israel's oldest double image: the house of bondage in Exodus, and the refuge of Abraham, Jacob's sons, Jeroboam and Jeremiah's remnant.",
  arch: "No first-century evidence attaches to the flight. Coptic tradition maps a long itinerary through the Delta and up the Nile, venerated at sites such as Abu Serga in Old Cairo, Wadi Natrun and Asyut; the marker here stands for that tradition, not an identified location.",
  geo: "Some 250–350 miles from Bethlehem depending on the route. Matthew names no itinerary, town, duration or means of transport; a multi-week journey across the Sinai coast is plausible but not specified in the text.",
  why: "Matthew's second chapter makes Jesus re-live Israel's own story in miniature: a tyrant killing infants, a flight to Egypt, and a calling out of it. The Messiah's first journey is as a refugee, and the quotation from Hosea makes the identification explicit.",
  questions: [
    "Matthew applies Hosea's line about Israel to one child. What is he claiming?",
    "What does it mean that the Incarnation begins with the family as asylum seekers?",
    "Egypt is bondage in Exodus and shelter here. How do both readings sit together?"
  ]
}
];

const OLIVET_MORE = [
{
  id: "olivet", name: "Mount of Olives", greek: "τὸ ὄρος τῶν ἐλαιῶν", modern: "Jebel az-Zaytun",
  lat: 31.7784, lon: 35.2455, cat: "jerusalem", region: "Jerusalem",
  blurb: "The ridge east of the city: the triumphal entry, the Olivet Discourse, and the Ascension.",
  scriptures: [
    { ref: "Luke 19:37–40", text: "As he was now getting near, at the descent of the Mount of Olives, the whole multitude of the disciples began to rejoice and praise God with a loud voice for all the mighty works which they had seen, saying, “Blessed is the King who comes in the name of the Lord! Peace in heaven, and glory in the highest!” Some of the Pharisees from the multitude said to him, “Teacher, rebuke your disciples!” He answered them, “I tell you that if these were silent, the stones would cry out.”" },
    { ref: "Zechariah 9:9", text: "Rejoice greatly, daughter of Zion! Shout, daughter of Jerusalem! Behold, your King comes to you! He is righteous, and having salvation; lowly, and riding on a donkey, even on a colt, the foal of a donkey." },
    { ref: "Matthew 24:3", text: "As he sat on the Mount of Olives, the disciples came to him privately, saying, “Tell us, when will these things be? What is the sign of your coming, and of the end of the age?”" },
    { ref: "Acts 1:11–12", text: "who also said, “You men of Galilee, why do you stand looking into the sky? This Jesus, who was received up from you into the sky, will come back in the same way as you saw him going into the sky.” Then they returned to Jerusalem from the mountain called Olivet, which is near Jerusalem, a Sabbath day’s journey away." },
    { ref: "Zechariah 14:4", text: "His feet will stand in that day on the Mount of Olives, which is before Jerusalem on the east; and the Mount of Olives will be split in two, from east to west, making a very great valley. Half of the mountain will move toward the north, and half of it toward the south." }
  ],
  greco: "A Roman triumph entered a city on a warhorse with captives behind. Entering on a donkey from the east, over the Kidron, is a counter-triumph — legible as political theatre to everyone watching, including the garrison.",
  jewish: "Zechariah 14:4 makes Olivet the place the Lord's feet will stand on the Day of the LORD; Ezekiel 11:23 has the glory of God departing the city eastward over this mountain. The ridge was and is a vast Jewish cemetery, positioned for the resurrection. Pilgrims descending its western slope get their first full sight of the Temple.",
  arch: "Thousands of Jewish tombs from the Second Temple period onward; the Byzantine Eleona and the Imbomon (Ascension) shrines; the Dominus Flevit chapel over first-century ossuary tombs.",
  geo: "A limestone ridge rising to about 2,652 ft directly east of the Temple Mount — some 220 ft above the Temple platform, separated from it by the Kidron Valley — a Sabbath day's journey (about 2,000 cubits) from the city.",
  why: "The mountain of arrival, prediction, and departure. Every eschatological expectation in the Gospels has this ridge as its stage.",
  questions: [
    "Why choose a donkey, and why from this direction?",
    "How does Ezekiel's glory leaving eastward change the Ascension's location?",
    "'Why stand ye gazing up' — what is the angels' rebuke actually for?"
  ]
}
];
PLACES.push.apply(PLACES, OLIVET_MORE);

/* ——— EVENTS: grouped by phase and theme, each pinned to a place ——— */
const EVENTS = [
{ id:"e-annunciation", t:"The Annunciation", place:"nazareth", phase:"Infancy", theme:"Revelation", ref:"Luke 1:26–38", s:"Gabriel comes to a village girl in a town with no reputation." },
{ id:"e-nativity", t:"The Nativity", place:"bethlehem", phase:"Infancy", theme:"Revelation", ref:"Luke 2:1–20", s:"Born under a Roman census in David's village; announced to shepherds." },
{ id:"e-innocents", t:"Massacre of the Innocents", place:"bethlehem", phase:"Infancy", theme:"Confrontation", ref:"Matthew 2:16–18", s:"Herod the Great kills the children of Bethlehem." },
{ id:"e-boyjesus", t:"The Boy in the Temple", place:"temple-mount", phase:"Infancy", theme:"Teaching", ref:"Luke 2:41–52", s:"At twelve, questioning the teachers in the Temple courts." },
{ id:"e-baptism", t:"The Baptism of Jesus", place:"bethabara", phase:"Beginnings", theme:"Revelation", ref:"Matthew 3:13–17", s:"The Spirit descends and the Father speaks at Israel's crossing point." },
{ id:"e-temptation", t:"The Temptation", place:"qumran", phase:"Beginnings", theme:"Confrontation", ref:"Matthew 4:1–11", s:"Forty days in the Judean wilderness above the Dead Sea.", locConf:"Matthew names only the wilderness. Qumran is used here as a schematic Judean-wilderness anchor, not as an identified temptation site." },
{ id:"e-firstdisciples", t:"The First Disciples", place:"bethabara", phase:"Beginnings", theme:"Journey", ref:"John 1:35–51", s:"Andrew, Peter, Philip and Nathanael leave John for Jesus." },
{ id:"e-cana", t:"Water into Wine", place:"cana", phase:"Beginnings", theme:"Sign", ref:"John 2:1–11", s:"The first sign: purification jars filled with wedding wine." },
{ id:"e-nazareth-rejection", t:"Rejected at Nazareth", place:"nazareth", phase:"Beginnings", theme:"Confrontation", ref:"Luke 4:16–30", s:"He reads Isaiah 61, names Gentile precedents, and they try to kill him." },
{ id:"e-samaritan-woman", t:"The Woman at the Well", place:"sychar", phase:"Beginnings", theme:"Teaching", ref:"John 4:1–42", s:"The longest conversation in the Gospels, with a Samaritan woman." },
{ id:"e-capernaum-base", t:"Moving to Capernaum", place:"capernaum", phase:"Galilean Ministry", theme:"Journey", ref:"Matthew 4:12–17", s:"Leaving Nazareth to base the mission on the lake." },
{ id:"e-callfishermen", t:"Call of the Fishermen", place:"gennesaret", phase:"Galilean Ministry", theme:"Journey", ref:"Luke 5:1–11", s:"A failed night's fishing, a full net, and 'follow me'." },
{ id:"e-synagogue-demon", t:"Authority in the Synagogue", place:"capernaum", phase:"Galilean Ministry", theme:"Confrontation", ref:"Mark 1:21–28", s:"Teaching 'as one that had authority' and an unclean spirit cast out." },
{ id:"e-paralytic", t:"The Paralytic Through the Roof", place:"capernaum", phase:"Galilean Ministry", theme:"Healing", ref:"Mark 2:1–12", s:"Four friends dig through a roof; sins forgiven and legs restored." },
{ id:"e-matthew-called", t:"Matthew at the Customs Post", place:"capernaum", phase:"Galilean Ministry", theme:"Journey", ref:"Matthew 9:9–13", s:"A border tax collector called from his booth, then dinner with 'sinners'." },
{ id:"e-twelve", t:"Choosing the Twelve", place:"beatitudes", phase:"Galilean Ministry", theme:"Teaching", ref:"Luke 6:12–16", s:"A night of prayer on the hill, then twelve named apostles." },
{ id:"e-sermon", t:"The Sermon on the Mount", place:"beatitudes", phase:"Galilean Ministry", theme:"Teaching", ref:"Matthew 5–7", s:"The Kingdom's constitution, delivered on a hillside above the lake." },
{ id:"e-centurion", t:"The Centurion's Servant", place:"capernaum", phase:"Galilean Ministry", theme:"Healing", ref:"Luke 7:1–10", s:"A Gentile officer's faith commended above all Israel's." },
{ id:"e-widow-nain", t:"The Widow of Nain's Son", place:"nain", phase:"Galilean Ministry", theme:"Healing", ref:"Luke 7:11–17", s:"A funeral stopped in the gateway; compassion without a request." },
{ id:"e-storm", t:"Stilling the Storm", place:"gennesaret", phase:"Galilean Ministry", theme:"Sign", ref:"Mark 4:35–41", s:"A squall funnelled off the hills, and 'peace, be still'." },
{ id:"e-legion", t:"The Gerasene Demoniac", place:"kursi", phase:"Decapolis Mission", theme:"Confrontation", ref:"Mark 5:1–20", s:"'My name is Legion' — deliverance in Gentile tomb country, and the first missionary sent." },
{ id:"e-jairus", t:"Jairus' Daughter & the Bleeding Woman", place:"capernaum", phase:"Galilean Ministry", theme:"Healing", ref:"Mark 5:21–43", s:"Twelve years of bleeding, twelve years of life — both restored on one journey." },
{ id:"e-john-death", t:"The Death of John the Baptist", place:"machaerus", phase:"Galilean Ministry", theme:"Confrontation", ref:"Mark 6:14–29", s:"A birthday banquet, an oath, and a prophet beheaded in a hill fortress." },
{ id:"e-5000", t:"Feeding the Five Thousand", place:"bethsaida", phase:"Galilean Ministry", theme:"Sign", ref:"Mark 6:30–44", s:"Five loaves, two fish, twelve baskets over — on the grass east of the Jordan mouth." },
{ id:"e-walkingwater", t:"Walking on the Water", place:"gennesaret", phase:"Galilean Ministry", theme:"Sign", ref:"Matthew 14:22–33", s:"The fourth watch of the night, and Peter over the side." },
{ id:"e-breadoflife", t:"The Bread of Life Discourse", place:"capernaum", phase:"Galilean Ministry", theme:"Teaching", ref:"John 6:22–71", s:"In the synagogue at Capernaum, and many disciples leave." },
{ id:"e-syrophoenician", t:"The Syrophoenician Woman", place:"tyre", phase:"Northern Journey", theme:"Healing", ref:"Mark 7:24–30", s:"A Gentile mother argues with Jesus about crumbs — and wins." },
{ id:"e-deaf-decapolis", t:"The Deaf Man in the Decapolis", place:"abila", phase:"Decapolis Mission", theme:"Healing", ref:"Mark 7:31–37", s:"'Ephphatha' — opened ears, on the far side of the lake.", locConf:"Mark locates the episode in the region of the Decapolis, not at Abila. Abila is a representative regional pin." },
{ id:"e-4000", t:"Feeding the Four Thousand", place:"gerasa", phase:"Decapolis Mission", theme:"Sign", ref:"Mark 8:1–10", s:"Seven loaves, seven baskets left — the Gentile counterpart to the 5,000.", locConf:"The Gospel does not identify the feeding site. Gerasa is a representative Decapolis-area reconstruction, not a documented location." },
{ id:"e-blind-bethsaida", t:"The Blind Man of Bethsaida", place:"bethsaida", phase:"Northern Journey", theme:"Healing", ref:"Mark 8:22–26", s:"The only two-stage healing: 'men as trees, walking'." },
{ id:"e-confession", t:"Peter's Confession", place:"caesarea-philippi", phase:"Northern Journey", theme:"Revelation", ref:"Matthew 16:13–20", s:"'Thou art the Christ' — at a shrine of Pan and a temple of Caesar." },
{ id:"e-passion-predict", t:"The First Passion Prediction", place:"caesarea-philippi", phase:"Northern Journey", theme:"Teaching", ref:"Matthew 16:21–28", s:"From confession to cross; Peter rebukes and is rebuked." },
{ id:"e-transfiguration", t:"The Transfiguration", place:"tabor", phase:"Northern Journey", theme:"Revelation", ref:"Matthew 17:1–13", s:"Face like the sun, Moses and Elijah, and a voice from the cloud.", locConf:"Location unknown. The Gospels do not name the mountain; Tabor is the early tradition, Hermon a leading modern proposal." },
{ id:"e-goodsamaritan", t:"The Good Samaritan (told)", place:"jericho", phase:"Journey to Jerusalem", theme:"Teaching", ref:"Luke 10:25–37", s:"Set on the real bandit road climbing 3,300 ft from Jericho." },
{ id:"e-lazarus", t:"The Raising of Lazarus", place:"bethany", phase:"Journey to Jerusalem", theme:"Sign", ref:"John 11:1–44", s:"Four days dead; the sign that sets the execution in motion." },
{ id:"e-bethesda", t:"Healing at Bethesda", place:"bethesda", phase:"Journey to Jerusalem", theme:"Healing", ref:"John 5:1–18", s:"Thirty-eight years of waiting, ended on a Sabbath." },
{ id:"e-siloam", t:"The Man Born Blind", place:"siloam", phase:"Journey to Jerusalem", theme:"Healing", ref:"John 9:1–41", s:"Sent to wash at the pilgrim pool, then interrogated and expelled." },
{ id:"e-tabernacles", t:"'If Any Man Thirst'", place:"siloam", phase:"Journey to Jerusalem", theme:"Teaching", ref:"John 7:37–39", s:"Spoken over the water ceremony on the last day of Tabernacles." },
{ id:"e-zacchaeus", t:"Zacchaeus", place:"jericho", phase:"Journey to Jerusalem", theme:"Journey", ref:"Luke 19:1–10", s:"The chief tax farmer of a priestly town, up a tree." },
{ id:"e-bartimaeus", t:"Blind Bartimaeus", place:"jericho", phase:"Journey to Jerusalem", theme:"Healing", ref:"Mark 10:46–52", s:"'Son of David, have mercy' — shouted on the road to the Passion." },
{ id:"e-anointing", t:"The Anointing at Bethany", place:"bethany", phase:"Passion Week", theme:"Revelation", ref:"Mark 14:3–9", s:"A year's wages of spikenard poured out for a burial not yet happened." },
{ id:"e-entry", t:"The Triumphal Entry", place:"olivet", phase:"Passion Week", theme:"Confrontation", ref:"Luke 19:28–44", s:"A counter-triumph on a donkey from the east, and tears over the city." },
{ id:"e-cleansing", t:"Cleansing the Temple", place:"temple-mount", phase:"Passion Week", theme:"Confrontation", ref:"Mark 11:15–19", s:"Tables overturned in the one court open to the nations." },
{ id:"e-widowmite", t:"The Widow's Two Mites", place:"temple-mount", phase:"Passion Week", theme:"Teaching", ref:"Mark 12:41–44", s:"Sitting opposite the treasury, watching who really gives." },
{ id:"e-olivet-discourse", t:"The Olivet Discourse", place:"olivet", phase:"Passion Week", theme:"Teaching", ref:"Matthew 24–25", s:"'Not one stone upon another' — spoken with the Temple in view." },
{ id:"e-lastsupper", t:"The Last Supper", place:"jerusalem", phase:"Passion Week", theme:"Revelation", ref:"Luke 22:7–38", s:"Bread and cup in a borrowed upper room; later tradition places it on the western hill.", locConf:"A furnished upper room somewhere in Jerusalem; no excavated room is securely identified with this event." },
{ id:"e-gethsemane", t:"Gethsemane", place:"gethsemane", phase:"Passion Week", theme:"Revelation", ref:"Mark 14:32–52", s:"'Not what I will' — then torches, a kiss, and a cohort." },
{ id:"e-trial-sanhedrin", t:"Trial Before the Sanhedrin", place:"caiaphas", phase:"Passion Week", theme:"Confrontation", ref:"Matthew 26:57–75", s:"A night hearing debated against later rabbinic norms; Peter denies three times." },
{ id:"e-trial-pilate", t:"Trial Before Pilate", place:"praetorium", phase:"Passion Week", theme:"Confrontation", ref:"John 18:28–19:16", s:"Blasphemy translated into sedition; 'what is truth?'" },
{ id:"e-crucifixion", t:"The Crucifixion", place:"golgotha", phase:"Passion Week", theme:"Revelation", ref:"Mark 15:21–41", s:"Outside the wall, in a quarry, between two rebels; the veil tears." },
{ id:"e-burial", t:"The Burial", place:"golgotha", phase:"Passion Week", theme:"Revelation", ref:"John 19:38–42", s:"A rich man's new tomb in a garden, yards from the cross." },
{ id:"e-resurrection", t:"The Resurrection", place:"golgotha", phase:"Resurrection & After", theme:"Revelation", ref:"John 20:1–18", s:"An empty tomb, a mistaken gardener, and one spoken name." },
{ id:"e-emmaus", t:"The Road to Emmaus", place:"emmaus", phase:"Resurrection & After", theme:"Teaching", ref:"Luke 24:13–35", s:"Seven miles of Bible study, then recognition in broken bread." },
{ id:"e-breakfast", t:"Breakfast on the Shore", place:"gennesaret", phase:"Resurrection & After", theme:"Journey", ref:"John 21:1–19", s:"153 fish, charcoal, and Peter restored three times.", locConf:"John names only the Sea of Tiberias; no specific shore locality is given in the text." },
{ id:"e-ascension", t:"The Ascension", place:"olivet", phase:"Resurrection & After", theme:"Revelation", ref:"Acts 1:6–12", s:"Departure from the ridge Zechariah named, a Sabbath day's journey out." },
{ id:"e-pentecost", t:"Pentecost", place:"jerusalem", phase:"Resurrection & After", theme:"Revelation", ref:"Acts 2:1–41", s:"Wind, fire, and many languages in an unidentified house in Jerusalem.", locConf:"An unidentified ‘house’ in Jerusalem; Acts does not tie it to the Last Supper room or Caiaphas’s residence." },
{ id:"e-philip-samaria", t:"Philip in Samaria", place:"sebaste", phase:"Resurrection & After", theme:"Journey", ref:"Acts 8:4–25", s:"Step two of Acts 1:8, in a Samaritan city — possibly Sebaste, built to honour Augustus, though Acts 8:5 is ambiguous.", locConf:"Acts 8:5 may mean ‘a city of Samaria’ or ‘the city’; Sebaste is plausible, not secure." },
{ id:"e-cornelius", t:"Cornelius and Peter", place:"caesarea", phase:"Resurrection & After", theme:"Revelation", ref:"Acts 10", s:"The Gentile door opened through a centurion of the occupying army." },
{ id:"e-peter-vision", t:"Peter's Vision at Joppa", place:"joppa", phase:"Resurrection & After", theme:"Revelation", ref:"Acts 10:9–23", s:"'What God hath cleansed' — at the port Jonah fled from." },
{ id:"e-damascus-road", t:"The Damascus Road", place:"damascus", phase:"Resurrection & After", theme:"Confrontation", ref:"Acts 9:1–25", s:"A persecutor stopped on a six-day trade road." },
{ id:"e-pella-flight", t:"Flight to Pella", place:"pella", phase:"Resurrection & After", theme:"Journey", ref:"Eusebius, Ecclesiastical History 3.5.3; compare Matthew 24:15–16", s:"The Jerusalem church withdraws to a Decapolis city before AD 70.", locConf:"Pella is an early Christian historical tradition reported by Eusebius, not a location named in Matthew or Acts." }
];

/* ——— JOURNEYS: traced routes, real waypoints ——— */
const JOURNEYS = [
{ id:"j-infancy", name:"Nazareth → Bethlehem (Nativity)", phase:"Infancy", color:"#7a6a54", refs:"Luke 2:1–7",
  note:"About 90 miles by the Ridge Route through Samaria, or longer through Perea. Four to seven days on foot.",
  path:[[32.7021,35.2978],[32.5500,35.3200],[32.2770,35.1905],[32.2035,35.2815],[31.9300,35.2200],[31.7784,35.2354],[31.7054,35.2024]] },
{ id:"j-baptism", name:"Galilee → the Jordan → the Wilderness", phase:"Beginnings", color:"#4f7a8a", refs:"Matthew 3:13–4:11",
  note:"Down the Jordan Valley road from the lake to John's baptising place — a descent of nearly 500 ft below sea level, then into the Judean desert.",
  path:[[32.8808,35.5751],[32.5003,35.5008],[32.1000,35.5300],[31.8370,35.5390],[31.7410,35.4590]] },
{ id:"j-galilee-circuit", name:"The Galilean Circuit", phase:"Galilean Ministry", color:"#8c3a2b", refs:"Matthew 4:23–25",
  note:"The lake-shore ministry: villages within a day's walk or a few hours' sail of Capernaum.",
  path:[[32.7021,35.2978],[32.7490,35.3392],[32.8272,35.5160],[32.8811,35.5556],[32.8808,35.5751],[32.9073,35.5637],[32.9106,35.6299],[32.8808,35.5751],[32.8452,35.5290],[32.6318,35.3436]] },
{ id:"j-decapolis", name:"Across the Lake into the Decapolis", phase:"Decapolis Mission", color:"#5c6b3a", refs:"Mark 5:1–20; 7:31; 8:1–10",
  note:"A night crossing of six miles to the Gentile east shore, then inland through the territories of Hippos, Gadara, Abila and Gerasa.",
  path:[[32.8808,35.5751],[32.8265,35.6513],[32.7787,35.6600],[32.6553,35.6840],[32.6800,35.8680],[32.2811,35.8911],[32.4570,35.6170],[32.5003,35.5008]] },
{ id:"j-north", name:"The Northern Journey: Tyre, Sidon, Caesarea Philippi", phase:"Northern Journey", color:"#6a4a7a", refs:"Mark 7:24–8:30",
  note:"The furthest Jesus travels from Jewish territory — 50 miles up the Phoenician coast, then a long inland circuit back through the Decapolis and up to the Jordan's headwaters.",
  path:[[32.8808,35.5751],[33.2705,35.1960],[33.5630,35.3690],[33.2705,35.1960],[32.9000,35.3000],[32.8808,35.5751],[33.0170,35.5680],[33.2483,35.6944],[33.4160,35.8570]] },
{ id:"j-samaria", name:"Through Samaria (the direct road)", phase:"Beginnings", color:"#a8763c", refs:"John 4:1–43",
  note:"The Ridge Route straight through Samaritan territory — three days instead of the five most Galilean pilgrims took by detouring through Perea.",
  path:[[31.7784,35.2354],[31.9300,35.2200],[32.2035,35.2815],[32.2770,35.1905],[32.5500,35.3200],[32.7021,35.2978],[32.7490,35.3392]] },
{ id:"j-tojerusalem", name:"The Final Journey to Jerusalem", phase:"Journey to Jerusalem", color:"#b0442e", refs:"Luke 9:51–19:44",
  note:"Down the Jordan Valley through Perea, across at the fords near Jericho, then the 17-mile climb of 3,300 ft to the city.",
  path:[[32.8808,35.5751],[32.5003,35.5008],[32.4570,35.6170],[32.1000,35.6000],[31.8370,35.5390],[31.8700,35.4440],[31.8000,35.3000],[31.7712,35.2640],[31.7784,35.2354]] },
{ id:"j-passion", name:"Passion Week in Jerusalem", phase:"Passion Week", color:"#2b2118", refs:"Mark 11–15",
  note:"Six days within two miles: Bethany lodging, the entry over Olivet, the Temple, the upper room, Gethsemane, Caiaphas, Pilate, Golgotha.",
  path:[[31.7712,35.2640],[31.7784,35.2455],[31.7780,35.2354],[31.7718,35.2290],[31.7794,35.2397],[31.7718,35.2290],[31.7765,35.2277],[31.7784,35.2298]] },
{ id:"j-resurrection", name:"After the Resurrection", phase:"Resurrection & After", color:"#c2963c", refs:"Luke 24; John 21; Acts 1",
  note:"Out to Emmaus and back the same night, north to the Galilean shore, and finally the Ascension from Olivet.",
  path:[[31.7784,35.2298],[31.8390,34.9890],[31.7784,35.2354],[32.8452,35.5290],[32.8808,35.5751],[31.7784,35.2455]] },
{ id:"j-acts", name:"The Acts 1:8 Expansion", phase:"Resurrection & After", color:"#3f6b6b", refs:"Acts 1:8; 8–10",
  note:"Jerusalem, then Samaria, then the coast — Joppa and Caesarea — and out along the Damascus road.",
  path:[[31.7784,35.2354],[32.2770,35.1905],[32.0540,34.7520],[32.5000,34.8920],[32.5000,34.8920],[33.5138,36.2920]] }
];

/* ——— ROMAN ROADS & TRADE ROUTES ———
   Traced through the passes, fords and towns the routes actually used, not straight lines. */
const ROADS = [
{ name:"Via Maris (Way of the Sea)", note:"The great trunk road from Egypt to Damascus: up the coastal plain, inland through the Carmel pass at Megiddo, across Esdraelon, along the lake shore, then east over the Golan. The reason Galilee was never isolated.",
  path:[[31.5200,34.4500],[31.6100,34.4900],[31.6700,34.5500],[31.7400,34.6000],[31.8000,34.6500],[31.9200,34.7100],[32.0540,34.7520],[32.1300,34.8000],[32.1900,34.8100],[32.2800,34.8500],[32.3800,34.8700],[32.5000,34.8920],[32.5600,34.9200],[32.5800,34.9900],[32.5900,35.0700],[32.5850,35.1830],[32.5950,35.2400],[32.6300,35.2800],[32.6800,35.3200],[32.7200,35.3900],[32.7500,35.4400],[32.7900,35.4800],[32.8270,35.5160],[32.8550,35.5450],[32.8808,35.5751],[32.9200,35.5800],[32.9700,35.5750],[33.0170,35.5680],[33.0800,35.5800],[33.1500,35.6000],[33.2300,35.6100],[33.2800,35.7000],[33.3200,35.8200],[33.3700,35.9600],[33.4200,36.0800],[33.4700,36.1900],[33.5138,36.2920]] },
{ name:"King's Highway (Transjordan)", note:"The eastern caravan road from Damascus to Arabia, running the Transjordan plateau through the Decapolis and Perea to Petra.",
  path:[[33.5138,36.2920],[33.3800,36.3100],[33.2200,36.2800],[33.0500,36.1800],[32.8900,36.0900],[32.7400,36.1000],[32.6200,36.1000],[32.5000,36.0300],[32.3900,35.9500],[32.2811,35.8911],[32.1800,35.9100],[32.0700,35.9300],[31.9539,35.9450],[31.8700,35.8800],[31.8000,35.8100],[31.7200,35.7900],[31.6300,35.7800],[31.5000,35.7800],[31.3800,35.7600],[31.2500,35.7200]] },
{ name:"Ridge Route (Judea–Samaria–Galilee)", note:"The watershed road along the spine of the hill country: Hebron, Bethlehem, Jerusalem, Bethel, Shechem, Samaria. The direct — and to Galileans, awkward — way north.",
  path:[[31.2500,34.7900],[31.3400,34.8900],[31.4200,34.9900],[31.5300,35.1000],[31.6200,35.1300],[31.7054,35.2024],[31.7500,35.2200],[31.7784,35.2354],[31.8100,35.2350],[31.8600,35.2280],[31.9300,35.2200],[32.0000,35.2400],[32.0600,35.2900],[32.1300,35.2900],[32.2035,35.2815],[32.2400,35.2400],[32.2770,35.1905],[32.3200,35.2100],[32.3700,35.2400],[32.4300,35.2800],[32.4900,35.3000],[32.5500,35.3200],[32.6100,35.3100],[32.7021,35.2978]] },
{ name:"Jordan Valley Road", note:"The hot rift-floor road that let Galilean pilgrims bypass Samaria entirely — down the west bank of the Jordan from the lake to the fords at Jericho.",
  path:[[32.8808,35.5751],[32.8300,35.5450],[32.7940,35.5320],[32.7300,35.5600],[32.6700,35.5650],[32.6000,35.5500],[32.5400,35.5200],[32.5003,35.5008],[32.4300,35.5200],[32.3600,35.5300],[32.2800,35.5250],[32.2000,35.5300],[32.1200,35.5250],[32.0400,35.5100],[31.9600,35.4900],[31.9000,35.4650],[31.8700,35.4440]] },
{ name:"Jerusalem–Jericho Road", note:"Seventeen miles, 3,300 ft of descent along the Wadi Qelt ridge through ravines that sheltered bandits — the road of the Good Samaritan.",
  path:[[31.7784,35.2354],[31.7790,35.2500],[31.7810,35.2640],[31.7900,35.2850],[31.7980,35.3050],[31.8080,35.3250],[31.8180,35.3450],[31.8280,35.3700],[31.8400,35.3950],[31.8520,35.4150],[31.8620,35.4300],[31.8700,35.4440]] },
{ name:"Jerusalem–Caesarea Road", note:"The imperial road between the Temple city and the governor's seat, down the Beth Horon descent through Antipatris. Paul was taken along it under guard by night.",
  path:[[31.7784,35.2354],[31.8100,35.1900],[31.8400,35.1500],[31.8800,35.1000],[31.9300,35.0500],[31.9800,34.9900],[32.0400,34.9500],[32.1000,34.9300],[32.1700,34.9150],[32.2500,34.9000],[32.3400,34.8950],[32.4300,34.8900],[32.5000,34.8920]] },
{ name:"Scythopolis–Pella–Gerasa link", note:"The road binding the Decapolis cities across the Jordan fords to the Jezreel corridor — the route of the Decapolis mission.",
  path:[[32.5003,35.5008],[32.4900,35.5500],[32.4700,35.5850],[32.4570,35.6170],[32.4300,35.6700],[32.4000,35.7200],[32.3600,35.7700],[32.3200,35.8300],[32.2811,35.8911]] },
{ name:"Yarmuk road (Gadara–Hippos–Capernaum)", note:"The short link from the Decapolis heights down to the lake's east shore and across to Jewish Galilee — a border road walked constantly in the Gospels.",
  path:[[32.6553,35.6840],[32.6900,35.6700],[32.7300,35.6650],[32.7787,35.6600],[32.8100,35.6550],[32.8265,35.6513],[32.8600,35.6400],[32.8850,35.6250],[32.8808,35.5751]] },
{ name:"Sepphoris–Ptolemais road", note:"Galilee's outlet to the sea: the road from Antipas' first capital down the Beth Netofa valley to the Phoenician port of Acco.",
  path:[[32.7524,35.2794],[32.7700,35.2200],[32.7900,35.1600],[32.8200,35.1200],[32.8700,35.0900],[32.9200,35.0700]] }
];

/* ——— POLITICAL DIVISIONS, c. AD 30 ———
   Boundaries traced along the features that actually formed them: the Mediterranean
   coastline, the Jordan and Hula valleys, the Jezreel plain, the Dead Sea shore, and
   the Gilead/Golan escarpments. Still approximate — ancient frontiers were zones, not
   lines — but they follow real terrain rather than straight cuts. The Decapolis was
   never a contiguous province: it is drawn here as the separate territories (chōrai)
   of its cities, which is how contemporaries understood it. */

/* elliptical city territory, 20 vertices */
function terr(lat, lon, rlat, rlon){
  const r = [];
  for(let i = 0; i < 20; i++){
    const a = (i / 20) * Math.PI * 2;
    r.push([+(lat + rlat * Math.cos(a)).toFixed(4), +(lon + rlon * Math.sin(a)).toFixed(4)]);
  }
  return r;
}

const REGIONS = [
{ name:"Galilee", ruler:"Herod Antipas, tetrarch", note:"Jewish, densely villaged, prosperous from fish and grain. Antipas ruled 4 BC–AD 39 from Sepphoris then Tiberias, and held the lake itself along with its western shore.", color:"#8c3a2b", culture:"jewish", labelAt:[32.78,35.28],
  poly:[[33.0800,35.1200],[33.0900,35.2100],[33.0850,35.3000],[33.0700,35.4100],[33.0450,35.5100],[33.0150,35.5800],[32.9750,35.6000],[32.9350,35.6100],[32.9000,35.6250],[32.8850,35.6350],[32.8600,35.6550],[32.8300,35.6600],[32.8000,35.6500],[32.7700,35.6350],[32.7400,35.6050],[32.7150,35.5850],[32.6950,35.5700],[32.6700,35.5400],[32.6350,35.4900],[32.6050,35.4500],[32.5750,35.4000],[32.5550,35.3550],[32.5500,35.3050],[32.5650,35.2500],[32.5850,35.1950],[32.6000,35.1400],[32.6150,35.0800],[32.6450,35.0200],[32.6900,34.9850],[32.7500,34.9900],[32.8100,35.0150],[32.8700,35.0350],[32.9400,35.0600],[33.0100,35.0900]] },
{ name:"Perea", ruler:"Herod Antipas, tetrarch", note:"The Jewish east bank, from the Jabbok in the north to the Arnon in the south. John baptised and died here; Galilean pilgrims crossed it to avoid Samaria.", color:"#a5563f", culture:"jewish", labelAt:[31.95,35.68],
  poly:[[32.4000,35.5900],[32.3700,35.6600],[32.3400,35.7300],[32.3000,35.7900],[32.2500,35.8300],[32.1900,35.8500],[32.1200,35.8600],[32.0500,35.8700],[31.9800,35.8800],[31.9100,35.8600],[31.8500,35.8300],[31.7800,35.8000],[31.7100,35.7700],[31.6400,35.7400],[31.5700,35.7100],[31.5100,35.6800],[31.4600,35.6400],[31.4300,35.5900],[31.4600,35.5500],[31.5300,35.5350],[31.6100,35.5250],[31.6900,35.5200],[31.7700,35.5250],[31.8400,35.5350],[31.9100,35.5450],[31.9800,35.5500],[32.0600,35.5550],[32.1400,35.5650],[32.2200,35.5750],[32.3000,35.5850]] },
{ name:"Judea", ruler:"Pontius Pilate, Roman prefect (AD 26–36)", note:"Governed from Caesarea, with the high priest and Sanhedrin managing internal affairs. Rome kept the power of execution. Its coastal plain reached Joppa; its wilderness ran to the Dead Sea.", color:"#6b3f6b", culture:"jewish", labelAt:[31.62,35.00],
  poly:[[31.9800,34.7500],[31.9600,34.8700],[31.9400,34.9900],[31.9300,35.0900],[31.9150,35.1800],[31.8950,35.2700],[31.8700,35.3600],[31.8400,35.4400],[31.8000,35.4850],[31.7400,35.4950],[31.6700,35.4700],[31.6000,35.4500],[31.5200,35.4350],[31.4400,35.4250],[31.3700,35.4000],[31.3300,35.3300],[31.3100,35.2400],[31.3100,35.1400],[31.3300,35.0400],[31.3800,34.9200],[31.4500,34.8000],[31.5400,34.6900],[31.6400,34.6300],[31.7400,34.6200],[31.8400,34.6600],[31.9200,34.7000]] },
{ name:"Samaria", ruler:"Roman prefect (Samaritan population)", note:"Pentateuch-only Samaritans worshipping on Gerizim; their temple was destroyed by the Hasmoneans about 110 BC. The Ridge Route runs its whole length, which is why Galilean pilgrims usually went round.", color:"#a8763c", culture:"samaritan", labelAt:[32.22,35.10],
  poly:[[32.5000,35.0700],[32.4900,35.1600],[32.4750,35.2500],[32.4550,35.3400],[32.4300,35.4300],[32.3900,35.4900],[32.3300,35.5200],[32.2600,35.5150],[32.1900,35.5000],[32.1200,35.4800],[32.0500,35.4500],[31.9900,35.4100],[31.9550,35.3400],[31.9400,35.2500],[31.9350,35.1600],[31.9400,35.0700],[31.9600,34.9800],[32.0100,34.9200],[32.0900,34.9100],[32.1800,34.9250],[32.2700,34.9450],[32.3600,34.9800],[32.4400,35.0200]] },
{ name:"Iturea, Gaulanitis & Trachonitis", ruler:"Herod Philip, tetrarch", note:"Mixed Gentile and Jewish frontier territory from Hermon to the volcanic Trachon badlands. Philip founded Caesarea Philippi and Julias, and Jesus repeatedly crossed the Jordan into his jurisdiction for rest.", color:"#3f6b6b", culture:"gentile", labelAt:[33.05,35.95],
  poly:[[33.5500,35.6000],[33.4900,35.7200],[33.4200,35.8600],[33.3500,36.0000],[33.2700,36.1300],[33.1800,36.2400],[33.0800,36.3400],[32.9800,36.4300],[32.8900,36.5100],[32.8100,36.5500],[32.7500,36.4900],[32.7200,36.3800],[32.7300,36.2600],[32.7700,36.1400],[32.8200,36.0300],[32.8600,35.9200],[32.8900,35.8200],[32.9000,35.7300],[32.9050,35.6600],[32.9400,35.6350],[32.9800,35.6200],[33.0300,35.6150],[33.0900,35.6150],[33.1600,35.6150],[33.2400,35.6050],[33.3200,35.5950],[33.4100,35.5900],[33.4900,35.5900]] },
{ name:"Decapolis", ruler:"Free Greek cities under the legate of Syria", note:"Not a province but a league of autonomous Hellenistic cities — Pliny lists ten — each with its own coinage, temples, theatres and rural territory. Together they formed a Gentile belt on Judea's eastern flank. Shown here as the separate city territories they actually were.", color:"#5c6b3a", culture:"gentile", labelAt:[32.15,36.25],
  rings:[
    terr(32.5003,35.5008,0.115,0.130),  /* Scythopolis */
    terr(32.4570,35.6170,0.075,0.085),  /* Pella */
    terr(32.6553,35.6840,0.085,0.100),  /* Gadara */
    terr(32.7787,35.6600,0.070,0.075),  /* Hippos */
    terr(32.6800,35.8680,0.080,0.095),  /* Abila */
    terr(32.2811,35.8911,0.130,0.145),  /* Gerasa */
    terr(31.9539,35.9450,0.130,0.150),  /* Philadelphia */
    terr(32.7570,36.6180,0.110,0.130),  /* Canatha */
    terr(32.6000,36.0500,0.070,0.080),  /* Dion (site uncertain) */
    terr(32.9000,36.1500,0.070,0.080)   /* Raphana (site uncertain) */
  ] },
{ name:"Phoenicia", ruler:"Province of Syria", note:"Greek-speaking coastal cities — Sidon, Tyre, Ptolemais — that bought Galilean grain and worshipped Melqart and Astarte. Its western edge is the Mediterranean shoreline; its eastern edge the Lebanon foothills.", color:"#4f7a8a", culture:"gentile", labelAt:[33.15,35.30],
  poly:[[33.6200,35.3900],[33.5700,35.3700],[33.5100,35.3350],[33.4500,35.3000],[33.3900,35.2600],[33.3300,35.2200],[33.2700,35.1900],[33.2100,35.1750],[33.1500,35.1600],[33.0900,35.1150],[33.0300,35.0950],[32.9700,35.0800],[32.9100,35.0700],[32.8500,35.0600],[32.7900,35.0400],[32.7300,35.0050],[32.6800,34.9700],[32.7000,35.0500],[32.7600,35.1300],[32.8300,35.2000],[32.9100,35.2600],[32.9900,35.3100],[33.0700,35.3600],[33.1600,35.4100],[33.2500,35.4600],[33.3400,35.4900],[33.4300,35.5100],[33.5200,35.5100],[33.6000,35.4800]] },
{ name:"Nabatea", ruler:"King Aretas IV (9 BC – AD 40)", note:"The Arab kingdom controlling the incense routes from Petra. Aretas' governor watched the gates of Damascus for Paul (2 Cor 11:32), and Antipas' divorce of Aretas' daughter to marry Herodias is what John denounced.", color:"#8a6a3a", culture:"gentile", labelAt:[31.20,35.95],
  poly:[[31.4300,35.5900],[31.4600,35.6600],[31.4400,35.7500],[31.3800,35.8400],[31.3000,35.9200],[31.2000,35.9800],[31.0800,36.0300],[30.9500,36.0500],[30.8500,35.9500],[30.8300,35.8000],[30.9000,35.6500],[31.0200,35.5300],[31.1500,35.4700],[31.2800,35.4700],[31.3800,35.5200]] }
];

/* ——— ELEVATION / TERRAIN CALLOUTS ——— */
const ELEVATIONS = [
{ name:"Mount Hermon", lat:33.4160, lon:35.8570, ft:9232, note:"Snow-capped; the Jordan's source." },
{ name:"Jerusalem (Temple Mount)", lat:31.7780, lon:35.2354, ft:2428, note:"On the Judean watershed." },
{ name:"Nazareth", lat:32.7021, lon:35.2978, ft:1138, note:"A bowl in the Nazareth ridge." },
{ name:"Mount Tabor", lat:32.6873, lon:35.3903, ft:1886, note:"Rises 1,300 ft from the plain." },
{ name:"Sea of Galilee", lat:32.8000, lon:35.5900, ft:-686, note:"Ringed by hills that funnel squalls." },
{ name:"Jericho", lat:31.8700, lon:35.4440, ft:-846, note:"Oasis on the rift floor." },
{ name:"Dead Sea", lat:31.5000, lon:35.4500, ft:-1412, note:"Lowest land on earth." },
{ name:"Machaerus", lat:31.5670, lon:35.6250, ft:2300, note:"Perean escarpment above the Dead Sea." }
];

const RIFT = [[33.2000,35.6300],[33.0000,35.6100],[32.8800,35.5900],[32.7000,35.5700],[32.5000,35.5300],[32.2000,35.5300],[31.8700,35.5000],[31.7000,35.4800],[31.4000,35.4500],[31.1000,35.4500]];

/* The Jordan's course, in two segments so the line never draws across the lake itself */
const JORDAN = [
  [[33.2483,35.6944],[33.1900,35.6320],[33.1000,35.6210],[33.0000,35.6180],[32.9200,35.6280],[32.8770,35.6270]],
  [[32.7080,35.5720],[32.6400,35.5600],[32.5600,35.5540],[32.5000,35.5450],[32.3800,35.5520],[32.2400,35.5480],[32.1000,35.5460],[31.9500,35.5500],[31.8370,35.5390],[31.7700,35.5450]]
];

const WATER = [
{ name:"Sea of Galilee", type:"lake", lat:32.8000, lon:35.5900,
  note:"Kinneret in Hebrew, Gennesaret in Luke, 'sea of Tiberias' in John. Thirteen miles by eight, about 686 ft below sea level in the figures Bible atlases use (the lake has since dropped somewhat lower), and 141 ft deep at most. Sixteen harbours have been identified around its shore." },
{ name:"The Jordan River", type:"river", lat:32.2000, lon:35.5500,
  note:"About 156 miles of river from Hermon's springs to the Dead Sea. Between the Sea of Galilee and the Dead Sea alone, its meanders cover some 135 river miles to advance just 65 — which is why early explorers could not account for its fall. The boundary of the Land, the place of crossing, and the place of baptism." },
{ name:"The Dead Sea", type:"lake", lat:31.5000, lon:35.4500,
  note:"Called the Salt Sea and, by the Greeks, Asphaltitis. Roughly ten times as salty as the ocean. The 1,412 ft below sea level given here is the traditional atlas figure; the sea has fallen steadily since and its surface now sits closer to 1,440 ft below. Qumran, Machaerus and Masada ring its shores." },
{ name:"The Great Sea", type:"sea", lat:32.6000, 
  lon:34.6000, note:"The Mediterranean — Rome's highway. Israel had no natural harbour until Herod built one from concrete at Caesarea." }
];

const RABBINIC = [
{ name:"Sepphoris", lat:32.7524, lon:35.2794, note:"Rabbi Judah ha-Nasi redacted the Mishnah here c. AD 200; seat of the Sanhedrin before Tiberias." },
{ name:"Tiberias", lat:32.7940, lon:35.5320, note:"Seat of the Sanhedrin, home of the Jerusalem Talmud (c. AD 400) and the Masoretes who vocalised the Hebrew Bible." },
{ name:"Jerusalem", lat:31.7784, lon:35.2354, note:"The schools of Hillel and Shammai; Gamaliel taught Saul of Tarsus here (Acts 22:3)." },
{ name:"Yavneh (Jamnia)", lat:31.8780, lon:34.7390, note:"Where Yoḥanan ben Zakkai rebuilt Judaism without a Temple after AD 70 — the pivot to rabbinic Judaism." },
{ name:"Lydda (Lod)", lat:31.9510, lon:34.8950, note:"Academy of Rabbi Eliezer ben Hyrcanus; also where Peter healed Aeneas (Acts 9:32–35)." },
{ name:"Bene Berak", lat:32.0840, lon:34.8330, note:"Rabbi Akiva's academy, named in the Passover Haggadah." },
{ name:"Beth Shearim", lat:32.7020, lon:35.1300, note:"Necropolis of the Sanhedrin patriarchs; hundreds of inscribed burial chambers." },
{ name:"Qumran", lat:31.7410, lon:35.4590, note:"Separatist priestly community and the Dead Sea Scrolls library." }
];

const SACRED = [
{ name:"Temple of Augustus, Sebaste", lat:32.2765, lon:35.1905, kind:"Imperial cult", note:"Herod's temple to the emperor on the acropolis of Israel's old capital." },
{ name:"Temple of Rome & Augustus, Caesarea", lat:32.5010, lon:34.8900, kind:"Imperial cult", note:"Faced the harbour mouth; the first thing a sailor saw." },
{ name:"Sanctuary of Pan, Caesarea Philippi", lat:33.2483, lon:35.6944, kind:"Pagan sanctuary", note:"Cave, spring and statue niches; called the 'gates of Hades'." },
{ name:"Temple of Melqart-Herakles, Tyre", lat:33.2705, lon:35.1960, kind:"Pagan sanctuary", note:"Phoenicia's chief cult; Tyre's civic identity." },
{ name:"Temple of Eshmun, Sidon", lat:33.5760, lon:35.3800, kind:"Pagan sanctuary", note:"Healing god's sanctuary with pools and votive statues." },
{ name:"Temple of Artemis, Gerasa", lat:32.2830, lon:35.8900, kind:"Pagan sanctuary", note:"Monumental stair and propylaea — the Decapolis at its grandest." },
{ name:"Temple of Zeus / Kalybe, Hippos", lat:32.7787, lon:35.6600, kind:"Pagan sanctuary", note:"Imperial shrine on the plateau facing Capernaum." },
{ name:"Temple of Hercules, Philadelphia", lat:31.9539, lon:35.9450, kind:"Pagan sanctuary", note:"On the Amman citadel above the Roman theatre." },
{ name:"Samaritan Temple site, Mount Gerizim", lat:32.2000, lon:35.2730, kind:"Samaritan", note:"'Our fathers worshipped in this mountain' (John 4:20). Destroyed by John Hyrcanus around 110 BC; the Samaritan community still keeps Passover on the mountain." },
{ name:"Herod's Temple, Jerusalem", lat:31.7780, lon:35.2354, kind:"Jewish Temple", note:"The only sanctioned place of sacrifice for Jews worldwide." },
{ name:"Synagogue, Magdala", lat:32.8272, lon:35.5160, kind:"Synagogue (1st c.)", note:"Excavated 2009; frescoed, with the carved Magdala Stone." },
{ name:"Synagogue, Capernaum", lat:32.8808, lon:35.5751, kind:"Synagogue (1st c. foundations)", note:"Black basalt foundations under the white limestone building." },
{ name:"Synagogue, Gamla", lat:32.9030, lon:35.7430, kind:"Synagogue (1st c.)", note:"One of the earliest certain synagogue buildings, in the Golan." },
{ name:"Synagogue, Chorazin", lat:32.9073, lon:35.5637, kind:"Synagogue (later)", note:"Contains the basalt 'Seat of Moses'." },
{ name:"Asclepion, Bethesda", lat:31.7815, lon:35.2364, kind:"Pagan healing shrine", note:"A healing cult operated beside the pools, next to the Temple's sheep gate." }
];

const JERUSALEM_FEATURES = [
{ name:"Kidron Valley", note:"Between the city and Olivet; crossed on the night of the arrest, and where David fled from Absalom.", path:[[31.7900,35.2400],[31.7830,35.2390],[31.7770,35.2385],[31.7700,35.2370],[31.7620,35.2340]] },
{ name:"Hinnom Valley (Gehenna)", note:"The southern ravine of child sacrifice under Ahaz and Manasseh; its name became the New Testament word for hell.", path:[[31.7760,35.2230],[31.7710,35.2260],[31.7680,35.2320],[31.7660,35.2370],[31.7700,35.2370]] },
{ name:"First-century city wall (approximate)", note:"The line of the wall in AD 30. Golgotha and the tomb lay just outside it to the north-west.", path:[[31.7760,35.2250],[31.7810,35.2290],[31.7830,35.2350],[31.7815,35.2380],[31.7760,35.2390],[31.7700,35.2370],[31.7680,35.2320],[31.7700,35.2260],[31.7760,35.2250]] },
{ name:"The Stepped Street", note:"The paved pilgrim ascent from the Pool of Siloam to the Temple's southern steps, excavated in full.", path:[[31.7703,35.2354],[31.7730,35.2350],[31.7755,35.2348],[31.7770,35.2350]] }
];

/* ——— GUIDED TOURS: stepped walkthroughs ——— */const TOURS = [
{
  id:"t-passion", name:"Passion Week, day by day", phase:"Passion Week",
  sub:"Six days inside two miles — the densest week in the Gospels, in the order it happened.",
  steps:[
    { place:"bethany", t:"Saturday — the anointing at Bethany", ref:"John 12:1–8; Mark 14:3–9",
      note:"Six days before Passover Jesus lodges two miles east of the city, outside the crowds and the Temple police. Mary pours out a year's wages of spikenard; he reads it as burial preparation. Bethany is his base for the whole week — he never sleeps inside Jerusalem." },
    { place:"olivet", t:"Sunday — the entry over the Mount of Olives", ref:"Luke 19:28–44",
      note:"Down the western slope on a donkey, from the east, over the ridge Zechariah named. A Roman triumph used a warhorse; this is a deliberate counter-triumph, and at the turn where the Temple comes into view he stops and weeps." },
    { place:"temple-mount", t:"Monday — the Temple action", ref:"Mark 11:15–19",
      note:"Tables overturned in the Court of the Gentiles — the only court a non-Jew could enter, and the one that had been monetised. He quotes Isaiah's 'house of prayer for all nations' against Jeremiah's 'den of thieves.'" },
    { place:"temple-mount", t:"Tuesday — a day of questions in the courts", ref:"Mark 12; Matthew 22–23",
      note:"Tribute to Caesar, the resurrection, the greatest commandment, the widow's two mites. The Sadducees, Pharisees and Herodians each take a turn; by evening the plot is fixed." },
    { place:"olivet", t:"Tuesday evening — the Olivet Discourse", ref:"Matthew 24–25",
      note:"Sitting on the ridge with the whole gleaming platform in view, he says not one stone will be left on another. Forty years later Titus proved him right." },
    { place:"jerusalem", t:"Thursday — the Last Supper", ref:"Luke 22:7–38",
      note:"A furnished upper room somewhere in the city — tradition later settled on the Cenacle, a Crusader hall on Mount Zion, as the site. Bread and cup given new meaning inside the Passover liturgy; the betrayal named at the table." },
    { place:"gethsemane", t:"Thursday night — Gethsemane", ref:"Mark 14:32–52",
      note:"Across the Kidron to an olive press among the camping pilgrims. 'Not what I will, but what thou wilt' — the decision that makes the cross possible. Then torches, a kiss, and a cohort." },
    { place:"caiaphas", t:"Friday, small hours — before the Sanhedrin", ref:"Matthew 26:57–75",
      note:"A night hearing in the high priest's mansion. Later rabbinic legal traditions in the Mishnah prohibit several features of this kind of hearing, though historians debate how directly those later norms reflect Jerusalem procedure in the AD 30s. Outside in the courtyard, Peter denies him three times and a cock crows." },
    { place:"praetorium", t:"Friday dawn — before Pilate", ref:"John 18:28–19:16",
      note:"Blasphemy will not convict in a Roman court, so the charge is translated into sedition: 'king of the Jews.' 'We have no king but Caesar' makes acquittal career suicide for the prefect." },
    { place:"golgotha", t:"Friday to Sunday — Golgotha and the empty tomb", ref:"Mark 15:21–41; John 20:1–18",
      note:"An abandoned quarry outside the wall, beside a road, with a rich man's new tomb in a garden a few yards away. The veil tears; a centurion confesses; on the third day Mary mistakes the risen Christ for the gardener." }
  ]
},
{
  id:"t-decapolis", name:"Across the lake: the Decapolis crossing", phase:"Decapolis Mission",
  sub:"How the Gospel first went to Gentiles — a night crossing, a naked man in a graveyard, and a mission that came back around.",
  steps:[
    { place:"capernaum", t:"1. Push off from Capernaum", ref:"Mark 4:35",
      note:"'Let us pass over unto the other side.' The other side means Gentile territory: pigs, tombs, Greek cities, Roman coin. Six miles of open water at night in a patched 27-ft boat." },
    { place:"gennesaret", t:"2. The squall on the water", ref:"Mark 4:36–41",
      note:"The hills funnel evening downdrafts onto a lake 686 ft below sea level; squalls rise in minutes. Professional fishermen are terrified, and he is asleep in the stern." },
    { place:"kursi", t:"3. Landfall in the country of the Gerasenes", ref:"Mark 5:1–20",
      note:"Tombs in the hillside, a herd of 2,000 pigs, a man who calls himself Legion — the name of the occupier. Every category of impurity in Jewish law, stacked in one scene, and he walks straight into it." },
    { place:"hippos", t:"4. The city on the hill above the shore", ref:"Matthew 5:14",
      note:"Hippos stood 1,850 ft above the water, two miles from where the pigs drowned — visible from Capernaum, Magdala, and every hillside Jesus taught on. Its lamps hung in the dark above the lake at night." },
    { place:"gadara", t:"5. Gadara — the Greco-Roman mind", ref:"Matthew 8:28",
      note:"Home of Menippus the satirist and Philodemus the Epicurean, whose school taught that the gods were indifferent to human suffering. The healed man's testimony went out into these streets." },
    { place:"abila", t:"6. 'He began to publish in Decapolis'", ref:"Mark 5:20; 7:31–37",
      note:"The first commissioned missionary is a formerly demonised Gentile with no training, told to tell everyone — where Jewish recipients of miracles are told to keep quiet. When Jesus returns, crowds are waiting." },
    { place:"gerasa", t:"7. Feeding four thousand on Gentile ground", ref:"Mark 8:1–10",
      note:"Seven loaves, seven baskets left over — seven for the nations, where the Jewish feeding left twelve for the tribes. Mark tells the same miracle twice on purpose." },
    { place:"pella", t:"8. Coda: the Decapolis returns the favour", ref:"Matthew 24:15–16",
      note:"Forty years later, warned of the coming siege, the Jerusalem church withdrew across the Jordan to Pella. The Gentile region once asked Jesus to leave; it ended up sheltering his church." }
  ]
},
{
  id:"t-acts", name:"Acts 1:8 outward", phase:"Resurrection & After",
  sub:"'Jerusalem, all Judaea, Samaria, and the uttermost part of the earth' — the book of Acts is a map, and it unfolds in that order.",
  steps:[
    { place:"olivet", t:"1. The commission on Olivet", ref:"Acts 1:6–12",
      note:"Not a metaphor but an itinerary: four concentric zones, each harder than the last. Then he leaves from the ridge, and two men in white ask why they are still looking up." },
    { place:"jerusalem", t:"2. Jerusalem — Pentecost", ref:"Acts 2:1–41",
      note:"Wind, fire, and every language of the empire in one borrowed room. Three thousand from the pilgrim crowds; the church is born inside the festival it will reinterpret." },
    { place:"sebaste", t:"3. Samaria — Philip in the schismatics' city", ref:"Acts 8:4–25",
      note:"Step two lands in a city Herod rebuilt to honour Augustus, among a people Jews would not eat with. Persecution scattered the church and the scattering did the evangelism." },
    { place:"joppa", t:"4. Joppa — the sheet let down", ref:"Acts 10:9–23",
      note:"Peter lodges with a tanner, in the port Jonah used to flee a mission to Gentiles, and is told three times to stop refusing what God has cleansed. Luke's readers would not have missed it." },
    { place:"caesarea", t:"5. Caesarea — the door opens", ref:"Acts 10:24–48",
      note:"A centurion of the occupying army, in Rome's engineered harbour capital, receives the Spirit before he is baptised. 'God is no respecter of persons' is said out loud and the argument is over." },
    { place:"damascus", t:"6. Damascus — the persecutor turned", ref:"Acts 9:1–25",
      note:"Six days' hard travel up a trade highway with warrants in hand. The light, the voice, the blindness, and then a basket over the wall — the man who will carry the Gospel to the uttermost part of the earth." }
  ]
},
{
  id:"t-confession", name:"The road to Peter's confession", phase:"Northern Journey",
  sub:"Mark 7–9: the longest journey outside Jewish territory, ending with the question the whole Gospel turns on.",
  steps:[
    { place:"capernaum", t:"1. A quarrel about clean and unclean", ref:"Mark 7:1–23",
      note:"Pharisees from Jerusalem challenge his disciples' unwashed hands. He answers that defilement comes out of a person, not into them — and Mark adds the note that this abolished the food laws. Then he walks north into Gentile country." },
    { place:"tyre", t:"2. Tyre — the argument he loses on purpose", ref:"Mark 7:24–30",
      note:"A Syrophoenician mother takes his 'dogs' metaphor and turns it: even the dogs get crumbs. It is the only debate in the Gospels Jesus concedes, and her daughter is healed at a distance." },
    { place:"sidon", t:"3. Sidon — the furthest point north", ref:"Mark 7:31",
      note:"Fifty miles from Capernaum, in the region of Elijah's Gentile widow — the very example that got him thrown out of Nazareth. Geography as argument." },
    { place:"bethsaida", t:"4. Bethsaida — half-seeing", ref:"Mark 8:22–26",
      note:"The only two-stage healing in the Gospels: 'I see men as trees, walking,' then clear sight. Mark places it immediately before Peter sees half the truth." },
    { place:"caesarea-philippi", t:"5. Caesarea Philippi — 'Thou art the Christ'", ref:"Matthew 16:13–20",
      note:"He asks the question in front of a cave the locals called the gates of Hades, beneath a temple to Augustus, at the spring where the Jordan begins. The Church's foundation is confessed at the edge of the Land." },
    { place:"caesarea-philippi", t:"6. Then the rebuke", ref:"Matthew 16:21–28",
      note:"Six verses after the right answer, Peter is called Satan for refusing the cross. Confessing the title and understanding it turn out to be different things." },
    { place:"hermon", t:"7. Six days later — the high mountain", ref:"Mark 9:2–8",
      note:"Hermon rises 9,232 ft immediately above Caesarea Philippi and fits Mark's 'six days after' in the region he has just named. Face like the sun, Moses and Elijah, and a voice from the cloud: hear him." }
  ]
}
];

/* ——— THE TWELVE (and where they came from) ——— */
const APOSTLES = [
{ n:"Simon Peter", town:"Bethsaida", lat:32.9106, lon:35.6299, ref:"John 1:44; Mark 1:29",
  note:"Born at Bethsaida in Philip's territory; by the time Jesus calls him he keeps a household — with his wife and mother-in-law — at Capernaum in Antipas'. A fisherman working the north shore with his brother Andrew." },
{ n:"Andrew", town:"Bethsaida", lat:32.9106, lon:35.6299, ref:"John 1:35–42",
  note:"First a disciple of John the Baptist at the Jordan, and the one who fetches Peter. A Greek name, from a border town — he is the disciple Greek-speaking pilgrims later approach (John 12:20–22)." },
{ n:"Philip", town:"Bethsaida", lat:32.9106, lon:35.6299, ref:"John 1:43–46",
  note:"Also of Bethsaida, also Greek-named. He is the one who says 'come and see' to Nathanael's contempt for Nazareth." },
{ n:"James son of Zebedee", town:"Capernaum", lat:32.8808, lon:35.5751, ref:"Mark 1:19–20",
  note:"Partner in a fishing business with hired servants — not destitute. Nicknamed with his brother 'sons of thunder'; the first apostle executed, by Agrippa I (Acts 12:2)." },
{ n:"John son of Zebedee", town:"Capernaum", lat:32.8808, lon:35.5751, ref:"Mark 1:19–20",
  note:"The other son of Zebedee. Present at the Transfiguration, Gethsemane and the cross; the fourth Gospel's tradition traces to him." },
{ n:"Matthew (Levi)", town:"Capernaum", lat:32.8808, lon:35.5751, ref:"Matthew 9:9; Mark 2:14",
  note:"Called out of the customs booth on the Capernaum border — a tax farmer for Antipas, collecting on goods moving along the Via Maris. The one disciple whose trade required literacy in Greek." },
{ n:"Nathanael (Bartholomew)", town:"Cana of Galilee", lat:32.7490, lon:35.3392, ref:"John 21:2; John 1:45–49",
  note:"'Can there any good thing come out of Nazareth?' — the sceptic from the next village over, named as being of Cana." },
{ n:"Judas Iscariot", town:"Kerioth, Judea", lat:31.3060, lon:35.0700, ref:"John 6:71",
  note:"'Iscariot' is most likely ish-Kerioth, 'man of Kerioth' — a Judean town south of Hebron. If so he is the only non-Galilean among the Twelve, and the treasurer." },
{ n:"Thomas, James son of Alphaeus, Simon the Zealot, Judas son of James", town:"Galilee (towns unrecorded)", lat:32.7700, lon:35.4200, ref:"Luke 6:14–16; Acts 1:13",
  note:"The Twelve whose home towns the Gospels never give. Simon's epithet (Zelotes / the Cananaean) marks him as a religious hardliner — seated at the same table as a tax collector for Rome's client king." }
];

/* ——— ELEVATION PROFILES ———
   Real spot heights along each route; distances are road miles, not straight-line. */
const PROFILES = [
{ id:"jericho", name:"The ascent from Jericho to Jerusalem",
  sub:"17 road miles and 3,346 ft of climb through bandit country",
  ref:"Luke 10:30–37; Luke 19:28",
  note:"'A certain man went <i>down</i> from Jerusalem to Jericho' is not a figure of speech. The road drops from the Judean watershed to the lowest inhabited place on earth in seventeen miles, through the gorges of the Wadi Qelt where ravines gave cover to robbers and no traveller could see round the next bend. Priests and Levites serving Temple rotations lived in Jericho and walked this road regularly — which is why the parable puts them on it. Jesus made the climb in the other direction on his way to the Passion.",
  pts:[{mi:0,ft:-846,l:"Jericho"},{mi:2,ft:-520,l:""},{mi:4,ft:-120,l:""},{mi:6,ft:420,l:"Wadi Qelt"},
       {mi:8,ft:950,l:""},{mi:10,ft:1450,l:"Ma'ale Adummim"},{mi:12,ft:1950,l:""},
       {mi:14,ft:2340,l:"Bethany"},{mi:15.5,ft:2652,l:"Mount of Olives"},{mi:17,ft:2428,l:"Jerusalem"}] },
{ id:"pilgrim", name:"Capernaum to Jerusalem — a pilgrim's road",
  sub:"About 100 miles: below sea level almost the whole way, then a wall of hills",
  ref:"Luke 2:41–44; Luke 9:51",
  note:"Galilean pilgrims who wished to avoid Samaria dropped into the Jordan rift and stayed in it — four days of walking in heat below sea level, past Scythopolis and the Perean fords — before the final brutal climb from Jericho. 'Going up to Jerusalem' describes only the last day of the journey, but it is the day that gave the whole trip its name.",
  pts:[{mi:0,ft:-686,l:"Capernaum"},{mi:12,ft:-682,l:"Tiberias"},{mi:24,ft:-400,l:"Scythopolis"},
       {mi:44,ft:-620,l:""},{mi:62,ft:-780,l:"Perean fords"},{mi:80,ft:-846,l:"Jericho"},
       {mi:90,ft:1450,l:""},{mi:97,ft:2428,l:"Jerusalem"}] },
{ id:"rift", name:"The rift — Mount Hermon to the Dead Sea",
  sub:"From 9,232 ft of snow to the lowest land on earth, in about 120 miles",
  ref:"Psalm 133:3; Matthew 16:13",
  note:"The whole stage of the Gospels sits in a tectonic trench. Snowmelt from Hermon emerges at Caesarea Philippi as the Jordan's headwaters, falls nearly 1,900 ft to the Sea of Galilee, and drains to a sea with no outlet 1,412 ft below the Mediterranean. Every journey in the Gospels is either along this trench or up out of it.",
  pts:[{mi:0,ft:9232,l:"Mount Hermon"},{mi:12,ft:1150,l:"Caesarea Philippi"},{mi:26,ft:250,l:"Hula basin"},
       {mi:40,ft:-686,l:"Sea of Galilee"},{mi:58,ft:-500,l:"Scythopolis"},{mi:92,ft:-846,l:"Jericho"},
       {mi:105,ft:-1300,l:"Qumran"},{mi:120,ft:-1412,l:"Dead Sea"}] }
];

/* ——— ANCIENT HARBOURS OF THE SEA OF GALILEE ———
   Identified by underwater and shoreline survey when the lake level fell; positions approximate. */
const HARBOURS = [
{ n:"Capernaum", lat:32.8805, lon:35.5745, note:"A long breakwater and a series of curved mooring bays — the largest harbour on the lake, matching a town of fishermen and a customs post." },
{ n:"Tabgha (Seven Springs)", lat:32.8730, lon:35.5490, note:"Warm springs draw fish in winter; the traditional site of the post-resurrection breakfast on the shore." },
{ n:"Tel Kinrot", lat:32.8760, lon:35.5555, note:"The Old Testament Kinneret that gave the lake its Hebrew name; harbour works below the tel." },
{ n:"Gennesaret (Ginosar)", lat:32.8475, lon:35.5228, note:"On the fertile plain; the Galilee Boat — a patched first-century fishing vessel — was found in the mud here in 1986." },
{ n:"Magdala (Taricheae)", lat:32.8265, lon:35.5150, note:"The lake's fish-salting port, exporting across the empire. Mooring stones and a harbour promenade excavated." },
{ n:"Tiberias", lat:32.7900, lon:35.5390, note:"Antipas' capital and its port; Rome fought a naval battle off this shore in AD 67." },
{ n:"Hammat", lat:32.7680, lon:35.5480, note:"Beside the hot springs south of Tiberias, whose bathing rules the rabbis debated." },
{ n:"Sennabris", lat:32.7180, lon:35.5580, note:"At the lake's southern outlet where the Jordan leaves; Vespasian camped here." },
{ n:"Beit Yerah (Philoteria)", lat:32.7130, lon:35.5720, note:"A Hellenistic town at the south-west corner, on the road to Scythopolis." },
{ n:"Tel Samra", lat:32.7420, lon:35.6350, note:"South-east shore, in the territory of Gadara — a Gentile anchorage." },
{ n:"Ha-On", lat:32.7590, lon:35.6470, note:"East shore below the Golan escarpment; small fishing anchorage." },
{ n:"Susita (Hippos' port)", lat:32.7830, lon:35.6480, note:"The lakeside landing serving the Greek city 1,850 ft above — Gentile trade arriving by water." },
{ n:"Kursi (Duernam)", lat:32.8250, lon:35.6520, note:"The one place on the eastern shore where a steep slope runs straight down to the water — the Gerasene landing." },
{ n:"Ein Gofra", lat:32.8560, lon:35.6540, note:"Spring-fed anchorage on the north-east shore, in Philip's territory." },
{ n:"Tel Hadar", lat:32.8880, lon:35.6540, note:"North-east corner; a grassy hinterland proposed as the site of one of the feeding miracles." },
{ n:"Bethsaida / el-Araj", lat:32.8880, lon:35.6300, note:"At the Jordan's inflow — 'house of the fisherman', home of Peter, Andrew and Philip. The shoreline has since silted forward." }
];

/* ——— THE HERODS: who's who ——— */
const HERODS = [
{ gen:"Founder", n:"Herod the Great", dates:"king 37–4 BC", terr:"All Judea, Samaria, Galilee, Perea, Idumea",
  nt:"The Nativity and the massacre of the innocents", ref:"Matthew 2:1–18",
  note:"An Idumean client king, brilliant and murderous: he built the Temple platform, Caesarea's harbour, Masada and Machaerus — and executed a wife and three of his own sons. Died at Jericho in 4 BC; his kingdom was split between three surviving sons." },
{ gen:"Second generation", n:"Herod Archelaus", dates:"ethnarch 4 BC – AD 6", terr:"Judea, Samaria, Idumea",
  nt:"The reason the holy family settled in Galilee instead of Judea", ref:"Matthew 2:22",
  note:"So brutal that a joint Jewish and Samaritan delegation got Rome to depose him. Judea then passed to direct rule by prefects — which is why Pontius Pilate, not a Herod, tries Jesus." },
{ gen:"Second generation", n:"Herod Antipas", dates:"tetrarch 4 BC – AD 39", terr:"Galilee and Perea",
  nt:"Imprisoned and beheaded John the Baptist; questioned Jesus at the trial", ref:"Mark 6:14–29; Luke 13:31–32; 23:6–12",
  note:"The 'Herod' of most of the Gospels. Built Sepphoris and Tiberias, divorced the Nabataean princess to marry his brother's wife Herodias — the marriage John denounced. Jesus called him 'that fox' and, before him at the trial, said nothing at all." },
{ gen:"Second generation", n:"Philip the Tetrarch", dates:"tetrarch 4 BC – AD 34", terr:"Iturea, Gaulanitis, Trachonitis",
  nt:"His capital is where Peter confessed the Christ", ref:"Luke 3:1; Matthew 16:13",
  note:"The mildest of the brothers. Refounded Panias as Caesarea Philippi and Bethsaida as Julias. His territory across the Jordan was Jesus' nearest refuge from Antipas' jurisdiction. Not to be confused with Herod Philip I below." },
{ gen:"Second generation", n:"Herod Philip I", dates:"date of death uncertain", terr:"No territory — a private citizen",
  nt:"First husband of Herodias; father of Salome", ref:"Mark 6:17",
  note:"Mark calls Herodias 'his brother Philip's wife'. This Philip is a different son of Herod the Great from Philip the Tetrarch — the commonest confusion in reading the Gospels." },
{ gen:"Second generation", n:"Herodias", dates:"c. 15 BC – after AD 39", terr:"—",
  nt:"Engineered John the Baptist's execution", ref:"Mark 6:17–28",
  note:"Granddaughter of Herod the Great through the executed Aristobulus, so a Herod by blood as well as marriage. Left Herod Philip I for his half-brother Antipas — the union John called unlawful under Leviticus 18:16 — and followed Antipas into exile in Gaul." },
{ gen:"Third generation", n:"Salome", dates:"b. c. AD 14", terr:"Later queen of Chalcis and Armenia Minor",
  nt:"The 'damsel' who danced and asked for John's head", ref:"Mark 6:22–28",
  note:"Unnamed in the Gospels; Josephus supplies the name. She later married her uncle Philip the Tetrarch." },
{ gen:"Third generation", n:"Herod Agrippa I", dates:"king AD 37–44", terr:"Eventually the whole of his grandfather's kingdom",
  nt:"Executed James, imprisoned Peter, died at Caesarea", ref:"Acts 12:1–23",
  note:"Brother of Herodias, raised in Rome, friend of two emperors — the only Herod to reunite the whole realm. Acts and Josephus independently record his sudden death at the games in Caesarea after being hailed as a god." },
{ gen:"Fourth generation", n:"Herod Agrippa II", dates:"ruled c. AD 50–93", terr:"Northern territories; oversight of the Temple",
  nt:"Heard Paul's defence at Caesarea", ref:"Acts 25:13 – 26:32",
  note:"The last of the line. 'Almost thou persuadest me to be a Christian.' He sided with Rome in the revolt of AD 66 and outlived the Temple he was custodian of." },
{ gen:"Fourth generation", n:"Bernice and Drusilla", dates:"1st century AD", terr:"—",
  nt:"Bernice sat with Agrippa II at Paul's hearing; Drusilla was married to the prefect Felix", ref:"Acts 25:13; 24:24",
  note:"Agrippa II's sisters. Drusilla's marriage to Antonius Felix put a Herodian princess beside the governor who kept Paul in prison at Caesarea for two years." }
];

window.NTATLAS = { PLACES, EVENTS, JOURNEYS, ROADS, REGIONS, ELEVATIONS, RIFT, JORDAN, WATER,
  RABBINIC, SACRED, JERUSALEM_FEATURES, TOURS, APOSTLES, HARBOURS, HERODS, PROFILES };

