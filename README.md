e# Motion Day 3 — Cursor &amp; Tabs

Live-build template for **Mittwoch 13.05.2026** — W2 Motion module, Day 3.

This repo continues from where Tuesday's class stopped (`useScroll`). You build two new primitives with us today:
- `CursorFollower` (useMotionValue + useSpring)
- `TabBar` (layoutId + FLIP)

Then we compose all three in one app and watch the result in DevTools.

## Clone &amp; run

```bash
git clone https://github.com/OthmanAdi/motion-day-3-cursor-and-tabs.git
cd motion-day-3-cursor-and-tabs
bun install
bun run dev
```

Open `http://localhost:5173`. You should see the ScrollHero text and "Du hast gescrollt." Nothing else, yet. CursorFollower and TabBar render `null` — they are stubs you fill in.

## What's already done

| File | Status | What |
|---|---|---|
| `src/ScrollHero.tsx` | ✅ DONE | useScroll + useTransform — yesterday's reach point |
| `src/NextSection.tsx` | ✅ DONE | anchor section so the hero has room to scroll |
| `src/index.css` | ✅ DONE | Tailwind v4 + 3-layer @theme tokens |
| `src/motion.config.ts` | ✅ DONE | shared spring presets (smooth / snappy / bounce) |

## What you build today

| File | Status | What | Block |
|---|---|---|---|
| `src/CursorFollower.tsx` | 🔨 STUB | useMotionValue + useSpring + useEffect with cleanup | B |
| `src/TabBar.tsx` | 🔨 STUB | useState + layoutId conditional indicator | C |
| `src/App.tsx` | ✅ wires it | Three primitives composed | D |

Each stub has `// === BEGIN BUILD N ===` and `// === END BUILD N ===` markers. Ahmad walks you through. Hint code is inside the markers — type it together, don't paste.

## 🔬 Watch in DevTools

Each primitive has a designated DevTools observation. See `docs/WATCH_IN_DEVTOOLS.md` for the full cheat sheet.

Short version:
- **CursorFollower** → Rendering panel → "Paint flashing" + "Layer borders"
- **TabBar** → Elements panel + Animations drawer at 25% speed

## 💡 Why this repo exists

See `docs/WHY_THIS_REPO.md` — short architecture note. Read it after class, not during.

## Stack

Vite 6 + React 19 + TypeScript + Tailwind v4 + motion 11. No `framer-motion`. The package was renamed. Imports come from `motion/react`.

## License

MIT.


## Coda Sprint — Mein Pick

**Sections gepickt:**
- Sektion 1: **ScrollHero** — Kreisanimation mit "Hi! It's Coda"
- Sektion 2: **CyclingHeadline** — Rotierende Wörter (CUSTOMIZE/MONETIZE/MAXIMIZE)
- Sektion 3: **TickerBanner** — Endlos laufendes Banner mit M&A News

**Warum diese:**
Diese drei Sektionen treffen das "Gefühl der Page" weil sie die Kern-Identität von Coda kommunizieren: Modern, dynamisch, und im Wachsen. Der wachsende Flieder-Kreis symbolisiert Skalierung, die rotierenden Wörter zeigen die Vielfalt der Lösungen, und das Ticker-Banner gibt aktuelles Unternehmensgeschehen wieder. Zusammen schaffen sie eine visuelle Story von Innovation und Wachstum.

**Entscheidungen:**
- **Cycling speed: 3.5s** — Balance zwischen Lesbarkeit und Dynamik. Nicht zu schnell zum Lesen, nicht zu langweilig für wiederkehrende Besucher.
- **Kreis scale: 0 → 7.5x bei 30% scroll** — Der Kreis wächst schnell genug um den Screen mit Flieder zu füllen, aber stoppt bevor er die ganzen Partner überdeckt. Endet etwa bei den ersten Produktkarten.
- **viewport.amount: 0.3** — 30% der Card muss sichtbar sein für Trigger. Gute Balance zwischen early trigger und user attention. 0.1 wäre zu früh, 0.5 zu spät.
- **staggerChildren delay: 0.1s** — Deutlicher aber nicht zu langsamer Versatz zwischen den Partner-Logos. 0.05s wäre zu subtil, 0.15s zu langsam für 8 Logos.
- **ScrollHero height: 70vh** — Kürzer als volle Screen-Höhe für snappigere Experience, aber genug Raum für den "Hi! It's Coda" Text.
- **Ticker duration: 25s** — Komfortable Lesegeschwindigkeit für den langen Acquisition-Text. Schneller wäre stressig, langsamer würde langweilig.
- **Theme: Vanilla/Flieder** — Warm und modern statt dunklem Coda-Grün. Flieder als Brand-Akzent, Vanilla für cleanen Background.
- **Typography: Merriweather** — Elegante Serif-Schrift für Headlines (Customize, Hi! It's Coda) trägt zur Premium-Ästhetik bei.

**DevTools-Receipt:**
✅ Alle Animations verwenden nur Transform-Properties (scale, y, opacity, rotate) — keine height/top/left/right.
✅ AnimatePresence mit key={wordIndex} für saubere Exit-Animationen.
✅ Kein "framer-motion" — überall "motion/react".
✅ Paint flashing zeigt keine Repaints — alles GPU-beschleunigt.

**Bottleneck:**
Die **fünfte Iteration am TickerBanner** — das Springen/Flackern am Ende des Loops zu fixen hat am meisten Zeit gekostet. Die Lösung war: Complete Rewrite mit translateX(100% → -100%) und opacity fade statt looping percentage animation.

**Mit 30 weiteren Minuten:**
Die **LogoStrip-Animation** refine — statt gleichzeitigem Fade-up würde ich einen wellen-artigen Effekt machen (mitte nach außen) oder die Partner-Logos mit subtilen Hover-States versehen (leichter Glow bei mouse-over in der jeweiligen Brand-Color).