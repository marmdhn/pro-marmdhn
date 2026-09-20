import { ReactLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import WritingIntro from "@/components/WritingIntro";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <WritingIntro>
        <div className="bg-surface text-ink min-h-screen font-calibre">
          <Navbar />
          <FadeIn>
            <main>{children}</main>
          </FadeIn>
          <Footer />
        </div>
      </WritingIntro>
    </ReactLenis>
  );
}
