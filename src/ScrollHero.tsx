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

import { motion, useScroll, useTransform } from "motion/react"

export function ScrollHero() {
  const { scrollYProgress } = useScroll()

  const circleScale = useTransform(scrollYProgress, [0, 0.3], [0, 7.5])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <motion.section
      className="min-h-[70vh] grid place-items-center text-center relative z-0"
    >
      <motion.div
        style={{ scale: circleScale }}
        className="w-96 h-96 rounded-full bg-[var(--color-brand)] z-0"
      />
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute"
      >
        <h1 className="text-9xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          Hi! It's Coda
        </h1>
      </motion.div>
    </motion.section>
  )
}
