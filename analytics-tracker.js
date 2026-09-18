/*
 * Lightweight session + click tracker for resources.taylorhalverson.com
 * tool pages. Injected automatically by functions/_middleware.js on every
 * HTML page load -- you don't add this tag by hand.
 *
 * Upload this file to the REPO ROOT of the resources.taylorhalverson.com
 * project (same level as the functions/ folder), so Cloudflare Pages
 * serves it as a static file at /analytics-tracker.js. It does nothing
 * to any existing page code; it only listens and reports.
 *
 * What it sends to /api/track:
 *   - "start"     once per page load: path, viewport size, referrer
 *   - "heartbeat" every 15s (and on tab hide/close): time actually spent
 *                 with the tab visible/focused, and max scroll depth
 *   - "clicks"    batched every 5s (and on tab hide/close): every click's
 *                 position on the full page (not just the visible part),
 *                 plus a short description of what was clicked
 *
 * Fails silently. If /api/track isn't deployed yet, or D1 isn't bound,
 * every request just gets ignored server-side -- nothing on the page
 * breaks either way.
 */
(function () {
  "use strict";

  var scriptTag = document.currentScript;
  var path = (scriptTag && scriptTag.getAttribute("data-page")) || location.pathname;
  var ENDPOINT = "/api/track";

  function makeSessionId() {
    return (
      Date.now().toString(36) +
      "-" +
      Math.random().toString(36).slice(2, 10)
    );
  }

  var storageKey = "aht_session_" + path;
  var sessionId;
  try {
    sessionId = sessionStorage.getItem(storageKey);
    if (!sessionId) {
      sessionId = makeSessionId();
      sessionStorage.setItem(storageKey, sessionId);
    }
  } catch (err) {
    sessionId = makeSessionId();
  }

  function post(payload, useBeacon) {
    try {
      var body = JSON.stringify(payload);
      if (useBeacon && navigator.sendBeacon) {
        var blob = new Blob([body], { type: "application/json" });
        navigator.sendBeacon(ENDPOINT, blob);
      } else {
        fetch(ENDPOINT, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: body,
          keepalive: true,
        }).catch(function () {});
      }
    } catch (err) {
      /* never let tracking throw into the page */
    }
  }

  // ---- pageview / session start ----
  post({
    type: "start",
    session_id: sessionId,
    path: path,
    viewport_w: window.innerWidth,
    viewport_h: window.innerHeight,
  });

  // ---- active time + scroll depth ----
  var activeSeconds = 0;
  var maxScrollPct = 0;

  function isActive() {
    return document.visibilityState === "visible" && document.hasFocus();
  }

  function currentScrollPct() {
    var doc = document.documentElement;
    var scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1);
    var pct = ((window.scrollY || doc.scrollTop) / scrollable) * 100;
    return Math.max(0, Math.min(100, Math.round(pct)));
  }

  window.addEventListener(
    "scroll",
    function () {
      var pct = currentScrollPct();
      if (pct > maxScrollPct) maxScrollPct = pct;
    },
    { passive: true }
  );

  setInterval(function () {
    if (isActive()) activeSeconds += 1;
  }, 1000);

  function sendHeartbeat(useBeacon) {
    post(
      {
        type: "heartbeat",
        session_id: sessionId,
        path: path,
        active_seconds: activeSeconds,
        max_scroll_pct: maxScrollPct,
      },
      useBeacon
    );
  }

  setInterval(function () {
    sendHeartbeat(false);
  }, 15000);

  // ---- click capture (batched) ----
  var clickBuffer = [];
  var MAX_BUFFER = 200;

  function describeTarget(el) {
    if (!el || !el.tagName) return "";
    var desc = el.tagName.toLowerCase();
    if (el.id) desc += "#" + el.id;
    else if (el.className && typeof el.className === "string") {
      var firstClass = el.className.trim().split(/\s+/)[0];
      if (firstClass) desc += "." + firstClass;
    }
    return desc.slice(0, 120);
  }

  document.addEventListener(
    "click",
    function (e) {
      if (clickBuffer.length >= MAX_BUFFER) return;
      clickBuffer.push({
        x: e.pageX,
        y: e.pageY,
        ts: Date.now(),
        target: describeTarget(e.target),
      });
    },
    { passive: true, capture: true }
  );

  function flushClicks(useBeacon) {
    if (!clickBuffer.length) return;
    var points = clickBuffer;
    clickBuffer = [];
    post(
      {
        type: "clicks",
        session_id: sessionId,
        path: path,
        doc_w: document.documentElement.scrollWidth,
        doc_h: document.documentElement.scrollHeight,
        points: points,
      },
      useBeacon
    );
  }

  setInterval(function () {
    flushClicks(false);
  }, 5000);

  // ---- final flush on tab hide/close ----
  function finalFlush() {
    sendHeartbeat(true);
    flushClicks(true);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") finalFlush();
  });
  window.addEventListener("pagehide", finalFlush);
})();
