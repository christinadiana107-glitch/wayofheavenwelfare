"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SuccessAnimationProps {
  show: boolean
  message?: string
  className?: string
}

export function SuccessAnimation({ show, message = "Success!", className }: SuccessAnimationProps) {
  if (!show) return null

  return (
    <div className={cn("flex items-center space-x-2 text-green-600 animate-in zoom-in duration-300", className)}>
      <div className="relative">
        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center animate-in zoom-in duration-500">
          <Check className="w-4 h-4 animate-in zoom-in duration-300 delay-200" />
        </div>
        <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-75"></div>
      </div>
      <span className="font-medium animate-in slide-in-from-right duration-300 delay-300">{message}</span>
    </div>
  )
}
