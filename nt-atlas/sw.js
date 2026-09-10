/* New Testament Atlas — offline shell.
   Meetinghouses, coaches and the Galilee itself have bad wifi. The app files are
   cached on install; map tiles are cached as they are seen, up to a ceiling, so a
   view you have already studied comes back without a network.
   Registered only over http(s) — opened straight off disk this never runs. */

const APP = 'nt-atlas-v9';
const TILES = 'nt-atlas-tiles-v1';
const TILE_CEILING = 1200;

/* OpenTopoMap's tiles (CC BY-SA, fair-use policy) permit caching for reasonable,
   non-bulk use. Offline mode relies on this; if the basemap preset changes, revisit
   this gate. Only tiles a user has actually viewed are cached, up to TILE_CEILING —
   there is no prefetch or bulk download. */
const TILE_CACHE = true;

const SHELL = [
  'index.html',
  'about.html',
  'attributions.html',
  'nt-map-data.js',
  'nt-cfm-data.js',
  'nt-cfm-2027.js',
  'nt-scholarship.js',
  'nt-scripture-text.js',
  'vendor/leaflet-1.9.4/leaflet.css',
  'vendor/leaflet-1.9.4/leaflet.js',
  'vendor/leaflet-1.9.4/images/layers.png',
  'vendor/leaflet-1.9.4/images/layers-2x.png',
  'vendor/leaflet-1.9.4/images/marker-icon.png',
  'fonts/nt-fonts.css',
  'fonts/cormorant-garamond-400.woff2',
  'fonts/cormorant-garamond-500.woff2',
  'fonts/cormorant-garamond-600.woff2',
  'fonts/cormorant-garamond-700.woff2',
  'fonts/cormorant-garamond-400-italic.woff2',
  'fonts/spectral-300.woff2',
  'fonts/spectral-400.woff2',
  'fonts/spectral-500.woff2',
  'fonts/spectral-600.woff2',
  'fonts/spectral-400-italic.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== APP && k !== TILES).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function trimTiles(){
  const c = await caches.open(TILES);
  const keys = await c.keys();
  if(keys.length <= TILE_CEILING) return;
  await Promise.all(keys.slice(0, keys.length - TILE_CEILING).map(k => c.delete(k)));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);

  /* tiles: serve what we have, fetch and keep what we do not */
  if(TILE_CACHE && (/tile\.openstreetmap\.org$/.test(url.hostname) || /\.tile\.opentopomap\.org$/.test(url.hostname) || /^tile\.openmaps\.fr$/.test(url.hostname))){
    e.respondWith(caches.open(TILES).then(async c => {
      const hit = await c.match(req);
      if(hit) return hit;
      try{
        const res = await fetch(req);
        if(res && res.status === 200){ c.put(req, res.clone()); trimTiles(); }
        return res;
      }catch(err){
        return hit || Response.error();
      }
    }));
    return;
  }

  /* app files: network first so edits show up, cache as the fallback */
  e.respondWith((async () => {
    try{
      const res = await fetch(req);
      if(res && res.status === 200 && url.origin === location.origin){
        const c = await caches.open(APP); c.put(req, res.clone());
      }
      return res;
    }catch(err){
      const hit = await caches.match(req);
      if(hit) return hit;
      throw err;
    }
  })());
});
