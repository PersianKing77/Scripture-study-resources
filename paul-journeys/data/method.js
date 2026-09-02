/* Sources, method, and the grading of confidence. */
window.PAUL_METHOD = {
  intro: "Everything in this atlas is a reconstruction of one kind or another. The New Testament gives no dates, few distances, and no coordinates; what follows is an account of where the rest came from, what is firm, what is disputed, and how the difference is marked.",
  rules: [
    { h: "Geography comes from data, never from drawing", t: "Coastlines and terrain are real tiles from Esri's topographic, imagery and shaded-relief services. Every site is a coordinate, not a placement by eye. Roman roads are traced through cities and road-stations attested in the ancient itineraries — but the line drawn between two known stations is a simplification of a road that survives only in fragments, and the layer says so on hover." },
    { h: "Provincial boundaries are labelled, not outlined", t: "Provinces moved repeatedly in the first century: Judea's status changed four times in Paul's lifetime, Galatia's extent is still argued, and no trustworthy geometry for any of them exists at this date. So provinces appear as labels at their approximate centres and nothing is drawn as a border." },
    { h: "Uncertainty is stated where it exists", t: "Where a site identification is contested, the gazetteer grades it and gives the basis. Where a letter's place of origin is inferred rather than stated, the letter's note says which verse the inference rests on. Where three dating schemes disagree, all three are shown side by side rather than one being quietly chosen." },
    { h: "Ancient testimony is attributed", t: "Classical evidence is quoted or summarised with its author and, where practical, its work — Strabo on Tarsus, Josephus on the famine and the procurators, Tacitus on the fire, Suetonius on Claudius' expulsion, Pausanias on Corinth and Athens. Inscriptions are named with their find circumstances and present location where known." },
    { h: "Scripture is the Authorized Version", t: "The King James text is public domain and used throughout, fetched a chapter at a time and cached in your browser. Where the KJV's rendering obscures a point of substance, the article says so in its own words rather than substituting another translation." }
  ],
  confidence: [
    { g: "Secure", c: "#7fb069", t: "The site is identified by inscription, continuous occupation, or unambiguous ancient testimony. Corinth, Ephesus, Athens, Philippi, Thessalonica, Rome, Caesarea Maritima, Tarsus, Antioch on the Orontes, Malta, Puteoli, Syracuse. Nobody argues about these." },
    { g: "Probable", c: "#c9a227", t: "The identification is accepted by most, on good but not decisive evidence — often a single inscription or a strong topographical fit. Lystra (Sterrett's 1885 Latin statue base of the deified Augustus), Derbe (Ballance's 1956 dedication from Kerti Höyük), Berea, Colossae, Fair Havens." },
    { g: "Traditional", c: "#c9873a", t: "The location rests on later church tradition, or on a reasonable but unproven reading of the text. St Paul's Bay on Malta, the site of the Damascus escape, Appii Forum and the Three Taverns as points on the Appian Way. Usable, but not evidence." },
    { g: "Disputed", c: "#b06a8f", t: "Serious scholars disagree, and the atlas draws one option while naming the other. The destination of Galatians (South vs. North Galatian); Phoenix on Crete (Loutro faces east, contradicting Luke's description); the origin of the Pastoral letters; whether the prison letters come from Rome, Ephesus or Caesarea; Erastus of the Corinthian pavement." },
    { g: "Region only", c: "#8d9a9c", t: "The atlas maps Paul's world. For Come, Follow Me weeks in the Gospels and general epistles, the sites are not in this gazetteer, so the map frames the region and says plainly that it is doing so rather than inventing markers." }
  ],
  fixed: "Five external anchors carry the whole chronology: the Delphi inscription fixing Gallio's proconsulship of Achaia to AD 51–52 (against Acts 18:12); the death of Aretas IV of Nabataea c. AD 40, which caps the Damascus escape of 2 Corinthians 11:32; Orosius' date of AD 49 for Claudius' expulsion of Jews from Rome, matching Aquila and Priscilla 'lately come from Italy'; Josephus on the Judean famine of c. AD 46–48; and the recall of Felix and arrival of Festus c. AD 59. Every year in this atlas is derived from those five, and the Chronology panel shows how three published schemes derive different answers from the same evidence.",
  works: [
    { sect: "Atlases and gazetteers", items: [
      "Richard J. A. Talbert, ed., <i>Barrington Atlas of the Greek and Roman World</i> (Princeton, 2000) — the standard for ancient coordinates and site names.",
      "The Pleiades gazetteer of ancient places (pleiades.stoa.org) — open, cited, and the reference for identification confidence.",
      "Anson F. Rainey and R. Steven Notley, <i>The Sacred Bridge: Carta's Atlas of the Biblical World</i> (Carta, 2006).",
      "Carl Rasmussen, <i>Zondervan Atlas of the Bible</i>, rev. ed. (2010).",
      "William Schlegel, <i>Satellite Bible Atlas</i> (2013) — for terrain reading and route feasibility.",
      "Walter Scheidel, Elijah Meeks et al., <i>ORBIS: The Stanford Geospatial Network Model of the Roman World</i> — the model behind seasonal sailing and land-travel rates."
    ] },
    { sect: "Acts and the Pauline mission", items: [
      "F. F. Bruce, <i>The Book of the Acts</i>, rev. ed. (NICNT, 1988), and <i>Paul: Apostle of the Heart Set Free</i> (1977).",
      "C. K. Barrett, <i>The Acts of the Apostles</i>, 2 vols. (ICC, 1994–98).",
      "Joseph A. Fitzmyer, <i>The Acts of the Apostles</i> (Anchor Bible, 1998).",
      "Craig S. Keener, <i>Acts: An Exegetical Commentary</i>, 4 vols. (2012–15) — the fullest treatment of the Greco-Roman background.",
      "Ben Witherington III, <i>The Acts of the Apostles: A Socio-Rhetorical Commentary</i> (1998).",
      "W. M. Ramsay, <i>St. Paul the Traveller and the Roman Citizen</i> (1895) — dated, often right on Anatolian topography, and the origin of the South-Galatian case."
    ] },
    { sect: "Chronology", items: [
      "Rainer Riesner, <i>Paul's Early Period: Chronology, Mission Strategy, Theology</i> (1998) — the most careful handling of the fixed points.",
      "Robert Jewett, <i>A Chronology of Paul's Life</i> (1979).",
      "John Knox, <i>Chapters in a Life of Paul</i>, rev. ed. (1987), and Gerd Lüdemann, <i>Paul, Apostle to the Gentiles: Studies in Chronology</i> (1984) — the letters-over-Acts approach behind the 'late' scheme.",
      "Colin J. Hemer, <i>The Book of Acts in the Setting of Hellenistic History</i> (1989)."
    ] },
    { sect: "The sea voyage", items: [
      "James Smith, <i>The Voyage and Shipwreck of St. Paul</i>, 4th ed. (1880) — a sailor's reading of Acts 27, still the starting point.",
      "Lionel Casson, <i>Ships and Seamanship in the Ancient World</i> (1971).",
      "Thomas Spratt, <i>Travels and Researches in Crete</i> (1865) — the survey behind Fair Havens' exposure and the Phoenix problem."
    ] },
    { sect: "Cities, archaeology, and the classical world", items: [
      "Jerome Murphy-O'Connor, <i>St. Paul's Corinth: Texts and Archaeology</i>, 3rd ed. (2002).",
      "Paul Trebilco and others in <i>The Book of Acts in Its First-Century Setting</i>, 6 vols. (Eerdmans, 1993–98).",
      "Strabo, <i>Geography</i>; Josephus, <i>Jewish War</i> and <i>Antiquities</i>; Tacitus, <i>Annals</i>; Suetonius, <i>Lives of the Caesars</i>; Pausanias, <i>Description of Greece</i>; Pliny the Elder, <i>Natural History</i> — quoted directly in the city articles.",
      "<i>Corpus Inscriptionum Latinarum</i>, <i>Inscriptiones Graecae</i>, and <i>Sylloge Inscriptionum Graecarum</i> for the Gallio, politarch, Soreg, Theodotus, Lystra and Derbe texts."
    ] },
    { sect: "Curriculum and background resources", items: [
      "The 52-week Come, Follow Me New Testament schedule, with scripture links to the Gospel Library at churchofjesuschrist.org.",
      "Taylor Halverson's <a href=\"https://insights.taylorhalverson.com/p/new-testament-resources\" target=\"_blank\" rel=\"noopener\">New Testament Resource Hub</a> — the videos, articles and books attached to each week."
    ] }
  ],
  limits: [
    "Road alignments between attested stations are simplifications; do not measure a march from them.",
    "Gazetteer elevations are approximate site figures, not surveyed spot heights.",
    "Travel times are modelled from ancient average rates by season, not from any single recorded journey. They are ranges of plausibility.",
    "Site photographs are fetched from Wikipedia on demand and are not curated; a wrong or unhelpful image is possible.",
    "This is a beta. Articles are still being checked and extended, and four review passes have already corrected errors of the kind that remain."
  ]
};
