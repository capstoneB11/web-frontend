import React, { useState } from 'react';

const StickyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="flex w-full items-center justify-between px-3 py-4">
        <div className="text-xl px-4 font-semibold">Your Logo</div>
        <div className="hidden px-4 lg:flex space-x-4">
          <a 
            href="#about"
            className="text-black hover:text-orange-600 focus:text-orange-500"
          >About Us</a>
          <a 
            href="login"
            className="text-black hover:text-orange-600 focus:text-orange-500"
            >Login</a>
        </div>
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className="text-xl text-black hover:text-orange-600"
            >
              ✕ {/* Close icon (e.g., 'X') when the menu is open */}
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-xl text-black hover:text-orange-600"
            >
              ☰ {/* Hamburger icon (e.g., '☰') when the menu is closed */}
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4">
          <a href="#about" className="block text-black hover:text-orange-600 focus:text-orange-500 py-2">About Us</a>
          <a href="login" className="block text-black hover:text-orange-600 focus:text-orange-500 py-2">Login</a>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;

// // Initialization for ES Users
// import {
//   Collapse,
//   Ripple,
//   initTE,
// } from "tw-elements";

// initTE({ Collapse, Ripple });

// const StickyHeader = () => {
//   return (
//     <header className="sticky top-0 z-10">
//     {/* `  <!-- Navigation bar --> */}
//       <nav
//         class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
//         data-te-navbar-ref>
//         <div class="flex w-full flex-wrap items-center justify-between px-3">
//           <div class="flex items-center">
//             {/* <!-- Hamburger menu button --> */}
//             <button
//               class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
//               type="button"
//               data-te-collapse-init
//               data-te-target="#navbarSupportedContentX"
//               aria-controls="navbarSupportedContentX"
//               aria-expanded="false"
//               aria-label="Toggle navigation">
//               {/* <!-- Hamburger menu icon --> */}
//               <span class="[&>svg]:w-5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   class="h-7 w-7">
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           {/* <!-- Navigation links --> */}
//           <div
//             class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
//             id="navbarSupportedContentX"
//             data-te-collapse-item>
//             <ul
//               class="mr-auto flex flex-col lg:flex-row"
//               data-te-navbar-nav-ref>
//               <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
//                 <a
//                   class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
//                   href="#!"
//                   data-te-nav-link-ref
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   >Home</a
//                 >
//               </li>
//               <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
//                 <a
//                   class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
//                   href="#!"
//                   data-te-nav-link-ref
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   >Features</a
//                 >
//               </li>
//               <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
//                 <a
//                   class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
//                   href="#!"
//                   data-te-nav-link-ref
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   >Pricing</a
//                 >
//               </li>
//               <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
//                 <a
//                   class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
//                   href="#!"
//                   data-te-nav-link-ref
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   >About</a
//                 >
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>`
//     </header>
//   );
// };
// export default StickyHeader;