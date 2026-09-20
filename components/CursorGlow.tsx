"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      glowRef.current?.style.setProperty("--x", `${e.clientX}px`);
      glowRef.current?.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 mix-blend-screen"
      style={{
        background:
          "radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgb(39 187 160 / 0.12), transparent 70%)",
      }}
    />
  );
};

export default CursorGlow;
