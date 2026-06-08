"use client";

import { Counter } from "@/components/ui/counter";
import { FadeIn } from "@/components/ui/fade-in";
import { Users, Heart, Home, BookOpen } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 2000,
      suffix: "+",
      label: "Lives Touched",
      description: "People reached through our different programs & initiatives ",
    },
    {
      icon: Home,
      value: 100,
      suffix: "+",
      label: "Orphans Cared",
      description: "Children provided with shelter and support from Safe Childhood Program",
    },
    {
      icon: Heart,
      value: 40,
      suffix: "+",
      label: "Communities Served",
      description: "Underserved families and communities receiving aid through our Family Assistance Program",
    },
    {
      icon: BookOpen,
      value: 1,
      suffix: "+",
      label: "Educational Centers",
      description: "Education and training centers established under our Learning for Life Program & Vocational Training Initiative  ",
    },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Through God's grace and your support, we continue to make a difference in communities across Pakistan.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <FadeIn key={index} delay={index * 200} className="text-center h-full">
                <div className="bg-white/10 h-full backdrop-blur-sm rounded-2xl p-6 bg-amber-400 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  {/* <h3 className="text-xl font-semibold mb-2">{stat.label}</h3> */}
                  <p className="text-primary-foreground/70 text-sm">{stat.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
