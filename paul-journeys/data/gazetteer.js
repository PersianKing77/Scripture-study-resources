/* Gazetteer apparatus: ancient name forms, identification confidence, elevation,
   ancient testimony (with citations), the site's later Christian history, and a
   Wikipedia title used to pull a photograph at runtime.
   type: "quote" = short verbatim quotation; "summary" = my précis of the cited passage. */
window.PAUL_GAZ = {

tarsus: { names: { greek: "Ταρσός", latin: "Tarsus", other: "Assyrian Tarzi" },
  confidence: { level: "secure", basis: "Continuously inhabited under the same name; the Gözlükule mound and the Roman street are in the modern city." },
  coord: "City centre, at the Roman cardo excavation.", elev: 25, wiki: "Tarsus,_Mersin",
  later: "A metropolitan see from the 4th century; Julian the Apostate was buried here. Now a Turkish city of c. 350,000 with a small church presence and a Roman-era street and 'St Paul's Well' as pilgrimage sites.",
  sources: [
    { who: "Strabo, Geography 14.5.13–14", type: "summary", text: "Strabo says the people of Tarsus were so devoted to philosophy and the whole round of education that they surpassed Athens and Alexandria — though the students were mostly locals, since few outsiders came." },
    { who: "Dio Chrysostom, Orations 33–34", type: "summary", text: "Two speeches deliver a withering assessment of Tarsian civic vanity and factional politics a generation after Paul." },
    { who: "Plutarch, Antony 26", type: "summary", text: "Cleopatra sailed up the Cydnus to Tarsus to meet Antony, on a barge with gilded stern and purple sails." }] },

jerusalem: { names: { greek: "Ἱεροσόλυμα", latin: "Hierosolyma", other: "Hebrew Yerushalayim; Aelia Capitolina after AD 135" },
  confidence: { level: "secure", basis: "Herodian temple platform, walls and streets excavated in situ." },
  coord: "Temple Mount.", elev: 754, wiki: "Jerusalem",
  later: "Levelled by Titus in AD 70 and refounded as a pagan colony in 135; a Christian city from Constantine, and continuously contested since. The Herodian retaining walls Paul knew still stand.",
  sources: [
    { who: "Josephus, Jewish War 5.184–247", type: "summary", text: "Josephus describes the temple, its courts and the barrier beyond which Gentiles could not pass on pain of death — the charge later laid against Paul." },
    { who: "The Soreg inscription (Istanbul Archaeological Museum)", type: "summary", text: "A Greek notice from the temple balustrade: no foreigner is to enter within the enclosure, and whoever is caught has himself to blame for his death. One complete tablet was found in 1871 (Istanbul Archaeological Museums) and a fragment later in Jerusalem — the only surviving physical words of the barrier at the centre of Paul's arrest." },
    { who: "Josephus, Antiquities 20.169–172", type: "summary", text: "An Egyptian 'false prophet' led thousands into the desert and was crushed by Felix — the man the tribune mistakes Paul for in Acts 21:38." }] },

damascus: { names: { greek: "Δαμασκός", latin: "Damascus", other: "Aramaic Dammasq" },
  confidence: { level: "secure", basis: "Living city; the Via Recta survives as the line of the souq." },
  coord: "Old city, near the eastern gate.", elev: 680, wiki: "Damascus",
  later: "A great Christian city until the Arab conquest of 634; the cathedral of St John became the Umayyad Mosque. The Chapel of St Paul at Bab Kisan marks the traditional escape.",
  sources: [
    { who: "Josephus, Jewish War 2.561", type: "summary", text: "Josephus reports the killing of thousands of Jews at Damascus at the outbreak of the revolt, and says many Damascene women were adherents of Judaism — a measure of the community Paul went to police." },
    { who: "Nabataean coinage of Aretas IV", type: "summary", text: "Aretas IV Philopatris reigned 9 BC to c. AD 40; his officer's watch on Damascus (2 Cor 11:32) therefore dates Paul's escape to the late 30s." }] },

antioch: { names: { greek: "Ἀντιόχεια ἐπὶ Ὀρόντου", latin: "Antiochia ad Orontem", other: "Turkish Antakya" },
  confidence: { level: "secure", basis: "Site continuous; the Roman city lies under alluvium and the modern town." },
  coord: "Old town below Mount Silpius.", elev: 85, wiki: "Antioch",
  later: "One of the five patriarchates; birthplace of Antiochene exegesis and of John Chrysostom. Repeated earthquakes (526, 528, 1872, 2023) have flattened it again and again; the mosaics survive in the Hatay museum.",
  sources: [
    { who: "Josephus, Jewish War 7.43–45", type: "summary", text: "Josephus calls Antioch third among the cities of the Roman world and says its Jewish community was large and had been granted citizen rights by the Seleucid kings." },
    { who: "Libanius, Oration 11 (Antiochikos)", type: "summary", text: "A 4th-century native's tour of the colonnaded main street, the porticoes and the suburb of Daphne — the fullest description of the city's plan." },
    { who: "Juvenal, Satires 3.62", type: "summary", text: "Juvenal sneers that the Syrian Orontes has poured itself into Rome — a Roman's view of Antiochene influence." }] },

paphos: { names: { greek: "Νέα Πάφος", latin: "Paphus", other: "Old Paphos = Palaepaphos/Kouklia" },
  confidence: { level: "secure", basis: "Excavated Roman capital; proconsular seat attested epigraphically." },
  coord: "Kato Paphos archaeological park.", elev: 15, wiki: "Paphos",
  later: "An early bishopric; the 'St Paul's Pillar' tradition is late. Modern Paphos is a UNESCO World Heritage site and a resort town.",
  sources: [
    { who: "Cypriot inscriptions naming the anthypatos", type: "summary", text: "Cyprus became a senatorial province in 22 BC, governed by a proconsul — the exact title Luke gives Sergius Paulus, and one that would have been wrong for most of the previous century." },
    { who: "Tacitus, Histories 2.2–3", type: "summary", text: "Titus turned aside to consult the oracle of Venus at Paphos about his voyage and his prospects — the sanctuary's standing in the Roman imagination." },
    { who: "Pliny, Natural History 5.35", type: "summary", text: "Pliny lists Paphos among the principal cities of Cyprus and notes the earthquakes that repeatedly levelled it." }] },

antiochPisidia: { names: { greek: "Ἀντιόχεια πρὸς Πισιδίᾳ", latin: "Colonia Caesarea Antiochia" },
  confidence: { level: "secure", basis: "Identified at Yalvaç by inscriptions of the colony, including the Latin Res Gestae." },
  coord: "Excavated site 1 km north-east of Yalvaç.", elev: 1150, wiki: "Antioch_of_Pisidia",
  later: "A metropolitan see; two large basilicas were built over the city. Abandoned by the Middle Ages — which is why the Roman plan survives so legibly.",
  sources: [
    { who: "Res Gestae Divi Augusti (Antioch copy)", type: "summary", text: "Ramsay found Latin fragments of Augustus' own account of his reign here in 1914 — one of only three known copies, all from Galatia (Ankara has the near-complete bilingual text; Apollonia a Greek version). Evidence of how thoroughly Roman this Anatolian colony was; the fragments are in the Yalvaç museum." },
    { who: "Strabo, Geography 12.8.14", type: "summary", text: "Strabo notes Antioch as a colony of Magnesians near Pisidia, held by a Roman garrison in his own day." }] },

iconium: { names: { greek: "Ἰκόνιον", latin: "Claudiconium", other: "Turkish Konya" },
  confidence: { level: "secure", basis: "Continuous name and site; colonial inscriptions from the mound." },
  coord: "Alâeddin Hill, central Konya.", elev: 1027, wiki: "Konya",
  later: "Home of the 2nd-century Acts of Paul and Thecla, set here. Later the Seljuk capital and the city of Rumi; the Roman town is almost entirely built over.",
  sources: [
    { who: "Xenophon, Anabasis 1.2.19", type: "summary", text: "Xenophon calls Iconium the last city of Phrygia — the frontier that makes Luke's note about Lycaonian speech at Lystra meaningful." },
    { who: "Acts of Paul and Thecla (2nd century, apocryphal)", type: "summary", text: "A romance, not history — but it preserves the memory of Paul's preaching at Iconium and gives the earliest physical description of him: short, bald, bandy-legged, with meeting eyebrows." }] },

lystra: { names: { greek: "Λύστρα", latin: "Colonia Iulia Felix Gemina Lustra" },
  confidence: { level: "probable", basis: "Fixed at the Zoldera mound near Hatunsaray by Sterrett in 1885, on a Latin statue base naming Colonia Iulia Felix Gemina Lustra. The site is unexcavated, so the identification still rests on that stone and on survey topography." },
  coord: "Zoldera mound, c. 1.5 km north of Hatunsaray, c. 38 km south-south-west of Konya.", elev: 1150, wiki: "Lystra",
  later: "Timothy's home town; a bishopric into the Byzantine period, then deserted. Today ploughed fields and a mound.",
  sources: [
    { who: "Ovid, Metamorphoses 8.611–724", type: "summary", text: "Ovid tells the Phrygian legend of Jupiter and Mercury travelling unrecognised in this region and finding hospitality only with Baucis and Philemon, who were rewarded while their neighbours were drowned. The crowd's reaction in Acts 14 is that story, played out." },
    { who: "The Lystra colony inscription (Konya Museum)", type: "summary", text: "The statue base found by Sterrett in 1885 — the colony of Iulia Felix Gemina Lustra dedicating a statue of the deified Augustus by decree of the decurions — fixed the site; it is now in the Konya Archaeological Museum. A separate local dedication to Zeus and Hermes together came from the same district." }] },

derbe: { names: { greek: "Δέρβη", latin: "Claudioderbe" },
  confidence: { level: "probable", basis: "Michael Ballance found a dedication of AD 157 by the council and people of Claudioderbe at Kerti Höyük in 1956, and the mound is now the favoured site; the identification is still argued (Ballance himself later preferred Devri Şehri, 7 km south), and the mound is unexcavated." },
  coord: "Kerti Höyük, c. 25 km north-north-east of Karaman.", elev: 1000, wiki: "Derbe",
  later: "A bishopric of Lycaonia; the mound is unexcavated farmland today.",
  sources: [
    { who: "Strabo, Geography 12.6.3", type: "summary", text: "Strabo places Derbe on the flanks of the Isaurian country and records that the local dynast Antipater Derbetes held it before Rome took it over." },
    { who: "The Derbe council inscription (Karaman Museum)", type: "summary", text: "A dedication to Antoninus Pius by the boule and demos of Claudioderbe, found on the mound in 1956 and now in the Konya museum — the stone that moved Derbe on the map by some 100 km. Published as Ballance, 'The Site of Derbe: A New Inscription', Anatolian Studies 7 (1957)." }] },

troas: { names: { greek: "Ἀλεξάνδρεια Τρωάς", latin: "Colonia Augusta Troadensium" },
  confidence: { level: "secure", basis: "Large visible ruin field at Dalyan; identified by inscriptions and by the itineraries." },
  coord: "Coastal site south of Dalyan village.", elev: 25, wiki: "Alexandria_Troas",
  later: "A bishopric; Ignatius of Antioch wrote three letters from here c. AD 110 on his way to martyrdom in Rome. Long deserted, its stone quarried for Ottoman Istanbul.",
  sources: [
    { who: "Strabo, Geography 13.1.26", type: "summary", text: "Strabo calls it one of the notable cities of the Troad, with a good harbour and a large territory." },
    { who: "Suetonius, Julius 79; Zosimus 2.30", type: "summary", text: "Both report that a Roman ruler — Caesar in one account, Constantine in the other — considered making Troas an imperial capital before choosing elsewhere." },
    { who: "Ignatius, To the Philadelphians / Smyrnaeans / Polycarp", type: "summary", text: "Written from Troas c. AD 110, showing an established church there two generations after Paul's midnight sermon." }] },

philippi: { names: { greek: "Φίλιπποι", latin: "Colonia Iulia Augusta Philippensis" },
  confidence: { level: "secure", basis: "Excavated since 1914; forum, Via Egnatia and inscriptions in situ. UNESCO listed." },
  coord: "Archaeological site at Filippoi, 16 km north-west of Kavala.", elev: 100, wiki: "Philippi",
  later: "A major early see with four basilicas and an octagonal cathedral; Polycarp wrote to this church c. AD 110. Destroyed by earthquake and abandoned after the 14th century.",
  sources: [
    { who: "Appian, Civil Wars 4.105–138", type: "summary", text: "Appian's account of the battle of 42 BC on the plain below the city — the event that made Philippi a veteran colony and gave it its Roman self-consciousness." },
    { who: "Latin inscriptions of the colony (Philippi corpus)", type: "summary", text: "The city's public epigraphy is overwhelmingly Latin, and names duumviri and lictors — the 'magistrates' and 'serjeants' of Acts 16:20–35, in the right titles for a colony." },
    { who: "Polycarp, To the Philippians", type: "summary", text: "Written c. AD 110–135, it quotes Paul's letter and says he wrote to them 'letters' — plural — a detail scholars still argue over." }] },

thessalonica: { names: { greek: "Θεσσαλονίκη", latin: "Thessalonica" },
  confidence: { level: "secure", basis: "Living city; forum and Via Egnatia excavated, politarch inscriptions recovered." },
  coord: "Ancient forum, central Thessaloniki.", elev: 20, wiki: "Thessaloniki",
  later: "The second city of Byzantium, 'the orthodox city', with a continuous Christian community to the present; its Roman forum sits under the modern centre.",
  sources: [
    { who: "Politarch inscriptions (Thessaloniki and Macedonia)", type: "summary", text: "Over sixty known inscriptions use the title politarches, about three-quarters of them Macedonian and many from Thessalonica itself — including a text from the Vardar Gate, now in the British Museum, listing the city's politarchs. The title is almost unknown in literary sources, and Luke's use of it in Acts 17:6 was once cited as an error; the epigraphy settled it. (G. H. R. Horsley, 'The Politarchs', in The Book of Acts in Its First Century Setting, vol. 2.)" },
    { who: "Strabo, Geography 7, fragments 21–24", type: "summary", text: "Strabo notes Thessalonica as the most populous city of Macedonia and the seat of its Roman administration." },
    { who: "Cicero, Against Piso; Letters to Atticus 3", type: "summary", text: "Cicero spent his exile of 58 BC here and describes the city as the crossroads of the province." }] },

berea: { names: { greek: "Βέροια", latin: "Beroea", other: "Modern Veria" },
  confidence: { level: "secure", basis: "Continuous city with Roman remains and inscriptions." },
  coord: "Modern Veria, at the foot of Mount Bermion.", elev: 200, wiki: "Veria",
  later: "An early bishopric; a Jewish quarter survived in Veria into the 20th century, and the traditional 'bema of Paul' stands in the old town.",
  sources: [
    { who: "Cicero, Against Piso 36", type: "summary", text: "Cicero calls Beroea an out-of-the-way town (oppidum devium) — which is precisely why the Thessalonian brethren sent Paul there." },
    { who: "Macedonian provincial inscriptions", type: "summary", text: "Beroea later hosted the assembly of the Macedonian koinon and the provincial imperial cult, so its Jewish and Gentile elite were well connected." }] },

athens: { names: { greek: "Ἀθῆναι", latin: "Athenae" },
  confidence: { level: "secure", basis: "The Areopagus, Agora and Stoa sites are excavated and identified." },
  coord: "The Areopagus rock, west of the Acropolis.", elev: 115, wiki: "Athens",
  later: "The philosophical schools continued until Justinian closed them in AD 529; Christianity came late and slowly here. Acts 17 is inscribed on bronze at the foot of the Areopagus.",
  sources: [
    { who: "Pausanias, Description of Greece 1.1.4; 1.17", type: "summary", text: "Pausanias, touring c. AD 150, mentions altars of 'unknown gods' at Phaleron and describes an Athens crowded with sacred objects — the visual overload Acts 17:16 reacts to." },
    { who: "Diogenes Laertius, Lives 1.110", type: "summary", text: "Records the tradition that Epimenides the Cretan ended a plague at Athens by sacrificing on unnamed altars to whatever god was responsible — the likely background to 'TO THE UNKNOWN GOD'." },
    { who: "Aratus, Phaenomena 5; Epimenides (via Cretica)", type: "quote", text: "'For we are also his offspring' is a line of Aratus, a poet of Paul's own province of Cilicia; the preceding clause, 'in him we live, and move, and have our being', is generally traced to Epimenides the Cretan — the same poet Paul quotes in Titus 1:12." }] },

corinth: { names: { greek: "Κόρινθος", latin: "Colonia Laus Iulia Corinthiensis" },
  confidence: { level: "secure", basis: "Excavated since 1896; the forum bema, synagogue lintel and Erastus pavement are on site." },
  coord: "Ancient Corinth archaeological site, below Acrocorinth.", elev: 90, wiki: "Ancient_Corinth",
  later: "1 Clement was written to this church c. AD 96 — the earliest Christian letter after the New Testament. The city was destroyed by earthquake in 521 and 551 and never fully recovered.",
  sources: [
    { who: "The Gallio inscription (Delphi, SIG² 801d)", type: "summary", text: "Nine fragments of a letter of Claudius, found at Delphi, name 'Lucius Junius Gallio, my friend, and proconsul of Achaia' (his full name after adoption was Gallio Annaeanus; he was Seneca's brother). The emperor's 26th acclamation as imperator dates the letter to the first half of AD 52, and since proconsuls served one year from early summer, Gallio held Achaia c. mid-51 to mid-52. It is the keystone of Pauline chronology — though the text is fragmentary and reconstructed, and a minority date the term 52–53." },
    { who: "Strabo, Geography 8.6.20–23", type: "summary", text: "Strabo describes the two harbours, the hauling of ships across the Isthmus, and the wealth that came of controlling the crossing." },
    { who: "The Erastus pavement (Corinth, in situ)", type: "quote", text: "ERASTVS PRO AED S P STRAVIT — 'Erastus, in return for his aedileship, laid this pavement at his own expense.' A Latin inscription cut into a limestone paving slab east of the theatre, found in situ in 1929 and dated to the mid-first century. Whether this aedile is Paul's Erastus is disputed: Romans 16:23 calls him oikonomos (steward or treasurer), not aedile, though the offices overlap and the name is uncommon here." },
    { who: "1 Clement 47", type: "summary", text: "Writing c. AD 96, Clement of Rome tells the Corinthians to take up Paul's letter again — factions had returned to the same church, forty years on." }] },

ephesus: { names: { greek: "Ἔφεσος", latin: "Ephesus" },
  confidence: { level: "secure", basis: "One of the most thoroughly excavated cities of antiquity; the theatre, Artemision and guild inscriptions are all identified." },
  coord: "Ephesus archaeological site near Selçuk.", elev: 25, wiki: "Ephesus",
  later: "Site of the Third Ecumenical Council (AD 431) and of the traditional tomb of John; the harbour silted, the population moved to Selçuk, and the city was abandoned. UNESCO listed.",
  sources: [
    { who: "Strabo, Geography 14.1.20–24", type: "summary", text: "Strabo describes the Artemision's right of asylum, its treasury function, and the city as the greatest emporium of Asia west of the Taurus." },
    { who: "Pliny, Natural History 36.95–97", type: "summary", text: "Pliny gives the temple's dimensions and its 127 columns, and calls it the most wonderful monument of Greek magnificence." },
    { who: "Ephesian inscriptions of the neopoioi and the silversmiths' guild", type: "summary", text: "Epigraphy attests both the temple-wardens and an organised guild of silversmiths, and names the grammateus (town clerk) and the Asiarchs — every civic title in Acts 19 is correct for Ephesus." },
    { who: "Xenophon of Ephesus; the 'Ephesian letters' magical texts", type: "summary", text: "Ephesus was a byword for magical formulae (Ephesia grammata), which is the trade whose books were burned in Acts 19:19." }] },

miletus: { names: { greek: "Μίλητος", latin: "Miletus" },
  confidence: { level: "secure", basis: "Excavated site; the theatre inscription reserving seats for God-fearing Jews is in situ." },
  coord: "Balat, Aydın Province, now 8 km inland.", elev: 10, wiki: "Miletus",
  later: "A bishopric, then abandoned as the Maeander silted its harbours; the theatre and the Ilyas Bey mosque stand in marshland.",
  sources: [
    { who: "The Miletus theatre inscription", type: "quote", text: "'Place of the Jews, who are also called God-fearing' (topos Eioudeon ton kai Theosebion) — cut into the fifth row of the theatre's seating, and 2nd-century, so a generation or more after Paul. The reading is debated: it may name one group, or reserve seats for Jews and, separately, for Gentile God-fearers. Either way it attests an organised Jewish community with Gentile sympathisers." },
    { who: "Herodotus 1.142–146; Strabo 14.1.6", type: "summary", text: "Miletus, mother of ninety colonies and cradle of Ionian philosophy, had four harbours; by the Roman period silting had begun to close them." }] },

caesarea: { names: { greek: "Καισάρεια", latin: "Caesarea Maritima", other: "Harbour: Sebastos" },
  confidence: { level: "secure", basis: "Excavated on a large scale; the theatre, palace, harbour works and the Pilate inscription are all from the site." },
  coord: "Caesarea National Park promontory.", elev: 5, wiki: "Caesarea_Maritima",
  later: "Home of Origen's library and of Eusebius, the first church historian, whose account of Paul's death is our earliest connected one. Destroyed in 1265 and left as ruins.",
  sources: [
    { who: "Josephus, Antiquities 15.331–341; War 1.408–415", type: "summary", text: "Josephus describes Herod's harbour built with hydraulic concrete sunk in 20 fathoms, the temple to Rome and Augustus, the theatre and the sewers flushed by the sea." },
    { who: "The Pilate inscription (Israel Museum)", type: "summary", text: "A dedication naming Pontius Pilate, prefect of Judea, reused in the theatre — the only inscription of the man, from the city that governed Paul's imprisonment." },
    { who: "Josephus, War 2.284–292", type: "summary", text: "The revolt of AD 66 began in Caesarea with a synagogue dispute — seven years after Paul sailed from its harbour." },
    { who: "Eusebius, Ecclesiastical History 2.22", type: "summary", text: "Eusebius reports the tradition that Paul was released after the Acts 28 imprisonment, travelled again, and was martyred at Rome in a second one under Nero." }] },

fairHavens: { names: { greek: "Καλοὶ Λιμένες", latin: "Boni Portus" },
  confidence: { level: "traditional", basis: "Kaloi Limenes carries the name, sits where Luke's narrative requires (east of Cape Matala, the last shelter under the lee of Crete), and is exposed exactly as he says; ruins nearby are identified with Lasea. No excavation ties the anchorage to the voyage, and the destination Phoenix is itself disputed between Loutro and the bay of Phineka." },
  coord: "Kaloi Limenes bay, south-central Crete.", elev: 5, wiki: "Kaloi_Limenes",
  later: "Never a town of consequence; a small anchorage and, today, an oil terminal and a handful of tavernas.",
  sources: [
    { who: "Vegetius, De Re Militari 4.39", type: "summary", text: "Vegetius sets the closed sea (mare clausum) from mid-November to March, with the shoulder seasons dangerous — the calendar behind Paul's warning in Acts 27:9–10." },
    { who: "Pliny, Natural History 2.122–128", type: "summary", text: "Pliny describes the sailing seasons and the etesian winds that made westward runs in late summer and autumn slow or impossible." },
    { who: "James Smith, The Voyage and Shipwreck of St Paul (1848)", type: "summary", text: "A yachtsman's technical study of Acts 27 which showed the seamanship, the drift rate and the landfall to be internally consistent — still the starting point for all discussion." }] },

malta: { names: { greek: "Μελίτη", latin: "Melita" },
  confidence: { level: "probable", basis: "Ancient and modern tradition, plus Luke's fourteen-day drift and soundings, fit Malta well; a rival case has been argued for Mljet (Melite Illyrica) in the Adriatic. St Paul's Bay is the traditional creek." },
  coord: "St Paul's Bay, northern Malta.", elev: 10, wiki: "Malta",
  later: "Christianity on Malta claims descent from this shipwreck; the island has been continuously Christian except under Arab rule, and the wreck is commemorated each 10 February as a national feast.",
  sources: [
    { who: "Maltese inscriptions naming the protos", type: "summary", text: "The title 'first man' — protos in Greek, primus in Latin — is attested for the leading official of the Maltese islands, notably in a Greek inscription from neighbouring Gaulos (Gozo), CIG 5754. Luke's word for Publius in Acts 28:7 is therefore the local official usage rather than a vague compliment, though no inscription names Publius himself." },
    { who: "Diodorus Siculus 5.12", type: "summary", text: "Diodorus describes Melita as a Phoenician colony with fine harbours and prosperous craftsmen — a Punic-speaking population, which is why Luke calls them 'barbarians' (non-Greek-speakers)." },
    { who: "Cicero, Verrine Orations 2.4.103–104", type: "summary", text: "Cicero mentions the temple of Juno on Melita, plundered by Verres, and the island's famous textiles." }] },

puteoli: { names: { greek: "Ποτίολοι", latin: "Puteoli", other: "Modern Pozzuoli" },
  confidence: { level: "secure", basis: "Excavated Roman town; amphitheatre and macellum standing." },
  coord: "Pozzuoli, Bay of Naples.", elev: 20, wiki: "Pozzuoli",
  later: "A Christian community from the 1st century; its 'Temple of Serapis' became the classic geological demonstration of ground movement. Still a working port town.",
  sources: [
    { who: "Seneca, Letters 77.1–2", type: "summary", text: "Seneca describes all Puteoli crowding the quays to watch the Alexandrian mail ships come in — the same grain fleet on which Paul arrived." },
    { who: "Strabo, Geography 17.1.7", type: "summary", text: "Strabo notes that the Alexandria–Puteoli run was the busiest of the Mediterranean grain routes." },
    { who: "Josephus, Antiquities 17.328; Life 16", type: "summary", text: "Josephus himself landed at Puteoli after a shipwreck on his way to Rome — an unnervingly close parallel to Acts 27–28." }] },

rome: { names: { greek: "Ῥώμη", latin: "Roma" },
  confidence: { level: "secure", basis: "The city; the traditional martyrdom and burial sites are attested from the 2nd century." },
  coord: "The Forum.", elev: 21, wiki: "Rome",
  later: "The tomb beneath St Paul Outside the Walls has been venerated since at least the 4th century; a sarcophagus there is inscribed PAULO APOSTOLO MART. The claim of Peter's and Paul's Roman deaths is the earliest and best-attested element of the tradition.",
  sources: [
    { who: "Tacitus, Annals 15.44", type: "summary", text: "Tacitus reports that after the fire of AD 64 Nero fastened the guilt on the Christians, 'a class hated for their abominations', and describes their punishment — crucifixions, beasts, and living torches." },
    { who: "Suetonius, Claudius 25", type: "summary", text: "Claudius expelled the Jews from Rome over disturbances about 'Chrestus' — the edict that brought Aquila and Priscilla to Corinth (Acts 18:2)." },
    { who: "1 Clement 5", type: "summary", text: "Writing c. AD 96 from Rome, Clement says Paul preached in the east and the west, reached 'the limit of the west', and bore witness before the rulers before departing to the holy place." },
    { who: "Eusebius, Ecclesiastical History 2.25", type: "summary", text: "Quotes Gaius (c. AD 200) on the trophies of Peter at the Vatican and Paul on the Ostian Way — the burial traditions that led to both basilicas." }] },

crete: { names: { greek: "Γόρτυν", latin: "Gortyna", other: "Province: Creta et Cyrenae" },
  confidence: { level: "secure", basis: "Gortyn excavated, including the governor's praetorium and the Law Code." },
  coord: "Gortyna, Messara plain.", elev: 120, wiki: "Gortyn",
  later: "St Titus' basilica at Gortyn survives in part; the city fell to the Arabs in 828 and was abandoned.",
  sources: [
    { who: "The Gortyn Law Code", type: "summary", text: "A 5th-century BC legal inscription of some 600 lines, the longest surviving Greek law text, still standing in the odeon wall where Roman builders reused it." },
    { who: "Epimenides of Knossos, via Callimachus and Titus 1:12", type: "quote", text: "'The Cretans are always liars' — a line ancient writers attributed to the Cretan seer Epimenides, quoted by Paul against Cretans themselves." }] },

colossae: { names: { greek: "Κολοσσαί", latin: "Colossae" },
  confidence: { level: "probable", basis: "The twin mounds near Honaz are accepted as Colossae on topographic and survey grounds; the site is unexcavated." },
  coord: "Mounds 3 km north of Honaz.", elev: 300, wiki: "Colossae",
  later: "Eclipsed by Laodicea and largely gone by the Byzantine period; Chonai (Honaz) inherited its population. The least excavated New Testament city of any importance.",
  sources: [
    { who: "Xenophon, Anabasis 1.2.6", type: "summary", text: "Xenophon calls Colossae a populous, prosperous and great city — in 401 BC. By Paul's day Strabo lists it as a small town." },
    { who: "Strabo, Geography 12.8.16", type: "summary", text: "Strabo names Colossae among the small towns of the Lycus valley, and notes the local wool dye that gave 'colossinus' its name." },
    { who: "Tacitus, Annals 14.27; Eusebius, Chronicle", type: "summary", text: "An earthquake devastated the Lycus valley c. AD 60; Laodicea rebuilt itself without imperial help, and Colossae never recovered." }] },

patara: { names: { greek: "Πάταρα", latin: "Patara" },
  confidence: { level: "secure", basis: "Excavated; the Lycian League council house and the Stadiasmus road register are on site." },
  coord: "Gelemiş, Antalya Province.", elev: 5, wiki: "Patara_(Lycia)",
  later: "Birthplace of St Nicholas of Myra; a bishopric until the harbour silted and the town was abandoned to the dunes.",
  sources: [
    { who: "Stadiasmus Patarensis", type: "summary", text: "A pillar some 6 m high, dedicated to Claudius in AD 45/46 and recording the roads laid out by Quintus Veranius, first governor of the new province of Lycia: around 65 routes and more than 50 place names with distances in stadia. It came to light in 1993 when an arson fire exposed the blocks, and now stands in the Antalya Museum — the most detailed Roman road register surviving from any province." },
    { who: "Herodotus 1.182; Strabo 14.3.2", type: "summary", text: "Both describe Patara's oracle of Apollo, ranked with Delphi's, and its harbour as the principal port of Lycia." }] },

tyre: { names: { greek: "Τύρος", latin: "Tyrus", other: "Phoenician Ṣor" },
  confidence: { level: "secure", basis: "Continuous city; UNESCO site with Roman hippodrome and colonnaded street." },
  coord: "Sour, southern Lebanon.", elev: 10, wiki: "Tyre,_Lebanon",
  later: "Origen died and was buried here; a great early see, and later a crusader cathedral city. Now a Lebanese port town over its own ruins.",
  sources: [
    { who: "Pliny, Natural History 9.125–141", type: "summary", text: "Pliny explains the murex purple industry — thousands of shells for a few grams of dye — which made Tyrian cloth an imperial monopoly and Lydia's trade at Philippi valuable." },
    { who: "Arrian, Anabasis 2.18–24", type: "summary", text: "Arrian describes Alexander's seven-month siege and the mole he built to reach the island — the causeway that permanently changed the coastline Paul's ship approached." }] },

myra: { names: { greek: "Μύρα", latin: "Myra", other: "Port: Andriake" },
  confidence: { level: "secure", basis: "Rock tombs, theatre and Hadrian's granary at the port are all in place." },
  coord: "Demre, with the harbour at Andriake 5 km south-west.", elev: 25, wiki: "Myra",
  later: "See of St Nicholas in the 4th century; his church at Demre became a major pilgrimage site, and the harbour silted into marsh.",
  sources: [
    { who: "Horrea Hadriani inscription, Andriake", type: "summary", text: "Hadrian's granary at Myra's port, still standing, is direct evidence that the Alexandrian grain fleet used this harbour — as Acts 27:6 requires." },
    { who: "Appian, Civil Wars 4.82", type: "summary", text: "Appian records Brutus forcing the harbour chain at Myra — a reminder that this was a serious port, not a village." }] }
};

/* Approximate elevation profiles for the significant land legs, sampled along the
   ancient road line (metres above sea level). Illustrative, not surveyed. */
window.PAUL_PROFILES = {
  "perga>antiochPisidia": { label: "Perga to Antioch of Pisidia, by the Via Sebaste", pts: [10, 180, 620, 1080, 900, 1250, 1010, 1150], note: "From the malarial coastal plain over the Pisidian Taurus — a climb of well over a kilometre in about 160 km, through the gorges of the Kestros. This is the road behind 'perils of robbers' and possibly behind Galatians 4:13." },
  "antiochPisidia>iconium": { label: "Antioch of Pisidia to Iconium", pts: [1150, 1200, 1080, 1010, 1040, 1027], note: "Plateau marching on the Via Sebaste, high and dry, with the Sultan mountains to the north." },
  "iconium>lystra": { label: "Iconium to Lystra", pts: [1027, 1090, 1160, 1150], note: "A day and a half across the Lycaonian plain." },
  "lystra>derbe": { label: "Lystra to Derbe", pts: [1150, 1100, 1030, 1000], note: "Eastward along the edge of the Isaurian hill country." },
  "antioch>cilicianGates": { label: "Antioch to the Cilician Gates", pts: [85, 40, 20, 25, 300, 700, 1050], note: "Along the coastal plain by Tarsus, then up the Gökoluk gorge to the pass at c. 1,050 m — the only practical road from Syria into Asia Minor." },
  "cilicianGates>derbe": { label: "The Cilician Gates to Derbe", pts: [1050, 1200, 1100, 1150, 1080, 1000], note: "Onto the Anatolian plateau and west across Lycaonia." },
  "antiochPisidia>troas": { label: "Antioch of Pisidia to Troas", pts: [1150, 900, 1050, 700, 400, 200, 80, 25], note: "Some 700 km north-west through Phrygia and Mysia, dropping steadily to the Aegean — four to six weeks of walking, with Bithynia closed to them." },
  "neapolis>philippi": { label: "Neapolis to Philippi", pts: [5, 120, 220, 100], note: "The Via Egnatia climbs the Symbolon ridge from the harbour and drops onto the Philippian plain." },
  "philippi>amphipolis": { label: "Philippi to Amphipolis", pts: [100, 60, 30, 20], note: "A long day's march of c. 50 km down the Egnatia to the Strymon crossing." },
  "athens>corinth": { label: "Athens to Corinth", pts: [115, 60, 30, 200, 120, 90], note: "The Skironian cliffs road round the Saronic gulf, notorious in antiquity for robbers." },
  "caesarea>jerusalem": { label: "Caesarea to Jerusalem", pts: [5, 40, 120, 400, 700, 754], note: "Up from the coast through Antipatris and the Judean hills — the night ride of Acts 23:31–32." },
  "appianWay>rome": { label: "The Three Taverns to Rome", pts: [30, 60, 90, 60, 21], note: "The last stage of the Via Appia over the Alban hills and down into the city." }
};
