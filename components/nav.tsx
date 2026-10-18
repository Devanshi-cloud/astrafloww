"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Who We Are", href: "/#who-we-are" },
  { label: "Services For", href: "/#services-for" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(244, 248, 252, 0.92)",
        backdropFilter: "blur(4px)",
        borderBottom: "1px solid var(--grid-line)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ height: "60px" }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-ink no-underline"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            letterSpacing: "-0.02em",
            textTransform: "lowercase",
            color: "var(--ink)",
          }}
        >
          astrafloww
        </Link>

        {/* Desktop nav links */}
        <ul
          className="hidden md:flex items-center gap-8 list-none m-0 p-0"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "lowercase",
                  color: "var(--ink)",
                  textDecoration: "none",
                  transition: "color 120ms",
                }}
                className="hover:text-signal-pink"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--signal-pink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--ink)")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: "11px", padding: "0.5rem 1.25rem" }}
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-transparent border-0 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--ink)",
              transition: "transform 200ms",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--ink)",
              transition: "opacity 200ms",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--ink)",
              transition: "transform 200ms",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 py-6"
          style={{
            backgroundColor: "var(--paper)",
            borderTop: "1px solid var(--grid-line)",
          }}
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-ink hover:text-signal-pink transition-colors"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "lowercase",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="btn-primary w-full text-center justify-center"
                onClick={() => setOpen(false)}
                style={{ fontSize: "12px", padding: "0.75rem 1.25rem" }}
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
