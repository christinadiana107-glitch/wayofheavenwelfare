"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

interface NavigationProps {
  onDonateClick: () => void
}

export function Navigation({ onDonateClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative overflow-hidden rounded-full">
              <Image
                src="/images/logo.png"
                alt="Way of Heaven Welfare Organization"
                width={56}
                height={56}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                Way of Heaven
              </h1>
              <p className="text-xs text-muted-foreground">Welfare Organization</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/impact"
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Impact & Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onDonateClick}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 group relative overflow-hidden"
            >
              <Heart className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:text-red-200 transition-all duration-300" />
              Donate Now
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-muted/50 p-2 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-muted/50 p-2 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/impact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-muted/50 p-2 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact & Gallery
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-muted/50 p-2 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
