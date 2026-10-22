"use client";

import { useEffect, useState, ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: ReactNode;
}

function HashScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        if (lenis) {
          lenis.scrollTo(hash, { offset: 0, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // If there is an active hash on mount or path change, scroll to it
    const timer1 = setTimeout(scrollToHash, 60);
    const timer2 = setTimeout(scrollToHash, 300);

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setShouldReduceMotion(event.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  if (shouldReduceMotion) {
    return (
      <>
        <HashScrollHandler />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        anchors: true,
      }}
    >
      <HashScrollHandler />
      {children}
    </ReactLenis>
  );
}

