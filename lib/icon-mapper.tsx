import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"

export function getIconComponent(iconName: string): LucideIcon | null {
  // Try to find the icon in lucide-react
  const icon = (LucideIcons as any)[iconName]
  if (icon && typeof icon === "function") {
    return icon as LucideIcon
  }

  // Fallback to a default icon
  return LucideIcons.Box
}
