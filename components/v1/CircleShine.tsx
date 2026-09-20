"use client";

import { motion } from "framer-motion";

const CircleShine = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 10 }}
      className="absolute z-10 hidden xl:block -top-48 left-[220px] w-[400px] h-[400px] bg-primary rounded-full blur-[300px] animate-slide-left-right"
    ></motion.div>
  );
};

export default CircleShine;
