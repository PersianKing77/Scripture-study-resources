/* Roman infrastructure context. Roads are traced through cities and stations attested in the
   itineraries (Antonine Itinerary, Peutinger Table, milestones) — real waypoints, not invented lines.
   Provinces are labelled at their approximate centres; no borders are drawn, because provincial
   boundaries shifted repeatedly and no reliable geometry exists for them. */
window.PAUL_ROADS = [
{ name: "Via Egnatia", note: "Built 146–120 BC from the Adriatic to Byzantium — the road that carried Paul across Macedonia and, later, the empire's armies east.",
  pts: [[41.313,19.451],[41.115,20.802],[41.021,21.343],[40.797,22.048],[40.640,22.944],[40.617,23.450],[40.821,23.843],[41.014,24.286],[40.938,24.413],[40.860,26.380],[41.010,28.980]] },
{ name: "Via Appia", note: "The 'queen of roads', begun 312 BC. Paul walked its last 200 km into Rome, met on the way at Appii Forum and The Three Taverns.",
  pts: [[40.633,17.945],[40.470,17.240],[41.130,14.780],[41.090,14.250],[41.290,13.240],[41.470,12.983],[41.617,12.790],[41.892,12.485]] },
{ name: "Via Sebaste", note: "Augustus' military road of 6 BC through Pisidia and Lycaonia, policing the Isaurian highlands — the spine of the first journey.",
  pts: [[36.961,30.854],[37.280,30.600],[38.292,31.190],[37.875,32.493],[37.577,32.450],[37.350,33.280]] },
{ name: "The Cilician road", note: "Tarsus to the Cilician Gates and up onto the Anatolian plateau — the only practical land route between Syria and Asia Minor.",
  pts: [[36.202,36.160],[36.918,34.895],[37.290,34.770],[37.830,34.620],[37.875,32.493]] },
{ name: "The Syrian and Phoenician coast road", note: "The old Via Maris, linking Antioch to Egypt through every port Paul touched on the way to Jerusalem.",
  pts: [[36.202,36.160],[35.520,35.790],[34.436,35.833],[33.888,35.495],[33.561,35.376],[33.271,35.204],[32.928,35.082],[32.500,34.892],[32.050,34.750]] },
{ name: "Caesarea to Jerusalem", note: "The procurator's road through Antipatris, ridden by 470 soldiers escorting one prisoner by night (Acts 23:23–32).",
  pts: [[32.500,34.892],[32.100,34.930],[31.951,34.888],[31.778,35.235]] },
{ name: "The Asian highway", note: "The great road from Ephesus up the Maeander and Lycus valleys to Apamea and Pisidian Antioch — Paul's 'upper coasts' route of Acts 19:1.",
  pts: [[37.940,27.342],[37.830,29.111],[38.070,30.170],[38.292,31.190]] },
{ name: "The Aegean coast road", note: "Troas south past Pergamum, Smyrna and Ephesus to Miletus — the road network behind the seven churches of Revelation.",
  pts: [[39.796,26.159],[39.489,26.337],[39.130,27.180],[38.419,27.139],[37.940,27.342],[37.531,27.278]] }
];

window.PAUL_PROVINCES = [
{ name: "ITALIA", lat: 42.4, lng: 13.3 }, { name: "SICILIA", lat: 37.5, lng: 14.3 },
{ name: "MACEDONIA", lat: 41.1, lng: 22.2 }, { name: "THRACIA", lat: 41.6, lng: 26.2 },
{ name: "ACHAIA", lat: 38.3, lng: 22.3 }, { name: "ILLYRICUM", lat: 43.3, lng: 18.6 },
{ name: "ASIA", lat: 38.8, lng: 28.4 }, { name: "BITHYNIA ET PONTUS", lat: 40.8, lng: 31.6 },
{ name: "GALATIA", lat: 39.4, lng: 33.2 }, { name: "CAPPADOCIA", lat: 38.6, lng: 35.9 },
{ name: "LYCIA ET PAMPHYLIA", lat: 36.7, lng: 30.2 }, { name: "CILICIA", lat: 37.2, lng: 35.4 },
{ name: "CYPRUS", lat: 34.85, lng: 33.1 }, { name: "SYRIA", lat: 35.4, lng: 37.6 },
{ name: "IUDAEA", lat: 31.4, lng: 34.8 }, { name: "ARABIA", lat: 29.8, lng: 36.6 },
{ name: "CRETA ET CYRENAE", lat: 34.6, lng: 25.4 }, { name: "AEGYPTUS", lat: 28.5, lng: 30.8 },
{ name: "AFRICA PROCONSULARIS", lat: 34.2, lng: 10.2 },
{ name: "HISPANIA TARRACONENSIS", lat: 41.4, lng: -0.9 }
];
