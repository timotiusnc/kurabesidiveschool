import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const meta: MetaFunction = () => {
  const title = "Diving Insurance — Kurabesi Dive School";
  const description =
    "Dive accident coverage for scuba diving, freediving, and rebreather diving.";
  return {
    title,
    description,
  };
};

export default function Insurance() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <img
          className="mx-auto shadow-lg ring-1 ring-black ring-opacity-5"
          src="/images/insurance/dan.webp"
          alt="DAN Dive Insurance"
        />
      </main>

      <Footer />
    </div>
  );
}
