import Link from "next/link";
import Image from "next/image";
import { MobileWorks, Works } from "@/data/works";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const Portfolio = () => {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-10 py-24"
    >
      <Reveal>
        <SectionHeading index="03" label="Selected Work" />
      </Reveal>
      <Reveal>
        <h3 className="mb-6 text-sm tracking-widest uppercase text-ink-faint">
          Mobile
        </h3>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {MobileWorks.map((app, index) => (
          <Reveal key={app.title} delay={index * 0.05}>
            <div className="group h-full flex flex-col rounded-lg border border-line p-6 md:p-8">
              {app.imgUrl && (
                <div className="relative w-full aspect-[9/19.5] max-w-[260px] overflow-hidden rounded-2xl bg-surface-muted mb-6">
                  <Image
                    src={`/work/${app.imgUrl}`}
                    alt={app.title}
                    fill
                    unoptimized
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h4 className="text-xl md:text-2xl font-bold">{app.title}</h4>
                <span className="text-sm text-ink-faint">
                  {app.techStack.join(" / ")}
                </span>
              </div>
              <p className="mt-3 text-ink-muted">{app.description}</p>
              <div className="mt-6 flex gap-6 text-sm">
                <Link
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-faint hover:text-primary transition-colors duration-200"
                >
                  Google Play &#8599;
                </Link>
                <Link
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-faint hover:text-primary transition-colors duration-200"
                >
                  App Store &#8599;
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <h3 className="mb-2 text-sm tracking-widest uppercase text-ink-faint">
          Web
        </h3>
      </Reveal>
      <div className="flex flex-col">
        {Works.map((work, index) => (
          <Reveal key={work.title} delay={index * 0.05}>
            <div className="group py-10 border-t border-line">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-surface-muted mb-6">
                <Image
                  src={`/work/${work.imgUrl}`}
                  alt={work.title}
                  fill
                  unoptimized
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  {work.websiteUrl ? (
                    <Link
                      href={work.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {work.title}
                    </Link>
                  ) : (
                    work.title
                  )}
                </h3>
                <span className="text-sm text-ink-faint">
                  {work.techStack.join(" / ")}
                </span>
              </div>
              <p className="mt-3 text-ink-muted max-w-2xl">
                {work.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-12">
        <Link
          href="/archive"
          className="text-sm text-ink-faint hover:text-primary transition-colors duration-200"
        >
          View more projects &#8594;
        </Link>
      </Reveal>
    </section>
  );
};

export default Portfolio;
