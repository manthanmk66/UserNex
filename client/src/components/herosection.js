import React from "react";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
    console.log("signup");
  };

  return (
    <div>
      <div
        className="relative bg-gradient-to-br from-primary to-purple-800 dark:from-blue-400 dark:to-purple-800"
        id="home"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-600"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="container mx-auto pt-36">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Shaping a world with{" "}
              <span className="text-primary dark:text-white">
                reimagination.
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt nam itaque sed eius modi error totam sit illum. Voluptas
              doloribus asperiores quaerat aperiam. Quidem harum omnis beatae
              ipsum soluta!
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <button
                // onClick={handleSignup}
                className="inline-block  bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
              >
                <NavLink to="/signup"> Explore </NavLink>
              </button>
              <a
                href="#"
                className="inline-block bg-transparent text-primary font-semibold border border-primary py-3 px-8 rounded-full shadow-md transition duration-300"
              >
                Learn more
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-800 dark:text-white">
                  The lowest price
                </h6>
                <p className="mt-2 text-gray-800">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The fastest on the market
                </h6>
                <p className="mt-2 text-gray-800">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The most loved
                </h6>
                <p className="mt-2 text-gray-800">Some text here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
