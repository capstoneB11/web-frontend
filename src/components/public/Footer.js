import React, { lazy, Suspense } from "react";
import logo from "../../assets/logo_tulisan_putih.png";

const Footer = () => {
  return (
    <footer class="p-4 bg-orange-2 md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href=""
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src={logo} className="h-8 sm:h-10"></img>
        </a>

        <p class="my-6 text-grey-500 font-medium text-sm sm:text-xl dark:text-gray-400">
          Leading the Way in Chicken Counting Ease! Chicken Counter: Elegant
          Achievement in the World of IoT and Machine Learning
        </p>
        <span class="text-xs sm:text-sm text-grey-500 font-medium sm:text-center dark:text-gray-400 justify-end">
          © 2023{" "}
          <a href="#" class="hover:underline">
            Capstone DTETI B-11
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
