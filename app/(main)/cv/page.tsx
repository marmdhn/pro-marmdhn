import type { Metadata } from "next";
import CvViewer from "@/components/CvViewer";

export const metadata: Metadata = {
  title: "CV",
  description: "Download or preview my CV.",
};

export default function CvPage() {
  return <CvViewer />;
}
