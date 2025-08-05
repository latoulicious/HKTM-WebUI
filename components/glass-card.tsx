"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  blur?: "sm" | "md" | "lg" | "xl"
  opacity?: number
}

export function GlassCard({ children, className, blur = "md", opacity = 10 }: GlassCardProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  }

  return (
    <div
      className={cn(`${blurClasses[blur]} bg-white/${opacity} border border-white/20 rounded-xl shadow-lg`, className)}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      {children}
    </div>
  )
}
