# fael.tech - personal site and brand lab

Static personal site of Rafael (Fael) Goulart, a software engineer specialized in UX and AI,
co-founder of two companies and former CTO, and the lab where the **fael.tech** brand visual
identity is applied. The site itself, built with the brand's tokens and rules, is the living
proof of the system (there is no separate "components" page). Bilingual: pt-BR at the root,
English in `en/`.

## Structure

```
index.html              → pt-BR · Home (personal landing page)
longward.html             → pt-BR · Longward (the company's thesis)
sobre.html                → pt-BR · Career
contato.html              → pt-BR · Contact
estudos/
  index.html                → pt-BR · Studies index
  historia-da-fael-tech.html, aikm.html, radiant.html, demerzel.html → studies
boletins/
  index.html                → pt-BR · monthly bulletins index
  2026-10.html              → pt-BR · bulletin for October 2026 (one YYYY-MM.html per month)
en/
  index.html                → en · Home
  longward.html               → en · Longward
  career.html                 → en · Career
  contact.html                → en · Contact
  studies/
    index.html                → en · Studies index
    fael-tech-story.html, aikm.html, radiant.html, demerzel.html → studies
  bulletins/
    index.html                → en · Monthly bulletins index
    2026-10.html              → en · Bulletin for October 2026
assets/
  site.css, hero.css          → exact copies from the fael-tech-design-system (components and heroes)
  canvas.js, hero.js, cards.js → exact copies from the fael-tech-design-system (animated stages for the heroes and the architecture cards)
  main.css                    → the site's own styles (uses the semantic tokens from brand/tokens.css)
  main.js                      → hero bar menu and footer year
  img/
    avatar/avatar-busto.webp    → bust avatar for the home hero; exact copy of the WebP generated in the fael-tech-design-system
    og/fael-tech.png            → sharing image (Open Graph) for every page
brand/          → single source of truth for the brand - DO NOT modify from this project
  manual-identidade-visual.html   → original printable manual
  tokens.css                → primitive and semantic tokens, light/dark, spacing, typography (--ft-*)
  assets/*.svg               → symbol, icon, favicon
  README.md                  → quick guide to the brand kit
docs/
  ai/                        → structured documentation for AI agents/LLMs
    overview.md                → site purpose, structure, tone of voice
    facts.md                    → canonical career/bio facts (single source of numbers and dates)
    content-map.md              → pt/en page map with the purpose of each page
tools/
  og-image.html              → source of the sharing image (the command to generate it is in the comment at the top)
llms.txt                  → machine-readable index at the root (llms.txt convention)
vercel.json               → redirects from old addresses (manual, horizonte, en/sobre, en/contato)
AGENTS.md                 → instructions for AI agents working in this repository
```

## Local development

Install dependencies with Bun:

```sh
bun install
```

There is no build step. Serve the repository root with any static server, for example:

```sh
bunx serve .
```

Validate the HTML before opening a pull request:

```sh
bun run lint:html
```

[CI](.github/workflows/ci.yml) runs HTML validation and the internal-links check on pull requests
and pushes to `master`. The links job uses `lycheeverse/lychee-action@v2` offline to check local
pages, assets and fragments, excluding `/_vercel/` endpoints injected at deployment. With the
Lychee CLI installed, run the equivalent check locally from the repository root:

```sh
lychee --offline --include-fragments --no-progress --root-dir "$PWD" \
  --exclude '/_vercel/' \
  './*.html' './en/*.html' './estudos/*.html' './en/studies/*.html' \
  './boletins/*.html' './en/bulletins/*.html'
```

Deployments run on Vercel from `master`.

## Documentation

To work on the brand kit itself (symbol, colors, tokens), see
[brand/README.md](brand/README.md). For AI agents/LLMs that need
structured facts about the site's content, see [llms.txt](llms.txt) and [docs/ai/](docs/ai/).
