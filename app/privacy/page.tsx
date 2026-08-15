import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import LegalArticle from "@/components/legal-article";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for AstraFloww. Read how we collect, use, and safeguard your information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const filePath = path.join(
    process.cwd(),
    "docs/AstraFloww-Privacy-Policy.md"
  );
  const content = fs.readFileSync(filePath, "utf-8");

  return <LegalArticle content={content} />;
}
