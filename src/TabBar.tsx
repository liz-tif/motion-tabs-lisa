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

export function TabBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex gap-2 p-4 bg-[var(--color-brand)] backdrop-blur-md z-40" style={{
      boxShadow: '0 0 40px var(--color-lilac-400)'
    }}>
      <div className="flex gap-2 mx-auto items-center">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>
          Hi! It's Coda
        </h1>
      </div>
    </nav>
  )
}
