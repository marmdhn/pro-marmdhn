import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import StickyElement from "@/components/Home/StickyElement";
import { Archives } from "@/data/archive";

const ArchivePage = () => {
  return (
    <div className="min-h-screen px-8 xl:px-0 mx-auto h-full">
      <StickyElement />
      <section className="flex flex-col justify-center items-center relative w-full pt-[100px]">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col items-start gap-2 mb-20">
            <span className="text-7xl font-bold">Archive</span>
            <span className="font-sf-mono text-primary">
              A list of things I’ve worked on
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table">
              <thead>
                <tr className="text-xl">
                  <th>Year</th>
                  <th>Title</th>
                  <th>Made at</th>
                  <th>Build With</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {Archives.map((archive, index) => (
                  <tr
                    key={index}
                    className="text-xl hover:bg-[#262930FF] transition-colors duration-300"
                  >
                    <td className="text-primary font-sf-mono text-lg">
                      {archive.year}
                    </td>
                    <td className="font-bold">{archive.title}</td>
                    <td className="text-secondary font-semibold">
                      {archive.madeAt}
                    </td>
                    <td className="text-lg text-secondary font-semibold">
                      {archive.buildWith.join(" • ")}
                    </td>
                    <td>
                      <div className="flex gap-4 text-secondary">
                        {archive.link.webUrl && (
                          <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:scale-110 transition-all duration-300"
                          >
                            <FaExternalLinkAlt size={20} />
                          </Link>
                        )}
                        {archive.link.gitHubUrl && (
                          <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:scale-110 transition-all duration-300"
                          >
                            <FaGithub size={20} />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchivePage;
