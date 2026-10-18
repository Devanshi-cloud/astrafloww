# AstraFloww — UI Revamp Project
### PRD + TRD — Pixel-Grid Light Theme (2-Page Rebuild)

> Scaffold doc for AI coding agent. Follow the **ONLY ADD, never REPLACE** rule: extend existing components, flag genuine restructuring needs instead of silently overwriting.

---

## 1. Project Overview

| | |
|---|---|
| **Client** | AstraFloww (digital/creative agency) |
| **Goal** | Full UI revamp — replace current maximalist/WebGL direction with a bold, pixel-grid, light-theme system |
| **Pages** | 2 total — Landing (`/`) and Contact (`/contact`) |
| **Theme** | Light only (no dark mode toggle) |
| **Stack** | Next.js 15 (App Router), monolith config, TypeScript, Tailwind CSS |
| **Reference** | User-supplied screenshot — pixel/8-bit studio site (bold uppercase type, hot-pink blocks, pixel-icon cards) |

**Note on previous direction:** this replaces the earlier Void/Ink/Flow-Violet WebGL flow-field concept. If any of that work (constellation nav, flow-field hero) is still live in the repo, do not delete it outright — branch or archive it per the ONLY ADD rule, in case the maximalist direction is revisited for a different client.

---

## 2. Design System

### 2.1 Color tokens

| Token | Name | Hex | Use |
|---|---|---|---|
| `--paper` / `--alis-mavisi` | Alış Mavisi | `#F4F8FC` | Page background, canvas |
| `--ink` / `--koyu-mor` | Koyu Mor | `#0F041A` | Primary text, headlines, outlines, dark blocks |
| `--signal-pink` / `--parlak-lavanta` | Parlak Lavanta | `#7C6DF6` | Section blocks, CTAs, primary accents |
| `--azure-white` / `--azur-beyazi` | Azur Beyazı | `#D1DCF9` | Secondary accents, grid lines, subtle cards |
| `--grid-line` | Azur Beyazı | `#D1DCF9` | Background pixel grid lines |
| `--cloud-white` | Cloud White | `#FFFFFF` | Card fills |

Flat pixel-art logic with cohesive neo-brutalist styling.

### 2.2 Typography

- **Display**: a bold, blocky/pixelated grotesk (e.g. "Press Start 2P" for accent moments only — it's heavy, use sparingly — or a bold monospace-adjacent grotesk like "Space Grotesk Bold" / "IBM Plex Mono Bold" for the actual big headlines so it stays readable at scale). Uppercase, tight tracking, huge sizes (clamp 3rem–7rem for hero).
- **Body**: a clean grotesk (Inter or IBM Plex Sans), uppercase for labels/stats, sentence case for paragraph copy, small size (~13px) with generous letter-spacing on the all-caps blocks — matches the dense uppercase paragraph style in the reference.
- **Utility/labels**: monospace, lowercase, small — used for nav items and micro-labels (e.g. "desktop" tag, footer meta).

### 2.3 Layout & texture

- Background grid: 1px `--grid-line` squares (~24px) as a repeating CSS background on `--paper` sections — signals the "graph paper" feel.
- Pixel-jagged dividers between sections (SVG or `clip-path` staircase edge, like the pink/paper boundary in the reference) instead of straight lines.
- Sharp corners everywhere — `border-radius: 0`. This is a hard constraint of the direction.
- Generous whitespace on paper sections; dense, high-contrast blocks on pink sections.
- Pixel-art icons/doodles rendered as SVG on a visible grid (squares, not smooth curves) — used for service-card icons and the signature motif (see 2.4).

### 2.4 Signature element (replaces the dinosaur)

Proposal: a small pixel-art **rocket/comet mascot** (ties to "Astra") on a skateboard or trail of pixel stars, placed in the hero the same way the dinosaur sits in the reference. Reused as a recurring motif (loading states, 404, footer). Open to swapping for something else — flag if you want a different subject.

### 2.5 Motion

- Minimal, deliberate: pixel-doodles get a subtle idle float; stat numbers count up on scroll into view; service cards do a small "step" hover offset (translate + hard shadow) rather than smooth easing, to stay on-brand with the blocky aesthetic.
- Respect `prefers-reduced-motion`.

---

## 3. Site Map

```
/            Landing page
/contact     Contact page (WhatsApp + email booking)
```

Shared layout: Nav header + Footer (see §6).

---

## 4. Page 1 — Landing Page (section breakdown)

1. **Nav** — logo wordmark "astrafloww", inline links (Services / Who We Are / Services For / Team / Contact), sharp-cornered, transparent over paper bg.
2. **Hero** — big uppercase headline (2 lines) + subheadline, one pink CTA button ("let's start!" style → routes to `/contact`), pixel cloud doodles, rocket/comet signature mascot on the right. Small eyebrow line top-left: "Digital Marketing & Creative Solutions."
3. **Intro blurb** — centered paragraph in dense uppercase, flanked by pixel-flower doodles, on a pink full-bleed block with jagged top/bottom edges.
4. **Stats row** — 3 big numbers with small labels (e.g. "X+ years experience", "X+ completed projects", "X+ countries served") — pull real AstraFloww numbers; placeholder if unknown, flagged for user to fill in.
5. **"Who We Are?"** — giant pixel-style section header, short company description underneath.
6. **Services For** (audience segments) — 4 pink cards, each with a pixel-icon + label (adapt icons to AstraFloww's actual client types — e.g. startups, e-commerce, local businesses, nonprofits — confirm with user).
7. **Clients / Work showcase** *(added per your request — not in reference image)* — grid or carousel of client projects: thumbnail, client name, one-line result/description, link out. Needs real project data from user.
8. **Services we provide** *(added per your request)* — list/grid of AstraFloww's actual services (web dev, branding, marketing, etc.) styled as pixel cards matching §4.6.
9. **Footer** — see §6.

---

## 5. Page 2 — Contact Page

Single-column, same pixel-grid/paper background, split into two blocks:

### 5.1 WhatsApp query redirection
- Button/card: "Chat with us on WhatsApp"
- Uses `https://wa.me/<NUMBER>?text=<prefilled message>` — opens WhatsApp app/web directly, no backend needed.
- Needs: AstraFloww's WhatsApp Business number from user.

### 5.2 Email booking / appointment request form
- Fields: Name, Email, Phone (optional), Service interested in (dropdown from §4.8 list), Preferred date/time, Message.
- Submission options (pick one — flagging for your decision):
  - **Simple**: form posts to a Next.js Route Handler (`/app/api/contact/route.ts`) that sends via **Resend** (recommended, easy DX, generous free tier) or **Nodemailer** + SMTP.
  - Stores nothing by default (stateless email send) — add Postgres/Supabase logging later if you want a booking history/dashboard.
- Client-side validation (zod + react-hook-form), success/error toast states matching the pixel-block visual language (not a generic modal).
- Honeypot or simple rate-limit on the route handler to cut spam, since there's no auth layer.

---

## 6. Footer (shared)

- Left: wordmark + short tagline.
- Center: nav links repeated (or sitemap-style columns if content grows).
- Right/bottom: social links, small "About Us" pixel-style text link → external, opens `https://www.hypotenuseanalytics.com/about-us` in a new tab (`target="_blank" rel="noopener noreferrer"`), styled subtly (not a primary CTA — it's a parent-company reference, not a page action).
- Bottom bar: © year AstraFloww, small monospace legal line.

---

## 7. Tech Stack & Architecture

- **Framework**: Next.js 15, App Router, TypeScript, monolith (single repo/app, no separate API service).
- **Styling**: Tailwind CSS v4 + a small set of CSS custom properties for the token system in §2.
- **Forms**: react-hook-form + zod.
- **Email**: Resend SDK (or Nodemailer, pick one) inside a Route Handler.
- **Icons/pixel art**: hand-authored SVGs (grid-snapped paths) rather than an icon library, to keep the blocky look consistent — an icon font/Lucide-style set will look wrong here.
- **Animation**: Framer Motion (already in your stack) for scroll-reveals and the count-up stats.
- **Deployment**: Vercel (assumed — confirm) or existing AstraFloww hosting.
- **Fonts**: next/font for the display + body + mono trio in §2.2.

---

## 8. Suggested Folder Structure

```
app/
  layout.tsx              # root layout — nav + footer + font vars
  page.tsx                # landing page
  contact/
    page.tsx
  api/
    contact/
      route.ts            # email booking handler
components/
  nav.tsx
  footer.tsx
  hero.tsx
  stat-block.tsx
  section-divider.tsx     # jagged pixel edge svg wrapper
  service-card.tsx
  client-showcase.tsx
  pixel-icon/
    rocket.tsx
    cloud.tsx
    heart.tsx
    ...
  contact-form.tsx
  whatsapp-cta.tsx
lib/
  email.ts                # resend/nodemailer wrapper
  validation.ts            # zod schemas
styles/
  tokens.css              # color/spacing custom properties
  grid-bg.css
```

---

## 9. Open Items — Need From You Before Build

1. Real stats for §4.4 (years experience, projects completed, countries/clients served).
2. Client/project list + assets for the showcase section (§4.7) — names, thumbnails, short results copy, links.
3. Final services list for §4.8.
4. WhatsApp Business number.
5. Email send provider preference (Resend vs Nodemailer/SMTP) and the destination inbox.
6. Confirm signature mascot direction (rocket/comet proposal in §2.4) or provide an alternative.
7. Confirm whether the old WebGL/flow-field build should be archived or deleted.

---

## 10. Build Rule Reminder

**ONLY ADD, never REPLACE.** When handing this to an agent: extend existing layout/components where they already exist in the repo, don't silently overwrite prior work, and flag any point where a genuine rewrite (not extension) is required before doing it.