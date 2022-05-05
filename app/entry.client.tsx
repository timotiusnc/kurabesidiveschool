import { RemixBrowser } from "@remix-run/react";
import { load } from "fathom-client";
import { hydrate } from "react-dom";

hydrate(<RemixBrowser />, document);

load("JCUCMLDL", {
  spa: "history",
  excludedDomains: ["localhost"],
});
