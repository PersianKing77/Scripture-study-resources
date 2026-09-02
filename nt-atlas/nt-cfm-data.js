/* ——— COME, FOLLOW ME LAYER ———————————————————————————————————————————————
   Three additions, appended onto window.NTATLAS by the loader at the foot of
   this file:
     MED_PLACES   the Mediterranean gazetteer the Acts / Epistles / Revelation
                  weeks need — Asia Minor, Macedonia, Achaia, Italy, the isles.
     CFM_JOURNEYS Paul's three missions, the voyage to Rome, and the circuit of
                  the seven churches.
     CFM_SCHEDULE all 53 Come, Follow Me weeks (0–52), each with the theatre of
                  action to fly to, the sites and routes it covers, the letter's
                  origin and destination where the week is an epistle, class
                  discussion prompts, and a Gospel Library link.
   Same cautions as the base data: routes are drawn through real ports, passes
   and roads, but remain reconstructions, not surveys. ———————————————————— */

const MED_PLACES = [
/* ——— SYRIA & CILICIA ——— */
{
  id:"antioch-syria", name:"Antioch of Syria", greek:"Ἀντιόχεια", modern:"Antakya, Türkiye",
  lat:36.2021, lon:36.1610, cat:"city", region:"Syria (Roman province)",
  blurb:"Third city of the empire, and the church that first sent missionaries out — and first wore the name Christian.",
  scriptures:[
    {ref:"Acts 11:26", text:"And when he had found him, he brought him unto Antioch. And it came to pass, that a whole year they assembled themselves with the church, and taught much people. And the disciples were called Christians first in Antioch."},
    {ref:"Acts 13:2–3", text:"The Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them. And when they had fasted and prayed, and laid their hands on them, they sent them away."}
  ],
  geo:"On the Orontes, twenty miles inland from its port at Seleucia, at the hinge between the Syrian coast road and the caravan routes east. Whoever held Antioch held the traffic between the Mediterranean and Mesopotamia.",
  greco:"Seleucid capital, then Roman provincial capital of Syria, with a population commonly estimated in the hundreds of thousands, a colonnaded main street lit at night, and a legionary command that watched the Parthian frontier.",
  jewish:"A large, long-settled Jewish community with civic privileges, and — after the scattering from Jerusalem — the first congregation where Jews and Gentiles ate at one table (Acts 11:19–21; Galatians 2:11–14).",
  arch:"The ancient city lies largely under modern Antakya and river silt; the mosaics of nearby Daphne, the Roman street grid, and the aqueducts are the main survivals.",
  why:"Every one of Paul's journeys begins and ends here. Antioch is where the church stopped being a Jerusalem sect and became a sending body with a mission budget.",
  questions:[
    "Why does the mission to the Gentiles launch from Antioch rather than Jerusalem — and what does that say about where new work usually begins?",
    "Antioch is where the disciples were first called Christians by outsiders. What in their common life made them nameable?"
  ]
},
{
  id:"tarsus", name:"Tarsus", greek:"Ταρσός", modern:"Tarsus, Türkiye",
  lat:36.9177, lon:34.8947, cat:"city", region:"Cilicia (Roman province)",
  blurb:"Paul's home city — a university town on a navigable river, and the reason he could argue in Greek and claim Rome.",
  scriptures:[
    {ref:"Acts 21:39", text:"But Paul said, I am a man which am a Jew of Tarsus, a city in Cilicia, a citizen of no mean city."},
    {ref:"Acts 22:3", text:"I am verily a man which am a Jew, born in Tarsus, a city in Cilicia, yet brought up in this city at the feet of Gamaliel."}
  ],
  geo:"On the Cydnus, ten miles from the sea but reachable by ship, at the southern mouth of the Cilician Gates — the pass every army and caravan used to cross the Taurus into Asia Minor.",
  greco:"Famous for its schools of rhetoric and Stoic philosophy; Strabo rated its appetite for learning above Athens and Alexandria. A free city with Roman citizenship in some of its families.",
  jewish:"A diaspora community keeping Torah and pilgrimage in a Greek city — the world that produced a Pharisee fluent in two cultures and hostile, at first, to a third.",
  arch:"A Roman road surface, the bath complex, and a stretch of the colonnaded street have been excavated; most of the ancient city remains beneath the modern one.",
  why:"Paul's usefulness is geographical before it is theological: a man of Tarsus already belonged to the synagogue, the lecture hall and the empire at once.",
  questions:[
    "How did the mix of Tarsus — Jewish home, Greek schooling, Roman citizenship — shape the way Paul preached in Acts 17 and wrote in Romans?",
    "Paul spent quiet years in Cilicia between his call and his sending. What is the work of a waiting season?"
  ]
},
/* ——— CYPRUS ——— */
{
  id:"salamis-cyprus", name:"Salamis (Cyprus)", greek:"Σαλαμίς", modern:"near Famagusta, Cyprus",
  lat:35.1830, lon:33.9060, cat:"city", region:"Cyprus (Roman province)",
  blurb:"The eastern port of Cyprus and the first stop of the first mission — where they preached in the synagogues of the Jews.",
  scriptures:[{ref:"Acts 13:5", text:"And when they were at Salamis, they preached the word of God in the synagogues of the Jews: and they had also John to their minister."}],
  geo:"A harbour facing Syria, a single day's sail from Seleucia with a following wind — which is why Cyprus, and not Asia Minor, is the first field.",
  greco:"The island's chief commercial city, rebuilt repeatedly after earthquakes, with a gymnasium, theatre and grand baths.",
  jewish:"A substantial Jewish population; Barnabas was a Cypriot Levite (Acts 4:36), so the first mission goes first to his own people and his own island.",
  arch:"Extensively excavated: the gymnasium colonnade, theatre, baths and basilicas stand on the shore north of Famagusta.",
  why:"The pattern of the whole book is set in one verse — arrive at a port, find the synagogue, preach there first.",
  questions:[
    "The first mission goes to Barnabas' home island. What does it mean to begin where somebody already belongs?",
    "Why might Luke record synagogue-first preaching so consistently, even after Gentile success?"
  ]
},
{
  id:"paphos", name:"Paphos", greek:"Πάφος", modern:"Kato Paphos, Cyprus",
  lat:34.7570, lon:32.4060, cat:"city", region:"Cyprus (Roman province)",
  blurb:"The Roman capital of Cyprus, where a proconsul believed, a sorcerer was blinded, and Saul begins to be called Paul.",
  scriptures:[{ref:"Acts 13:12", text:"Then the deputy, when he saw what was done, believed, being astonished at the doctrine of the Lord."}],
  geo:"The island's south-western harbour, the natural point of departure for the run north-west to the Pamphylian coast.",
  greco:"Seat of the proconsul and of the cult of Aphrodite, whose sanctuary drew pilgrims from across the Aegean — the first named Roman official to believe does so in a shrine city.",
  jewish:"Bar-jesus / Elymas, the magician attached to the governor's household, shows how far some diaspora Jews had gone into the market for court prophecy.",
  arch:"The House of Dionysos mosaics, the odeon, the agora and the sanctuary of Aphrodite at Palaipaphos have all been excavated.",
  why:"From Paphos onward Luke gives him his Roman name and puts him first in the pair. The mission crosses into Gentile administration, and the vocabulary changes with it.",
  questions:[
    "Luke switches from Saul to Paul as the mission turns to Roman audiences. Where does adapting help, and where would it cost too much?",
    "A governor believes and a court magician resists. What does this pairing say about power and the gospel?"
  ]
},
/* ——— SOUTHERN ASIA MINOR: THE GALATIAN HIGHLANDS ——— */
{
  id:"perga", name:"Perga", greek:"Πέργη", modern:"Aksu, near Antalya, Türkiye",
  lat:36.9611, lon:30.8536, cat:"city", region:"Galatia & southern Asia Minor",
  blurb:"The landfall in Asia Minor — and the place where John Mark turned back.",
  scriptures:[{ref:"Acts 13:13", text:"Now when Paul and his company loosed from Paphos, they came to Perga in Pamphylia: and John departing from them returned to Jerusalem."}],
  geo:"Eight miles up the Cestrus from the sea, at the foot of the Taurus. Beyond it the road climbs 3,600 feet through malarial lowland and bandit country to the Anatolian plateau.",
  greco:"A wealthy Pamphylian city with a colonnaded street, monumental gate and a great theatre; centre of the cult of Artemis Pergaia.",
  jewish:"No synagogue is mentioned here — one reason the party may have pushed straight inland to Pisidian Antioch.",
  arch:"Among the best-preserved cities in Türkiye: the Hellenistic gate towers, stadium, baths and the water channel down the main street.",
  why:"The hard climb ahead is the unstated subject of Acts 13:13. The mission's first internal fracture happens at the foot of a mountain range.",
  questions:[
    "Mark leaves at the hardest point of the route. How should a congregation treat someone who withdraws — and how does Acts 15:37–39 with 2 Timothy 4:11 answer that over time?",
    "What does the terrain between Perga and Antioch add to your reading of 2 Corinthians 11:26?"
  ]
},
{
  id:"antioch-pisidia", name:"Antioch of Pisidia", greek:"Ἀντιόχεια τῆς Πισιδίας", modern:"Yalvaç, Türkiye",
  lat:38.3062, lon:31.1900, cat:"city", region:"Galatia & southern Asia Minor",
  blurb:"A Roman colony on the plateau, and the pulpit where Paul preaches his first recorded sermon.",
  scriptures:[
    {ref:"Acts 13:46", text:"Then Paul and Barnabas waxed bold, and said, It was necessary that the word of God should first have been spoken to you: but seeing ye put it from you... lo, we turn to the Gentiles."},
    {ref:"Acts 13:49", text:"And the word of the Lord was published throughout all the region."}
  ],
  geo:"3,600 feet up on the Anatolian plateau, on the Via Sebaste — the military road Augustus drove across Galatia to police the highland tribes.",
  greco:"A colony of Italian veterans with a temple of Augustus cut into the hillside and an inscription of the emperor's own account of his reign. Roman law, Latin names, imperial cult.",
  jewish:"A synagogue with Gentile 'devout' attenders — the exact audience the letter to the Galatians later addresses over circumcision and covenant.",
  arch:"The temple and sanctuary of Augustus, the Tiberia Platea, the nymphaeum and a fragment of the Res Gestae inscription are all on the site above Yalvaç.",
  why:"Here the turn to the Gentiles is stated as policy, not accident, and it happens in a city built to display Roman order.",
  questions:[
    "Paul reasons from Israel's history to Jesus (Acts 13:16–41). How does knowing his audience's scriptures shape his argument?",
    "The gospel is preached in a city whose skyline is an imperial temple. What competing loyalties did new converts have to weigh?"
  ]
},
{
  id:"iconium", name:"Iconium", greek:"Ἰκόνιον", modern:"Konya, Türkiye",
  lat:37.8746, lon:32.4932, cat:"city", region:"Galatia & southern Asia Minor",
  blurb:"A watered plateau city on the trunk road, visited on every journey and left with a plot behind them.",
  scriptures:[{ref:"Acts 14:1", text:"And it came to pass in Iconium, that they went both together into the synagogue of the Jews, and so spake, that a great multitude both of the Jews and also of the Greeks believed."}],
  geo:"An oasis in the dry Lycaonian plain, watered from the Taurus — the natural junction of the roads to Ephesus, Antioch and the Cilician Gates.",
  greco:"A Phrygian-speaking population under Greek civic forms and Roman administration; later a colony under Hadrian.",
  jewish:"A synagogue large enough that the split it caused divided the whole city (Acts 14:4).",
  arch:"Buried under modern Konya; inscriptions and the Roman road alignment are the main evidence.",
  why:"Iconium is where the pattern hardens: preaching, division, threat, withdrawal — and a congregation left standing anyway (Acts 14:21–22).",
  questions:[
    "Paul and Barnabas leave a city and then return to strengthen it. What does that say about the difference between starting and sustaining?",
    "Where do you see 'we must through much tribulation enter into the kingdom' at work in the geography of this journey?"
  ]
},
{
  id:"lystra", name:"Lystra", greek:"Λύστρα", modern:"Hatunsaray, Türkiye",
  lat:37.5800, lon:32.4530, cat:"town", region:"Galatia & southern Asia Minor",
  blurb:"A small colony where a lame man walked, the crowd cried 'the gods are come down', and Paul was stoned — and probably where Timothy grew up.",
  scriptures:[
    {ref:"Acts 14:11", text:"And when the people saw what Paul had done, they lifted up their voices, saying in the speech of Lycaonia, The gods are come down to us in the likeness of men."},
    {ref:"Acts 16:1", text:"Then came he to Derbe and Lystra: and, behold, a certain disciple was there, named Timotheus."}
  ],
  geo:"Eighteen miles south-west of Iconium in the Lycaonian plain, off the main trade road — a modest place with a strong local dialect.",
  greco:"A Roman colony of Augustus, but the crowd shouts in Lycaonian and reaches for Zeus and Hermes: local religion running underneath imperial veneer.",
  jewish:"Timothy's mother was a believing Jewess and his father a Greek (Acts 16:1) — a mixed household of exactly the kind Galatians is written into.",
  arch:"Identified by an inscribed altar found near Hatunsaray; the mound itself is little excavated.",
  why:"Worship and stoning in the same town, within a chapter. Lystra is Luke's clearest picture of how quickly a crowd can turn.",
  questions:[
    "Paul refuses worship at Lystra and is stoned there. How do you keep your footing under both praise and hostility?",
    "Timothy is raised in this small, off-road town. What does the atlas of the New Testament suggest about where leaders come from?"
  ]
},
{
  id:"derbe", name:"Derbe", greek:"Δέρβη", modern:"Kerti Hüyük, Türkiye",
  lat:37.3500, lon:33.2500, cat:"town", region:"Galatia & southern Asia Minor",
  blurb:"The turning point of the first journey — the furthest east they went before walking the whole route back.",
  scriptures:[{ref:"Acts 14:21", text:"And when they had preached the gospel to that city, and had taught many, they returned again to Lystra, and to Iconium, and Antioch."}],
  geo:"On the eastern edge of the Lycaonian plain near the road to the Cilician Gates — from here Antioch of Syria was reachable overland, but they chose to retrace their steps instead.",
  greco:"A frontier town of the Roman province of Galatia, on the boundary with the client kingdom of Commagene-Cappadocia.",
  jewish:"No synagogue is recorded; Gaius of Derbe later travels with Paul (Acts 20:4).",
  arch:"Located by inscriptions at Kerti Hüyük, north-east of Karaman; the mound is unexcavated.",
  why:"They could have gone home the short way. Instead they went back through the cities that had just expelled them, to appoint elders.",
  questions:[
    "Why retrace a dangerous route rather than take the easy road home? What does that decision reveal about their idea of the work?",
    "What is the modern equivalent of 'confirming the souls of the disciples' in a place you have already left?"
  ]
},
/* ——— WESTERN ASIA MINOR ——— */
{
  id:"troas", name:"Troas", greek:"Τρωάς", modern:"Dalyan, near Çanakkale, Türkiye",
  lat:39.8140, lon:26.1590, cat:"city", region:"Asia (Roman province)",
  blurb:"The port where a vision of a man of Macedonia turned the mission west into Europe.",
  scriptures:[
    {ref:"Acts 16:9", text:"And a vision appeared to Paul in the night; There stood a man of Macedonia, and prayed him, saying, Come over into Macedonia, and help us."},
    {ref:"Acts 20:9", text:"And there sat in a window a certain young man named Eutychus, being fallen into a deep sleep."}
  ],
  geo:"On the Aegean opposite Samothrace, the standard crossing point between Asia and Macedonia — two days' sail with the wind, five against it (Acts 16:11; 20:6).",
  greco:"Alexandria Troas, a Roman colony and one of the great harbours of the north Aegean, with a vast bath-gymnasium complex.",
  jewish:"No synagogue is named; the believers meet in an upper room on the first day of the week (Acts 20:7).",
  arch:"The harbour moles, the bath-gymnasium of Herodes Atticus and stretches of the city wall survive in the pine woods above Dalyan.",
  why:"Troas is the hinge of the map. Everything after it — Philippi, Thessalonica, Corinth, Rome — follows from a night's dream at a harbour.",
  questions:[
    "The gospel goes to Europe because of one vision at a port. How do you test a prompting that redirects a whole plan?",
    "Luke's 'we' begins at Troas. What does a companion add to a mission that a leader cannot supply himself?"
  ]
},
{
  id:"ephesus", name:"Ephesus", greek:"Ἔφεσος", modern:"Selçuk, Türkiye",
  lat:37.9410, lon:27.3410, cat:"city", region:"Asia (Roman province)",
  blurb:"The great city of Asia, home of Artemis and of Paul's longest stay — three years, a riot, and a letter that never scolds.",
  scriptures:[
    {ref:"Acts 19:10", text:"And this continued by the space of two years; so that all they which dwelt in Asia heard the word of the Lord Jesus."},
    {ref:"Acts 19:28", text:"And when they heard these sayings, they were full of wrath, and cried out, saying, Great is Diana of the Ephesians."},
    {ref:"Revelation 2:4", text:"Nevertheless I have somewhat against thee, because thou hast left thy first love."}
  ],
  geo:"At the mouth of the Cayster, the terminus of the road from the east and the natural port of the whole Asian hinterland. Its harbour silted steadily; the sea is now three miles away.",
  greco:"Provincial capital in practice, with a temple of Artemis counted among the seven wonders, a theatre seating some 24,000, a library, and a silversmith trade selling shrines to pilgrims.",
  jewish:"A long-established Jewish community with recorded privileges; Paul teaches three months in the synagogue and then two years in the hall of Tyrannus (Acts 19:8–9).",
  arch:"Extensively excavated: the Library of Celsus, the theatre, the terrace houses, the Arcadian street and the single re-erected column of the Artemision.",
  why:"Ephesus is the base from which the whole province is evangelised, the address of a circular letter about the church universal, and the first of the seven churches to be warned.",
  questions:[
    "The riot begins over trade, not theology (Acts 19:24–27). When does the gospel threaten an economy, and how should disciples respond?",
    "Ephesus is praised for endurance and rebuked for lost first love (Revelation 2:2–4). How can both be true of the same congregation?"
  ]
},
{
  id:"miletus", name:"Miletus", greek:"Μίλητος", modern:"Balat, Türkiye",
  lat:37.5300, lon:27.2770, cat:"city", region:"Asia (Roman province)",
  blurb:"Where Paul called the Ephesian elders down to the shore and told them they would not see his face again.",
  scriptures:[{ref:"Acts 20:37–38", text:"And they all wept sore, and fell on Paul's neck, and kissed him, sorrowing most of all for the words which he spake, that they should see his face no more."}],
  geo:"Thirty miles south of Ephesus at the mouth of the Maeander, with four harbours — deliberately chosen so the ship need not enter Ephesus and lose days (Acts 20:16).",
  greco:"The old intellectual capital of Ionia — home of Thales and Anaximander — by now a wealthy but declining port, its harbour filling with river silt.",
  jewish:"A theatre inscription reserving seats for 'the Jews and God-fearers' shows the community there.",
  arch:"The theatre, the Delphinion, the bouleuterion and the harbour monument are visible; the harbour itself is now farmland.",
  why:"Paul's farewell at Miletus is the closest thing in Acts to a pastoral will — and it turns on his hurry to reach Jerusalem by Pentecost.",
  questions:[
    "Paul plans his route around a feast and a farewell. How do you weigh urgency against relationship?",
    "What in Acts 20:17–35 would you want said over a stewardship you were handing on?"
  ]
},
{
  id:"colossae", name:"Colossae", greek:"Κολοσσαί", modern:"near Honaz, Türkiye",
  lat:37.7900, lon:29.2600, cat:"town", region:"Asia (Roman province)",
  blurb:"A declining wool town in the Lycus valley that Paul never visited — and wrote one of his densest letters to.",
  scriptures:[
    {ref:"Colossians 1:16", text:"For by him were all things created, that are in heaven, and that are in earth, visible and invisible... all things were created by him, and for him."},
    {ref:"Colossians 4:16", text:"And when this epistle is read among you, cause that it be read also in the church of the Laodiceans."}
  ],
  geo:"On the Lycus, eleven miles east of Laodicea under the 8,000-foot bulk of Mount Cadmus, on the road from Ephesus to the Euphrates.",
  greco:"Once a great city, by Paul's day the smallest of the three valley towns, known for dark red dyed wool.",
  jewish:"A diaspora community in a valley where Jewish, Phrygian and philosophical religion mixed — the setting for the letter's warnings about angel worship and ascetic rules.",
  arch:"Almost entirely unexcavated: a mound, a theatre depression, and a necropolis.",
  why:"Colossae proves that letters travelled further than apostles did. Epaphras planted it, Paul wrote it, and the note asks that the mail be swapped with Laodicea.",
  questions:[
    "Paul writes with authority to a church he has never seen. What holds a network of congregations together across distance?",
    "Colossians 4:16 asks two congregations to exchange letters. What would circulating your study with a neighbouring group change?"
  ]
},
{
  id:"laodicea", name:"Laodicea", greek:"Λαοδίκεια", modern:"near Denizli, Türkiye",
  lat:37.8360, lon:29.1080, cat:"city", region:"Asia (Roman province)",
  blurb:"Rich, self-sufficient, banking city — piped water arriving lukewarm, and a letter that uses the fact.",
  scriptures:[{ref:"Revelation 3:17", text:"Because thou sayest, I am rich, and increased with goods, and have need of nothing; and knowest not that thou art wretched, and miserable, and poor, and blind, and naked."}],
  geo:"On the crossroads of the Ephesus–Euphrates highway and the north-south road, in a valley between hot springs at Hierapolis and cold streams from the Cadmus range; its own water arrived through a stone aqueduct, warm and mineral-heavy.",
  greco:"A banking centre and producer of black wool and an eye ointment, wealthy enough to rebuild itself after the earthquake of AD 60 without imperial help — Tacitus notes the refusal of aid.",
  jewish:"A significant Jewish population; Cicero records the transfer of temple tax from this district.",
  arch:"Excavation has exposed the stadium, two theatres, a church of the fourth century, and the calcified terracotta water pipes that carried the tepid supply.",
  why:"Every image in Revelation 3:14–22 — gold, white clothing, eye-salve, lukewarm water — is a local product turned into a diagnosis.",
  questions:[
    "The letter to Laodicea uses the city's own wealth as its rebuke. What in your circumstances could be turned into a warning that way?",
    "How does self-sufficiency make discipleship harder than poverty does?"
  ]
},
{
  id:"hierapolis", name:"Hierapolis", greek:"Ἱεράπολις", modern:"Pamukkale, Türkiye",
  lat:37.9250, lon:29.1250, cat:"city", region:"Asia (Roman province)",
  blurb:"The hot-spring spa above the Lycus valley, named with Laodicea and Colossae as one cluster of churches.",
  scriptures:[{ref:"Colossians 4:13", text:"For I bear him record, that he hath a great zeal for you, and for them that are in Laodicea, and them in Hierapolis."}],
  geo:"On a terrace of white travertine formed by mineral springs, in sight of Laodicea across the valley — three towns within a morning's walk of each other.",
  greco:"A healing sanctuary and resort with a Plutonium emitting lethal gas, a great theatre, and one of the largest necropolises in Asia Minor.",
  jewish:"Inscriptions name Jewish guilds of purple-dyers and carpet-weavers in the city's trade associations.",
  arch:"The theatre, the sacred pool, the colonnaded street, the Plutonium and the necropolis are all well preserved above the travertine terraces.",
  why:"One worker, Epaphras, is credited with three congregations in one valley. The map explains how: they are eleven miles apart.",
  questions:[
    "Three churches in one valley, planted by one man. What does that suggest about scale and proximity in building a community?",
    "Why does Paul name the neighbouring congregations in a letter to only one of them?"
  ]
},
{
  id:"smyrna", name:"Smyrna", greek:"Σμύρνα", modern:"İzmir, Türkiye",
  lat:38.4190, lon:27.1390, cat:"city", region:"Asia (Roman province)",
  blurb:"Loyal to Rome, hostile to the church, and the one of the seven cities that receives no rebuke.",
  scriptures:[{ref:"Revelation 2:9", text:"I know thy works, and tribulation, and poverty, (but thou art rich)."}],
  geo:"A deep, sheltered gulf harbour at the end of the Hermus valley road — the best natural port on the Asian coast, and Ephesus' rival for its traffic.",
  greco:"A city that claimed Homer, built a temple to Rome as early as 195 BC, and won the right to an imperial temple under Tiberius; its crowned hilltop street was called the Golden Street.",
  jewish:"The letter's language of 'them which say they are Jews, and are not' points to bitter conflict between synagogue and church here; Polycarp was martyred in the city's stadium about AD 155.",
  arch:"The Roman agora with its basilica and vaulted basement stands in central İzmir; most of the ancient city is built over.",
  why:"Poverty and faithfulness together. Smyrna is the counterweight to Laodicea in the same set of seven letters.",
  questions:[
    "Smyrna is poor and commended; Laodicea is rich and rebuked. How do you read that pairing without romanticising hardship?",
    "What does 'be thou faithful unto death' ask of a congregation, and what does it promise?"
  ]
},
{
  id:"pergamum", name:"Pergamum", greek:"Πέργαμος", modern:"Bergama, Türkiye",
  lat:39.1320, lon:27.1840, cat:"city", region:"Asia (Roman province)",
  blurb:"Acropolis city of the imperial cult, the altar of Zeus and the healing god — 'where Satan's seat is'.",
  scriptures:[{ref:"Revelation 2:13", text:"I know thy works, and where thou dwellest, even where Satan's seat is: and thou holdest fast my name, and hast not denied my faith."}],
  geo:"A steep cone rising a thousand feet above the Caicus plain, fifteen miles inland — a fortress capital rather than a port.",
  greco:"Capital of the Attalid kingdom, willed to Rome in 133 BC; site of the first imperial temple in Asia (29 BC), the great altar of Zeus, a library of 200,000 rolls, and the Asclepieion where patients slept for cures.",
  jewish:"A smaller Jewish presence than Ephesus or Sardis; the pressure in the letter is pagan and civic, not synagogal.",
  arch:"The theatre cut into the hillside, the sanctuary of Trajan, the Asclepieion and the foundations of the Zeus altar (its frieze now in Berlin) are all visible.",
  why:"The city where refusing to say 'Caesar is Lord' had the sharpest civic consequences — and where Antipas died for it.",
  questions:[
    "What does it cost to hold fast a name in a city built around another loyalty?",
    "The same letter praises faithfulness and condemns compromise in doctrine. Where is that line drawn in practice?"
  ]
},
{
  id:"thyatira", name:"Thyatira", greek:"Θυάτειρα", modern:"Akhisar, Türkiye",
  lat:38.9220, lon:27.8360, cat:"town", region:"Asia (Roman province)",
  blurb:"A guild town of dyers and metalworkers — Lydia's home city, and the church warned about accommodation.",
  scriptures:[
    {ref:"Acts 16:14", text:"And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us."},
    {ref:"Revelation 2:19", text:"I know thy works, and charity, and service, and faith, and thy patience, and thy works; and the last to be more than the first."}
  ],
  geo:"On the road between Pergamum and Sardis in the open Lycus valley, with no natural defences — a trading town rather than a fortress.",
  greco:"Famous for purple-red dye from madder root and for its trade guilds, whose meals and patron deities made membership a religious act.",
  jewish:"Lydia is described as one who worshipped God — a Gentile attached to the synagogue, doing business in Philippi when Paul meets her.",
  arch:"Little excavated beneath modern Akhisar; guild inscriptions are the chief source for its working life.",
  why:"The letter's problem is practical: a tradesman who leaves the guild loses his livelihood. Thyatira is where discipleship and employment collide.",
  questions:[
    "Guild membership meant sharing meals in a temple. Where do modern livelihoods make similar demands?",
    "Lydia hears the gospel far from home and opens her house to it. What does mobility do for the spread of faith?"
  ]
},
{
  id:"sardis", name:"Sardis", greek:"Σάρδεις", modern:"Sart, Türkiye",
  lat:38.4880, lon:28.0400, cat:"city", region:"Asia (Roman province)",
  blurb:"The old Lydian capital, twice captured while its guards slept — told to watch, and to remember it has a name only.",
  scriptures:[{ref:"Revelation 3:2", text:"Be watchful, and strengthen the things which remain, that are ready to die."}],
  geo:"On a spur of Mount Tmolus above the Hermus plain, where the gold-bearing Pactolus stream runs down — a citadel thought unassailable, and taken by surprise twice.",
  greco:"Croesus' capital and the western terminus of the Persian royal road; under Rome a wealthy textile city, rebuilt after the earthquake of AD 17 with imperial help.",
  jewish:"One of the largest known diaspora synagogues stood here, built into the bath-gymnasium complex — evidence of a confident, integrated community.",
  arch:"The synagogue with its mosaic floor, the bath-gymnasium façade, the temple of Artemis and the Lydian houses have all been excavated.",
  why:"A city living on reputation, warned about exactly that. The letter's 'thou hast a name that thou livest, and art dead' lands on a place whose glory was two centuries past.",
  questions:[
    "What is the difference between a living congregation and a well-known one?",
    "Sardis fell twice to attackers who climbed while the watch slept. What does spiritual watchfulness look like in ordinary weeks?"
  ]
},
{
  id:"philadelphia-asia", name:"Philadelphia (of Asia)", greek:"Φιλαδέλφεια", modern:"Alaşehir, Türkiye",
  lat:38.3490, lon:28.5200, cat:"town", region:"Asia (Roman province)",
  blurb:"An earthquake-prone frontier town on the road east — promised an open door, and a name that will not be shaken.",
  scriptures:[{ref:"Revelation 3:8", text:"I know thy works: behold, I have set before thee an open door, and no man can shut it: for thou hast a little strength, and hast kept my word, and hast not denied my name."}],
  geo:"In the Cogamis valley on the highway from Sardis to the interior — founded as a gateway city to spread Greek culture eastwards, which is what an 'open door' meant here.",
  greco:"Repeatedly damaged by earthquakes, including the great shock of AD 17; the inhabitants, Strabo says, lived largely outside the walls. The city changed its name to honour emperors more than once.",
  jewish:"A synagogue community in conflict with the church, addressed in the same terms as at Smyrna.",
  arch:"Largely built over by Alaşehir; remains of a Byzantine basilica and stretches of wall survive.",
  why:"The promises answer the city's anxieties one by one: a pillar that stands, a name that does not change, a door that stays open.",
  questions:[
    "'A little strength' is not a rebuke here. How does that reframe a small congregation's work?",
    "What doors has the Lord opened that you have been slow to walk through?"
  ]
},
/* ——— MACEDONIA & ACHAIA ——— */
{
  id:"philippi", name:"Philippi", greek:"Φίλιπποι", modern:"near Krinides, Greece",
  lat:41.0130, lon:24.2870, cat:"city", region:"Macedonia (Roman province)",
  blurb:"A Roman veterans' colony with no synagogue — where the first European convert was a businesswoman and the first church met by a river.",
  scriptures:[
    {ref:"Acts 16:13", text:"And on the sabbath we went out of the city by a river side, where prayer was wont to be made; and we sat down, and spake unto the women which resorted thither."},
    {ref:"Philippians 4:11", text:"I have learned, in whatsoever state I am, therewith to be content."}
  ],
  geo:"On the Via Egnatia at the edge of a drained marsh below Mount Orbelos, ten miles inland from its port at Neapolis — the road that carried Rome's traffic from the Adriatic to Byzantium.",
  greco:"A colony of Italian veterans after the battle of 42 BC, proud of Roman citizenship — which is why Paul's own citizenship becomes the argument in Acts 16:37.",
  jewish:"Too few Jewish men for a synagogue; the 'place of prayer' by the Gangites is where the God-fearing women gather.",
  arch:"The forum, the Via Egnatia paving, the theatre, the basilicas and the traditional prison are excavated on the site.",
  why:"Philippi is the church Paul is fondest of, planted among veterans and traders, and the letter written to it from prison never asks them for anything but joy.",
  questions:[
    "The first European congregation begins with a merchant, a slave girl and a jailer's household. What does that range say about who the gospel is for?",
    "Paul writes 'rejoice' from custody to a colony proud of its status. What is Christian contentment not?"
  ]
},
{
  id:"thessalonica", name:"Thessalonica", greek:"Θεσσαλονίκη", modern:"Thessaloniki, Greece",
  lat:40.6403, lon:22.9350, cat:"city", region:"Macedonia (Roman province)",
  blurb:"Capital and port of Macedonia — three sabbaths of preaching, a riot, and two of the earliest letters in the New Testament.",
  scriptures:[
    {ref:"Acts 17:6", text:"These that have turned the world upside down are come hither also."},
    {ref:"1 Thessalonians 1:8", text:"For from you sounded out the word of the Lord not only in Macedonia and Achaia, but also in every place your faith to God-ward is spread abroad."}
  ],
  geo:"At the head of the Thermaic Gulf where the Via Egnatia meets the sea — the best harbour in Macedonia and the natural distribution point for anything, including news.",
  greco:"A free city with its own assembly, governed by 'politarchs' — a title Luke uses and inscriptions confirm. Home of an imperial cult and a busy commercial waterfront.",
  jewish:"A synagogue where Paul reasoned three sabbaths, with devout Greeks and leading women among those persuaded (Acts 17:2–4).",
  arch:"The Roman forum, the Rotunda and the harbour line lie under the modern city; politarch inscriptions came from the ancient gate.",
  why:"A short stay produced a congregation whose reputation ran ahead of Paul, and whose questions about the dead prompted the earliest surviving Christian writing about the resurrection.",
  questions:[
    "Three weeks of teaching left a church that evangelised a province. What made it so portable?",
    "The Thessalonians worried about believers who had died before the Lord's return. How does 1 Thessalonians 4:13–18 answer grief with doctrine?"
  ]
},
{
  id:"berea", name:"Berea", greek:"Βέροια", modern:"Veria, Greece",
  lat:40.5240, lon:22.2030, cat:"town", region:"Macedonia (Roman province)",
  blurb:"Off the main road and out of the way — where the hearers checked the scriptures daily to see whether it was so.",
  scriptures:[{ref:"Acts 17:11", text:"These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so."}],
  geo:"Sixty road miles south-west of Thessalonica on the eastern slope of Mount Bermion, a day off the Via Egnatia — a deliberate withdrawal from trouble.",
  greco:"A well-watered provincial town, seat of the Macedonian assembly and imperial cult league.",
  jewish:"A synagogue whose members are commended for examining the argument rather than accepting or rejecting it on authority.",
  arch:"Mostly under modern Veria; a Jewish quarter and synagogue of later date survive in the old town.",
  why:"Luke's one explicit compliment to a method of study. The Bereans are praised for daily reading, not for quick agreement.",
  questions:[
    "What would 'searching the scriptures daily, whether those things were so' look like in your own class this week?",
    "How do you hold readiness of mind and careful examination together?"
  ]
},
{
  id:"athens", name:"Athens", greek:"Ἀθῆναι", modern:"Athens, Greece",
  lat:37.9720, lon:23.7260, cat:"city", region:"Achaia (Roman province)",
  blurb:"A university museum of a city, full of altars — where Paul preached from a pagan inscription and a few believed.",
  scriptures:[
    {ref:"Acts 17:23", text:"For as I passed by, and beheld your devotions, I found an altar with this inscription, TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you."},
    {ref:"Acts 17:28", text:"For in him we live, and move, and have our being; as certain also of your own poets have said, For we are his offspring."}
  ],
  geo:"Five miles inland from its port at Piraeus, dominated by the Acropolis, with the Areopagus rock and the Agora below it — the whole argument of Acts 17 happens within half a mile.",
  greco:"Politically spent but intellectually supreme: the schools of the Stoics and Epicureans, a city Pausanias says had more images than all the rest of Greece.",
  jewish:"A synagogue is mentioned (Acts 17:17), but Luke's interest here is the market place and the council of the Areopagus.",
  arch:"The Agora, the Stoa of Attalos, the Areopagus and the Parthenon are all standing or excavated.",
  why:"The one recorded sermon to an audience with no Bible. Paul begins with creation, quotes their poets, and ends where he always ends — resurrection.",
  questions:[
    "Paul starts from an altar and a poem rather than from scripture. When is that the right beginning, and when is it not?",
    "Some mocked, some deferred, some believed (Acts 17:32–34). How should that spread of outcomes shape your expectations?"
  ]
},
{
  id:"corinth", name:"Corinth", greek:"Κόρινθος", modern:"Ancient Corinth, Greece",
  lat:37.9060, lon:22.8790, cat:"city", region:"Achaia (Roman province)",
  blurb:"Two harbours, one isthmus, and eighteen months of teaching — the church that generated more surviving correspondence than any other.",
  scriptures:[
    {ref:"Acts 18:11", text:"And he continued there a year and six months, teaching the word of God among them."},
    {ref:"1 Corinthians 1:10", text:"Now I beseech you, brethren, by the name of our Lord Jesus Christ, that ye all speak the same thing, and that there be no divisions among you."}
  ],
  geo:"Astride the four-mile isthmus, with a port on each sea — Lechaion west to Italy, Cenchreae east to Asia. Cargo was dragged across rather than risk the cape, so everything and everyone passed through.",
  greco:"Destroyed by Rome in 146 BC and refounded as a colony in 44 BC: a new city of freedmen, traders and sailors, capital of Achaia, host of the Isthmian games, and site of the temple of Aphrodite on Acrocorinth.",
  jewish:"A synagogue whose ruler Crispus believed; the proconsul Gallio refused to hear the case against Paul — an inscription at Delphi dates Gallio's term and anchors the whole chronology of Acts.",
  arch:"The temple of Apollo, the bema where Paul stood before Gallio, the Lechaion road, the Erastus pavement inscription and the meat-market inscriptions are all on the site.",
  why:"Corinth's problems are a port city's problems — factions, lawsuits, sexual licence, food from idol temples, class division at the table. The letters answer a place, not an abstraction.",
  questions:[
    "How do the divisions of 1 Corinthians 1 reflect a city where everyone had just arrived from somewhere else?",
    "Paul stays eighteen months rather than moving on. What is gained by staying long enough for problems to surface?"
  ]
},
{
  id:"cenchreae", name:"Cenchreae", greek:"Κεγχρεαί", modern:"Kechries, Greece",
  lat:37.8850, lon:22.9900, cat:"town", region:"Achaia (Roman province)",
  blurb:"Corinth's eastern harbour, with a congregation of its own and a deacon named Phebe who carried Romans west.",
  scriptures:[{ref:"Romans 16:1–2", text:"I commend unto you Phebe our sister, which is a servant of the church which is at Cenchrea: that ye receive her in the Lord... for she hath been a succourer of many, and of myself also."}],
  geo:"Seven miles east of Corinth on the Saronic Gulf, the harbour facing Asia — where Paul sailed for Ephesus and cut his hair for a vow (Acts 18:18).",
  greco:"A working port with moles, warehouses and a sanctuary of Isis, described by Pausanias and pictured in mosaics found in the harbour.",
  jewish:"Part of the Corinthian Jewish and God-fearing network; the church here is named separately from Corinth's.",
  arch:"Underwater survey has traced the submerged moles and warehouse foundations of both harbours.",
  why:"The letter to the Romans reaches Rome because a businesswoman from a harbour suburb was going that way.",
  questions:[
    "Romans exists in our hands because of a courier. Who carries the work you depend on?",
    "Phebe is named as a servant of the church and a succourer of many. What does that pairing describe?"
  ]
},
/* ——— THE VOYAGE AND ITALY ——— */
{
  id:"crete-fair-havens", name:"Fair Havens, Crete", greek:"Καλοὶ Λιμένες", modern:"Kaloi Limenes, Crete",
  lat:34.9280, lon:24.7900, cat:"site", region:"Islands of the voyage",
  blurb:"The anchorage where Paul advised wintering, was overruled, and the ship put to sea into a north-easter.",
  scriptures:[{ref:"Acts 27:11", text:"Nevertheless the centurion believed the master and the owner of the ship, more than those things which were spoken by Paul."}],
  geo:"A roadstead on the south coast of Crete behind small islands — sheltered but, Luke says, not commodious to winter in. The next harbour, Phenice, lay forty miles west.",
  greco:"Crete was a Roman province joined to Cyrene; the grain run from Alexandria to Rome sheltered along its south coast when the etesian winds blew.",
  jewish:"Cretan Jews were at Pentecost (Acts 2:11), and Titus was later left on the island to set the churches in order (Titus 1:5).",
  arch:"The anchorage and the small islands sheltering it are unchanged; the site is identified by the coastline itself rather than by ruins.",
  why:"A sailing decision taken against advice becomes the setting for the shipwreck, and for the plainest account in scripture of a prisoner taking charge.",
  questions:[
    "The experts were overruled by the owner and the calendar. How do commercial pressures still push people past the safe moment?",
    "What changes on board between Acts 27:11 and 27:35?"
  ]
},
{
  id:"malta", name:"Malta (Melita)", greek:"Μελίτη", modern:"St Paul's Bay, Malta",
  lat:35.9550, lon:14.4000, cat:"site", region:"Islands of the voyage",
  blurb:"Where 276 people came ashore on boards and broken pieces, and the barbarous people showed no little kindness.",
  scriptures:[
    {ref:"Acts 28:1–2", text:"And when they were escaped, they knew that the island was called Melita. And the barbarous people shewed us no little kindness: for they kindled a fire, and received us every one, because of the present rain, and because of the cold."},
    {ref:"Acts 28:11", text:"And after three months we departed in a ship of Alexandria, which had wintered in the isle."}
  ],
  geo:"Sixty miles south of Sicily, directly downwind of a fourteen-day drift from Crete — the reconstruction of the drift in Acts 27:27–41 matches the island's north-east bay.",
  greco:"A Punic-speaking island under Roman rule with a 'chief man' whose title, protos, appears in inscriptions as Luke uses it.",
  jewish:"No community is named; the hospitality of strangers is the point of the episode.",
  arch:"Roman villas at Rabat, the Punic-Roman harbour installations, and four ancient anchors reportedly recovered from the approaches to the bay.",
  why:"Three months on an island the mission never planned to visit, and a healing ministry in a place with no synagogue at all.",
  questions:[
    "Kindness comes from people the narrator calls barbarians. What does that do to assumptions about who is ready to help?",
    "How does an unplanned winter fit into a calling? What did Malta get out of the shipwreck?"
  ]
},
{
  id:"puteoli", name:"Puteoli", greek:"Ποτίολοι", modern:"Pozzuoli, Italy",
  lat:40.8230, lon:14.1220, cat:"city", region:"Italy & the west",
  blurb:"The grain port of Rome, where Paul landed in Italy and found brethren already waiting.",
  scriptures:[{ref:"Acts 28:13–14", text:"And from thence we fetched a compass, and came to Rhegium... and we came the next day to Puteoli: where we found brethren, and were desired to tarry with them seven days: and so we went toward Rome."}],
  geo:"On the Bay of Naples, the terminus of the Alexandrian grain fleet, 130 miles from Rome by the Via Campana and the Appian Way.",
  greco:"Italy's chief eastern-trade harbour before Ostia was enlarged, with a mole whose piers still stand and a cosmopolitan dockside population.",
  jewish:"A Jewish community is attested in the region, and a church existed here before Paul arrived — planted by traffic, not by apostles.",
  arch:"The Flavian amphitheatre, the macellum and the Roman mole piers are visible in Pozzuoli.",
  why:"The gospel reaches Italy before its most famous missionary does. Paul walks the last stretch to Rome as a guest of a church he did not found.",
  questions:[
    "Believers were already in Italy when Paul landed. Who spread the gospel along the trade routes without being named in Acts?",
    "What does it mean that Paul's arrival in Rome is a reunion rather than a beginning?"
  ]
},
{
  id:"rome", name:"Rome", greek:"Ῥώμη", modern:"Roma, Italy",
  lat:41.8930, lon:12.4830, cat:"capital", region:"Italy & the west",
  blurb:"The head of the empire and the end of the book — two years in his own hired house, preaching with no man forbidding him.",
  scriptures:[
    {ref:"Acts 28:30–31", text:"And Paul dwelt two whole years in his own hired house, and received all that came in unto him, preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ, with all confidence, no man forbidding him."},
    {ref:"Romans 1:16", text:"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth."}
  ],
  geo:"Fifteen miles up the Tiber from the sea, at the hub of every road in the western empire — the Appian Way brought Paul in from the south past the Three Taverns.",
  greco:"A city of perhaps a million people, most of them poor, in insulae and tenements; the imperial household, the praetorian guard, and a legal system that a citizen could appeal to and be held by for years.",
  jewish:"Several synagogues, a community expelled under Claudius and returned by Paul's day (Acts 18:2), and a Christian congregation of both Jews and Gentiles arguing over food, calendars and status — the agenda of Romans 14.",
  arch:"The Forum, the Appian Way, the Mamertine prison and the catacombs are all accessible; the site of Paul's lodging is unknown.",
  why:"Acts ends without a verdict. The last word of the book is a preposition of freedom — unhindered — spoken about a prisoner in the capital of the world.",
  questions:[
    "Luke ends with the gospel preached freely in Rome rather than with Paul's fate. Why might that be the right ending?",
    "Romans is written to a church Paul had not yet met, about Jew and Gentile in one body. What makes that letter the argument he chose to send ahead of himself?"
  ]
}
];

/* ——— PAUL'S JOURNEYS, THE VOYAGE, AND THE SEVEN CHURCHES ———
   Traced port to port and along the Roman roads actually used. */
const CFM_JOURNEYS = [
{ id:"j-paul-1", name:"Paul's first journey (Acts 13–14)", phase:"The Apostolic Mission", color:"#1f6f7a",
  refs:"Acts 13:1–14:28",
  note:"Antioch to Cyprus, then over the Taurus to the Galatian highlands and back the same way — about 1,400 miles, two years, and the whole route retraced to appoint elders.",
  path:[[36.2021,36.1610],[36.1200,35.9300],[35.1830,33.9060],[34.7570,32.4060],[36.9611,30.8536],[38.3062,31.1900],[37.8746,32.4932],[37.5800,32.4530],[37.3500,33.2500],[37.5800,32.4530],[37.8746,32.4932],[38.3062,31.1900],[36.9611,30.8536],[36.8800,30.7000],[36.2021,36.1610]] },
{ id:"j-paul-2", name:"Paul's second journey (Acts 15:36–18:22)", phase:"The Apostolic Mission", color:"#7a3f8f",
  refs:"Acts 15:36–18:22",
  note:"Overland through Cilicia and Galatia to Troas, then across to Europe: Philippi, Thessalonica, Berea, Athens, and eighteen months at Corinth. Roughly 2,800 miles.",
  path:[[36.2021,36.1610],[36.9177,34.8947],[37.3500,33.2500],[37.5800,32.4530],[37.8746,32.4932],[38.3062,31.1900],[39.8140,26.1590],[40.9400,24.4100],[41.0130,24.2870],[40.8200,23.8400],[40.6403,22.9350],[40.5240,22.2030],[37.9720,23.7260],[37.9060,22.8790],[37.8850,22.9900],[37.9410,27.3410],[32.5000,34.8920],[31.7784,35.2354],[36.2021,36.1610]] },
{ id:"j-paul-3", name:"Paul's third journey (Acts 18:23–21:17)", phase:"The Apostolic Mission", color:"#8a6a1f",
  refs:"Acts 18:23–21:17",
  note:"Three years based at Ephesus, from which the whole province was reached, then a collection tour of Macedonia and Achaia and the voyage back to Jerusalem with the money.",
  path:[[36.2021,36.1610],[37.8746,32.4932],[37.9410,27.3410],[39.8140,26.1590],[41.0130,24.2870],[40.6403,22.9350],[37.9060,22.8790],[41.0130,24.2870],[39.8140,26.1590],[39.4900,26.3400],[37.5300,27.2770],[36.2600,29.3100],[33.2705,35.1960],[32.5000,34.8920],[31.7784,35.2354]] },
{ id:"j-paul-rome", name:"The voyage to Rome (Acts 27–28)", phase:"The Apostolic Mission", color:"#3f5f8f",
  refs:"Acts 27:1–28:16",
  note:"Caesarea to Rome as a prisoner: coasting to Asia, beating west along Crete, fourteen days adrift in a north-easter, shipwreck at Malta, and the Appian Way up from Puteoli.",
  path:[[32.5000,34.8920],[33.5630,35.3690],[36.2500,29.9800],[36.6900,27.2200],[34.9280,24.7900],[35.9550,14.4000],[37.0700,15.2900],[38.1100,15.6500],[40.8230,14.1220],[41.8930,12.4830]] },
{ id:"j-seven-churches", name:"The seven churches of Asia (Revelation 1–3)", phase:"The Apostolic Mission", color:"#6b2b4a",
  refs:"Revelation 1:11",
  note:"The seven cities in the order John names them — a circular postal route on the Roman roads of Asia, starting at the port nearest Patmos and ending in the Lycus valley.",
  path:[[37.3090,26.5470],[37.9410,27.3410],[38.4190,27.1390],[39.1320,27.1840],[38.9220,27.8360],[38.4880,28.0400],[38.3490,28.5200],[37.8360,29.1080]] }
];

/* Patmos sits in the Revelation weeks and needs its own entry. */
MED_PLACES.push({
  id:"patmos", name:"Patmos", greek:"Πάτμος", modern:"Patmos, Greece",
  lat:37.3090, lon:26.5470, cat:"site", region:"Islands of the voyage",
  blurb:"A small rocky island within sight of the Asian coast — a place of exile, and the address of the last book of the Bible.",
  scriptures:[{ref:"Revelation 1:9", text:"I John, who also am your brother, and companion in tribulation... was in the isle that is called Patmos, for the word of God, and for the testimony of Jesus Christ."}],
  geo:"Thirteen square miles of volcanic rock forty miles off Miletus, on the shipping lane between Ephesus and Rome — close enough that letters to the seven churches could be carried in days.",
  greco:"Roman authorities used Aegean islands for relegatio, banishment without loss of property; a gymnasium and temple of Artemis are attested on the island.",
  jewish:"John writes in the idiom of Ezekiel, Daniel and Zechariah — an apocalyptic vocabulary formed in earlier exiles.",
  arch:"Ancient remains are slight; the acropolis walls of the classical settlement and later monastic buildings dominate the island.",
  why:"The vision is given to a man on the empire's margin about the empire's centre — and it is addressed, first, to seven working congregations on the mainland he can see.",
  questions:[
    "The Revelation is written from exile to churches under pressure. How does that setting shape the way you read its images?",
    "Why do the visions begin with practical letters to named congregations rather than with the end of the world?"
  ]
});

/* ——— THE 53 COME, FOLLOW ME WEEKS ———
   targetBounds: [[latMin,lngMin],[latMax,lngMax]] — the theatre of action to frame.
   relevantPlaceIds / relevantJourneyIds: ids in the gazetteer and route list.
   letter: for epistle weeks — where it was written and where it was going. */
const B = {
  galilee:      [[32.58,35.18],[33.02,35.78]],
  galileeWide:  [[32.40,34.95],[33.35,36.00]],
  nazBeth:      [[31.60,34.95],[32.85,35.60]],
  jordan:       [[31.60,35.20],[32.95,35.75]],
  judea:        [[31.50,34.80],[32.35,35.70]],
  jerusalem:    [[31.755,35.215],[31.795,35.270]],
  jlemWide:     [[31.70,35.10],[31.86,35.36]],
  samaria:      [[31.70,34.80],[32.85,35.60]],
  north:        [[32.60,34.95],[33.62,36.10]],
  decapolis:    [[32.15,35.35],[33.00,36.75]],
  holyLand:     [[31.15,34.35],[33.65,36.55]],
  eastMed:      [[30.60,26.00],[42.20,37.20]],
  asiaMinor:    [[36.20,26.20],[40.20,34.90]],
  aegean:       [[36.30,21.20],[41.60,29.80]],
  asia:         [[36.90,26.30],[39.60,30.10]],
  lycus:        [[37.65,28.95],[38.05,29.40]],
  greece:       [[36.60,21.50],[41.30,25.30]],
  wholeMed:     [[31.00,10.80],[42.60,36.80]],
  italy:        [[34.80,11.20],[42.60,17.60]],
  /* the four horizons need frames wide enough to hold them */
  mission2:     [[30.40,20.60],[42.60,31.80]],   /* Greece + Asia Minor + Alexandria + Bithynia */
  westMed:      [[30.20,-1.80],[43.60,36.60]],   /* Jerusalem to Spain */
  eastReach:    [[29.40,24.20],[43.60,46.80]],   /* Asia Minor to Babylon */
  romeToBabylon:[[29.60,10.80],[43.60,46.80]]    /* the whole span of the letters */
};
const GL = 'https://www.churchofjesuschrist.org/study/scriptures/';
const CFM_SCHEDULE = [
{ week:0, title:"Week 0: We are responsible for our own learning", readings:"Introductory week",
  targetBounds:B.holyLand, relevantPlaceIds:["jerusalem","nazareth","capernaum","bethlehem"], relevantJourneyIds:[],
  discussionPrompts:[
    "Why does the geography of the Gospels matter to your own study — what changes when a story has a slope, a distance and a border?",
    "What will you do this year that makes the study yours rather than the teacher's?"],
  gospelLibraryUrl:GL+"nt/matt/1?lang=eng" },
{ week:1, title:"Week 1: Matthew 1; Luke 1", readings:"Matthew 1; Luke 1",
  targetBounds:B.nazBeth, relevantPlaceIds:["nazareth","jerusalem","temple-mount","bethlehem"], relevantJourneyIds:[],
  discussionPrompts:[
    "Gabriel comes to the Temple in the capital and to a girl in a village of a few hundred. What does that pairing teach about how God works?",
    "Nazareth is a mile off the Via Maris but never on it. How does obscurity figure in these two annunciations?"],
  gospelLibraryUrl:GL+"nt/matt/1?lang=eng" },
{ week:2, title:"Week 2: Matthew 2; Luke 2", readings:"Matthew 2; Luke 2",
  targetBounds:B.nazBeth, relevantPlaceIds:["bethlehem","jerusalem","temple-mount","egypt","nazareth"], relevantJourneyIds:["j-infancy"],
  discussionPrompts:[
    "Trace the infancy route: Nazareth, Bethlehem, Egypt, Nazareth. What does that much travel cost a poor family?",
    "Herod's fortress-building and the flight into Egypt occupy the same landscape. How does the political map read alongside Matthew 2?"],
  gospelLibraryUrl:GL+"nt/matt/2?lang=eng" },
{ week:3, title:"Week 3: John 1", readings:"John 1",
  targetBounds:B.jordan, relevantPlaceIds:["bethabara","bethsaida","cana","nazareth","capernaum"], relevantJourneyIds:["j-baptism"],
  discussionPrompts:[
    "The first disciples are called at a Jordan ford, not in a synagogue. What does the location add to 'come and see'?",
    "'Can there any good thing come out of Nazareth?' What does the map say about why Nathanael asked that?"],
  gospelLibraryUrl:GL+"nt/john/1?lang=eng" },
{ week:4, title:"Week 4: Matthew 3; Mark 1; Luke 3", readings:"Matthew 3; Mark 1; Luke 3",
  targetBounds:B.jordan, relevantPlaceIds:["bethabara","qumran","machaerus","capernaum","jerusalem"], relevantJourneyIds:["j-baptism"],
  discussionPrompts:[
    "John baptises at a ford 1,300 feet below Jerusalem, in the wilderness rather than the Temple. Why there?",
    "Qumran lies a few miles from John's ministry. What does the desert setting suggest about renewal movements in that generation?"],
  gospelLibraryUrl:GL+"nt/matt/3?lang=eng" },
{ week:5, title:"Week 5: Matthew 4; Luke 4–5", readings:"Matthew 4; Luke 4–5",
  targetBounds:B.galilee, relevantPlaceIds:["nazareth","capernaum","gennesaret","bethsaida","magdala","sepphoris"], relevantJourneyIds:["j-galilee-circuit"],
  discussionPrompts:[
    "Jesus is rejected at Nazareth and moves his base to Capernaum. What did that relocation give the ministry — roads, harbour, customs post, crowds?",
    "The call of the fishermen happens at a working harbour. How does the economics of the lake change the phrase 'they forsook all'?"],
  gospelLibraryUrl:GL+"nt/matt/4?lang=eng" },
{ week:6, title:"Week 6: John 2–4", readings:"John 2–4",
  targetBounds:B.samaria, relevantPlaceIds:["cana","capernaum","jerusalem","temple-mount","sychar","gerizim","sebaste"], relevantJourneyIds:["j-samaria"],
  discussionPrompts:[
    "Jesus takes the direct road through Samaria that most Galilean pilgrims avoided. What does the detour they preferred say about the conversation at the well?",
    "The woman points to Gerizim, Jesus to worship in spirit and truth. How does standing between two holy mountains sharpen that exchange?"],
  gospelLibraryUrl:GL+"nt/john/2?lang=eng" },
{ week:7, title:"Week 7: Matthew 5; Luke 6", readings:"Matthew 5; Luke 6",
  targetBounds:B.galilee, relevantPlaceIds:["beatitudes","capernaum","chorazin","bethsaida","tabor"], relevantJourneyIds:[],
  discussionPrompts:[
    "The sermon is preached on a hillside above a working shoreline, in earshot of Decapolis cities across the water. Who was in that crowd?",
    "Which of the Beatitudes would have sounded most impossible to a Galilean villager under Antipas' taxes?"],
  gospelLibraryUrl:GL+"nt/matt/5?lang=eng" },
{ week:8, title:"Week 8: Matthew 6–7", readings:"Matthew 6–7",
  targetBounds:B.galilee, relevantPlaceIds:["beatitudes","capernaum","gennesaret","nazareth"], relevantJourneyIds:[],
  discussionPrompts:[
    "'Consider the lilies' and 'the fowls of the air' are drawn from the plain in front of the speaker. What does teaching from the visible landscape model for us?",
    "A house on rock and a house on sand is a builder's warning in a country of winter torrents. What are the wadis in your own life?"],
  gospelLibraryUrl:GL+"nt/matt/6?lang=eng" },
{ week:9, title:"Week 9: Matthew 8; Mark 2–4; Luke 7", readings:"Matthew 8; Mark 2–4; Luke 7",
  targetBounds:B.galilee, relevantPlaceIds:["capernaum","nain","magdala","gennesaret","kursi","hippos"], relevantJourneyIds:["j-galilee-circuit"],
  discussionPrompts:[
    "The centurion at Capernaum, a widow at Nain, a storm on the lake. How do these three settings each test a different kind of authority?",
    "Capernaum had a customs post and a garrison. How does that explain both the tax collector's call and the officer's faith?"],
  gospelLibraryUrl:GL+"nt/matt/8?lang=eng" },
{ week:10, title:"Week 10: Matthew 9–10; Mark 5; Luke 9", readings:"Matthew 9–10; Mark 5; Luke 9",
  targetBounds:B.galileeWide, relevantPlaceIds:["capernaum","kursi","gadara","hippos","bethsaida","magdala"], relevantJourneyIds:["j-decapolis","j-galilee-circuit"],
  discussionPrompts:[
    "The Twelve are sent out into villages within a few days' walk. Plot the radius: what does 'go not into the way of the Gentiles' mean on this map?",
    "Mark 5 crosses to the east shore and back in a chapter. What does a six-mile crossing accomplish that a sermon at home could not?"],
  gospelLibraryUrl:GL+"nt/matt/9?lang=eng" },
{ week:11, title:"Week 11: Matthew 11–12; Luke 11", readings:"Matthew 11–12; Luke 11",
  targetBounds:B.galilee, relevantPlaceIds:["chorazin","bethsaida","capernaum","tyre","sidon","machaerus"], relevantJourneyIds:[],
  discussionPrompts:[
    "Chorazin, Bethsaida and Capernaum lie within three miles of each other. Why are the woes addressed to the towns that saw the most?",
    "Tyre and Sidon are held up as more responsive than Galilean towns. What does that comparison do to the idea of a favoured place?"],
  gospelLibraryUrl:GL+"nt/matt/11?lang=eng" },
{ week:12, title:"Week 12: Matthew 13; Luke 8; 13", readings:"Matthew 13; Luke 8; 13",
  targetBounds:B.galilee, relevantPlaceIds:["capernaum","gennesaret","magdala","beatitudes","tiberias"], relevantJourneyIds:["j-galilee-circuit"],
  discussionPrompts:[
    "The parables of soil, seed, weeds and nets come from the plain of Gennesaret and the fishing trade. How does local work become theology?",
    "Which soil describes the way your class listens — and what would deepen it?"],
  gospelLibraryUrl:GL+"nt/matt/13?lang=eng" },
{ week:13, title:"Week 13: Easter", readings:"Easter",
  targetBounds:B.jerusalem, relevantPlaceIds:["golgotha","gethsemane","olivet","temple-mount","bethany","emmaus"], relevantJourneyIds:["j-passion","j-resurrection"],
  discussionPrompts:[
    "Golgotha and the tomb stand yards apart in an abandoned quarry outside the wall. What does that proximity add to the Resurrection accounts?",
    "The risen Lord appears in a garden, on a road, by a lake and on a ridge. Why so many ordinary places?"],
  gospelLibraryUrl:GL+"nt/matt/28?lang=eng" },
{ week:14, title:"Week 14: Matthew 14; Mark 6; John 5–6", readings:"Matthew 14; Mark 6; John 5–6",
  targetBounds:B.galileeWide, relevantPlaceIds:["bethsaida","capernaum","gennesaret","machaerus","bethesda","jerusalem","tiberias"], relevantJourneyIds:["j-galilee-circuit"],
  discussionPrompts:[
    "John dies at Machaerus, a fortress east of the Dead Sea, and the feeding of the five thousand follows near Bethsaida. How does the news travel that far, and what does Jesus do with it?",
    "The bread of life sermon is preached at Capernaum the day after a free meal. Why does the crowd thin at exactly that point?"],
  gospelLibraryUrl:GL+"nt/matt/14?lang=eng" },
{ week:15, title:"Week 15: Matthew 15–17; Mark 7–9", readings:"Matthew 15–17; Mark 7–9",
  targetBounds:B.north, relevantPlaceIds:["tyre","sidon","kursi","gadara","caesarea-philippi","hermon","tabor","capernaum"], relevantJourneyIds:["j-north","j-decapolis"],
  discussionPrompts:[
    "The route runs out of Jewish territory into Phoenicia, back through the Decapolis, and north to a pagan sanctuary at the Jordan's springs. Why is Peter's confession set there?",
    "Whether the Transfiguration was on Tabor or Hermon changes the picture. What does each candidate suggest?"],
  gospelLibraryUrl:GL+"nt/matt/15?lang=eng" },
{ week:16, title:"Week 16: Matthew 18; Luke 10", readings:"Matthew 18; Luke 10",
  targetBounds:B.judea, relevantPlaceIds:["jericho","bethany","jerusalem","capernaum","sychar"], relevantJourneyIds:["j-tojerusalem"],
  discussionPrompts:[
    "The Jericho road climbs 3,300 feet in seventeen miles through bandit country. How does the terrain make the good Samaritan a story about real risk?",
    "The Seventy are sent ahead into villages on the route. What does advance work look like in your ward?"],
  gospelLibraryUrl:GL+"nt/matt/18?lang=eng" },
{ week:17, title:"Week 17: John 7–10", readings:"John 7–10",
  targetBounds:B.jlemWide, relevantPlaceIds:["temple-mount","siloam","bethesda","jerusalem","olivet","bethabara"], relevantJourneyIds:[],
  discussionPrompts:[
    "The living water saying comes at the feast of Tabernacles, when water was carried up from Siloam to the Temple daily. What does the ritual add?",
    "A blind man is sent down to the pool of Siloam and climbs back seeing. Why send him at all?"],
  gospelLibraryUrl:GL+"nt/john/7?lang=eng" },
{ week:18, title:"Week 18: Luke 12–17; John 11", readings:"Luke 12–17; John 11",
  targetBounds:B.judea, relevantPlaceIds:["bethany","jericho","bethabara","jerusalem","sychar","emmaus"], relevantJourneyIds:["j-tojerusalem"],
  discussionPrompts:[
    "Bethany is two miles from Jerusalem, and Jesus arrives four days late. What does the short distance do to the sisters' words?",
    "Much of Luke 12–17 is taught on the road through Perea. How does teaching while travelling differ from teaching in a hall?"],
  gospelLibraryUrl:GL+"nt/luke/12?lang=eng" },
{ week:19, title:"Week 19: Matthew 19–20; Mark 10; Luke 18", readings:"Matthew 19–20; Mark 10; Luke 18",
  targetBounds:B.judea, relevantPlaceIds:["jericho","bethabara","bethany","jerusalem","kerioth"], relevantJourneyIds:["j-tojerusalem"],
  discussionPrompts:[
    "Blind Bartimaeus sits at the gate of a tax-and-balsam city on the pilgrim road. Why is Jericho the right setting for that encounter?",
    "The last stage of the journey is a climb. How does 'going up to Jerusalem' work as both geography and warning?"],
  gospelLibraryUrl:GL+"nt/matt/19?lang=eng" },
{ week:20, title:"Week 20: Matthew 21–23; Mark 11; Luke 19–20; John 12", readings:"Matthew 21–23; Mark 11; Luke 19–20; John 12",
  targetBounds:B.jerusalem, relevantPlaceIds:["olivet","bethany","temple-mount","jerusalem","gethsemane"], relevantJourneyIds:["j-passion"],
  discussionPrompts:[
    "The entry comes over the ridge of Olivet, where the city and Temple appear all at once. How does that sightline shape the triumphal entry and the weeping over Jerusalem?",
    "The cleansing happens in the Court of the Gentiles, the one part of the Temple open to everyone. What does the location say about the complaint?"],
  gospelLibraryUrl:GL+"nt/matt/21?lang=eng" },
{ week:21, title:"Week 21: Joseph Smith—Matthew 1; Matthew 24–25; Mark 12–13; Luke 21", readings:"JS—Matthew 1; Matthew 24–25; Mark 12–13; Luke 21",
  targetBounds:B.jerusalem, relevantPlaceIds:["olivet","temple-mount","jerusalem","pella","bethany"], relevantJourneyIds:["j-passion"],
  discussionPrompts:[
    "The Olivet Discourse is given looking across the Kidron at the Temple that would fall in AD 70. How does the view explain the disciples' question?",
    "The Jerusalem church is said to have fled to Pella in the Decapolis. What does a real escape route add to 'flee into the mountains'?"],
  gospelLibraryUrl:GL+"pgp/js-m/1?lang=eng" },
{ week:22, title:"Week 22: Matthew 26; Mark 14; John 13", readings:"Matthew 26; Mark 14; John 13",
  targetBounds:B.jerusalem, relevantPlaceIds:["caiaphas","gethsemane","bethany","temple-mount","kerioth"], relevantJourneyIds:["j-passion"],
  discussionPrompts:[
    "The upper room, Gethsemane and the high priest's house lie within a mile of each other. What does that compression do to the night's events?",
    "Judas may have been the one non-Galilean among the Twelve. How much should geography be allowed to explain?"],
  gospelLibraryUrl:GL+"nt/matt/26?lang=eng" },
{ week:23, title:"Week 23: John 14–17", readings:"John 14–17",
  targetBounds:B.jerusalem, relevantPlaceIds:["caiaphas","gethsemane","temple-mount","olivet","jerusalem"], relevantJourneyIds:["j-passion"],
  discussionPrompts:[
    "The vine discourse is spoken walking out of the city towards the Kidron, past terraced vineyards and the Temple's golden vine. What is being pointed at?",
    "The intercessory prayer is offered within sight of the place of arrest. How does that setting read against 'I have finished the work'?"],
  gospelLibraryUrl:GL+"nt/john/14?lang=eng" },
{ week:24, title:"Week 24: Luke 22; John 18", readings:"Luke 22; John 18",
  targetBounds:B.jerusalem, relevantPlaceIds:["gethsemane","caiaphas","praetorium","temple-mount","jerusalem"], relevantJourneyIds:["j-passion"],
  discussionPrompts:[
    "The arrest crosses the Kidron and the trials move between the priestly quarter and the governor's palace. What do those movements say about who held what power?",
    "Peter denies in a courtyard yards from where Jesus is questioned. How does proximity make the failure heavier?"],
  gospelLibraryUrl:GL+"nt/luke/22?lang=eng" },
{ week:25, title:"Week 25: Matthew 27; Mark 15; Luke 23; John 19", readings:"Matthew 27; Mark 15; Luke 23; John 19",
  targetBounds:B.jerusalem, relevantPlaceIds:["praetorium","golgotha","temple-mount","caiaphas","jerusalem"], relevantJourneyIds:["j-passion"],
  discussionPrompts:[
    "The likely Praetorium is Herod's palace at the western wall, and Golgotha an old quarry just outside the gate. How far is the walk, and what happens along it?",
    "The crucifixion is deliberately staged beside a road at Passover. What was the execution meant to say, and what did it end up saying?"],
  gospelLibraryUrl:GL+"nt/matt/27?lang=eng" },
{ week:26, title:"Week 26: Matthew 28; Mark 16; Luke 24; John 20–21", readings:"Matthew 28; Mark 16; Luke 24; John 20–21",
  targetBounds:B.judea, relevantPlaceIds:["golgotha","emmaus","jerusalem","gennesaret","capernaum","olivet"], relevantJourneyIds:["j-resurrection"],
  discussionPrompts:[
    "Emmaus is about seven miles from Jerusalem — a walk out and a walk back the same night. What does that round trip say about the news?",
    "The last Galilean appearance is at a shoreline where the disciples had first been called. Why end where it began?"],
  gospelLibraryUrl:GL+"nt/matt/28?lang=eng" },
{ week:27, title:"Week 27: Acts 1–5", readings:"Acts 1–5",
  targetBounds:B.jlemWide, relevantPlaceIds:["olivet","temple-mount","jerusalem","bethany","siloam"], relevantJourneyIds:["j-acts"],
  discussionPrompts:[
    "Pentecost lists the homelands of the crowd — a map of the diaspora standing in one courtyard. What was being prepared?",
    "The first church meets in the Temple and in houses. How do public and private space each carry part of the work?"],
  gospelLibraryUrl:GL+"nt/acts/1?lang=eng" },
{ week:28, title:"Week 28: Acts 6–9", readings:"Acts 6–9",
  targetBounds:B.holyLand, relevantPlaceIds:["jerusalem","sebaste","sychar","gerizim","joppa","caesarea","damascus","tarsus","antioch-syria"], relevantJourneyIds:["j-acts"],
  discussionPrompts:[
    "Persecution scatters the church and the gospel spreads along the roads it flees down. Trace the map of Acts 8 — what does opposition accomplish?",
    "Saul is stopped on a 150-mile road to Damascus, then sent home to Tarsus for years. Why the long pause?"],
  gospelLibraryUrl:GL+"nt/acts/6?lang=eng" },
{ week:29, title:"Week 29: Acts 10–15", readings:"Acts 10–15",
  targetBounds:B.eastMed, relevantPlaceIds:["joppa","caesarea","jerusalem","antioch-syria","salamis-cyprus","paphos","perga","antioch-pisidia","iconium","lystra","derbe"], relevantJourneyIds:["j-paul-1"],
  discussionPrompts:[
    "Cornelius is at the Roman provincial capital and Peter at a Jewish port thirty miles south. How does that short journey carry the whole Gentile question?",
    "The first mission and then the Jerusalem council. What does it cost a church to change a boundary it inherited?"],
  gospelLibraryUrl:GL+"nt/acts/10?lang=eng" },
{ week:30, title:"Week 30: Acts 16–21", readings:"Acts 16–21",
  targetBounds:B.mission2, relevantPlaceIds:["troas","bithynia-pontus","philippi","thessalonica","berea","athens","corinth","ephesus","miletus","alexandria"], relevantJourneyIds:["j-paul-2","j-paul-3"],
  discussionPrompts:[
    "A vision at Troas turns the mission west, and the gospel follows the Via Egnatia into Europe. How much of the map of Christianity comes from that single night?",
    "Philippi has no synagogue, Athens has philosophers, Corinth has sailors. How does Paul's approach change with the city?"],
  gospelLibraryUrl:GL+"nt/acts/16?lang=eng" },
{ week:31, title:"Week 31: Acts 22–28", readings:"Acts 22–28",
  targetBounds:B.wholeMed, relevantPlaceIds:["jerusalem","caesarea","crete-fair-havens","malta","puteoli","rome","sidon","alexandria"], relevantJourneyIds:["j-paul-rome"],
  discussionPrompts:[
    "Two years in custody at Caesarea, a shipwreck, three months on Malta, and a hired house in Rome. How does God use delay and detour in this story?",
    "Acts ends with the gospel preached in the capital 'no man forbidding him', and no verdict on Paul. Why is that the right ending?"],
  gospelLibraryUrl:GL+"nt/acts/22?lang=eng" },
{ week:32, title:"Week 32: Romans 1–6", readings:"Romans 1–6",
  targetBounds:B.westMed, relevantPlaceIds:["corinth","cenchreae","rome","jerusalem","spain"], relevantJourneyIds:["j-paul-3"],
  letter:{from:"corinth", fromLabel:"Written from Corinth (or its harbour suburb) near the end of the third journey, c. AD 57", to:["rome"], toLabel:"Carried to Rome by Phebe of Cenchreae, some 800 sea and road miles west", via:["cenchreae"]},
  discussionPrompts:[
    "Paul writes ahead to a church he has never visited, hoping for support onward to Spain. How does that purpose shape Romans 1–6?",
    "The Roman congregation was Jewish and Gentile in one city under one emperor. Why begin with the guilt of both?"],
  gospelLibraryUrl:GL+"nt/rom/1?lang=eng" },
{ week:33, title:"Week 33: Romans 7–16", readings:"Romans 7–16",
  targetBounds:B.westMed, relevantPlaceIds:["rome","corinth","cenchreae","jerusalem","spain"], relevantJourneyIds:["j-paul-3"],
  letter:{from:"corinth", fromLabel:"Written from Corinth, c. AD 57, with the collection for Jerusalem already gathered", to:["rome"], toLabel:"To the house congregations of Rome — Romans 16 names some twenty-six of their members", via:["cenchreae"]},
  discussionPrompts:[
    "Romans 16 is a list of names in tenements and households. What does that roll call show about how a big-city church was actually organised?",
    "Chapter 14's argument is over food and holy days between believers of different backgrounds. How is that dispute still with us?"],
  gospelLibraryUrl:GL+"nt/rom/7?lang=eng" },
{ week:34, title:"Week 34: 1 Corinthians 1–7", readings:"1 Corinthians 1–7",
  targetBounds:B.aegean, relevantPlaceIds:["corinth","ephesus","cenchreae","athens"], relevantJourneyIds:["j-paul-3"],
  letter:{from:"ephesus", fromLabel:"Written from Ephesus during the three-year stay, c. AD 55", to:["corinth"], toLabel:"To Corinth, about 250 miles west across the Aegean — a week's sail, and news travelled both ways constantly", via:["cenchreae"]},
  discussionPrompts:[
    "Corinth was a refounded colony where nearly everyone was a newcomer competing for status. How does that explain the factions of chapter 1?",
    "Paul answers questions carried to him by ship. What does it mean to pastor at a distance, by letter?"],
  gospelLibraryUrl:GL+"nt/1-cor/1?lang=eng" },
{ week:35, title:"Week 35: 1 Corinthians 8–13", readings:"1 Corinthians 8–13",
  targetBounds:B.greece, relevantPlaceIds:["corinth","cenchreae","athens","ephesus"], relevantJourneyIds:[],
  letter:{from:"ephesus", fromLabel:"Written from Ephesus, c. AD 55", to:["corinth"], toLabel:"To a congregation meeting in houses in a city of temples, games and public banquets"},
  discussionPrompts:[
    "Meat sold in the Corinthian market had often been sacrificed in a temple first. How does that concrete problem shape Paul's teaching on conscience?",
    "The body-of-Christ image is addressed to a church divided by class at its own supper table. What does chapter 13 ask of such a group?"],
  gospelLibraryUrl:GL+"nt/1-cor/8?lang=eng" },
{ week:36, title:"Week 36: 1 Corinthians 14–16", readings:"1 Corinthians 14–16",
  targetBounds:B.aegean, relevantPlaceIds:["corinth","ephesus","jerusalem","philippi"], relevantJourneyIds:["j-paul-3"],
  letter:{from:"ephesus", fromLabel:"Written from Ephesus, c. AD 55, with travel plans through Macedonia attached (16:5–8)", to:["corinth"], toLabel:"To Corinth, along with instructions for the weekly collection destined for Jerusalem"},
  discussionPrompts:[
    "The collection for the Jerusalem poor is organised across three provinces. What does that logistics project say about one church's obligation to another?",
    "Chapter 15 argues the resurrection to Greeks who thought the body a problem. Which of Paul's arguments would have landed hardest there?"],
  gospelLibraryUrl:GL+"nt/1-cor/14?lang=eng" },
{ week:37, title:"Week 37: 2 Corinthians 1–7", readings:"2 Corinthians 1–7",
  targetBounds:B.aegean, relevantPlaceIds:["corinth","philippi","troas","ephesus","thessalonica"], relevantJourneyIds:["j-paul-3"],
  letter:{from:"philippi", fromLabel:"Written from Macedonia — probably Philippi — after Titus brought good news from Corinth, c. AD 56", to:["corinth"], toLabel:"To Corinth, where Paul's authority had been challenged since the last letter", via:["troas"]},
  discussionPrompts:[
    "Paul waits at Troas and then Macedonia for news from Corinth (2:12–13; 7:5–7). What does that anxiety show about him?",
    "How does a wounded relationship get repaired at the speed of ancient mail?"],
  gospelLibraryUrl:GL+"nt/2-cor/1?lang=eng" },
{ week:38, title:"Week 38: 2 Corinthians 8–13", readings:"2 Corinthians 8–13",
  targetBounds:B.aegean, relevantPlaceIds:["corinth","philippi","thessalonica","jerusalem","damascus"], relevantJourneyIds:["j-paul-3"],
  letter:{from:"philippi", fromLabel:"Written from Macedonia, c. AD 56", to:["corinth"], toLabel:"To Corinth — chapters 8–9 press the collection, 10–13 defend the apostleship behind it"},
  discussionPrompts:[
    "The poor Macedonian churches give beyond their means and the rich port city needs prompting. Why might prosperity make generosity harder?",
    "Paul's résumé in 11:23–33 is a travel log of hardship — shipwrecks, roads, rivers, prisons. What is he actually proving?"],
  gospelLibraryUrl:GL+"nt/2-cor/8?lang=eng" },
{ week:39, title:"Week 39: Galatians", readings:"Galatians",
  targetBounds:B.asiaMinor, relevantPlaceIds:["antioch-pisidia","iconium","lystra","derbe","antioch-syria","jerusalem","damascus"], relevantJourneyIds:["j-paul-1"],
  letter:{from:"antioch-syria", fromLabel:"Written from Antioch of Syria — or early on the second journey — to the congregations of the first mission, c. AD 49–55", to:["antioch-pisidia","iconium","lystra","derbe"], toLabel:"To the highland churches of south Galatia, reachable only over the Taurus passes"},
  discussionPrompts:[
    "The confrontation at Antioch (2:11–14) is about who eats with whom. Why is a shared table the place the doctrine gets tested?",
    "These converts were Gentiles in Roman colonies being pressed to adopt Jewish markers. What is the modern form of adding requirements to grace?"],
  gospelLibraryUrl:GL+"nt/gal/1?lang=eng" },
{ week:40, title:"Week 40: Ephesians", readings:"Ephesians",
  targetBounds:B.asia, relevantPlaceIds:["ephesus","rome","laodicea","colossae","smyrna"], relevantJourneyIds:["j-seven-churches"],
  letter:{from:"rome", fromLabel:"Written from custody in Rome, c. AD 60–62", to:["ephesus"], toLabel:"To Ephesus, and probably circulated through the province — the earliest manuscripts leave the address blank"},
  discussionPrompts:[
    "A letter about one body in Christ is sent to the capital of a province full of temples and guilds. What would 'one new man' have cost socially?",
    "The armour of God is described to people who saw Roman soldiers daily. Which piece speaks loudest to you?"],
  gospelLibraryUrl:GL+"nt/eph/1?lang=eng" },
{ week:41, title:"Week 41: Philippians; Colossians", readings:"Philippians; Colossians",
  targetBounds:B.aegean, relevantPlaceIds:["philippi","colossae","laodicea","hierapolis","rome","ephesus"], relevantJourneyIds:["j-paul-2"],
  letter:{from:"rome", fromLabel:"Both written from custody in Rome, c. AD 60–62", to:["philippi","colossae"], toLabel:"To a veterans' colony on the Via Egnatia and to a small wool town in the Lycus valley Paul had never seen", via:["puteoli"]},
  discussionPrompts:[
    "Philippi was proud of Roman citizenship; Paul writes of citizenship in heaven. How does that comparison work in a colony?",
    "Colossae, Laodicea and Hierapolis sit within eleven miles of each other. What does one worker with three congregations teach about scale?"],
  gospelLibraryUrl:GL+"nt/philip/1?lang=eng" },
{ week:42, title:"Week 42: 1 and 2 Thessalonians", readings:"1 & 2 Thessalonians",
  targetBounds:B.greece, relevantPlaceIds:["thessalonica","berea","philippi","athens","corinth"], relevantJourneyIds:["j-paul-2"],
  letter:{from:"corinth", fromLabel:"Written from Corinth soon after the second journey, c. AD 50–51 — among the earliest documents in the New Testament", to:["thessalonica"], toLabel:"To Thessalonica, 300 miles north, reached by sea or by the Via Egnatia"},
  discussionPrompts:[
    "Paul had only three sabbaths in Thessalonica, yet the church spread the word through two provinces. What travels faster than a missionary?",
    "Some had stopped working while waiting for the Lord's return. How do you hold expectation and daily labour together?"],
  gospelLibraryUrl:GL+"nt/1-thes/1?lang=eng" },
{ week:43, title:"Week 43: 1 and 2 Timothy; Titus; Philemon", readings:"1 & 2 Timothy; Titus; Philemon",
  targetBounds:B.eastMed, relevantPlaceIds:["ephesus","lystra","crete-fair-havens","colossae","rome","miletus","troas"], relevantJourneyIds:["j-paul-rome"],
  letter:{from:"rome", fromLabel:"Written to co-workers left in charge of fields — 2 Timothy from a second, harder Roman imprisonment", to:["ephesus","crete-fair-havens","colossae"], toLabel:"Timothy at Ephesus, Titus on Crete, and Philemon at Colossae — a network held together by mail and messengers"},
  discussionPrompts:[
    "Timothy is left at Ephesus and Titus on Crete: young leaders in hard places. What does Paul give them besides instructions?",
    "Philemon concerns one runaway slave and one household in a small town. Why does the New Testament keep a letter that particular?"],
  gospelLibraryUrl:GL+"nt/1-tim/1?lang=eng" },
{ week:44, title:"Week 44: Hebrews 1–6", readings:"Hebrews 1–6",
  targetBounds:B.jlemWide, relevantPlaceIds:["temple-mount","jerusalem","qumran","rome","olivet"], relevantJourneyIds:[],
  letter:{from:null, fromLabel:"Author and origin unnamed; written to Jewish believers under pressure, before the Temple fell in AD 70", to:["jerusalem"], toLabel:"To readers who knew the Temple liturgy from the inside — possibly in Rome, possibly in Judea"},
  discussionPrompts:[
    "The argument assumes readers who could picture the daily sacrifices. What is lost when we read Hebrews without the Temple in view?",
    "Why compare Christ to angels, Moses and the priesthood in that order?"],
  gospelLibraryUrl:GL+"nt/heb/1?lang=eng" },
{ week:45, title:"Week 45: Hebrews 7–13", readings:"Hebrews 7–13",
  targetBounds:B.jlemWide, relevantPlaceIds:["temple-mount","jerusalem","golgotha","bethlehem","qumran"], relevantJourneyIds:[],
  letter:{from:null, fromLabel:"Origin unknown; the closing greeting sends salutations from 'they of Italy' (13:24)", to:["jerusalem"], toLabel:"To a congregation tempted to go back to a familiar worship they could still see functioning"},
  discussionPrompts:[
    "Chapter 13 sends the reader 'outside the camp', where the bodies were burned and Golgotha stood. What does that geography ask?",
    "Hebrews 11 is a list of people who lived in tents and looked for a city. How does that reframe belonging to a place?"],
  gospelLibraryUrl:GL+"nt/heb/7?lang=eng" },
{ week:46, title:"Week 46: James", readings:"James",
  targetBounds:B.jlemWide, relevantPlaceIds:["jerusalem","temple-mount","antioch-syria","caesarea"], relevantJourneyIds:[],
  letter:{from:"jerusalem", fromLabel:"Written from Jerusalem by James, the Lord's brother and head of that church, before AD 62", to:["antioch-syria"], toLabel:"To 'the twelve tribes which are scattered abroad' — the diaspora congregations of Syria and beyond"},
  discussionPrompts:[
    "James writes from the mother church to scattered congregations about favouritism towards the rich. What does distance let him see?",
    "Faith and works are argued as one thing here. Where does your class hear that most needfully?"],
  gospelLibraryUrl:GL+"nt/james/1?lang=eng" },
{ week:47, title:"Week 47: 1 and 2 Peter", readings:"1 & 2 Peter",
  targetBounds:B.romeToBabylon, relevantPlaceIds:["rome","babylon","bithynia-pontus","ephesus","pergamum","sardis","capernaum","bethsaida"], relevantJourneyIds:["j-seven-churches"],
  letter:{from:"rome", fromLabel:"Written from 'Babylon' (1 Peter 5:13) — read by most as Rome — late in Peter's life", to:["ephesus","sardis","pergamum"], toLabel:"To the scattered believers of Pontus, Galatia, Cappadocia, Asia and Bithynia: five provinces of northern Asia Minor"},
  discussionPrompts:[
    "A Galilean fisherman writes from the imperial capital to five provinces he may never have visited. What does that arc say about a calling?",
    "The letter calls its readers strangers and pilgrims where they live. How does that identity help under pressure without breeding contempt?"],
  gospelLibraryUrl:GL+"nt/1-pet/1?lang=eng" },
{ week:48, title:"Week 48: 1–3 John; Jude", readings:"1–3 John; Jude",
  targetBounds:B.asia, relevantPlaceIds:["ephesus","patmos","smyrna","laodicea","jerusalem"], relevantJourneyIds:["j-seven-churches"],
  letter:{from:"ephesus", fromLabel:"Traditionally written from Ephesus late in the first century, when John presided over the churches of Asia", to:["ephesus","smyrna","laodicea"], toLabel:"To congregations in one province, close enough for elders and travelling teachers to circulate between them"},
  discussionPrompts:[
    "Third John concerns hospitality to travelling teachers, and who is refused a bed. How did the road shape early church order?",
    "These letters test spirits by love and by confession of Christ come in the flesh. Why those two tests together?"],
  gospelLibraryUrl:GL+"nt/1-jn/1?lang=eng" },
{ week:49, title:"Week 49: Revelation 1–5", readings:"Revelation 1–5",
  targetBounds:B.asia, relevantPlaceIds:["patmos","ephesus","smyrna","pergamum","thyatira","sardis","philadelphia-asia","laodicea"], relevantJourneyIds:["j-seven-churches"],
  letter:{from:"patmos", fromLabel:"Written on Patmos, an island of exile forty miles off the Asian coast", to:["ephesus","smyrna","pergamum","thyatira","sardis","philadelphia-asia","laodicea"], toLabel:"To seven real cities on a circular postal road — the order in Revelation 1:11 is the route a courier would ride"},
  discussionPrompts:[
    "Each of the seven letters uses something local — lukewarm water, black wool, an earthquake, a temple hill. Why does the risen Lord address churches so specifically?",
    "Which of the seven most resembles your own congregation, and what would its letter say?"],
  gospelLibraryUrl:GL+"nt/rev/1?lang=eng" },
{ week:50, title:"Week 50: Revelation 6–14", readings:"Revelation 6–14",
  targetBounds:B.romeToBabylon, relevantPlaceIds:["patmos","pergamum","rome","babylon","jerusalem","ephesus"], relevantJourneyIds:["j-seven-churches"],
  discussionPrompts:[
    "The imagery of beast, throne and blasphemous titles maps onto imperial claims the readers met in civic life. How does that context steady the reading?",
    "Chapters 6–14 alternate terror and worship. What does that rhythm do for people already under pressure?"],
  gospelLibraryUrl:GL+"nt/rev/6?lang=eng" },
{ week:51, title:"Week 51: Revelation 15–22", readings:"Revelation 15–22",
  targetBounds:B.romeToBabylon, relevantPlaceIds:["rome","babylon","patmos","jerusalem","temple-mount","ephesus"], relevantJourneyIds:[],
  discussionPrompts:[
    "Babylon the great is described as a port whose merchants mourn (18:11–19). Which city would first-century readers have pictured?",
    "The book ends with a city instead of a garden, and no temple in it. What does that ending answer?"],
  gospelLibraryUrl:GL+"nt/rev/15?lang=eng" },
{ week:52, title:"Week 52: Christmas", readings:"Christmas",
  targetBounds:B.nazBeth, relevantPlaceIds:["bethlehem","nazareth","jerusalem","egypt","temple-mount"], relevantJourneyIds:["j-infancy"],
  discussionPrompts:[
    "A year of geography ends where it began: a village of a few hundred and a town six miles from the capital. What has the map added to the Nativity?",
    "What one place in this atlas would you most want your family to understand before next year?"],
  gospelLibraryUrl:GL+"nt/luke/2?lang=eng" }
];

/* ——— THE FOUR HORIZONS ———
   Places the weeks name but the mission never reaches on the page: the city that
   sent Apollos and the grain ships, the east behind Peter's greeting and John's
   Babylon, the province the Spirit closed, and the west Paul was still planning
   when the record stops. */
MED_PLACES.push(
{
  id:"alexandria", name:"Alexandria", greek:"Ἀλεξάνδρεια", modern:"Alexandria, Egypt",
  lat:31.2001, lon:29.9187, cat:"capital", region:"Egypt & the south",
  blurb:"Second city of the empire, home of the Septuagint and of Apollos — and the port whose grain ships carried Paul to Rome.",
  scriptures:[
    {ref:"Acts 18:24", text:"And a certain Jew named Apollos, born at Alexandria, an eloquent man, and mighty in the scriptures, came to Ephesus."},
    {ref:"Acts 27:6", text:"And there the centurion found a ship of Alexandria sailing into Italy; and he put us therein."},
    {ref:"Acts 2:10", text:"Phrygia, and Pamphylia, in Egypt, and in the parts of Libya about Cyrene…"}
  ],
  geo:"On the Egyptian coast between the sea and Lake Mareotis, with a double harbour behind the Pharos lighthouse — the loading point for the grain that fed Rome, and the sea lane Paul's prison ship was following.",
  greco:"A planned Greek city of perhaps half a million, with the Library and Museum, the Serapeum, and a shipping trade that made it the empire's second port; its grain ships were large enough to carry 276 passengers and a cargo of wheat (Acts 27:37–38).",
  jewish:"The largest Jewish community outside Judea, with its own quarter, a great synagogue, the Greek translation of the scriptures made here, and the philosopher Philo — the intellectual world an 'eloquent man, mighty in the scriptures' came out of.",
  arch:"Most of the ancient city lies under the modern one or the harbour; underwater survey has mapped the Ptolemaic waterfront, and the catacombs and Serapeum column remain.",
  why:"Alexandria is the New Testament's unvisited giant. No apostle preaches there in Acts, yet its Bible, its teachers and its ships are all over the story.",
  questions:[
    "Apollos arrives already 'mighty in the scriptures' and is still taught more (Acts 18:24–26). How do you receive correction from people less credentialed than you?",
    "A city the apostles never enter still shapes the church through its books and its ships. What does that say about the ways influence travels?"
  ]
},
{
  id:"babylon", name:"Babylon", greek:"Βαβυλών", modern:"near Al Hillah, Iraq",
  lat:32.5355, lon:44.4275, cat:"city", region:"Mesopotamia & the east",
  blurb:"The old city of the exile — a real Jewish centre on the Euphrates, and the name the New Testament gives to imperial power.",
  scriptures:[
    {ref:"1 Peter 5:13", text:"The church that is at Babylon, elected together with you, saluteth you; and so doth Marcus my son."},
    {ref:"Revelation 18:2", text:"Babylon the great is fallen, is fallen, and is become the habitation of devils."},
    {ref:"Acts 2:9", text:"Parthians, and Medes, and Elamites, and the dwellers in Mesopotamia…"}
  ],
  geo:"On the Euphrates some fifty miles south of modern Baghdad, at the head of the caravan roads running west to Syria — 600 miles from Jerusalem, and outside Rome's frontier in the Parthian empire.",
  greco:"By the first century the city itself was much reduced, its trade drawn off to Seleucia on the Tigris; Strabo describes a largely deserted site, though Jewish settlement in the region stayed dense.",
  jewish:"A community descended from the exiles of 587 BC that never left — populous, prosperous, and later the home of the Babylonian Talmud. Jews 'dwelling in Mesopotamia' are among the first groups Luke names at Pentecost.",
  arch:"The mounds of the ancient city, the Ishtar Gate foundations and the processional way have been excavated and partly reconstructed near Al Hillah.",
  why:"Two Babylons are in play. Peter greets a real congregation from a place he calls Babylon — most readers take it as a cipher for Rome — and Revelation turns the name into a verdict on any empire that trades in souls.",
  questions:[
    "Why might Peter name Rome 'Babylon' rather than write it plainly? What does a shared code do for a pressured church?",
    "Revelation's Babylon is a port whose merchants mourn. What makes a city Babylon in that reading — its politics, or its commerce?"
  ]
},
{
  id:"bithynia-pontus", name:"Bithynia & Pontus", greek:"Βιθυνία καὶ Πόντος", modern:"İzmit and the Black Sea coast, Türkiye",
  lat:40.7654, lon:29.9408, cat:"city", region:"Bithynia & Pontus",
  blurb:"The province the Spirit closed to Paul at Mysia — and one of the five that Peter later writes to.",
  scriptures:[
    {ref:"Acts 16:7", text:"After they were come to Mysia, they assayed to go into Bithynia: but the Spirit suffered them not."},
    {ref:"1 Peter 1:1", text:"Peter, an apostle of Jesus Christ, to the strangers scattered throughout Pontus, Galatia, Cappadocia, Asia, and Bithynia."}
  ],
  geo:"The Black Sea side of Asia Minor, reached from the Aegean over the passes north of Mysia. Turning away from it at Troas is what sent the mission west into Europe instead.",
  greco:"A wealthy double province of Greek coastal cities under a proconsul, centred on Nicomedia and Nicaea; eighty years later its governor Pliny wrote to Trajan asking how to try Christians, describing them meeting before dawn to sing to Christ as to a god.",
  jewish:"Diaspora communities along the Black Sea trade routes, among the 'strangers scattered' Peter addresses.",
  arch:"Roman remains at Nicomedia (İzmit) and Nicaea (İznik), including walls, theatre and the later council basilica site.",
  why:"A closed door on the map that opened later by another hand. Paul is stopped here; Peter's letter arrives; within a lifetime a Roman governor is writing to the emperor about how many believers there are.",
  questions:[
    "The Spirit forbids a good plan (Acts 16:6–7) and the region is reached anyway, later, by someone else. How do you tell 'no' from 'not by you, not yet'?",
    "What does Pliny's report of dawn hymns add to your picture of what took root here?"
  ]
},
{
  id:"spain", name:"Spain (Hispania)", greek:"Σπανία", modern:"Tarragona, Spain",
  lat:41.1189, lon:1.2445, cat:"site", region:"Hispania & the far west",
  blurb:"The western end of the empire, and the field Paul was still planning when the record stops.",
  scriptures:[
    {ref:"Romans 15:24", text:"Whensoever I take my journey into Spain, I will come to you: for I trust to see you in my journey, and to be brought on my way thitherward by you."},
    {ref:"Romans 15:20", text:"So have I strived to preach the gospel, not where Christ was named, lest I should build upon another man's foundation."}
  ],
  geo:"Some 1,500 miles west of Rome by road and sea, at the far edge of the Latin-speaking world — Tarraco on the Catalan coast was the nearest provincial capital and the natural landfall.",
  greco:"Three long-Romanised provinces supplying silver, olive oil and grain, with colonies of veterans and an imperial cult centre at Tarraco — and none of the Greek-speaking synagogue network the eastern journeys always started from.",
  jewish:"Jewish settlement in Iberia is attested only later and thinly; a mission here would have had to begin without the synagogue foothold every earlier journey used.",
  arch:"The amphitheatre, forum, walls and Scipio tower at Tarraco, and the Via Augusta running up the coast.",
  why:"Romans exists partly because of Spain: Paul writes ahead to a church he has not met, hoping to be sent on westward — and Acts closes before we learn whether he went.",
  questions:[
    "Paul chose ground where no one had preached (Romans 15:20). What is gained, and what is risked, by starting where there is no foothold?",
    "The New Testament ends with a plan unfinished. How does that shape the way you think about your own unfinished work?"
  ]
}
);

/* ——— loader: fold everything into the atlas ——— */
(function(){
  const A = window.NTATLAS;
  if(!A){ console.error('CFM layer loaded before nt-map-data.js'); return; }
  const have = new Set(A.PLACES.map(p => p.id));
  MED_PLACES.forEach(p => { if(!have.has(p.id)) A.PLACES.push(p); });
  const haveJ = new Set(A.JOURNEYS.map(j => j.id));
  CFM_JOURNEYS.forEach(j => { if(!haveJ.has(j.id)) A.JOURNEYS.push(j); });
  A.CFM = CFM_SCHEDULE;
  A.CFM_REGIONS = ["Syria (Roman province)","Cilicia (Roman province)","Cyprus (Roman province)",
    "Galatia & southern Asia Minor","Asia (Roman province)","Macedonia (Roman province)",
    "Achaia (Roman province)","Islands of the voyage","Italy & the west",
    "Egypt & the south","Mesopotamia & the east","Bithynia & Pontus","Hispania & the far west"];
})();
