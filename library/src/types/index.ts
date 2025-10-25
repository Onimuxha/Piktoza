import type React from "react"
export interface IconProps {
  /**
   * Size of the icon in pixels
   * @default "24"
   */
  size?: string | number

  /**
   * Color of the icon (any valid CSS color)
   * @default "currentColor"
   */
  color?: string

  /**
   * Icon variant style
   * @default "Outline"
   */
  variant?: "Outline" | "Bold" | "Bulk" | "Broken" | "TwoTone"

  /**
   * Additional CSS classes
   */
  className?: string
}

export type IconComponent = React.FC<IconProps>

export type IconVariant = "Outline" | "Bold" | "Bulk" | "Broken" | "TwoTone"

export type IconCategory =
  | "arrow"
  | "home"
  | "media"
  | "communication"
  | "business"
  | "design"
  | "development"
  | "security"
  | "social"
  | "weather"
  | "shopping"
  | "user"
  | "file"
  | "device"
  | "transport"
