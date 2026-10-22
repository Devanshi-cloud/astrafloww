export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  outcome: string;
  image?: string;
  url: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "zsure-defense",
    title: "ZSURE DEFENSE",
    subtitle: "AI threat and voice-clone prevention",
    category: "AI software engineering",
    description: "An enterprise deepfake and automated fraud detection platform engineered to neutralise AI impersonation attacks before financial damage spreads.",
    outcome: "Sub-100ms detection latency",
    image: "/images/platform-mockup.jpg",
    url: "https://zsure.in",
    services: ["Product strategy", "AI engineering", "Platform design"],
  },
  {
    slug: "hypotenuse-analytics",
    title: "HYPOTENUSE ANALYTICS",
    subtitle: "Mission-critical surveillance infrastructure",
    category: "Enterprise software platform",
    description: "High-throughput surveillance systems and real-time telemetry processing built for large-scale enterprise deployments.",
    outcome: "99.999% SLA uptime",
    image: "/images/hero-software.jpg",
    url: "https://hypotenuseanalytics.com",
    services: ["Systems architecture", "Data visualisation", "DevOps"],
  },
  {
    slug: "bennett-portal",
    title: "OIA BENNETT PORTAL",
    subtitle: "Global student opportunity engine",
    category: "Web application and CMS",
    description: "A high-performance institutional web portal connecting students to international exchange programs and academic partner universities.",
    outcome: "10,000+ active students",
    url: "https://bennett.edu.in",
    services: ["Web development", "CMS architecture", "SEO"],
  },
  {
    slug: "drivers-australia",
    title: "DRIVERS AUSTRALIA",
    subtitle: "National logistics job marketplace",
    category: "Platform architecture and SEO",
    description: "A specialised job portal connecting certified commercial logistics drivers across every state and territory in Australia.",
    outcome: "National search dominance",
    url: "https://driversaustralia.com.au",
    services: ["Marketplace strategy", "SEO", "Content systems"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
