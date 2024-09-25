"use client";

import { useEffect, useState } from "react";
import { IArchive, Archives } from "@/data/archive";
import { motion } from "framer-motion";
import Image from "next/image";

const DetailArchive = ({ params }: { params: { archiveId: string } }) => {
  const [detailData, setDetailData] = useState<IArchive | null>(null);

  useEffect(() => {
    const archiveIdNumber = Number(params.archiveId);

    const filteredData = Archives.find(
      (archive) => archive.id === archiveIdNumber,
    );

    setDetailData(filteredData || null);
  }, [params.archiveId]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 60, delay: 0.4 },
    },
  };

  return (
    <div className="section flex flex-col justify-center items-center pt-4 pb-16">
      <motion.div
        className="w-full flex justify-center items-center gap-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-5">
            <motion.h2
              className="text-2xl font-bold"
              variants={containerVariants}
            >
              {detailData?.title}
            </motion.h2>
            <div className="hidden lg:block h-[1px] w-[200px] bg-secondary"></div>
          </div>
          <span className="text-primary font-semibold">
            {detailData?.madeAt}
          </span>
        </div>

        <motion.div
          className="w-[50%] relative flex justify-center mt-10 lg:mt-0"
          variants={imageVariants}
        >
          <Image
            className="w-full h-auto object-cover"
            src="/archive/dashboard-monitoring-server/image1.png"
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
  );
};

export default DetailArchive;
