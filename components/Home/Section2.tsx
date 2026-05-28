"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/skills";
import { BsTriangleFill } from "react-icons/bs";
import Image from "next/image";

const Section2 = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        duration: 0.75,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.5 } },
  };

  return (
    <section
      id="about"
      className="section flex justify-center items-center py-10 lg:py-20"
      ref={ref as React.LegacyRef<HTMLElement>}
    >
      <div className="max-w-7xl text-white px-0 xl:px-16">
        <motion.div
          className="flex flex-col xl:flex-row items-center"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {/* Text Section */}
          <div className="xl:w-2/3 flex flex-col gap-5 text-base lg:text-lg">
            <div className="w-full flex items-center gap-5 lg:gap-10">
              <motion.h2
                className="text-2xl lg:text-3xl font-sf-mono mb-0"
                variants={item}
              >
                About{" "}
                <span className="text-primary underline underline-offset-4 lg:no-underline">
                  Me
                </span>
              </motion.h2>
              <motion.div
                className="hidden lg:block h-[1px] w-full lg:w-1/3 bg-secondary"
                variants={item}
              ></motion.div>
            </div>

            <motion.div
              className="flex flex-col gap-3 lg:gap-5 text-justify"
              variants={item}
            >
              <motion.span variants={item}>
                Hello! I’m Muhammad Akbar Ramadhan, a Software Developer
                passionate about building scalable and user-focused digital
                products across web, mobile, and enterprise systems.
              </motion.span>

              <motion.span variants={item}>
                Currently, I work as a{" "}
                <span className="font-bold text-primary">
                  Software Developer at Taiwan Mobile
                </span>
                , where I contribute to enterprise application modernization
                using React.js, Spring Boot, and DB2. My work involves
                understanding legacy systems, developing modern solutions,
                integrating APIs, and improving application reliability within
                Agile development environments.
              </motion.span>

              <motion.span variants={item}>
                Previously, I worked as a{" "}
                <span className="font-bold text-primary">
                  Front-End and Mobile Developer at Yayasan Pendidikan Telkom
                </span>
                , developing responsive web and mobile applications for Telkom
                Schools using technologies such as Flutter, Vue.js, and Nuxt.js.
                I focused on building maintainable architectures, optimizing
                performance, and delivering consistent user experiences across
                platforms.
              </motion.span>

              <motion.span variants={item}>
                I also gained experience as a{" "}
                <span className="font-bold text-primary">
                  Software Engineer at PT. Akhdani Reka Solusi
                </span>
                , collaborating with cross-functional teams to deliver reliable
                and efficient software solutions aligned with business and
                client needs.
              </motion.span>

              <motion.span variants={item}>
                I enjoy building modern applications using technologies such as
                React.js, Spring Boot, Flutter, and Tailwind CSS while
                continuously learning new tools and approaches to create
                scalable and impactful digital solutions.
              </motion.span>
            </motion.div>

            <motion.div
              className="flex gap-5 flex-wrap"
              initial="hidden"
              animate={controls}
              variants={container}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} className="flex gap-1" variants={item}>
                  <BsTriangleFill className="rotate-90 text-primary" />
                  <span className="italic">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={item}
            className="ms-0 xl:ms-8 relative w-full md:w-1/2 xl:w-1/3 aspect-[241/374]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="relative w-full h-full perspective">
              <div
                className={`relative w-full h-full transition-transform duration-700 ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <Image
                    src="/image-front.png"
                    alt="Front Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                <div
                  className="absolute w-full h-full rotate-y-180 backface-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Image
                    src="/image-back.png"
                    alt="Back Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
