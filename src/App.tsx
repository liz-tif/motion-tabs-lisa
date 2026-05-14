/**
 * App.tsx — the wiring layer
 *
 * Six Motion primitives, six components, one app. This is composition.
 *   - ScrollHero        — useScroll + useTransform   (DONE, from yesterday)
 *   - CursorFollower    — useMotionValue + useSpring (DONE, from yesterday)
 *   - TabBar            — layoutId + FLIP            (DONE, from yesterday)
 *   - LikeButton        — whileTap + whileHover      (DONE, from yesterday)
 *   - CyclingHeadline   — AnimatePresence + mode="wait" (NEW, from coda.co)
 *   - RevealCard        — whileInView                (NEW, from coda.co)
 *   - LogoStrip         — Variants + staggerChildren (NEW, from coda.co)
 *
 * 💡 Why separate files:
 *   Production-grade Motion code lives in small components. Each primitive
 *   has its own concerns — a single fat App.tsx is the wrong place to learn
 *   what the primitive IS. Mandy's hello-motion follows the same pattern.
 */

import { ScrollHero } from "./ScrollHero"
import { NextSection } from "./NextSection"
import { CursorFollower } from "./CursorFollower"
import { TabBar } from "./TabBar"
import { CyclingHeadline } from "./CyclingHeadline"
import { RevealCard } from "./RevealCard"
import { LogoStrip } from "./LogoStrip"
import { TickerBanner } from "./TickerBanner"

export default function App() {
  return (
    <main>
      <CursorFollower />
      <TabBar />
      <TickerBanner />
      <ScrollHero />
      <NextSection />
      <CyclingHeadline />
      <RevealCard />
      <LogoStrip />
    </main>
  )
}
