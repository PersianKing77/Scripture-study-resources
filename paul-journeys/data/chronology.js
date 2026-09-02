/* Competing chronologies. Three published reconstructions, plus the external evidence each rests on. */
window.PAUL_CHRONOLOGY = {
  schemes: [
    { id: "early", label: "Early scheme", note: "Associated with Ramsay and with South-Galatian readings; compresses the early years and dates Galatians before the Council." },
    { id: "std", label: "Standard scheme", note: "The consensus range used on this map: Bruce, Fitzmyer and most study Bibles, anchored on Gallio." },
    { id: "late", label: "Late scheme", note: "Follows Knox and Lüdemann in preferring the letters over Acts, which pushes the Jerusalem visits and the collection later." }
  ],
  rows: [
    { event: "Crucifixion and resurrection", early: "AD 30", std: "AD 30 or 33", late: "AD 27–30", basis: "Pilate's prefecture (AD 26–36); Passover astronomy allows AD 30 and 33." },
    { event: "Paul's conversion near Damascus", early: "AD 33", std: "AD 33–34", late: "AD 31–34", basis: "Counted back from the Damascus escape; Galatians 1–2 counts 3 + 14 years forward." },
    { event: "In Arabia; return to Damascus", early: "AD 33–36", std: "AD 34–36", late: "AD 32–35", basis: "Galatians 1:17–18, 'after three years'." },
    { event: "Escape from Damascus by basket", early: "AD 36", std: "AD 36–37", late: "AD 35–37", basis: "2 Cor 11:32 names an officer of Aretas IV, who died c. AD 40 — a hard ceiling." },
    { event: "First Jerusalem visit (fifteen days with Peter)", early: "AD 36", std: "AD 37", late: "AD 35–37", basis: "Galatians 1:18–19." },
    { event: "Years in Syria and Cilicia (Tarsus)", early: "AD 36–43", std: "AD 37–45", late: "AD 37–47", basis: "Galatians 1:21; Acts 9:30, followed by silence." },
    { event: "Famine relief visit to Jerusalem", early: "AD 45–46", std: "AD 46", late: "identified with the Council visit", basis: "Josephus dates the Judean famine to the procuratorship of Tiberius Alexander, c. AD 46–48." },
    { event: "First journey (Cyprus and Galatia)", early: "AD 46–48", std: "AD 46–48", late: "AD 47–49", basis: "Acts 13–14; no external anchor." },
    { event: "Galatians written", early: "before the Council, AD 48", std: "AD 48–49 or later", late: "mid-50s, with the Corinthian letters", basis: "Turns on whether Galatians 2 describes Acts 11 or Acts 15." },
    { event: "Jerusalem Council", early: "AD 48–49", std: "AD 49", late: "AD 51 or later", basis: "Galatians 2:1's 'fourteen years'; Acts 15." },
    { event: "Claudius expels Jews from Rome", early: "AD 49", std: "AD 49", late: "AD 41 (Dio) or 49 (Orosius)", basis: "Suetonius, Claudius 25; Orosius supplies the year. Acts 18:2 has Aquila 'lately come from Italy'." },
    { event: "Second journey; Philippi and Thessalonica", early: "AD 49–52", std: "AD 49–52", late: "AD 51–54", basis: "Acts 15:36–18:22." },
    { event: "Eighteen months at Corinth", early: "AD 50–52", std: "AD 50–52", late: "AD 52–54", basis: "Acts 18:11." },
    { event: "Gallio proconsul of Achaia", early: "AD 51–52", std: "AD 51–52", late: "AD 51–52", basis: "The Delphi inscription of Claudius (SIG² 801d) fixes Gallio's term — the one firm date in Paul's life, and every scheme accepts it." },
    { event: "Third journey; over two years at Ephesus", early: "AD 52–56", std: "AD 53–57", late: "AD 54–58", basis: "Acts 19:8–10." },
    { event: "1 and 2 Corinthians, Romans", early: "AD 54–56", std: "AD 55–57", late: "AD 56–58", basis: "Internal travel notes (1 Cor 16:8; 2 Cor 7:5; Rom 15:25)." },
    { event: "Arrest in Jerusalem", early: "AD 56", std: "AD 57", late: "AD 58", basis: "Acts 21:27; Pentecost of that year (20:16)." },
    { event: "Caesarean imprisonment", early: "AD 56–58", std: "AD 57–59", late: "AD 58–60", basis: "'After two years' (Acts 24:27), ended by the change of procurator." },
    { event: "Festus succeeds Felix", early: "AD 58", std: "AD 59", late: "AD 60", basis: "Josephus and Nero's coinage of Judea; commonly AD 59, with AD 55–61 argued." },
    { event: "Voyage and shipwreck; winter on Malta", early: "AD 58–59", std: "AD 59–60", late: "AD 60–61", basis: "Acts 27:9 places departure after the Fast (Yom Kippur, early October)." },
    { event: "Two years' house arrest in Rome", early: "AD 59–61", std: "AD 60–62", late: "AD 61–63", basis: "Acts 28:30." },
    { event: "Prison letters", early: "AD 59–61", std: "AD 60–62", late: "AD 61–63, or from Ephesus in the 50s", basis: "Philippians 1:13; 4:22 (Rome); some place them at Caesarea or Ephesus instead." },
    { event: "Release; Crete, Asia, Nicopolis, Spain (disputed)", early: "AD 62–64", std: "AD 62–66", late: "rejected — no release", basis: "1 Timothy 1:3; Titus 1:5; 3:12; 1 Clement 5 'the limit of the west'. Rests on the Pastorals being Pauline." },
    { event: "Great fire of Rome; Nero's persecution", early: "AD 64", std: "AD 64", late: "AD 64", basis: "Tacitus, Annals 15.44." },
    { event: "Paul's execution", early: "AD 64–65", std: "c. AD 64–67", late: "AD 62–64", basis: "Eusebius places it in Nero's reign (before June AD 68); tradition says beheading on the Ostian Way." }
  ],
  anchors: [
    { name: "The Gallio inscription (Delphi)", text: "A rescript of Claudius found at Delphi names Gallio as proconsul of Achaia in the emperor's 26th acclamation — AD 51–52. Since Acts 18:12 puts Paul before Gallio's tribunal during an eighteen-month stay, Corinth is fixed, and the whole chronology hangs from it." },
    { name: "Aretas IV of Nabataea", text: "2 Corinthians 11:32 has an officer of King Aretas policing Damascus. Aretas died c. AD 40, so the escape — and therefore the conversion three years earlier — cannot be later than the late 30s." },
    { name: "Claudius' expulsion of Jews from Rome", text: "Suetonius records the expulsion; Orosius dates it to AD 49. Aquila and Priscilla, 'lately come from Italy' when Paul reaches Corinth, fit that year." },
    { name: "The change of procurator", text: "Felix was recalled and Festus arrived c. AD 59 (Josephus). Acts 24:27 gives Paul two years at Caesarea before that change, and Acts 27 begins the voyage in the same autumn." },
    { name: "The Judean famine", text: "Josephus dates a severe famine under Claudius to c. AD 46–48, matching Agabus' prophecy and the relief visit of Acts 11:27–30." }
  ]
};
