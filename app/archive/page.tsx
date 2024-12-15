"use client";

import Link from "next/link";
import { FaDownload, FaGithub, FaRegEye } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import StickyElement from "@/components/Home/StickyElement";
import { Archives } from "@/data/archive";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ArchivePage = () => {
  return (
    <div className="min-h-screen px-8 xl:px-0 mx-auto h-full lg:mb-0 mb-16">
      <StickyElement />
      <motion.section
        className="flex flex-col justify-center items-center relative w-full pt-[100px]"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full max-w-7xl">
          <motion.div
            className="flex flex-col items-start gap-2 mb-20"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="text-5xl lg:text-7xl font-bold"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Archive
            </motion.span>
            <motion.span
              className="font-sf-mono text-primary"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              A list of things I’ve worked on
            </motion.span>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <table className="w-full table">
              <thead>
                <tr className="text-xl border-none">
                  <th>Year</th>
                  <th>Title</th>
                  <th className="hidden lg:table-cell">Made at</th>
                  <th className="hidden lg:table-cell">Build With</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {Archives.map((archive, index) => (
                  <motion.tr
                    key={index}
                    className="text-lg hover:bg-[#262930FF] transition-colors duration-300 border-none"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                  >
                    <td className="text-primary font-sf-mono">
                      {archive.year}
                    </td>
                    <td className="font-sf-mono font-bold">{archive.title}</td>
                    <td className="hidden lg:table-cell text-secondary font-semibold pt-4">
                      {archive.madeAt}
                    </td>
                    <td className=" hidden lg:table-cell text-lg text-secondary font-semibold pt-4">
                      {archive.buildWith.join(", ")}
                    </td>
                    <td>
                      <div className="flex gap-4 text-secondary">
                        {archive.link.webUrl && (
                          <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:scale-110 transition-all duration-300"
                          >
                            <FaExternalLinkAlt size={24} />
                          </Link>
                        )}
                        {archive.link.gitHubUrl && (
                          <Link
                            href={archive.link.gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:scale-110 transition-all duration-300"
                          >
                            <FaGithub size={24} />
                          </Link>
                        )}
                        {archive.detail && (
                          <Link
                            href={`/archive/${archive.id}`}
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:scale-110 transition-all duration-300"
                          >
                            <FaRegEye size={24} />
                          </Link>
                        )}
                        {archive.link.downloadUrl && (
                          <Link
                            href={`${archive.link.downloadUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:scale-110 transition-all duration-300"
                          >
                            <FaDownload size={24} />
                          </Link>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ArchivePage;
