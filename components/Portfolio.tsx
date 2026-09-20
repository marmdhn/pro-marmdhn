import Link from "next/link";
import { Works } from "@/data/works";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const Portfolio = () => {
  return (
    <section
      id="work"
      className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <Reveal>
        <SectionHeading index="03" label="Selected Work" />
      </Reveal>
      <div className="flex flex-col">
        {Works.map((work, index) => (
          <Reveal key={work.title} delay={index * 0.05}>
            <div className="py-8 border-t border-neutral-200">
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
          href="/v1/archive"
          className="text-sm text-neutral-500 hover:text-primary transition-colors duration-200"
        >
          View more projects &#8594;
        </Link>
      </Reveal>
    </section>
  );
};

export default Portfolio;
