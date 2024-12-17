"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function ElasticEffect() {
  const y = useMotionValue(0);
  const x = useMotionValue(0);

  const ropePath = useTransform(y, (latestY) => {
    const controlPointY = Math.max(latestY / 2, 20);
    return `M 50,0 Q 50,${controlPointY} ${50 + x.get()},${latestY}`;
  });

  useEffect(() => {
    animate(y, 150, {
      type: "spring",
      stiffness: 150,
      damping: 12,
    });
  }, []);

  const handleDragEnd = () => {
    animate(y, 150, {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 1,
    });
    animate(x, 0, {
      type: "spring",
      stiffness: 300,
      damping: 20,
    });
  };

  return (
    <div className="relative flex items-start justify-center h-screen">
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2"
        width="100vw"
        height="100vh"
        viewBox="0 0 100 1000"
        preserveAspectRatio="xMidYMin meet"
      >
        <motion.path
          d={ropePath}
          stroke="gray"
          strokeWidth="4"
          fill="transparent"
        />
      </svg>

      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 150, opacity: 1 }}
        drag
        dragConstraints={{ top: -100, bottom: 200, left: -500, right: 500 }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        style={{ x, y }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8,
        }}
        className="relative w-[100%] h-[60%] rounded-lg shadow-lg overflow-hidden"
      >
        <Image
          src="/image.png"
          alt="ID Card"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
