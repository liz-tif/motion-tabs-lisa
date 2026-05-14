/**
 * CyclingHeadline — AnimatePresence + mode="wait" Demo
 *
 * Status: DONE. Cycling text mit AnimatePresence mode="wait".
 *
 * What it does:
 *   Rotiert durch drei Wörter (CUSTOMIZE / MONETIZE / MAXIMIZE)
 *   mit AnimatePresence für saubere Exit-Animationen.
 *
 * 💡 Design decisions:
 *   - cycling speed: 3.5s — Balance zwischen Lesbarkeit und Dynamik.
 *     Nicht zu schnell zum Lesen, nicht zu langweilig für wiederkehrende Besucher.
 *   - mode="wait" — Sauberer Übergang ohne Überlappung. Exit-Animation
 *     muss komplett fertig sein bevor next Element rein kommt.
 *   - key={wordIndex} — CRITICAL! Ohne key keine Exit-Animation (Bug 02).
 *   - Transform-only properties (y, opacity) — Performance-optimal (Bug 03).
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

export function CyclingHeadline() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HEADLINES.length)
    }, 3500) // 3.5s pro Wort

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center py-20 relative z-10">
      <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
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
          className="text-xl opacity-80 max-w-2xl mx-auto"
        >
          {HEADLINES[wordIndex].subline}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
