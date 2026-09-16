# Third-Party Notices

This project bundles the following third-party software and fonts. Each is used
under the license reproduced or referenced below. No component here is modified.

## Software

### Three.js (r160)
- Source: https://github.com/mrdoob/three.js
- License: MIT
- Location in this project: `vendor/three.module.js`, license text `vendor/THREE-LICENSE.txt`
- Used for: the 3D ridge view (`cod3d.js`)

### React, ReactDOM & Babel Standalone
- License: MIT
- Fetched from unpkg.com by the Design Component host runtime (`support.js`) at page
  load; not bundled files in this project. These requests require an internet
  connection unless the delivery host supplies the runtime itself.

## Fonts

### EB Garamond
- Source: Google Fonts, https://fonts.google.com/specimen/EB+Garamond
- License: SIL Open Font License, version 1.1 — full text at `fonts/EBGaramond-OFL.txt`
- Location: `fonts/EBGaramond-Regular.woff2`, `EBGaramond-Medium.woff2`,
  `EBGaramond-SemiBold.woff2`, `EBGaramond-Italic.woff2`
- Note: EB Garamond is a variable font; the Medium and SemiBold files are the same
  binary as Regular, rendered at their weight via the font's weight axis.

### IBM Plex Mono
- Source: Google Fonts, https://fonts.google.com/specimen/IBM+Plex+Mono
- License: SIL Open Font License, version 1.1 — full text at `fonts/IBMPlexMono-OFL.txt`
- Location: `fonts/IBMPlexMono-Regular.woff2`, `IBMPlexMono-Medium.woff2`,
  `IBMPlexMono-SemiBold.woff2`

## Summary

| Component | License | Bundled? |
|---|---|---|
| Three.js | MIT | Yes (`vendor/`) |
| React / ReactDOM / Babel Standalone | MIT | Provided by host runtime |
| EB Garamond | OFL 1.1 | Yes (`fonts/`) |
| IBM Plex Mono | OFL 1.1 | Yes (`fonts/`) |

React, ReactDOM, and Babel Standalone are fetched from unpkg.com by the Design
Component host runtime (`support.js`) at page load. React and ReactDOM are
MIT-licensed; Babel is MIT-licensed. These requests require an internet
connection unless the delivery host supplies the runtime. Every other asset —
fonts, Three.js, all application code — loads from this project only.
