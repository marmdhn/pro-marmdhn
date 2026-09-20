import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white text-neutral-900 min-h-screen font-calibre">
      <Navbar />
      <FadeIn>
        <main>{children}</main>
      </FadeIn>
      <Footer />
    </div>
  );
}
