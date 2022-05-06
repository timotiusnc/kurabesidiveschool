import { useEffect } from "react";

export const Testmonials = () => {
  // This hack is inspired from https://stackoverflow.com/a/50098275/1461624
  // It's for TripAdvisor widgets:
  // 1. Open page containing widget, it will show up after a while
  // 2. Navigate to other page, then back to previous page that contains widget
  // 3. Expectation: widget still show up; Reality: widget is gone
  useEffect(() => {
    Object.keys(window).forEach((key) => {
      if (
        key.match(/^injectcdswritereviewnew[0-9]+$/) ||
        key.match(/^injectselfserveprop[0-9]+$/) ||
        key.match(/^injectexcellent[0-9]+$/)
      ) {
        // @ts-ignore
        window[key]();
      }
    });
  }, []);

  return (
    <div className="pt-8">
      <h2 className="text-4xl md:text-5xl text-center font-bold">
        What They Say
      </h2>
      <div className="flex flex-col sm:flex-row p-8 gap-4 justify-center">
        <div className="flex flex-col items-end gap-4">
          {testimonials
            .filter((_, idx) => idx % 2 === 0)
            .map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
        </div>
        <div className="flex flex-col items-start gap-4">
          {testimonials
            .filter((_, idx) => idx % 2 === 1)
            .map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
        </div>
      </div>

      <TripAdvisorWidgets />
    </div>
  );
};

const Testimonial = ({
  testimonial,
}: {
  testimonial: typeof testimonials[0];
}) => {
  return (
    <div className="max-w-lg p-8 rounded-xl bg-gray-100">
      <p className="italic font-semibold">{testimonial.content}</p>

      <div className="flex gap-4 mt-4 items-center">
        <img
          src={testimonial.imgUrl}
          className="rounded-full"
          width="64"
          height="64"
          alt={testimonial.name}
        />
        <div className="">
          <h3 className="text-lg">{testimonial.name}</h3>
          <p className="text-indigo-600 italic">{testimonial.activity}</p>
        </div>
      </div>
    </div>
  );
};

const TripAdvisorWidgets = () => {
  return (
    <>
      <div
        id="TA_selfserveprop107"
        className="TA_selfserveprop flex justify-center px-4"
      >
        <ul id="TLoF3W9nQd" className="TA_links fD6oh1YOfz hidden">
          <li id="1zObYWuul8lt" className="4A0oNA">
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Attraction_Review-g294229-d19657904-Reviews-Kurabesi_Dive_School-Jakarta_Java.html"
              rel="noreferrer"
            >
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center pt-4 px-4 gap-4">
        <div id="TA_excellent499" className="TA_excellent">
          <ul id="K1DojhclkL" className="TA_links q12YDqJw hidden">
            <li id="q3tRbKqL" className="CoChfxTiOmpm">
              <a
                target="_blank"
                href="https://www.tripadvisor.com/Attraction_Review-g294229-d19657904-Reviews-Kurabesi_Dive_School-Jakarta_Java.html"
                rel="noreferrer"
              >
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt="TripAdvisor"
                  className="widEXCIMG"
                  id="CDSWIDEXCLOGO"
                />
              </a>
            </li>
          </ul>
        </div>
        <div id="TA_cdswritereviewnew915" className="TA_cdswritereviewnew">
          <ul id="Eztz7mkUJtnt" className="TA_links 40wjT0sjx hidden">
            <li id="HjdjTbzdB" className="FlhcXZIB6A">
              <a
                target="_blank"
                href="https://www.tripadvisor.com/"
                rel="noreferrer"
              >
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt="TripAdvisor"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const testimonials = [
  {
    name: "Saidah",
    activity: "Komodo Trip",
    imgUrl: "/images/testimonials/saidah.jpeg",
    content: `I enjoy every single day with all of you! Good job!`,
  },
  {
    name: "Alex",
    activity: "Komodo Trip",
    imgUrl: "/images/testimonials/alex.jpeg",
    content: `Generally, the trip is worthwhile from the planning and execution. Had a good time.`,
  },
  {
    name: "Frieska",
    activity: "Alor Trip",
    imgUrl: "/images/testimonials/frieska.jpeg",
    content: `Overall I am very much satisfied with the trip. Definitely coming back to Alor soon and trip with Kurabesi as well.`,
  },
  {
    name: "Akita",
    activity: "OWD Course",
    imgUrl: "/images/testimonials/akita.jpeg",
    content: `Jujur, yang bikin nyaman ambil license & dive trip sama Kurabesi Dive School itu karena safety, comfort & divemasters yang knowledgable banget. Dari A-Z gue bawel tanya ini itu juga dijelaskan tanpa kenal waktu dan lelah.`,
  },
  {
    name: "Irene",
    activity: "OWD Course",
    imgUrl: "/images/testimonials/irene.jpeg",
    content: `Instructors & divemasters sabar banget, penjelasan mudah dimengerti, diajarin sampe bisa, & yang paling penting bikin aman & nyaman. We also learned about to appreciate something and do evaluation on every dive.`,
  },
  {
    name: "Virene",
    activity: "OWD Course",
    imgUrl: "/images/testimonials/virene.jpeg",
    content: `Instructor & DM-nya sangat bertanggung jawab, rapi, terstruktur & well prepared. Mereka mengajar dengan knowledge yang sangat baik. Mereka pantang menyerah dan selalu meng-encourage. Dan masukan mereka selalu jujur!`,
  },
];
