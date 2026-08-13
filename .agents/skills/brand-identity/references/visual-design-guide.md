# Visual design best-practices reference

Supporting reference for the `brand-identity` skill. Load this file in Step 5 of that workflow,
when producing or auditing a visual identity brief, or before implementing a brand touchpoint.

## Typography

- **Two-font system.** One display font for headlines, one body font for text. Contrast plus
  harmony: different enough for distinct roles, similar enough to feel cohesive. Assign each
  font a distinct role; avoid mixing more than two families, and only pair a decorative face with
  a neutral one, never two decorative faces together.
- **Body font.** Prioritize legibility - large x-height, open counters. Safe, neutral choices:
  Source Sans 3, Lora, IBM Plex Sans. For distinctiveness, avoid overused defaults (Inter,
  Roboto, Arial, system fonts, Space Grotesk) and prefer characterful choices that elevate the
  brand instead of reading as generic AI-generated design.
- **Headline font.** Carries the brand's voice; must be readable in under one second. Personality
  lives here while the body font handles infrastructure.
- **Type scale.** Use ratios of 1.25-1.5 (Major Third to Perfect Fifth) for hierarchy. Limit to
  3-4 styles per block. Max line length ~120 characters, with generous line-height.

## Color

- **Structure.** Primary, secondary, CTA/accent, background, text. Use a flexible system - a core
  hero color plus complementary shades - rather than a single rigid color.
- **Industry associations** (starting points, not rules):

  | Industry | Typical palette | Signal |
  |---|---|---|
  | Finance | Blue, gray, navy | Stability |
  | Luxury | Rose gold, burgundy, black | Exclusivity |
  | Tech | Teal, neon accents, charcoal | Innovation |
  | Wellness | Lavender, peach, mint | Calm |
  | Sustainability | Sage green, earthy tones | Groundedness |

- **Reproduction.** Give HEX and RGB always; add CMYK when print is in scope. For programmatic
  slide generation (e.g. python-pptx), map brand HEX to RGB tuples for fills and text, and keep a
  single HEX+RGB source-of-truth table in the deliverable.
- **Accessibility.** Contrast ≥4.5:1 for normal text, ≥3:1 for large text (18px+, or 14px+ bold)
  and for interactive/UI elements. Never rely on color alone to convey information - pair it with
  text or an icon for states like error/success.

## Spacing

- **Margins.** Define horizontal margins (e.g. 120px) and vertical section padding explicitly.
- **Grid.** Use a consistent spacing scale - an 8px base unit is a common default.
- **Logo clear space.** Document the minimum protected space around the logo in the brand
  guidelines, not just in the brief.

## Logo usage

- **Variants.** Primary, secondary, monogram/symbol-only; light-background and dark-background
  versions of each.
- **Minimum size.** Specify the smallest size at which the mark stays legible.
- **Don't.** Stretch, recolor, add drop shadows or effects, or rotate without explicit approval -
  the mark is normally flat, one color per application.

## Accessibility checklist

- Contrast: normal text ≥4.5:1, large text ≥3:1, interactive elements ≥3:1.
- Focus: visible focus indicator (≥2px solid, ≥3:1 contrast), logical tab order, no keyboard
  traps.
- Color: never the sole carrier of meaning - pair with text or icons for state changes.
- Keyboard: every interactive element reachable via Tab, Enter, and Space.
- Motion: respect `prefers-reduced-motion` for all animation.

## Anti-patterns to avoid

- Sacrificing usability for aesthetics.
- More than one primary CTA per section, or primary/secondary CTAs that aren't visually
  distinguishable.
- Inconsistent spacing, typography, or icon quality across a single surface - it reads as low
  trust even when the individual elements are fine.
- Disordered or cluttered text hierarchy.
- Overusing drop shadows, pop-ups, or crowded UI that competes with the content.
- Chasing visual trends that don't fit the brand's actual positioning.
- Heavy, unoptimized assets that hurt load time.
- Generic AI-aesthetic defaults: Inter/Roboto/Arial/system fonts, purple gradients on white, and
  other cookie-cutter patterns - these actively undermine a "distinctive identity" deliverable.
- Emoji used as UI icons. Use a real SVG icon set (Heroicons, Lucide, Simple Icons, or whatever
  the project already uses) instead.
- Hover states that use scale transforms and shift layout - prefer color/opacity transitions.

## Distinctive execution

Apply this section when the deliverable includes implementation (a hero section, a component
library, a page), not just a brief. Both bold maximalism and refined minimalism work - the
failure mode is doing either without intention.

- **Motion.** One well-orchestrated page-load moment (staggered reveals via animation delay) beats
  scattered micro-interactions. Prefer CSS-only animation for plain HTML, a motion library for
  React-based stacks when one is already in use. Always provide a reduced/no-motion path.
- **Spatial composition.** Favor asymmetry, overlap, diagonal flow, or grid-breaking elements over
  perfectly even, predictable grids. Choose generous negative space *or* controlled density
  deliberately - not by default.
- **Backgrounds & texture.** Prefer atmosphere over flat fills: gradient meshes, noise textures,
  geometric patterns, layered transparency, considered shadows. Match the technique to the
  brand's overall aesthetic rather than bolting it on.

## AI / SaaS visual trends & archetypes

Optional - relevant when the brand is a tech or AI-adjacent product deciding how to differentiate
itself from category sameness. Use consciously (adopt, ignore, or deliberately counter), not by
default.

**Visual trends**

| Trend | Signal |
|---|---|
| Off-white / beige | Trust, restraint, premium without gloss |
| Organic gradients + grain | Distinctiveness, texture |
| Digital impressionism | Mood over literal description |
| Lomo / imperfect photography | Exploratory, human |
| Contemporary realism | Precision, reliability, mastery |
| Sketch / scribble | Human thought, exploration over certainty |
| Non-brand academia | Authority - the work speaks for itself |
| Technical illustration | Rigor, engineering depth |
| Quirky cuteness | Approachability |
| Morphing objects | Emergence, systems that learn |
| Futuristic surrealism | Gateway to new possibility |
| ASCII / pixels | Retro, playful, technical |
| Generative art | Algorithmic, living system |

**Brand archetypes**

| Archetype | Tone | Visual cues |
|---|---|---|
| Likeable leaders | Seriousness, stability, trust | Muted greys, warm beiges, impressionistic |
| Gentle humanists | People before technology | Hand-drawn, everyday moments, nature |
| Nerdy idealists | Engineering culture | Unpolished, quirky, non-branded |
| Bold builders | Groundbreaking, transformative | Dark palettes, space references |
| Utopian dreamers | What becomes possible | Retrofuturistic, surreal worlds |

## Slides & documents (non-web touchpoints)

When the request covers a deck or document, not only a website:

- **Slide master.** Background from the token palette; title font = display/headline token; body
  = body-font token; default title/body sizes aligned to the type scale defined in the brief.
- **Theme colors.** Map primary, secondary, background, text, and one accent into the
  presentation tool's theme (PowerPoint Design → Variants, Google Slides Theme, Keynote Document
  settings) so shapes and charts inherit the palette automatically.
- **Charts & shapes.** Cycle accent colors in a fixed order (primary → secondary → tertiary)
  instead of leaving chart colors to the tool's default - keeps decks on-brand without manual
  fixing per chart.
- **Documents.** Reuse the same fonts and heading hierarchy as the web identity where possible;
  specify paragraph style names (Title, Heading 1-3, Normal) with their point sizes and colors so
  they map cleanly onto Word/Docs style pickers.

## Brand guidelines - single source of truth

A complete guidelines document (as opposed to a one-off brief) should cover:

- **Logo** - usage rules, clear space, minimum sizes, light/dark variants
- **Colors** - primary, secondary, CTA, background, text, each with HEX/RGB/CMYK
- **Typography** - families, hierarchy, sizing, spacing
- **Imagery** - photography tone, subject matter, visual mood
- **Iconography** - style, stroke weight, usage rules
