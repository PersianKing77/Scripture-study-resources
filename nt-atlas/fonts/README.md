# fonts/ — self-hosted type

Both families are **SIL Open Font License 1.1**. No permission request is
needed, and no fee: the OFL grants commercial use, web serving and embedding
outright. The only obligation is to ship `OFL.txt` with the files.

Self-hosting is on the sale checklist for two reasons that have nothing to do
with licensing:

1. **Privacy.** Loading from `fonts.googleapis.com` sends every visitor's IP
   address to Google. German and Austrian courts have found that this alone
   breaches GDPR. Self-hosting removes the exposure entirely.
2. **Offline mode.** A service worker cannot reliably cache a third-party CDN
   response it does not control. Local files it can.

## How to do it (about fifteen minutes)

1. Download both families:
   - Cormorant Garamond — <https://fonts.google.com/specimen/Cormorant+Garamond>
   - Spectral — <https://fonts.google.com/specimen/Spectral>

   Or from the upstream repositories, which is where the OFL text lives:
   - <https://github.com/CatharsisFonts/Cormorant>
   - <https://github.com/productiontype/Spectral>

2. Convert the TTFs to `.woff2` (`woff2_compress`, or
   <https://transfonter.org> with "Web font" output).

3. Rename to match `nt-fonts.css` exactly, and put them in this folder:

   ```
   cormorant-garamond-400.woff2
   cormorant-garamond-500.woff2
   cormorant-garamond-600.woff2
   cormorant-garamond-700.woff2
   cormorant-garamond-400-italic.woff2
   spectral-300.woff2
   spectral-400.woff2
   spectral-500.woff2
   spectral-600.woff2
   spectral-400-italic.woff2
   ```

4. Copy each family's `OFL.txt` into this folder as `OFL-Cormorant.txt` and
   `OFL-Spectral.txt`.

5. In `index.html`, in the `<head>`, comment out the `fonts.googleapis.com`
   line and uncomment the `fonts/nt-fonts.css` line. They sit next to each
   other with a comment explaining the swap.

6. In `sw.js`, add the ten `.woff2` paths and `fonts/nt-fonts.css` to `SHELL`,
   and bump `APP`.

7. Remove the two now-dead `<link rel="preconnect">` tags for
   `fonts.googleapis.com` and `fonts.gstatic.com`.

## Subsetting (optional)

The atlas uses Latin only. Subsetting to `latin` and `latin-ext` cuts each file
by roughly two-thirds. `pyftsubset` or Transfonter's character-range option will
do it. Keep the punctuation the scripture quotations need: em dash, en dash,
curly quotes and apostrophes.
