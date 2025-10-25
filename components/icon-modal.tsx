"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getIconComponent } from "@/lib/icon-mapper"
import type { IconVariant } from "@/lib/types"
import { ArrowCircleDown2, Copy, CopySuccess } from "iconsax-reactjs"

interface IconModalProps {
  iconName: string
  category: string
  variant: IconVariant
  onClose: () => void
}

const variants: IconVariant[] = ["Outline", "Bold", "Bulk", "Broken", "TwoTone"]

export function IconModal({ iconName, category, variant: initialVariant, onClose }: IconModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>(initialVariant)
  const [copied, setCopied] = useState(false)

  const IconComponent = getIconComponent(iconName)

  const reactCode = `import { ${iconName} } from 'piktoza'

<${iconName} 
  size="32" 
  color="currentColor" 
  variant="${selectedVariant}" 
/>`

  const handleCopy = () => {
    navigator.clipboard.writeText(reactCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            {iconName}
            <Badge variant="secondary">{category}</Badge>
          </DialogTitle>
          <DialogDescription>Choose a variant and copy the code to use this icon in your project.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Icon Preview */}
          <div className="flex items-center justify-center p-12 bg-linear-to-br from-muted/50 to-muted rounded-xl border-2 border-border/50 overflow-hidden">
            <div className="w-32 h-32 flex items-center justify-center text-foreground relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {IconComponent ? (
                  <IconComponent
                    className="w-24 h-24 max-w-full max-h-full object-contain"
                    style={{ pointerEvents: "none" }}
                  />
                ) : (
                  <div className="w-24 h-24 bg-muted-foreground/20 rounded" />
                )}
              </div>
            </div>
          </div>

          {/* Variant Selector */}
          <div>
            <label className="text-sm font-medium mb-2 block">Variant</label>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <Button
                  key={v}
                  variant={selectedVariant === v ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedVariant(v)}
                >
                  {v}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium block">React Usage</label>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{reactCode}</code>
              </pre>
              <Button size="sm" variant="secondary" className="absolute top-2 right-2" onClick={handleCopy}>
                {copied ? (
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
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 bg-transparent">
              <ArrowCircleDown2 variant="TwoTone" className="mr-2" />
              Download SVG
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent" asChild>
              <a href={`/docs#${iconName.toLowerCase()}`}>View Docs</a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
