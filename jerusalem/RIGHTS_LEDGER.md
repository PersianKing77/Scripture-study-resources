# Rights & Provenance Ledger — Jerusalem Then and Now

Draft prepared by Claude Design for Taylor Halverson. This is a starting
ledger, not a substitute for a signed chain-of-title review — have counsel
or an archivist confirm before a commercial launch. "Signed" below means a
line for the rights-holder's name/date; nothing here is yet countersigned.

## 1. Original written content
| Item | Author | Rights | Status |
|---|---|---|---|
| Era essays (body/flag/disputed/look text, all 13 periods, 4 languages) | Taylor Halverson, drafted with Claude Design | Owned by Taylor Halverson | Unsigned — needs Taylor's written confirmation of authorship/ownership |
| Weekly study content (cfm-more.js, cfm-nt.js, cfm-sites.js) | Taylor Halverson, drafted with Claude Design | Owned by Taylor Halverson | Unsigned |
| Site/label descriptions (jerusalem-history.js, jerusalem-data.js LB array) | Taylor Halverson, drafted with Claude Design | Owned by Taylor Halverson | Unsigned |
| Orson Hyde's 1841 dedicatory prayer | Orson Hyde, published in *History of the Church* 4:456–459 | Public domain | Clear |

## 2. Map geometry (wall lines, valleys, gates, site points)
Coordinates in `jerusalem-data.js` (`P`, `LB` arrays) were drawn by informed
placement against published excavation reports, survey maps and satellite
imagery — not traced from any single copyrighted map. No proprietary GIS
shapefile or paid dataset was used as a source file.

| Layer | Primary informing sources (not reproduced, consulted) | Status |
|---|---|---|
| First/Second/Third Wall, Herodian platform | Josephus, *Jewish War* V; standard published excavation summaries (e.g. NEAEHL, IAA reports) | Geometry drawn from description, not a licensed vector file |
| City of David / Hezekiah's Tunnel / Broad Wall | Published excavation reports (Shiloh, Reich & Shukron, and successors), summarized | Same |
| Byzantine/Madaba Map city | The Madaba Map itself is a public 6th-century mosaic (public domain as an ancient artifact); this app's lines are a modern schematic informed by it, not a copy of any modern photograph or published redrawing | Same |
| Crusader/Ayyubid/Mamluk/Ottoman circuits | Standard published historical-geography summaries | Same |

**Open item:** a named, dated bibliography entry per layer (author, title,
year, page) is not yet compiled as a stand-alone document — see
`CITATION_LEDGER.md` for the claim-level version; a geometry-level source
list should be added before scholarly peer review.

## 3. Third-party code, fonts, map/imagery services
See `THIRD_PARTY_NOTICES.txt` (verbatim licence texts) and `LICENSING.md`
(plain-language summary). All are open/free-to-use with attribution; none
require a purchased licence.

## 4. Removed content
The user-photograph-upload feature was removed in full (UI, storage
functions, print references) in an earlier pass — no user-submitted images
are collected, stored, or shipped with this product.

## 5. Outstanding before a scholarly or commercial release
- [ ] Taylor's written, signed confirmation of authorship/ownership for the original essays and study content — unsigned as of this version.
- [ ] Confirmed rights assignment from any other contributor (translator, editor, contractor) who supplied protectable content, code, or geometry — none identified yet, but not formally ruled out either.
- [ ] A geometry-level bibliography: every significant wall, building footprint, route and boundary needs an evidence classification (excavated segment / topographically-constrained reconstruction / conjectural reconstruction / schematic teaching representation / traditional identification / modern reference line) plus a source locator — not yet started.
- [ ] Countersignature line for whoever holds final rights to sign off.
- [ ] Documentation of who selected, revised, and approved the final human-authored compilation of AI-assisted content (the "drafted with Claude Design" credit is not itself a rights record).
