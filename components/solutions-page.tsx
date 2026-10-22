import Link from "next/link";
const categories = [
  { number: "01", title: "Digital products", description: "From first sketch to resilient production system, we build digital products that make complex work feel clear.", capabilities: ["Product strategy", "UX and interface design", "Web applications"] },
  { number: "02", title: "AI and automation", description: "Practical intelligence for teams that want to remove repetitive work and make better decisions faster.", capabilities: ["AI workflow design", "Intelligent operations", "Automation systems"] },
  { number: "03", title: "Data intelligence", description: "Turn scattered signals into useful views, reliable reporting and decisions your whole team can trust.", capabilities: ["Data visualisation", "Analytics platforms", "Real-time dashboards"] },
  { number: "04", title: "Growth infrastructure", description: "The technical foundation behind discoverable brands, faster experiences and sustainable digital momentum.", capabilities: ["Search authority", "Performance engineering", "DevOps infrastructure"] },
];

export default function SolutionsPage() {
  return <main className="bg-[var(--paper)] pb-24">
    <section className="px-4 pb-20 pt-28 sm:px-10 md:px-16 md:pt-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div><span className="font-mono-label text-[var(--signal-pink)]">// SOLUTIONS</span><h1 className="hero-display mt-5 text-[var(--ink)]">Complex work,<br /><span className="font-serif font-normal italic text-[var(--signal-pink)]">made clear.</span></h1></div>
        <div><p className="max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">AstraFloww brings strategy, design and engineering together to turn ambitious ideas into useful systems that keep moving.</p><Link href="/contact" className="btn-pill-primary mt-8">Start a conversation <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
    <section className="border-y border-[var(--azure-white)] px-4 sm:px-10 md:px-16"><div className="mx-auto max-w-[1440px]">{categories.map((category) => <article key={category.number} className="grid gap-8 border-b border-[var(--azure-white)] py-10 last:border-b-0 md:grid-cols-[90px_1fr_1fr] md:items-start md:py-14"><span className="font-mono text-xs text-[var(--signal-pink)]">{category.number}</span><div><h2 className="font-display text-3xl font-bold capitalize text-[var(--ink)] sm:text-4xl">{category.title}</h2><p className="mt-4 max-w-md leading-relaxed text-[var(--ink-muted)]">{category.description}</p></div><ul className="flex flex-col gap-3 border-l-2 border-[var(--signal-pink)] pl-6">{category.capabilities.map((capability) => <li key={capability} className="font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)]">{capability}</li>)}</ul></article>)}</div></section>
    <section className="mx-auto grid max-w-[1440px] gap-10 px-4 pt-20 sm:px-10 md:grid-cols-2 md:px-16"><div><span className="font-mono-label text-[var(--signal-pink)]">HOW WE WORK</span><h2 className="section-title mt-4 text-[var(--ink)]">Start with the question.</h2></div><div><p className="leading-relaxed text-[var(--ink-muted)]">We begin with your goals, constraints and the people who need the work to succeed. Then we shape the smallest useful system, prove it in the real world and build from there.</p><Link href="/projects" className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--signal-pink)]">See the work <span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}
