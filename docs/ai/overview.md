# docs/ai/overview.md - site overview for AI agents / LLMs

> This file is the entry point for AI agents and LLMs that need to understand the fael.tech
> site before answering questions about Rafael (Fael) Goulart or the fael.tech brand.
> See also [facts.md](./facts.md) (canonical facts) and [content-map.md](./content-map.md)
> (page map).

## What this site is

Personal site of Rafael (Fael) Goulart, a software engineer specialized in UX and, more recently,
AI, co-founder of two companies and former CTO of Aurum Software, published at `fael.tech`.
fael.tech is where he studies, builds and publishes, and the name he uses for his independent
work. It is also the lab for applying the fael.tech brand's visual identity: the site itself,
built with the brand's tokens and rules, is the living proof of the system (there is no separate
"components" page).

Static, with no framework/bundler, bilingual (pt-BR at the root, English in `en/`).

## Structure

| Page | pt-BR | en |
|---|---|---|
| "Início" (Home, personal landing page) | `index.html` | `en/index.html` |
| "Estudos" (Studies, index and studies) | `estudos/*.html` | `en/studies/*.html` |
| Monthly bulletins | `boletins/*.html` | `en/bulletins/*.html` |
| Longward (the company's thesis) | `longward.html` | `en/longward.html` |
| "Trajetória" (Career) | `sobre.html` | `en/career.html` |
| "Contato" (Contact) | `contato.html` | `en/contact.html` |

Each pt/en pair uses `<link rel="alternate" hreflang>` to reference the other version.

## Tone of voice and content guidelines

- **Direct and without hype.** Avoid empty superlatives ("revolutionary", "world-class"). Prefer
  concrete, verifiable statements.
- **Canonical facts.** Dates, roles and metrics must stay aligned with [facts.md](./facts.md).
- **Sentence case, never title case** in titles and headlines (brand convention).
- **Engineering first, portfolio first.** Home shows who Fael is and what he is building
  (Longward, AIKM, Radiant); his career belongs on "Trajetória" (Career). Do not open with an
  inventory of titles (CTO, DPO, AI Engineer, musician...) or a job search announcement.
- **First person, without dialogue with AI.** The text speaks to the visitor. Avoid commentary
  about the text itself, contrasts such as "a portfolio shows X, here I show Y", caveats about
  project status in prose (status belongs in labels) and introductions summarizing what follows.
- **Tone by page.** Home and studies are conversational; Career is restrained, like a resume.
- **Numbers without invented causality.** Company results (revenue, user base) provide context
  for the period, separate from what Fael did.
- **No slogans.** "Forward through technology" and "Direction. Motion. Impact." are not used in
  the site's text.
- **Longward with restraint.** Discuss the thesis, never products or experiments.
- **Do not invent roles, companies, dates or numbers** that are not in [facts.md](./facts.md)
  or the published pages. If a question requires a fact that is not here, prefer saying the
  information is unavailable to speculating.

## Brand source of truth

`brand/` is the single source of truth for the brand's visual assets (SVG symbol, `tokens.css`,
original printable manual). It must not be cited as a source of biographical facts - use
[facts.md](./facts.md) for those.

## Project status

The site maintains 22 pages, the visual identity in `brand/` and this documentation as the
project's living references. Neither `docs/SPEC.md` nor a `tasks/` folder exists anymore (the
spec-driven development workflow used during construction was discontinued after completion) -
`docs/ai/` is now the living reference documentation. Raw draft materials (old resume versions,
brand concept brainstorms) were removed because they had already been incorporated into the
published pages and this directory.
