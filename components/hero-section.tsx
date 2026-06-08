"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  onDonateClick: () => void;
}

const heroSlides = [
  {
    image: "/images/1.png",
    title: "Transforming Lives Through Humanitarian Service",
    subtitle:
      "Way of Heaven Welfare Organization is a registered non-profit organization committed to empowering underserved communities through education, healthcare, youth development, and welfare support across Pakistan.",
    cta: "Learn More",
    linkVisible: true,
    link: "/about",
    donateBtn: true,
  },
  {
    image: "/images/2.png",
    title: "Empowering Communities Through Education",
    subtitle: "Providing quality learning opportunities, skills development, and hope for underprivileged children and youth across Pakistan.",
    cta: "Support Education",
    link: "/about",
    donateBtnName: "Support Education",
    donateBtn: true,
  },
  {
    image: "/images/3.jpg",
    title: "Advancing Community Health & Wellbeing",
    subtitle: "Strengthening access to healthcare through medical camps and emergency support for families living in underserved and rural areas. ",
    cta: "Learn More",
    link: "/about",
    donateBtnName: "Support Healthcare",
    donateBtn: true,
  },
  {
    image: "/images/4.png",
    title: "Caring for the Vulnerable",
    subtitle: "Supporting underserved communities through food distribution, emergency assistance, and welfare initiatives.",
    cta: "Learn More",
    link: "/about",
    donateBtnName: "Support Welfare",
    donateBtn: true,
  },
];

export function HeroSection({ onDonateClick }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroSlides[currentSlide].image || "/placeholder.svg"}
          alt="Hero background"
          fill
          className="object-cover transition-all duration-1000 ease-in-out"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance animate-in slide-in-from-left duration-1000">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty animate-in slide-in-from-left duration-1000 delay-300">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-1000 delay-500">
              {heroSlides[currentSlide].linkVisible && (
                <Button
                  onClick={() => navigate.push(heroSlides[currentSlide].link)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                >
                  <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {heroSlides[currentSlide].cta}
                </Button>
              )}

              {heroSlides[currentSlide].donateBtn && (
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/90 border-white text-gray-900 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg transition-all duration-300 group backdrop-blur-sm"
                  onClick={onDonateClick}
                >
                  <Heart className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:text-red-500 transition-all duration-300" />
                  {heroSlides[currentSlide].donateBtnName || "Donate Now"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
