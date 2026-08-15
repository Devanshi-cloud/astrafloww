"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/astrafloww" },
  { label: "LinkedIn", href: "https://linkedin.com/company/astrafloww" },
  { label: "Twitter / X", href: "https://twitter.com/astrafloww" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--ink)",
        color: "var(--cloud-white)",
        borderTop: "2px solid var(--ink)",
      }}
    >
      {/* Main footer grid */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "-0.02em",
              textTransform: "lowercase",
              marginBottom: "0.75rem",
              color: "var(--cloud-white)",
            }}
          >
            astrafloww
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              maxWidth: "220px",
            }}
          >
            Digital Marketing &amp; Creative Solutions. We build, market, and
            scale.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p
            className="text-uppercase-dense"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--signal-pink)",
              marginBottom: "1rem",
            }}
          >
            Navigate
          </p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 120ms",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--signal-pink)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--signal-pink)",
              marginBottom: "1rem",
            }}
          >
            Follow
          </p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 120ms",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--signal-pink)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                  }
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        >
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            &copy; {year} AstraFloww. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            digital marketing &amp; creative solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
