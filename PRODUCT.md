# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** recruiters and hiring teams at tech companies evaluating a junior Full Stack developer. They spend one or two minutes, often on a laptop between other tabs, sometimes on a phone from a LinkedIn link. Their job: decide whether Dylan builds real things, what exactly his role was in each project, and how to reach him.
- **Secondary:** other developers checking the technical depth of the work, and potential clients looking for someone to build a product.

## Product Purpose

The personal portfolio of Dylan Suárez (brand: **DylanSrz**), a Full Stack developer in training with a backend focus, based in Barranquilla, Colombia. It exists to help him get hired as a developer. Success means a visitor leaves convinced that he builds and ships real products with technical and visual judgment, and contacts him by email, LinkedIn or GitHub.

## Positioning

A developer at the start of his career who learns by shipping: products in production for real businesses, team projects where he led as Scrum Master, and tools he operates himself on a server. Each project states the exact role, the problem, and the technical decisions, without inflating seniority.

Value proposition (owner's words): "Transformo ideas en productos digitales funcionales. Diseño, desarrollo e integro soluciones Full Stack, desde la arquitectura hasta el despliegue."

## Operating Context

- Reached from LinkedIn, the GitHub profile README and direct links in job applications.
- Spanish is the default language; English lives under `/en`.
- Deployed on Vercel at `https://dylansuarez.vercel.app`. No environment variables.
- Project content is edited in `lib/proyectos.ts`; each project has a detail page at `/proyectos/<slug>`.

## Capabilities and Constraints

- Sections: navigation, hero, projects, about, stack, contact, footer; one detail page per project.
- Seven projects, in four honest categories: real product in production (DocTraderPro, Dislaverde), team project (EduLogic, ZeroBug), personal project (GELDO, Quiniela Hunters), tool (ScriptVuelos).
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4. No framework migration. Server Components by default.
- No contact form: there is no backend for one, and simulated forms are not allowed.
- Availability: open to employment as a developer (confirmed 2026-11-16).
- DocTraderPro: describe it as a software licence platform. Never publish prices, commissions, wallet addresses or promise returns. Account connection in Social Trader Tools is manual, not a code integration.
- ZeroBug: the orders module is not implemented.
- Undecided: CV download (the PDF does not exist yet).

## Brand Commitments

- The brand a visitor must remember is **DylanSrz**.
- Honest junior positioning: no invented years of experience, job titles, metrics, users or clients.
- Team projects attribute what Dylan did and what the team did.
- Voice: direct, concrete, first person, no hype.
- Owner-stated visual constraints (binding): dark base, warm white for content, one distinctive accent, a display + sans + mono type trio. Refused: purple gradients, repeated cards, tech icons in circles, pill buttons everywhere, exaggerated entrance animation, purposeless glass, a giant portrait with generic text, skill percentage bars.

## Evidence on Hand

- Verified project content in `lib/proyectos.ts` (role, problem, contributions, technical decisions).
- Screenshots (1280×800) in `public/proyectos/` for DocTraderPro, Dislaverde, EduLogic, GELDO and Quiniela Hunters.
- Live sites: doctraderpro.com, dislaverde.com, edulogic.pro, api.edulogic.pro/docs, geldo.vercel.app, quiniela-hazel-five.vercel.app.
- Public repositories: EduLogic, ZeroBug, quiniela, geldo-bot, ScriptVuelos.
- Not available, never to be fabricated: portrait photo, CV PDF, testimonials, usage metrics, screenshots for ZeroBug and ScriptVuelos.

## Product Principles

1. Show the work doing its job before describing the person.
2. Say exactly what was done and by whom; honesty is the credibility.
3. Every claim is checkable against a repository, a live site or the code.
4. The site itself is a sample of engineering: fast, accessible, bilingual, maintainable.

## Accessibility & Inclusion

WCAG 2.2 AA where possible: contrast, keyboard navigation, visible focus, semantic landmarks, `prefers-reduced-motion`, correct `lang` per locale. Must work from small phones to large monitors.
