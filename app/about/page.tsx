import type { Metadata } from "next";
import { AboutPage } from "@/components/secondary-pages";
export const metadata: Metadata = { title: "About", description: "Meet AstraFloww, a creative technology studio for ambitious teams.", alternates: { canonical: "/about" } };
export default function AboutRoute() { return <AboutPage />; }
