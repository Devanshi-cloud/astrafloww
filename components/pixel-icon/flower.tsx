interface FlowerProps {
  size?: number;
  color?: string;
  centerColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PixelFlower({
  size = 48,
  color = "var(--cloud-white)",
  centerColor = "var(--signal-pink)",
  className = "",
  style,
}: FlowerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ imageRendering: "pixelated", ...style }}
    >
      {/* Petals */}
      <rect x="18" y="2" width="12" height="10" fill={color} />
      <rect x="18" y="36" width="12" height="10" fill={color} />
      <rect x="2" y="18" width="10" height="12" fill={color} />
      <rect x="36" y="18" width="10" height="12" fill={color} />
      {/* Diagonal petals */}
      <rect x="6" y="6" width="8" height="8" fill={color} />
      <rect x="34" y="6" width="8" height="8" fill={color} />
      <rect x="6" y="34" width="8" height="8" fill={color} />
      <rect x="34" y="34" width="8" height="8" fill={color} />
      {/* Center */}
      <rect x="16" y="16" width="16" height="16" fill={centerColor} />
      <rect x="20" y="20" width="8" height="8" fill={color} />
    </svg>
  );
}
