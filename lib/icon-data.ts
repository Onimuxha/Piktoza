// Mock icon data structure
export type IconVariant = "Outline" | "Bold" | "Bulk" | "Broken" | "TwoTone"

export type IconCategory =
  | "arrow"
  | "home"
  | "media"
  | "business"
  | "communication"
  | "design"
  | "development"
  | "education"
  | "finance"
  | "food"
  | "health"
  | "nature"
  | "security"
  | "shopping"
  | "social"
  | "sports"
  | "travel"
  | "weather"

export interface Icon {
  id: string
  name: string
  category: IconCategory
  variants: IconVariant[]
  tags: string[]
}

// Sample icon data - in production, this would come from your actual icon files
export const iconCategories: { value: IconCategory; label: string }[] = [
  { value: "arrow", label: "Arrows" },
  { value: "home", label: "Home & Living" },
  { value: "media", label: "Media" },
  { value: "business", label: "Business" },
  { value: "communication", label: "Communication" },
  { value: "design", label: "Design" },
  { value: "development", label: "Development" },
  { value: "education", label: "Education" },
  { value: "finance", label: "Finance" },
  { value: "food", label: "Food & Drink" },
  { value: "health", label: "Health" },
  { value: "nature", label: "Nature" },
  { value: "security", label: "Security" },
  { value: "shopping", label: "Shopping" },
  { value: "social", label: "Social" },
  { value: "sports", label: "Sports" },
  { value: "travel", label: "Travel" },
  { value: "weather", label: "Weather" },
]

// Generate sample icons
export const generateSampleIcons = (): Icon[] => {
  const icons: Icon[] = []
  const variants: IconVariant[] = ["Outline", "Bold", "Bulk", "Broken", "TwoTone"]

  const iconNames = [
    "Home2",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Play",
    "Pause",
    "Stop",
    "Music",
    "Video",
    "User",
    "Users",
    "Profile",
    "Settings",
    "Search",
    "Heart",
    "Star",
    "Bookmark",
    "Share",
    "Download",
    "Calendar",
    "Clock",
    "Bell",
    "Mail",
    "Phone",
    "Camera",
    "Image",
    "File",
    "Folder",
    "Document",
    "Edit",
    "Delete",
    "Add",
    "Remove",
    "Check",
    "Close",
    "Menu",
    "More",
    "Filter",
    "Sort",
    "Lock",
    "Unlock",
    "Eye",
    "EyeOff",
    "Shield",
    "Cart",
    "Bag",
    "Wallet",
    "Card",
    "Tag",
  ]

  iconNames.forEach((name, index) => {
    const category = iconCategories[index % iconCategories.length].value
    icons.push({
      id: `icon-${index}`,
      name,
      category,
      variants,
      tags: [name.toLowerCase(), category],
    })
  })

  // Generate more icons to simulate 3000+ icons
  for (let i = iconNames.length; i < 150; i++) {
    const category = iconCategories[i % iconCategories.length].value
    icons.push({
      id: `icon-${i}`,
      name: `Icon${i}`,
      category,
      variants,
      tags: [`icon${i}`, category],
    })
  }

  return icons
}

export const allIcons = generateSampleIcons()
