"use client";

import ContactForm from "@/components/contact-form";

export default function ContactSection() {
  const whatsappUrl =
    "https://wa.me/919999999999?text=" +
    encodeURIComponent(
      "Hi AstraFloww team, I would like to discuss a software project for my business."
    );

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-10 md:px-16 bg-[var(--ink)] text-[var(--cloud-white)] relative overflow-hidden border-t border-[var(--azure-white)]/20">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct Info */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--signal-pink)] mb-4 block font-semibold">
              // LET&apos;S TALK
            </span>

            <h2 className="hero-display text-white tracking-tight leading-[0.95] mb-8 uppercase">
              HAVE A SOFTWARE
              <br />
              <span className="text-[var(--signal-pink)]">PROJECT IN MIND?</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans mb-10 max-w-md">
              Whether you need a high-performance web platform, custom software architecture, or AI integration — our freelance engineering team is ready to deliver.
            </p>

            {/* Direct Contact Channels */}
            <div className="space-y-6 pt-8 border-t border-white/10 max-w-md">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                  DIRECT EMAIL INQUIRY
                </span>
                <a
                  href="mailto:contact@astrafloww.in"
                  className="font-display font-bold text-xl text-white hover:text-[var(--signal-pink)] transition-colors"
                >
                  contact@astrafloww.in &rarr;
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                  INSTANT WHATSAPP CHAT
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Chat on WhatsApp &rarr;
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                  AVAILABILITY
                </span>
                <span className="text-xs font-mono text-white/80">
                  ● Available for new software contracts this quarter
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Inquiry Portal */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-[var(--azure-white)]/20 shadow-2xl">
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--signal-pink)] block mb-1 font-semibold">
                PROJECT INQUIRY FORM
              </span>
              <h3 className="font-display font-bold text-2xl text-white uppercase">
                Start The Conversation
              </h3>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
