import { skills } from "@/data/skills";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <Reveal>
        <SectionHeading index="01" label="About" />
      </Reveal>
      <Reveal delay={0.1} className="relative max-w-3xl">
        <span
          aria-hidden="true"
          className="font-adelia absolute -top-10 -left-4 md:-left-10 text-8xl md:text-9xl text-neutral-100 select-none"
        >
          &ldquo;
        </span>
        <p className="relative text-2xl md:text-3xl leading-relaxed text-neutral-800">
          I&apos;m a{" "}
          <span className="font-adelia italic text-primary">software developer</span>{" "}
          currently working as a backend engineer at Taiwan Mobile, building
          services and APIs for large-scale enterprise applications. Before
          that, I worked across mobile and front-end teams at Telkom
          Foundation, shipping products in Flutter, Vue, and React.
        </p>
      </Reveal>
      <Reveal delay={0.2} className="mt-12">
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-neutral-500">
          {skills.map((skill, index) => (
            <span key={skill}>
              {skill}
              {index < skills.length - 1 && (
                <span className="text-neutral-300"> &middot;</span>
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default About;
