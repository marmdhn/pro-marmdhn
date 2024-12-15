"use client";

import { useEffect, useState } from "react";
import { IArchive, Archives } from "@/data/archive";
import { motion } from "framer-motion";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
        className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-10 section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-1/3 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-5">
            <motion.h2
              className="text-3xl font-bold"
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
          className={`w-2/3 relative flex justify-center lg:mt-0`}
          variants={imageVariants}
        >
          <Image
            className="w-auto h-auto object-cover hover:scale-105 duration-500 transition-all ease-in-out rounded-lg"
            src={`/archive/${detailData?.imageCover?.fileUrl}`}
            alt="Profile Image"
            width={100}
            height={100}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            unoptimized
          />
        </motion.div>
      </motion.div>

      <div className="mt-16">
        {detailData?.detailPhoto && (
          <div className="flex flex-col items-center">
            <motion.h2
              className="text-3xl font-bold mb-8"
              variants={containerVariants}
            >
              Detail Images
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
              {detailData?.detailPhoto?.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Zoom zoomMargin={40}>
                    <Image
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={`/archive/${item}`}
                      alt={`Image ${index + 1}`}
                      width={300}
                      height={300}
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                      unoptimized
                    />
                  </Zoom>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailArchive;
