import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

const Trips = () => {
  return (
    <div>
      <div className="polkadot h-full w-full hidden md:block"></div>
      <Header />

      {/* as "polkadot" is absolute positioned, "main" needs to be relative so "polkadot" will hide behind "main" */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600 uppercase">
              Kurabesi Dive School
            </h2>
            <h1 className="font-bold text-4xl md:text-5xl">
              Explore The Beauty of Our Ocean
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div
                key={trip.name}
                className="w-full overflow-hidden flex flex-col justify-center"
              >
                <div className="drop-shadow-md mx-auto">
                  <img
                    className="rounded-lg object-center object-contain h-60"
                    src={trip.imgUrl}
                    alt={trip.name}
                  />
                </div>
                <div className="pt-4 flex flex-col items-center">
                  <div className="text-2xl font-bold mb-1">{trip.name}</div>
                  <div
                    className="text-base text-indigo-600 mb-1 text-center sm:line-clamp-1"
                    title={trip.province}
                  >
                    {trip.province}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {trips.map((trip, id) => (
            <section
              key={trip.name}
              className={`flex flex-wrap gap-4 md:gap-8 p-8 justify-center items-start ${
                id % 2 === 0 ? "bg-gray-200" : ""
              }`}
            >
              <div className="md:sticky md:top-[90px] md:w-80">
                <h2 className="text-3xl font-bold">{trip.name}</h2>
                <p className="text-base text-indigo-600 mb-3">
                  {trip.province}
                </p>
                <div className="drop-shadow-md">
                  <img
                    className="rounded-lg object-center object-cover h-auto w-full"
                    src={trip.imgUrl}
                    alt={trip.name}
                  />
                </div>
              </div>
              <div className="flex-1 prose max-w-lg">
                {/* invisible to make the desc below it align with the photo */}
                <h2 className="text-3xl font-bold hidden sm:block sm:invisible">
                  {trip.name}
                </h2>
                {trip.desc
                  .split(".") // Separate sentences into paragraphs
                  .filter((sentence) => sentence.length > 0)
                  .map((sentence, idx) => (
                    <p key={idx}>
                      {sentence}
                      {sentence.at(sentence.length - 1) === "!" ? "" : "."}
                    </p>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const trips = [
  {
    name: "Alor",
    province: "NTT",
    imgUrl: "/images/trips/alor.webp",
    desc: "Alor is one beautiful spot inside the “Sunda-Banda” seascape, one of the prioritized seascapes in Indonesia due to its mega biodiversity of marine life. At a large scale, this seascape is neighbor to Sulu-Sulawesi & Bird’s Head Seascape. As part of Indonesia’s Ring of Fire and shaped by thousands of years of volcanic history, Alor archipelago offers various underwater settings such as an outstanding wall, rockslides, valleys & seamounts, pinnacles, and some reef slopes. Those unique contours are covered with beautiful and intact coral reef ecosystems, as well as different schooling fish and big pelagic as their resident. Hoping to see them underwater? Let’s try our luck!",
  },
  {
    name: "Komodo",
    province: "NTT",
    imgUrl: "/images/trips/komodo.webp",
    desc: "This Park was originally designated to preserve the Komodo dragon and its natural habitat. However, due to its location at the south border of the coral triangle, the surrounding marine ecosystem was also magnificent. No wonder if Komodo is always listed as one of the best diving destinations in the world, a must-visit diving site for all divers. Drifting among numerous fish schooling of all sizes, sharks and the majestic manta rays are always on the menu for this area. The seabed is also a house for small and rare sea creatures that intrigues the world-class macro photographer to spend hours underwater. The trip to Komodo is always a beautiful combo of memorable underwater experiences and island trekking to learn more about the dragon.",
  },
  {
    name: "Tulamben & Amed",
    province: "Bali",
    imgUrl: "/images/trips/tulamben.webp",
    desc: "Bali is always loveable, where diving is doable all around the island. We regularly visit Tulamben, located on the North East coast of Bali that offers some great clear water diving opportunities. USS Liberty shipwreck is the most famed site for diving here. However, Tulamben also offers beautiful sites that are popular for their macro and wide photography.Going a bit further to the east, Amed Bay is a house to the beautiful coral reef ecosystem. A small Japanese Shipwreck is also a popular diving destination here in Amed. We believe that you would be blown away by the natural beauty of these places.",
  },
  {
    name: "Raja Ampat",
    province: "West Papua",
    imgUrl: "/images/trips/rajaampat.webp",
    desc: "Located in the heart of the Coral Triangle, Raja Ampat holds the prize for being the place with the richest marine biodiversity in the world! This regency had attracted the world’s attention for conservation and blue economy. Raja Ampat demonstrates where preserved nature can provide ecosystem services to humans, reciprocally. Our trips are designed to explore both the Central part of Raja Ampat (known also as Dampier Strait) and Southers part of it (known also as Misool). These areas are home to a beautiful collection of diving sites, and marine biota from a tiny pygmy seahorse to majestic megafauna such as manta rays. We believe that you would be blown away by the natural beauty of this place.",
  },
  {
    name: "Banda Neira",
    province: "Maluku",
    imgUrl: "/images/trips/banda.webp",
    desc: "Located in the heart of the Coral Triangle, Raja Ampat holds the prize for being the place with the richest marine biodiversity in the world! This regency had attracted the world’s attention for conservation and blue economy. Raja Ampat demonstrates where preserved nature can provide ecosystem services to humans, reciprocally. Our trips are designed to explore both the Central part of Raja Ampat (known also as Dampier Strait) and Southers part of it (known also as Misool). These areas are home to a beautiful collection of diving sites, and marine biota from a tiny pygmy seahorse to majestic megafauna such as manta rays. We believe that you would be blown away by the natural beauty of this place.",
  },
  {
    name: "Seribu Island",
    province: "DKI Jakarta",
    imgUrl: "/images/trips/seribu.webp",
    desc: "Well, its on our backyard, only 1.5 hrs by boat and you will arrive in this island setting atmosphere. Seribu NP is our regular destination for facilitating the diving courses we provide and for going diving with our friends during the weekend. No wonder this marine park is a birth place for many Jakarta divers. In certain months, the visibility of these waters are also excellent, which give you opportunities to be grateful for these reefs.",
  },
];

export default Trips;
