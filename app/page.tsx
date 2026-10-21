import type { Metadata } from "next";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ClientShowcase from "@/components/client-showcase";
import ServicesPricing from "@/components/services-pricing";
import ManifestoStats from "@/components/manifesto-stats";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";

export const metadata: Metadata = {
  title: "AstraFloww — Freelance Software Engineering Agency",
  description:
    "AstraFloww is a visionary freelance software agency building bespoke web applications, cloud platforms, and intelligent digital systems.",
  alternates: {
    canonical: "/",
  },
};

export default function LandingPage() {
  return (
    <>
      {/* 1. Hero Section (OASIC Reference with Custom Software Visual) */}
      <Hero />

      {/* 2. About Us & Process Section (Beyond the Code + Metrics + Process) */}
      <AboutSection />

      {/* 3. Featured Projects (// YOUR PROJECT OASIC 2-Card Layout) */}
      <ClientShowcase />

      {/* 4. Services & Pricing Section (Build Products That Move Businesses Forward + Pricing) */}
      <ServicesPricing />


      {/* 6. Client Testimonial */}
      <Testimonials />

      {/* 7. Contact & Inquiry Portal */}
      <ContactSection />
    </>
  );
}
