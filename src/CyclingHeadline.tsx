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

const WORDS = ["CUSTOMIZE", "MONETIZE", "MAXIMIZE"]

export function CyclingHeadline() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length)
    }, 3500) // 3.5s pro Wort

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center py-20 relative z-10">
      <h1 className="text-6xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </h1>
    </div>
  )
}
