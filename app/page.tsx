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
          <div className="text-4xl font-bold text-secondary">
            Muhammad Akbar Ramadhan
          </div>
        </div>

        <div className="absolute bottom-24">
          <span>Scroll Me</span>
        </div>
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
