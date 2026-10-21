import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AstraFloww. Book a strategy session for web development, SEO, AI automation, or brand systems. We respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AstraFloww — Let's Build Something Together",
    description:
      "Ready to scale your digital presence? Send us a message and we'll be in touch within 24 hours.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact AstraFloww",
    description:
      "Let's Build Something Together. Reach out for web development, SEO, AI automation, and branding.",
  },
};

export default function ContactPage() {
  const whatsappUrl =
    "https://wa.me/919999999999?text=" +
    encodeURIComponent(
      "Hi AstraFloww team, I would like to discuss a project for my business."
    );

  return (
    <div className="pt-28 sm:pt-36 pb-20 md:pb-32 px-4 sm:px-6 bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--signal-pink)] mb-3 block">
            // DIRECT COLLABORATION
          </span>
          <h1 className="hero-display text-[var(--ink)] mb-6">
            Let&apos;s Build
            <br />
            <span className="font-serif italic font-normal text-[var(--signal-pink)]">
              Something Extraordinary.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--ink-muted)] leading-relaxed font-sans">
            Ready to scale your brand? Drop us your inquiry below or reach out via our direct communication channels. We review every brief and respond within 24 hours.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Left: Form in modern dark container */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0F041A] text-white shadow-2xl border border-white/10">
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--signal-pink)] block mb-1">
                INQUIRY FORM
              </span>
              <h2 className="font-display font-bold text-2xl text-white">
                Book a Strategy Session
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Right: Info Cards */}
          <div className="space-y-6">
            {/* Quick Info Block */}
            <div className="p-6 rounded-3xl bg-[var(--cloud-white)] border border-[var(--azure-white)] card-shadow">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--signal-pink)] font-semibold block mb-4">
                Operations &amp; Timing
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between py-2 border-b border-[var(--azure-white)]/60">
                  <span className="text-[var(--ink)]/50">RESPONSE SLA</span>
                  <span className="font-semibold text-[var(--ink)]">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--azure-white)]/60">
                  <span className="text-[var(--ink)]/50">WORKING HOURS</span>
                  <span className="font-semibold text-[var(--ink)]">Mon–Sat, 10am–7pm IST</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--azure-white)]/60">
                  <span className="text-[var(--ink)]/50">LOCATION</span>
                  <span className="font-semibold text-[var(--ink)]">India · Global Clients</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[var(--ink)]/50">ACTIVE ENGAGEMENTS</span>
                  <span className="font-semibold text-emerald-600">● Open for Q2–Q3</span>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-3xl bg-[var(--cloud-white)] border border-[var(--azure-white)] card-shadow space-y-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--signal-pink)] block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href="mailto:contact@astrafloww.in"
                  className="font-display font-bold text-base text-[var(--ink)] hover:text-[var(--signal-pink)] transition-colors"
                >
                  contact@astrafloww.in &rarr;
                </a>
              </div>

              <div className="pt-4 border-t border-[var(--azure-white)]/60">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--signal-pink)] block mb-1">
                  INSTANT MESSAGING
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
