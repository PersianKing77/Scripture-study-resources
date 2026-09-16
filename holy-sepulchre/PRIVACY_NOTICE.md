# Privacy notice

This tool collects no analytics, has no user accounts, and takes no payment.
It makes network requests only to load fonts (Google Fonts) and its runtime
library (React/ReactDOM/Babel via UNPKG) — see `THIRD_PARTY_NOTICES.txt`.

## Local storage

Two keys are stored in your browser's `localStorage`, on your device only:

| Key | Purpose | Retention |
|---|---|---|
| `hs-theme-v1` | Remembers light/dark mode choice | Until cleared or browser data is wiped |
| `hs-hint-v1` | Remembers that you dismissed the first-run hint | Until cleared |

None of this is uploaded anywhere. A **Clear local data** button in About →
The site removes both keys immediately.

## Internet requirement

This beta is not offline-capable: it loads its display runtime and fonts from
trusted content-delivery networks (see `THIRD_PARTY_NOTICES.txt`) every time
it opens. An internet connection is required.
