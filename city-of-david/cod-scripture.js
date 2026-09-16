/* Biblical passages tied to specific features of the ridge.
   Keyed by feature id in cod-data.js. Kept in its own file so the
   archaeological data stays independent of the scripture layer.

   Quotations are from the American Standard Version (ASV, 1901), a
   translation whose U.S. copyright has expired; it is treated as public
   domain in the United States. That status has not been separately
   verified for every distribution territory. The connection of a verse
   to a feature on the ground is the author's own argument, not a claim
   in the text itself. */
(function () {
  var S = {
    'lb-extent': {
      head: 'The stronghold David took',
      refs: [
        { r: '2 Samuel 5:7, 9', t: '"Nevertheless David took the stronghold of Zion; the same is the city of David... And David dwelt in the stronghold, and called it the city of David. And David built round about from Millo and inward."' },
        { r: '1 Chronicles 11:7–8', t: '"And David dwelt in the stronghold; therefore they called it the city of David. And he built the city round about, from Millo even round about; and Joab repaired the rest of the city."' },
        { r: 'Joshua 15:63', t: '"As for the Jebusites, the inhabitants of Jerusalem, the children of Judah could not drive them out: but the Jebusites dwelt with the children of Judah at Jerusalem, unto this day."' }
      ]
    },
    'lb-acropolis': {
      head: 'The Jebusite town',
      refs: [{ r: 'Judges 19:10–11', t: '"...and came over against Jebus (the same is Jerusalem)... And when they were by Jebus, the day was far spent; and the servant said unto his master, Come, I pray thee, and let us turn in into this city of the Jebusites, and lodge in it."' }]
    },
    'mb-springtower': {
      head: 'Water inside the walls',
      refs: [{ r: '2 Samuel 5:8', t: '"...Whosoever smiteth the Jebusites, let him get up to the watercourse, and smite the lame and the blind, that are hated of David\u2019s soul..." The Hebrew word for that passage, tsinnor, was read as Warren\u2019s Shaft for a century. These two works are the alternative: a fortified tower standing over the spring and a rock-cut pool behind it, together giving the Jebusites water they could reach without leaving their defences.' }],
      ctx: 'The Spring Tower and the rock-cut pool are one system, and one verse argues over them.'
    },
    'eb-spring': {
      head: 'Gihon — the spring of the anointing',
      refs: [
        { r: '1 Kings 1:38–40', t: '"So Zadok the priest, and Nathan the prophet... went down, and caused Solomon to ride upon king David\u2019s mule, and brought him to Gihon. And Zadok the priest took the horn of oil out of the Tent, and anointed Solomon. And they blew the trumpet; and all the people said, Long live king Solomon. And all the people came up after him... so that the earth rent with the sound of them."' },
        { r: '1 Kings 1:33–34', t: '"...cause Solomon my son to ride upon mine own mule, and bring him down to Gihon: and let Zadok the priest and Nathan the prophet anoint him there king over Israel."' },
        { r: 'Genesis 2:13', t: '"And the name of the second river is Gihon: the same is it that compasseth the whole land of Cush." A river of Eden bears the same name — a devotional association through shared naming, not a geographic identification of the two waters.' }
      ]
    },
    'hez-tunnel': {
      head: 'Hezekiah stops the water',
      refs: [
        { r: '2 Kings 20:20', t: '"...and how he made the pool, and the conduit, and brought water into the city, are they not written in the book of the chronicles of the kings of Judah?"' },
        { r: '2 Chronicles 32:30', t: '"This same Hezekiah also stopped the upper spring of the waters of Gihon, and brought them straight down on the west side of the city of David. And Hezekiah prospered in all his works."' },
        { r: 'Isaiah 22:9, 11', t: '"...and ye have seen the breaches of the city of David, that they are many... Ye made also a reservoir between the two walls for the water of the old pool: but ye looked not unto him that had done this." Isaiah watches the same works and objects that Jerusalem trusted its engineering and not its God.' },
        { r: 'Isaiah 8:6', t: '"Forasmuch as this people have refused the waters of Shiloah that go softly..." — the quiet flow of this system, set against the flood of Assyria that follows in the same passage.' }
      ]
    },
    'siloam-insc': {
      head: 'The tunnellers\u2019 own words',
      refs: [{ r: '2 Chronicles 32:30', t: '"This same Hezekiah also stopped the upper spring of the waters of Gihon, and brought them straight down on the west side of the city of David." The inscription found in the tunnel records the moment the two crews met, pick answering pick — the only first-hand voice from the work Chronicles summarises in a sentence.' }]
    },
    'warren-shaft': {
      head: 'The verse that named the shaft',
      refs: [{ r: '2 Samuel 5:8', t: '"...Whosoever smiteth the Jebusites, let him get up to the watercourse..." This passage, naming a tsinnor, was identified with this feature for a century. Reich and Shukron\u2019s excavation showed that the passage was not originally designed for drawing water at the shaft, substantially weakening the traditional identification. The meaning of tsinnor and the route of entry remain disputed.' }]
    },
    'ir-pool': {
      head: 'The pool the conduit filled',
      refs: [{ r: 'Isaiah 22:11', t: '"Ye made also a reservoir between the two walls for the water of the old pool..."' }, { r: 'Nehemiah 3:15', t: '"...and the wall of the pool of Shelah by the king\u2019s garden, even unto the stairs that go down from the city of David."' }]
    },
    'siloam-pool': {
      head: 'Siloam — sent, and washed',
      refs: [
        { r: 'John 9:6–7, 11', t: '"...he spat on the ground, and made clay of the spittle, and anointed his eyes with the clay, and said unto him, Go, wash in the pool of Siloam (which is by interpretation, Sent). He went away therefore, and washed, and came seeing... I went away and washed, and I received sight."' },
        { r: 'John 7:37–38', t: '"Now on the last day, the great day of the feast, Jesus stood and cried, saying, If any man thirst, let him come unto me, and drink. He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water." Commonly read against the Feast of Tabernacles\u2019 water-libation ceremony, though whether this is the feast\u2019s seventh or eighth day is debated.' },
        { r: 'Luke 13:4', t: '"Or those eighteen, upon whom the tower in Siloam fell, and killed them, think ye that they were sinners above all the men that dwell in Jerusalem?"' },
        { r: 'Isaiah 12:3', t: '"Therefore with joy shall ye draw water out of the wells of salvation." The verse recited at the Tabernacles water-drawing.' }
      ],
      ctx: 'Each morning of Tabernacles a priest filled a golden pitcher at Siloam and led a procession up this ridge to the Temple, where the water was poured out beside the wine at the altar. It is the ceremony standing behind John 7 — and the pool where the man born blind was sent to wash in John 9. Both scenes begin at the bottom of this drawing and move up it.'
    },
    'pilgrim-road': {
      head: 'The ascent',
      refs: [
        { r: 'Psalm 122:1–2', t: '"I was glad when they said unto me, Let us go unto the house of Jehovah. Our feet are standing within thy gates, O Jerusalem." A song of ascents sung on a road like this one.' },
        { r: 'Psalm 84:7', t: '"They go from strength to strength; Every one of them appeareth before God in Zion."' },
        { r: 'Luke 2:41–42', t: '"And his parents went every year to Jerusalem at the feast of the passover. And when he was twelve years old, they went up after the custom of the feast." They would have approached the Temple by an earlier route; the monumental paving shown here was built later, under Pontius Pilate.' },
        { r: 'John 7:14', t: '"But when it was now the midst of the feast, Jesus went up into the temple, and taught." A route along this corridor is plausible; the surviving monumental pavement may have been completed during or after his ministry.' }
      ],
      ctx: 'The stepped street runs 600 m from the Pool of Siloam at the bottom of the ridge to the Temple Mount at the top, climbing roughly 30 m. Anyone coming to the Temple from the south walked it. The water-drawing procession of Tabernacles came up it with the golden pitcher.'
    },
    'sss': {
      head: 'The Millo?',
      refs: [{ r: '2 Samuel 5:9', t: '"...And David built round about from Millo and inward." A name from a root meaning to fill, often identified with monumental terracing of this kind.' }, { r: '1 Kings 9:15, 24', t: '"...to build the house of Jehovah, and his own house, and Millo, and the wall of Jerusalem... then did he build Millo." The identification is old and still argued.' }]
    },
    'lss': {
      head: 'A house for a king',
      refs: [{ r: '2 Samuel 5:11', t: '"And Hiram king of Tyre sent messengers to David, and cedar-trees, and carpenters, and masons: and they built David a house."' }, { r: '2 Samuel 11:2', t: '"...David arose from off his bed, and walked upon the roof of the king\u2019s house: and from the roof he saw a woman bathing..." A vantage that fits a building on this spot.' }]
    },
    'ir2a-capital': {
      head: 'Royal building',
      refs: [{ r: '1 Kings 7:1–2', t: '"And Solomon was building his own house thirteen years, and he finished all his house. For he built the house of the forest of Lebanon... upon four rows of cedar pillars, with cedar beams upon the pillars." This find belongs to the same elite architectural tradition but cannot be assigned to Solomon\u2019s palace or equated with the capitals described here.' }]
    },
    'broad-wall': {
      head: 'Breaking down the houses',
      refs: [{ r: 'Isaiah 22:9–10', t: '"...and ye have seen the breaches of the city of David, that they are many... And ye numbered the houses of Jerusalem, and brake down the houses to fortify the wall."' }, { r: 'Nehemiah 3:8', t: '"...and they fortified Jerusalem even unto the broad wall." The broad wall, named in the list of repairs.' }]
    }
  };

  var DEST = {
    head: 'The city falls',
    refs: [
      { r: '2 Kings 25:9–10', t: '"And he burnt the house of Jehovah, and the king\u2019s house; and all the houses of Jerusalem, even every great house, burnt he with fire. And all the army of the Chaldeans... brake down the walls of Jerusalem round about."' },
      { r: '2 Chronicles 36:19', t: '"And they burnt the house of God, and brake down the wall of Jerusalem, and burnt all the palaces thereof with fire, and destroyed all the goodly vessels thereof."' },
      { r: 'Lamentations 1:1', t: '"How doth the city sit solitary, that was full of people! She is become as a widow, that was great among the nations!" A lament over a once-crowded city now left empty and grieving — composed over ruins of the kind drawn here.' },
      { r: 'Jeremiah 39:2, 8', t: '"...a breach was made in the city... And the Chaldeans burned the king\u2019s house, and the houses of the people, with fire, and brake down the walls of Jerusalem." The eighteen-month siege, the breach, and the burning.' }
    ]
  };

  var NEH = {
    head: 'Building the wall again',
    refs: [
      { r: 'Nehemiah 2:13, 15', t: '"...viewing the walls of Jerusalem, which were broken down, and the gates thereof were consumed with fire... Then went I up in the night by the brook, and viewed the wall; and I turned back, and entered by the valley gate, and so returned." Nehemiah\u2019s night ride around the ruined circuit.' },
      { r: 'Nehemiah 3:1–32', t: 'The repair list, family by family and gate by gate — opening: "Then Eliashib the high priest rose up with his brethren the priests, and they built the sheep gate; they sanctified it, and set up the doors of it..."' },
      { r: 'Nehemiah 8:1, 3', t: '"...all the people gathered themselves together as one man into the broad place that was before the water gate... And he read therein... from early morning until midday... and the ears of all the people were attentive unto the book of the law."' },
      { r: 'Nehemiah 12:37', t: '"...went up by the stairs of the city of David, at the going up of the wall, above the house of David, even unto the water gate eastward." The dedication procession.' }
    ]
  };

  ['burn', 'collapse', 'arrowheads'].forEach(function (k) { if (!S[k]) S[k] = DEST; });
  ['neh-wall', 'persian-settle'].forEach(function (k) { if (!S[k]) S[k] = NEH; });

  S['mb-pool'] = S['mb-springtower'];   // one system, one card

  window.COD_SCRIPTURE = S;
})();
