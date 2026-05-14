/**
 * TabBar — layoutId + FLIP
 *
 * Status: STUB. We build this together today, Block C.
 *
 * What it does:
 *   A pill-style tab bar. Click a tab. The brand-colored pill background
 *   GLIDES from the old tab to the new tab. It does not jump. It does not
 *   crossfade. It travels.
 *
 * Why layoutId is special:
 *   The pill div in the OLD active tab and the pill div in the NEW active
 *   tab are two different DOM elements. They mount and unmount on click.
 *   Motion sees the shared `layoutId="tab-indicator"` and treats them as
 *   ONE animated entity. It measures First position, Last position, Inverts
 *   with a transform, then Plays the transform back to identity. FLIP.
 *
 * Why React state is the right choice here:
 *   `active` is a DISCRETE value — one of 4 tab names. Not a continuous
 *   stream. Discrete = state. Continuous = MotionValue. That's the rule
 *   the CursorFollower demonstrated from the other side.
 *
 * Reference implementation:
 *   See Mandy's hello-motion/src/App.tsx TabBar component.
 *   She used spring stiffness 500, damping 35 — snappy and crisp.
 *
 * 🔬 DevTools moment (will do live after build):
 *   1. Open DevTools → Elements panel
 *   2. Right-click the active pill → Inspect
 *   3. Click a different tab — watch the indicator div UNMOUNT from the
 *      old button and MOUNT inside the new button in real time
 *   4. Open Animations drawer (3-dot menu → More tools → Animations)
 *   5. Slow to 25%, click another tab — see the FLIP transform tick frame by frame
 *
 * 💡 Engineering Punkt:
 *   Animation between elements that are not the same element. That's the
 *   trick layoutId pulls off. It's what every smooth tab indicator on
 *   Linear, Vercel, Stripe, and Cal.com is built on.
 */

import { motion } from "motion/react"
import { useState } from "react"
import { SPRING_PRESETS } from "./motion.config"

const TABS = ["Products", "Solutions", "Knowledge Center", "Company"] as const
type TabName = (typeof TABS)[number]

export function TabBar() {
  const [active, setActive] = useState<TabName>("Products")
  const [likeCount, setLikeCount] = useState(0)
  const [showCount, setShowCount] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 flex gap-2 p-4 bg-[var(--color-nav-bg)] backdrop-blur-md z-40" style={{
      boxShadow: '0 0 40px var(--color-lilac-400)'
    }}>
      <div className="flex gap-2 mx-auto">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="relative px-6 py-2 text-sm font-medium z-10"
          >
            {tab}
            {active === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-[var(--color-brand)] rounded-full -z-10"
                transition={SPRING_PRESETS.snappy}
              />
            )}
          </button>
        ))}
      </div>
      <motion.button
        onClick={() => setLikeCount(likeCount + 1)}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        onMouseEnter={() => setShowCount(true)}
        onMouseLeave={() => setShowCount(false)}
        className="text-2xl cursor-pointer z-10 ml-4 relative"
        animate={{
          rotate: [0, -15, 15, -15, 15, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="relative">❤️</span>
        <motion.span
          className="absolute -top-2 -right-2 bg-brand text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: showCount && likeCount > 0 ? 1 : 0 }}
        >
          {likeCount}
        </motion.span>
      </motion.button>
    </nav>
  )
}
