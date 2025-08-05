"use client"

import { cn } from "@/lib/utils"

interface StatusIndicatorProps {
  status: "online" | "offline" | "idle" | "dnd"
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

export function StatusIndicator({ status, size = "md", animated = true }: StatusIndicatorProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
  }

  return <div className={cn("rounded-full", sizeClasses[size], statusColors[status], animated && "animate-pulse")} />
}
