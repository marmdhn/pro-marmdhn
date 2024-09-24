"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Section5 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
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
      id="contact"
      className="section flex flex-col justify-center items-center relative w-full py-20"
    >
      <motion.div
        ref={ref as React.LegacyRef<HTMLDivElement>}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col max-w-xl items-center text-center gap-5"
      >
        <div className="flex flex-col gap-2">
          <motion.span variants={itemVariants} className="text-xl">
            What’s Next?
          </motion.span>
          <motion.span variants={itemVariants} className="text-6xl">
            Get In Touch
          </motion.span>
        </div>
        <motion.span variants={itemVariants} className="text-secondary mb-12">
          I’m{" "}
          <span className="text-primary underline underline-offset-4">
            currently actively
          </span>{" "}
          seeking{" "}
          <span className="text-primary underline underline-offset-4">
            new opportunities
          </span>
          . If you have any questions or just want to connect, please feel free
          to reach out—I’d be happy to hear from you!
        </motion.span>
        <motion.div variants={itemVariants}>
          <PrimaryButton btnText={"Say Hi :D"} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section5;
