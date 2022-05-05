import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { LayeredWave } from "~/components/logo/LayeredWave";

export const meta: MetaFunction = () => {
  return {
    title: "40.4 meters — Too Deep — Kurabesi Dive School",
    description: "The page you are looking for could not be found.",
  };
};

export const loader: LoaderFunction = async () => {
  throw new Response("Page Not Found", {
    status: 404,
  });
};

export default function NotFound() {
  return <></>;
}

export function CatchBoundary() {
  return (
    <div className="h-full">
      <LayeredWave className="absolute" />
      <div className="relative h-full grid place-content-center">
        <div className="w-3/4 sm:w-1/2 mx-auto">
          <img src="images/kurabesi_wide.webp" alt="Kurabesi Dive School" />
        </div>
        <h1 className="text-3xl text-center mt-4 font-extrabold tracking-tight">
          40.4 meters — Too Deep
        </h1>
        <p className="italic text-center font-bold">
          (for Recreational Diving)
        </p>
        <Link
          to=""
          className="mt-4 mx-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-cyan-400 hover:bg-cyan-500"
        >
          Back to Surface
        </Link>
      </div>
    </div>
  );
}
