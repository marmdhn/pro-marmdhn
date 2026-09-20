import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Squiggle from "@/components/Squiggle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40"
    >
      <Reveal>
        <SectionHeading index="04" label="Contact" />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
          Currently open to new opportunities.{" "}
          <span className="font-adelia italic text-primary">
            Let&apos;s talk.
          </span>
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <Link
          href="mailto:makbarramadhan62@gmail.com"
          className="relative inline-block mt-10 text-lg text-neutral-900 hover:text-primary transition-colors duration-200 w-fit"
        >
          makbarramadhan62@gmail.com
          <Squiggle className="absolute left-0 top-full w-full h-2 -mt-1" />
        </Link>
      </Reveal>
    </section>
  );
};

export default Contact;
