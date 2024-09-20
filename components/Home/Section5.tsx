import PrimaryButton from "@/components/PrimaryButton";

const Section5 = () => {
  return (
    <section
      id="contact"
      className="section flex flex-col justify-center items-center relative w-full py-20"
    >
      <div className="flex flex-col max-w-xl items-center text-center gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-xl">What’s Next?</span>
          <span className="text-6xl">Get In Touch</span>
        </div>
        <span className="text-secondary mb-12">
          I’m currently actively seeking new opportunities. If you have any
          questions or just want to connect, please feel free to reach out—I’d
          be happy to hear from you!
        </span>
        <PrimaryButton btnText={"Say Hi :D"} />
      </div>
    </section>
  );
};

export default Section5;
