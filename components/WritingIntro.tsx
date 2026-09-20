"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import glyphs from "@/data/marmdhnGlyphs.json";

type Stage = "writing" | "curtain" | "done";

const WRITE_MS = 1500;
const CURTAIN_MS = 650;
const PANEL_COUNT = 8;

const WritingIntro = ({ children }: { children: ReactNode }) => {
  const [stage, setStage] = useState<Stage>("writing");

  useEffect(() => {
    const toCurtain = setTimeout(() => setStage("curtain"), WRITE_MS);
    const toDone = setTimeout(() => setStage("done"), WRITE_MS + CURTAIN_MS);
    return () => {
      clearTimeout(toCurtain);
      clearTimeout(toDone);
    };
  }, []);

  return (
    <>
      {stage !== "writing" && children}
      {stage !== "done" && (
        <div className="fixed inset-0 z-[100] bg-surface overflow-hidden">
          <svg
            viewBox={glyphs.viewBox}
            className="absolute inset-0 m-auto w-[80vw] max-w-xl h-auto"
          >
            <g transform="scale(1,-1)">
              {glyphs.letters.map((letter, i) => (
                <motion.path
                  key={i}
                  d={letter.d}
                  transform={`translate(${letter.x}, 0)`}
                  className="stroke-ink"
                  fill="none"
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </g>
          </svg>

          {stage === "curtain" && (
            <div className="absolute inset-0 flex">
              {Array.from({ length: PANEL_COUNT }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-full flex-1 bg-surface border-r border-line last:border-r-0"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    duration: CURTAIN_MS / 1000,
                    delay: i * 0.04,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WritingIntro;
