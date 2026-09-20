import Link from "next/link";
import { FaGithub, FaRegEye, FaApple, FaAndroid, FaDownload } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Archives } from "@/data/archive";
import Reveal from "@/components/Reveal";

const PLATFORM_ICON = {
  Android: FaAndroid,
  iOS: FaApple,
  Windows: FaDownload,
  macOS: FaDownload,
};

const STATUS_LABEL: Record<string, string> = {
  Done: "",
  "In Progress": "In Progress",
  "Coming Soon": "Coming Soon",
};

const ArchivePage = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
      <Reveal>
        <p className="text-sm tracking-widest uppercase text-primary mb-4">
          Archive
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">
          A list of things I&apos;ve built.
        </h1>
      </Reveal>

      <div className="mt-16 flex flex-col">
        {Archives.map((archive, index) => (
          <Reveal key={archive.id} delay={Math.min(index * 0.04, 0.3)}>
            <div className="py-6 border-t border-neutral-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <span className="md:w-16 shrink-0 text-sm text-neutral-400">
                {archive.year}
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold">{archive.title}</h3>
                  {STATUS_LABEL[archive.status] && (
                    <span className="text-xs text-primary border border-primary/30 rounded-full px-2 py-0.5">
                      {STATUS_LABEL[archive.status]}
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-500">
                  {archive.madeAt} &middot; {archive.buildWith.join(", ")}
                </p>
              </div>

              <div className="flex items-center gap-4 text-neutral-400 shrink-0">
                {archive.link.webUrl && (
                  <Link
                    href={archive.link.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit website"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={16} />
                  </Link>
                )}
                {archive.link.gitHubUrl && (
                  <Link
                    href={archive.link.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source on GitHub"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    <FaGithub size={16} />
                  </Link>
                )}
                {archive.detail && (
                  <Link
                    href={`/archive/${archive.id}`}
                    aria-label="View details"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    <FaRegEye size={16} />
                  </Link>
                )}
                {archive.link.downloadUrl?.map((download) => {
                  const Icon = PLATFORM_ICON[download.platform];
                  return (
                    <Link
                      key={download.platform}
                      href={download.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Download ${download.platform}`}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      <Icon size={16} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ArchivePage;
