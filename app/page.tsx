import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section4 from "@/components/Home/Section4";
import Section3 from "@/components/Home/Section3";
import StickyElement from "@/components/Home/StickyElement";

export default function Home() {
  return (
    <div className="px-8 xl:px-0 mx-auto h-full">
      <div className="absolute z-10 -top-48 left-[220px] w-[400px] h-[400px] bg-primary rounded-full blur-[300px] animate-slide-left-right"></div>
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <StickyElement />
    </div>
  );
}
