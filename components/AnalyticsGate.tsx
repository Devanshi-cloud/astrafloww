"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const CONSENT_KEY = "astrafloww_cookie_consent";

interface PageViewTrackerProps {
  hasConsent: boolean;
}

function PageViewTracker({ hasConsent }: PageViewTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!hasConsent) return;

    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: Function }).gtag === "function") {
      const search = searchParams?.toString();
      const url = pathname + (search ? `?${search}` : "");
      (window as unknown as { gtag: Function }).gtag("event", "page_view", {
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
    const consent = localStorage.getItem(CONSENT_KEY);
    setHasConsent(consent === "accepted");

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setHasConsent(customEvent?.detail === "accepted");
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
