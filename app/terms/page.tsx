import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import LegalArticle from "@/components/legal-article";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for AstraFloww. Read the terms governing our digital services and website usage.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const filePath = path.join(
    process.cwd(),
    "docs/AstraFloww-Terms-and-Conditions.md"
  );
  const content = fs.readFileSync(filePath, "utf-8");

  return <LegalArticle content={content} />;
}
