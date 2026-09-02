/* Biblical passages tied to specific features of the ridge.
   Keyed by feature id in cod-data.js. Kept in its own file so the
   archaeological data stays independent of the scripture layer. */
(function () {
  var S = {
    'lb-extent': {
      head: 'The stronghold David took',
      refs: [
        { r: '2 Samuel 5:6–9', t: 'David takes "the strong hold of Zion" from the Jebusites and settles in it; the narrator adds that he built "round about from Millo and inward."' },
        { r: '1 Chronicles 11:4–8', t: 'The parallel account, which credits Joab with leading the assault.' },
        { r: 'Joshua 15:63', t: 'The Jebusites are still holding Jerusalem generations after the conquest.' }
      ]
    },
    'lb-acropolis': {
      head: 'The Jebusite town',
      refs: [{ r: 'Judges 19:10–11', t: 'Jerusalem called Jebus, "the city of the Jebusites" — a town a traveller could pass by rather than a capital.' }]
    },
    'mb-springtower': {
      head: 'Water inside the walls',
      refs: [{ r: '2 Samuel 5:8', t: 'The famous crux — "whosoever getteth up to the gutter" (Hebrew tsinnor). The word was read as Warren\'s Shaft for a century. These two works are the alternative: a fortified tower standing over the spring and a rock-cut pool behind it, together giving the Jebusites water they could reach without leaving their defences.' }],
      ctx: 'The Spring Tower and the rock-cut pool are one system, and one verse argues over them.'
    },
    'eb-spring': {
      head: 'Gihon — the spring of the anointing',
      refs: [
        { r: '1 Kings 1:38–40', t: 'Zadok the priest and Nathan the prophet bring Solomon down to Gihon, anoint him there, and the people come up after him rejoicing, "so that the earth rent with the sound."' },
        { r: '1 Kings 1:32–35', t: 'David\'s instruction: set Solomon on the king\'s mule, take him to Gihon, blow the trumpet.' },
        { r: 'Genesis 2:13', t: 'A river of Eden bears the same name — living water at the foot of the holy mountain.' }
      ]
    },
    'hez-tunnel': {
      head: 'Hezekiah stops the water',
      refs: [
        { r: '2 Kings 20:20', t: 'Hezekiah "made a pool, and a conduit, and brought water into the city."' },
        { r: '2 Chronicles 32:2–4, 30', t: 'Facing Sennacherib, Hezekiah stops the upper watercourse of Gihon and brings it straight down to the west side of the city of David.' },
        { r: 'Isaiah 22:9–11', t: 'Isaiah watches the same works and objects that Jerusalem trusted its engineering and not its God.' },
        { r: 'Isaiah 8:6', t: 'The waters of Shiloah that "go softly" — the quiet flow of this system, set against the flood of Assyria.' }
      ]
    },
    'siloam-insc': {
      head: 'The tunnellers\' own words',
      refs: [{ r: '2 Chronicles 32:30', t: 'The inscription found here records the moment the two crews met, pick answering pick — the only first-hand voice from the work Chronicles summarises in a sentence.' }]
    },
    'warren-shaft': {
      head: 'The verse that named the shaft',
      refs: [{ r: '2 Samuel 5:8', t: 'The "gutter" of the King James text was identified with this shaft for a century. Reich and Shukron\'s excavation ended that reading; the verse remains, the identification does not.' }]
    },
    'ir-pool': {
      head: 'The pool the conduit filled',
      refs: [{ r: 'Isaiah 22:11', t: '"Ye made also a ditch between the two walls for the water of the old pool."' }, { r: 'Nehemiah 3:15', t: 'The pool of Siloah by the king\'s garden, repaired with the wall.' }]
    },
    'siloam-pool': {
      head: 'Siloam — sent, and washed',
      refs: [
        { r: 'John 9:1–11', t: 'Jesus anoints a blind man\'s eyes and sends him here: "Go, wash in the pool of Siloam (which is by interpretation, Sent). He went his way therefore, and washed, and came seeing."' },
        { r: 'John 7:37–38', t: 'On the last and great day of the Feast of Tabernacles — the day the water drawn from this pool was carried up and poured out at the altar — Jesus stands and cries, "If any man thirst, let him come unto me, and drink."' },
        { r: 'Luke 13:4', t: 'The tower in Siloam that fell, in the neighbourhood of this pool.' },
        { r: 'Isaiah 12:3', t: '"With joy shall ye draw water out of the wells of salvation" — the verse recited at the water-drawing.' }
      ],
      ctx: 'Each morning of Tabernacles a priest filled a golden pitcher at Siloam and led a procession up this ridge to the Temple, where the water was poured out beside the wine at the altar. It is the ceremony standing behind John 7 — and the pool where the man born blind was sent to wash in John 9. Both scenes begin at the bottom of this drawing and move up it.'
    },
    'pilgrim-road': {
      head: 'The ascent',
      refs: [
        { r: 'Psalm 122:1–4', t: '"Our feet shall stand within thy gates, O Jerusalem" — a song of ascents sung on a road like this one.' },
        { r: 'Psalm 84:5–7', t: 'The pilgrims who go from strength to strength, every one appearing before God in Zion.' },
        { r: 'Luke 2:41–42', t: 'Joseph and Mary going up to Jerusalem every year at the feast; a twelve-year-old walking this street.' },
        { r: 'John 7:14', t: 'Jesus going up into the temple in the midst of the feast — this is the street he climbed.' }
      ],
      ctx: 'The stepped street runs 600 m from the Pool of Siloam at the bottom of the ridge to the Temple Mount at the top, climbing roughly 30 m. Anyone coming to the Temple from the south walked it. The water-drawing procession of Tabernacles came up it with the golden pitcher.'
    },
    'sss': {
      head: 'The Millo?',
      refs: [{ r: '2 Samuel 5:9', t: 'David built "from Millo and inward" — Millo, from a root meaning to fill, is often identified with monumental terracing of this kind.' }, { r: '1 Kings 9:15, 24', t: 'Solomon builds the wall of Jerusalem and Millo; the identification is old and still argued.' }]
    },
    'lss': {
      head: 'A house for a king',
      refs: [{ r: '2 Samuel 5:11', t: 'Hiram of Tyre sends carpenters and masons, "and they built David an house."' }, { r: '2 Samuel 11:2', t: 'David walking on the roof of his house, looking down over the city — a vantage that fits a building on this spot.' }]
    },
    'ir2a-capital': {
      head: 'Royal building',
      refs: [{ r: '1 Kings 7:1–12', t: 'Solomon\'s palace complex — cedar, hewn stone, and carved capitals of exactly this class.' }]
    },
    'broad-wall': {
      head: 'Breaking down the houses',
      refs: [{ r: 'Isaiah 22:9–10', t: '"Ye have seen also the breaches of the city of David… and ye have broken down the houses to fortify the wall."' }, { r: 'Nehemiah 3:8', t: 'The broad wall, named in the list of repairs.' }]
    }
  };

  var DEST = {
    head: 'The city falls',
    refs: [
      { r: '2 Kings 25:8–10', t: 'Nebuzaradan burns the house of the Lord and the king\'s house, and breaks down the walls of Jerusalem round about.' },
      { r: '2 Chronicles 36:17–20', t: 'The Chronicler\'s account of the same destruction and the deportation.' },
      { r: 'Lamentations 1:1–4', t: 'The city sitting solitary, her ways mourning — written over ruins of the kind drawn here.' },
      { r: 'Jeremiah 39:1–8', t: 'The eighteen-month siege, the breach, and the burning.' }
    ]
  };

  var NEH = {
    head: 'Building the wall again',
    refs: [
      { r: 'Nehemiah 2:12–15', t: 'Nehemiah\'s night ride around the ruined circuit — up the brook, viewing the wall, and back in by the gate of the valley.' },
      { r: 'Nehemiah 3:1–32', t: 'The repair list, family by family and gate by gate.' },
      { r: 'Nehemiah 8:1–8', t: 'All the people gathered as one man into the street before the water gate; Ezra reads the law from morning until midday, and the Levites give the sense.' },
      { r: 'Nehemiah 12:37', t: 'The dedication procession going up by the stairs of the city of David.' }
    ]
  };

  ['burn', 'collapse', 'arrowheads'].forEach(function (k) { if (!S[k]) S[k] = DEST; });
  ['neh-wall', 'persian-settle'].forEach(function (k) { if (!S[k]) S[k] = NEH; });

  S['mb-pool'] = S['mb-springtower'];   // one system, one card

  window.COD_SCRIPTURE = S;
})();
