"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Heart } from "lucide-react";
import Image from "next/image";

interface WelcomePopupProps {
  onDonateClick: () => void;
}

export function WelcomePopup({ onDonateClick }: WelcomePopupProps) {
  const pathname = usePathname();
  const navigate = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show popup on homepage
    if (pathname === "/") {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsVisible(false);
    // Removed localStorage so popup appears on every reload
  };

  const handleDonate = () => {
    handleClose();
    onDonateClick();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <Card
        className="w-full max-w-md relative overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
        style={{ maxHeight: "90vh" }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 p-2 hover:bg-white/20 rounded-full transition-colors bg-white/10 backdrop-blur-sm"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Scrollable content area (now includes hero image) */}
        <CardContent className="p-0 pt-0 pb-28 text-center overflow-y-auto flex-1 scrollbar-hide" style={{ maxHeight: "calc(90vh - 0.5rem)" }}>
          {/* Hero Image */}
          <div className="relative h-48 overflow-hidden w-full">
            <Image src="/images/1.png" alt="Community gathering" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="p-6">
            {/* Welcome Message */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Welcome to Way of Heaven</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Join us in transforming lives through compassion, education, healthcare, and community support. Your generosity brings hope to
                families across Pakistan.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">40+</div>
                  <div className="text-xs text-muted-foreground">Families Helped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">100+</div>
                  <div className="text-xs text-muted-foreground">Children Educated</div>
                </div>
              </div>
            </div>

            {/* Small print */}
            <p className="text-xs text-muted-foreground mt-4">Every donation makes a difference in someone's life</p>
          </div>
        </CardContent>

        {/* Sticky Donate Now button at the bottom */}
        <div className="absolute left-0 right-0 bottom-0 px-6 pb-6 pt-3 bg-background/95 backdrop-blur-md z-20 border-t border-primary/10">
          <Button
            onClick={handleDonate}
            className="w-full !bg-primary !text-primary-foreground hover:!bg-primary/90 font-semibold shadow-lg"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Heart className="w-4 h-4 mr-2" />
            Donate Now
          </Button>
          <Button
            onClick={() => navigate.push("/impact")}
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground hover:bg-muted/50 mt-2"
          >
            Explore Our Work
          </Button>
        </div>
      </Card>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
