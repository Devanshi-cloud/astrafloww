"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Project {
  name: string;
  client: string;
  result: string;
  tag: string;
  color: string;
}

const PROJECTS: Project[] = [
  {
    name: "Zsure",
    client: "zsure.in",
    result:
      "Detect deepfakes, voice clones, and AI impersonation before fraud spreads.",
    tag: "AI Automation",
    color: "var(--signal-pink)",
  },
  {
    name: "Hypotenuse Analytics",
    client: "hypotenuseanalytics.com",
    result:
      "End-to-end surveillance systems — intelligent monitoring built for scale.",
    tag: "Digital Experience",
    color: "var(--ink)",
  },
  {
    name: "OIA — Bennett University",
    client: "Bennett University",
    result:
      "Official international affairs portal connecting students to global opportunities.",
    tag: "Brand Systems",
    color: "var(--signal-pink)",
  },
  {
    name: "Drivers Australia",
    client: "driversaustralia.com.au",
    result:
      "A dedicated drivers job portal — connecting professionals to opportunities across Australia.",
    tag: "Search Authority",
    color: "var(--ink)",
  },
];

export default function ClientShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="work"
      ref={ref}
      className="pixel-grid-bg py-12 md:py-24 px-4 sm:px-6"
      style={{
        borderTop: "2px solid var(--ink)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--signal-pink)",
                marginBottom: "0.5rem",
              }}
            >
              selected work
            </p>
            <h2 className="section-headline" style={{ color: "var(--ink)" }}>
              What We&apos;ve
              <br />
              Built.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              color: "rgba(17,17,17,0.5)",
              fontStyle: "italic",
              maxWidth: "220px",
              textAlign: "right",
            }}
          >
            Real work. Real results.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[var(--ink)]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`p-6 sm:p-8 bg-[var(--cloud-white)] flex flex-col gap-4 border-[var(--ink)] ${
                /* Mobile: horizontal dividers between stacked cards */
                i < PROJECTS.length - 1 ? "border-b-2" : "border-b-0"
              } ${
                /* Tablet md (2 cols): right divider on odd items, bottom divider on first row */
                i % 2 === 0 ? "md:border-r-2" : "md:border-r-0"
              } ${
                i < 2 ? "md:border-b-2" : "md:border-b-0"
              } ${
                /* Desktop lg (4 cols): right divider on items 0-2, no bottom divider */
                i < PROJECTS.length - 1 ? "lg:border-r-2" : "lg:border-r-0"
              } lg:border-b-0`}
            >
              {/* Tag */}
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "9px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--cloud-white)",
                  backgroundColor: project.color,
                  padding: "3px 8px",
                  alignSelf: "flex-start",
                }}
              >
                {project.tag}
              </span>

              {/* Title */}
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                {project.name}
              </p>

              {/* Client */}
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "rgba(17,17,17,0.45)",
                  margin: 0,
                }}
              >
                {project.client}
              </p>

              {/* Result */}
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12px",
                  lineHeight: 1.6,
                  color: "rgba(17,17,17,0.7)",
                  margin: 0,
                  borderLeft: `3px solid ${project.color}`,
                  paddingLeft: "12px",
                }}
              >
                {project.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
