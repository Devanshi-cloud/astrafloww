"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919654602750";
const PREFILLED_MESSAGE = encodeURIComponent(
  "Hi, I'd like to inquire about your services at AstraFloww!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`;

export default function WhatsAppCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "var(--signal-green)",
        border: "2px solid var(--ink)",
        padding: "2.5rem",
        boxShadow: hovered ? "2px 2px 0 var(--ink)" : "6px 6px 0 var(--ink)",
        transform: hovered ? "translate(4px, 4px)" : "none",
        transition: "transform 80ms, box-shadow 80ms",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* WhatsApp icon - pixel art */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        style={{ imageRendering: "pixelated" }}
      >
        <rect x="8" y="4" width="24" height="28" fill="var(--ink)" />
        <rect x="4" y="8" width="32" height="20" fill="var(--ink)" />
        <rect x="8" y="32" width="4" height="4" fill="var(--ink)" />
        <rect x="12" y="36" width="16" height="4" fill="var(--ink)" />
        <rect x="12" y="14" width="16" height="4" fill="var(--signal-green)" />
        <rect x="12" y="20" width="10" height="4" fill="var(--signal-green)" />
      </svg>

      <div>
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--ink)",
            marginBottom: "0.5rem",
          }}
        >
          Chat on WhatsApp
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            lineHeight: 1.6,
            color: "rgba(17,17,17,0.7)",
          }}
        >
          Prefer a quick chat? Ping us on WhatsApp and we&apos;ll get back to
          you fast.
        </p>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        id="whatsapp-cta-button"
        style={{
          backgroundColor: "var(--ink)",
          color: "var(--cloud-white)",
          border: "2px solid var(--ink)",
          alignSelf: "flex-start",
        }}
      >
        Open WhatsApp &rarr;
      </a>
    </div>
  );
}
