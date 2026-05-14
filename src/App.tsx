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

import { motion, useScroll, useTransform } from "motion/react"
import { ScrollHero } from "./ScrollHero"
import { NextSection } from "./NextSection"
import { TabBar } from "./TabBar"
import { RevealCard } from "./RevealCard"
import { LogoStrip } from "./LogoStrip"
import { TickerBanner } from "./TickerBanner"

function CircleAnimation() {
  const { scrollYProgress } = useScroll()
  const circleScale = useTransform(scrollYProgress, [0, 0.1, 0.5], [0, 0.1, 2])
  const circleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.4, 0.6], [0, 1, 1, 0])

  return (
    <div className="fixed inset-0 grid place-items-center pointer-events-none z-0">
      <motion.div
        style={{ scale: circleScale, opacity: circleOpacity }}
        className="w-96 h-96 rounded-full bg-[var(--color-brand)]"
      />
    </div>
  )
}

function NewsletterCTA() {
  return (
    <section className="py-16 px-8 text-center relative z-10">
      <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Stay updated.
      </h2>
      <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
        Get the latest payment insights, product updates, and exclusive industry trends delivered directly to your inbox.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[var(--color-brand)] text-white px-8 py-4 rounded-full text-lg font-bold cursor-pointer"
        style={{
          boxShadow: '0 0 40px var(--color-lilac-400)'
        }}
      >
        Subscribe to Newsletter ✨
      </motion.button>
    </section>
  )
}

export default function App() {
  return (
    <main>
      <TabBar />
      <TickerBanner />
      <ScrollHero />
      <CircleAnimation />
      <NextSection />
      <NewsletterCTA />
      <RevealCard />
      <LogoStrip />
    </main>
  )
}
