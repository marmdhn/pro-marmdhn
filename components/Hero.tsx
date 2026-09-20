"use client";

import { Link as ScrollLink } from "react-scroll";
import { motion, Variants } from "framer-motion";
import Squiggle from "@/components/Squiggle";

const LINE_ONE = ["Muhammad", "Akbar"];
const LINE_TWO = ["Ramadhan"];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeadlineLine = ({ words }: { words: string[] }) => (
  <span className="flex flex-wrap gap-x-[0.25em]">
    {words.map((word) => (
      <motion.span key={word} variants={wordVariants} className="inline-block">
        {word}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-adelia italic text-2xl md:text-3xl text-primary mb-4"
      >
        Software Developer
      </motion.p>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
        className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.05]"
      >
        <HeadlineLine words={LINE_ONE} />
        <HeadlineLine words={LINE_TWO} />
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="mt-8 max-w-xl"
      >
        <p className="text-lg text-neutral-600 border-l-2 border-primary pl-4">
          I build reliable backend{" "}
          <span className="relative inline-block whitespace-nowrap">
            services and APIs
            <Squiggle className="absolute left-0 top-full w-full h-2 -mt-1" />
          </span>{" "}
          for large-scale applications, and full-stack products when a
          project needs one.
        </p>
      </motion.div>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="mt-12 text-sm text-neutral-500 hover:text-primary hover:cursor-pointer transition-colors duration-200 w-fit"
      >
        Scroll down &#8595;
      </ScrollLink>
    </section>
  );
};

export default Hero;
