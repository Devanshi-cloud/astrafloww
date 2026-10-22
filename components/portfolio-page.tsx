import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--paper)] pb-24">
      <section className="px-4 pb-16 pt-28 sm:px-10 md:px-16 md:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <span className="font-mono-label text-[var(--signal-pink)]">// SELECTED WORK</span>
            <h1 className="hero-display mt-5 text-[var(--ink)]">Systems that move<br /><span className="font-serif font-normal italic text-[var(--signal-pink)]">people forward.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">We partner with ambitious teams to turn complex ideas into clear, useful and resilient digital products.</p>
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--azure-white)] px-4 py-10 sm:px-10 md:px-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className={`group overflow-hidden rounded-3xl border border-[var(--azure-white)] bg-[var(--cloud-white)] card-shadow-hover ${index === 0 || index === 1 ? "lg:min-h-[520px]" : ""}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--ink)]">
                {project.image ? <Image src={project.image} alt="" fill className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(124,109,246,.75),transparent_35%),linear-gradient(135deg,#0f041a,#27204c)]" />}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between"><span className="rounded-full border border-white/20 bg-[var(--ink)]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">{project.category}</span><span className="font-mono text-xs text-white/70">0{index + 1}</span></div>
              </div>
              <div className="flex items-end justify-between gap-6 p-7 sm:p-9">
                <div><h2 className="font-display text-2xl font-black uppercase tracking-tight text-[var(--ink)] sm:text-3xl">{project.title}</h2><p className="mt-2 font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)]">{project.subtitle}</p><p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--ink-muted)]">{project.description}</p></div>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--signal-pink)] text-xl text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
