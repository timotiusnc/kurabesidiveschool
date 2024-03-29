import type { LinksFunction } from "@remix-run/node";
import { Features } from "~/components/Features";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { WhatsAppLogo } from "~/components/logo/WhatsApp";
import { Testmonials } from "~/components/Testimonials";

import stylesUrl from "~/styles/index.css";
import { generateWALink } from "~/utils/contact";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div>
      <div className="polkadot h-full w-full hidden md:block"></div>
      <Header />
      {/* as "polkadot" is absolute positioned, "main" needs to be relative so "polkadot" will hide behind "main" */}
      <main className="relative">
        <div className="py-10 px-5 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="block">Get Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              SCUBA Dive Certification
            </span>
            <span className="block">with us!</span>
          </h1>

          <ContactUs />
        </div>

        <div className="slantedx bg-cyan-400" />
        <div className="py-10 bg-cyan-400">
          <Features />
        </div>
        <div className="slantedy bg-cyan-400" />

        <Testmonials />

        <div className="max-w-7xl px-4 mx-auto pt-10 pb-20 flex flex-col sm:flex-row items-center justify-evenly">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Ready to dive?
            </h2>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Contact Us!
            </h2>
          </div>
          <ContactUs />
        </div>
      </main>

      <Footer />
    </div>
  );
}

const ContactUs = () => {
  return (
    <a
      href={generateWALink({ phone: "628115415335" })}
      target="_blank"
      rel="noreferrer"
    >
      <div className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-cyan-400 hover:bg-cyan-500">
        <WhatsAppLogo className="w-6 mr-2" />
        <span>Contact Us (WhatsApp)</span>
      </div>
    </a>
  );
};
