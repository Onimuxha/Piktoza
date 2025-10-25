"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brush, Code, Colorfilter, Dropbox, Flash, Layer, Star } from 'iconsax-reactjs';

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/95 supports-backdrop-filter:bg-background/80"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20"
            >
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </motion.div>
            <span className="text-xl font-bold">Piktoza</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/icons"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Icons
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Documentation
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" asChild className="shadow-lg shadow-primary/20">
                <Link href="/icons">Explore Icons</Link>
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.header>

      <div className="min-h-screen bg-background overflow-hidden pt-[73px]">
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            />
          </div>

          <motion.div style={{ opacity, scale, y }} className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full mb-8 backdrop-blur-sm"
              >
                  <Star size={23} className="text-primary" />
                <span className="text-sm text-primary font-semibold">3000+ Icons Available</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-8xl font-bold mb-8 text-balance leading-tight"
              >
                <span className="bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  The Modern
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-primary"
                >
                  Icon Library
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  for React
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance leading-relaxed max-w-3xl mx-auto"
              >
                Beautifully crafted icons with <span className="text-primary font-semibold">5 unique variants</span>.
                Built for developers who care about design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild className="text-base group shadow-2xl shadow-primary/30 px-8 py-6">
                    <Link href="/icons">
                      Explore Icons
                      <ArrowRight size={23} variant="TwoTone" className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-base bg-transparent border-2 px-8 py-6" asChild>
                    <Link href="/docs">View Documentation</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-card border-2 border-primary/30 rounded-xl shadow-xl shadow-primary/10 backdrop-blur-sm"
              >
                <Code size={23} variant="TwoTone" className="text-primary" />
                <code className="text-base font-mono text-primary font-semibold">pnpm add piktoza</code>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center"
            >
              <Colorfilter size="32" className="text-primary" variant="TwoTone"/>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center"
            >
              <Layer size="32" className="text-primary" variant="TwoTone"/>
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-2/5 left-1/3 w-16 h-16 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center"
            >
              <Brush size="32" className="text-primary" variant="TwoTone"/>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Piktoza?</h2>
            <p className="text-xl text-muted-foreground">Everything you need in a modern icon library</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Colorfilter,
                title: "5 Unique Variants",
                description:
                  "Choose from Outline, Bold, Bulk, Broken, and TwoTone styles to match your design perfectly.",
                delay: 0.1,
              },
              {
                icon: Flash,
                title: "Lightning Fast",
                description: "Optimized SVG components with tree-shaking support. Only bundle what you use.",
                delay: 0.2,
              },
              {
                icon: Dropbox,
                title: "TypeScript Ready",
                description: "Full TypeScript support with intelligent autocomplete and type safety out of the box.",
                delay: 0.3,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-primary/10 border-2 border-primary/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <feature.icon className="h-7 w-7 text-primary" variant="TwoTone" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple to Use</h2>
              <p className="text-xl text-muted-foreground">
                Install once, use everywhere. Clean API with full customization.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <pre className="text-sm md:text-base overflow-x-auto">
                <code className="font-mono text-foreground leading-relaxed">
                  {`// Install the package
pnpm add piktoza

// Import and use
import { Home2 } from 'piktoza'

<Home2 
  size="32" 
  color="#FF8A65" 
  variant="Outline" 
/>`}
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { value: "3000+", label: "Icons Available", delay: 0.1 },
              { value: "5", label: "Unique Variants", delay: 0.2 },
              { value: "100%", label: "React Compatible", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border-2 border-primary/30 rounded-2xl p-10 text-center hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay + 0.2, type: "spring" }}
                  className="text-6xl font-bold mb-3 text-primary"
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto text-center bg-linear-to-br from-card via-card to-primary/5 border-2 border-primary/30 rounded-3xl p-16 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-10 text-xl leading-relaxed">
                Browse our complete collection of 3000+ icons and find the perfect match for your project.
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="group text-lg px-10 py-7 shadow-2xl shadow-primary/30">
                  <Link href="/icons">
                    Explore All Icons
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-border/50 mt-24">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                >
                  <span className="text-primary-foreground font-bold">P</span>
                </motion.div>
                <span className="font-bold text-lg">Piktoza</span>
              </div>
              <div className="text-sm text-muted-foreground">© 2025 Piktoza. Modern icon library for React.</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
