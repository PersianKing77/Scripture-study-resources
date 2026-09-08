/* Gospel-era gazetteer — the places of Matthew, Mark, Luke and John, for CFM weeks 1–26.
   Same shape as data/places-*.js so the same panels, search, print sheets and permalinks work.
   `era: "gospel"` marks them so the map can show or hide the Gospel layer independently of Paul's routes.
   Confidence follows the same grading as the rest of the atlas: secure (excavated and named),
   probable (strong convergence of text, survey and tradition), traditional (Byzantine or later
   commemoration with no independent evidence). Nothing here is presented as more certain than it is. */
window.PAUL_PLACES = window.PAUL_PLACES || {};
window.GOSPEL_SITE_IDS = ["bethlehem", "nazareth", "ainKarem", "egyptFlight", "sepphoris", "capernaum",
  "bethsaida", "chorazin", "cana", "nain", "magdala", "tiberias", "gennesaret", "mountBeatitudes",
  "gadara", "caesareaPhilippi", "mountHermon", "mountTabor", "sychar", "sebaste", "bethabara",
  "judeanWilderness", "qumran", "machaerus", "jericho", "bethany", "mountOlives", "gethsemane",
  "golgotha", "bethesda", "siloam", "emmaus"];

Object.assign(window.PAUL_PLACES, {

bethlehem: {
  name: "Bethlehem", modern: "Bethlehem, West Bank", region: "Judea", lat: 31.7054, lng: 35.2024,
  tier: "major", era: "gospel", dates: "The Nativity, c. 6–4 BC",
  narrative: "A village of a few hundred people six miles south of Jerusalem, remembered as the town of David and named by Micah as the place from which a ruler would come. Matthew brings the magi here and has Herod's massacre fall on 'all the coasts thereof' — a village that size means a handful of children, not the thousands of later legend. Luke brings Joseph here for a census and records that there was no room in the inn.",
  greco: "Bethlehem lay on the ridge road to Hebron in the fertile eastern edge of the Judean hills — grain and shepherding country, hence Ruth's fields and the shepherds of Luke 2. Under Herod the Great the district was dominated by the Herodium, his artificial mountain-palace and tomb, three miles away and visible from the village: the king who ordered the massacre and the child born under his shadow are in sight of one another.",
  archaeology: "The Church of the Nativity, built by Constantine c. 330 and rebuilt by Justinian, stands over a limestone cave venerated as the birthplace — the commemoration is attested by Justin Martyr c. AD 155 and Origen c. 248, within living memory of the site's continuous local use. Roman-era domestic caves used as byres are common in the village; the practice matches the manger. Bethlehem's Iron Age occupation is confirmed, and a bulla reading 'Bethlehem' from the seventh century BC was found in Jerusalem in 2012.",
  people: ["Mary", "Joseph", "the shepherds", "the magi", "Herod the Great"],
  epistles: [],
  scripture: [
    { ref: "Micah 5:2", text: "But you, Bethlehem Ephrathah, being small among the clans of Judah, out of you one will come forth to me that is to be ruler in Israel; whose goings forth are from of old, from everlasting." },
    { ref: "Luke 2:7", text: "She brought forth her firstborn son, and she wrapped him in bands of cloth, and laid him in a feeding trough, because there was no room for them in the inn." },
    { ref: "Matthew 2:1", text: "Now when Jesus was born in Bethlehem of Judea in the days of King Herod, behold, wise men from the east came to Jerusalem, saying," }
  ]
},

nazareth: {
  name: "Nazareth", modern: "Nazareth, Israel", region: "Galilee", lat: 32.7019, lng: 35.2975,
  tier: "major", era: "gospel", dates: "Childhood and c. 30 years of private life; rejected here c. AD 28",
  narrative: "The village where Jesus grew up and where he was refused. Luke's account of the sabbath reading in the synagogue — the scroll of Isaiah, the sentence broken off before the day of vengeance, and the crowd's turn from wonder to fury — is the programmatic scene of his ministry. Nathanael's question, whether any good thing can come out of Nazareth, records how the place was regarded.",
  greco: "Nazareth was a small agricultural settlement of perhaps 200–400 people, with no mention in the Old Testament, Josephus or the Talmud's earlier strata. It sat four miles from Sepphoris, the Hellenized administrative capital Herod Antipas was rebuilding through Jesus' youth — meaning a craftsman from Nazareth had paid work within an hour's walk, and a Greek-speaking city on his horizon.",
  archaeology: "Excavations have found first-century domestic structures, rock-cut tombs (which by Jewish law lay outside the settlement, fixing its small extent), silos, cisterns, wine and olive presses, and a courtyard house of the period beneath the Sisters of Nazareth convent. The village's poverty and modest scale in the Roman period are archaeologically clear. The Church of the Annunciation covers a cave-house complex venerated from at least the Byzantine era; a graffito reading 'XE MAPIA' (Hail Mary) was found in its earlier layers.",
  people: ["Mary", "Joseph", "the synagogue congregation", "Jesus' brothers and sisters (Mark 6:3)"],
  epistles: [],
  scripture: [
    { ref: "Luke 4:16", text: "He came to Nazareth, where he had been brought up. He entered, as was his custom, into the synagogue on the Sabbath day, and stood up to read." },
    { ref: "Luke 4:24", text: "He said, “Most certainly I tell you, no prophet is acceptable in his hometown." },
    { ref: "John 1:46", text: "Nathanael said to him, “Can any good thing come out of Nazareth?” Philip said to him, “Come and see.”" }
  ]
},

ainKarem: {
  name: "The hill country of Judea (Ain Karem)", modern: "Ein Kerem, Jerusalem", region: "Judea",
  lat: 31.7658, lng: 35.1622, tier: "stop", era: "gospel", dates: "c. 6–5 BC",
  narrative: "Luke sends Mary 'into the hill country with haste, into a city of Juda' to Elisabeth — the visitation, the leaping of the child, and the Magnificat. Luke names no village; the tradition identifying it with Ain Karem, five miles west of Jerusalem, is Byzantine.",
  greco: "The Judean hill country west of Jerusalem was priestly territory: villages of the priestly courses who served the temple in rotation, which is exactly what Luke says of Zacharias, 'of the course of Abia'. A journey from Nazareth would have taken Mary four or five days.",
  archaeology: "Ain Karem has Second Temple-period remains — a mikveh, tombs, terracing and a spring in continuous use — but nothing that names it as Elisabeth's village. The Church of the Visitation and the Church of St John the Baptist are Crusader rebuildings of Byzantine foundations.",
  people: ["Elisabeth", "Zacharias", "Mary", "John the Baptist"],
  epistles: [],
  scripture: [
    { ref: "Luke 1:39–40", text: "Mary arose in those days and went into the hill country with haste, into a city of Judah, and entered into the house of Zacharias and greeted Elizabeth." },
    { ref: "Luke 1:46–47", text: "Mary said, “My soul magnifies the Lord. My spirit has rejoiced in God my Savior," }
  ]
},

egyptFlight: {
  name: "Egypt (the flight)", modern: "Nile Delta / Old Cairo", region: "Roman Egypt",
  lat: 30.0444, lng: 31.2357, tier: "stop", era: "gospel", dates: "c. 5–4 BC, until Herod's death",
  narrative: "Matthew alone records the flight into Egypt and the return, reading it through Hosea: 'Out of Egypt have I called my son.' No duration or destination is given. The point is typological — the child repeats the nation's journey — but the historical setting is unremarkable: Egypt was the obvious refuge, outside Herod's jurisdiction and full of Jews.",
  greco: "Alexandria held the largest Jewish community outside Judea, perhaps a fifth of the city, with its own Greek scriptures and its own philosopher, Philo, writing at exactly this period. The road from Gaza across northern Sinai to Pelusium was a well-travelled caravan route of about ten days.",
  archaeology: "No archaeology attaches to the flight itself. Coptic tradition maps a detailed itinerary — Old Cairo's Abu Serga church, Maadi, Wadi el-Natrun, Asyut — but these are commemorative sites, all later than the fourth century.",
  people: ["Joseph", "Mary", "the child"],
  epistles: [],
  scripture: [
    { ref: "Matthew 2:13", text: "Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream, saying, “Arise and take the young child and his mother, and flee into Egypt, and stay there until I tell you, for Herod will seek the young child to destroy him.”" },
    { ref: "Matthew 2:15", text: "and was there until the death of Herod; that it might be fulfilled which was spoken by the Lord through the prophet, saying, “Out of Egypt I called my son.”" }
  ]
},

sepphoris: {
  name: "Sepphoris", modern: "Tzippori, Israel", region: "Galilee", lat: 32.7522, lng: 35.2792,
  tier: "stop", era: "gospel", dates: "Rebuilt c. 4 BC – AD 20, through Jesus' youth",
  narrative: "Never named in the Gospels — and that silence is itself worth teaching. Sepphoris was the largest city in Galilee and lay an hour's walk from Nazareth, being rebuilt as Antipas' capital during Jesus' working life. A craftsman would have known it. Jesus' ministry nonetheless runs through villages and fishing towns, not the city.",
  greco: "Josephus calls Sepphoris 'the ornament of all Galilee'. Burned by Varus in 4 BC after a revolt and its people enslaved, it was rebuilt by Herod Antipas as a walled Greek-style capital with a theatre, colonnaded streets and a grid plan, before he moved his seat to Tiberias in AD 19. It stayed loyal to Rome in the revolt of AD 66 and was spared.",
  archaeology: "Extensively excavated: a 4,000-seat theatre, paved cardo with chariot ruts, an elaborate Roman villa with the mosaic known as the 'Mona Lisa of the Galilee', dozens of mikva'ot indicating an observant Jewish population, and a later synagogue mosaic. The mikva'ot matter — the city was Hellenized in form but Jewish in practice.",
  people: ["Herod Antipas", "later, the compilers of the Mishnah"],
  epistles: [],
  scripture: [
    { ref: "Mark 6:3", text: "Isn’t this the carpenter, the son of Mary, and brother of James, Joses, Judah, and Simon? Aren’t his sisters here with us?” They were offended at him." }
  ]
},

capernaum: {
  name: "Capernaum", modern: "Kfar Nahum, Israel", region: "Galilee", lat: 32.8808, lng: 35.575,
  tier: "major", era: "gospel", dates: "Base of the Galilean ministry, c. AD 28–30",
  narrative: "Matthew calls it 'his own city'. Jesus moved here from Nazareth and worked from it: the synagogue teaching and the man with the unclean spirit, Peter's mother-in-law, the paralytic let down through the roof, the centurion's servant, the call of Matthew at the customs post. It is also the town he condemns most sharply, because it saw the most and changed the least.",
  greco: "A fishing and farming village of perhaps 1,000–1,500 on the northwest shore, on the road between Herod Antipas' Galilee and Philip's territory across the Jordan — hence the customs post and the presence of a garrison officer. Basalt houses, no public buildings of consequence, no city wall.",
  archaeology: "One of the best-excavated villages in the Gospels. The white limestone synagogue is fourth or fifth century, but it stands on black basalt foundations of a first-century synagogue — the building Luke says a centurion paid for. Under the octagonal Byzantine church lies an insula of basalt houses, one of which was plastered, set apart and covered with Christian graffiti in Greek, Aramaic and Latin by the mid-first century onward: the strongest archaeological case anywhere for a house venerated as Peter's from the earliest period.",
  people: ["Peter and Andrew", "James and John", "Matthew the publican", "Jairus", "the centurion"],
  epistles: [],
  scripture: [
    { ref: "Matthew 4:13", text: "Leaving Nazareth, he came and lived in Capernaum, which is by the sea, in the region of Zebulun and Naphtali," },
    { ref: "Mark 2:1", text: "When he entered again into Capernaum after some days, it was heard that he was in the house." },
    { ref: "Matthew 11:23", text: "You, Capernaum, who are exalted to heaven, you will go down to Hades. For if the mighty works had been done in Sodom which were done in you, it would have remained until this day." }
  ]
},

bethsaida: {
  name: "Bethsaida", modern: "et-Tell / el-Araj, Israel", region: "Gaulanitis (Philip's tetrarchy)",
  lat: 32.9106, lng: 35.6306, tier: "major", era: "gospel", dates: "c. AD 28–30",
  narrative: "The home town of Philip, Andrew and Peter, and the place where Jesus healed a blind man in two stages — the only healing in the Gospels that comes in stages. Luke sets the feeding of the five thousand in a desert place belonging to Bethsaida. Like Chorazin and Capernaum it stands under the woe pronounced on towns that saw everything and did nothing.",
  greco: "Philip the tetrarch raised the village to the status of a city and renamed it Julias, after the emperor's daughter or his wife Livia-Julia; Josephus says Philip was buried there. It lay just east of the Jordan's inflow, outside Antipas' Galilee — which is why Jesus crosses to it when he wants to leave Antipas' jurisdiction.",
  archaeology: "The identification is genuinely contested. Et-Tell, excavated since 1987, has an Iron Age gate and Roman-period remains but sits well back from the modern shoreline. El-Araj, closer to the lake and excavated since 2016, has produced a first-century settlement, a Roman bathhouse, and a Byzantine basilica its excavators call the Church of the Apostles — the church the Bavarian bishop Willibald says he visited in 725, built over the house of Peter and Andrew. A Greek inscription found there in 2022 naming the 'chief of the apostles' shows at least that Byzantine Christians located Peter's house at this site rather than at Capernaum. Sedimentation has moved the shoreline since antiquity, which is what makes the question hard.",
  people: ["Philip", "Andrew", "Peter", "the blind man of Mark 8"],
  epistles: [],
  scripture: [
    { ref: "John 1:44", text: "Now Philip was from Bethsaida, of the city of Andrew and Peter." },
    { ref: "Mark 8:23", text: "He took hold of the blind man by the hand, and brought him out of the village. When he had spit on his eyes, and laid his hands on him, he asked him if he saw anything." },
    { ref: "Luke 9:10", text: "The apostles, when they had returned, told him what things they had done. He took them, and withdrew apart to a deserted place of a city called Bethsaida." }
  ]
},

chorazin: {
  name: "Chorazin", modern: "Korazim, Israel", region: "Galilee", lat: 32.9107, lng: 35.5647,
  tier: "stop", era: "gospel", dates: "c. AD 28–30",
  narrative: "Named only in the woe: 'Woe unto thee, Chorazin! woe unto thee, Bethsaida!' No miracle done there is recorded, which means the Gospels preserve only a fraction of what happened — Chorazin is evidence of the silence in the record, not of inactivity.",
  greco: "A basalt village on the hills two miles north of Capernaum, high enough to be cold in winter and known in rabbinic sources for its wheat. It survived into the Byzantine period and was a ruin by the time Eusebius wrote.",
  archaeology: "Well preserved and easily read: a black basalt synagogue of the fourth to fifth century with carved lintels, a Medusa head, a wine press and a stone 'seat of Moses' inscribed in Aramaic honouring a donor — the seat Jesus refers to in Matthew 23:2. Houses, streets, ritual baths and olive presses of the village are exposed around it.",
  people: [],
  epistles: [],
  scripture: [
    { ref: "Matthew 11:21", text: "“Woe to you, Chorazin! Woe to you, Bethsaida! For if the mighty works had been done in Tyre and Sidon which were done in you, they would have repented long ago in sackcloth and ashes." },
    { ref: "Matthew 23:2", text: "saying, “The scribes and the Pharisees sat on Moses’ seat." }
  ]
},

cana: {
  name: "Cana of Galilee", modern: "Khirbet Qana (or Kafr Kanna), Israel", region: "Galilee",
  lat: 32.8194, lng: 35.3006, tier: "stop", era: "gospel", dates: "c. AD 27–28",
  narrative: "The water made wine — John's first sign — and the healing of the nobleman's son at a distance. Cana is also Nathanael's home town. John's framing matters: the sign is done with the stone jars set apart for purification, and the steward tastes the good wine kept until last.",
  greco: "A Galilean village within a day's walk of Nazareth. Jewish weddings ran for days and the wine was the host's obligation; running out was a public humiliation, which is what the mother of Jesus is reacting to.",
  archaeology: "Two candidates. Khirbet Qana, nine miles north of Nazareth, is an abandoned mound with first-century houses, a Jewish village plan, and a cave complex with evidence of Byzantine and Crusader veneration — it best fits Josephus' references and the pilgrim itineraries. Kafr Kanna, the modern pilgrimage town, is closer to Nazareth and has Byzantine church remains but is a later identification. Stone vessels of the kind John describes have been found across Galilee, including at both sites.",
  people: ["Mary", "Nathanael", "the nobleman of Capernaum"],
  epistles: [],
  scripture: [
    { ref: "John 2:1", text: "The third day, there was a marriage in Cana of Galilee. Jesus’ mother was there." },
    { ref: "John 2:11", text: "This beginning of his signs Jesus did in Cana of Galilee, and revealed his glory; and his disciples believed in him." },
    { ref: "John 4:46", text: "Jesus came therefore again to Cana of Galilee, where he made the water into wine. There was a certain nobleman whose son was sick at Capernaum." }
  ]
},

nain: {
  name: "Nain", modern: "Nein, Israel", region: "Galilee", lat: 32.6314, lng: 35.3444,
  tier: "stop", era: "gospel", dates: "c. AD 28–29",
  narrative: "Luke alone records it: Jesus meets a funeral coming out of the gate, a widow burying her only son, and raises him without being asked. The detail that she was a widow is the point — she had lost her last means of support as well as her child.",
  greco: "A village on the northern slope of the Hill of Moreh, looking across the Jezreel Valley to Mount Tabor and, in the other direction, toward Shunem — where Elisha raised another widow's son. Luke's readers were meant to hear the echo.",
  archaeology: "Rock-cut tombs of the Roman period lie on the hillside east of the modern village, consistent with a burial procession leaving the settlement. Little else is excavated; the village has been continuously occupied and is small.",
  people: ["the widow of Nain", "her son"],
  epistles: [],
  scripture: [
    { ref: "Luke 7:12", text: "Now when he drew near to the gate of the city, behold, one who was dead was carried out, the only son of his mother, and she was a widow. Many people of the city were with her." },
    { ref: "Luke 7:14", text: "He came near and touched the coffin, and the bearers stood still. He said, “Young man, I tell you, arise!”" }
  ]
},

magdala: {
  name: "Magdala", modern: "Migdal, Israel", region: "Galilee", lat: 32.8247, lng: 35.515,
  tier: "stop", era: "gospel", dates: "First century; the home town of Mary Magdalene",
  narrative: "Named in the Gospels only as the origin of Mary Magdalene (and in some manuscripts of Matthew 15:39 as a landing place). Its importance is contextual: this was the fishing and salting town that supplied the lake's industry, and one of its women became the first witness of the resurrection.",
  greco: "Greek sources call it Taricheae, 'the place of salted fish' — the lake's processing centre, exporting preserved fish across the empire. Josephus commanded here in the revolt and describes a fleet of boats and a population large enough to fill a hippodrome; the Roman capture in AD 67 was a massacre.",
  archaeology: "Excavated from 2009 with unusual results: a first-century synagogue — one of only a handful known from before AD 70 — with a carved stone block showing a seven-branched menorah, evidently made by someone who had seen the temple. Also a harbour with mooring stones, a marketplace, mikva'ot fed by groundwater, and the fish-processing pools that gave the town its Greek name.",
  people: ["Mary Magdalene"],
  epistles: [],
  scripture: [
    { ref: "Luke 8:2", text: "and certain women who had been healed of evil spirits and infirmities: Mary who was called Magdalene, from whom seven demons had gone out;" },
    { ref: "John 20:18", text: "Mary Magdalene came and told the disciples that she had seen the Lord, and that he had said these things to her." }
  ]
},

tiberias: {
  name: "Tiberias", modern: "Tiberias, Israel", region: "Galilee", lat: 32.7959, lng: 35.53,
  tier: "stop", era: "gospel", dates: "Founded c. AD 20; never entered in the Gospels",
  narrative: "John mentions boats coming from Tiberias and calls the lake 'the sea of Tiberias', but no Gospel records Jesus entering the city. Like Sepphoris, it is a capital he seems to have avoided — and it was Antipas' seat, the man who killed John the Baptist and whom Jesus called 'that fox'.",
  greco: "Herod Antipas founded Tiberias c. AD 20 and named it for the emperor. It was built partly over a cemetery, which made it ritually unclean and forced Antipas to settle it with the poor and with foreigners — a fact reported by Josephus and one reason observant Galileans stayed away. It had a stadium, a palace decorated with animal figures, and hot springs.",
  archaeology: "The Roman gate, a theatre seating several thousand, a basilica, colonnaded streets, and the bathhouses at Hammat Tiberias with a later synagogue and zodiac mosaic. The city became the centre of rabbinic Judaism after 135 and the place where the Jerusalem Talmud and the Masoretic vocalization were produced.",
  people: ["Herod Antipas", "Herodias"],
  epistles: [],
  scripture: [
    { ref: "John 6:23", text: "However boats from Tiberias came near to the place where they ate the bread after the Lord had given thanks." },
    { ref: "Luke 13:32", text: "He said to them, “Go and tell that fox, ‘Behold, I cast out demons and perform cures today and tomorrow, and the third day I complete my mission." }
  ]
},

gennesaret: {
  name: "The Sea of Galilee", modern: "Lake Kinneret, Israel", region: "Galilee",
  lat: 32.8333, lng: 35.5833, tier: "major", era: "gospel", dates: "Throughout the Galilean ministry",
  narrative: "The theatre of most of the Galilean ministry: the calling of fishermen, the stilling of the storm, the walking on the water, the teaching from a boat, the miraculous catches, and the breakfast on the shore in John 21. Its own name shifts with the writer — the sea of Galilee, the lake of Gennesaret, the sea of Tiberias.",
  greco: "A freshwater lake thirteen miles by seven, 210 metres below sea level, ringed by hills that funnel cold air down onto warm water — which is why squalls rise without warning, as the Gospels describe. Josephus counted 230 boats on it. The fishing industry supported at least nine towns on its shores and exported salted fish across the empire.",
  archaeology: "The 'Jesus boat' — a first-century fishing vessel 8.2 metres long, found in the lakebed mud near Ginosar in the drought of 1986 and conserved over eleven years — shows exactly the craft the Gospels describe, big enough for a crew of five and a dozen passengers. Harbours, breakwaters and mooring stones have been surveyed all round the lake, and the ancient shoreline sits below the modern one.",
  people: ["Peter", "Andrew", "James", "John", "Zebedee"],
  epistles: [],
  scripture: [
    { ref: "Mark 4:39", text: "He awoke, and rebuked the wind, and said to the sea, “Peace! Be still!” The wind ceased, and there was a great calm." },
    { ref: "Luke 5:4", text: "When he had finished speaking, he said to Simon, “Put out into the deep, and let down your nets for a catch.”" },
    { ref: "John 21:4", text: "But when day had already come, Jesus stood on the beach, yet the disciples didn’t know that it was Jesus." }
  ]
},

mountBeatitudes: {
  name: "The Mount of Beatitudes", modern: "Mount of Beatitudes, above Tabgha", region: "Galilee",
  lat: 32.8806, lng: 35.5556, tier: "stop", era: "gospel", dates: "c. AD 28",
  narrative: "Matthew says only that he went up into a mountain and sat down; Luke sets the parallel sermon on a plain. No Gospel names a hill. The traditional site above Tabgha is chosen for plausibility — a natural amphitheatre of slope above the lake, close to Capernaum, with acoustics that genuinely carry a voice.",
  greco: "Teaching seated, with disciples gathered and a crowd beyond, was the ordinary posture of a Jewish teacher, not an oratorical performance. The setting is a hillside because that is where crowds could be arranged, not because the place was holy.",
  archaeology: "Nothing first-century is claimed. A small Byzantine chapel was built lower down the slope in the fourth century; the present church dates from 1938. Pilgrims from Egeria onward describe a commemorative site in the area.",
  people: [],
  epistles: [],
  scripture: [
    { ref: "Matthew 5:1–2", text: "Seeing the multitudes, he went up onto the mountain. When he had sat down, his disciples came to him. He opened his mouth and taught them, saying," },
    { ref: "Luke 6:17", text: "He came down with them, and stood on a level place, with a crowd of his disciples, and a great number of the people from all Judea and Jerusalem, and the sea coast of Tyre and Sidon, who came to hear him and to be healed of their diseases;" }
  ]
},

gadara: {
  name: "The country of the Gadarenes", modern: "Umm Qais, Jordan", region: "Decapolis",
  lat: 32.6553, lng: 35.6847, tier: "stop", era: "gospel", dates: "c. AD 28–29",
  narrative: "The crossing to the far shore, the man among the tombs, the legion of spirits, and the herd of swine — and then the request that Jesus leave. The healed man asks to follow and is sent instead to tell it in the Decapolis: the first commission to preach in Gentile territory.",
  greco: "Gadara was a Greek city of the Decapolis, a league of Hellenistic cities east and south of Galilee under direct Roman oversight. Pigs are in the story because this is Gentile country. Gadara produced the poet Meleager and the satirist Menippus, and its territory ran down to the lake.",
  archaeology: "Umm Qais preserves a black basalt theatre, a colonnaded decumanus, an octagonal Byzantine church and tombs cut into the hillside. The textual difficulty is real: manuscripts read Gadarenes, Gerasenes and Gergesenes. Gadara is six miles from the lake and Gerasa thirty-seven, so a steep bank running into water fits neither well; many identify the actual scene with Kursi (Gergesa) on the eastern shore, where a Byzantine monastery marks the tradition and the slope does run steeply to the water.",
  people: ["the man with the legion", "the herdsmen"],
  epistles: [],
  scripture: [
    { ref: "Mark 5:9", text: "He asked him, “What is your name?” He said to him, “My name is Legion, for we are many.”" },
    { ref: "Mark 5:19", text: "He didn’t allow him, but said to him, “Go to your house, to your friends, and tell them what great things the Lord has done for you, and how he had mercy on you.”" }
  ]
},

caesareaPhilippi: {
  name: "Caesarea Philippi", modern: "Banias, Golan Heights", region: "Philip's tetrarchy",
  lat: 33.2486, lng: 35.6944, tier: "major", era: "gospel", dates: "c. AD 29",
  narrative: "The northern turning point of the ministry. Here Jesus asks who men say that he is, Peter answers, and from that moment Jesus begins to teach openly that he must suffer and die. The place is chosen: a pagan sanctuary at the foot of Hermon, as far from Jerusalem as the ministry goes, and the setting for the promise about the gates of hell.",
  greco: "The site was sacred to Pan — Paneas — with a spring issuing from a cave in the cliff face; Herod the Great built a temple of white marble to Augustus beside it, and his son Philip refounded the town as Caesarea, adding his own name to distinguish it from Caesarea on the coast. Niches for statues of Pan and Echo are cut into the rock above the spring.",
  archaeology: "The cave, the cliff niches with their Greek dedicatory inscriptions to Pan, the temple platform, and Roman-period courtyard buildings are all excavated and visible; the spring, once flowing directly from the cave mouth, now emerges lower down after an earthquake. Crusader fortifications overlie the site.",
  people: ["Peter", "the twelve"],
  epistles: [],
  scripture: [
    { ref: "Matthew 16:13", text: "Now when Jesus came into the parts of Caesarea Philippi, he asked his disciples, saying, “Who do men say that I, the Son of Man, am?”" },
    { ref: "Matthew 16:16", text: "Simon Peter answered, “You are the Christ, the Son of the living God.”" },
    { ref: "Mark 8:31", text: "He began to teach them that the Son of Man must suffer many things, and be rejected by the elders, the chief priests, and the scribes, and be killed, and after three days rise again." }
  ]
},

mountHermon: {
  name: "Mount Hermon", modern: "Jabal al-Shaykh, Syria / Lebanon border", region: "Northern frontier",
  lat: 33.4162, lng: 35.857, tier: "stop", era: "gospel", dates: "c. AD 29 — a candidate for the Transfiguration",
  narrative: "Mark says the Transfiguration came six days after Caesarea Philippi, on 'an high mountain apart'. Hermon rises directly above Caesarea Philippi and is the only genuinely high mountain in the region — the strongest geographical candidate, though the Gospels name no peak.",
  greco: "Hermon, 2,814 metres and snow-capped most of the year, marked the northern limit of Israelite territory and was a religious boundary in itself: its slopes carried temples through the Hellenistic and Roman periods. Its melt feeds the springs at Banias and Dan and so the Jordan.",
  archaeology: "Dozens of small Roman-period temples and cult sites have been surveyed on the mountain's flanks, including a substantial complex at Qasr Antar near the summit. No Christian commemoration was ever established there — the Byzantine tradition attached the Transfiguration to Tabor instead.",
  people: ["Peter", "James", "John"],
  epistles: [],
  scripture: [
    { ref: "Mark 9:2", text: "After six days Jesus took with him Peter, James, and John, and brought them up onto a high mountain privately by themselves, and he was changed into another form in front of them." },
    { ref: "Matthew 17:5", text: "While he was still speaking, behold, a bright cloud overshadowed them. Behold, a voice came out of the cloud, saying, “This is my beloved Son, in whom I am well pleased. Listen to him.”" }
  ]
},

mountTabor: {
  name: "Mount Tabor", modern: "Har Tavor, Israel", region: "Galilee (Jezreel Valley)",
  lat: 32.687, lng: 35.3903, tier: "stop", era: "gospel", dates: "Traditional site of the Transfiguration",
  narrative: "The Byzantine and later tradition places the Transfiguration here, and it is the site pilgrims visit. The difficulty is historical rather than devotional: Tabor lies far south of Caesarea Philippi, and in the first century its summit was fortified and occupied — Josephus says he walled it himself in the revolt — which makes a private mountain hard to credit.",
  greco: "A domed limestone hill whose summit stands 588 metres above sea level and some 450 metres above the Jezreel Valley floor, visible from most of lower Galilee. Deborah mustered on it; Hosea names it with Mizpah as a place of snares. Antiochus III took a Hellenistic fort here in 218 BC.",
  archaeology: "Remains of the Hellenistic and Roman fortifications survive on the summit, with Byzantine and Crusader churches and the Franciscan Basilica of the Transfiguration of 1924 above them. Origen is the first to name Tabor as the mountain, in the third century.",
  people: ["Peter", "James", "John", "Moses and Elias in vision"],
  epistles: [],
  scripture: [
    { ref: "Luke 9:29", text: "As he was praying, the appearance of his face was altered, and his clothing became white and dazzling." },
    { ref: "Luke 9:33", text: "It happened, as they were parting from him, that Peter said to Jesus, “Master, it is good for us to be here. Let’s make three tents: one for you, and one for Moses, and one for Elijah,” not knowing what he said." }
  ]
},

sychar: {
  name: "Sychar (Jacob's well)", modern: "Balata, Nablus, West Bank", region: "Samaria",
  lat: 32.2098, lng: 35.2839, tier: "major", era: "gospel", dates: "c. AD 27–28",
  narrative: "The longest recorded conversation Jesus has with anyone, and it is with a Samaritan woman at a well at noon. The exchange runs from water to husbands to the mountain where worship belongs, and ends with the town coming out to him — the first sustained Gentile-adjacent mission in John.",
  greco: "Samaritans and Jews had been formally estranged since the Hasmoneans destroyed the Samaritan temple on Mount Gerizim in 128 BC. The mountain the woman gestures at is Gerizim, directly above the well; the dispute she raises about the right place of worship is a live political grievance, not an abstraction.",
  archaeology: "Jacob's well itself is one of the most securely identified sites in the Gospels: a deep shaft, still yielding water, continuously venerated since at least the fourth century, now inside a Greek Orthodox church at Balata beside the mound of ancient Shechem. The Samaritan temple precinct on Gerizim has been excavated, and a small Samaritan community still keeps Passover on the mountain.",
  people: ["the Samaritan woman", "the disciples", "the townspeople of Sychar"],
  epistles: [],
  scripture: [
    { ref: "John 4:9", text: "The Samaritan woman therefore said to him, “How is it that you, being a Jew, ask for a drink from me, a Samaritan woman?” (For Jews have no dealings with Samaritans.)" },
    { ref: "John 4:14", text: "but whoever drinks of the water that I will give him will never thirst again; but the water that I will give him will become in him a well of water springing up to eternal life.”" },
    { ref: "John 4:23", text: "But the hour comes, and now is, when the true worshippers will worship the Father in spirit and truth, for the Father seeks such to be his worshippers." }
  ]
},

sebaste: {
  name: "Samaria (Sebaste)", modern: "Sebastia, West Bank", region: "Samaria",
  lat: 32.2765, lng: 35.1911, tier: "stop", era: "gospel", dates: "Background to the Samaritan ministry",
  narrative: "The old capital of the northern kingdom, rebuilt by Herod as a Greek city. The Gospels pass through Samaria rather than into this city, but it explains the region: a Hellenized administrative centre planted in Samaritan territory, and a later stage of Philip's preaching in Acts 8.",
  greco: "Herod the Great refounded Samaria as Sebaste — the Greek for Augustus — settling 6,000 veterans there and building a temple to the emperor on the acropolis, a stadium, a forum and a colonnaded street. It was a loyalist Roman enclave.",
  archaeology: "The Augusteum's monumental stairway, the Roman theatre, the stadium, the forum and basilica, and a colonnaded street of some 600 columns are all visible, over Iron Age Israelite palace remains including the famous carved ivories.",
  people: ["Philip the evangelist (Acts 8)", "Simon Magus"],
  epistles: [],
  scripture: [
    { ref: "John 4:4", text: "He needed to pass through Samaria." },
    { ref: "Acts 8:5", text: "Philip went down to the city of Samaria, and proclaimed to them the Christ." }
  ]
},

bethabara: {
  name: "Bethabara beyond Jordan", modern: "Al-Maghtas, Jordan / Qasr al-Yahud", region: "Perea",
  lat: 31.8372, lng: 35.545, tier: "major", era: "gospel", dates: "The baptism, c. AD 26–27",
  narrative: "Where John baptized and where Jesus was baptized; John's Gospel returns Jesus here late in the ministry, when Jerusalem became dangerous. The site is deliberate — the eastern bank of the Jordan opposite Jericho is where Israel crossed into the land under Joshua, and where Elijah was taken up.",
  greco: "The lower Jordan here is a muddy stream in a jungle-like thicket, 400 metres below sea level, not the broad river of European painting. It was the boundary between Judea and Perea, both under different administrations, which is part of why John could preach there and why Antipas eventually had to reach across it to arrest him.",
  archaeology: "Al-Maghtas on the Jordanian bank — a UNESCO site since 2015 — has a fourth- to sixth-century pilgrim complex: churches built on piers over the water, a baptismal pool, hermit caves, and the remains of the church of John the Baptist described by the sixth-century Madaba mosaic map and by pilgrims from Egeria onward. The continuity of commemoration is strong; the river's course has shifted.",
  people: ["John the Baptist", "Andrew", "the deputation from Jerusalem"],
  epistles: [],
  scripture: [
    { ref: "John 1:28", text: "These things were done in Bethany beyond the Jordan, where John was baptizing." },
    { ref: "Matthew 3:16", text: "Jesus, when he was baptized, went up directly from the water: and behold, the heavens were opened to him. He saw the Spirit of God descending as a dove, and coming on him." },
    { ref: "John 1:29", text: "The next day, he saw Jesus coming to him, and said, “Behold, the Lamb of God, who takes away the sin of the world!" }
  ]
},

judeanWilderness: {
  name: "The wilderness of Judea", modern: "Judean Desert, West Bank", region: "Judea",
  lat: 31.7, lng: 35.4, tier: "stop", era: "gospel", dates: "The temptation, c. AD 27",
  narrative: "Where John preached and where Jesus was driven after the baptism for forty days. The Gospels name no location within it; the traditional Mount of Temptation above Jericho is a Byzantine commemoration. What matters geographically is that the wilderness begins within sight of Jerusalem — an hour's walk from the temple puts you in uninhabitable country.",
  greco: "The eastern slope of the Judean hills drops 1,200 metres to the Dead Sea in twenty kilometres, in a rain shadow that produces true desert. It was refuge country for prophets, rebels and hermits throughout the period, and later filled with monasteries for exactly the same reason.",
  archaeology: "Byzantine and later monastic sites — Mar Saba, St George of Koziba in the Wadi Qelt, the Monastery of the Temptation — mark the tradition. No first-century site attaches to the temptation narrative, and none should be expected.",
  people: ["John the Baptist"],
  epistles: [],
  scripture: [
    { ref: "Matthew 3:1", text: "In those days, John the Baptizer came, preaching in the wilderness of Judea, saying," },
    { ref: "Mark 1:12–13", text: "Immediately the Spirit drove him out into the wilderness. He was there in the wilderness forty days tempted by Satan. He was with the wild animals; and the angels were serving him." }
  ]
},

qumran: {
  name: "Qumran", modern: "Qumran, West Bank", region: "Judea (Dead Sea)",
  lat: 31.7411, lng: 35.4587, tier: "stop", era: "gospel", dates: "Occupied c. 100 BC – AD 68",
  narrative: "Not named in the New Testament, and included for context rather than narrative: a Jewish community in the wilderness, practising ritual washing, holding goods in common, reading Isaiah's 'voice crying in the wilderness' as their own charter — living a few miles from where John baptized, at the same time. The parallels are real; direct connection to John or Jesus is unproven.",
  greco: "Most scholars identify the settlement with the Essenes described by Josephus, Philo and Pliny the Elder, who places an Essene community on the western shore of the Dead Sea. Others read the site as a fortified estate. The debate is not settled.",
  archaeology: "The settlement has a scriptorium, dining hall, pottery workshop, an elaborate water system and ten or more mikva'ot, alongside a cemetery of over a thousand graves. Eleven caves nearby produced the Dead Sea Scrolls — some 900 manuscripts including the great Isaiah scroll, a thousand years older than any Hebrew Bible manuscript then known.",
  people: ["the Teacher of Righteousness (in the scrolls)", "the Essenes"],
  epistles: [],
  scripture: [
    { ref: "Isaiah 40:3", text: "The voice of one who calls out, “Prepare the way of Yahweh in the wilderness! Make a level highway in the desert for our God." },
    { ref: "Mark 1:3", text: "The voice of one crying in the wilderness, ‘Make ready the way of the Lord! Make his paths straight!’”" }
  ]
},

machaerus: {
  name: "Machaerus", modern: "Mukawir, Jordan", region: "Perea", lat: 31.5672, lng: 35.6247,
  tier: "stop", era: "gospel", dates: "The imprisonment and death of John the Baptist, c. AD 29",
  narrative: "The Gospels place John's execution at a birthday feast of Herod Antipas without naming the fortress; Josephus names Machaerus explicitly and says Antipas held and killed John there. It is one of the clearest cases where an outside historian supplies the geography the Gospels omit.",
  greco: "A Hasmonean fortress rebuilt by Herod the Great on a hilltop 700 metres above sea level — some 1,100 metres above the Dead Sea shore below it — in Perea near the Nabataean frontier. Antipas' first wife was the daughter of the Nabataean king Aretas IV; his marriage to Herodias — the marriage John denounced — caused a war he lost, which Josephus says the people read as divine judgement for killing John.",
  archaeology: "Excavated since the 1960s, and systematically from 1978: the royal courtyard, a colonnaded peristyle, a bathhouse with mosaic floor and hypocaust, cisterns and the fortifications. Excavators have identified a royal dining space that could fit the Gospel banquet setting, and have proposed a courtyard niche as a throne alcove; those architectural interpretations do not prove that the birthday feast occurred in either exact spot.",
  people: ["John the Baptist", "Herod Antipas", "Herodias", "Salome"],
  epistles: [],
  scripture: [
    { ref: "Mark 6:17", text: "For Herod himself had sent out and arrested John, and bound him in prison for the sake of Herodias, his brother Philip’s wife, for he had married her." },
    { ref: "Matthew 14:10", text: "and he sent and beheaded John in the prison." }
  ]
},

jericho: {
  name: "Jericho", modern: "Tulul Abu al-Alayiq / Jericho, West Bank", region: "Judea",
  lat: 31.8536, lng: 35.4392, tier: "major", era: "gospel", dates: "The final journey to Jerusalem, c. AD 30",
  narrative: "The last stop before the ascent to Jerusalem: blind Bartimaeus at the roadside, Zacchaeus in the sycomore tree, and the parable of the good Samaritan set on the road that climbs from here. Luke's Zacchaeus is a chief publican — the customs post at Jericho controlled the balsam trade and the Perean crossing, which is how he was rich.",
  greco: "New Testament Jericho is not the Old Testament tell but Herod's winter capital a mile south, in the Wadi Qelt: a palace complex with a sunken garden, swimming pools, a hippodrome-theatre and Roman-style bathhouses, watered by aqueducts. Herod the Great died here in 4 BC. The oasis produced balsam and dates, monopoly crops of enormous value.",
  archaeology: "Herod's three winter palaces have been excavated, including the great reception hall with opus reticulatum masonry — Roman construction technique in Judea — bathhouses, pools and the hippodrome at Tell es-Samarat. The road up to Jerusalem, climbing over 1,000 metres in some twenty-seven kilometres through the Wadi Qelt, is the road of the good Samaritan.",
  people: ["Zacchaeus", "Bartimaeus", "Herod the Great (died here)"],
  epistles: [],
  scripture: [
    { ref: "Luke 19:5", text: "When Jesus came to the place, he looked up and saw him, and said to him, “Zacchaeus, hurry and come down, for today I must stay at your house.”" },
    { ref: "Mark 10:46–47", text: "They came to Jericho. As he went out from Jericho, with his disciples and a great multitude, the son of Timaeus, Bartimaeus, a blind beggar, was sitting by the road. When he heard that it was Jesus the Nazarene, he began to cry out, and say, “Jesus, you son of David, have mercy on me!”" },
    { ref: "Luke 10:30", text: "Jesus answered, “A certain man was going down from Jerusalem to Jericho, and he fell among robbers, who both stripped him and beat him, and departed, leaving him half dead." }
  ]
},

bethany: {
  name: "Bethany", modern: "Al-Eizariya, West Bank", region: "Judea", lat: 31.7714, lng: 35.2622,
  tier: "major", era: "gospel", dates: "Frequently in the final year; the raising of Lazarus, c. AD 30",
  narrative: "The house of Martha, Mary and Lazarus, two miles from Jerusalem over the shoulder of Olivet — Jesus' lodging during the last week, when the city itself was unsafe. Here Lazarus is raised, here Mary anoints his feet, and from near here Luke sets the ascension.",
  greco: "A village on the eastern slope, on the Jericho road, outside the sabbath-day limit from the city. Its Aramaic name may mean 'house of the poor' or 'house of the afflicted'; a Second Temple-period charitable institution in the village has been suggested but not demonstrated.",
  archaeology: "Rock-cut tombs of the period, including the one venerated as Lazarus' from the fourth century, with successive churches built over it — Byzantine, Crusader, and the present Franciscan church of 1954. Domestic remains, cisterns, oil and wine presses show a modest working village.",
  people: ["Lazarus", "Martha", "Mary", "Simon the leper"],
  epistles: [],
  scripture: [
    { ref: "John 11:25", text: "Jesus said to her, “I am the resurrection and the life. He who believes in me will still live, even if he dies." },
    { ref: "John 11:43", text: "When he had said this, he cried with a loud voice, “Lazarus, come out!”" },
    { ref: "John 12:3", text: "Mary, therefore, took a pound of ointment of pure nard, very precious, and anointed the feet of Jesus, and wiped his feet with her hair. The house was filled with the fragrance of the ointment." }
  ]
},

mountOlives: {
  name: "The Mount of Olives", modern: "Mount of Olives, Jerusalem", region: "Judea",
  lat: 31.7784, lng: 35.2467, tier: "major", era: "gospel", dates: "The last week, c. AD 30",
  narrative: "The ridge east of the city, across the Kidron: the descent of the triumphal entry, the lament over Jerusalem, the Olivet discourse, the nightly withdrawal during Passion week, and the ascension. It is high enough that the whole temple platform lies open below — which is what makes the prophecy of the stones thrown down a scene as well as a saying.",
  greco: "Olive groves and burial ground; the eastern slope held tombs from the Iron Age onward, and Zechariah's prophecy that the Lord would stand on it made it a preferred place of burial then as now. The road to Jericho and Bethany ran over its southern shoulder.",
  archaeology: "First-century tombs abound, including the elaborate Kidron valley monuments (the so-called tombs of Absalom, Zechariah and the Bene Hezir) at its foot. Dominus Flevit, a Byzantine and later chapel on the western slope, was built over a large Second Temple burial ground with ossuaries. The Church of the Ascension on the summit is a Crusader rebuilding of a fourth-century rotunda.",
  people: ["the twelve", "the Passover crowds"],
  epistles: [],
  scripture: [
    { ref: "Luke 19:41", text: "When he drew near, he saw the city and wept over it," },
    { ref: "Mark 13:3", text: "As he sat on the Mount of Olives opposite the temple, Peter, James, John, and Andrew asked him privately," },
    { ref: "Acts 1:12", text: "Then they returned to Jerusalem from the mountain called Olivet, which is near Jerusalem, a Sabbath day’s journey away." }
  ]
},

gethsemane: {
  name: "Gethsemane", modern: "Church of All Nations, Jerusalem", region: "Judea",
  lat: 31.7794, lng: 35.2397, tier: "major", era: "gospel", dates: "The night of the arrest, c. AD 30",
  narrative: "A garden or enclosed olive plot at the foot of Olivet, across the Kidron, where Jesus prayed while the disciples slept and where Judas brought the guard. Its name is Aramaic for 'oil press'. Luke's detail of sweat as great drops of blood is the closest the Gospels come to describing the interior cost.",
  greco: "Olive presses were cut into the bedrock caves of the slope, and the plots around them were walled — which is why John calls it a garden and why a party could withdraw there privately at night. Being outside the city walls, it lay beyond the crowds and beyond the temple police's routine patrol.",
  archaeology: "A rock-cut cave with press installations survives a short distance north of the Church of All Nations and is a plausible working press of the period. The church itself, built in 1924 over Byzantine and Crusader foundations, encloses a slab of bedrock venerated since the fourth century; ancient olive trees in the enclosure have been radiocarbon dated to the twelfth century, though olives regenerate from their own roots.",
  people: ["Peter", "James", "John", "Judas"],
  epistles: [],
  scripture: [
    { ref: "Matthew 26:36", text: "Then Jesus came with them to a place called Gethsemane, and said to his disciples, “Sit here, while I go there and pray.”" },
    { ref: "Luke 22:44", text: "Being in agony he prayed more earnestly. His sweat became like great drops of blood falling down on the ground." },
    { ref: "Matthew 26:39", text: "He went forward a little, fell on his face, and prayed, saying, “My Father, if it is possible, let this cup pass away from me; nevertheless, not what I desire, but what you desire.”" }
  ]
},

golgotha: {
  name: "Golgotha and the tomb", modern: "Church of the Holy Sepulchre, Jerusalem", region: "Judea",
  lat: 31.7784, lng: 35.2298, tier: "major", era: "gospel", dates: "The crucifixion and resurrection, c. AD 30",
  narrative: "The place of a skull, outside the wall but near the city, beside a garden with a new tomb cut in rock. The Gospels give four details that can be tested against the ground: outside the wall, close to a road, near a garden, and containing a rock-cut tomb never used.",
  greco: "Roman crucifixion was deliberately public and placed on approach roads. Jewish law required burial before nightfall and execution outside the city. The site now inside the Old City was outside the wall of Jesus' day — the third wall that enclosed it was built by Agrippa I in the 40s.",
  archaeology: "The strongest case of any Passion site. The area was a disused limestone quarry with rock-cut tombs of the first century — two survive inside the church — and it lay outside the second wall, whose line has been traced. Hadrian built a temple over the spot c. AD 135, which preserved rather than erased the memory; Constantine's builders removed it in 325–335 and found a tomb beneath. The rival Garden Tomb, proposed in 1883, contains tombs of Iron Age type and is not seriously defended by archaeologists.",
  people: ["Simon of Cyrene", "the centurion", "Joseph of Arimathaea", "Nicodemus", "the women"],
  epistles: [],
  scripture: [
    { ref: "John 19:17", text: "He went out, bearing his cross, to the place called “The Place of a Skull,” which is called in Hebrew, “Golgotha,”" },
    { ref: "John 19:41", text: "Now in the place where he was crucified there was a garden. In the garden was a new tomb in which no man had ever yet been laid." },
    { ref: "Matthew 28:6", text: "He is not here, for he has risen, just like he said. Come, see the place where the Lord was lying." }
  ]
},

bethesda: {
  name: "The pool of Bethesda", modern: "Bethesda pools, St Anne's, Jerusalem", region: "Judea",
  lat: 31.7815, lng: 35.236, tier: "stop", era: "gospel", dates: "c. AD 28–29",
  narrative: "John describes a pool by the sheep market with five porches, where a man had waited thirty-eight years. The five porches were long treated as symbolic invention — until the site was excavated and found to be exactly that: two adjacent pools with colonnades on four sides and a fifth across the dividing partition.",
  greco: "The pools lay just north of the temple, near the Sheep Gate through which sacrificial animals came. In the Roman period the area also held a healing sanctuary associated with Asclepius or Serapis, with small votive baths — which explains the crowd of the sick and the belief in the moving of the water.",
  archaeology: "Excavated beside the Crusader church of St Anne: two large rock-cut reservoirs, porticoes, the dividing wall, and the Roman-period votive installations, along with an offering of a carved foot dedicated for a healing. The correspondence with John's description is one of the clearest topographical confirmations in the Gospels.",
  people: ["the paralysed man of John 5"],
  epistles: [],
  scripture: [
    { ref: "John 5:2", text: "Now in Jerusalem by the sheep gate, there is a pool, which is called in Hebrew, “Bethesda,” having five porches." },
    { ref: "John 5:8", text: "Jesus said to him, “Arise, take up your mat, and walk.”" }
  ]
},

siloam: {
  name: "The pool of Siloam", modern: "City of David, Jerusalem", region: "Judea",
  lat: 31.7702, lng: 35.2354, tier: "stop", era: "gospel", dates: "c. AD 29",
  narrative: "Jesus anoints a blind man's eyes with clay and sends him to wash in Siloam; the man comes back seeing, and the interrogation that follows is the longest cross-examination in the Gospels. The pool was also where water was drawn for the Feast of Tabernacles libation — the feast at which John sets the saying about living water.",
  greco: "Siloam collected the output of the Gihon spring through Hezekiah's eighth-century tunnel, the city's only reliable water. In the Herodian period it was rebuilt as a monumental stepped pool at the southern end of the City of David, reached by a stepped street running up to the temple.",
  archaeology: "The Second Temple pool was found by accident in 2004 during sewer work: broad stone steps, plastered surfaces and paving of the Herodian period, with coins in the plaster dating construction. The stepped pilgrimage street connecting it to the temple mount has since been excavated along much of its length. The small Byzantine pool long shown to pilgrims is a later, smaller replacement.",
  people: ["the man born blind"],
  epistles: [],
  scripture: [
    { ref: "John 9:7", text: "and said to him, “Go, wash in the pool of Siloam” (which means “Sent”). So he went away, washed, and came back seeing." },
    { ref: "John 9:25", text: "He therefore answered, “I don’t know if he is a sinner. One thing I do know: that though I was blind, now I see.”" }
  ]
},

emmaus: {
  name: "Emmaus", modern: "Emmaus Nicopolis / Motza / Abu Ghosh", region: "Judea",
  lat: 31.8394, lng: 34.9894, tier: "stop", era: "gospel", dates: "Resurrection day, c. AD 30",
  narrative: "Two disciples walking home on the afternoon of the resurrection, joined by a stranger who expounds the scriptures to them and is known at last in the breaking of bread. Luke's is the only account, and the place has never been securely fixed — which is oddly fitting for a story about not recognising what is in front of you.",
  greco: "Luke says threescore furlongs — about seven miles — from Jerusalem, though some manuscripts read 160 furlongs, which would fit Emmaus Nicopolis, a real town of the period at the foot of the Judean hills. The variant reading is the crux of the whole identification question.",
  archaeology: "Four candidates are argued: Emmaus Nicopolis (Imwas), with substantial Roman and Byzantine church remains but at the wrong distance for the shorter reading; Qubeibeh, a Crusader identification; Abu Ghosh, with a Roman fort and a spring; and Motza, which Josephus calls Ammaous and which sits at roughly the right distance. None commands consensus.",
  people: ["Cleopas", "an unnamed disciple"],
  epistles: [],
  scripture: [
    { ref: "Luke 24:15–16", text: "It happened, while they talked and questioned together, that Jesus himself came near, and went with them. But their eyes were kept from recognizing him." },
    { ref: "Luke 24:31", text: "Their eyes were opened, and they recognized him, and he vanished out of their sight." },
    { ref: "Luke 24:32", text: "They said one to another, “Weren’t our hearts burning within us, while he spoke to us along the way, and while he opened the Scriptures to us?”" }
  ]
}

});

/* Gazetteer apparatus for the Gospel sites — same fields as data/gazetteer.js */
window.PAUL_GAZ = window.PAUL_GAZ || {};
Object.assign(window.PAUL_GAZ, {

bethlehem: { names: { greek: "Βηθλεέμ", latin: "Bethlehem", other: "Hebrew Beit Lechem, 'house of bread'" },
  confidence: { level: "secure", basis: "Continuously inhabited under the same name; the cave beneath the Church of the Nativity is attested as the traditional birthplace by the mid-second century." },
  coord: "Church of the Nativity.", elev: 775, wiki: "Bethlehem",
  later: "Jerome translated the Vulgate in a cell beside the grotto. The basilica survived the Persian sack of 614 and is the oldest church in continuous use in the Holy Land.",
  sources: [
    { who: "Justin Martyr, Dialogue with Trypho 78", type: "summary", text: "Writing c. AD 155, Justin says Joseph lodged in a cave near the village when Mary gave birth — a local tradition already fixed within a century of the event." },
    { who: "Origen, Against Celsus 1.51", type: "summary", text: "Origen says that in Bethlehem the cave and the manger were shown even to non-Christians, and that the story was well known in the district." }] },

nazareth: { names: { greek: "Ναζαρέτ", latin: "Nazareth", other: "Hebrew Natzrat" },
  confidence: { level: "secure", basis: "Continuous occupation under the same name; first-century houses, tombs and agricultural installations excavated within the village bounds." },
  coord: "Church of the Annunciation.", elev: 347, wiki: "Nazareth",
  later: "A Jewish village into the Byzantine period, then a Christian pilgrimage centre; today an Arab-majority Israeli city of about 78,000.",
  sources: [
    { who: "The Caesarea priestly-courses inscription", type: "summary", text: "A third- or fourth-century synagogue inscription found at Caesarea in 1962 lists Nazareth as the home of one of the twenty-four priestly courses — the earliest non-Christian mention of the place." }] },

ainKarem: { names: { greek: "πόλις Ἰούδα", latin: "civitas Iuda", other: "Arabic Ain Karem, 'spring of the vineyard'" },
  confidence: { level: "traditional", basis: "Luke names no village. The identification with Ain Karem is Byzantine and rests on nothing earlier." },
  coord: "Church of the Visitation.", elev: 675, wiki: "Ein_Karem" },

egyptFlight: { names: { greek: "Αἴγυπτος", latin: "Aegyptus", other: "" },
  confidence: { level: "traditional", basis: "Matthew gives no destination; the Coptic itinerary of holy family sites is fourth century and later." },
  coord: "Old Cairo, for the traditional refuge.", elev: 23, wiki: "Flight_into_Egypt" },

sepphoris: { names: { greek: "Σέπφωρις", latin: "Diocaesarea", other: "Hebrew Tzippori" },
  confidence: { level: "secure", basis: "Named in Josephus and rabbinic sources, excavated continuously since 1931." },
  coord: "Acropolis and theatre.", elev: 289, wiki: "Sepphoris",
  later: "Seat of the Sanhedrin in the second century; Judah ha-Nasi compiled the Mishnah here.",
  sources: [
    { who: "Josephus, Antiquities 18.27", type: "summary", text: "Josephus says Herod Antipas fortified Sepphoris and made it the ornament of all Galilee." }] },

capernaum: { names: { greek: "Καφαρναούμ", latin: "Capharnaum", other: "Hebrew Kfar Nahum, 'village of Nahum'" },
  confidence: { level: "secure", basis: "Identified with Tell Hum since the nineteenth century and confirmed by excavation: a first-century synagogue foundation beneath the later building, and a venerated house under the octagonal church." },
  coord: "Synagogue and the insula of St Peter's house.", elev: -207, wiki: "Capernaum",
  later: "A Jewish and Christian village side by side into the Byzantine period; abandoned after the seventh century.",
  sources: [
    { who: "Egeria, Travels (c. AD 384)", type: "summary", text: "The pilgrim Egeria reports that in Capernaum the house of the prince of the apostles had been made into a church, its original walls still standing." },
    { who: "Josephus, Life 403", type: "summary", text: "Josephus, injured near the lake, was carried to a village he calls Kepharnokon — the same place under a Greek spelling." }] },

bethsaida: { names: { greek: "Βηθσαϊδά", latin: "Bethsaida Julias", other: "Aramaic Beth Tsaida, 'house of the fisher'" },
  confidence: { level: "probable", basis: "The city is securely attested in Josephus, but its location is contested between et-Tell and el-Araj; the shoreline has moved since antiquity." },
  coord: "Et-Tell mound; el-Araj lies 1.5 km south, nearer the lake.", elev: -160, wiki: "Bethsaida",
  sources: [
    { who: "Josephus, Antiquities 18.28", type: "summary", text: "Philip the tetrarch raised the village of Bethsaida on the lake of Gennesaret to the dignity of a city and called it Julias, after the emperor's daughter." }] },

chorazin: { names: { greek: "Χοραζίν", latin: "Chorazin", other: "Hebrew Korazim" },
  confidence: { level: "secure", basis: "Named in the Gospels and in rabbinic sources; the ruin has kept the name and the basalt village is fully exposed." },
  coord: "Synagogue on the basalt terrace.", elev: 230, wiki: "Korazim",
  sources: [
    { who: "Eusebius, Onomasticon", type: "summary", text: "Eusebius, writing in the fourth century, says Chorazin lies two miles from Capernaum and is deserted." }] },

cana: { names: { greek: "Κανᾶ τῆς Γαλιλαίας", latin: "Cana Galilaeae", other: "Arabic Khirbet Qana / Kafr Kanna" },
  confidence: { level: "probable", basis: "Two candidates. Khirbet Qana fits Josephus and the pilgrim distances and has a first-century Jewish village; Kafr Kanna carries the modern devotion." },
  coord: "Khirbet Qana mound.", elev: 190, wiki: "Cana" },

nain: { names: { greek: "Ναΐν", latin: "Naim", other: "Arabic Nein" },
  confidence: { level: "probable", basis: "The name survives at the right place on the Hill of Moreh, with Roman-period tombs outside the village." },
  coord: "Village on the northern slope of Moreh.", elev: 215, wiki: "Nain,_Israel" },

magdala: { names: { greek: "Μαγδαλά / Ταριχέαι", latin: "Magdala, Taricheae", other: "Hebrew Migdal, 'tower'" },
  confidence: { level: "secure", basis: "Excavated first-century town with a pre-70 synagogue, harbour and fish-salting installations at the expected location." },
  coord: "Excavated synagogue and harbour.", elev: -209, wiki: "Magdala",
  sources: [
    { who: "Josephus, Jewish War 3.462–542", type: "summary", text: "Josephus describes the fortification, sea battle and Roman capture of Taricheae in AD 67, with the lake full of boats and bodies." }] },

tiberias: { names: { greek: "Τιβεριάς", latin: "Tiberias", other: "Hebrew Tveria" },
  confidence: { level: "secure", basis: "Continuously inhabited; the Roman gate, theatre and city plan are excavated." },
  coord: "Roman city, south of the modern centre.", elev: -207, wiki: "Tiberias",
  sources: [
    { who: "Josephus, Antiquities 18.36–38", type: "summary", text: "Josephus says Antipas built Tiberias over a burial ground, so that observant Jews would not live there, and had to compel and bribe settlers." }] },

gennesaret: { names: { greek: "ἡ θάλασσα τῆς Γαλιλαίας", latin: "Mare Galilaeae", other: "Hebrew Yam Kinneret" },
  confidence: { level: "secure", basis: "The lake itself; ancient harbours surveyed all round its shore." },
  coord: "Centre of the lake.", elev: -209, wiki: "Sea_of_Galilee",
  sources: [
    { who: "Josephus, Jewish War 3.506–521", type: "summary", text: "Josephus praises the water, the fish and the fertility of the plain of Gennesaret, and counts the boats on the lake." }] },

mountBeatitudes: { names: { greek: "τὸ ὄρος", latin: "mons", other: "" },
  confidence: { level: "traditional", basis: "No Gospel names a hill; the site above Tabgha is a Byzantine and modern commemoration chosen for plausibility." },
  coord: "Slope above Tabgha.", elev: 110, wiki: "Mount_of_Beatitudes" },

gadara: { names: { greek: "Γάδαρα / Γέρασα / Γέργεσα", latin: "Gadara", other: "Arabic Umm Qais" },
  confidence: { level: "probable", basis: "The city of Gadara is secure; which shoreline the swine ran down is not. Manuscripts differ, and Kursi on the eastern shore fits the topography better than Gadara or Gerasa." },
  coord: "Umm Qais acropolis; Kursi lies on the lake shore.", elev: 378, wiki: "Umm_Qais" },

caesareaPhilippi: { names: { greek: "Καισάρεια ἡ Φιλίππου / Πανειάς", latin: "Caesarea Paneas", other: "Arabic Banias" },
  confidence: { level: "secure", basis: "The Pan sanctuary, its inscriptions and the Herodian temple platform are excavated at the named spring." },
  coord: "The cave and spring of Pan.", elev: 350, wiki: "Banias",
  later: "A bishopric from the fourth century; Eusebius reports a bronze statue group there said to commemorate the woman with the issue of blood.",
  sources: [
    { who: "Josephus, Jewish War 1.404–406", type: "summary", text: "Herod built a temple of white marble to Caesar beside the cave at Paneion, from which the Jordan springs." }] },

mountHermon: { names: { greek: "Ἀερμών", latin: "Hermon", other: "Arabic Jabal al-Shaykh, 'mountain of the elder'" },
  confidence: { level: "probable", basis: "For the Transfiguration: geography favours it — six days from Caesarea Philippi, 'an high mountain' — but no Gospel names it and no tradition commemorated it." },
  coord: "Southern shoulder above Banias.", elev: 2814, wiki: "Mount_Hermon" },

mountTabor: { names: { greek: "Ἰταβύριον", latin: "Itabyrium", other: "Hebrew Har Tavor" },
  confidence: { level: "traditional", basis: "Named as the Transfiguration mount by Origen and the Byzantine church, but the summit was fortified and occupied in the first century and lies far from Caesarea Philippi." },
  coord: "Summit basilica.", elev: 588, wiki: "Mount_Tabor",
  sources: [
    { who: "Josephus, Jewish War 4.54–61", type: "summary", text: "Josephus says he fortified the summit of Itabyrion with a wall built in forty days, and describes the Roman action against the force gathered there." }] },

sychar: { names: { greek: "Συχάρ", latin: "Sychar", other: "Arabic Balata; ancient Shechem nearby" },
  confidence: { level: "secure", basis: "Jacob's well is one of the best-attested sites in the Gospels: a single deep shaft, continuously venerated since the fourth century, at the foot of Gerizim beside ancient Shechem." },
  coord: "Jacob's well, Balata.", elev: 530, wiki: "Jacob's_Well",
  sources: [
    { who: "Egeria / the Bordeaux Pilgrim (AD 333)", type: "summary", text: "The earliest Christian pilgrim account already directs travellers to the well at the foot of the mountain where the Samaritans worship." },
    { who: "Josephus, Antiquities 13.254–256", type: "summary", text: "Josephus records John Hyrcanus' destruction of the Samaritan temple on Gerizim, the grievance behind the woman's question about the right mountain." }] },

sebaste: { names: { greek: "Σεβαστή", latin: "Sebaste", other: "Hebrew Shomron" },
  confidence: { level: "secure", basis: "Excavated Herodian city over the Israelite capital, with the Augusteum, stadium and colonnaded street exposed." },
  coord: "Acropolis / Augusteum.", elev: 443, wiki: "Sebastia,_Nablus" },

bethabara: { names: { greek: "Βηθαβαρᾶ / Βηθανία πέραν τοῦ Ἰορδάνου", latin: "Bethabara", other: "Arabic Al-Maghtas" },
  confidence: { level: "probable", basis: "The eastern-bank pilgrim complex at Al-Maghtas is securely excavated and continuously attested from the fourth century; whether it is the exact spot of the baptism cannot be shown." },
  coord: "Al-Maghtas, east bank; Qasr al-Yahud opposite.", elev: -380, wiki: "Al-Maghtas",
  sources: [
    { who: "The Madaba mosaic map (6th century)", type: "summary", text: "The Madaba map marks Bethabara, the place of St John's baptizing, on the east bank opposite Jericho." }] },

judeanWilderness: { names: { greek: "ἡ ἔρημος τῆς Ἰουδαίας", latin: "desertum Iudaeae", other: "" },
  confidence: { level: "secure", basis: "A region, not a point; the wilderness itself is unambiguous. No site within it is identified by any Gospel." },
  coord: "Central Judean desert.", elev: 300, wiki: "Judaean_Desert" },

qumran: { names: { greek: "—", latin: "—", other: "Arabic Khirbet Qumran" },
  confidence: { level: "secure", basis: "The settlement and scroll caves are excavated and dated; the identification of its community with the Essenes is probable rather than certain, and is not a New Testament claim." },
  coord: "Settlement above the marl terrace.", elev: -320, wiki: "Qumran",
  sources: [
    { who: "Pliny the Elder, Natural History 5.73", type: "summary", text: "Pliny places a solitary tribe of Essenes on the west side of the Dead Sea, above Engedi, living without women or money." }] },

machaerus: { names: { greek: "Μαχαιροῦς", latin: "Machaerus", other: "Arabic Mukawir" },
  confidence: { level: "secure", basis: "Josephus names the fortress as the place of John's imprisonment and death; the Herodian citadel is excavated on the site that keeps the name." },
  coord: "Herodian citadel.", elev: 700, wiki: "Machaerus",
  sources: [
    { who: "Josephus, Antiquities 18.116–119", type: "summary", text: "Josephus says Herod sent John, a good man who urged the Jews to virtue and baptism, in chains to Machaerus and had him put to death — and that the defeat of Herod's army was widely thought a judgement for it." }] },

jericho: { names: { greek: "Ἱεριχώ", latin: "Hiericho", other: "Hebrew Yeriho" },
  confidence: { level: "secure", basis: "Herod's winter palace complex at Tulul Abu al-Alayiq is excavated; New Testament Jericho is distinct from the Old Testament tell a mile north." },
  coord: "Herodian palaces, Wadi Qelt.", elev: -258, wiki: "Jericho",
  sources: [
    { who: "Josephus, Antiquities 17.174–179", type: "summary", text: "Josephus describes Herod the Great dying at Jericho and ordering the leading Jews shut in the hippodrome there, to be killed at his death so the country would mourn." },
    { who: "Strabo, Geography 16.2.41", type: "summary", text: "Strabo describes the plain of Jericho as a fertile bowl producing the balsam that made the district rich." }] },

bethany: { names: { greek: "Βηθανία", latin: "Bethania", other: "Arabic Al-Eizariya, 'place of Lazarus'" },
  confidence: { level: "secure", basis: "The modern Arabic name preserves Lazarus; the venerated tomb and successive churches sit in a village with first-century remains at the right distance from Jerusalem." },
  coord: "Tomb of Lazarus.", elev: 610, wiki: "Al-Eizariya" },

mountOlives: { names: { greek: "τὸ ὄρος τῶν Ἐλαιῶν", latin: "Mons Oliveti", other: "Hebrew Har HaZeitim" },
  confidence: { level: "secure", basis: "The ridge is unmistakable and named in both testaments; individual episodes on it are located only approximately." },
  coord: "Summit, above Dominus Flevit.", elev: 826, wiki: "Mount_of_Olives" },

gethsemane: { names: { greek: "Γεθσημανῆ", latin: "Gethsemani", other: "Aramaic Gat Shemanim, 'oil press'" },
  confidence: { level: "probable", basis: "The location at the foot of Olivet across the Kidron is fixed by the Gospels; the exact plot is a fourth-century commemoration, though a rock-cut oil press of the period survives nearby." },
  coord: "Church of All Nations enclosure.", elev: 690, wiki: "Gethsemane" },

golgotha: { names: { greek: "Γολγοθᾶ / Κρανίου Τόπος", latin: "Calvariae Locus", other: "Aramaic Gulgalta, 'skull'" },
  confidence: { level: "probable", basis: "As strong as any Passion site gets: a first-century quarry with rock-cut tombs, outside the wall of the period, venerated before Hadrian built over it and rediscovered beneath his temple in the 320s." },
  coord: "Church of the Holy Sepulchre.", elev: 757, wiki: "Church_of_the_Holy_Sepulchre",
  later: "Burned, sacked and rebuilt repeatedly; shared today by six communities under a status quo agreement of 1757.",
  sources: [
    { who: "Eusebius, Life of Constantine 3.25–28", type: "summary", text: "Eusebius says the tomb had been buried under earth and a pagan shrine, and that when Constantine's men cleared the site the cave came to light against all expectation." }] },

bethesda: { names: { greek: "Βηθεσδά", latin: "Bethsaida / Bethesda", other: "'house of mercy' or 'of the two outpourings'" },
  confidence: { level: "secure", basis: "Excavation found twin pools with porticoes on four sides and a fifth on the partition — precisely the five porches of John 5, once dismissed as symbolic." },
  coord: "Pools beside St Anne's.", elev: 740, wiki: "Pool_of_Bethesda" },

siloam: { names: { greek: "Σιλωάμ", latin: "Siloe", other: "Hebrew Shiloah, 'sent'" },
  confidence: { level: "secure", basis: "The Herodian stepped pool was uncovered in 2004 with datable coins in its plaster, at the outflow of Hezekiah's tunnel." },
  coord: "Second Temple pool, City of David.", elev: 636, wiki: "Pool_of_Siloam" },

emmaus: { names: { greek: "Ἐμμαοῦς", latin: "Emmaus", other: "Arabic Imwas; Hebrew Motza" },
  confidence: { level: "traditional", basis: "Unresolved. The manuscripts differ on the distance, and four candidate sites are defended; none has decisive evidence." },
  coord: "Emmaus Nicopolis, the largest candidate.", elev: 150, wiki: "Emmaus_Nicopolis" }

});
