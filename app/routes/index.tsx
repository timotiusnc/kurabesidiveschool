import { Link } from "@remix-run/react";
import { Header } from "~/components/Header";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export default function Index() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto text-center mt-16">
        <h1 className="text-6xl font-extrabold tracking-tight">
          <span className="block">Get Your</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8]">
            Scuba Dive Certification
          </span>
          <span className="block">with us!</span>
        </h1>
        <ThemeSwitcher />
        <div className="inline-flex rounded-md shadow">
          <Link
            to="team"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get started
          </Link>
        </div>
      </main>
    </>
  );
}
