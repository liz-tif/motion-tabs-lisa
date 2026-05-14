# Agent Notes

Notes for the coding agent (Claude Code / Cursor agent) on this repository.

## Project overview

Vite 6 + React 19 + TypeScript + Tailwind v4 + motion 11. Educational template for a live-build lecture (Mittwoch 13.05.2026). Two components are stubs intended to be filled IN CLASS, not by the agent.

## Hard rules for the agent

1. **Do not auto-fill the stub markers** in `src/CursorFollower.tsx` and `src/TabBar.tsx`. The student types them together with the instructor. If the student asks you to "complete the file", point them to the live-build markers and stop.

2. **Do not install `framer-motion`.** This is the most common training-data hallucination. The correct package is `motion`. Imports come from `motion/react`. If you see `import { motion } from 'framer-motion'` anywhere — that is a bug, fix it to `motion/react`.

3. **Animate transform and opacity only.** Do not animate `width`, `height`, `top`, `left` for visual transitions. Use `x`, `y`, `scale`, `opacity`. The compositor cannot help with the others.

4. **Do not add `useState` for mouse position, scroll position, or any high-frequency continuous signal.** That is exactly the Junior bug this lecture exists to teach away from. Use `useMotionValue`.

5. **Do not import from `motion.config.ts` if SPRING_PRESETS does not cover the case.** Add a new named preset to that file FIRST, then import it. Naming the feel is the discipline.

6. **TypeScript strict.** No `any`. The `TabName` type in `TabBar.tsx` is intentionally derived from the `TABS as const` array — preserve that pattern.

## Style

- Tailwind v4 utility classes preferred over custom CSS
- Theme tokens live in `src/index.css` via `@theme {}`
- Spring presets live in `src/motion.config.ts`
- One component per file
- Default exports from `App.tsx` only — named exports for components

## When the student asks you to help

- **"How do I do X with Motion?"** → check `motion.dev/docs` first. Cite the URL in your answer.
- **"My animation is laggy."** → first question: are you animating transform/opacity, or layout properties? Reach for DevTools Rendering panel.
- **"Why doesn't this re-render?"** → MotionValues are subscriptions, not state. They bypass React's render cycle. This is the lesson, not a bug.

## Linked materials

The lecture context this repo lives inside:
- `LECTURE_BODY_SPEC.md` — what this lecture is about
- `06_REVIEW_LECTURE_FLOW.md` — what happens before the build
- `07_LECTURE_BODY_DOZENT_SCRIPT.md` — Ahmad's teleprompter for the build
