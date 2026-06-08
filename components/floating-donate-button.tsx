"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloatingDonateButtonProps {
  onClick: () => void
}

export function FloatingDonateButton({ onClick }: FloatingDonateButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {/* Ripple effect background */}
        <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse delay-75"></div>

        <Button
          onClick={onClick}
          className="relative w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-110 group overflow-hidden"
          size="lg"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <Heart className="w-6 h-6 fill-current group-hover:scale-125 transition-transform duration-300 relative z-10" />

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Donate Now
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </Button>
      </div>
    </div>
  )
}
