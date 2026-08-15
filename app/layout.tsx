import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AstraFloww — We don't just market. We amplify.",
    template: "%s | AstraFloww",
  },
  description:
    "AstraFloww is a bold digital marketing and creative agency specialising in web development, SEO, UI/UX design, AI development, and DevOps.",
  keywords: [
    "digital marketing",
    "creative agency",
    "web development",
    "SEO",
    "UI/UX design",
    "AI development",
    "DevOps",
    "AstraFloww",
  ],
  openGraph: {
    title: "AstraFloww — We don't just market. We amplify.",
    description:
      "Bold digital marketing and creative agency. We build, market, and scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraFloww",
    description: "We don't just market. We amplify.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
