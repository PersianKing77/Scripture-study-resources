/* Credits. Who found and published the material this drawing is built on, what is measured
   and what is modelled, and the terms of use.

   Register: plain and declarative. State the fact, the source, and where it bears on the
   drawing. Do not grade the scholarship, do not narrate, and do not justify — a credits page
   records; it does not argue. */
(function () {

  var GROUPS = [

    { h: 'Excavations on the ridge',
      note: 'In the order they worked.',
      items: [
        { w: 'Edward Robinson and Eli Smith', y: '1838', t: 'Biblical Researches in Palestine, Mount Sinai and Arabia Petraea (1841)',
          f: 'First modern description of Hezekiah\u2019s Tunnel, traversed along its full length.' },
        { w: 'Charles Warren', y: '1867\u201370', t: 'Underground Jerusalem (1876); The Survey of Western Palestine: Jerusalem, with C. R. Conder (1884)',
          f: 'Palestine Exploration Fund. Worked by shaft and tunnel rather than open area. Recorded the vertical shaft that carries his name and much of the water system. Source for the crest and slope heights used here.' },
        { w: 'Hermann Guthe', y: '1881', t: 'Reports in Zeitschrift des Deutschen Pal\u00e4stina-Vereins',
          f: 'Trenching on the eastern slope.' },
        { w: 'Frederick J. Bliss and Archibald C. Dickie', y: '1894\u201397', t: 'Excavations at Jerusalem 1894\u20131897 (Palestine Exploration Fund, 1898)',
          f: 'Traced the southern city wall around the spur and located the Byzantine church at the pool. Recorded by tunnelling; the plans are not to modern standards, which is why the church is drawn here as probable rather than secure.' },
        { w: 'Montagu Parker, with Louis-Hugues Vincent', y: '1909\u201311', t: 'L.-H. Vincent, Underground Jerusalem: Discoveries on the Hill of Ophel, 1909\u20131911 (1911)',
          f: 'Vincent\u2019s record of the water systems is the citable result of the expedition. Source, with Warren, for the tunnel and channel courses.' },
        { w: 'Raymond Weill', y: '1913\u201314, 1923\u201324', t: 'La Cit\u00e9 de David: Compte rendu des fouilles ex\u00e9cut\u00e9es \u00e0 J\u00e9rusalem (1920, 1947)',
          f: 'Southern end of the ridge. Found the Theodotus inscription. Read a series of rock-cut chambers as tombs of the kings of Judah; the identification is disputed.' },
        { w: 'R. A. S. Macalister and J. Garrow Duncan', y: '1923\u201325', t: 'Excavations on the Hill of Ophel, Jerusalem, 1923\u20131925 (PEF Annual, 1926)',
          f: 'Exposed the upper part of the stone mantle. Dated it to the Jebusite period with Maccabean repairs.' },
        { w: 'J. W. Crowfoot and G. M. FitzGerald', y: '1927\u201328', t: 'Excavations in the Tyropoeon Valley, Jerusalem, 1927 (PEF Annual, 1929)',
          f: 'Western side of the ridge.' },
        { w: 'Kathleen M. Kenyon', y: '1961\u201367', t: 'Digging Up Jerusalem (1974); preliminary reports in Palestine Exploration Quarterly',
          f: 'Narrow trenches, layers recorded in section, dating from sealed deposits. Dated the earliest terraces beneath the stone mantle to the Late Bronze Age, and identified a wall higher up the eastern slope as post-exilic.' },
        { w: 'Nahman Avigad', y: '1969\u201382', t: 'Discovering Jerusalem (1983)',
          f: 'Jewish Quarter, across the Tyropoeon. The Broad Wall, late eighth century, about seven metres thick. Drawn at the edge of the plan for reference; it belongs to the same city but not to this ridge.' },
        { w: 'Yigal Shiloh', y: '1978\u201385', t: 'Excavations at the City of David I: 1978\u20131982, Interim Report of the First Five Seasons (Qedem 19, 1984); City of David final report series, Qedem',
          f: 'Area G. The Stepped Stone Structure exposed in full, the eighth- and seventh-century houses, the Bullae House, and the destruction layer of 587/586 BC. Source for most Iron Age positions on these drawings. The analyses of the charred timbers and the household deposits appear in the same series.' },
        { w: 'Ronny Reich and Eli Shukron', y: '1995\u20132010', t: 'R. Reich, Excavating the City of David: Where Jerusalem\u2019s History Began (Israel Exploration Society, 2011); reports in Israel Exploration Journal, Levant and Tel Aviv',
          f: 'The spring. Middle Bronze Spring Tower, rock-cut pool and Pool Tower; re-excavation of the passage above Warren\u2019s Shaft; identification of the monumental Pool of Siloam in 2004. Source for the spring complex and the pool.' },
        { w: 'Eilat Mazar', y: '2005\u201308', t: 'Preliminary Report on the City of David Excavations 2005 at the Visitors Center Area (2007); The Palace of King David: Excavations at the Summit of the City of David (2009)',
          f: 'The Large Stone Structure at the top of the eastern slope, proposed as the building of 2 Samuel 5:11. Final reports published by her team after her death in 2021.' },
        { w: 'Doron Ben-Ami and Yana Tchekhanovets', y: '2007\u2013', t: 'Giv\u2018ati Parking Lot reports, Israel Antiquities Authority; papers in Israel Exploration Journal',
          f: 'Iron Age to Abbasid sequence on one plot: the fortification proposed as the Seleucid Akra, a large Second Temple period complex, and Umayyad buildings. Source for the northern end of the ridge.' },
        { w: 'Pilgrimage Road excavation', y: '2013\u2013', t: 'Israel Antiquities Authority',
          f: 'The stepped street and the drainage channel beneath it, excavated by tunnelling northward beneath Wadi Hilweh. Some archaeologists have objected to the method, which does not permit reading the site in open plan and section.' }
      ] },

    { h: 'Particular findings',
      note: 'Results this visualization relies on, with the people who produced them.',
      items: [
        { w: 'Nahshon Szanton, Moran Hagbi, Joe Uziel and Donald T. Ariel', y: '\u2014', t: 'Coins sealed beneath the paving of the stepped street',
          f: 'Coins issued under Pontius Pilate, including an issue of AD 30/31 beneath the paving, show that the excavated street was paved after that date and support construction during Pilate\u2019s governorship, under direct Roman administration rather than under Herod.' },
        { w: 'Jane M. Cahill, Karl Reinhard, David Tarler and Peter Warnock', y: '\u2014', t: 'Cesspit beneath the stone toilet seat, House of Ahiel',
          f: 'Diet and intestinal parasites in an Iron Age household.' },
        { w: 'Yair Shoham', y: '\u2014', t: 'The bullae from the City of David, Qedem final report series',
          f: 'Fifty-one clay seal impressions from the Bullae House, among them Gemaryahu ben Shaphan, a name that also appears in Jeremiah.' },
        { w: 'Ronny Reich and Eli Shukron', y: '\u2014', t: 'Excavation of the passage floor above Warren\u2019s Shaft',
          f: 'The shaft is a natural karstic feature the tunnellers cut into, and the passage floor originally ran above its mouth. The reading of the shaft as the tsinnor of 2 Samuel 5:8 does not follow from the excavated evidence.' },
        { w: 'Doron Ben-Ami and Yana Tchekhanovets', y: '2015', t: 'Identification of the Giv\u2018ati fortification as part of the Seleucid Akra',
          f: 'A wall, a tower base and a glacis, with lead sling bullets, bronze arrowheads, ballista stones and coins of Antiochus IV dating the deposit to the mid-second century BC.' },
        { w: 'Avraham Biran and Joseph Naveh', y: '1993, 1995', t: 'The Tel Dan inscription, Israel Exploration Journal',
          f: 'Ninth-century Aramaic reference to the house of David as a dynastic name.' },
        { w: 'Magen Broshi', y: '1978 onward', t: 'Estimating the Population of Ancient Jerusalem, and later work in the same tradition',
          f: 'Source of the population figures quoted in the essays. They are models built from settled area and assumed density.' },
        { w: 'Kenneth W. Russell; Yoram Tsafrir and Gideon Foerster', y: '1985 onward', t: 'The Earthquake Chronology of Palestine and Northwest Arabia (BASOR, 1985); work at Beth Shean',
          f: 'The earthquake of January AD 749, dated 748 in some chronicles. Its signature on this ridge is walls fallen flat in one direction with courses in order.' },
        { w: 'Oded Lipschits; earlier, David Diringer and David Ussishkin', y: '\u2014', t: 'Typology and distribution of the lmlk seal impressions',
          f: 'More than two thousand stamped handles are known from Judah, concentrated in the years around 701 BC.' }
      ] },

    { h: 'Points on which specialists disagree',
      note: 'Drawn as debated. The positions are:',
      items: [
        { w: 'Date of the Stepped Stone Structure', y: '\u2014', t: 'Kenyon: earliest terraces Late Bronze. Shiloh: terraces and mantle one system, twelfth or eleventh century. Finkelstein and colleagues: a composite of phases, with parts considerably later, possibly Hasmonean.',
          f: 'Proposals span about a thousand years. The mantle is placed in Iron IIA here; the date is not settled.' },
        { w: 'The Large Stone Structure as a Davidic building', y: '\u2014', t: 'For: Eilat Mazar. Against: Israel Finkelstein, Ze\u2019ev Herzog, Lily Singer-Avitz and David Ussishkin, \u201cHas King David\u2019s Palace in Jerusalem Been Found?\u201d, Tel Aviv 34 (2007).',
          f: 'The objections are that the walls belong to several structures of different dates, that the pottery comes from fills rather than sealed floors, and that the identification rests on the text. Answered in print by Mazar and others; the exchange continues.' },
        { w: 'Nehemiah\u2019s wall', y: '\u2014', t: 'Kenyon: a post-exilic line higher up the eastern slope. Mazar, 2007: a crest wall and tower previously called Hasmonean. Others: Hellenistic fills, or reused Iron Age masonry.',
          f: 'If the wall is a repair rather than a new build, that is close to what Nehemiah 3 describes, so part of the disagreement concerns what would count as Nehemiah\u2019s wall.' },
        { w: 'The size of tenth-century Jerusalem', y: '\u2014', t: 'One position rests on the small quantity of securely dated tenth-century material and the absence of dated monumental architecture. Another holds that the ridge has been quarried and rebuilt for three millennia and the northern ground is inaccessible beneath the Temple Mount, so absence of evidence carries little weight.',
          f: 'A middle position holds that Iron IIA Jerusalem was an administrative centre of modest size that grew in the eighth century.' },
        { w: 'Late Bronze Age Jerusalem', y: '\u2014', t: 'Nadav Na\u2019aman: little should be expected, since Amarna-period centres were often modest and Abdi-Heba writes as a ruler short of resources. Others: a fortified acropolis lies beneath the Temple Mount platform, or the town reused standing Middle Bronze defences.',
          f: 'The letters describe a functioning city-state; the ridge yields almost no Late Bronze buildings.' },
        { w: 'Location of the Seleucid Akra', y: '\u2014', t: 'Ben-Ami and Tchekhanovets: the Giv\u2018ati fortification. Against: Josephus places the Akra overlooking the Temple, and this site lies downhill to the south; a fortified building with battle debris need not be that fortress; Josephus is inconsistent.',
          f: 'Proposals have placed it north, south and west of the Temple as well as on the ridge.' },
        { w: 'Weill\u2019s tombs of the kings of Judah', y: '1913\u201324', t: 'Weill read a series of rock-cut chambers at the southern end as royal Judahite tombs.',
          f: 'Disputed. The recording was not modern and the original context of several finds is uncertain.' }
      ] },

    { h: 'Ancient and documentary sources',
      note: '',
      items: [
        { w: 'The Amarna letters', y: 'c. 1350 BC', t: 'Six letters of Abdi-Heba of Urusalim, EA 285\u2013290. Standard English edition: William L. Moran, The Amarna Letters (1992).',
          f: 'Found in 1887 at Tell el-Amarna. Summarised in the essays rather than quoted.' },
        { w: 'Egyptian Execration Texts', y: 'early 2nd millennium BC', t: 'Berlin group published by Kurt Sethe; Brussels group by Georges Posener',
          f: 'Carry the reading generally taken as Rushalimum, with two named rulers.' },
        { w: 'Josephus', y: '1st century AD', t: 'The Jewish War; Jewish Antiquities',
          f: 'Source for the Akra, the Adiabene residences, the First Wall, and the siege of AD 70. Written as a Roman client.' },
        { w: 'The Babylonian Chronicles', y: '6th century BC', t: 'Editions including Donald J. Wiseman, Chronicles of Chaldaean Kings (1956)',
          f: 'Nebuchadnezzar\u2019s campaigns. One of three independent lines of evidence for 587/586 BC, with the biblical books and the burn layer.' },
        { w: '1 and 2 Maccabees', y: '2nd\u20131st century BC', t: 'On the Akra, built by Antiochus IV in 168 BC',
          f: 'Used with Josephus for the Seleucid period.' },
        { w: 'The Piacenza Pilgrim', y: 'c. AD 570', t: 'Anonymous Itinerarium',
          f: 'Describes the church at Siloam with the spring beneath it, and bathing for healing.' },
        { w: 'The Siloam Inscription', y: 'found 1880', t: 'Six lines of paleo-Hebrew. Istanbul Archaeological Museum.',
          f: 'Records the meeting of the two tunnelling teams. Cut from the tunnel wall in 1891 and damaged in removal; what remains in the tunnel is the scar.' },
        { w: 'The Theodotus inscription', y: 'found 1913', t: 'Ten lines of Greek, found by Weill. Israel Museum.',
          f: 'Theodotus son of Vettenus, head of a synagogue, who built a synagogue with guest rooms and water installations for visitors from abroad. Dated before AD 70 by most scholars on letter forms; a minority argue later.' },
        { w: 'The Madaba Map', y: 'c. AD 560', t: 'Mosaic floor map, Church of St George, Madaba, Jordan',
          f: 'Contemporary depiction of Byzantine Jerusalem; source for the sixth-century layout.' },
        { w: 'Coin legends of the First Revolt', y: 'AD 66\u201370', t: '\u201cYear Two\u201d; \u201cFor the Freedom of Zion\u201d',
          f: 'Sealed in the destruction debris over the paving of the Pilgrimage Road, dating the collapse.' }
      ] },

    { h: 'Scripture',
      note: '',
      items: [
        { w: 'Citation method', y: '\u2014', t: 'Scripture quotations are from the American Standard Version (1901). The surrounding commentary and the connections between passages and archaeological features are the author\u2019s own. No study notes, headings, cross-references, or Joseph Smith Translation material from modern editions are reproduced.',
          f: 'The 1901 American Standard Version is treated as public domain in the United States. Readers are encouraged to look up each cited passage in their own preferred edition.' },
        { w: 'Commentary on the passages', y: '\u2014', t: 'Written by the author.',
          f: 'Attaching a verse to a feature on the ground is an argument rather than a datum. 2 Samuel 5:8 and the Spring Tower is the clearest instance.' },
        { w: 'Other editions', y: '\u2014', t: 'No footnotes, chapter headings, cross-references or Joseph Smith Translation excerpts from any edition are reproduced here.',
          f: 'Readers working from a study edition, including Latter-day Saint editions, will find those study helps there.' }
      ] },

    { h: 'The landform: what is measured and what is modelled',
      note: '',
      items: [
        { w: 'Measured anchors', y: '\u2014', t: 'Gihon Spring 636 m above sea level; Pool of Siloam 635.7 m; crest falling from about 725 m at the north to 624 m at the southern tip.',
          f: 'Published figures, held by the model. The 30 cm between spring and pool is the whole fall of Hezekiah\u2019s Tunnel across its 533 m. Values between these anchors are interpolated.' },
        { w: 'The Kidron and Tyropoeon flanks', y: '\u2014', t: 'Both valley profiles are interpolated between a small number of published spot heights.',
          f: 'Modelled, not surveyed. The least certain part of the landform. The cross-ridge section is a reconstruction of the slope rather than a measured section.' },
        { w: 'Structure footprints', y: '\u2014', t: 'Given as a station along the ridge with whole- or half-metre dimensions, reconstructed from dimensions stated in the excavation reports.',
          f: 'Deliberately coarse.' },
        { w: 'Vertical exaggeration', y: '\u2014', t: 'The ridge falls about 100 m over 700 m.',
          f: 'The 3D view exaggerates height, by default \u00d71.6, and states the factor on screen; a control returns it to 1:1. The cross-ridge section is drawn at \u00d71.2. The elevation view has none: one metre on screen is one metre on the ground. Plan distances are never exaggerated.' },
        { w: 'Figures given as estimates', y: '\u2014', t: 'Population numbers throughout, and the extent of the Middle Bronze town.',
          f: 'Each is a model or a range in the literature rather than a measurement. Published ranges are often wider than the figures quoted.' },
        { w: 'Confidence tags', y: '\u2014', t: 'Secure, probable, debated and conjectural are the author\u2019s judgements.',
          f: 'They summarise the state of published argument and are not ratings issued by any excavator or institution. The essay for each phase names who holds which position.' }
      ] },

    { h: 'Typefaces and imagery',
      note: '',
      items: [
        { w: 'EB Garamond', y: '\u2014', t: 'Octavio Pardo. SIL Open Font License 1.1.',
          f: 'EB Garamond is bundled locally in the fonts directory under the SIL Open Font License 1.1; the license text is included.' },
        { w: 'IBM Plex Mono', y: '\u2014', t: 'IBM. SIL Open Font License 1.1.',
          f: 'IBM Plex Mono is bundled locally in the fonts directory under the SIL Open Font License 1.1; the license text is included.' },
        { w: 'Photography', y: '\u2014', t: 'No satellite or aerial imagery is included.',
          f: 'A photograph may be loaded into the plan view from the reader\u2019s own device and aligned to the ridge. It is held on that device.' }
      ] },

    { h: 'Terms',
      note: '',
      items: [
        { w: 'Copyright', y: '\u2014', t: '\u00a9 Taylor Halverson, Ph.D. Original essays, editorial selection, original schematic drawings, and original code are reserved.',
          f: 'Third-party software (React, ReactDOM, Three.js) and fonts (EB Garamond, IBM Plex Mono) remain under their own licenses, noted above; this notice does not claim exclusive ownership of them.' },
        { w: 'Independence', y: '\u2014', t: 'Independent work; not affiliated with, sponsored by, approved by, or endorsed by the Ir David Foundation (El-Ad), which operates the archaeological park, the Israel Nature and Parks Authority, or the Israel Antiquities Authority.',
          f: '\u201cCity of David\u201d is used descriptively for the historical and geographical subject; all third-party names and marks remain the property of their respective owners.' },
        { w: 'Scripture text', y: '\u2014', t: 'Scripture quotations are from the American Standard Version (1901), a translation whose U.S. copyright has expired.',
          f: 'The public-domain status claimed here is for the United States; it has not been separately verified for every distribution territory. No Cambridge/King James Version wording is used.' },
        { w: 'Local storage', y: '\u2014', t: 'This page stores a theme preference and, if you use the optional image-alignment feature, the selected image data, in your browser\u2019s local storage.',
          f: 'Nothing is uploaded to a server. Use \u201cClear image\u201d, or your browser\u2019s site-data controls, to remove it.' },
        { w: 'Software runtime', y: '\u2014', t: 'The Three.js renderer used by the 3D view is self-hosted with this page. React, ReactDOM, and Babel Standalone are fetched from unpkg.com by the page host itself, before any app code runs.',
          f: 'Three.js is bundled in ./vendor/ under its MIT license (text alongside it). React, ReactDOM, and Babel (all MIT) load from unpkg.com and are the remaining external requests this page makes on open; fonts (EB Garamond, IBM Plex Mono) are self-hosted from ./fonts/.' },
        { w: 'Geometry', y: '\u2014', t: 'Plan, section and elevation drawings are deliberately coarse schematics built from the published measurements and reports credited above, not tracings of any single excavator\u2019s original plan.',
          f: 'Beta status: locations, dates, dimensions and reconstructions may be approximate, modeled, disputed, or revised as scholarship changes. Confidence labels are the author\u2019s synthesis, not ratings issued by an excavation authority.' },
        { w: 'The site today', y: '\u2014', t: 'Several thousand people live in Wadi Hilweh, part of Silwan, above these excavations.',
          f: 'The essay for the modern period sets out the professional and political disputes surrounding archaeological work here.' },
        { w: 'Citation', y: '\u2014', t: 'Taylor Halverson, The City of David: A Visual History of Jerusalem\u2019s Southeastern Ridge.',
          f: 'Corrections and further references are welcome and will be credited.' }
      ] }
  ];

  window.COD_ATTRIB = { groups: GROUPS };
})();
