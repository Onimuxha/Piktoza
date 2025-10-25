"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { getIconComponent } from "@/lib/icon-mapper"
import type { IconVariant } from "@/lib/types"

interface IconCardProps {
  name: string
  category: string
  variant: IconVariant
  onClick: () => void
}

export const IconCard = memo(function IconCard({ name, category, variant, onClick }: IconCardProps) {
  const IconComponent = getIconComponent(name)

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card
        className="p-4 flex flex-col items-center justify-center gap-3 cursor-pointer bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200 group"
        onClick={onClick}
      >
        <motion.div
          className="w-12 h-12 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 transition-colors"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {IconComponent ? <IconComponent className="w-8 h-8" /> : <div className="w-8 h-8 bg-muted rounded" />}
        </motion.div>
        <div className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors truncate w-full">
          {name}
        </div>
      </Card>
    </motion.div>
  )
})
