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
- Sektion 1: **ScrollHero + CircleAnimation** — Animiertes Headline-Paar (SUBSCRIBE/LAUNCH GLOBALLY/ONE API) mit wachsendem Kreis
- Sektion 2: **RevealCard** — 4 Benefits Boxen (400+ Payment Methods, Global Coverage, One Integration, Instant Payouts)
- Sektion 3: **TickerBanner** — Professionelles News-Ticker mit Metrics & Social Proof

**Warum diese:**
Diese drei Sektionen treffen das "Gefühl der Page" weil sie die Kern-Identität von Coda kommunizieren: Modern, dynamisch, und im Wachsen. Der wachsende Kreis symbolisiert Skalierung, die rotierenden Headline-Paare zeigen die Vielfalt der Lösungen, und die Benefits kommunizieren konkreten Value. Zusammen schaffen sie eine visuelle Story von Innovation und Wachstum.

**Entscheidungen:**
- **Cycling speed: 3.5s** — Balance zwischen Lesbarkeit und Dynamik. Nicht zu schnell zum Lesen, nicht zu langweilig für wiederkehrende Besucher.
- **Kreis scale: 0 → 0.1 → 2 (0% → 10% → 50% scroll)** — Der Kreis erscheint erst beim Scrollen, wächst zum größten Punkt bei 30% scroll, und verschwindet sanft bei 60% scroll.
- **Circle opacity: 0 → 1 → 0 (0% → 5% → 40-60% scroll)** — Sanfter Fade-in und Fade-out für natürliche Übergänge.
- **viewport.amount: 0.3** — 30% der Card muss sichtbar sein für Trigger. Gute Balance zwischen early trigger und user attention. 0.1 wäre zu früh, 0.5 zu spät.
- **staggerChildren delay: 0.1s** — Deutlicher aber nicht zu langsamer Versatz zwischen den Benefits-Cards.
- **ScrollHero height: min-h-screen** — Fulle Screen-Höhe für maximalen Impact bei der ersten Animation.
- **Ticker duration: 25s** — Komfortable Lesegeschwindigkeit für die Metrics-Headlines.
- **Theme: Vanilla/Dunkelgrün** — Warm und modern mit kräftigem Grün als Brand-Akzent.
- **Typography: Merriweather** — Elegante Serif-Schrift für Headlines trägt zur Premium-Ästhetik bei.

**Bottleneck:**
Die **fünfte Iteration am TickerBanner** — das Springen/Flackern am Ende des Loops zu fixen hat am meisten Zeit gekostet. Die Lösung war: Complete Rewrite mit translateX(100% → -100%) und opacity fade statt looping percentage animation.

**Mit 30 weiteren Minuten:**
Die **LogoStrip-Animation** refine — statt gleichzeitigem Fade-up würde ich einen wellen-artigen Effekt machen (mitte nach außen) oder die Partner-Logos mit subtilen Hover-States versehen (leichter Glow bei mouse-over in der jeweiligen Brand-Color).