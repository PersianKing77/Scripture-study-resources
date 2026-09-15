// Generated from Biblical-Dating-Timeline-MASTER.xlsx (OT/NT Book Level, Apoc-Pseud Book Level, Apoc-Pseud Composite Layers, OT Sources - Isaiah, NT Synoptic Pericopes, Restoration Data Points).
export const BOOKS = [
 {
  "id": "genesis",
  "name": "Genesis",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -4000,
   "end": -1700,
   "confidence": "green",
   "caption": "Creation through c. 1700 BC (patriarchal era, ending with Joseph in Egypt)"
  },
  "composition": {
   "start": -1000,
   "end": -400,
   "confidence": "amber",
   "caption": "Classic test case for the Documentary Hypothesis: two creation accounts (1:1-2:3 vs. 2:4-25), two flood traditions interwoven, doublets in the Abraham narratives (wife-sister episodes) read as parallel source strands",
   "whyMatters": "Why does this matter? Ben Sira's prologue (Greek translation, c. 132 BC) already refers to 'the Law' as a known, closed collection"
  },
  "canonization": {
   "start": -500,
   "end": -400,
   "confidence": "green",
   "caption": "Torah as a unit already treated as supremely authoritative by the Samaritan schism (Torah-only canon), traditionally dated c. 5th-4th c. BC. Torah closed by c. 400 BC - earliest-closed section of the Hebrew Bible."
  },
  "restoration": "The Joseph Smith Translation adds three blocks of Restoration material tied to Genesis: Moses 1 (June 1830) has no Genesis parallel at all — new material framing the whole record (see Moses 1:41). Moses 2–5 (1830) expands Genesis 1–4, concentrated on Adam and Eve's teaching and covenant-making. Moses 6–8 (Nov–Dec 1830) is the single largest JST expansion in the Old Testament — several chapters on Enoch and the city of Zion, where the received Genesis 5:21–24 has only a brief, enigmatic parallel."
 },
 {
  "id": "exodus",
  "name": "Exodus",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1450,
   "end": -1250,
   "confidence": "amber",
   "caption": "c. 1450-1400 BC ('early date') or c. 1290-1250 BC ('late date') - the Exodus event's date is itself a live historical debate, not just a compositional one"
  },
  "composition": {
   "start": -950,
   "end": -400,
   "confidence": "red",
   "caption": "Composite: an older narrative strand plus a later priestly layer, combined into final form by c. 400 BC.",
   "whyMatters": "Why does this matter? No extra-biblical Egyptian record of the Exodus itself; dating debate rests on internal chronology (1 Kings 6:1) vs. archaeological synchronisms",
   "segments": [
    {
     "label": "Earlier narrative material (J/E)",
     "start": -950,
     "end": -750,
     "confidence": "red"
    },
    {
     "label": "Priestly source (P) — Tabernacle chs. 25-31, 35-40",
     "start": -600,
     "end": -501,
     "confidence": "red"
    },
    {
     "label": "Final compilation",
     "start": -450,
     "end": -400,
     "confidence": "green"
    }
   ]
  },
  "canonization": {
   "start": -400,
   "end": -400,
   "confidence": "green",
   "caption": "Part of the Torah unit. c. 400 BC."
  },
  "restoration": null
 },
 {
  "id": "leviticus",
  "name": "Leviticus",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": null,
  "composition": {
   "start": -600,
   "end": -501,
   "confidence": "red",
   "caption": "The 'Holiness Code' (chs. 17-26) is often treated as a distinct sub-source (H) with its own theological emphases, possibly bridging P and later material",
   "whyMatters": "Why does this matter? P's vocabulary and cultic concerns are the primary internal dating evidence, compared against Ezekiel's priestly language"
  },
  "canonization": {
   "start": -501,
   "end": -400,
   "confidence": "green",
   "caption": "Part of the Torah unit. c. 400 BC."
  },
  "restoration": null
 },
 {
  "id": "numbers",
  "name": "Numbers",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1400,
   "end": -1400,
   "confidence": "amber",
   "caption": "40 years of wilderness wandering, c. 1400s-1400 BC (or corresponding late-date range)"
  },
  "composition": {
   "start": -950,
   "end": -400,
   "confidence": "red",
   "caption": "Composite: older narrative material (rebellions, Balaam) plus later priestly census/cultic material, combined into final form by c. 400 BC.",
   "whyMatters": "Why does this matter? Internal doublets (two rebellion-at-Kadesh type episodes) cited as evidence of combined sources",
   "segments": [
    {
     "label": "Earlier narrative material (J/E)",
     "start": -950,
     "end": -750,
     "confidence": "red"
    },
    {
     "label": "Priestly source (P) — census lists, cultic material",
     "start": -600,
     "end": -501,
     "confidence": "red"
    },
    {
     "label": "Final compilation",
     "start": -450,
     "end": -400,
     "confidence": "green"
    }
   ]
  },
  "canonization": {
   "start": -400,
   "end": -400,
   "confidence": "green",
   "caption": "Part of the Torah unit. c. 400 BC."
  },
  "restoration": null
 },
 {
  "id": "deuteronomy",
  "name": "Deuteronomy",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1400,
   "end": -1400,
   "confidence": "amber",
   "caption": "Presented as Moses's farewell speeches on the plains of Moab, just before entering Canaan, c. 1400 BC (or corresponding late-date range)"
  },
  "composition": {
   "start": -800,
   "end": -501,
   "confidence": "amber",
   "caption": "Identified as the literary and theological foundation of the 'Deuteronomistic History' (Joshua-2 Kings) - Deuteronomy functions as both the last book of the Torah and the theological preface to that later historical work",
   "whyMatters": "Why does this matter? 2 Kings 22-23's account of Josiah's reforms matches Deuteronomy's content (centralized worship, covenant renewal) closely enough that the Josiah-discovery connection is treated as near-certain by most critical scholars"
  },
  "canonization": {
   "start": -501,
   "end": -400,
   "confidence": "green",
   "caption": "Part of the Torah unit. c. 400 BC."
  },
  "restoration": null
 },
 {
  "id": "joshua",
  "name": "Joshua",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1400,
   "end": -1350,
   "confidence": "amber",
   "caption": "Conquest and settlement of Canaan, c. 1400-1350 BC (or corresponding late-date range, c. 1200s BC)"
  },
  "composition": {
   "start": -700,
   "end": -587,
   "confidence": "amber",
   "caption": "Part of the continuous Deuteronomistic History (Joshua-Judges-Samuel-Kings), sharing its theological vocabulary and framework with Deuteronomy",
   "whyMatters": "Why does this matter? Archaeological evidence for a unified, rapid conquest c. 1400-1200 BC is thin and contested, feeding into broader debates about the historicity of the conquest narrative itself"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division (Nevi'im) closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "judges",
  "name": "Judges",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1200,
   "end": -1050,
   "confidence": "green",
   "caption": "Period of the judges, c. 1200-1050 BC"
  },
  "composition": {
   "start": -1200,
   "end": -1050,
   "confidence": "amber",
   "caption": "Incorporates older hero-narratives and poetic material (the Song of Deborah, ch. 5, is widely regarded as among the oldest poetry in the Hebrew Bible, possibly 12th-11th century BC, predating the Deuteronomistic…",
   "whyMatters": "Why does this matter? The Song of Deborah's archaic Hebrew grammar is a key piece of evidence for very early oral/poetic material surviving inside a much later prose frame"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "ruth",
  "name": "Ruth",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1100,
   "end": -1050,
   "confidence": "amber",
   "caption": "Explicitly set 'in the days when the judges ruled' (Ruth 1:1); its genealogy makes Ruth King David's great-grandmother, placing the story a few generations before his birth c. 1010 BC."
  },
  "composition": {
   "start": -1000,
   "end": -401,
   "confidence": "red",
   "caption": "No significant internal source-layering debate; the dating question is about the book's rhetorical purpose and linguistic profile, not composite authorship",
   "whyMatters": "Why does this matter? Its genealogy concluding with David (4:18-22) is read either as evidence of early, pro-Davidic composition or as a later editorial legitimizing addition"
  },
  "canonization": {
   "start": -401,
   "end": 100,
   "confidence": "red",
   "caption": "Writings division - among the last books stabilized. Writings division not firmly closed until the 1st century AD; rabbinic discussion of its status continues into the Mishnaic period."
  },
  "restoration": null
 },
 {
  "id": "1-samuel",
  "name": "1 Samuel",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1050,
   "end": -1010,
   "confidence": "green",
   "caption": "c. 1050-1010 BC (Samuel, Saul, rise of David)"
  },
  "composition": {
   "start": -1000,
   "end": -501,
   "confidence": "amber",
   "caption": "Doublets (two accounts of Saul's rejection, two of David sparing Saul's life, two explanations for the proverb 'is Saul among the prophets') are cited as evidence of combined older sources",
   "whyMatters": "Why does this matter? The narrative's psychological realism and lack of overt propagandistic flattening of David are cited by some scholars as evidence of an early, close-to-events source"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "2-samuel",
  "name": "2 Samuel",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1010,
   "end": -970,
   "confidence": "green",
   "caption": "c. 1010-970 BC (David's reign)"
  },
  "composition": {
   "start": -1000,
   "end": -501,
   "confidence": "amber",
   "caption": "The Succession Narrative's unflinching, non-idealized portrayal of David (Bathsheba, Absalom's revolt) is the central evidence for treating it as an early, distinct source rather than later legend",
   "whyMatters": "Why does this matter? Same as 1 Samuel - literary character of the Succession Narrative is the key internal evidence"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "1-kings",
  "name": "1 Kings",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -970,
   "end": -850,
   "confidence": "green",
   "caption": "c. 970-850 BC (Solomon through the divided-kingdom era)"
  },
  "composition": {
   "start": -700,
   "end": -561,
   "confidence": "amber",
   "caption": "Explicitly cites now-lost written sources by name ('the Book of the Acts of Solomon,' 'the Book of the Chronicles of the Kings of Israel/Judah'), showing the Deuteronomistic historian worked as a compiler of older…",
   "whyMatters": "Why does this matter? Named source citations are the clearest self-declared evidence of compilation anywhere in the Hebrew Bible"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "2-kings",
  "name": "2 Kings",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -850,
   "end": -560,
   "confidence": "green",
   "caption": "c. 850-560 BC (divided kingdom through the Babylonian exile and release of Jehoiachin)"
  },
  "composition": {
   "start": -561,
   "end": -561,
   "confidence": "amber",
   "caption": "Same named-source citation pattern as 1 Kings; concludes the Deuteronomistic History's continuous narrative from Deuteronomy through the exile",
   "whyMatters": "Why does this matter? Jehoiachin's release under Evil-Merodach (Amel-Marduk), independently attested in Babylonian records, anchors the book's final composition after 561 BC"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "1-chronicles",
  "name": "1 Chronicles",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1010,
   "end": -970,
   "confidence": "green",
   "caption": "Genealogies from Adam through the united monarchy; narrative proper covers Saul's death through David's reign, c. 1010-970 BC"
  },
  "composition": {
   "start": -400,
   "end": -250,
   "confidence": "amber",
   "caption": "Substantially retells Samuel-Kings with significant theological reshaping (idealizing David and Solomon, emphasizing Temple worship and Levitical roles) - a clear, datable example of the Bible reinterpreting its own…",
   "whyMatters": "Why does this matter? The extensive genealogies reaching into the Persian-period community are the primary internal dating anchor"
  },
  "canonization": {
   "start": -250,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division - among the latest-composed books. Writings division not firmly closed until the 1st century AD."
  },
  "restoration": null
 },
 {
  "id": "2-chronicles",
  "name": "2 Chronicles",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -970,
   "end": -538,
   "confidence": "green",
   "caption": "Solomon's reign through the Babylonian exile and Cyrus's decree, c. 970-538 BC"
  },
  "composition": {
   "start": -400,
   "end": -250,
   "confidence": "amber",
   "caption": "Same retelling-of-Kings pattern as 1 Chronicles, with an idealized portrait of the Judean monarchy and Temple",
   "whyMatters": "Why does this matter? Ends with Cyrus's decree (538 BC), which Ezra 1:1-3 repeats almost verbatim - read by many scholars as a deliberate literary bridge, whether or not by the same author"
  },
  "canonization": {
   "start": -250,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division. Writings division not firmly closed until the 1st century AD."
  },
  "restoration": null
 },
 {
  "id": "ezra",
  "name": "Ezra",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -538,
   "end": -458,
   "confidence": "green",
   "caption": "c. 538-458 BC (return from exile, Temple rebuilding, Ezra's mission)"
  },
  "composition": {
   "start": -400,
   "end": -350,
   "confidence": "amber",
   "caption": "Incorporates genuine Aramaic administrative/decree documents (4:8-6:18, 7:12-26) alongside Hebrew narrative - a rare case of apparent primary-source documents embedded directly in a biblical narrative",
   "whyMatters": "Why does this matter? The Aramaic documents' formal chancery style is often cited as evidence of genuine (or at least well-informed) archival material"
  },
  "canonization": {
   "start": -350,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division. Writings division not firmly closed until the 1st century AD."
  },
  "restoration": null
 },
 {
  "id": "nehemiah",
  "name": "Nehemiah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -445,
   "end": -433,
   "confidence": "green",
   "caption": "c. 445-433 BC (Nehemiah's governorship, wall rebuilding, reforms)"
  },
  "composition": {
   "start": -400,
   "end": -350,
   "confidence": "amber",
   "caption": "The Nehemiah Memoir's vivid, personal, grievance-laden style (frequent 'remember me, O God' asides) is treated as strong evidence of an authentic individual voice rather than later invention",
   "whyMatters": "Why does this matter? The Memoir's specificity and self-interest (constantly defending Nehemiah's own conduct) reads as exactly the kind of detail a later idealizing author would be unlikely to invent"
  },
  "canonization": {
   "start": -350,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division. Writings division not firmly closed until the 1st century AD."
  },
  "restoration": null
 },
 {
  "id": "esther",
  "name": "Esther",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -486,
   "end": -465,
   "confidence": "green",
   "caption": "Persian royal court at Susa, c. 486-465 BC (reign of Xerxes/Ahasuerus)"
  },
  "composition": {
   "start": -400,
   "end": -101,
   "confidence": "red",
   "caption": "No significant internal source-layering debate; the dating question centers on when a Purim-founding festival legend of this kind would plausibly have been composed and popularized",
   "whyMatters": "Why does this matter? Absence from the Dead Sea Scrolls is the strongest single piece of evidence for its contested status even within some Jewish communities of the late Second Temple period"
  },
  "canonization": {
   "start": -101,
   "end": 200,
   "confidence": "red",
   "caption": "Among the most disputed books in rabbinic discussion of the canon (no mention of God's name anywhere in the book was a live concern) - not attested at Qumran at all, unusually for a canonical book."
  },
  "restoration": null
 },
 {
  "id": "job",
  "name": "Job",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": null,
  "composition": {
   "start": -700,
   "end": -301,
   "confidence": "red",
   "caption": "Widely regarded as composite: prose frame narrative likely older/traditional, poetic dialogues the main literary achievement, and the Elihu speeches (chs.",
   "whyMatters": "Why does this matter? Linguistic features (some Aramaic influence) and theological sophistication are cited on both sides of the dating debate without a clear resolution"
  },
  "canonization": {
   "start": -301,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division. Writings division not firmly closed until the 1st century AD."
  },
  "restoration": null
 },
 {
  "id": "psalms",
  "name": "Psalms",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1000,
   "end": -901,
   "confidence": "green",
   "caption": "No single setting - individual psalms span from the early monarchy (some plausibly Davidic-era, 10th century BC) through the post-exilic period"
  },
  "composition": {
   "start": -1000,
   "end": -200,
   "confidence": "green",
   "caption": "The five-book division (Pss 1-41, 42-72, 73-89, 90-106, 107-150) itself shows signs of separate earlier collections later joined, evidenced by doxologies marking each book's end and duplicate psalms appearing in…",
   "whyMatters": "Why does this matter? Duplicate psalms across the five 'books' are the clearest internal evidence of originally separate collections"
  },
  "canonization": {
   "start": -200,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division. Writings division not firmly closed until the 1st century AD, though the Psalter's core was almost certainly stable well before that."
  },
  "restoration": null
 },
 {
  "id": "proverbs",
  "name": "Proverbs",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1000,
   "end": -901,
   "confidence": "green",
   "caption": "Wisdom instruction attributed substantially to Solomon (10th century BC), with additional named collections"
  },
  "composition": {
   "start": -500,
   "end": -201,
   "confidence": "green",
   "caption": "25:1 explicitly states that one section was 'copied' by scribes of King Hezekiah (c. 700 BC), providing a rare internal editorial note about the book's own transmission history",
   "whyMatters": "Why does this matter? The Hezekiah-scribes note (25:1) is treated as a genuine window into how the collection grew across centuries"
  },
  "canonization": {
   "start": -201,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division. Writings division not firmly closed until the 1st century AD."
  },
  "restoration": null
 },
 {
  "id": "ecclesiastes",
  "name": "Ecclesiastes",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1000,
   "end": -901,
   "confidence": "green",
   "caption": "Presented as the reflections of 'Qoheleth,' 'son of David, king in Jerusalem' - narratively implying Solomon, 10th century BC"
  },
  "composition": {
   "start": -450,
   "end": -200,
   "confidence": "green",
   "caption": "No major internal source-layering debate beyond a possible later editorial epilogue (12:9-14) that frames the whole work with a more conventionally pious conclusion than the skeptical body of the text",
   "whyMatters": "Why does this matter? Linguistic dating (Hebrew philology) is unusually decisive here compared to most OT dating questions"
  },
  "canonization": {
   "start": -200,
   "end": 200,
   "confidence": "red",
   "caption": "Among the more disputed books in rabbinic canon discussion, alongside Esther and Song of Solomon, given its skeptical/fatalistic tone."
  },
  "restoration": null
 },
 {
  "id": "song-of-solomon",
  "name": "Song of Solomon",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -1000,
   "end": -901,
   "confidence": "amber",
   "caption": "Narratively framed as Solomon's own song ('which is Solomon's,' 1:1), placing it in his reign, 10th century BC — the same traditional attribution given to Proverbs and Ecclesiastes."
  },
  "composition": {
   "start": -1000,
   "end": -201,
   "confidence": "red",
   "caption": "Likely an anthology of individual love poems rather than a single unified composition, though the extent of compositeness is debated",
   "whyMatters": "Why does this matter? Rabbi Akiva's recorded defense of its sanctity is itself evidence that its canonical status was a live dispute as late as c. AD 100"
  },
  "canonization": {
   "start": 100,
   "end": 100,
   "confidence": "red",
   "caption": "Among the most disputed books in rabbinic canon discussion, given its purely erotic content with no explicit mention of God - famously defended by Rabbi Akiva (c. AD 100) as 'the holy of holies' among scripture."
  },
  "restoration": null
 },
 {
  "id": "isaiah",
  "name": "Isaiah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -740,
   "end": -460,
   "confidence": "green",
   "caption": "c. 740-680 BC (chs. 1-39, 8th-century Judah under Assyrian threat, the prophet's own lifetime) - but the book also addresses the Babylonian exile, c. 540 BC (chs."
  },
  "composition": {
   "start": -800,
   "end": -460,
   "confidence": "amber",
   "caption": "The clearest and most consequential source-critical case in the entire Hebrew Bible: three distinct historical and theological horizons (pre-exilic judgment, exilic comfort/return, post-exilic restoration) inside one…",
   "whyMatters": "Why does this matter? The Great Isaiah Scroll (1QIsa-a) is the single most important physical evidence: a complete, continuous 2nd-century BC copy with no seam between chs.",
   "segments": [
    {
     "label": "Isaiah 1-12",
     "start": -740,
     "end": -700,
     "confidence": "amber"
    },
    {
     "label": "Isaiah 13-23",
     "start": -800,
     "end": -501,
     "confidence": "amber"
    },
    {
     "label": "Isaiah 24-27",
     "start": -750,
     "end": -400,
     "confidence": "red"
    },
    {
     "label": "Isaiah 28-35",
     "start": -800,
     "end": -601,
     "confidence": "amber"
    },
    {
     "label": "Isaiah 36-39",
     "start": -700,
     "end": -700,
     "confidence": "amber"
    },
    {
     "label": "Isaiah 40-55",
     "start": -550,
     "end": -539,
     "confidence": "amber"
    },
    {
     "label": "Isaiah 56-66",
     "start": -520,
     "end": -460,
     "confidence": "amber"
    }
   ]
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC - notably, already unified as one book by then (the Isaiah scroll found at Qumran, 2nd century BC, shows no manuscript break between chs."
  },
  "restoration": "The Book of Mormon quotes Isaiah 2–14, 29, 48–54, and 53 from the brass plates by c. 600 BC. The First-Isaiah material (chs. 2–14, 29) predates Lehi's departure comfortably — no tension. But chs. 48–54 and 53 are usually assigned by mainstream scholars to the exilic 'Deutero-Isaiah,' c. 540 BC — roughly 60 years after the brass plates were in the possession of Nephi. So this continues to be a fascinating scholarly conversation about what we can securely say about the composition and canonization of the Book of Isaiah because there is very interesting evidence across the spectrum without a simple answer. What is true is that Nephi and other Book of Mormon writers had access to all or significant portions of Isaiah. As interesting as these questions are, there isn't currently enough information to provide a final answer to the history of the composition and canonization of Isaiah.",
  "finerView": {
   "intro": "Isaiah divides into distinct chapter-blocks, each with its own historical horizon and evidence — not a single guess, but a pattern spanning the whole book.",
   "items": [
    {
     "label": "Isaiah 1-12 — Oracles from Isaiah's own ministry under Ahaz/Hezekiah",
     "start": -740,
     "end": -700,
     "confidence": "amber",
     "detail": "Broad consensus for the core; some scholars flag later insertions (e.g. parts of ch. 2, 11)"
    },
    {
     "label": "Isaiah 13-23 — Oracles against foreign nations",
     "start": -800,
     "end": -501,
     "confidence": "amber",
     "detail": "The Babylon material assumes Babylon (not Assyria) as the great imperial threat - anachronistic for the 8th century, fitting the exilic period instead"
    },
    {
     "label": "Isaiah 24-27 — The 'Isaiah Apocalypse' - cosmic judgment and resurrection hope",
     "start": -750,
     "end": -400,
     "confidence": "red",
     "detail": "Apocalyptic style and resurrection language are unusual for 8th-century prophecy, fueling the later-date argument"
    },
    {
     "label": "Isaiah 28-35 — Woes against Ephraim and Judah; restoration hope",
     "start": -800,
     "end": -601,
     "confidence": "amber",
     "detail": "Ch. 35's wilderness/highway imagery closely anticipates Second Isaiah's language"
    },
    {
     "label": "Isaiah 36-39 — Historical narrative (Sennacherib, Hezekiah) paralleling 2 Kings 18-20",
     "start": -700,
     "end": -700,
     "confidence": "amber",
     "detail": "Functions as the literary bridge/closure of First Isaiah before the sharp shift at ch. 40"
    },
    {
     "label": "Isaiah 40-55 — 'Deutero-Isaiah' / Second Isaiah - comfort, Cyrus, servant songs",
     "start": -550,
     "end": -539,
     "confidence": "amber",
     "detail": "Cyrus named explicitly by name (44:28, 45:1) roughly 150 years after the historical Isaiah's death - the central evidence for a distinct exilic author/period"
    },
    {
     "label": "Isaiah 56-66 — 'Trito-Isaiah' / Third Isaiah - inclusion of foreigners, post-exilic concerns",
     "start": -520,
     "end": -460,
     "confidence": "amber",
     "detail": "Addresses concerns (temple rebuilding difficulties, social inequality within the restored community) that only make sense after the return from exile, not during it"
    }
   ]
  }
 },
 {
  "id": "jeremiah",
  "name": "Jeremiah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -627,
   "end": -580,
   "confidence": "green",
   "caption": "c. 627-580s BC (Jeremiah's prophetic career, the fall of Jerusalem in 586 BC, and its aftermath in Egypt)"
  },
  "composition": {
   "start": -605,
   "end": -401,
   "confidence": "amber",
   "caption": "Famous and unusual case: the Greek Septuagint version of Jeremiah is roughly one-eighth shorter than, and differently arranged from, the Hebrew Masoretic Text.",
   "whyMatters": "Why does this matter? 4QJer-b is the decisive physical evidence for two distinct ancient Hebrew editions, a transmission-history case with few parallels elsewhere in the Bible"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "lamentations",
  "name": "Lamentations",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -586,
   "end": -586,
   "confidence": "green",
   "caption": "Aftermath of Jerusalem's fall to Babylon, 586 BC"
  },
  "composition": {
   "start": -586,
   "end": -520,
   "confidence": "amber",
   "caption": "Highly structured acrostic poetry (chs. 1-4 each follow the Hebrew alphabet); no major internal compositeness debate beyond whether all five poems came from a single hand",
   "whyMatters": "Why does this matter? Vivid, apparently eyewitness-level description of the siege and its famine conditions is the primary argument for a date close to 586 BC"
  },
  "canonization": {
   "start": -520,
   "end": 100,
   "confidence": "green",
   "caption": "Writings division. Writings division not firmly closed until the 1st century AD."
  },
  "restoration": null
 },
 {
  "id": "ezekiel",
  "name": "Ezekiel",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -593,
   "end": -571,
   "confidence": "green",
   "caption": "Babylonian exile, c. 593-571 BC - the book itself provides an unusually precise sequence of dated oracles"
  },
  "composition": {
   "start": -593,
   "end": -571,
   "confidence": "green",
   "caption": "The book's own internal dating formulas (e.g. 1:1-2, 8:1, 20:1) are unusually systematic and consistent, giving scholars a clearer compositional timeline than for almost any other prophetic book",
   "whyMatters": "Why does this matter? The book's own dating formulas are treated as a genuinely reliable internal chronology by most critics"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC; rabbinic tradition (b. Shabbat 13b) records debate over Ezekiel's opening vision and its apparent tensions with Torah law, though this concerned interpretation more than canonical…"
  },
  "restoration": null
 },
 {
  "id": "daniel",
  "name": "Daniel",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -605,
   "end": -530,
   "confidence": "green",
   "caption": "Babylonian and Persian royal courts, c. 605-530 BC (Nebuchadnezzar through Cyrus/Darius)"
  },
  "composition": {
   "start": -167,
   "end": -164,
   "confidence": "green",
   "caption": "Written in two languages - Hebrew (1:1-2:4a, 8-12) and Aramaic (2:4b-7:28) - itself treated as evidence of composite origin or at least a complex compilation history; the change in language does not line up neatly with…",
   "whyMatters": "Why does this matter? The vaticinium ex eventu ('prophecy after the fact') pattern - precise accuracy up to 164 BC, vagueness after - is the central and most widely cited argument for the 2nd-century BC date"
  },
  "canonization": {
   "start": -164,
   "end": 100,
   "confidence": "green",
   "caption": "Not included among the 'Prophets' in the Hebrew canon (placed in the Writings) - itself sometimes read as circumstantial evidence that the Prophets division was already closed by the time Daniel achieved its final form,…"
  },
  "restoration": null,
  "finerView": {
   "intro": "Daniel splits cleanly into two halves with different likely origins, joined into one book.",
   "items": [
    {
     "label": "Court tales (chs. 1–6)",
     "start": -605,
     "end": -300,
     "confidence": "amber",
     "detail": "Stories of Daniel and his friends in the Babylonian and Persian courts — possibly preserving older traditional material, harder to pin to an exact decade."
    },
    {
     "label": "Apocalyptic visions (chs. 7–12)",
     "start": -167,
     "end": -164,
     "confidence": "green",
     "detail": "Composed last, and the source of the book's sharpest dating evidence: precise history through 164 BC, then vague — the vaticinium ex eventu pattern."
    }
   ]
  }
 },
 {
  "id": "hosea",
  "name": "Hosea",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -750,
   "end": -722,
   "confidence": "green",
   "caption": "Northern Kingdom (Israel), c. 750-725 BC, ending just before Assyria's conquest of Samaria in 722 BC"
  },
  "composition": {
   "start": -750,
   "end": -700,
   "confidence": "amber",
   "caption": "Judean references and perspective embedded in a text describing Northern Kingdom events suggest a later Judean editorial hand shaped the book's final form after 722 BC",
   "whyMatters": "Why does this matter? Consistent Northern Kingdom political references anchor most of the material to the mid-8th century BC"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "joel",
  "name": "Joel",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": null,
  "noNarrativeSetting": "No narrative setting: Joel never names a king, ruler, or historical event it's set during — that silence is itself the main clue scholars use for dating when it was written.",
  "composition": {
   "start": -900,
   "end": -301,
   "confidence": "red",
   "caption": "No internal source-layering debate; the dispute is about external dating criteria (absence of king references, temple-without-monarchy administration, vocabulary) rather than compositional seams within the text",
   "whyMatters": "Why does this matter? The complete absence of any reference to a king - unusual for a pre-exilic prophetic book - is the single most-cited piece of evidence for a post-exilic date"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "amos",
  "name": "Amos",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -760,
   "end": -750,
   "confidence": "green",
   "caption": "Northern Kingdom, c. 760-750 BC, under Jeroboam II"
  },
  "composition": {
   "start": -760,
   "end": -750,
   "confidence": "green",
   "caption": "Minimal internal compositeness debate; possibly a later editorial epilogue of restoration hope (9:11-15) that some scholars read as added after 586 BC to soften the book's otherwise unrelenting judgment message",
   "whyMatters": "Why does this matter? Precise political references (Jeroboam II's reign, a specific earthquake mentioned in 1:1 also referenced by Zechariah centuries later) anchor the core material tightly to the mid-8th century BC"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "obadiah",
  "name": "Obadiah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -586,
   "end": -586,
   "confidence": "green",
   "caption": "Responds to Edom's actions against Judah, most plausibly during Jerusalem's fall in 586 BC"
  },
  "composition": {
   "start": -586,
   "end": -550,
   "confidence": "amber",
   "caption": "Shares material closely with Jeremiah 49:7-22, raising a direction-of-dependence question (which text borrowed from which, or did both draw on a common older oracle) that remains unresolved",
   "whyMatters": "Why does this matter? The overlap with Jeremiah 49 is the central piece of comparative evidence, without a settled resolution of priority"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "jonah",
  "name": "Jonah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -800,
   "end": -701,
   "confidence": "green",
   "caption": "Narratively set in the 8th century BC - Jonah son of Amittai is named as a contemporary of Jeroboam II in 2 Kings 14:25 - addressed to Nineveh, the Assyrian capital"
  },
  "composition": {
   "start": -500,
   "end": -301,
   "confidence": "green",
   "caption": "Read by most critical scholars as a didactic short story or parable rather than prophetic biography - late Hebrew linguistic features (Aramaisms) and its universalist, satirical tone (mocking a reluctant, xenophobic…",
   "whyMatters": "Why does this matter? Late Hebrew grammar and the book's genre (short didactic narrative rather than oracle collection, unique among the Twelve) are the two strongest internal dating arguments"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "micah",
  "name": "Micah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -735,
   "end": -700,
   "confidence": "green",
   "caption": "Judah, c. 735-700 BC, contemporary with Isaiah"
  },
  "composition": {
   "start": -735,
   "end": -700,
   "confidence": "amber",
   "caption": "The tonal shift between the harsh judgment oracles of chs. 1-3 and the more hopeful/restoration-oriented material of chs. 4-7 is the primary basis for suspecting later additions, though the boundary is debated",
   "whyMatters": "Why does this matter? Jeremiah 26:18 quotes Micah 3:12 explicitly a century later, confirming Micah's judgment oracles were known and authoritative by Jeremiah's time"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "nahum",
  "name": "Nahum",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -612,
   "end": -612,
   "confidence": "green",
   "caption": "Anticipates the fall of Nineveh, which occurred in 612 BC"
  },
  "composition": {
   "start": -630,
   "end": -612,
   "confidence": "amber",
   "caption": "No significant internal compositeness debate",
   "whyMatters": "Why does this matter? The vivid, seemingly still-anticipatory (rather than retrospective) description of Nineveh's coming fall is the main dating anchor, placing it just before 612 BC"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "habakkuk",
  "name": "Habakkuk",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -609,
   "end": -598,
   "confidence": "green",
   "caption": "Responds to the rise of Babylon (the Chaldeans) as a coming imperial threat, c. 609-598 BC"
  },
  "composition": {
   "start": -610,
   "end": -605,
   "confidence": "amber",
   "caption": "No significant internal compositeness debate beyond the closing psalm (ch. 3), sometimes treated as a separately composed liturgical piece later appended",
   "whyMatters": "Why does this matter? Babylon's rise as an active, still-approaching threat (rather than an already-arrived conqueror) anchors the material to just before 605 BC"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC; a commentary on Habakkuk (the Pesher Habakkuk) was among the most significant Dead Sea Scrolls found at Qumran, confirming its authoritative status there by the 1st century BC. c."
  },
  "restoration": null
 },
 {
  "id": "zephaniah",
  "name": "Zephaniah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -640,
   "end": -609,
   "confidence": "green",
   "caption": "Reign of Josiah, c. 640-609 BC"
  },
  "composition": {
   "start": -630,
   "end": -620,
   "confidence": "amber",
   "caption": "No significant internal compositeness debate",
   "whyMatters": "Why does this matter? Description of idolatrous practices still active suggests composition before Josiah's 622 BC religious reforms took full effect"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "haggai",
  "name": "Haggai",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": null,
  "composition": {
   "start": -520,
   "end": -520,
   "confidence": "green",
   "caption": "No significant compositeness debate; the book's internal dating formulas are treated as reliable and precise",
   "whyMatters": "Why does this matter? Four oracles are each dated to a specific day within a four-month span in 520 BC (1:1, 1:15, 2:1, 2:10, 2:20) - an unusually precise internal chronology"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "zechariah",
  "name": "Zechariah",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -520,
   "end": -518,
   "confidence": "green",
   "caption": "Chs. 1-8: dated within the text to 520-518 BC, contemporary with Haggai; chs. 9-14 have no comparable internal dating and show a markedly different style and set of concerns"
  },
  "composition": {
   "start": -600,
   "end": -201,
   "confidence": "amber",
   "caption": "One of the clearer two-part compositional cases outside Isaiah: stylistic, thematic, and (in ch. 1-8's case) precisely dated material versus undated, differently-toned apocalyptic material in 9-14",
   "whyMatters": "Why does this matter? The abrupt loss of dated oracles and shift in imagery/style at ch. 9 is the primary internal evidence for the two-part theory"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC - meaning chs. 9-14 must have joined chs. 1-8 before that closure, regardless of the exact date debate. c. 200 BC."
  },
  "restoration": null
 },
 {
  "id": "malachi",
  "name": "Malachi",
  "corpus": "OT",
  "corpusLabel": "Old Testament",
  "narrative": {
   "start": -450,
   "end": -430,
   "confidence": "amber",
   "caption": "Post-exilic, Second Temple functioning, c. 450-430 BC, contemporary with or shortly before Nehemiah's reforms"
  },
  "composition": {
   "start": -460,
   "end": -430,
   "confidence": "amber",
   "caption": "No significant internal compositeness debate",
   "whyMatters": "Why does this matter? Concerns closely mirror issues Nehemiah addresses (intermarriage, tithing neglect, priestly corruption), anchoring it to the mid-to-late 5th century BC"
  },
  "canonization": {
   "start": -200,
   "end": -200,
   "confidence": "green",
   "caption": "Prophets division closed by c. 200 BC - the final book of the Twelve and of the Nevi'im as ordered in most traditions. c. 200 BC."
  },
  "restoration": "3 Nephi 24–25 records the resurrected Christ giving Malachi 3–4 directly to the Nephites in AD 34 — roughly 500 years after Malachi's own c. 460–430 BC critical composition date, and explicitly not from the brass plates. Because the text itself names the source as direct revelation, this case carries no brass-plates tension."
 },
 {
  "id": "matthew",
  "name": "Matthew",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": -6,
   "end": 33,
   "confidence": "green",
   "caption": "c. 6/4 BC - AD 33 (birth through resurrection, plus post-resurrection commissioning)"
  },
  "composition": {
   "start": 80,
   "end": 90,
   "confidence": "amber",
   "caption": "Markan priority: uses ~90% of Mark. Plus 'Q' (sayings shared with Luke, absent from Mark) and 'M' material unique to Matthew (infancy narrative, several parables, formula quotations).",
   "whyMatters": "Why does this matter? Dependence on Mark; destruction-of-Jerusalem allusions (22:7) read as vaticinium ex eventu by most critics"
  },
  "canonization": {
   "start": 110,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 110-140 (echoed by Ignatius, Didache). AD 367 (Athanasius) / AD 397 (Carthage)."
  },
  "restoration": null
 },
 {
  "id": "mark",
  "name": "Mark",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 27,
   "end": 28,
   "confidence": "green",
   "caption": "c. AD 27/28 - 33 (ministry through empty tomb)"
  },
  "composition": {
   "start": 66,
   "end": 73,
   "confidence": "amber",
   "caption": "Widely held to be the earliest Gospel and a source for Matthew and Luke ('Markan priority'). Original ending debated: earliest manuscripts (Sinaiticus, Vaticanus) end at 16:8; 16:9-20 (the 'Longer Ending') is a later…",
   "whyMatters": "Why does this matter? Mark 13's Temple-destruction language fits composition around the Jewish War (AD 66-70)"
  },
  "canonization": {
   "start": 110,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 110-150 (used by Matthew/Luke; possibly echoed by Papias, Justin). AD 367 / AD 397."
  },
  "restoration": null,
  "finerView": {
   "intro": "Of 81 tagged narrative units across the Synoptic Gospels, 50 (62%) are 'triple tradition' — present in Mark, Matthew, and Luke alike. That pattern, not a guess, is the primary evidence for Markan priority: Matthew and Luke drew on Mark as a source, not the reverse.",
   "stat": [
    {
     "label": "Triple tradition (in Mark, Matthew, and Luke)",
     "count": 50
    },
    {
     "label": "Q / Double tradition (Matthew and Luke, not Mark)",
     "count": 10
    },
    {
     "label": "Matthew-only (M) material",
     "count": 7
    },
    {
     "label": "Luke-only (L) material",
     "count": 8
    },
    {
     "label": "Mark and one other Gospel only",
     "count": 6
    }
   ]
  }
 },
 {
  "id": "luke",
  "name": "Luke",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": -6,
   "end": 33,
   "confidence": "green",
   "caption": "c. 6/4 BC - AD 33, framed as an orderly investigative account (1:1-4)"
  },
  "composition": {
   "start": 80,
   "end": 90,
   "confidence": "amber",
   "caption": "Uses Mark and Q; plus 'L' material unique to Luke (many parables, infancy narrative). Written as volume one of a two-part work continued in Acts",
   "whyMatters": "Why does this matter? Shared two-volume design with Acts; literary dependence on Mark"
  },
  "canonization": {
   "start": 170,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 170-180 (Muratorian Fragment names Luke explicitly). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "john",
  "name": "John",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 27,
   "end": 28,
   "confidence": "green",
   "caption": "c. AD 27/28 - 33, plus a distinct theological framing (prologue, 'signs') not shared with the Synoptics"
  },
  "composition": {
   "start": 90,
   "end": 100,
   "confidence": "amber",
   "caption": "Widely held to reflect a multi-stage composition within a 'Johannine community': an earlier signs-source/tradition, a main composition, and a final redaction that added ch.",
   "whyMatters": "Why does this matter? Theological vocabulary and community-conflict material (expulsion from synagogue, 9:22) fit a setting after AD 85-90"
  },
  "canonization": {
   "start": 170,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 170-180 (Muratorian Fragment; used earlier by Gnostic writers, which delayed mainstream church acceptance). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "acts",
  "name": "Acts",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 30,
   "end": 62,
   "confidence": "green",
   "caption": "c. AD 30-62 (Pentecost through Paul's Roman house arrest)"
  },
  "composition": {
   "start": 62,
   "end": 90,
   "confidence": "amber",
   "caption": "Uses source material for the early Jerusalem community and Pauline itinerary; the 'we-passages' (16:10-17, 20:5-21:18, 27:1-28:16) suggest an eyewitness travel-diary source, whether the author's own or one incorporated",
   "whyMatters": "Why does this matter? Ends abruptly with Paul under house arrest, silent on his death - debated whether this reflects early composition or a deliberate narrative choice"
  },
  "canonization": {
   "start": 170,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 170-180 (Muratorian Fragment). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "romans",
  "name": "Romans",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 57,
   "end": 57,
   "confidence": "green",
   "caption": "AD 57 (Paul's own present, writing from Corinth before his final Jerusalem trip)"
  },
  "composition": {
   "start": 57,
   "end": 57,
   "confidence": "green",
   "caption": "Ch. 16 is sometimes argued to be a separate cover letter (to Ephesus) later attached to the main letter (to Rome), based on the density of personal greetings and some manuscript evidence placing the doxology (16:25-27)…",
   "whyMatters": "Why does this matter? Paul's own itinerary statements (15:25-28) anchor the date precisely"
  },
  "canonization": {
   "start": 96,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 96 (likely echoed by 1 Clement) / explicit by Marcion's canon c. AD 140. AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "1-corinthians",
  "name": "1 Corinthians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 53,
   "end": 54,
   "confidence": "green",
   "caption": "AD 53-54 (Paul's own present, writing from Ephesus)"
  },
  "composition": {
   "start": 53,
   "end": 54,
   "confidence": "green",
   "caption": "References at least one earlier letter now lost (5:9, 'I wrote to you in my letter'), meaning the Corinthian correspondence as we have it is already a partial record of a longer exchange",
   "whyMatters": "Why does this matter? Gallio inscription helps fix Paul's Corinthian chronology (Acts 18:12) independently"
  },
  "canonization": {
   "start": 96,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 96 (echoed by 1 Clement, itself written to Corinth). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "2-corinthians",
  "name": "2 Corinthians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 55,
   "end": 56,
   "confidence": "green",
   "caption": "AD 55-56 (Paul's own present, writing from Macedonia)"
  },
  "composition": {
   "start": 55,
   "end": 56,
   "confidence": "green",
   "caption": "Widely regarded as a composite of at least two, possibly more, originally separate letters or letter-fragments stitched together (the abrupt tonal shift at ch.",
   "whyMatters": "Why does this matter? Tonal and rhetorical discontinuity between chs. 1-9 and 10-13 is the primary internal evidence for compositeness"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "galatians",
  "name": "Galatians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 48,
   "end": 55,
   "confidence": "green",
   "caption": "Paul defending his apostolic authority and gospel of grace to the churches of Galatia amid a Judaizing controversy — the same occasion the letter is composed for."
  },
  "composition": {
   "start": 48,
   "end": 55,
   "confidence": "red",
   "caption": "No significant source-layer debate; the dating question is geographic (which 'Galatia' - Roman province vs ethnic region - determines which of Paul's visits per Acts the letter follows)",
   "whyMatters": "Why does this matter? Autobiographical chronology in chs. 1-2 is the main dating anchor, cross-referenced against Acts"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon, where it opens his collection). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "ephesians",
  "name": "Ephesians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 60,
   "end": 64,
   "confidence": "amber",
   "caption": "Paul (or a later author writing in his name) addressing the church at Ephesus and the churches of Asia Minor during Paul's Roman imprisonment."
  },
  "composition": {
   "start": 60,
   "end": 100,
   "confidence": "amber",
   "caption": "Close literary relationship to Colossians (much shared material) is central to the authorship debate - seen either as Paul reusing his own language or a later author imitating Colossians",
   "whyMatters": "Why does this matter? Lacks the personal specificity typical of undisputed Pauline letters; some early manuscripts lack 'in Ephesus' (1:1), suggesting a circular letter"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon, under the title 'To the Laodiceans'). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "philippians",
  "name": "Philippians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 60,
   "end": 62,
   "confidence": "green",
   "caption": "Paul writing from prison — traditionally Rome, c. AD 60-62 — thanking the Philippian church for its financial support and encouraging unity."
  },
  "composition": {
   "start": 54,
   "end": 62,
   "confidence": "green",
   "caption": "Some scholars propose it is composite (two or three Pauline notes combined), based on the abrupt shift at 3:2; not as widely accepted as the 2 Corinthians compositeness theory",
   "whyMatters": "Why does this matter? Imprisonment location is the main open question, affecting date by up to a decade"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "colossians",
  "name": "Colossians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 60,
   "end": 62,
   "confidence": "amber",
   "caption": "Paul (or a later author writing in his name) countering a syncretistic false teaching at Colossae, written from the same imprisonment as Philippians and Philemon."
  },
  "composition": {
   "start": 60,
   "end": 80,
   "confidence": "red",
   "caption": "Shares extensive material with Ephesians (direction of dependence debated) and appears to address an early form of proto-Gnostic teaching",
   "whyMatters": "Why does this matter? Personal greetings (ch. 4) read as more specific/genuine than Ephesians', favoring some scholars toward authenticity"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "1-thessalonians",
  "name": "1 Thessalonians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 50,
   "end": 51,
   "confidence": "green",
   "caption": "Paul writing shortly after founding the church at Thessalonica, addressing new believers' anxiety over those who had died before Christ's return."
  },
  "composition": {
   "start": 50,
   "end": 51,
   "confidence": "green",
   "caption": "No significant source-layer debate",
   "whyMatters": "Why does this matter? Gallio inscription and Acts 18 chronology fix Paul's Corinth stay, anchoring this letter's date shortly before it"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "2-thessalonians",
  "name": "2 Thessalonians",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 51,
   "end": 51,
   "confidence": "red",
   "caption": "Correcting a misunderstanding about the timing of 'the day of the Lord' among the same Thessalonian believers — genuinely disputed whether this is Paul's own follow-up or a later imitation of the occasion."
  },
  "composition": {
   "start": 51,
   "end": 100,
   "confidence": "red",
   "caption": "Close structural imitation of 1 Thessalonians is central to the pseudonymity argument (seen either as Paul's own consistency or later imitation)",
   "whyMatters": "Why does this matter? 2:2 explicitly warns against a forged letter 'as from us' - read by some as ironic evidence of the very pseudonymity debated, by others as proof of Pauline concern about forgery in his own lifetime"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "1-timothy",
  "name": "1 Timothy",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 63,
   "end": 65,
   "confidence": "amber",
   "caption": "Paul instructing Timothy, left in charge of the church at Ephesus, on church organization and false teaching."
  },
  "composition": {
   "start": 63,
   "end": 140,
   "confidence": "amber",
   "caption": "Grouped with 2 Timothy and Titus as a literary unit (the 'Pastoral Epistles'), sharing vocabulary and concerns distinct from the rest of the Pauline corpus",
   "whyMatters": "Why does this matter? Church-office vocabulary (episkopos, presbyteros as settled offices) fits a later institutional stage than Paul's undisputed letters"
  },
  "canonization": {
   "start": 170,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 170-180 (Muratorian Fragment; notably absent from Marcion's earlier canon). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "2-timothy",
  "name": "2 Timothy",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 64,
   "end": 67,
   "confidence": "amber",
   "caption": "Paul's valedictory letter to Timothy, written from prison shortly before his death."
  },
  "composition": {
   "start": 64,
   "end": 140,
   "confidence": "amber",
   "caption": "Shares the Pastorals' distinct vocabulary profile",
   "whyMatters": "Why does this matter? Personal, valedictory tone (4:6-8) is the strongest internal argument for authenticity among the Pastorals"
  },
  "canonization": {
   "start": 170,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 170-180 (Muratorian Fragment). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "titus",
  "name": "Titus",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 63,
   "end": 65,
   "confidence": "amber",
   "caption": "Paul instructing Titus, left in charge of the churches on Crete, on qualifications for church leaders."
  },
  "composition": {
   "start": 63,
   "end": 140,
   "confidence": "amber",
   "caption": "Shares the Pastorals' distinct vocabulary profile",
   "whyMatters": "Why does this matter? Church-organization language parallels 1 Timothy closely"
  },
  "canonization": {
   "start": 170,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 170-180 (Muratorian Fragment). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "philemon",
  "name": "Philemon",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 60,
   "end": 62,
   "confidence": "green",
   "caption": "Paul appealing to Philemon on behalf of the runaway slave Onesimus, written from the same imprisonment as Colossians and Philippians."
  },
  "composition": {
   "start": 54,
   "end": 62,
   "confidence": "green",
   "caption": "No source-layer debate; often studied alongside Colossians since both mention Onesimus and share several named individuals",
   "whyMatters": "Why does this matter? Shared names with Colossians (Onesimus, Archippus) suggest common origin"
  },
  "canonization": {
   "start": 140,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 140s (Marcion's canon). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "hebrews",
  "name": "Hebrews",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 60,
   "end": 70,
   "confidence": "red",
   "caption": "An anonymous sermon urging an unnamed Jewish-Christian community not to abandon their faith under pressure to return to Temple sacrifice."
  },
  "composition": {
   "start": 60,
   "end": 95,
   "confidence": "red",
   "caption": "Extensive use of the Septuagint and a sustained high-priestly Christology unlike anything in the undisputed Pauline letters; some scholars read its present-tense Temple/sacrifice language as implying composition before…",
   "whyMatters": "Why does this matter? Absent from Marcion's canon and long debated at Rome specifically over authorship"
  },
  "canonization": {
   "start": 95,
   "end": 397,
   "confidence": "red",
   "caption": "Accepted early in the Eastern church (2nd century) as Pauline; contested in the West into the 4th century precisely because Western churches did not accept the Pauline attribution."
  },
  "restoration": null
 },
 {
  "id": "james",
  "name": "James",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 45,
   "end": 62,
   "confidence": "red",
   "caption": "James (traditionally the Lord's brother, leader of the Jerusalem church) giving practical ethical instruction to Jewish Christians scattered among the nations."
  },
  "composition": {
   "start": 45,
   "end": 120,
   "confidence": "red",
   "caption": "Shows affinities with Jewish wisdom literature and possibly responds to a distorted version of Paul's justification-by-faith teaching (2:14-26), which some read as evidence of a date after Paul's letters had circulated",
   "whyMatters": "Why does this matter? Absent from the Muratorian Fragment's list; slow reception in the Latin West"
  },
  "canonization": {
   "start": 120,
   "end": 397,
   "confidence": "red",
   "caption": "Known but disputed in the West into the 4th century; Eusebius (c. 325) lists it among the 'disputed' books (antilegomena). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "1-peter",
  "name": "1 Peter",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 60,
   "end": 64,
   "confidence": "amber",
   "caption": "Peter (or a later author writing in his name) encouraging persecuted Christian communities scattered across Asia Minor to endure suffering faithfully."
  },
  "composition": {
   "start": 60,
   "end": 90,
   "confidence": "amber",
   "caption": "Shows verbal parallels with Romans and Ephesians, suggesting either direct Petrine familiarity with Pauline material or a later author's use of it",
   "whyMatters": "Why does this matter? Explicit persecution language often correlated with Domitian-era or later pressures on Christians in Asia Minor"
  },
  "canonization": {
   "start": 110,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 110-140 (echoed by Polycarp). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "2-peter",
  "name": "2 Peter",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 64,
   "end": 68,
   "confidence": "green",
   "caption": "Peter's farewell testament, written in his own name shortly before his death, warning his readers against false teachers."
  },
  "composition": {
   "start": 100,
   "end": 150,
   "confidence": "green",
   "caption": "Substantially incorporates the Epistle of Jude (compare 2 Peter 2 with Jude 4-18 almost verbatim in places) - the direction of dependence (2 Peter using Jude, not the reverse) is itself near-consensus",
   "whyMatters": "Why does this matter? Explicit dependence on Jude and a settled Pauline-corpus concept are the two strongest internal dating anchors"
  },
  "canonization": {
   "start": 150,
   "end": 397,
   "confidence": "red",
   "caption": "Not clearly attested before the 3rd century; Eusebius (c. 325) and Origen both flag it as disputed. AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "1-john",
  "name": "1 John",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 90,
   "end": 100,
   "confidence": "amber",
   "caption": "The Johannine community addressing a schism caused by false teaching that denied Christ came 'in the flesh' (4:2-3)."
  },
  "composition": {
   "start": 90,
   "end": 100,
   "confidence": "amber",
   "caption": "Shares extensive vocabulary and theology with the Fourth Gospel, generally read as coming from the same community tradition slightly after the Gospel's main composition, addressing a schism the Gospel does not yet…",
   "whyMatters": "Why does this matter? The schism described (2:18-19) suggests a community-history stage later than the Gospel's own composition"
  },
  "canonization": {
   "start": 170,
   "end": 397,
   "confidence": "green",
   "caption": "c. AD 170-180 (Muratorian Fragment). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "2-john",
  "name": "2 John",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 90,
   "end": 100,
   "confidence": "amber",
   "caption": "A short letter warning a local congregation ('the elect lady and her children') against hosting traveling false teachers."
  },
  "composition": {
   "start": 90,
   "end": 100,
   "confidence": "amber",
   "caption": "Very close verbal overlap with 1 John, read as coming from the same hand or circle at roughly the same time",
   "whyMatters": "Why does this matter? Brevity and limited early attestation are themselves the main reason for its slower reception"
  },
  "canonization": {
   "start": 100,
   "end": 397,
   "confidence": "red",
   "caption": "Disputed in parts of the church into the 4th century (Eusebius lists 2-3 John among the antilegomena, alongside James, Jude, 2 Peter). AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "3-john",
  "name": "3 John",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 90,
   "end": 100,
   "confidence": "amber",
   "caption": "A short personal letter commending Gaius's hospitality and criticizing Diotrephes's refusal to welcome traveling missionaries."
  },
  "composition": {
   "start": 90,
   "end": 100,
   "confidence": "amber",
   "caption": "Same Johannine-circle authorship question as 2 John; the Diotrephes conflict is sometimes read alongside the schism in 1 John as evidence of ongoing community fracture",
   "whyMatters": "Why does this matter? Same brevity/limited-attestation profile as 2 John"
  },
  "canonization": {
   "start": 100,
   "end": 397,
   "confidence": "red",
   "caption": "Disputed into the 4th century, same as 2 John. AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "jude",
  "name": "Jude",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 50,
   "end": 80,
   "confidence": "red",
   "caption": "Jude (traditionally the Lord's brother) warning a community against false teachers who had 'crept in unawares' (v. 4)."
  },
  "composition": {
   "start": 50,
   "end": 90,
   "confidence": "red",
   "caption": "Source for 2 Peter 2 (near-consensus on the direction of dependence, Jude to 2 Peter); its citation of 1 Enoch as prophecy was itself a point of later canonical controversy",
   "whyMatters": "Why does this matter? Its use by 2 Peter provides a firm terminus ante quem relative to that book"
  },
  "canonization": {
   "start": 90,
   "end": 397,
   "confidence": "red",
   "caption": "Known but disputed in the West; Eusebius lists it among the antilegomena. AD 367 / AD 397."
  },
  "restoration": null
 },
 {
  "id": "revelation",
  "name": "Revelation",
  "corpus": "NT",
  "corpusLabel": "New Testament",
  "narrative": {
   "start": 81,
   "end": 96,
   "confidence": "amber",
   "caption": "John's apocalyptic vision, received while exiled on the island of Patmos 'for the word of God, and for the testimony of Jesus Christ' (1:9)."
  },
  "composition": {
   "start": 68,
   "end": 96,
   "confidence": "amber",
   "caption": "Draws extensively on Daniel, Ezekiel, and other prophetic/apocalyptic texts; some scholars propose an earlier core vision later expanded, though this is less consensus-driven than, say, the 2 Corinthians compositeness…",
   "whyMatters": "Why does this matter? Domitian-era persecution allusions are the majority dating anchor; the imperial-cult emphasis fits Asia Minor under Domitian particularly well"
  },
  "canonization": {
   "start": 170,
   "end": 367,
   "confidence": "red",
   "caption": "c. AD 170-180 (Muratorian Fragment); disputed in the Eastern church far longer than the West (absent from some Eastern canon lists into the 4th-5th centuries, notably slow to be accepted in Syriac-speaking churches)."
  },
  "restoration": null
 },
 {
  "id": "first-book-of-esdras",
  "name": "First Book of Esdras",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -621,
   "end": -458,
   "confidence": "green",
   "caption": "Spans King Josiah's Passover reform (2 Chronicles 35, c. 621 BC) through Ezra's public reading of the Law after the return from exile (c. 458 BC)."
  },
  "composition": {
   "start": -150,
   "end": -100,
   "confidence": "amber",
   "caption": "The author is unknown; a Greek compiler reworking older material — retelling 2 Chronicles 35-36, Ezra, and Nehemiah 8 with some rearrangement, plus one unique episode (the 'Tale of the Three Youths', 3:1-5:6)."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical scripture in the Eastern Orthodox Bible; relegated to a Vulgate appendix in the West and explicitly excluded — unlike most Apocrypha — at the Council of Trent (1546)."
  },
  "restoration": "D&C 91 (1833) is Joseph Smith's only recorded guidance on the Apocrypha: it holds both truth and human \"interpolations,\" discernible only \"by the Spirit\" (D&C 91:1-6) — guidance that applies to a patchwork retelling like this one as much as to any Apocryphal book."
 },
 {
  "id": "second-book-of-esdras",
  "name": "Second Book of Esdras",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -557,
   "end": -557,
   "confidence": "green",
   "caption": "Framed as visions given to Ezra in Babylonian exile, thirty years after Jerusalem's fall — centuries before the real Ezra's likely 5th-century BC lifetime."
  },
  "composition": {
   "start": 95,
   "end": 270,
   "confidence": "amber",
   "caption": "Composite: the Jewish apocalyptic core (chs. 3-14, often studied separately as '4 Ezra') was probably written c. AD 95-100; Christian material was added before and after it (chs. 1-2, 15-16) probably in the 2nd or 3rd century AD."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Never included in the Eastern Orthodox or Catholic canons; printed only as a Vulgate appendix in the West and explicitly excluded at the Council of Trent (1546)."
  },
  "restoration": "D&C 91's warning that the Apocrypha contains \"interpolations by the hands of men\" (91:1-6) fits this book especially well — a Jewish apocalyptic core with Christian material added before and after it centuries later."
 },
 {
  "id": "book-of-tobit",
  "name": "Book of Tobit",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -721,
   "end": -681,
   "confidence": "amber",
   "caption": "Set among Israelite exiles deported to Assyria under Shalmaneser and Sennacherib — a family drama unfolding across roughly Nineveh's late-8th/7th-century BC ascendancy."
  },
  "composition": {
   "start": -225,
   "end": -175,
   "confidence": "amber",
   "caption": "Probably composed in the Hellenistic Jewish diaspora in the late 3rd or early 2nd century BC, before the Maccabean revolt; the original language was likely Aramaic or Hebrew."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical scripture in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and the Protestant canon at the Reformation."
  },
  "restoration": "D&C 91 calls the Apocrypha readable \"by the Spirit\" for what is \"profitable\" in it (91:1-6); Tobit's confidence in angelic ministry and personal prayer squares comfortably with Restoration teaching."
 },
 {
  "id": "book-of-judith",
  "name": "Book of Judith",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -600,
   "end": -580,
   "confidence": "red",
   "caption": "Sets its siege story under 'Nebuchadnezzar, king of the Assyrians' — a conflation of Babylonian and Assyrian history read by scholars as literary invention rather than a real datable event."
  },
  "composition": {
   "start": -150,
   "end": -100,
   "confidence": "amber",
   "caption": "The author of Judith is unknown. Most scholars place the composition in the Hasmonean period, roughly 150 to 100 BC."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical in the Catholic and Eastern Orthodox Bibles since Trent (1546); excluded from the Jewish Tanakh and Protestant canon."
  },
  "restoration": "D&C 91's caution that the Apocrypha mixes truth with \"interpolations by the hands of men\" (91:1-6) fits Judith's historical confusions well — read as edifying story, not as history."
 },
 {
  "id": "additions-to-esther",
  "name": "Additions to Esther",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -486,
   "end": -465,
   "confidence": "green",
   "caption": "Same narrative setting as the Hebrew Esther — the Persian royal court under King Xerxes (Ahasuerus), c. 486-465 BC."
  },
  "composition": {
   "start": -100,
   "end": -1,
   "confidence": "amber",
   "caption": "Greek passages added to the Hebrew Esther, probably in Hellenistic Egypt in the 2nd or 1st century BC; the additions supply prayers and divine-name language the Hebrew text notably lacks."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical as part of Esther in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh's Esther and the Protestant canon."
  },
  "restoration": "D&C 91 (1833) invites reading the Apocrypha \"by the Spirit\" for what is \"profitable\" (91:1-6); these prayer-additions supply exactly the God-language the Hebrew Esther conspicuously omits."
 },
 {
  "id": "wisdom-of-solomon",
  "name": "Wisdom of Solomon",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -970,
   "end": -930,
   "confidence": "amber",
   "caption": "Styled as Solomon's own first-person reflections on wisdom, though composed roughly a millennium after his reign — a pseudonymous attribution, not a claimed real-time setting."
  },
  "composition": {
   "start": -100,
   "end": -30,
   "confidence": "amber",
   "caption": "Probably composed in Greek by a Hellenistic Jewish author in Alexandria, Egypt, in the 1st century BC; written under Solomon's name as a literary convention, not a genuine authorship claim."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical scripture in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and the Protestant canon."
  },
  "restoration": "D&C 91's guidance to weigh the Apocrypha \"by the Spirit\" (91:1-6) applies to this book's personified Wisdom (Sophia) — a loose but sometimes-noted parallel to Restoration teaching on premortal existence."
 },
 {
  "id": "book-of-sirach-ecclesiasticus",
  "name": "Book of Sirach (Ecclesiasticus)",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -196,
   "end": -175,
   "confidence": "green",
   "caption": "Not a narrated story — Ben Sira teaches wisdom in his own voice, in his own time, with no earlier setting being claimed."
  },
  "composition": {
   "start": -196,
   "end": -132,
   "confidence": "green",
   "caption": "Ben Sira names himself directly (50:27) and wrote in Hebrew in Jerusalem c. 196-175 BC; his grandson's Greek prologue dates his own translation precisely to his arrival in Egypt in 132 BC — one of the best-dated books in the Apocrypha."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical scripture in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and Protestant canon, though widely read and quoted in early rabbinic literature."
  },
  "restoration": "D&C 91 calls the Apocrypha \"profitable\" when read with discernment (91:1-6); Ben Sira's practical wisdom-instruction is about as uncontroversial a case of that as the collection offers."
 },
 {
  "id": "book-of-baruch-and-the-letter-of-jeremiah",
  "name": "Book of Baruch and the Letter of Jeremiah",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -586,
   "end": -580,
   "confidence": "green",
   "caption": "Framed as Baruch, Jeremiah's scribe, writing to the exiles from Babylon shortly after Jerusalem's fall in 586 BC."
  },
  "composition": {
   "start": -200,
   "end": -100,
   "confidence": "red",
   "caption": "Composite: Baruch 1:1-3:8 may derive from a Hebrew original as early as the 2nd century BC; the Letter of Jeremiah, a separate Greek composition warning against idolatry, was probably written between the 4th and 2nd centuries BC and later attached to Baruch."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical scripture (as part of Baruch) in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and Protestant canon."
  },
  "restoration": "D&C 91's guidance on the Apocrypha (91:1-6) applies here as elsewhere — Baruch's call to repentance from exile echoes the same prophetic voice Restoration scripture treats as authentically Jeremiah's own circle."
 },
 {
  "id": "prayer-of-azariah-and-the-song-of-the-three-holy-children",
  "name": "Prayer of Azariah and the Song of the Three Holy Children",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -586,
   "end": -580,
   "confidence": "green",
   "caption": "Set inside Nebuchadnezzar's fiery furnace with Daniel's three companions — the same early Babylonian-exile scene as Daniel 3."
  },
  "composition": {
   "start": -200,
   "end": -100,
   "confidence": "amber",
   "caption": "A Greek addition inserted into Daniel 3, probably composed in the 2nd or 1st century BC to supply the prayer and hymn the Aramaic text of Daniel does not include."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical as part of Daniel in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and Protestant canon's Daniel."
  },
  "restoration": "D&C 91 says some of the Apocrypha is simply \"true\" (91:1-6); this hymn of praise from inside the furnace is as uncontested devotionally as any passage in the collection."
 },
 {
  "id": "book-of-susanna",
  "name": "Book of Susanna",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -600,
   "end": -580,
   "confidence": "green",
   "caption": "Set among Babylonian exiles, starring a young Daniel exposing two corrupt elders — placed early in the exile, before Daniel's rise at court."
  },
  "composition": {
   "start": -200,
   "end": -100,
   "confidence": "amber",
   "caption": "A Greek addition to Daniel, probably composed in the 2nd or 1st century BC as an independent short story later attached to the book."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical as part of Daniel in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and Protestant canon's Daniel."
  },
  "restoration": "D&C 91's caution about \"interpolations by the hands of men\" (91:1-6) matters less here — Susanna's courtroom vindication of the innocent carries no doctrinal stakes, only a moral one."
 },
 {
  "id": "book-of-bel-and-the-dragon",
  "name": "Book of Bel and the Dragon",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -540,
   "end": -530,
   "confidence": "green",
   "caption": "Set late in Daniel's life at the Persian court, under 'Cyrus the Persian' — decades after the Babylonian-exile scenes in the rest of Daniel."
  },
  "composition": {
   "start": -200,
   "end": -100,
   "confidence": "amber",
   "caption": "A Greek addition to Daniel, probably composed in the 2nd or 1st century BC, combining two separate court tales (the idol Bel and the serpent-dragon) into Daniel's story."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical as part of Daniel in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and Protestant canon's Daniel."
  },
  "restoration": "D&C 91 (91:1-6) needs little work here — this tale's polemic against idol-worship simply restates a point Restoration scripture makes plainly elsewhere."
 },
 {
  "id": "prayer-of-manasseh",
  "name": "Prayer of Manasseh",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -642,
   "end": -642,
   "confidence": "green",
   "caption": "Fills the gap 2 Chronicles 33:18-19 leaves — the prayer of repentance King Manasseh of Judah is said to have prayed but whose text was not preserved in Scripture."
  },
  "composition": {
   "start": -200,
   "end": -100,
   "confidence": "amber",
   "caption": "The author is unknown, writing pseudepigraphally under Manasseh's name; most plausibly composed in the Hellenistic Jewish setting of the 2nd or 1st century BC."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Printed in an appendix to the Vulgate and included in some Orthodox and Slavonic Bibles; excluded from the Jewish Tanakh, the Protestant canon, and — unlike most Apocrypha — the Catholic canon confirmed at Trent (1546)."
  },
  "restoration": "D&C 91's guidance to read the Apocrypha \"by the Spirit\" (91:1-6) fits this short prayer well — its repentance-and-mercy theme is about as uncontroversial devotionally as any passage in the collection."
 },
 {
  "id": "first-book-of-the-maccabees",
  "name": "First Book of the Maccabees",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -175,
   "end": -134,
   "confidence": "green",
   "caption": "A near-contemporary history of the Maccabean revolt against Seleucid rule, from Antiochus IV's persecution through the deaths of Judas, Jonathan, and Simon Maccabee."
  },
  "composition": {
   "start": -104,
   "end": -63,
   "confidence": "green",
   "caption": "Written in Hebrew by a Jewish author in Judea, probably in the last decades of the 2nd century BC, within living memory of the events it narrates."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical scripture in the Catholic and Eastern Orthodox Bibles; excluded from the Jewish Tanakh and Protestant canon, despite its history being commemorated at Hanukkah."
  },
  "restoration": "D&C 91's caution about \"interpolations by the hands of men\" (91:1-6) has little to do here — 1 Maccabees's history is not seriously disputed by scholars of any tradition."
 },
 {
  "id": "second-book-of-the-maccabees",
  "name": "Second Book of the Maccabees",
  "corpus": "Apoc",
  "corpusLabel": "Apocrypha",
  "narrative": {
   "start": -180,
   "end": -161,
   "confidence": "green",
   "caption": "Covers a shorter, overlapping span of the Maccabean revolt than 1 Maccabees — from just before Antiochus IV's persecution through Judas Maccabeus's victory over Nicanor in 161 BC."
  },
  "composition": {
   "start": -124,
   "end": -63,
   "confidence": "amber",
   "caption": "An epitome (condensed summary) of a longer, now-lost five-volume history by Jason of Cyrene; the epitomist's own date is unknown but probably falls in the late 2nd or 1st century BC."
  },
  "canonization": {
   "start": -100,
   "end": 1546,
   "confidence": "red",
   "caption": "Canonical scripture in the Catholic and Eastern Orthodox Bibles — and the source of the Christian practice of prayers for the dead (12:44-45) that made it doctrinally significant at the Reformation; excluded from the Jewish Tanakh and Protestant canon."
  },
  "restoration": "D&C 91 (91:1-6) matters most here: 2 Maccabees's prayers-for-the-dead passage (12:44-45) is the clearest case in the Apocrypha of a doctrine Latter-day Saints read very differently — through modern revelation on temple work for the dead, not this text."
 },
 {
  "id": "2-enoch-slavonic-enoch",
  "name": "2 Enoch (Slavonic Enoch)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -3000,
   "end": -2500,
   "confidence": "amber",
   "caption": "Antediluvian setting — Enoch's heavenly journey and instructions to his sons before the Flood; placed on the pre-Flood timeline symbolically, not to a fixed calendar year."
  },
  "composition": {
   "start": 1,
   "end": 70,
   "confidence": "amber",
   "caption": "Most likely the first century AD, with composition probably before the destruction of the Second Temple in AD 70."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "3-enoch-sefer-hekhalot",
  "name": "3 Enoch (Sefer Hekhalot)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 90,
   "end": 135,
   "confidence": "amber",
   "caption": "Framed as the ascent of Rabbi Ishmael (a 2nd-century AD historical sage) to see the transformed Enoch as the angel Metatron — set in the sage's own era, not antiquity."
  },
  "composition": {
   "start": 401,
   "end": 900,
   "confidence": "red",
   "caption": "Early medieval period, with most arguments converging on a date between the fifth and ninth centuries AD."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "life-of-adam-and-eve",
  "name": "Life of Adam and Eve",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -4000,
   "end": -3900,
   "confidence": "amber",
   "caption": "Adam and Eve's life after expulsion from Eden, through Adam's death and Eve's account of the Fall — placed at the symbolic dawn of the human timeline."
  },
  "composition": {
   "start": -100,
   "end": 100,
   "confidence": "amber",
   "caption": "Between the late first century BC and the early first century AD; the Greek and Latin versions both descend from a Semitic original, probably Hebrew."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "apocalypse-of-abraham",
  "name": "Apocalypse of Abraham",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1900,
   "end": -1800,
   "confidence": "green",
   "caption": "Set in Abraham's own lifetime — his rejection of his father's idols and a heavenly vision of the future Temple's destruction, given generations before Sinai."
  },
  "composition": {
   "start": 90,
   "end": 130,
   "confidence": "amber",
   "caption": "Late first or early second century AD, post destruction; the work shows familiarity with the temple’s destruction in AD 70."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "testament-of-abraham",
  "name": "Testament of Abraham",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1800,
   "end": -1800,
   "confidence": "green",
   "caption": "Set at the end of Abraham's life — Death (personified) comes for the patriarch after Michael's failed attempts to prepare him."
  },
  "composition": {
   "start": 90,
   "end": 150,
   "confidence": "amber",
   "caption": "Late first century AD or second century AD, with the early second century as the leading candidate."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "testament-of-adam",
  "name": "Testament of Adam",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -4000,
   "end": -3900,
   "confidence": "amber",
   "caption": "Adam's deathbed testament to Seth, listing the hours of prayer for creation and prophesying Christ — set at the symbolic dawn of the human timeline."
  },
  "composition": {
   "start": 201,
   "end": 600,
   "confidence": "amber",
   "caption": "Composite work with sections of varying date: Horarium possibly from a Jewish source second or third century AD; Prophecy third or fourth century AD; Hierarchy fourth through sixth centuries; combination probably fifth…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "ladder-of-jacob",
  "name": "Ladder of Jacob",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1900,
   "end": -1850,
   "confidence": "green",
   "caption": "Elaborates Jacob's dream at Bethel (Genesis 28) — set in the patriarch's own lifetime."
  },
  "composition": {
   "start": 90,
   "end": 130,
   "confidence": "amber",
   "caption": "Late first or early second century AD, belonging to the broader stream of post destruction Jewish apocalyptic literature alongside 4 Ezra, 2 Baruch, and Apocalypse of Abraham."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "prayer-of-joseph",
  "name": "Prayer of Joseph",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1700,
   "end": -1700,
   "confidence": "amber",
   "caption": "A first-person fragment attributed to Jacob's son Joseph in Egypt, describing his own pre-existence as an angelic being — set in the patriarchal era."
  },
  "composition": {
   "start": 1,
   "end": 100,
   "confidence": "amber",
   "caption": "Most plausibly the first century AD, either before or after the destruction of the Jerusalem temple in AD 70; known to Origen by the early third century."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "testaments-of-the-twelve-patriarchs",
  "name": "Testaments of the Twelve Patriarchs",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1750,
   "end": -1700,
   "confidence": "green",
   "caption": "Each of Jacob's twelve sons delivers a farewell testament on his deathbed in Egypt — set at the close of the patriarchal narratives, just before Exodus."
  },
  "composition": {
   "start": -200,
   "end": 200,
   "confidence": "red",
   "caption": "Original Jewish composition probably second century BC; Christian editorial layer probably second century AD; the boundary between Jewish original and Christian editorial layer remains contested."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "testament-of-moses-assumption-of-moses",
  "name": "Testament of Moses (Assumption of Moses)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1406,
   "end": -1406,
   "confidence": "green",
   "caption": "Moses' farewell address to Joshua shortly before his death on the eve of the conquest of Canaan — set at the close of the Exodus narrative."
  },
  "composition": {
   "start": -100,
   "end": 30,
   "confidence": "amber",
   "caption": "Early first century AD, between approximately 4 BC and AD 30, contemporary with the New Testament writings (alternative scholarly view places it in the second century BC)."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "testament-of-job",
  "name": "Testament of Job",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1900,
   "end": -1800,
   "confidence": "green",
   "caption": "Job's deathbed testament to his children, retelling his trials and his wife Sitis's devotion — set in the patriarchal era Job traditionally occupies."
  },
  "composition": {
   "start": -50,
   "end": 50,
   "confidence": "amber",
   "caption": "First century BC or first century AD, with the early first century AD as the leading candidate."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "apocalypse-of-adam",
  "name": "Apocalypse of Adam",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -4000,
   "end": -3900,
   "confidence": "amber",
   "caption": "Adam's revelation to his son Seth about the coming Flood and the future savior — set at the symbolic dawn of the human timeline."
  },
  "composition": {
   "start": 101,
   "end": 300,
   "confidence": "amber",
   "caption": "Second or third century AD, with the original Greek composition probably belonging squarely to second- or third-century Sethian Gnostic circles."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "testament-of-solomon",
  "name": "Testament of Solomon",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -970,
   "end": -930,
   "confidence": "amber",
   "caption": "Framed as Solomon's own first-person account of binding demons by a magic ring while building the Jerusalem Temple — set in his reign."
  },
  "composition": {
   "start": 1,
   "end": 600,
   "confidence": "red",
   "caption": "Contested within a wide range; proposed dates extend from the first century AD to the fifth or sixth century AD, with the work’s present form belonging to its Christiantransmission context."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "lives-of-the-prophets",
  "name": "Lives of the Prophets",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -800,
   "end": -500,
   "confidence": "amber",
   "caption": "Brief legendary biographies (birthplace, manner of death, burial site) of the writing and other prophets, spanning Israel's monarchy and exile."
  },
  "composition": {
   "start": 1,
   "end": 70,
   "confidence": "amber",
   "caption": "Mainstream-dated to the early-to-mid first century AD, with the bulk of the core material composed probably before the destruction of the Second Temple in AD 70."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "sibylline-oracles",
  "name": "Sibylline Oracles",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -150,
   "end": 700,
   "confidence": "red",
   "caption": "A pagan prophetess (the Sibyl) speaks across all of history from Creation to the end of the world — the 'narrative present' shifts with whichever book/century is being read."
  },
  "composition": {
   "start": -150,
   "end": 700,
   "confidence": "amber",
   "caption": "Composition across approximately a millennium, with Book 3 (oldest significant material) probably midsecond-century BC, Book 4 late first century AD, Book 5 late first or early second century AD, and Books 11–14…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "jubilees-little-genesis",
  "name": "Jubilees (Little Genesis)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1400,
   "end": -1400,
   "confidence": "green",
   "caption": "Presented as revelation given to Moses by an angel on Mount Sinai, retelling Genesis history from Creation to the Exodus in 49-year 'jubilee' cycles."
  },
  "composition": {
   "start": -170,
   "end": -140,
   "confidence": "amber",
   "caption": "Composed in Hebrew in the mid-second century BC, probably between 170 and 140 BC."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "pseudo-philo-biblical-antiquities",
  "name": "Pseudo-Philo, Biblical Antiquities",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -4000,
   "end": -1000,
   "confidence": "amber",
   "caption": "Retells biblical history from Creation through the death of King Saul, expanding on the biblical narrative with added legendary detail."
  },
  "composition": {
   "start": 40,
   "end": 70,
   "confidence": "amber",
   "caption": "First-century AD Jewish composition, probably before the destruction of the Second Temple in AD 70, with composition narrowing to the mid-first-century range."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "joseph-and-aseneth",
  "name": "Joseph and Aseneth",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -1700,
   "end": -1700,
   "confidence": "amber",
   "caption": "Elaborates the marriage of Joseph and the Egyptian priest's daughter Aseneth (Genesis 41:45) — set in the patriarchal era."
  },
  "composition": {
   "start": -100,
   "end": 200,
   "confidence": "amber",
   "caption": "Probably composed between the first century BC and the second century AD; the majority scholarly position situates the work in this range, with Bohak arguing for an early date connected to the Jewish temple at…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "4-ezra-2-esdras-3-14",
  "name": "4 Ezra (2 Esdras 3-14)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -557,
   "end": -557,
   "confidence": "green",
   "caption": "Framed as visions given to Ezra in Babylonian exile, thirty years after Jerusalem's fall — a pseudonymous retrojection written centuries after Ezra's actual 5th-century BC lifetime."
  },
  "composition": {
   "start": 95,
   "end": 100,
   "confidence": "amber",
   "caption": "Late first century AD, probably between AD 95 and 100, written in the shadow of Rome’s destruction of the Second Temple in AD 70."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "2-baruch-syriac-apocalypse-of-baruch",
  "name": "2 Baruch (Syriac Apocalypse of Baruch)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -586,
   "end": -580,
   "confidence": "green",
   "caption": "Framed as Jeremiah's scribe Baruch reflecting on Jerusalem's fall to Babylon in 586 BC — a pseudonymous retrojection written centuries after Baruch's actual lifetime."
  },
  "composition": {
   "start": 95,
   "end": 120,
   "confidence": "amber",
   "caption": "Late first or early second century AD, written after the destruction of the Second Temple in AD 70 and probably between AD 95 and 120."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "3-baruch-greek-apocalypse-of-baruch",
  "name": "3 Baruch (Greek Apocalypse of Baruch)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -586,
   "end": -580,
   "confidence": "green",
   "caption": "Framed as Baruch's own heavenly tour shortly after Jerusalem's fall in 586 BC — a pseudonymous retrojection written centuries after his actual lifetime."
  },
  "composition": {
   "start": 90,
   "end": 200,
   "confidence": "amber",
   "caption": "Late first or early second century AD, with the Christian editorial layer probably added in the second century."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "psalms-of-solomon",
  "name": "Psalms of Solomon",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -970,
   "end": -930,
   "confidence": "amber",
   "caption": "Styled as psalms of King Solomon, though their content reacts to events (Pompey's 63 BC conquest) nearly a millennium after his reign — a pseudonymous attribution."
  },
  "composition": {
   "start": -63,
   "end": -30,
   "confidence": "amber",
   "caption": "Mid- to late first century BC, with composition narrowing to the decades after the Roman general Pompey’s desecration of the Jerusalem Temple in 63 BC; some psalms may post-date Pompey’s death in 48 BC."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "odes-of-solomon",
  "name": "Odes of Solomon",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -970,
   "end": -930,
   "confidence": "amber",
   "caption": "Styled as hymns of King Solomon, though composed roughly a millennium after his reign — a pseudonymous attribution rather than a claimed historical setting."
  },
  "composition": {
   "start": 90,
   "end": 130,
   "confidence": "amber",
   "caption": "Late first or early second century AD, with composition narrowing to the early second century."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "martyrdom-and-ascension-of-isaiah",
  "name": "Martyrdom and Ascension of Isaiah",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -685,
   "end": -680,
   "confidence": "amber",
   "caption": "Depicts the prophet Isaiah's martyrdom under wicked King Manasseh of Judah and his ascent through the seven heavens — set in the 7th century BC."
  },
  "composition": {
   "start": -100,
   "end": 200,
   "confidence": "amber",
   "caption": "Composite work brought together in the second century AD; the Martyrdom of Isaiah layer is probably first century BC or first century AD (Jewish), the Vision of Isaiah is probably late first or early second century AD…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "apocalypse-of-zephaniah",
  "name": "Apocalypse of Zephaniah",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -630,
   "end": -620,
   "confidence": "amber",
   "caption": "Framed as a heavenly tour of the afterlife given to the prophet Zephaniah — set in his own late-7th-century BC lifetime."
  },
  "composition": {
   "start": -100,
   "end": 100,
   "confidence": "amber",
   "caption": "First century BC or first century AD; the work is attested only in fragmentary form, with the surviving Coptic translation made probably in the fourth or fifth century AD from a lost Greek original."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "apocalypse-of-elijah",
  "name": "Apocalypse of Elijah",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -850,
   "end": -850,
   "confidence": "amber",
   "caption": "Framed as end-times revelation given to the prophet Elijah — set in his own 9th-century BC lifetime."
  },
  "composition": {
   "start": 201,
   "end": 300,
   "confidence": "amber",
   "caption": "Probably third century AD, with the Christian elements possibly added to an earlier Jewish core; the Coptic manuscripts that preserve the work date from the fourth and fifth centuries AD."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "apocalypse-of-daniel",
  "name": "Apocalypse of Daniel",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -550,
   "end": -550,
   "confidence": "amber",
   "caption": "Styled as end-times prophecy from Daniel in the Babylonian/Persian courts, though it narrates Byzantine-era history centuries later disguised as future prediction (vaticinium ex eventu)."
  },
  "composition": {
   "start": 801,
   "end": 900,
   "confidence": "amber",
   "caption": "Ninth century AD, with the historical material datable to the eighth and ninth centuries Byzantine setting; the work uses vaticinium ex eventu (prophecy after the fact) technique to present its known history as if it…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "letter-of-aristeas",
  "name": "Letter of Aristeas",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -250,
   "end": -250,
   "confidence": "amber",
   "caption": "Narrates the legendary commissioning of the Greek Septuagint translation of the Torah under Ptolemy II Philadelphus in Alexandria."
  },
  "composition": {
   "start": -150,
   "end": -100,
   "confidence": "amber",
   "caption": "Most plausibly second century BC, between approximately 200 BC and 100 BC, with scholarly opinion narrowing to the late second century BC as the leading candidate."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "3-maccabees",
  "name": "3 Maccabees",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -217,
   "end": -217,
   "confidence": "amber",
   "caption": "Set in Egypt under Ptolemy IV Philopator, dramatizing a (largely legendary) persecution and deliverance of Egyptian Jews."
  },
  "composition": {
   "start": -100,
   "end": -1,
   "confidence": "amber",
   "caption": "First century BC, with composition narrowing to the period between approximately 100 BC and the end of the first century BC."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "4-maccabees",
  "name": "4 Maccabees",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -167,
   "end": -166,
   "confidence": "amber",
   "caption": "A philosophical homily on the martyrdoms of the priest Eleazar and the mother and seven sons under the Seleucid persecution of 167-166 BC (2 Maccabees 6-7)."
  },
  "composition": {
   "start": 1,
   "end": 100,
   "confidence": "amber",
   "caption": "Late first century BC through the early second century AD, with composition narrowing to the first century AD as the leading candidate."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "protevangelium-of-james",
  "name": "Protevangelium of James",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -20,
   "end": 4,
   "confidence": "amber",
   "caption": "Mary's own miraculous birth and upbringing in the Temple, her betrothal to Joseph, and Jesus's birth — extending the infancy narrative earlier than the canonical Gospels."
  },
  "composition": {
   "start": 150,
   "end": 200,
   "confidence": "amber",
   "caption": "Greek composition probably in the second half of the second century AD; O. Cullmann’s judgment that the work cannot have been written before 150 AD remains the standard lower bound."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "infancy-gospel-of-thomas",
  "name": "Infancy Gospel of Thomas",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -4,
   "end": 10,
   "confidence": "amber",
   "caption": "Legendary childhood miracles of Jesus between roughly ages 5 and 12, filling the silent years the canonical Gospels skip."
  },
  "composition": {
   "start": 150,
   "end": 180,
   "confidence": "amber",
   "caption": "Late second century AD; Irenaeus’s reference in Against Heresies 1.20.1 (around 180 AD) to apocryphal childhood-miracle stories told by the Marcosians provides the terminus ante quem."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-pseudo-matthew",
  "name": "Gospel of Pseudo-Matthew",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -6,
   "end": 8,
   "confidence": "amber",
   "caption": "A Latin compilation of Jesus's infancy and flight into Egypt, combining and expanding material from the Protevangelium of James and Infancy Gospel of Thomas."
  },
  "composition": {
   "start": 600,
   "end": 625,
   "confidence": "amber",
   "caption": "Composition probably in the first half of the seventh century AD, between 600 and 625, with the archetype of the text’s primary recension dated to around 800 AD per the 1997 critical edition of Jan Gijsel and Roland…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "arabic-infancy-gospel",
  "name": "Arabic Infancy Gospel",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -6,
   "end": 30,
   "confidence": "amber",
   "caption": "Legendary episodes from Jesus's infancy in Egypt and childhood in Nazareth, including miracles performed on Joseph's carpentry customers."
  },
  "composition": {
   "start": 501,
   "end": 1000,
   "confidence": "amber",
   "caption": "Surviving Arabic compilation likely 8th to 10th century AD, drawing on a Syriac tradition that may go back to the fifth or sixth century AD; earliest known reference by Ishoʿdad of Merv in the ninth century."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "history-of-joseph-the-carpenter",
  "name": "History of Joseph the Carpenter",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 18,
   "end": 19,
   "confidence": "amber",
   "caption": "Narrates Joseph the carpenter's old age and death at 111, with Jesus and Mary at his bedside — set when Jesus is about 18."
  },
  "composition": {
   "start": 550,
   "end": 650,
   "confidence": "amber",
   "caption": "Probably composed in Byzantine Egypt in the late sixth or early seventh century AD, with the Sahidic Coptic version representing the most original surviving form."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-thomas",
  "name": "Gospel of Thomas",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 27,
   "end": 30,
   "confidence": "amber",
   "caption": "A collection of sayings attributed to Jesus during his ministry, with no narrative frame of events — teachings only, no passion or resurrection account."
  },
  "composition": {
   "start": 130,
   "end": 220,
   "confidence": "amber",
   "caption": "Probably composed in Greek between the midsecond century AD and the early third century, with scholarly opinion ranging from earlier (Crossan, Patterson) to later (Goodacre) within this window; the Coptic translation in…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-philip",
  "name": "Gospel of Philip",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 27,
   "end": 30,
   "confidence": "amber",
   "caption": "A collection of Valentinian theological sayings and reflections attributed to Jesus's ministry — teachings only, with almost no narrative frame."
  },
  "composition": {
   "start": 150,
   "end": 250,
   "confidence": "amber",
   "caption": "Greek composition probably in the late second or early third century AD, somewhere between 150 and 250 AD; the surviving manuscript is a fourth-century Coptic translation."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-mary",
  "name": "Gospel of Mary",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 30,
   "end": 33,
   "confidence": "amber",
   "caption": "Set after the resurrection — Mary Magdalene recounts a private vision from the risen Jesus to the other disciples, who dispute her authority to teach it."
  },
  "composition": {
   "start": 120,
   "end": 180,
   "confidence": "amber",
   "caption": "Probably composed in Greek in the second century AD, with the most defensible range being approximately 120–180 AD; the surviving Coptic translation in the Berlin Codex 8502 is a fifth-century (possibly late…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-judas",
  "name": "Gospel of Judas",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 30,
   "end": 30,
   "confidence": "amber",
   "caption": "A series of dialogues between Jesus and Judas Iscariot in the days before the Passion, recasting Judas's betrayal as obedience to Jesus's own instruction."
  },
  "composition": {
   "start": 130,
   "end": 170,
   "confidence": "amber",
   "caption": "Greek composition probably between 130 and 170 AD; the surviving Coptic translation in Codex Tchacos was made probably in the fourth century AD, with the codex itself dating to that period."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-peter",
  "name": "Gospel of Peter",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 30,
   "end": 30,
   "confidence": "amber",
   "caption": "A fragmentary Passion and resurrection narrative told from Peter's perspective, overlapping and diverging from the canonical accounts at the trial, crucifixion, and empty tomb."
  },
  "composition": {
   "start": 100,
   "end": 150,
   "confidence": "amber",
   "caption": "Greek composition probably in the second century AD, with the most defensible range being approximately 100–150 AD; the surviving fragmentary manuscript was discovered in 1886–1887 in a Christian monk’s grave at Akhmim,…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "jewish-christian-gospel-fragments",
  "name": "Jewish-Christian Gospel Fragments",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 4,
   "end": 30,
   "confidence": "amber",
   "caption": "Fragments (quoted only by later church writers) paralleling and varying the canonical Gospels' account of Jesus's birth, baptism, and ministry."
  },
  "composition": {
   "start": 90,
   "end": 200,
   "confidence": "amber",
   "caption": "The underlying gospels were probably composed between the late first and second centuries AD; the surviving fragments preserve quotations made by patristic writers between the second and fifth centuries (Irenaeus,…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-nicodemus-acts-of-pilate",
  "name": "Gospel of Nicodemus (Acts of Pilate)",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 30,
   "end": 30,
   "confidence": "amber",
   "caption": "A trial-record-style account of Jesus before Pilate, the crucifixion, and (in its second half) Christ's descent into Hell to free the righteous dead."
  },
  "composition": {
   "start": 301,
   "end": 600,
   "confidence": "amber",
   "caption": "Composite work; the Acts of Pilate first part probably composed in Greek in the fourth century AD with possible earlier oral or written sources; the Descent into Hell second part probably composed in the fifth or sixth…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "the-pilate-letters-and-cycle",
  "name": "The Pilate Letters and Cycle",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 30,
   "end": 40,
   "confidence": "amber",
   "caption": "Legendary correspondence and later legal fate of Pontius Pilate in the years surrounding and following the crucifixion, including his reported death under Caligula."
  },
  "composition": {
   "start": 401,
   "end": 1200,
   "confidence": "amber",
   "caption": "Multiple compositions spanning the fifth through the twelfth centuries AD, with the core Latin compositions (Letter to Tiberius, Death of Pilate, Paradosis Pilati) dating to the early medieval period."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "gospel-of-truth",
  "name": "Gospel of Truth",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 27,
   "end": 30,
   "confidence": "amber",
   "caption": "A meditative homily on the meaning of Jesus's ministry and revelation rather than a narrated sequence of events — its 'setting' is Jesus's ministry, evoked rather than told."
  },
  "composition": {
   "start": 140,
   "end": 180,
   "confidence": "amber",
   "caption": "Composed in Greek around 140–180 AD, with the majority of scholars favoring a date around 150–160 AD; the text shows familiarity with most New Testament writings but predates the formal close of the New Testament canon."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "synthesis-descent-into-hell-traditions",
  "name": "SYNTHESIS: Descent into Hell Traditions",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 30,
   "end": 30,
   "confidence": "amber",
   "caption": "Christ's three-day descent to the realm of the dead between his crucifixion and resurrection — the shared narrative moment every text and creed in this tradition elaborates."
  },
  "composition": {
   "start": 1,
   "end": 500,
   "confidence": "amber",
   "caption": "The tradition develops across nearly two millennia: canonical foundation in 1 Peter 3:18–20 and 4:6 and Ephesians 4:8–10 (first century AD), patristic elaboration (second through fifth centuries), creedal formulation…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "apocalypse-of-peter",
  "name": "Apocalypse of Peter",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 30,
   "end": 33,
   "confidence": "amber",
   "caption": "Framed as a vision of heaven and hell shown to Peter by the risen Jesus on the Mount of Olives."
  },
  "composition": {
   "start": 125,
   "end": 150,
   "confidence": "amber",
   "caption": "Composed in Greek in the early to mid-second century AD, probably between 125 and 150 AD."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "apocalypse-of-paul",
  "name": "Apocalypse of Paul",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 50,
   "end": 58,
   "confidence": "amber",
   "caption": "Elaborates Paul's own claim in 2 Corinthians 12:2-4 of being 'caught up to the third heaven' into a full guided tour of heaven and hell."
  },
  "composition": {
   "start": 301,
   "end": 400,
   "confidence": "amber",
   "caption": "The text’s final form dates to the late fourth century AD, around 388 (the year the discovery narrative names as the moment the hidden text was found), drawing on earlier source material possibly from a third-century…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "shepherd-of-hermas",
  "name": "Shepherd of Hermas",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 90,
   "end": 155,
   "confidence": "green",
   "caption": "Visions given to the author, a former slave named Hermas, in his own lifetime in Rome — not a pseudonymous retrojection to an earlier era."
  },
  "composition": {
   "start": 90,
   "end": 155,
   "confidence": "amber",
   "caption": "Composed in Greek in Rome across multiple phases between approximately 90 AD and 155 AD, with the most widely accepted scholarly date for its final form falling around 140 AD."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "1-clement",
  "name": "1 Clement",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 96,
   "end": 96,
   "confidence": "green",
   "caption": "A real letter from the church at Rome to the church at Corinth addressing an ongoing leadership dispute — set in its author's own lifetime."
  },
  "composition": {
   "start": 96,
   "end": 96,
   "confidence": "amber",
   "caption": "Written in Greek around 96 AD, the earliest surviving Christian document composed outside the New Testament that can be dated with reasonable confidence."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "epistles-of-ignatius-of-antioch",
  "name": "Epistles of Ignatius of Antioch",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 108,
   "end": 108,
   "confidence": "green",
   "caption": "Real letters written by Ignatius, bishop of Antioch, to churches along his own final journey under armed escort to martyrdom in Rome."
  },
  "composition": {
   "start": 108,
   "end": 108,
   "confidence": "amber",
   "caption": "Written in Greek around 108 AD by the third bishop of Antioch while under military escort traveling to his martyrdom in Rome."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "the-didache",
  "name": "The Didache",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 70,
   "end": 110,
   "confidence": "green",
   "caption": "A church manual of ethical and liturgical instruction for its own community — no narrated events, set in its author's own era."
  },
  "composition": {
   "start": 70,
   "end": 110,
   "confidence": "amber",
   "caption": "Composed in Greek in the late first or early second century AD, probably between 70 and 110 AD, with the Two Ways section (chapters 1–6) drawing on earlier Jewish ethical source material and the ritual sections…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "epistle-of-barnabas",
  "name": "Epistle of Barnabas",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 130,
   "end": 132,
   "confidence": "green",
   "caption": "A real theological letter to its own audience — no narrated events beyond its author's own present-day argument."
  },
  "composition": {
   "start": 130,
   "end": 132,
   "confidence": "amber",
   "caption": "Composed in Greek probably between 130 and 132 AD, most likely in Alexandria, drawing on earlier JewishChristian polemical material."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "epistle-of-polycarp-to-the-philippians",
  "name": "Epistle of Polycarp to the Philippians",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 110,
   "end": 110,
   "confidence": "green",
   "caption": "A real letter from Polycarp of Smyrna to the church at Philippi shortly after Ignatius's martyrdom — set in its author's own lifetime."
  },
  "composition": {
   "start": 110,
   "end": 155,
   "confidence": "amber",
   "caption": "Composed in Greek by Polycarp of Smyrna shortly after the martyrdom of Ignatius in Rome, probably around 110 AD (though some scholars argue for a date as late as 135 AD); Polycarp himself was martyred at Smyrna at age…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "acts-of-paul",
  "name": "Acts of Paul",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 45,
   "end": 64,
   "confidence": "amber",
   "caption": "Legendary missionary adventures and eventual martyrdom of Paul, set generations before the text's own composition."
  },
  "composition": {
   "start": 160,
   "end": 190,
   "confidence": "amber",
   "caption": "Composed in Greek between approximately 160 and 190 AD by a Christian presbyter in Asia who, according to Tertullian, was caught writing the document, confessed that he had done it out of love for Paul, and was stripped…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "acts-of-peter",
  "name": "Acts of Peter",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 42,
   "end": 64,
   "confidence": "amber",
   "caption": "Legendary contest between Peter and Simon Magus in Rome, ending with Peter's martyrdom by crucifixion upside-down, set generations before the text's own composition."
  },
  "composition": {
   "start": 180,
   "end": 190,
   "confidence": "amber",
   "caption": "Composed in Greek probably between 180 and 190 AD, most likely in Asia Minor."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "acts-of-john",
  "name": "Acts of John",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 60,
   "end": 100,
   "confidence": "amber",
   "caption": "Legendary missionary travels and teachings of the apostle John in Ephesus, set generations before the text's own composition."
  },
  "composition": {
   "start": 150,
   "end": 180,
   "confidence": "amber",
   "caption": "Composed in Greek probably between 150 and 180 AD, making it the earliest of the major apocryphal acts."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "acts-of-thomas",
  "name": "Acts of Thomas",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 50,
   "end": 72,
   "confidence": "amber",
   "caption": "Legendary mission of the apostle Thomas to India, ending in his martyrdom, set generations before the text's own composition."
  },
  "composition": {
   "start": 200,
   "end": 230,
   "confidence": "amber",
   "caption": "Composed in Syriac in the early decades of the 200s AD, the only major apocryphal acts originally written in Syriac rather than Greek."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "acts-of-andrew",
  "name": "Acts of Andrew",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 60,
   "end": 70,
   "confidence": "amber",
   "caption": "Legendary missionary travels of the apostle Andrew, ending in his martyrdom at Patras, set generations before the text's own composition."
  },
  "composition": {
   "start": 150,
   "end": 200,
   "confidence": "amber",
   "caption": "Composed in Greek probably in the late second century AD, between approximately 150 and 200 AD."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "martyrdom-of-polycarp",
  "name": "Martyrdom of Polycarp",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 155,
   "end": 160,
   "confidence": "green",
   "caption": "An eyewitness-style account of Polycarp's own arrest and execution in Smyrna — set within months or years of the text's own composition."
  },
  "composition": {
   "start": 155,
   "end": 160,
   "confidence": "amber",
   "caption": "Composed in Greek around 155–160 AD, within months or a few years of the events it narrates; widely regarded as the earliest surviving Christian martyrdom narrative composed as an independent literary work."
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "epistle-to-diognetus",
  "name": "Epistle to Diognetus",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": 150,
   "end": 200,
   "confidence": "green",
   "caption": "A real apologetic letter defending Christian belief and practice to its addressee Diognetus — no narrated events beyond its author's own present-day argument."
  },
  "composition": {
   "start": 150,
   "end": 200,
   "confidence": "amber",
   "caption": "Written in Greek probably between 150 and 200 AD, with the majority of scholars favoring a date in the second half of the second century; the closing chapters 11–12 are widely regarded as a later interpolation, probably…"
  },
  "canonization": null,
  "restoration": null,
  "neverCanonized": true
 },
 {
  "id": "1-enoch",
  "name": "1 Enoch",
  "corpus": "Pseudepigrapha",
  "corpusLabel": "Pseudepigrapha",
  "narrative": {
   "start": -3300,
   "end": -3300,
   "confidence": "red",
   "caption": "Set before the flood — traditionally placed over a millennium before Abraham, in the compressed \"deep past\" zone at the far left.",
   "symbolic": true,
   "symbolicLabel": "Legendary — before the Flood"
  },
  "composition": {
   "start": -300,
   "end": 100,
   "confidence": "red",
   "caption": "Five separate booklets from different centuries, bound as one work — the Book of Parables is entirely missing from the Qumran fragments, the strongest single clue to its later, separate origin.",
   "segments": [
    {
     "label": "Book of the Watchers",
     "start": -300,
     "end": -201,
     "confidence": "green"
    },
    {
     "label": "Astronomical Book / Book of Luminaries",
     "start": -300,
     "end": -201,
     "confidence": "green"
    },
    {
     "label": "Book of Dream Visions, incl. Animal Apocalypse",
     "start": -200,
     "end": -101,
     "confidence": "amber"
    },
    {
     "label": "Epistle of Enoch, incl. Apocalypse of Weeks",
     "start": -200,
     "end": -1,
     "confidence": "green"
    },
    {
     "label": "Book of Parables / Similitudes",
     "start": -100,
     "end": 100,
     "confidence": "red"
    }
   ]
  },
  "canonization": {
   "start": 300,
   "end": 400,
   "confidence": "red",
   "caption": "Preserved as scripture only in the Ethiopian Orthodox tradition — never included in the Jewish or wider Christian canon."
  },
  "restoration": null,
  "neverCanonized": true
 }
]