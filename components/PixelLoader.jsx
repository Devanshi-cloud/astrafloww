"use client";

import { useEffect, useState, useRef } from "react";

const TOKENS = {
  paper: "#F2F2F0",
  ink: "#111111",
  signalPink: "#F0299B",
  signalGreen: "#3DBE3D",
  cloudWhite: "#FFFFFF",
  gridLine: "#DADAD8",
};

const TOTAL_SEGMENTS = 12;
const ANIMATION_DURATION = 3000; // 3.0 seconds

export default function PixelLoader({ label = "LOADING..." }) {
  const [activeSegments, setActiveSegments] = useState(0);
  const [percent, setPercent] = useState(0);
  const reqRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(1, elapsed / ANIMATION_DURATION);

      const segments = Math.min(
        TOTAL_SEGMENTS,
        Math.floor(progress * TOTAL_SEGMENTS)
      );
      setActiveSegments(segments);
      setPercent(Math.min(100, Math.floor(progress * 100)));

      if (progress < 1) {
        reqRef.current = requestAnimationFrame(animate);
      }
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqRef.current) {
        cancelAnimationFrame(reqRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 pixel-grid-bg"
      style={{
        backgroundColor: TOKENS.paper,
      }}
    >
      {/* Neo-brutalist Window Modal */}
      <div
        className="w-full max-w-md border-[3px] border-[var(--ink)] bg-[var(--ink)]"
        style={{
          borderColor: TOKENS.ink,
          backgroundColor: TOKENS.ink,
          boxShadow: `8px 8px 0px ${TOKENS.ink}`,
        }}
      >
        {/* Pink Title Bar */}
        <div
          className="flex items-center justify-between px-3 py-2 border-b-[3px] select-none"
          style={{
            backgroundColor: TOKENS.signalPink,
            borderColor: TOKENS.ink,
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 border-[2px]"
              style={{
                backgroundColor: TOKENS.cloudWhite,
                borderColor: TOKENS.ink,
              }}
            />
            <span
              className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cloud-white)]"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: TOKENS.cloudWhite,
              }}
            >
              astrafloww.exe
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              tabIndex={-1}
              aria-label="Minimize window"
              className="w-4 h-4 border-[2px] flex items-center justify-center text-[9px] font-bold leading-none cursor-default"
              style={{
                backgroundColor: TOKENS.paper,
                borderColor: TOKENS.ink,
                color: TOKENS.ink,
              }}
            >
              _
            </button>
            <button
              type="button"
              tabIndex={-1}
              aria-label="Close window"
              className="w-4 h-4 border-[2px] flex items-center justify-center text-[9px] font-bold leading-none cursor-default"
              style={{
                backgroundColor: TOKENS.paper,
                borderColor: TOKENS.ink,
                color: TOKENS.ink,
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Ink-Black Window Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Label Headline & Percentage */}
          <div className="flex items-center justify-between">
            <h2
              className="text-lg md:text-xl font-bold uppercase tracking-wider"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: TOKENS.cloudWhite,
              }}
            >
              {label}
            </h2>
            <span
              className="font-mono text-xs font-semibold"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: TOKENS.signalGreen,
              }}
            >
              [{percent.toString().padStart(3, " ")}%]
            </span>
          </div>

          {/* 12-Segment Progress Bar */}
          <div
            className="p-2 border-[2px] bg-[#1a1a1a]"
            style={{
              borderColor: TOKENS.gridLine,
            }}
          >
            <div className="grid grid-cols-12 gap-1.5 h-6">
              {Array.from({ length: TOTAL_SEGMENTS }).map((_, index) => {
                const isActive = index < activeSegments;
                return (
                  <div
                    key={index}
                    className="h-full transition-colors duration-75"
                    style={{
                      backgroundColor: isActive
                        ? TOKENS.signalGreen
                        : "rgba(255, 255, 255, 0.08)",
                      border: isActive
                        ? `1px solid ${TOKENS.cloudWhite}`
                        : "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: isActive
                        ? `inset 0 0 0 1px ${TOKENS.signalGreen}`
                        : "none",
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* System Status Subtitle */}
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              SYS.INITIALIZE_ROUTE
            </span>
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: TOKENS.signalPink,
              }}
            >
              PLEASE WAIT...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
