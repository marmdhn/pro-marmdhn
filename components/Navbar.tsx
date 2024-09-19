"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/Link";
import { Link as LinkElement } from "react-scroll";
import PrimaryButton from "@/components/PrimaryButton";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-[50px] transition-all duration-300 sticky top-0 z-50 overflow-hidden ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${
        hasShadow ? "shadow-lg bg-[#1B1C21]/90" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="h-[25px] my-[25px] relative flex items-center justify-between">
        <div className="col-span-1 me-auto">
          <LinkElement
            to="hero"
            smooth={true}
            duration={500}
            className="hidden sm:block hover:cursor-pointer"
          >
            <Image src="/logo.svg" alt="Logo" width={75} height={40} priority />
          </LinkElement>
        </div>
        <div className="col-span-1">
          <div className="space-x-4 justify-center items-center hidden sm:flex">
            <LinkElement
              to="about"
              smooth={true}
              duration={500}
              className={`font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer`}
            >
              About
            </LinkElement>
            <LinkElement
              to="experience"
              smooth={true}
              duration={500}
              className={`font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer`}
            >
              Experience
            </LinkElement>
            <LinkElement
              to="work"
              smooth={true}
              duration={500}
              className={`font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer`}
            >
              Work
            </LinkElement>
            <LinkElement
              to="contact"
              smooth={true}
              duration={500}
              className={`font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer`}
            >
              Contact
            </LinkElement>
            <Link href="/">
              <PrimaryButton btnText="Resume" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
