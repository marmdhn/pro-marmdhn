import Link from "next/link";
import Reveal from "@/components/Reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40"
    >
      <Reveal>
        <h2 className="text-sm tracking-widest uppercase text-primary mb-6">
          Contact
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
          Currently open to new opportunities. Let&apos;s talk.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <Link
          href="mailto:makbarramadhan62@gmail.com"
          className="inline-block mt-10 text-lg border-b-2 border-primary text-primary hover:text-neutral-900 hover:border-neutral-900 transition-colors duration-200"
        >
          makbarramadhan62@gmail.com
        </Link>
      </Reveal>
    </section>
  );
};

export default Contact;
