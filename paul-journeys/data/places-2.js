/* Second Journey (Acts 15:36 – 18:22) — Macedonia and Achaia */
window.PAUL_PLACES = window.PAUL_PLACES || {};
Object.assign(window.PAUL_PLACES, {

cilicianGates: {
  name: "The Cilician Gates", modern: "Gülek Boğazı, Taurus Mountains", region: "Cilicia / Cappadocia border", lat: 37.29, lng: 34.77, tier: "stop",
  dates: "c. AD 49 (outbound, second journey)",
  narrative: "Paul and Silas went overland 'through Syria and Cilicia' to reach the Galatian churches — which means the Cilician Gates, the single gorge road through the Taurus. It is the hardest terrain of any of his land routes and a reminder that his 'journeys' were mostly walking, at roughly 25–30 km a day.",
  greco: "A defile barely wide enough for a cart, cut by the Gökoluk stream, and for two millennia the only army road from Anatolia into Syria: Xenophon's Ten Thousand, Alexander, Cicero as proconsul of Cilicia, and later crusading armies all filed through it. Roman engineers widened and paved the passage, and imperial road works in the gorge are attested by inscriptions and by the surviving cuttings.",
  archaeology: "Cuttings for the ancient roadbed and rock-cut inscriptions survive in the gorge above the modern motorway; the Byzantine and Roman fort sites of the pass are traceable on the ridges.",
  people: ["Silas"],
  epistles: [],
  scripture: [
    { ref: "Acts 15:41", text: "And he went through Syria and Cilicia, confirming the churches." },
    { ref: "Acts 16:4", text: "And as they went through the cities, they delivered them the decrees for to keep, that were ordained of the apostles and elders which were at Jerusalem." }
  ]
},

troas: {
  name: "Troas (Alexandria Troas)", modern: "Dalyan, Çanakkale Province, Türkiye", region: "Mysia / province of Asia", lat: 39.7955, lng: 26.159, tier: "major",
  dates: "c. AD 49 (vision); AD 57 (a week, Acts 20); later (2 Tim 4:13)",
  narrative: "Forbidden by the Spirit to preach in Asia or Bithynia, Paul reached the coast here and saw the vision of a man of Macedonia — after which Luke's narrative shifts to 'we', suggesting he joined the party at Troas. On the third journey Paul spent seven days here and preached until midnight in an upper room, where Eutychus fell from the third loft and was restored. He left a cloak and parchments here.",
  greco: "Founded by Antigonus and renamed for Alexander, Troas was a Roman colony (Colonia Augusta Troadensium) and the principal ferry port for Macedonia and Italy — Augustus, and later Constantine, both considered making it an imperial capital. Its harbour handled the grain and the mails; Hadrian's friend Herodes Atticus funded its aqueduct and baths.",
  archaeology: "Extensive but only partly excavated over 400 hectares: the enormous bath-gymnasium complex of Herodes Atticus ('Bal Saray'), the stadium, an odeon, the harbour basins, the aqueduct, and c. 8 km of city wall. Ancient Troy (Hisarlık) lies 30 km north.",
  people: ["Luke (the 'we' passages begin here)", "Timothy", "Silas", "Eutychus", "Carpus (2 Tim 4:13)"],
  epistles: ["2 Corinthians 2:12 recalls a door opened here; 2 Timothy 4:13 asks for the cloak and books left with Carpus"],
  scripture: [
    { ref: "Acts 16:8–9", text: "And they passing by Mysia came down to Troas. And a vision appeared to Paul in the night; There stood a man of Macedonia, and prayed him, saying, Come over into Macedonia, and help us." },
    { ref: "Acts 16:10", text: "And after he had seen the vision, immediately we endeavoured to go into Macedonia, assuredly gathering that the Lord had called us for to preach the gospel unto them." },
    { ref: "Acts 20:7", text: "And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them, ready to depart on the morrow; and continued his speech until midnight." },
    { ref: "Acts 20:9", text: "And there sat in a window a certain young man named Eutychus, being fallen into a deep sleep: and as Paul was long preaching, he sunk down with sleep, and fell down from the third loft, and was taken up dead." },
    { ref: "2 Timothy 4:13", text: "The cloke that I left at Troas with Carpus, when thou comest, bring with thee, and the books, but especially the parchments." }
  ]
},

samothrace: {
  name: "Samothrace", modern: "Samothraki, Greece", region: "Aegean island", lat: 40.4712, lng: 25.5307, tier: "stop",
  dates: "c. AD 49 (one night)",
  narrative: "An overnight anchorage on the crossing from Troas to Macedonia. Luke's note that they made Samothrace in one day and Neapolis the next indicates a favourable wind; the return crossing later took five days (Acts 20:6).",
  greco: "Home of the Sanctuary of the Great Gods and its mystery cult of the Kabeiroi, second in prestige only to Eleusis; initiates included Herodotus, Philip II and Olympias — traditionally where they met. The Winged Victory of Samothrace was dedicated in this sanctuary and now stands in the Louvre.",
  archaeology: "The Sanctuary of the Great Gods is excavated and visitable: the Hieron, the Anaktoron, the Arsinoeion (the largest closed round building in the Greek world), the theatral area and the Nike monument's prow base.",
  people: ["Luke", "Silas", "Timothy"],
  epistles: [],
  scripture: [
    { ref: "Acts 16:11", text: "Therefore loosing from Troas, we came with a straight course to Samothracia, and the next day to Neapolis." }
  ]
},

neapolis: {
  name: "Neapolis", modern: "Kavala, Greece", region: "Macedonia", lat: 40.9375, lng: 24.4129, tier: "stop",
  dates: "c. AD 49; again AD 57",
  narrative: "The landing place in Europe — the port of Philippi, 16 km away on the Via Egnatia. Whatever weight one gives to 'first' European soil, this is where the Macedonian vision became footsteps.",
  greco: "A Thasian colony, and the harbour where Brutus and Cassius' fleet lay before the battle of Philippi in 42 BC. Its acropolis, Panagia, guarded the road; the Via Egnatia ran from here inland.",
  archaeology: "The Kamares aqueduct (Ottoman, on ancient lines), the sanctuary of Parthenos on the acropolis, and the Kavala Archaeological Museum's finds from Neapolis and Amphipolis. Traces of the Via Egnatia are visible between Kavala and Philippi.",
  people: ["Luke", "Silas", "Timothy"],
  epistles: [],
  scripture: [
    { ref: "Acts 16:11–12", text: "Therefore loosing from Troas, we came with a straight course to Samothracia, and the next day to Neapolis; And from thence to Philippi, which is the chief city of that part of Macedonia, and a colony: and we were in that city abiding certain days." }
  ]
},

philippi: {
  name: "Philippi", modern: "Filippoi, near Kavala, Greece", region: "Macedonia (Roman colony)", lat: 41.0136, lng: 24.2864, tier: "major",
  dates: "c. AD 49–50; revisited AD 56 and 57",
  narrative: "Here Paul met Lydia, a seller of purple from Thyatira, at a riverside place of prayer, and her household was baptized — the first named European convert. He cast a spirit of divination out of a slave girl whose owners lost income by it, was beaten with rods and jailed without trial, and after the midnight earthquake and the jailer's conversion he refused to leave quietly: 'they have beaten us openly uncondemned, being Romans.' Philippi remained his most affectionate and most generous church.",
  greco: "Founded by Philip II on Thracian gold-mining country, Philippi was made Colonia Iulia Augusta Philippensis after Octavian and Antony defeated Brutus and Cassius on its plain in 42 BC — the battle that ended the Republic. Settled with Italian veterans, intensely Roman and Latin-speaking, and proud of the ius Italicum. That colonial pride explains the magistrates' panic in Acts 16:38 and Paul's 'our conversation is in heaven' (Phil 3:20), a citizenship metaphor a colony would feel.",
  archaeology: "A UNESCO site: the forum with its tribunal (bema), the Via Egnatia paved through the city, the theatre of Philip II, Roman baths, the 'prison of Paul' (a Roman cistern venerated from the 4th century), Basilicas A and B, the octagonal church, and rock-cut reliefs of Diana/Bendis on the acropolis. The Gangites (Zygaktis) river where Lydia was baptized runs 1.5 km west.",
  people: ["Lydia", "the Philippian jailer and his household", "the slave girl with a spirit of divination", "Euodias and Syntyche (Phil 4:2)", "Clement", "Epaphroditus", "Luke (likely left here)", "Silas", "Timothy"],
  epistles: ["Philippians is written to this church from prison; 2 Corinthians is likely written from Macedonia, probably here"],
  scripture: [
    { ref: "Acts 16:13", text: "And on the sabbath we went out of the city by a river side, where prayer was wont to be made; and we sat down, and spake unto the women which resorted thither." },
    { ref: "Acts 16:14", text: "And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us: whose heart the Lord opened, that she attended unto the things which were spoken of Paul." },
    { ref: "Acts 16:25–26", text: "And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them. And suddenly there was a great earthquake, so that the foundations of the prison were shaken: and immediately all the doors were opened, and every one's bands were loosed." },
    { ref: "Acts 16:31", text: "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house." },
    { ref: "Acts 16:37", text: "But Paul said unto them, They have beaten us openly uncondemned, being Romans, and have cast us into prison; and now do they thrust us out privily? nay verily; but let them come themselves and fetch us out." },
    { ref: "Philippians 4:15", text: "Now ye Philippians know, that in the beginning of the gospel, when I departed from Macedonia, no church communicated with me as concerning giving and receiving, but ye only." }
  ]
},

amphipolis: {
  name: "Amphipolis", modern: "Amfipoli, Greece", region: "Macedonia", lat: 40.8214, lng: 23.8425, tier: "stop",
  dates: "c. AD 50 (passed through)",
  narrative: "A staging point on the Via Egnatia between Philippi and Thessalonica — Luke says they 'passed through', a day's march of some 50 km, unusually long, perhaps because Paul was moving away from trouble.",
  greco: "An Athenian colony on the Strymon, fought over by Athens and Sparta (Brasidas fell here in 422 BC), and the capital of one of the four Macedonian districts under Rome. Alexander's fleet was built here and his widow Roxane and son were imprisoned and killed at Amphipolis.",
  archaeology: "The colossal marble Lion of Amphipolis (4th century BC, re-erected 1937), the city walls and river bridge, gymnasium, Hellenistic houses, early Christian basilicas with mosaics, and 3 km away the Kasta Tomb (Amphipolis Tomb) with its caryatids and Persephone mosaic, excavated from 2012.",
  people: ["Silas", "Timothy"],
  epistles: [],
  scripture: [
    { ref: "Acts 17:1", text: "Now when they had passed through Amphipolis and Apollonia, they came to Thessalonica, where was a synagogue of the Jews." }
  ]
},

apollonia: {
  name: "Apollonia (Mygdonia)", modern: "near Nea Apollonia, Greece", region: "Macedonia", lat: 40.6167, lng: 23.45, tier: "stop",
  dates: "c. AD 50 (passed through)",
  narrative: "The second night's halt on the Via Egnatia march to Thessalonica. Not to be confused with Apollonia in Illyria; this was a modest road station in Mygdonia.",
  greco: "A small Macedonian town listed in the Roman road itineraries (the Antonine Itinerary and Peutinger Table) as a mansio on the Via Egnatia, roughly 45 km from both Amphipolis and Thessalonica.",
  archaeology: "Slight: the site near Lake Volvi has yielded Hellenistic and Roman remains and inscriptions; milestones of the Via Egnatia have been recovered in the district.",
  people: ["Silas", "Timothy"],
  epistles: [],
  scripture: [
    { ref: "Acts 17:1", text: "Now when they had passed through Amphipolis and Apollonia, they came to Thessalonica, where was a synagogue of the Jews." }
  ]
},

thessalonica: {
  name: "Thessalonica", modern: "Thessaloniki, Greece", region: "Macedonia (provincial capital)", lat: 40.6403, lng: 22.9439, tier: "major",
  dates: "c. AD 50, three sabbaths and probably longer",
  narrative: "Paul reasoned in the synagogue for three sabbaths 'out of the scriptures' that the Messiah must suffer and rise. Many Greeks and 'chief women' believed; the opposition dragged Jason before the city magistrates on a political charge — 'there is another king, one Jesus' — and Paul left by night for Berea. The letters he later wrote back are the earliest surviving Christian documents.",
  greco: "Founded by Cassander in 316 BC and named for his wife, Philip II's daughter. Free city status from 42 BC, capital of the province of Macedonia, and the largest port on the Via Egnatia. Luke calls its rulers 'politarchs' — an unusual title, effectively confined to Macedonia, and confirmed by over sixty inscriptions, most of them Macedonian and many from Thessalonica itself: one of the sharpest tests of his accuracy.",
  archaeology: "The Roman forum and its cryptoporticus, the Rotunda, the Palace of Galerius and the Arch of Galerius, sections of the Via Egnatia, the city walls, and the Archaeological Museum's inscriptions — including politarch texts. Under the Church of St Demetrios lie Roman baths.",
  people: ["Jason", "Aristarchus", "Secundus", "the 'chief women' who believed", "Silas", "Timothy"],
  epistles: ["1 and 2 Thessalonians, written from Corinth c. AD 50–51 — probably the oldest books of the New Testament"],
  scripture: [
    { ref: "Acts 17:2–3", text: "And Paul, as his manner was, went in unto them, and three sabbath days reasoned with them out of the scriptures, Opening and alleging, that Christ must needs have suffered, and risen again from the dead; and that this Jesus, whom I preach unto you, is Christ." },
    { ref: "Acts 17:6", text: "And when they found them not, they drew Jason and certain brethren unto the rulers of the city, crying, These that have turned the world upside down are come hither also." },
    { ref: "Acts 17:7", text: "Whom Jason hath received: and these all do contrary to the decrees of Caesar, saying that there is another king, one Jesus." },
    { ref: "1 Thessalonians 1:9", text: "For they themselves shew of us what manner of entering in we had unto you, and how ye turned to God from idols to serve the living and true God." },
    { ref: "1 Thessalonians 2:9", text: "For ye remember, brethren, our labour and travail: for labouring night and day, because we would not be chargeable unto any of you, we preached unto you the gospel of God." }
  ]
},

berea: {
  name: "Berea", modern: "Veria, Greece", region: "Macedonia", lat: 40.5236, lng: 22.2028, tier: "major",
  dates: "c. AD 50",
  narrative: "The gold standard of Bible study: the Bereans 'received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.' When the Thessalonian agitators followed him here too, the brethren escorted Paul to the coast and on to Athens, while Silas and Timothy stayed behind. Sopater of Berea later carried the collection.",
  greco: "An old Macedonian town off the Via Egnatia at the foot of Mount Bermion — Cicero calls it a quiet place out of the way (oppidum devium), which is exactly why Paul was sent there. It later held the provincial assembly and the imperial cult of Macedonia.",
  archaeology: "Roman and Hellenistic remains under the modern town, including a section of the Roman road and rich funerary sculpture in the Veria Archaeological Museum. Vergina (Aigai), with the royal Macedonian tombs including Philip II's, lies 12 km away.",
  people: ["Sopater of Berea (Acts 20:4)", "Silas", "Timothy"],
  epistles: [],
  scripture: [
    { ref: "Acts 17:10", text: "And the brethren immediately sent away Paul and Silas by night unto Berea: who coming thither went into the synagogue of the Jews." },
    { ref: "Acts 17:11", text: "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so." },
    { ref: "Acts 17:14", text: "And then immediately the brethren sent away Paul to go as it were to the sea: but Silas and Timotheus abode there still." }
  ]
},

athens: {
  name: "Athens", modern: "Athens, Greece", region: "Achaia", lat: 37.9715, lng: 23.7257, tier: "major",
  dates: "c. AD 50, a short stay while waiting for Silas and Timothy",
  narrative: "Paul walked the city, 'his spirit was stirred in him' at the idols, disputed daily in the agora, and was taken before the Areopagus to explain his 'new doctrine'. The speech quotes no Scripture and instead reasons from an altar 'TO THE UNKNOWN GOD' and from Greek poets to creation, providence, repentance and the resurrection — at which some mocked, some deferred, and Dionysius the Areopagite believed.",
  greco: "By Paul's day Athens was a revered university town rather than a power — a free city under Rome, its schools still teaching Stoicism (founded in the Painted Stoa on the agora) and Epicureanism (the Garden), the two schools Luke names in 17:18. Pausanias, writing a century later, says Athens surpassed all others in devotion to the gods; altars to unnamed or unknown deities are attested by Pausanias and Philostratus.",
  archaeology: "The Areopagus rock itself, with Acts 17 inscribed in Greek on a bronze plaque at its base; the Agora with the Stoa of Attalos, the Painted Stoa's foundations and the Temple of Hephaestus; the Acropolis; the Roman Agora and Tower of the Winds; the Temple of Olympian Zeus completed by Hadrian.",
  people: ["Dionysius the Areopagite", "Damaris", "Epicurean and Stoic philosophers"],
  epistles: ["1 Thessalonians 3:1 refers to being 'left at Athens alone'"],
  scripture: [
    { ref: "Acts 17:16", text: "Now while Paul waited for them at Athens, his spirit was stirred in him, when he saw the city wholly given to idolatry." },
    { ref: "Acts 17:21", text: "(For all the Athenians and strangers which were there spent their time in nothing else, but either to tell, or to hear some new thing.)" },
    { ref: "Acts 17:23", text: "For as I passed by, and beheld your devotions, I found an altar with this inscription, TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you." },
    { ref: "Acts 17:28", text: "For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring." },
    { ref: "Acts 17:32", text: "And when they heard of the resurrection of the dead, some mocked: and others said, We will hear thee again of this matter." }
  ]
},

corinth: {
  name: "Corinth", modern: "Ancient Corinth, Greece", region: "Achaia (provincial capital)", lat: 37.906, lng: 22.879, tier: "major",
  dates: "18 months, c. AD 50–52; three months again in AD 57 (Acts 20:3)",
  narrative: "Paul's longest stay so far. He lodged and worked with Aquila and Priscilla as a tentmaker, reasoned in the synagogue until opposition, then moved next door to the house of Justus; Crispus the synagogue ruler believed. Brought before the proconsul Gallio, he was dismissed — a de facto ruling that the movement fell under Judaism's legal protection. From here he wrote to Thessalonica; later, from Ephesus, he wrote back to Corinth repeatedly about its factions, lawsuits, marriage disputes, meat offered to idols and disorder at the Lord's table.",
  greco: "Destroyed by Rome in 146 BC and refounded by Julius Caesar in 44 BC as Colonia Laus Iulia Corinthiensis — a freedman colony, new-money and status-anxious, which colours every social problem in 1 Corinthians. It controlled the Isthmus and the diolkos over which ships were hauled, hosted the biennial Isthmian Games (Paul's athletic imagery in 1 Cor 9:24–27), and its Acrocorinth carried a temple of Aphrodite. The Gallio inscription from Delphi — a letter of Claudius dated by his 26th imperial acclamation — puts Gallio's proconsulship at c. AD 51–52, the anchor for the whole Pauline chronology.",
  archaeology: "The archaic Temple of Apollo, the forum and its bema — the very tribunal of Acts 18:12 — the Peirene fountain, the Erastus pavement inscription east of the theatre (an aedile named Erastus, often but not certainly identified with Rom 16:23), a lintel fragment reading 'synagogue of the Hebrews', the Asklepieion with its votive body parts, and at Isthmia the games sanctuary. Cenchreae's harbour lies 11 km east.",
  people: ["Aquila and Priscilla", "Titus Justus", "Crispus", "Sosthenes", "Gallio (proconsul)", "Erastus", "Stephanas", "Chloe", "Gaius", "Phebe (of Cenchreae)", "Silas", "Timothy", "Apollos (later)"],
  epistles: ["1 and 2 Thessalonians written here; 1 and 2 Corinthians written to this church; Romans written from here (or Cenchreae) on the third journey"],
  scripture: [
    { ref: "Acts 18:2–3", text: "And found a certain Jew named Aquila, born in Pontus, lately come from Italy, with his wife Priscilla; (because that Claudius had commanded all Jews to depart from Rome:) and came unto them. And because he was of the same craft, he abode with them, and wrought: for by their occupation they were tentmakers." },
    { ref: "Acts 18:9–10", text: "Then spake the Lord to Paul in the night by a vision, Be not afraid, but speak, and hold not thy peace: For I am with thee, and no man shall set on thee to hurt thee: for I have much people in this city." },
    { ref: "Acts 18:12", text: "And when Gallio was the deputy of Achaia, the Jews made insurrection with one accord against Paul, and brought him to the judgment seat." },
    { ref: "1 Corinthians 2:1–2", text: "And I, brethren, when I came to you, came not with excellency of speech or of wisdom, declaring unto you the testimony of God. For I determined not to know any thing among you, save Jesus Christ, and him crucified." },
    { ref: "1 Corinthians 9:24", text: "Know ye not that they which run in a race run all, but one receiveth the prize? So run, that ye may obtain." }
  ]
},

cenchreae: {
  name: "Cenchreae", modern: "Kechries, Greece", region: "Achaia", lat: 37.885, lng: 22.9878, tier: "stop",
  dates: "c. AD 52; again AD 57",
  narrative: "Corinth's eastern harbour, where Paul shaved his head for a vow before sailing to Syria. A church existed here with Phebe as its deaconess, whom Paul commends to the Romans as the probable carrier of that letter.",
  greco: "One of Corinth's two ports (Lechaion faced Italy, Cenchreae the Aegean), with temples of Aphrodite and Isis flanking the mole; Apuleius' Golden Ass sets its Isis initiation scene here.",
  archaeology: "The submerged harbour moles are visible in shallow water; excavation found the Isis sanctuary and a remarkable set of opus sectile glass panels, plus warehouses and an early Christian basilica.",
  people: ["Phebe", "Aquila and Priscilla"],
  epistles: ["Romans 16:1–2 commends Phebe of Cenchreae"],
  scripture: [
    { ref: "Acts 18:18", text: "And Paul after this tarried there yet a good while, and then took his leave of the brethren, and sailed thence into Syria, and with him Priscilla and Aquila; having shorn his head in Cenchrea: for he had a vow." },
    { ref: "Romans 16:1–2", text: "I commend unto you Phebe our sister, which is a servant of the church which is at Cenchrea: That ye receive her in the Lord, as becometh saints, and that ye assist her in whatsoever business she hath need of you." }
  ]
},

ephesus: {
  name: "Ephesus", modern: "Selçuk, İzmir Province, Türkiye", region: "Asia (provincial capital)", lat: 37.9395, lng: 27.3417, tier: "major",
  dates: "Brief visit AD 52; residence c. AD 53–56 (over two years)",
  narrative: "Paul's longest documented ministry. He reasoned three months in the synagogue, then two years daily in the school of Tyrannus, so that 'all they which dwelt in Asia heard the word'. Extraordinary miracles, the burning of magic books worth 50,000 pieces of silver, and finally the riot of the silversmiths — Demetrius rousing the guild over lost trade in Artemis shrines, the crowd filling the theatre for two hours crying 'Great is Diana of the Ephesians' until the town clerk dispersed them. From Ephesus Paul wrote to Corinth and probably suffered the affliction he calls fighting with beasts.",
  greco: "The greatest city of Roman Asia, seat of the proconsul, and guardian of the Artemision — one of the seven wonders, four times the size of the Parthenon, functioning also as a bank and asylum. The city held the title neokoros (temple-warden) of the imperial cult; Luke's 'temple-warden' and 'Asiarchs' and 'town clerk' (grammateus) are all attested Ephesian titles. Silver Artemis shrines of the kind Demetrius sold are described by Roman writers and appear in inscriptions of the silversmiths' guild.",
  archaeology: "Among the best-preserved ancient cities: the Great Theatre (c. 24,000 seats — the riot's setting), the Library of Celsus, the Curetes Street, the terrace houses with wall painting, the Temple of Hadrian, the commercial agora, the stadium, and the single re-erected column of the Artemision. Inscriptions of the silversmiths and of the Asiarchs are in the Ephesus and İzmir museums.",
  people: ["Aquila and Priscilla", "Apollos", "Tyrannus", "Demetrius the silversmith", "the seven sons of Sceva's exorcism episode", "Gaius and Aristarchus", "Alexander the coppersmith (2 Tim 4:14)", "Timothy (left in charge, 1 Tim 1:3)", "Tychicus", "Trophimus"],
  epistles: ["1 Corinthians written from here; Ephesians written to this church (likely from Roman imprisonment); 1 and 2 Timothy concern its oversight; Revelation 2:1–7 addresses it"],
  scripture: [
    { ref: "Acts 19:9–10", text: "But when divers were hardened, and believed not, but spake evil of that way before the multitude, he departed from them, and separated the disciples, disputing daily in the school of one Tyrannus. And this continued by the space of two years." },
    { ref: "Acts 19:19", text: "Many of them also which used curious arts brought their books together, and burned them before all men: and they counted the price of them, and found it fifty thousand pieces of silver." },
    { ref: "Acts 19:24", text: "For a certain man named Demetrius, a silversmith, which made silver shrines for Diana, brought no small gain unto the craftsmen." },
    { ref: "Acts 19:34", text: "But when they knew that he was a Jew, all with one voice about the space of two hours cried out, Great is Diana of the Ephesians." },
    { ref: "1 Corinthians 15:32", text: "If after the manner of men I have fought with beasts at Ephesus, what advantageth it me, if the dead rise not?" },
    { ref: "1 Corinthians 16:9", text: "For a great door and effectual is opened unto me, and there are many adversaries." }
  ]
},

caesarea: {
  name: "Caesarea Maritima", modern: "Caesarea, Israel", region: "Judea (Roman administrative capital)", lat: 32.5, lng: 34.892, tier: "major",
  dates: "Transit AD 37, 52, 57; imprisoned here c. AD 57–59 (two years)",
  narrative: "Paul passed through repeatedly, stayed with Philip the evangelist where Agabus bound his hands with Paul's girdle in prophecy, and after his arrest spent two years imprisoned in Herod's praetorium. Here he was tried before Felix, then Festus, defended himself before Agrippa II and Bernice — 'almost thou persuadest me to be a Christian' — and appealed to Caesar, which sent him to Rome.",
  greco: "Herod the Great's masterpiece, built 22–10 BC on a harbourless coast with hydraulic concrete moles enclosing Sebastos, one of the largest artificial harbours of antiquity. Capital of the Roman province, garrison of the auxiliary cohorts, and the city where the revolt of AD 66 began. The Pilate inscription found in its theatre is the only epigraphic mention of Pontius Pilate.",
  archaeology: "The theatre, the Herodian promontory palace (with a rock-cut pool) — a strong candidate for the praetorium where Paul was held — the hippodrome, the high-level aqueducts, the temple platform, the harbour works surveyed underwater, and the Pilate stone (in the Israel Museum).",
  people: ["Philip the evangelist and his four prophesying daughters", "Agabus", "Mnason", "Cornelius (earlier, Acts 10)", "Felix and Drusilla", "Porcius Festus", "Herod Agrippa II and Bernice", "Julius the centurion", "Luke and Aristarchus"],
  epistles: ["Some scholars place Ephesians, Philippians, Colossians and Philemon in this imprisonment rather than in Rome"],
  scripture: [
    { ref: "Acts 21:11", text: "And when he was come unto us, he took Paul's girdle, and bound his own hands and feet, and said, Thus saith the Holy Ghost, So shall the Jews at Jerusalem bind the man that owneth this girdle, and shall deliver him into the hands of the Gentiles." },
    { ref: "Acts 21:13", text: "Then Paul answered, What mean ye to weep and to break mine heart? for I am ready not to be bound only, but also to die at Jerusalem for the name of the Lord Jesus." },
    { ref: "Acts 24:27", text: "But after two years Porcius Festus came into Felix' room: and Felix, willing to shew the Jews a pleasure, left Paul bound." },
    { ref: "Acts 25:11", text: "For if I be an offender, or have committed any thing worthy of death, I refuse not to die: but if there be none of these things whereof these accuse me, no man may deliver me unto them. I appeal unto Caesar." },
    { ref: "Acts 26:28", text: "Then Agrippa said unto Paul, Almost thou persuadest me to be a Christian." }
  ]
}

});
