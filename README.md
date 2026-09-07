# Telos Digital

> **Production Software Architecture & Product Engineering Studio**  
> We build high-throughput cloud web systems, offline-first mobile applications, and resilient digital architectures engineered for scale and zero friction.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Core Engineering Capabilities](#core-engineering-capabilities)
- [Production Case Studies](#production-case-studies)
- [Delivery Framework & Process](#delivery-framework--process)
- [Technology Stack](#technology-stack)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Build, Deployment & Scripts](#build-deployment--scripts)
- [Studio & Contact](#studio--contact)

---

## Overview

Telos Digital replaces agency bloat and junior headcounts with principal-level engineering craftsmanship. The web platform serves as both a high-fidelity brand storefront and an interactive showcase of production work, engineering principles, and delivery workflows.

### Key Architectural Highlights
- **Performance First:** Next.js 16 App Router with React Server Components (RSC) and Turbopack optimization.
- **Micro-Interactions & Motion:** Fluid, GPU-accelerated spring animations, custom page transitions, and layered crossfades powered by Framer Motion.
- **Design System:** Custom tokenized warm-light aesthetic with glassmorphism, responsive grid layouts, and Tailwind CSS v4.
- **Zero-Friction Ingestion:** Native serverless API routes with schema validation and Resend email telemetry.

---

## Core Engineering Capabilities

The studio structures delivery across four primary engineering modules:

| Module | Focus Area | Core Stack | Primary Guarantee |
| :--- | :--- | :--- | :--- |
| **01. Web & SaaS Development** | High-throughput web apps, multi-tenant DBs, RBAC & billing | Next.js 16, TypeScript, PostgreSQL, Redis, Vercel | `< 80ms` P95 API latency |
| **02. Mobile App Engineering** | Native & cross-platform apps, offline-first sync & telemetry | React Native, Flutter, Swift, SQLite | `60fps` fluid rendering |
| **03. Product Design & UI/UX** | Design systems, interactive wireframes & micro-animations | Figma, Design Tokens, Spatial CSS, Motion | `< 1s` TTI on design builds |
| **04. Cloud & DevOps Infrastructure** | CI/CD pipelines, container orchestration & observability | Docker, Kubernetes, AWS, Terraform, Cloudflare | `99.99%` target uptime SLA |

---

## Production Case Studies

Featured production systems built and shipped:

1. **[Hawkeri](https://www.hawkeri.com/)** — Hyperlocal Multi-Vendor Commerce Ecosystem  
   *Real-time inventory sync, COD logistics telemetry, and sub-120ms search indexing across Bangladesh.*
2. **[AndgateBOS](https://www.andgatebos.com/)** — Cloud SME Business Operating System & POS  
   *Offline-first POS sales caching, automated double-entry bookkeeping, and bKash/Nagad wallet reconciliation.*
3. **[AdSkill Consultancy](https://adskill-consultancy-web.vercel.app/)** — US Immigration & Visa Guidance Platform  
   *Automated triage funnels, case tracking UI, and 30-min booking integration with 98% success telemetry.*
4. **[Artisane](https://artisane-client.vercel.app/)** — Handmade Craft & Atelier Marketplace  
   *Dark editorial marketplace, dynamic voucher engine, and instant search lookbook.*

---

## Delivery Framework & Process

All client engagements follow a disciplined 4-phase delivery framework:

```text
Phase 01: Architecture Blueprint (Week 01)
└── Requirements audit, schema contracts, RFC specification & sprint roadmap

Phase 02: Design System & Prototype (Week 02 - 03)
└── High-fidelity UI kit, state machines, component sandbox & review sprints

Phase 03: Full-Stack Production Sprint (Week 04 - 08)
└── Test-driven engineering, CI/CD pipelines, staging environments & security reviews

Phase 04: Hardening, Launch & SLA Handover (Week 09+)
└── Penetration audits, performance tuning, production rollout & 30-day warranty
```

---

## Technology Stack

### Core Framework & Runtime
- **Framework:** [Next.js 16](https://nextjs.org/) (Turbopack, App Router)
- **Runtime:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict type-checking)

### UI, Styling & Animation
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Animation:** [Framer Motion](https://www.framer.com/motion/) (orchestrated springs, layout transitions, keyframe floats)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Geist Sans, Geist Mono, Inter & JetBrains Mono

### Services & Tooling
- **Mailing Engine:** [Resend](https://resend.com/) API
- **Code Quality:** ESLint 9 (`eslint-config-next`)

---

## Architecture & Folder Structure

```text
telos-digital/
├── public/
│   └── assets/
│       ├── Banner/               # Hero showcases and banners
│       └── images/               # Production case study imagery
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # Home (Hero showcase, Modules, Work, FAQ, CTA)
│   │   ├── services/             # Deep-dive into engineering services
│   │   ├── work/                 # Interactive case studies & metrics
│   │   ├── process/              # 4-Phase framework & Client Cadence
│   │   ├── about/                # Studio manifesto & Dhaka HQ
│   │   ├── contact/              # Inquiries, booking, direct line
│   │   ├── api/contact/route.ts  # Contact dispatch via Resend
│   │   ├── layout.tsx            # Root layout, analytics & font variables
│   │   ├── globals.css           # Design tokens, theme variables & utilities
│   │   ├── not-found.tsx         # Custom styled 404 page
│   │   └── error.tsx             # Global error boundary
│   ├── components/               # Isolated reusable UI components
│   │   ├── Hero.tsx              # Dynamic hero with stacked crossfade carousel
│   │   ├── Navbar.tsx            # Glassmorphic header with navigation
│   │   ├── Footer.tsx            # Global studio footer & links
│   │   ├── ProcessPhaseCard.tsx  # Interactive process card with floating cadence
│   │   ├── WorkProjectCard.tsx   # Detailed project showcase card
│   │   ├── ConversionCtaBanner.tsx # Bottom conversion component
│   │   └── ...
│   ├── data/                     # Structured source of truth JSON files
│   │   ├── siteConfig.json       # Metadata, contact info & addresses
│   │   ├── servicesData.json     # Service modules & technical details
│   │   ├── workProjects.json     # Case study copy, metrics & tags
│   │   ├── processPhases.json    # Phase roadmaps & deliverable checklists
│   │   └── faqs.json             # Technical FAQ entries
│   └── types/                    # Strict TypeScript definitions
│       ├── about.ts
│       ├── process.ts
│       ├── services.ts
│       └── work.ts
├── next.config.ts                # Next.js compilation & image config
├── tsconfig.json                 # TypeScript compiler paths & strict settings
└── package.json                  # Dependencies & scripts
```

---

## Getting Started

### Prerequisites
- **Node.js:** `v20.x` or later
- **Package Manager:** `npm`, `pnpm`, or `bun`

### 1. Clone & Install

```bash
git clone <repository-url>
cd telos-digital
npm install
```

### 2. Environment Variables

Create `.env.local` in the project root:

```env
# Resend API Key for handling contact form dispatches
RESEND_API_KEY=re_your_api_key_here

# Recipient email receiving inbound client requests
CONTACT_EMAIL_RECIPIENT=millathossain115@gmail.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build, Deployment & Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Turbopack development server on port 3000 |
| `npm run build` | Compiles production bundle & validates TypeScript types |
| `npm start` | Starts production server |
| `npm run lint` | Runs ESLint validation across the codebase |

---

## Studio & Contact

- **Studio Headquarters:** Madani Avenue, Dhaka, Bangladesh
- **Direct Dispatch:** [telosdigital@gmail.com](mailto:telosdigital@gmail.com)
- **Direct Line:** `+880 1618-257217` / `+880 1610-108851`
- **SLA:** 24-hour response turnaround on initial architecture intake.

---

## License

Private repository © Telos Digital. All rights reserved.
