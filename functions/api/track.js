// POST-only API route for resources.taylorhalverson.com's tool-page
// tracking (session length, scroll depth, click positions). This is a
// brand-new route -- it does not exist today, so adding it can't touch
// any existing page or route. analytics-tracker.js (the script injected
// by functions/_middleware.js) is the only thing that calls it.
//
// Requires the same ANALYTICS_DB D1 binding as the rest of this kit.
//
// NOTE on "who": these rows are currently anonymous (email is stored as
// null) because this repo's login/session setup wasn't confirmed to use
// the same cookie system as downloads.taylorhalverson.com. If
// resources.taylorhalverson.com signs visitors in the same way, tell me
// and I'll wire email capture into this route too, the same low-risk way
// it was added to the downloads middleware (reading the existing session
// cookie, never touching your login code).

const MAX_POINTS_PER_BATCH = 300;

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.ANALYTICS_DB) {
    return new Response(null, { status: 204 });
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return new Response("bad json", { status: 400 });
  }

  try {
    const country = (request.cf && request.cf.country) || null;

    if (body.type === "start") {
      const now = new Date().toISOString();
      await env.ANALYTICS_DB.prepare(
        `INSERT INTO tool_sessions
           (session_id, email, path, started_at, last_seen_at, active_seconds, max_scroll_pct,
            referrer, user_agent, country, viewport_w, viewport_h)
         VALUES (?, NULL, ?, ?, ?, 0, 0, ?, ?, ?, ?, ?)`
      )
        .bind(
          String(body.session_id || "").slice(0, 64),
          String(body.path || "").slice(0, 512),
          now,
          now,
          request.headers.get("referer") || null,
          request.headers.get("user-agent") || null,
          country,
          intOrNull(body.viewport_w),
          intOrNull(body.viewport_h)
        )
        .run();
    } else if (body.type === "heartbeat") {
      const now = new Date().toISOString();
      await env.ANALYTICS_DB.prepare(
        `UPDATE tool_sessions
         SET last_seen_at = ?, active_seconds = ?, max_scroll_pct = ?
         WHERE id = (
           SELECT id FROM tool_sessions
           WHERE session_id = ? AND path = ?
           ORDER BY id DESC LIMIT 1
         )`
      )
        .bind(
          now,
          intOrNull(body.active_seconds) || 0,
          intOrNull(body.max_scroll_pct) || 0,
          String(body.session_id || "").slice(0, 64),
          String(body.path || "").slice(0, 512)
        )
        .run();
    } else if (body.type === "clicks" && Array.isArray(body.points)) {
      const points = body.points.slice(0, MAX_POINTS_PER_BATCH);
      const path = String(body.path || "").slice(0, 512);
      const sessionId = String(body.session_id || "").slice(0, 64);
      const docW = intOrNull(body.doc_w) || 0;
      const docH = intOrNull(body.doc_h) || 0;

      const stmts = points
        .filter((p) => p && Number.isFinite(p.x) && Number.isFinite(p.y))
        .map((p) =>
          env.ANALYTICS_DB.prepare(
            `INSERT INTO click_events (session_id, email, path, ts, page_x, page_y, doc_w, doc_h, target)
             VALUES (?, NULL, ?, ?, ?, ?, ?, ?, ?)`
          ).bind(
            sessionId,
            path,
            p.ts ? new Date(p.ts).toISOString() : new Date().toISOString(),
            Math.round(p.x),
            Math.round(p.y),
            docW,
            docH,
            String(p.target || "").slice(0, 120)
          )
        );

      if (stmts.length) {
        await env.ANALYTICS_DB.batch(stmts);
      }
    }
  } catch (err) {
    // Tracking must never surface an error to the visitor's browser.
  }

  return new Response(null, { status: 204 });
}

function intOrNull(v) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : null;
}
