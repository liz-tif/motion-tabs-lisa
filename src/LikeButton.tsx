/**
 * LikeButton — Herz-Emoji Button mit Like-Zähler
 *
 * Status: DONE. Herz-Emoji Button mit Klick-Animation und Like-Zähler.
 *
 * What it does:
 *   Ein Herz-Emoji Button der bei jedem Klik die Anzahl der Likes anzeigt.
 *   Mit Animation für delightful interaction feel.
 */

import { motion } from "motion/react"
import { useState } from "react"

export function LikeButton() {
  const [likeCount, setLikeCount] = useState(0)

  return (
    <div className="flex justify-center py-16">
      <motion.button
        onClick={() => setLikeCount(likeCount + 1)}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        className="text-4xl cursor-pointer z-50"
        animate={{
          rotate: [0, -15, 15, -15, 15, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="relative z-0">❤️</span>
        <motion.span
          className="absolute -top-2 -right-2 bg-brand text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: likeCount > 0 ? 1 : 0 }}
        >
          {likeCount}
        </motion.span>
      </motion.button>
    </div>
  )
}
