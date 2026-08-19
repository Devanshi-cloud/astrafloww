import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import InitialLoader from "@/components/initial-loader";
import CookieConsent from "@/components/CookieConsent";
import SmoothScroll from "@/components/SmoothScroll";
import AnalyticsGate from "@/components/AnalyticsGate";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://astrafloww.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AstraFloww — We don't just market. We amplify.",
    template: "%s | AstraFloww",
  },
  description:
    "AstraFloww is a bold digital marketing and creative agency specialising in high-performance web development, search authority (SEO), brand systems, AI automation, and DevOps.",
  keywords: [
    "digital marketing agency",
    "web development agency",
    "SEO services",
    "search authority",
    "AI automation agency",
    "UI UX design studio",
    "brand systems",
    "DevOps consulting",
    "digital marketing India",
    "creative tech agency",
    "AstraFloww",
  ],
  authors: [{ name: "AstraFloww", url: siteUrl }],
  creator: "AstraFloww",
  publisher: "AstraFloww",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AstraFloww — We don't just market. We amplify.",
    description:
      "Bold digital marketing and creative agency. We build, market, and scale with high-performance digital experiences.",
    url: siteUrl,
    siteName: "AstraFloww",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraFloww — We don't just market. We amplify.",
    description:
      "We don't just market. We amplify. Web development, SEO, AI automation, and brand systems.",
    creator: "@astrafloww",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AstraFloww",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      sameAs: [
        "https://instagram.com/astrafloww",
        "https://linkedin.com/company/astrafloww",
        "https://twitter.com/astraflow_",
      ],
      email: "hello@astrafloww.in",
      description:
        "AstraFloww is a digital marketing and creative agency delivering web development, SEO, AI automation, and brand systems.",
      knowsAbout: [
        "Web Development",
        "Search Engine Optimization",
        "AI Automation",
        "UI/UX Design",
        "DevOps Infrastructure",
        "Brand Identity Systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AstraFloww",
      description: "We don't just market. We amplify.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "AstraFloww Digital Agency",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      areaServed: "Worldwide",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <SmoothScroll>
          <InitialLoader />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <AnalyticsGate />
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
