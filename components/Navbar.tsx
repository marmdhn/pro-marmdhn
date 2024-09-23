"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as LinkElement } from "react-scroll";
import PrimaryButton from "@/components/PrimaryButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaBriefcase, FaEnvelope, FaLaptopCode, FaUser } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [hasShadow, setHasShadow] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const pathname = usePathname();

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

    setTimeout(() => {
      setIsFirstLoad(false);
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Navbar for md and above */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`px-[50px] transition-all duration-300 sticky top-0 z-50 overflow-hidden hidden md:block ${
          !isFirstLoad && scrollDirection === "down"
            ? "-translate-y-full"
            : "translate-y-0"
        } ${
          hasShadow ? "shadow-lg bg-[#1B1C21]/90" : "bg-transparent"
        } backdrop-blur-sm`}
      >
        <div className="h-[25px] my-[25px] relative flex items-center justify-between">
          <div className="col-span-1 me-auto">
            {pathname !== "/archive" ? (
              <LinkElement
                to="hero"
                smooth={true}
                duration={500}
                className="hidden sm:block hover:cursor-pointer"
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={75}
                  height={40}
                  priority
                />
              </LinkElement>
            ) : (
              <Link href="/" className="hidden sm:block hover:cursor-pointer">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={75}
                  height={40}
                  priority
                />
              </Link>
            )}
          </div>
          <motion.div className="col-span-1" variants={containerVariants}>
            <div className="space-x-4 justify-center items-center hidden sm:flex">
              {pathname !== "/archive" && (
                <>
                  <motion.div variants={itemVariants}>
                    <LinkElement
                      to="about"
                      smooth={true}
                      duration={500}
                      className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                    >
                      About
                    </LinkElement>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <LinkElement
                      to="experience"
                      smooth={true}
                      duration={500}
                      className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                    >
                      Experience
                    </LinkElement>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <LinkElement
                      to="work"
                      smooth={true}
                      duration={500}
                      className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                    >
                      Work
                    </LinkElement>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <LinkElement
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                    >
                      Contact
                    </LinkElement>
                  </motion.div>
                </>
              )}
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <PrimaryButton btnText="Resume" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Bottom bar for mobile screens */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 bg-[#1B1C21]/90 shadow-lg backdrop-blur-sm md:hidden z-[999] py-2 rounded-xl"
      >
        <div className="flex justify-around items-center h-[60px] px-5">
          <LinkElement
            to="about"
            smooth={true}
            duration={500}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaUser size={24} />
            <span className="text-xs mt-1">About</span>
          </LinkElement>

          <LinkElement
            to="experience"
            smooth={true}
            duration={500}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaBriefcase size={24} />
            <span className="text-xs mt-1">Experience</span>
          </LinkElement>

          <Link href="/">
            <div className="mb-2">
              <PrimaryButton btnText="" icon={<FaFileAlt size={24} />} />
            </div>
          </Link>

          <LinkElement
            to="work"
            smooth={true}
            duration={500}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaLaptopCode size={28} />
            <span className="text-xs mt-1">Work</span>
          </LinkElement>

          <LinkElement
            to="contact"
            smooth={true}
            duration={500}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaEnvelope size={24} />
            <span className="text-xs mt-1">Contact</span>
          </LinkElement>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
