"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[var(--paper)] text-[var(--ink)] pt-12 sm:pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-[var(--azure-white)] select-none overflow-hidden">
      <div className="max-w-[1640px] mx-auto">
        {/* ==============================================================
            EXPRESSIVE TYPOGRAPHY FOOTER (Purpose Talent Style)
            Monumental interlocking "Astra Floww" with lavender squiggles
            ============================================================== */}
        <div className="relative w-full py-12 sm:py-20 select-none overflow-hidden">
          {/* Fluid Brand Lavender Decorative Squiggles & Loops (Exact Reference Match) */}
          <svg
            className="absolute top-12 left-[12%] sm:left-[18%] w-14 sm:w-20 h-14 sm:h-20 text-[var(--signal-pink)] pointer-events-none z-10 opacity-90"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 25 75 C 15 45, 45 35, 45 60 C 45 80, 75 75, 75 45" />
          </svg>

          <svg
            className="absolute bottom-16 sm:bottom-24 left-[4%] sm:left-[8%] w-20 sm:w-28 h-20 sm:h-28 text-[var(--signal-pink)] pointer-events-none z-10 opacity-85"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          >
            <path d="M 15 80 Q 40 95, 50 65 T 35 35 T 65 45 T 85 75" />
          </svg>

          <svg
            className="absolute top-16 right-[24%] sm:right-[32%] w-16 sm:w-24 h-12 sm:h-16 text-[var(--signal-pink)] pointer-events-none z-10 opacity-90"
            viewBox="0 0 100 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          >
            <path d="M 10 30 Q 30 10, 50 30 T 90 30" />
          </svg>

          <svg
            className="absolute bottom-14 right-[6%] sm:right-[12%] w-16 sm:w-24 h-24 sm:h-32 text-[var(--signal-pink)] pointer-events-none z-10 opacity-85"
            viewBox="0 0 80 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          >
            <path d="M 30 15 C 70 20, 60 60, 30 60 C 70 65, 70 100, 30 110" />
          </svg>

          {/* Monumental Interlocking Typography */}
          <div className="flex flex-col items-center justify-center leading-[0.8] text-center tracking-tight">
            <span className="font-serif italic font-normal text-[clamp(4.5rem,16vw,17rem)] text-[var(--ink)] block transform -translate-x-3 sm:-translate-x-12">
              Astra
            </span>
            <span className="font-serif font-black text-[clamp(4.5rem,16vw,17rem)] text-[var(--ink)] block transform translate-x-3 sm:translate-x-12 -mt-[0.2em]">
              Floww
            </span>
          </div>
        </div>

        {/* ==============================================================
            ZONE 3: BOTTOM ACTIONS, TACTILE PILLS & BACK TO TOP
            (Matching Reference Images 1 & 2)
            ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 pb-4 border-t border-[var(--azure-white)]">
          {/* Left Column: Copyright & Studio Meta */}
          <div className="md:col-span-4 flex flex-col justify-end text-left order-2 md:order-1">
            <span className="font-mono text-xs text-[var(--ink-muted)] block mb-1">
              Global Remote &copy; 2026
            </span>
            <h3 className="font-sans font-black text-xl sm:text-2xl text-[var(--ink)] tracking-tight uppercase leading-none">
              ASTRAFLOWW, INC.
            </h3>
            <div className="flex items-center gap-4 mt-3 text-xs font-mono text-[var(--ink-muted)]">
              <Link href="/privacy" className="hover:text-[var(--signal-pink)] transition-colors">
                Privacy Policy
              </Link>
              <span>/</span>
              <Link href="/terms" className="hover:text-[var(--signal-pink)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Center Column: Stacked Tactile Action Pills (Direct Reference Match) */}
          <div className="md:col-span-4 flex flex-col items-center gap-3 order-1 md:order-2">
            <Link
              href="/contact?type=enterprise"
              className="group w-full max-w-[280px] p-2 pr-5 rounded-2xl bg-[var(--cloud-white)] hover:bg-white border border-[var(--azure-white)] shadow-xs hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--signal-pink)] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
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
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <span className="font-sans font-bold text-sm text-[var(--ink)] group-hover:text-[var(--signal-pink)] transition-colors">
                For companies
              </span>
            </Link>

            <Link
              href="/contact?type=startup"
              className="group w-full max-w-[280px] p-2 pr-5 rounded-2xl bg-[var(--cloud-white)] hover:bg-white border border-[var(--azure-white)] shadow-xs hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--signal-pink)] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
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
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <span className="font-sans font-bold text-sm text-[var(--ink)] group-hover:text-[var(--signal-pink)] transition-colors">
                For founders
              </span>
            </Link>
          </div>

          {/* Right Column: Hand-Drawn Curving Looping "BACK TO TOP" Button */}
          <div className="md:col-span-4 flex justify-start md:justify-end order-3">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 select-none text-[var(--ink)] hover:text-[var(--signal-pink)] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              {/* Hand-drawn curving looping arrow matching reference */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:-translate-y-1.5 duration-300"
              >
                <path d="M 12 28 C 8 20, 8 10, 20 10 C 28 10, 32 18, 26 24 C 20 30, 16 32, 22 22 L 26 8" />
                <polyline points="20 12 26 7 31 12" />
              </svg>
              <div className="flex flex-col text-left leading-none font-sans font-black text-sm uppercase tracking-tight">
                <span>BACK</span>
                <span className="mt-0.5">TO TOP</span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
