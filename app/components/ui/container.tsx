import { cn } from "@/lib/utils"
import React from "react"

interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
} 