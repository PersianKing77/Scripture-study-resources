/* Textual variants — places where the Received Text (behind the KJV) rests on a reading the earliest
   manuscripts do not support, or where the manuscripts differ enough to change the sense. The WEB
   generally follows the modern critical text, so it omits or brackets several of these.
   Shown in the passage reader when the reference falls inside the listed chapter.
   The point is method, not doubt: the atlas grades the confidence of a site identification,
   and the same honesty is owed to the text. Descriptions are deliberately short and neutral. */
window.WEB_VARIANTS = [
  { book: "matthew", ch: 6, ref: "Matthew 6:13", title: "The doxology of the Lord's Prayer",
    note: "'For thine is the kingdom, and the power, and the glory, for ever' is absent from Vaticanus, Sinaiticus and the earliest Latin and Coptic witnesses. It appears in the Didache in a shorter form, so it was in liturgical use very early; many scholars judge it a congregational response that entered the text through the lectionary, though the precise mechanism is not certain." },
  { book: "mark", ch: 1, ref: "Mark 1:1", title: "'the Son of God'",
    note: "Sinaiticus (first hand) and a few others omit 'the Son of God' from the opening line. Most editors keep it, but the omission is early enough to note." },
  { book: "mark", ch: 16, ref: "Mark 16:9–20", title: "The longer ending of Mark",
    note: "Vaticanus and Sinaiticus end at 16:8, and Eusebius and Jerome say the accurate copies of their day did too. Other manuscripts carry a shorter ending, some carry both. The longer ending is old — Irenaeus quotes it c. AD 180 — but its vocabulary differs from the rest of Mark. What is at stake is the ending of a Gospel, not the resurrection, which 16:1–8 already reports." },
  { book: "luke", ch: 22, ref: "Luke 22:43–44", title: "The agony and the bloody sweat",
    note: "The two verses on the strengthening angel and the sweat as drops of blood are missing from several of the oldest manuscripts and marked as doubtful in others, yet Justin Martyr and Irenaeus knew them in the second century. Scribes may have removed them as much as added them." },
  { book: "luke", ch: 23, ref: "Luke 23:34", title: "'Father, forgive them'",
    note: "Omitted by Vaticanus, one early papyrus and other significant witnesses, present in Sinaiticus and most later manuscripts. Widely quoted from the second century on." },
  { book: "john", ch: 1, ref: "John 1:18", title: "'the only begotten Son'",
    note: "The earliest papyri and Vaticanus read 'the only begotten God' (or 'God the only Son'); the Byzantine tradition behind the AV reads 'Son'. A single-word difference with real theological weight." },
  { book: "john", ch: 5, ref: "John 5:3–4", title: "The moving of the water",
    note: "The explanation that an angel troubled the pool is absent from the oldest manuscripts and reads as an early marginal gloss explaining local belief — the belief itself is what the excavated healing installations at Bethesda attest." },
  { book: "john", ch: 7, ref: "John 7:53–8:11", title: "The woman taken in adultery",
    note: "Absent from the earliest Greek witnesses and found in varying locations in others — after Luke 21:38 in one family. It likely circulated independently before entering John; manuscript history alone cannot establish the historicity of the event it describes." },
  { book: "john", ch: 8, ref: "John 7:53–8:11", title: "The woman taken in adultery",
    note: "Absent from the earliest Greek witnesses and found in varying locations in others — after Luke 21:38 in one family. It likely circulated independently before entering John; manuscript history alone cannot establish the historicity of the event it describes." },
  { book: "acts", ch: 8, ref: "Acts 8:37", title: "The eunuch's confession",
    note: "'If thou believest with all thine heart, thou mayest' is not in the earliest manuscripts. Irenaeus knows it by c. AD 180, and it reads like an early baptismal formula written into the margin and then into the text." },
  { book: "acts", ch: 20, ref: "Acts 20:15", title: "The stop at Trogyllium",
    note: "'And tarried at Trogyllium' is present in the Byzantine tradition behind the KJV but absent from the earliest Alexandrian witnesses and the modern critical text, which move directly from Samos to Miletus. Geographically consequential: it adds a mainland stop the earliest manuscripts do not attest." },
  { book: "acts", ch: 15, ref: "Acts 15:34", title: "Silas remaining at Antioch",
    note: "Absent from the best manuscripts; supplied by later copyists to explain how Silas is at hand in verse 40." },
  { book: "acts", ch: 24, ref: "Acts 24:6–8", title: "Lysias and the Jewish law",
    note: "A longer reading in the Western text adds that the Jews would have judged Paul by their own law but Lysias took him by force. It is the kind of expansion the Western text of Acts makes throughout — that whole tradition runs roughly ten per cent longer than the Alexandrian." },
  { book: "acts", ch: 28, ref: "Acts 28:29", title: "The departure of the Jews",
    note: "The verse describing the Jews leaving in great dispute is absent from the earliest manuscripts." },
  { book: "romans", ch: 16, ref: "Romans 16:24", title: "The repeated benediction",
    note: "Verse 24 duplicates the grace of verse 20 and is absent from the oldest manuscripts; the doxology of 16:25–27 also floats, appearing at the end of chapter 14 or 15 in some witnesses." },
  { book: "1 john", ch: 5, ref: "1 John 5:7–8", title: "The Johannine Comma",
    note: "'The Father, the Word, and the Holy Ghost: and these three are one' appears in no Greek manuscript before the fourteenth century and in none of the Greek fathers during the trinitarian controversies, when it would have settled arguments. It entered the printed Greek text in 1522 and from there the AV. It is the clearest case in the New Testament of a late addition." }
];
