"use client";

import { useState, useEffect, ReactNode } from "react";
import Loading from "@/components/Loading";

interface ClientSideLayoutProps {
  children: ReactNode;
}

type Stage = "logo" | "revealing" | "done";

export default function ClientSideLayout({ children }: ClientSideLayoutProps) {
  const [stage, setStage] = useState<Stage>("logo");

  useEffect(() => {
    const revealTimer = setTimeout(() => setStage("revealing"), 1500);
    const doneTimer = setTimeout(() => setStage("done"), 1500 + 1600);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      {stage !== "logo" && children}
      {stage !== "done" && (
        <Loading phase={stage === "logo" ? "logo" : "reveal"} />
      )}
    </>
  );
}
