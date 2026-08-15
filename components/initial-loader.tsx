"use client";

import { useEffect, useState } from "react";
import PixelLoader from "@/components/PixelLoader";

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the pixel loader for the full 3-second sequence on first visit
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return <PixelLoader label="LOADING..." />;
}
