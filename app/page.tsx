import Hero from "@/components/hero";
import StatBlock from "@/components/stat-block";
import ServiceCard from "@/components/service-card";
import ClientShowcase from "@/components/client-showcase";
import SectionDivider from "@/components/section-divider";
import PixelFlower from "@/components/pixel-icon/flower";
import PixelStar from "@/components/pixel-icon/star";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstraFloww — We don't just market. We amplify.",
  description:
    "AstraFloww is a digital marketing & creative tech agency. High-performance web development, search authority (SEO), AI automation, and brand systems that scale.",
  alternates: {
    canonical: "/",
  },
};

// Service-for audience segments
const AUDIENCE_SEGMENTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" fill="currentColor" />
        <rect x="14" y="2" width="8" height="8" fill="currentColor" />
        <rect x="2" y="14" width="8" height="8" fill="currentColor" />
        <rect x="14" y="14" width="8" height="8" fill="currentColor" />
      </svg>
    ),
    title: "Startups",
    description: "Launch fast, look premium, and scale with confidence.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="14" width="16" height="6" fill="currentColor" />
        <rect x="8" y="8" width="8" height="6" fill="currentColor" />
        <rect x="10" y="4" width="4" height="4" fill="currentColor" />
        <rect x="6" y="20" width="4" height="4" fill="currentColor" />
        <rect x="14" y="20" width="4" height="4" fill="currentColor" />
      </svg>
    ),
    title: "E-Commerce",
    description: "Convert browsers into buyers with high-performance stores.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="10" y="2" width="4" height="4" fill="currentColor" />
        <rect x="6" y="6" width="12" height="4" fill="currentColor" />
        <rect x="4" y="10" width="16" height="8" fill="currentColor" />
        <rect x="8" y="18" width="8" height="4" fill="currentColor" />
      </svg>
    ),
    title: "Local Businesses",
    description: "Dominate local search and grow your community presence.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" fill="currentColor" />
        <rect x="6" y="2" width="12" height="4" fill="currentColor" />
        <rect x="4" y="18" width="6" height="4" fill="currentColor" />
        <rect x="14" y="18" width="6" height="4" fill="currentColor" />
      </svg>
    ),
    title: "Enterprises",
    description: "Scalable digital infrastructure for complex organisations.",
  },
];

// Services we provide
const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="14" fill="currentColor" />
        <rect x="8" y="16" width="8" height="4" fill="currentColor" />
        <rect x="4" y="20" width="16" height="2" fill="currentColor" />
        <rect x="6" y="6" width="4" height="2" fill="white" />
        <rect x="12" y="6" width="6" height="2" fill="white" />
        <rect x="6" y="10" width="10" height="2" fill="white" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Fast, scalable websites and web apps built with modern frameworks. From landing pages to complex platforms.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="10" y="2" width="4" height="4" fill="currentColor" />
        <rect x="6" y="6" width="12" height="4" fill="currentColor" />
        <rect x="4" y="10" width="4" height="8" fill="currentColor" />
        <rect x="16" y="10" width="4" height="8" fill="currentColor" />
        <rect x="8" y="14" width="8" height="4" fill="currentColor" />
        <rect x="10" y="18" width="4" height="4" fill="currentColor" />
      </svg>
    ),
    title: "SEO",
    description:
      "Data-driven search optimisation. Rank higher, drive qualified traffic, and grow organic revenue.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" fill="currentColor" />
        <rect x="6" y="8" width="12" height="8" fill="white" />
        <rect x="8" y="10" width="8" height="4" fill="currentColor" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces that convert and delight. Research-backed, beautifully executed.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="8" y="2" width="8" height="4" fill="currentColor" />
        <rect x="4" y="6" width="16" height="4" fill="currentColor" />
        <rect x="2" y="10" width="20" height="6" fill="currentColor" />
        <rect x="6" y="16" width="4" height="4" fill="currentColor" />
        <rect x="14" y="16" width="4" height="4" fill="currentColor" />
        <rect x="4" y="20" width="16" height="2" fill="currentColor" />
      </svg>
    ),
    title: "AI Development",
    description:
      "Custom AI integrations, automation pipelines, and intelligent tooling that gives your team superpowers.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="8" width="20" height="8" fill="currentColor" />
        <rect x="6" y="4" width="4" height="4" fill="currentColor" />
        <rect x="14" y="4" width="4" height="4" fill="currentColor" />
        <rect x="6" y="16" width="4" height="4" fill="currentColor" />
        <rect x="14" y="16" width="4" height="4" fill="currentColor" />
        <rect x="10" y="6" width="4" height="2" fill="white" />
        <rect x="10" y="10" width="4" height="4" fill="white" />
      </svg>
    ),
    title: "DevOps",
    description:
      "CI/CD pipelines, cloud infrastructure, and deployment automation. Ship faster with confidence.",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Intro Blurb — pink full-bleed with jagged dividers */}
      <SectionDivider
        direction="down"
        fill="var(--signal-pink)"
        background="var(--paper)"
      />
      <section
        className="pink-section py-10 md:py-16 px-4 sm:px-6 relative"
      >
        <div
          className="max-w-4xl mx-auto flex items-center justify-center gap-6 md:gap-12"
        >
          <PixelFlower
            size={56}
            color="rgba(255,255,255,0.3)"
            centerColor="var(--cloud-white)"
            className="hidden md:block flex-shrink-0"
          />
          <p
            className="text-uppercase-dense"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
              lineHeight: 1.5,
              color: "var(--cloud-white)",
              letterSpacing: "0.06em",
              textAlign: "center",
              maxWidth: "640px",
            }}
          >
            We are a digital marketing &amp; creative agency obsessed with
            results. Bold ideas. Clean execution. Zero fluff.
          </p>
          <PixelFlower
            size={56}
            color="rgba(255,255,255,0.3)"
            centerColor="var(--cloud-white)"
            className="hidden md:block flex-shrink-0"
            style={{ transform: "rotate(45deg)" } as React.CSSProperties}
          />
        </div>
      </section>
      <SectionDivider
        direction="down"
        fill="var(--paper)"
        background="var(--signal-pink)"
      />

      {/* 3. Stats */}
      <StatBlock />

      {/* 4. Who We Are */}
      <section
        id="who-we-are"
        className="pixel-grid-bg py-12 md:py-24 px-4 sm:px-6"
        style={{
          borderTop: "2px solid var(--ink)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
            <div>
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
                about us
              </p>
              <h2 className="section-headline" style={{ color: "var(--ink)" }}>
                Who
                <br />
                We Are?
              </h2>
              <div
                style={{
                  width: "48px",
                  height: "4px",
                  backgroundColor: "var(--signal-pink)",
                  marginTop: "1.5rem",
                }}
              />
            </div>
            <div className="border-t-2 md:border-t-0 md:border-l-3 border-[var(--ink)] pt-6 md:pt-0 md:pl-8">
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--ink)",
                  marginBottom: "1.5rem",
                }}
              >
                AstraFloww is a digital marketing and creative agency built for
                businesses that refuse to be average. We combine sharp strategy
                with bold execution — from pixel-perfect interfaces to
                AI-powered automation.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--ink)",
                  opacity: 0.7,
                }}
              >
                In 3+ years, we have delivered for clients across 10+ countries
                — building brands, scaling products, and turning digital
                presence into measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services For (audience segments) */}
      <SectionDivider
        direction="down"
        fill="var(--signal-pink)"
        background="var(--paper)"
      />
      <section
        id="services-for"
        className="pink-section py-12 md:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "0.75rem",
              }}
            >
              we work with
            </p>
            <h2
              className="section-headline"
              style={{ color: "var(--cloud-white)" }}
            >
              Services For.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_SEGMENTS.map((seg) => (
              <ServiceCard
                key={seg.title}
                icon={
                  <div style={{ color: "var(--cloud-white)" }}>{seg.icon}</div>
                }
                title={seg.title}
                description={seg.description}
                variant="paper"
              />
            ))}
          </div>
        </div>
      </section>
      <SectionDivider
        direction="down"
        fill="var(--paper)"
        background="var(--signal-pink)"
      />

      {/* 6. Client Showcase */}
      <ClientShowcase />

      {/* 7. Services We Provide */}
      <section
        id="services"
        className="pixel-grid-bg py-12 md:py-24 px-4 sm:px-6"
        style={{
          borderTop: "2px solid var(--ink)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: "3rem" }}>
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
              what we do
            </p>
            <h2 className="section-headline" style={{ color: "var(--ink)" }}>
              Services We
              <br />
              Provide.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.title}
                icon={
                  <div style={{ color: "var(--cloud-white)" }}>
                    {service.icon}
                  </div>
                }
                title={service.title}
                description={service.description}
                variant="pink"
                href="/contact"
              />
            ))}
          </div>

          {/* CTA below services */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "3rem",
              borderTop: "2px solid var(--grid-line)",
            }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                Ready to start something?
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "rgba(17,17,17,0.5)",
                  marginTop: "0.25rem",
                }}
              >
                Drop us a message — we respond within 24 hours.
              </p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto text-center justify-center" id="services-cta">
              Get In Touch &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
