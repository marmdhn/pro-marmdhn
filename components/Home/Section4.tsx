import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { Works } from "@/data/works";
import PrimaryButton from "@/components/PrimaryButton";

const Section4 = () => {
  return (
    <section
      id="work"
      className="section flex flex-col justify-center items-center relative w-full py-20"
    >
      <div className="flex flex-col max-w-7xl">
        <div className="flex items-center gap-10 mb-20">
          <h2 className="text-3xl inline-block font-sf-mono mb-0">
            Some Things I’ve <span className="text-primary">Built</span>
          </h2>
          <div className="h-[1px] w-[375px] bg-secondary"></div>
        </div>

        <div className="flex flex-col gap-20">
          {Works.map((work, index) => (
            <div
              key={index}
              className={`flex relative rounded-lg ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } gap-5`}
            >
              <div className="w-1/2">
                <div className="relative group w-full">
                  <Image
                    src={`/work/${work.imgUrl}`}
                    width={100}
                    height={100}
                    unoptimized
                    alt={work.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute inset-0 bg-primary opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-lg"></div>
                </div>
              </div>

              <div
                className={`w-1/2 flex flex-col my-auto gap-5 ${
                  index % 2 !== 0 ? "" : "text-end"
                }`}
              >
                <div>
                  <h3 className="text-primary font-sf-mono text-sm">
                    Featured Project
                  </h3>
                  <h2 className="text-2xl font-bold">{work.title}</h2>
                </div>

                <div className="flex flex-col gap-5">
                  <span className="text-text-secondary">
                    &quot;{work.description}&quot;
                  </span>

                  <div
                    className={`flex gap-4 text-secondary ${
                      index % 2 !== 0 ? "" : "ms-auto"
                    }`}
                  >
                    {work.techStack.map((techStack, index) => (
                      <span key={index}>{techStack}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`absolute bottom-0 ${
                  index % 2 === 0 ? "right" : "left"
                }-0 flex gap-4 text-text-secondary`}
              >
                <Link
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <FaGithub size={24} />
                </Link>
                <Link
                  href={work.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <FaExternalLinkAlt size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href={""} className="mt-32">
        <PrimaryButton btnText={"View More"} />
      </Link>
    </section>
  );
};

export default Section4;
