"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { Works } from "@/data/works";
import PrimaryButton from "@/components/PrimaryButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Section4 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="work"
      className="section flex flex-col justify-center items-center relative w-full py-20"
    >
      <div className="flex flex-col max-w-7xl">
        <div className="flex items-center gap-0 lg:gap-10">
          <h2 className="text-2xl lg:text-3xl inline-block font-sf-mono mb-0">
            Some Things I’ve{" "}
            <span className="text-primary underline underline-offset-4 lg:no-underline">
              Built
            </span>
          </h2>
          <div className="hidden lg:block h-[1px] w-[200px] lg:w-[300px] bg-secondary"></div>
        </div>

        <motion.div
          className="flex flex-col gap-20"
          ref={ref as React.LegacyRef<HTMLDivElement>}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {Works.map((work, index) => (
            <motion.div
              key={index}
              className={`flex relative rounded-lg ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } gap-5`}
              variants={itemVariants}
            >
              <div className="w-1/2">
                <div className="relative group w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/work/${work.imgUrl}`}
                    width={100}
                    height={100}
                    unoptimized
                    alt={work.title}
                    className="rounded-lg shadow-lg w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-lg"></div>
                </div>
              </div>

              <div
                className={`w-1/2 flex flex-col my-auto gap-5 ${
                  index % 2 !== 0 ? "" : "text-end"
                }`}
              >
                <div>
                  <h3 className="text-primary font-sf-mono text-sm mb-2">
                    Featured Project
                  </h3>
                  <h2 className="text-2xl font-bold">{work.title}</h2>
                </div>

                <div className="flex flex-col gap-5">
                  <span className="text-text-secondary">
                    &quot;{work.description}&quot;
                  </span>

                  <div
                    className={`flex gap-4 text-secondary ${
                      index % 2 !== 0 ? "" : "ms-auto"
                    }`}
                  >
                    {work.techStack.map((techStack, index) => (
                      <span key={index}>{techStack}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`absolute bottom-0 ${
                  index % 2 === 0 ? "right" : "left"
                }-0 flex gap-4 text-text-secondary`}
              >
                <Link
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <FaGithub size={24} />
                </Link>
                <Link
                  href={work.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <FaExternalLinkAlt size={24} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Link href={"/archive"} className="mt-32">
        <PrimaryButton btnText={"View More"} />
      </Link>
    </section>
  );
};

export default Section4;
