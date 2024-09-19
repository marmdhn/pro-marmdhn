"use client";

import { Link } from "react-scroll";

const Section1 = () => {
  return (
    <section
      id="hero"
      className="section flex justify-center items-center relative"
    >
      <div className="text-center mb-8">
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-primary to-transparent animate-shine bg-[length:200%_200%]">
          MARMDHN
        </div>

        <div className="font-adelia text-4xl text-secondary">
          Muhammad Akbar Ramadhan
        </div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-12 text-center hover:cursor-pointer hover:scale-110 transition-transform duration-300 will-change-transform"
      >
        <span className="text-sm text-primary italic font-sf-mono">
          Scroll Me
        </span>
        <div className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto text-primary motion-safe:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </Link>
    </section>
  );
};

export default Section1;