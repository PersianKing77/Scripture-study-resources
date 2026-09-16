# Citation Ledger — Jerusalem Then and Now

Claim-level sourcing for consequential, checkable statements made by the app's era essays and map. Each ID is referenced informally in code comments where practical; this document is the authoritative index. Scope: this covers the *era essay* claims (`jerusalem-data.js`) and the David/Solomon claim in `cfm-more.js` singled out by the audit — the weekly study content's per-verse citations already carry inline scripture references (`s:` arrays in `cfm-more.js`/`cfm-nt.js`/`cfm-sites.js`) and are not duplicated here.

| Claim ID | Claim (paraphrased) | Location | Source / locator |
|---|---|---|---|
| C-01 | Jerusalem was a ~5-hectare Jebusite city on a narrow ridge before David | canaan era body | Standard City-of-David excavation summaries, e.g. NEAEHL "Jerusalem" entry; Josephus, *Antiquities* VII.61–64 |
| C-02 | David's capture via the *tsinnor* (water shaft) | david era body | 2 Samuel 5:6–8; Warren's Shaft system as excavated (Reich & Shukron) |
| C-03 | Solomon's Temple built on the threshing floor David purchased | david-adjacent, cfm-more.js w:26 | 2 Samuel 24:18–25; 1 Kings 6:1 |
| C-04 | David's palace location at the ridge's high north end | cfm-more.js w:26 | Disputed inference; Eilat Mazar, "Large Stone Structure" excavation reports (2005–2008), presented as one proposed identification, not consensus — see RIGHTS_LEDGER.md |
| C-05 | Hezekiah's Tunnel, 533 m, dug from both ends | hezekiah era body | 2 Kings 20:20; the Siloam Inscription (contemporary Hebrew inscription describing the dig) |
| C-06 | Broad Wall, ~7 m thick, built in haste over demolished houses | hezekiah era body | Nahman Avigad's excavations, Jewish Quarter, published in *Discovering Jerusalem* (1983); cf. Isaiah 22:10 |
| C-07 | Herod doubled the Temple platform to its present size | herod era body | Josephus, *Antiquities* XV.380–425; *Jewish War* V.184–247; visible Herodian ashlar courses at the Western Wall |
| C-08 | Second Wall's course is genuinely disputed, no continuous stretch found | herod era `disputed` | Standard scholarly consensus, e.g. Dan Bahat's historical atlases; no excavated continuous run |
| C-09 | Third Wall built by Agrippa I, AD 41–44 — after Jesus' ministry | herod era `flag`/`disputed`; LB "3w" | Josephus, *Jewish War* V.147–155 (Agrippa's wall); ministry conventionally dated c. AD 27–33 |
| C-10 | Madaba Map (c. 560) depicts Byzantine Jerusalem's colonnaded main street | byz era body | The Madaba Map mosaic itself (Church of St. George, Madaba, Jordan), 6th century, public artifact |
| C-11 | Sasanian Persian capture of Jerusalem, 614–629 interruption | byz era body (added round 2) | Antiochus Strategos' near-contemporary account of the 614 sack; standard Byzantine-era chronologies |
| C-12 | Dome of the Rock finished 691/692, al-Aqsa c. 705 | muslim era body | Standard early-Islamic Jerusalem chronologies (e.g. Oleg Grabar's studies of the Haram) |
| C-13 | 1219 demolition of Jerusalem's walls under al-Malik al-Mu'azzam Isa | ayyubid era body/`disputed` (added round 1) | Standard Ayyubid-period histories (e.g. Runciman's *History of the Crusades* vol. 3); extent of demolition noted as debated |
| C-14 | Ottoman walls (1537–1541) exclude the City of David/Gihon/Siloam/Zion | ottoman era body | Suleiman the Magnificent's wall-building inscriptions in situ; standard Ottoman-Jerusalem histories |
| C-15 | Orson Hyde's 24 October 1841 dedicatory prayer on the Mount of Olives | cfm-more.js w:47 | Orson Hyde to Parley P. Pratt, 22 November 1841, reprinted in *History of the Church* 4:456–459 |
| C-16 | Orson Hyde Memorial Garden dedicated 24 October 1979 | cfm-more.js w:47 | Public dedication record, Church-published historical accounts of the garden |

## Scholarly claim review (2026-09-05)
## Scholarly claim review (2026-09-05)
Every era-essay claim in `jerusalem-data.js` and the David/Solomon passage in `cfm-more.js` was checked by the AI assistant against its own training knowledge for consistency with mainstream dates, attributions and sequence (Solomon's Temple c. 966 BC per 1 Kings 6:1; Hezekiah's Tunnel 533 m; Broad Wall c. 7 m; Third Wall built by Agrippa I, AD 41–44, after Jesus' ministry; Dome of the Rock 691/692, al-Aqsa c. 705; Sasanian capture 614–629; Saladin 1187; 1219 demolition; Mamluk takeover 1260; Suleiman's walls 1538; Nehemiah's wall 445 BC). **This is a plausibility check, not a completed scholarly citation review** — it did not consult primary sources, page-locate any claim, or verify against a second human specialist. Treat every claim below as unverified until an outside subject-matter expert confirms it against the exact editions cited.

## Coverage and rigor gaps — not yet closed
- **No exact bibliographic records.** Entries like "Standard City-of-David excavation summaries," "Standard scholarly consensus," "Dan Bahat's historical atlases," "Oleg Grabar's studies," and "Public dedication record" are pointers toward a source family, not auditable citations — they lack full title, edition, publisher, year, page/section number, and (where available) a DOI or stable URL. None of the entries in this ledger meet a peer-review evidence bar yet.
- **Not exhaustive.** Only the highest-consequence, most checkable claims are listed — not every sentence in every era essay.
- **No independent verification.** No second reviewer (human or otherwise) has checked this ledger's claims or citations.
- **Geometry is not covered here at all.** The map's wall/building/route lines have no evidence classification (excavated / topographically-constrained reconstruction / conjectural reconstruction / schematic / traditional identification / modern reference line) or source locator yet — see `RIGHTS_LEDGER.md` §2 for the same open item from the provenance side.

Before this ledger can support a peer-review or commercial claim of accuracy, a qualified reviewer needs to: (1) replace every pointer-style entry with a full bibliographic record and page/section locator, (2) extend coverage to every consequential sentence, and (3) independently re-verify the dates and attributions already listed, since the pass above was done by the same AI that wrote the content.

