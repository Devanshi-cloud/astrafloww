"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[var(--paper)] text-[var(--ink)] relative select-none overflow-hidden border-t border-[var(--azure-white)]">
      {/* ==============================================================
          UPPER ZONE: Full-bleed Canvas with Corner Illustrations &
          Monumental Interlocking Astra Floww Typography
          ============================================================== */}
      <div className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px] flex items-center justify-center pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden">
        {/* 1. Left Illustration: Arch Door (door.png) tilted slightly & pushed to the left edge */}
        <div className="absolute left-[-15px] sm:left-0 md:left-2 lg:left-4 bottom-0 z-10 pointer-events-none flex items-end">
          <img
            src="/images/footer/door.png"
            alt=""
            aria-hidden="true"
            className="h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px] w-auto object-contain object-bottom -rotate-6 origin-bottom-left select-none"
            style={{
              filter: "grayscale(1) brightness(0.15) contrast(1.2)",
            }}
          />
        </div>

        {/* 2. Top-Right Illustration: Table with Lamp and Picture (tableLamp.png) pushed all the way to the right side */}
        <div className="absolute top-0 right-[-15px] sm:right-[-10px] md:right-0 z-10 pointer-events-none flex items-start justify-end">
          <img
            src="/images/footer/tableLamp.png"
            alt=""
            aria-hidden="true"
            className="h-[150px] sm:h-[200px] md:h-[260px] lg:h-[320px] w-auto object-contain object-top-right select-none"
            style={{
              filter: "grayscale(1) brightness(0.15) contrast(1.2)",
            }}
          />
        </div>

        {/* 3. Decorative Lavender Squiggles (Calibrated to reference mockup) */}
        {/* Squiggle 1: Upper-left horizontal wave (between Door and Astra) */}
        <svg
          className="absolute top-[22%] sm:top-[20%] left-[20%] sm:left-[22%] md:left-[25%] w-8 sm:w-11 md:w-13 h-6 sm:h-8 text-[var(--signal-pink)] pointer-events-none z-10 opacity-90"
          viewBox="0 0 50 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <path d="M 6 18 C 14 7, 22 7, 29 18 C 36 29, 44 26, 46 16" />
        </svg>

        {/* Squiggle 2: Lower-left fishhook / loop (right of Door base) */}
        <svg
          className="absolute bottom-[20%] sm:bottom-[18%] left-[17%] sm:left-[19%] md:left-[21%] w-8 sm:w-11 md:w-13 h-10 sm:h-14 text-[var(--signal-pink)] pointer-events-none z-10 opacity-90"
          viewBox="0 0 45 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <path d="M 32 14 C 32 34, 24 46, 14 42 C 7 38, 7 26, 18 22" />
        </svg>

        {/* 4. Center Typography Group (Interlocking Astra + Floww + Vine + Squiggles) */}
        <div className="relative inline-flex flex-col items-start leading-[0.78] text-center select-none z-10 my-auto">
          {/* Squiggle 3: Horizontal tilde floating right above 'r' and 'a' in Astra */}
          <svg
            className="absolute -top-[14%] sm:-top-[16%] right-[26%] sm:right-[30%] md:right-[33%] w-9 sm:w-13 md:w-16 h-5 sm:h-7 text-[var(--signal-pink)] pointer-events-none z-20 opacity-90"
            viewBox="0 0 60 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          >
            <path d="M 6 16 C 16 6, 26 6, 36 16 C 46 26, 54 20, 56 12" />
          </svg>

          {/* Grapes / Tomatoes on vine (grapes.png) overlapping top right of Astra */}
          <div className="absolute -top-[22%] sm:-top-[26%] md:-top-[28%] -right-[12%] sm:-right-[15%] md:-right-[18%] z-20 pointer-events-none">
            <img
              src="/images/footer/grapes.png"
              alt=""
              aria-hidden="true"
              className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[240px] h-auto object-contain select-none"
              style={{
                filter: "grayscale(1) brightness(0.12) contrast(1.2)",
              }}
            />
          </div>

          {/* First Line: Astra (High-contrast Serif Italic) */}
          <span className="font-serif italic font-normal text-[clamp(4.2rem,15vw,15.5rem)] text-[var(--ink)] block tracking-tight">
            Astra
          </span>

          {/* Second Line: Floww (Monumental Bold Serif, interlocking with -mt) */}
          <span className="font-serif font-black text-[clamp(4.2rem,15vw,15.5rem)] text-[var(--ink)] block tracking-tight -mt-[0.22em] sm:-mt-[0.24em] -ml-[0.04em]">
            Floww
          </span>

          {/* Squiggle 4: Vertical wavy '3' located to the right of Floww, below grapes */}
          <svg
            className="absolute bottom-[4%] sm:bottom-[6%] -right-[8%] sm:-right-[11%] md:-right-[13%] w-6 sm:w-8 md:w-10 h-10 sm:h-14 text-[var(--signal-pink)] pointer-events-none z-20 opacity-90"
            viewBox="0 0 35 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          >
            <path d="M 8 12 C 22 16, 22 30, 10 33 C 24 37, 24 53, 8 55" />
          </svg>
        </div>
      </div>

      {/* ==============================================================
          LOWER ZONE: Divider Line + Copyright Studio Meta + Back to Top + Corner Bottle
          ============================================================== */}
      <div className="relative w-full border-t border-[var(--azure-white)]">
        <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative">
          {/* Left Column: Copyright & Studio Legal Meta */}
          <div className="flex flex-col text-left z-10">
            <span className="font-mono text-[11px] sm:text-xs text-[var(--ink-muted)] block tracking-normal">
              Global Remote &copy; 2026
            </span>
            <h3 className="font-sans font-black text-sm sm:text-base md:text-lg text-[var(--ink)] tracking-wider uppercase mt-1 mb-1">
              ASTRAFLOWW, INC.
            </h3>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[var(--ink-muted)]">
              <Link
                href="/privacy"
                className="hover:text-[var(--signal-pink)] transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              <span>/</span>
              <Link
                href="/terms"
                className="hover:text-[var(--signal-pink)] transition-colors underline-offset-2 hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Right Column: Hand-drawn looping "BACK TO TOP" button (spaced generously from the bottle) */}
          <div className="flex items-center z-10 mr-28 sm:mr-36 md:mr-44 lg:mr-52">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2.5 sm:gap-3 text-[var(--ink)] hover:text-[var(--signal-pink)] transition-colors cursor-pointer select-none"
              aria-label="Scroll back to top"
            >
              {/* Hand-drawn curving looping arrow matching reference mockup */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:-translate-y-1 duration-200"
              >
                <path d="M 12 28 C 8 20, 8 10, 20 10 C 28 10, 32 18, 26 24 C 20 30, 16 32, 22 22 L 26 8" />
                <polyline points="20 12 26 7 31 12" />
              </svg>
              <div className="flex flex-col text-left leading-none font-sans font-black text-[11px] sm:text-xs uppercase tracking-tight">
                <span>BACK</span>
                <span className="mt-0.5">TO TOP</span>
              </div>
            </button>
          </div>
        </div>

        {/* 5. Bottle Illustration (bottle.png): Pushed completely to the bottom-right corner and tilted */}
        <div className="absolute right-[-10px] sm:right-[-5px] md:right-1 lg:right-3 bottom-[-5px] sm:bottom-0 pointer-events-none z-20">
          <img
            src="/images/footer/bottle.png"
            alt=""
            aria-hidden="true"
            className="h-[170px] sm:h-[220px] md:h-[270px] lg:h-[310px] w-auto object-contain object-bottom -rotate-[18deg] transform origin-bottom-right select-none"
            style={{
              filter: "grayscale(1) brightness(0.12) contrast(1.2)",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
