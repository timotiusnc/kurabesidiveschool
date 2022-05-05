import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { InstagramLogo } from "~/components/logo/Instagram";
import { SSILogo } from "~/components/logo/SSI";

const Team = () => {
  return (
    <div>
      <div className="polkadot h-full w-full hidden md:block"></div>
      <Header />

      {/* as "polkadot" is absolute positioned, "main" needs to be relative so "polkadot" will hide behind "main" */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
              Kurabesi Dive School
            </h2>
            <h1 className="font-bold text-4xl md:text-5xl font-heading">
              Meet The Team
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team) => (
              <div
                key={team.proid}
                className="w-full overflow-hidden flex flex-col justify-center"
              >
                <div className="drop-shadow-md mx-auto">
                  <img
                    className="rounded-lg object-center object-contain h-60"
                    src={team.imgUrl}
                    alt={team.name}
                  />
                </div>
                <div className="pt-4 pb-8 flex flex-col items-center">
                  <div className="text-2xl font-bold mb-2">{team.name}</div>
                  <div
                    className="text-base text-indigo-600 mb-1 text-center sm:line-clamp-1"
                    title={team.title}
                  >
                    {team.title}
                  </div>
                  <div className="text-sm font-normal">#{team.proid}</div>
                  <div className="flex mt-1 gap-4 justify-center">
                    <SSI proid={team.proid} />
                    <Instagram handle={team.ig_handle} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {teams.map((team, id) => (
            <section
              key={team.proid}
              className={`flex flex-wrap gap-4 md:gap-8 p-8 justify-center items-start ${
                id % 2 === 0 ? "bg-gray-200" : ""
              }`}
            >
              <div className="md:sticky md:top-[90px] md:w-80">
                <h2 className="text-3xl mb-3 font-bold">{team.name}</h2>
                <div className="drop-shadow-md">
                  <img
                    className="rounded-lg object-center object-cover h-auto w-full"
                    src={team.imgUrl}
                    alt={team.name}
                  />
                </div>
                <div className="pt-4">
                  <p className="text-base text-indigo-600 mb-1">{team.title}</p>
                  <p className="text-sm font-normal">#{team.proid}</p>
                  <div className="flex mt-1 gap-4">
                    <SSI proid={team.proid} />
                    <Instagram handle={team.ig_handle} />
                  </div>
                </div>
              </div>
              <div className="flex-1 prose max-w-lg">
                <p className="lead">
                  {team.desc.substring(0, team.desc.indexOf(".") + 1)}
                </p>
                <p>{team.desc.substring(team.desc.indexOf(".") + 1)}</p>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const SSI = ({ proid }: { proid: string }) => {
  return (
    <a
      className="underline"
      href={`https://my.divessi.com/pro/${proid}`}
      target="_blank"
      rel="noreferrer"
    >
      <SSILogo />
    </a>
  );
};
const Instagram = ({ handle }: { handle: string }) => {
  return (
    <a
      className="underline"
      href={`https://instagram.com/${handle}`}
      target="_blank"
      rel="noreferrer"
    >
      <InstagramLogo />
    </a>
  );
};

const teams = [
  {
    name: "Raymond Jakub",
    imgUrl: "/images/teams/raymond.webp",
    title: "SSI Master Instructor | Assistant Instructor Trainer",
    proid: "54342",
    ig_handle: "raymond_jakub",
    desc: "Raymond started his diving in 2002 and started his scuba diving teaching in 2007. He has extensive experience in facilitating hundreds of diving students getting their various programs. In Kurabesi Dive School, he acts as the Quality Management System Manager, ensuring the teaching and service quality to our customers are always at a gold standard. Within the team, he focuses on certifying divers who are planning to become qualified SSI's dive professionals, as well as teaching other specialties such as sidemount, emergency, and science of diving. Trained as a marine biologist, he is a professional marine & fisheries, conservation practitioner.",
  },
  {
    name: "Mohamad Zaki",
    imgUrl: "/images/teams/zaki.webp",
    title: "SSI Assistant Instructor",
    proid: "86394",
    ig_handle: "mhmdzaki",
    desc: "Zaki started his diving in 2016 in Jakarta. His passion for going to different destinations, diving with his friends, and sharing his hospitality with others brought him to the dive professional level in 2019. Going diving with him is an assurance of joy thanks to his cheerful and friendly personality. He holds a high quality of service in diving, beyond your imagination. In the house, Zaki is the guy that manages our course and trip schedule. While doing his professional diving time, he doesn't stop to learn and build his diving knowledge and skill from time to time. For him, diving is a way of balancing his busy time as a media professional on weekdays.",
  },
  {
    name: "Emilio De La Rosa",
    imgUrl: "/images/teams/emilo.webp",
    title: "SSI Assistant Instructor",
    proid: "69098",
    ig_handle: "emildr",
    desc: "Emil has been diving since 2012 and spent his earlier diving life as a scientific diver. He's been working in the scuba diving industry since 2015, teaching and spreading his love of scuba diving and the sea to hundreds of students. Nowadays, Emil's day-to-day life is a sandwich between working in a conservation organization and as a dive professional in Kurabesi Dive School. In Kurabesi Dive School, Emil assists and teaches entry-level scuba diver candidates, making sure everyone is having positive experiences, having fun, and most importantly becoming a responsible diver. In the team, Emil is our data guy that will support the school's business improvement. ",
  },
  {
    name: "Jonata Witabora",
    imgUrl: "/images/teams/jonata.webp",
    title: "SSI Dive Master",
    proid: "95177",
    ig_handle: "witabora",
    desc: "Jonat is a long-time diver. Started his dive in 2011, he enjoyed his diving process and had tried different interests in diving, and photography is one of those. With his calm and easy-going personality, in 2020, he joined the team as a certified assistant for various courses, in the pool and open water sessions. With his extensive experience and calm personality, diving would feel super safe. Teaching and drawing are his core expertise since he is an amazing graphic designer that gives lectures at one of the most prominent universities in Jakarta for graphic design. He also designs (hand draws) all of our diving trip t-shirts. In our team, he is our design master! Go diving with us to get his signature drawing on a t-shirt! ",
  },
  {
    name: "Hizkia Christie",
    imgUrl: "/images/teams/hizkia.webp",
    title: "SSI Dive Master",
    proid: "101467",
    ig_handle: "hizkiachristie",
    desc: "Hizkia took his first diving training in 2017, has been everywhere and is officially a Divemaster now. He is a young professional cinematographer both above and underwater. His stories and posts on his social media are mind-blowing! Recording and editing videos are his love and life that he brought into the underwater world. He loves to share some tips and tricks too! In our team, he is our social media guru that is managing our platforms. He also spent some years as an aquarist in a fancy aquarium in Jakarta, which really boosted his knowledge about marine life, especially when it comes to ornamental fish. Though his buoyancy and diving skill are considered examplary, he always listens and learns from others to always improve himself in diving.",
  },
  {
    name: "Frieska Pamariadinata",
    imgUrl: "/images/teams/frieska.webp",
    title: "SSI Dive Master",
    proid: "101465",
    ig_handle: "fdinata",
    desc: "Starting her first dive training back in 2016, Frieska passionately climbed her way to dive professional with full of excitement. Despite her busy schedule working in a prominent bank in Jakarta, she is committed to diving by dedicating her time to visit beautiful places in Indonesia. She got full support from her dive gang to gain her professional rating since they see that Frieska is a natural leader with great hospitality. Diving safety has been her main concern in her journey. Hence, diving with her would feel super safe and enjoyable. WIth Frieska in the team, we look forward to accommodating more females to learn scuba diving, all the way up to the professional level, as proven by her journey.",
  },
];

export default Team;
