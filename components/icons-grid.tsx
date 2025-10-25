"use client"

import { useMemo, memo, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { IconCard } from "@/components/icon-card"
import { generateMockIcons } from "@/lib/mock-icons"
import type { IconVariant } from "@/lib/types"

interface IconsGridProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  selectedVariant: IconVariant
  onIconClick: (icon: { name: string; category: string }) => void
  isPending: boolean
}

export const IconsGrid = memo(function IconsGrid({
  searchQuery,
  onSearchChange,
  selectedCategory,
  selectedVariant,
  onIconClick,
  isPending,
}: IconsGridProps) {
  const icons = useMemo(() => generateMockIcons(), [])

  const [visibleCount, setVisibleCount] = useState(100)

  const filteredIcons = useMemo(() => {
    const filtered = icons.filter((icon) => {
      const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || icon.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    return filtered
  }, [icons, searchQuery, selectedCategory])

  const visibleIcons = useMemo(() => {
    return filteredIcons.slice(0, visibleCount)
  }, [filteredIcons, visibleCount])

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.scrollHeight - target.scrollTop <= target.clientHeight + 500) {
        setVisibleCount((prev) => Math.min(prev + 100, filteredIcons.length))
      }
    }

    const scrollContainer = document.querySelector(".icons-scroll-container")
    scrollContainer?.addEventListener("scroll", handleScroll)
    return () => scrollContainer?.removeEventListener("scroll", handleScroll)
  }, [filteredIcons.length])

  useEffect(() => {
    setVisibleCount(100)
  }, [searchQuery, selectedCategory])

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <motion.header
        className="border-b border-border bg-black/40 backdrop-blur-xl sticky top-0 z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search 3000+ icons..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-10 bg-zinc-900/50 border-zinc-800 focus:border-purple-500/50 transition-colors"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0 hover:bg-purple-500/20"
                onClick={() => onSearchChange("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary" className="hidden md:flex bg-purple-500/20 text-purple-300 border-purple-500/30">
              {filteredIcons.length} icons
            </Badge>
          </motion.div>
        </div>
      </motion.header>

      {/* Grid */}
      <div className="flex-1 overflow-auto p-6 icons-scroll-container">
        {filteredIcons.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Search className="h-8 w-8 text-purple-400" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">No icons found</h3>
            <p className="text-muted-foreground max-w-sm">
              Try adjusting your search or category filter to find what you're looking for.
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.01,
                  },
                },
              }}
            >
              <AnimatePresence mode="popLayout">
                {visibleIcons.map((icon, index) => (
                  <motion.div
                    key={`${icon.name}-${icon.category}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layout
                  >
                    <IconCard
                      name={icon.name}
                      category={icon.category}
                      variant={selectedVariant}
                      onClick={() => onIconClick({ name: icon.name, category: icon.category })}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {visibleCount < filteredIcons.length && (
              <motion.div className="flex justify-center mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Button
                  variant="outline"
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 100, filteredIcons.length))}
                  className="bg-zinc-900/50 border-zinc-800 hover:bg-purple-500/10 hover:border-purple-500/50"
                >
                  Load More ({filteredIcons.length - visibleCount} remaining)
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
})
