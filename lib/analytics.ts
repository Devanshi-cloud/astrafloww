declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const CONSENT_KEY = "astrafloww_cookie_consent";

/**
 * Checks if user has given consent to analytics cookies.
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

/**
 * Send a custom event to Google Analytics 4 if consent is granted.
 */
export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean | undefined | null> = {}
) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
