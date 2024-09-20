"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";

const StickyElement = () => {
  return (
    <>
      <div className="fixed bottom-[50px] z-50">
        <div className="flex flex-col gap-4">
          <FaInstagram
            size={20}
            className="text-secondary hover:text-white hover:scale-105 hover:cursor-pointer transition-all duration-300"
          />
          <FaLinkedin
            size={20}
            className="text-secondary hover:text-white hover:scale-105 hover:cursor-pointer transition-all duration-300"
          />
          <FaGithub
            size={20}
            className="text-secondary hover:text-white hover:scale-105 hover:cursor-pointer transition-all duration-300"
          />
        </div>
      </div>

      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="fixed bottom-[100px] right-0 z-50 -rotate-90 italic font-sf-mono text-sm text-secondary hover:cursor-pointer hover:text-white hover:scale-110 transition-all duration-300"
      >
        <span className="underline underline-offset-8">Front End</span>{" "}
        Developer
      </Link>
    </>
  );
};

export default StickyElement;
