import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  responseHeaders.set("Content-Security-Policy", "upgrade-insecure-requests");
  responseHeaders.set("X-Frame-Options", "deny");
  responseHeaders.set("X-Content-Type-Options", "nosniff");
  responseHeaders.set("Referer-Policy", "same-origin");
  responseHeaders.set(
    "Permissions-Policy",
    "accelerometer=(), camera=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()"
  );

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
