"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down"); // Scroll ke bawah
      } else {
        setScrollDirection("up"); // Scroll ke atas
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
      className={`bg-transparent backdrop-blur-2xl transition-all duration-300 sticky top-0 z-50 overflow-hidden ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="h-[25px] my-[25px] relative flex items-center justify-between">
        <div className="col-span-1 me-auto">
          <Link href="/" className="hidden sm:block">
            <Image src="/logo.svg" alt="Logo" width={75} height={40} priority />
          </Link>
        </div>
        <div className="col-span-1">
          <div className="space-x-4 justify-center hidden sm:flex">
            <Link
              href="/about"
              className={`text-gray-900 px-3 pt-1 rounded-md text-xl font-semibold ${
                activePath === "/about"
                  ? "text-primary dark:text-primary"
                  : "hover:text-primary dark:hover:text-primary dark:text-white"
              } transition-all duration-200`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-gray-900 px-3 pt-1 rounded-md text-xl font-semibold ${
                activePath === "/projects"
                  ? "text-primary dark:text-primary"
                  : "hover:text-primary dark:hover:text-primary dark:text-white"
              } transition-all duration-200`}
            >
              Experience
            </Link>
            <Link
              href="/gallery"
              className={`text-gray-900 px-3 pt-1 rounded-md text-xl font-semibold ${
                activePath === "/gallery"
                  ? "text-primary dark:text-primary"
                  : "hover:text-primary dark:hover:text-primary dark:text-white"
              } transition-all duration-200`}
            >
              Work
            </Link>
            <Link
              href="/gallery"
              className={`text-gray-900 px-3 pt-1 rounded-md text-xl font-semibold ${
                activePath === "/gallery"
                  ? "text-primary dark:text-primary"
                  : "hover:text-primary dark:hover:text-primary dark:text-white"
              } transition-all duration-200`}
            >
              Contact
            </Link>
            <Link href="/gallery">
              <PrimaryButton btnText="Resume" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
