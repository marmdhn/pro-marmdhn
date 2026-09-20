import path from "path";
import Link from "next/link";
import { Archives } from "@/data/archive";
import { getPngDimensions } from "@/lib/getPngDimensions";
import ArchiveDetailView from "@/components/ArchiveDetailView";

const ARCHIVE_DIR = path.join(process.cwd(), "public", "archive");

export default async function DetailArchivePage({
  params,
}: {
  params: Promise<{ archiveId: string }>;
}) {
  const { archiveId } = await params;
  const detailData = Archives.find((archive) => archive.id === archiveId);

  if (!detailData) {
    return (
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <p className="text-2xl font-bold">Project not found.</p>
        <Link
          href="/archive"
          className="mt-6 inline-block text-sm text-ink-faint hover:text-primary transition-colors duration-200"
        >
          &#8592; Back to archive
        </Link>
      </section>
    );
  }

  const coverSize = detailData.imageCover
    ? getPngDimensions(path.join(ARCHIVE_DIR, detailData.imageCover.fileUrl))
    : null;

  const photoSizes = Object.fromEntries(
    (detailData.detailPhoto ?? []).map((photo) => [
      photo,
      getPngDimensions(path.join(ARCHIVE_DIR, photo)),
    ]),
  );

  return (
    <ArchiveDetailView
      detailData={detailData}
      coverSize={coverSize}
      photoSizes={photoSizes}
    />
  );
}
