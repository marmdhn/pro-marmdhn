"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav className="bg-transparent transition-all duration-200 sticky top-0 z-50 overflow-hidden">
      <div className="h-[100px] relative flex items-center justify-between">
        <div className="col-span-1 me-auto">
          <Link href="/" className="hidden sm:block">
            <Image src="/logo.svg" alt="Logo" width={60} height={24} priority />
          </Link>
        </div>
        <div className="col-span-1">
          <div className="space-x-4 justify-center hidden sm:flex">
            <Link
              href="/about"
              className={`text-gray-900 px-3 py-1 rounded-md text-lg font-semibold ${
                activePath === "/about"
                  ? "text-primary dark:text-primary"
                  : "hover:text-primary dark:hover:text-primary dark:text-white"
              } transition-all duration-200`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-gray-900 px-3 py-1 rounded-md text-lg font-semibold ${
                activePath === "/projects"
                  ? "text-primary dark:text-primary"
                  : "hover:text-primary dark:hover:text-primary dark:text-white"
              } transition-all duration-200`}
            >
              Experience
            </Link>
            <Link
              href="/gallery"
              className={`text-gray-900 px-3 py-1 rounded-md text-lg font-semibold ${
                activePath === "/gallery"
                  ? "text-primary dark:text-primary"
                  : "hover:text-primary dark:hover:text-primary dark:text-white"
              } transition-all duration-200`}
            >
              Work
            </Link>
            <Link
              href="/gallery"
              className={`text-gray-900 px-3 py-1 rounded-md text-lg font-semibold ${
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
