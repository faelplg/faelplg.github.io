---
name: brand-identity
description: Use when building or auditing a visual brand identity - logo direction, color palette, typography, imagery, iconography, spacing, and design tokens - or when translating an existing brand strategy into a designer-ready visual brief. Trigger phrases include "visual identity", "brand identity", "logo brief", "logo direction", "brand guidelines", "design system", "style guide", "color palette for my brand", "typography for my brand", "brand look and feel", "briefing a designer", "rebrand", "brand audit", "design tokens". Plain markdown with no tool-specific instructions, so it works the same in any coding agent that reads SKILL.md files (Claude Code, Cursor, Codex, or similar).
metadata:
  version: 1.0.0
---

# Brand Identity Design

Act as a senior brand identity strategist and creative director. Convert brand strategy into a
clear, actionable visual identity brief - or apply an existing identity consistently - across
whatever touchpoints the user needs: web, product UI, print, packaging, social, presentation
decks, documents. Treat every deliverable as production-ready direction a designer or another
agent could execute from without asking follow-up questions, not moodboard vibes.

## Step 1 - Load what already exists

Before asking the user anything, look for brand context already documented in the project.
Check, roughly in order of likelihood:

- A dedicated brand/design folder (`brand/`, `design/`, `identity/`)
- Design tokens (`tokens.css`, `theme.ts`, `tailwind.config.*`, `design-tokens.json`)
- Brand or style docs (`BRAND.md`, `STYLE_GUIDE.md`, `docs/brand/`, `docs/ai/`)
- Any project- or agent-context file the repo uses for durable instructions (e.g. `AGENTS.md`,
  `CLAUDE.md`, `.agents/brand-context.md`, or an equivalent project-context file)

If something exists, read it fully first. Your job is then usually to **extend or apply** the
existing identity, not invent a new one - don't propose a new palette or typeface pairing over
one that's already established without flagging that you're doing so and why. If the project
marks its brand assets as a protected source of truth (not to be edited casually), respect that
and ask before changing anything inside it.

If nothing exists, this is greenfield work - proceed to Step 2.

## Step 2 - Scope the request

Identify which of these you're doing, since it changes the deliverable:

1. **New identity** - full brief from zero (Step 3 + Step 4)
2. **Audit** - review an existing identity against the best-practices reference and flag concrete
   gaps, not just impressions
3. **Single touchpoint / component** - e.g. just a hero section, a slide deck, a favicon - apply
   the existing identity's tokens rather than re-deriving them
4. **Strategy-to-visual translation** - the user already has a brand strategy/positioning doc;
   your job is Step 4 only, grounded in that doc

Also note which touchpoints are in play: web, product UI, print, packaging, social, presentation
decks (PowerPoint/Google Slides/Keynote), documents (Word/Docs/PDF). Slides and documents need
explicit theme mapping - don't assume "brand colors" alone covers it. See
`references/visual-design-guide.md`.

## Step 3 - Gather what's missing

Ask only for what Step 1 didn't already answer:

1. Brand name and category - what is it, what does it do?
2. Personality - 3-5 words describing its character
3. Audience - who are they, what aesthetic resonates with them?
4. Positioning - premium, accessible, niche, mass?
5. Tone - formal or casual, playful or serious?
6. References - brands, logos, or visual styles they admire (and why)
7. Constraints - anything that must NOT appear (colors, styles, associations)
8. Touchpoints - where will this identity live (confirmed in Step 2)

Don't ask questions the existing context already answers - cite what you found instead.

## Step 4 - Produce the visual identity brief

Write for a designer (or another agent) who has never seen the brand. Vague direction is
useless - "clean and modern" says nothing, "Helvetica-weight, tight kerning, no decorative
elements" says something. Reference real fonts, real hex codes, real brands - never
placeholders.

Structure the brief in this order, omitting sections outside the current scope:

**01 - Identity strategy statement**
One paragraph translating positioning and personality into a design intention - the "why" behind
every choice that follows.

**02 - Logo direction**
Primary approach (wordmark / lettermark / symbol+wordmark / symbol alone), character, style axis
(geometric vs organic, constructed vs hand-drawn, minimal vs expressive), what to avoid, and 3
real logo references naming the specific quality to borrow from each.

**03 - Color palette**
Primary color (name + hex + rationale), 2-3 secondary/accent colors with roles, palette type
(monochromatic / analogous / complementary / triadic), emotional territory, usage rules and
combinations to avoid. Provide HEX + RGB (+ CMYK if print is in scope). See the reference doc for
industry color associations and accessibility contrast minimums.

**04 - Typography**
Primary and secondary typeface (name real fonts), pairing rationale, type personality, usage
hierarchy (headline/subhead/body/label), what to avoid. See the reference doc for pairing and
scale rules.

**05 - Imagery & photography style**
Overall mood, subject matter, color treatment, what to avoid (stock clichés, over-production).

**06 - Iconography & illustration**
Style (line/filled/rounded/sharp/abstract), weight, personality (utilitarian vs expressive).
Never emoji as UI icons - use a real icon set (Heroicons, Lucide, Simple Icons, or the project's
existing set).

**07 - Design principles**
3-4 named principles, each with 2 sentences on what it means in practice for this brand's visual
decisions.

**08 - Brand expressions**
Concrete direction per confirmed touchpoint (social, web/app, stationery, packaging, decks,
etc.) - not a generic list, only the ones that matter here.

For audits (Step 2 option 2), replace this structure with a gap list: what's inconsistent or
missing, against which of the above categories, with a concrete fix for each.

## Step 5 - Check against the reference before handing off

Load `references/visual-design-guide.md` (if not already loaded) and cross-check the brief
against it - typography pairing rules, color/contrast minimums, spacing, logo clear space,
accessibility, and common anti-patterns. Fix anything the brief itself violates before
delivering it.

If the deliverable includes implementation (not just a brief) - web components, a slide master, a
document template - also apply that reference's "distinctive execution" and "slides & documents"
sections; a brief alone won't keep motion, spacing, and theme-mapping consistent.

## Output checklist

- [ ] Grounded in existing brand context where it exists, not reinvented
- [ ] Every recommendation is concrete (real hex, real font, real reference brand)
- [ ] Palette includes contrast-checked text/background pairs
- [ ] Scope-appropriate: audits produce gaps, not a fresh brief; single components inherit
      tokens, not new ones
- [ ] Touchpoints outside "web" (print, slides, docs) are explicitly addressed if in scope, not
      silently skipped
