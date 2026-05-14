/**
 * motion.config.ts — shared spring presets
 *
 * 💡 Why this file exists:
 *   The first time you write a spring, you hardcode `{ stiffness: 150, damping: 15 }`.
 *   The second time, you copy-paste it. The third time, you realize you
 *   have 4 components and 4 different feels — and the design starts to
 *   drift. Named presets stop that drift.
 *
 *   This is a Component-Token equivalent for Motion. W1 you saw it for
 *   colors. Same pattern, different layer.
 *
 * 🎚️ When to add a new preset:
 *   - Only if you can name the FEEL (smooth, snappy, bounce, weighty)
 *   - Never name it after the component that uses it (BAD: cursorSpring)
 *   - One preset per feel, not per component
 */

export const SPRING_PRESETS = {
  /** Soft + floaty. Cursor followers, parallax, anything that should feel "ambient". */
  smooth: { type: "spring" as const, stiffness: 150, damping: 15 },

  /** Crisp + decisive. UI indicators, tab transitions, accordion open/close. */
  snappy: { type: "spring" as const, stiffness: 500, damping: 35 },

  /** Toy-like + playful. Use rarely — only when you want to draw eye attention. */
  bounce: { type: "spring" as const, stiffness: 400, damping: 10 },
}
