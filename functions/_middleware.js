// Analytics logging for resources.taylorhalverson.com
//
// This file is ADDITIVE ONLY. It does not touch your existing login gate,
// hub page, or any tool code. It just logs each real page visit to D1,
// then lets the request continue exactly as before.
//
// Setup required (see SETUP.md):
//   1. Create the D1 database "site-visits-analytics" and run schema.sql against it.
//   2. In this Pages project's Settings -> Functions -> D1 database bindings,
//      add a binding named ANALYTICS_DB pointing at that database.
// Until that binding exists, this file silently does nothing (site behaves
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
  } catch (err) {
    // Analytics must never break the site. Swallow any unexpected error.
  }

  return response;
}
