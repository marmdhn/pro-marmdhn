"use client";

import { useState, useEffect, ReactNode } from "react";
import Loading from "@/components/Loading";

interface ClientSideLayoutProps {
  children: ReactNode;
}

export default function ClientSideLayout({ children }: ClientSideLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading isFadingOut={isFadingOut} />;
  }

  return <>{children}</>;
}
