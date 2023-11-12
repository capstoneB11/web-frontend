import React, { lazy, Suspense } from "react";
import WelcomeImage from "../../assets/welcome-image.webp";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
const LazyImage = lazy(() => import("../../utils/LazyImage"));

const PublicBanner = ({ topSectionHeight }) => {
  return (
    <div
      style={{ height: topSectionHeight }}
      className="flex flex-col items-center justify-center bg-cover bg-center relative transition-height duration-500"
    >
      <Suspense fallback={<Spinner />}>
        <LazyImage
          src={WelcomeImage}
          alt="Welcome"
          className="w-full h-full object-cover object-center"
        />
      </Suspense>
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark overlay */}
      <h1 className="mb-20 mx-6 sm:mx-16 text-center text-3xl sm:text-5xl font-bold text-white drop-shadow-2xl absolute hover:translate-y-4 transition-transform duration-300">
        Welcome to Chicken Counter
      </h1>
      <button
        type="button"
        className="drop-shadow-2xl bg-gradient-to-b from-gradient-1 to-gradient-2 text-white hover:scale-110 scale-75 sm:scale-100 transition-transform duration-300 absolute mt-40 text-center text-xl font-medium font-outline px-8 py-4 rounded-2xl"
      >
        <Link to="/trial">See the magic with AI</Link>
      </button>
    </div>
  );
};

export default PublicBanner;
