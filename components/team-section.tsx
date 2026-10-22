"use client";

import { motion } from "framer-motion";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatarUrl: string;
  bgColor: string;
  shapePath: string;
  websiteUrl: string;
  linkedinUrl: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "devanshi",
    name: "Devanshi Jaiswal",
    role: "CEO & Founder",
    department: "Leadership",
    avatarUrl: "/images/avatars/devanshi.svg",
    bgColor: "#7C6DF6", // AstraFloww signature violet
    // Double-lobed / Scalloped 8-lobe shape
    shapePath:
      "M 50,0 C 15,0 0,15 0,55 C 0,110 32,135 32,170 C 32,205 0,230 0,285 C 0,325 15,340 50,340 L 230,340 C 265,340 280,325 280,285 C 280,230 248,205 248,170 C 248,135 280,110 280,55 C 280,15 265,0 230,0 Z",
    websiteUrl: "#",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "suhani",
    name: "Suhani Nagwani",
    role: "Operations & Client Partner",
    department: "Operations",
    avatarUrl: "/images/avatars/suhani.svg",
    bgColor: "#F97316", // Warm peach apricot
    // Symmetrical Arched doorway portal
    shapePath:
      "M 0,140 C 0,60 62,0 140,0 C 218,0 280,60 280,140 L 280,315 C 280,332 268,340 250,340 L 30,340 C 12,340 0,332 0,315 Z",
    websiteUrl: "#",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "khushi",
    name: "Khushi Nain",
    role: "Brand & Experience Design Lead",
    department: "Design",
    avatarUrl: "/images/avatars/khushi.svg",
    bgColor: "#FBBF24", // Saturated sunny amber
    // Tall elegant pill / oval capsule
    shapePath:
      "M 140,0 C 220,0 280,75 280,170 C 280,265 220,340 140,340 C 60,340 0,265 0,170 C 0,75 60,0 140,0 Z",
    websiteUrl: "#",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "gyanendra",
    name: "Gyanendra Prakash",
    role: "Lead Software Architect",
    department: "Dev Team",
    avatarUrl: "/images/avatars/gyanendra.svg",
    bgColor: "#38BDF8", // Electric cyan
    // Triple-lobed cloud wave shape
    shapePath:
      "M 55,0 C 18,0 0,18 0,50 C 0,78 18,88 18,105 C 18,122 0,132 0,160 C 0,188 18,198 18,215 C 18,232 0,242 0,270 C 0,315 20,340 55,340 L 225,340 C 260,340 280,315 280,270 C 280,242 262,232 262,215 C 262,198 280,188 280,160 C 280,132 262,122 262,105 C 262,88 280,78 280,50 C 280,18 262,0 225,0 Z",
    websiteUrl: "#",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "satveek",
    name: "Satveek",
    role: "Full-Stack & Core Systems Engineer",
    department: "Dev Team",
    avatarUrl: "/images/avatars/satveek.svg",
    bgColor: "#818CF8", // Saturated indigo lavender
    // Symmetrical scalloped blossom portal
    shapePath:
      "M 65,0 C 20,0 0,20 0,65 C 0,115 22,130 22,170 C 22,210 0,225 0,275 C 0,320 20,340 65,340 L 215,340 C 260,340 280,320 280,275 C 280,225 258,210 258,170 C 258,130 280,115 280,65 C 280,20 260,0 215,0 Z",
    websiteUrl: "#",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "shrish",
    name: "Shrish",
    role: "Senior Systems & Cloud Engineer",
    department: "Dev Team",
    avatarUrl: "/images/avatars/shrish.svg",
    bgColor: "#34D399", // Emerald mint
    // Modernist asymmetric arch portal
    shapePath:
      "M 140,0 C 60,0 0,60 0,140 L 0,310 C 0,330 15,340 35,340 L 245,340 C 265,340 280,330 280,310 L 280,50 C 280,18 262,0 230,0 Z",
    websiteUrl: "#",
    linkedinUrl: "https://linkedin.com",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="w-full bg-[var(--ink)] text-white py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--signal-pink)]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-sm text-xs font-mono uppercase tracking-[0.2em] text-white/80 mb-6">
            Team
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] max-w-3xl">
            Meet the creative minds behind our success
          </h2>

          <p className="mt-5 text-sm sm:text-base text-white/60 font-sans max-w-xl leading-relaxed">
            A tight-knit collective of founders, designers, and software
            engineers building high-impact digital experiences.
          </p>
        </div>

        {/* 6-Card Team Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group flex flex-col items-center"
            >
              {/* Graphic Backdrop + Notionist Avatar Container */}
              <div className="w-full max-w-[280px] sm:max-w-[300px] relative transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <svg
                  viewBox="0 0 280 340"
                  className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] select-none overflow-hidden"
                >
                  <defs>
                    <clipPath id={`clip-${member.id}`}>
                      <path d={member.shapePath} />
                    </clipPath>
                  </defs>

                  {/* Saturated Geometric Backdrop Shape */}
                  <path
                    d={member.shapePath}
                    fill={member.bgColor}
                    className="transition-opacity duration-300 group-hover:opacity-95"
                  />

                  {/* Notionist Avatar Illustration Clipped Within Shape */}
                  <g clipPath={`url(#clip-${member.id})`}>
                    <image
                      href={member.avatarUrl}
                      x="-20"
                      y="20"
                      width="320"
                      height="320"
                      preserveAspectRatio="xMidYMax meet"
                    />
                  </g>
                </svg>
              </div>

              {/* Member Meta */}
              <div className="mt-6 flex flex-col items-center text-center">
                {/* Full Name */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-[var(--signal-pink)] transition-colors duration-200">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-xs sm:text-sm font-sans text-white/60 mt-1 mb-3.5 tracking-normal">
                  {member.role}
                </p>

                {/* Social Links (Globe & LinkedIn) */}
                <div className="flex items-center gap-3 text-white/40">
                  {/* Globe / Website */}
                  <a
                    href={member.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Website`}
                    className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn`}
                    className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
