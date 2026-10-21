"use client";

import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="w-full bg-[var(--paper)] pt-6 sm:pt-10 pb-16 px-3 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-[1640px] mx-auto">
        {/* 1. Header Grid with Headline & Subtitle */}
        <div className="relative pl-8 sm:pl-12 md:pl-16 mb-2 sm:mb-4">
          {/* Vertical Scroll Down Indicator in strict brand lavender token */}
          <div className="absolute left-0 top-2 flex flex-col items-center gap-3 select-none">
            <span
              className="text-[11px] font-mono font-medium text-[var(--signal-pink)] tracking-wider whitespace-nowrap uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Scroll Down
            </span>
            <div className="w-[1px] h-8 bg-[var(--signal-pink)]/50" />
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              className="text-[var(--signal-pink)]"
            >
              <path
                d="M5 1V13M5 13L1 9M5 13L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Headline + Inline Button */}
          <div>
            <div className="flex flex-wrap items-baseline gap-x-5 sm:gap-x-7 gap-y-3">
              <h1 className="hero-display text-[var(--ink)] leading-none uppercase">
                WE COMPLETE
              </h1>

              {/* Inline LET'S TALK NOW button in strict palette */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full border border-[var(--signal-pink)] text-[var(--signal-pink)] hover:bg-[var(--signal-pink)] hover:text-white transition-all shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--signal-pink)] text-white flex items-center justify-center transition-transform group-hover:scale-105">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <span className="font-mono font-bold text-xs uppercase tracking-wider">
                  LET&apos;S TALK NOW
                </span>
              </Link>
            </div>

            <h1 className="hero-display text-[var(--ink)] leading-none uppercase mt-1 sm:mt-2">
              YOUR SOFTWARE IDEAS
            </h1>
          </div>

          {/* Right-aligned Subtitle Copy */}
          <div className="mt-4 sm:mt-6 flex justify-end">
            <p className="max-w-md text-xs sm:text-sm md:text-base text-[var(--ink-muted)] leading-relaxed font-sans text-left">
              AstraFloww is a visionary freelance software agency that breathes life into ideas and transforms them into extraordinary digital realities.
            </p>
          </div>
        </div>

        {/* 2. Building Image — Wide with Rounded Corners (Zero Border, Zero Stroke) */}
        <div className="relative w-full aspect-[2560/920] -mt-2 sm:-mt-6 md:-mt-10 lg:-mt-14 z-10 rounded-[20px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden">
          <Image
            src="/images/hero-building-tight.png"
            alt="AstraFloww Freelance Software Agency"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
