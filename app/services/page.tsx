import type { Metadata } from "next";
import { ServicesPage } from "@/components/secondary-pages";
export const metadata: Metadata = { title: "Services", description: "Web development, SEO, AI automation, brand systems and DevOps from AstraFloww.", alternates: { canonical: "/services" } };
export default function ServicesRoute() { return <ServicesPage />; }
