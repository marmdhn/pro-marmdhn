import { skills } from "@/data/skills";
import Reveal from "@/components/Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <Reveal>
        <h2 className="text-sm tracking-widest uppercase text-primary mb-6">
          About
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl text-neutral-800">
          I&apos;m a software developer currently working as a backend
          engineer at Taiwan Mobile, building services and APIs for
          large-scale enterprise applications. Before that, I worked across
          mobile and front-end teams at Telkom Foundation, shipping products
          in Flutter, Vue, and React.
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
