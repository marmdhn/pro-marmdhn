import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import StickyElement from "@/components/Home/StickyElement";
import ContactSection from "@/components/Home/ContactSection";
import CircleShine from "@/components/CircleShine";

export default function Home() {
  return (
    <div className="px-8 xl:px-0 mx-auto h-full overflow-x-hidden">
      <CircleShine />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
      <StickyElement />
    </div>
  );
}
