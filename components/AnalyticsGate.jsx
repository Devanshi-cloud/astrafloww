"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const CONSENT_KEY = "astrafloww_cookie_consent";

function PageViewTracker({ hasConsent }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial page load duplicate because GoogleAnalytics automatically fires page_view on load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!hasConsent) return;

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const search = searchParams?.toString();
      const url = pathname + (search ? `?${search}` : "");
      window.gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams, hasConsent]);

  return null;
}

export default function AnalyticsGate() {
  const [hasConsent, setHasConsent] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Check initial consent from localStorage
    const consent = localStorage.getItem(CONSENT_KEY);
    setHasConsent(consent === "accepted");

    // Listen for real-time consent changes dispatched by CookieConsent
    const handleConsentChange = (event) => {
      const status = event?.detail;
      setHasConsent(status === "accepted");
    };

    window.addEventListener("cookie-consent-change", handleConsentChange);
    return () => {
      window.removeEventListener("cookie-consent-change", handleConsentChange);
    };
  }, []);

  if (!gaId || !hasConsent) {
    return (
      <Suspense fallback={null}>
        <PageViewTracker hasConsent={false} />
      </Suspense>
    );
  }

  return (
    <>
      <GoogleAnalytics gaId={gaId} />
      <Suspense fallback={null}>
        <PageViewTracker hasConsent={true} />
      </Suspense>
    </>
  );
}
