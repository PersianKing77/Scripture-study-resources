Typefaces
=========

This project self-hosts its two typefaces. The 7 .woff2 files and 2 OFL license
texts are present in this directory.

  EBGaramond-Regular.woff2
  EBGaramond-Medium.woff2
  EBGaramond-SemiBold.woff2
  EBGaramond-Italic.woff2
  IBMPlexMono-Regular.woff2
  IBMPlexMono-Medium.woff2
  IBMPlexMono-SemiBold.woff2

Sources
  EB Garamond    Google Fonts (fonts.google.com/specimen/EB+Garamond)
  IBM Plex Mono  Google Fonts (fonts.google.com/specimen/IBM+Plex+Mono)

  Both are distributed by Google Fonts under the SIL Open Font License 1.1.
  EB Garamond is a variable font; the Medium and SemiBold files are copies of
  the same Regular-style binary, which the browser renders at the requested
  weight via the font's built-in weight axis.

Licence
  Both families are licensed under the SIL Open Font License, version 1.1. Each
  family's licence file is kept alongside its font files:

    EBGaramond-OFL.txt
    IBMPlexMono-OFL.txt

Notes
  The @font-face rules are declared in the document head and reference this
  directory with relative paths. Each rule lists local() first, so a
  system-installed copy of the family is used when one is available.

  Nothing is requested from an external server.
