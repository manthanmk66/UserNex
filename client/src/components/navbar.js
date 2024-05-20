import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full bg-transparent z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-white font-bold text-lg">UserNex</span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                {/* Heroicon name: menu */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open */}
                {/* Heroicon name: x */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden sm:block sm:mr-6">
              <div className="flex items-center">
                <NavLink
                  to="/signup"
                  className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </NavLink>

                <a
                  href="https://x.com/manthan_reddy"
                  className="text-gray-300 ml-4"
                >
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon */}
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23 4.73c-.84.37-1.75.62-2.7.73.98-.59 1.74-1.52 2.1-2.63-.92.54-1.94.93-3.03 1.14-.87-.93-2.12-1.52-3.5-1.52-2.65 0-4.78 2.15-4.78 4.78 0 .37.04.73.11 1.08-3.98-.2-7.52-2.11-9.88-5.01-.41.7-.65 1.52-.65 2.39 0 1.65.84 3.1 2.12 3.95-.78-.02-1.52-.24-2.16-.6v.06c0 2.31 1.65 4.24 3.85 4.67-.4.1-.8.16-1.22.16-.3 0-.6-.03-.9-.08.6 1.85 2.31 3.2 4.35 3.24-1.6 1.25-3.63 1.99-5.83 1.99-.38 0-.75-.02-1.12-.07 2.08 1.33 4.54 2.11 7.2 2.11 8.63 0 13.35-7.15 13.35-13.35 0-.2 0-.4-.02-.6.92-.66 1.72-1.49 2.35-2.44z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/manthanmk66"
                  className="text-gray-300 ml-4"
                >
                  <span className="sr-only">GitHub</span>
                  {/* GitHub icon */}
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.5a10.5 10.5 0 0 0-3.32 20.48c.53.1.72-.23.72-.5l-.01-1.75c-3.01.65-3.64-1.45-3.64-1.45-.49-1.24-1.19-1.57-1.19-1.57-.97-.66.07-.65.07-.65 1.07.08 1.63 1.1 1.63 1.1.95 1.6 2.49 1.14 3.1.87.1-.68.37-1.14.68-1.4-2.39-.27-4.9-1.2-4.9-5.36 0-1.19.43-2.17 1.12-2.94-.11-.27-.49-1.4.11-2.9 0 0 .93-.3 3.06 1.12.89-.24 1.84-.36 2.79-.36.95 0 1.9.12 2.79.36 2.13-1.42 3.06-1.12 3.06-1.12.6 1.5.22 2.63.11 2.9.7.77 1.12 1.75 1.12 2.94 0 4.17-2.52 5.09-4.92 5.36.39.33.73 1 .73 2.02l-.01 3c0 .27.2.6.73.5A10.5 10.5 0 0 0 12 1.5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
