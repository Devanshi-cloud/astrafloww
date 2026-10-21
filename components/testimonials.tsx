"use client";

export default function Testimonials() {
  return (
    <section className="w-full bg-[var(--paper)] py-20 sm:py-28 px-4 sm:px-10 md:px-16 border-t border-[var(--azure-white)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Client Author Meta */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--ink)] text-[var(--signal-pink)] flex items-center justify-center font-bold text-lg font-mono">
              ZG
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[var(--ink)]">
                Zsure Engineering
              </h4>
              <p className="text-xs font-mono text-[var(--ink-muted)] uppercase tracking-wider">
                Founder, AI Platform
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div>
            <span className="font-serif text-5xl text-[var(--signal-pink)] leading-none block mb-2">
              &ldquo;
            </span>
            <p className="font-sans font-medium text-xl sm:text-2xl text-[var(--ink)] leading-snug">
              We are very happy to work with such an amazing team! Our experience with AstraFloww has been exceptional. They transformed our core AI threat detection engine into an enterprise-ready software platform with incredible speed and architectural precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
