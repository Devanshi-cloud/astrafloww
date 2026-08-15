import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import SectionDivider from "@/components/section-divider";
import PixelStar from "@/components/pixel-icon/star";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AstraFloww. Send us an inquiry and we'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero header */}
      <section
        className="pink-section"
        style={{
          paddingTop: "calc(60px + 4rem)",
          paddingBottom: "0",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <PixelStar size={8} color="rgba(255,255,255,0.6)" />
            reach out
          </p>
          <h1
            className="hero-headline"
            style={{
              color: "var(--cloud-white)",
              marginBottom: "4rem",
              maxWidth: "700px",
            }}
          >
            Let&apos;s Build
            <br />
            Something
            <br />
            Together.
          </h1>
        </div>
        <SectionDivider
          direction="down"
          fill="var(--paper)"
          background="var(--signal-pink)"
        />
      </section>

      {/* Main content */}
      <section
        className="pixel-grid-bg"
        style={{ padding: "5rem 1.5rem 6rem" }}
      >
        <div
          className="max-w-7xl mx-auto grid gap-12 items-start"
          style={{ gridTemplateColumns: "2fr 1fr" }}
        >
          {/* Left: Form */}
          <div>
            <div style={{ marginBottom: "2.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--signal-pink)",
                  marginBottom: "0.5rem",
                }}
              >
                send us a message
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                Book a Session
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Right: info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Quick info block */}
            <div
              style={{
                border: "2px solid var(--ink)",
                padding: "1.5rem",
                backgroundColor: "var(--cloud-white)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--signal-pink)",
                  marginBottom: "1rem",
                }}
              >
                quick info
              </p>
              {[
                { label: "Response time", value: "Within 24 hours" },
                { label: "Working hours", value: "Mon–Sat, 10am–7pm IST" },
                { label: "Based in", value: "India · Serving worldwide" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.625rem 0",
                    borderBottom: "1px solid var(--grid-line)",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      color: "rgba(17,17,17,0.5)",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "12px",
                      color: "var(--ink)",
                      fontWeight: 600,
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Email contact block */}
            <div
              style={{
                border: "2px solid var(--ink)",
                padding: "1.5rem",
                backgroundColor: "var(--ink)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--signal-pink)",
                  marginBottom: "0.75rem",
                }}
              >
                email us directly
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                }}
              >
                Prefer to email directly? Drop us a line and we&apos;ll get back
                to you within 24 hours.
              </p>
              <a
                href="mailto:hello@astrafloww.in"
                id="contact-email-direct"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  color: "var(--cloud-white)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                hello@astrafloww.in →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
