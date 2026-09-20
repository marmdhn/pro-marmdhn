import ClientSideLayout from "@/components/v1/ClientSideLayout";
import Navbar from "@/components/v1/Navbar";
import Footer from "@/components/v1/Footer";

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientSideLayout>
      <Navbar />
      <div className="px-0 md:px-[50px] pb-[50px]">
        {children}
        <Footer />
      </div>
    </ClientSideLayout>
  );
}
