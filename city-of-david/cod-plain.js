/* Plain-language layer. Every named thing on the drawings gets a short everyday label and a
   one-sentence explanation a 14-year-old can read without prior knowledge, plus a per-phase
   "what you are looking at" headline. Keyed by the exact `n` used in cod-data.js / cod-elev.js. */
(function () {

  /* SHORT: the everyday name drawn on the map. WHY: what it was for, in one plain sentence. */
  var S = {};
  function s(name, short, why) { S[name] = { short: short, why: why }; }

  // --- Chalcolithic & Early Bronze
  s('Occupation traces beside the Gihon Spring', 'Camp by the spring', 'Broken pots and flint tools show people were living here — but no walls survive, so we cannot draw their houses.');
  s('Early Bronze houses on the eastern slope', 'First houses', 'A handful of farming families lived on the slope so they could reach the spring.');
  s('Chalcolithic material (redeposited)', 'Oldest scattered finds', 'The oldest objects on the ridge, but found mixed into later soil — so we cannot say where anyone actually lived.');
  s('Early Bronze dwelling (fragmentary)', 'Farmhouse', 'A one-room house of stone and mud. Only fragments of the walls survive.');
  s('Occupation terrace above the spring', 'Flat working ground', 'A levelled patch of hillside for living and working on.');
  s('Spring outlet in section', 'Where the water comes out', 'The Gihon Spring bursts out of the rock here, low down the hillside.');

  // --- Middle Bronze
  s('Spring Tower', 'Stone tower over the spring', 'A fortress built right on top of the spring so an enemy could never cut off the water. Its walls are about 7 m thick — as thick as a room is wide.');
  s('Spring Tower — walls c. 7 m thick', 'Stone tower over the spring', 'A fortress built right on top of the spring so an enemy could never cut off the water. Its walls are about 7 m thick — as thick as a room is wide.');
  s('Rock-cut fortified pool', 'Guarded reservoir', 'A huge tank carved down into the bedrock, holding spring water safely inside the walls in case of a siege.');
  s('Pool Tower', 'Second tower', 'The tower guarding the far side of the reservoir.');
  s('Channel II', 'Open water channel', 'A stone-lined channel carrying spring water south along the hillside to water the gardens below.');
  s('Middle Bronze fortification line', 'City wall', 'The wall around the town. We have found pieces of it; the line between them is our best guess.');
  s('Middle Bronze wall on the crest', 'City wall', 'A surviving chunk of the town wall along the top of the ridge.');
  s("Warren's Shaft system — upper tunnel", 'Passage down to the water', 'A tunnel cut through the rock so people could reach the spring without leaving the safety of the walls.');
  s("Warren's Shaft passage", 'Passage down to the water', 'A tunnel cut through the rock so people could reach the spring without leaving the safety of the walls.');

  // --- Late Bronze
  s('Extent of the Jebusite town (reconstructed)', 'Edge of the town', 'Roughly how far the town spread — about 4 hectares, or six football pitches.');
  s('Acropolis / rulers\u2019 quarter (location proposed)', 'Where the ruler probably lived', 'Letters to Egypt prove this town had a ruler with a palace and soldiers. Nobody has found the palace.');
  s("Rulers' quarter (position proposed)", 'Where the ruler probably lived', 'Letters to Egypt prove this town had a ruler with a palace and soldiers. Nobody has found the palace.');
  s('Stepped terraces beneath the Stepped Stone Structure', 'Artificial terraces', 'Stone-filled boxes built to turn a steep slope into flat ground you can build on. Nobody agrees when they were made.');
  s('Terrace fills beneath the stone mantle', 'Artificial terraces', 'Stone-filled boxes built to turn a steep slope into flat ground you can build on. Nobody agrees when they were made.');
  s('Late Bronze burial finds, Kidron slope', 'Graves', 'Tombs holding pottery imported from Cyprus and Greece — proof this small town traded far away.');
  s('Late Bronze house', 'House', 'One of very few Late Bronze buildings found here.');

  // --- Iron IIA
  s('Stepped Stone Structure', 'Giant stone staircase-wall', 'An 18 m wall of stone stepping down the hillside — as tall as a six-storey building, and the biggest ancient structure on this ridge.');
  s('Stepped Stone Structure — c. 18 m high', 'Giant stone staircase-wall', 'An 18 m wall of stone stepping down the hillside — as tall as a six-storey building, and the biggest ancient structure on this ridge.');
  s('Large Stone Structure', 'Big walls — a palace?', 'One archaeologist said these thick walls are King David\u2019s palace. Others say they are several different walls from different centuries. Still argued about.');
  s('Proto-Aeolic capital (find spot)', 'Carved stone from a grand building', 'The decorated top of a column, of a kind only used in royal buildings. Found fallen on the slope — we do not know which building it fell from.');
  s('Eastern city wall (Iron IIA)', 'City wall', 'The wall along the eastern edge of the town.');
  s('Eastern city wall', 'City wall', 'The wall along the eastern edge of the town.');
  s('Iron IIA buildings on the eastern terraces', 'Houses', 'Ordinary homes on the terraces, under the better-preserved later houses.');
  s('Iron IIA house on the terraces', 'House', 'An ordinary family home built on a levelled terrace.');

  // --- Iron IIB–C
  s("Hezekiah's Tunnel", 'Secret water tunnel', 'A 533 m tunnel hacked through solid rock by two teams digging towards each other — so the city could drink during a siege. It drops only 30 cm over its whole length.');
  s("Hezekiah's Tunnel — falls only 30 cm in 533 m", 'Secret water tunnel', 'A 533 m tunnel hacked through solid rock by two teams digging towards each other — so the city could drink during a siege. It drops only 30 cm over its whole length.');
  s('Siloam Inscription (find spot)', 'The diggers\u2019 message', 'Writing carved in the tunnel wall describing the moment the two teams heard each other through the rock and broke through. No king is mentioned — the workers wrote it.');
  s("Warren's Shaft", 'Deep natural shaft', 'A natural hole in the rock, about 13 m deep, that the tunnellers cut into by accident.');
  s('Iron Age pool at the southern tip', 'Reservoir', 'Where the tunnel emptied out — a tank holding the water at the bottom end of the city.');
  s('Iron Age pool', 'Reservoir', 'Where the tunnel emptied out — a tank holding the water at the bottom end of the city.');
  s('Broad Wall (western hill)', 'The 7 m thick wall', 'A wall so thick you could park two cars across it, thrown up in a hurry when the Assyrian army was coming. It is on the next hill over.');
  s('Ashlar House', 'House with cut-stone corners', 'A well-off family\u2019s home — most houses used rough stone, this one had properly cut blocks at the corners.');
  s('House of Ahiel', 'The house with the toilet', 'A four-room family house. A pot fragment gave us the owner\u2019s name, and a carved stone toilet seat survived in a side room.');
  s('Burnt Room', 'The burnt room', 'A room packed with charcoal — including burnt furniture made from wood imported from abroad.');
  s('Bullae House', 'The office that burned', 'An office full of clay seal-stamps. The fire that destroyed it baked the clay hard, so 51 of them survived with officials\u2019 names on.');
  s('LMLK jar handles (find spots)', 'Royal storage jars', 'Jar handles stamped "belonging to the king" — supplies stockpiled by the government before the Assyrian attack.');
  s('Terrace houses on the eastern slope', 'Packed housing', 'Homes stacked down the slope on terraces — the most crowded this hillside ever got in the Iron Age.');
  s('Terrace house', 'House', 'A family home on an artificial terrace.');
  s('City wall, 8th century', 'City wall', 'The wall protecting the eastern side of the city.');

  // --- 586 BCE
  s('Destruction layer, Area G', 'The burnt layer', 'Up to a metre of ash, smashed pots and fallen stone — the city burning in 586 BCE, frozen in the ground.');
  s('Destruction debris over the terraces', 'The burnt layer', 'Up to a metre of ash, smashed pots and fallen stone — the city burning in 586 BCE, frozen in the ground.');
  s('Arrowheads (Scythian and local types)', 'Arrowheads', 'Arrowheads of two different armies mixed together in the ash — the actual fighting, left where it happened.');
  s('Collapse of the terrace system', 'The hillside slid', 'Once the houses burned, the terraces holding them up gave way and slid downhill — which is why so much survived, buried.');
  s('Collapsed terrace wall', 'Collapsed terrace', 'A terrace wall that failed after the fire.');

  // --- Persian & Hasmonean
  s('Contracted Persian-period settlement', 'A much smaller town', 'After the exile, maybe a few hundred people lived here — a village on the ruins of a city.');
  s('Wall attributed to Nehemiah (proposed)', 'Nehemiah\u2019s wall?', 'The Bible says Nehemiah rebuilt the wall in 52 days. Whether this is that wall is genuinely argued about.');
  s('Wall attributed to Nehemiah', 'Nehemiah\u2019s wall?', 'The Bible says Nehemiah rebuilt the wall in 52 days. Whether this is that wall is genuinely argued about.');
  s('Seleucid Akra (proposed identification)', 'A Greek fort?', 'A massive wall, tower and sling-bullets from a Greek garrison. It may be the fortress the Maccabees besieged — or a different fort entirely.');
  s('Glacis and tower of the proposed Akra', 'A Greek fort?', 'A sloping stone rampart and tower, with sling-bullets and arrowheads scattered around it.');
  s('Hasmonean fortification and buildings', 'City wall rebuilt', 'When Judea became independent again, the ridge was walled once more.');
  s('Hasmonean city wall', 'City wall rebuilt', 'When Judea became independent again, the ridge was walled once more.');
  s('Yehud and rhodian stamped handles', 'Stamped jar handles', 'Official stamps naming the province, plus imported wine jars — the clearest trace of this quiet period.');
  s('Persian-period house', 'House', 'A modest home from the small post-exile settlement.');

  // --- Herodian
  s('Pool of Siloam (monumental, stepped)', 'Huge stepped bathing pool', 'A pool over 60 m along one side with wide stone steps, where pilgrims washed before walking up to the Temple. Found by accident in 2004 during sewer repairs.');
  s('Pool of Siloam — over 60 m along one side', 'Huge stepped bathing pool', 'A pool over 60 m along one side with wide stone steps, where pilgrims washed before walking up to the Temple. Found by accident in 2004 during sewer repairs.');
  s('Pilgrimage Road (stepped street)', 'The pilgrims\u2019 stepped street', 'A stone-paved street 8 m wide climbing 600 m from the pool to the Temple. Coins under the paving date it to about 31 CE.');
  s('Pilgrimage Road — 8 m wide, c. 600 m long', 'The pilgrims\u2019 stepped street', 'A stone-paved street 8 m wide climbing 600 m from the pool to the Temple. Coins under the paving date it to about 31 CE.');
  s('Drainage channel beneath the street', 'Tunnel under the street', 'A stone drain big enough to walk through. People hid in it during the Roman siege — their cooking pots and coins are still there.');
  s("Ritual baths (miqva'ot)", 'Bathing pools', 'Small stepped pools cut into the rock where people washed to make themselves ritually clean.');
  s('Ritual bath', 'Bathing pool', 'A small stepped pool for ritual washing.');
  s('Mansions attributed to the Adiabene royal house', 'Rich mansion', 'A grand house. A Roman historian says a foreign royal family who converted to Judaism had palaces here — but nothing found says their name.');
  s('Theodotus synagogue inscription (find spot)', 'The synagogue stone', 'A stone recording a synagogue with guest rooms and washing places for pilgrims from abroad — the earliest evidence of a synagogue building in Jerusalem.');
  s('Late Second Temple houses and shops', 'Houses and shops', 'Shops opened straight onto the street, with homes behind them.');

  // --- 70 CE
  s('Destruction debris over the street', 'Rubble on the street', 'Burnt beams and collapsed stone lying directly on the paving — the city destroyed in 70 CE.');
  s('Southern limit of Aelia Capitolina', 'Edge of the new Roman city', 'When Rome rebuilt Jerusalem, they built north of here and left this ridge outside — empty for 250 years.');
  s('Quarrying and robbing of the ruins', 'Stone robbed out', 'Roman builders dug into the ruins to take the stone away and reuse it.');

  // --- Byzantine
  s('Siloam Church (attributed to Eudocia)', 'Church over the pool', 'A church built right over the pool, because the gospels mention it. Christian pilgrims came here to wash.');
  s('Pilgrimage complex at the pool', 'Buildings for pilgrims', 'Courtyards, steps and lodgings for the crowds visiting the pool.');
  s('Byzantine city wall around the ridge', 'Wall around the ridge again', 'For the first time since 70 CE the ridge was walled back into the city.');
  s('Byzantine houses and streets', 'A full neighbourhood', 'The ridge filled up with houses again — more people lived here now than at almost any other time.');
  s('Byzantine house', 'House', 'A stone house with plastered floors.');

  // --- Early Islamic
  s('Umayyad-period buildings', 'Large new buildings', 'Well-built stone buildings, some very large, put up while Jerusalem was being grandly rebuilt.');
  s('Collapse in the 749 CE earthquake', 'Earthquake collapse', 'Walls found lying flat, all fallen the same way, with crushed pots underneath — an earthquake in 749 CE.');
  s('Contraction and abandonment', 'People leave', 'After the earthquake nobody rebuilt at the same scale. The ridge slowly emptied.');

  // --- Medieval–Ottoman
  s('Agricultural terracing', 'Farm terraces', 'Stone walls turning the slope into flat strips for olives, figs and vegetables. Many "ancient" walls you see here are actually these.');
  s('Village of Silwan (original core, east of the Kidron)', 'The village of Silwan', 'A village grew on the far side of the valley — some families lived inside Iron Age rock-cut tombs.');
  s('Village spreading onto the ridge', 'Village reaches the ridge', 'Houses crossed the valley and spread over the buried ancient city.');
  s('Cemeteries and field walls', 'Fields and burial plots', 'The southern tip stayed open ground.');

  // --- Modern
  s('Area G — Kenyon (1961–67) and Shiloh (1978–85)', 'The main dig', 'The deep cut through the slope that exposed the giant stone structure, the Iron Age houses and the 586 BCE burnt layer.');
  s('Givati Parking Lot excavation (2007– )', 'The car park dig', 'The biggest open excavation here, cutting through every layer from the Iron Age to the 8th century CE.');
  s('Reich & Shukron — spring and pool (1995–2010)', 'The spring dig', 'The dig that found the Bronze Age water fortress and, in 2004, the huge Herodian pool.');
  s('Weill excavation (1913–14, 1923–24)', 'Weill\u2019s dig', 'Where the synagogue inscription and a set of rock-cut chambers were found.');
  s('Macalister & Duncan (1923–25)', 'An early dig', 'They uncovered the top of the giant stone structure — and dated it wrongly.');
  s('Parker Mission tunnels (1909–11)', 'The treasure hunt', 'A British expedition digging for the Ark of the Covenant. They cleared the ancient tunnels and were chased out of the country.');
  s("Warren's tunnels (1867)", 'Warren\u2019s tunnels', 'A Victorian army officer mined sideways into the hill because he was not allowed to dig from above.');
  s('Bliss & Dickie (1894–97)', 'Bliss and Dickie\u2019s tunnels', 'They tunnelled along the buried city wall to trace where it ran.');
  s('Pilgrimage Road tunnel excavation (2013– )', 'Digging the street, underground', 'The Roman street is being dug out by tunnelling beneath the modern neighbourhood — the most argued-about method used here.');
  s('Archaeological park boundary', 'The visitor site', 'The area open to visitors today.');
  s('Wadi Hilweh / Silwan today', 'People\u2019s homes today', 'Several thousand people live directly above the excavations. Residents and some archaeologists object to the digging.');
  s('Modern house, Wadi Hilweh', 'A house, today', 'A present-day home standing over the ancient city.');
  s('Visitor centre', 'Visitor centre', 'The entrance to the archaeological park.');

  // --- names used only by the elevation/3D building list
  s('Mansion attributed to the Adiabene royal house', 'Rich mansion', 'A grand house. A Roman historian says a foreign royal family who converted to Judaism had palaces here — but nothing found says their name.');
  s('Shops fronting the street', 'Shops', 'Small rooms opening straight onto the pilgrim street, selling food and offerings.');
  s('Synagogue of the Theodotus inscription', 'Synagogue for visiting pilgrims', 'A synagogue with guest rooms and washing places, built for Jews travelling from abroad. We know it from an inscription found nearby.');
  s('Collapse over the paving stones', 'Rubble on the street', 'Burnt beams and fallen stone lying straight on the paving — the city destroyed in 70 CE.');
  s('Roman quarry pit', 'Stone robbed out', 'A pit dug by Roman builders to take away stone from the ruins and reuse it.');
  s('Pilgrim lodgings at the pool', 'Rooms for pilgrims', 'Somewhere to sleep for Christian visitors who came to wash in the pool.');
  s('City wall around the southern ridge', 'Wall around the ridge again', 'For the first time since 70 CE the ridge was walled back inside the city.');
  s('Umayyad building, Givati area', 'Large new building', 'A big, well-built stone building put up while Jerusalem was being grandly rebuilt in the 7th–8th centuries.');
  s('Umayyad house', 'House', 'A stone house with plastered floors, from the first Islamic centuries.');
  s('Walls fallen flat in the 749 earthquake', 'Earthquake collapse', 'Walls found lying flat, all fallen the same way, with crushed pots beneath — an earthquake in 749 CE.');
  s('Agricultural terrace wall', 'Farm terrace wall', 'A dry-stone wall holding back soil to make a flat strip for crops. Many "ancient" walls here are actually these.');
  s('Silwan village house', 'Village house', 'A house of the village of Silwan, built over the buried ancient city.');
  s('Wadi Hilweh house', 'A house, today', 'A present-day home. Several thousand people live directly above the excavations.');
  s('Area G excavation cut', 'The main dig', 'The deep cut through the slope that exposed the giant stone structure, the Iron Age houses and the 586 BCE burnt layer.');
  s('Visitor entrance', 'Way in for visitors', 'The entrance to the archaeological park.');
  s('Modern retaining wall', 'Modern retaining wall', 'A present-day wall holding up the slope above the excavations.');

  /* Per-phase orientation: what a newcomer is actually looking at right now. */
  var SCENE = {
    chalco:  { one: 'A bare hillside with a spring at the bottom.', two: 'A few farming families camp near the water. Nothing is built yet — the shapes on screen are where their rubbish and tools were found, not buildings.' },
    mb2:     { one: 'Canaanites wrap the spring in a stone fortress.', two: 'Two enormous towers and a rock-cut reservoir make sure nobody can cut off the water. This is the biggest thing anyone builds here for 800 years.' },
    lb:      { one: 'A small town that writes letters to Egypt.', two: 'We know its ruler\u2019s name — Abdi-Heba — from clay tablets found in Egypt. We have almost none of his town, which is the puzzle of this period.' },
    ir2a:    { one: 'A giant stone wall steps down the hillside.', two: 'Two huge structures dominate the slope. Whether one of them is King David\u2019s palace is the most argued-about question in the archaeology of Jerusalem.' },
    ir2bc:   { one: 'A real city, with a tunnel hidden under it.', two: 'Packed houses on the slope, a city wall, and a 533 m water tunnel cut through solid rock so the city could survive a siege.' },
    d586:    { one: 'The city burns.', two: 'Everything you saw in the last phase is now under a metre of ash, with arrowheads from both armies lying in it. The hillside itself collapses.' },
    pershas: { one: 'A village on the ruins, then a Greek fort.', two: 'A few hundred people return from exile. Centuries later a Greek garrison fort may stand at the north end — that identification is disputed.' },
    herod:   { one: 'A pilgrim highway from a giant pool to the Temple.', two: 'Hundreds of thousands of visitors wash in the pool at the bottom and walk an 8 m wide stone street uphill. There is a walkable drain underneath it.' },
    d70:     { one: 'Destroyed, then deliberately left out.', two: 'Rome burns the city in 70 CE, then rebuilds it to the north and leaves this ridge outside the walls. Nothing is built here for 250 years.' },
    byz:     { one: 'A church over the pool, and people again.', two: 'Christian pilgrims come to the pool because the gospels name it. A wall goes back around the ridge and the neighbourhood fills up.' },
    islam:   { one: 'Big new buildings, then an earthquake.', two: 'Large stone buildings go up under the Umayyads. In 749 CE an earthquake flattens them and nobody rebuilds at that scale.' },
    medott:  { one: 'Farmland, then a village on top.', two: 'For 900 years this is orchards and terraces. Then houses spread across the valley and over the buried city.' },
    modern:  { one: 'A village, a dig, and a visitor site, all at once.', two: 'People live here. Archaeologists dig here, sometimes by tunnelling underneath the houses. That overlap is why the site is contested.' }
  };

  /* Names in the data carry qualifiers ("— 8 m wide", "(position approximate)") and curly or
     straight apostrophes. Normalise before matching so every building resolves to plain words. */
  function norm(n) {
    return String(n)
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/\s*[\u2014\u2013-]\s.*$/, '')
      .replace(/\s*\([^)]*\)\s*/g, ' ')
      .replace(/,\s*[^,]*$/, function (m) { return /\d/.test(m) ? '' : m; })
      .replace(/\s+/g, ' ').trim().toLowerCase();
  }
  var NORM = {};
  Object.keys(S).forEach(function (k) { var n = norm(k); if (!NORM[n]) NORM[n] = S[k]; });

  function lookup(n) {
    if (!n) return null;
    if (S[n]) return S[n];
    var k = norm(n);
    if (NORM[k]) return NORM[k];
    var keys = Object.keys(NORM), best = null;
    for (var i = 0; i < keys.length; i++) {
      if (k.indexOf(keys[i]) === 0 || keys[i].indexOf(k) === 0) {
        if (!best || keys[i].length > best.length) best = keys[i];
      }
    }
    return best ? NORM[best] : null;
  }

  window.COD_PLAIN = { say: S, scene: SCENE, lookup: lookup };
})();
