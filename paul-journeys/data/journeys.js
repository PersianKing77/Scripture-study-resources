/* Itineraries. Each stop: place id, date label, Acts/epistle reference, travel mode into it,
   t = approximate decimal year (drives the timeline), and optional km override for known road/sea routes. */
window.PAUL_JOURNEYS = [
{
  id: "pre", name: "The Early Years", subtitle: "Tarsus to Antioch", years: "c. AD 5 – 45",
  color: "#d9b45c", acts: "Acts 7:58 – 11:26; Galatians 1:11–24",
  summary: "Birth and citizenship in Tarsus, rabbinic training in Jerusalem, the Damascus road, three years in Arabia, and a decade of obscurity in Cilicia before Barnabas fetched him to Antioch. Nearly thirty years of Paul's life are covered by a handful of verses.",
  stats: { duration: "c. 40 years", companions: "Barnabas (at the end)" },
  stops: [
    { place: "tarsus", date: "c. AD 5–10 — birth", ref: "Acts 22:3", mode: "none" },
    { place: "jerusalem", date: "c. AD 20s — study under Gamaliel; c. 34 — persecutor", ref: "Acts 7:58; 8:3", mode: "land" },
    { place: "damascus", date: "c. AD 33–34 — the road and the blindness", ref: "Acts 9:1–22", mode: "land", km: 220, note: "Roughly 220 km of road north through Galilee and the Hauran; 6–8 days on foot or horse. He was travelling under high-priestly commission." },
    { place: "arabia", date: "c. AD 34–36 — 'three years'", ref: "Galatians 1:17", mode: "land", note: "Nabataean territory reached by the King's Highway south of Damascus. Duration and purpose unrecorded." },
    { place: "damascus", date: "c. AD 36 — return, then escape by basket", ref: "2 Corinthians 11:32–33", mode: "land" },
    { place: "jerusalem", date: "c. AD 37 — fifteen days with Peter", ref: "Galatians 1:18; Acts 9:26", mode: "land" },
    { place: "caesarea", date: "c. AD 37 — sent away by the brethren", ref: "Acts 9:30", mode: "land" },
    { place: "tarsus", date: "c. AD 37–45 — the silent years", ref: "Acts 9:30; Galatians 1:21", mode: "sea" },
    { place: "antioch", date: "c. AD 45 — a whole year teaching with Barnabas", ref: "Acts 11:25–26", mode: "land" }
  ],
  timeline: [5, 22, 33.6, 34.5, 36.5, 37, 37.2, 38, 45]
},
{
  id: "j1", name: "First Journey", subtitle: "Cyprus and the Galatian highlands", years: "c. AD 46 – 48",
  color: "#b8651c", acts: "Acts 13:1 – 14:28",
  summary: "Commissioned by the church at Antioch, Barnabas and Saul crossed to Cyprus and then into the Anatolian interior. Somewhere in the middle of it Saul becomes Paul, the initiative passes to him, and the mission's pattern is set: synagogue first, then the Gentiles, then expulsion — and always a return visit to appoint elders.",
  stats: { duration: "c. 2 years", companions: "Barnabas; John Mark (as far as Perga)" },
  stops: [
    { place: "antioch", date: "Spring AD 46 — sent with fasting and prayer", ref: "Acts 13:1–3", mode: "none" },
    { place: "seleucia", date: "AD 46 — embarkation", ref: "Acts 13:4", mode: "land", km: 30, note: "About 30 km down the Orontes valley to the sea; one day." },
    { place: "salamis", date: "AD 46 — preaching in the synagogues", ref: "Acts 13:5", mode: "sea", note: "Roughly 200 km of open water; 1–2 days with a fair wind. Cyprus was Barnabas' home." },
    { place: "paphos", date: "AD 46 — Elymas struck blind; Sergius Paulus believes", ref: "Acts 13:6–12", mode: "land", km: 150, note: "'Through the isle' — c. 150 km of Roman road across Cyprus, some 6 days, preaching en route." },
    { place: "perga", date: "AD 46 — John Mark turns back", ref: "Acts 13:13", mode: "sea", note: "c. 280 km north-west across the bay of Pamphylia, 2–3 days." },
    { place: "antiochPisidia", date: "AD 46–47 — the great synagogue sermon; 'we turn to the Gentiles'", ref: "Acts 13:14–52", mode: "land", km: 160, note: "A brutal climb of c. 160 km from sea level to 1,100 m through the Pisidian passes — bandit country Paul may mean by 'perils of robbers' (2 Cor 11:26). 8–10 days." },
    { place: "iconium", date: "AD 47 — long stay; plot to stone them", ref: "Acts 14:1–6", mode: "land", km: 145, note: "c. 145 km south-east on the Via Sebaste, the Augustan military road; 5–6 days." },
    { place: "lystra", date: "AD 47 — hailed as Zeus and Hermes, then stoned", ref: "Acts 14:8–19", mode: "land", km: 35, note: "c. 35 km along the Via Sebaste; a long day and a half." },
    { place: "derbe", date: "AD 47–48 — 'taught many'", ref: "Acts 14:20–21", mode: "land", km: 95, note: "c. 95 km east; 3–4 days, walked immediately after the stoning." },
    { place: "lystra", date: "AD 48 — return visit: 'confirming the souls of the disciples'", ref: "Acts 14:21–22", mode: "land" },
    { place: "iconium", date: "AD 48 — elders ordained with prayer and fasting", ref: "Acts 14:23", mode: "land" },
    { place: "antiochPisidia", date: "AD 48 — return visit", ref: "Acts 14:21", mode: "land" },
    { place: "perga", date: "AD 48 — preached the word here", ref: "Acts 14:25", mode: "land" },
    { place: "attalia", date: "AD 48 — embarkation for home", ref: "Acts 14:25", mode: "land", km: 25, note: "c. 25 km west along the coast plain." },
    { place: "antioch", date: "AD 48 — 'rehearsed all that God had done'", ref: "Acts 14:26–28", mode: "sea", note: "c. 550 km of coasting voyage; 5–8 days depending on wind." }
  ],
  timeline: [46.2, 46.3, 46.4, 46.6, 46.8, 47.0, 47.3, 47.5, 47.8, 48.0, 48.1, 48.2, 48.3, 48.4, 48.5]
},
{
  id: "council", name: "The Jerusalem Council", subtitle: "The circumcision question", years: "c. AD 49",
  color: "#6b7c93", acts: "Acts 15:1–35; Galatians 2:1–10",
  summary: "Not a mission but a hearing. Men from Judea taught the Antioch Gentiles that they must be circumcised; Paul and Barnabas were sent up to settle it. The Council's letter — abstain from idol-meat, blood, things strangled, and fornication, and no more — is the legal foundation of every Gentile church Paul plants afterwards, and he carries copies with him on the next journey.",
  stats: { duration: "months", companions: "Barnabas, Titus (Gal 2:1)" },
  stops: [
    { place: "antioch", date: "AD 49 — the dispute breaks out", ref: "Acts 15:1–2", mode: "none" },
    { place: "jerusalem", date: "AD 49 — the apostles and elders come together", ref: "Acts 15:6–29", mode: "land", km: 550, note: "c. 550 km down the coast road through Phoenicia and Samaria, 'declaring the conversion of the Gentiles' as they went (15:3); about three weeks." },
    { place: "antioch", date: "AD 49 — the letter read; Peter withstood to the face", ref: "Acts 15:30–35; Galatians 2:11–14", mode: "land" }
  ],
  timeline: [49.0, 49.2, 49.4]
},
{
  id: "j2", name: "Second Journey", subtitle: "Into Europe", years: "c. AD 49 – 52",
  color: "#2f6f6a", acts: "Acts 15:36 – 18:22",
  summary: "It begins with a quarrel — Barnabas wanted John Mark, Paul refused — and ends with churches in Macedonia and Achaia and the first Christian letters ever written. The route is decided as much by closed doors as open ones: forbidden Asia, forbidden Bithynia, then a vision at Troas.",
  stats: { duration: "c. 3 years", companions: "Silas, Timothy (from Lystra), Luke (from Troas)" },
  stops: [
    { place: "antioch", date: "AD 49 — the contention with Barnabas over Mark", ref: "Acts 15:36–40", mode: "none" },
    { place: "cilicianGates", date: "AD 49 — 'through Syria and Cilicia'", ref: "Acts 15:41", mode: "land", km: 240, note: "Overland by Tarsus and the Taurus gorge instead of by sea — c. 240 km to the pass, then the highland plateau." },
    { place: "derbe", date: "AD 49 — revisit", ref: "Acts 16:1", mode: "land", km: 200 },
    { place: "lystra", date: "AD 49 — Timothy joins and is circumcised", ref: "Acts 16:1–3", mode: "land", km: 95 },
    { place: "iconium", date: "AD 49 — delivering the Council's decrees", ref: "Acts 16:4–5", mode: "land", km: 35 },
    { place: "antiochPisidia", date: "AD 49–50 — then forbidden to preach in Asia", ref: "Acts 16:6", mode: "land", km: 145 },
    { place: "troas", date: "AD 50 — the vision of the man of Macedonia", ref: "Acts 16:7–10", mode: "land", km: 700, note: "A long march of some 700 km north-west through Phrygia and Mysia, skirting Bithynia; four to six weeks. Luke's narrative turns to 'we' here." },
    { place: "samothrace", date: "AD 50 — one night at anchor", ref: "Acts 16:11", mode: "sea", note: "c. 110 km with a fair wind; 'a straight course'." },
    { place: "neapolis", date: "AD 50 — landing in Europe", ref: "Acts 16:11", mode: "sea", km: 110 },
    { place: "philippi", date: "AD 50 — Lydia; the jailer; beaten as a Roman uncondemned", ref: "Acts 16:12–40", mode: "land", km: 16, note: "16 km inland on the Via Egnatia." },
    { place: "amphipolis", date: "AD 50 — passed through", ref: "Acts 17:1", mode: "land", km: 50, note: "A long day's march on the Via Egnatia." },
    { place: "apollonia", date: "AD 50 — passed through", ref: "Acts 17:1", mode: "land", km: 45 },
    { place: "thessalonica", date: "AD 50 — three sabbaths in the synagogue; 'another king, one Jesus'", ref: "Acts 17:1–9", mode: "land", km: 60 },
    { place: "berea", date: "AD 50 — the Bereans search the scriptures daily", ref: "Acts 17:10–14", mode: "land", km: 80, note: "Sent away by night, c. 80 km west off the main road." },
    { place: "athens", date: "AD 50 — the Areopagus address", ref: "Acts 17:15–34", mode: "sea", km: 500, note: "Escorted 'as it were to the sea' and shipped south — c. 500 km, several days; Silas and Timothy stayed behind." },
    { place: "corinth", date: "AD 50–52 — eighteen months; Gallio's tribunal", ref: "Acts 18:1–17", mode: "land", km: 80, note: "c. 80 km west by road across the Isthmus, or a short coasting hop." },
    { place: "cenchreae", date: "AD 52 — head shaved for a vow", ref: "Acts 18:18", mode: "land", km: 11 },
    { place: "ephesus", date: "AD 52 — a brief visit; Aquila and Priscilla left there", ref: "Acts 18:19–21", mode: "sea", note: "c. 400 km across the Aegean; 3–5 days." },
    { place: "caesarea", date: "AD 52 — landfall in Judea", ref: "Acts 18:22", mode: "sea", note: "c. 1,100 km of open-sea sailing; about two weeks." },
    { place: "jerusalem", date: "AD 52 — 'went up and saluted the church'", ref: "Acts 18:22", mode: "land", km: 100 },
    { place: "antioch", date: "AD 52 — home, and some time there", ref: "Acts 18:22–23", mode: "land", km: 550 }
  ],
  timeline: [49.5, 49.6, 49.7, 49.8, 49.9, 50.0, 50.2, 50.3, 50.31, 50.4, 50.7, 50.72, 50.8, 51.0, 51.2, 51.4, 52.4, 52.5, 52.7, 52.8, 52.9]
},
{
  id: "j3", name: "Third Journey", subtitle: "Three years at Ephesus, and the collection",
  years: "c. AD 53 – 57",
  color: "#7b3f5e", acts: "Acts 18:23 – 21:17",
  summary: "The most settled and the most productive period: over two years in the lecture hall of Tyrannus, from which the province of Asia was evangelised and most of the great Corinthian correspondence written. It closes with Paul carrying the Gentile churches' relief money to Jerusalem, warned at every port that it will cost him his freedom.",
  stats: { duration: "c. 4–5 years", companions: "Timothy, Titus, Luke, Erastus, Gaius, Aristarchus, Tychicus, Trophimus, Sopater, Secundus" },
  stops: [
    { place: "antioch", date: "AD 53 — sets out again", ref: "Acts 18:23", mode: "none" },
    { place: "iconium", date: "AD 53 — 'all the country of Galatia and Phrygia in order'", ref: "Acts 18:23", mode: "land", km: 640, note: "Overland again by the Cilician Gates, strengthening the Galatian churches — perhaps two months of travel." },
    { place: "ephesus", date: "AD 53–56 — three months in the synagogue, two years in the school of Tyrannus; the riot of the silversmiths", ref: "Acts 19:1–41", mode: "land", km: 550, note: "By the 'upper coasts' — the inland plateau road through Phrygia — c. 550 km." },
    { place: "troas", date: "AD 56 — 'a door was opened unto me of the Lord'", ref: "2 Corinthians 2:12", mode: "land", km: 350, note: "North through Asia; here he waited in vain for Titus and pressed on to Macedonia." },
    { place: "philippi", date: "AD 56 — in Macedonia; 2 Corinthians written", ref: "Acts 20:1; 2 Corinthians 7:5", mode: "sea", km: 300 },
    { place: "corinth", date: "AD 56–57 — three months in Greece; Romans written", ref: "Acts 20:2–3; Romans 16:1", mode: "land", km: 600, note: "South through Thessalonica and Achaia. A plot by the Jews made him abandon the planned sea passage to Syria." },
    { place: "philippi", date: "AD 57 — back overland; kept the days of unleavened bread", ref: "Acts 20:3–6", mode: "land", km: 600, note: "Returning the way he came to avoid the ambush at sea." },
    { place: "troas", date: "AD 57 — seven days; Eutychus falls from the third loft", ref: "Acts 20:6–12", mode: "sea", km: 300, note: "Five days on the crossing — slow, against the wind, where the outbound run had taken two." },
    { place: "assos", date: "AD 57 — Paul walks over the headland alone", ref: "Acts 20:13", mode: "land", km: 40, note: "Often quoted as 20 Roman miles; the ground distance across the Troad headland is nearer 40 km, and Luke has him do it in a morning." },
    { place: "mitylene", date: "AD 57 — overnight", ref: "Acts 20:14", mode: "sea", km: 65 },
    { place: "chios", date: "AD 57 — 'over against Chios'", ref: "Acts 20:15", mode: "sea", km: 90 },
    { place: "samos", date: "AD 57 — and tarried at Trogyllium", ref: "Acts 20:15", mode: "sea", km: 100 },
    { place: "miletus", date: "AD 57 — the farewell charge to the Ephesian elders", ref: "Acts 20:17–38", mode: "sea", km: 45, note: "Ephesus lay 50 km away by road; the elders came to him, and he sailed rather than lose the days." },
    { place: "cos", date: "AD 57 — 'with a straight course'", ref: "Acts 21:1", mode: "sea", km: 110 },
    { place: "rhodes", date: "AD 57 — overnight", ref: "Acts 21:1", mode: "sea", km: 150 },
    { place: "patara", date: "AD 57 — transferred to a Phoenicia-bound freighter", ref: "Acts 21:1–2", mode: "sea", km: 110 },
    { place: "tyre", date: "AD 57 — seven days; farewell prayer on the beach", ref: "Acts 21:3–6", mode: "sea", km: 700, note: "Open-sea passage south of Cyprus, c. 700 km in about five days — a large grain ship running before the summer westerlies." },
    { place: "ptolemais", date: "AD 57 — one day with the brethren", ref: "Acts 21:7", mode: "sea", km: 45 },
    { place: "caesarea", date: "AD 57 — Philip's house; Agabus binds his own hands", ref: "Acts 21:8–14", mode: "sea", km: 50 },
    { place: "jerusalem", date: "Pentecost AD 57 — the collection delivered; arrest in the temple", ref: "Acts 21:15–36", mode: "land", km: 100, note: "Two days' journey up through the Judean hills, lodging with Mnason of Cyprus." }
  ],
  timeline: [53.2, 53.4, 53.8, 56.2, 56.4, 56.8, 57.1, 57.2, 57.25, 57.27, 57.29, 57.31, 57.34, 57.36, 57.38, 57.4, 57.45, 57.46, 57.48, 57.5]
},
{
  id: "rome", name: "Arrest and the Voyage to Rome", subtitle: "Prisoner of Caesar",
  years: "c. AD 57 – 60",
  color: "#9c2b2b", acts: "Acts 21:27 – 28:31",
  summary: "Two years in custody at Caesarea, four hearings, an appeal to Caesar, and then the most detailed sea voyage in ancient literature: a fourteen-day gale, a wreck on Malta, and an escorted walk up the Appian Way. Paul entered the capital of the world as a prisoner and preached in it unhindered for two years.",
  stats: { duration: "c. 3 years", companions: "Luke, Aristarchus, Julius the centurion, 276 souls aboard" },
  stops: [
    { place: "jerusalem", date: "AD 57 — the temple riot; before the Sanhedrin; the plot of forty men", ref: "Acts 21:27 – 23:22", mode: "none" },
    { place: "caesarea", date: "AD 57–59 — two years; Felix, Festus, Agrippa; 'I appeal unto Caesar'", ref: "Acts 23:23 – 26:32", mode: "land", km: 100, note: "Taken out by night under escort of 470 soldiers, horsemen and spearmen — the largest guard mounted for any prisoner in Acts." },
    { place: "sidon", date: "Autumn AD 59 — allowed ashore to friends", ref: "Acts 27:1–3", mode: "sea", km: 130 },
    { place: "myra", date: "AD 59 — transferred to an Alexandrian grain ship", ref: "Acts 27:4–6", mode: "sea", km: 700, note: "Sailed 'under Cyprus' — up its sheltered north coast — because the winds were contrary; c. 700 km, many days." },
    { place: "cnidus", date: "AD 59 — 'scarce were come over against Cnidus'", ref: "Acts 27:7", mode: "sea", km: 280, note: "Beating slowly westward against the meltemi; unable to weather the cape, they bore away south." },
    { place: "fairHavens", date: "October AD 59 — Paul's warning overruled by vote", ref: "Acts 27:8–13", mode: "sea", km: 300, note: "Under the lee of Crete past Cape Salmone. The Fast (Day of Atonement) was already past — the sailing season was effectively shut." },
    { place: "clauda", date: "AD 59 — Euroclydon; the boat hoisted in, the hull undergirded", ref: "Acts 27:14–20", mode: "sea", km: 90, note: "Caught by a north-easter off Cape Matala and driven helpless; then fourteen days adrift across the Adria." },
    { place: "malta", date: "Winter AD 59–60 — shipwreck; the viper; three months' hospitality", ref: "Acts 27:27 – 28:11", mode: "sea", km: 900, note: "About 900 km of driven course over fourteen days — a drift rate of roughly 1.5 knots, which is what modern reconstructions of the storm predict." },
    { place: "syracuse", date: "Spring AD 60 — three days in the Castor and Pollux", ref: "Acts 28:11–12", mode: "sea", km: 150 },
    { place: "rhegium", date: "AD 60 — one night waiting on the south wind", ref: "Acts 28:13", mode: "sea", km: 130 },
    { place: "puteoli", date: "AD 60 — brethren found; seven days", ref: "Acts 28:13–14", mode: "sea", km: 320, note: "Through the Strait of Messina and up the Tyrrhenian in a day and a half — an unusually fast run." },
    { place: "appianWay", date: "AD 60 — met at Appii Forum and The Three Taverns", ref: "Acts 28:15", mode: "land", km: 145, note: "The Via Appia north; the Roman believers walked out 50–60 km to meet him." },
    { place: "rome", date: "AD 60–62 — two years in his own hired house, 'no man forbidding him'", ref: "Acts 28:16–31", mode: "land", km: 65 }
  ],
  timeline: [57.55, 58.0, 59.7, 59.75, 59.8, 59.85, 59.87, 59.95, 60.2, 60.22, 60.25, 60.3, 60.35]
},
{
  id: "j4", name: "The Disputed Final Journey", subtitle: "After Acts — evidence and argument",
  years: "c. AD 62 – 67",
  color: "#5d6b3a", dashed: true,
  acts: "1 Timothy, Titus, 2 Timothy; 1 Clement 5; Eusebius, Hist. Eccl. 2.22",
  summary: "Acts ends without a verdict, which is itself the strongest argument that Paul was released. The Pastoral Epistles presuppose travels that fit nowhere in Acts — Crete, Nicopolis, Miletus, Troas — and Clement of Rome writes within a generation that Paul reached 'the limit of the west'. Everything on this route is inference: shown dashed, and worth weighing rather than assuming.",
  stats: { duration: "c. 5 years, if the release happened", companions: "Titus, Timothy, Luke, Tychicus, Artemas" },
  stops: [
    { place: "rome", date: "AD 62 — released, on the traditional reconstruction", ref: "Acts 28:30; Philippians 1:25", mode: "none" },
    { place: "crete", date: "c. AD 63 — Titus left to ordain elders", ref: "Titus 1:5", mode: "sea", km: 1350, note: "Cannot be the storm-driven pass of Acts 27: Titus describes settled organising work." },
    { place: "miletus", date: "c. AD 64 — Trophimus left behind sick", ref: "2 Timothy 4:20", mode: "sea", km: 500, note: "A visit unrecorded in Acts; on the third journey Paul left Miletus by sea for Jerusalem." },
    { place: "troas", date: "c. AD 65 — the cloak and the parchments left with Carpus", ref: "2 Timothy 4:13", mode: "sea", km: 350, note: "The most human detail in the corpus: an old man asking for his winter coat and his books." },
    { place: "nicopolis", date: "c. AD 65 — 'I have determined there to winter'", ref: "Titus 3:12", mode: "sea", km: 700 },
    { place: "spain", date: "c. AD 66 — 'the limit of the west' (1 Clement 5), if he got there", ref: "Romans 15:24, 28", mode: "sea", km: 1900, note: "Attested by intention (Romans) and by early testimony (Clement, the Muratorian Canon) — never by any site or local tradition." },
    { place: "rome", date: "c. AD 64–67 — second imprisonment and execution under Nero", ref: "2 Timothy 4:6–8", mode: "sea", km: 900, note: "Tradition: beheaded on the Ostian Way; Eusebius dates it to Nero's reign, most often c. AD 67." }
  ],
  timeline: [62.3, 63.2, 64.0, 65.0, 65.6, 66.3, 67.0]
}
];

/* Cities Paul wrote to but is not recorded as visiting */
window.PAUL_LETTER_SITES = ["colossae"];
