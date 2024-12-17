import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section4 from "@/components/Home/Section4";
import Section3 from "@/components/Home/Section3";
import StickyElement from "@/components/Home/StickyElement";
import Section5 from "@/components/Home/Section5";
import CircleShine from "@/components/CircleShine";
import ElasticEffect from "@/components/ElastifEffect";

export default function Home() {
  return (
    <div className="px-8 xl:px-0 mx-auto h-full overflow-x-hidden">
      <CircleShine />
      <ElasticEffect />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <StickyElement />
    </div>
  );
}
