"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { DonationModal } from "@/components/donation-modal"
import { WelcomePopup } from "@/components/welcome-popup"
import { HeroSection } from "@/components/hero-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { FloatingDonateButton } from "@/components/floating-donate-button"

export default function HomePage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)

  const handleDonateClick = () => {
    setIsDonateModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Navigation onDonateClick={handleDonateClick} />
      <HeroSection onDonateClick={handleDonateClick} />
      <VisionMissionSection />
      <ServicesSection onDonateClick={handleDonateClick} />
      <StatsSection />

      <WelcomePopup onDonateClick={handleDonateClick} />
      <DonationModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />

      <FloatingDonateButton onClick={handleDonateClick} />
    </main>
  )
}
