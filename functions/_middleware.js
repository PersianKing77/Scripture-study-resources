// Analytics logging for resources.taylorhalverson.com
//
// This file is ADDITIVE ONLY. It does not touch your existing login gate,
// hub page, or any tool code. It logs each real page visit to D1 (as
// before), and now ALSO injects one small <script> tag into the page so
// the tool pages can report session length, scroll depth, and click
// positions for the heatmap feature -- without editing any of your 11+
// tool page files by hand.
//
// The injected tag is: <script src="/analytics-tracker.js" defer></script>
// -- added just before </body> using Cloudflare's HTMLRewriter, which
// streams the page through untouched except for that one insertion. If
// analytics-tracker.js (see resources-tracker/analytics-tracker.js in this
// kit) isn't uploaded yet, the tag just 404s quietly and nothing else on
// the page is affected.
//
// Setup required (see SETUP.md):
//   1. Create the D1 database and run schema.sql + migrations/001 + 002 against it.
//   2. In this Pages project's Settings -> Bindings -> D1 database bindings,
//      add a binding named ANALYTICS_DB pointing at that database.
//   3. Upload analytics-tracker.js to the repo root (same level as this
//      functions/ folder) so it's served as a static file at /analytics-tracker.js.
// Until the D1 binding exists, the logging silently does nothing (site behaves
// exactly as it does today) -- it never breaks the site if D1 isn't set up yet.

const SKIP_EXTENSIONS = /\.(css|js|mjs|json|map|png|jpe?g|gif|svg|webp|ico|woff2?|ttf|eot|txt|xml|webmanifest)$/i;

export async function onRequest(context) {
  const { request, next, env, waitUntil } = context;
  const response = await next();

  try {
    const url = new URL(request.url);

    // Only log real page navigations, not asset/script requests, and only
    // successful page loads (skip redirects/errors so counts reflect real visits).
    const isAsset = SKIP_EXTENSIONS.test(url.pathname) || url.pathname.startsWith("/_");
    const isPageLoad = request.method === "GET" && response.status === 200;

    if (!isAsset && isPageLoad && env.ANALYTICS_DB) {
      const row = {
        ts: new Date().toISOString(),
        site: "resources",
        path: url.pathname,
        referrer: request.headers.get("referer") || null,
        country: (request.cf && request.cf.country) || null,
        user_agent: request.headers.get("user-agent") || null,
      };

      const insert = env.ANALYTICS_DB.prepare(
        `INSERT INTO resource_visits (ts, site, path, referrer, country, user_agent)
         VALUES (?, ?, ?, ?, ?, ?)`
      ).bind(row.ts, row.site, row.path, row.referrer, row.country, row.user_agent);

      // Don't make the visitor wait on the analytics write.
      waitUntil(insert.run().catch(() => {}));
    }

    // Inject the tracker script tag into real HTML page loads only.
    if (!isAsset && isPageLoad) {
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("text/html")) {
        return new HTMLRewriter()
          .on("body", {
            element(el) {
              el.append(
                `<script src="/analytics-tracker.js" defer data-page="${escapeAttr(url.pathname)}"></script>`,
                { html: true }
              );
            },
          })
          .transform(response);
      }
    }
  } catch (err) {
    // Analytics must never break the site. Swallow any unexpected error.
  }

  return response;
}

function escapeAttr(str) {
  return String(str ?? "").replace(/["&<>]/g, (c) => ({
    '"': "&quot;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
  }[c]));
}
