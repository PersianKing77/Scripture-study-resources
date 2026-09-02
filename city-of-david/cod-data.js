/* City of David — site model: periods, plan geometry, section geometry.
   Plan viewBox: 0 0 520 980  (north at top; Kidron east/right, Tyropoeon west/left)
   Section viewBox: 0 0 980 470 (projected longitudinal section, north left -> south right)
   Section elevation mapping: y = 40 + (760 - metres) * 2   */
(function () {
  var P = [
    { id: 'chalco', n: 'Chalcolithic & Early Bronze', span: 'c. 4500–3000 BCE', y0: -4500, y1: -3000, c: '#93b3cc' },
    { id: 'mb2', n: 'Middle Bronze II', span: 'c. 1800 BCE', y0: -1900, y1: -1550, c: '#4fb0a3' },
    { id: 'lb', n: 'Late Bronze — Jebusite Jerusalem', span: 'c. 1550–1200 BCE', y0: -1550, y1: -1200, c: '#96bb62' },
    { id: 'ir2a', n: 'Iron Age IIA', span: 'c. 1000–800 BCE', y0: -1000, y1: -800, c: '#dcbd4c' },
    { id: 'ir2bc', n: 'Iron Age IIB–C', span: 'c. 800–586 BCE', y0: -800, y1: -587, c: '#e89a45' },
    { id: 'd586', n: 'Babylonian destruction', span: '586 BCE', y0: -587, y1: -560, c: '#d4553c' },
    { id: 'pershas', n: 'Persian & Hasmonean', span: '538–63 BCE', y0: -538, y1: -63, c: '#a596d4' },
    { id: 'herod', n: 'Herodian / late Second Temple', span: '37 BCE – 70 CE', y0: -37, y1: 70, c: '#f0c877' },
    { id: 'd70', n: 'Destruction & Aelia Capitolina', span: '70–324 CE', y0: 70, y1: 324, c: '#bd5641' },
    { id: 'byz', n: 'Byzantine', span: '324–638 CE', y0: 324, y1: 638, c: '#5aa6d4' },
    { id: 'islam', n: 'Early Islamic', span: '638–1099 CE', y0: 638, y1: 1099, c: '#4fb289' },
    { id: 'medott', n: 'Medieval – Ottoman', span: '1099–1917 CE', y0: 1099, y1: 1917, c: '#b8946c' },
    { id: 'modern', n: 'Exploration & the present day', span: '1838 – today', y0: 1917, y1: 2026, c: '#c3ccd4' }
  ];

  /* natural / always-on base geography ---------------------------------- */
  var TERRAIN_PLAN = [
    { d: 'M0 0 L128 0 L112 240 L88 520 L64 760 L44 980 L0 980 Z', f: '#121211', s: '#3d3b34', sw: 1 },
    { d: 'M474 0 L520 0 L520 980 L404 980 L424 720 L446 430 L462 190 Z', f: '#121211', s: '#3d3b34', sw: 1 },
    { d: 'M235 58 L302 68 L332 142 L346 232 L356 322 L360 422 L350 522 L334 622 L314 722 L294 802 L274 872 L249 906 L214 876 L194 800 L179 700 L169 600 L165 500 L169 400 L176 300 L191 200 L211 110 Z', f: '#2d2c26', s: '#736d5e', sw: 1.8 },
    { d: 'M186 0 L346 0 L346 60 L186 60 Z', f: '#1a1a17', s: '#5a5548', sw: 1, dash: '5 4' }
  ];
  var TERRAIN_LINES = [
    { d: 'M404 40 C412 300 392 620 336 952', s: '#6f6a5c', sw: 1.6, dash: '9 6' },
    { d: 'M146 40 C136 300 152 610 236 936', s: '#6f6a5c', sw: 1.6, dash: '9 6' },
    { d: 'M196 150 C240 168 300 172 336 160', s: '#4a4740', sw: 1 },
    { d: 'M182 330 C232 348 300 350 352 336', s: '#4a4740', sw: 1 },
    { d: 'M172 520 C222 538 292 540 344 526', s: '#4a4740', sw: 1 },
    { d: 'M186 700 C232 716 288 716 316 706', s: '#4a4740', sw: 1 }
  ];
  var TERRAIN_LABELS = [
    { x: 266, y: 30, t: 'TEMPLE MOUNT / HARAM AL-SHARIF', s: 9, a: 'middle', f: '#8f8b7d' },
    { x: 424, y: 560, t: 'KIDRON VALLEY', s: 10, a: 'middle', f: '#9e9989', r: 90 },
    { x: 86, y: 520, t: 'TYROPOEON (CENTRAL) VALLEY', s: 9, a: 'middle', f: '#9e9989', r: -90 },
    { x: 60, y: 176, t: 'WESTERN HILL', s: 9, a: 'middle', f: '#8f8b7d' },
    { x: 234, y: 654, t: 'THE RIDGE', s: 9, a: 'middle', f: '#7f7a6c' },
    { x: 380, y: 336, t: 'GIHON SPRING', s: 9, a: 'start', f: '#a6d3e6' },
    { x: 250, y: 936, t: 'CONFLUENCE OF THE VALLEYS', s: 8.5, a: 'middle', f: '#8f8b7d' }
  ];
  var SPRING = { x: 358, y: 332 };

  /* section base --------------------------------------------------------- */
  var GROUND = 'M40 110 L110 132 L180 150 L250 166 L318 182 L388 196 L452 208 L520 218 L590 226 L660 234 L730 242 L800 250 L866 262 L906 282 L950 312';
  var TERRAIN_SEC = [
    { d: GROUND + ' L950 470 L40 470 Z', f: '#2d2c26', s: 'none', sw: 0 },
    { d: 'M40 150 L110 172 L180 190 L250 206 L318 222 L388 236 L452 248 L520 258 L590 266 L660 274 L730 282 L800 290 L866 302 L906 322 L950 352', s: '#54503f', sw: 1.4, dash: '7 5' },
    { d: GROUND, s: '#8f897a', sw: 2.2 },
    { d: 'M40 92 L110 116 L190 136 L270 154 L350 170 L430 184 L520 198 L610 210 L700 222 L790 234 L870 250 L950 296', s: '#b3ad9a', sw: 1.4, dash: '3 4' }
  ];
  var SEC_LABELS = [
    { x: 60, y: 96, t: 'NORTH — OPHEL / TEMPLE MOUNT', s: 9, a: 'start', f: '#9e9989' },
    { x: 946, y: 388, t: 'SOUTH — POOL OF SILOAM', s: 9, a: 'end', f: '#9e9989' },
    { x: 700, y: 246, t: 'present ground surface (fill & village)', s: 8, a: 'middle', f: '#b6a385' },
    { x: 500, y: 452, t: 'bedrock (schematic)', s: 8, a: 'middle', f: '#8a7c66' }
  ];
  var SEC_AXIS = [760, 720, 680, 640, 600].map(function (m) { return { m: m, y: 40 + (760 - m) * 2 }; });

  var F = [];
  function f(o) { F.push(o); }

  /* 1. Chalcolithic & Early Bronze --------------------------------------- */
  f({ id: 'eb-spring', n: 'Occupation traces beside the Gihon Spring', per: 'chalco', cat: 'domestic', conf: 'probable', d: 'M312 296 c0 -20 20 -34 44 -34 c24 0 42 14 42 34 c0 20 -18 34 -42 34 c-24 0 -44 -14 -44 -34 z', lbl: 1, lx: 300, ly: 268, la: 'end', note: 'Sherds, flint and thin occupation layers found in and around the spring house area. No building plans survive.' });
  f({ id: 'eb-slope', n: 'Early Bronze houses on the eastern slope', per: 'chalco', cat: 'domestic', conf: 'probable', d: 'M276 352 L322 346 L330 402 L284 410 Z', note: 'Kenyon and later excavators found EB I–III sherds and fragmentary walls on the terraces above the spring.' });
  f({ id: 'eb-chalc', n: 'Chalcolithic material (redeposited)', per: 'chalco', cat: 'domestic', conf: 'debated', d: 'M244 402 l16 0 l0 16 l-16 0 z M266 424 l14 0 l0 14 l-14 0 z M232 440 l14 0 l0 14 l-14 0 z', note: 'Chalcolithic finds come mostly from fills and rock pockets, so the size and permanence of any settlement is uncertain.' });
  f({ id: 'eb-secspring', n: 'Spring outlet in section', per: 'chalco', spans: ['chalco', 'mb2', 'lb', 'ir2a', 'ir2bc', 'herod'], cat: 'water', conf: 'secure', d: '', sd: 'M418 282 c-10 4 -14 12 -8 18 c8 8 26 8 34 0 c6 -6 2 -14 -8 -18 z', slbl: 1, slx: 400, sly: 268, sla: 'end', note: 'The Gihon rises at about 636 m above sea level, low on the eastern flank of the ridge.' });

  /* 2. Middle Bronze II --------------------------------------------------- */
  f({ id: 'mb-springtower', n: 'Spring Tower', per: 'mb2', spans: ['mb2', 'lb', 'ir2a', 'ir2bc'], cat: 'fort', conf: 'secure', d: 'M330 292 L398 292 L398 360 L330 360 Z', sd: 'M400 240 L452 240 L452 300 L400 300 Z', lbl: 1, lx: 404, ly: 300, la: 'start', slbl: 1, slx: 426, sly: 232, sla: 'middle', note: 'A tower of boulders up to 3 m across, walls c. 7 m thick, built directly over the spring. Excavated by Reich and Shukron.' });
  f({ id: 'mb-pool', n: 'Rock-cut fortified pool', per: 'mb2', spans: ['mb2', 'lb', 'ir2a'], cat: 'water', conf: 'secure', d: 'M286 362 L352 356 L358 424 L292 430 Z', sd: 'M352 258 L400 258 L400 308 L352 308 Z', lbl: 1, lx: 280, ly: 396, la: 'end', note: 'A large reservoir cut into bedrock and enclosed by walls, fed from the spring. Its full depth is still not known.' });
  f({ id: 'mb-pooltower', n: 'Pool Tower', per: 'mb2', spans: ['mb2', 'lb', 'ir2a', 'ir2bc'], cat: 'fort', conf: 'secure', d: 'M286 432 L350 426 L356 486 L292 492 Z', lbl: 1, lx: 366, ly: 462, la: 'start', note: 'The southern anchor of the Middle Bronze water fortress, protecting the pool.' });
  f({ id: 'mb-chan2', n: 'Channel II', per: 'mb2', spans: ['mb2', 'lb', 'ir2a', 'ir2bc'], cat: 'water', conf: 'secure', line: 1, d: 'M360 356 C366 470 340 640 292 806', sd: 'M436 294 C540 312 660 330 786 344', lbl: 1, lx: 372, ly: 612, la: 'start', slbl: 1, slx: 640, sly: 350, sla: 'middle', note: 'A rock-cut channel running south along the slope, feeding irrigation outlets in the Kidron valley floor.' });
  f({ id: 'mb-fort', n: 'Middle Bronze fortification line', per: 'mb2', spans: ['mb2', 'lb', 'ir2a'], cat: 'fort', conf: 'probable', line: 1, sw: 4, d: 'M300 84 C334 200 348 330 354 432 C358 566 324 726 268 866', note: 'Wall segments on the eastern crest are dated to MB II; the line between them is reconstructed.' });
  f({ id: 'mb-warren-up', n: 'Warren\'s Shaft system — upper tunnel', per: 'mb2', spans: ['mb2', 'lb', 'ir2a', 'ir2bc'], cat: 'water', conf: 'debated', line: 1, d: 'M292 300 L316 316 L338 330', sd: 'M366 214 L400 250 L418 282', note: 'The rock-cut passage is probably Middle Bronze; whether the vertical shaft was ever used to draw water is disputed.' });

  /* 3. Late Bronze -------------------------------------------------------- */
  f({ id: 'lb-extent', n: 'Extent of the Jebusite town (reconstructed)', per: 'lb', cat: 'extent', conf: 'conjectural', d: 'M224 92 L318 108 L344 262 L352 402 L330 522 L288 562 L236 542 L202 424 L200 250 Z', note: 'About 4–5 hectares. Almost no Late Bronze buildings have been found, so the outline follows the fortification line, not walls of houses.' });
  f({ id: 'lb-acropolis', n: 'Acropolis / rulers\' quarter (location proposed)', per: 'lb', cat: 'monument', conf: 'conjectural', d: 'M238 148 L314 140 L322 216 L246 224 Z', lbl: 1, lx: 232, ly: 158, la: 'end', note: 'The Amarna letters of Abdi-Heba imply a palace and a garrison, but no Late Bronze palace has been excavated.' });
  f({ id: 'lb-terraces', n: 'Stepped terraces beneath the Stepped Stone Structure', per: 'lb', spans: ['lb', 'ir2a'], cat: 'fort', conf: 'debated', d: 'M252 222 L310 214 L318 292 L258 302 Z', lbl: 1, lx: 244, ly: 262, la: 'end', sd: 'M250 152 L318 170 L330 216 L256 200 Z', note: 'Kenyon dated the earliest terracing to the Late Bronze Age; others place all of it in the Iron Age. The dating is unresolved.' });
  f({ id: 'lb-burials', n: 'Late Bronze burial finds, Kidron slope', per: 'lb', cat: 'burial', conf: 'probable', d: 'M382 420 l12 0 l0 12 l-12 0 z M394 452 l12 0 l0 12 l-12 0 z', note: 'Imported Cypriot and Mycenaean pottery from tombs across the valley shows the town was connected to wider trade.' });

  /* 4. Iron Age IIA ------------------------------------------------------- */
  f({ id: 'sss', n: 'Stepped Stone Structure', per: 'ir2a', spans: ['ir2a', 'ir2bc', 'd586', 'pershas'], cat: 'fort', conf: 'secure', d: 'M250 224 L312 214 L322 300 L256 310 Z', sd: 'M248 156 L322 174 L336 224 L254 206 Z', lbl: 1, lx: 242, ly: 292, la: 'end', slbl: 1, slx: 292, sly: 246, sla: 'middle', note: 'A mantle of stone stepping down the slope, standing about 18 m high — the largest Iron Age structure known in Jerusalem. Its date is argued between the 12th and 9th centuries BCE.' });
  f({ id: 'lss', n: 'Large Stone Structure', per: 'ir2a', spans: ['ir2a', 'ir2bc'], cat: 'monument', conf: 'debated', d: 'M240 148 L316 140 L326 216 L250 224 Z', lbl: 1, lx: 234, ly: 152, la: 'end', sd: 'M244 126 L322 144 L322 176 L248 158 Z', note: 'Eilat Mazar identified these walls as King David\'s palace. Others read them as several separate walls of different dates, or as part of the same fortification as the Stepped Stone Structure.' });
  f({ id: 'ir2a-capital', n: 'Proto-Aeolic capital (find spot)', per: 'ir2a', cat: 'find', conf: 'secure', d: 'M334 244 l13 0 l0 13 l-13 0 z', note: 'A carved capital of a type used in royal buildings, found fallen on the slope by Kenyon.' });
  f({ id: 'ir2a-wall', n: 'Eastern city wall (Iron IIA)', per: 'ir2a', spans: ['ir2a', 'ir2bc'], cat: 'fort', conf: 'probable', line: 1, sw: 4, d: 'M312 116 C338 222 350 332 354 434 C358 548 326 706 274 856', note: 'Segments on the eastern crest; long stretches are reconstructed between excavated points.' });
  f({ id: 'ir2a-houses', n: 'Iron IIA buildings on the eastern terraces', per: 'ir2a', cat: 'domestic', conf: 'probable', d: 'M272 320 L302 316 L306 344 L276 348 Z M270 356 L300 352 L304 378 L274 382 Z', note: 'Fragmentary walls and floors beneath the better-preserved 8th–7th century houses.' });

  /* 5. Iron Age IIB–C ------------------------------------------------------ */
  f({ id: 'hez-tunnel', n: 'Hezekiah\'s Tunnel', per: 'ir2bc', spans: ['ir2bc', 'd586', 'pershas', 'herod', 'd70', 'byz', 'islam', 'medott', 'modern'], cat: 'water', conf: 'secure', line: 1, sw: 3.4, d: 'M354 342 C332 382 348 420 322 454 C300 484 318 522 296 558 C274 596 292 632 272 670 C252 710 268 750 256 794 C250 818 252 834 258 848', sd: 'M424 288 C476 292 500 285 546 288.4 C592 291 612 285 658 288.8 C704 292 734 286 780 289.2 C826 292 858 286 902 289.6', lbl: 1, lx: 316, ly: 620, la: 'end', slbl: 1, slx: 660, sly: 322, sla: 'middle', note: '533 m of tunnel cut through the ridge from both ends at once, carrying the spring water to the pool at the southern tip.' });
  f({ id: 'siloam-insc', n: 'Siloam Inscription (find spot)', per: 'ir2bc', cat: 'find', conf: 'secure', d: 'M250 830 l14 0 l0 14 l-14 0 z', lbl: 1, lx: 240, ly: 826, la: 'end', note: 'Found in 1880 near the tunnel\'s southern exit; it describes the two digging teams meeting. Removed to Istanbul in 1891.' });
  f({ id: 'warren-shaft', n: 'Warren\'s Shaft', per: 'ir2bc', spans: ['ir2bc', 'modern'], cat: 'water', conf: 'secure', d: 'M298 306 m-11 0 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0', sd: 'M362 208 L376 208 L382 284 L368 284 Z', lbl: 1, lx: 286, ly: 300, la: 'end', note: 'A natural karstic shaft, about 13 m deep, met by chance by the rock-cut passage. Older books had Joab climbing it to take the city for David (2 Samuel 5:8); Reich and Shukron showed the shaft was never a water-drawing installation at all — the Jebusites reached their water through the fortified Spring Tower and rock-cut pool instead.' });
  f({ id: 'ir-pool', n: 'Iron Age pool at the southern tip', per: 'ir2bc', spans: ['ir2bc', 'd586'], cat: 'water', conf: 'probable', d: 'M230 806 L302 798 L308 866 L234 874 Z', sd: 'M846 286 L928 286 L922 320 L852 320 Z', note: 'The tunnel\'s outlet fed a reservoir at the tip of the ridge, later replaced by the Herodian pool.' });
  f({ id: 'broad-wall', n: 'Broad Wall (western hill)', per: 'ir2bc', cat: 'fort', conf: 'secure', line: 1, sw: 7, d: 'M34 146 L118 166 L120 208', lbl: 1, lx: 34, ly: 136, la: 'start', note: 'A 7 m thick wall found by Avigad in the Jewish Quarter, showing the city expanded west in the 8th century. It lies off this ridge, to the north-west.' });
  f({ id: 'ashlar-house', n: 'Ashlar House', per: 'ir2bc', spans: ['ir2bc', 'd586'], cat: 'domestic', conf: 'secure', d: 'M266 296 L302 292 L306 326 L270 330 Z', lbl: 1, lx: 316, ly: 312, la: 'start', note: 'A building with dressed-stone corners — unusual quality for a private house.' });
  f({ id: 'ahiel', n: 'House of Ahiel', per: 'ir2bc', spans: ['ir2bc', 'd586'], cat: 'domestic', conf: 'secure', d: 'M264 334 L300 330 L304 366 L268 370 Z', lbl: 1, lx: 314, ly: 352, la: 'start', note: 'A four-room house named from a sherd inscribed "Ahiel"; it had a stone toilet seat in a small side room.' });
  f({ id: 'burnt-room', n: 'Burnt Room', per: 'ir2bc', spans: ['ir2bc', 'd586'], cat: 'domestic', conf: 'secure', d: 'M266 372 L296 368 L300 396 L270 400 Z', lbl: 1, lx: 310, ly: 388, la: 'start', note: 'Filled with charred wood, including imported furniture timber burnt in 586 BCE.' });
  f({ id: 'bullae-house', n: 'Bullae House', per: 'ir2bc', spans: ['ir2bc', 'd586'], cat: 'domestic', conf: 'secure', d: 'M262 402 L300 398 L304 436 L266 440 Z', lbl: 1, lx: 314, ly: 424, la: 'start', note: 'Fifty-one clay seal impressions were baked hard by the fire that destroyed it, preserving the names of Judahite officials.' });
  f({ id: 'lmlk', n: 'LMLK jar handles (find spots)', per: 'ir2bc', cat: 'find', conf: 'secure', d: 'M254 452 l11 0 l0 11 l-11 0 z M282 460 l11 0 l0 11 l-11 0 z M238 476 l11 0 l0 11 l-11 0 z', note: 'Storage jars stamped "belonging to the king", linked to Hezekiah\'s preparations against Assyria.' });
  f({ id: 'ir-terrace-houses', n: 'Terrace houses on the eastern slope', per: 'ir2bc', cat: 'domestic', conf: 'secure', d: 'M262 452 L292 448 L296 476 L266 480 Z M256 486 L288 482 L292 512 L260 516 Z M252 522 L282 518 L286 546 L254 550 Z', note: 'Dense housing stepped down the slope on artificial terraces, the densest Iron Age quarter yet found here.' });

  /* 6. Babylonian destruction --------------------------------------------- */
  f({ id: 'burn', n: 'Destruction layer, Area G', per: 'd586', cat: 'destruction', conf: 'secure', d: 'M244 288 L322 280 L332 452 L252 462 Z', lbl: 1, lx: 340, ly: 380, la: 'start', sd: 'M244 152 L336 176 L342 222 L250 202 Z', note: 'Up to a metre of ash, collapsed stone and smashed pottery sealing the Iron Age houses.' });
  f({ id: 'arrowheads', n: 'Arrowheads (Scythian and local types)', per: 'd586', cat: 'find', conf: 'secure', d: 'M270 300 l9 0 l0 9 l-9 0 z M296 340 l9 0 l0 9 l-9 0 z M262 388 l9 0 l0 9 l-9 0 z M300 424 l9 0 l0 9 l-9 0 z', note: 'Bronze and iron arrowheads scattered in the burnt debris — direct traces of the fighting.' });
  f({ id: 'collapse', n: 'Collapse of the terrace system', per: 'd586', cat: 'destruction', conf: 'probable', d: 'M254 462 L296 456 L306 546 L262 554 Z', note: 'Once the houses burned, the terraces they stood on slid down the slope, sealing everything beneath.' });

  /* 7. Persian & Hasmonean -------------------------------------------------- */
  f({ id: 'persian-settle', n: 'Contracted Persian-period settlement', per: 'pershas', cat: 'extent', conf: 'probable', d: 'M234 176 L322 168 L330 300 L296 376 L246 366 L228 250 Z', note: 'A small community, perhaps a few hundred people, clustered on the upper ridge. Persian-period remains are thin and often eroded away.' });
  f({ id: 'neh-wall', n: 'Wall attributed to Nehemiah (proposed)', per: 'pershas', cat: 'fort', conf: 'debated', line: 1, sw: 4, d: 'M296 186 C320 250 332 316 336 384', lbl: 1, lx: 344, ly: 292, la: 'start', note: 'Eilat Mazar identified a wall on the crest as Nehemiah\'s. Critics argue the pottery beneath it is later, or that the wall is Iron Age reused.' });
  f({ id: 'akra', n: 'Seleucid Akra (proposed identification)', per: 'pershas', cat: 'fort', conf: 'debated', d: 'M182 150 L248 142 L256 216 L190 224 Z', lbl: 1, lx: 176, ly: 146, la: 'end', note: 'A massive glacis, tower and slingstones found in the Givati Parking Lot were published in 2015 as the Akra garrison fort. The identification is widely discussed and not settled.' });
  f({ id: 'has-fort', n: 'Hasmonean fortification and buildings', per: 'pershas', cat: 'fort', conf: 'probable', line: 1, sw: 4, d: 'M266 122 C300 200 318 300 324 400 C328 500 306 620 274 730', note: 'The First Wall of the Hasmonean period ran along the ridge crest and around the southern tip.' });
  f({ id: 'stamped-handles', n: 'Yehud and rhodian stamped handles', per: 'pershas', cat: 'find', conf: 'secure', d: 'M256 262 l10 0 l0 10 l-10 0 z M288 292 l10 0 l0 10 l-10 0 z', note: 'Administrative stamps naming the province of Yehud, plus imported wine-jar handles, are the clearest Persian-Hellenistic evidence.' });

  /* 8. Herodian ------------------------------------------------------------ */
  f({ id: 'siloam-pool', n: 'Pool of Siloam (monumental, stepped)', per: 'herod', spans: ['herod', 'd70', 'byz'], cat: 'monument', conf: 'secure', d: 'M204 810 L296 800 L306 890 L206 898 Z', sd: 'M838 284 L936 284 L930 326 L846 326 Z', lbl: 1, lx: 200, ly: 866, la: 'end', slbl: 1, slx: 886, sly: 288, sla: 'middle', note: 'Uncovered by accident in 2004 during sewer work. Stepped on at least three sides, more than 60 m along one side, paved and plastered.' });
  f({ id: 'pilgrim-road', n: 'Pilgrimage Road (stepped street)', per: 'herod', spans: ['herod', 'd70'], cat: 'street', conf: 'secure', line: 1, sw: 12, d: 'M256 800 L266 700 L274 600 L282 500 L290 400 L298 300 L304 200 L306 118', sd: 'M896 316 L760 296 L620 268 L480 234 L360 202', lbl: 1, lx: 292, ly: 660, la: 'start', slbl: 1, slx: 600, sly: 254, sla: 'middle', note: 'A stepped street about 8 m wide, paved with large slabs, running some 600 m from the pool up to the Temple Mount.' });
  f({ id: 'drain', n: 'Drainage channel beneath the street', per: 'herod', spans: ['herod', 'd70', 'modern'], cat: 'water', conf: 'secure', line: 1, sw: 2.6, d: 'M252 800 L262 700 L270 600 L278 500 L286 400 L294 300 L300 200 L302 118', sd: 'M896 332 L760 312 L620 284 L480 250 L360 218', slbl: 1, slx: 600, sly: 300, sla: 'middle', note: 'A stone-roofed channel high enough to walk in. Josephus says refugees hid in the drains in 70 CE, and cooking pots and coins were found inside.' });
  f({ id: 'miqvaot', n: 'Ritual baths (miqva\'ot)', per: 'herod', cat: 'water', conf: 'secure', d: 'M232 748 l14 0 l0 14 l-14 0 z M312 690 l14 0 l0 14 l-14 0 z M228 636 l14 0 l0 14 l-14 0 z M316 566 l14 0 l0 14 l-14 0 z M224 520 l14 0 l0 14 l-14 0 z', note: 'Stepped immersion pools cut into bedrock beside the street and in houses — pilgrims purified themselves before going up to the Temple.' });
  f({ id: 'adiabene', n: 'Mansions attributed to the Adiabene royal house', per: 'herod', cat: 'monument', conf: 'debated', d: 'M198 556 L258 548 L266 626 L206 634 Z', lbl: 1, lx: 192, ly: 592, la: 'end', note: 'A large, richly built complex in the Givati excavations. Josephus places the palaces of Queen Helena\'s family here, but nothing found names them.' });
  f({ id: 'theodotus', n: 'Theodotus synagogue inscription (find spot)', per: 'herod', cat: 'find', conf: 'secure', d: 'M234 726 l14 0 l0 14 l-14 0 z', lbl: 1, lx: 226, ly: 722, la: 'end', note: 'A Greek dedication found by Weill in 1913, recording a synagogue built for reading the Law and lodging pilgrims.' });
  f({ id: 'herod-houses', n: 'Late Second Temple houses and shops', per: 'herod', cat: 'domestic', conf: 'secure', d: 'M300 460 L332 456 L336 492 L304 496 Z M212 462 L246 458 L250 496 L216 500 Z M306 380 L336 376 L340 410 L310 414 Z', note: 'Shops opened onto the street; behind them stood houses with stone vessels and plastered floors.' });

  /* 9. Destruction 70 CE & Aelia -------------------------------------------- */
  f({ id: 'debris70', n: 'Destruction debris over the street', per: 'd70', cat: 'destruction', conf: 'secure', d: 'M244 220 L316 214 L326 800 L244 812 Z', sd: 'M360 196 L900 310 L900 330 L360 216 Z', lbl: 1, lx: 334, ly: 520, la: 'start', note: 'Collapsed masonry, burnt beams and ash lie directly on the paving stones, with coins of the Revolt sealed beneath.' });
  f({ id: 'aelia-limit', n: 'Southern limit of Aelia Capitolina', per: 'd70', spans: ['d70'], cat: 'fort', conf: 'probable', line: 1, sw: 3, d: 'M96 100 L420 88', lbl: 1, lx: 96, ly: 82, la: 'start', note: 'When Hadrian refounded the city in 130 CE, the new grid sat north of here. The old ridge was left outside — quarried, farmed and largely empty for two centuries.' });
  f({ id: 'quarry70', n: 'Quarrying and robbing of the ruins', per: 'd70', cat: 'destruction', conf: 'probable', d: 'M212 300 L250 296 L256 372 L218 378 Z M296 600 L338 594 L344 668 L302 674 Z', note: 'Roman-period pits cut into the ruins to salvage building stone.' });

  /* 10. Byzantine ------------------------------------------------------------ */
  f({ id: 'siloam-church', n: 'Siloam Church (attributed to Eudocia)', per: 'byz', cat: 'monument', conf: 'probable', d: 'M198 776 L300 766 L306 840 L204 848 Z', sd: 'M834 268 L932 268 L932 286 L840 286 Z', lbl: 1, lx: 192, ly: 782, la: 'end', slbl: 1, slx: 884, sly: 274, sla: 'middle', note: 'A basilica built over the pool, known from pilgrim accounts and from remains found by Bliss and Dickie in the 1890s. Its attribution to the empress Eudocia rests on written sources.' });
  f({ id: 'byz-pilgrim', n: 'Pilgrimage complex at the pool', per: 'byz', cat: 'monument', conf: 'probable', d: 'M212 700 L294 692 L300 760 L216 768 Z', note: 'Courtyards, steps, water channels and lodgings served pilgrims who came to wash in the pool.' });
  f({ id: 'byz-wall', n: 'Byzantine city wall around the ridge', per: 'byz', cat: 'fort', conf: 'secure', line: 1, sw: 4, d: 'M226 96 C266 190 300 320 316 460 C330 600 306 760 258 892 C216 866 194 740 182 600 C170 452 184 240 226 96 Z', lbl: 1, lx: 178, ly: 300, la: 'end', note: 'Eudocia\'s wall enclosed the southern ridge again for the first time since 70 CE — traced by Bliss and Dickie and confirmed since.' });
  f({ id: 'byz-houses', n: 'Byzantine houses and streets', per: 'byz', cat: 'domestic', conf: 'secure', d: 'M232 340 L282 334 L288 396 L238 402 Z M292 420 L336 414 L342 476 L298 482 Z M222 470 L266 464 L272 522 L228 528 Z', note: 'The ridge filled up again — the densest occupation between the Iron Age and the modern village.' });

  /* 11. Early Islamic --------------------------------------------------------- */
  f({ id: 'umayyad', n: 'Umayyad-period buildings', per: 'islam', cat: 'domestic', conf: 'secure', d: 'M226 320 L292 312 L300 402 L234 410 Z M296 430 L344 424 L350 500 L302 506 Z M216 520 L272 514 L278 584 L222 590 Z', lbl: 1, lx: 210, ly: 316, la: 'end', note: 'Well-built stone buildings with plastered floors, some very large, excavated in the Givati Parking Lot and on the eastern slope.' });
  f({ id: 'quake749', n: 'Collapse in the 749 CE earthquake', per: 'islam', cat: 'destruction', conf: 'secure', d: 'M226 320 L300 312 L306 500 L232 508 Z', lbl: 1, lx: 316, ly: 424, la: 'start', note: 'Walls found lying flat in one direction, with vessels crushed on the floors beneath — a textbook seismic collapse.' });
  f({ id: 'abbasid-gap', n: 'Contraction and abandonment', per: 'islam', cat: 'extent', conf: 'probable', d: 'M240 200 L308 192 L318 330 L286 400 L246 392 L232 280 Z', note: 'After 749 the ridge was never rebuilt at the same scale; by the 10th century it was mostly fields outside the walled city.' });

  /* 12. Medieval – Ottoman ------------------------------------------------------ */
  f({ id: 'terraces', n: 'Agricultural terracing', per: 'medott', spans: ['medott', 'modern'], cat: 'agri', conf: 'secure', line: 1, sw: 2, d: 'M196 200 C240 218 300 220 334 208 M186 300 C232 320 300 322 350 308 M180 400 C226 420 296 422 352 408 M176 500 C222 520 292 522 348 508 M180 600 C226 618 290 620 338 606 M190 700 C232 716 288 716 320 706', lbl: 1, lx: 200, ly: 196, la: 'start', note: 'Stone-walled terraces turned the ruined slopes into orchards and vegetable plots. Many of the "steps" visible today are terrace walls, not ancient buildings.' });
  f({ id: 'silwan-old', n: 'Village of Silwan (original core, east of the Kidron)', per: 'medott', spans: ['medott', 'modern'], cat: 'modern', conf: 'secure', d: 'M416 300 L486 292 L498 470 L428 480 Z', lbl: 1, lx: 502, ly: 386, la: 'start', note: 'The village grew on the eastern side of the valley, using Iron Age rock-cut tombs as houses and stables.' });
  f({ id: 'silwan-spread', n: 'Village spreading onto the ridge', per: 'medott', spans: ['medott', 'modern'], cat: 'modern', conf: 'secure', d: 'M214 240 L318 228 L336 520 L232 534 Z', note: 'From the late Ottoman period houses climbed across the Kidron and onto the ridge itself, directly over the ancient city.' });
  f({ id: 'ott-cemetery', n: 'Cemeteries and field walls', per: 'medott', cat: 'agri', conf: 'probable', d: 'M300 740 L340 734 L346 800 L306 806 Z', note: 'The southern tip stayed open ground — gardens, threshing floors and burial plots.' });

  /* 13. Modern exploration & present ------------------------------------------- */
  f({ id: 'area-g', n: 'Area G — Kenyon (1961–67) and Shiloh (1978–85)', per: 'modern', cat: 'excav', conf: 'secure', d: 'M244 210 L330 200 L340 470 L252 482 Z', lbl: 1, lx: 348, ly: 340, la: 'start', note: 'The deep cut through the eastern slope that exposed the Stepped Stone Structure, the Iron Age houses and the 586 BCE destruction.' });
  f({ id: 'givati', n: 'Givati Parking Lot excavation (2007– )', per: 'modern', cat: 'excav', conf: 'secure', d: 'M178 140 L256 132 L266 236 L188 246 Z', lbl: 1, lx: 172, ly: 138, la: 'end', note: 'The largest open excavation on the ridge: layers from the Iron Age to the Abbasid period, including the proposed Akra and the Adiabene mansion.' });
  f({ id: 'reich-shukron', n: 'Reich & Shukron — spring and pool (1995–2010)', per: 'modern', cat: 'excav', conf: 'secure', d: 'M300 280 L400 272 L408 448 L308 458 Z', note: 'Re-excavation around the Gihon revealed the Middle Bronze water fortress and, in 2004, the Herodian Pool of Siloam.' });
  f({ id: 'weill', n: 'Weill excavation (1913–14, 1923–24)', per: 'modern', cat: 'excav', conf: 'secure', d: 'M218 690 L286 682 L292 764 L224 772 Z', lbl: 1, lx: 212, ly: 700, la: 'end', note: 'Where the Theodotus inscription and the rock-cut chambers sometimes called the tombs of the kings of Judah were found.' });
  f({ id: 'macalister', n: 'Macalister & Duncan (1923–25)', per: 'modern', cat: 'excav', conf: 'secure', d: 'M246 156 L312 148 L318 208 L252 216 Z', note: 'They exposed the top of the Stepped Stone Structure and misdated it to the Jebusite and Maccabean periods.' });
  f({ id: 'parker', n: 'Parker Mission tunnels (1909–11)', per: 'modern', cat: 'excav', conf: 'secure', line: 1, sw: 2, d: 'M356 340 C336 372 340 404 322 430 C304 456 316 486 300 512', sd: 'M420 288 C470 300 510 292 548 298', note: 'A treasure hunt for the Ark that cleared the ancient water tunnels — badly recorded, but it produced the first plans of the system.' });
  f({ id: 'warren-tun', n: 'Warren\'s tunnels (1867)', per: 'modern', cat: 'excav', conf: 'secure', line: 1, sw: 1.6, d: 'M298 306 L268 268 L250 226 M298 306 L332 292', note: 'Charles Warren mined horizontally into the slope, finding the shaft that carries his name.' });
  f({ id: 'bliss', n: 'Bliss & Dickie (1894–97)', per: 'modern', cat: 'excav', conf: 'secure', line: 1, sw: 1.6, d: 'M204 850 C238 880 282 878 306 856 M186 640 C196 720 200 790 204 850', note: 'They tunnelled along the southern city wall, tracing the Byzantine circuit and the church at the pool.' });
  f({ id: 'road-tunnel', n: 'Pilgrimage Road tunnel excavation (2013– )', per: 'modern', cat: 'excav', conf: 'secure', line: 1, sw: 5, d: 'M256 796 L266 700 L274 600 L282 500 L290 400 L298 300', sd: 'M894 314 L760 294 L620 266 L480 232', lbl: 1, lx: 300, ly: 560, la: 'start', note: 'The street is being dug out beneath the village by tunnelling rather than from the surface — the most contested method used on the site.' });
  f({ id: 'park', n: 'Archaeological park boundary', per: 'modern', cat: 'modern', conf: 'secure', line: 1, sw: 1.6, d: 'M236 100 C286 190 322 330 336 470 C348 610 318 770 262 900 C214 872 190 740 178 600 C166 452 190 232 236 100 Z', note: 'The visitor site run today over and beneath a living neighbourhood.' });
  f({ id: 'village-now', n: 'Wadi Hilweh / Silwan today', per: 'modern', cat: 'modern', conf: 'secure', d: 'M206 210 L330 196 L346 560 L226 578 Z M400 280 L494 270 L508 520 L420 532 Z', note: 'Several thousand people live directly above the excavations. Residents and some archaeologists contest the digging, the tunnelling beneath houses, and who controls the site.' });

  window.COD = {
    periods: P, features: F,
    terrainPlan: TERRAIN_PLAN, terrainLines: TERRAIN_LINES, terrainLabels: TERRAIN_LABELS, spring: SPRING,
    terrainSec: TERRAIN_SEC, secLabels: SEC_LABELS, secAxis: SEC_AXIS
  };
})();
