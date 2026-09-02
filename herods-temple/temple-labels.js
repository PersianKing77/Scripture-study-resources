// Long-form interpretive labels for the Herodian Temple reconstruction.
// Sources: KJV New Testament; Josephus (War, Antiquities); Mishnah (Middot, Tamid,
// Yoma, Shekalim, Sukkah); Babylonian Talmud. Where reconstructions differ, the
// majority view is modelled and the dissent is stated in the note.

export const LABELS = {
  mount: {
    title: "The Temple Mount Platform",
    sub: "Har ha-Bayit — the great artificial esplanade",
    body: `Herod doubled the area of the older Hasmonean temple platform by throwing enormous retaining walls around the summit of Mount Moriah and filling the space behind them, producing a level trapezoidal esplanade of roughly 36 acres — the largest sacred enclosure in the Roman world. Josephus reports that the work was begun in the eighteenth year of Herod's reign and that the sanctuary proper was raised in a year and a half, while the courts and porticoes took eight years, with work continuing for decades afterwards. That long building history stands behind the crowd's remark in John 2:20, "Forty and six years was this temple in building." Some of the ashlars in the western retaining wall exceed 500 tons; the disciples' amazement in Mark 13:1 — "Master, see what manner of stones and what buildings are here!" — is a reaction to exactly this masonry.`,
    sources: [
      "Josephus, Antiquities 15.380–425; War 5.184–189",
      "Mishnah Middot 2:1 (the Mount as 500 × 500 cubits)",
      "John 2:20; Mark 13:1–2 (KJV)"
    ],
    note: "Middot gives the sacred Mount as a square of 500 cubits, considerably smaller than the Herodian esplanade Josephus and the surviving walls describe. The majority reconstruction, followed here, treats the 500-cubit square as the older consecrated area set within Herod's larger platform."
  },
  walls: {
    title: "The Retaining Walls",
    sub: "Ashlar masonry, margin-and-boss dressing",
    body: `The platform is held by four retaining walls of dry-laid limestone ashlars, each course set back a few centimetres from the one below and each block dressed with a flat marginal draft around a slightly raised boss — the signature of Herodian stonework. On the south and west the walls rise more than 30 metres above bedrock; Josephus says a man looking down from the top of the Royal Stoa into the Kidron valley grew dizzy. The lower courses of the western wall survive today, and the visible layout of gates, arches and street level all belong to this phase.`,
    sources: ["Josephus, War 5.184–188; Antiquities 15.392–402; 15.412 (the dizzying view down)"],
    note: "Original wall heights above street level are estimated from surviving courses and excavated pavement; the upper courses and parapet are conjectural."
  },
  royalstoa: {
    title: "The Royal Stoa",
    sub: "The basilica along the southern wall",
    body: `Along the whole southern edge ran Herod's most ostentatious building: a basilica of 162 Corinthian columns in four rows, so thick that three men with arms outstretched could just encircle one. The two outer aisles were roofed low, the central nave raised far above them and lit by a clerestory, its ceiling deeply coffered in cedar. This was the commercial and judicial heart of the complex — the place where money was changed, sacrificial animals sold, and where the courts sat. It is the natural setting for the cleansing of the temple, when Jesus "cast out all them that sold and bought in the temple, and overthrew the tables of the moneychangers" (Matthew 21:12).`,
    sources: [
      "Josephus, Antiquities 15.411–416",
      "Matthew 21:12–13; Mark 11:15–17; Luke 19:45–46; John 2:14–16 (KJV)"
    ],
    note: "Whether the traders operated in the Royal Stoa or in the open court of the Gentiles is debated; the Stoa is the majority reading, since only it had the sheltered, commercial character Josephus describes."
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
    body: `The eastern portico was reputed to be older than Herod's work — popularly ascribed to Solomon himself, and possibly incorporating pre-Herodian foundations of the eastern wall. It is named twice in the New Testament: Jesus walks there in winter and is challenged about his identity (John 10:23), and after Pentecost the believers gather there with one accord while Peter preaches (Acts 3:11; 5:12). Standing on the Mount of Olives ridge line, it looked directly across the Kidron.`,
    sources: ["John 10:22–23; Acts 3:11; 5:12 (KJV)", "Josephus, War 5.184–185; Antiquities 20.220–221"],
    note: "Josephus attributes the eastern wall's antiquity to Solomon; archaeologically, the 'straight joint' in the eastern wall marks a pre-Herodian section, which supports the tradition without confirming a Solomonic date."
  },
  gentiles: {
    title: "The Court of the Gentiles",
    sub: "The open outer court",
    body: `The vast paved area between the porticoes and the balustrade was open to all comers, including gentiles — hence its later name. Pilgrims crossed it in tens of thousands at the three feasts; it held the sellers of doves and oxen, the tables of the moneychangers who converted foreign coin into the Tyrian silver required for the half-shekel, and the crowds who simply came to look. Its openness is the point of Jesus' citation of Isaiah: "My house shall be called of all nations the house of prayer" (Mark 11:17).`,
    sources: ["Mishnah Shekalim 1:3 (money-changing tables)", "Mark 11:15–17; John 2:14 (KJV)", "Josephus, War 5.192–194"],
    note: "The name 'Court of the Gentiles' is a modern convention; ancient sources simply call it the outer court or the mountain of the house."
  },
  soreg: {
    title: "The Soreg",
    sub: "The lattice barrier and its warning",
    body: `A stone lattice three cubits high ran around the inner precinct, marking the line beyond which no gentile could pass on pain of death. Set into it at intervals were slabs inscribed in Greek and Latin forbidding foreigners to enter the holy place; two such inscriptions have been recovered, one complete. Paul's arrest turned on exactly this line — the crowd supposed he had brought Trophimus the Ephesian past it (Acts 21:28–29) — and it is the "middle wall of partition" that Ephesians 2:14 says Christ has broken down.`,
    sources: [
      "Josephus, War 5.193–194; Antiquities 15.417",
      "Mishnah Middot 2:3",
      "Acts 21:28–29; Ephesians 2:14 (KJV)"
    ],
    note: "Middot 2:3 makes the soreg ten handbreadths high (about 0.8 m); Josephus says three cubits (about 1.5 m). Josephus' taller barrier is the one modelled here, since it matches the function he describes; the Mishnah's lower figure is the alternative."
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
    body: `Despite the name, this was the general court of assembly for all Israel, entered by both men and women; it was called the women's court because women could go no further in. It measured 135 cubits square, with a colonnade around it and — added later, according to the Mishnah — a gallery so that women could watch the rejoicing of the water-drawing at Sukkot from above without mingling with the men. Here stood the thirteen shofar-shaped chests for offerings, and here the widow cast in her two mites (Mark 12:41–44); here Simeon and Anna met the infant Jesus (Luke 2:22–38).`,
    sources: [
      "Mishnah Middot 2:5; Sukkah 5:1–4",
      "Mishnah Shekalim 6:5 (the thirteen chests)",
      "Mark 12:41–44; Luke 2:22–38; Luke 21:1–4 (KJV)"
    ],
    note: "The gallery for women is described in later rabbinic sources and may be a post-Herodian memory; it is modelled because the Mishnah is explicit that it was built."
  },
  chambers: {
    title: "The Four Corner Chambers",
    sub: "Nazirites, wood, lepers, oil and wine",
    body: `At each corner of the Court of the Women stood an unroofed chamber forty cubits square. In the south-east the Nazirites boiled their peace offerings and cut their hair; in the north-east the wood store, where priests inspected timber for the altar for worm damage; in the north-west the cleansed lepers immersed before presenting their offering; in the south-west the store of oil and wine. Acts 21:23–26 shows Paul paying the charges of four men fulfilling a Nazirite vow — business transacted in the first of these rooms.`,
    sources: ["Mishnah Middot 2:5", "Acts 21:23–26; Numbers 6 (KJV)"],
    note: "The assignment of functions to particular corners follows Middot; the elevations are conjectural."
  },
  beautiful: {
    title: "The Beautiful Gate",
    sub: "The eastern approach to the Court of the Women",
    body: `The eastern entrance to the Court of the Women was reached by a flight of steps from the outer court and closed by great doors. Josephus describes nine gates plated with gold and silver, and one — probably this one — of solid Corinthian bronze, far exceeding the others in value. At the gate "which is called Beautiful" the lame man sat daily to ask alms, and was healed by Peter and John (Acts 3:1–10).`,
    sources: ["Acts 3:1–10 (KJV)", "Josephus, War 5.201–206"],
    note: "Whether Acts' 'Beautiful Gate' is the eastern gate of the Court of the Women or the bronze Nicanor Gate further in is disputed; the eastern gate is the majority identification and is labelled here."
  },
  nicanor: {
    title: "The Nicanor Gate and the Fifteen Steps",
    sub: "From the Court of the Women into the Court of Israel",
    body: `Fifteen semicircular steps, corresponding to the fifteen Songs of Ascent, rose from the Court of the Women to the great bronze gate on which the Levites stood to sing. The Talmud tells how Nicanor's doors were thrown into the sea in a storm and recovered at the harbour of Acco, and the Mishnah says the gate was left in its Corinthian bronze while others were gilded, in memory of the miracle. Through this gate a woman brought her offering after childbirth and a cleansed leper was presented — the setting implied by Luke 2:22–24.`,
    sources: [
      "Mishnah Middot 1:4; 2:3; 2:5 (the fifteen steps); Sotah 1:5; Negaim 14:8",
      "Babylonian Talmud, Yoma 38a (Nicanor's doors); Sukkah 51b (the Levites on the steps)",
      "Luke 2:22–24 (KJV)"
    ],
    note: "The steps' semicircular plan is stated in Middot 2:5; their exact radius is reconstructed."
  },
  israel: {
    title: "The Court of Israel",
    sub: "A strip eleven cubits deep",
    body: `Inside the Nicanor Gate a narrow strip eleven cubits deep ran the width of the inner court. This was the furthest a lay Israelite could go: he entered only to lay his hands on his offering, to slaughter it, or to wave it, and then withdrew. A low step or lattice divided it from the priests' court beyond. The publican who "stood afar off" and the Pharisee who prayed with himself (Luke 18:10–14) are pictured somewhere in this zone.`,
    sources: ["Mishnah Middot 5:1; Kelim 1:8", "Luke 18:10–14 (KJV)"],
    note: "Some authorities treat the Court of Israel and the Court of the Priests as a single space divided only by a step; that reading is followed here."
  },
  priests: {
    title: "The Court of the Priests",
    sub: "The place of service",
    body: `The service of the altar was carried out in this court: the daily burnt offering morning and evening, the incense, the trimming of the lamps, the blowing of trumpets, and the priestly blessing. On its south side stood the chamber of hewn stone where the Sanhedrin met, and around the walls a ring of service chambers. Zacharias was serving in the course of Abia and was chosen by lot to burn incense when Gabriel appeared to him, "and the whole multitude of the people were praying without at the time of incense" (Luke 1:8–10) — the people standing in the Court of Israel and the Court of the Women beyond.`,
    sources: ["Mishnah Tamid 1–7; Middot 5:3–4", "Luke 1:5–23 (KJV)", "Josephus, War 5.226–227"],
    note: "The precise position of the Chamber of Hewn Stone is disputed between the south side of the inner court and the northern range; the southern position is modelled."
  },
  altar: {
    title: "The Altar of Burnt Offering",
    sub: "Thirty-two cubits square at the base",
    body: `The great altar was built of unhewn stones laid without iron, 32 cubits square at the base and rising ten cubits in stages: one cubit up from the base with an indent of one, then five cubits up to the surround on which the priests walked, then three cubits more to the upper hearth, with a projecting horn a cubit high at each corner. Two drains at the south-west carried the blood away to the Kidron. A perpetual fire burned on the hearth; the ashes were heaped in the centre. Fugitives grasping the horns claimed sanctuary, and the blood of the offerings was applied to them.`,
    sources: ["Mishnah Middot 3:1–4; Zevachim 5", "Exodus 20:25 (unhewn stone); 1 Kings 1:50–51 (KJV)", "Josephus, War 5.225"],
    note: "Josephus gives the altar as 50 cubits square and 15 high; the Mishnah's 32 × 32 × 10 is followed as the majority reconstruction, with Josephus' larger figure possibly measuring an outer terrace."
  },
  ramp: {
    title: "The Ramp",
    sub: "The southern ascent to the altar",
    body: `Because iron tools and steps were both forbidden to the altar, priests reached the hearth by a smooth ramp on the south side, 32 cubits long and 16 wide, built of unhewn stone. Two small ramps branched from it to the ledge. The priests ascended on the right of the ramp, circled the altar, and descended on the left; the Mishnah's choreography of the daily offering is precise about the direction of every turn.`,
    sources: ["Mishnah Middot 3:3–4; Tamid 1:4; 2:1", "Exodus 20:26 (KJV)"],
    note: "The dimensions are from Middot 3:3; the surface gradient is inferred. Note the cross-reference above: Ezekiel's visionary altar is described with steps facing east, which is why his measurements are given here for comparison and not followed — the Mosaic prohibition of steps (Exodus 20:26) and the Mishnah's smooth ramp on the south are what the model reproduces."
  },
  laver: {
    title: "The Brazen Laver",
    sub: "The kiyor, between the porch and the altar",
    body: `A bronze basin stood a little to the south of the line between the porch and the altar, where the priests washed their hands and feet before service. The Mishnah says it had twelve spouts, so that the whole watch of priests could wash together, and that Ben Katin fitted it with a mechanism to lower it into a cistern overnight, since water left standing in it would be disqualified by daybreak. It answers to the sea and lavers of Solomon's house and the laver of the Tabernacle in Exodus 30:17–21.`,
    sources: [
      "Mishnah Middot 3:6; Yoma 3:10; Tamid 1:4; 2:1",
      "Exodus 30:17–21; 1 Kings 7:23–39 (KJV)"
    ],
    note: "The number of spouts and the sinking mechanism are rabbinic; the basin's form is reconstructed from the Tabernacle and Solomonic descriptions."
  },
  slaughter: {
    title: "The Place of Slaughtering",
    sub: "North of the altar: rings, pillars and tables",
    body: `Sacrifice was carried out on the north side of the altar, as the Torah requires for the most holy offerings. There were twenty-four iron rings set in the pavement to hold the animal's head, eight low pillars fitted with cedar blocks and iron hooks for hanging carcasses, and eight marble tables for rinsing the entrails. Nearby stood a table of marble on which the limbs were laid, and one of silver for the service vessels. The whole area could be sluiced down with water from the aqueduct.`,
    sources: [
      "Mishnah Middot 3:5; 5:2; Shekalim 6:4 (the marble and silver tables); Tamid 3:5; 4:3",
      "Leviticus 1:11 (KJV)",
      "Josephus, War 5.225 (drainage and water supply)"
    ],
    note: "The count of rings, hooks and tables follows Middot; their exact arrangement in the pavement is a reconstruction."
  },
  steps12: {
    title: "The Twelve Steps to the Porch",
    sub: "The final ascent",
    body: `Twelve steps, each half a cubit in rise and tread, led from the Court of the Priests up to the floor of the porch. The sanctuary floor thus stood nineteen and a half cubits — about ten metres — above the outer pavement, and the whole complex was designed so that the worshipper's approach was a continuous ascent — the Songs of Ascent were sung on the fifteen steps below, and the priests mounted these last twelve to enter the house.`,
    sources: ["Mishnah Middot 3:6; 2:3", "Psalms 120–134 (Songs of Degrees, KJV)"],
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
      "John 15:1 (KJV)"
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
      "Hebrews 9:2 (KJV)"
    ],
    note: "Middot and Josephus differ slightly on wall thickness and the number of side chambers; Middot's plan is followed."
  },
  menorah: {
    title: "The Golden Candlestick",
    sub: "The menorah, on the south side",
    body: `A lampstand of beaten gold with a central shaft and six branches stood on the south side of the Holy Place. Its seven lamps were dressed each morning and lit toward evening; the westernmost lamp, the ner ma'aravi, was kept perpetually burning and from it the others were lit. The pattern is prescribed in Exodus 25:31–40, and Zechariah 4 and Revelation 1:12–20 both take it up as an image. The lampstand carried away by Titus is depicted on his arch in Rome, though its double-octagonal base there is often thought to be a Roman sculptor's addition.`,
    sources: [
      "Exodus 25:31–40; Leviticus 24:1–4; Zechariah 4:2; Revelation 1:12–13, 20 (KJV)",
      "Mishnah Tamid 3:9; 6:1",
      "Josephus, War 5.216–217; 7.148–149"
    ],
    note: "Whether the branches were rounded (as on the Arch of Titus) or straight and angular (as in some rabbinic and later Jewish depictions) is disputed; the rounded form is modelled as the majority reconstruction."
  },
  shewbread: {
    title: "The Table of Shewbread",
    sub: "On the north side",
    body: `On the north stood a table overlaid with gold, two cubits long and one wide, bearing twelve unleavened loaves in two rows or stacks — one for each tribe — renewed every Sabbath by the incoming watch of priests, with frankincense set beside them. The old loaves were eaten by the priests in the court. Jesus cites the incident of David eating this bread in defence of his disciples on the Sabbath (Matthew 12:3–4).`,
    sources: [
      "Exodus 25:23–30; Leviticus 24:5–9; 1 Samuel 21:1–6; Matthew 12:3–4; Hebrews 9:2 (KJV)",
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
      "Exodus 30:1–10; 37:25–28; Luke 1:8–11; Hebrews 9:4; Revelation 8:3–4 (KJV)",
      "Mishnah Tamid 5:2–6:3; Yoma 2:4"
    ],
    note: "Hebrews 9:4 appears to place the golden censer or altar within the Holy of Holies; the Torah and Mishnah place the incense altar in the Holy Place, and that placement is followed."
  },
  veil: {
    title: "The Veil",
    sub: "Parochet — the partition before the Holy of Holies",
    body: `The Holy of Holies was closed not by doors but by curtains: according to the Mishnah two veils hung a cubit apart, the outer looped back on the south and the inner on the north, so that the high priest entered between them on the Day of Atonement, walking along the gap. Josephus describes a Babylonian curtain of blue, scarlet, purple and fine linen, embroidered with a panorama of the heavens. All three synoptic Gospels report that at the death of Jesus "the veil of the temple was rent in twain from the top to the bottom" (Mark 15:38), and Hebrews reads the veil as his flesh, opening a new and living way.`,
    sources: [
      "Exodus 26:31–33; Matthew 27:51; Mark 15:38; Luke 23:45; Hebrews 6:19; 9:3; 10:19–20 (KJV)",
      "Mishnah Yoma 5:1; Shekalim 8:5",
      "Josephus, War 5.212–214, 219"
    ],
    note: "Whether there were one or two veils is disputed: the Torah and the Gospels speak of a single veil, the Mishnah of two with a cubit between. The Mishnaic double veil is modelled and the single-veil reading is noted. On colour: Exodus prescribes blue (tekhelet, a violet-blue from the murex snail), purple (argaman, a red-purple from the same shellfish family), scarlet (shani, from the kermes insect) and white twined linen; Josephus assigns them to the four elements, and the Mishnah says the veil was woven of seventy-two strands, each of twenty-four threads. Those four colours are modelled here rather than the plain crimson of many popular reconstructions. On pattern the sources differ by curtain: Exodus and 2 Chronicles 3:14 give the inner veil cherubim of cunning work, while Josephus says the curtain hung before the sanctuary door bore a panorama of the heavens and no animal figures at all — so the veils are woven with cherubim medallions and the doorway curtain with the starry heavens."
  },
  holyofholies: {
    title: "The Holy of Holies",
    sub: "Devir — twenty cubits square, and empty",
    body: `The innermost chamber measured twenty cubits square and rose the full height of the house, its walls gold-plated, entered by one man on one day of the year. Since the Ark had been lost with the first temple, the Second Temple's Holy of Holies stood empty: Josephus states flatly that in it there was nothing at all, and the Mishnah, calling it the House of the Kapporet, describes the high priest setting his censer and sprinkling the blood before the place where the Ark had been. Pompey entered it in 63 BC and found it empty; Hebrews 9:7 notes that the high priest went in "once every year, not without blood."`,
    sources: [
      "Mishnah Yoma 5:1–4; Middot 4:5",
      "Josephus, War 5.219; Antiquities 14.71–72",
      "Leviticus 16; Hebrews 9:3–8 (KJV)"
    ],
    note: "Solomon's inner sanctuary was a cube of twenty cubits (1 Kings 6:20); Middot's Second Temple plan gives the same footprint but the hekhal's full forty-cubit interior height, which is what is modelled. Some later traditions place a copy of the Torah, or hidden vessels, within the chamber; the empty-chamber account of Josephus and the Mishnah is the majority view and is followed."
  },
  rock: {
    title: "The Foundation Stone",
    sub: "Even ha-Shetiyah — the rock within the Holy of Holies",
    body: `The Mishnah says that in the Second Temple a stone stood in the Holy of Holies, three fingerbreadths above the floor, on which the high priest set the censer on the Day of Atonement, and calls it the Foundation Stone — the point, in later tradition, from which the world was founded. It is generally identified with the bedrock outcrop now enclosed by the Dome of the Rock, the summit of Mount Moriah, the threshing floor of Araunah bought by David and the site of the binding of Isaac.`,
    sources: [
      "Mishnah Yoma 5:2; Middot 4:5",
      "Babylonian Talmud, Yoma 54b; Sanhedrin 26b",
      "2 Samuel 24:18–25; 2 Chronicles 3:1; Genesis 22:2 (KJV)"
    ],
    note: "On its height: Yoma 5:2 has the stone standing three fingerbreadths — a few centimetres — above the floor, while the outcrop under the Dome of the Rock rises well over a metre above its surroundings. The model shows it as low bedrock breaking the floor, higher than the Mishnah's three fingerbreadths and lower than the bare outcrop, since reconciling the two requires assuming the Herodian builders cut the rock down to a floor. The alignment of the rock with the temple plan is the central dispute in Temple Mount studies. The majority reconstruction — followed here — places the rock in the Holy of Holies; the main alternatives set it under the altar of burnt offering, or locate the temple further north or south of the present Dome."
  },
  cells: {
    title: "The Side Chambers",
    sub: "Three storeys of cells around the house",
    body: `The Holy Place and the Holy of Holies were wrapped on north, west and south by three storeys of small chambers, thirty-eight in all according to the Mishnah, entered from one another and from a spiral stair at the north-east corner that also gave access to the roof. Their walls thicken the silhouette of the sanctuary and their beams are let into set-backs in the temple wall, as in Solomon's house, so that nothing pierced the sanctuary masonry itself.`,
    sources: ["Mishnah Middot 4:3–5", "1 Kings 6:5–10 (KJV)"],
    note: "Josephus gives a different arrangement of chambers and a different total; Middot's thirty-eight cells in three storeys are modelled."
  },
  olives: {
    title: "The Mount of Olives",
    sub: "The ridge east of the city, above the Kidron",
    body: `The Olivet ridge rises some seventy-five metres higher than the temple platform, so that anyone standing on it looked down into the courts — which is why Jesus sat there to speak of the temple's destruction, and why the Mishnah has the priest burning the red heifer on it in full view of the sanctuary door. Its lower slopes were terraced with olive groves and oil presses; Gethsemane means "oil press". Bethany and Bethphage lay on the eastern flank, the road to Jericho beneath. Jesus lodged there nightly during the last week, and the ascension is set on the same ridge, "a sabbath day's journey" from the city.`,
    sources: ["Mishnah Parah 3:6-11; Middot 1:3; 2:4", "Josephus, War 5.70, 504", "Luke 21:37; 22:39; Acts 1:12 (KJV)"],
    note: "The summit's exact height and the extent of first-century cultivation are reconstructed; the sightline from the ridge to the sanctuary door is fixed by the Mishnah's red-heifer procedure."
  },
  kidron: {
    title: "The Kidron Valley",
    sub: "The ravine between the temple and Olivet",
    body: `The Kidron falls steeply along the eastern wall, so that the platform's south-east angle stood a dizzying height above the valley floor — Josephus says the view down from the Royal Stoa made the head swim. The valley carried the blood and refuse of the sacrifices away from the altar drains, and the ash and idols of reforming kings were burned in it. David crossed it in flight from Absalom; Jesus crossed it to Gethsemane on the night of the betrayal.`,
    sources: ["Josephus, War 5.185, 190; Antiquities 15.412", "2 Samuel 15:23; 2 Kings 23:4-6; John 18:1 (KJV)"],
    note: "The valley floor lay several metres lower in antiquity than today; centuries of silt and debris have raised it."
  },
  cityofdavid: {
    title: "The City of David",
    sub: "The Lower City, on the spur south of the temple",
    body: `The oldest Jerusalem occupied the narrow spur running south from the Mount between the Kidron and the Tyropoeon, taken by David from the Jebusites and watered by the Gihon spring. By Herod's day this was the crowded Lower City, its flat-roofed houses stepping down the slope in terraces to the Pool of Siloam at the point of the spur. The Ophel, between it and the temple, held administrative buildings; the pilgrim road ran up from Siloam to the southern stairs.`,
    sources: ["2 Samuel 5:6-9; 1 Kings 1:33-40 (KJV)", "Josephus, War 5.136-141"],
    note: "Josephus calls the Lower City the Akra; the identification of his terms with the archaeological spur is debated in detail but not in outline."
  },
  siloam: {
    title: "The Pool of Siloam",
    sub: "At the foot of the city, fed by Hezekiah's tunnel",
    body: `Hezekiah's tunnel brought the Gihon spring under the spur to a pool at its southern end, so that the city's water lay inside the walls. In the Herodian period it was a large stepped pool; the excavated flights descend in broad tiers, and the excavators reconstruct a colonnaded portico along at least one side. Pilgrims immersed here before going up to the temple, and water was drawn from it in procession for the libation at the feast of Tabernacles. Jesus sent the man born blind to wash in it, and John pauses to translate the name: "Sent".`,
    sources: ["2 Kings 20:20; 2 Chronicles 32:30; Isaiah 8:6; John 9:7 (KJV)", "Mishnah Sukkah 4:9 (the water drawing)"],
    note: "The pool's full Herodian extent is still being excavated; the size modelled here follows the published stepped pool."
  },
  uppercity: {
    title: "The Upper City",
    sub: "The western hill: palaces, mansions, the Xystus",
    body: `Across the Tyropoeon rose the western hill, higher than the temple platform, where the priestly aristocracy and the Herodian court lived in peristyle mansions with frescoed walls and mosaic floors — the excavated Burnt House and Palatial Mansion belong to this quarter. At its north-west corner stood Herod's palace, defended by three enormous towers, Phasael, Hippicus and Mariamne; nearby lay the Xystus, a colonnaded plaza, and the council house. A bridge on arches carried the street from here directly to the temple's western gate. The high priest's house, where Jesus was taken by night, stood in this quarter, and Herod's palace is one of the two candidates for Pilate's praetorium.`,
    sources: [
      "Josephus, War 5.136-183 (the two hills); 5.161-175 (the three towers); 2.344 (the Xystus); Antiquities 15.318",
      "Mark 14:53-54; Matthew 27:27; John 19:13 (KJV)"
    ],
    note: "Whether the praetorium was Herod's palace or the Antonia is disputed; the palace is the majority view among historians of the trial, the Antonia the older tradition of the Via Dolorosa."
  },
  bezetha: {
    title: "Bezetha, the New City",
    sub: "The northern quarter, beyond the second wall",
    body: `North of the temple the ground rises into the quarter Josephus calls Bezetha, the "New City", a suburb that had outgrown the second wall and was only enclosed later by Agrippa's third wall. It held the timber and wool markets, the sheep pool, and — outside the wall — quarries and rock-cut tombs. Because it lay outside the sacred and residential core, executions took place on this side of the city.`,
    sources: ["Josephus, War 5.148-155 (Bezetha and the third wall); 5.331 (the wool and timber markets)", "John 19:20; Hebrews 13:12 (KJV)"],
    note: "The line of the second wall is the least certain feature of first-century Jerusalem; the course modelled here is the common reconstruction that leaves Golgotha outside it."
  },
  golgotha: {
    title: "Golgotha",
    sub: "The place of a skull, outside the wall",
    body: `An abandoned quarry outside the second wall on the north-west, its rock face left standing as a knoll — "the place of a skull" — beside the road, with rock-cut tombs in the quarry walls close by. The Gospels have him led out of the city to the place, John notes it was "nigh to the city" and by a thoroughfare, and Hebrews turns that "without the gate" into theology. John notes a garden and a new tomb "in the place where he was crucified", nigh at hand.`,
    sources: [
      "Matthew 27:33; Mark 15:22; Luke 23:33; John 19:17-20, 41-42; Hebrews 13:12 (KJV)",
      "Josephus, War 5.146-148 (the second wall)"
    ],
    note: "The traditional site under the Church of the Holy Sepulchre fits the requirement of quarry, tombs and a position outside the second wall; the Garden Tomb north of the Damascus Gate is the main alternative. The quarry knoll is modelled in the traditional position."
  },
  bethesda: {
    title: "The Pool of Bethesda",
    sub: "By the sheep market, with five porches",
    body: `North of the temple, just outside the wall by the sheep gate, lay a double reservoir divided by a central dam and surrounded by colonnades — four porticoes around the two pools and a fifth on the dam between them, exactly the "five porches" of John 5. Excavation found the twin pools and, later, healing shrines beside them. Here Jesus healed the man who had been sick thirty-eight years, on a sabbath, and told him to take up his bed and walk.`,
    sources: ["John 5:1-9 (KJV)", "Nehemiah 3:1 (the sheep gate)"],
    note: "The five-porch arrangement was long thought symbolic until the twin pools with a central dam were excavated; that reading is followed here."
  },
  hinnom: {
    title: "The Valley of Hinnom",
    sub: "Gehenna, closing the city on the south",
    body: `The Hinnom curves around the southern and western sides of the city and joins the Kidron below Siloam. Under Ahaz and Manasseh children were burned there to Molech, and Josiah defiled the place to end the practice; Jeremiah prophesied against it as the valley of slaughter. By the first century its name, Ge-Hinnom, had become the ordinary word for the place of final judgment — the "hell fire" of the Gospels.`,
    sources: [
      "2 Kings 23:10; 2 Chronicles 28:3 (Ahaz); 33:6 (Manasseh); Jeremiah 7:31-32; 19:1-6; Matthew 5:22; Mark 9:43-48 (KJV)"
    ],
    note: "The tradition that the valley served as the city's burning rubbish tip is medieval, not ancient; the biblical basis for its name is the child sacrifice condemned by the prophets."
  },
  shushan: {
    title: "The Shushan Gate",
    sub: "The eastern gate of the Mount",
    body: `The Mishnah names five gates of the Temple Mount, and the eastern one it calls Shushan — Susa — because, tradition says, a likeness of the Persian capital was carved on it in memory of the return from exile. Through this gate the priest led the red heifer out to be burned on the Mount of Olives, and by it, tradition holds, the scapegoat was led away on the Day of Atonement — though the Mishnah's account of that rite names no gate. It faced directly across the Kidron to the Olivet ridge, so that a priest standing at the altar could see the summit; the same alignment governs the procession described in the Mishnah.`,
    sources: ["Mishnah Middot 1:3; 2:4; Parah 3:6; Yoma 6:4-6", "Babylonian Talmud, Menachot 98a (the likeness of Shushan)", "Numbers 19; Leviticus 16:20-22 (KJV)"],
    note: "Whether the standing Golden Gate — Byzantine or early Islamic in its present form — sits on the Shushan Gate's foundations is disputed; only the general position in the eastern wall is agreed."
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
    body: `The main pilgrim approach was from the south: a broad monumental staircase of alternating wide and narrow treads — designed, it is often argued, to slow the ascent to a deliberate pace — leading to a double gate and a triple gate that passed under the Royal Stoa and emerged by ramp onto the esplanade. Ritual baths crowd the street below the stairs, where pilgrims immersed before entering. Most of those who came up at Passover, including the crowds of the Gospels, entered here — and the beggars sat on these steps: John 9 opens as Jesus passes out of the temple and sees the man born blind, whom he sends down to Siloam to wash.`,
    sources: ["Mishnah Middot 1:3 (gates of the Mount)", "Josephus, Antiquities 15.410–416"],
    note: "The gate positions and the stair plan come from excavation south of the Mount; the superstructure is reconstructed."
  },
  antonia: {
    title: "The Fortress of Antonia",
    sub: "The Roman garrison at the north-west corner",
    body: `Herod rebuilt the citadel at the north-west angle and named it for Mark Antony: a tower-fortress on a rock scarp, with stairs down into the temple porticoes so that troops could reach the courts quickly during the feasts. That arrangement explains Acts 21:31–40, where the chief captain runs down with soldiers to rescue Paul from the crowd and Paul addresses the people from the stairs. Josephus says the fortress dominated the temple like an acropolis.`,
    sources: ["Josephus, War 5.238–247; Antiquities 18.91–95", "Acts 21:31–40; 22:24 (KJV)"],
    note: "The size and plan of the Antonia are debated — a modest fort at the north-west corner is the majority reconstruction, against older proposals of a vast fortress occupying the whole northern platform."
  }
};

export const TOUR = [
  "mount", "uppercity", "cityofdavid", "bezetha", "kidron", "olives", "siloam", "bethesda", "golgotha", "hinnom",
  "huldah", "kiponus", "shushan", "tadi", "royalstoa", "gentiles", "porticoes", "solomons", "antonia",
  "soreg", "chel", "beautiful", "women", "chambers", "nicanor", "israel",
  "priests", "slaughter", "altar", "ramp", "laver", "steps12", "facade", "vine",
  "hekhal", "menorah", "shewbread", "incense", "veil", "holyofholies", "rock", "cells", "walls"
];

export const GROUPS = [
  { name: "The Mount and its Walls", ids: ["mount", "walls", "huldah", "kiponus", "shushan", "tadi", "antonia"] },
  { name: "The City and its Hills", ids: ["uppercity", "cityofdavid", "bezetha", "kidron", "olives", "siloam", "bethesda", "golgotha", "hinnom"] },
  { name: "Outer Court", ids: ["gentiles", "royalstoa", "porticoes", "solomons", "soreg", "chel"] },
  { name: "Court of the Women", ids: ["beautiful", "women", "chambers", "nicanor"] },
  { name: "Inner Court", ids: ["israel", "priests", "altar", "ramp", "laver", "slaughter", "steps12"] },
  { name: "The House", ids: ["facade", "vine", "cells", "hekhal", "menorah", "shewbread", "incense"] },
  { name: "Within the Veil", ids: ["veil", "holyofholies", "rock"] }
];


// Scripture passages for each location, KJV.
export const VERSES = {
  mount: [
    { ref: "Mark 13:1-2", text: "And as he went out of the temple, one of his disciples saith unto him, Master, see what manner of stones and what buildings are here! And Jesus answering said unto him, Seest thou these great buildings? there shall not be left one stone upon another, that shall not be thrown down." },
    { ref: "John 2:20", text: "Forty and six years was this temple in building, and wilt thou rear it up in three days?" },
    { ref: "Psalm 48:1-2", text: "Great is the LORD, and greatly to be praised in the city of our God, in the mountain of his holiness. Beautiful for situation, the joy of the whole earth, is mount Zion." }
  ],
  walls: [
    { ref: "Psalm 48:12-13", text: "Walk about Zion, and go round about her: tell the towers thereof. Mark ye well her bulwarks, consider her palaces; that ye may tell it to the generation following." },
    { ref: "Luke 21:5-6", text: "And as some spake of the temple, how it was adorned with goodly stones and gifts, he said, As for these things which ye behold, the days will come, in the which there shall not be left one stone upon another, that shall not be thrown down." }
  ],
  huldah: [
    { ref: "Psalm 122:1-2", text: "I was glad when they said unto me, Let us go into the house of the LORD. Our feet shall stand within thy gates, O Jerusalem." },
    { ref: "Luke 2:41-42", text: "Now his parents went to Jerusalem every year at the feast of the passover. And when he was twelve years old, they went up to Jerusalem after the custom of the feast." }
  ],
  kiponus: [
    { ref: "1 Chronicles 26:16", text: "To Shuppim and Hosah the lot came forth westward, with the gate Shallecheth, by the causeway of the going up, ward against ward." }
  ],
  shushan: [
    { ref: "Numbers 19:2-3", text: "Speak unto the children of Israel, that they bring thee a red heifer without spot... And ye shall give her unto Eleazar the priest, that he may bring her forth without the camp." },
    { ref: "Ezekiel 44:1-2", text: "Then he brought me back the way of the gate of the outward sanctuary which looketh toward the east; and it was shut. Then said the LORD unto me; This gate shall be shut, it shall not be opened." }
  ],
  tadi: [
    { ref: "Ezekiel 40:20", text: "And the gate of the outward court that looked toward the north, he measured the length thereof, and the breadth thereof." }
  ],
  antonia: [
    { ref: "Acts 21:31-32", text: "And as they went about to kill him, tidings came unto the chief captain of the band, that all Jerusalem was in an uproar. Who immediately took soldiers and centurions, and ran down unto them." },
    { ref: "Acts 21:40", text: "And when he had given him licence, Paul stood on the stairs, and beckoned with the hand unto the people. And when there was made a great silence, he spake unto them in the Hebrew tongue." }
  ],
  royalstoa: [
    { ref: "Matthew 21:12-13", text: "And Jesus went into the temple of God, and cast out all them that sold and bought in the temple, and overthrew the tables of the moneychangers, and the seats of them that sold doves, And said unto them, It is written, My house shall be called the house of prayer; but ye have made it a den of thieves." },
    { ref: "John 2:15", text: "And when he had made a scourge of small cords, he drove them all out of the temple, and the sheep, and the oxen; and poured out the changers' money, and overthrew the tables." }
  ],
  porticoes: [
    { ref: "Luke 2:46-47", text: "And it came to pass, that after three days they found him in the temple, sitting in the midst of the doctors, both hearing them, and asking them questions. And all that heard him were astonished at his understanding and answers." },
    { ref: "Luke 19:47", text: "And he taught daily in the temple. But the chief priests and the scribes and the chief of the people sought to destroy him." }
  ],
  solomons: [
    { ref: "John 10:22-23", text: "And it was at Jerusalem the feast of the dedication, and it was winter. And Jesus walked in the temple in Solomon's porch." },
    { ref: "Acts 3:11", text: "And as the lame man which was healed held Peter and John, all the people ran together unto them in the porch that is called Solomon's, greatly wondering." },
    { ref: "Acts 5:12", text: "And by the hands of the apostles were many signs and wonders wrought among the people; and they were all with one accord in Solomon's porch." }
  ],
  gentiles: [
    { ref: "Mark 11:17", text: "And he taught, saying unto them, Is it not written, My house shall be called of all nations the house of prayer? but ye have made it a den of thieves." },
    { ref: "Isaiah 56:7", text: "Even them will I bring to my holy mountain, and make them joyful in my house of prayer... for mine house shall be called an house of prayer for all people." }
  ],
  soreg: [
    { ref: "Ephesians 2:14", text: "For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us." },
    { ref: "Acts 21:28", text: "Crying out, Men of Israel, help: This is the man, who teacheth all men every where against the people, and the law, and this place: and further brought Greeks also into the temple, and hath polluted this holy place." }
  ],
  chel: [
    { ref: "Psalm 24:3-4", text: "Who shall ascend into the hill of the LORD? or who shall stand in his holy place? He that hath clean hands, and a pure heart." },
    { ref: "Psalm 84:7", text: "They go from strength to strength, every one of them in Zion appeareth before God." }
  ],
  beautiful: [
    { ref: "Acts 3:2", text: "And a certain man lame from his mother's womb was carried, whom they laid daily at the gate of the temple which is called Beautiful, to ask alms of them that entered into the temple." },
    { ref: "Acts 3:6-8", text: "Then Peter said, Silver and gold have I none; but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk... And he leaping up stood, and walked, and entered with them into the temple, walking, and leaping, and praising God." }
  ],
  women: [
    { ref: "Mark 12:41-44", text: "And Jesus sat over against the treasury, and beheld how the people cast money into the treasury: and many that were rich cast in much. And there came a certain poor widow, and she threw in two mites, which make a farthing... this poor widow hath cast more in, than all they which have cast into the treasury." },
    { ref: "Luke 2:36-38", text: "And there was one Anna, a prophetess... which departed not from the temple, but served God with fastings and prayers night and day." }
  ],
  chambers: [
    { ref: "Acts 21:23-24", text: "We have four men which have vows on them; Them take, and purify thyself with them, and be at charges with them, that they may shave their heads." },
    { ref: "Numbers 6:18", text: "And the Nazarite shall shave his head at the door of the tabernacle of the congregation, and shall take the hair of the head of his separation, and put it in the fire which is under the sacrifice of the peace offerings." }
  ],
  nicanor: [
    { ref: "Luke 2:22-24", text: "And when the days of her purification according to the law of Moses were accomplished, they brought him to Jerusalem, to present him to the Lord... And to offer a sacrifice according to that which is said in the law of the Lord, A pair of turtledoves, or two young pigeons." },
    { ref: "Psalm 121:1-2", text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth." }
  ],
  israel: [
    { ref: "Luke 18:11-13", text: "The Pharisee stood and prayed thus with himself, God, I thank thee, that I am not as other men are... And the publican, standing afar off, would not lift up so much as his eyes unto heaven, but smote upon his breast, saying, God be merciful to me a sinner." },
    { ref: "Leviticus 1:3-4", text: "If his offering be a burnt sacrifice of the herd, let him offer a male without blemish: he shall bring it to the door of the tabernacle of the congregation before the LORD. And he shall put his hand upon the head of the burnt offering; and it shall be accepted for him to make atonement for him." }
  ],
  priests: [
    { ref: "Luke 1:8-11", text: "And it came to pass, that while he executed the priest's office before God in the order of his course, According to the custom of the priest's office, his lot was to burn incense when he went into the temple of the Lord. And the whole multitude of the people were praying without at the time of incense. And there appeared unto him an angel of the Lord standing on the right side of the altar of incense." },
    { ref: "Numbers 6:24-26", text: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace." }
  ],
  altar: [
    { ref: "Exodus 20:25", text: "And if thou wilt make me an altar of stone, thou shalt not build it of hewn stone: for if thou lift up thy tool upon it, thou hast polluted it." },
    { ref: "Leviticus 6:12-13", text: "And the fire upon the altar shall be burning in it; it shall not be put out... The fire shall ever be burning upon the altar; it shall never go out." },
    { ref: "Hebrews 13:10-12", text: "We have an altar, whereof they have no right to eat, which serve the tabernacle... Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate." }
  ],
  ramp: [
    { ref: "Exodus 20:26", text: "Neither shalt thou go up by steps unto mine altar, that thy nakedness be not discovered thereon." }
  ],
  laver: [
    { ref: "Exodus 30:19-20", text: "For Aaron and his sons shall wash their hands and their feet thereat: When they go into the tabernacle of the congregation, they shall wash with water, that they die not." },
    { ref: "Titus 3:5", text: "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost." }
  ],
  slaughter: [
    { ref: "Leviticus 1:11", text: "And he shall kill it on the side of the altar northward before the LORD: and the priests, Aaron's sons, shall sprinkle his blood round about upon the altar." },
    { ref: "Isaiah 53:7", text: "He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth." }
  ],
  steps12: [
    { ref: "Psalm 122:3-4", text: "Jerusalem is builded as a city that is compact together: Whither the tribes go up, the tribes of the LORD, unto the testimony of Israel, to give thanks unto the name of the LORD." }
  ],
  facade: [
    { ref: "Psalm 27:4", text: "One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to enquire in his temple." },
    { ref: "Haggai 2:9", text: "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace." }
  ],
  vine: [
    { ref: "John 15:1, 5", text: "I am the true vine, and my Father is the husbandman... I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing." },
    { ref: "Psalm 80:8", text: "Thou hast brought a vine out of Egypt: thou hast cast out the heathen, and planted it." }
  ],
  cells: [
    { ref: "1 Kings 6:5-6", text: "And against the wall of the house he built chambers round about, against the walls of the house round about, both of the temple and of the oracle... The nethermost chamber was five cubits broad, and the middle was six cubits broad, and the third was seven cubits broad." }
  ],
  hekhal: [
    { ref: "Hebrews 9:2", text: "For there was a tabernacle made; the first, wherein was the candlestick, and the table, and the shewbread; which is called the sanctuary." },
    { ref: "1 Kings 6:21-22", text: "So Solomon overlaid the house within with pure gold... And the whole house he overlaid with gold, until he had finished all the house." }
  ],
  menorah: [
    { ref: "Exodus 25:31-32", text: "And thou shalt make a candlestick of pure gold: of beaten work shall the candlestick be made: his shaft, and his branches, his bowls, his knops, and his flowers, shall be of the same. And six branches shall come out of the sides of it; three branches of the candlestick out of the one side, and three branches of the candlestick out of the other side." },
    { ref: "Leviticus 24:2-3", text: "Command the children of Israel, that they bring unto thee pure oil olive beaten for the light, to cause the lamps to burn continually... he shall order it from evening unto morning before the LORD continually." },
    { ref: "Revelation 1:20", text: "The seven stars are the angels of the seven churches: and the seven candlesticks which thou sawest are the seven churches." }
  ],
  shewbread: [
    { ref: "Leviticus 24:5-6", text: "And thou shalt take fine flour, and bake twelve cakes thereof: two tenth deals shall be in one cake. And thou shalt set them in two rows, six on a row, upon the pure table before the LORD." },
    { ref: "Matthew 12:3-4", text: "Have ye not read what David did, when he was an hungred, and they that were with him; How he entered into the house of God, and did eat the shewbread, which was not lawful for him to eat, neither for them which were with him, but only for the priests?" }
  ],
  incense: [
    { ref: "Exodus 30:1, 7-8", text: "And thou shalt make an altar to burn incense upon... And Aaron shall burn thereon sweet incense every morning... And when Aaron lighteth the lamps at even, he shall burn incense upon it, a perpetual incense before the LORD." },
    { ref: "Psalm 141:2", text: "Let my prayer be set forth before thee as incense; and the lifting up of my hands as the evening sacrifice." },
    { ref: "Revelation 8:3", text: "And another angel came and stood at the altar, having a golden censer; and there was given unto him much incense, that he should offer it with the prayers of all saints upon the golden altar which was before the throne." }
  ],
  veil: [
    { ref: "Exodus 26:31", text: "And thou shalt make a veil of blue, and purple, and scarlet, and fine twined linen of cunning work: with cherubims shall it be made." },
    { ref: "Matthew 27:50-51", text: "Jesus, when he had cried again with a loud voice, yielded up the ghost. And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake, and the rocks rent." },
    { ref: "Hebrews 10:19-20", text: "Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, By a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh." }
  ],
  holyofholies: [
    { ref: "Leviticus 16:2", text: "Speak unto Aaron thy brother, that he come not at all times into the holy place within the veil before the mercy seat, which is upon the ark; that he die not." },
    { ref: "Hebrews 9:3-4, 7", text: "And after the second veil, the tabernacle which is called the Holiest of all... But into the second went the high priest alone once every year, not without blood, which he offered for himself, and for the errors of the people." },
    { ref: "1 Kings 8:10-11", text: "And it came to pass, when the priests were come out of the holy place, that the cloud filled the house of the LORD, So that the priests could not stand to minister because of the cloud: for the glory of the LORD had filled the house of the LORD." }
  ],
  rock: [
    { ref: "2 Chronicles 3:1", text: "Then Solomon began to build the house of the LORD at Jerusalem in mount Moriah, where the LORD appeared unto David his father, in the place that David had prepared in the threshingfloor of Ornan the Jebusite." },
    { ref: "Genesis 22:2", text: "Take now thy son, thine only son Isaac, whom thou lovest, and get thee into the land of Moriah; and offer him there for a burnt offering upon one of the mountains which I will tell thee of." },
    { ref: "2 Samuel 24:24-25", text: "So David bought the threshingfloor and the oxen for fifty shekels of silver. And David built there an altar unto the LORD, and offered burnt offerings and peace offerings." }
  ]
};


// Further passages tied to each place — narratives that happened there, and the
// prophetic and epistolary texts that read the place theologically.
const MORE = {
  olives: [
    { ref: "Luke 22:39-44", text: "And he came out, and went, as he was wont, to the mount of Olives; and his disciples also followed him... And being in an agony he prayed more earnestly: and his sweat was as it were great drops of blood falling down to the ground." },
    { ref: "Zechariah 14:4", text: "And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east, and the mount of Olives shall cleave in the midst thereof toward the east and toward the west." },
    { ref: "Acts 1:11-12", text: "Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven. Then returned they unto Jerusalem from the mount called Olivet, which is from Jerusalem a sabbath day's journey." },
    { ref: "Luke 19:41-42", text: "And when he was come near, he beheld the city, and wept over it, Saying, If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace! but now they are hid from thine eyes." }
  ],
  kidron: [
    { ref: "John 18:1", text: "When Jesus had spoken these words, he went forth with his disciples over the brook Cedron, where was a garden, into the which he entered, and his disciples." },
    { ref: "2 Samuel 15:23", text: "And all the country wept with a loud voice, and all the people passed over: the king also himself passed over the brook Kidron." },
    { ref: "2 Kings 23:6", text: "And he brought out the grove from the house of the LORD, without Jerusalem, unto the brook Kidron, and burned it at the brook Kidron." }
  ],
  cityofdavid: [
    { ref: "2 Samuel 5:7-9", text: "Nevertheless David took the strong hold of Zion: the same is the city of David... So David dwelt in the fort, and called it the city of David." },
    { ref: "Luke 2:4, 11", text: "And Joseph also went up from Galilee, out of the city of Nazareth, into Judaea, unto the city of David, which is called Bethlehem... For unto you is born this day in the city of David a Saviour, which is Christ the Lord." }
  ],
  siloam: [
    { ref: "John 9:7", text: "And said unto him, Go, wash in the pool of Siloam, (which is by interpretation, Sent.) He went his way therefore, and washed, and came seeing." },
    { ref: "Isaiah 8:6", text: "Forasmuch as this people refuseth the waters of Shiloah that go softly." },
    { ref: "Luke 13:4", text: "Or those eighteen, upon whom the tower in Siloam fell, and slew them, think ye that they were sinners above all men that dwelt in Jerusalem?" },
    { ref: "2 Kings 20:20", text: "And the rest of the acts of Hezekiah, and all his might, and how he made a pool, and a conduit, and brought water into the city, are they not written in the book of the chronicles of the kings of Judah?" }
  ],
  uppercity: [
    { ref: "Mark 14:53-54", text: "And they led Jesus away to the high priest: and with him were assembled all the chief priests and the elders and the scribes. And Peter followed him afar off, even into the palace of the high priest." },
    { ref: "Luke 22:54-62", text: "Then took they him, and led him, and brought him into the high priest's house... And Peter said, Man, I know not what thou sayest. And immediately, while he yet spake, the cock crew... And Peter went out, and wept bitterly." },
    { ref: "John 19:13", text: "When Pilate therefore heard that saying, he brought Jesus forth, and sat down in the judgment seat in a place that is called the Pavement, but in the Hebrew, Gabbatha." }
  ],
  bezetha: [
    { ref: "Nehemiah 3:1", text: "Then Eliashib the high priest rose up with his brethren the priests, and they builded the sheep gate; they sanctified it, and set up the doors of it." },
    { ref: "Hebrews 13:12-13", text: "Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate. Let us go forth therefore unto him without the camp, bearing his reproach." }
  ],
  golgotha: [
    { ref: "John 19:17-20", text: "And he bearing his cross went forth into a place called the place of a skull, which is called in the Hebrew Golgotha: Where they crucified him... and it was written in Hebrew, and Greek, and Latin." },
    { ref: "Matthew 27:33, 45", text: "And when they were come unto a place called Golgotha, that is to say, a place of a skull... Now from the sixth hour there was darkness over all the land unto the ninth hour." },
    { ref: "John 19:41-42", text: "Now in the place where he was crucified there was a garden; and in the garden a new sepulchre, wherein was never man yet laid. There laid they Jesus therefore because of the Jews' preparation day; for the sepulchre was nigh at hand." }
  ],
  bethesda: [
    { ref: "John 5:2-9", text: "Now there is at Jerusalem by the sheep market a pool, which is called in the Hebrew tongue Bethesda, having five porches. In these lay a great multitude of impotent folk, of blind, halt, withered... Jesus saith unto him, Rise, take up thy bed, and walk. And immediately the man was made whole, and took up his bed, and walked: and on the same day was the sabbath." }
  ],
  hinnom: [
    { ref: "Jeremiah 19:2, 6", text: "And go forth unto the valley of the son of Hinnom... Therefore, behold, the days come, saith the LORD, that this place shall no more be called Tophet, nor The valley of the son of Hinnom, but The valley of slaughter." },
    { ref: "2 Kings 23:10", text: "And he defiled Topheth, which is in the valley of the children of Hinnom, that no man might make his son or his daughter to pass through the fire to Molech." },
    { ref: "Matthew 5:22", text: "But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment... but whosoever shall say, Thou fool, shall be in danger of hell fire." }
  ],
  mount: [
    { ref: "Isaiah 2:2-3", text: "And it shall come to pass in the last days, that the mountain of the LORD's house shall be established in the top of the mountains, and shall be exalted above the hills; and all nations shall flow unto it... for out of Zion shall go forth the law, and the word of the LORD from Jerusalem." },
    { ref: "Matthew 24:1-2", text: "And Jesus went out, and departed from the temple: and his disciples came to him for to shew him the buildings of the temple. And Jesus said unto them, See ye not all these things? verily I say unto you, There shall not be left here one stone upon another, that shall not be thrown down." },
    { ref: "Malachi 3:1", text: "Behold, I will send my messenger, and he shall prepare the way before me: and the Lord, whom ye seek, shall suddenly come to his temple." }
  ],
  walls: [
    { ref: "Matthew 4:5-7", text: "Then the devil taketh him up into the holy city, and setteth him on a pinnacle of the temple, And saith unto him, If thou be the Son of God, cast thyself down... Jesus said unto him, It is written again, Thou shalt not tempt the Lord thy God." },
    { ref: "Luke 4:9-12", text: "And he brought him to Jerusalem, and set him on a pinnacle of the temple, and said unto him, If thou be the Son of God, cast thyself down from hence." }
  ],
  huldah: [
    { ref: "John 9:1-7", text: "And as Jesus passed by, he saw a man which was blind from his birth. And his disciples asked him, saying, Master, who did sin, this man, or his parents, that he was born blind? Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him... he spat on the ground, and made clay of the spittle, and he anointed the eyes of the blind man with the clay, And said unto him, Go, wash in the pool of Siloam. He went his way therefore, and washed, and came seeing." },
    { ref: "John 9:34-38", text: "They answered and said unto him, Thou wast altogether born in sins, and dost thou teach us? And they cast him out. Jesus heard that they had cast him out; and when he had found him, he said unto him, Dost thou believe on the Son of God?... And he said, Lord, I believe. And he worshipped him." },
    { ref: "Acts 2:41", text: "Then they that gladly received his word were baptized: and the same day there were added unto them about three thousand souls." },
    { ref: "Psalm 84:1-2", text: "How amiable are thy tabernacles, O LORD of hosts! My soul longeth, yea, even fainteth for the courts of the LORD: my heart and my flesh crieth out for the living God." }
  ],
  royalstoa: [
    { ref: "John 8:2-11", text: "And early in the morning he came again into the temple, and all the people came unto him; and he sat down, and taught them. And the scribes and Pharisees brought unto him a woman taken in adultery... He that is without sin among you, let him first cast a stone at her... Neither do I condemn thee: go, and sin no more." },
    { ref: "Zechariah 14:21", text: "Yea, every pot in Jerusalem and in Judah shall be holiness unto the LORD of hosts... in that day there shall be no more the Canaanite in the house of the LORD of hosts." }
  ],
  porticoes: [
    { ref: "John 7:14", text: "Now about the midst of the feast Jesus went up into the temple, and taught." },
    { ref: "Luke 21:37-38", text: "And in the day time he was teaching in the temple; and at night he went out, and abode in the mount that is called the mount of Olives. And all the people came early in the morning to him in the temple, for to hear him." },
    { ref: "Acts 5:20-21", text: "Go, stand and speak in the temple to the people all the words of this life. And when they heard that, they entered into the temple early in the morning, and taught." }
  ],
  gentiles: [
    { ref: "Luke 19:45-46", text: "And he went into the temple, and began to cast out them that sold therein, and them that bought; Saying unto them, It is written, My house is the house of prayer: but ye have made it a den of thieves." },
    { ref: "1 Kings 8:41-43", text: "Moreover concerning a stranger, that is not of thy people Israel, but cometh out of a far country for thy name's sake... hear thou in heaven thy dwelling place, and do according to all that the stranger calleth to thee for." }
  ],
  women: [
    { ref: "John 8:12, 20", text: "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life... These words spake Jesus in the treasury, as he taught in the temple: and no man laid hands on him; for his hour was not yet come." },
    { ref: "John 7:37-38", text: "In the last day, that great day of the feast, Jesus stood and cried, saying, If any man thirst, let him come unto me, and drink. He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water." },
    { ref: "Luke 21:1-4", text: "And he looked up, and saw the rich men casting their gifts into the treasury. And he saw also a certain poor widow casting in thither two mites. And he said, Of a truth I say unto you, that this poor widow hath cast in more than they all." }
  ],
  nicanor: [
    { ref: "Luke 2:25-32", text: "And, behold, there was a man in Jerusalem, whose name was Simeon... And he came by the Spirit into the temple: and when the parents brought in the child Jesus... he blessed God, and said, Lord, now lettest thou thy servant depart in peace, according to thy word: For mine eyes have seen thy salvation... A light to lighten the Gentiles, and the glory of thy people Israel." }
  ],
  priests: [
    { ref: "Luke 1:21-23", text: "And the people waited for Zacharias, and marvelled that he tarried so long in the temple. And when he came out, he could not speak unto them: and they perceived that he had seen a vision in the temple... And it came to pass, that, as soon as the days of his ministration were accomplished, he departed to his own house." },
    { ref: "2 Chronicles 7:1-2", text: "Now when Solomon had made an end of praying, the fire came down from heaven, and consumed the burnt offering and the sacrifices; and the glory of the LORD filled the house." }
  ],
  altar: [
    { ref: "Matthew 5:23-24", text: "Therefore if thou bring thy gift to the altar, and there rememberest that thy brother hath ought against thee; Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift." },
    { ref: "Matthew 23:35", text: "That upon you may come all the righteous blood shed upon the earth... unto the blood of Zacharias son of Barachias, whom ye slew between the temple and the altar." },
    { ref: "Romans 12:1", text: "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service." }
  ],
  ramp: [
    { ref: "Ezekiel 43:17 — Ezekiel's visionary altar, not the Herodian one", text: "And the settle shall be fourteen cubits long and fourteen broad in the four squares thereof... and his stairs shall look toward the east." }
  ],
  laver: [
    { ref: "Psalm 26:6", text: "I will wash mine hands in innocency: so will I compass thine altar, O LORD." },
    { ref: "John 13:8-10", text: "Peter saith unto him, Lord, dost thou wash my feet?... Jesus answered him, If I wash thee not, thou hast no part with me... He that is washed needeth not save to wash his feet, but is clean every whit." }
  ],
  slaughter: [
    { ref: "John 1:29", text: "The next day John seeth Jesus coming unto him, and saith, Behold the Lamb of God, which taketh away the sin of the world." },
    { ref: "Exodus 12:5-7", text: "Your lamb shall be without blemish, a male of the first year... And they shall take of the blood, and strike it on the two side posts and on the upper door post of the houses." }
  ],
  steps12: [
    { ref: "Acts 3:1", text: "Now Peter and John went up together into the temple at the hour of prayer, being the ninth hour." },
    { ref: "Psalm 100:4", text: "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name." }
  ],
  facade: [
    { ref: "John 2:19-21", text: "Jesus answered and said unto them, Destroy this temple, and in three days I will raise it up... But he spake of the temple of his body." },
    { ref: "Ezekiel 43:4-5", text: "So the glory of the LORD came into the house by the way of the gate whose prospect is toward the east. So the spirit took me up, and brought me into the inner court; and, behold, the glory of the LORD filled the house." }
  ],
  hekhal: [
    { ref: "Hebrews 9:6", text: "Now when these things were thus ordained, the priests went always into the first tabernacle, accomplishing the service of God." },
    { ref: "1 Chronicles 28:11-12", text: "Then David gave to Solomon his son the pattern of the porch, and of the houses thereof, and of the treasuries thereof... and of the place of the mercy seat." }
  ],
  menorah: [
    { ref: "Zechariah 4:2-6", text: "And said unto me, What seest thou? And I said, I have looked, and behold a candlestick all of gold, with a bowl upon the top of it, and his seven lamps thereon... Not by might, nor by power, but by my spirit, saith the LORD of hosts." },
    { ref: "John 8:12", text: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." }
  ],
  shewbread: [
    { ref: "1 Samuel 21:6", text: "So the priest gave him hallowed bread: for there was no bread there but the shewbread, that was taken from before the LORD, to put hot bread in the day when it was taken away." },
    { ref: "John 6:35", text: "And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst." }
  ],
  incense: [
    { ref: "Luke 1:9-10", text: "According to the custom of the priest's office, his lot was to burn incense when he went into the temple of the Lord. And the whole multitude of the people were praying without at the time of incense." },
    { ref: "Leviticus 16:12-13", text: "And he shall take a censer full of burning coals of fire from off the altar before the LORD, and his hands full of sweet incense beaten small, and bring it within the veil: And he shall put the incense upon the fire before the LORD, that the cloud of the incense may cover the mercy seat." }
  ],
  veil: [
    { ref: "2 Chronicles 3:14", text: "And he made the veil of blue, and purple, and crimson, and fine linen, and wrought cherubims thereon." },
    { ref: "Mark 15:37-38", text: "And Jesus cried with a loud voice, and gave up the ghost. And the veil of the temple was rent in twain from the top to the bottom." },
    { ref: "Hebrews 6:19-20", text: "Which hope we have as an anchor of the soul, both sure and stedfast, and which entereth into that within the veil; Whither the forerunner is for us entered, even Jesus, made an high priest for ever." }
  ],
  holyofholies: [
    { ref: "Leviticus 16:15-16", text: "Then shall he kill the goat of the sin offering, that is for the people, and bring his blood within the veil... and sprinkle it upon the mercy seat, and before the mercy seat." },
    { ref: "Hebrews 9:11-12", text: "But Christ being come an high priest of good things to come... Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us." },
    { ref: "Revelation 21:3", text: "And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people." }
  ],
  rock: [
    { ref: "Isaiah 28:16", text: "Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste." },
    { ref: "1 Peter 2:6", text: "Wherefore also it is contained in the scripture, Behold, I lay in Sion a chief corner stone, elect, precious: and he that believeth on him shall not be confounded." },
    { ref: "Psalm 118:22", text: "The stone which the builders refused is become the head stone of the corner." }
  ],
  cells: [
    { ref: "Jeremiah 35:2, 4", text: "Go unto the house of the Rechabites, and speak unto them, and bring them into the house of the LORD, into one of the chambers... into the chamber of the sons of Hanan." },
    { ref: "Nehemiah 13:4-5", text: "And before this, Eliashib the priest, having the oversight of the chamber of the house of our God... had prepared for him a great chamber, where aforetime they laid the meat offerings, the frankincense, and the vessels." }
  ],
  chambers: [
    { ref: "Leviticus 14:10-11", text: "And on the eighth day he shall take two he lambs without blemish... And the priest that maketh him clean shall present the man that is to be made clean, and those things, before the LORD, at the door of the tabernacle of the congregation." }
  ],
  antonia: [
    { ref: "Acts 22:24-25", text: "The chief captain commanded him to be brought into the castle, and bade that he should be examined by scourging... Paul said unto the centurion that stood by, Is it lawful for you to scourge a man that is a Roman, and uncondemned?" },
    { ref: "Acts 23:10", text: "And when there arose a great dissension, the chief captain, fearing lest Paul should have been pulled in pieces of them, commanded the soldiers to go down, and to take him by force from among them, and to bring him into the castle." }
  ],
  soreg: [
    { ref: "Ephesians 2:18-19", text: "For through him we both have access by one Spirit unto the Father. Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God." }
  ],
  beautiful: [
    { ref: "Acts 3:9-10", text: "And all the people saw him walking and praising God: And they knew that it was he which sat for alms at the Beautiful gate of the temple: and they were filled with wonder and amazement at that which had happened unto him." },
    { ref: "Isaiah 35:6", text: "Then shall the lame man leap as an hart, and the tongue of the dumb sing: for in the wilderness shall waters break out, and streams in the desert." }
  ],
  israel: [
    { ref: "Psalm 51:16-17", text: "For thou desirest not sacrifice; else would I give it: thou delightest not in burnt offering. The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise." }
  ],
  chel: [
    { ref: "Psalm 65:4", text: "Blessed is the man whom thou choosest, and causest to approach unto thee, that he may dwell in thy courts: we shall be satisfied with the goodness of thy house, even of thy holy temple." }
  ],
  shushan: [
    { ref: "Hebrews 13:11-13", text: "For the bodies of those beasts, whose blood is brought into the sanctuary by the high priest for sin, are burned without the camp. Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate. Let us go forth therefore unto him without the camp, bearing his reproach." }
  ],
  solomons: [
    { ref: "John 10:24-28", text: "Then came the Jews round about him, and said unto him, How long dost thou make us to doubt? If thou be the Christ, tell us plainly... My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish." }
  ],
  vine: [
    { ref: "Isaiah 5:1-2", text: "Now will I sing to my wellbeloved a song of my beloved touching his vineyard. My wellbeloved hath a vineyard in a very fruitful hill... and he planted it with the choicest vine." }
  ],
  kiponus: [
    { ref: "Nehemiah 12:37", text: "And at the fountain gate, which was over against them, they went up by the stairs of the city of David, at the going up of the wall, above the house of David, even unto the water gate eastward." }
  ],
  tadi: [
    { ref: "Deuteronomy 23:14", text: "For the LORD thy God walketh in the midst of thy camp, to deliver thee... therefore shall thy camp be holy: that he see no unclean thing in thee, and turn away from thee." }
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
      holyofholies: "Once a year, not without blood: he sprinkles seven times toward the place of the mercy seat.",
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
