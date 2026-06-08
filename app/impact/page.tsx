"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in"; // Added FadeIn component import
import { Counter } from "@/components/ui/counter"; // Added Counter component import
import { Heart, BookOpen, Package, Church, X, HandHelping, Baby, BookHeart, HandCoins } from "lucide-react";
import { DonationModal } from "@/components/donation-modal";
import { WelcomePopup } from "@/components/welcome-popup";
import { FloatingDonateButton } from "@/components/floating-donate-button";

interface ImageInfo {
  title: string;
  description: string;
  alt: string;
  categoryIndex?: number;
  imageIndex?: number;
}

export default function ImpactPage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImageInfo, setSelectedImageInfo] = useState<ImageInfo | null>(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const handleDonateClick = () => {
    setIsDonateModalOpen(true);
  };

  // Function to navigate between images in the modal
  const navigateImage = (direction: "next" | "prev") => {
    if (currentCategoryIndex === null || currentImageIndex === null) return;

    const currentCategory = galleryCategories[currentCategoryIndex];
    const imagesCount = currentCategory.images.length;

    let newIndex: number;
    if (direction === "next") {
      newIndex = (currentImageIndex + 1) % imagesCount;
    } else {
      newIndex = (currentImageIndex - 1 + imagesCount) % imagesCount;
    }

    const newImage = currentCategory.images[newIndex];
    setSelectedImage(newImage.src);
    setCurrentImageIndex(newIndex);
    setSelectedImageInfo({
      title: currentCategory.title,
      description: currentCategory.description,
      alt: newImage.alt,
      categoryIndex: currentCategoryIndex,
      imageIndex: newIndex,
    });
  };

  // Function to close the modal
  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedImageInfo(null);
    setCurrentCategoryIndex(null);
    setCurrentImageIndex(null);
  };

  // Handle keyboard navigation for the image modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;

    switch (e.key) {
      case "ArrowLeft":
        navigateImage("prev");
        break;
      case "ArrowRight":
        navigateImage("next");
        break;
      case "Escape":
        closeImageModal();
        break;
      default:
        break;
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentCategoryIndex, currentImageIndex]);

  const impactStats = [
    {
      icon: Package,
      number: "2,000+",
      title: "Food Packages Distributed",
      color: "text-secondary",
      countValue: 2000, // Added count value for animation
    },
    {
      icon: BookOpen,
      number: "300+", // Changed from "Dozens" to specific number
      title: "Youth & Children Educated ",
      color: "text-secondary",
      countValue: 300,
    },
    {
      icon: Church,
      number: "50+", // Changed from "Hundreds" to specific number
      title: "Families Receiving Monthly Aid",
      color: "text-secondary",
      countValue: 50,
    },
    {
      icon: Heart,
      number: "5000+", // Changed from "Many" to specific number
      title: "Individuals Benefited Through Outreach Initiatives",
      color: "text-secondary",
      countValue: 5000,
    },
    {
      icon: HandHelping,
      number: "100+", // Changed from "Many" to specific number
      title: "Women Supported Through Skills Development",
      color: "text-secondary",
      countValue: 100,
    },
    {
      icon: Baby,
      number: "800+", // Changed from "Many" to specific number
      title: "Orphan Children Sheltered & Supported",
      color: "text-secondary",
      countValue: 800,
    },
    {
      icon: BookHeart,
      number: "15+", // Changed from "Many" to specific number
      title: "Medical Camps Organized",
      color: "text-secondary",
      countValue: 15,
    },
    {
      icon: HandCoins,
      number: "350+", // Changed from "Many" to specific number
      title: "Patients Received Healthcare Support",
      color: "text-secondary",
      countValue: 350,
    },
  ];

  const galleryCategories = [
    {
      title: "Educational Outreach & Support",
      description: "Empowering youth by providing access to education and learning resources.",
      images: [
        { src: "/images/gallery/edu/edu-1.jpeg", alt: "Children learning in classroom setting" },
        { src: "/images/gallery/edu/edu-2.jpeg", alt: "Community education program" },
        { src: "/images/gallery/edu/edu-3.jpeg", alt: "Teaching session with local families" },
        { src: "/images/gallery/edu/edu-4.jpeg", alt: "Educational support and mentorship" },
        { src: "/images/gallery/edu/edu-5.jpeg", alt: "Educational support and mentorship 2" },
        { src: "/images/gallery/edu/edu-6.jpeg", alt: "Educational support and mentorship 3" },
        { src: "/images/gallery/edu/edu-7.jpeg", alt: "Educational support and mentorship 4" },
        { src: "/images/gallery/edu/edu-8.jpeg", alt: "Educational support and mentorship 5" },
        { src: "/images/gallery/edu/edu-9.jpeg", alt: "Educational support and mentorship 6" },
        { src: "/images/gallery/edu/edu-10.png", alt: "Educational support and mentorship 7" },
        { src: "/images/gallery/edu/edu-11.png", alt: "Educational support and mentorship 8" },
        { src: "/images/gallery/edu/edu-12.png", alt: "Educational support and mentorship 9" },
        { src: "/images/gallery/edu/edu-13.png", alt: "Educational support and mentorship 10" },
      ],
    },
    {
      title: "Humanitarian Aid",
      description: "Providing essential supplies, support and monthly aid to families in need.",
      images: [
        { src: "/images/gallery/aid/aid-1.jpeg", alt: "Food package distribution to families" },
        { src: "/images/gallery/aid/aid-2.jpeg", alt: "Essential supplies being delivered" },
        { src: "/images/gallery/aid/aid-3.jpeg", alt: "Community aid distribution event" },
        { src: "/images/gallery/aid/aid-4.jpeg", alt: "Supporting families in need" },
        { src: "/images/gallery/aid/aid-5.jpeg", alt: "Monthly aid distribution" },
        { src: "/images/gallery/aid/aid-6.png", alt: "Community members receiving aid" },
        { src: "/images/gallery/aid/aid-7.png", alt: "Volunteers organizing aid packages" },
        { src: "/images/gallery/aid/aid-8.jpeg", alt: "Families benefiting from aid" },
        { src: "/images/gallery/aid/aid-9.jpeg", alt: "Community coming together for aid distribution" },
        { src: "/images/gallery/aid/aid-10.jpeg", alt: "Volunteers delivering aid to remote areas" },
        { src: "/images/gallery/aid/aid-11.jpeg", alt: "Children receiving aid packages" },
        { src: "/images/gallery/aid/aid-12.jpeg", alt: "Families expressing gratitude for aid" },
        { src: "/images/gallery/aid/aid-13.png", alt: "Community support during aid distribution" },
        { src: "/images/gallery/aid/aid-14.png", alt: "Volunteers preparing aid packages" },
        { src: "/images/gallery/aid/aid-15.png", alt: "Aid distribution in progress" },
        { src: "/images/gallery/aid/aid-16.png", alt: "Families receiving essential supplies" },
      ],
    },
    {
      title: "Community Medical Outreach",
      description: "Expanding access to basic healthcare and community medical support for vulnerable patients.",
      images: [
        { src: "/images/gallery/med/med-1.jpeg", alt: "Community worship and prayer gathering" },
        { src: "/images/gallery/med/med-2.jpeg", alt: "Spiritual guidance and ministry work" },
        { src: "/images/gallery/med/med-3.jpeg", alt: "Community medical outreach event" },
        { src: "/images/gallery/med/med-4.jpeg", alt: "Healthcare support for patients" },
        { src: "/images/gallery/med/med-5.jpeg", alt: "Medical camp providing care" },
        { src: "/images/gallery/med/med-6.jpeg", alt: "Community members receiving medical support" },
        { src: "/images/gallery/med/med-7.jpeg", alt: "Volunteers assisting in medical outreach" },
        { src: "/images/gallery/med/med-8.png", alt: "Healthcare professionals providing care" },
        { src: "/images/gallery/med/med-9.png", alt: "Patients benefiting from medical outreach" },
      ],
    },
    {
      title: "Youth Engagement & Community Events",
      description: "Building community and inspiring the next generation toward a better future.",
      images: [
        { src: "/images/gallery/yth/yth-1.jpeg", alt: "Youth community gathering" },
        { src: "/images/gallery/yth/yth-2.jpeg", alt: "Community event with children" },
        { src: "/images/gallery/yth/yth-3.jpeg", alt: "Youth development program" },
        { src: "/images/gallery/yth/yth-4.jpeg", alt: "Community engagement activities" },
        { src: "/images/gallery/yth/yth-5.png", alt: "Youth participating in community event" },
        { src: "/images/gallery/yth/yth-6.png", alt: "Community event with youth involvement" },
        { src: "/images/gallery/yth/yth-7.png", alt: "Youth leadership development" },
        { src: "/images/gallery/yth/yth-8.png", alt: "Community event fostering youth engagement" },
        { src: "/images/gallery/yth/yth-9.png", alt: "Youth participating in community activities" },
      ],
    },
  ];

  // Flatten images for the gallery grid view
  const galleryImages = galleryCategories.flatMap((category) =>
    category.images.map((img) => ({
      ...img,
      title: category.title,
      description: category.description,
    })),
  );

  // Filter gallery images based on selected category
  const filteredGalleryImages = useMemo(() => {
    if (!selectedCategory) return galleryImages;
    return galleryImages.filter((image) => image.title === selectedCategory);
  }, [galleryImages, selectedCategory]);

  return (
    <main className="min-h-screen">
      <Navigation onDonateClick={handleDonateClick} />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Impact & Gallery</h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
                See the difference we're making in communities across Pakistan through our various programs and initiatives.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Impact So Far</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Through God's grace and your support, we've been able to make a meaningful difference in countless lives.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <FadeIn key={index} direction="up" delay={0.1 * (index + 1)}>
                  <Card className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-muted/80 transition-colors">
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <CardTitle className="text-3xl font-bold text-foreground min-h-[3rem] flex items-center justify-center">
                        {stat.countValue ? <Counter end={stat.countValue} suffix="+" /> : stat.number}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground min-h-[3.5rem] flex items-center justify-center">
                        {stat.title}
                      </CardDescription>
                    </CardHeader>
                    {/* <CardContent className="flex-grow flex items-center">
                      <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                    </CardContent> */}
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 relative inline-block">
                Our Impact Gallery
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6 text-pretty">
                Witness the transformative work happening across Pakistan through our four key ministry areas.
              </p>
            </FadeIn>
          </div>

          {/* Category Navigation */}
          {/* <div className="mb-12 sticky top-20 z-10 bg-background/80 backdrop-blur-md py-3 px-4 rounded-xl shadow-md mx-auto max-w-4xl">
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-nowrap items-center justify-between gap-2 overflow-x-auto pb-1 snap-x scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
                {galleryCategories.map((category, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="sm"
                    className="whitespace-nowrap px-4 py-2 snap-start first:ml-auto last:mr-auto hover:bg-primary/10"
                    onClick={() => {
                      document.getElementById(`gallery-category-${idx}`)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {category.title}
                  </Button>
                ))}
              </div>
            </FadeIn>
          </div> */}

          {/* Category Sections with Modern Layout */}
          {galleryCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              id={`gallery-category-${categoryIndex}`}
              className={`mb-24 last:mb-0 scroll-mt-32 ${categoryIndex % 2 === 0 ? "" : "bg-muted/30 py-12 px-4 sm:px-8 rounded-3xl"}`}
            >
              <FadeIn direction="up" delay={0.2}>
                <div className={`flex flex-col ${categoryIndex % 2 === 0 ? "items-start" : "items-end"} mb-8`}>
                  <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 relative">
                    {category.title}
                    <span className={`absolute -bottom-2 ${categoryIndex % 2 === 0 ? "left-0" : "right-0"} w-16 h-1 bg-primary rounded-full`}></span>
                  </h3>
                  <p className={`text-muted-foreground text-lg max-w-xl ${categoryIndex % 2 === 0 ? "text-left" : "text-right"}`}>
                    {category.description}
                  </p>
                </div>
              </FadeIn>

              {/* Responsive Grid Layout - All images in equal-sized boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {category.images.map((image, imageIndex) => (
                  <FadeIn key={imageIndex} direction="up" delay={0.1 * ((imageIndex % 5) + 1)}>
                    <div
                      className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/20 hover:border-primary/30"
                      onClick={() => {
                        setSelectedImage(image.src);
                        setCurrentCategoryIndex(categoryIndex);
                        setCurrentImageIndex(imageIndex);
                        setSelectedImageInfo({
                          title: category.title,
                          description: category.description,
                          alt: image.alt,
                          categoryIndex: categoryIndex,
                          imageIndex: imageIndex,
                        });
                      }}
                    >
                      {/* Equal-sized container with aspect ratio */}
                      <div className="relative aspect-square w-full">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                        {/* Hover content */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Image number indicator */}
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-medium">{imageIndex + 1}</span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Story</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl mb-8 text-secondary-foreground/90 text-pretty">
              Your contribution helps us continue this vital work and reach even more communities with hope, care, and support.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <Button
              size="lg"
              onClick={handleDonateClick}
              className="bg-white text-secondary hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-16 md:top-2 md:right-2 right-0 z-50 text-white hover:text-primary transition-colors hover:scale-110 duration-200 bg-black/40 p-2 rounded-full backdrop-blur-sm"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main modal content */}
            <div className="bg-background/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-primary/20 flex flex-col md:flex-row h-full max-h-[80vh] md:max-h-[85vh]">
              {/* Image container - takes 70% on larger screens */}
              <div className="relative flex-grow md:w-[70%] h-[50vh] md:h-auto">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Image
                    src={selectedImage}
                    alt={selectedImageInfo?.alt || "Gallery image"}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Navigation arrows - always visible */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-6">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-black/70 backdrop-blur-md border-white/30 hover:bg-black/90 text-white shadow-lg transition-all duration-200 hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                    disabled={currentCategoryIndex === null || currentImageIndex === null}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-black/70 backdrop-blur-md border-white/30 hover:bg-black/90 text-white shadow-lg transition-all duration-200 hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                    disabled={currentCategoryIndex === null || currentImageIndex === null}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Info sidebar - takes 30% on larger screens */}
              {selectedImageInfo && (
                <div className="p-6 md:w-[30%] border-t md:border-l md:border-t-0 border-primary/10 flex flex-col overflow-y-auto">
                  <div className="mb-4">
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                      {currentCategoryIndex !== null &&
                        currentImageIndex !== null &&
                        `${currentImageIndex + 1} / ${galleryCategories[currentCategoryIndex].images.length}`}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{selectedImageInfo.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm md:text-base">{selectedImageInfo.description}</p>
                  <p className="text-muted-foreground/80 text-sm italic mb-6">{selectedImageInfo.alt}</p>

                  {/* Navigation buttons */}
                  <div className="flex gap-3 mb-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => navigateImage("prev")}
                      disabled={currentCategoryIndex === null || currentImageIndex === null}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => navigateImage("next")}
                      disabled={currentCategoryIndex === null || currentImageIndex === null}
                    >
                      Next
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-primary/10 my-4"></div>

                  {/* Thumbnail navigation in sidebar */}
                  {currentCategoryIndex !== null && (
                    <div className="mt-auto">
                      <h4 className="text-sm font-medium mb-3 text-foreground/80">Browse Images</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {galleryCategories[currentCategoryIndex].images.map((img, idx) => (
                          <div
                            key={idx}
                            className={`relative aspect-square rounded-md overflow-hidden cursor-pointer transition-all ${
                              currentImageIndex === idx
                                ? "ring-2 ring-primary scale-100 opacity-100"
                                : "ring-0 scale-95 opacity-70 hover:opacity-100 hover:scale-100"
                            }`}
                            onClick={() => {
                              setSelectedImage(img.src);
                              setCurrentImageIndex(idx);
                              setSelectedImageInfo({
                                ...selectedImageInfo,
                                alt: img.alt,
                                imageIndex: idx,
                              });
                            }}
                          >
                            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 20vw, 10vw" className="object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <WelcomePopup onDonateClick={handleDonateClick} />
      {/* Donation Modal */}
      <DonationModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />

      {/* Floating Donate Button */}
      <FloatingDonateButton onClick={handleDonateClick} />
    </main>
  );
}
