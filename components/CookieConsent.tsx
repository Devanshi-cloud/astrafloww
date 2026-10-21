"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const CONSENT_KEY = "astrafloww_cookie_consent";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cookie-consent-change", { detail: "accepted" })
      );
    }
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cookie-consent-change", { detail: "rejected" })
      );
    }
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          aria-describedby="cookie-consent-desc"
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 select-none"
        >
          <div className="glass-panel p-5 rounded-2xl border border-[var(--azure-white)] shadow-2xl bg-[var(--paper)]/95 backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--signal-pink)] mt-1.5 flex-shrink-0 animate-pulse" />
              <div>
                <p
                  id="cookie-consent-desc"
                  className="text-xs text-[var(--ink)] leading-relaxed m-0 font-sans"
                >
                  We use cookies and telemetry to elevate your browsing experience and analyze performance. Read our{" "}
                  <Link
                    href="/privacy"
                    className="font-medium underline hover:text-[var(--signal-pink)] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <button
                    type="button"
                    onClick={handleReject}
                    className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-[var(--ink)] hover:bg-[var(--azure-white)]/40 transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    type="button"
                    onClick={handleAccept}
                    className="btn-pill-primary text-xs py-1.5 px-4"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
