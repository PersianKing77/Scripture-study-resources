// Long-form interpretive labels for the Herodian Temple reconstruction.
// Sources: New Testament (paraphrased, cited by reference); Josephus (War, Antiquities); Mishnah (Middot, Tamid,
// Yoma, Shekalim, Sukkah); Babylonian Talmud. Where reconstructions differ, the
// modelled reading follows named reconstructions (chiefly Middot, Josephus, and Leen
// Ritmeyer for the platform) and the dissent is stated in the note.

export const LABELS = {
  mount: {
    title: "The Temple Mount Platform",
    sub: "Har ha-Bayit — the great artificial esplanade",
    body: `Herod doubled the area of the older Hasmonean temple platform by throwing enormous retaining walls around the summit of Mount Moriah and filling the space behind them, producing a level trapezoidal esplanade of roughly 36 acres — one of the largest sacred enclosures in the early Roman world. Josephus reports that the work was begun in the eighteenth year of Herod's reign (commonly reckoned 20/19 BCE, though Josephus' regnal-year system leaves the exact conversion debated) and that the sanctuary proper was raised in a year and a half, while the courts and porticoes took eight years, with work continuing for decades afterwards. That long building history stands behind the crowd's remark in John 2:20 that the temple had already been forty-six years in building — often correlated with 27/28 CE if construction began 20/19 BCE, though Gospel chronology is debated. Some of the ashlars in the western retaining wall exceed 500 tons; the disciples' amazement in Mark 13:1 at the size of the stones and buildings before them is a reaction to exactly this masonry.`,
    sources: [
      "Josephus, Antiquities 15.380–425; War 5.184–189",
      "Mishnah Middot 2:1 (the Mount as 500 × 500 cubits)",
      "Leen Ritmeyer, The Quest: Revealing the Temple Mount in Jerusalem (2006)",
      "John 2:20; Mark 13:1–2"
    ],
    note: "Middot gives the sacred Mount as a square of 500 cubits, considerably smaller than the Herodian esplanade Josephus and the surviving walls describe. In Leen Ritmeyer's reconstruction, followed in this overlay, Middot's 500-cubit square represents an older consecrated platform within Herod's larger enclosure — its eastern side identified with the pre-Herodian masonry above the seam in the eastern wall, its western side with a surviving step of pre-Herodian blocks north-west of the Dome of the Rock. Other reconstructions differ, and the exact boundaries are debated. The real enclosure is also not a rectangle: the eastern wall measures about 468 m, the western 488 m, the northern 315 m and the southern 281 m. This model squares it to 300 × 470 m, a model-space approximation, and centres the courts within it, so that the inner precinct can keep the cubit dimensions of Middot exactly; Middot itself gives unequal spaces round the courts — largest to the south, then the east, then the north, least to the west. See Phases, under More, for the three building periods."
  },
  walls: {
    title: "The Retaining Walls",
    sub: "Ashlar masonry, margin-and-boss dressing",
    body: `The platform is held by four retaining walls of dry-laid limestone ashlars, each course set back a few centimetres from the one below and each block dressed with a flat marginal draft around a slightly raised boss — the signature of Herodian stonework. On the south and west the walls rise more than 30 metres above bedrock; Josephus says a man looking down from the top of the Royal Stoa into the Kidron valley grew dizzy. Towers stood at the northern angles, and against the north-east corner Herod's engineers cut the great reservoir later called the Pool of Israel, filling the head of the valley they had to bridge to carry the platform northward. The lower courses of the western wall survive today, and the visible layout of gates, arches and street level all belong to this phase.`,
    sources: [
      "Josephus, War 5.184–188; Antiquities 15.392–402; 15.412 (the dizzying view down)",
      "Leen Ritmeyer, The Quest (2006), on the phases of the walls and the eastern seam"
    ],
    note: "Original wall heights above street level are estimated from surviving courses and excavated pavement; the upper courses and parapet are conjectural. The eastern wall is not all of one date: a straight joint — the \u201cseam\u201d — about 32 m north of the south-east angle marks where Herodian masonry butts against older work, and the courses north of it are pre-Herodian. Phases, under More, colours the three periods."
  },
  pool_of_israel: {
    title: "The Pool of Israel",
    sub: "The reservoir at the north-east corner",
    body: `Against the platform's north-east angle lay a great open reservoir, cut into the head of the valley that Herod's engineers had to fill and bridge to extend the esplanade northward. It gathered runoff and stored water for the temple's considerable needs — washing, the laver, and the ritual baths nearby — and its steep stepped sides doubled as a stair down to the water as the level fell through a dry season. It sat outside the sacred enclosure itself, against the outer face of the eastern and northern walls, not within any of the courts.`,
    sources: [
      "Josephus, War 5.184–188 (the walls and the filled valley head)",
      "Leen Ritmeyer, The Quest (2006), on the Pool of Israel and the platform's north-east corner"
    ],
    note: "The pool's exact dimensions and the sequence of quarrying, reservoir use, and Herodian filling are debated; the size and steps modelled here follow the commonly published reconstruction, not an excavated plan."
  },
  royalstoa: {
    title: "The Royal Stoa",
    sub: "The basilica along the southern wall",
    body: `Along the whole southern edge ran Herod's most ostentatious building: a basilica of 162 Corinthian columns in four rows of forty, with two more at the western gate, each column about 1.46 m thick — so thick that three men with arms outstretched could just encircle one — and some 15 m high. The two outer aisles, each about 10 m wide, were roofed low; the central nave, 15 m wide, was carried up twice their height on a clerestory, its ceiling deeply coffered in cedar, and the whole building was about 35 m deep and ran the full 280 m of the wall. It was a closed building, not an open porch: it stood on the retaining wall itself, the fourth row of columns engaged in its southern wall, windows set high, walled at both ends, and open in a colonnade only toward the court. Its sheltered scale makes it one proposed setting for commercial, administrative, and judicial activity, though the Gospels place sellers and money changers in the temple precinct generally and do not identify this building, and rabbinic sources associate the Great Sanhedrin with the Chamber of Hewn Stone adjoining the inner court rather than an apse here. It is one plausible reconstructed setting for the cleansing of the temple, when Jesus drove out those buying and selling and overturned the money-changers' tables (Matthew 21:12); the Gospel narratives specify the temple precinct, not this building.`,
    sources: [
      "Josephus, Antiquities 15.411–416 (162 columns; fifty feet high)",
      "Dimensions after the Temple Mount excavations: Leen Ritmeyer, The Quest (2006); Ehud Netzer",
      "Matthew 21:12–13; Mark 11:15–17; Luke 19:45–46; John 2:14–16"
    ],
    note: "Whether the traders operated in the Royal Stoa or in the open court of the Gentiles is debated. The Gospels locate commerce in the temple precinct (the hieron) but do not identify the Stoa; Mishnah Shekalim locates money-changing tables temporally and institutionally, not securely inside this building. The Stoa's shelter and scale make it one proposed setting, not a confirmed one."
  },
  porticoes: {
    title: "The Northern and Western Porticoes",
    sub: "Double colonnades of the outer court",
    body: `Three sides of the esplanade were bordered by double colonnades, each column a single monolith of white stone some 25 cubits high, carrying a flat cedar roof. They gave shade, shelter from rain, and a place for teaching: the rabbis, and later the apostles, gathered under them. Josephus reckons these colonnades among the most astonishing works of the age. The pavement between them formed the outer court, open to Jew and gentile alike.`,
    sources: ["Josephus, War 5.190–192; Antiquities 15.410–420"],
    note: "The number of column rows on the north and west is reconstructed as two on Josephus' testimony; some reconstructions give the north side three."
  },
  solomons: {
    title: "Solomon's Porch",
    sub: "The eastern colonnade",
    body: `The eastern portico was reputed to be older than Herod's work — popularly ascribed to Solomon himself, and possibly incorporating pre-Herodian foundations of the eastern wall. It is named twice in the New Testament: Jesus walks there in winter and is challenged about his identity (John 10:23), and after Pentecost the believers gather there with one accord while Peter preaches (Acts 3:11; 5:12). From the Mount of Olives ridge line, a viewer looked directly across the Kidron toward this eastern portico.`,
    sources: ["John 10:22–23; Acts 3:11; 5:12", "Josephus, War 5.184–185; Antiquities 20.220–221"],
    note: "Josephus attributes the eastern wall's antiquity to Solomon; archaeologically, the 'straight joint' in the eastern wall marks a pre-Herodian section, which supports the tradition without confirming a Solomonic date."
  },
  gentiles: {
    title: "The Court of the Gentiles",
    sub: "The open outer court",
    body: `The vast paved area between the porticoes and the balustrade was open to all comers, including gentiles — hence its later name. Pilgrims crossed it in tens of thousands at the three feasts; it held the sellers of doves and oxen, the tables of the moneychangers who converted foreign coin into the Tyrian silver required for the half-shekel, and the crowds who simply came to look. Its openness is the point of Jesus' citation of Isaiah: he calls God's house a house of prayer meant for every nation (Mark 11:17).`,
    sources: ["Mishnah Shekalim 1:3 (money-changing tables)", "Mark 11:15–17; John 2:14", "Josephus, War 5.192–194"],
    note: "The name 'Court of the Gentiles' is a modern convention; ancient sources simply call it the outer court or the mountain of the house."
  },
  soreg: {
    title: "The Soreg",
    sub: "The lattice barrier and its warning",
    body: `A stone lattice three cubits high ran around the inner precinct, marking the line beyond which no gentile could pass on pain of death. Set into it at intervals were slabs inscribed in Greek and Latin forbidding foreigners to enter the holy place; two such inscriptions have been recovered, one complete. Paul's arrest turned on exactly this line — the crowd supposed he had brought Trophimus the Ephesian past it (Acts 21:28–29) — and many interpreters connect it with the "middle wall of partition" Ephesians 2:14 says Christ has broken down, though others read Paul's phrase as broader metaphorical language rather than a specific reference to the soreg.`,
    sources: [
      "Josephus, War 5.193–194; Antiquities 15.417",
      "Mishnah Middot 2:3",
      "Acts 21:28–29; Ephesians 2:14"
    ],
    note: "Josephus gives three cubits (about 1.5 m); Middot gives ten handbreadths (about 0.8 m). The model selects Josephus' figure for visualization, but the discrepancy remains unresolved. The inscriptions threaten death for unauthorized entry; the sources establish the rule and the threat, not the procedure by which a sentence would actually have been carried out under Roman rule."
  },
  chel: {
    title: "The Chel and the Twelve Steps",
    sub: "The terrace before the inner wall",
    body: `Between the soreg and the wall of the inner courts lay a terrace ten cubits wide, the chel, reached by twelve steps each half a cubit in rise and tread. The rise from the outer pavement to the sanctuary floor was accomplished in graded flights of exactly this kind, so that a worshipper ascended continually as he approached the house. Only ritually pure Israelites went beyond this terrace.`,
    sources: ["Mishnah Middot 2:3; 2:6", "Josephus, War 5.195–197"],
    note: "Josephus counts fourteen steps at this point, Middot twelve; the difference may reflect a change in level around the circuit. Twelve is modelled."
  },
  women: {
    title: "The Court of the Women",
    sub: "Ezrat Nashim — 135 cubits square",
    body: `Despite the name, this was the general court of assembly for all Israel, entered by both men and women; it was called the women's court because women could go no further in. It measured 135 cubits square, with a colonnade around it and — added later, according to the Mishnah — a gallery so that women could watch the rejoicing of the water-drawing at Sukkot from above without mingling with the men. Here stood the thirteen shofar-shaped chests for offerings; the treasury was commonly associated with this court, making it a plausible setting for the widow's offering (Mark 12:41–44), and Luke places the encounter with Simeon and Anna in the temple generally, of which this accessible court is one plausible setting (Luke 2:22–38).`,
    sources: [
      "Mishnah Middot 2:5; Sukkah 5:1–4",
      "Mishnah Shekalim 6:5 (the thirteen chests)",
      "Mark 12:41–44; Luke 2:22–38; Luke 21:1–4"
    ],
    note: "The gallery for women is described in later rabbinic sources and may be a post-Herodian memory; it is modelled because the Mishnah is explicit that it was built."
  },
  chambers: {
    title: "The Four Corner Chambers",
    sub: "Nazirites, wood, lepers, oil and wine",
    body: `At each corner of the Court of the Women stood an unroofed chamber forty cubits square. In the south-east the Nazirites boiled their peace offerings and cut their hair; in the north-east the wood store, where priests inspected timber for the altar for worm damage; in the north-west the cleansed lepers immersed before presenting their offering; in the south-west the store of oil and wine. Acts 21:23–26 shows Paul paying the charges of four men fulfilling a Nazirite vow; this Nazirite chamber helps visualize that ritual world, though Acts itself does not identify the room used.`,
    sources: ["Mishnah Middot 2:5", "Acts 21:23–26; Numbers 6"],
    note: "The assignment of functions to particular corners follows Middot; the elevations are conjectural."
  },
  beautiful: {
    title: "The Beautiful Gate",
    sub: "The eastern approach to the Court of the Women",
    body: `The eastern entrance to the Court of the Women was reached by a flight of steps from the outer court and closed by great doors. Josephus describes nine gates plated with gold and silver, and one — probably this one — of solid Corinthian bronze, far exceeding the others in value. At the gate "which is called Beautiful" the lame man sat daily to ask alms, and was healed by Peter and John (Acts 3:1–10).`,
    sources: ["Acts 3:1–10", "Josephus, War 5.201–206"],
    note: "Acts' Beautiful Gate is often identified with a Nicanor or Corinthian bronze gate, but whether this was the eastern entrance to the Court of Women or the inner gate above the fifteen steps remains disputed."
  },
  nicanor: {
    title: "The Nicanor Gate and the Fifteen Steps",
    sub: "From the Court of the Women into the Court of Israel",
    body: `Fifteen semicircular steps, corresponding to the fifteen Songs of Ascent, rose from the Court of the Women to the great bronze gate on which the Levites stood to sing. The Talmud tells how Nicanor's doors were thrown into the sea in a storm and recovered at the harbour of Acco, and the Mishnah says the gate was left in its Corinthian bronze while others were gilded, in memory of the miracle. Later rabbinic descriptions associate post-childbirth offerings and the presentation of a cleansed leper with this inner threshold, making it a possible setting for Luke 2:22–24, which itself names no gate.`,
    sources: [
      "Mishnah Middot 1:4; 2:3; 2:5 (the fifteen steps); Sotah 1:5; Negaim 14:8",
      "Babylonian Talmud, Yoma 38a (Nicanor's doors); Sukkah 51b (the Levites on the steps)",
      "Luke 2:22–24"
    ],
    note: "The steps' semicircular plan is stated in Middot 2:5; their exact radius is reconstructed."
  },
  israel: {
    title: "The Court of Israel",
    sub: "A strip eleven cubits deep",
    body: `Inside the Nicanor Gate a narrow strip eleven cubits deep ran the width of the inner court. This was the furthest a lay Israelite could go: he entered only to lay his hands on his offering, to slaughter it, or to wave it, and then withdrew. A low step or lattice divided it from the priests' court beyond. Luke 18:10–14's parable evokes worshippers praying within the temple precinct; no exact court can be recovered from the text, though this zone is one plausible setting for the publican who "stood afar off" and the Pharisee who prayed with himself.`,
    sources: ["Mishnah Middot 5:1; Kelim 1:8", "Luke 18:10–14"],
    note: "Some authorities treat the Court of Israel and the Court of the Priests as a single space divided only by a step; that reading is followed here."
  },
  priests: {
    title: "The Court of the Priests",
    sub: "The place of service",
    body: `The service of the altar was carried out in this court: the daily burnt offering morning and evening, the incense, the trimming of the lamps, the blowing of trumpets, and the priestly blessing. On its south side stood the chamber of hewn stone where the Sanhedrin met, and around the walls a ring of service chambers. Zacharias was serving in the course of Abia and was chosen by lot to burn incense when Gabriel appeared to him, "and the whole multitude of the people were praying without at the time of incense" (Luke 1:8–10) — the people standing in the Court of Israel and the Court of the Women beyond.`,
    sources: ["Mishnah Tamid 1–7; Middot 5:3–4", "Luke 1:5–23", "Josephus, War 5.226–227"],
    note: "The precise position of the Chamber of Hewn Stone is disputed between the south side of the inner court and the northern range; the southern position is modelled."
  },
  altar: {
    title: "The Altar of Burnt Offering",
    sub: "Thirty-two cubits square at the base",
    body: `The great altar was built of unhewn stones laid without iron, 32 cubits square at the base and rising ten cubits in stages: one cubit up from the base with an indent of one, then five cubits up to the surround on which the priests walked, then three cubits more to the upper hearth, with a projecting horn a cubit high at each corner. Two drains at the south-west carried the blood away to the Kidron. A perpetual fire burned on the hearth; the ashes were heaped in the centre. Fugitives grasping the horns claimed sanctuary, and the blood of the offerings was applied to them.`,
    sources: ["Mishnah Middot 3:1–4; Zevachim 5", "Exodus 20:25 (unhewn stone); 1 Kings 1:50–51", "Josephus, War 5.225"],
    note: "Josephus gives the altar as 50 cubits square and 15 high; the Mishnah's 32 × 32 × 10 is followed here as the model's synthesis, with Josephus' larger figure possibly measuring an outer terrace."
  },
  ramp: {
    title: "The Ramp",
    sub: "The southern ascent to the altar",
    body: `Because iron tools and steps were both forbidden to the altar, priests reached the hearth by a smooth ramp on the south side, 32 cubits long and 16 wide, built of unhewn stone. Two small ramps branched from it to the ledge. The priests ascended on the right of the ramp, circled the altar, and descended on the left; the Mishnah's choreography of the daily offering is precise about the direction of every turn.`,
    sources: ["Mishnah Middot 3:3–4; Tamid 1:4; 2:1", "Exodus 20:26"],
    note: "The dimensions are from Middot 3:3; the surface gradient is inferred. Note the cross-reference above: Ezekiel's visionary altar is described with steps facing east, which is why his measurements are given here for comparison and not followed — the Mosaic prohibition of steps (Exodus 20:26) and the Mishnah's smooth ramp on the south are what the model reproduces."
  },
  laver: {
    title: "The Brazen Laver",
    sub: "The kiyor, between the porch and the altar",
    body: `A bronze basin stood a little to the south of the line between the porch and the altar, where the priests washed their hands and feet before service. The Mishnah says it had twelve spouts, so that the whole watch of priests could wash together, and that Ben Katin fitted it with a mechanism to lower it into a cistern overnight, since water left standing in it would be disqualified by daybreak. It answers to the sea and lavers of Solomon's house and the laver of the Tabernacle in Exodus 30:17–21.`,
    sources: [
      "Mishnah Middot 3:6; Yoma 3:10; Tamid 1:4; 2:1",
      "Exodus 30:17–21; 1 Kings 7:23–39"
    ],
    note: "The number of spouts and the sinking mechanism are rabbinic; the basin's form is reconstructed from the Tabernacle and Solomonic descriptions."
  },
  slaughter: {
    title: "The Place of Slaughtering",
    sub: "North of the altar: rings, pillars and tables",
    body: `Sacrifice was carried out on the north side of the altar, as the Torah requires for the most holy offerings. There were twenty-four iron rings set in the pavement to hold the animal's head, eight low pillars fitted with cedar blocks and iron hooks for hanging carcasses, and eight marble tables for rinsing the entrails. Nearby stood a table of marble on which the limbs were laid, and one of silver for the service vessels. The whole area could be sluiced down with water from the aqueduct.`,
    sources: [
      "Mishnah Middot 3:5; 5:2; Shekalim 6:4 (the marble and silver tables); Tamid 3:5; 4:3",
      "Leviticus 1:11",
      "Josephus, War 5.225 (drainage and water supply)"
    ],
    note: "The count of rings, hooks and tables follows Middot; their exact arrangement in the pavement is a reconstruction."
  },
  steps12: {
    title: "The Twelve Steps to the Porch",
    sub: "The final ascent",
    body: `Twelve steps, each half a cubit in rise and tread, led from the Court of the Priests up to the floor of the porch. The sanctuary floor thus stood nineteen and a half cubits — about ten metres — above the outer pavement, and the whole complex was designed so that the worshipper's approach was a continuous ascent — the Songs of Ascent were sung on the fifteen steps below, and the priests mounted these last twelve to enter the house.`,
    sources: ["Mishnah Middot 3:6; 2:3", "Psalms 120–134 (Songs of Degrees)"],
    note: "The twenty-two cubits of Middot 3:6 are the horizontal distance from the porch to the altar, not a height; the rise is the sum of the flights — six cubits to the chel, seven and a half up the fifteen steps, and six more here, nineteen and a half in all, which is what is modelled."
  },
  facade: {
    title: "The Facade and the Porch",
    sub: "Ulam — a hundred cubits high, a hundred wide",
    body: `The eastern front of the house was a great screen wall a hundred cubits high and a hundred wide, plated so heavily with gold that Josephus says a man looking at it at sunrise had to turn his eyes away as from the sun itself, and that from a distance it looked like a mountain covered with snow where the gold gave way to white stone. The doorway stood open, forty cubits high and twenty wide, with no doors, so that the interior gloom was visible from the court — the openness signifying, Josephus says, that heaven is open to all.`,
    sources: [
      "Josephus, War 5.207–214; 5.222–224",
      "Mishnah Middot 3:7; 4:1–2"
    ],
    note: "The two chief sources disagree on the opening: Middot 3:7 gives the porch gateway as 40 cubits high and 20 wide, Josephus (War 5.208) as 70 high and 25 broad. Middot's smaller figure is modelled, since the rest of the plan follows Middot; the sculptural detail of the entablature is conjectural."
  },
  vine: {
    title: "The Golden Vine",
    sub: "Over the sanctuary doorway",
    body: `Above the entrance hung a golden vine with clusters as tall as a man, to which worshippers added a leaf, a berry or a cluster of gold as a votive gift until the mass of it was immense. It was fixed on the beams that spanned the doorway, and Josephus mentions it among the temple's most astonishing ornaments. Some read Jesus' words in John 15:1, "I am the true vine," as spoken with this ornament in view.`,
    sources: [
      "Josephus, Antiquities 15.395; War 5.210–211",
      "Mishnah Middot 3:8",
      "John 15:1"
    ],
    note: "The vine's exact form and extent are unknown; it is modelled schematically."
  },
  hekhal: {
    title: "The Holy Place",
    sub: "Hekhal — forty cubits by twenty",
    body: `Beyond the porch, through a doorway twenty cubits high and ten wide hung with an embroidered Babylonian curtain, lay the Holy Place: forty cubits long, twenty wide and forty high, its walls panelled in gold, containing the seven-branched lampstand, the table of shewbread and the golden altar of incense. Only priests entered, and only for service — to trim the lamps morning and evening and to offer incense. Josephus records that Titus himself went in with his commanders and saw the sanctuary before the fire took it, and that its furniture was carried in the triumph at Rome, where the lampstand and table appear on the Arch of Titus.`,
    sources: [
      "Mishnah Middot 4:6–7; Tamid 3:6–9; 6:1–3",
      "Josephus, War 5.215–219; 6.260 (Titus enters); 7.148–150",
      "Hebrews 9:2"
    ],
    note: "Middot and Josephus differ slightly on wall thickness and the number of side chambers; Middot's plan is followed."
  },
  menorah: {
    title: "The Golden Candlestick",
    sub: "The menorah, on the south side",
    body: `A lampstand of beaten gold with a central shaft and six branches stood on the south side of the Holy Place. Its seven lamps were dressed each morning and lit toward evening; the westernmost lamp, the ner ma'aravi, held a special, continuing role in rabbinic tradition, and the other lamps are described as being kindled from it. The pattern is prescribed in Exodus 25:31–40, and Zechariah 4 and Revelation 1:12–20 both take it up as an image. The lampstand carried away by Titus is depicted on his arch in Rome, though its double-octagonal base there is often thought to be a Roman sculptor's addition.`,
    sources: [
      "Exodus 25:31–40; Leviticus 24:1–4; Zechariah 4:2; Revelation 1:12–13, 20",
      "Mishnah Tamid 3:9; 6:1",
      "Josephus, War 5.216–217; 7.148–149"
    ],
    note: "Whether the branches were rounded (as on the Arch of Titus) or straight and angular (as in some rabbinic and later Jewish depictions) is disputed; the rounded form is modelled as an influential reconstruction, following the Arch of Titus relief."
  },
  shewbread: {
    title: "The Table of Shewbread",
    sub: "On the north side",
    body: `On the north stood a table overlaid with gold, two cubits long and one wide, bearing twelve unleavened loaves in two rows or stacks — one for each tribe — renewed every Sabbath by the incoming watch of priests, with frankincense set beside them. The old loaves were eaten by the priests in the court. Jesus cites the incident of David eating this bread in defence of his disciples on the Sabbath (Matthew 12:3–4).`,
    sources: [
      "Exodus 25:23–30; Leviticus 24:5–9; 1 Samuel 21:1–6; Matthew 12:3–4; Hebrews 9:2",
      "Mishnah Menachot 11:4–7; Shekalim 6:4",
      "Josephus, War 5.216–217; 7.148"
    ],
    note: "The Mishnah records a dispute over whether the loaves were stacked flat or shaped like open boxes; a stacked arrangement is modelled."
  },
  incense: {
    title: "The Altar of Incense",
    sub: "The golden altar before the veil",
    body: `A small square altar of gold, one cubit by one and two cubits high with horns at the corners, stood in the middle of the Holy Place before the veil. Incense was burned on it morning and evening, at the same hours as the burnt offering, by a priest chosen by lot — an office that fell to a priest once in a lifetime. Revelation 8:3–4 takes the golden altar as the place where the prayers of the saints ascend, and Luke 1 sets Gabriel's announcement at its right side.`,
    sources: [
      "Exodus 30:1–10; 37:25–28; Luke 1:8–11; Hebrews 9:4; Revelation 8:3–4",
      "Mishnah Tamid 5:2–6:3; Yoma 2:4"
    ],
    note: "Hebrews 9:4 appears to place the golden censer or altar within the Holy of Holies; the Torah and Mishnah place the incense altar in the Holy Place, and that placement is followed."
  },
  veil: {
    title: "The Veil",
    sub: "Parochet — the partition before the Holy of Holies",
    body: `The Holy of Holies was closed not by doors but by curtains: according to the Mishnah two veils hung a cubit apart, the outer looped back on the south and the inner on the north, so that the high priest entered between them on the Day of Atonement, walking along the gap. Josephus describes a Babylonian curtain of blue, scarlet, purple and fine linen, embroidered with a panorama of the heavens. All three synoptic Gospels report that at the death of Jesus the temple veil tore in two, from top to bottom (Mark 15:38), and Hebrews reads the veil as his flesh, opening a new and living way.`,
    sources: [
      "Exodus 26:31–33; Matthew 27:51; Mark 15:38; Luke 23:45; Hebrews 6:19; 9:3; 10:19–20",
      "Mishnah Yoma 5:1; Shekalim 8:5",
      "Josephus, War 5.212–214, 219"
    ],
    note: "Whether there were one or two veils is disputed: the Torah and the Gospels speak of a single veil, the Mishnah of two with a cubit between. The Mishnaic double veil is modelled and the single-veil reading is noted. On colour: Exodus prescribes blue (tekhelet, a violet-blue from the murex snail), purple (argaman, a red-purple from the same shellfish family), scarlet (shani, from the kermes insect) and white twined linen; Josephus assigns them to the four elements, and the Mishnah says the veil was woven of seventy-two strands, each of twenty-four threads. Those four colours are modelled here rather than the plain crimson of many popular reconstructions. On pattern the sources differ by curtain: Exodus and 2 Chronicles 3:14 give the inner veil cherubim of cunning work, while Josephus says the curtain hung before the sanctuary door bore a panorama of the heavens and no animal figures at all — so the veils are woven with cherubim medallions and the doorway curtain with the starry heavens."
  },
  holyofholies: {
    title: "The Holy of Holies",
    sub: "Devir — twenty cubits square, and empty",
    body: `The innermost chamber measured twenty cubits square and rose the full height of the house, its walls gold-plated, entered by one man on one day of the year. Since the Ark had been lost with the first temple, the Second Temple's Holy of Holies stood empty: Josephus states flatly that in it there was nothing at all, and the Mishnah, calling it the House of the Kapporet, describes the high priest setting his censer and sprinkling the blood before the place where the Ark had been. Pompey entered it in 63 BCE and found it empty; Hebrews 9:7 notes that the high priest entered only once a year, and only with the blood of sacrifice.`,
    sources: [
      "Mishnah Yoma 5:1–4; Middot 4:5",
      "Josephus, War 5.219; Antiquities 14.71–72",
      "Leviticus 16; Hebrews 9:3–8"
    ],
    note: "Solomon's inner sanctuary was a cube of twenty cubits (1 Kings 6:20); Middot's Second Temple plan gives the same footprint but the hekhal's full forty-cubit interior height, which is what is modelled. This reconstruction follows the empty-chamber accounts in Josephus and the Mishnah. Later traditions differ, including traditions about hidden vessels or a copy of the Torah."
  },
  rock: {
    title: "The Foundation Stone",
    sub: "Even ha-Shetiyah — the rock within the Holy of Holies",
    body: `The Mishnah says that in the Second Temple a stone stood in the Holy of Holies, three fingerbreadths above the floor, on which the high priest set the censer on the Day of Atonement, and calls it the Foundation Stone — the point, in later tradition, from which the world was founded. A prominent reconstruction identifies it with the bedrock outcrop now enclosed by the Dome of the Rock, though the sanctuary's exact position on the platform is disputed. Later Jewish and Christian tradition separately connects the temple site with the summit of Mount Moriah, the threshing floor of Araunah bought by David, and the binding of Isaac — related but distinct identifications.`,
    sources: [
      "Mishnah Yoma 5:2; Middot 4:5",
      "Babylonian Talmud, Yoma 54b; Sanhedrin 26b",
      "2 Samuel 24:18–25; 2 Chronicles 3:1; Genesis 22:2"
    ],
    note: "On its height: Yoma 5:2 has the stone standing three fingerbreadths — a few centimetres — above the floor, while the outcrop under the Dome of the Rock rises well over a metre above its surroundings. The model shows it as low bedrock breaking the floor, higher than the Mishnah's three fingerbreadths and lower than the bare outcrop, since reconciling the two requires assuming the Herodian builders cut the rock down to a floor. The alignment of the rock with the temple plan is the central dispute in Temple Mount studies. An influential reconstruction — followed here — places the rock in the Holy of Holies; the main alternatives set it under the altar of burnt offering, or locate the temple further north or south of the present Dome. Its connections with Mount Moriah, Araunah's threshing floor and the binding of Isaac are related but textually distinct identifications, not a single settled chain of evidence."
  },
  cells: {
    title: "The Side Chambers",
    sub: "Three storeys of cells around the house",
    body: `The Holy Place and the Holy of Holies were wrapped on north, west and south by three storeys of small chambers, thirty-eight in all according to the Mishnah, entered from one another and from a spiral stair at the north-east corner that also gave access to the roof. Their walls thicken the silhouette of the sanctuary and their beams are let into set-backs in the temple wall, as in Solomon's house, so that nothing pierced the sanctuary masonry itself.`,
    sources: ["Mishnah Middot 4:3–5", "1 Kings 6:5–10"],
    note: "Josephus gives a different arrangement of chambers and a different total; Middot's thirty-eight cells in three storeys are modelled."
  },
  olives: {
    title: "The Mount of Olives",
    sub: "The ridge east of the city, above the Kidron",
    body: `The Olivet ridge rises some seventy-five metres higher than the temple platform, so that anyone standing on it looked down into the courts — which is why Jesus sat there to speak of the temple's destruction, and why the Mishnah has the priest burning the red heifer on it in full view of the sanctuary door. Its lower slopes were terraced with olive groves and oil presses; Gethsemane means "oil press". Bethany and Bethphage lay on the eastern flank, the road to Jericho beneath. Jesus lodged there nightly during the last week, and the ascension is set on the same ridge, "a sabbath day's journey" from the city.`,
    sources: ["Mishnah Parah 3:6-11; Middot 1:3; 2:4", "Josephus, War 5.70, 504", "Luke 21:37; 22:39; Acts 1:12"],
    note: "The summit's exact height and the extent of first-century cultivation are reconstructed; the sightline from the ridge to the sanctuary door is fixed by the Mishnah's red-heifer procedure."
  },
  kidron: {
    title: "The Kidron Valley",
    sub: "The ravine between the temple and Olivet",
    body: `The Kidron falls steeply along the eastern wall, so that the platform's south-east angle stood a dizzying height above the valley floor — Josephus says the view down from the Royal Stoa made the head swim. The valley carried the blood and refuse of the sacrifices away from the altar drains, and the ash and idols of reforming kings were burned in it. David crossed it in flight from Absalom; Jesus crossed it to Gethsemane on the night of the betrayal.`,
    sources: ["Josephus, War 5.185, 190; Antiquities 15.412", "2 Samuel 15:23; 2 Kings 23:4-6; John 18:1"],
    note: "The valley floor lay several metres lower in antiquity than today; centuries of silt and debris have raised it."
  },
  cityofdavid: {
    title: "The City of David",
    sub: "The Lower City, on the spur south of the temple",
    body: `The oldest Jerusalem occupied the narrow spur running south from the Mount between the Kidron and the Tyropoeon, taken by David from the Jebusites and watered by the Gihon spring. By Herod's day this was the crowded Lower City, its flat-roofed houses stepping down the slope in terraces to the Pool of Siloam at the point of the spur. The Ophel, between it and the temple, held administrative buildings; the pilgrim road ran up from Siloam to the southern stairs.`,
    sources: ["2 Samuel 5:6-9; 1 Kings 1:33-40", "Josephus, War 5.136-141"],
    note: "Josephus calls the Lower City the Akra; the identification of his terms with the archaeological spur is debated in detail but not in outline."
  },
  siloam: {
    title: "The Pool of Siloam",
    sub: "At the foot of the city, fed by Hezekiah's tunnel",
    body: `Hezekiah's tunnel brought the Gihon spring under the spur to a pool at its southern end, so that the city's water lay inside the walls. In the Herodian period it was a large stepped pool; the excavated flights descend in broad tiers, and the excavators reconstruct a colonnaded portico along at least one side. Pilgrims gathered and may have purified themselves in the Siloam area before ascending to the temple — numerous ritual baths on the southern approach provide firmer evidence for immersion than the large pool itself — and water was drawn from it in procession for the libation at the feast of Tabernacles. Jesus sent the man born blind to wash in it, and John pauses to translate the name: "Sent".`,
    sources: ["2 Kings 20:20; 2 Chronicles 32:30; Isaiah 8:6; John 9:7", "Mishnah Sukkah 4:9 (the water drawing)"],
    note: "The pool's full Herodian extent is still being excavated; the size modelled here follows the published stepped pool."
  },
  uppercity: {
    title: "The Upper City",
    sub: "The western hill: palaces, mansions, the Xystus",
    body: `Across the Tyropoeon rose the western hill, higher than the temple platform, where the priestly aristocracy and the Herodian court lived in peristyle mansions with frescoed walls and mosaic floors — the excavated Burnt House and Palatial Mansion belong to this quarter. At its north-west corner stood Herod's palace, defended by three enormous towers, Phasael, Hippicus and Mariamne; nearby lay the Xystus, a colonnaded plaza, and the council house. A bridge on arches carried the street from here directly to the temple's western gate. The high priest's house, where Jesus was taken by night, stood in this quarter, and Herod's palace is one of the two candidates for Pilate's praetorium.`,
    sources: [
      "Josephus, War 5.136-183 (the two hills); 5.161-175 (the three towers); 2.344 (the Xystus); Antiquities 15.318",
      "Mark 14:53-54; Matthew 27:27; John 19:13"
    ],
    note: "Whether the praetorium was Herod's palace or the Antonia is disputed; the palace is an influential view among historians of the trial, the Antonia the older tradition of the Via Dolorosa."
  },
  bezetha: {
    title: "Bezetha, the New City",
    sub: "The northern quarter, beyond the second wall",
    body: `North of the temple the ground rises into the quarter Josephus calls Bezetha, the "New City", a suburb that had outgrown the second wall and was only enclosed later by Agrippa's third wall. It held the timber and wool markets, the sheep pool, and — outside the wall — quarries and rock-cut tombs. Because it lay outside the sacred and residential core, executions took place on this side of the city.`,
    sources: ["Josephus, War 5.148-155 (Bezetha and the third wall); 5.331 (the wool and timber markets)", "John 19:20; Hebrews 13:12"],
    note: "The line of the second wall is the least certain feature of first-century Jerusalem; the course modelled here is the common reconstruction that leaves Golgotha outside it."
  },
  golgotha: {
    title: "Golgotha",
    sub: "The place of a skull, outside the wall",
    body: `An abandoned quarry outside the second wall on the north-west, its rock face left standing as a knoll — "the place of a skull" — beside the road, with rock-cut tombs in the quarry walls close by. The Gospels have him led out of the city to the place, John notes it was "nigh to the city" and by a thoroughfare, and Hebrews turns that "without the gate" into theology. John notes a garden and a new tomb "in the place where he was crucified", nigh at hand.`,
    sources: [
      "Matthew 27:33; Mark 15:22; Luke 23:33; John 19:17-20, 41-42; Hebrews 13:12",
      "Josephus, War 5.146-148 (the second wall)"
    ],
    note: "The traditional site under the Church of the Holy Sepulchre fits the requirement of quarry, tombs and a position outside the second wall; the Garden Tomb north of the Damascus Gate is the main alternative. The quarry knoll is modelled in the traditional position."
  },
  bethesda: {
    title: "The Pool of Bethesda",
    sub: "By the sheep market, with five porches",
    body: `North of the temple, just outside the wall by the sheep gate, lay a double reservoir divided by a central dam and surrounded by colonnades — four porticoes around the two pools and a fifth on the dam between them, exactly the "five porches" of John 5. Excavation found the twin pools and, later, healing shrines beside them. Here Jesus healed the man who had been sick thirty-eight years, on a sabbath, and told him to take up his bed and walk.`,
    sources: ["John 5:1-9", "Nehemiah 3:1 (the sheep gate)"],
    note: "The five-porch arrangement was long thought symbolic until the twin pools with a central dam were excavated; that reading is followed here."
  },
  hinnom: {
    title: "The Valley of Hinnom",
    sub: "Gehenna, closing the city on the south",
    body: `The Hinnom curves around the southern and western sides of the city and joins the Kidron below Siloam. Under Ahaz and Manasseh children were burned there to Molech, and Josiah defiled the place to end the practice; Jeremiah prophesied against it as the valley of slaughter. By the first century its name, Ge-Hinnom, had become the ordinary word for the place of final judgment — the "hell fire" of the Gospels.`,
    sources: [
      "2 Kings 23:10; 2 Chronicles 28:3 (Ahaz); 33:6 (Manasseh); Jeremiah 7:31-32; 19:1-6; Matthew 5:22; Mark 9:43-48"
    ],
    note: "The tradition that the valley served as the city's burning rubbish tip is medieval, not ancient; the biblical basis for its name is the child sacrifice condemned by the prophets."
  },
  shushan: {
    title: "The Shushan Gate",
    sub: "The eastern gate of the Mount",
    body: `The Mishnah names five gates of the Temple Mount, and the eastern one it calls Shushan — Susa — because, tradition says, a likeness of the Persian capital was carved on it in memory of the return from exile. Through this gate the priest led the red heifer out to be burned on the Mount of Olives, and by it, tradition holds, the scapegoat was led away on the Day of Atonement — though the Mishnah's account of that rite names no gate. It faced directly across the Kidron to the Olivet ridge, so that a priest standing at the altar could see the summit; the same alignment governs the procession described in the Mishnah.`,
    sources: ["Mishnah Middot 1:3; 2:4; Parah 3:6; Yoma 6:4-6", "Babylonian Talmud, Menachot 98a (the likeness of Shushan)", "Numbers 19; Leviticus 16:20-22"],
    note: "Whether the standing Golden Gate — Byzantine or early Islamic in its present form — sits on the Shushan Gate's foundations is disputed; only the general position in the eastern wall is agreed. It was, however, the only gate in that wall: the Kidron drops away too sharply on this side for a street, so the gate stands in the thickness of the wall with nothing built out over the valley."
  },
  tadi: {
    title: "The Tadi Gate",
    sub: "The northern gate",
    body: `The northern gate, called Tadi, is described by the Mishnah as not serving for ordinary entry. Its lintel, it says, was not arched but formed of two stones leaning against one another. It was used chiefly by priests who had become ritually unfit during the night and had to leave the precinct discreetly, passing out through the north. The Antonia's stairs came down to the porticoes not far from it.`,
    sources: ["Mishnah Middot 1:3; 1:9 (the winding passage to the Tadi gate); 2:3 (its lintel)", "Josephus, War 5.238-245 (the Antonia stairs nearby)"],
    note: "The Tadi Gate's exact position along the northern wall is unknown; a central position is modelled."
  },
  kiponus: {
    title: "The Western Gates",
    sub: "Kiponus, Wilson's Arch, Barclay's Gate, Robinson's Arch",
    body: `The western wall carried the busiest approaches, because the city lay on that side. The Mishnah names the Kiponus Gate on the west; Josephus describes four gates in the western wall — one leading over a bridge to the royal palace on the upper city, others down by many steps to the ravine and up again into the town. The surviving remains match him: the springing of a great viaduct (Wilson's Arch) that carried a street across the Tyropoeon valley, a low gate with a huge lintel (Barclay's Gate), and at the south-west corner the pier of Robinson's Arch, which carried a monumental stair rising from the paved street below to the Royal Stoa above.`,
    sources: ["Mishnah Middot 1:3", "Josephus, Antiquities 15.410; War 5.184-185"],
    note: "The arch names are those of nineteenth-century explorers, not ancient ones; matching each surviving feature to Josephus' four gates is still argued."
  },
  huldah: {
    title: "The Southern Stairs and the Huldah Gates",
    sub: "The pilgrims' entrance",
    body: `The main pilgrim approach was from the south: a monumental staircase of thirty steps, some 64 m wide, with treads of alternating width — one stride, then two — designed, it is often argued, to slow the ascent to a deliberate pace. It led to a double gate and a triple gate opening in the wall itself, whose vaulted passages ramped up through the platform and emerged inside the Royal Stoa. Ritual baths crowd the street below the stairs, where pilgrims immersed before entering. Most of those who came up at Passover, including the crowds of the Gospels, entered here — and the beggars sat on these steps: John 9 opens as Jesus passes out of the temple and sees the man born blind, whom he sends down to Siloam to wash.`,
    sources: [
      "Mishnah Middot 1:3 (gates of the Mount)",
      "Josephus, Antiquities 15.410–416",
      "Benjamin Mazar's Temple Mount excavations, 1968–78; Leen Ritmeyer, The Quest (2006)"
    ],
    note: "The gate positions and the stair plan come from excavation south of the Mount; the superstructure is reconstructed. The name is disputed as well: Middot 1:3 names two Huldah gates in the older 500-cubit enclosure, and Ritmeyer argues that the Herodian Double and Triple Gates excavated here are not those gates at all — their ancient names are simply unknown. The usage is kept here because it is the one nearly every commentary and guidebook uses."
  },
  antonia: {
    title: "The Fortress of Antonia",
    sub: "The Roman garrison at the north-west corner",
    body: `Herod rebuilt the citadel at the north-west angle and named it for Mark Antony: a tower-fortress on a rock scarp, with stairs down into the temple porticoes so that troops could reach the courts quickly during the feasts. That arrangement explains Acts 21:31–40, where the chief captain runs down with soldiers to rescue Paul from the crowd and Paul addresses the people from the stairs. Josephus says the fortress dominated the temple like an acropolis.`,
    sources: ["Josephus, War 5.238–247; Antiquities 18.91–95", "Acts 21:31–40; 22:24"],
    note: "The size and plan of the Antonia are debated — a modest fort at the north-west corner is an influential reconstruction, against older proposals of a vast fortress occupying the whole northern platform. No complete ancient plan survives; many popular models exaggerate its scale, and the footprint, height and tower arrangement shown here remain reconstructed."
  }
};

export const TOUR = [
  "mount", "uppercity", "cityofdavid", "bezetha", "kidron", "olives", "siloam", "bethesda", "golgotha", "hinnom",
  "huldah", "kiponus", "shushan", "tadi", "pool_of_israel", "royalstoa", "gentiles", "porticoes", "solomons", "antonia",
  "soreg", "chel", "beautiful", "women", "chambers", "nicanor", "israel",
  "priests", "slaughter", "altar", "ramp", "laver", "steps12", "facade", "vine",
  "hekhal", "menorah", "shewbread", "incense", "veil", "holyofholies", "rock", "cells", "walls"
];

export const GROUPS = [
  { name: "The Mount and its Walls", ids: ["mount", "walls", "huldah", "kiponus", "shushan", "tadi", "pool_of_israel", "antonia"] },
  { name: "The City and its Hills", ids: ["uppercity", "cityofdavid", "bezetha", "kidron", "olives", "siloam", "bethesda", "golgotha", "hinnom"] },
  { name: "Outer Court", ids: ["gentiles", "royalstoa", "porticoes", "solomons", "soreg", "chel"] },
  { name: "Court of the Women", ids: ["beautiful", "women", "chambers", "nicanor"] },
  { name: "Inner Court", ids: ["israel", "priests", "altar", "ramp", "laver", "slaughter", "steps12"] },
  { name: "The House", ids: ["facade", "vine", "cells", "hekhal", "menorah", "shewbread", "incense"] },
  { name: "Within the Veil", ids: ["veil", "holyofholies", "rock"] }
];


// Scripture passages for each location, paraphrased in the author's own words and cited by reference — not quoted verbatim from any translation.
export const VERSES = {
  mount: [
    { ref: "Mark 13:1-2", text: "A disciple marvels at the temple's great stones and buildings; Jesus replies that not one stone will be left standing on another." },
    { ref: "John 2:20", text: "The Jews object that the temple took forty-six years to build, doubting he can raise it again in three days." },
    { ref: "Psalm 48:1-2", text: "The psalm praises God as great in the city of our God, and calls Zion, his holy mountain, beautiful and the joy of the whole earth." }
  ],
  walls: [
    { ref: "Psalm 48:12-13", text: "The psalmist calls the reader to walk about Zion, count her towers, and consider her ramparts and palaces." },
    { ref: "Luke 21:5-6", text: "Onlookers admire the temple's fine stones and gifts; Jesus foretells that not one stone will be left on another." }
  ],
  huldah: [
    { ref: "Psalm 122:1-2", text: "The psalmist rejoices at the invitation to go up to the house of the LORD, and to stand within Jerusalem's gates." },
    { ref: "Luke 2:41-42", text: "Jesus' parents go up to Jerusalem every year at Passover; at twelve he goes up with them as custom required." }
  ],
  kiponus: [
    { ref: "1 Chronicles 26:16", text: "The lot for the Shallecheth gate, on the causeway going up, falls to Shuppim and Hosah." }
  ],
  shushan: [
    { ref: "Numbers 19:2-3", text: "Moses is told to have a red heifer brought and given to Eleazar the priest, to be led outside the camp." },
    { ref: "Ezekiel 44:1-2", text: "The prophet is brought back to the shut outer east gate and told it is to remain shut." }
  ],
  tadi: [
    { ref: "Ezekiel 40:20", text: "The prophet measures the length and breadth of the north gate of the outer court." }
  ],
  antonia: [
    { ref: "Acts 21:31-32", text: "Word reaches the Roman commander that Jerusalem is in an uproar; he runs down with soldiers to intervene." },
    { ref: "Acts 21:40", text: "Given leave, Paul stands on the stairs, quiets the crowd with a gesture, and addresses them in Hebrew." }
  ],
  royalstoa: [
    { ref: "Matthew 21:12-13", text: "Jesus enters the temple, drives out the buyers and sellers, overturns the money-changers' tables, and calls the house of prayer a den of thieves." },
    { ref: "John 2:15", text: "He makes a whip of cords, drives out the sheep and oxen, and pours out the changers' money." }
  ],
  porticoes: [
    { ref: "Luke 2:46-47", text: "After three days his parents find the boy Jesus in the temple among the teachers, astonishing them with his understanding and answers." },
    { ref: "Luke 19:47", text: "He teaches daily in the temple while the chief priests and scribes seek to destroy him." }
  ],
  solomons: [
    { ref: "John 10:22-23", text: "At the winter Feast of Dedication, Jesus walks in the temple in Solomon's porch." },
    { ref: "Acts 3:11", text: "The healed man clings to Peter and John, and a crowd gathers around them in Solomon's porch." },
    { ref: "Acts 5:12", text: "Many signs and wonders are done among the people by the apostles in Solomon's porch." }
  ],
  gentiles: [
    { ref: "Mark 11:17", text: "Jesus asks whether the house was meant to be a house of prayer for all nations, calling it instead a den of thieves." },
    { ref: "Isaiah 56:7", text: "The prophet promises that God's house will be called a house of prayer for all peoples." }
  ],
  soreg: [
    { ref: "Ephesians 2:14", text: "Paul writes that Christ has broken down the dividing wall of hostility between Jew and Gentile." },
    { ref: "Acts 21:28", text: "A crowd accuses Paul of defiling the temple by bringing Greeks into it." }
  ],
  chel: [
    { ref: "Psalm 24:3-4", text: "The psalm asks who may ascend the LORD's hill and stand in his holy place, answering: the one with clean hands and a pure heart." },
    { ref: "Psalm 84:7", text: "Pilgrims go from strength to strength until each appears before God in Zion." }
  ],
  beautiful: [
    { ref: "Acts 3:2", text: "A man lame from birth is laid daily at the temple's Beautiful Gate to beg." },
    { ref: "Acts 3:6-8", text: "Peter tells him he has no silver or gold but heals him in Jesus' name; the man leaps up, walks, and enters the temple praising God." }
  ],
  women: [
    { ref: "Mark 12:41-44", text: "Jesus watches people give at the treasury and praises a poor widow's two small coins above the larger gifts of the rich." },
    { ref: "Luke 2:36-38", text: "The prophetess Anna, who never leaves the temple, worships there with fasting and prayer." }
  ],
  chambers: [
    { ref: "Acts 21:23-24", text: "Paul is asked to join four men under a vow and pay their expenses so they can shave their heads." },
    { ref: "Numbers 6:18", text: "The Nazirite shaves his head at the tabernacle door and puts the hair into the fire under the peace offering." }
  ],
  nicanor: [
    { ref: "Luke 2:22-24", text: "After the days of purification, Mary and Joseph bring the infant Jesus to Jerusalem to present him and offer a pair of turtledoves or two young pigeons, as the law required." },
    { ref: "Psalm 121:1-2", text: "The psalmist lifts his eyes to the hills, finding help from the LORD who made heaven and earth." }
  ],
  israel: [
    { ref: "Luke 18:11-13", text: "The Pharisee thanks God he is not like other men; the tax collector, standing at a distance, will not lift his eyes and asks only for mercy as a sinner." },
    { ref: "Leviticus 1:3-4", text: "An unblemished male animal is brought to the tabernacle door as a burnt offering; the offerer lays a hand on its head so it will be accepted to make atonement." }
  ],
  priests: [
    { ref: "Luke 1:8-11", text: "Serving his priestly turn, Zacharias is chosen to burn incense while the people pray outside; an angel appears beside the incense altar." },
    { ref: "Numbers 6:24-26", text: "The priestly blessing: the LORD bless and keep you, make his face shine on you, and give you peace." }
  ],
  altar: [
    { ref: "Exodus 20:25", text: "An altar of stone is not to be built of hewn stone, since a tool raised on it defiles it." },
    { ref: "Leviticus 6:12-13", text: "The fire on the altar is to be kept burning continually and never allowed to go out." },
    { ref: "Hebrews 13:10-12", text: "The writer speaks of an altar, and notes that Jesus suffered outside the gate to sanctify the people with his own blood." }
  ],
  ramp: [
    { ref: "Exodus 20:26", text: "No steps are to lead up to the altar, so that no one's nakedness is exposed on it." }
  ],
  laver: [
    { ref: "Exodus 30:19-20", text: "Aaron and his sons wash their hands and feet before entering the tabernacle, so that they do not die." },
    { ref: "Titus 3:5", text: "Salvation comes not by our own righteous works but by God's mercy, through the washing of rebirth and renewal by the Spirit." }
  ],
  slaughter: [
    { ref: "Leviticus 1:11", text: "The offering is killed on the north side of the altar, and its blood is sprinkled around the altar by the priests." },
    { ref: "Isaiah 53:7", text: "The suffering servant is oppressed and silent, led like a lamb to slaughter." }
  ],
  steps12: [
    { ref: "Psalm 122:3-4", text: "Jerusalem stands built as a city knit together, where the tribes go up to give thanks to the LORD's name." }
  ],
  facade: [
    { ref: "Psalm 27:4", text: "The psalmist's one desire is to dwell in the LORD's house and gaze on his beauty." },
    { ref: "Haggai 2:9", text: "The LORD promises that the glory of the new house will exceed that of the former, and that he will give peace there." }
  ],
  vine: [
    { ref: "John 15:1, 5", text: "Jesus calls himself the true vine and his followers the branches, saying that apart from him they can do nothing." },
    { ref: "Psalm 80:8", text: "God is pictured bringing a vine out of Egypt and planting it after driving out the nations." }
  ],
  cells: [
    { ref: "1 Kings 6:5-6", text: "Solomon builds side chambers around the temple's walls, each story wider than the one below." }
  ],
  hekhal: [
    { ref: "Hebrews 9:2", text: "The first tabernacle chamber, called the sanctuary, holds the lampstand, the table and the bread." },
    { ref: "1 Kings 6:21-22", text: "Solomon overlays the whole house, inside and out, with pure gold." }
  ],
  menorah: [
    { ref: "Exodus 25:31-32", text: "A lampstand of pure beaten gold is to be made, with a central shaft and six branches, three to each side." },
    { ref: "Leviticus 24:2-3", text: "Pure olive oil is brought for the lamps so they burn continually before the LORD from evening to morning." },
    { ref: "Revelation 1:20", text: "The seven lampstands are identified as the seven churches." }
  ],
  shewbread: [
    { ref: "Leviticus 24:5-6", text: "Twelve loaves of fine flour are baked and set in two rows on the pure table before the LORD." },
    { ref: "Matthew 12:3-4", text: "Jesus recalls how David and his men ate the consecrated bread reserved for priests." }
  ],
  incense: [
    { ref: "Exodus 30:1, 7-8", text: "An altar for burning incense is made, and Aaron burns sweet incense on it every morning and evening." },
    { ref: "Psalm 141:2", text: "The psalmist asks that his prayer rise like incense and his lifted hands like the evening sacrifice." },
    { ref: "Revelation 8:3", text: "An angel with a golden censer offers incense with the prayers of the saints at the golden altar before the throne." }
  ],
  veil: [
    { ref: "Exodus 26:31", text: "A finely woven veil of blue, purple and scarlet, worked with cherubim, is to be made." },
    { ref: "Matthew 27:50-51", text: "At Jesus' death the temple veil is torn in two from top to bottom, and the earth quakes." },
    { ref: "Hebrews 10:19-20", text: "Believers are said to have confidence to enter the holy place through the new way Jesus opened through the veil, that is, his body." }
  ],
  holyofholies: [
    { ref: "Leviticus 16:2", text: "Aaron is warned not to enter the holy place behind the veil at will, so that he does not die." },
    { ref: "Hebrews 9:3-4, 7", text: "Beyond the second veil lay the Holiest of All, entered only once a year by the high priest alone, with blood offered for himself and the people." },
    { ref: "1 Kings 8:10-11", text: "A cloud fills the LORD's house so thickly that the priests cannot stand to minister, for his glory fills it." }
  ],
  rock: [
    { ref: "2 Chronicles 3:1", text: "Solomon begins building on Mount Moriah, on the site David prepared at the threshing floor of Ornan." },
    { ref: "Genesis 22:2", text: "Abraham is told to take Isaac to the land of Moriah and offer him there." },
    { ref: "2 Samuel 24:24-25", text: "David buys the threshing floor for fifty shekels of silver and builds an altar there." }
  ]
};


// Further passages tied to each place — narratives that happened there, and the
// prophetic and epistolary texts that read the place theologically. All passages are
// paraphrased in the author's own words and cited by reference rather than quoted
// verbatim from any modern translation.
const MORE = {
  olives: [
    { ref: "Luke 22:39-44", text: "Jesus goes to the Mount of Olives as usual and prays in agony there, his sweat like drops of blood." },
    { ref: "Zechariah 14:4", text: "The LORD's feet are pictured standing on the Mount of Olives, which splits in two." },
    { ref: "Acts 1:11-12", text: "Two men ask the disciples why they stand gazing at the sky; the disciples then return to Jerusalem from Olivet, a sabbath day's journey away." },
    { ref: "Luke 19:41-42", text: "Jesus weeps over the city as he approaches, grieving that it does not recognize what would bring it peace." }
  ],
  kidron: [
    { ref: "John 18:1", text: "Jesus crosses the Kidron valley with his disciples to a garden." },
    { ref: "2 Samuel 15:23", text: "The people weep as David and his company cross the brook Kidron." },
    { ref: "2 Kings 23:6", text: "Josiah removes the Asherah pole from the temple, burns it at the Kidron, and grinds it to powder." }
  ],
  cityofdavid: [
    { ref: "2 Samuel 5:7-9", text: "David takes the stronghold of Zion, calls it the City of David, and settles there." },
    { ref: "Luke 2:4, 11", text: "Joseph goes up to Bethlehem, the city of David, where Jesus, the promised Savior, is born." }
  ],
  siloam: [
    { ref: "John 9:7", text: "Jesus sends a blind man to wash in the pool of Siloam, and he returns able to see." },
    { ref: "Isaiah 8:6", text: "The prophet rebukes the people for rejecting the gently flowing waters of Shiloah." },
    { ref: "Luke 13:4", text: "Jesus asks whether those killed when the tower in Siloam fell were greater sinners than anyone else in Jerusalem." },
    { ref: "2 Kings 20:20", text: "Hezekiah's works, including the pool and conduit that brought water into the city, are recorded in the chronicles." }
  ],
  uppercity: [
    { ref: "Mark 14:53-54", text: "Jesus is led to the high priest, where the leaders assemble, and Peter follows at a distance into the courtyard." },
    { ref: "Luke 22:54-62", text: "Peter follows Jesus into the high priest's house, three times denies knowing him, and weeps bitterly when the rooster crows." },
    { ref: "John 19:13", text: "Pilate brings Jesus out and sits down to judge at the place called the Pavement." }
  ],
  bezetha: [
    { ref: "Nehemiah 3:1", text: "The high priest and the priests rebuild and consecrate the Sheep Gate." },
    { ref: "Hebrews 13:12-13", text: "Jesus suffers outside the city gate, and believers are urged to go out to him, bearing his disgrace." }
  ],
  golgotha: [
    { ref: "John 19:17-20", text: "Jesus carries his own cross to the place called the Skull, Golgotha, where he is crucified beneath a sign written in three languages." },
    { ref: "Matthew 27:33, 45", text: "He is brought to Golgotha, and from noon until three darkness covers the land." },
    { ref: "John 19:41-42", text: "Because it is nearby, Jesus is laid in a new, unused tomb in a garden at the crucifixion site." }
  ],
  bethesda: [
    { ref: "John 5:2-9", text: "At the five-porched pool called Bethesda, Jesus heals a long-disabled man, telling him to rise, take his mat, and walk." }
  ],
  hinnom: [
    { ref: "Jeremiah 19:2, 6", text: "The prophet is sent to the valley of the son of Hinnom and told it will be renamed the Valley of Slaughter." },
    { ref: "2 Kings 23:10", text: "Josiah defiles Topheth in the valley so that no one can sacrifice a child there to Molech again." },
    { ref: "Matthew 5:22", text: "Jesus warns that anger and contempt toward a brother risk the judgment." }
  ],
  mount: [
    { ref: "Isaiah 2:2-3", text: "In the last days the LORD's house will be exalted above every mountain, and all nations will stream to it for instruction." },
    { ref: "Matthew 24:1-2", text: "Jesus points out the temple buildings and predicts that not one stone will remain on another." },
    { ref: "Malachi 3:1", text: "God promises to send a messenger to prepare the way before the Lord comes suddenly to his temple." }
  ],
  walls: [
    { ref: "Matthew 4:5-7", text: "The devil sets Jesus on the temple's pinnacle, urging him to test God by jumping; Jesus refuses." },
    { ref: "Luke 4:9-12", text: "The same temptation, set on the temple's pinnacle, appears in Luke's account." }
  ],
  huldah: [
    { ref: "John 9:1-7", text: "Jesus heals a man born blind, denying the man's blindness was caused by anyone's sin, then sends him to wash at Siloam." },
    { ref: "John 9:34-38", text: "The healed man is thrown out by the authorities but finds Jesus again and worships him as the Son of God." },
    { ref: "Acts 2:41", text: "About three thousand are baptized after Peter's sermon on Pentecost." },
    { ref: "Psalm 84:1-2", text: "The psalmist's soul longs and faints for the courts of the LORD." }
  ],
  royalstoa: [
    { ref: "John 8:2-11", text: "Scribes and Pharisees bring a woman caught in adultery to Jesus in the temple; he tells her accusers that whoever is without sin may cast the first stone, then tells her to go and sin no more." },
    { ref: "Zechariah 14:21", text: "Every vessel in Jerusalem and Judah will be holy, and no trader will again be found in the LORD's house." }
  ],
  porticoes: [
    { ref: "John 7:14", text: "Midway through the feast, Jesus goes up to the temple and teaches." },
    { ref: "Luke 21:37-38", text: "He teaches in the temple by day and spends nights on the Mount of Olives, while crowds gather early each morning to hear him." },
    { ref: "Acts 5:20-21", text: "An angel tells the apostles to go stand in the temple and speak, and at daybreak they do." }
  ],
  gentiles: [
    { ref: "Luke 19:45-46", text: "Jesus enters the temple and drives out the sellers, calling the house one of prayer rather than a den of thieves." },
    { ref: "1 Kings 8:41-43", text: "Solomon prays that even a foreigner who comes seeking God's name will be heard from heaven." }
  ],
  women: [
    { ref: "John 8:12, 20", text: "Jesus declares himself the light of the world while teaching in the temple treasury, and no one lays a hand on him because his time has not come." },
    { ref: "John 7:37-38", text: "On the last day of the feast, Jesus cries out that whoever believes in him will have rivers of living water flowing from within." },
    { ref: "Luke 21:1-4", text: "Jesus watches the rich give large gifts at the treasury and praises a poor widow's two small coins as greater in proportion." }
  ],
  nicanor: [
    { ref: "Luke 2:25-32", text: "Simeon, led by the Spirit into the temple, takes the infant Jesus and blesses God, saying he can now depart in peace, having seen the promised salvation and light for the Gentiles." }
  ],
  priests: [
    { ref: "Luke 1:21-23", text: "The people wonder at Zacharias' long delay in the temple; he comes out unable to speak, and they realize he has seen a vision." },
    { ref: "2 Chronicles 7:1-2", text: "When Solomon finishes praying, fire falls from heaven to consume the offerings, and the LORD's glory fills the house." }
  ],
  altar: [
    { ref: "Matthew 5:23-24", text: "Jesus teaches that a worshiper who remembers a grievance should first be reconciled with his brother before offering a gift at the altar." },
    { ref: "Matthew 23:35", text: "Jesus charges his hearers with the guilt of righteous blood shed from Abel to Zacharias, killed between the temple and the altar." },
    { ref: "Romans 12:1", text: "Paul urges believers to offer their bodies as a living sacrifice, holy and acceptable to God." }
  ],
  ramp: [
    { ref: "Ezekiel 43:17 — Ezekiel's visionary altar, not the Herodian one", text: "The altar's ledge measures fourteen cubits square, with steps facing east." }
  ],
  laver: [
    { ref: "Psalm 26:6", text: "The psalmist washes his hands in innocence before approaching the altar." },
    { ref: "John 13:8-10", text: "Jesus tells Peter that unless he washes him, Peter has no share with him, and that one who is washed need only have his feet washed again." }
  ],
  slaughter: [
    { ref: "John 1:29", text: "John the Baptist calls Jesus the Lamb of God who takes away the sin of the world." },
    { ref: "Exodus 12:5-7", text: "The Passover lamb must be an unblemished male; its blood is struck on the doorposts and lintel." }
  ],
  steps12: [
    { ref: "Acts 3:1", text: "Peter and John go up to the temple together at the hour of prayer." },
    { ref: "Psalm 100:4", text: "Worshipers are called to enter God's gates with thanksgiving and his courts with praise." }
  ],
  facade: [
    { ref: "John 2:19-21", text: "Jesus tells his questioners that if the temple is destroyed he will raise it in three days, meaning the temple of his body." },
    { ref: "Ezekiel 43:4-5", text: "The glory of the LORD enters the house through the east gate and fills it." }
  ],
  hekhal: [
    { ref: "Hebrews 9:6", text: "The priests continually enter the outer tabernacle to carry out their service." },
    { ref: "1 Chronicles 28:11-12", text: "David gives Solomon the plans for the temple's porch, buildings, treasuries and the place for the mercy seat." }
  ],
  menorah: [
    { ref: "Zechariah 4:2-6", text: "The prophet sees a vision of a golden lampstand with seven lamps, and is told the work will be accomplished not by might or power but by God's Spirit." },
    { ref: "John 8:12", text: "Jesus again calls himself the light of the world." }
  ],
  shewbread: [
    { ref: "1 Samuel 21:6", text: "The priest gives David the only bread available, the consecrated bread taken from before the LORD." },
    { ref: "John 6:35", text: "Jesus calls himself the bread of life." }
  ],
  incense: [
    { ref: "Luke 1:9-10", text: "It falls to Zacharias by lot to burn incense in the temple while the people pray outside." },
    { ref: "Leviticus 16:12-13", text: "The high priest carries a censer of coals and incense behind the veil so its cloud covers the mercy seat." }
  ],
  veil: [
    { ref: "2 Chronicles 3:14", text: "Solomon makes the veil of blue, purple, crimson and fine linen, worked with cherubim." },
    { ref: "Mark 15:37-38", text: "At Jesus' death the temple veil is torn in two from top to bottom." },
    { ref: "Hebrews 6:19-20", text: "This hope is described as an anchor entering behind the veil, where Jesus has gone ahead as forerunner and high priest." }
  ],
  holyofholies: [
    { ref: "Leviticus 16:15-16", text: "The high priest kills the sin offering for the people and brings its blood behind the veil to sprinkle on and before the mercy seat." },
    { ref: "Hebrews 9:11-12", text: "Christ enters the holy place once for all, not with the blood of animals but his own, securing eternal redemption." },
    { ref: "Revelation 21:3", text: "A voice declares that God's dwelling is now with humanity, who will be his people." }
  ],
  rock: [
    { ref: "Isaiah 28:16", text: "God lays a tested, precious cornerstone in Zion; whoever trusts in it will not be shaken." },
    { ref: "1 Peter 2:6", text: "The same cornerstone image is applied to Christ, precious and unfailing to those who believe." },
    { ref: "Psalm 118:22", text: "The stone the builders rejected becomes the chief cornerstone." }
  ],
  cells: [
    { ref: "Jeremiah 35:2, 4", text: "The prophet is sent to bring the Rechabites into a chamber of the LORD's house." },
    { ref: "Nehemiah 13:4-5", text: "Eliashib, overseeing a temple storeroom, had prepared a large room once used for offerings and vessels for an ally of Tobiah." }
  ],
  chambers: [
    { ref: "Leviticus 14:10-11", text: "On the eighth day of cleansing, two unblemished male lambs are presented at the tabernacle door before the LORD." }
  ],
  antonia: [
    { ref: "Acts 22:24-25", text: "The commander orders Paul examined by flogging; Paul asks whether it is lawful to flog an uncondemned Roman citizen." },
    { ref: "Acts 23:10", text: "Fearing Paul will be torn apart in the dispute, the commander has soldiers bring him by force into the barracks." }
  ],
  soreg: [
    { ref: "Ephesians 2:18-19", text: "Through Christ both Jew and Gentile have access to the Father, and are no longer strangers but members of God's household." }
  ],
  beautiful: [
    { ref: "Acts 3:9-10", text: "The crowd recognizes the healed beggar from the temple's Beautiful Gate and is filled with amazement." },
    { ref: "Isaiah 35:6", text: "The prophet foresees the lame leaping and the mute singing as water breaks out in the wilderness." }
  ],
  israel: [
    { ref: "Psalm 51:16-17", text: "God does not delight in sacrifice itself but in a broken and contrite heart." }
  ],
  chel: [
    { ref: "Psalm 65:4", text: "Those God draws near to dwell in his courts are satisfied with the goodness of his house." }
  ],
  shushan: [
    { ref: "Hebrews 13:11-13", text: "Just as sacrificial bodies are burned outside the camp, Jesus suffered outside the gate, and believers are called to go out to him there." }
  ],
  solomons: [
    { ref: "John 10:24-28", text: "Pressed to say plainly whether he is the Christ, Jesus answers that his sheep hear his voice, know him, and will never perish." }
  ],
  vine: [
    { ref: "Isaiah 5:1-2", text: "The prophet sings of a beloved's vineyard planted with the choicest vines on fertile ground." }
  ],
  kiponus: [
    { ref: "Nehemiah 12:37", text: "The procession passes the Fountain Gate and goes up the stairs of the City of David to the Water Gate." }
  ],
  tadi: [
    { ref: "Deuteronomy 23:14", text: "Because the LORD walks in the camp, it is to be kept holy and free of anything unclean." }
  ]
};
Object.entries(MORE).forEach(([k, v]) => { VERSES[k] = (VERSES[k] || []).concat(v); });


// Guided sequences through the same stations.
export const PATHS = {
  full: { name: "Full tour", ids: TOUR },
  atonement: {
    name: "The Day of Atonement",
    ids: ["huldah", "women", "nicanor", "priests", "laver", "altar", "slaughter", "steps12", "facade", "hekhal", "incense", "veil", "holyofholies", "rock", "shushan", "olives"],
    notes: {
      huldah: "Before dawn on the tenth of Tishri the people crowd up the southern stairs; the high priest has not slept.",
      women: "The court fills. Everything that follows, the people will hear rather than see.",
      nicanor: "The high priest is led up the fifteen steps, having immersed and changed into white linen.",
      priests: "He confesses over the bullock, his hands on its head, and pronounces the Name.",
      laver: "Five immersions and ten washings of hands and feet mark the day's changes of vesture.",
      altar: "The bullock is slain, its blood caught and stirred so that it will not congeal.",
      slaughter: "The two goats stand at the north; lots are drawn — one for the LORD, one for Azazel.",
      steps12: "He takes a censer of coals from the altar and a handful of incense, and climbs.",
      facade: "Through the golden front, alone, while the court holds its breath.",
      hekhal: "Past the lampstand and the table, in the gold-walled silence.",
      incense: "He sets the incense on the coals; the cloud rises before he goes further.",
      veil: "He enters between the two curtains, walking the cubit of space to the north.",
      holyofholies: "Once a year, and only with sacrificial blood: he sprinkles seven times toward the place of the mercy seat.",
      rock: "The censer is set on the Foundation Stone, where the ark once stood.",
      shushan: "The scapegoat is led out by the eastern gate, bearing the iniquities away.",
      olives: "From the ridge the people watch it go into the wilderness, and the day is done."
    }
  },
  ascent: {
    name: "Into greater light",
    ids: ["gentiles", "soreg", "chel", "women", "nicanor", "israel", "priests", "altar", "facade", "hekhal", "veil", "holyofholies"],
    notes: {
      gentiles: "The outer court: open ground, open to all the earth. Anyone at all may stand here.",
      soreg: "The first line. The lattice and its Greek warning: from here, Israel only.",
      chel: "Twelve steps up. Every boundary in this house is also a rise in elevation.",
      women: "The court of the congregation — men and women of Israel together, at the treasury.",
      nicanor: "Fifteen steps and a bronze gate. Beyond it the ground belongs to the service.",
      israel: "Eleven cubits of standing room. The layman comes this far and no further.",
      priests: "The court of those who serve: from here in, only the sons of Aaron.",
      altar: "Fire, blood, and smoke — the whole apparatus of approach stands in the open air.",
      facade: "A hundred cubits of gold. The building itself is the next threshold.",
      hekhal: "Inside: lampstand, table, altar of incense. Light, bread, and prayer.",
      veil: "The last curtain. One cubit of space, and the priest walks it once a year.",
      holyofholies: "Empty, dark, and silent — the innermost room, entered by one man on one day with blood."
    }
  },
  passover: {
    name: "A Passover pilgrimage",
    ids: ["olives", "kidron", "siloam", "cityofdavid", "huldah", "royalstoa", "gentiles", "soreg", "chel", "beautiful", "women", "nicanor", "israel", "slaughter", "altar", "hekhal"],
    notes: {
      olives: "You come over the ridge with the Galilee road and see the house all at once, burning with gold.",
      kidron: "Down through the ravine, past the tombs, with the walls above you.",
      siloam: "At the pool you immerse, as everyone must who will go up.",
      cityofdavid: "Up the stepped street through the Lower City, a lamb with you.",
      huldah: "The great stairs: wide tread, narrow tread, so that no one runs at the house of God.",
      royalstoa: "Through the tunnel and out into the basilica — money changed, doves sold, voices everywhere.",
      gentiles: "The open court. Anyone at all may stand here.",
      soreg: "The lattice, and the Greek inscription warning foreigners not to pass.",
      chel: "Twelve steps to the terrace: from here, only Israel.",
      beautiful: "Through the eastern gate, where the lame man sits for alms.",
      women: "The court of assembly, the treasury chests along the wall.",
      nicanor: "The Levites are singing on the fifteen steps; the bronze gate stands open.",
      israel: "Eleven cubits: you lay your hands on the lamb's head, and no further.",
      slaughter: "You kill it yourself; a priest catches the blood and passes the basin along the line.",
      altar: "The fat and blood go up in smoke; the flesh is yours, to be roasted whole tonight.",
      hekhal: "You will never see inside. The doorway curtain, blue and purple, is as far as sight goes."
    }
  }
};

Object.assign(PATHS, {
  sacrifice: {
    name: "How a sacrifice was offered",
    ids: ["royalstoa", "beautiful", "women", "nicanor", "israel", "slaughter", "altar", "ramp", "laver", "priests", "steps12"],
    notes: {
      royalstoa: "It begins with a purchase. Within the wider temple economy you change your coin into temple money and buy a lamb passed as unblemished; the sources do not establish that every such transaction took place in the Royal Stoa specifically.",
      beautiful: "The animal goes up with you, through the eastern gate, on a cord — not driven, led.",
      women: "In the Court of the Women you wait for your turn. The court ahead holds only so many at once.",
      nicanor: "Through the bronze gate the ground changes character: everything beyond it belongs to the service.",
      israel: "Eleven cubits of standing room, and the one act the layman performs himself: both hands pressed hard on the animal's head, leaning your weight into it, confessing. The beast stands in your place.",
      slaughter: "At the rings on the north you cut the throat yourself, one stroke. A priest holds a basin at the neck; nothing is spilt on the pavement.",
      altar: "The basin is carried, never set down, and passed hand to hand down the line of priests. The blood is thrown against the base of the altar — the whole point of the blood is that it reaches this stone.",
      ramp: "No steps to the altar: a ramp of unhewn stone, so the priest walks up rather than strides. The fat, kidneys and caul go into the fire; the smoke is the portion that rises.",
      laver: "Between acts the priests wash hands and feet at the laver. The service is a sequence of washings as much as of killings.",
      priests: "The breast and shoulder go to the priests, who eat them within the court. This is how they live: the altar is their farm.",
      steps12: "What is left is yours. You carry it out and eat it, that day, with your household — a meal, in the courts of the house, from an animal that stood in your place."
    }
  },
  gospel: {
    name: "Jesus in the temple",
    ids: ["nicanor", "women", "porticoes", "huldah", "olives", "royalstoa", "gentiles", "solomons", "chambers", "walls", "veil", "golgotha"],
    notes: {
      nicanor: "Forty days old, carried up these steps for the purification offering: two turtledoves, the offering of the poor. Luke names no gate for the presentation; this threshold is one possible setting for the encounter with Simeon and Anna (Luke 2:22–35).",
      women: "Twelve years old and missing three days; Anna's court, the treasury court, the court where families waited.",
      porticoes: "Found sitting among the teachers, listening and asking questions — the porticoes were the lecture halls of the temple (Luke 2:46).",
      huldah: "Every year of his life he came up these stairs at Passover, in a company, singing the psalms of ascent.",
      olives: "From this ridge he wept over the city, and from this ridge he answered the question about the buildings.",
      royalstoa: "The Gospels place the money changers in the temple precinct but name no specific hall; the Royal Stoa's scale and shelter make it one proposed setting for the cleansing, which he is described carrying out twice, at the beginning and the end.",
      gentiles: "God's house is meant to be a house of prayer for every nation — spoken in the one court where all nations could stand.",
      solomons: "He walked here in winter, at the feast of dedication, and was asked plainly whether he was the Christ (John 10:22–24).",
      chambers: "He sat over against the treasury and watched the money go in — and saw the two mites (Mark 12:41–44).",
      walls: "He is asked to admire these great buildings, and answers that not one stone will be left on another. Within forty years the stones were in the street below.",
      veil: "At the ninth hour the curtain of the house was rent in twain from the top to the bottom (Matthew 27:51).",
      golgotha: "Outside the wall, in the abandoned quarry by the road, the offering was made where everyone could see it."
    }
  },
  apostles: {
    name: "The apostles' temple",
    ids: ["porticoes", "beautiful", "solomons", "chambers", "gentiles", "soreg", "antonia", "walls"],
    notes: {
      porticoes: "After Pentecost the church met daily in the temple: the porticoes were public ground, and preaching there was ordinary (Acts 2:46).",
      beautiful: "At this gate the lame man sat for alms, and was healed at the hour of prayer (Acts 3:1–8).",
      solomons: "The crowd ran together to them in Solomon's porch — the same colonnade, the same practice of teaching in it (Acts 3:11).",
      chambers: "Believers laid the price of their possessions at the apostles' feet; the temple treasury stood a few paces off, doing the same work differently (Acts 4:34–37).",
      gentiles: "The apostles are told to go stand in the temple and tell the people this whole message of life (Acts 5:20).",
      soreg: "The riot that ended Paul's liberty began with the charge that he had brought a Greek past this lattice (Acts 21:28).",
      antonia: "The garrison ran down the stairs into the court, and Paul spoke to the crowd from those stairs in Hebrew (Acts 21:31–40).",
      walls: "Within a decade of Paul's arrest the whole enclosure was rubble. The letters that follow argue about a temple that no longer stood."
    }
  }
});

// Sight-line demonstrations: what could and could not be seen from where.
// Coordinates use the authoring convention of VIEWS (north = +z); the app flips z.
export const SIGHTS = {
  publican: {
    name: "The publican and the Pharisee",
    ref: "Luke 18:10-14",
    text: "Luke 18 is a parable set in the temple precinct; the text does not name a court or fix the two men's exact positions. This camera view is an illustrative staging — the publican's imagined vantage, crowd between him and the bronze gate, no sight of what is being done — not a recovered historical location.",
    c: [52, 4.9, 16], t: [-30, 16, 2]
  },
  unseen: {
    name: "No one alive had seen it",
    ref: "Hebrews 9:7",
    text: "From the furthest point a layman could reach — eleven cubits inside the Court of Israel — the house fills the sky and the doorway shows only the curtain. Behind it, the Holy Place; behind that, another curtain and an empty dark room entered by one man on one day in the year. Everyone in this picture is looking at a building whose innermost room they will never see.",
    c: [-10, 8.6, 0], t: [-52, 22, 0]
  },
  treasury: {
    name: "Where Jesus watched the treasury",
    ref: "Mark 12:41-44",
    text: "He sat facing the treasury and watched the people put in their money. The thirteen trumpet-mouthed chests stood along the wall of the Court of the Women, in the open, where a large gift could be heard as much as seen — and so could two mites.",
    c: [34, 5.2, 22], t: [50, 4, 24]
  },
  pinnacle: {
    name: "The pinnacle of the temple",
    ref: "Matthew 4:5",
    text: "The south-east angle is where the platform stands highest above the ground: the wall drops some forty-five metres to the floor of the Kidron below, and the Royal Stoa stood on top of that again. Josephus says a man looking down from the roof grew dizzy.",
    c: [176, 44, -228], t: [150, -30, -232]
  },
  onestone: {
    name: "Not one stone upon another",
    ref: "Mark 13:1-2",
    text: "The disciples' remark was made on the way out, from the slope of Olivet: the whole enclosure in one frame, gold facade catching the morning, the porticoes running four hundred and fifty metres north to south. The sanctuary and porticoes visible here were destroyed within forty years; substantial retaining walls and substructures survived and remain archaeologically visible today.",
    c: [700, 150, -60], t: [-30, 20, 0]
  },
  soregline: {
    name: "As far as a gentile could go",
    ref: "Acts 21:28-29; Ephesians 2:14",
    text: "This is the view from the lattice — the last point open to the nations. The terrace, the twelve steps, the inner gates and the house are all in sight and all out of reach. Paul's phrase for it, the dividing wall, named a real object, about a metre and a half high, with the penalty of death carved on it in Greek.",
    c: [86, 3.4, 0], t: [-44, 24, 0]
  }
};

// How much of each thing is known, and how much is reconstruction.
// attested: surviving remains or an explicit measurement; inferred: described in the
// sources but not standing; conjectural: the sources are silent or in conflict.
export const CERTAINTY = {
  mount: "attested", walls: "attested", huldah: "attested", kiponus: "attested",
  siloam: "attested", bethesda: "attested", olives: "attested", kidron: "attested",
  hinnom: "attested", cityofdavid: "attested", uppercity: "attested",
  antonia: "conjectural", bezetha: "conjectural", royalstoa: "conjectural",
  golgotha: "conjectural", vine: "conjectural", rock: "conjectural", tadi: "conjectural",
  pool_of_israel: "inferred"
};
export const CERT_LEVELS = {
  attested: { name: "Attested", tint: 0x8fae7a, blurb: "Standing remains or excavated foundations, OR a dimension given outright in an ancient text — a text-only measurement is not the same as physical survival, and the depicted appearance and function may still be conjectural even where the location or size is attested." },
  inferred: { name: "Inferred", tint: 0xd9b451, blurb: "Described in Middot or Josephus but no longer standing: dimensions are theirs, decorative and structural detail is a modelled inference." },
  conjectural: { name: "Conjectural", tint: 0xb5654a, blurb: "The sources are silent or contradict each other; the model shows one defensible reconstruction among several, including for some biblical-event locations that the texts do not pin to an exact spot." }
};

// Where this model does the most work in a year of scripture reading. The reading calendar
// rotates volumes and renumbers its weeks year by year, so the index is keyed to the
// reading block rather than to a week number.
export const CURRICULUM = [
  { vol: "Old Testament", blocks: [
    { ref: "Genesis 22", theme: "Abraham and Isaac on Moriah", ids: ["rock", "mount", "altar"] },
    { ref: "Genesis 28", theme: "Jacob wakes and calls the place the house of God and the gate of heaven", ids: ["facade", "beautiful", "holyofholies"] },
    { ref: "Exodus 25-31; 35-40", theme: "The tabernacle and its furniture", ids: ["menorah", "shewbread", "incense", "veil", "holyofholies", "laver"] },
    { ref: "Leviticus 1-7", theme: "The offerings, and how one was actually made", ids: ["israel", "slaughter", "altar", "ramp", "priests"] },
    { ref: "Leviticus 16", theme: "The Day of Atonement", ids: ["veil", "holyofholies", "rock", "shushan"] },
    { ref: "Leviticus 23", theme: "The appointed feasts", ids: ["gentiles", "women", "altar"] },
    { ref: "Numbers 19", theme: "The red heifer, burnt outside the camp", ids: ["shushan", "olives"] },
    { ref: "1 Kings 5-8", theme: "Solomon builds and dedicates the house", ids: ["hekhal", "holyofholies", "facade", "cells"] },
    { ref: "2 Kings 22-23; 2 Chronicles 34", theme: "The book found in the house", ids: ["chambers", "hekhal"] },
    { ref: "Isaiah 6", theme: "Isaiah sees the Lord, his robe filling the temple", ids: ["incense", "altar", "holyofholies"] },
    { ref: "Ezra 3; Nehemiah 8", theme: "The second temple, and the law read aloud", ids: ["mount", "women", "nicanor"] },
    { ref: "Psalms 24; 48; 84; 120-134", theme: "Songs of ascent, sung on the way up", ids: ["huldah", "chel", "steps12", "nicanor"] },
    { ref: "Ezekiel 40-47", theme: "The measured temple of the vision", ids: ["mount", "walls", "gentiles", "nicanor"] },
    { ref: "Malachi 3", theme: "Malachi's promise that the Lord will suddenly come to his temple", ids: ["facade", "altar"] }
  ] },
  { vol: "New Testament", blocks: [
    { ref: "Luke 1", theme: "Zacharias at the altar of incense", ids: ["incense", "hekhal", "women"] },
    { ref: "Luke 2", theme: "The presentation, and the boy of twelve", ids: ["nicanor", "women", "porticoes"] },
    { ref: "Matthew 4; Luke 4", theme: "The temptation on the temple's pinnacle", ids: ["royalstoa", "walls"] },
    { ref: "John 2", theme: "The cleansing; the temple's forty-six years in building", ids: ["royalstoa", "gentiles", "mount"] },
    { ref: "John 5", theme: "The pool of Bethesda and its five porches", ids: ["bethesda"] },
    { ref: "John 7-8", theme: "Tabernacles: water, light, and the treasury", ids: ["women", "chambers", "gentiles"] },
    { ref: "John 9", theme: "Sent to wash in Siloam", ids: ["siloam"] },
    { ref: "John 10", theme: "Walking in Solomon's porch at the dedication", ids: ["solomons"] },
    { ref: "Matthew 21; Mark 11", theme: "The entry and the temple confrontation", ids: ["olives", "kidron", "huldah", "royalstoa"] },
    { ref: "Mark 12; Luke 21", theme: "The widow's two mites", ids: ["chambers", "women"] },
    { ref: "Matthew 24; Mark 13", theme: "Not one stone upon another", ids: ["walls", "mount", "olives"] },
    { ref: "Matthew 27; Mark 15", theme: "The veil rent; the place of a skull", ids: ["veil", "golgotha", "hinnom"] },
    { ref: "Acts 1-5", theme: "The church in the porticoes", ids: ["beautiful", "solomons", "porticoes", "gentiles"] },
    { ref: "Acts 21-23", theme: "Paul seized at the soreg; the stairs of the Antonia", ids: ["soreg", "gentiles", "antonia"] },
    { ref: "Hebrews 9-10", theme: "A greater and more perfect tabernacle", ids: ["veil", "holyofholies", "altar", "incense"] },
    { ref: "Revelation 1; 11; 21", theme: "Lampstands, a measured temple, and a city with none", ids: ["menorah", "mount", "holyofholies"] }
  ] }
];

// Straight quotes to printer's quotes, skipping HTML tags.
export function typo(s) {
  if (s == null) return s;
  return String(s).replace(/<[^>]*>|[^<]+/g, chunk => {
    if (chunk.charAt(0) === '<') return chunk;
    return chunk
      .replace(/(^|[\s(\[{\u2014\u2013\-\u201c])"/g, '$1\u201c')
      .replace(/"/g, '\u201d')
      .replace(/(^|[\s(\[{\u2014\u2013])'/g, '$1\u2018')
      .replace(/'/g, '\u2019');
  });
}
