import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  CalendarIcon,
  ChevronDownIcon,
  GlobeIcon,
  MenuIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Link } from "@remix-run/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { InstagramLogo } from "./logo/Instagram";
import { TiktokLogo } from "./logo/Tiktok";

const moreCutOff = 3; // number of items to show before "more"
const routes = [
  {
    name: "Team",
    description: "Meet the people behind Kurabesi Dive School.",
    href: "/team",
    icon: UserGroupIcon,
  },
  {
    name: "Trips 2022",
    description: "Explore the beauty of our ocean.",
    href: "/trips",
    icon: CalendarIcon,
  },
  {
    name: "Courses",
    description: "Our wide range of dive courses.",
    href: "/courses",
    icon: AcademicCapIcon,
  },
  {
    name: "Insurance",
    description:
      "Dive accident coverage for scuba diving, freediving, and rebreather diving.",
    href: "/insurance",
    icon: ShieldCheckIcon,
  },
  {
    name: "MV Kurabesi Explorer",
    description:
      "Kurabesi Explorer is member of the Kurabesi Nusantara family - a social enterprise establishing best-practice in sustainable tourism.",
    href: "/kurabesi-explorer",
    icon: GlobeIcon,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  return (
    <Popover className="sticky top-0 z-10 bg-white dark:bg-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* mobile & desktop logo */}
            <Link to="/">
              <span className="sr-only">Home</span>
              <img
                className="h-10 sm:h-12 w-auto"
                src="/images/kurabesi_wide.webp"
                alt="Kurabesi Logo"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            {/* mobile */}
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 items-center"
          >
            {/* Desktop main menu without dropdown */}
            {routes
              .filter((item, idx) => idx < moreCutOff)
              .map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {route.name}
                </Link>
              ))}

            {/* Desktop menu with dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {routes
                            .filter((item, idx) => idx >= moreCutOff)
                            .map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          {/* Desktop menu far right */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
            <KurabesiSocialLogos />
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile menu modal popover */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                {/* mobile popover logo */}
                <Link to="/">
                  <img
                    className="h-10 w-auto"
                    src="/images/kurabesi_wide.webp"
                    alt="Home"
                  />
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {routes.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 flex justify-between gap-4">
              <div className="flex gap-4">
                <KurabesiSocialLogos />
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const KurabesiSocialLogos = () => {
  return (
    <>
      <SocialLogo url="https://instagram.com/kurabesidiveschool">
        <InstagramLogo className="w-6" />
      </SocialLogo>
      <SocialLogo url="https://tiktok.com/@kurabesidiveschool">
        <TiktokLogo className="w-6" />
      </SocialLogo>
    </>
  );
};

const SocialLogo = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
