"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as LinkElement, scroller } from "react-scroll";
import PrimaryButton from "@/components/PrimaryButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaBriefcase, FaEnvelope, FaLaptopCode, FaUser } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const pathname = usePathname();
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

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

  useEffect(() => {
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget, {
        duration: 750,
        smooth: true,
      });
    }
  }, [pathname, scrollTarget]);

  const handleNavigation = (to: string) => {
    if (pathname === "/archive") {
      router.push("/");
      setScrollTarget(to);
    } else {
      scroller.scrollTo(to, {
        duration: 750,
        smooth: true,
      });
    }
  };

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
        className={`px-[50px] transition-all duration-400 sticky top-0 z-50 overflow-hidden hidden md:block ${
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
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => {
                    handleNavigation("about");
                  }}
                  className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                >
                  About
                </button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => {
                    handleNavigation("experience");
                  }}
                  className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                >
                  Experience
                </button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => {
                    handleNavigation("work");
                  }}
                  className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                >
                  Work
                </button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => {
                    handleNavigation("contact");
                  }}
                  className="font-sf-mono text-white px-3 rounded-md text-sm font-semibold hover:text-primary transition-all duration-200 hover:cursor-pointer"
                >
                  Contact
                </button>
              </motion.div>
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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LinkElement
          to="hero"
          smooth={true}
          duration={500}
          className="md:hidden hover:cursor-pointer flex justify-center pt-7"
        >
          <Image src="/logo.svg" alt="Logo" width={75} height={40} priority />
        </LinkElement>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 bg-[#1B1C21]/90 shadow-lg shadow-primary/10 backdrop-blur-sm md:hidden z-[999] py-2 rounded-xl"
      >
        <div className="flex justify-around items-center h-[60px]">
          <button
            onClick={() => {
              handleNavigation("about");
            }}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaUser size={20} />
          </button>

          <button
            onClick={() => {
              handleNavigation("experience");
            }}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaBriefcase size={20} />
          </button>

          <Link href="/">
            <PrimaryButton btnText="" icon={<FaFileAlt size={20} />} />
          </Link>

          <button
            onClick={() => {
              handleNavigation("work");
            }}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaLaptopCode size={24} />
          </button>

          <button
            onClick={() => {
              handleNavigation("contact");
            }}
            className="w-14 flex flex-col items-center text-white hover:text-primary hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 will-change-transform"
          >
            <FaEnvelope size={20} />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
