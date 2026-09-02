import { verifySessionToken, parseCookie, COOKIE_NAME } from "./_utils/session.js";

// Paths that must stay open (the login page itself, and the endpoints it calls).
const PUBLIC_PATHS = [
  "/login.html",
  "/login",
  "/api/login",
  "/favicon.ico",
];

function isPublicPath(pathname) {
  if (PUBLIC_PATHS.includes(pathname)) return true;
  // Allow any static image/font assets referenced by the login page itself if you add them later
  if (pathname.startsWith("/public-assets/")) return true;
  return false;
}

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  if (isPublicPath(url.pathname)) {
    return next();
  }

  const cookieHeader = request.headers.get("Cookie");
  const token = parseCookie(cookieHeader, COOKIE_NAME);
  const session = token ? await verifySessionToken(token, env.SESSION_SECRET) : null;

  if (!session) {
    const redirectUrl = new URL("/login.html", url.origin);
    redirectUrl.searchParams.set("next", url.pathname);
    return Response.redirect(redirectUrl.toString(), 302);
  }

  // Valid session — let the request through to the actual page/app file.
  return next();
}
