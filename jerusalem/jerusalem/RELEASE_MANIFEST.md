# Release Manifest — Jerusalem Then and Now

**Version:** 0.4.1-beta &nbsp;|&nbsp; **Build date:** 2026-09-08 &nbsp;|&nbsp; **Prepared by:** Claude Design, for Taylor Halverson, Ph.D.
**Release status: paid public beta.** This version passed the Combined Paid Beta Review (v2.2) with 0 Red findings and 1 Amber correction, now applied — see "Post-beta review and documentation backlog" below for items that remain open for a later scholarly edition without gating this release.

## What this package is
This is the **clean distribution package**: the app and the files it needs to run, plus its legal/provenance documentation. It intentionally excludes development debris (audit-history spreadsheets, screenshots, scratch files, prior drafts) — those belong in a separate internal evidence archive, not a customer-facing release.

## What changed in this build (round 2, post-audit)
- Fixed the David/Solomon palace and threshing-floor paragraph in `cfm-more.js`: now states the palace location and Temple footprint as disputed/inferred, names Eilat Mazar's proposal as one reading among others, and cites 2 Samuel 11:2, 24:18–25 and 1 Kings 6:1.
- Renamed the Second Temple era's Hebrew/Arabic/Spanish tick labels from "Jesus' time"/"Time of the Messiah"/"Tiempo de Jesús" to the neutral "Second Temple" — matching the English label and removing a translation-parity mismatch that implied the whole 37 BC–AD 70 span was Jesus' lifetime.
- Added a **"Jesus' ministry only"** checkbox in the wall-circuits panel (visible on the Second Temple era): when checked, it hides the Third Wall (built AD 41–44, after the ministry) from both the map shape and its label, in addition to the existing text notes.
- Annotated the Byzantine era body, all four languages, with the 614–629 Sasanian Persian capture and interruption of Byzantine rule, so the layer is not read as uninterrupted Byzantine governance.
- Added the Ayyubid era (1187–1260) with the 1219 wall demolition, closing the previous Crusader→Mamluk gap (round 1).
- Reduced-motion support: `prefers-reduced-motion: reduce` now collapses animations/transitions app-wide.
- `THIRD_PARTY_NOTICES.txt` added with verbatim upstream licence text (Leaflet, MapLibre GL JS, maplibre-gl-leaflet, SIL OFL fonts) and map/imagery attribution requirements.
- `RIGHTS_LEDGER.md` added: a provenance ledger for written content, map geometry and third-party assets, with open items flagged.
- `CITATION_LEDGER.md` added: claim IDs with source locators for consequential, checkable statements.
- Terms of Service finalized to version 1.0 with governing-law and contact placeholders resolved to defaults (see that document's header for what's still a default pending Taylor's confirmation).

## Files in this release
- `Jerusalem Then and Now.html` — the runtime app (requires internet for map tiles/fonts).
- `Jerusalem Then and Now - standalone.html` — self-contained single-file build (all code/data inlined into one file for easy distribution). Renamed from "offline" — it still calls out to map-tile/imagery/font services over the network at runtime, so it does not work with no internet connection; "standalone" describes its packaging, not its connectivity.
- `jerusalem-data.js`, `jerusalem-history.js`, `cfm-sites.js`, `cfm-nt.js`, `cfm-sources.js`, and `cfm-more.js` are the data/content files loaded directly by the modular HTML build.
- `LICENSING.md` — plain-language licensing summary.
- `THIRD_PARTY_NOTICES.txt` — verbatim third-party licence texts.
- `RIGHTS_LEDGER.md` — content/geometry/asset provenance ledger.
- `CITATION_LEDGER.md` — claim-level source ledger.
- `Terms of Service and Non-Affiliation Notice.md` — v1.0.

## Post-beta review and documentation backlog
1. **Citations are not yet auditable.** `CITATION_LEDGER.md` names source families ("standard excavation summaries," named scholars' general body of work) rather than exact bibliographic records with page/section locators — see that file's own gap note.
2. **Geometry has no evidence classification.** No wall/building/route line is yet tagged excavated / topographically-constrained / conjectural / schematic / traditional-identification / modern-reference, with a source locator per feature.
3. **Chain of title is unsigned.** `RIGHTS_LEDGER.md` has no countersignature from Taylor confirming authorship/ownership of the essays, study content, and any contributor's work.
4. **Optional counsel review remains advisable for later scaling.** Before release, Taylor has confirmed the Utah forum, the 14-day direct-sale refund policy, and the intended sales channel.
5. **Hebrew, Arabic, and Spanish translation removed pending decision.** Earlier drafts carried untranslated-parity content in these languages; it has been stripped from the shipped data files rather than left half-finished (see below). If multi-language support is wanted later, it should be rebuilt as a full translation project with native-speaker review of factual meaning, certainty strength, contested-site and religious terminology, political neutrality, and RTL presentation — not resumed from the removed text.
6. **Accessibility is unverified, not conformant.** Keyboard nav, live-region announcements, a text list-view alternative, focus-trapped modals, and reduced-motion support are implemented; independent assistive-technology testing, a full WCAG 2.2 AA audit, and 200%/400% zoom verification have not been performed. Do not represent this build as WCAG-conformant — only as targeting it.
7. **Cross-browser/device QA is unverified.** This build has been checked in one automated headless browser only. No Chrome/Firefox/Safari/Edge × Windows/macOS/Android/iOS × phone/tablet/desktop matrix has been run.
8. **The scholarly claim review is a plausibility check, not a verified fact-check** — done by the same AI that wrote the content, with no primary-source lookup or second reviewer. See `CITATION_LEDGER.md`.

These items remain post-beta documentation and scholarly-development work. They do not block this paid-beta release, and no claim of peer review, exhaustive scholarship, or WCAG conformance should be made.
