/**
 * RevealCard — whileInView Demo (Product Cards)
 *
 * Status: DONE. Fade-in on scroll mit whileInView.
 *
 * What it does:
 *   Product Karten die beim Scrollen einblenden mit whileInView.
 *   Jede Card triggert unabhängig wenn sie in den viewport kommt.
 *
 * 💡 Design decisions:
 *   - viewport.amount: 0.3 — 30% der Card muss sichtbar sein.
 *     Gute Balance zwischen early trigger und user attention.
 *     0.1 wäre zu früh (user sieht es noch nicht), 0.5 zu spät.
 *   - viewport.once: true — Einmaliges Triggern für bessere Performance.
 *     Weniger Ablenkung beim erneuten Hochscrollen, focussiert auf Erst-Erlebnis.
 *   - Transform-only (scale, opacity) — Performance-optimal (Bug 03).
 *   - whileHover + whileTap — Delightful interaction wie auf coda.co.
 */

import { motion } from "motion/react"

const PRODUCTS = [
  { title: "Codashop", description: "Global marketplace for digital content" },
  { title: "Codapay", description: "400+ payment methods worldwide" },
  { title: "Coda Webstore", description: "Your webstore, your way" },
  { title: "Coda Distribution", description: "Global partner network" },
]

export function RevealCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-4xl mx-auto relative z-10">
      {PRODUCTS.map((product, index) => (
        <motion.div
          key={product.title}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cursor-pointer relative overflow-hidden"
          style={{
            boxShadow: index >= 2 ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 40px var(--color-lilac-400)' : '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 className="text-xl font-bold mb-2">{product.title}</h3>
          <p className="text-sm opacity-80">{product.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
