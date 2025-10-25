"use client"

import { useState, useCallback, useTransition } from "react"
import { IconsSidebar } from "@/components/icons-sidebar"
import { IconsGrid } from "@/components/icons-grid"
import { IconModal } from "@/components/icon-modal"
import { SidebarProvider } from "@/components/ui/sidebar"
import type { IconVariant } from "@/lib/types"

export default function IconsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>("Outline")
  const [selectedIcon, setSelectedIcon] = useState<{ name: string; category: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleCategoryChange = useCallback((category: string) => {
    startTransition(() => {
      setSelectedCategory(category)
    })
  }, [])

  const handleVariantChange = useCallback((variant: IconVariant) => {
    startTransition(() => {
      setSelectedVariant(variant)
    })
  }, [])

  const handleSearchChange = useCallback((query: string) => {
    startTransition(() => {
      setSearchQuery(query)
    })
  }, [])

  const handleIconClick = useCallback((icon: { name: string; category: string }) => {
    setSelectedIcon(icon)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedIcon(null)
  }, [])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <IconsSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedVariant={selectedVariant}
          onVariantChange={handleVariantChange}
        />
        <main className="flex-1">
          <IconsGrid
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            selectedVariant={selectedVariant}
            onIconClick={handleIconClick}
            isPending={isPending}
          />
        </main>
      </div>
      {selectedIcon && (
        <IconModal
          iconName={selectedIcon.name}
          category={selectedIcon.category}
          variant={selectedVariant}
          onClose={handleCloseModal}
        />
      )}
    </SidebarProvider>
  )
}
