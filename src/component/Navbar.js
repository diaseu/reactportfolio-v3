import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import "../css/output.css";
import { useScrollPosition } from "../hooks/useScrollPosition";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  const scrollPosition = useScrollPosition();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "About", link: "/about" },
    { id: 2, text: "Portfolio", link: "/portfolio" },
    { id: 3, text: "Contact", link: "/contact" },
  ];

  return (
    <nav
      className={classNames(
        scrollPosition > 10
          ? "shadow bg-whitetext2 sticky top-0 z-40"
          : "shadow-none text-whitetext",
        "transition-shadow py-2 bg-transparent"
      )}
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          {/* <!-- Mobile menu button--> */}
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              {/* <!--
                Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block"
              --> */}
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
                Icon when menu is open.

                Menu open: "block", Menu closed: "hidden"
              --> */}
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="flex flex-1 items-baseline content-baseline sm:items-stretch sm:justify-start">
            {/* <!-- Logo --> */}
            <div class="flex flex-shrink-0 items-center justify-center content-center">
              <a
                class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                href="#"
              >
                <span class="text-3xl font-bold text-primary">diaseu</span>
              </a>
            </div>
            {/* <!-- Left navigation links --> */}
            <div class="hidden sm:ml-6 sm:block">
              <ul class="list-style-none me-auto flex flex-col ps-0 lg:flex-row">
                {navItems.map((item) => (
                  <li key={item.id} className="mb-4 lg:mb-0 lg:pe-2 uppercase">
                    <a
                      class="tracking-wider text-sm uppercase text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                      href={item.link}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div class="relative flex items-center hidden sm:ml-6 sm:block">
            {/* <!-- dropdown container --> */}
            <div
              class="relative"
              data-twe-dropdown-ref
              data-twe-dropdown-alignment="end"
            >
              {/* <!-- dropdown trigger --> */}
              <a
                class="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="../media/resume-2024.pdf"
                role="button"
                aria-expanded="false"
              >
                {/* <!-- User avatar --> */}
                <ArrowRightIcon />
                <span class="border-solid border-2 p-2 border-black rounded-lg uppercase text-sm">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
