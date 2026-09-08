/* ——— New Testament Atlas: confidence tiers & source citations ———

   Two things the atlas owes a serious reader:

   1. HOW SURE ARE WE? Bible maps print every name in the same type, which
      quietly tells the reader that Capernaum and Emmaus are known to the same
      degree. They are not. `c` grades each identification:

        certain      — the site is fixed by continuous name, inscription, or
                       excavation that matches the ancient descriptions
        probable     — one candidate is widely accepted and no serious rival
                       stands against it, but the proof is not decisive
        contested    — two or more real candidates are argued in print by
                       working scholars; the atlas names them rather than
                       choosing for the reader
        conjectural  — the location rests on later tradition or on inference
                       alone; scripture gives no place a modern map can fix

   2. ON WHOSE AUTHORITY? `s` lists the literature behind each place — ancient
      sources, excavation reports, and standard reference works, by author and
      title. They are pointers into the scholarship, not page citations, and a
      teacher challenged on a location can name where the argument lives.

   `n` carries the competing candidates for contested and conjectural sites.

   Merged into the place records at boot; nothing here changes a coordinate. */

const CONF_TIERS = {
  certain:     { label:'Securely identified', short:'Secure',      rank:0, color:'#3f6b4a',
                 blurb:'Fixed by continuous name, inscription, or excavation matching the ancient descriptions.' },
  probable:    { label:'Probable identification', short:'Probable', rank:1, color:'#6b6033',
                 blurb:'One candidate is widely accepted and unrivalled, but the proof is not decisive.' },
  contested:   { label:'Contested identification', short:'Contested', rank:2, color:'#8c5a2b',
                 blurb:'Two or more real candidates are argued in print. The atlas names them rather than choosing.' },
  conjectural: { label:'Traditional or conjectural', short:'Conjectural', rank:3, color:'#8c3a2b',
                 blurb:'Rests on later tradition or inference. Scripture fixes no location a modern map can plot.' }
};

const GENERAL_SOURCES = [
  'Josephus, <i>The Jewish War</i> and <i>Jewish Antiquities</i> (Loeb Classical Library)',
  'E. Stern, ed., <i>The New Encyclopedia of Archaeological Excavations in the Holy Land</i> (NEAEHL)',
  'Y. Tsafrir, L. Di Segni &amp; J. Green, <i>Tabula Imperii Romani: Iudaea–Palaestina</i> (1994)',
  'J. Murphy-O’Connor, <i>The Holy Land: An Oxford Archaeological Guide</i> (5th ed., 2008)',
  'R. Talbert, ed., <i>Barrington Atlas of the Greek and Roman World</i> (2000)',
  'Eusebius, <i>Onomasticon</i> (ed. Freeman-Grenville, Chapman &amp; Taylor, 2003)',
  'D. N. Freedman, ed., <i>The Anchor Bible Dictionary</i> (1992)'
];

const SCHOLARSHIP = {

/* ——— Galilee & the lake ——— */
nazareth: { c:'certain', s:[
  'B. Bagatti, <i>Excavations in Nazareth</i> (1969)',
  'K. Dark, <i>Roman-Period and Byzantine Nazareth and its Hinterland</i> (2020)',
  'Y. Alexandre, Israel Antiquities Authority reports on the Mary’s Well and Nazareth Village Farm excavations'] },

sepphoris: { c:'certain', s:[
  'E. M. Meyers, E. Netzer &amp; C. L. Meyers, <i>Sepphoris</i> (1992)',
  'Z. Weiss, <i>The Sepphoris Synagogue</i> (2005)',
  'Josephus, <i>Antiquities</i> 18 and <i>War</i> 2–3, on its burning and rebuilding'] },

capernaum: { c:'certain', s:[
  'S. Loffreda, <i>Recovering Capharnaum</i> (2nd ed., 1993)',
  'V. Tzaferis, <i>Excavations at Capernaum</i> I (1989)',
  'J. F. Strange &amp; H. Shanks, on the identification of the first-century synagogue foundations'] },

chorazin: { c:'certain', s:[
  'Z. Yeivin, <i>The Synagogue at Korazim</i> (Israel Antiquities Authority Reports, 2000)',
  'Eusebius, <i>Onomasticon</i>, which already knows it as a ruin'] },

magdala: { c:'certain', s:[
  'S. De Luca &amp; A. Lena, on the Magdala harbour and urban excavations',
  'D. Avshalom-Gorni &amp; A. Najar, on the first-century synagogue uncovered in the 2009 salvage excavation',
  'M. Zapata-Meza et al., reports of the Magdala Project (Universidad Anáhuac)',
  'Josephus, <i>War</i> 2–3, on Taricheae and the battle on the lake'] },

tiberias: { c:'certain', s:[
  'Y. Hirschfeld &amp; K. Galor, on the excavations of Tiberias and its bathhouse quarter',
  'Josephus, <i>Antiquities</i> 18, on Antipas’ foundation over a burial ground'] },

beatitudes: { c:'conjectural',
  n:'Scripture names no hill. The Byzantine church at Tabgha, the slope above it, and the modern Italian church of 1938 all mark a tradition rather than a located event; Luke 6:17 has the sermon on a plain.',
  s:[
  'B. Bagatti, on the Byzantine chapel and the Tabgha tradition',
  'Egeria, <i>Itinerarium</i> (late 4th century), the earliest pilgrim notice of the site'] },

bethsaida: { c:'contested',
  n:'Two candidates are excavated and argued: et-Tell, 1.5 miles inland, dug since 1987 by the Bethsaida Excavations Project; and el-Araj (Beth ha-Bek) on the shore, where a Roman-period settlement and a Byzantine church have been found since 2016. The lake-shore objection to et-Tell and the stratigraphy of el-Araj are both live questions.',
  s:[
  'R. Arav &amp; R. A. Freund, eds., <i>Bethsaida: A City by the North Shore of the Sea of Galilee</i>, vols. 1–4',
  'M. Aviam, R. S. Notley &amp; S. Dray, reports of the el-Araj Excavation Project',
  'J. F. Strange, on the criteria for identifying Bethsaida'] },

cana: { c:'contested',
  n:'Kafr Kanna, on the Nazareth–Tiberias road, carries the pilgrim tradition and the modern churches. Khirbet Qana, eight miles north in the Beth Netofa valley, has the better claim on the ancient evidence: Josephus’ Cana, first-century occupation, and a venerated cave complex.',
  s:[
  'D. Edwards, on the excavations at Khirbet Qana',
  'T. McCollough, on Khirbet Qana and the Cana question',
  'Josephus, <i>Life</i> 86, on his own stay at Cana of Galilee'] },

nain: { c:'probable', s:[
  'Eusebius, <i>Onomasticon</i>, which places Nain near Endor',
  'Tomb and settlement survey of Nein on the Nazareth ridge (Israel Antiquities Authority)'] },

tabor: { c:'certain', s:[
  'Josephus, <i>War</i> 2.573 and 4.54–61, on the fortifying of Itabyrion and its fall',
  'B. Bagatti, on the Byzantine and Crusader churches of the summit'],
  n:'The mountain itself is beyond doubt; whether it is the mount of the Transfiguration is not — see Mount Hermon.' },

gennesaret: { c:'certain', s:[
  'Josephus, <i>War</i> 3.516–521, the famous description of the plain’s fertility',
  'M. Nun, <i>The Sea of Galilee and Its Fishermen in the New Testament</i> (1989)'] },

kursi: { c:'probable', s:[
  'V. Tzaferis, <i>Excavations at Kursi–Gergesa</i> (1983)',
  'Origen, <i>Commentary on John</i> 6, on the Gergesa reading and a lakeside slope'],
  n:'The Gospels’ manuscripts read Gadarenes, Gerasenes and Gergesenes. Kursi is the only east-shore site with a steep slope to the water, tombs, and a Byzantine church marking the miracle.' },

/* ——— Decapolis & the north ——— */
hippos:      { c:'certain', s:['A. Segal et al., <i>Hippos–Sussita: Excavation Reports</i> (University of Haifa)', 'Josephus, <i>War</i> 2, on Hippos and its territory'] },
gadara:      { c:'certain', s:['T. Weber, <i>Gadara–Umm Qes</i> (2002)', 'Josephus, <i>War</i> 4, on Gadara as the strongest city of Perea’s border'] },
gerasa:      { c:'certain', s:['C. H. Kraeling, ed., <i>Gerasa: City of the Decapolis</i> (1938)', 'Jordanian Department of Antiquities reports on Jerash'] },
scythopolis: { c:'certain', s:['A. Mazar, <i>Excavations at Tel Beth-Shean</i> (2006)', 'G. Foerster &amp; Y. Tsafrir, on Roman and Byzantine Scythopolis'] },
pella:       { c:'certain', s:['R. H. Smith &amp; A. McNicoll, <i>Pella of the Decapolis</i> (1982–1992)', 'Eusebius, <i>Ecclesiastical History</i> 3.5, on the flight of the Jerusalem church'] },
philadelphia:{ c:'certain', s:['A. Northedge, <i>Studies on Roman and Islamic Amman</i> (1992)', 'Barrington Atlas, map 71'] },
abila:       { c:'certain', s:['W. H. Mare, reports of the Abila of the Decapolis excavations', 'Barrington Atlas, map 69'] },
canatha:     { c:'certain', s:['K. S. Freyberger, on the sanctuaries of Qanawat', 'Pliny, <i>Natural History</i> 5.16, listing the Decapolis'] },
damascus:    { c:'certain', s:['Josephus, <i>War</i> 2 and <i>Antiquities</i> 13, on Damascus and its Jewish community', 'K. Freyberger, on the temple of Jupiter Damascenus and the Roman street plan'] },

'caesarea-philippi': { c:'certain', s:[
  'Z. U. Ma‘oz &amp; V. Tzaferis, on the sanctuary of Pan at Banias',
  'J. F. Wilson, <i>Caesarea Philippi: Banias, the Lost City of Pan</i> (2004)'] },

hermon: { c:'certain',
  n:'The mountain is certain; its claim to the Transfiguration is inference. Mark 9:2 says only “an high mountain apart,” and the narrative sits six days after Caesarea Philippi at Hermon’s foot — which is the whole argument for it, and against Tabor.',
  s:['J. F. Wilson, <i>Caesarea Philippi</i> (2004), on the region', 'W. D. Davies &amp; D. C. Allison, <i>Matthew</i> (ICC), on the site of the Transfiguration'] },

tyre:  { c:'certain', s:['P. Bikai, on the excavations of Tyre', 'Josephus, <i>Against Apion</i> 1, citing the Tyrian archives'] },
sidon: { c:'certain', s:['C. Doumet-Serhal, reports of the British Museum Sidon excavation', 'Barrington Atlas, map 69'] },

/* ——— Samaria & the coast ——— */
sychar: { c:'probable', s:[
  'Eusebius, <i>Onomasticon</i>, on Sychar beside Shechem',
  'A. Zertal, <i>The Manasseh Hill Country Survey</i>, on Askar and the wells of the valley'],
  n:'The well itself is ancient and continuously venerated; Sychar is usually located at Askar, though some read John 4:5 as Shechem itself.' },

gerizim:  { c:'certain', s:['Y. Magen, <i>Mount Gerizim Excavations</i> I–II (2004–2008)', 'Josephus, <i>Antiquities</i> 11 and 13, on the temple and its destruction'] },
sebaste:  { c:'certain', s:['J. W. Crowfoot, K. Kenyon &amp; E. Sukenik, <i>Samaria-Sebaste</i> I–III', 'Josephus, <i>Antiquities</i> 15, on Herod’s refoundation'] },
caesarea: { c:'certain', s:['K. Holum &amp; A. Raban, eds., <i>Caesarea Maritima</i> (1996)', 'Josephus, <i>Antiquities</i> 15 and <i>War</i> 1, on the harbour of Sebastos', 'The Pilate inscription, published by A. Frova (1961)'] },
joppa:    { c:'certain', s:['J. Kaplan, on the excavations of Jaffa', 'Josephus, <i>War</i> 2–3, on Joppa and piracy'] },

/* ——— The Jordan, the wilderness & Perea ——— */
bethabara: { c:'contested',
  n:'The Madaba map and the Byzantine churches point to al-Maghtas on the east bank (Wadi al-Kharrar, Jordan), excavated since 1996. Qasr al-Yahud on the west bank carries the modern Israeli pilgrim site. Some manuscripts of John 1:28 read Bethabara, others Bethany beyond Jordan, and a northern location near Batanea has been argued.',
  s:[
  'M. Waheeb, reports on the excavations at Wadi al-Kharrar / al-Maghtas',
  'R. Riesner, <i>Bethanien jenseits des Jordan</i> (2002)',
  'The Madaba mosaic map (6th century)'] },

jericho:   { c:'certain', s:['E. Netzer, <i>Hasmonean and Herodian Palaces at Jericho</i> I–V', 'Josephus, <i>War</i> 1 and 4, on Herod’s winter palace and the balsam groves'] },
qumran:    { c:'certain', s:['J. Magness, <i>The Archaeology of Qumran and the Dead Sea Scrolls</i> (2002)', 'R. de Vaux, <i>Archaeology and the Dead Sea Scrolls</i> (1973)', 'Pliny, <i>Natural History</i> 5.17, on the Essenes above the shore'] },
machaerus: { c:'certain', s:['G. Vörös, <i>Machaerus</i> I–III (2013–2019)', 'Josephus, <i>Antiquities</i> 18, on the imprisonment and death of John'] },

/* ——— Judea & Bethlehem ——— */
bethlehem: { c:'certain', s:[
  'Justin Martyr, <i>Dialogue with Trypho</i> 78, and Origen, on the cave tradition before Constantine',
  'B. Bagatti, on the Church of the Nativity and its Constantinian phase'] },

bethany: { c:'certain', s:[
  'S. J. Saller, <i>Excavations at Bethany</i> (1957)',
  'Eusebius, <i>Onomasticon</i>, on Bethany at the second milestone from Jerusalem'] },

emmaus: { c:'contested',
  n:'Four candidates, each argued from the distance in Luke 24:13, which the manuscripts give as sixty <i>or</i> a hundred and sixty furlongs: Amwas / Emmaus-Nicopolis (160 stadia, the ancient name, and Eusebius’ choice); Abu Ghosh–Qiryat Yearim; el-Qubeibeh, the Crusader Castellum Emmaus; and Motza, which Josephus calls Ammaous and which sits at almost exactly sixty stadia.',
  s:[
  'M. Fischer, on Emmaus-Nicopolis and its excavations',
  'J. Taylor, on the Emmaus candidates and the manuscript distances',
  'Josephus, <i>War</i> 7.217, on Ammaous and the veterans’ colony'] },

kerioth: { c:'contested',
  n:'“Iscariot” is usually read as <i>ish Qeriyyot</i>, a man of Kerioth, and Kerioth located at Khirbet el-Qaryatein in the Judean south (Joshua 15:25). Others read the name from the Latin <i>sicarius</i>, dagger-man, or as a family name — in which case no place is involved at all.',
  s:[
  'R. Brown, <i>The Death of the Messiah</i> (1994), on the name Iscariot',
  'Y. Aharoni, <i>The Land of the Bible: A Historical Geography</i> (2nd ed., 1979), on the Judean toponym'] },

egypt: { c:'conjectural',
  n:'Matthew 2 names a country, not a town. The Coptic tradition of the Holy Family’s route — Old Cairo, Wadi Natrun, Asyut — is preserved in later homiletic literature and is devotional geography rather than located history. The pin marks the region and the Jewish community that made refuge there thinkable.',
  s:[
  'J. M. Modrzejewski, <i>The Jews of Egypt from Rameses II to Emperor Hadrian</i> (1995)',
  'O. F. A. Meinardus, <i>The Holy Family in Egypt</i> (1986), for the tradition itself'] },

/* ——— Jerusalem ——— */
jerusalem: { c:'certain', s:[
  'H. Geva, ed., <i>Ancient Jerusalem Revealed</i> (1994, 2000)',
  'N. Avigad, <i>Discovering Jerusalem</i> (1983)',
  'Josephus, <i>War</i> 5.136–247, the great description of the city and its walls'] },

'temple-mount': { c:'certain', s:[
  'B. Mazar, <i>The Mountain of the Lord</i> (1975)',
  'E. Mazar, <i>The Temple Mount Excavations</i> (Final Reports)',
  'Mishnah, tractate <i>Middot</i>, and Josephus, <i>War</i> 5, on the courts and their measurements'] },

olivet: { c:'certain', s:[
  'J. Murphy-O’Connor, <i>The Holy Land</i>, on the mount and its churches',
  'Zechariah 14:4 and Josephus, <i>War</i> 5, on the ridge and the siege'] },

gethsemane: { c:'probable',
  n:'The Kidron slope is certain; the precise enclosure is not. The rock of the Church of All Nations, the Grotto of the Betrayal, and the Russian and Armenian gardens each hold a claim, all resting on the Byzantine tradition Eusebius records.',
  s:['Eusebius, <i>Onomasticon</i>, on Gethsemane at the foot of Olivet', 'V. Corbo, on the excavations beneath the Church of All Nations'] },

cenacle: { c:'conjectural',
  n:'The Last Supper and Pentecost are placed by the Gospels and Acts within Jerusalem, but neither text names a house, street, or quarter. The Cenacle — a Crusader hall over an early Byzantine tradition of a synagogue-church on Mount Zion — is where later veneration settled, not a first-century identification; it is a distinct, competing tradition from the nearby House of Caiaphas.',
  s:[
  'S. Gibson, <i>The Final Days of Jesus</i> (2009)',
  'B. Pixner, on the Essene quarter and the Mount Zion tradition'] },

caiaphas: { c:'contested',
  n:'Two traditions compete for the high priest’s house — the Armenian site on the western hill (St Saviour) and the Assumptionist excavation at St Peter in Gallicantu. The Upper Room is a separate question again: the Cenacle on Mount Zion is a Crusader building over an early tradition of a synagogue-church. The Caiaphas ossuary, found in 1990, may belong to the high-priestly family — the identification is plausible, not conclusive — but does not fix the address.',
  s:[
  'S. Gibson, <i>The Final Days of Jesus</i> (2009)',
  'B. Pixner, on the Essene quarter and the Mount Zion tradition',
  'Z. Greenhut, on the Caiaphas family tomb'] },

praetorium: { c:'contested',
  n:'Herod’s palace by the Jaffa Gate is now the majority view: Josephus has the prefects lodge there, and Philo describes Pilate judging in it. The older tradition of the Antonia fortress, and its Lithostrotos pavement beneath the Sisters of Zion, is now dated to Hadrian’s forum.',
  s:[
  'P. Benoit, on the Lithostrotos and the Antonia',
  'D. Bahat, on Herod’s palace as the praetorium',
  'Philo, <i>Embassy to Gaius</i> 38, and Josephus, <i>War</i> 2.301'] },

golgotha: { c:'contested',
  n:'The Church of the Holy Sepulchre holds the overwhelming weight of evidence: a first-century quarry with rock-cut tombs, outside the second wall, venerated before Constantine and enclosed by Hadrian’s forum. The Garden Tomb, proposed in 1883, is an Iron Age tomb reused in the Byzantine period — a moving place to visit, but not a first-century candidate.',
  s:[
  'M. Biddle, <i>The Tomb of Christ</i> (1999)',
  'D. Bahat, “Does the Holy Sepulchre Church Mark the Burial of Jesus?” (1986)',
  'G. Barkay, on the date of the Garden Tomb'] },

bethesda: { c:'certain', s:[
  'A. Duprez, <i>Jésus et les dieux guérisseurs</i> (1970), on the pools and the healing cult',
  'S. Gibson &amp; J. Taylor, on the twin pools and the five porches',
  'The Copper Scroll (3Q15), which appears to name Beth Eshdatayin'] },

siloam: { c:'certain', s:[
  'R. Reich &amp; E. Shukron, on the discovery of the Second Temple pool in 2004',
  'The Siloam inscription and Hezekiah’s tunnel; 2 Kings 20:20'] },

/* ——— Syria, Asia Minor & the Aegean ——— */
'antioch-syria': { c:'certain', s:['G. Downey, <i>A History of Antioch in Syria</i> (1961)', 'Libanius, <i>Antiochikos</i> (Oration 11), on the city’s streets and colonnades'] },
tarsus:          { c:'certain', s:['H. Goldman, <i>Excavations at Gözlü Kule, Tarsus</i>', 'Strabo, <i>Geography</i> 14.5, on the schools of Tarsus'] },
'salamis-cyprus':{ c:'certain', s:['V. Karageorghis, <i>Salamis in Cyprus</i> (1969)', 'Barrington Atlas, map 72'] },
paphos:          { c:'certain', s:['F. G. Maier &amp; V. Karageorghis, <i>Paphos: History and Archaeology</i> (1984)', 'The Cyprus Department of Antiquities reports on Nea Paphos'] },
perga:           { c:'certain', s:['W. Martini, on the excavations of Perge', 'Strabo, <i>Geography</i> 14.4, on Pamphylia and its harbours'] },
'antioch-pisidia':{c:'certain', s:['S. Mitchell &amp; M. Waelkens, <i>Pisidian Antioch</i> (1998)', 'W. M. Ramsay, <i>The Cities of St Paul</i> (1907), for the identification'] },
iconium:         { c:'certain', s:['B. Levick, <i>Roman Colonies in Southern Asia Minor</i> (1967)', '<i>Acts of Paul and Thecla</i>, for the city’s early Christian memory'] },
lystra:          { c:'certain', s:['W. M. Ramsay, on the Lystra inscription that fixed the site at Zoldera', 'B. Levick, <i>Roman Colonies in Southern Asia Minor</i> (1967)'] },
derbe:           { c:'probable', s:['M. Ballance, on the inscription from Kerti Höyük naming Derbe (1957)', 'B. Levick, <i>Roman Colonies in Southern Asia Minor</i> (1967)'],
                   n:'An inscription found in 1956 moved Derbe to Kerti Höyük, some 60 miles from Ramsay’s earlier placing; the mound itself is unexcavated.' },
troas:           { c:'certain', s:['Barrington Atlas, map 56, and the Turkish Ministry of Culture reports on Alexandria Troas', 'Strabo, <i>Geography</i> 13.1, on the Troad and its harbour'] },
ephesus:         { c:'certain', s:['Austrian Archaeological Institute, <i>Forschungen in Ephesos</i>', 'P. Trebilco, <i>The Early Christians in Ephesus from Paul to Ignatius</i> (2004)', 'Pausanias and Strabo, on the Artemision'] },
miletus:         { c:'certain', s:['German Archaeological Institute, <i>Milet</i> excavation reports', 'The theatre inscription of the “place of the Jews”'] },
colossae:        { c:'certain', s:['A. Cadwallader &amp; M. Trainor, eds., <i>Colossae in Space and Time</i> (2011)', 'Strabo, <i>Geography</i> 12.8, on the Lycus valley'],
                   n:'The mound is securely identified but essentially unexcavated — the least dug of the three Lycus valley cities.' },
laodicea:        { c:'certain', s:['C. Şimşek, <i>Laodikeia</i> excavation reports (Pamukkale University)', 'Strabo and Cicero, on its banking and its wool'] },
hierapolis:      { c:'certain', s:['F. D’Andria, on the Italian excavations at Hierapolis and the tomb of Philip', 'Strabo, <i>Geography</i> 13.4, on the Plutonium and the hot springs'] },
smyrna:          { c:'certain', s:['C. J. Cadoux, <i>Ancient Smyrna</i> (1938)', 'The Izmir Agora excavations (Turkish Ministry of Culture)'] },
pergamum:        { c:'certain', s:['German Archaeological Institute, <i>Altertümer von Pergamon</i>', 'Galen and Pausanias, on the Asklepieion'] },
thyatira:        { c:'certain', s:['C. Foss, on Byzantine and Roman Akhisar', 'Inscriptions of the Thyatiran guilds, including the dyers'] },
sardis:          { c:'certain', s:['G. M. A. Hanfmann, <i>Sardis from Prehistoric to Roman Times</i> (1983)', 'A. Seager &amp; A. T. Kraabel, on the Sardis synagogue'] },
'philadelphia-asia':{c:'certain', s:['C. Foss, on Alaşehir and the Lydian cities', 'Strabo, <i>Geography</i> 13.4, on its earthquakes'] },
philippi:        { c:'certain', s:['P. Collart, <i>Philippes, ville de Macédoine</i> (1937)', 'C. Koukouli-Chrysanthaki, on the Greek excavations and the Via Egnatia', 'P. Pilhofer, <i>Philippi</i> (1995)'] },
thessalonica:    { c:'certain', s:['H. L. Hendrix, on Thessalonica’s civic institutions and the politarch inscriptions', 'C. Edson, <i>Inscriptiones Graecae</i> X, the Thessalonian corpus'] },
berea:           { c:'certain', s:['Barrington Atlas, map 50, and the Greek Archaeological Service reports on Veria', 'Cicero, <i>In Pisonem</i>, on Beroea off the Egnatian road'] },
athens:          { c:'certain', s:['American School of Classical Studies, <i>The Athenian Agora</i> series', 'Pausanias, <i>Description of Greece</i> 1, on the altars and the Areopagus'] },
corinth:         { c:'certain', s:['American School of Classical Studies, <i>Corinth</i> excavation volumes', 'J. Murphy-O’Connor, <i>St Paul’s Corinth: Texts and Archaeology</i> (2002)', 'The Gallio inscription from Delphi, which dates Paul’s stay'] },
cenchreae:       { c:'certain', s:['R. Scranton, J. Shaw &amp; L. Ibrahim, <i>Kenchreai: Eastern Port of Corinth</i> (1978)', 'Pausanias, <i>Description of Greece</i> 2.2'] },
patmos:          { c:'certain', s:['Barrington Atlas, map 61, and the Greek Archaeological Service reports', 'Pliny, <i>Natural History</i> 4.23, and the Roman use of Aegean islands for relegation'] },

/* ——— Rome, the voyage, and the wider world ——— */
'crete-fair-havens': { c:'probable', s:[
  'J. Smith, <i>The Voyage and Shipwreck of St Paul</i> (4th ed., 1880)',
  'C. Hemer, <i>The Book of Acts in the Setting of Hellenistic History</i> (1989)'],
  n:'Kaloi Limenes on the south coast keeps the ancient name and matches the description in Acts 27:8, but the anchorage has no excavated harbour works to prove it.' },

malta:   { c:'certain', s:['A. Bonanno, <i>Malta: Phoenician, Punic and Roman</i> (2005)', 'J. Smith, <i>The Voyage and Shipwreck of St Paul</i> (1880), on the reconstruction of the drift'],
           n:'The island is certain; St Paul’s Bay as the landing place is a tradition consistent with the sailing directions, not a located site.' },
puteoli: { c:'certain', s:['J. D’Arms, on the Bay of Naples and Roman commerce', 'Strabo, <i>Geography</i> 5.4, on Puteoli as Rome’s grain port'] },
rome:    { c:'certain', s:['L. Richardson, <i>A New Topographical Dictionary of Ancient Rome</i> (1992)', 'L. V. Rutgers, <i>The Jews in Late Ancient Rome</i> (1995)', 'Tacitus, <i>Annals</i> 15.44, and Suetonius, <i>Claudius</i> 25'] },

alexandria: { c:'certain', s:[
  'J. McKenzie, <i>The Architecture of Alexandria and Egypt</i> (2007)',
  'Philo, <i>Against Flaccus</i> and <i>Embassy to Gaius</i>, on the Jewish quarter and the pogrom',
  'Josephus, <i>Against Apion</i> 2, on Alexandrian Jewry'] },

babylon: { c:'contested',
  n:'The city is securely located; what is contested is whether 1 Peter 5:13 means it. Most read Babylon as a cipher for Rome, as Revelation does. A minority take it literally of the Jewish community on the Euphrates, which the Talmud shows was substantial. The pin marks the literal city and the question.',
  s:[
  'J. H. Elliott, <i>1 Peter</i> (Anchor Yale Bible, 2000), on the Babylon reference',
  'C. Hemer, on Babylon as a designation for Rome',
  'J. Neusner, <i>A History of the Jews in Babylonia</i> (1965–1970)'] },

'bithynia-pontus': { c:'certain', s:[
  'C. Marek, <i>Pontus et Bithynia</i> (2003)',
  'Pliny the Younger, <i>Letters</i> 10.96–97, the earliest outside account of Christian worship in the province'] },

spain: { c:'conjectural',
  n:'Paul states the intention (Romans 15:24, 28); no journey is recorded. 1 Clement 5 says he reached “the limits of the west,” which may or may not mean Hispania. The pin marks a stated plan, not a visit.',
  s:[
  '1 Clement 5, and the Muratorian Canon, on Paul in the west',
  'F. F. Bruce, <i>Paul: Apostle of the Heart Set Free</i> (1977), on the Spanish plan'] }
};

window.NTATLAS = window.NTATLAS || {};
window.NTATLAS.CONF_TIERS = CONF_TIERS;
window.NTATLAS.SCHOLARSHIP = SCHOLARSHIP;
window.NTATLAS.GENERAL_SOURCES = GENERAL_SOURCES;
