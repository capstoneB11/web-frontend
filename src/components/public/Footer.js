import React, { lazy, Suspense } from "react";
import logo from "../../assets/logo-tulisan.svg";

const Footer = () => {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href=""
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src={logo} className="h-4 sm:h-6 mt-4"></img>
        </a>

        <p class="my-6 text-gray-500 dark:text-gray-400">
          Leading the Way in Chicken Counting Ease! Chicken Counter: Elegant
          Achievement in the World of IoT and Machine Learning
        </p>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
