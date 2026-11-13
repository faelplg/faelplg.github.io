# AGENTS.md - instructions for AI agents in this repository

> Operational context for any agent (Claude Code, Codex, Copilot, etc.) editing this
> repository. For *content* context (biographical facts, tone of voice, page map), the
> source is [docs/ai/](docs/ai/) - read [docs/ai/overview.md](docs/ai/overview.md) before touching
> any user-visible text.

## What this project is

Static personal site of Rafael (Fael) Goulart (Software Engineer, technology strategist,
former CTO and DPO), published at `fael.tech`. It is also the lab for applying the fael.tech
brand's visual identity - the site itself is the living proof of the brand system; there is
no separate "components" page.

- **No framework, no bundler, no build step.** Plain HTML/CSS/JS served as-is.
- **Bilingual through file duplication:** pt-BR at the root, English mirrored in `en/`, with no
  runtime i18n. Each page exists as two independent HTML files.
- **Hosted on Vercel.** The `<script defer src="/_vercel/insights/script.js">` and
  `/_vercel/speed-insights/script.js` tags on each page are endpoints automatically injected by
  Vercel (enabled by the `@vercel/analytics` and `@vercel/speed-insights` dependencies in
  `package.json`) - they do not point to files in this repo and must not be "fixed" to do so.
  Despite the repository name (`faelplg.github.io`), the actual deployment is not on GitHub Pages.
- **Bun** is the runtime/package manager (`bun.lock`), but no build/dev script is defined in
  `package.json` - the site needs no compilation step to be served.

## Structure

```
index.html / longward.html / sobre.html / contato.html → pt-BR pages (root)
estudos/*.html                                          → pt-BR "Estudos" (Studies) section (index + one file per study)
boletins/*.html                                         → monthly bulletins in pt-BR (index + one file per month, YYYY-MM.html)
en/bulletins/*.html                                     → monthly bulletins in English (same file names as pt-BR)
en/studies/*.html                                       → English Studies section (paths always in English)
en/{index,longward,career,contact}.html                 → en pages (1:1 mirror of pt-BR, English names)
assets/site.css, hero.css, canvas.js, hero.js, cards.js → exact copies from fael-tech-design-system (do not edit here)
assets/main.css                                          → site-specific styles (frame, menu, Home, Studies, Longward);
                                                             consumes only semantic var(--ft-*) tokens from brand/tokens.css
assets/main.js                                            → hero bar menu and footer year
vercel.json                                               → redirects from old addresses
assets/img/                                               → site images (e.g. avatar/avatar-busto.webp for the home hero, og/fael-tech.png for sharing)
tools/og-image.html                                       → sharing image source; the command to generate the PNG is at the top of the file
brand/                                                    → single source of truth for the brand (see section below)
docs/ai/overview.md                                       → purpose, tone of voice, content guidelines
docs/ai/facts.md                                          → canonical career/bio facts (single source of numbers/dates)
docs/ai/content-map.md                                    → pt/en page map with each page's purpose and key claims
llms.txt                                                  → machine-readable index at the root (llms.txt convention)
```

## Content rules (mandatory)

1. **`docs/ai/facts.md` is the single source of truth** for dates, roles, metrics and education. If
   a career fact changes, edit `facts.md` first and only then replicate it on the public pages
   (especially `sobre.html` / `en/career.html`). Never invent a role, company, date or number
   that is not there or on the already published pages.
2. **pt/en parity is mandatory.** Any content change to a pt-BR page must be replicated on the
   corresponding `en/` page (and vice versa) in the same editing session. The two must never
   diverge in facts, only in language. English pages use English file and folder names
   (`en/career.html`, `en/studies/`), without mixing languages. When renaming or removing a
   published page, add the redirect to `vercel.json`.
3. **Tone of voice:** direct, no hype, no empty superlatives ("revolutionary", "world-class").
   See [docs/ai/overview.md](docs/ai/overview.md#tone-of-voice-and-content-guidelines) for the full
   guidelines (engineering and portfolio before titles, first person without sounding like a
   dialogue with AI, numbers without invented causality, Longward only through its thesis, etc.).
4. **Sentence case, never title case** in titles and headlines - a brand convention that applies
   to both pt and en.
5. When changing the page structure (new section, new page, title), update
   `docs/ai/content-map.md`, `llms.txt` and the "Structure" block in `README.md` together.
6. Never use an em dash in content; use a plain hyphen "-" (a convention already applied
   throughout the repository).

## `brand/` - do not modify without confirmation

`brand/` is the single source of truth for the visual identity (SVG symbol, `tokens.css`, original
printable manual) and **is not edited from the rest of the site**. If a task appears to require
changing a brand color, token or asset, stop and confirm with the user before touching any file
inside `brand/` - treat it as a vendored external dependency, not site code. `assets/site.css`
should only consume the `var(--ft-*)` tokens already exposed by `brand/tokens.css`; never redeclare
color/typography values locally. Usage details and brand rules (liquid glass, clear space, colors)
are in [brand/README.md](brand/README.md) and the full manual.

## Workflow when editing an HTML page

Each HTML page is standalone (no includes/templates), so shared elements - the navigation bar
(`.ds-hero__bar`, inside each page's hero, with the `.site-langs` language flags),
`<link rel="alternate" hreflang>`, sharing tags (`og:*` and `twitter:card`, with `og:title` and
`og:description` matching the page's `<title>` and `meta description`, and `og:url` containing its
address), Vercel tags, `<link rel="stylesheet">` - are duplicated in every file. When changing one
of these elements (e.g. a navigation link), replicate the change across all pt and en pages, not
just the one that prompted the edit. This includes pages in `estudos/`, `en/studies/`, `boletins/`
and `en/bulletins/`, which are in subfolders (paths with `../` and `../../`). When creating a page,
copy the `<head>` and `<header class="ds-hero ...">` structure from an existing page in the same
language to avoid missing a `hreflang` or script inclusion.

## Studies: dates and updates

Every study has the same metadata: type, status, publication date and, when applicable, update
date. When changing a study's content, in the same edit and in both languages:

1. add "Atualizado em" / "Updated" to the page's `.study-meta` (or replace the existing date);
2. add an entry at the top of the `.study-changes` list, with the date and a sentence about what changed;
3. in the study's entry in the index (`estudos/index.html` and `en/studies/index.html`), add
   `· atualizado em <data>` / `· updated <date>` next to the date and keep the order from newest
   to oldest.

Typo fixes do not count as updates, nor do changes made on the publication date: they are part of
the publication. Dates use `<time datetime="YYYY-MM-DD">`.

## Monthly bulletins

Bulletins are a monthly series with their own section, not studies: they have no type, status or
`.study-changes` list. Each month is one file per language, named `YYYY-MM.html`
(`boletins/2026-10.html` and `en/bulletins/2026-10.html`). To add a month:

1. Copy the latest bulletin in each language to the new `YYYY-MM.html` and update `<title>`,
   `meta description`, `og:*` (including `og:url`), `hreflang`, the language flag link, the crumbs
   and the `.study-meta` line (issue number, month, publication date).
2. Keep the structure: opening summary, the "Nesta edição" / "In this issue" list, one
   `.bulletin-section` per section and one `.bulletin-item` per item, with its monthly rank, "O que
   aconteceu" / "What happened", "Por que importa" / "Why it matters", an optional
   `.bulletin-relation` (linking to the project's study page when one exists) and the sources.
3. Sources show the newsletter name and date, linking to the public URL with its domain as the
   link text. Never publish internal paths, radar tags or review notes from the draft. A source
   without a public URL gets only the newsletter name and date.
4. Add the edition as the first `.site-timeline__item` in `boletins/index.html` and
   `en/bulletins/index.html`.
5. Bulletins are not updated after publication, apart from typo fixes.

## Design system

The visuals follow the [fael-tech-design-system](https://github.com/faelplg/design-systems/tree/main/fael-tech-design-system).
`brand/tokens.css`, `brand/assets/*.svg`, `assets/site.css`, `assets/hero.css`, `assets/canvas.js`,
`assets/hero.js`, `assets/cards.js` and `assets/img/avatar/avatar-busto.webp` are exact copies from
there: to change any of them, change the design system and copy them again. Site-only styles go
in `assets/main.css`. Each page opens with a design system hero: Busto (Bust) on Home, Agulhas
(Needles) on "Trajetória" (Career), Retícula (Grid) on "Estudos" (Studies), Estratos (Strata) on
Longward, Interferência (Interference) on "Contato" (Contact) and Phases on "Boletins" (Bulletins).
Each main section ("Início", "Trajetória", "Estudos", "Boletins", Longward, "Contato") has its own
hero, which is not repeated in another section. Within a section, the hero stays the same: the
Studies index and all study pages use Retícula, the bulletins index and every issue use Phases,
and each pt/en pair shares its hero. The theme follows the operating system (`light-dark()` in
the semantic tokens); components never use hex, `rgba()` or primitives (`--ft-teal-*`,
`--ft-ink`...), only semantic tokens (`--ft-fg`, `--ft-bg-raised`, `--ft-accent`...), and spacing
comes from `--ft-space-*`.

### Page composition

The site should feel alive without becoming cluttered. Rules for any new or modified page:

- **Purposeful visual moments.** The hero is the page's main visual moment. Animated stages (such
  as the architecture cards in `cards.js`) belong where they illustrate the subject, never as
  unrelated decoration.
- **Responsible motion.** Animation pauses offscreen, respects `prefers-reduced-motion` and does
  not loop to draw attention.
- **Works without JavaScript.** All text and links remain readable and usable without JS.
- **Transfer budget.** Each page stays around 150 KB transferred, excluding optimized images,
  with no external dependency other than fonts.
- **Nothing fictional.** No invented numbers, mockups or dashboards; displayed artifacts
  (terminal output, document excerpts) come from real runs and files.
- **No card grid by default.** No "numbered label + 3 cards". Sections vary between prose,
  editorial lists with labels on the left, captioned artifacts and cards only when each item
  is a unit of its own.

## Local testing

No dev server is configured in `package.json`. CI runs `bun run lint:html` and the offline
internal-links check, including fragments. See [Local development in README.md](README.md#local-development)
for installation, static preview and validation commands.

Also check pages visually in a browser: verify layout, internal links, pt<->en `hreflang` and
readability in light/dark mode (the tokens in `brand/tokens.css` respond to the system theme).

## What to avoid

- Do not add a framework, bundler or build dependency - the static/zero-build nature is
  intentional.
- Do not create a separate "components" page or storybook - the site itself is the living
  demonstration of the brand system.
- Do not edit `brand/` without prior user confirmation (see section above).
- Do not publish a biographical/career fact that is not in `docs/ai/facts.md` or already published.
- Do not let pt-BR and en diverge in content or structure.
