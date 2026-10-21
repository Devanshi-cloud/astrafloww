"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceTier {
  id: string;
  number: string;
  title: string;
  category: string;
  price: string;
  description: string;
  tags: string[];
  bullets: string[];
  checklist: string[];
}

const TIERS: ServiceTier[] = [
  {
    id: "web-apps",
    number: "01",
    title: "Web Applications",
    category: "/Web Engineering",
    price: "$2,000",
    description:
      "Crafting high-performance web applications and digital flagships built on Next.js 16 and TypeScript. Every interface is tailor-made to accelerate your business goals.",
    tags: [
      "Next.js 16",
      "Full-Stack Architecture",
      "TypeScript",
      "API & Database",
      "Micro-Interactions",
    ],
    bullets: [
      "Full-stack Next.js & React architecture",
      "Sub-second Core Web Vitals performance",
      "Custom REST / GraphQL API integrations",
      "Scalable database setup & authentication",
    ],
    checklist: [
      "Custom Component Design System",
      "Full-Stack Next.js 16 Architecture",
      "Database & Auth Integration",
      "Core Web Vitals 95+ Guarantee",
      "30-Day Post-Launch SLA & Support",
    ],
  },
  {
    id: "software-ai",
    number: "02",
    title: "Software & AI Systems",
    category: "/AI & Automation",
    price: "$3,500",
    description:
      "Bespoke backend systems, autonomous agent workflows, and intelligent RAG pipelines engineered to streamline complex business operations at scale.",
    tags: [
      "Custom AI Models",
      "RAG Architecture",
      "Workflow Automation",
      "LLM Agents",
      "Enterprise APIs",
    ],
    bullets: [
      "Bespoke backend & microservices",
      "Custom LLM & knowledge-base RAG",
      "Automated multi-step workflow routing",
      "Enterprise security hardening",
    ],
    checklist: [
      "Custom LLM & Agent Pipelines",
      "Vector Database & Embedding Storage",
      "Automated Customer & Internal Routing",
      "API Security & Rate Limiting",
      "Full Architecture Documentation",
    ],
  },
  {
    id: "seo-authority",
    number: "03",
    title: "Search Authority (SEO)",
    category: "/Organic Equity",
    price: "$1,500",
    description:
      "Data-driven technical search dominance designed to capture compounding organic inbound traffic and dominate high-intent commercial keywords.",
    tags: [
      "Technical Audits",
      "Topic Clusters",
      "Programmatic SEO",
      "Schema Markup",
      "Core Web Vitals",
    ],
    bullets: [
      "Deep technical Core Web Vitals audit",
      "Semantic content & topic clustering",
      "Programmatic search landing pages",
      "Structured data & schema integration",
    ],
    checklist: [
      "Complete Technical SEO Overhaul",
      "Semantic Keyword Strategy & Roadmap",
      "Automated Schema & Structured Data",
      "High-Authority Topical Authority Build",
      "Monthly Growth Telemetry & KPI Tracking",
    ],
  },
  {
    id: "devops-cloud",
    number: "04",
    title: "DevOps & Cloud Scale",
    category: "/Infrastructure",
    price: "$2,000",
    description:
      "Resilient cloud infrastructure, automated CI/CD pipelines, and zero-downtime deployment environments configured for mission-critical reliability.",
    tags: [
      "CI/CD Delivery",
      "Docker",
      "AWS / Vercel Edge",
      "Uptime Monitoring",
      "Disaster Recovery",
    ],
    bullets: [
      "Automated CI/CD delivery pipelines",
      "Docker & containerized microservices",
      "Vercel Edge & AWS cloud setup",
      "Zero-downtime rolling deployments",
    ],
    checklist: [
      "Automated CI/CD Delivery Pipelines",
      "Containerization & Microservice Setup",
      "Edge Caching & Cloud Infrastructure",
      "24/7 Monitoring & Automated Alerts",
      "Disaster Recovery & Backup Protocols",
    ],
  },
];

export default function ServicesPricing() {
  const [activeTierId, setActiveTierId] = useState<string>("web-apps");

  const activeTier =
    TIERS.find((tier) => tier.id === activeTierId) || TIERS[0];

  return (
    <section id="services" className="w-full bg-[var(--paper)] py-20 sm:py-32 px-4 sm:px-10 md:px-16 border-t border-[var(--azure-white)] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Header: Title + Star Project Button (Identical to Reference Image) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-[var(--ink)] tracking-tight leading-[1.05]">
              Build Products That Move
              <br />
              <span className="font-serif italic font-normal text-[var(--ink-muted)]">
                Businesses Forward
              </span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#1a082e] transition-all self-start sm:self-auto shadow-sm"
          >
            <span>Start Project</span>
            <span className="text-sm">&nearr;</span>
          </Link>
        </div>

        {/* 4 Service Cards Grid (Matching the exact card row in the reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 sm:mb-32">
          {TIERS.map((tier) => {
            const isActive = tier.id === activeTierId;

            return (
              <div
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`group rounded-3xl p-6 sm:p-7 cursor-pointer transition-all duration-300 min-h-[380px] flex flex-col justify-between border ${
                  isActive
                    ? "bg-[var(--signal-pink)] text-white border-[var(--signal-pink)] shadow-xl shadow-[var(--signal-pink)]/20 scale-[1.02]"
                    : "bg-[var(--cloud-white)] text-[var(--ink)] border-[var(--azure-white)] hover:border-[var(--signal-pink)] card-shadow"
                }`}
              >
                {/* Card Top: Number + Circular Arrow */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-mono text-xs font-semibold tracking-wider ${
                        isActive ? "text-white/80" : "text-[var(--ink-muted)]"
                      }`}
                    >
                      {tier.number}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-white/20 text-white border border-white/30"
                          : "border border-[var(--azure-white)] text-[var(--signal-pink)] group-hover:border-[var(--signal-pink)]"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-sans font-bold text-xl sm:text-2xl mb-4 tracking-tight ${
                      isActive ? "text-white" : "text-[var(--ink)]"
                    }`}
                  >
                    {tier.title}
                  </h3>

                  {/* If active: Show pill badges & bullets (like active card in reference) */}
                  {isActive ? (
                    <div className="space-y-4">
                      {/* Pill Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {tier.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-sans text-white font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-1.5 pt-2 text-xs font-sans text-white/90 list-disc list-inside">
                        {tier.bullets.map((bullet) => (
                          <li key={bullet} className="leading-snug">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>

                {/* If inactive: Title at bottom (like cards 02, 03, 04 in reference image) */}
                {!isActive && (
                  <div className="pt-8">
                    <span className="text-xs font-mono text-[var(--signal-pink)] uppercase tracking-wider font-semibold block mb-1">
                      Explore Service
                    </span>
                    <span className="font-sans font-bold text-lg text-[var(--ink)] block">
                      {tier.title} &rarr;
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pricing Sub-Section (Exact replica of lower portion of reference image) */}
        <div className="relative pt-6">
          {/* Subtle Background Watermark: "Pricing" */}
          <div className="absolute -top-16 left-0 right-0 overflow-hidden pointer-events-none select-none text-center">
            <span className="font-sans font-black tracking-tight text-[18vw] uppercase leading-none text-[var(--ink)]/[0.04]">
              Pricing
            </span>
          </div>

          {/* Pricing Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.4fr] gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Vertical Category Tabs */}
            <div className="space-y-2">
              {TIERS.map((tier) => {
                const isSelected = tier.id === activeTierId;

                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setActiveTierId(tier.id)}
                    className={`w-full text-left px-6 py-4 rounded-2xl text-base sm:text-lg font-sans font-semibold transition-all cursor-pointer focus:outline-none ${
                      isSelected
                        ? "bg-[var(--cloud-white)] text-[var(--ink)] card-shadow border border-[var(--azure-white)]"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--cloud-white)]/50"
                    }`}
                  >
                    {tier.title}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dark Obsidian Pricing Card (#0F041A) */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--ink)] text-white relative overflow-hidden shadow-2xl border border-[var(--azure-white)]/15">
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start mb-8">
                {/* Category & Big Price */}
                <div>
                  <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-2">
                    {activeTier.category}
                  </span>
                  <div className="font-sans font-black text-5xl sm:text-6xl text-white tracking-tight mb-6">
                    {activeTier.price}
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5">
                    {activeTier.checklist.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85 font-sans">
                        <span className="text-[var(--signal-pink)] font-bold text-sm">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description & Action Button */}
                <div className="flex flex-col justify-between h-full pt-1">
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-8">
                    {activeTier.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-[var(--signal-pink)] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#6c5ce7] transition-all shadow-lg"
                  >
                    <span>Get Started</span>
                    <span>&nearr;</span>
                  </Link>
                </div>
              </div>

              {/* Watermark in bottom right of card (like reference image) */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <span className="font-serif italic text-white/20 text-xl sm:text-2xl select-none">
                  {activeTier.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
