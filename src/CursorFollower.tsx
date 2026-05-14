/**
 * CursorFollower — useMotionValue + useSpring
 *
 * Status: STUB. We build this together today, Block B.
 *
 * What it does:
 *   A small dot that follows the mouse cursor with spring physics. It does
 *   not jump — it eases. And it uses ZERO React re-renders to animate.
 *
 * Why a MotionValue instead of useState:
 *   The mouse moves 60+ times per second. If we stored mouseX in useState,
 *   React would re-render the component 60+ times per second. That is the
 *   single most common Junior performance bug in React animation code.
 *   A MotionValue is a subscribable primitive that bypasses React's render
 *   cycle entirely.
 *
 * Why useSpring on top of useMotionValue:
 *   The raw mouse position is jittery. useSpring wraps the raw value in
 *   physics — stiffness controls how aggressive the chase is, damping
 *   controls how much overshoot is allowed. Two numbers, one feel.
 *
 * Reference implementation:
 *   See Mandy's hello-motion/src/App.tsx CursorFollower component.
 *   She used stiffness 150, damping 15 — soft and floaty.
 *
 * 🔬 DevTools moment (will do live after build):
 *   1. Open DevTools → 3-dot menu → More tools → Rendering
 *   2. Enable "Paint flashing" — move your mouse
 *   3. The cursor div does NOT flash green (no repaint)
 *   4. Enable "Layer borders" — the cursor div is on its own composited layer
 *   5. That is the proof that transform animation skips the main thread.
 *
 * 💡 Engineering Punkt (Paul Lewis, Google Chrome perf team):
 *   "Transform and opacity are the only properties the compositor handles
 *    without main-thread work."
 */

import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react"
import { SPRING_PRESETS } from "./motion.config"

export function CursorFollower() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, SPRING_PRESETS.smooth)
  const springY = useSpring(mouseY, SPRING_PRESETS.smooth)

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
    }
    window.addEventListener("mousemove", handle)
    return () => window.removeEventListener("mousemove", handle)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[var(--color-brand)] pointer-events-none mix-blend-difference z-50"
    />
  )
}
