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
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "zsure-defense",
    title: "ZSURE DEFENSE",
    subtitle: "AI threat and voice-clone prevention",
    category: "AI software engineering",
    description: "An enterprise deepfake and automated fraud detection platform engineered to neutralise AI impersonation attacks before financial damage spreads.",
    outcome: "Sub-100ms detection latency",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.png-zyk4pYjyLXcs4kGdcaSG1eYoB2rwJZ.jpeg",
    url: "https://zsure.in",
    services: ["Product strategy", "AI engineering", "Platform design"],
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.png-zyk4pYjyLXcs4kGdcaSG1eYoB2rwJZ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard.png-LeA6AxeaHENoaz3Ngp9aOf81exWFRw.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery-1.png-CLK6cyUlmrUzYwgQPNqCOdYoxKyeDb.jpeg",
    ],
  },
  {
    slug: "hypotenuse-analytics",
    title: "HYPOTENUSE ANALYTICS",
    subtitle: "Mission-critical surveillance infrastructure",
    category: "Enterprise software platform",
    description: "High-throughput surveillance systems and real-time telemetry processing built for large-scale enterprise deployments.",
    outcome: "99.999% SLA uptime",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.png-C0swQ2A0LDc9QgDUwCqDTMOp8354L3.jpeg",
    url: "https://hypotenuseanalytics.com",
    services: ["Systems architecture", "Data visualisation", "DevOps"],
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.png-C0swQ2A0LDc9QgDUwCqDTMOp8354L3.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard.png-QF5NwxnQiQkEzAGYWzvzFpZAW8fr2x.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery-1.png-gY1SPJvmB7tHtHGa3kNzhCfw1lmJAN.jpeg",
    ],
  },
  {
    slug: "aether-intelligence",
    title: "AETHER INTELLIGENCE",
    subtitle: "Operational intelligence, made legible",
    category: "AI dashboards and data systems",
    description: "A real-time intelligence command centre that turns distributed network signals into clear operational decisions for enterprise teams.",
    outcome: "97.5% predictive accuracy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.png-zyk4pYjyLXcs4kGdcaSG1eYoB2rwJZ.jpeg",
    url: "#",
    services: ["Product strategy", "Data visualisation", "Frontend engineering"],
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard.png-LeA6AxeaHENoaz3Ngp9aOf81exWFRw.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop.png-qj2wYitqDUtkZtggw9AAYPgtpP1FfG.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery-2.png-Q2GKidW1Ug5ilQpatbNIkXAtLDwkso.jpeg",
    ],
  },
  {
    slug: "flowforge-automation",
    title: "FLOWFORGE AUTOMATION",
    subtitle: "Workflows that explain themselves",
    category: "Automation and workflow systems",
    description: "A visual workflow builder that helps operations teams connect events, logic and actions without losing sight of the system behind them.",
    outcome: "Faster workflow iteration",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.png-C0swQ2A0LDc9QgDUwCqDTMOp8354L3.jpeg",
    url: "#",
    services: ["Systems architecture", "Interaction design", "Platform engineering"],
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard.png-QF5NwxnQiQkEzAGYWzvzFpZAW8fr2x.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop.png-1clXdfR4WEMaKT6gyvPCF4QXprnBbI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery-2.png-HDwbvk7nS33CczfZwofI377SW8G8Bx.jpeg",
    ],
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
