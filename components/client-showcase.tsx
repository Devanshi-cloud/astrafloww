"use client";

import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  description: string;
  stats?: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    id: "zsure",
    title: "ZSURE DEFENSE",
    subtitle: "AI Threat & Voice Clone Prevention",
    category: "AI Software Engineering",
    url: "https://zsure.in",
    description:
      "Enterprise deepfake and automated fraud detection platform engineered to neutralize AI impersonation attacks before financial damage spreads.",
    stats: "Sub-100ms detection latency",
    image: "/images/platform-mockup.jpg",
  },
  {
    id: "hypotenuse",
    title: "HYPOTENUSE ANALYTICS",
    subtitle: "Mission-Critical Surveillance Infrastructure",
    category: "Enterprise Software Platform",
    url: "https://hypotenuseanalytics.com",
    description:
      "High-throughput surveillance systems and real-time telemetry processing built for large-scale enterprise deployments.",
    stats: "99.999% SLA Uptime",
    image: "/images/hero-software.jpg",
  },
  {
    id: "bennett",
    title: "OIA BENNETT PORTAL",
    subtitle: "Global Student Opportunity Engine",
    category: "Web Application & CMS",
    url: "https://bennett.edu.in",
    description:
      "High-performance institutional web portal connecting students to international exchange programs and academic partner universities.",
    stats: "10,000+ Active Students",
  },
  {
    id: "drivers",
    title: "DRIVERS AUSTRALIA",
    subtitle: "National Logistics Job Marketplace",
    category: "Platform Architecture & SEO",
    url: "https://driversaustralia.com.au",
    description:
      "Specialized job portal connecting certified commercial logistics drivers across every state and territory in Australia.",
    stats: "National Search Dominance",
  },
];

export default function ClientShowcase() {
  return (
    <section id="projects" className="w-full bg-[var(--paper)] py-20 px-4 sm:px-10 md:px-16 border-t border-[var(--azure-white)]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="text-[var(--signal-pink)] font-mono text-xs uppercase tracking-widest font-semibold">
              // OUR SOFTWARE PROJECTS
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-[var(--ink-muted)]">
            <span>FEATURED CASE STUDIES</span>
            <span>&rarr;</span>
          </div>
        </div>

        {/* 2 Featured Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-10">
          {PROJECTS.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden border border-[var(--azure-white)] bg-[var(--cloud-white)] flex flex-col justify-between hover:border-[var(--signal-pink)] transition-all duration-300 card-shadow"
            >
              {/* Card Media Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--ink)]">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500 opacity-90"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--ink)]/80 backdrop-blur-md text-[var(--cloud-white)] text-[10px] font-mono uppercase tracking-wider border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Footer & Content */}
              <div className="p-6 sm:p-8 flex items-end justify-between gap-6 bg-[var(--cloud-white)] border-t border-[var(--azure-white)]">
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[var(--ink)] uppercase mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[var(--ink-muted)] uppercase tracking-wider mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-[var(--ink)]/75 line-clamp-2 font-sans max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Circular Arrow Button in strict lavender accent */}
                <a
                  href={`/projects/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[var(--signal-pink)] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#6c5ce7] transition-colors shadow-md"
                  aria-label={`Open ${project.title}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Supporting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(2, 4).map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl border border-[var(--azure-white)] bg-[var(--cloud-white)] flex items-center justify-between gap-6 hover:border-[var(--signal-pink)] transition-all card-shadow"
            >
              <div>
                <span className="text-[10px] font-mono text-[var(--signal-pink)] uppercase tracking-wider font-semibold block mb-1">
                  {project.category}
                </span>
                <h4 className="font-display font-bold text-xl text-[var(--ink)] uppercase mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed max-w-sm">
                  {project.description}
                </p>
              </div>

              <a
                href={`/projects/${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--paper)] border border-[var(--azure-white)] text-[var(--ink)] flex items-center justify-center hover:bg-[var(--signal-pink)] hover:text-white hover:border-[var(--signal-pink)] transition-all flex-shrink-0"
              >
                &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
