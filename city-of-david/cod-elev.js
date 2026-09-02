/* Elevation view — true-scale 2D side view of the ridge.
   Coordinate space is METRES: x = station along the ridge from the north datum (0–700 m),
   y in the SVG = 760 - (metres above sea level), so no vertical exaggeration at all.
   Surface features give `dz` (0 = standing on the ground); buried features give `elev` (floor, m asl). */
(function () {
  /* Crest profile in metres above sea level, station 0 = south wall of the Ophel / Temple Mount
     platform, station 700 = the confluence of the valleys. Anchored on published elevations:
     Ophel c. 735 m, Area G / Stepped Stone Structure c. 702–706 m, the crest opposite the Gihon
     c. 685 m (the spring itself is at 636 m, far down the eastern flank), Pool of Siloam c. 633 m. */
  var PROFILE = [[0,725],[50,714],[100,705],[150,697],[200,690],[250,683],[300,676],[350,669],[400,663],[450,657],[500,652],[550,648],[600,644],[650,638],[700,624]];

  /* Valley floors, in metres above sea level, at roughly 100 m either side of the crest line.
     Kidron (east) and Tyropoeon (west) both fall southwards and meet at the confluence. */
  var KIDRON = [[0,645],[200,634],[300,628],[450,616],[700,600]];
  var TYRO   = [[0,682],[200,663],[300,655],[450,632],[700,605]];
  function interp(t, x) {
    for (var i = 1; i < t.length; i++) if (x <= t[i][0]) {
      var a = t[i-1], b = t[i];
      return a[1] + (x - a[0]) / (b[0] - a[0]) * (b[1] - a[1]);
    }
    return t[t.length-1][1];
  }

  function g(x) {
    for (var i = 1; i < PROFILE.length; i++) {
      if (x <= PROFILE[i][0]) {
        var a = PROFILE[i - 1], b = PROFILE[i];
        return a[1] + (x - a[0]) / (b[0] - a[0]) * (b[1] - a[1]);
      }
    }
    return PROFILE[PROFILE.length - 1][1];
  }

  var B = [
    // Chalcolithic & Early Bronze
    { per:'chalco', n:'Early Bronze dwelling (fragmentary)', cat:'domestic', conf:'debated', x:292, w:7, h:2.8, dz:0 },
    { per:'chalco', n:'Early Bronze dwelling (fragmentary)', cat:'domestic', conf:'debated', x:308, w:6, h:2.6, dz:0 },
    { per:'chalco', n:'Occupation terrace above the spring', cat:'agri', conf:'probable', x:322, w:16, h:1.6, dz:0 },

    // Middle Bronze II
    { per:'mb2', n:'Spring Tower — walls c. 7 m thick', cat:'fort', conf:'secure', x:294, w:16, h:11, elev:636, z3:79, d3:14, lbl:1 },
    { per:'mb2', n:'Rock-cut fortified pool', cat:'water', conf:'secure', x:312, w:22, h:7, elev:629, z3:74, d3:20, lbl:1 },
    { per:'mb2', n:'Pool Tower', cat:'fort', conf:'secure', x:336, w:14, h:9, elev:634, z3:72, d3:14 },
    { per:'mb2', n:'Middle Bronze wall on the crest', cat:'fort', conf:'probable', x:126, w:3.5, h:6, dz:0 },
    { per:'mb2', n:'Middle Bronze wall on the crest', cat:'fort', conf:'probable', x:212, w:3.5, h:6, dz:0 },
    { per:'mb2', n:'Channel II', cat:'water', conf:'secure', line:[[300,633],[380,629],[470,623],[560,616]], th:1.4, z3:86, lbl:1 },
    { per:'mb2', n:"Warren's Shaft passage", cat:'water', conf:'debated', line:[[272,672],[286,655],[294,640]], th:2.2, z3:52 },

    // Late Bronze
    { per:'lb', n:'Terrace fills beneath the stone mantle', cat:'fort', conf:'debated', x:140, w:34, h:12, dz:0, lbl:1 },
    { per:'lb', n:"Rulers' quarter (position proposed)", cat:'monument', conf:'conjectural', x:112, w:26, h:7, dz:0 },
    { per:'lb', n:'Late Bronze house', cat:'domestic', conf:'debated', x:196, w:9, h:4, dz:0 },

    // Iron IIA
    { per:'ir2a', n:'Stepped Stone Structure — c. 18 m high', cat:'fort', conf:'secure', x:138, w:40, h:18, dz:0, z3:34, d3:30, shape:'step', lbl:1 },
    { per:'ir2a', n:'Large Stone Structure', cat:'monument', conf:'debated', x:130, w:30, h:9, dz:11, z3:8, d3:24, lbl:1 },
    { per:'ir2a', n:'Iron IIA house on the terraces', cat:'domestic', conf:'probable', x:186, w:10, h:5, dz:0 },
    { per:'ir2a', n:'Iron IIA house on the terraces', cat:'domestic', conf:'probable', x:206, w:10, h:5, dz:0 },
    { per:'ir2a', n:'Eastern city wall', cat:'fort', conf:'probable', x:262, w:4, h:7, dz:0 },

    // Iron IIB–C
    { per:'ir2bc', n:'Ashlar House', cat:'domestic', conf:'secure', x:168, w:11, h:7, dz:0, lbl:1 },
    { per:'ir2bc', n:'House of Ahiel', cat:'domestic', conf:'secure', x:183, w:12, h:7, dz:0, lbl:1 },
    { per:'ir2bc', n:'Burnt Room', cat:'domestic', conf:'secure', x:198, w:9, h:6, dz:0 },
    { per:'ir2bc', n:'Bullae House', cat:'domestic', conf:'secure', x:210, w:12, h:7, dz:0, lbl:1 },
    { per:'ir2bc', n:'Terrace house', cat:'domestic', conf:'secure', x:226, w:10, h:6, dz:0 },
    { per:'ir2bc', n:'Terrace house', cat:'domestic', conf:'secure', x:242, w:10, h:6, dz:0 },
    { per:'ir2bc', n:'City wall, 8th century', cat:'fort', conf:'probable', x:300, w:4.5, h:7, dz:0 },
    { per:'ir2bc', n:"Hezekiah's Tunnel — falls only 30 cm in 533 m", cat:'water', conf:'secure', line:[[300,636.0],[380,635.94],[460,635.88],[540,635.82],[620,635.76],[664,635.70]], th:1.8, z3:70, lbl:1 },
    { per:'ir2bc', n:"Warren's Shaft", cat:'water', conf:'secure', line:[[290,673],[290,638]], th:2.6, z3:52 },
    { per:'ir2bc', n:'Iron Age pool', cat:'water', conf:'probable', x:640, w:24, h:5, elev:633, z3:14, d3:18 },

    // 586 BCE
    { per:'d586', n:'Destruction debris over the terraces', cat:'destruction', conf:'secure', x:160, w:70, h:2.6, dz:0, lbl:1 },
    { per:'d586', n:'Collapsed terrace wall', cat:'destruction', conf:'probable', x:232, w:22, h:2, dz:0 },

    // Persian & Hasmonean
    { per:'pershas', n:'Persian-period house', cat:'domestic', conf:'probable', x:172, w:10, h:5, dz:0 },
    { per:'pershas', n:'Wall attributed to Nehemiah', cat:'fort', conf:'debated', x:206, w:4, h:6, dz:0, lbl:1 },
    { per:'pershas', n:'Glacis and tower of the proposed Akra', cat:'fort', conf:'debated', x:74, w:42, h:12, dz:0, lbl:1 },
    { per:'pershas', n:'Hasmonean city wall', cat:'fort', conf:'probable', x:296, w:4.5, h:8, dz:0 },

    // Herodian
    { per:'herod', n:'Pool of Siloam — stepped on at least three sides', cat:'monument', conf:'secure', x:634, w:60, h:6, elev:632, z3:10, d3:48, shape:'pool', lbl:1 },
    { per:'herod', n:'Pilgrimage Road — stepped street c. 8 m wide', cat:'street', conf:'secure', line:[[652,630],[540,644],[420,661],[300,679],[180,693],[70,712]], th:1.2, z3:-34, w3:8, lbl:1 },
    { per:'herod', n:'Drainage channel beneath the street', cat:'water', conf:'secure', line:[[652,626.5],[540,640.5],[420,657.5],[300,675.5],[180,689.5],[70,708.5]], th:2.4, z3:-34, w3:3, lbl:1 },
    { per:'herod', n:"Ritual bath (miqveh)", cat:'water', conf:'secure', x:520, w:4, h:4, elev:646 },
    { per:'herod', n:"Ritual bath (miqveh)", cat:'water', conf:'secure', x:400, w:4, h:4, elev:664 },
    { per:'herod', n:"Ritual bath (miqveh)", cat:'water', conf:'secure', x:246, w:4, h:4, elev:684 },
    { per:'herod', n:'Mansion attributed to the Adiabene royal house', cat:'monument', conf:'debated', x:92, w:34, h:13, dz:0, lbl:1 },
    { per:'herod', n:'Shops fronting the street', cat:'domestic', conf:'secure', x:310, w:9, h:6, dz:0 },
    { per:'herod', n:'Shops fronting the street', cat:'domestic', conf:'secure', x:466, w:9, h:6, dz:0 },
    { per:'herod', n:'Synagogue of the Theodotus inscription (position approximate)', cat:'monument', conf:'debated', x:596, w:20, h:9, dz:0 },

    // 70 CE
    { per:'d70', n:'Collapse over the paving stones', cat:'destruction', conf:'secure', x:470, w:80, h:2.8, dz:0, lbl:1 },
    { per:'d70', n:'Collapse over the paving stones', cat:'destruction', conf:'secure', x:280, w:80, h:2.8, dz:0 },
    { per:'d70', n:'Roman quarry pit', cat:'destruction', conf:'probable', x:200, w:18, h:4, elev:690 },

    // Byzantine
    { per:'byz', n:'Siloam Church, attributed to Eudocia', cat:'monument', conf:'probable', x:624, w:42, h:15, dz:0, z3:8, d3:30, shape:'basilica', lbl:1 },
    { per:'byz', n:'Pilgrim lodgings at the pool', cat:'monument', conf:'probable', x:588, w:26, h:8, dz:0 },
    { per:'byz', n:'Byzantine house', cat:'domestic', conf:'secure', x:226, w:12, h:8, dz:0 },
    { per:'byz', n:'Byzantine house', cat:'domestic', conf:'secure', x:308, w:12, h:8, dz:0, lbl:1 },
    { per:'byz', n:'Byzantine house', cat:'domestic', conf:'secure', x:446, w:12, h:8, dz:0 },
    { per:'byz', n:'City wall around the southern ridge', cat:'fort', conf:'secure', x:686, w:4.5, h:9, dz:0 },

    // Early Islamic
    { per:'islam', n:'Umayyad building, Givati area', cat:'domestic', conf:'secure', x:96, w:30, h:9, dz:0, lbl:1 },
    { per:'islam', n:'Umayyad house', cat:'domestic', conf:'secure', x:264, w:14, h:8, dz:0 },
    { per:'islam', n:'Walls fallen flat in the 749 earthquake', cat:'destruction', conf:'secure', x:96, w:30, h:2.2, dz:9, lbl:1 },

    // Medieval – Ottoman
    { per:'medott', n:'Agricultural terrace wall', cat:'agri', conf:'secure', x:200, w:9, h:2, dz:0 },
    { per:'medott', n:'Agricultural terrace wall', cat:'agri', conf:'secure', x:290, w:9, h:2, dz:0, lbl:1 },
    { per:'medott', n:'Agricultural terrace wall', cat:'agri', conf:'secure', x:380, w:9, h:2, dz:0 },
    { per:'medott', n:'Agricultural terrace wall', cat:'agri', conf:'secure', x:470, w:9, h:2, dz:0 },
    { per:'medott', n:'Agricultural terrace wall', cat:'agri', conf:'secure', x:560, w:9, h:2, dz:0 },
    { per:'medott', n:'Silwan village house', cat:'modern', conf:'secure', x:342, w:10, h:8, dz:0, lbl:1 },
    { per:'medott', n:'Silwan village house', cat:'modern', conf:'secure', x:424, w:10, h:8, dz:0 },

    // Modern
    { per:'modern', n:'Wadi Hilweh house, three to four storeys', cat:'modern', conf:'secure', x:204, w:12, h:13, dz:0, lbl:1 },
    { per:'modern', n:'Wadi Hilweh house', cat:'modern', conf:'secure', x:302, w:12, h:12, dz:0 },
    { per:'modern', n:'Wadi Hilweh house', cat:'modern', conf:'secure', x:424, w:12, h:14, dz:0 },
    { per:'modern', n:'Wadi Hilweh house', cat:'modern', conf:'secure', x:524, w:12, h:12, dz:0 },
    { per:'modern', n:'Area G excavation cut', cat:'excav', conf:'secure', x:146, w:42, h:20, elev:688, lbl:1 },
    { per:'modern', n:'Givati Parking Lot excavation', cat:'excav', conf:'secure', x:84, w:46, h:14, elev:716, lbl:1 },
    { per:'modern', n:'Pilgrimage Road tunnel excavation', cat:'excav', conf:'secure', line:[[652,630],[540,644],[420,661],[300,679]], th:3.4, z3:-34, lbl:1 },
    { per:'modern', n:'Visitor entrance', cat:'modern', conf:'secure', x:126, w:9, h:6, dz:0 }
  ];

  var FIGURES = [250, 470, 640];

  window.COD_ELEV = {
    kidron: function (x) { return interp(KIDRON, Math.max(0, Math.min(700, x))); },
    tyro: function (x) { return interp(TYRO, Math.max(0, Math.min(700, x))); }, profile: PROFILE, ground: g, buildings: B, figures: FIGURES,
    spring: { x: 298, elev: 636, z: 79 },
    landmarks: [
      { x: 20, elev: 730, t: 'NORTH — Ophel, Temple Mount 740 m', a: 'start' },
      { x: 298, elev: 641, t: 'Gihon Spring · 636 m', a: 'middle' },
      { x: 660, elev: 646, t: 'Pool of Siloam · 636 m', a: 'middle' },
      { x: 692, elev: 608, t: 'SOUTH — confluence, c. 600 m', a: 'end' }
    ] };
})();
