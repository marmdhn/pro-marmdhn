"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useHasMounted } from "@/lib/useHasMounted";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

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

  // screen brightens (needed on dark bg), multiply darkens (needed on light bg) - either is a no-op on the wrong theme
  const isDark = hasMounted && resolvedTheme === "dark";
  const blendClass = isDark ? "mix-blend-screen" : "mix-blend-multiply";
  const alpha = isDark ? 0.12 : 0.18;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-10 ${blendClass}`}
      style={{
        background: `radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgb(39 187 160 / ${alpha}), transparent 70%)`,
      }}
    />
  );
};

export default CursorGlow;
