"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NAV_ITEMS = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Work", to: "work" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="font-calibre text-sm tracking-widest uppercase hover:cursor-pointer hover:text-primary transition-colors duration-200"
        >
          Marmdhn
        </ScrollLink>

        <div className="flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary"
              className="hidden sm:block text-sm text-neutral-600 hover:text-primary hover:cursor-pointer transition-colors duration-200"
            >
              {item.label}
            </ScrollLink>
          ))}
          <Link
            href="/v1/cv"
            className="text-sm border border-neutral-300 rounded-full px-4 py-1.5 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
