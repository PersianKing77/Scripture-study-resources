/* The Roman and Jewish world alongside Paul: rulers, governors of Judea, and dated events.
   Years follow Josephus, Tacitus, Suetonius and Dio; several are approximate and are marked c. */
window.PAUL_CONTEXT = {
lanes: [
  { id: "emperor", label: "Emperor", color: "#5b6f8c", items: [
    { name: "Tiberius", t0: 14, t1: 37, note: "Emperor at the crucifixion and at Paul's conversion. Withdrew to Capri; Judea was left to prefects." },
    { name: "Caligula", t0: 37, t1: 41, note: "Ordered his statue erected in the Jerusalem temple; only his death in 41 prevented it (Josephus, Ant. 18.261–309)." },
    { name: "Claudius", t0: 41, t1: 54, note: "Expelled Jews from Rome over disturbances about 'Chrestus' (c. AD 49); annexed Lycia as a province in 43; the famine of Acts 11:28 falls in his reign." },
    { name: "Nero", t0: 54, t1: 68, note: "The Caesar to whom Paul appealed. His first years were well governed by Seneca and Burrus; after the fire of 64 he made Christians the scapegoat." }
  ] },
  { id: "judea", label: "Rome in Judea", color: "#7a6a4a", items: [
    { name: "Pontius Pilate", t0: 26, t1: 36, note: "Prefect at the crucifixion; recalled after a massacre of Samaritans. His name survives on a stone from Caesarea's theatre." },
    { name: "Marcellus / Marullus", t0: 36, t1: 41, note: "Caretaker prefects — the years of Paul's conversion and first Jerusalem visit." },
    { name: "Herod Agrippa I (king)", t0: 41, t1: 44, note: "Ruled all Judea as a client king; killed James the son of Zebedee and imprisoned Peter (Acts 12), and died at Caesarea in 44." },
    { name: "Fadus & Tib. Alexander", t0: 44, t1: 48, note: "Procurators through the famine years; Tiberius Julius Alexander administered relief (Josephus, Ant. 20.101) — the famine of the Acts 11 relief visit." },
    { name: "Ventidius Cumanus", t0: 48, t1: 52, note: "His mishandling of a Samaritan feud brought Judea to the edge of revolt." },
    { name: "Antonius Felix", t0: 52, t1: 59, note: "Heard Paul at Caesarea, trembled, hoped for a bribe, and left him bound two years (Acts 24)." },
    { name: "Porcius Festus", t0: 59, t1: 62, note: "Received Paul's appeal to Caesar and sent him to Rome (Acts 25)." },
    { name: "Albinus & Gessius Florus", t0: 62, t1: 66, note: "Florus' extortion triggered the revolt of AD 66." },
    { name: "The Jewish revolt", t0: 66, t1: 70, note: "War with Rome; Jerusalem and the temple destroyed in AD 70, ending the world in which Paul had argued in synagogues." }
  ] }
],
events: [
  { name: "Crucifixion and resurrection", t: 30.3, note: "AD 30 or 33; Passover astronomy and Pilate's prefecture allow both." },
  { name: "Stoning of Stephen", t: 34.0, note: "Saul consents and the Jerusalem church scatters (Acts 7:58–8:4)." },
  { name: "Caligula's statue crisis", t: 40.0, note: "An imperial order to place his image in the temple; Petronius stalled until the emperor died." },
  { name: "Death of Herod Agrippa I", t: 44.2, note: "At Caesarea, after being hailed as a god (Acts 12:20–23; Josephus, Ant. 19.343–350)." },
  { name: "Famine in Judea", t: 46.5, note: "Relief carried from Antioch by Barnabas and Saul (Acts 11:27–30); dated by Josephus to c. AD 46–48." },
  { name: "Claudius expels Jews from Rome", t: 49.0, note: "Suetonius, Claudius 25; dated to 49 by Orosius. It brought Aquila and Priscilla to Corinth (Acts 18:2)." },
  { name: "Gallio proconsul of Achaia", t: 51.5, note: "AD 51–52, fixed by the Delphi inscription — the anchor of the whole chronology (Acts 18:12)." },
  { name: "Nero becomes emperor", t: 54.8, note: "Aged sixteen, on the death of Claudius." },
  { name: "Earthquake in the Lycus valley", t: 60.0, note: "Laodicea, Hierapolis and Colossae damaged (Tacitus, Annals 14.27) — the valley of the Colossian letter." },
  { name: "Festus succeeds Felix", t: 59.3, note: "The change of procurator that ended Paul's two years at Caesarea." },
  { name: "Death of James the Lord's brother", t: 62.3, note: "Stoned in Jerusalem during the interval before Albinus arrived (Josephus, Ant. 20.200)." },
  { name: "Great fire of Rome", t: 64.5, note: "Nero fastens the guilt on the Christians; the first state persecution (Tacitus, Annals 15.44)." },
  { name: "Jewish revolt begins", t: 66.4, note: "Starting at Caesarea, the city of Paul's imprisonment." },
  { name: "Death of Nero", t: 68.5, note: "Paul's execution is placed before this, since tradition puts it under Nero." }
]
};

/* Seasonality of ancient travel. Sailing was seasonal and directional; land travel was not
   much better in winter. Rates: Casson, 'Ships and Seamanship'; Vegetius 4.39; ORBIS. */
window.PAUL_SEASONS = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  sea: [
    { state: "closed", note: "Mare clausum. Roman custom shut the sea from about 11 November to 10 March; only emergency or imperial traffic sailed, and insurance and law assumed no voyages." },
    { state: "closed", note: "Mare clausum — the depth of winter. Storms, cloud cover and no reliable star sights." },
    { state: "risky", note: "The sea reopens around 10 March, but early spring is squally; Vegetius rates it dangerous rather than closed." },
    { state: "open", note: "Good sailing. Paul's spring crossings (Acts 20:6; 28:11) fall here." },
    { state: "open", note: "The best month of the year for the eastern Mediterranean." },
    { state: "open", note: "Reliable, with the etesian northerlies beginning — fast southbound, slow northbound." },
    { state: "open", note: "Peak etesian season: strong, steady north-westerlies. Eastbound and southbound runs fly; westbound and northbound crawl." },
    { state: "open", note: "Etesians still blowing hard. This is the wind that made the westward voyage of Acts 27 so slow." },
    { state: "open", note: "Good, easing winds — the last dependable month." },
    { state: "risky", note: "After the Fast (Yom Kippur, early October) sailing was reckoned dangerous — exactly Paul's warning at Fair Havens (Acts 27:9)." },
    { state: "risky", note: "The season closes about 11 November. Anyone still at sea is running a serious risk." },
    { state: "closed", note: "Mare clausum. Ships lay up in harbour; Paul wintered at Malta, Corinth, Nicopolis." }
  ],
  land: [
    { state: "risky", note: "Winter: the Taurus and Anatolian passes are snowbound, and the rains make unpaved stretches impassable." },
    { state: "risky", note: "Winter conditions; the high plateau roads are effectively shut." },
    { state: "open", note: "Passes clearing; muddy but passable." },
    { state: "open", note: "Good marching weather." },
    { state: "open", note: "Good — the ordinary travelling season." },
    { state: "open", note: "Hot on the plains but reliable." },
    { state: "open", note: "Very hot; water sources and stages govern the day's march." },
    { state: "open", note: "Very hot on the coastal plains — one reason to head for the highlands." },
    { state: "open", note: "Ideal." },
    { state: "open", note: "Good, with the rains beginning." },
    { state: "risky", note: "Rains and early snow on the passes." },
    { state: "risky", note: "Winter; travel reduced to short local stages." }
  ]
};
