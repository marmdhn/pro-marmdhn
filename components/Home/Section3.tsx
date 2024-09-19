import { Experiences } from "@/data/experiences";

const Section3 = () => {
  return (
    <section
      id="section3"
      className="section flex justify-center items-center relative w-full my-32"
    >
      <div className="absolute left-0 flex items-center gap-10">
        <h2 className="text-3xl inline-block font-sf-mono mb-0">
          Where I’ve Worked
        </h2>
        <div className="h-[1px] w-[300px] bg-secondary"></div>
      </div>

      <div className="max-w-4xl">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {Experiences.map((experience, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`timeline-${
                  index % 2 === 0 ? "start me-2" : "end ms-2"
                } mb-10 mt-1.5`}
              >
                <div className={`text-${index % 2 === 0 ? "end" : "start"}`}>
                  <time className="font-mono italic">{experience.year}</time>
                  <div className="text-xl font-bold">
                    {experience.title}{" "}
                    <span className="text-primary">
                      @{experience.corporate}
                    </span>
                  </div>
                </div>
                <div className="text-justify text-base text-text-secondary">
                  {experience.description}
                </div>
              </div>
              <hr className="bg-white" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section3;
