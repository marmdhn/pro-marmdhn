"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";

const StickyElement = () => {
  return (
    <>
      <div className="fixed bottom-[50px] z-50">
        <div className="flex flex-col gap-4 text-white">
          <FaInstagram
            size={24}
            className="hover:text-primary hover:-translate-y-0.5 hover:cursor-pointer transition-all duration-300"
          />
          <FaLinkedin
            size={24}
            className="hover:text-primary hover:-translate-y-0.5 hover:cursor-pointer transition-all duration-300"
          />
          <FaGithub
            size={24}
            className="hover:text-primary hover:-translate-y-0.5 hover:cursor-pointer transition-all duration-300"
          />
        </div>
      </div>

      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="fixed bottom-[100px] right-0 z-50 -rotate-90 italic font-sf-mono text-sm text-white hover:cursor-pointer hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
      >
        <span className="underline underline-offset-8">Front End</span>{" "}
        Developer
      </Link>
    </>
  );
};

export default StickyElement;
