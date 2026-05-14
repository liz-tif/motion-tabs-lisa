/**
 * ScrollHero — useScroll + useTransform
 *
 * Status: DONE. This is yesterday's reach point — the only primitive we
 * built live in class on 12.05.2026.
 *
 * 💡 Why this matters:
 *   `scrollYProgress` is a MotionValue, not React state. It updates 60 times
 *   per second while you scroll, and React re-renders ZERO times during it.
 *   The DOM reads the new value through Motion's subscription mechanism,
 *   the GPU compositor applies the transform, and main thread stays idle.
 *
 *   Mandy's reflection: "useScroll und useMotionValue sind performant,
 *   weil Motion nicht ständig neu rendert."
 *
 * 🔬 DevTools moment (will do live):
 *   1. Open DevTools → Performance tab
 *   2. Click record, scroll the page slowly for 3 seconds, click stop
 *   3. Look at the Main thread track — mostly idle
 *   4. Look at the Compositor track — busy doing transform work
 *   5. That asymmetry is the whole point of MotionValues
 */

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

const HEADLINES = [
  {
    headline: "SUBSCRIBE",
    subline: "Get exclusive insights, product updates, and payment industry trends delivered to your inbox"
  },
  {
    headline: "LAUNCH GLOBALLY",
    subline: "Expand your business to 140+ countries with a single integration. Local payment methods included."
  },
  {
    headline: "ONE API",
    subline: "Simple implementation, powerful results. Start accepting payments in minutes, not months."
  }
]

export function ScrollHero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HEADLINES.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section
      className="min-h-screen grid place-items-center text-center relative z-0"
    >
      <motion.div className="absolute">
        <h1 className="text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {HEADLINES[wordIndex].headline}
            </motion.span>
          </AnimatePresence>
        </h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={wordIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl opacity-80 max-w-2xl mx-auto"
          >
            {HEADLINES[wordIndex].subline}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  )
}
