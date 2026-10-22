import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio-page";

export const metadata: Metadata = { title: "Projects", description: "Selected digital products and platforms built by AstraFloww.", alternates: { canonical: "/projects" } };

export default function ProjectsRoute() { return <PortfolioPage />; }
