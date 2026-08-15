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
          initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 select-none"
          style={{
            backgroundColor: "var(--paper)",
            borderTop: "3px solid var(--ink)",
            boxShadow: "0 -4px 16px rgba(17, 17, 17, 0.08)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Copy */}
            <p
              id="cookie-consent-desc"
              className="text-xs sm:text-sm text-[var(--ink)] m-0"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                lineHeight: 1.5,
              }}
            >
              We use cookies to improve your experience. Read our{" "}
              <Link
                href="/privacy"
                className="font-semibold underline hover:text-[var(--signal-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ink)]"
                style={{
                  color: "var(--ink)",
                  textUnderlineOffset: "3px",
                }}
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end flex-shrink-0">
              <button
                type="button"
                onClick={handleReject}
                className="btn-outline text-xs px-4 py-2 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[var(--ink)] focus:ring-offset-2"
                style={{
                  fontSize: "11px",
                  padding: "0.5rem 1.25rem",
                  minHeight: "38px",
                }}
              >
                Reject
              </button>

              <button
                type="button"
                onClick={handleAccept}
                className="btn-primary text-xs px-5 py-2 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[var(--ink)] focus:ring-offset-2"
                style={{
                  fontSize: "11px",
                  padding: "0.5rem 1.5rem",
                  minHeight: "38px",
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
