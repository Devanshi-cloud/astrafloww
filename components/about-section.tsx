"use client";

import Image from "next/image";
import Link from "next/link";

const ABOUT_INDEX = [
  { id: "01", title: "Full-Cycle Engineering Model", subtitle: "Architecture to Deployment" },
  { id: "02", title: "Cloud-Native Infrastructure", subtitle: "Perpetual 99.99% Resilience" },
  { id: "03", title: "Zero Technical-Debt Moat", subtitle: "Strict Type Safety & Tests" },
  { id: "04", title: "Enterprise-Grade Security", subtitle: "SOC2 & GDPR Compliant" },
  { id: "05", title: "Sprint-Based Fixed Velocity", subtitle: "No Bloat, Pure Output" },
  { id: "06", title: "Est. 2026, Global Remote", subtitle: "Bespoke Software Studio" },
];

const METRICS = [
  { value: "03+", line1: "Years Delivering", line2: "Client Retention" },
  { value: "50+", line1: "Completed", line2: "Software Deployments" },
  { value: "100%", line1: "Independent &", line2: "Direct Engineering" },
  { value: "24/7", line1: "Dedicated", line2: "SLA Support" },
];

const PROCESS_STEPS = [
  {
    step: "PHASE 01",
    title: "Define & Architect",
    description:
      "We interrogate the problem domain, map domain schemas, and establish the technical blueprints before writing a line of code.",
    tag: "Blueprints",
  },
  {
    step: "PHASE 02",
    title: "Build & Ship",
    description:
      "Rapid sprint-based delivery using TypeScript, modern React architectures, and distributed microservices tailored to your scale.",
    tag: "High Velocity",
  },
  {
    step: "PHASE 03",
    title: "Harden & Scale",
    description:
      "Rigorous end-to-end stress testing, sub-millisecond database caching, automated CI/CD pipelines, and enterprise-grade SLAs.",
    tag: "Zero Downtime",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[var(--paper)] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-[var(--azure-white)] select-none">
      <div className="max-w-[1640px] mx-auto">
        {/* ==============================================================
            EDITORIAL 3-COLUMN ABOUT US SECTION (Matching Reference Image 1)
            Dense Index on Left, Monumental "ABOUT US" in Center,
            Mission & Vision on Right + Integrated Aesthetic Photography
            ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-20 sm:pb-28 border-b border-[var(--azure-white)]/70">
          
          {/* COLUMN 1: DENSE INDEX NAVIGATION (Left - 3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--azure-white)]/70 pb-10 lg:pb-0 lg:pr-8">
            <div>
              <div className="pb-4 mb-2 border-b border-[var(--azure-white)]/70 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--ink-muted)]">
                  TABLE OF DISCIPLINES
                </span>
                <span className="text-[var(--signal-pink)] text-xs font-mono">06 ITEMS</span>
              </div>

              <div className="divide-y divide-[var(--azure-white)]/40">
                {ABOUT_INDEX.map((item) => (
                  <div
                    key={item.id}
                    className="py-3.5 group cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-[11px] font-bold text-[var(--signal-pink)] tracking-wider pt-0.5">
                        {item.id}
                      </span>
                      <div>
                        <h4 className="font-sans font-bold text-xs sm:text-sm text-[var(--ink)] group-hover:text-[var(--signal-pink)] transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[10px] text-[var(--ink-muted)] block mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aesthetic Mini Visual at bottom of left column */}
            <div className="mt-8 pt-6 border-t border-[var(--azure-white)]/60">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--azure-white)] shadow-xs">
                <Image
                  src="/images/platform-mockup.jpg"
                  alt="AstraFloww Digital Architecture"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--ink-muted)] block mt-2 text-center">
                ARCH. REF // 01-SYS
              </span>
            </div>
          </div>

          {/* COLUMN 2: NOT SO DENSE — MONUMENTAL DISPLAY (Center - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:px-4">
            <div>
              {/* Giant Monumental Title in Brand Signal Pink (Matching Reference Image 1) */}
              <h2 className="font-sans font-black text-6xl sm:text-7xl md:text-8xl xl:text-[96px] text-[var(--signal-pink)] tracking-tighter leading-none uppercase mb-2">
                ABOUT US
              </h2>

              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)] font-semibold">
                  Est. 2026 // Studio Philosophy
                </span>
              </div>

              <div className="w-full h-[1px] bg-[var(--azure-white)]/70 mb-8" />

              {/* Story Heading */}
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[var(--ink)] tracking-tight mb-4">
                The Story Behind the{" "}
                <span className="font-serif italic font-normal text-[var(--signal-pink)]">
                  Code
                </span>
              </h3>

              {/* Editorial Paragraph */}
              <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed font-sans mb-8">
                We started with one core conviction: ambition alone shouldn&apos;t determine whether a software product reaches global scale — elite engineering should. Not someday, not after burning through messy outsourced agencies, but from day one. That&apos;s why AstraFloww exists: to give founders and enterprises the structured architectural depth, resilient codebases, and global perspective that transform software from an operational cost into an enduring competitive moat.
              </p>

              {/* Aesthetic Editorial Photo of Team Collaboration */}
              <div className="relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--azure-white)] shadow-sm mb-8">
                <Image
                  src="/images/about-team-1.jpg"
                  alt="AstraFloww Engineering Collaboration"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom Giant NO. 01 Indicator with See More Link */}
            <div className="pt-6 border-t border-[var(--azure-white)]/60 flex items-baseline justify-between">
              <span className="font-sans font-black text-5xl sm:text-6xl text-[var(--ink)] tracking-tighter leading-none">
                NO. 01
              </span>
              <Link
                href="#services"
                className="font-serif italic text-sm text-[var(--ink)] hover:text-[var(--signal-pink)] transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>&darr;</span>
                <span>See More</span>
              </Link>
            </div>
          </div>

          {/* COLUMN 3: DENSE MISSION & DIFFERENTIATION (Right - 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[var(--azure-white)]/70 pt-10 lg:pt-0 lg:pl-8">
            <div className="space-y-10">
              {/* Item 02: Mission & Vision */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)] block mb-1">
                  NO. 02
                </span>
                <h4 className="font-sans font-bold text-xl sm:text-2xl text-[var(--ink)] tracking-tight mb-0.5">
                  Mission &amp; Vision
                </h4>
                <span className="font-serif italic text-xs text-[var(--signal-pink)] block mb-3 font-medium">
                  What We&apos;re Architecting.
                </span>
                <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed font-sans pl-3 border-l-2 border-[var(--signal-pink)]/40">
                  &ldquo;To give every ambitious company access to the level of world-class software engineering and spatial architecture that transforms how they operate, compete, and scale — until exceptional performance is no longer the exception, but the baseline.&rdquo;
                </p>
              </div>

              <div className="w-full h-[1px] bg-[var(--azure-white)]/50" />

              {/* Item 03: Why AstraFloww */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)] block mb-1">
                  NO. 03
                </span>
                <h4 className="font-sans font-bold text-xl sm:text-2xl text-[var(--ink)] tracking-tight mb-0.5">
                  Why AstraFloww
                </h4>
                <span className="font-serif italic text-xs text-[var(--signal-pink)] block mb-3 font-medium">
                  What Sets Us Apart.
                </span>
                <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed font-sans pl-3 border-l-2 border-[var(--signal-pink)]/40">
                  &ldquo;Every detail is intentional. AstraFloww is built from the ground up — structured short-sprint cycles with institutional engineering rigour at the core, purpose-built cloud infrastructure, and zero technical debt that leaves nothing to assumption.&rdquo;
                </p>
              </div>

              {/* Aesthetic Architectural Mood Visual */}
              <div className="pt-2">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--azure-white)] shadow-xs">
                  <Image
                    src="/images/about-team-2.jpg"
                    alt="AstraFloww Studio Meeting"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[var(--ink-muted)] mt-2">
                  <span>STUDIO ENGINEERING LAB</span>
                  <span className="text-[var(--signal-pink)]">✦ 2026</span>
                </div>
              </div>
            </div>

            {/* Bottom Direct CTA */}
            <div className="mt-8 pt-6 border-t border-[var(--azure-white)]/60 flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--ink)] uppercase tracking-wider font-semibold">
                Bespoke Software
              </span>
              <Link
                href="/contact"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--signal-pink)] hover:underline"
              >
                Inquire With Studio &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* 4-Column Metrics Bar (Generous Negative Space) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 py-16 sm:py-20 border-b border-[var(--azure-white)]/60">
          {METRICS.map((metric) => (
            <div key={metric.value} className="flex flex-col">
              <span className="font-sans font-black text-4xl sm:text-5xl text-[var(--ink)] tracking-tight mb-2">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-[var(--ink-muted)] leading-snug font-sans">
                {metric.line1}
                <br />
                {metric.line2}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Clean Structured Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-16 sm:pt-20">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.title}
              className="p-8 rounded-3xl bg-[var(--cloud-white)] border border-[var(--azure-white)] card-shadow flex flex-col justify-between hover:border-[var(--signal-pink)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--signal-pink)] font-semibold">
                    {step.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--paper)] text-[10px] font-mono text-[var(--ink-muted)] uppercase tracking-wider border border-[var(--azure-white)]">
                    {step.tag}
                  </span>
                </div>
                <h4 className="font-sans font-bold text-xl text-[var(--ink)] mb-3 group-hover:text-[var(--signal-pink)] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--azure-white)]/40 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-wider">
                  Verified Outcome
                </span>
                <span className="text-[var(--signal-pink)] font-bold text-sm group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
