import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl px-8 xl:px-0 mx-auto h-full">
      <div className="absolute z-10 -top-48 left-[220px] w-[400px] h-[400px] bg-primary rounded-full blur-[300px] animate-slide-left-right"></div>
      {/* Section 1 */}
      <section
        id="section1"
        style={{ height: "calc(100vh - 100px)" }}
        className="snap-start flex justify-center items-center relative"
      >
        <div className="text-center mb-8">
          <div className="text-8xl font-bold text-primary">MARMDHN</div>
          <div className="font-adelia text-4xl text-secondary">
            Muhammad Akbar Ramadhan
          </div>
        </div>

        <Link href={""} className="absolute bottom-24 text-center">
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

      {/* Section 2 */}
      <section
        id="section2"
        className="h-screen snap-start flex justify-center items-center bg-gray-200"
      >
        <div className="text-center mb-8">
          <div className="text-xl font-bold">
            Konten di sini untuk Section 2
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        className="h-screen snap-start flex justify-center items-center bg-gray-400"
      >
        <div className="text-center mb-8">
          <div className="text-xl font-bold">
            Konten di sini untuk Section 3
          </div>
        </div>
      </section>
    </div>
  );
}
