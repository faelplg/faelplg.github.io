# docs/ai/content-map.md - page map (pt/en)

> Map of each page's purpose and key claims, for agents that need to quickly locate where
> information is published. English pages use English file names. Old addresses (`manual.html`,
> `en/manual.html`, `horizonte.html`, `en/horizonte.html`, `en/sobre.html`, `en/contato.html`)
> redirect through `vercel.json`.

## "Início" (Home) - `index.html` / `en/index.html`

- **Purpose:** answer who Fael is and what he is building within a few seconds.
- **Content:** hero with a bust avatar and self-description (see `facts.md`); "Por que a fael.tech
  existe" (Why fael.tech exists: where he studies, builds and publishes, and the name for his
  independent work); "No que estou trabalhando" (What I am working on), with animated
  architecture cards for Longward, AIKM (with real terminal output) and Radiant (with a real
  task contract excerpt); "Vamos conversar" (Let's talk), with consulting and partnerships.
- **Does not contain:** career timeline (on "Trajetória", Career). The brand's story is in the
  study "A história da fael.tech" (The story of fael.tech).

## "Estudos" (Studies) - `estudos/` / `en/studies/`

- **Purpose:** Fael's projects, methods and theses, with what he learned building each one.
  English paths stay in English (`en/studies/`), without mixing languages.
- **Index:** `estudos/index.html` / `en/studies/index.html`, only the studies, as the design
  system's node cards, newest first: the most recent (Demerzel) is the highlighted card on the
  full row, and the others share the rows below.
  Every card has the date (and update), type, title, summary, topics from the study's sections,
  state and a link to read it.
- **Study page:** metadata line (type, status, published on, updated on) and, at the end, the
  "Atualizações" (Updates) list with the dated history. See `AGENTS.md` for the update procedure.
- **A história da fael.tech** (The story of fael.tech, essay): `estudos/historia-da-fael-tech.html` /
  `en/studies/fael-tech-story.html`. Why fael.tech exists, how Fael works, what the brand
  represents and the site as the first application of the design system.
- **AIKM** (project, open source soon): `estudos/aikm.html` / `en/studies/aikm.html`. A manager
  for each project's agent environment: the problem and the hypothesis, the catalog, the
  `aikm.yaml` manifest and `aikm sync` (with a manifest example), external sources pinned to a
  commit, and the guarantees (fails closed, private pieces never reach public repositories).
- **Radiant** (method, in progress): `estudos/radiant.html` / `en/studies/radiant.html`. The
  central question, the six-stage cycle, the task contract, roles with delegation, capabilities
  (`deep`, `standard`, `light`), execution units and routing rules (dispatched by Demerzel),
  Maintenance that only proposes changes, and the constitution. Repository note: public, MIT license.
- **Demerzel** (project, in progress): `estudos/demerzel.html` / `en/studies/demerzel.html`. How
  each unit of a Radiant contract becomes a Claude Code or Codex session in herdr: the question,
  what it does (with an example unit block), the core and the Radiant integration, the dispatch
  order in herdr, what it refuses, and how it relates to Radiant. Repository note: public, MIT license.
- **Rule:** studies describe how things work, not the internal development history (commit
  dates, verification records, observed reuse).

## "Boletins" (Bulletins) - `boletins/` / `en/bulletins/`

- **Purpose:** a monthly series, not a study, on what mattered in AI and technology. Opens
  with the Phases hero.
- **Index:** `boletins/index.html` / `en/bulletins/index.html`, the issues as a `.site-timeline`,
  newest first.
- **Issue:** each issue (`YYYY-MM.html`) has an issue marker (number,
  month, publication date), an opening summary, the sections "Agentes de IA" / AI agents, "Segundo
  cérebro" / Second brain, UX/UI and "IA e ativismo cívico" / AI and civic activism, and per item the
  monthly rank, what happened, why it matters, an optional relation to Fael's projects and the
  sources. October 2026 (issue 1): agents blocked by stores and banks, agents escaping their
  controls, Claude Duet, skills instead of subagents, Ramp Glass, Canva Craft, model-generated
  interfaces, cities stopping cameras and data centers, who pays for open data, and r/opensource
  banning AI projects. Procedure for a new month in `AGENTS.md`.

## Longward - `longward.html` / `en/longward.html`

- **Purpose:** present the thesis of Longward, the company Fael is founding.
- **Content:** metadata line (company, being formed); the motivation drawn from Isaac Asimov's
  *Foundation*; the thesis of collective continuity; the role of AI (without erasing the origin);
  the four questions an idea must answer to become a product; and how the products will be built
  (semi-autonomous agentic processes with Radiant and other methodologies; they may start free
  and gain paid, premium or enterprise plans; without depending on locking in people's attention
  or data).
- **Deliberately excluded:** Longward product names, ideas or experiments.

## "Trajetória" (Career) - `sobre.html` / `en/career.html`

- **Purpose:** detailed professional career (equivalent to a web resume), in a restrained tone.
- **Content:** two-paragraph profile, full timeline with deliverables and responsibilities by
  role, education, postgraduate program in progress, MIT certification and languages.
- **Facts cited here must match** [facts.md](./facts.md) **exactly**.

## "Contato" (Contact) - `contato.html` / `en/contact.html`

- **Purpose:** contact channels.
- **Content:** consulting and partnerships through fael.tech (engineering and technical
  leadership, AI in software development, product or research projects), email (r@fael.tech),
  LinkedIn, GitHub and location (Florianópolis, SC).
