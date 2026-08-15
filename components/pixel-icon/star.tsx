interface StarProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PixelStar({
  size = 16,
  color = "var(--signal-pink)",
  className = "",
  style,
  ...rest
}: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ imageRendering: "pixelated", ...style }}
      {...rest}
    >
      <rect x="6" y="0" width="4" height="4" fill={color} />
      <rect x="6" y="12" width="4" height="4" fill={color} />
      <rect x="0" y="6" width="4" height="4" fill={color} />
      <rect x="12" y="6" width="4" height="4" fill={color} />
      <rect x="4" y="4" width="8" height="8" fill={color} />
    </svg>
  );
}
