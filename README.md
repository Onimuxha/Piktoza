# Piktoza Icon Library

A modern, comprehensive icon library for React with 3000+ beautifully crafted icons in 5 unique variants. Built with TypeScript, optimized for performance, and designed for developers who care about design.

## Features

- 🎨 **5 Unique Variants**: Outline, Bold, Bulk, Broken, and TwoTone
- ⚡ **Lightning Fast**: Optimized SVG components with tree-shaking support
- 📦 **3000+ Icons**: Comprehensive collection covering all use cases
- 🔷 **TypeScript Ready**: Full type safety and intelligent autocomplete
- ⚛️ **React Only**: Built specifically for React applications
- 🎯 **Easy to Use**: Simple, intuitive API with full customization

## Installation

\`\`\`bash
pnpm add piktoza
\`\`\`

## Usage

### Basic Usage

\`\`\`tsx
import { Home2, ArrowLeft, Search } from 'piktoza'

function App() {
  return (
    <div>
      <Home2 size="32" color="#FF8A65" variant="Outline" />
      <ArrowLeft size="24" color="#000000" variant="Bold" />
      <Search size="20" color="#666666" variant="Bulk" />
    </div>
  )
}
\`\`\`

### Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string \| number` | `"24"` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Icon color (any valid CSS color) |
| `variant` | `"Outline" \| "Bold" \| "Bulk" \| "Broken" \| "TwoTone"` | `"Outline"` | Icon style variant |
| `className` | `string` | `undefined` | Additional CSS classes |

### Variants

Piktoza offers 5 distinct icon variants to match your design needs:

#### Outline
Clean, minimalist line icons perfect for modern interfaces.
\`\`\`tsx
<Home2 size="32" color="#000000" variant="Outline" />
\`\`\`

#### Bold
Thicker strokes for better visibility and emphasis.
\`\`\`tsx
<Home2 size="32" color="#000000" variant="Bold" />
\`\`\`

#### Bulk
Filled icons with solid shapes for a bold look.
\`\`\`tsx
<Home2 size="32" color="#000000" variant="Bulk" />
\`\`\`

#### Broken
Stylized broken line icons for a unique aesthetic.
\`\`\`tsx
<Home2 size="32" color="#000000" variant="Broken" />
\`\`\`

#### TwoTone
Dual-color icons with depth and dimension.
\`\`\`tsx
<Home2 size="32" color="#000000" variant="TwoTone" />
\`\`\`

## Icon Categories

Icons are organized into logical categories:

- **Arrow**: Navigation and directional icons
- **Home**: Home, building, and location icons
- **Media**: Play, pause, music, and media controls
- **Communication**: Chat, email, and messaging icons
- **Business**: Office, finance, and business icons
- **Design**: Creative tools and design elements
- **Development**: Code, terminal, and developer tools
- **Security**: Lock, shield, and security icons
- **Social**: Social media and sharing icons
- **Weather**: Weather conditions and forecasts
- **And many more...**

## File Structure

The library follows a clean, organized structure for easy maintenance and scalability:

\`\`\`
piktoza/
├── src/
│   ├── icons/                    # All icon source files
│   │   ├── outline/              # Outline variant icons
│   │   │   ├── arrow/            # Arrow category
│   │   │   │   ├── arrowLeft.svg
│   │   │   │   ├── arrowRight.svg
│   │   │   │   ├── arrowUp.svg
│   │   │   │   └── arrowDown.svg
│   │   │   ├── home/             # Home category
│   │   │   │   ├── home.svg
│   │   │   │   ├── home2.svg
│   │   │   │   └── building.svg
│   │   │   ├── media/            # Media category
│   │   │   │   ├── play.svg
│   │   │   │   ├── pause.svg
│   │   │   │   └── music.svg
│   │   │   └── ...               # Other categories
│   │   ├── bold/                 # Bold variant icons
│   │   │   ├── arrow/
│   │   │   ├── home/
│   │   │   ├── media/
│   │   │   └── ...
│   │   ├── bulk/                 # Bulk variant icons
│   │   │   ├── arrow/
│   │   │   ├── home/
│   │   │   ├── media/
│   │   │   └── ...
│   │   ├── broken/               # Broken variant icons
│   │   │   ├── arrow/
│   │   │   ├── home/
│   │   │   ├── media/
│   │   │   └── ...
│   │   └── twotone/              # TwoTone variant icons
│   │       ├── arrow/
│   │       ├── home/
│   │       ├── media/
│   │       └── ...
│   ├── components/               # React components
│   │   ├── IconWrapper.tsx       # Base icon component
│   │   └── index.tsx             # Component exports
│   ├── types/                    # TypeScript definitions
│   │   └── index.ts
│   └── index.ts                  # Main entry point
├── scripts/                      # Build scripts
│   ├── generate-components.js    # SVG to React component generator
│   └── build.js                  # Build script
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## Building the Library

### Prerequisites

- Node.js 18+ and pnpm
- All SVG icon files organized in the structure above

### Build Process

1. **Organize SVG Files**: Place all SVG files in the appropriate variant and category folders under `src/icons/`

2. **Generate React Components**: Run the component generator script
   \`\`\`bash
   pnpm run generate
   \`\`\`
   This script:
   - Scans all SVG files in the icons directory
   - Converts each SVG to a React component
   - Adds TypeScript types and props
   - Generates index files for easy imports

3. **Build the Package**: Compile TypeScript and bundle the library
   \`\`\`bash
   pnpm run build
   \`\`\`

4. **Test Locally**: Test the package locally before publishing
   \`\`\`bash
   pnpm link --global
   cd your-test-project
   pnpm link --global piktoza
   \`\`\`

5. **Publish to npm**: Publish the package to npm registry
   \`\`\`bash
   pnpm login
   pnpm publish
   \`\`\`

### Build Script Example

The `generate-components.js` script should:

\`\`\`javascript
// Pseudo-code for the generator
const fs = require('fs')
const path = require('path')

const variants = ['outline', 'bold', 'bulk', 'broken', 'twotone']
const iconsDir = path.join(__dirname, '../src/icons')

variants.forEach(variant => {
  const variantDir = path.join(iconsDir, variant)
  const categories = fs.readdirSync(variantDir)
  
  categories.forEach(category => {
    const categoryDir = path.join(variantDir, category)
    const svgFiles = fs.readdirSync(categoryDir).filter(f => f.endsWith('.svg'))
    
    svgFiles.forEach(svgFile => {
      // Read SVG content
      const svgContent = fs.readFileSync(path.join(categoryDir, svgFile), 'utf-8')
      
      // Convert to React component
      const componentName = toPascalCase(svgFile.replace('.svg', ''))
      const component = generateReactComponent(componentName, svgContent, variant)
      
      // Write component file
      const outputPath = path.join(__dirname, '../src/components', variant, category, `${componentName}.tsx`)
      fs.writeFileSync(outputPath, component)
    })
  })
})
\`\`\`

## Development Setup

### Website Development

The Piktoza website is built with:
- **React.js** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **MagicUI** for enhanced UI components

To run the website locally:

\`\`\`bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
\`\`\`

### Adding New Icons

1. Create SVG files following the naming convention (camelCase)
2. Place them in the appropriate variant and category folder
3. Run `pnpm run generate` to create React components
4. Test the new icons in the website
5. Build and publish the updated package

## Package.json Configuration

\`\`\`json
{
  "name": "piktoza",
  "version": "1.0.0",
  "description": "Modern icon library for React with 3000+ icons in 5 variants",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "keywords": [
    "react",
    "icons",
    "svg",
    "components",
    "typescript",
    "ui"
  ],
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "sideEffects": false
}
\`\`\`

## TypeScript Configuration

The library includes full TypeScript support with proper type definitions:

\`\`\`typescript
export interface IconProps {
  size?: string | number
  color?: string
  variant?: 'Outline' | 'Bold' | 'Bulk' | 'Broken' | 'TwoTone'
  className?: string
}

export type IconComponent = React.FC<IconProps>
\`\`\`

## Tree-Shaking Support

Piktoza is built with tree-shaking in mind. Only the icons you import will be included in your bundle:

\`\`\`tsx
// Only Home2 and ArrowLeft will be bundled
import { Home2, ArrowLeft } from 'piktoza'
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! To add new icons or improve existing ones:

1. Fork the repository
2. Create your feature branch
3. Add your icons following the file structure
4. Run the generator and build scripts
5. Submit a pull request

## License

MIT License - feel free to use Piktoza in your projects.

## Support

- Documentation: [https://piktoza.com/docs](https://piktoza.com/docs)
- Issues: [GitHub Issues](https://github.com/piktoza/piktoza/issues)
- Website: [https://piktoza.com](https://piktoza.com)

---

Made with ❤️ for the React community
\`\`\`

\`\`\`json file="" isHidden
