import React, { lazy, Suspense } from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <svg
            class="mr-2 h-8"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
              fill="url(#paint0_linear_11430_22515)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11430_22515"
                x1="20.8102"
                y1="23.9532"
                x2="23.9577"
                y2="12.9901"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1724C9" />
                <stop offset="1" stop-color="#1C64F2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_11430_22515"
                x1="28.0593"
                y1="10.5837"
                x2="19.7797"
                y2="2.33321"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1C64F2" />
                <stop offset="1" stop-color="#0092FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_11430_22515"
                x1="16.9145"
                y1="5.2045"
                x2="4.42432"
                y2="5.99375"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0092FF" />
                <stop offset="1" stop-color="#45B2FF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_11430_22515"
                x1="16.0698"
                y1="28.846"
                x2="27.2866"
                y2="25.8192"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1C64F2" />
                <stop offset="1" stop-color="#0092FF" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_11430_22515"
                x1="8.01881"
                y1="15.8661"
                x2="15.9825"
                y2="24.1181"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1724C9" />
                <stop offset="1" stop-color="#1C64F2" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_11430_22515"
                x1="26.2004"
                y1="21.8189"
                x2="31.7569"
                y2="10.6178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0092FF" />
                <stop offset="1" stop-color="#45B2FF" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_11430_22515"
                x1="6.11387"
                y1="9.31427"
                x2="3.14054"
                y2="20.4898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1C64F2" />
                <stop offset="1" stop-color="#0092FF" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_11430_22515"
                x1="21.2932"
                y1="8.78271"
                x2="10.4278"
                y2="11.488"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1724C9" />
                <stop offset="1" stop-color="#1C64F2" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_11430_22515"
                x1="7.15667"
                y1="21.5399"
                x2="14.0824"
                y2="31.9579"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0092FF" />
                <stop offset="1" stop-color="#45B2FF" />
              </linearGradient>
            </defs>
          </svg>
          Flowbite
        </a>
        <p class="my-6 text-gray-500 dark:text-gray-400">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2022{" "}
          <a href="#" class="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
