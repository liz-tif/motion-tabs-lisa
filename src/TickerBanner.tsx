/**
 * TickerBanner — Endlos laufendes Banner unter Navigation
 *
 * Status: DONE. Scrolling ticker mit acquisition Nachricht.
 *
 * What it does:
 *   Ein Banner das unter der Navigation fixiert ist und den Text
 *   einmal von rechts nach links laufen lässt, verschwindet, kurz pausiert,
 *   und dann wieder von rechts reinläuft.
 *
 * 💡 Design decisions:
 *   - Schnelle Geschwindigkeit (8s) für dynamischen Effekt
 *   - Große Schrift (text-xl) für bessere Sichtbarkeit
 *   - Minimaler Balken mit wenig Padding
 *   - Sätze laufen einzeln durch, großer Abstand dazwischen
 *   - Loop: Reinlaufen → Durchlaufen → Verschwinden → Pause → Wiederholen
 */

const LINE_1 = "143 countries. 400+ payment methods. One integration."
const LINE_2 = "$47M valuation. 10,000+ businesses trust Coda."
const LINE_3 = "From Berlin to the world. Local payments, global scale."

export function TickerBanner() {
  return (
    <div className="fixed top-16 left-0 right-0 bg-[var(--color-bg)] py-2 z-30 overflow-hidden border-b border-[var(--color-green-300)]">
      {/* Fade-out Effekt am rechten Rand */}
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none" />

      <div className="flex whitespace-nowrap animate-[scroll-with-pause_25s_infinite]">
        {/* Einmaliger Inhalt - komplett von rechts nach links */}
        <span className="text-xl font-bold text-[var(--color-vanilla-900)] px-8">
          {LINE_1}
        </span>
        <span className="text-xl font-bold text-[var(--color-vanilla-900)] px-8">
          {LINE_2}
        </span>
        <span className="text-xl font-bold text-[var(--color-vanilla-900)] px-8">
          {LINE_3}
        </span>
      </div>
    </div>
  )
}
