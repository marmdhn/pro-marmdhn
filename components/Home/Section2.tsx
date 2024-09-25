"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/skills";
import { BsTriangleFill } from "react-icons/bs";
import Image from "next/image";

const Section2 = () => {
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
      <div className="max-w-7xl text-white px-0 lg:px-16">
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {/* Text Section */}
          <div className="lg:w-2/3 flex flex-col gap-5 text-base lg:text-lg">
            <div className="w-full flex items-center gap-5 lg:gap-10 mb-10">
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
              className="flex flex-col gap-3 lg:gap-5"
              variants={item}
            >
              <motion.span variants={item}>
                Hello! My name is Muhammad Akbar Ramadhan, and I have a passion
                for creating intuitive and responsive web applications. My
                journey into web development began during my studies at ITTelkom
                Surabaya, where I honed my skills in HTML, CSS, and JavaScript
                by experimenting with various projects.
              </motion.span>
              <motion.span variants={item}>
                Fast-forward to today, I’ve had the privilege of working as a{" "}
                <span className="font-bold text-primary">
                  Front End Developer at Yayasan Pendidikan Telkom
                </span>
                , developing user interfaces for educational platforms. I’ve
                also gained valuable experience working at PT. Akhdani Reka
                Solusi as a Software Engineer, collaborating with diverse teams
                to deliver high-quality software solutions.
              </motion.span>
              <motion.span variants={item}>
                In addition to front-end development, I have a strong interest
                in UI/UX design, and I regularly use Figma to design
                user-friendly interfaces. I also have a portfolio showcasing my
                work in both web development and UI/UX design.
              </motion.span>
              <motion.span variants={item}>
                Currently, I focus on creating responsive, high-performance web
                applications using modern technologies such as React.js, Vue.js,
                and Tailwind CSS, while ensuring a seamless user experience.
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

          {/* Image Section */}
          <motion.div
            className="lg:w-[40%] flex justify-center mt-10 lg:mt-0 ms-4 xl:ms-0"
            variants={item}
          >
            <Image
              className="w-1/2 object-cover h-auto"
              src="/image.png"
              alt="Profile Image"
              width={100}
              height={100}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
