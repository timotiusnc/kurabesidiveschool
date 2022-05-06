import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const meta: MetaFunction = () => {
  const title = "MV Kurabesi Explorer — Kurabesi Dive School";
  const description =
    "Kurabesi Explorer is member of the Kurabesi Nusantara family - a social enterprise establishing best-practice in sustainable tourism.";
  return {
    title,
    description,
  };
};

export default function KurabesiExplorer() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600 uppercase">
            Our Phinisi
          </h2>
          <h1 className="font-bold text-4xl md:text-5xl">
            MV Kurabesi Explorer
          </h1>
        </div>

        <div className="w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
          <div className="prose prose-slate mx-auto lg:prose-lg">
            <img
              src="images/kurabesiexplorer/far.webp"
              alt="MV Kurabesi Explorer from far away"
            />
            <p className="lead">
              Take a breath, and prepare for some of the most jaw-dropping views
              you will ever see. Jewel like lakes, and brilliant turquoise
              oceans surrounded by panoramic green forest and pristine
              mountains.
            </p>
            <p>
              <strong>Kurabesi Explorer Liveaboard & Charter</strong> will take
              you to eastern Indonesia, a living paradise on earth, where you
              can immerse yourself in nature, interact with friendly, authentic
              people, learn traditional music, and savor local delicacies.
            </p>

            <a
              href="https://www.kurabesiexplorer.com/"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <div className="w-full inline-flex justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-cyan-400 hover:bg-cyan-500">
                Visit MV Kurabesi Explorer
              </div>
            </a>

            <hr />
            <img
              src="images/kurabesiexplorer/close.webp"
              alt="MV Kurabesi Explorer up close"
              width="256"
              height="256"
              className="rounded-full mx-auto"
            />
            <h2>The Boat</h2>
            <p>
              Our vessel carries the honorable name of the{" "}
              <strong>Biak warrior Kurabesi</strong>, who supported the sultan
              of Ternate in freeing his people from the stronghold of Portuguese
              rule. In thanks, Kurabesi was offered the sultan's daughter's hand
              and rule over Easter Ternate, named Raja Ampat after their four
              children. On rainy days, snuggle in our cozy bean bags or browse
              books from our reading nook. We have a dedicated camera room,
              mini-bar and galley, all designed for the comfort of your
              life-on-board experience.
            </p>

            <hr />
            <img
              src="images/kurabesiexplorer/features.webp"
              alt="Dining hall at MV Kurabesi Explorer"
            />
            <h2>Features</h2>
            <p>
              Today Kurabesi's spirit sails on our spacious boat, was designed
              for extra comfort. The wide, open sun-deck is equipped with four
              loungers, is perfect for the stunning sunrise, sunset and
              stargazing on board. The semi-open dining area is located on the
              upper deck so you can enjoy the views at meal times.
            </p>

            <hr />
            <img
              src="images/kurabesiexplorer/home.webp"
              alt="Cabin at MV Kurabesi Explorer"
            />
            <h2>Home At Sea</h2>
            <p>
              Our vessel has{" "}
              <strong>
                six comfortable cabins that can accommodate up to 14 people in 2
                cabins with double beds, and 4 cabins with bunk beds
              </strong>
              . Each cabin is air conditioned, has ample storage for personal
              belongings, and is equipped with a private shower and flush
              toilet. Our decor uses traditional eastern Indonesian woven cloth,
              and we offer organic toiletries, fresh towels, and plastic free
              water tumblers for all our guests.
            </p>

            <hr />
            <img
              src="images/kurabesiexplorer/sports.webp"
              alt="Guests kayaking in Raja Ampat"
            />
            <h2>Sports & Entertainment</h2>
            <p>
              Design your perfect break. You are free to choose between
              water-sports or hiking, watching great movies or browsing the
              books from our on-board library. We also have backgammon and other
              board games on board. We carry{" "}
              <strong>
                two family size kayaks and an 9.5” stand up paddle board
              </strong>
              . In the afternoon, you can explore the coastline and enjoy a
              sunset party with a campfire or barbecue on a stunning private
              beach. All of our on-board facilities are offered to you{" "}
              <strong>free of charge</strong>.
            </p>

            <hr />
            <img
              src="images/kurabesiexplorer/divestation.webp"
              alt="Dive stations aboard MV Kurabesi Explorer"
            />
            <h2>Dive Station</h2>
            <p>
              Our spacious dive station is equipped with a{" "}
              <strong>rugged air compressor</strong>
              and enough dive tanks for up to{" "}
              <strong>three dives per day</strong>. Our two highly experienced
              local dive masters and our on-board local guide are ready to lead
              you through incredible adventures. Complete dive gear is also
              available for rent by request.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
