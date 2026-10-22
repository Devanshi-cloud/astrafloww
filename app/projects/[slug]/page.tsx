import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project-detail";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); return { title: project?.title || "Project", description: project?.description, alternates: { canonical: `/projects/${slug}` } }; }

export default async function ProjectRoute({ params }: Props) { const { slug } = await params; const project = getProject(slug); if (!project) notFound(); return <ProjectDetail project={project} />; }
