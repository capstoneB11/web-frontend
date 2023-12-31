import React, { lazy, Suspense } from "react";
const LazyImage = lazy(() => import("../../utils/LazyImage"));

const StepsItem = ({ imageItem, textTitle, textBody, href }) => {
  return (
    <div className="flex flex-col sm:w-1/2 w-4/5 items-center justify-center">
      <a href={href}>
        <div className="relative">
          <img
            src={imageItem}
            alt="Image"
            className="w-auto h-32 sm:h-48 m-2 sm:mb-6 hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="relative">
          <h2 className="text-md sm:text-lg font-semibold text-black mb-4 text-center">
            {textTitle}
          </h2>
          <p className="text-black text-center mb-8 sm:mb-2 sm:text-base text-sm">
            {textBody}
          </p>
        </div>
      </a>
    </div>
  );
};

export default StepsItem;
