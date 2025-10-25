"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { IconVariant } from "@/lib/types"
import { Devices, Document, DocumentCode, Grid1, Gallery, Location, Messages2, Profile2User, ProgrammingArrows, Shield, ShoppingCart, Star1 } from "iconsax-reactjs"

const categories = [
  { id: "all", label: "All Icons", icon: Grid1, count: 3000 },
  { id: "essential", label: "Essential", icon: Star1, count: 250 },
  { id: "arrows", label: "Arrows", icon: ProgrammingArrows, count: 180 },
  { id: "communication", label: "Communication", icon: Messages2, count: 220 },
  { id: "media", label: "Media", icon: Gallery, count: 190 },
  { id: "files", label: "Files", icon: Document, count: 160 },
  { id: "shopping", label: "Shopping", icon: ShoppingCart, count: 140 },
  { id: "location", label: "Location", icon: Location, count: 120 },
  { id: "devices", label: "Devices", icon: Devices, count: 150 },
  { id: "security", label: "Security", icon: Shield, count: 110 },
  { id: "development", label: "Development", icon: DocumentCode, count: 200 },
  { id: "social", label: "Social", icon: Profile2User, count: 180 },
]

const variants: { id: IconVariant; label: string }[] = [
  { id: "Outline", label: "Outline" },
  { id: "Bold", label: "Bold" },
  { id: "Bulk", label: "Bulk" },
  { id: "Broken", label: "Broken" },
  { id: "TwoTone", label: "TwoTone" },
]

interface IconsSidebarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedVariant: IconVariant
  onVariantChange: (variant: IconVariant) => void
}

export const IconsSidebar = memo(function IconsSidebar({
  selectedCategory,
  onCategoryChange,
  selectedVariant,
  onVariantChange,
}: IconsSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 bg-linear-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-white font-bold text-lg">P</span>
          </motion.div>
          <span className="text-xl font-bold">Piktoza</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Variants</SidebarGroupLabel>
          <SidebarGroupContent>
            <motion.div
              className="grid grid-cols-2 gap-2 px-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {variants.map((variant) => (
                <motion.div
                  key={variant.id}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Button
                    variant={selectedVariant === variant.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => onVariantChange(variant.id)}
                    className="justify-start w-full hover:scale-105 transition-transform"
                  >
                    {variant.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={selectedCategory === category.id}
                        onClick={() => onCategoryChange(category.id)}
                        className="hover:scale-[1.02] transition-transform"
                      >
                        <Icon size={23} variant="Bulk" />
                        <span>{category.label}</span>
                        <Badge variant="secondary" className="ml-auto bg-sidebar-accent">
                          {category.count}
                        </Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-full bg-transparent hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
        >
          <Link href="/docs">Documentation</Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
})
