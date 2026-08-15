interface CloudProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function PixelCloud({
  size = 64,
  color = "var(--ink)",
  className = "",
}: CloudProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.625)}
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="16" y="24" width="32" height="8" fill={color} />
      <rect x="8" y="16" width="48" height="8" fill={color} />
      <rect x="12" y="8" width="16" height="8" fill={color} />
      <rect x="36" y="8" width="16" height="8" fill={color} />
      <rect x="20" y="4" width="8" height="4" fill={color} />
      <rect x="40" y="4" width="8" height="4" fill={color} />
      <rect x="8" y="24" width="8" height="4" fill={color} />
      <rect x="48" y="24" width="8" height="4" fill={color} />
      <rect x="16" y="32" width="32" height="4" fill={color} />
    </svg>
  );
}
