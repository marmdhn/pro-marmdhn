"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ReactLenis root options={{ lerp: prefersReducedMotion ? 1 : 0.1 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
