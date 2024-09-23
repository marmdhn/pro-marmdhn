"use client";

import { Experiences } from "@/data/experiences";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Section3 = () => {
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

  const hrVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <section
      id="experience"
      className="section flex justify-center items-center relative w-full py-20"
    >
      <div className="absolute left-0 flex items-center gap-10">
        <h2 className="text-3xl inline-block font-sf-mono mb-0">
          Where I’ve <span className="text-primary">Worked</span>
        </h2>
        <motion.div
          className="h-[1px] w-[300px] bg-secondary"
          variants={hrVariants}
          initial="hidden"
          animate={controls}
        />
      </div>

      <motion.div
        className="max-w-4xl"
        ref={ref as React.LegacyRef<HTMLDivElement>}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {Experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.li key={index} variants={itemVariants}>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={`timeline-${
                    isLeft ? "start me-2" : "end ms-2"
                  } mt-1.5`}
                >
                  <div className={`text-${isLeft ? "end" : "start"}`}>
                    <time className="font-mono italic">{experience.year}</time>
                    <div className="text-xl font-bold">
                      {experience.title}{" "}
                      <span className="text-primary">
                        @{experience.corporate}
                      </span>
                    </div>
                  </div>
                  <div className="text-justify text-base text-text-secondary">
                    {experience.description}
                  </div>
                </div>
                <motion.hr className="bg-white" variants={hrVariants} />
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default Section3;
