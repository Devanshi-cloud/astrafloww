interface SectionDividerProps {
  /** Which side the teeth point: 'down' means jagged bottom, 'up' means jagged top */
  direction?: "down" | "up";
  /** Fill color of the INCOMING section (below the divider for 'down', above for 'up') */
  fill?: string;
  /** Background color behind the SVG (the outgoing section color) */
  background?: string;
  className?: string;
}

/**
 * Pixel/staircase jagged divider between sections.
 * Renders a 1200×40 SVG with a staircase pattern.
 */
export default function SectionDivider({
  direction = "down",
  fill = "var(--signal-pink)",
  background = "var(--paper)",
  className = "",
}: SectionDividerProps) {
  // Staircase path — 10 steps across 1200px wide, 40px tall
  // Each step is 120px wide × 20px tall → 2 sub-steps of 60×20 then 60×20
  const stepW = 80;
  const stepH = 20;
  const steps = 15;
  const totalW = stepW * steps; // 1200
  const totalH = stepH * 2; // 40

  let d = `M0,${totalH} `;
  for (let i = 0; i < steps; i++) {
    const x = i * stepW;
    const yTop = i % 2 === 0 ? 0 : stepH;
    d += `L${x},${yTop} L${x + stepW},${yTop} `;
  }
  d += `L${totalW},${totalH} Z`;

  const upD = `M0,0 `
    + Array.from({ length: steps }, (_, i) => {
        const x = i * stepW;
        const yBot = i % 2 === 0 ? totalH : stepH;
        return `L${x},${yBot} L${x + stepW},${yBot} `;
      }).join("")
    + `L${totalW},0 Z`;

  return (
    <div
      className={className}
      style={{
        lineHeight: 0,
        backgroundColor: background,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        preserveAspectRatio="none"
        width="100%"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={direction === "down" ? d : upD} fill={fill} />
      </svg>
    </div>
  );
}
