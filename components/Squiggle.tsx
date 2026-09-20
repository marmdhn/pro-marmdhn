"use client";

import { motion } from "framer-motion";

const Squiggle = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <motion.path
        d="M2 8 Q 25 0, 50 7 T 100 6 T 150 8 T 198 5"
        stroke="#27BBA0"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
    </svg>
  );
};

export default Squiggle;
