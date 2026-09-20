"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const CV_URL = "/CV-Muhammad Akbar Ramadhan.pdf";

const CvPage = () => {
  const [loading, setLoading] = useState(true);

  // On a hard refresh, the browser starts fetching the server-rendered
  // iframe's src before React hydrates, so the load event can fire before
  // onLoad is attached and loading gets stuck. This ref callback runs as
  // soon as the node mounts and catches that case by checking whether it
  // has already finished loading.
  const handleIframeRef = useCallback((node: HTMLIFrameElement | null) => {
    if (node?.contentDocument?.readyState === "complete") {
      setLoading(false);
    }
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm tracking-widest uppercase text-primary mb-4">
              Resume
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Muhammad Akbar Ramadhan
            </h1>
          </div>
          <Link
            href={CV_URL}
            download
            className="inline-block leading-none pt-[13px] pb-[9px] px-4 text-sm border border-line rounded-full hover:border-primary hover:text-primary transition-colors duration-200 w-fit"
          >
            Download PDF
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative w-full aspect-[1/1.4142] rounded-lg overflow-hidden border border-line bg-surface-muted">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full border-2 border-line border-t-primary animate-spin" />
            </div>
          )}
          <iframe
            ref={handleIframeRef}
            src={CV_URL}
            title="CV"
            className={`w-full h-full transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setLoading(false)}
          />
        </div>
      </Reveal>
    </section>
  );
};

export default CvPage;
