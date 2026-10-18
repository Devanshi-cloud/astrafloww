interface SpaceshipProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

/**
 * Pixel-art spaceship SVG — grid-snapped paths on a 24×24 grid.
 * Used as the hero mascot and recurring motif.
 */
export default function Spaceship({
  size = 120,
  color = "var(--ink)",
  accentColor = "var(--signal-pink)",
  className = "",
}: SpaceshipProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pixel art spaceship"
      role="img"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Body — nose cone */}
      <rect x="40" y="4" width="16" height="8" fill={color} />
      <rect x="36" y="12" width="24" height="8" fill={color} />
      <rect x="32" y="20" width="32" height="8" fill={color} />
      {/* Cockpit window */}
      <rect x="40" y="20" width="16" height="8" fill={accentColor} />
      <rect x="44" y="22" width="8" height="4" fill="var(--cloud-white)" />
      {/* Main hull */}
      <rect x="28" y="28" width="40" height="16" fill={color} />
      {/* Side wings */}
      <rect x="8" y="32" width="20" height="8" fill={color} />
      <rect x="8" y="36" width="8" height="8" fill={accentColor} />
      <rect x="68" y="32" width="20" height="8" fill={color} />
      <rect x="80" y="36" width="8" height="8" fill={accentColor} />
      {/* Engine block */}
      <rect x="32" y="44" width="32" height="8" fill={color} />
      {/* Engine nozzles */}
      <rect x="32" y="52" width="8" height="8" fill={accentColor} />
      <rect x="44" y="52" width="8" height="8" fill={accentColor} />
      <rect x="56" y="52" width="8" height="8" fill={accentColor} />
      {/* Thrusters flame */}
      <rect x="34" y="60" width="4" height="8" fill="var(--azure-white)" />
      <rect x="46" y="60" width="4" height="8" fill="var(--azure-white)" />
      <rect x="58" y="60" width="4" height="8" fill="var(--azure-white)" />
      <rect x="36" y="68" width="4" height="4" fill={accentColor} />
      <rect x="48" y="68" width="4" height="4" fill={accentColor} />
      <rect x="60" y="68" width="4" height="4" fill={accentColor} />
      {/* Star accents */}
      <rect x="16" y="16" width="4" height="4" fill={accentColor} />
      <rect x="76" y="12" width="4" height="4" fill={accentColor} />
      <rect x="4" y="48" width="4" height="4" fill={color} />
      <rect x="88" y="44" width="4" height="4" fill={color} />
    </svg>
  );
}
