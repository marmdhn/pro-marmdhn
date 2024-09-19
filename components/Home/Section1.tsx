import Link from "next/link";

const Section1 = () => {
  return (
    <section
      id="section1"
      className="section flex justify-center items-center relative"
    >
      <div className="text-center mb-8">
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-primary to-transparent animate-shine bg-[length:200%_200%]">
          MARMDHN
        </div>

        <div className="font-adelia text-4xl text-secondary">
          Muhammad Akbar Ramadhan
        </div>
      </div>

      <Link href={""} className="absolute bottom-12 text-center">
        <span className="text-xl text-primary italic">Scroll Me</span>
        <div className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto text-primary motion-safe:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </Link>
    </section>
  );
};

export default Section1;
