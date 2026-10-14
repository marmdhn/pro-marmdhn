import { MotionConfig } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CursorGlow from "@/components/CursorGlow";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <div className="bg-surface text-ink min-h-screen font-calibre">
          <CursorGlow />
          <Navbar />
          <FadeIn>
            <main>{children}</main>
          </FadeIn>
          <Footer />
        </div>
      </SmoothScroll>
    </MotionConfig>
  );
}
