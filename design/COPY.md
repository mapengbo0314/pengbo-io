# Pengbo IO — Landing Page Copy (Final)

## NAV
- Wordmark: **Pengbo IO**
- Links: The problem · What we install · The plan · FAQ
- Button: **Book intro call**

## HERO
**Eyebrow:** SDLC HARNESS — FOR FOUNDER-BUILT PRODUCTS

**Headline:** You shipped fast. We make it safe to keep shipping fast.

**Subhead:** You've been getting away with straight-to-prod. Before the luck runs out, we wrap your codebase in staging, CI, real tests, and a rollback you've actually rehearsed — twelve weeks, fixed scope, then it's yours.

**Primary CTA:** Book a 30-minute intro call
**Secondary CTA:** See the 12-week plan

**Stat strip (mono):** 3 envs · 12 weeks · 1 drill · 0 retainers

**Terminal card content:** (see design brief — rejected direct push, AI + human review, CI, RLS tests, staging → smoke → prod)

## PROBLEM
**Heading:** Your product is real. Your release process is you.

**Intro line:** Shipping straight to prod was the correct tradeoff — it's how you got here. But somewhere along the way the product started carrying revenue, and the process didn't change. If most of these sound familiar, you're exactly who we built this for:

1. **Every deploy goes straight to prod.** There's no staging environment, so the first place new code meets real users is production.
2. **main is the only branch that matters.** Nothing stops a direct push, and nothing reviews a change before it ships.
3. **The test suite is you, clicking around.** No unit tests, no integration tests, and nothing verifying one tenant can't read another tenant's data.
4. **Releases live in your head.** What's safe to ship, in what order, and what to do when it breaks — none of it is written down.
5. **Rollback is a theory.** You've never actually rehearsed recovering from a bad deploy, so the first drill will be a real incident.
6. **Schema changes are hand-run.** The database and the code drift apart because migrations aren't versioned or synced with deploys.

**Closing line:** None of this means you built it wrong. It means the product outgrew the process — and the fix is installation, not a rewrite.

## OFFER / DELIVERABLES
**Heading:** What we install: the SDLC Harness

**Intro:** Fixed scope, built around your existing codebase — not a replatform, not a rewrite. Every item below is something your team operates after we leave.

1. **[x] Environment separation** — Real dev, staging, and prod environments, so code meets a safe copy of production before it meets your users.
2. **[x] Branch protection + PR-only merges** — Direct pushes to main get rejected. Every change ships through a pull request with one AI review and one human review.
3. **[x] CI gates** — Typecheck, lint, and build run on every PR. Broken code can't merge, which means you stop finding out in prod.
4. **[x] Automated testing** — Unit, integration, and functional-flow tests — plus tenant-isolation (RLS) tests that prove one customer can never see another's data.
5. **[x] Schema + migration sync** — Database migrations are versioned, reviewed, and deployed in lockstep with app and function code. No more hand-run SQL.
6. **[x] Release + rollback runbooks** — Written procedures for shipping and un-shipping, capped with a witnessed recovery drill: we break a deploy on purpose and you roll it back, with us in the room.
7. **[x] Smoke tests + feature flags** — Post-deploy smoke checks catch bad releases in minutes, and flags let you ship risky changes dark and turn them on when you choose.
8. **[x] Observability + analytics hygiene** — Errors, logs, and product analytics wired so you learn about problems from dashboards, not from customers.

## PROCESS
**Heading:** The plan: one week to diagnose, twelve to install, then we leave

**Phase 1 — Diagnostic week (paid).** We read your codebase, map your deploy path end to end, and pressure-test where a bad release actually hurts you. You get a written findings report and a fixed-scope, phased plan — useful even if you never hire us for the build.

**Phase 2 — Foundations (weeks 1–4).** Environment separation, branch protection, PR flow with AI + human review, and CI. The riskiest gaps close first, and your daily shipping rhythm doesn't stop while we work.

**Phase 3 — Test depth + release safety (weeks 5–12).** The test suite grows around your real flows — unit, integration, tenant isolation. Migration sync, coordinated deploys, feature flags, smoke tests, observability, and the runbooks, finishing with the witnessed recovery drill: you roll back a broken release yourself, on purpose, before it ever happens for real.

**Phase 4 — Handoff.**
**You operate everything. We leave.**
Every runbook is written for your team, every gate is yours to tune, and nothing depends on us being on retainer. That's the design goal from day one.

## WHY US / TEAM
**Heading:** Who shows up

**Body:** Pengbo IO is a small senior team — two senior engineers and a senior architect, led by Pengbo Ma. No account managers, no juniors learning on your codebase, no bench. The people on the intro call are the people in your repo.

We specialize in exactly one thing: taking products that were built at founder speed — often AI-accelerated — and making them production-grade without slowing them down. That means we don't arrive with a framework migration or a rewrite pitch. We arrive with a harness that fits the codebase you already have, and every gate we install is judged by one standard: does it catch real failures without taxing your ability to ship today, twice a day, whenever you want.

The engagement is fixed-scope on purpose. No hourly meters, no scope creep, no incentive for us to stay. The measure of success is the day you don't need us.

## FAQ
**Heading:** Questions founders ask

**Q: Won't all this process slow me down?**
A: The harness is designed to preserve founder speed, not bureaucratize it. CI runs in minutes, AI review is instant, and human review is scoped to catch real risk — not style debates. What actually slows founders down is a production incident with no staging, no tests, and no rollback plan. You'll ship at the same pace, with a floor under you.

**Q: Can I keep shipping during the engagement?**
A: Yes — that's a hard requirement of how we phase the work. We install around your live development, not instead of it. Branch protection and CI go in without freezing your roadmap, and you keep deploying throughout all twelve weeks.

**Q: What do you need from me?**
A: Repo access, deploy credentials, and a few hours a week — mostly reviewing PRs with us and being present for the recovery drill. The diagnostic week needs one deep conversation about how you ship today. We do the installation; you stay the expert on your product.

**Q: What happens after you leave?**
A: You run everything. Runbooks are written for your team, gates are documented and tunable, and the recovery drill means you've already rehearsed the worst day. There's no retainer and no dependency on us — if you ever want a check-in later, that's your call, not a subscription.

**Q: Why not just hire a full-time senior engineer?**
A: You probably should — eventually. But a great hire takes months to find and months to ramp, and one engineer building CI, test infrastructure, migration tooling, and runbooks alone is a year of work. We install the whole harness in about twelve weeks with three senior people, then hand it off. Your future hire walks into a codebase with guardrails already in place — which also makes them easier to recruit.

## FINAL CTA
**Heading:** Make production boring.

**Subhead:** A 30-minute call. We'll ask how you ship today, tell you honestly whether the diagnostic week is worth your money, and you'll leave with at least one thing to fix either way.

**Button:** Book a 30-minute intro call
**Text link below button (mono):** cal.com/pengbo/30min

## FOOTER
**Line:** Pengbo IO LLC — production readiness for founder-built products.
**Links:** Book a call (https://cal.com/pengbo/30min) · Email
