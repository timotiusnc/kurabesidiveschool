/* This example requires Tailwind CSS v2.0+ */
import {
  ClipboardCheckIcon,
  EmojiHappyIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Quality Courses",
    description:
      "We ensure all training standards are met while still being practical.",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Friendly Learning Environment",
    description:
      "No matter what your background is, we strive to accommodate your needs. We're always ready to help.",
    icon: UserGroupIcon,
  },
  {
    name: "Safety First",
    description:
      "Safety is our priority. We put huge attention to detail so you will be able to dive in a safe manner.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Fun!",
    description:
      "While teaching courses is our major focus, we also explore other destinations in Indonesia to appreciate the beauty of our ocean.",
    icon: EmojiHappyIcon,
  },
];

export function Features() {
  return (
    <div>
      <div className="max-w-xs sm:max-w-sm lg:max-w-md px-4 mb-8 lg:mx-auto">
        <img src="images/kurabesi_wide.webp" alt="Kurabesi Dive School Logo" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#06DBD0] font-semibold tracking-wide uppercase hidden">
            Kurabesi Dive School
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl mx-auto">
            Learning made easy and fun!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-black lg:mx-auto">
            Our mission at Kurabesi Dive School is to provide quality courses
            and a friendly learning environment
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-black">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-black">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
