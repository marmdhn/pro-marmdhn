"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Archives } from "@/data/archive";
import Reveal from "@/components/Reveal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DetailArchive = () => {
  const params = useParams<{ archiveId: string }>();
  const detailData = useMemo(
    () => Archives.find((archive) => archive.id === params.archiveId) ?? null,
    [params.archiveId],
  );

  if (!detailData) {
    return (
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <p className="text-2xl font-bold">Project not found.</p>
        <Link
          href="/archive"
          className="mt-6 inline-block text-sm text-neutral-500 hover:text-primary transition-colors duration-200"
        >
          &#8592; Back to archive
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
      <Reveal>
        <p className="text-sm tracking-widest uppercase text-primary mb-4">
          {detailData.madeAt}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-12">
          {detailData.title}
        </h1>
      </Reveal>

      {detailData.imageCover && (
        <Reveal delay={0.1}>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-100 mb-16">
            <Image
              src={`/archive/${detailData.imageCover.fileUrl}`}
              alt={detailData.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </Reveal>
      )}

      {detailData.detailPhoto && (
        <Reveal delay={0.2}>
          <p className="text-sm tracking-widest uppercase text-primary mb-6">
            Details
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {detailData.detailPhoto.map((photo) => (
              <div
                key={photo}
                className="relative aspect-square rounded-md overflow-hidden bg-neutral-100"
              >
                <Zoom zoomMargin={40}>
                  <Image
                    src={`/archive/${photo}`}
                    alt={detailData.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </Zoom>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.3}>
        <Link
          href="/archive"
          className="mt-16 inline-block text-sm text-neutral-500 hover:text-primary transition-colors duration-200"
        >
          &#8592; Back to archive
        </Link>
      </Reveal>
    </section>
  );
};

export default DetailArchive;
