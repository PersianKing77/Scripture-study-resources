import { createSessionToken, buildSetCookie } from "../_utils/session.js";

// Statuses Beehiiv uses that count as "actively receiving mail" — validated against
// your real API response before going live (see DEBUG mode note below).
const ACTIVE_STATUSES = ["active", "validating"];

// Access is now tag-based instead of tier-based. Any subscriber carrying one of these
// three tags gets into resources.taylorhalverson.com:
//   - study-tools-access        auto-applied on Study Tools upgrade, removed on downgrade
//   - insights-ultimate-access  auto-applied on Insights Ultimate upgrade, removed on downgrade
//   - tools-grandfathered       applied once to Teacher's Circle subscribers active as of
//                               2026-09-18, and never removed — permanent legacy access
// Overridable via env vars in case a tag ever gets renamed, but these are the live values.
const DEFAULT_ACCESS_TAGS = [
  "study-tools-access",
  "insights-ultimate-access",
  "tools-grandfathered",
];

export async function onRequestPost(context) {
  const { request, env } = context;
  const debug = env.DEBUG_LOGIN === "true";

  try {
    let email;
    try {
      const body = await request.json();
      email = (body.email || "").trim().toLowerCase();
    } catch (err) {
      return json({ ok: false, error: "Send a JSON body with an email field." }, 400);
    }

    if (!email || !email.includes("@")) {
      return json({ ok: false, error: "Enter a valid email address." }, 400);
    }

    if (!env.BEEHIIV_API_KEY || !env.BEEHIIV_PUBLICATION_ID) {
      return json({ ok: false, error: "Server isn't configured yet (missing Beehiiv credentials)." }, 500);
    }

    const accessTagsNeeded = (env.ACCESS_TAG_NAMES
      ? env.ACCESS_TAG_NAMES.split(",")
      : DEFAULT_ACCESS_TAGS
    ).map((t) => t.trim().toLowerCase()).filter(Boolean);

    // Ask for tags explicitly, in case this account's API build requires it to be expanded
    // rather than always being present on the base response (see DEBUG note below).
    const beehiivUrl =
      `https://api.beehiiv.com/v2/publications/${env.BEEHIIV_PUBLICATION_ID}` +
      `/subscriptions/by_email/${encodeURIComponent(email)}?expand[]=tags`;

    let beehiivRes;
    try {
      beehiivRes = await fetch(beehiivUrl, {
        headers: { Authorization: `Bearer ${env.BEEHIIV_API_KEY}` },
      });
    } catch (err) {
      return json({ ok: false, error: "Couldn't reach the subscriber system. Try again in a moment.", debug: debug ? String(err) : undefined }, 502);
    }

    if (beehiivRes.status === 404) {
      return json({ ok: false, error: "We don't see that email as a subscriber. Double-check it, or use the address you signed up with." }, 403);
    }

    if (!beehiivRes.ok) {
      const bodyText = debug ? await beehiivRes.text().catch(() => "") : undefined;
      return json({
        ok: false,
        error: "Couldn't verify your subscription right now. Try again shortly.",
        debug: debug ? { httpStatus: beehiivRes.status, body: bodyText } : undefined,
      }, 502);
    }

    let beehiivData;
    try {
      beehiivData = await beehiivRes.json();
    } catch (err) {
      return json({ ok: false, error: "Got an unexpected response from the subscriber system.", debug: debug ? String(err) : undefined }, 502);
    }

    const subscription = beehiivData.data || beehiivData;

    const status = (subscription.status || "").toLowerCase();

    // Beehiiv may return tags as a flat array of name strings, e.g. ["study-tools-access"],
    // or as an array of tag objects with a `name` field. Handle both shapes defensively,
    // same as the old tier-name check used to.
    const rawTags = subscription.tags || subscription.subscription_tags || [];
    const tagNames = rawTags
      .map((t) => (typeof t === "string" ? t : (t && t.name) || ""))
      .map((n) => n.toString().toLowerCase());
    const hasAccessTag = tagNames.some((name) => accessTagsNeeded.includes(name));

    const isActiveSubscriber = ACTIVE_STATUSES.includes(status);
    const authorized = isActiveSubscriber && hasAccessTag;

    // DEBUG MODE — set env.DEBUG_LOGIN = "true" in Cloudflare Pages right after this
    // deploys, log in with a known study-tools-access / insights-ultimate-access /
    // tools-grandfathered subscriber, and confirm `tagNames` actually shows the tag
    // (and that `rawKeys` includes `tags` at all — some accounts need it requested
    // differently). Turn DEBUG_LOGIN back off once confirmed.
    if (debug) {
      return json({
        ok: authorized,
        debug: { status, tagNames, accessTagsNeeded, rawKeys: Object.keys(subscription), rawSubscription: subscription },
      });
    }

    if (!authorized) {
      return json({ ok: false, error: "That email doesn't currently have access to the interactive study tools." }, 403);
    }

    const token = await createSessionToken(email, env.SESSION_SECRET);
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Set-Cookie", buildSetCookie(token));

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    // Catch-all so a bug here never shows up as a bare Cloudflare error page —
    // you always get readable JSON back, with the real error when DEBUG_LOGIN is on.
    return json({
      ok: false,
      error: "Something went wrong on our end.",
      debug: debug ? { message: String(err && err.message || err), stack: err && err.stack } : undefined,
    }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
