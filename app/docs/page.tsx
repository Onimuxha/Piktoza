"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useState } from "react"
import { Box, Colorfilter, Copy, CopySuccess, Flash, Star1, Code, Happyemoji, ArrowDown, ArrowRight } from "iconsax-reactjs"

export default function DocsPage() {
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedBasic, setCopiedBasic] = useState(false)
  const [copiedCustom, setCopiedCustom] = useState(false)

  const handleCopy = (text: string, type: "install" | "basic" | "custom") => {
    navigator.clipboard.writeText(text)
    if (type === "install") {
      setCopiedInstall(true)
      setTimeout(() => setCopiedInstall(false), 2000)
    } else if (type === "basic") {
      setCopiedBasic(true)
      setTimeout(() => setCopiedBasic(false), 2000)
    } else {
      setCopiedCustom(true)
      setTimeout(() => setCopiedCustom(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <motion.header
        className="border-b border-zinc-800 sticky top-0 bg-black/40 backdrop-blur-xl z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-8 h-8 bg-linear-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <span className="text-white font-bold text-lg">P</span>
            </motion.div>
            <span className="text-xl font-bold">Piktoza</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/icons" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Icons
            </Link>
            <Link href="/docs" className="text-sm font-medium text-white">
              Documentation
            </Link>
            <Button size="sm" asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/icons">Explore Icons</Link>
            </Button>
          </nav>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Star1 variant="Bulk" className="mr-1" />
              Documentation
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-balance bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Getting Started with Piktoza
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-400 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Learn how to install and use Piktoza icons in your React projects. Simple, flexible, and powerful.
          </motion.p>
        </motion.div>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <div className="relative">
                <pre className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono text-purple-300">pnpm add piktoza</code>
                </pre>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2 bg-zinc-800 hover:bg-zinc-700"
                  onClick={() => handleCopy("pnpm add piktoza", "install")}
                >
                  {copiedInstall ? (
                    <>
                      <CopySuccess variant="TwoTone" className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy variant="TwoTone" className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
              <div className="relative">
                <pre className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono text-zinc-300">
                    {`import { Home2, Search, Settings } from 'piktoza'

function App() {
  return (
    <div>
      <Home2 size="24" />
      <Search size="24" color="#FF8A65" />
      <Settings size="24" variant="Bold" />
    </div>
  )
}`}
                  </code>
                </pre>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2 bg-zinc-800 hover:bg-zinc-700"
                  onClick={() =>
                    handleCopy(
                      `import { Home2, Search, Settings } from 'piktoza'\n\nfunction App() {\n  return (\n    <div>\n      <Home2 size="24" />\n      <Search size="24" color="#FF8A65" />\n      <Settings size="24" variant="Bold" />\n    </div>\n  )\n}`,
                      "basic",
                    )
                  }
                >
                  {copiedBasic ? (
                    <>
                      <CopySuccess variant="TwoTone" className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy variant="TwoTone" className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Props */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">Props</h2>
          <Card className="overflow-hidden bg-zinc-900/50 border-zinc-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Prop</th>
                    <th className="text-left p-4 font-semibold">Type</th>
                    <th className="text-left p-4 font-semibold">Default</th>
                    <th className="text-left p-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4">
                      <code className="text-sm bg-zinc-800 px-2 py-1 rounded text-purple-300">size</code>
                    </td>
                    <td className="p-4 text-zinc-400">string | number</td>
                    <td className="p-4 text-zinc-400">24</td>
                    <td className="p-4 text-zinc-400">Icon size in pixels</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4">
                      <code className="text-sm bg-zinc-800 px-2 py-1 rounded text-purple-300">color</code>
                    </td>
                    <td className="p-4 text-zinc-400">string</td>
                    <td className="p-4 text-zinc-400">currentColor</td>
                    <td className="p-4 text-zinc-400">Icon color (hex, rgb, or CSS color)</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4">
                      <code className="text-sm bg-zinc-800 px-2 py-1 rounded text-purple-300">variant</code>
                    </td>
                    <td className="p-4 text-zinc-400">Outline | Bold | Bulk | Broken | TwoTone</td>
                    <td className="p-4 text-zinc-400">Outline</td>
                    <td className="p-4 text-zinc-400">Icon style variant</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4">
                      <code className="text-sm bg-zinc-800 px-2 py-1 rounded text-purple-300">className</code>
                    </td>
                    <td className="p-4 text-zinc-400">string</td>
                    <td className="p-4 text-zinc-400">-</td>
                    <td className="p-4 text-zinc-400">Additional CSS classes</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4">
                      <code className="text-sm bg-zinc-800 px-2 py-1 rounded text-purple-300">strokeWidth</code>
                    </td>
                    <td className="p-4 text-zinc-400">number</td>
                    <td className="p-4 text-zinc-400">1.5</td>
                    <td className="p-4 text-zinc-400">Stroke width for outline variants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Icon Variants</h2>
          <p className="text-zinc-400 mb-6">
            Piktoza offers 5 unique variants for each icon. Choose the style that best fits your design.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Outline", variant: "Outline" as const, desc: "Clean line-based design", icon: Happyemoji },
              { name: "Bold", variant: "Bold" as const, desc: "Thicker strokes for emphasis", icon: Happyemoji },
              { name: "Bulk", variant: "Bulk" as const, desc: "Filled with transparency", icon: Happyemoji },
              { name: "Broken", variant: "Broken" as const, desc: "Broken line segments", icon: Happyemoji },
              { name: "TwoTone", variant: "TwoTone" as const, desc: "Two-color design", icon: Happyemoji },
            ].map((variant, index) => {
              const Icon = variant.icon
              return (
                <motion.div
                  key={variant.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon variant={variant.variant} className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{variant.name}</h3>
                    <p className="text-sm text-zinc-400">{variant.desc}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Advanced Usage */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h2 className="text-3xl font-bold mb-6">Advanced Usage</h2>
          <Tabs defaultValue="custom" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-900/50 border border-zinc-800">
              <TabsTrigger value="custom">Customization</TabsTrigger>
              <TabsTrigger value="typescript">TypeScript</TabsTrigger>
              <TabsTrigger value="tree">Tree Shaking</TabsTrigger>
            </TabsList>
            <TabsContent value="custom" className="space-y-4">
              <p className="text-zinc-400">
                Customize icons with Tailwind CSS classes or inline styles for complete control.
              </p>
              <div className="relative">
                <pre className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono text-zinc-300">
                    {`import { Heart } from 'piktoza'

// With Tailwind
<Heart className="text-red-500 hover:scale-110 transition" />

// With inline styles
<Heart 
  size="32"
  color="#FF6B6B"
  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
/>`}
                  </code>
                </pre>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2 bg-zinc-800 hover:bg-zinc-700"
                  onClick={() =>
                    handleCopy(
                      `import { Heart } from 'piktoza'\n\n// With Tailwind\n<Heart className="text-red-500 hover:scale-110 transition" />\n\n// With inline styles\n<Heart \n  size="32"\n  color="#FF6B6B"\n  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}\n/>`,
                      "custom",
                    )
                  }
                >
                  {copiedCustom ? (
                    <>
                      <CopySuccess variant="TwoTone" className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy variant="TwoTone" className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="typescript" className="space-y-4">
              <p className="text-zinc-400">
                Piktoza is built with TypeScript and provides full type safety out of the box.
              </p>
              <pre className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-zinc-300">
                  {`import { Home2 } from 'piktoza'
import type { IconProps } from 'piktoza'

// All props are fully typed
const MyIcon: React.FC<IconProps> = (props) => {
  return <Home2 {...props} />
}`}
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="tree" className="space-y-4">
              <p className="text-zinc-400">
                Only import what you need. Unused icons are automatically removed during build.
              </p>
              <pre className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-zinc-300">
                  {`// ✅ Good - Only bundles Home2 and Search
import { Home2, Search } from 'piktoza'

// ❌ Avoid - Imports everything
import * as Icons from 'piktoza'`}
                </code>
              </pre>
            </TabsContent>
          </Tabs>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Box,
                title: "3000+ Icons",
                desc: "Comprehensive library covering all common use cases and design needs.",
              },
              {
                icon: Colorfilter,
                title: "5 Variants",
                desc: "Multiple styles to match any design system or brand aesthetic.",
              },
              {
                icon: Flash,
                title: "Optimized",
                desc: "Tree-shakeable, lightweight SVG components for optimal performance.",
              },
              { icon: Code, title: "TypeScript", desc: "Full type definitions with intelligent autocomplete support." },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                      <Icon variant="Bulk" className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}>
          <Card className="p-8 md:p-12 text-center bg-linear-to-br from-purple-900/20 to-purple-800/10 border-purple-500/30">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              Ready to Start Building?
            </motion.h2>
            <motion.p
              className="text-zinc-400 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
            >
              Browse our complete collection of icons and find the perfect match for your project.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
            >
              <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/icons">
                  Browse Icons
                  <ArrowRight variant="TwoTone" className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-zinc-700 hover:bg-zinc-800">
                <a href="https://github.com/piktoza/piktoza" target="_blank" rel="noopener noreferrer">
                  <ArrowDown variant="TwoTone" className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </motion.div>
          </Card>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-linear-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold">Piktoza</span>
            </div>
            <div className="text-sm text-zinc-400">© 2025 Piktoza. Modern icon library for React.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
