import { Experiences } from "@/data/experiences";
import Reveal from "@/components/Reveal";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <Reveal>
        <h2 className="text-sm tracking-widest uppercase text-primary mb-12">
          Experience
        </h2>
      </Reveal>
      <div className="flex flex-col">
        {Experiences.map((experience, index) => (
          <Reveal key={experience.corporate + experience.year} delay={index * 0.05}>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-8 border-t border-neutral-200">
              <div className="md:w-32 shrink-0 flex items-center gap-2 text-sm text-neutral-500">
                {experience.current && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
                {experience.year}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  {experience.title}{" "}
                  <span className="text-neutral-400 font-normal">
                    @ {experience.corporate}
                  </span>
                </h3>
                <p className="mt-3 text-neutral-600 max-w-2xl">
                  {experience.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
