import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
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
      <Header />
      <main className="text-center">
        <div className="py-20">
          <h1 className="text-6xl font-extrabold tracking-tight">
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

        <div className="py-20">
          <div className="slanted bg-[#d80610] py-20">
            green-500
            <br />
            green-501
            <br />
            green-502
            <br />
            green-503
            <br />
            green-504
            <br />
            green-505
            <br />
            green-506
            <br />
          </div>
        </div>

        <div className="py-20">no-color-500</div>
        <div className="py-20">gray-500</div>
      </main>
      <Footer />
    </>
  );
}
