# Pengbo IO — Landing Page Design Brief (Final)

> Produced by a 3-direction / 3-judge / synthesis design exploration. Canonical tokens live in `src/styles/global.css`; this document is the rationale and spec.

## Chosen direction: Editorial / "McKinsey-for-code" (Fraunces + warm paper + ink navy)

**Why this wins.** Two of three judges (differentiation lens, buildability lens) picked it; the conversion judge ranked it a close second. It is the visual opposite of the neon dev-tool template — which is exactly the right signal to a founder making a real financial decision about senior judgment. It is also the cheapest and most durable build: no gradients, no blur, no JS, currentColor diagrams that invert for free, all token pairs verified AA. The conversion judge's worry ("consultant-allergic founders") is neutralized by grafting the terminal direction's proof artifacts and mono discipline: the page reads as an engineering memo with a real terminal in it, not a deck.

**Grafts adopted from the other two directions (per judge consensus):**
1. The dark terminal proof-artifact card, dark in BOTH modes, with the exact script lines (rejected push → CI → RLS tests → deploy).
2. Hero headline swapped to "You shipped fast. We make it safe to keep shipping fast." The editorial line "Your product is real. Your release process is you." opens the problem section.
3. Handoff styled as a typographic headline moment: "You operate everything. We leave."
4. Mono stat line "3 envs · 12 weeks · 1 drill" as a hero-adjacent proof strip.
5. `[x] branch protection`-style mono prefixes on the deliverables checklist (aria-hidden, see a11y).
6. Horizontal-desktop / vertical-mobile 4-step engagement rail with mono numbers in bordered circles.
7. Never more than one primary button visible per viewport; secondary ghost CTA anchors to "#plan".
8. Restraint as brand law: no drop shadows anywhere, no motion beyond 150ms hover/focus transitions, hairline borders do all separation.
9. AA contrast ratios annotated on every token (below) and kept as comments in the `@theme` block.

---

## Palette (CSS-ready, ratios verified)

### Light mode (default, `:root`)
| Role | Hex | Contrast |
|---|---|---|
| bg | `#FAF9F6` | — |
| surface (cards) | `#FFFFFF` | — |
| text | `#1A1A18` | 16.55:1 on bg |
| muted | `#5C5A55` | 6.54:1 on bg, 6.89:1 on surface |
| accent (ink navy — links, eyebrows, CTA fill) | `#1F3A5F` | 10.91:1 on bg |
| accent-hover | `#16293F` | — |
| accent-contrast (text on accent) | `#FAF9F6` | 10.91:1 on accent |
| border (hairlines) | `#E4E1DA` | decorative only |

### Dark mode (`prefers-color-scheme: dark`, no JS toggle)
| Role | Hex | Contrast |
|---|---|---|
| bg | `#161511` | — |
| surface | `#201F1A` | — |
| text | `#EDEAE3` | 15.21:1 on bg |
| muted | `#A5A198` | 7.09:1 on bg, 6.41:1 on surface |
| accent (pale slate-blue) | `#A9C3E4` | 10.1:1 on bg |
| accent-hover | `#C2D5EC` | — |
| accent-contrast (text on accent CTA) | `#161511` | 10.1:1 on accent |
| border | `#33322C` | decorative only |

### Terminal card (identical in BOTH modes — themed once)
| Role | Hex | Contrast |
|---|---|---|
| terminal bg | `#14171F` | — |
| terminal border | `#262B36` | — |
| terminal primary text | `#F2F4F8` | 16.27:1 |
| terminal muted/prompt | `#94A3B8` | 6.99:1 |
| success green (✓ lines) | `#34D399` | 9.32:1 |
| failure red (✗ line) | `#F87171` | 7.0:1 |

Implement all tokens as Tailwind v4 `@theme` CSS variables on `:root` with a `@media (prefers-color-scheme: dark)` override block. Keep the ratio comments next to each variable so future edits can't silently break AA.

## Typography (Google Fonts)
- **Display: Fraunces** (variable; opsz + wght axes). h1 `text-5xl md:text-7xl`, weight 560 (static fallback 600), tracking `-0.015em`, line-height 1.05. h2 `text-3xl md:text-4xl`, weight 500. Fraunces for h1–h3 only — never body, never UI.
- **Body: Inter.** 18px/1.7 (`text-lg leading-relaxed`) paragraphs in muted; lead paragraphs in text. 400 body, 500 for nav/UI labels/buttons.
- **Mono: IBM Plex Mono.** 400/500. Strictly limited to: numbered eyebrows, the terminal card, checklist prefixes, phase numbers, and the stat line. Nowhere decorative beyond these — single-motif discipline.
- Eyebrow spec (the signature motif): IBM Plex Mono 500, 13px, uppercase, `tracking-[0.08em]`, accent color, format `01 — DIAGNOSTIC WEEK`. Every section opens with one.

## Layout, spacing, radius, borders
- Single prose column: `max-w-[68ch]` for body sections; `max-w-5xl` for hero, terminal card, card grids, rail. Everything left-aligned including the hero — no centered marketing layouts.
- Section rhythm: `py-24` mobile / `py-32` desktop; 1px full-width `border-t` hairline between major sections. No background color blocks, no alternating stripes — whitespace and hairlines do the structure.
- Radius: 6px (`rounded-md`) buttons, 8px (`rounded-lg`) cards, 12px (`rounded-xl`) terminal card only.
- Shadows: none, either mode. Motion: none beyond 150ms color/border transitions on hover/focus. Imagery: no photos, no illustrations, no icon packs. Only graphics permitted: 1px-stroke schematic SVGs (dev → staging → prod; PR gate flow) drawn in `currentColor` so they invert cleanly, and the one terminal card.
- Links in body copy: underlined, `underline-offset-4 decoration-1`, decoration muted → accent on hover. Selection: accent at 20%. Min tap target 44px.

## Per-component specs

**Nav.** Static (not sticky), `h-16`, bg = page bg, 1px bottom hairline. Left: "Pengbo IO" wordmark in Fraunces 500, 20px. Right: text links (The problem, What we install, The plan, FAQ) in Inter 500 15px muted → text on hover, plus one "Book intro call" button (ghost style — the hero owns the viewport's single primary). Mobile: wordmark + button only, links collapse away (anchor page, no hamburger needed).

**Hero.** Left-aligned, `max-w-5xl`, `pt-24 pb-16`. Eyebrow: `SDLC HARNESS — FOR FOUNDER-BUILT PRODUCTS`. h1 in Fraunces per type spec. Subhead Inter 18–20px muted, `max-w-[60ch]`. Button row: primary + secondary ghost ("See the 12-week plan" → `#plan`). Below buttons, the mono stat strip: `3 envs · 12 weeks · 1 drill · 0 retainers` — IBM Plex Mono 400 14px, muted. Terminal card sits directly under the hero: terminal bg `#14171F` both modes, `rounded-xl`, 1px `#262B36` border, three 8px dots in `#94A3B8` at 40%, IBM Plex Mono 13px/1.8, content exactly:

```
$ git push origin main
✗ blocked: PR required — branch protection on main
$ gh pr create → #214 "checkout: retry failed webhooks"
● ai-review   passed · 1 comment resolved
● human-review approved — senior engineer
✓ ci: typecheck · lint · build
✓ tests: unit · integration · rls
✓ deploy: staging → smoke → prod
```

`✗` line in `#F87171`, `✓` in `#34D399`, prompts `#94A3B8`, rest `#F2F4F8`. Static text, no typing animation. `aria-label` describing it as "terminal transcript showing a direct push blocked and a reviewed PR shipping through CI".

**Problem section ("signals").** Eyebrow `01 — WHERE YOU PROBABLY ARE`. Opens with the Fraunces h2 "Your product is real. Your release process is you." Six signal items as a 2-col (lg) / 1-col grid of borderless list rows: each a 2px accent square marker, Inter 600 16px title, one-line muted description. No cards here — keep it a memo list, contrast with the offer cards below.

**Offer / deliverables cards.** Eyebrow `02 — WHAT WE INSTALL`. 3-up (lg) / 1-up grid, `max-w-5xl`. Card: surface bg, 1px border, `rounded-lg`, `p-6`, no shadow. Each leads with a mono line `[x] branch protection` in accent (Plex Mono 500 13px, the `[x]` wrapped in `aria-hidden="true"`), then Fraunces 500 20px title, then Inter 15px muted description. Hover (non-interactive cards): none.

**Process timeline (`#plan`).** Eyebrow `03 — THE PLAN`. Horizontal 4-step rail on desktop, vertical on mobile. Step numbers in IBM Plex Mono inside 32px circles: 1px border, surface bg; 1px connecting line in border color. Steps: Diagnostic week → Phase 1 → Phases 2–3 → Handoff. Under Handoff, the closing state is a typographic headline moment — "You operate everything. We leave." set in Fraunces 500, primary text (never muted), one step larger than the other step titles.

**Why us / team.** Eyebrow `04 — WHO SHOWS UP`. Prose block `max-w-[68ch]`, no headshots, no avatars. One small currentColor schematic beside/below it (dev → staging → prod with a PR gate) if space allows.

**FAQ.** Eyebrow `05 — QUESTIONS FOUNDERS ASK`. Native `<details>/<summary>` elements — no JS accordion. Summary in Inter 600 17px text, 44px min height, hairline `border-b` per item; answer Inter 16px muted, `max-w-[68ch]`.

**Final CTA band.** No inverted color block — stay on page bg, hairline top border, `py-24`. Fraunces h2, one short muted subhead, single primary button, and under it a plain text link: `cal.com/pengbo/30min` in mono 14px muted. This is the only other primary button on the page besides the hero (one per viewport holds).

**Footer.** Hairline top border, `py-10`, single row (stacked mobile): "Pengbo IO LLC" Inter 500 15px, muted tagline, links (Book a call, Email) underlined muted. No logo walls, no client names, no social icon set.

**Buttons.** Primary: accent bg, accent-contrast text, `rounded-md`, `px-6 py-3`, Inter 500 15px, no gradient/shadow; hover accent-hover; `focus-visible` 2px accent ring, 2px offset in current bg. Secondary: transparent, 1px border-color border, text-color label; hover surface bg. Never more than one primary visible per viewport.

## Accessibility rules (non-negotiable)
- All token pairs above are verified ≥ 4.5:1 (actual values annotated; keep annotations in code).
- All mono prefixes/glyph decorations (`[x]`, `✓`, `✗`, `$`, `●`) wrapped in `aria-hidden="true"` with meaning carried by the visible words.
- Diagrams in currentColor with `<title>` descriptions; focus rings visible in both modes; `prefers-color-scheme` only, no theme-toggle JS.
