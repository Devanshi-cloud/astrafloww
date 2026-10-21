"use client";

import Link from "next/link";
import Image from "next/image";

export default function ManifestoStats() {
  return (
    <section id="agency" className="w-full">
      {/* High-Contrast Section in strict --ink (#0F041A) (Directly inspired by Poster Image 2) */}
      <div className="w-full bg-[var(--ink)] text-[var(--cloud-white)] py-28 sm:py-36 px-4 sm:px-10 md:px-16 relative overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Overline Header */}
          <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              INDEPENDENT CREATIVE SOFTWARE STUDIO
            </span>
            <span className="text-[var(--signal-pink)] text-lg">✦</span>
          </div>

          {/* Main Content Split: Poster Typography on Left + Architectural Visual on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
            {/* Left: Giant Poster Typography */}
            <div>
              <h2 className="font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-[104px] tracking-tight leading-[0.92] uppercase text-white mb-6">
                MAKE
                <br />
                IDEAS
                <br />
                <span className="text-[var(--signal-pink)]">MATTER.</span>
              </h2>

              <p className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight mb-6">
                Strategy. Architecture. Digital.
              </p>

              <div className="w-12 h-1 bg-[var(--signal-pink)] mb-6" />

              <p className="max-w-md text-sm sm:text-base text-white/70 leading-relaxed font-sans mb-10">
                AstraFloww builds bold software and resilient digital platforms for what comes next. No shortcuts. High precision.
              </p>

              {/* Poster Style Action Pill */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-xl bg-[var(--signal-pink)] text-white text-xs font-mono uppercase tracking-[0.16em] font-semibold hover:bg-[#6c5ce7] transition-all shadow-xl"
              >
                <span>Let&apos;s Create Something</span>
                <span className="text-base">&rarr;</span>
              </Link>
            </div>

            {/* Right: Architectural Framed Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-black/40 border border-white/15 shadow-2xl">
              <Image
                src="/images/hero-software.jpg"
                alt="AstraFloww Architectural Monument"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--signal-pink)] block mb-1 font-semibold">
                    Spatial Architecture
                  </span>
                  <span className="font-sans font-bold text-lg text-white">
                    Engineered for Perpetual Scale
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: 3 Pillars with generous negative space */}
          <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-[0.25em] text-white/50">
            <span>FULL-STACK ARCHITECTURE</span>
            <span className="text-[var(--signal-pink)] hidden sm:inline">/</span>
            <span>AI AUTOMATION &amp; WORKFLOWS</span>
            <span className="text-[var(--signal-pink)] hidden sm:inline">/</span>
            <span>SEARCH AUTHORITY (SEO)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
