# 🔬 Watch in DevTools

Student-facing cheat sheet. Read this before today's live build, then refer back during.

The whole premise: **you don't really understand a Motion primitive until you have seen it from inside the browser's perspective.** DevTools makes the invisible visible.

---

## Moment 1 — CursorFollower (after Block B build)

### Setup
1. Run `bun run dev`
2. Open `http://localhost:5173`
3. Move your cursor — the dot should follow with spring physics
4. Open DevTools (`F12` or `Ctrl+Shift+I`)

### Peek A — Paint flashing
1. DevTools 3-dot menu → **More tools → Rendering**
2. Check **Paint flashing**
3. Move your cursor around the screen
4. **What you should see:** the cursor div does NOT flash green. The rest of the page does not flash either.
5. **What it means:** zero repaints. The dot moves via GPU compositor transforms — main thread is uninvolved.

### Peek B — Layer borders
1. Same Rendering panel
2. Check **Layer borders**
3. Look at the cursor div — orange border around it
4. **What it means:** the cursor div has been promoted to its own composited layer. GPU has dedicated memory for it. Future transforms are pure GPU work.

### Engineering Punkt
Paul Lewis, Google Chrome performance team:
> "Transform and opacity are the only properties the compositor handles without main-thread work."

Animate transform. Animate opacity. Everything else is a bug waiting to happen.

---

## Moment 2 — TabBar (after Block C build)

### Setup
1. Reload the page
2. The pill-style TabBar appears under the hero
3. Click between tabs — the brand-colored pill should glide, not jump

### Peek A — DOM mount/unmount
1. Right-click the active pill → **Inspect**
2. Elements panel jumps to the active button
3. You see a `<div>` indicator INSIDE that button
4. Click a different tab
5. **What you should see:** the indicator `<div>` UNMOUNTS from the old button and MOUNTS inside the new button — in real time, while Motion animates between them.

### Peek B — Slow-motion FLIP
1. DevTools 3-dot menu → **More tools → Animations**
2. Set playback to **25%**
3. Click another tab
4. The Animations drawer shows the running animation. Click it.
5. **What you should see:** the transform of the indicator div ticks frame by frame. `matrix(...)` values shift gradually. That's the FLIP — First-Last-Invert-Play — happening in slow motion.

### Engineering Punkt
`layoutId` animates between elements that are not the same element in the DOM. Two different `<div>`s become one animated entity. Motion measures positions before and after, applies an inverse transform, then animates back to identity.

This is the trick behind every smooth tab indicator on **Linear, Vercel, Stripe, Cal.com.**

---

## If you want to dig deeper after class

- **Performance tab record** — 3-second recording while wiggling cursor. Main thread track = mostly idle. Compositor track = busy.
- **Console** — type `$0.style.transform` while inspecting the indicator div mid-animation. You'll see the matrix value tick live.
- **3D View** — Rendering panel → "Frame Rendering Stats". FPS meter top-right.

---

## Why this is the actual lecture, not a side trip

Junior engineers write Motion code and trust it works. Senior engineers write Motion code and **verify it works the way they think.** DevTools is the receipts. You will reach for these panels in every real Code Review of animation code.
