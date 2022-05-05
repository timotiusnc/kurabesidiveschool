import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const meta: MetaFunction = () => {
  const title = "Dive Courses — Kurabesi Dive School";
  const description =
    "Discover our dive courses. We offer courses from beginner, specialty, up to professional level.";
  return {
    title,
    description,
  };
};

const Courses = () => {
  return (
    <div>
      <div className="polkadot h-full w-full hidden md:block"></div>
      <Header />

      {/* as "polkadot" is absolute positioned, "main" needs to be relative so "polkadot" will hide behind "main" */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 divide-y-2 divide-gray-100">
          <CoursePreview
            title="Courses for Beginner"
            subtitle="Get Yourself Certified"
            courses={courseList.filter((course) => course.level === "beginner")}
          />
          <CoursePreview
            title="Dive Specialties Program"
            subtitle="Continue Your Diving Education!"
            courses={courseList.filter(
              (course) => course.level === "specialty"
            )}
          />
          <CoursePreview
            title="Dive Professional Program"
            subtitle="Build Your Diving Career!"
            courses={courseList.filter((course) => course.level === "pro")}
          />
        </div>

        <CourseDetail courses={courseList} />
      </main>

      <Footer />
    </div>
  );
};

const CoursePreview = ({
  title,
  subtitle,
  courses,
}: {
  title: string;
  subtitle: string;
  courses: typeof courseList;
}) => {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h1 className="font-bold text-4xl md:text-5xl mb-2">{title}</h1>
        <h2 className="text-base font-bold text-indigo-600 uppercase">
          {subtitle}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.name}
            className="w-full overflow-hidden flex flex-col justify-center"
          >
            <div className="drop-shadow-md mx-auto">
              <img
                className="rounded-lg object-center object-contain h-44"
                src={course.imgUrl}
                alt={course.name}
              />
            </div>
            <div className="pt-4 flex flex-col items-center">
              <div
                className="text-2xl font-bold mb-1 text-center sm:line-clamp-1"
                title={course.name}
              >
                {course.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseDetail = ({ courses }: { courses: typeof courseList }) => {
  return (
    <div>
      {courses.map((course, id) => (
        <section
          key={course.name}
          className={`flex flex-wrap gap-4 md:gap-8 p-8 justify-center items-start ${
            id % 2 === 0 ? "bg-gray-200" : ""
          }`}
        >
          <div className="md:sticky md:top-[90px] md:w-80">
            <h2 className="text-3xl mb-3 font-bold">{course.name}</h2>
            <div className="drop-shadow-md">
              <img
                className="rounded-lg object-center object-cover h-auto w-full"
                src={course.imgUrl}
                alt={course.name}
              />
            </div>
            <div className="pt-4">
              <p className="text-base text-indigo-600 mb-1">
                {convertLevelIdToDesc(course.level)}
              </p>
            </div>
          </div>
          <div className="flex-1 prose max-w-lg">
            {/* invisible to make the desc below align with the photo */}
            <h2 className="text-3xl mb-3 font-bold hidden sm:block sm:invisible sm:w-80">
              {course.name}
            </h2>
            {course.desc // Separate sentences into paragraphs
              .split(/\n/)
              .map((sentence, idx) => (
                <p key={idx}>{sentence}</p>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const convertLevelIdToDesc = (level: string) => {
  switch (level) {
    case "beginner":
      return "Courses for Beginner";
    case "specialty":
      return "Dive Specialties Program";
    case "pro":
      return "Dive Professional Program";
  }
};

export default Courses;

const courseList = [
  {
    name: "Try Scuba",
    imgUrl: "/images/courses/beginner/tryscuba.webp",
    level: "beginner",
    desc: `Discover the underwater world, go scuba diving in confined water and earn the SSI Try Scuba recognition card.
    Conducted in shallow water, the SSI Try Scuba program is a diving adventure the whole family can enjoy.
    Start today!`,
  },
  {
    name: "Open Water Diver",
    imgUrl: "/images/courses/beginner/owd.webp",
    level: "beginner",
    desc: `If you want to dive anywhere you want, with anyone you want, join the Open Water Diver program.
    This is your international certification to become part of an exclusive group of underwater explorers that most people only dream about joining!
    Learning to dive is much easier than you think.
    Join the SSI Open Water Diver program now!`,
  },
  {
    name: "Scuba Skill Update",
    imgUrl: "/images/courses/beginner/skillupdate.webp",
    level: "beginner",
    desc: `Not dived for a while? Need to practice before your open water training dives?
    Boost your dive confidence and practice your skills with an SSI Scuba Skills Update.
    This scuba refresher course is a safe and fun way to practice dive skills with an SSI professional and is often required to continue your diving training after time away from the sport.
    Start diving again now!`,
  },
  {
    name: "Advanced Adventurer",
    imgUrl: "/images/courses/specialty/aa.webp",
    level: "specialty",
    desc: `Continue exploring the oceans, extend your dive times, reduce your air consumption, and more with the SSI Advanced Adventurer program.
    Try 5 different dive specialties without committing to a full dive program and discover the diving you love.
    This is the best way to continue your education to become a confident, safe and comfortable advanced diver.`,
  },
  {
    name: "Perfect Buoyancy",
    imgUrl: "/images/courses/specialty/pb.webp",
    level: "specialty",
    desc: `Glide through the ocean effortlessly, extend your dive time, reduce your air consumption, and more with the SSI Perfect Buoyancy specialty.
    No matter what your diving interest is, having perfect buoyancy is the key to success.
    Start this essential specialty course now!`,
  },
  {
    name: "Deep Diving",
    imgUrl: "/images/courses/specialty/deep.webp",
    level: "specialty",
    desc: `Are you ready to become a deep diver and explore deeper wrecks, coral-encrusted walls, reefs and more?
    Many exciting dive sites lie in deep waters and the SSI Deep Diving Specialty will teach you how to get there – safely and with confidence.
    You will learn how to plan and conduct dives to between 18 and 40 meters deep and earn your SSI Deep Diving Specialty certification.`,
  },
  {
    name: "Night & Limited Visibility",
    imgUrl: "/images/courses/specialty/night.webp",
    level: "specialty",
    desc: `Diving does not end when the sun goes down!
    Become a night diver and meet the incredible marine life that only comes out at night.
    Join the SSI Night Diving and Limited Visibility specialty program and you will learn all you need to dive safely at night or in limited visibility.
    Upon completion, you will earn your SSI Night Diving and Limited Visibility specialty certification.`,
  },
  {
    name: "Science of Diving",
    imgUrl: "/images/courses/specialty/sod.webp",
    level: "specialty",
    desc: `Expand your dive knowledge and gain a better understanding of your equipment, physics, the aquatic environment and more with the online SSI Science of Diving specialty.
    After completing this dive science program, you will be halfway to earning the coveted SSI Divemaster rating.
    Start online today!`,
  },
  {
    name: "Diver Stress & Rescue",
    imgUrl: "/images/courses/specialty/rescue.webp",
    level: "specialty",
    desc: `Diver stress is a major cause of diving accidents, but it can easily be prevented and resolved. Join the SSI Diver Stress and Rescue Specialty program and learn how to help yourself and other divers stay safe.Earn this essential specialty certification today!`,
  },
  {
    name: "React Right",
    imgUrl: "/images/courses/specialty/rr.webp",
    level: "specialty",
    desc: `Learn how to manage dive emergencies and treat injuries as a first responder with our React Right specialty.
    This in-depth emergency first response course includes first aid, CPR skills, oxygen administration and much more!
    Earn the SSI React Right specialty certification and help other divers in need.`,
  },
  {
    name: "Recreational Sidemount",
    imgUrl: "/images/courses/specialty/sidemount.webp",
    level: "specialty",
    desc: `Are you ready for better streamlining in the water?
    Take the weight off your back by joining SSI’s Recreational Sidemount program.
    This course will teach you the proper sidemount setup and techniques required to use a sidemount configuration efficiently and effectively with multiple stage cylinders.`,
  },
  {
    name: "Enriched Air Nitrox Level 2 (40%)",
    imgUrl: "/images/courses/specialty/ean.webp",
    level: "specialty",
    desc: `Do you want to extend your dive time and explore the dive sites you love for longer? Join the SSI Enriched Air Nitrox specialty program and become a Nitrox diver! This is the perfect course to get the most out of your dive time, especially on multi-dive days, and helps minimize diver fatigue. Earn your SSI Enriched Air Nitrox Specialty certification now!`,
  },
  {
    name: "Decompression Diving",
    imgUrl: "/images/courses/specialty/deco.webp",
    level: "specialty",
    desc: `Are you interested in learning how to extend your dive beyond the traditional no-decompression limits?
    Do you want to understand and use more of your dive computer’s features?
    Then the SSI Decompression Diving Specialty is for you!
    To earn your SSI Decompression Diving Specialty, you will learn how to plan and conduct a limited decompression dive using dive planning software and a multi-gas computer to a maximum depth of 40 meters.`,
  },
  {
    name: "Cavern Diving",
    imgUrl: "/images/courses/specialty/cavern.webp",
    level: "specialty",
    desc: `Do you dream of diving into the crystal-clear waters of a Mexican cenote or exploring caverns in the Mediterranean?
    Become an SSI Cavern Diver and discover the thrill of leaving direct access to the surface behind!
    Learn all you need to independently plan and conduct cavern dives within the light zone to depths shallower than 40 meters.
    Start your Cavern Diving course today!`,
  },
  {
    name: "Extended Range Foundations",
    imgUrl: "/images/courses/specialty/xr.webp",
    level: "specialty",
    desc: `The SSI Extended Range Foundations program is one of the most popular advanced diving specialties under the XR umbrella.
    It functions to provide you with a workshop environment to improve your SSI diving skills and introduce you to using tec equipment.
    Dive into the exciting world of technical diving with Extended Range Foundations. Get started online today!`,
  },
  {
    name: "Marine Ecology",
    imgUrl: "/images/courses/specialty/marine.webp",
    level: "specialty",
    desc: `Are you fascinated with the oceans?
    Do you want to learn more about the incredible environments you are diving in?
    Join the SSI Marine Ecology specialty program!
    You learn about the exciting science of Marine Ecology and become an underwater naturalist in no time.
    Enhance your dives - earn the SSI Marine Ecology specialty certification now!`,
  },
  {
    name: "Dive Guide",
    imgUrl: "/images/courses/pro/guide.webp",
    level: "pro",
    desc: `Do you dream of leading certified divers underwater?
    Do you want to improve your dive skills and take the first step towards becoming a scuba instructor?
    Become an SSI Dive Guide!
    Take the first exciting step towards earning your Divemaster rating now.`,
  },
  {
    name: "Dive Master",
    imgUrl: "/images/courses/pro/dm.webp",
    level: "pro",
    desc: `Earn this recognition rating by taking your Dive Guide program and Science of Diving specialty that will equip you as a qualified Divemaster!`,
  },
  {
    name: "Assistant Instructor",
    imgUrl: "/images/courses/pro/ai.webp",
    level: "pro",
    desc: `Would you like to assist instructors with open water diver courses and collect valuable teaching experience to become a diving instructor?
    Then qualifying as an SSI Assistant Instructor is the right program for you!
    With this rating, you are halfway to becoming an Open Water Instructor.`,
  },
];
