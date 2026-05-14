# Why this repo exists

A short architecture note. Not required reading. But if you wonder why this template looks the way it does, here is the thinking.

## The premise

You did Monday's self-study. You read about all five Motion primitives. You saw the playground. You may have built some by hand.

You came to Tuesday's class. We reached `useScroll`. We did not reach `useMotionValue` or `layoutId`. The homework asked you to build them on your own.

That's a real-world engineering situation. Spec promised X. Sprint delivered 0.3X. The team has to recover without losing the production schedule. This is not theoretical — this is your week-after-week working life as an engineer.

The recovery move is not "redo Tuesday". The recovery move is **rebuild on a shared clean ground, in one session, with composition as the goal.** That is what this repo is.

## What's already wired

The boring infrastructure — Vite, Tailwind v4, TypeScript, motion, three component files, one wiring file, three spring presets, basic tokens — is already there. You do not learn from typing `import` lines for 20 minutes.

## What you build

You build the inside of two component files:
- `CursorFollower.tsx` — three small build sections (motion values, springs, effect)
- `TabBar.tsx` — two small build sections (state, render)

Each section has a `// === BEGIN BUILD N ===` marker. Inside the marker is a hint with the code shape. We type it together, then we observe in DevTools, then we explain why.

## What this is NOT

- Not a tutorial repo. Tutorials assume you read top-to-bottom. This repo assumes a live class is walking you through.
- Not the final form. This is a starter. Your homework will extend it.
- Not your portfolio piece. This is your scratch pad. You'll fork it later if you want to keep building.

## What the Stub Pattern teaches you

Senior engineers leave stubs that contain the architecture decision in the comments, not in the implementation. The hints in this repo are written that way:

> "Why two values: x and y are independent axes. The spring on x does not need to know about y."

That sentence is more important than the line `const mouseX = useMotionValue(0)`. The line you can copy. The sentence you have to understand. Read the comments more carefully than the code.

## Pattern source

This repo follows the same scaffolding pattern as Mandy's `hello-motion` (the only Tuesday-homework submission). Same components, same names, same import paths. We use her work as the reference implementation. She is not above you, she is one step ahead — the same way a Senior on a real team is one step ahead of a Junior on the same ticket.

## Closing

The premise of this module is: turn working professionals INTO engineers. Coding agents are the vehicle. CS fundamentals — state, contracts, invariants, composition, performance — are the destination. Today's lecture is one of those destinations.
