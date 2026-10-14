import { skills } from "@/data/skills";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-10 py-24"
    >
      <Reveal>
        <SectionHeading index="01" label="About" />
      </Reveal>
      <Reveal delay={0.1} className="relative max-w-3xl">
        <span
          aria-hidden="true"
          className="font-adelia absolute -top-10 -left-4 md:-left-10 text-8xl md:text-9xl text-ink-ghost select-none"
        >
          &ldquo;
        </span>
        <p className="relative text-2xl md:text-3xl leading-relaxed text-ink">
          I&apos;m a{" "}
          <span className="font-adelia italic text-primary">
            Full Stack Developer
          </span>{" "}
          currently working across backend and frontend at Bank Mandiri,
          building internal tools and data-driven dashboards with Angular,
          Spring Boot, and the ELK stack. Before that, I worked on enterprise
          web applications and legacy system modernization at Taiwan Mobile, and
          on mobile and front-end products at Telkom Foundation, shipping in
          Flutter, Vue, and React.
        </p>
      </Reveal>
      <Reveal delay={0.2} className="mt-12">
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-ink-faint">
          {skills.map((skill, index) => (
            <span key={skill}>
              {skill}
              {index < skills.length - 1 && (
                <span className="text-ink-ghost"> &middot;</span>
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default About;
