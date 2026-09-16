# Licensing status — Jerusalem Then and Now

Prepared for Taylor Halverson. This is issue-spotting, not legal advice or
attorney approval — have counsel confirm before a commercial launch.

## Short answer

**Yes — as of this build, nothing in the app requires a purchased licence or
a third party's written permission to publish or sell.** The Esri-dependent
basemap/imagery/hillshade options described in earlier drafts of this document
have been removed entirely from every edition (online, offline, device
prototype) — there is no toggle, no fallback branch, and no code path that can
call an Esri endpoint. That removes the one real commercial-licensing exposure
this project had.

---

## 1. What the app uses today, and its licence

- **Basemap** — OpenFreeMap (`tiles.openfreemap.org`), OpenStreetMap data via
  OpenMapTiles, rendered with MapLibre GL. Free, no key, no request limits;
  MIT-licensed rendering stack over ODbL map data. Obligation: attribution
  ("OpenFreeMap © OpenMapTiles Data from OpenStreetMap" + ODbL link), shown on
  screen and on every printed handout.
- **Aerial imagery** — Sentinel-2 cloudless 2016 mosaic (EOX), CC BY 4.0, free
  for commercial use with attribution ("Sentinel-2 cloudless — s2maps.eu by EOX
  IT Services GmbH; Contains modified Copernicus Sentinel data 2016").
- **Relief** — Mapzen terrain tiles, AWS Open Data (terrarium encoding),
  public-domain and open elevation sources, no key.
- **Libraries** — Leaflet 1.9.4 (BSD-2-Clause), MapLibre GL JS and
  maplibre-gl-leaflet (BSD-3-Clause / ISC). Keep the copyright notices; a
  `THIRD_PARTY_NOTICES.txt` carrying the exact upstream notice text for the
  shipped versions is still outstanding (see below).
- **Fonts** — EB Garamond, Archivo Narrow, Frank Ruhl Libre, Noto Naskh Arabic
  — SIL Open Font License, free commercially and in print. Currently loaded
  from Google Fonts' CDN on the online build (self-hosting removes that
  external request but is not a licensing requirement).
- **Your writing** — the era essays, weekly study notes, site descriptions and
  discussion questions are original work made for this project.
- **The historical map layers** — wall circuits, valleys, gates, sites — are
  drawn from coordinates in this project's own data files, informed by (not
  traced from) published excavation reports and maps, which are cited as
  sources rather than reproduced.
- **Scripture** — cited, not reproduced at length. Citations use the **World
  English Bible**, which is dedicated to the public domain worldwide (no
  Crown-copyright exception, unlike the KJV) and is free for any use,
  including commercial.
- **Orson Hyde's 1841 prayer** and *History of the Church* — public domain.

## 2. The "Come, Follow Me" name

The feature no longer uses the Church's curriculum name anywhere a user sees
it — the button, panel headers, search results and printed handout header all
read **"Weekly" / "Study Weeks" / "Weekly Scripture Readings."** This is the
zero-permission path: no nominative-use judgment call is required because the
mark is not displayed. A non-affiliation notice is included regardless (see
`Terms of Service and Non-Affiliation Notice.md`). Internal, never-shown
variable names (`CFM`, `#cfm=` in the URL hash) are implementation detail, not
marketing, and were left as-is.

## 3. Still outstanding — not licence gates, but not yet done

These do not block a licence-free release, but a peer-review or larger
commercial launch should not skip them:

- `THIRD_PARTY_NOTICES.txt` with verbatim upstream licence text for the exact
  shipped library and font versions.
- A signed rights ledger for the historical geometry and content (chain of
  title is asserted here, not documented with contracts/authorship records).
- Specialist review of chronology, geometry certainty, and translation parity
  (Hebrew, Arabic, Spanish) — see the audit resolution tracker.
- Accessibility (WCAG 2.2 AA) verification with real assistive-technology
  testing; static markup fixes are in, browser-matrix evidence is not.
- Counsel review of the Terms of Service / Privacy Notice before any sale.

## Privacy

No analytics, trackers, accounts, API keys, or location tracking. The removed
photo-upload feature (which stored images only in the browser) is gone
entirely, so there is nothing local to disclose there either. External
requests are limited to the mapping libraries, tile/imagery services listed
above, and Google Fonts.

## Checklist before a commercial launch
- [x] Remove every Esri/licensed-map code path from all editions.
- [x] Rename the CFM feature everywhere a user sees it; add a non-affiliation notice.
- [x] Regenerate the offline single-file build from the current, Esri-free source.
- [x] Add `THIRD_PARTY_NOTICES.txt` with verbatim upstream licence text.
- [x] Draft a rights and provenance ledger (`RIGHTS_LEDGER.md`) — still needs Taylor's signed confirmation of authorship, and a geometry-level bibliography.
- [x] Finalize the Terms of Service with no bracketed placeholders (governing law defaulted to Utah — confirm or change).
- [ ] Have an attorney review the Terms of Service and non-affiliation language.
- [ ] Native-speaker review of Hebrew, Arabic and Spanish translations.
- [ ] Independent accessibility (assistive-technology) testing.
- [ ] Manual 200%/400% browser-zoom check.
- [ ] Cross-browser/device QA matrix.
