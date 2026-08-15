import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";

interface LegalArticleProps {
  content: string;
}

function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getNodeText).join("");
  }
  if (node && typeof node === "object" && "props" in node && (node as any).props?.children) {
    return getNodeText((node as any).props.children);
  }
  return "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/^[0-9]+(\.[0-9]+)*\s*\.?\s*/, "") // remove leading numbers like "1. " or "2.1 "
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function LegalArticle({ content }: LegalArticleProps) {
  // Extract all H2 headings from raw markdown for the Table of Contents
  const h2Lines = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const rawTitle = line.replace(/^##\s+/, "").trim();
      const slug = slugify(rawTitle);
      return {
        title: rawTitle,
        slug,
      };
    });

  return (
    <div className="pixel-grid-bg min-h-screen pt-24 pb-20 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--ink)] hover:text-[var(--signal-pink)] transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-[var(--ink)]"
        >
          &larr; Back to Home
        </Link>

        {/* In-Page Table of Contents */}
        {h2Lines.length > 0 && (
          <nav
            aria-label="Table of Contents"
            className="p-6 bg-[var(--cloud-white)] border-2 border-[var(--ink)] mb-10 pixel-shadow"
          >
            <p
              className="font-mono text-xs uppercase tracking-widest text-[var(--signal-pink)] font-bold mb-3"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
              }}
            >
              Table of Contents
            </p>
            <ol className="list-decimal list-inside space-y-1.5 font-mono text-xs text-[var(--ink)]">
              {h2Lines.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`#${item.slug}`}
                    className="hover:text-[var(--signal-pink)] underline transition-colors"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Markdown Content Renderer */}
        <div className="prose-clean">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--ink)] mb-6"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  {children}
                </h1>
              ),
              h2: ({ children }) => {
                const text = getNodeText(children);
                const slug = slugify(text);
                return (
                  <h2
                    id={slug}
                    className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--ink)] mt-12 mb-4 pt-6 border-t-2 border-[var(--grid-line)] scroll-mt-24"
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                    }}
                  >
                    {children}
                  </h2>
                );
              },
              h3: ({ children }) => (
                <h3
                  className="font-display text-base sm:text-lg font-bold text-[var(--ink)] mt-6 mb-2"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}
                >
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p
                  className="text-base text-[var(--ink)] leading-relaxed mb-4 max-w-[75ch]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    lineHeight: 1.75,
                  }}
                >
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul
                  className="list-disc list-outside pl-6 mb-4 space-y-2 text-base text-[var(--ink)] leading-relaxed max-w-[75ch]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol
                  className="list-decimal list-outside pl-6 mb-4 space-y-2 text-base text-[var(--ink)] leading-relaxed max-w-[75ch]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li
                  className="text-[var(--ink)]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-[var(--ink)]">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[var(--signal-pink)] underline hover:opacity-80 transition-opacity font-medium"
                  style={{ textUnderlineOffset: "3px" }}
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
