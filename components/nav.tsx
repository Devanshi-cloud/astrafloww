"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  return (
    <header className="w-full bg-[var(--paper)] py-6 px-6 sm:px-12 md:px-16 select-none border-b border-[var(--azure-white)]/60">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Minimal geometric logo icon */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.history.pushState(null, "", "/");
              if (lenis) {
                lenis.scrollTo(0, { duration: 1.2 });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }
          }}
          className="flex items-center gap-3 no-underline group"
        >
          <div className="w-7 h-7 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--ink)] transition-transform group-hover:scale-105"
            >
              <polygon points="4 2 20 12 4 22 8 12" fill="currentColor" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-[var(--ink)] hidden sm:inline">
            astrafloww<span className="text-[var(--signal-pink)]">.</span>
          </span>
        </Link>

        {/* Right side navigation links and Contact button */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 text-[13px] font-mono uppercase tracking-wider text-[var(--ink)]/75">
            <Link
              href="/projects"
              className="hover:text-[var(--signal-pink)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--signal-pink)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-[var(--signal-pink)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="hover:text-[var(--signal-pink)] transition-colors"
            >
              Solutions
            </Link>
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--signal-pink)] text-[var(--cloud-white)] text-[13px] font-mono uppercase tracking-wider font-semibold hover:bg-[#6c5ce7] transition-all shadow-sm"
          >
            <span>Contact</span>
            <span className="text-sm">&rarr;</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <span
            className={`w-5 h-0.5 bg-[var(--ink)] transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--ink)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--ink)] transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pt-4 border-t border-[var(--azure-white)] flex flex-col gap-4 text-xs font-mono uppercase tracking-wider"
          >
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--signal-pink)]"
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--signal-pink)]"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--signal-pink)]"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              onClick={() => setOpen(false)}
              className="text-[var(--ink)] hover:text-[var(--signal-pink)]"
            >
              Solutions
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[var(--signal-pink)] text-[var(--cloud-white)] font-semibold"
            >
              <span>Contact</span>
              <span>&rarr;</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
