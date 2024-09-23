"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link as LinkElement } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";

const StickyElement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1 }}
    >
      <div className="hidden md:block fixed bottom-[50px] left-[30px] z-50">
        <div className="flex flex-col gap-4 text-white">
          <Link href="https://www.instagram.com/marmdhn_/" target="_blank">
            <FaInstagram
              size={24}
              className="hover:text-primary hover:-translate-y-0.5 hover:cursor-pointer transition-all duration-300"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/marmdhn/" target="_blank">
            <FaLinkedin
              size={24}
              className="hover:text-primary hover:-translate-y-0.5 hover:cursor-pointer transition-all duration-300"
            />
          </Link>
          <Link href="https://github.com/marmdhn/" target="_blank">
            <FaGithub
              size={24}
              className="hover:text-primary hover:-translate-y-0.5 hover:cursor-pointer transition-all duration-300"
            />
          </Link>
        </div>
      </div>

      <LinkElement
        to="hero"
        smooth={true}
        duration={500}
        className="hidden md:block fixed bottom-[100px] -right-[30px] z-50 -rotate-90 italic font-sf-mono text-sm text-white hover:cursor-pointer hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
      >
        <span className="underline underline-offset-8">Front End</span>{" "}
        Developer
      </LinkElement>
    </motion.div>
  );
};

export default StickyElement;
