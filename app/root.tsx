import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  const title = "Your most trusted buddy in diving — Kurabesi Dive School";
  const description =
    "Thinking to get yourself SCUBA Dive certified in a safe and joyful way? Kurabesi Dive School offers various SCUBA dive programs to facilitate you to grow in your diving path. Find out our team, courses, programs, and diving trips on our website.";
  const image = "https://kurabesidiveschool.vercel.app/images/social.jpg";
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    keywords: "SCUBA,SSI,dive,diving,kurabesi",
    "og:url": "https://kurabesidiveschool.com/",
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
  };
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {/* h-full in html and body is for 404 page so we can set 100% height (because 404 page is not high enough) */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      <script
        async
        src="https://www.jscache.com/wejs?wtype=excellent&amp;uniq=499&amp;locationId=19657904&amp;lang=en_US&amp;display_version=2"
        data-loadtrk
      />
      <script
        async
        src="https://www.jscache.com/wejs?wtype=cdswritereviewnew&amp;uniq=915&amp;locationId=19657904&amp;lang=en_US&amp;lang=en_US&amp;display_version=2"
        data-loadtrk
      />
      <script
        async
        src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=107&amp;locationId=19657904&amp;lang=en_US&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=true&amp;display_version=2"
        data-loadtrk
      />
    </html>
  );
}
