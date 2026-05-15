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
  { title: "400+ Payment Methods", description: "Accept payments via credit cards, e-wallets, bank transfers, and cash in 140+ countries" },
  { title: "Global Coverage", description: "One integration gives you access to customers in Asia, LATAM, Africa, and beyond" },
  { title: "One Integration", description: "Simple API implementation. We handle the complexity of local payment methods" },
  { title: "Instant Payouts", description: "Get your money faster. Automated reconciliation and real-time transaction tracking" },
]

export function RevealCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-4xl mx-auto relative z-10">
      {PRODUCTS.map((product, index) => (
        <motion.div
          key={product.title}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cursor-pointer relative overflow-hidden"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), 0 0 20px var(--color-green-400)'
          }}
        >
          <h3 className="text-xl font-bold mb-2">{product.title}</h3>
          <p className="text-sm opacity-80">{product.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
