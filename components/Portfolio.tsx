import Link from "next/link";
import Image from "next/image";
import { Works } from "@/data/works";
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
      <div className="flex flex-col">
        {Works.map((work, index) => (
          <Reveal key={work.title} delay={index * 0.05}>
            <div className="group py-10 border-t border-neutral-200">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-neutral-100 mb-6">
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
                <span className="text-sm text-neutral-400">
                  {work.techStack.join(" / ")}
                </span>
              </div>
              <p className="mt-3 text-neutral-600 max-w-2xl">
                {work.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-12">
        <Link
          href="/archive"
          className="text-sm text-neutral-500 hover:text-primary transition-colors duration-200"
        >
          View more projects &#8594;
        </Link>
      </Reveal>
    </section>
  );
};

export default Portfolio;
