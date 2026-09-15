/* ——— ARCHAEOLOGICAL DISCOVERIES layer ———————————————————————————————
   A comprehensive gazetteer of finds — inscriptions, manuscripts, architecture,
   coins & artifacts, war/destruction evidence, and art — that bear directly on
   understanding the New Testament world. Appended onto window.NTATLAS by the
   loader at the foot of this file. Each entry:
     id, name, cat (inscription|manuscript|architecture|artifact|destruction|art),
     era, lat, lon, place (optional PLACES id to link/fly to), conf (confidence
     tier, reusing CONF_TIERS), blurb, sig (why it matters for the NT), src.
   Coordinates mark the findspot where known; a few manuscripts of disputed
   provenance are marked at their traditional findspot or present holding
   institution, noted in `blurb`. */

const ARCH_CATEGORIES = {
  inscription:  { label:'Inscriptions',              color:'#8c3a2b' },
  manuscript:   { label:'Manuscripts & texts',        color:'#3f5f8f' },
  architecture: { label:'Architecture & ruins',       color:'#6b6028' },
  artifact:     { label:'Coins & artifacts',          color:'#8a6a1f' },
  destruction:  { label:'War & destruction evidence', color:'#5c2418' },
  art:          { label:'Art, mosaics & ossuaries',   color:'#6b3f6b' }
};

const ARCHAEOLOGY = [

/* ——— INSCRIPTIONS ——— */
{ id:'pilate-stone', name:'The Pilate Stone', cat:'inscription', era:'c. AD 26–36', lat:32.5013, lon:34.8905, place:'caesarea', conf:'certain',
  blurb:'A limestone dedication slab found reused as a theatre step at Caesarea Maritima in 1961, naming "Pontius Pilatus, Prefect of Judea" honouring Tiberius.',
  sig:'The only inscription of Pilate himself known to survive, and it settles his exact title — prefect, not the later "procurator" some ancient writers use.',
  src:['A. Frova, first publication of the inscription (1961)','C. Eck, on Pilate\'s career and titulature'], wiki:'https://en.wikipedia.org/wiki/Pilate_Stone' },

{ id:'nazareth-inscription', name:'The Nazareth Inscription', cat:'inscription', era:'1st century AD (contested)', lat:32.7021, lon:35.2978, place:'nazareth', conf:'contested',
  blurb:'A marble slab bearing an imperial edict against disturbing graves, reportedly purchased in Nazareth in 1878; it has no excavated findspot and now sits in Paris.',
  sig:'Sometimes proposed as an imperial reaction to reports of an empty tomb in Judea, but the case rests on disputed dating (Augustus to Claudius) and unverifiable provenance — the atlas flags rather than endorses the connection.',
  src:['F. Cumont, first publication (1930)','B. M. Metzger, on the inscription\'s dating problems','K. Kloner, arguing against any link to the Resurrection'], wiki:'https://en.wikipedia.org/wiki/Nazareth_Inscription' },

{ id:'erastus-inscription', name:'The Erastus Inscription', cat:'inscription', era:'1st century AD', lat:37.9060, lon:22.8790, place:'corinth', conf:'contested',
  blurb:'A paving inscription near the Corinth theatre: "Erastus, in return for his aedileship, laid this pavement at his own expense."',
  sig:'Often proposed — not proven — as the city treasurer "Erastus" Paul names in Romans 16:23, which would place a Christian convert in municipal office.',
  src:['J. H. Kent, <i>Corinth VIII.3: The Inscriptions 1926–1950</i> (1966)','S. Friesen, cautioning against over-identifying the two Erastuses'], wiki:'https://en.wikipedia.org/wiki/Erastus_of_Corinth' },

{ id:'gallio-inscription', name:'The Gallio Inscription', cat:'inscription', era:'c. AD 52', lat:38.4824, lon:22.5010, place:null, conf:'certain',
  blurb:'A fragmentary letter of the emperor Claudius to Delphi, naming Lucius Junius Gallio as proconsul of Achaia.',
  sig:'The single firmest date-anchor in the whole of Paul\'s career: it fixes his appearance before Gallio (Acts 18:12) to about AD 51–52, and everything else in Acts is dated relative to it.',
  src:['A. Plassart, first full publication (1967)','R. Jewett, on the Gallio inscription and Pauline chronology'], wiki:'https://en.wikipedia.org/wiki/Delphi_Inscription' },

{ id:'theodotos-inscription', name:'The Theodotos Inscription', cat:'inscription', era:'before AD 70', lat:31.7735, lon:35.2340, place:null, conf:'certain',
  blurb:'A limestone plaque from Jerusalem recording that Theodotos son of Vettenus built a synagogue "for reading the Law and teaching the commandments," with guest rooms for travellers.',
  sig:'Direct, pre-70 documentary proof of exactly the synagogue functions the Gospels describe — reading, teaching, and hospitality to pilgrims.',
  src:['R. Weill, first publication (1920)','J. S. Kloppenborg, on the inscription and Second Temple synagogue practice'], wiki:'https://en.wikipedia.org/wiki/Theodotos_inscription' },

{ id:'temple-warning-inscription', name:'The Temple Warning Inscription', cat:'inscription', era:'1st century AD', lat:31.7780, lon:35.2354, place:'temple-mount', conf:'certain',
  blurb:'A Greek limestone plaque found near the Temple Mount in 1871: "No foreigner may enter within the balustrade and enclosure around the sanctuary. Whoever is caught will be responsible for his own death."',
  sig:'The physical Soreg boundary behind the riot that follows the false charge against Paul in Acts 21:28 — a Gentile brought past this exact line.',
  src:['C. Clermont-Ganneau, first publication (1872)','P. Segal, on the Temple warning inscriptions'], wiki:'https://en.wikipedia.org/wiki/Temple_Warning_inscription' },

{ id:'politarch-inscription', name:'The Politarch Inscription', cat:'inscription', era:'1st century AD', lat:40.6403, lon:22.9350, place:'thessalonica', conf:'certain',
  blurb:'A Roman-era arch inscription from Thessalonica naming city officials as "politarchs" — a rare civic title used almost nowhere else in Greek sources.',
  sig:'Confirms Luke\'s precision in Acts 17:6, which names the officials who hear the case against the missionaries with that same unusual word.',
  src:['C. Edson, on Macedonian civic titulature and the politarch inscriptions'], wiki:'https://en.wikipedia.org/wiki/Politarch' },

{ id:'corinth-synagogue-inscription', name:'"Synagogue of the Hebrews" Lintel', cat:'inscription', era:'2nd–4th century AD (later than Paul)', lat:37.9070, lon:22.8800, place:'corinth', conf:'probable',
  blurb:'A fragmentary marble lintel from Corinth reading "[Syn]agogue of the Hebr[ews]," found built into a later wall.',
  sig:'The stone itself is later than Paul\'s eighteen months in the city, but it marks the continuing presence of the Jewish community Acts 18 describes him first preaching to.',
  src:['B. Powell, on the Corinth synagogue lintel', 'J. Murphy-O\'Connor, <i>St. Paul\'s Corinth</i> (3rd ed., 2002)', 'See: https://holylandphotos.org/photos/GSPLCO02'], wiki:'https://holylandphotos.org/photos/GSPLCO02' },

{ id:'ossuary-alexander-simon', name:'Ossuary of "Alexander son of Simon"', cat:'inscription', era:'1st century AD', lat:31.7810, lon:35.2420, place:null, conf:'conjectural',
  blurb:'A limestone bone box from a Kidron Valley tomb, inscribed in Greek "Alexander son of Simon," with a second inscription naming him a Cyrenian.',
  sig:'A tempting but unproven link to Simon of Cyrene, whose sons Alexander and Rufus Mark names (Mark 15:21) — a real name matched to a real family tomb, without certainty they are the same men.',
  src:['N. Avigad, <i>Ancient Monuments in the Kidron Valley</i>','L. Y. Rahmani, <i>A Catalogue of Jewish Ossuaries</i> (1994)','See: https://hebrewexplorer.com/archaeology/alexander-son-of-simon-ossuary/'], wiki:'https://hebrewexplorer.com/archaeology/alexander-son-of-simon-ossuary/' },

{ id:'caiaphas-ossuary', name:'The Caiaphas Ossuary', cat:'inscription', era:'1st century AD', lat:31.7440, lon:35.2200, place:'caiaphas', conf:'probable',
  blurb:'An ornately carved ossuary from a 1990 tomb discovery in Jerusalem\'s Peace Forest, inscribed "Yehosef bar Qafa" (Joseph son of Caiaphas).',
  sig:'Widely, though not universally, identified with the family of the high priest who presides at Jesus\' trial (Matthew 26:57) — physical evidence for a priestly dynasty otherwise known only from Josephus and the Gospels.',
  src:['Z. Greenhut, first excavation report (1992)','R. Reich, on the Caiaphas family tomb and its inscriptions'], wiki:'https://en.wikipedia.org/wiki/Caiaphas_ossuary' },

/* ——— MANUSCRIPTS & TEXTS ——— */
{ id:'p52-rylands', name:'Rylands Papyrus P52', cat:'manuscript', era:'c. AD 125–175 (date debated)', lat:28.5525, lon:30.6570, place:null, conf:'contested',
  blurb:'A scrap of papyrus about the size of a credit card, carrying a few verses of John 18 in Greek, from the rubbish mounds of Oxyrhynchus, Egypt.',
  sig:'Long promoted as the earliest surviving fragment of any New Testament text; more recent palaeographic work argues for a somewhat later date, but it remains among the oldest witnesses to John\'s Gospel.',
  src:['C. H. Roberts, first publication (1935)','B. Nongbri, redating P52 and the limits of papyrus dating on style alone'], wiki:'https://en.wikipedia.org/wiki/Papyrus_52' },

{ id:'codex-sinaiticus', name:'Codex Sinaiticus', cat:'manuscript', era:'mid-4th century AD', lat:28.5561, lon:33.9750, place:null, conf:'certain',
  blurb:'A nearly complete Greek Bible, recovered from Saint Catherine\'s Monastery in the Sinai across the 19th century, now divided between London, Leipzig, Saint Petersburg and the monastery itself.',
  sig:'One of the two oldest complete copies of the New Testament, and a primary witness modern translations weigh against later, more numerous manuscripts.',
  src:['C. von Tischendorf, on the manuscript\'s discovery (1844, 1859)','codexsinaiticus.org, the joint digitisation project of the holding institutions'], wiki:'https://en.wikipedia.org/wiki/Codex_Sinaiticus' },

{ id:'codex-vaticanus', name:'Codex Vaticanus', cat:'manuscript', era:'mid-4th century AD', lat:41.9022, lon:12.4534, place:'rome', conf:'probable',
  blurb:'A Greek codex of the Old and New Testaments held in the Vatican Library since at least the 15th century; its earlier history is unrecorded.',
  sig:'Alongside Sinaiticus, one of the two great 4th-century witnesses to the New Testament text, and often preferred by textual critics for its careful, restrained scribal hand.',
  src:['T. C. Skeat, on the codex\'s date and origin','P. Head, on Vaticanus and the history of the New Testament text'], wiki:'https://en.wikipedia.org/wiki/Codex_Vaticanus' },

{ id:'chester-beatty-papyri', name:'Chester Beatty Biblical Papyri', cat:'manuscript', era:'c. AD 200–250', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A group of early papyrus codices from the Fayum region of Egypt — Gospels and Acts (P45), Paul\'s letters (P46), and Revelation (P47) — acquired in the 1930s.',
  sig:'Among the earliest surviving copies of whole New Testament books, showing the letters and Gospels already being collected and copied as scripture within two centuries of the events.',
  src:['F. Kenyon, <i>The Chester Beatty Biblical Papyri</i> (1933–37)'], wiki:'https://en.wikipedia.org/wiki/Chester_Beatty_Papyri' },

{ id:'bodmer-p66', name:'Bodmer Papyrus (P66)', cat:'manuscript', era:'c. AD 200', lat:26.1350, lon:32.1670, place:null, conf:'probable',
  blurb:'A near-complete papyrus codex of John\'s Gospel, part of a larger hoard of Christian and classical texts (the "Dishna Papers") found near Dishna, Egypt, and now largely in Geneva.',
  sig:'One of the earliest substantially complete copies of a single Gospel, and unusually corrected by a second scribal hand — a rare window into how early copies were checked.',
  src:['V. Martin, first publication (1956)','J. van Haelst, on the Dishna Papers and their likely monastic origin'], wiki:'https://en.wikipedia.org/wiki/Papyrus_66' },

{ id:'dead-sea-scrolls', name:'The Dead Sea Scrolls', cat:'manuscript', era:'c. 250 BC – AD 68', lat:31.7415, lon:35.4592, place:null, conf:'certain',
  blurb:'Roughly 900 scrolls and fragments from eleven caves above Qumran, found 1947–1956: biblical texts, sectarian rules, hymns and calendars of a strict Jewish community.',
  sig:'Not New Testament manuscripts, but the single richest window onto the Second Temple Judaism John the Baptist, Jesus and the earliest church grew out of — shared vocabulary, purity concerns and messianic expectation appear throughout.',
  src:['G. Vermes, <i>The Complete Dead Sea Scrolls in English</i> (rev. ed., 2004)','J. J. Collins, <i>The Dead Sea Scrolls: A Biography</i> (2013)'], wiki:'https://en.wikipedia.org/wiki/Dead_Sea_Scrolls' },

{ id:'nag-hammadi', name:'The Nag Hammadi Library', cat:'manuscript', era:'4th-century copies of 2nd–3rd-century texts', lat:26.0532, lon:32.2436, place:null, conf:'certain',
  blurb:'Thirteen leather-bound Coptic codices found buried near Nag Hammadi, Egypt, in 1945, including the Gospel of Thomas and other texts outside the New Testament canon.',
  sig:'Shows the range of early Christian writing the church eventually did not receive as scripture — useful for understanding why the fourfold Gospel canon settled where it did.',
  src:['J. M. Robinson, ed., <i>The Nag Hammadi Library in English</i> (3rd ed., 1988)'], wiki:'https://en.wikipedia.org/wiki/Nag_Hammadi_library' },

{ id:'muratorian-fragment', name:'The Muratorian Fragment', cat:'manuscript', era:'7th/8th-century copy of a c. late 2nd-century list', lat:45.4642, lon:9.1900, place:null, conf:'probable',
  blurb:'A damaged Latin manuscript held in Milan\'s Biblioteca Ambrosiana, listing New Testament books its unknown author regards as authoritative.',
  sig:'The earliest surviving list resembling a New Testament canon — evidence that most of the familiar books were already being read as a defined collection well before the fourth-century church councils.',
  src:['G. M. Hahneman, <i>The Muratorian Fragment and the Development of the Canon</i> (1992)'], wiki:'https://en.wikipedia.org/wiki/Muratorian_fragment' },

/* ——— ARCHITECTURE & RUINS ——— */
{ id:'herodium', name:'Herodium', cat:'architecture', era:'built c. 23–15 BC', lat:31.6669, lon:35.2419, place:'bethlehem', conf:'certain',
  blurb:'Herod the Great\'s artificial cone-shaped mountain fortress and palace near Bethlehem, containing his tomb — identified by Ehud Netzer\'s team in 2007.',
  sig:'A monument to the same king whose massacre of the innocents (Matthew 2:16) is set in the town at its foot, and to the scale of power the infant Jesus is born under.',
  src:['E. Netzer, <i>The Architecture of Herod, the Great Builder</i> (2006)','R. Porat, Y. Kalman &amp; R. Chachy, on the tomb monument\'s discovery'], wiki:'https://en.wikipedia.org/wiki/Herodium' },

{ id:'masada', name:'Masada', cat:'architecture', era:'palace built c. 37–31 BC; besieged AD 73', lat:31.3157, lon:35.3527, place:null, conf:'certain',
  blurb:'Herod\'s isolated mountaintop palace-fortress above the Dead Sea, later the last Jewish rebel stronghold to fall in the Great Revolt.',
  sig:'Illustrates both the paranoid magnificence of Herodian building — cisterns, baths, frescoed palaces in the desert — and the war that ends the world the Gospels describe, one generation after the events.',
  src:['Y. Yadin, <i>Masada: Herod\'s Fortress and the Zealots\' Last Stand</i> (1966)','Josephus, <i>War</i> 7.252–406, the primary account of the siege'], wiki:'https://en.wikipedia.org/wiki/Masada' },

{ id:'gamla-synagogue', name:'The Gamla Synagogue', cat:'architecture', era:'1st century BC – AD 67', lat:32.9019, lon:35.7439, place:null, conf:'certain',
  blurb:'One of the handful of synagogue buildings excavated anywhere that certainly predates AD 70, at the Golan town of Gamla, destroyed in the Roman siege of AD 67.',
  sig:'Direct architectural evidence for the kind of public building the Gospels describe Jesus teaching in every Sabbath (Mark 1:21), from a period when the type is otherwise rare in the record.',
  src:['S. Gutmann, on the excavation of Gamla and its synagogue', 'D. Syon, <i>Gamla III: The Shepherd\'s Settlement</i> (2014)'], wiki:'https://en.wikipedia.org/wiki/Gamla' },

{ id:'pool-of-siloam', name:'The Pool of Siloam', cat:'architecture', era:'Second Temple period', lat:31.7713, lon:35.2350, place:'temple-mount', conf:'certain',
  blurb:'A monumental stepped pool at the foot of the City of David, uncovered in 2004 during sewer repairs, fed by the Gihon Spring via Hezekiah\'s Tunnel.',
  sig:'The excavated pool matches the setting of John 9, where Jesus sends a blind man to wash — a Gospel detail long assumed symbolic until the real pool turned up.',
  src:['R. Reich &amp; E. Shukron, first excavation reports (2004–2005)'], wiki:'https://en.wikipedia.org/wiki/Pool_of_Siloam' },

{ id:'jacobs-well', name:"Jacob's Well", cat:'architecture', era:'continuously identified since antiquity', lat:32.2021, lon:35.2826, place:'sychar', conf:'probable',
  blurb:'A deep well near ancient Shechem, venerated without a documented break since at least the 4th century and now enclosed within an Orthodox church at Balata.',
  sig:'The setting of Jesus\' conversation with the Samaritan woman (John 4) — one of the few Gospel sites whose identification rests on an essentially unbroken chain of pilgrim visits rather than modern excavation alone.',
  src:['J. Murphy-O\'Connor, <i>The Holy Land</i> (5th ed., 2008), on the well and its church'], wiki:'https://en.wikipedia.org/wiki/Jacob%27s_Well' },

{ id:'caesarea-harbor', name:'Sebastos, the Harbour of Caesarea', cat:'architecture', era:'built c. 22–15 BC', lat:32.4990, lon:34.8880, place:'caesarea', conf:'certain',
  blurb:'Herod\'s engineered deep-water harbour at Caesarea Maritima, built with hydraulic concrete poured underwater — one of the largest Roman harbour projects outside Italy, its submerged breakwaters mapped since the 1980s.',
  sig:'The port through which Paul sails more than once (Acts 9:30, 25:13) and where he is held prisoner for two years (Acts 24:27) — a working demonstration of Herodian engineering ambition.',
  src:['R. L. Hohlfelder et al., reports of the Caesarea Ancient Harbour Excavation Project','K. Holum &amp; A. Raban, eds., <i>Caesarea Maritima</i> (1996)'], wiki:'https://en.wikipedia.org/wiki/Caesarea_Maritima' },

{ id:'ephesus-theater', name:'The Great Theatre of Ephesus', cat:'architecture', era:'1st century AD (Roman rebuilding)', lat:37.9430, lon:27.3420, place:'ephesus', conf:'certain',
  blurb:'A 25,000-seat theatre cut into the hillside above Ephesus\' harbour street, still substantially standing.',
  sig:'The setting Acts 19 gives for the silversmiths\' riot against Paul, where the crowd drags Gaius and Aristarchus and chants for Artemis for two hours.',
  src:['S. Ladstätter, on the Austrian excavations at Ephesus', 'See: https://turkisharchaeonews.net/object/great-theatre-ephesus'], wiki:'https://turkisharchaeonews.net/object/great-theatre-ephesus' },

{ id:'areopagus-athens', name:'The Areopagus', cat:'architecture', era:'in use since the Classical period', lat:37.9715, lon:23.7255, place:'athens', conf:'certain',
  blurb:'A bare rock outcrop below the Acropolis, seat of Athens\' ancient council and, by tradition, the platform for Paul\'s speech to the Athenians.',
  sig:'Traditional site of Acts 17:22–31, where Paul argues from an altar "to an unknown god" rather than from scripture — his one recorded sermon to a purely Gentile philosophical audience.',
  src:['R. E. Wycherley, on the topography of the Athenian Agora and Areopagus'], wiki:'https://en.wikipedia.org/wiki/Areopagus' },

{ id:'corinth-bema', name:'The Bema of Corinth', cat:'architecture', era:'1st century AD', lat:37.9058, lon:22.8783, place:'corinth', conf:'probable',
  blurb:'A raised speaker\'s platform in the excavated forum of Corinth, proposed as the tribunal where a Roman official heard public cases.',
  sig:'Commonly identified with the "judgment seat" (Greek bema) before which the Jews bring Paul to the proconsul Gallio in Acts 18:12–17 — a plausible match to the text, though the specific structure\'s use is not certain.',
  src:['C. K. Williams II, on the excavation of the Corinth forum', 'See: https://bibleplaces.com/blog/2013/08/picture-of-week-bema-at-corinth/'], wiki:'https://www.bibleplaces.com/blog/2013/08/picture-of-week-bema-at-corinth/' },

{ id:'philippi-forum-prison', name:'The Philippi Forum & Traditional Prison', cat:'architecture', era:'Roman colony, 1st century AD onward', lat:41.0128, lon:24.2871, place:'philippi', conf:'conjectural',
  blurb:'The excavated Roman forum of Philippi, beside which a vaulted cistern chamber has been venerated since Byzantine times as the prison of Paul and Silas.',
  sig:'A real Roman colonial forum matching Acts 16\'s setting for the beating and imprisonment of Paul and Silas; the specific "prison" identification is a much later tradition rather than an excavated certainty.',
  src:['M. Sève &amp; P. Weber, on the French excavations of Philippi'], wiki:'https://johnsanidopoulos.com/2018/06/the-prison-of-apostles-paul-and-silas.html' },

/* ——— COINS & ARTIFACTS ——— */
{ id:'tyrian-shekel', name:'The Tyrian Shekel', cat:'artifact', era:'minted 126 BC – AD 65/66', lat:33.2704, lon:35.2038, place:null, conf:'certain',
  blurb:'A silver shekel minted at Tyre to a stable, unusually high standard of purity, required by Temple custom for paying the half-shekel tax and buying sacrificial animals.',
  sig:'The coin behind Matthew 17:24–27, where Jesus tells Peter to pay the Temple tax with a coin from a fish\'s mouth — and behind the moneychangers he later overturns in the Temple courts (Mark 11:15).',
  src:['Y. Meshorer, <i>Ancient Jewish Coinage</i> (1982)'], wiki:'https://en.wikipedia.org/wiki/Tyrian_shekel' },

{ id:'widows-mite', name:"The 'Widow's Mite' (Lepton)", cat:'artifact', era:'2nd–1st century BC minting, circulating into the 1st century AD', lat:31.7780, lon:35.2354, place:'temple-mount', conf:'certain',
  blurb:'The smallest bronze coin in circulation in Jesus\' day, minted originally under the Hasmonean king Alexander Jannaeus and still used generations later.',
  sig:'Identified with the "two mites" (Greek lepta) a poor widow gives in the Temple treasury in Mark 12:41–44 — the coin\'s tiny, worn bronze makes the story\'s point about relative sacrifice concrete.',
  src:['Y. Meshorer, <i>Ancient Jewish Coinage</i> (1982)'], wiki:'https://en.wikipedia.org/wiki/Lesson_of_the_widow%27s_mite' },

{ id:'pilate-coins', name:"Pontius Pilate's Coinage", cat:'artifact', era:'AD 29–31', lat:32.4990, lon:34.8905, place:'caesarea', conf:'certain',
  blurb:'Small bronze prutot minted at Caesarea under Pilate, bearing Roman ritual objects — a libation ladle (simpulum) and a divining staff (lituus) — deliberately avoiding human images.',
  sig:'A second, independent body of evidence for Pilate\'s administration alongside the Pilate Stone, and a small sign of Roman sensitivity to Jewish aniconic custom that Pilate elsewhere ignored (as Josephus records).',
  src:['Y. Meshorer, <i>Ancient Jewish Coinage</i> (1982)'], wiki:'https://www.forumancientcoins.com/catalog/roman-and-greek-coins.asp?vpar=926' },

{ id:'antipas-coins', name:'Coins of Herod Antipas', cat:'artifact', era:'AD 4/5 – 39', lat:32.7940, lon:35.5320, place:'tiberias', conf:'certain',
  blurb:'Bronze coins minted by Antipas at Tiberias, using reeds, palm branches and wreaths rather than portraits or pagan images, unlike most Herodian and Roman coinage.',
  sig:'Physical evidence of Antipas\' careful balancing act — a Roman client ruler whose Galilean subjects (and whose own coinage) still expected Jewish restraint on graven images.',
  src:['Y. Meshorer, <i>Ancient Jewish Coinage</i> (1982)', 'See: https://www.forumancientcoins.com/catalog/roman-and-greek-coins.asp?vpar=926'], wiki:'https://www.forumancientcoins.com/catalog/roman-and-greek-coins.asp?vpar=926' },

{ id:'galilee-boat', name:'The Sea of Galilee Boat', cat:'artifact', era:'1st century BC – 1st century AD', lat:32.8433, lon:35.5211, place:'magdala', conf:'certain',
  blurb:'A 27-foot wooden fishing boat found in the lake mud near Ginosar during a 1986 drought, excavated and conserved over more than a decade.',
  sig:'The exact class of vessel the Gospels describe the disciples working and Jesus teaching from and calming a storm in (Mark 4:35–41) — the only such boat from this period ever recovered intact.',
  src:['S. Wachsmann, <i>The Sea of Galilee Boat</i> (2009)'], wiki:'https://en.wikipedia.org/wiki/Sea_of_Galilee_Boat' },

{ id:'magdala-net-weights', name:'Magdala Fishing Gear', cat:'artifact', era:'1st century AD', lat:32.8272, lon:35.5160, place:'magdala', conf:'certain',
  blurb:'Bronze fishhooks, lead net weights and stone anchors recovered from Magdala\'s excavated harbour and market quarter.',
  sig:'The everyday material culture of the lake\'s fishing economy — the trade Peter, Andrew, James and John left at a word (Mark 1:16–20).',
  src:['S. De Luca &amp; A. Lena, on the Magdala harbour excavations'], wiki:'https://en.wikipedia.org/wiki/Magdala' },

{ id:'herodian-lamps', name:'"Herodian" Oil Lamps', cat:'artifact', era:'1st century BC – 1st century AD', lat:31.7784, lon:35.2354, place:null, conf:'certain',
  blurb:'Small wheel-made, mould-finished clay lamps found by the thousands across Judea and Galilee — the standard household light of the period.',
  sig:'The literal object behind Jesus\' lamp sayings (Matthew 5:15, Luke 11:33) — a detail every first listener would have had sitting in their own house.',
  src:['R. Rosenthal &amp; R. Sivan, <i>Ancient Lamps in the Schloessinger Collection</i> (1978)', 'See: https://collections.carlos.emory.edu/objects/21990/herodian-lamp'], wiki:'https://collections.carlos.emory.edu/objects/21990/herodian-lamp' },

{ id:'judea-capta-coin', name:'"Judaea Capta" Coinage', cat:'artifact', era:'AD 71–96', lat:41.8930, lon:12.4830, place:'rome', conf:'certain',
  blurb:'A Roman coin series struck across the empire after AD 70, showing a mourning woman personifying Judea beneath a Roman trophy, captioned IVDAEA CAPTA.',
  sig:'Rome\'s own propaganda record of the fall of Jerusalem and the Temple that Jesus predicted would come (Luke 21:20–24) — struck within a generation of the Gospels\' composition.',
  src:['Y. Meshorer, <i>Ancient Jewish Coinage</i> (1982)'], wiki:'https://en.wikipedia.org/wiki/Judaea_Capta_coinage' },

/* ——— WAR & DESTRUCTION EVIDENCE ——— */
{ id:'arch-of-titus', name:'The Arch of Titus', cat:'destruction', era:'dedicated AD 81', lat:41.8925, lon:12.4853, place:'rome', conf:'certain',
  blurb:'A triumphal arch in the Roman Forum, its inner relief panel showing soldiers carrying the golden lampstand, the table of the showbread, and silver trumpets looted from the Jerusalem Temple.',
  sig:'The empire\'s own sculpted record of the Temple\'s fall in AD 70, showing the very furnishings the Gospels assume are still standing in the Temple Jesus visits.',
  src:['F. Millar, on the Flavian triumph and the Arch of Titus', 'S. Fine, on the menorah relief and its afterlife'], wiki:'https://en.wikipedia.org/wiki/Arch_of_Titus' },

{ id:'burnt-house-jerusalem', name:'The Burnt House', cat:'destruction', era:'destroyed AD 70', lat:31.7745, lon:35.2295, place:'caiaphas', conf:'certain',
  blurb:'A priestly-family house in Jerusalem\'s Upper City, excavated with its final destruction layer intact — collapsed roof beams, ash, a spear, cooking vessels, and a woman\'s forearm bones.',
  sig:'The clearest single excavated snapshot of the day the priestly aristocracy\'s Jerusalem — the same social world as Caiaphas — burned, matching Josephus\' account of the city\'s fall.',
  src:['N. Avigad, <i>Discovering Jerusalem</i> (1983)'], wiki:'https://en.wikipedia.org/wiki/Burnt_House' },

{ id:'masada-siege-ramp', name:'The Masada Siege Works', cat:'destruction', era:'AD 73', lat:31.3140, lon:35.3480, place:null, conf:'certain',
  blurb:'The Roman assault ramp, eight surrounding camps and circumvallation wall built by the Tenth Legion to take Masada, still visible on the ground and from the air.',
  sig:'Physical proof of the scale Rome brought against the last holdouts of the Jewish revolt — the same war that ends Jerusalem and the Temple within the living memory of the earliest church.',
  src:['Y. Yadin, <i>Masada: Herod\'s Fortress and the Zealots\' Last Stand</i> (1966)', 'Josephus, <i>War</i> 7.275–303, on the Roman siege works'], wiki:'https://en.wikipedia.org/wiki/Siege_of_Masada' },

{ id:'gamla-siege-remains', name:'The Gamla Siege Remains', cat:'destruction', era:'AD 67', lat:32.9019, lon:35.7439, place:null, conf:'certain',
  blurb:'Collapsed defensive walls, ballista stones and arrowheads from the Roman assault on Gamla, matching Josephus\' detailed account of the town\'s fall.',
  sig:'Confirms Josephus as a usable historical source for the war that reshapes the world the New Testament is written into, down to the specific tactics of a single siege.',
  src:['D. Syon, <i>Gamla III: The Shepherd\'s Settlement</i> (2014)', 'Josephus, <i>War</i> 4.1–83, on the siege of Gamla'], wiki:'https://en.wikipedia.org/wiki/Gamla' },

{ id:'jotapata-yodfat', name:'Jotapata (Yodfat)', cat:'destruction', era:'besieged AD 67', lat:32.8377, lon:35.2680, place:null, conf:'probable',
  blurb:'A fortified Galilean hill town where Josephus himself commanded the defence for 47 days before surrendering to Vespasian — excavations have found siege ramp material and catapult stones.',
  sig:'The site connects the historian whose <i>Jewish War</i> underwrites most non-biblical knowledge of first-century Judea to an event he witnessed and survived firsthand.',
  src:['D. Adan-Bayewitz &amp; M. Aviam, excavation reports on Yodfat', 'Josephus, <i>War</i> 3.141–339, his own account of the siege'], wiki:'https://en.wikipedia.org/wiki/Siege_of_Yodfat' },

{ id:'jerusalem-siege-wall', name:'Titus\' Siege Wall (Jerusalem)', cat:'destruction', era:'AD 70', lat:31.7860, lon:35.2400, place:'temple-mount', conf:'probable',
  blurb:'Traces of the roughly 5-mile circumvallation wall Josephus says Titus built around Jerusalem in three days to seal off any escape or resupply, sections of which have been proposed in surveys around the Old City.',
  sig:'The tactic that starves the city into the famine Josephus describes in grim detail, and the encirclement Jesus is remembered warning of in Luke 19:43–44.',
  src:['Josephus, <i>War</i> 5.499–511, on the building of the wall', 'K. Kenyon, <i>Digging Up Jerusalem</i> (1974), on the northern defences'], wiki:'https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(70_CE)' },

{ id:'robinsons-arch-rubble', name:"Robinson's Arch Destruction Debris", cat:'destruction', era:'AD 70', lat:31.7765, lon:35.2350, place:'temple-mount', conf:'certain',
  blurb:'Enormous Herodian ashlars from the Temple\'s southwest corner, still lying where they fell when the Roman army toppled the retaining wall and its arched stairway.',
  sig:'The single most visible, undisturbed physical trace anywhere of the Temple\'s violent end — stones exactly where the destruction the Gospels foretell (Mark 13:1–2) left them.',
  src:['B. Mazar, <i>The Mountain of the Lord</i> (1975)', 'R. Reich &amp; Y. Billig, on the Herodian street and its destruction debris'], wiki:'https://en.wikipedia.org/wiki/Robinson%27s_Arch' },

/* ——— ART, MOSAICS & OSSUARIES ——— */
{ id:'magdala-stone', name:'The Magdala Stone', cat:'art', era:'before AD 70', lat:32.8272, lon:35.5160, place:'magdala', conf:'certain',
  blurb:'A carved limestone block from the Magdala synagogue, its main face showing a seven-branched menorah flanked by columns and flanked by jars, possibly amphorae.',
  sig:'One of the earliest known depictions of the Temple menorah made before the Temple itself fell — plausibly by someone who had seen it — and the finest first-century synagogue carving yet found in Galilee.',
  src:['R. Sivan &amp; D. Solomon, on the iconography of the Magdala Stone'], wiki:'https://en.wikipedia.org/wiki/Magdala_stone' },

{ id:'hammat-tiberias-mosaic', name:'The Hammat Tiberias Mosaic', cat:'art', era:'4th century AD', lat:32.7770, lon:35.5450, place:'tiberias', conf:'certain',
  blurb:'A zodiac wheel with the sun-god Helios at its centre, laid into the floor of a synagogue at the hot springs south of Tiberias.',
  sig:'Shows how thoroughly Hellenistic artistic vocabulary had been absorbed into Jewish sacred space by late antiquity, in the very city that became a rabbinic centre — a useful caution against assuming "Jewish" and "Greek" were opposites.',
  src:['M. Dothan, <i>Hammath Tiberias: Early Synagogues and the Hellenistic and Roman Remains</i> (1983)'], wiki:'https://en.wikipedia.org/wiki/Hammat_Tiberias' },

{ id:'sepphoris-mosaic', name:'The "Mona Lisa of the Galilee"', cat:'art', era:'early 3rd century AD', lat:32.7524, lon:35.2794, place:'sepphoris', conf:'certain',
  blurb:'A richly detailed mosaic floor of a Dionysiac banquet in a Roman villa at Sepphoris, its central female figure nicknamed for her lifelike gaze.',
  sig:'Evidence of the Greco-Roman artistic sophistication present four miles from Nazareth within a generation or two of Jesus\' childhood there — the cultural world just over the ridge.',
  src:['E. M. Meyers, E. Netzer &amp; C. L. Meyers, <i>Sepphoris</i> (1992)'], wiki:'https://www.pbs.org/wnet/story-jews/explore-the-diaspora/mosaic/' },

{ id:'dura-europos', name:'Dura-Europos House-Church & Synagogue', cat:'art', era:'c. AD 232–256', lat:34.7500, lon:40.7300, place:null, conf:'certain',
  blurb:'A Roman garrison town on the Euphrates preserving both the oldest known purpose-built Christian house-church and an elaborately frescoed synagogue, buried and preserved by a defensive rampart before the city fell.',
  sig:'The earliest surviving narrative biblical wall paintings anywhere — biblical scenes on the synagogue walls, and a baptistery in the church — showing how the first visual language of Christian art took shape a generation or two after the New Testament.',
  src:['C. H. Kraeling, <i>The Christian Building</i> (Dura-Europos Final Report VIII.2, 1967)', 'A. R. Bellinger et al., <i>The Synagogue</i> (Dura-Europos Final Report VIII.1)'], wiki:'https://en.wikipedia.org/wiki/Dura-Europos_church' },

{ id:'megiddo-mosaic', name:'The Megiddo (Legio) Prayer Hall Mosaic', cat:'art', era:'early–mid 3rd century AD', lat:32.5850, lon:35.1830, place:null, conf:'certain',
  blurb:'A mosaic floor from a Roman-period prayer hall near Legio, next to Megiddo, dedicated by a Roman centurion and bearing one of the earliest inscriptions anywhere naming "Jesus Christ" in a place of worship.',
  sig:'Among the oldest archaeological evidence for organised Christian worship, remarkable for standing on a Roman military base rather than in a private house — worship spreading inside the empire\'s own institutions within two centuries of the Gospels.',
  src:['Y. Tepper &amp; L. Di Segni, <i>A Christian Prayer Hall of the Third Century CE at Kefar \'Othnay (Legio)</i> (2006)'], wiki:'https://en.wikipedia.org/wiki/Megiddo_church_(Israel)' },

{ id:'jerusalem-ossuaries', name:'Decorated Jerusalem Ossuaries', cat:'art', era:'1st century BC – AD 70', lat:31.7735, lon:35.2410, place:null, conf:'certain',
  blurb:'Limestone bone boxes carved with rosettes, palm branches and geometric patterns, used across a single century by Jerusalem\'s wealthier families to gather a body\'s bones after the flesh decayed.',
  sig:'The material custom behind the Gospel burial and resurrection narratives — a body laid first in a shrouded niche, then later gathered into a box exactly like these, in a family tomb exactly like the one Joseph of Arimathea offers (Matthew 27:57–60).',
  src:['L. Y. Rahmani, <i>A Catalogue of Jewish Ossuaries in the Collections of the State of Israel</i> (1994)'], wiki:'https://en.wikipedia.org/w/index.php?search=ossuary%20Second%20Temple%20Jerusalem%20burial&title=Special:Search&fulltext=1&ns0=1' },

{ id:'rome-catacomb-art', name:'Early Christian Catacomb Art', cat:'art', era:'2nd–4th century AD', lat:41.9280, lon:12.5030, place:'rome', conf:'certain',
  blurb:'Wall paintings in Rome\'s underground burial galleries — the Good Shepherd, fish, anchors, and scenes of Jonah and Daniel — painted by a community that could not yet build openly.',
  sig:'Shows the church Paul\'s letter reaches (Romans 1) still finding a visual language a century or more later, using coded, borrowed and reworked imagery before any distinctly "Christian" art style existed.',
  src:['R. Jensen, <i>Understanding Early Christian Art</i> (2000)'], wiki:'https://en.wikipedia.org/wiki/Catacombs_of_Rome' },

/* ——— catalog import: additional finds with confirmed findspot coordinates ——— */
{ id:'nt-sergius-paulus-inscription-from-soloi', name:'Sergius Paulus inscription from Soloi', cat:'inscription', era:'Roman imperial period', conf:'probable', lat:35.1667, lon:32.85,
  blurb:'Roman imperial period. Findspot: Soloi. May not refer to the same individual.',
  sig:'Inscriptional name parallel supports the senatorial family attested in Acts. (Acts 13:7-12)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Sergius_Paulus' },

{ id:'nt-sergius-paulus-inscription-from-chytri', name:'Sergius Paulus inscription from Chytri', cat:'inscription', era:'First century CE', conf:'probable', lat:35.2833, lon:33.4167,
  blurb:'First century CE. Findspot: Chytri. Identity debated.',
  sig:'Epigraphic evidence names a Sergius Paulus in Cypriot context. (Acts 13:7-12)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Sergius_Paulus' },

{ id:'nt-lucius-sergius-paullus-inscription-from-', name:'Lucius Sergius Paullus inscription from Antioch region', cat:'inscription', era:'First century CE', conf:'probable', lat:38.3062, lon:31.19,
  blurb:'First century CE. Findspot: Pisidian Antioch. Exact individual uncertain.',
  sig:'Senatorial-family inscription supports the social plausibility of Luke\'s proconsul. (Acts 13:7-12)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Sergius_Paulus' },

{ id:'nt-lysanias-inscription-of-abila', name:'Lysanias inscription of Abila', cat:'inscription', era:'14-29 CE range', conf:'certain', lat:33.7167, lon:36.2333,
  blurb:'14-29 CE range. Findspot: Abila of Lysanias. Whether it refers to Luke\'s Lysanias discussed.',
  sig:'Temple inscription names Lysanias as tetrarch and supports Luke\'s regional title. (Luke 3:1)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Lysanias' },

{ id:'nt-theodotus-synagogue-inscription', name:'Theodotus synagogue inscription', cat:'inscription', era:'First century BCE or first century CE', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'First century BCE or first century CE. Findspot: Jerusalem.',
  sig:'Greek inscription names a synagogue, priestly founder, guest rooms, and water facilities in Jerusalem. (Acts 6:9)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Theodotos_inscription' },

{ id:'nt-shimon-bar-yonah-ossuary', name:'Shimon bar Yonah ossuary', cat:'inscription', era:'First century CE', conf:'contested', lat:31.777, lon:35.244,
  blurb:'First century CE. Findspot: Dominus Flevit Jerusalem. Names common; no basis for identifying Peter.',
  sig:'Aramaic name resembles Simon son of Jonah. (Matt 16:17; John 1:42)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Shimon%20bar%20Yonah%20ossuary' },

{ id:'nt-yehohanan-crucified-man-ossuary', name:'Yehohanan crucified man ossuary', cat:'inscription', era:'First century CE', conf:'certain', lat:31.789, lon:35.223,
  blurb:'First century CE. Findspot: Giv\'at ha-Mivtar Jerusalem.',
  sig:'Heel bone pierced by an iron nail provides direct osteological evidence for Roman crucifixion in Judea. (Crucifixion narratives)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Jehohanan' },

{ id:'nt-abba-cave-inscription-and-remains', name:'Abba cave inscription and remains', cat:'inscription', era:'First century BCE to first century CE', conf:'probable', lat:31.7784, lon:35.2354,
  blurb:'First century BCE to first century CE. Findspot: Jerusalem. Identification with Mattathias Antigonus disputed.',
  sig:'Aramaic inscription and remains have been tied to a Jerusalem returnee and contested royal identification. (Context for elite and political burials)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Abba%20cave%20inscription%20and%20remains' },

{ id:'nt-nicanor-ossuary', name:'Nicanor ossuary', cat:'inscription', era:'First century CE', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'First century CE. Findspot: Jerusalem.',
  sig:'Greek and Hebrew inscription honors Nicanor who made Temple doors, linking diaspora benefaction with Jerusalem. (Acts 6:5 context; Temple pilgrimage)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Cave_of_Nicanor' },

{ id:'nt-tomb-of-the-sons-of-hezir-inscription', name:'Tomb of the Sons of Hezir inscription', cat:'inscription', era:'Second century BCE', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'Second century BCE. Findspot: Jerusalem.',
  sig:'Hebrew inscription names a priestly family and titles. (Priestly aristocracy context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Tomb_of_Benei_Hezir' },

{ id:'nt-uzziah-plaque', name:'Uzziah plaque', cat:'inscription', era:'Second Temple period', conf:'certain', lat:31.7784, lon:35.2455,
  blurb:'Second Temple period. Findspot: Jerusalem / Mount of Olives.',
  sig:'Aramaic plaque records the relocation of King Uzziah\'s bones. (Matt 1:8-9 context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Uzziah%20plaque' },

{ id:'nt-place-of-trumpeting-inscription', name:'Place of Trumpeting inscription', cat:'inscription', era:'First century CE', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'First century CE. Findspot: Jerusalem.',
  sig:'Hebrew inscription marks a designated trumpet location on the Temple enclosure. (Temple and trumpet passages)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Trumpeting_Place_inscription' },

{ id:'nt-corban-inscription', name:'Corban inscription', cat:'inscription', era:'Second Temple period', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'Second Temple period. Findspot: Jerusalem.',
  sig:'Inscribed stone vessel uses the term qorban and illuminates the dedicated-gift vocabulary criticized by Jesus. (Mark 7:11)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Corban%20inscription' },

{ id:'nt-benjamin-inscription-from-temple-mount-r', name:'Benjamin inscription from Temple Mount rubble', cat:'inscription', era:'Second Temple period', conf:'contested', lat:31.7784, lon:35.2354,
  blurb:'Second Temple period. Findspot: Jerusalem. Fragmentary and derived from unsupervised spoil.',
  sig:'Fragmentary Hebrew inscription may name Benjamin and a donation or chamber. (Tribal and Temple context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Benjamin%20inscription%20from%20Temple%20Mount%20rubble' },

{ id:'nt-jerusalem-menorah-graffito', name:'Jerusalem menorah graffito', cat:'inscription', era:'First century CE', conf:'probable', lat:31.7784, lon:35.2354,
  blurb:'First century CE. Findspot: Jerusalem. Dating and interpretation discussed.',
  sig:'Incised menorah image may preserve a contemporary representation of the Temple lampstand. (John 10:22; Temple context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Jerusalem%20menorah%20graffito' },

{ id:'nt-house-of-david-menorah-plaster-drawing', name:'House of David menorah plaster drawing', cat:'inscription', era:'First century CE', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'First century CE. Findspot: Jerusalem.',
  sig:'Wall drawing in an elite house depicts a seven-branched menorah. (Temple context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=House%20of%20David%20menorah%20plaster%20drawing' },

{ id:'nt-heliodorus-stele', name:'Heliodorus Stele', cat:'inscription', era:'178 BCE', conf:'certain', lat:31.5386, lon:34.9633,
  blurb:'178 BCE. Findspot: Marisa / Maresha.',
  sig:'Administrative inscription illuminates Temple finance and Seleucid authority behind later Jewish institutions. (Second Temple institutional context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Heliodorus_stele' },

{ id:'nt-abba-saqqara-jesus-inscription', name:'Abba Saqqara Jesus inscription', cat:'inscription', era:'First to third centuries CE debated', conf:'probable', lat:29.871, lon:31.216,
  blurb:'First to third centuries CE debated. Findspot: Saqqara. Dating and reading require specialist verification.',
  sig:'Inscribed pottery sherd with an invocation of Jesus is cited among early Christian Egyptian texts. (Early Christian reception)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Abba%20Saqqara%20Jesus%20inscription' },

{ id:'nt-alexamenos-graffito', name:'Alexamenos graffito', cat:'inscription', era:'Late first to third century CE', conf:'probable', lat:41.893, lon:12.483,
  blurb:'Late first to third century CE. Findspot: Rome. Date and Christian interpretation debated.',
  sig:'Graffito mocks a worshiper of a crucified, donkey-headed figure and may caricature Christianity. (Crucifixion and early Christian reception)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Alexamenos_graffito' },

{ id:'nt-palatine-alexamenos-believer-graffito', name:'Palatine Alexamenos believer graffito', cat:'inscription', era:'Roman imperial period', conf:'probable', lat:41.893, lon:12.483,
  blurb:'Roman imperial period. Findspot: Rome.',
  sig:'Separate graffito reading Alexamenos is faithful may answer or accompany the better-known mockery. (Early Christian reception)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Alexamenos_graffito' },

{ id:'nt-megiddo-christian-mosaic-inscription', name:'Megiddo Christian mosaic inscription', cat:'inscription', era:'Third century CE', conf:'certain', lat:32.576, lon:35.18,
  blurb:'Third century CE. Findspot: Legio / Megiddo. Postdates New Testament.',
  sig:'Mosaic names God Jesus Christ and donors in an early Christian prayer hall. (Early Christian worship context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Megiddo_church_(Israel)' },

{ id:'nt-dura-europos-christian-building-inscript', name:'Dura Europos Christian building inscriptions', cat:'inscription', era:'Mid-third century CE', conf:'certain', lat:34.75, lon:40.73,
  blurb:'Mid-third century CE. Findspot: Dura-Europos. Postdates New Testament.',
  sig:'Graffiti and paintings in the house church document early Christian ritual and Gospel scenes. (Gospel reception and baptism)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Dura-Europos_church' },

{ id:'nt-dura-europos-baptistery-paintings', name:'Dura Europos baptistery paintings', cat:'inscription', era:'Mid-third century CE', conf:'certain', lat:34.75, lon:40.73,
  blurb:'Mid-third century CE. Findspot: Dura-Europos.',
  sig:'Painted Gospel scenes are among the earliest surviving Christian narrative images. (Matt 14; Mark 5; John 10; baptism texts)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Dura-Europos_church' },

{ id:'nt-sator-square-at-pompeii', name:'Sator Square at Pompeii', cat:'inscription', era:'Before 79 CE', conf:'contested', lat:40.75, lon:14.49,
  blurb:'Before 79 CE. Findspot: Pompeii. Christian interpretation widely disputed.',
  sig:'Word-square has been interpreted as a concealed Christian sign because its letters form Pater Noster crosses. (Early Christian reception candidate)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Sator_Square' },

{ id:'nt-rotas-square-at-dura-europos', name:'Rotas Square at Dura Europos', cat:'inscription', era:'Roman period', conf:'contested', lat:34.75, lon:40.73,
  blurb:'Roman period. Findspot: Dura-Europos. Religious meaning disputed.',
  sig:'Second word-square example informs debates over Christian use of the formula. (Early Christian reception candidate)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Sator_Square' },

{ id:'nt-delphi-claudius-gallio-rescript', name:'Delphi Claudius Gallio rescript', cat:'inscription', era:'52 CE', conf:'certain', lat:38.4824, lon:22.501,
  blurb:'52 CE. Findspot: Delphi.',
  sig:'Fragmentary Greek imperial inscription is the principal external chronological anchor for Paul\'s career. (Acts 18:12-17)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Delphi_Inscription' },

{ id:'nt-monumentum-ancyranum', name:'Monumentum Ancyranum', cat:'inscription', era:'14 CE copy of Augustan text', conf:'certain', lat:39.9334, lon:32.8597,
  blurb:'14 CE copy of Augustan text. Findspot: Ancyra.',
  sig:'Bilingual monumental copy of Augustus\' Res Gestae documents imperial administration and ideology. (Luke 2:1; imperial decrees and censuses)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Temple_of_Augustus_and_Rome' },

{ id:'nt-priene-calendar-inscription', name:'Priene calendar inscription', cat:'inscription', era:'9 BCE', conf:'certain', lat:37.66, lon:27.2967,
  blurb:'9 BCE. Findspot: Priene.',
  sig:'Inscription calls Augustus\' birth the beginning of good tidings for the world. (Mark 1:1; Luke 2:10-14; imperial gospel language)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Priene_calendar_inscription' },

{ id:'nt-myra-imperial-cult-inscription', name:'Myra imperial cult inscription', cat:'inscription', era:'Roman period', conf:'certain', lat:36.2554, lon:29.9647,
  blurb:'Roman period. Findspot: Myra.',
  sig:'Local inscriptions document civic honor and ruler cult at Paul\'s transfer port. (Acts 27:5; imperial context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Myra' },

{ id:'nt-aphrodisias-sebasteion-inscriptions', name:'Aphrodisias Sebasteion inscriptions', cat:'inscription', era:'Julio-Claudian period', conf:'certain', lat:37.7083, lon:28.7275,
  blurb:'Julio-Claudian period. Findspot: Aphrodisias.',
  sig:'Reliefs and labels visualize peoples, emperors, gods, and conquest under the Julio-Claudians. (Luke 2; Acts 17; Rev imperial ideology)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Aphrodisias' },

{ id:'nt-herod-agrippa-i-inscription', name:'Herod Agrippa I inscription', cat:'inscription', era:'41-44 CE', conf:'certain', lat:32.5, lon:34.892,
  blurb:'41-44 CE. Findspot: Judea / Caesarea.',
  sig:'Inscriptions and coins establish Agrippa\'s royal titles and public benefaction. (Acts 12)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Herod_Agrippa' },

{ id:'nt-agrippa-ii-inscription-from-beirut', name:'Agrippa II inscription from Beirut', cat:'inscription', era:'First century CE', conf:'certain', lat:33.8938, lon:35.5018,
  blurb:'First century CE. Findspot: Berytus.',
  sig:'Royal inscriptional evidence documents Agrippa II\'s titles and building patronage. (Acts 25-26)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Herod_Agrippa_II' },

{ id:'nt-quirinius-inscription-from-antioch-pisid', name:'Quirinius inscription from Antioch Pisidia', cat:'inscription', era:'Roman imperial period', conf:'contested', lat:38.3062, lon:31.19,
  blurb:'Roman imperial period. Findspot: Pisidian Antioch. Does not securely resolve Luke\'s census chronology.',
  sig:'Honorary inscriptions have been drawn into debate over Quirinius\' offices. (Luke 2:2)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Quirinius' },

{ id:'nt-lapis-tiburtinus', name:'Lapis Tiburtinus', cat:'inscription', era:'Augustan period', conf:'contested', lat:41.9633, lon:12.7961,
  blurb:'Augustan period. Findspot: Tivoli. Identification uncertain.',
  sig:'Fragmentary career inscription of an unnamed governor has been proposed in Quirinius debates. (Luke 2:2)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Lapis%20Tiburtinus' },

{ id:'nt-claudian-expulsion-evidence-from-rome', name:'Claudian expulsion evidence from Rome', cat:'inscription', era:'49 CE context', conf:'probable', lat:41.893, lon:12.483,
  blurb:'49 CE context. Findspot: Rome. Primarily literary rather than archaeological.',
  sig:'Suetonius and Roman chronology support an expulsion of Jews under Claudius; material evidence is indirect. (Acts 18:2)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Claudius%27_expulsion_of_Jews_from_Rome' },

{ id:'nt-famine-inscription-of-queen-helena', name:'Famine inscription of Queen Helena', cat:'inscription', era:'First century CE context', conf:'probable', lat:31.7784, lon:35.2354,
  blurb:'First century CE context. Findspot: Jerusalem. Relief details are literary; tomb is archaeological.',
  sig:'Monuments and Josephus link Helena of Adiabene with famine relief in Jerusalem. (Acts 11:27-30)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Helena_of_Adiabene' },

{ id:'nt-claudius-letter-to-the-alexandrians', name:'Claudius letter to the Alexandrians', cat:'inscription', era:'41 CE', conf:'certain', lat:31.2001, lon:29.9187,
  blurb:'41 CE. Findspot: Alexandria.',
  sig:'Papyrus letter documents imperial management of Jewish-Greek conflict. (Acts 18:2; Jewish diaspora context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Claudius%20letter%20to%20the%20Alexandrians' },

{ id:'nt-edict-of-claudius-from-delphi', name:'Edict of Claudius from Delphi', cat:'inscription', era:'52 CE', conf:'certain', lat:38.4824, lon:22.501,
  blurb:'52 CE. Findspot: Delphi.',
  sig:'Same Gallio rescript corpus fixes the proconsular date. (Acts 18:12)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Delphi_Inscription' },

{ id:'nt-titulus-of-the-cross-at-santa-croce', name:'Titulus of the Cross at Santa Croce', cat:'inscription', era:'Medieval object claiming ancient origin', conf:'contested', lat:41.893, lon:12.483,
  blurb:'Medieval object claiming ancient origin. Findspot: Rome. Radiocarbon and paleographic concerns weigh against authenticity.',
  sig:'Wooden inscription fragment is venerated as part of Jesus\' titulus. (John 19:19-20)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Titulus_Crucis' },

{ id:'nt-peter-footprint-inscription-at-domine-qu', name:'Peter footprint inscription at Domine Quo Vadis', cat:'inscription', era:'Roman road slab; later tradition', conf:'contested', lat:41.893, lon:12.483,
  blurb:'Roman road slab; later tradition. Findspot: Rome. Traditional attribution.',
  sig:'Votive footprints became linked to Peter\'s departure from Rome. (John 21:18-19 reception)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Santa_Maria_in_Palmis' },

{ id:'nt-ichthys-inscription-of-abercius', name:'Ichthys inscription of Abercius', cat:'inscription', era:'Late second century CE', conf:'certain', lat:37.925, lon:29.125,
  blurb:'Late second century CE. Findspot: Hierapolis region. Postdates New Testament.',
  sig:'Christian epitaph uses shepherd, fish, wine, and bread imagery. (Early Christian reception)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Inscription_of_Abercius' },

{ id:'nt-inscription-of-pectorius', name:'Inscription of Pectorius', cat:'inscription', era:'Second to fourth centuries CE', conf:'certain', lat:46.95, lon:4.3,
  blurb:'Second to fourth centuries CE. Findspot: Autun. Postdates New Testament.',
  sig:'Greek Christian poem uses fish and eucharistic imagery. (Early Christian reception)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Inscription%20of%20Pectorius' },

{ id:'nt-nce-156-christian-inscription-from-naro', name:'NCE 156 Christian inscription from Naro', cat:'inscription', era:'Third century CE', conf:'probable', lat:36.7333, lon:10.3333,
  blurb:'Third century CE. Findspot: Naro. Catalog designation requires epigraphic verification.',
  sig:'Latin funerary evidence documents North African Christianity. (Early Christian reception)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=NCE%20156%20Christian%20inscription%20from%20Naro' },

{ id:'nt-ephesian-artemis-coin', name:'Ephesian Artemis coin', cat:'artifact', era:'Roman period', conf:'certain', lat:37.941, lon:27.341,
  blurb:'Roman period. Findspot: Ephesus.',
  sig:'Local civic coins depict Artemis and her temple. (Acts 19:23-35)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Temple_of_Artemis' },

{ id:'nt-corinthian-isthmian-games-coin', name:'Corinthian Isthmian Games coin', cat:'artifact', era:'Roman period', conf:'certain', lat:37.906, lon:22.879,
  blurb:'Roman period. Findspot: Corinth.',
  sig:'Festival coinage advertises athletic identity and prizes. (1 Cor 9:24-27)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Isthmian_Games' },

{ id:'nt-caesarea-maritima-harbor-coin', name:'Caesarea Maritima harbor coin', cat:'artifact', era:'Herodian and Roman periods', conf:'certain', lat:32.5, lon:34.892,
  blurb:'Herodian and Roman periods. Findspot: Caesarea Maritima.',
  sig:'City coins depict harbor or civic symbols relevant to the provincial capital. (Acts 10; 12; 23-27)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Caesarea_Maritima' },

{ id:'nt-reina-stone-vessel-workshop', name:'Reina stone-vessel workshop', cat:'artifact', era:'Roman period', conf:'certain', lat:32.756, lon:35.235,
  blurb:'Roman period. Findspot: Reina.',
  sig:'Quarry and manufacturing cave document industrial production of chalk vessels near Nazareth and Cana. (John 2:6; Jewish purity context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Stone_vessel' },

{ id:'nt-hizma-stone-vessel-workshop', name:'Hizma stone-vessel workshop', cat:'artifact', era:'Second Temple period', conf:'certain', lat:31.836, lon:35.254,
  blurb:'Second Temple period. Findspot: Hizma.',
  sig:'Workshop debris demonstrates large-scale Judean production. (John 2:6; Mark 7:1-4)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Stone_vessel' },

{ id:'nt-jerusalem-ossuary-corpus', name:'Jerusalem ossuary corpus', cat:'artifact', era:'First century BCE to first century CE', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'First century BCE to first century CE. Findspot: Jerusalem.',
  sig:'Hundreds of limestone bone boxes define elite and middle-status secondary burial practice. (Matt 23:27; 27:57-60; John 11:17-44; 19:38-42)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Ossuary' },

{ id:'nt-shroud-textile-from-akeldama-tomb', name:'Shroud textile from Akeldama tomb', cat:'artifact', era:'First century CE', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'First century CE. Findspot: Jerusalem.',
  sig:'Rare preserved wool shroud and hair offer direct evidence for burial wrapping. (John 11:44; 19:40; 20:5-7)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Akeldama' },

{ id:'nt-roman-dice-from-jerusalem', name:'Roman dice from Jerusalem', cat:'artifact', era:'Roman period', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'Roman period. Findspot: Jerusalem.',
  sig:'Gaming pieces and dice contextualize soldiers casting lots. (Matt 27:35; Mark 15:24; Luke 23:34; John 19:24)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Dice' },

{ id:'nt-vindolanda-writing-tablets', name:'Vindolanda writing tablets', cat:'artifact', era:'Late first to second centuries CE', conf:'certain', lat:54.99, lon:-2.36,
  blurb:'Late first to second centuries CE. Findspot: Vindolanda.',
  sig:'Ink tablets preserve ordinary military orders, invitations, supply lists, and literacy. (Luke 7:8; Acts 10; military and letter context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Vindolanda_tablets' },

{ id:'nt-vindolanda-sandal-assemblage', name:'Vindolanda sandal assemblage', cat:'artifact', era:'Late first to second centuries CE', conf:'certain', lat:54.99, lon:-2.36,
  blurb:'Late first to second centuries CE. Findspot: Vindolanda.',
  sig:'Large footwear corpus documents soldiers, women, and children at a Roman fort. (Eph 6:15; Roman military context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Vindolanda' },

{ id:'nt-qumran-tefillin', name:'Qumran tefillin', cat:'artifact', era:'Second Temple period', conf:'certain', lat:31.7415, lon:35.4592,
  blurb:'Second Temple period. Findspot: Qumran caves.',
  sig:'Phylacteries and cases give direct material evidence for the practice Jesus mentions. (Matt 23:5)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Tefillin' },

{ id:'nt-qumran-mezuzot', name:'Qumran mezuzot', cat:'artifact', era:'Second Temple period', conf:'certain', lat:31.7415, lon:35.4592,
  blurb:'Second Temple period. Findspot: Qumran caves.',
  sig:'Doorpost texts document embodied Torah observance. (Matt 23:5 context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Mezuzah' },

{ id:'nt-qumran-ritual-baths', name:'Qumran ritual baths', cat:'artifact', era:'Second Temple period', conf:'certain', lat:31.7415, lon:35.4592,
  blurb:'Second Temple period. Findspot: Qumran.',
  sig:'Pools and water systems illuminate Jewish purification without equating it with Christian baptism. (Mark 1:4-8; Acts 2:38; Heb 6:2)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Qumran' },

{ id:'nt-babatha-archive', name:'Babatha archive', cat:'artifact', era:'93-132 CE', conf:'certain', lat:31.42, lon:35.39,
  blurb:'93-132 CE. Findspot: Cave of Letters. Slightly later than most New Testament texts.',
  sig:'Contracts on marriage, divorce, guardianship, and property illuminate provincial Jewish law. (Matt 5:31-32; 19:3-9; Rom 7:1-3; legal context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Babatha' },

{ id:'nt-murabbaat-papyri', name:'Murabbaat papyri', cat:'artifact', era:'Roman period', conf:'certain', lat:31.744, lon:35.398,
  blurb:'Roman period. Findspot: Wadi Murabbaat.',
  sig:'Biblical, documentary, and revolt texts broaden the Judean manuscript environment. (Scripture and legal-document context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Wadi_Murabba%27at' },

{ id:'nt-en-gedi-synagogue-mosaic', name:'En Gedi synagogue mosaic', cat:'artifact', era:'Late antique period', conf:'certain', lat:31.461, lon:35.3822,
  blurb:'Late antique period. Findspot: Ein Gedi. Postdates New Testament.',
  sig:'Mosaic includes community donors and a curse protecting a secret. (Rev 22:18-19; book secrecy and community context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Ein_Gedi_(archaeological_site)' },

{ id:'nt-jerusalem-oil-lamps-with-menorah-motifs', name:'Jerusalem oil lamps with menorah motifs', cat:'artifact', era:'Late Second Temple and Roman periods', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'Late Second Temple and Roman periods. Findspot: Jerusalem.',
  sig:'Lamps provide direct evidence for domestic lighting and Jewish symbols. (Matt 5:15; 25:1-13; Rev 1:12)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Oil_lamp' },

{ id:'nt-roman-millstone-from-capernaum', name:'Roman millstone from Capernaum', cat:'artifact', era:'Roman period', conf:'certain', lat:32.8808, lon:35.5751,
  blurb:'Roman period. Findspot: Capernaum.',
  sig:'Large basalt mill illustrates the donkey-turned stone in Jesus\' warning. (Matt 18:6; Mark 9:42)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Millstone' },

{ id:'nt-roman-amphorae-from-caesarea-harbor', name:'Roman amphorae from Caesarea harbor', cat:'artifact', era:'Roman period', conf:'certain', lat:32.5, lon:34.892,
  blurb:'Roman period. Findspot: Caesarea Maritima.',
  sig:'Imported containers reveal wine, oil, fish sauce, and trade networks. (Acts 10; 23-27; trade context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Amphora' },

{ id:'nt-jerusalem-measuring-vessels-and-weights', name:'Jerusalem measuring vessels and weights', cat:'artifact', era:'Second Temple period', conf:'certain', lat:31.7784, lon:35.2354,
  blurb:'Second Temple period. Findspot: Jerusalem.',
  sig:'Standard weights and measures support market and judgment metaphors. (Matt 7:2; Mark 4:24; Luke 6:38; Rev 6:5)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement' },

{ id:'nt-pompeii-carbonized-bread-loaves', name:'Pompeii carbonized bread loaves', cat:'artifact', era:'79 CE', conf:'certain', lat:40.75, lon:14.49,
  blurb:'79 CE. Findspot: Pompeii.',
  sig:'Preserved loaves show shape, scoring, baking, and distribution. (Bread passages and Eucharistic context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Pompeii' },

{ id:'nt-herculaneum-food-remains', name:'Herculaneum food remains', cat:'artifact', era:'79 CE', conf:'certain', lat:40.8067, lon:14.3486,
  blurb:'79 CE. Findspot: Herculaneum.',
  sig:'Sewers and carbonized foods reveal varied urban diets. (Diet and household context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Herculaneum' },

{ id:'nt-roman-dining-couches-from-pompeian-house', name:'Roman dining couches from Pompeian houses', cat:'artifact', era:'First century CE', conf:'certain', lat:40.75, lon:14.49,
  blurb:'First century CE. Findspot: Pompeii.',
  sig:'Triclinia explain reclining, status positions, and banquet interaction. (Luke 7:36-50; 14:1-24; John 13)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Triclinium' },

{ id:'nt-corinthian-meat-market-remains', name:'Corinthian meat-market remains', cat:'artifact', era:'Roman period', conf:'certain', lat:37.906, lon:22.879,
  blurb:'Roman period. Findspot: Corinth.',
  sig:'Shops, bones, and sanctuaries frame Paul\'s instructions about idol meat. (1 Cor 8:1-13; 10:25-28)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Ancient_Corinth' },

{ id:'nt-ephesus-gladiator-cemetery', name:'Ephesus gladiator cemetery', cat:'artifact', era:'Roman period', conf:'certain', lat:37.941, lon:27.341,
  blurb:'Roman period. Findspot: Ephesus. Paul\'s fighting beasts may be metaphorical.',
  sig:'Skeletal trauma and tombstones document professional combat at Ephesus. (1 Cor 15:32; spectacle context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Ephesus' },

{ id:'nt-gladiator-reliefs-from-ephesus', name:'Gladiator reliefs from Ephesus', cat:'artifact', era:'Roman period', conf:'certain', lat:37.941, lon:27.341,
  blurb:'Roman period. Findspot: Ephesus.',
  sig:'Reliefs visualize arena combat and public spectacle. (1 Cor 15:32)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Ephesus' },

{ id:'nt-delos-slave-market-evidence', name:'Delos slave-market evidence', cat:'artifact', era:'Hellenistic and early Roman periods', conf:'probable', lat:37.3961, lon:25.2694,
  blurb:'Hellenistic and early Roman periods. Findspot: Delos. Specific market architecture identification debated.',
  sig:'Commercial installations and inscriptions illuminate large-scale enslavement and trade. (Slavery context in Pauline letters)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Slavery_in_ancient_Greece' },

{ id:'nt-ephesian-magical-amulets', name:'Ephesian magical amulets', cat:'artifact', era:'Hellenistic and Roman periods', conf:'certain', lat:37.941, lon:27.341,
  blurb:'Hellenistic and Roman periods. Findspot: Ephesus.',
  sig:'Inscribed gems and formulae illuminate Ephesus\' reputation for magical practice. (Acts 19:13-20)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Magic_in_the_Greco-Roman_world' },

{ id:'nt-ephesia-grammata-amulet-tradition', name:'Ephesia grammata amulet tradition', cat:'artifact', era:'Classical and Roman periods', conf:'probable', lat:37.941, lon:27.341,
  blurb:'Classical and Roman periods. Findspot: Ephesus. Corpus spans long periods.',
  sig:'Magical words associated with Artemis provide local background for burned books. (Acts 19:19)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Ephesia_Grammata' },

{ id:'nt-paphos-curse-tablets', name:'Paphos curse tablets', cat:'artifact', era:'Hellenistic and Roman periods', conf:'certain', lat:34.757, lon:32.406,
  blurb:'Hellenistic and Roman periods. Findspot: Paphos.',
  sig:'Defixiones illuminate ritual specialists and competitive magic around Roman Cyprus. (Acts 13:6-12)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Curse_tablet' },

{ id:'nt-pompeii-wax-tablets-of-lucius-caecilius-', name:'Pompeii wax tablets of Lucius Caecilius Jucundus', cat:'artifact', era:'First century CE', conf:'certain', lat:40.75, lon:14.49,
  blurb:'First century CE. Findspot: Pompeii.',
  sig:'Receipts and contracts preserve routine credit, auctions, taxes, and agency. (Matt 18:23-35; Luke 16; financial context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Lucius_Caecilius_Iucundus' },

{ id:'nt-bloomberg-tablets-from-roman-london', name:'Bloomberg tablets from Roman London', cat:'artifact', era:'First century CE', conf:'certain', lat:51.5074, lon:-0.1278,
  blurb:'First century CE. Findspot: Londinium.',
  sig:'Early writing tablets preserve names, debts, deliveries, and schooling across the empire. (Letter and commerce context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Bloomberg_tablets' },

{ id:'nt-papyrus-115-oxyrhynchus-4499', name:'Papyrus 115 Oxyrhynchus 4499', cat:'manuscript', era:'Third or fourth century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third or fourth century CE. Findspot: Oxyrhynchus.',
  sig:'Early Revelation witness famously reads 616 for the beast\'s number. (Revelation 2-15 fragments)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_115' },

{ id:'nt-papyrus-137-oxyrhynchus-5345', name:'Papyrus 137 Oxyrhynchus 5345', cat:'manuscript', era:'Late second or early third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Late second or early third century CE. Findspot: Oxyrhynchus.',
  sig:'Early fragment of Mark, published after sensational but false first-century claims. (Mark 1:7-9,16-18)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_137' },

{ id:'nt-papyrus-1-oxyrhynchus-2', name:'Papyrus 1 Oxyrhynchus 2', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early Matthew genealogy fragment from Oxyrhynchus. (Matt 1:1-9,12,14-20)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_1' },

{ id:'nt-papyrus-5-oxyrhynchus-208-1781', name:'Papyrus 5 Oxyrhynchus 208 1781', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early Johannine fragments from multiple leaves. (John 1; 16; 20)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_Oxyrhynchus_208_%2B_1781' },

{ id:'nt-papyrus-9-oxyrhynchus-402', name:'Papyrus 9 Oxyrhynchus 402', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early witness to 1 John. (1 John 4:11-12,14-17)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_9' },

{ id:'nt-papyrus-13-oxyrhynchus-657', name:'Papyrus 13 Oxyrhynchus 657', cat:'manuscript', era:'Third or fourth century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third or fourth century CE. Findspot: Oxyrhynchus.',
  sig:'Large early Hebrews fragment written on the back of a roll. (Hebrews 2-5; 10-12)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_13' },

{ id:'nt-papyrus-15-oxyrhynchus-1008', name:'Papyrus 15 Oxyrhynchus 1008', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early Corinthian correspondence witness. (1 Cor 7-8)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_15' },

{ id:'nt-papyrus-16-oxyrhynchus-1009', name:'Papyrus 16 Oxyrhynchus 1009', cat:'manuscript', era:'Third or fourth century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third or fourth century CE. Findspot: Oxyrhynchus.',
  sig:'Early Philippians fragment. (Phil 3-4)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_16' },

{ id:'nt-papyrus-20-oxyrhynchus-1171', name:'Papyrus 20 Oxyrhynchus 1171', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early witness to James. (James 2-3)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_20' },

{ id:'nt-papyrus-22-oxyrhynchus-1228', name:'Papyrus 22 Oxyrhynchus 1228', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Johannine roll or codex fragment with distinctive layout. (John 15-16)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_22' },

{ id:'nt-papyrus-23-oxyrhynchus-1229', name:'Papyrus 23 Oxyrhynchus 1229', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early James witness. (James 1:10-12,15-18)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_23' },

{ id:'nt-papyrus-24-oxyrhynchus-1230', name:'Papyrus 24 Oxyrhynchus 1230', cat:'manuscript', era:'Fourth century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Fourth century CE. Findspot: Oxyrhynchus.',
  sig:'Early Revelation fragment. (Revelation 5-6)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_24' },

{ id:'nt-papyrus-27-oxyrhynchus-1355', name:'Papyrus 27 Oxyrhynchus 1355', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early Romans witness. (Romans 8-9)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_27' },

{ id:'nt-papyrus-29-oxyrhynchus-1597', name:'Papyrus 29 Oxyrhynchus 1597', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early Acts fragment with a western textual tendency. (Acts 26)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_29' },

{ id:'nt-papyrus-30-oxyrhynchus-1598', name:'Papyrus 30 Oxyrhynchus 1598', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early Thessalonian correspondence witness. (1 Thess 4-5; 2 Thess 1)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_30' },

{ id:'nt-papyrus-39-oxyrhynchus-1780', name:'Papyrus 39 Oxyrhynchus 1780', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early John fragment. (John 8:14-22)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_39' },

{ id:'nt-papyrus-69-oxyrhynchus-2383', name:'Papyrus 69 Oxyrhynchus 2383', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Passion fragment with notable omissions. (Luke 22:41,45-48,58-61)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_69' },

{ id:'nt-papyrus-77-oxyrhynchus-2683-4405', name:'Papyrus 77 Oxyrhynchus 2683 4405', cat:'manuscript', era:'Second or third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Second or third century CE. Findspot: Oxyrhynchus.',
  sig:'Early Matthew fragment. (Matt 23:30-39)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_77' },

{ id:'nt-papyrus-78-oxyrhynchus-2684', name:'Papyrus 78 Oxyrhynchus 2684', cat:'manuscript', era:'Third or fourth century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third or fourth century CE. Findspot: Oxyrhynchus.',
  sig:'Early Jude fragment. (Jude 4-5,7-8)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_78' },

{ id:'nt-papyrus-90-oxyrhynchus-3523', name:'Papyrus 90 Oxyrhynchus 3523', cat:'manuscript', era:'Late second century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Late second century CE. Findspot: Oxyrhynchus.',
  sig:'Early Johannine passion fragment. (John 18:36-19:7)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_90' },

{ id:'nt-papyrus-104-oxyrhynchus-4404', name:'Papyrus 104 Oxyrhynchus 4404', cat:'manuscript', era:'Late second century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Late second century CE. Findspot: Oxyrhynchus.',
  sig:'Early Matthew fragment. (Matt 21:34-37,43,45)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_104' },

{ id:'nt-papyrus-106-oxyrhynchus-4445', name:'Papyrus 106 Oxyrhynchus 4445', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early John fragment. (John 1:29-35,40-46)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_106' },

{ id:'nt-papyrus-108-oxyrhynchus-4447', name:'Papyrus 108 Oxyrhynchus 4447', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early John passion-context fragment. (John 17:23-24; 18:1-5)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_108' },

{ id:'nt-papyrus-109-oxyrhynchus-4448', name:'Papyrus 109 Oxyrhynchus 4448', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Early witness to John\'s ending. (John 21:18-20,23-25)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_109' },

{ id:'nt-papyrus-110-oxyrhynchus-4494', name:'Papyrus 110 Oxyrhynchus 4494', cat:'manuscript', era:'Fourth century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Fourth century CE. Findspot: Oxyrhynchus.',
  sig:'Matthew mission-discourse fragment. (Matt 10:13-15,25-27)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_110' },

{ id:'nt-garima-gospels', name:'Garima Gospels', cat:'manuscript', era:'Fourth to seventh centuries CE', conf:'certain', lat:14.3667, lon:39.4833,
  blurb:'Fourth to seventh centuries CE. Findspot: Aksum region.',
  sig:'Early illuminated Ge\'ez Gospel books document African textual and artistic transmission. (Four Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Garima_Gospels' },

{ id:'nt-syriac-sinaiticus', name:'Syriac Sinaiticus', cat:'manuscript', era:'Late fourth or early fifth century CE', conf:'certain', lat:28.5561, lon:33.975,
  blurb:'Late fourth or early fifth century CE. Findspot: Saint Catherine\'s Monastery.',
  sig:'Palimpsest is among the earliest Syriac Gospel witnesses. (Old Syriac Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Syriac_Sinaiticus' },

{ id:'nt-diatessaron-fragment-from-dura-europos', name:'Diatessaron fragment from Dura Europos', cat:'manuscript', era:'Early third century CE', conf:'probable', lat:34.75, lon:40.73,
  blurb:'Early third century CE. Findspot: Dura-Europos. Identification as Diatessaron has been challenged.',
  sig:'Parchment fragment found in the city was long identified as part of Tatian\'s Gospel harmony. (Gospel harmony fragment)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Diatessaron' },

{ id:'nt-nag-hammadi-codices', name:'Nag Hammadi codices', cat:'manuscript', era:'Fourth century CE copies', conf:'certain', lat:26.0532, lon:32.2436,
  blurb:'Fourth century CE copies. Findspot: Nag Hammadi. Not New Testament manuscripts.',
  sig:'Thirteen papyrus codices preserve Gnostic and other Christian writings essential to reception history. (Early Christian literature related to New Testament reception)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Nag_Hammadi_library' },

{ id:'nt-gospel-of-thomas-codex-ii', name:'Gospel of Thomas Codex II', cat:'manuscript', era:'Fourth century CE Coptic copy', conf:'certain', lat:26.0532, lon:32.2436,
  blurb:'Fourth century CE Coptic copy. Findspot: Nag Hammadi. Date and relationship to canonical Gospels debated.',
  sig:'Sayings collection provides comparative evidence for early Jesus traditions. (Parallels across Synoptic sayings)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Gospel_of_Thomas' },

{ id:'nt-oxyrhynchus-sayings-of-jesus-papyrus-1', name:'Oxyrhynchus Sayings of Jesus Papyrus 1', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Greek sayings fragment expanded the known early Jesus-tradition corpus. (Parallels to Gospel of Thomas and Synoptics)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_Oxyrhynchus_1' },

{ id:'nt-oxyrhynchus-sayings-of-jesus-papyrus-654', name:'Oxyrhynchus Sayings of Jesus Papyrus 654', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Greek witness to sayings later known in Coptic Thomas. (Gospel of Thomas prologue and sayings)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_Oxyrhynchus_654' },

{ id:'nt-oxyrhynchus-sayings-of-jesus-papyrus-655', name:'Oxyrhynchus Sayings of Jesus Papyrus 655', cat:'manuscript', era:'Third century CE', conf:'certain', lat:28.5525, lon:30.657,
  blurb:'Third century CE. Findspot: Oxyrhynchus.',
  sig:'Further Greek fragments of early Jesus sayings. (Gospel of Thomas sayings)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_Oxyrhynchus_655' },
{ id:'miriam-caiaphas-ossuary', name:'Ossuary of Miriam daughter of Yeshua son of Caiaphas', cat:'inscription', era:'1st century AD', lat:31.698, lon:34.956, place:'caiaphas', conf:'probable',
  blurb:'A decorated ossuary, reportedly from a tomb in the Elah Valley, inscribed naming a woman of the Caiaphas priestly family and its Ma\'aziah priestly course.',
  sig:'A second, independent inscribed link to the high-priestly family of Matthew 26:57, naming a priestly division (1 Chronicles 24:18) otherwise unattested from this period.',
  src:["B. Zissu &amp; Y. Goren, first publication and authenticity study (2011)"], wiki:'https://en.wikipedia.org/wiki/Caiaphas_ossuary' },

{ id:'masada-ostraca', name:'Masada Ostraca', cat:'artifact', era:'1st century AD (before AD 73)', lat:31.3156, lon:35.3536, place:'masada', conf:'certain',
  blurb:'Hundreds of inscribed potsherds from Masada recording names, supply lots, and rationing during the rebel occupation, including a set some link to the defenders\' final lots.',
  sig:'Direct, dated writing from the exact community and moment the First Jewish Revolt ends — ordinary administrative literacy at the edge of catastrophe.',
  src:["Y. Yadin, Masada: Herod's Fortress and the Zealots' Last Stand (1966)"], wiki:'https://en.wikipedia.org/wiki/Masada' },

{ id:'masada-biblical-scrolls', name:'Masada Biblical Scroll Fragments', cat:'manuscript', era:'1st century AD (before AD 73)', lat:31.3156, lon:35.3536, place:'masada', conf:'certain',
  blurb:'Fragments of Hebrew biblical scrolls (including Leviticus, Deuteronomy, Ezekiel, and Psalms) found among the Masada rebels\' possessions.',
  sig:'Shows scripture physically carried and read by an ordinary Jewish community during the exact war years the Gospels\' apocalyptic material anticipates.',
  src:["S. Talmon, on the Masada biblical fragments and their text-type"], wiki:'https://en.wikipedia.org/wiki/Masada' },

{ id:'p72-bodmer', name:'Papyrus 72 (Bodmer VII-VIII)', cat:'manuscript', era:'3rd or 4th century AD', lat:26.135, lon:32.167, place:null, conf:'certain',
  blurb:'A papyrus codex from the Bodmer collection preserving 1 and 2 Peter and Jude alongside other Christian and classical texts.',
  sig:'The earliest substantial witness to the text of 1-2 Peter and Jude, showing these shorter letters already circulating in bound collections.',
  src:["M. Testuz, first publication (1959)"], wiki:'https://en.wikipedia.org/wiki/Papyrus_72' },

{ id:'p74-bodmer', name:'Papyrus 74 (Bodmer XVII)', cat:'manuscript', era:'7th century AD', lat:26.135, lon:32.167, place:null, conf:'certain',
  blurb:'A Bodmer-collection papyrus codex preserving substantial portions of Acts and the Catholic Epistles.',
  sig:'A late but extensive early witness to Acts and the general epistles, useful for tracing how these books\' text was transmitted in Egypt.',
  src:["R. Kasser, first publication (1961)"], wiki:'https://en.wikipedia.org/wiki/Papyrus_74' },

{ id:'p75-bodmer', name:'Papyrus 75 (Bodmer XIV-XV)', cat:'manuscript', era:'late 2nd or early 3rd century AD', lat:26.135, lon:32.167, place:null, conf:'certain',
  blurb:'An early single codex containing most of Luke and John, textually very close to the later Codex Vaticanus.',
  sig:'Strong evidence that the text later preserved in Vaticanus already existed in essentially the same form over a century earlier.',
  src:["V. Martin &amp; R. Kasser, first publication (1961)"], wiki:'https://en.wikipedia.org/wiki/Papyrus_75' },

{ id:'p32-rylands', name:'Papyrus 32 (Rylands 5)', cat:'manuscript', era:'c. AD 200', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A small papyrus fragment from Titus, among the earliest surviving witnesses to any of the Pastoral Epistles.',
  sig:'Shows Titus already being copied as scripture within a generation or two of the Chester Beatty and Bodmer codices.',
  src:["C. H. Roberts, on early Rylands papyri"], wiki:'https://en.wikipedia.org/wiki/Papyrus_32' },

{ id:'p37-michigan', name:'Papyrus 37 (Michigan)', cat:'manuscript', era:'3rd or 4th century AD', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A University of Michigan papyrus fragment preserving part of Matthew 26.',
  sig:'One of several Michigan-collection fragments giving an early independent window into Matthew\'s passion narrative text.',
  src:["H. A. Sanders, on the University of Michigan biblical papyri"], wiki:'https://en.wikipedia.org/wiki/Papyrus_37' },

{ id:'p38-michigan', name:'Papyrus 38 (Michigan)', cat:'manuscript', era:'c. AD 300', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A Michigan-collection papyrus fragment of Acts 18-19, with a text some scholars associate with the so-called "Western" text-type.',
  sig:'An early data point in the debate over competing early textual traditions of Acts.',
  src:["H. A. Sanders, on the University of Michigan biblical papyri"], wiki:'https://en.wikipedia.org/wiki/Papyrus_38' },

{ id:'p40-heidelberg', name:'Papyrus 40 (Heidelberg)', cat:'manuscript', era:'3rd century AD', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A Heidelberg papyrus fragment preserving parts of Romans.',
  sig:'An early independent witness to Paul\'s letter to Rome, from outside the major named codex collections.',
  src:["See: https://ntvmr.uni-muenster.de/liste"], wiki:'https://en.wikipedia.org/wiki/Papyrus_40' },

{ id:'p48-oxyrhynchus', name:'Papyrus 48', cat:'manuscript', era:'late 3rd century AD', lat:28.5525, lon:30.657, place:null, conf:'certain',
  blurb:'A papyrus fragment of Acts 23, with an unusually free text noted for omissions and abbreviations.',
  sig:'A window into how loosely some early copyists sometimes handled a narrative text like Acts compared with the letters.',
  src:["See: https://ntvmr.uni-muenster.de/liste"], wiki:'https://en.wikipedia.org/wiki/Papyrus_48' },

{ id:'p49-yale', name:'Papyrus 49 (Yale)', cat:'manuscript', era:'3rd century AD', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A Yale-collection papyrus fragment preserving part of Ephesians, from a codex likely shared with Papyrus 65.',
  sig:'An early, independent witness to Ephesians circulating within Paul\'s wider letter collection.',
  src:["See: https://ntvmr.uni-muenster.de/liste"], wiki:'https://en.wikipedia.org/wiki/Papyrus_49' },

{ id:'p53-michigan', name:'Papyrus 53 (Michigan)', cat:'manuscript', era:'3rd century AD', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A Michigan-collection papyrus fragment combining parts of Matthew 26 and Acts 9-10 in the same codex.',
  sig:'Rare direct evidence that a Gospel and Acts could be bound together in a single working copy this early.',
  src:["H. A. Sanders, on the University of Michigan biblical papyri"], wiki:'https://en.wikipedia.org/wiki/Papyrus_53' },

{ id:'p98-sorbonne', name:'Papyrus 98 (Sorbonne)', cat:'manuscript', era:'2nd century AD', lat:29.3084, lon:30.8428, place:null, conf:'certain',
  blurb:'A Sorbonne-collection papyrus fragment of Revelation 1, among the earliest witnesses to any part of that book.',
  sig:'Pushes the attested copying of Revelation back close to the traditional window for its composition.',
  src:["See: https://ntvmr.uni-muenster.de/liste"], wiki:'https://en.wikipedia.org/wiki/Papyrus_98' },

{ id:'bodmer-papyrus-iii', name:'Bodmer Papyrus III', cat:'manuscript', era:'4th century AD', lat:26.135, lon:32.167, place:null, conf:'certain',
  blurb:'An early Bohairic Coptic codex of John\'s Gospel from the Bodmer collection.',
  sig:'One of the earliest substantial Coptic translations of John, showing the Gospel\'s rapid spread beyond Greek into Egypt\'s native language.',
  src:["R. Kasser, first publication (1958)"], wiki:'https://en.wikipedia.org/wiki/Dishna_Papers' },
];

/* ——— loader: fold into the atlas ——— */
window.NTATLAS = window.NTATLAS || {};
window.NTATLAS.ARCHAEOLOGY = ARCHAEOLOGY;
window.NTATLAS.ARCH_CATEGORIES = ARCH_CATEGORIES;

/* ——— catalog import: findspot region too broad/unverified for a map pin; listed, not plotted ——— */
const ARCHAEOLOGY_UNPLACED = [
{ id:'nt-james-ossuary', name:'James ossuary', cat:'inscription', era:'First century CE', conf:'contested',
  blurb:'First century CE. Findspot: Unknown Jerusalem-area provenance. Provenance absent; brother-of-Jesus phrase and authenticity heavily disputed.',
  sig:'Aramaic inscription reads James son of Joseph brother of Jesus. (Matt 13:55; Mark 6:3; Gal 1:19; Jas)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/James_Ossuary' },

{ id:'nt-mara-bar-serapion-letter', name:'Mara bar Serapion letter', cat:'inscription', era:'Late first to third century CE', conf:'probable',
  blurb:'Late first to third century CE. Findspot: Syria. Date and identification with Jesus debated.',
  sig:'Syriac letter refers to a wise king of the Jews killed by his people. (Jesus reception outside Christianity)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Mara_bar_Serapion' },

{ id:'nt-gessius-florus-inscription', name:'Gessius Florus inscription', cat:'inscription', era:'64-66 CE', conf:'probable',
  blurb:'64-66 CE. Findspot: Jerusalem or Judea provenance. Specific fragment attribution requires verification.',
  sig:'Inscriptions naming late Judean governors illuminate the political road to revolt. (Context for First Jewish Revolt and Matt 24)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Gessius_Florus' },

{ id:'nt-pontius-pilate-coins-inscribed-tiberiou-', name:'Pontius Pilate coins inscribed TIBERIOU KAISAROS', cat:'inscription', era:'29-31 CE', conf:'certain',
  blurb:'29-31 CE. Findspot: Judea.',
  sig:'Dated prefectural coins corroborate Pilate\'s administration and use Roman cultic symbols. (Luke 3:1; 23; John 18-19)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Pontius_Pilate' },

{ id:'nt-herod-antipas-inscription-from-tiberias-', name:'Herod Antipas inscription from Tiberias region', cat:'inscription', era:'First century CE', conf:'probable',
  blurb:'First century CE. Findspot: Galilee. No single famous monumental inscription defines the corpus.',
  sig:'Epigraphic and numismatic record documents Antipas\' tetrarchy and cities. (Matt 14; Mark 6; Luke 3:1,19; 9:7-9; 13:32; 23:7-12)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Herod_Antipas' },

{ id:'nt-berenice-inscription', name:'Berenice inscription', cat:'inscription', era:'First century CE', conf:'probable',
  blurb:'First century CE. Findspot: Eastern Mediterranean.',
  sig:'Epigraphic attestations document the Herodian princess who heard Paul\'s defense. (Acts 25:13,23; 26:30)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Berenice_(daughter_of_Herod_Agrippa)' },

{ id:'nt-aretas-iv-inscriptions', name:'Aretas IV inscriptions', cat:'inscription', era:'9 BCE to 40 CE', conf:'certain',
  blurb:'9 BCE to 40 CE. Findspot: Nabataean kingdom.',
  sig:'Dated Nabataean texts establish the ruler and administration connected with Paul\'s Arabia. (2 Cor 11:32; Gal 1:17)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Aretas_IV_Philopatris' },

{ id:'nt-venice-census-papyrus-p-lond-904', name:'Venice census papyrus P.Lond. 904', cat:'inscription', era:'104 CE', conf:'certain',
  blurb:'104 CE. Findspot: Egypt. Later Egyptian parallel, not evidence for Luke\'s specific census.',
  sig:'Egyptian census order tells residents to return to their own districts for registration. (Luke 2:1-5 context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Census_of_Quirinius' },

{ id:'nt-census-declaration-of-babatha', name:'Census declaration of Babatha', cat:'inscription', era:'127 CE', conf:'certain',
  blurb:'127 CE. Findspot: Judean Desert. Later provincial parallel.',
  sig:'Provincial census paperwork illustrates Roman registration and household documentation. (Luke 2:1-5 context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Babatha' },

{ id:'nt-edict-of-nazareth-marble-tablet', name:'Edict of Nazareth marble tablet', cat:'inscription', era:'First century BCE or CE', conf:'probable',
  blurb:'First century BCE or CE. Findspot: Unknown. Original provenance likely not Nazareth according to isotope work.',
  sig:'Tomb-violation edict became a famous but uncertain resurrection-related artifact. (Matt 28:11-15 context)',
  src:['See: https://www.trismegistos.org/'], wiki:'https://en.wikipedia.org/wiki/Nazareth_Inscription' },

{ id:'nt-widow-s-mite-lepton-of-alexander-jannaeu', name:'Widow\'s mite lepton of Alexander Jannaeus', cat:'artifact', era:'103-76 BCE, circulating later', conf:'certain',
  blurb:'103-76 BCE, circulating later. Findspot: Judea. Exact issue not stated.',
  sig:'Tiny bronze lepton is a leading material referent for the widow\'s two coins. (Mark 12:41-44; Luke 21:1-4)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Lesson_of_the_widow%27s_mite' },

{ id:'nt-herod-the-great-bronze-coin', name:'Herod the Great bronze coin', cat:'artifact', era:'37-4 BCE', conf:'certain',
  blurb:'37-4 BCE. Findspot: Judea.',
  sig:'Royal coinage documents Herod\'s titles, symbols, and economy. (Matt 2:1-22; Luke 1:5)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Herod_the_Great' },

{ id:'nt-herod-archelaus-coin', name:'Herod Archelaus coin', cat:'artifact', era:'4 BCE-6 CE', conf:'certain',
  blurb:'4 BCE-6 CE. Findspot: Judea.',
  sig:'Ethnarchic coinage directly attests Archelaus\' rule. (Matt 2:22)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Herod_Archelaus' },

{ id:'nt-herod-antipas-coin', name:'Herod Antipas coin', cat:'artifact', era:'4 BCE-39 CE', conf:'certain',
  blurb:'4 BCE-39 CE. Findspot: Galilee and Perea.',
  sig:'Coins name Tiberias and Antipas\' tetrarchy while generally avoiding portraits. (Matt 14; Mark 6; Luke 3:1,19; 9:7; 13:32; 23:7)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Herod_Antipas' },

{ id:'nt-philip-the-tetrarch-coin', name:'Philip the Tetrarch coin', cat:'artifact', era:'4 BCE-34 CE', conf:'certain',
  blurb:'4 BCE-34 CE. Findspot: Iturea and Trachonitis.',
  sig:'Coins bear Philip, Augustus or Tiberius, and temple imagery; among the earliest Jewish-ruler portrait coins. (Luke 3:1; Matt 16:13)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Philip_the_Tetrarch' },

{ id:'nt-herod-agrippa-i-coin', name:'Herod Agrippa I coin', cat:'artifact', era:'37-44 CE', conf:'certain',
  blurb:'37-44 CE. Findspot: Judea.',
  sig:'Coins attest Agrippa\'s royal titulature and calendar. (Acts 12)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Herod_Agrippa' },

{ id:'nt-herod-agrippa-ii-coin', name:'Herod Agrippa II coin', cat:'artifact', era:'50s-90s CE', conf:'certain',
  blurb:'50s-90s CE. Findspot: Northern Palestine and Syria.',
  sig:'Coins name Agrippa and Berenice-era rulers and display imperial portraits. (Acts 25-26)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Herod_Agrippa_II' },

{ id:'nt-pontius-pilate-lituus-prutah', name:'Pontius Pilate lituus prutah', cat:'artifact', era:'30/31 CE', conf:'certain',
  blurb:'30/31 CE. Findspot: Judea.',
  sig:'Dated coin combines Tiberian legend with Roman augural staff. (Luke 3:1; 23; John 18-19)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Pontius_Pilate' },

{ id:'nt-pontius-pilate-simpulum-prutah', name:'Pontius Pilate simpulum prutah', cat:'artifact', era:'29/30 CE', conf:'certain',
  blurb:'29/30 CE. Findspot: Judea.',
  sig:'Dated coin uses a Roman libation implement and grain ears. (Pilate passages)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Pontius_Pilate' },

{ id:'nt-valerius-gratus-coin', name:'Valerius Gratus coin', cat:'artifact', era:'15-26 CE', conf:'certain',
  blurb:'15-26 CE. Findspot: Judea.',
  sig:'Prefectural coinage bridges the administrations before Pilate and the high-priestly appointments. (Luke 3:2 context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Valerius_Gratus' },

{ id:'nt-coponius-coin', name:'Coponius coin', cat:'artifact', era:'6-9 CE', conf:'certain',
  blurb:'6-9 CE. Findspot: Judea.',
  sig:'Early prefectural issue marks direct Roman administration after Archelaus. (Roman Judea context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Coponius' },

{ id:'nt-tiberius-tribute-penny-denarius', name:'Tiberius tribute penny denarius', cat:'artifact', era:'14-37 CE', conf:'certain',
  blurb:'14-37 CE. Findspot: Roman Empire. Other denarii also circulated.',
  sig:'Denarius with Tiberius\' portrait and divine titulature is the standard candidate for the tribute coin. (Matt 22:19-21; Mark 12:15-17; Luke 20:24-25)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Tribute_penny' },

{ id:'nt-augustus-denarius', name:'Augustus denarius', cat:'artifact', era:'27 BCE-14 CE', conf:'certain',
  blurb:'27 BCE-14 CE. Findspot: Roman Empire.',
  sig:'Imperial portrait coinage illustrates Caesar\'s image and claims. (Luke 2:1; Matt 22 context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Augustus' },

{ id:'nt-nero-denarius', name:'Nero denarius', cat:'artifact', era:'54-68 CE', conf:'certain',
  blurb:'54-68 CE. Findspot: Roman Empire.',
  sig:'Portrait and divine-imperial legends clarify Caesar language and Nero-redivivus interpretations. (Acts 25:8-12; Phil 4:22; Rev 13 possible)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Nero' },

{ id:'nt-claudius-coin', name:'Claudius coin', cat:'artifact', era:'41-54 CE', conf:'certain',
  blurb:'41-54 CE. Findspot: Roman Empire.',
  sig:'Coinage establishes the emperor and imperial messages during major Acts events. (Acts 11:28; 18:2)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Claudius' },

{ id:'nt-caligula-coin', name:'Caligula coin', cat:'artifact', era:'37-41 CE', conf:'certain',
  blurb:'37-41 CE. Findspot: Roman Empire.',
  sig:'Portraits and divine associations contextualize the attempted Jerusalem statue crisis. (Temple-crisis background)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Caligula' },

{ id:'nt-vespasian-judaea-capta-coin', name:'Vespasian Judaea Capta coin', cat:'artifact', era:'69-79 CE', conf:'certain',
  blurb:'69-79 CE. Findspot: Roman Empire.',
  sig:'Victory series depicts defeated Judea and publicizes the destruction of Jerusalem. (Matt 24; Mark 13; Luke 21; Rev context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Judaea_Capta_coinage' },

{ id:'nt-titus-judaea-capta-coin', name:'Titus Judaea Capta coin', cat:'artifact', era:'79-81 CE', conf:'certain',
  blurb:'79-81 CE. Findspot: Roman Empire.',
  sig:'Continues Flavian victory propaganda tied to 70 CE. (Temple-destruction context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Judaea_Capta_coinage' },

{ id:'nt-domitian-coin-as-dominus-et-deus-context', name:'Domitian coin as dominus et deus context', cat:'artifact', era:'81-96 CE', conf:'certain',
  blurb:'81-96 CE. Findspot: Roman Empire. Exact phrase usage and Revelation dating debated.',
  sig:'Coins display Domitianic titles, divine family imagery, and imperial cult ideology. (Rev 1-3; 13; 17-18)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Domitian' },

{ id:'nt-aretas-iv-drachm', name:'Aretas IV drachm', cat:'artifact', era:'9 BCE-40 CE', conf:'certain',
  blurb:'9 BCE-40 CE. Findspot: Nabataean kingdom.',
  sig:'Portrait coinage directly attests the king named by Paul. (2 Cor 11:32)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Aretas_IV_Philopatris' },

{ id:'nt-judas-of-galilee-revolt-coin-context', name:'Judas of Galilee revolt coin context', cat:'artifact', era:'6 CE context', conf:'contested',
  blurb:'6 CE context. Findspot: Judea. Do not label any coin as Judas\' own.',
  sig:'No secure coinage belongs to Judas; Roman provincial coins and later revolt issues frame the tax-revolt tradition. (Acts 5:37)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Judas_of_Galilee' },

{ id:'nt-first-jewish-revolt-shekel', name:'First Jewish Revolt shekel', cat:'artifact', era:'66-70 CE', conf:'certain',
  blurb:'66-70 CE. Findspot: Judea.',
  sig:'Silver revolt coinage proclaims Jerusalem\'s holiness and Israel\'s freedom. (Matt 24; Mark 13; Luke 21; Rev context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/First_Jewish_Revolt_coinage' },

{ id:'nt-year-four-revolt-bronze-coin', name:'Year Four revolt bronze coin', cat:'artifact', era:'69/70 CE', conf:'certain',
  blurb:'69/70 CE. Findspot: Judea.',
  sig:'Large bronzes mark the revolt\'s terminal year. (Temple destruction context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/First_Jewish_Revolt_coinage' },

{ id:'nt-bar-kokhba-coin-overstrikes', name:'Bar Kokhba coin overstrikes', cat:'artifact', era:'132-135 CE', conf:'certain',
  blurb:'132-135 CE. Findspot: Judea. Postdate New Testament.',
  sig:'Later Jewish revolt coins reuse Roman issues and depict Temple symbols. (Early Christian reception context)',
  src:['See: https://www.britishmuseum.org/collection'], wiki:'https://en.wikipedia.org/wiki/Bar_Kokhba_Revolt_coinage' },

{ id:'nt-first-century-stone-vessel-assemblages', name:'First-century stone vessel assemblages', cat:'artifact', era:'First century BCE to first century CE', conf:'certain',
  blurb:'First century BCE to first century CE. Findspot: Jerusalem and Galilee.',
  sig:'Chalk vessels were widely used in Jewish households, likely because they were not thought to contract impurity. (John 2:6; Mark 7:1-4)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Stone_vessel' },

{ id:'nt-stone-jars-from-cana-region', name:'Stone jars from Cana region', cat:'artifact', era:'Early Roman period', conf:'certain',
  blurb:'Early Roman period. Findspot: Lower Galilee. No vessel can be linked to the wedding.',
  sig:'Large chalk vessels and production debris give a concrete material referent for John\'s purification jars. (John 2:6)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Stone_vessel' },

{ id:'nt-kokhim-tombs', name:'Kokhim tombs', cat:'artifact', era:'Second Temple period', conf:'certain',
  blurb:'Second Temple period. Findspot: Judea and Galilee.',
  sig:'Rock-cut burial shafts and chambers clarify tomb access, body placement, and later bone collection. (John 11:38; 19:41; 20:5-8)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Rock-cut_tomb' },

{ id:'nt-rolling-stone-tombs', name:'Rolling-stone tombs', cat:'artifact', era:'Late Second Temple period', conf:'certain',
  blurb:'Late Second Temple period. Findspot: Jerusalem and Judea.',
  sig:'Disk-shaped blocking stones existed but were uncommon and concentrated in elite tombs. (Matt 27:60; Mark 15:46; 16:3-4)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Rock-cut_tomb' },

{ id:'nt-square-blocking-stones-in-jewish-tombs', name:'Square blocking stones in Jewish tombs', cat:'artifact', era:'Second Temple period', conf:'certain',
  blurb:'Second Temple period. Findspot: Judea.',
  sig:'More common plug-shaped stones prevent assuming every Gospel tomb had a rolling disk. (Matt 27:60; John 11:38)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Rock-cut_tomb' },

{ id:'nt-sudarium-textiles-from-judean-desert', name:'Sudarium textiles from Judean Desert', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Judean Desert.',
  sig:'Textiles from arid caves illustrate cloth manufacture and funerary wrapping. (John 11:44; 20:7)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Sudarium%20textiles%20from%20Judean%20Desert' },

{ id:'nt-roman-crucifixion-nails-from-judea', name:'Roman crucifixion nails from Judea', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Jerusalem and Judea. Loose nails rarely have secure execution contexts.',
  sig:'Iron nails and the Yehohanan specimen document fastening technology. (Crucifixion narratives; Col 2:14)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Crucifixion' },

{ id:'nt-roman-scourge-weights-and-depictions', name:'Roman scourge weights and depictions', cat:'artifact', era:'Roman period', conf:'probable',
  blurb:'Roman period. Findspot: Roman Empire. Specific artifacts are rarely securely identified as flagrum parts.',
  sig:'Material and iconographic parallels illuminate judicial flogging. (Matt 27:26; Mark 15:15; John 19:1)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Roman%20scourge%20weights%20and%20depictions' },

{ id:'nt-roman-military-sandals-and-hobnails', name:'Roman military sandals and hobnails', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Judea and Roman Empire.',
  sig:'Caligae and hobnails supply material context for soldiers and footwear metaphors. (Eph 6:15; Acts 12:8)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Caligae' },

{ id:'nt-judean-desert-leather-sandals', name:'Judean Desert leather sandals', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Judean Desert.',
  sig:'Preserved footwear makes sandal construction and social meaning tangible. (Mark 1:7; Acts 12:8)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Cave_of_Letters' },

{ id:'nt-salome-komaise-archive', name:'Salome Komaise archive', cat:'artifact', era:'Second century CE', conf:'certain',
  blurb:'Second century CE. Findspot: Judean Desert. Postdates New Testament.',
  sig:'Legal papyri document Jewish and Nabataean women\'s property arrangements. (Marriage and property context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Salome%20Komaise%20archive' },

{ id:'nt-roman-discus-lamps-with-erotic-and-mytho', name:'Roman discus lamps with erotic and mythological scenes', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Mediterranean.',
  sig:'Mass-produced lamps carried imagery into domestic interiors. (Rom 1; 1 Cor 8-10; household religion)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Oil_lamp' },

{ id:'nt-fishing-hooks-from-galilee', name:'Fishing hooks from Galilee', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Sea of Galilee.',
  sig:'Hooks show line-fishing alongside net technologies. (Matt 4:18-22; 17:27)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Fishing_industry_in_Israel' },

{ id:'nt-lead-net-weights-from-galilee', name:'Lead net weights from Galilee', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Sea of Galilee.',
  sig:'Weights document cast and seine-net fishing. (Matt 4:18-22; Mark 1:16-20; Luke 5:1-11)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Special:Search?search=Lead%20net%20weights%20from%20Galilee' },

{ id:'nt-stone-anchors-from-sea-of-galilee', name:'Stone anchors from Sea of Galilee', cat:'artifact', era:'Hellenistic and Roman periods', conf:'certain',
  blurb:'Hellenistic and Roman periods. Findspot: Sea of Galilee.',
  sig:'Anchors and mooring stones reconstruct small-craft practice. (Mark 4:35-41; John 6:16-21)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Anchor' },

{ id:'nt-kinneret-harbor-installations-corpus', name:'Kinneret harbor installations corpus', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Sea of Galilee.',
  sig:'Multiple submerged harbors reveal a densely connected maritime landscape. (Lake-travel passages in the Gospels)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Sea_of_Galilee' },

{ id:'nt-galilee-basalt-rotary-mills', name:'Galilee basalt rotary mills', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Galilee.',
  sig:'Hand mills and donkey mills clarify scale and force in milling imagery. (Matt 18:6; 24:41; Rev 18:21-22)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Quern-stone' },

{ id:'nt-winepresses-of-galilee-and-judea', name:'Winepresses of Galilee and Judea', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Galilee and Judea.',
  sig:'Rock-cut presses make vineyard and judgment imagery concrete. (Matt 21:33; Mark 12:1; Rev 14:19-20)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Winepress' },

{ id:'nt-olive-presses-of-capernaum-and-galilee', name:'Olive presses of Capernaum and Galilee', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Galilee.',
  sig:'Presses document lamp-fuel production and olive agriculture. (Matt 25:1-13; Rom 11:17-24; Gethsemane context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Olive_oil_extraction' },

{ id:'nt-garum-amphorae', name:'Garum amphorae', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Mediterranean ports.',
  sig:'Fish-sauce containers demonstrate industrial processing and long-distance food commerce. (Matt 5:13; trade and food context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Garum' },

{ id:'nt-roman-balance-scales', name:'Roman balance scales', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Mediterranean.',
  sig:'Portable scales make commercial weighing and scarcity imagery visible. (Rev 6:5; Matt 7:2)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Weighing_scale' },

{ id:'nt-roman-slave-collars', name:'Roman slave collars', cat:'artifact', era:'Late Roman examples with earlier institution', conf:'certain',
  blurb:'Late Roman examples with earlier institution. Findspot: Roman Empire. Most surviving collars postdate Paul.',
  sig:'Inscribed collars reveal control and flight in slavery. (1 Cor 7:21-23; Gal 3:28; Phlm; Eph 6:5-9)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Slavery_in_ancient_Rome' },

{ id:'nt-curse-tablets-from-roman-baths', name:'Curse tablets from Roman baths', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Roman Empire.',
  sig:'Lead tablets show ordinary petitions for supernatural harm and justice. (Rom 12:14; 1 Cor 4:12; magical context in Acts 19)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Curse_tablet' },

{ id:'nt-roman-military-diploma', name:'Roman military diploma', cat:'artifact', era:'Roman period', conf:'certain',
  blurb:'Roman period. Findspot: Roman Empire.',
  sig:'Bronze citizenship certificates clarify military status and legal privilege. (Acts 10; 21-28; citizenship context)',
  src:['See: https://www.metmuseum.org/art/collection'], wiki:'https://en.wikipedia.org/wiki/Roman_military_diploma' },

{ id:'nt-papyrus-46-chester-beatty-ii', name:'Papyrus 46 Chester Beatty II', cat:'manuscript', era:'About 200 CE', conf:'certain',
  blurb:'About 200 CE. Findspot: Egypt.',
  sig:'Substantial early Pauline codex establishes collection, order, and text of Paul\'s letters. (Romans; Hebrews; 1-2 Corinthians; Ephesians; Galatians; Philippians; Colossians; 1 Thessalonians)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_46' },

{ id:'nt-papyrus-45-chester-beatty-i', name:'Papyrus 45 Chester Beatty I', cat:'manuscript', era:'Third century CE', conf:'certain',
  blurb:'Third century CE. Findspot: Egypt.',
  sig:'Early four-Gospel and Acts codex preserves a distinctive text and book collection. (Matthew; Mark; Luke; John; Acts)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_45' },

{ id:'nt-papyrus-47-chester-beatty-iii', name:'Papyrus 47 Chester Beatty III', cat:'manuscript', era:'Third century CE', conf:'certain',
  blurb:'Third century CE. Findspot: Egypt.',
  sig:'Major early witness to Revelation. (Revelation 9-17)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_47' },

{ id:'nt-papyrus-64-magdalen-fragment', name:'Papyrus 64 Magdalen fragment', cat:'manuscript', era:'Late second or third century CE', conf:'certain',
  blurb:'Late second or third century CE. Findspot: Egypt.',
  sig:'Early Matthew fragment belonging with Papyrus 67 and probably 4. (Matt 26:7-8,10,14-15,22-23,31-33)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Magdalen_papyrus' },

{ id:'nt-papyrus-67-barcelona-fragment', name:'Papyrus 67 Barcelona fragment', cat:'manuscript', era:'Late second or third century CE', conf:'certain',
  blurb:'Late second or third century CE. Findspot: Egypt.',
  sig:'Part of the same Matthew manuscript as Papyrus 64. (Matt 3:9,15; 5:20-22,25-28)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Magdalen_papyrus' },

{ id:'nt-papyrus-87-cologne-fragment', name:'Papyrus 87 Cologne fragment', cat:'manuscript', era:'Third century CE', conf:'certain',
  blurb:'Third century CE. Findspot: Egypt.',
  sig:'Earliest substantial witness to Philemon. (Philemon 13-15,24-25)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Papyrus_87' },

{ id:'nt-codex-alexandrinus', name:'Codex Alexandrinus', cat:'manuscript', era:'Fifth century CE', conf:'certain',
  blurb:'Fifth century CE. Findspot: Eastern Mediterranean or Egypt.',
  sig:'Early near-complete Bible important for Revelation and Byzantine textual history. (Most of the New Testament with lacunae)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Alexandrinus' },

{ id:'nt-codex-ephraemi-rescriptus', name:'Codex Ephraemi Rescriptus', cat:'manuscript', era:'Fifth century CE', conf:'certain',
  blurb:'Fifth century CE. Findspot: Eastern Mediterranean.',
  sig:'Palimpsest preserves a major biblical text beneath later Syriac works. (Fragments of every New Testament book except 2 Thessalonians and 2 John)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Ephraemi_Rescriptus' },

{ id:'nt-codex-bezae', name:'Codex Bezae', cat:'manuscript', era:'Fifth century CE', conf:'certain',
  blurb:'Fifth century CE. Findspot: Western Mediterranean provenance uncertain.',
  sig:'Greek-Latin codex preserves the distinctive Western text, especially in Acts. (Gospels and Acts with lacunae)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Bezae' },

{ id:'nt-codex-washingtonianus', name:'Codex Washingtonianus', cat:'manuscript', era:'Fourth or fifth century CE', conf:'certain',
  blurb:'Fourth or fifth century CE. Findspot: Egypt.',
  sig:'Early Gospel codex combines several textual forms and includes the Freer Logion. (Four Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Washingtonianus' },

{ id:'nt-codex-claromontanus', name:'Codex Claromontanus', cat:'manuscript', era:'Fifth or sixth century CE', conf:'certain',
  blurb:'Fifth or sixth century CE. Findspot: Western Mediterranean.',
  sig:'Greek-Latin Pauline codex preserves Western readings and an early canon list. (Pauline Epistles including Hebrews)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Claromontanus' },

{ id:'nt-codex-coislinianus', name:'Codex Coislinianus', cat:'manuscript', era:'Sixth century CE', conf:'certain',
  blurb:'Sixth century CE. Findspot: Egypt.',
  sig:'Early Pauline majuscule with Euthalian apparatus. (Pauline Epistles fragments)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Coislinianus' },

{ id:'nt-codex-laudianus', name:'Codex Laudianus', cat:'manuscript', era:'Sixth or seventh century CE', conf:'certain',
  blurb:'Sixth or seventh century CE. Findspot: Mediterranean provenance uncertain.',
  sig:'Greek-Latin Acts codex preserves important Western readings. (Acts)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Laudianus' },

{ id:'nt-codex-sangallensis-48', name:'Codex Sangallensis 48', cat:'manuscript', era:'Ninth century CE', conf:'certain',
  blurb:'Ninth century CE. Findspot: Western Europe.',
  sig:'Greek-Latin interlinear codex documents later bilingual transmission. (Four Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Sangallensis_48' },

{ id:'nt-codex-koridethi', name:'Codex Koridethi', cat:'manuscript', era:'Ninth century CE', conf:'certain',
  blurb:'Ninth century CE. Findspot: Black Sea or Caucasus region.',
  sig:'Important witness to the Caesarean-text discussion, especially in Mark. (Four Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Koridethi' },

{ id:'nt-codex-zacynthius', name:'Codex Zacynthius', cat:'manuscript', era:'Sixth or seventh century CE', conf:'certain',
  blurb:'Sixth or seventh century CE. Findspot: Eastern Mediterranean.',
  sig:'Palimpsest preserves the earliest substantial catena arrangement around Luke. (Luke fragments)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Zacynthius' },

{ id:'nt-codex-purpureus-rossanensis', name:'Codex Purpureus Rossanensis', cat:'manuscript', era:'Sixth century CE', conf:'certain',
  blurb:'Sixth century CE. Findspot: Eastern Mediterranean.',
  sig:'Purple parchment Gospel book contains some of the earliest surviving Gospel miniatures. (Matthew and Mark)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Rossano_Gospels' },

{ id:'nt-codex-sinopensis', name:'Codex Sinopensis', cat:'manuscript', era:'Sixth century CE', conf:'certain',
  blurb:'Sixth century CE. Findspot: Eastern Mediterranean.',
  sig:'Purple parchment manuscript preserves early illustrated Gospel scenes. (Matthew fragments)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Sinope_Gospels' },

{ id:'nt-vienna-genesis-and-gospel-purple-codex-t', name:'Vienna Genesis and Gospel purple-codex tradition', cat:'manuscript', era:'Sixth century CE', conf:'certain',
  blurb:'Sixth century CE. Findspot: Eastern Mediterranean. Vienna Genesis is Old Testament but contextual for codex art.',
  sig:'Luxury purple codices document elite Christian biblical production. (Gospel manuscript culture context)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Vienna_Genesis' },

{ id:'nt-rabbula-gospels', name:'Rabbula Gospels', cat:'manuscript', era:'586 CE', conf:'certain',
  blurb:'586 CE. Findspot: Syriac world.',
  sig:'Dated Syriac Gospel manuscript preserves an influential illustrated and liturgical tradition. (Four Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Rabbula_Gospels' },

{ id:'nt-curetonian-gospels', name:'Curetonian Gospels', cat:'manuscript', era:'Fifth century manuscript of earlier translation', conf:'certain',
  blurb:'Fifth century manuscript of earlier translation. Findspot: Egyptian monastery provenance.',
  sig:'Major Old Syriac witness to the Gospel text. (Old Syriac Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Curetonian_Gospels' },

{ id:'nt-peshitta-new-testament', name:'Peshitta New Testament', cat:'manuscript', era:'Fifth century CE onward', conf:'certain',
  blurb:'Fifth century CE onward. Findspot: Syriac-speaking East.',
  sig:'Principal Syriac version documents early eastern transmission. (Twenty-two-book standard Syriac New Testament)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Peshitta' },

{ id:'nt-old-latin-codex-vercellensis', name:'Old Latin Codex Vercellensis', cat:'manuscript', era:'Fourth century CE', conf:'certain',
  blurb:'Fourth century CE. Findspot: Italy.',
  sig:'Traditionally regarded as the earliest surviving Old Latin Gospel codex. (Four Gospels)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Vercellensis' },

{ id:'nt-old-latin-codex-bobiensis', name:'Old Latin Codex Bobiensis', cat:'manuscript', era:'Fourth or fifth century CE', conf:'certain',
  blurb:'Fourth or fifth century CE. Findspot: North Africa provenance.',
  sig:'Old Latin witness preserves a short Mark ending and distinctive text. (Matthew and Mark fragments)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Bobiensis' },

{ id:'nt-codex-palatinus-old-latin-gospels', name:'Codex Palatinus Old Latin Gospels', cat:'manuscript', era:'Fifth century CE', conf:'certain',
  blurb:'Fifth century CE. Findspot: Western Mediterranean.',
  sig:'Purple parchment Old Latin manuscript documents western Gospel transmission. (Gospels fragments)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Codex_Palatinus' },

{ id:'nt-sahidic-coptic-crosby-schoyen-codex', name:'Sahidic Coptic Crosby Schoyen Codex', cat:'manuscript', era:'Third or fourth century CE', conf:'certain',
  blurb:'Third or fourth century CE. Findspot: Egypt.',
  sig:'Early Coptic single-quire codex includes the earliest complete copy of 1 Peter in Coptic. (1 Peter; Jonah; 2 Maccabees; Melito; homily)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Sch%C3%B8yen_Collection' },

{ id:'nt-egerton-gospel-papyrus', name:'Egerton Gospel Papyrus', cat:'manuscript', era:'Second century CE', conf:'certain',
  blurb:'Second century CE. Findspot: Egypt.',
  sig:'Early noncanonical Gospel fragment shows circulation and recombination of Jesus traditions. (Parallels to John and Synoptics)',
  src:['See: https://ntvmr.uni-muenster.de/liste'], wiki:'https://en.wikipedia.org/wiki/Egerton_Gospel' }
];
window.NTATLAS.ARCHAEOLOGY_UNPLACED = ARCHAEOLOGY_UNPLACED;
