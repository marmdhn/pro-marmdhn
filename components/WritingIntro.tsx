"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import glyphs from "@/data/marmdhnGlyphs.json";

type Stage = "writing" | "curtain" | "done";

const LETTER_DURATION = 1;
const LETTER_OVERLAP = 0.25; // fraction of a letter still drawing when the next one starts
const LETTER_STAGGER = LETTER_DURATION * (1 - LETTER_OVERLAP);
const PANEL_COUNT = 10;
const PANEL_DURATION = 0.75;
const PANEL_STAGGER = 0.06;

// Timeouts derived from the animation constants so the overlay never unmounts mid-animation.
const WRITE_MS =
  (LETTER_STAGGER * (glyphs.letters.length - 1) + LETTER_DURATION) * 1000 + 300;
const CURTAIN_MS =
  (PANEL_STAGGER * (PANEL_COUNT - 1) + PANEL_DURATION) * 1000 + 200;

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

  const isCurtain = stage === "curtain";

  return (
    <>
      {stage !== "writing" && children}
      {stage !== "done" && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          {/* Panels sit here from the start, like v1's, so nothing pops in abruptly */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: PANEL_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                className="h-full flex-1 bg-primary border-r border-black/10 last:border-r-0"
                initial={{ y: 0 }}
                animate={{ y: isCurtain ? "-100%" : "0%" }}
                transition={{
                  duration: PANEL_DURATION,
                  delay: i * PANEL_STAGGER,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </div>

          <motion.svg
            viewBox={glyphs.viewBox}
            className="absolute inset-0 m-auto w-[80vw] max-w-xl h-auto"
            animate={{
              opacity: isCurtain ? 0 : 1,
              scale: isCurtain ? 0.85 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <g transform="scale(1,-1)">
              {glyphs.letters.map((letter, i) => {
                const maskId = `intro-mask-${i}`;
                return (
                  <g key={i} transform={`translate(${letter.x}, 0)`}>
                    {/* Thick stroke traced as a pen, used as a mask so the fill draws in solid */}
                    <mask id={maskId}>
                      <motion.path
                        d={letter.d}
                        fill="none"
                        stroke="white"
                        strokeWidth={glyphs.maskStrokeWidth}
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: LETTER_DURATION,
                          delay: i * LETTER_STAGGER,
                          ease: "easeInOut",
                        }}
                      />
                    </mask>
                    <path
                      d={letter.d}
                      className="fill-white"
                      mask={`url(#${maskId})`}
                    />
                  </g>
                );
              })}
            </g>
          </motion.svg>
        </div>
      )}
    </>
  );
};

export default WritingIntro;
