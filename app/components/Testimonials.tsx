export const Testmonials = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-center font-bold pt-8">
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
