"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 3, suffix: "+", label: "years experience" },
  { value: 50, suffix: "+", label: "completed projects" },
  { value: 10, suffix: "+", label: "countries served" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function StatBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="pixel-grid-bg"
      style={{
        borderTop: "2px solid var(--ink)",
        borderBottom: "2px solid var(--ink)",
        padding: "5rem 1.5rem",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid gap-0"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                textAlign: "center",
                padding: "2.5rem 1rem",
                borderRight:
                  i < STATS.length - 1 ? "2px solid var(--grid-line)" : "none",
              }}
            >
              <div style={{ marginBottom: "0.75rem" }}>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
