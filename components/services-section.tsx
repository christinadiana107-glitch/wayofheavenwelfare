"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Heart, Users, BookOpen, Home, Stethoscope, Church } from "lucide-react";

interface ServicesSectionProps {
  onDonateClick: () => void;
}

export function ServicesSection({ onDonateClick }: ServicesSectionProps) {
  const services = [
    {
      icon: BookOpen,
      title: "Learning for Life Program",
      description: "Providing access to education, learning resources, and academic support for underserved children and youth of Pakistan.",
      color: "text-secondary",
    },
    {
      icon: Stethoscope,
      title: "Community Medical Outreach",
      description: "Organizing medical camps and healthcare outreach services for underserved and remote populations of Pakistan.",
      color: "text-primary",
    },
    {
      icon: Home,
      title: "Safe Childhood Program",
      description: "Supporting vulnerable and orphaned children through education assistance, welfare support, and community care initiatives. ",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Skills for Success Initiative",
      description: "Delivering mentorship, leadership development, and skills training to build sustainable futures of the children in Pakistan.",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Family Assistance Program",
      description:
        "Providing food assistance, clean water support, clothing distribution, and emergency relief for vulnerable families and communities.",
      color: "text-secondary",
    },
    {
      icon: Church,
      title: "Vocational Training Initiative",
      description:
        "Providing vocational training, sewing support, computer education, and practical skills development to empower individuals toward sustainable livelihoods.",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Humanitarian & Development Programs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We serve vulnerable populations in Pakistan through transparent and impactful programs aimed at improving education, healthcare access,
            and community wellbeing.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <FadeIn key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* Call to Action */}
        <FadeIn delay={600} className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Help Us Continue Our Mission</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Your support enables us to reach more communities, care for more children, and spread hope to those who need it most.
          </p>
          <Button
            size="lg"
            onClick={onDonateClick}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
          >
            <Heart className="w-5 h-5 mr-2" />
            Support Our Work
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
