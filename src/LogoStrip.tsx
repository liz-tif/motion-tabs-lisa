/**
 * LogoStrip — Variants + staggerChildren Demo (Partner Logo Grid)
 *
 * Status: DONE. Staggered reveal mit Variants + staggerChildren.
 *
 * What it does:
 *   Partner logos die sequentiell einblenden mit staggerChildren.
 *   Parent variant steuert das timing, children react darauf.
 *
 * 💡 Design decisions:
 *   - staggerChildren: 0.1s — Versatz zwischen den Logos.
 *     Sichtbarer aber nicht zu langsamer Versatz. 0.05s wäre zu subtil,
 *     0.15s zu langsam für eine grid von 8+ logos.
 *   - container variants — Parent steuert State ("hidden" vs "visible"),
 *     children inherit und addieren ihren eigenen delay darauf.
 *   - viewport.once: true — Einmaliges Triggern (wie RevealCard).
 *   - Transform-only (y, opacity) — Performance-optimal (Bug 03).
 *   - Fade-up direction — Positive y (nach unten) feels natural für scrolling.
 */

import { motion } from "motion/react"

const PARTNERS = [
  "Call of Duty", "Tinder", "PUBG", "Mobile Legends",
  "Free Fire", "Netflix", "Spotify", "Google Play"
]

const partnerColors: Record<string, string> = {
  "Call of Duty": "0 0 40px var(--color-lilac-400)",
  "Tinder": "0 0 40px var(--color-lilac-400)",
  "PUBG": "0 0 40px var(--color-lilac-400)",
  "Mobile Legends": "0 0 40px var(--color-lilac-400)",
  "Free Fire": "0 0 40px var(--color-lilac-400)",
  "Netflix": "0 0 40px var(--color-lilac-400)",
  "Spotify": "0 0 40px var(--color-lilac-400)",
  "Google Play": "0 0 40px var(--color-lilac-400)",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 0.1s Versatz zwischen logos
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

export function LogoStrip() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      variants={containerVariants}
      className="py-12 px-8"
    >
      <h2 className="text-center text-2xl font-bold mb-8">OUR PARTNERS</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {PARTNERS.map((partner) => (
          <motion.div
            key={partner}
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium"
            style={{
              boxShadow: partnerColors[partner] || '0 0 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            {partner}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
