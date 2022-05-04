import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Features } from "~/components/Features";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <>
      <div className="polkadot h-full w-80 hidden md:block"></div>
      <Header />
      <main>
        <div className="py-14 md:py-16 px-5 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="block">Get Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8]">
              Scuba Dive Certification
            </span>
            <span className="block">with us!</span>
          </h1>
          <ThemeSwitcher />

          <Link to="team">
            <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get started
            </div>
          </Link>
        </div>

        <div className="py-14 md:py-16">
          <div className="slanted bg-[#06dbd0] py-14 md:py-16">
            <Features />
          </div>
        </div>
      </main>

      <div className="py-14 md:py-16">
        <Footer />
      </div>
    </>
  );
}
