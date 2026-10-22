import type { Metadata } from "next";
import SolutionsPage from "@/components/solutions-page";

export const metadata: Metadata = {
  title: "Solutions | AstraFloww",
  description: "Digital products, AI automation, data intelligence and growth infrastructure from AstraFloww.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsRoute() {
  return <SolutionsPage />;
}
