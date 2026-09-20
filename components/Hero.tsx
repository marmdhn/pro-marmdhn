"use client";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

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
        className="text-sm tracking-widest uppercase text-primary mb-6"
      >
        Software Developer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.05]"
      >
        Muhammad Akbar
        <br />
        Ramadhan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-8 max-w-xl text-lg text-neutral-600 border-l-2 border-primary pl-4"
      >
        I build reliable backend services and APIs for large-scale
        applications, and full-stack products when a project needs one.
      </motion.p>
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
