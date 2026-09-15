# Third-party notices — The Old Testament & Intertestamental Atlas

The atlas text, data, maps, code and printables are © Taylor Halverson. All rights
reserved. The components below are third-party works, used under the licences named.
This file must ship with any copy of the product.

## Fonts

**EB Garamond** — SIL Open Font Licence 1.1. Copyright the EB Garamond project authors.
**IBM Plex Mono** — SIL Open Font Licence 1.1. Copyright IBM Corp.

The OFL permits bundling, sale of the product containing the fonts, and modification.
It does not permit selling the fonts on their own, and the licence text must travel with
the font files. Full licence: https://openfontlicense.org

## JavaScript libraries

**D3 v7** — ISC Licence. Copyright 2010–2023 Mike Bostock.
**topojson-client v3** — BSD 3-Clause Licence. Copyright 2012–2019 Mike Bostock.

Both permit commercial use and redistribution provided the copyright notice and licence
text are retained. Full texts: https://github.com/d3/d3/blob/main/LICENSE and
https://github.com/topojson/topojson-client/blob/master/LICENSE

## Geographic data

**Natural Earth** (country outlines and coastlines, 1:50m) — public domain. No permission
needed, no attribution required, though attribution is customary.
Delivered through the **world-atlas** package, ISC Licence, © Mike Bostock.

**NASA Blue Marble** and **NASA Shaded Relief with Bathymetry** imagery — public domain,
produced by NASA/Goddard Space Flight Center. The online build makes runtime requests to
**NASA GIBS (Global Imagery Browse Services)**, a hosted map-tile service, to fetch this
imagery when the Satellite or Relief layers are turned on; it is not OpenStreetMap, CARTO,
Mapbox or any other commercial tile provider. NASA content is generally not copyrighted
and may be used commercially; NASA asks that its logos and insignia not be used to imply
endorsement, and that imagery be credited "Courtesy NASA/GSFC". The atlas credits it on
the map and in the Credits panel. The offline build does not bundle these tiles; without
network access it falls back to the drawn coastline/border map only.

Elevations, coordinates, dates and site identifications were compiled for this atlas from
published excavation reports, museum records and standard reference works. Facts of that
kind are not subject to copyright; the compilation and its wording are the author's.

## Scripture text

**American Standard Version (1901)** — the only translation shipped in this build.
Public domain in the United States and worldwide; no jurisdiction requires a licence or
permission to distribute it. (The King James Version and Bible in Basic English were
removed from this build so that no territory-specific copyright question — such as the
KJV's Crown copyright status in the UK — applies anywhere this product is sold. The World
English Bible, used briefly in an earlier build, was replaced by the ASV at the author's
request; both are unencumbered public-domain texts.)

Text is fetched at runtime from bible-api.com (translation=asv), a free service serving
this public-domain edition. It is not covered by a commercial service agreement; a
shipped local copy of the ASV would remove that runtime dependency entirely if offline
reliability matters.

## Photographs

This build does not load photographs at runtime. There is no live search against
Wikipedia or Wikimedia Commons, and no third-party image host to credit or clear rights
for — removing that dependency entirely for this commercial release. A future build could
reintroduce imagery through a small, hand-curated and permanently-hosted set with its
rights individually verified and recorded before shipping.

## Curriculum

The 52-week reading sequence is an independently authored Old Testament reading plan by
Taylor Halverson, Ph.D. Its week boundaries were set by the author by dividing the Old
Testament into 52 roughly proportional weekly readings across a calendar year, without
reference to, or reproduction of, any third party's published schedule. Any resemblance in
total week count or start date to other Old Testament reading plans in wide use is
incidental to that shared, generic constraint (52 weeks in a year); no other plan's week
divisions, lesson titles, questions or commentary were consulted or reused. This product
is an independent work: it is not affiliated with, endorsed by, sponsored by, or produced
for any church, curriculum publisher or educational institution, names no such
organisation's curriculum by name, and uses no organisation's logos, trademarks or
copyrighted lesson material.

## Privacy

The atlas uses no accounts, analytics, advertising trackers, or behavioural profiling. The
online build makes requests to the services listed above — Google Fonts, unpkg (D3,
topojson-client), jsDelivr (world-atlas), NASA GIBS (optional satellite/relief imagery),
bible-api.com (scripture text, ASV translation), and, if a reader opens a further-reading link, Wikipedia —
for libraries, geographic data, scripture text and optional map imagery. Those providers
may receive standard network information such as IP address, browser headers, and the
requested resource. It makes no requests for photographs; none are loaded at runtime. The
offline build bundles the application libraries and geographic data locally, but scripture
text and optional satellite imagery still require network access unless those resources
are separately bundled.
