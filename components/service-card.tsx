"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  /** pink — pink background card; paper — paper background card */
  variant?: "pink" | "paper";
  href?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  variant = "pink",
  href,
}: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  const isPink = variant === "pink";

  const cardStyle: React.CSSProperties = {
    backgroundColor: isPink ? "var(--signal-pink)" : "var(--cloud-white)",
    color: isPink ? "var(--cloud-white)" : "var(--ink)",
    border: `2px solid var(--ink)`,
    padding: "2rem 1.5rem",
    cursor: href ? "pointer" : "default",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    transition: "transform 80ms, box-shadow 80ms",
    transform: hovered ? "translate(4px, 4px)" : "none",
    boxShadow: hovered
      ? "0 0 0 var(--ink)"
      : "6px 6px 0 var(--ink)",
  };

  const content = (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isPink
            ? "rgba(255,255,255,0.2)"
            : "var(--signal-pink)",
          border: `2px solid ${isPink ? "rgba(255,255,255,0.4)" : "var(--ink)"}`,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          margin: 0,
          color: isPink ? "var(--cloud-white)" : "var(--ink)",
        }}
      >
        {title}
      </p>
      {description && (
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            lineHeight: 1.6,
            color: isPink ? "rgba(255,255,255,0.8)" : "rgba(17,17,17,0.65)",
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        {content}
      </a>
    );
  }
  return content;
}
