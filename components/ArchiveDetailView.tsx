"use client";

import Link from "next/link";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Reveal from "@/components/Reveal";
import { IArchive } from "@/data/archive";
import { Dimensions } from "@/lib/getPngDimensions";

interface ArchiveDetailViewProps {
  detailData: IArchive;
  coverSize: Dimensions | null;
  photoSizes: Record<string, Dimensions | null>;
}

const ArchiveDetailView = ({
  detailData,
  coverSize,
  photoSizes,
}: ArchiveDetailViewProps) => {
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

      {detailData.imageCover && coverSize && (
        <Reveal delay={0.1}>
          <div className="relative w-full rounded-lg overflow-hidden bg-surface-muted mb-16">
            <Image
              src={`/archive/${detailData.imageCover.fileUrl}`}
              alt={detailData.title}
              width={coverSize.width}
              height={coverSize.height}
              unoptimized
              className="w-full h-auto"
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
            {detailData.detailPhoto.map((photo) => {
              const size = photoSizes[photo];
              if (!size) return null;
              return (
                <div
                  key={photo}
                  className="rounded-md overflow-hidden bg-surface-muted self-start"
                >
                  <Zoom zoomMargin={40}>
                    <Image
                      src={`/archive/${photo}`}
                      alt={detailData.title}
                      width={size.width}
                      height={size.height}
                      unoptimized
                      className="w-full h-auto"
                    />
                  </Zoom>
                </div>
              );
            })}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.3}>
        <Link
          href="/archive"
          className="mt-16 inline-block text-sm text-ink-faint hover:text-primary transition-colors duration-200"
        >
          &#8592; Back to archive
        </Link>
      </Reveal>
    </section>
  );
};

export default ArchiveDetailView;
