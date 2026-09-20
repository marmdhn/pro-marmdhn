import HeroSection from "@/components/v1/Home/HeroSection";
import AboutSection from "@/components/v1/Home/AboutSection";
import PortfolioSection from "@/components/v1/Home/PortfolioSection";
import ExperienceSection from "@/components/v1/Home/ExperienceSection";
import StickyElement from "@/components/v1/Home/StickyElement";
import ContactSection from "@/components/v1/Home/ContactSection";
import CircleShine from "@/components/v1/CircleShine";

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
