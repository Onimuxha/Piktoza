const fs = require("fs")
const path = require("path")

// Configuration
const ICONS_DIR = path.join(__dirname, "../src/icons")
const OUTPUT_DIR = path.join(__dirname, "../src/components")
const VARIANTS = ["outline", "bold", "bulk", "broken", "twotone"]

// Utility functions
function toPascalCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toUpperCase())
}

function cleanSVG(svgContent) {
  // Remove XML declaration
  svgContent = svgContent.replace(/<\?xml[^?]*\?>/g, "")

  // Remove comments
  svgContent = svgContent.replace(/<!--[\s\S]*?-->/g, "")

  // Extract SVG attributes and content
  const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i)
  if (!svgMatch) return null

  const svgInner = svgMatch[1].trim()

  return svgInner
}

function generateComponent(iconName, svgContent, variant, category) {
  const componentName = toPascalCase(iconName)
  const cleanedSVG = cleanSVG(svgContent)

  if (!cleanedSVG) {
    console.warn(`Failed to clean SVG for ${iconName}`)
    return null
  }

  return `import React from 'react'

export interface ${componentName}Props {
  size?: string | number
  color?: string
  variant?: 'Outline' | 'Bold' | 'Bulk' | 'Broken' | 'TwoTone'
  className?: string
}

const ${componentName}: React.FC<${componentName}Props> = ({
  size = '24',
  color = 'currentColor',
  variant = 'Outline',
  className = '',
}) => {
  const variants = {
    Outline: \`${cleanedSVG}\`,
    Bold: \`${cleanedSVG}\`,
    Bulk: \`${cleanedSVG}\`,
    Broken: \`${cleanedSVG}\`,
    TwoTone: \`${cleanedSVG}\`,
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      dangerouslySetInnerHTML={{ __html: variants[variant] }}
      style={{ color }}
    />
  )
}

${componentName}.displayName = '${componentName}'

export default ${componentName}
`
}

function generateIndexFile(components) {
  const exports = components.map((comp) => `export { default as ${comp.name} } from './${comp.path}'`).join("\n")

  return `// Auto-generated file. Do not edit manually.
${exports}

export type { ${components[0].name}Props as IconProps } from './${components[0].path}'
`
}

// Main generation function
function generateComponents() {
  console.log("🚀 Starting component generation...\n")

  const allComponents = []
  let totalIcons = 0

  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  // Process each variant
  VARIANTS.forEach((variant) => {
    const variantDir = path.join(ICONS_DIR, variant)

    if (!fs.existsSync(variantDir)) {
      console.warn(`⚠️  Variant directory not found: ${variant}`)
      return
    }

    console.log(`📁 Processing variant: ${variant}`)

    // Get all categories in this variant
    const categories = fs.readdirSync(variantDir).filter((item) => {
      return fs.statSync(path.join(variantDir, item)).isDirectory()
    })

    categories.forEach((category) => {
      const categoryDir = path.join(variantDir, category)
      const svgFiles = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".svg"))

      console.log(`  📂 Category: ${category} (${svgFiles.length} icons)`)

      svgFiles.forEach((svgFile) => {
        const iconName = svgFile.replace(".svg", "")
        const svgPath = path.join(categoryDir, svgFile)
        const svgContent = fs.readFileSync(svgPath, "utf-8")

        // Generate component
        const component = generateComponent(iconName, svgContent, variant, category)

        if (component) {
          const componentName = toPascalCase(iconName)
          const outputPath = path.join(OUTPUT_DIR, `${componentName}.tsx`)

          fs.writeFileSync(outputPath, component)

          allComponents.push({
            name: componentName,
            path: componentName,
          })

          totalIcons++
        }
      })
    })

    console.log("")
  })

  // Remove duplicates (same icon name across variants)
  const uniqueComponents = Array.from(new Map(allComponents.map((c) => [c.name, c])).values())

  // Generate index file
  console.log("📝 Generating index file...")
  const indexContent = generateIndexFile(uniqueComponents)
  fs.writeFileSync(path.join(OUTPUT_DIR, "index.ts"), indexContent)

  console.log(`\n✅ Component generation complete!`)
  console.log(`   Total icons processed: ${totalIcons}`)
  console.log(`   Unique components: ${uniqueComponents.length}`)
  console.log(`   Output directory: ${OUTPUT_DIR}\n`)
}

// Run the generator
try {
  generateComponents()
} catch (error) {
  console.error("❌ Error generating components:", error)
  process.exit(1)
}
