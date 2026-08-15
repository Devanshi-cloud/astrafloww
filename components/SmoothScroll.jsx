"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const onChange = (event) => {
      setShouldReduceMotion(event.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
