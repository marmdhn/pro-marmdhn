import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientSideLayout from "@/components/ClientSideLayout";

export const metadata: Metadata = {
  title: "pro-marmdhn",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ClientSideLayout>
          <Navbar />
          <div className="px-[50px] pb-[50px]">
            {children}
            <Footer />
          </div>
        </ClientSideLayout>
      </body>
    </html>
  );
}
