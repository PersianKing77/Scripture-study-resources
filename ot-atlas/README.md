# The Old Testament & Intertestamental Atlas — v0.4.5-beta

Status: **Paid public beta.** This independent educational reconstruction is not
institutionally endorsed and remains subject to the limitations below.

## Launch instructions

- **Online build (`ot-atlas.html`)**: open in any modern desktop or mobile browser with
  an internet connection. Fetches fonts, mapping libraries, geographic topology, optional
  satellite/relief imagery, and scripture text from the remote services listed in
  `dependency-manifest.json` and `THIRD-PARTY-NOTICES.md`.
- **Offline build (`ot-atlas-offline.html`)**: open the same way; no internet connection
  is required for the map, layers, timeline, tours, study sheets or reference data —
  all mapping libraries and geography are inlined in the file. Scripture verse text and
  the optional Satellite/Relief imagery layers still require a network connection (see
  capability matrix below); everything else works offline.

Both are single self-contained HTML files — no install, build step, or server required.

## Online vs. offline capability matrix

| Feature | Online build | Offline build |
|---|---|---|
| Map, eras, timeline, layers, tours, study sheets | Yes | Yes |
| Places, finds, peoples, journeys, campaigns reference data | Yes | Yes |
| Scripture verse text (American Standard Version) | Yes (remote, bible-api.com) | Requires network |
| Satellite / Relief imagery (NASA GIBS) | Yes (remote) | Requires network |
| Everything else (drawn coastline/border map, all data panes) | Yes | Yes, no network needed |

## Known limitations (beta)

Tracked as open engineering items, not resolved in this release:

- No claim-level evidence fields (source, evidence status, limits) on individual cards —
  sourcing is at the bibliography/institution level today.
- No semantic list view of map contents as a screen-reader/keyboard alternative to the SVG
  map.
- Scripture text and Satellite/Relief imagery require a network connection even in the
  offline build (the ASV is not yet vendored locally).
- No documented 200%/400% zoom or cross-browser test matrix.

## Corrections and contact

Found a factual, citation, or accessibility issue? Contact Taylor Halverson, Ph.D.
(project author) with the specific card, place, or find name and the correction.

## Version

`0.4.5-beta` — content reviewed 2026-09-04. See `CHANGELOG.md` for full release history and
`THIRD-PARTY-NOTICES.md` + `dependency-manifest.json` for licensing and dependency detail.
