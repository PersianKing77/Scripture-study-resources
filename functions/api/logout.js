import { buildClearCookie } from "../_utils/session.js";

export async function onRequestPost() {
  const headers = new Headers({ "Content-Type": "application/json" });
  headers.append("Set-Cookie", buildClearCookie());
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
}
