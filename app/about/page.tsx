"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in"; // Added FadeIn component import
import { Heart, Award, MapPin } from "lucide-react";
import { DonationModal } from "@/components/donation-modal";
import { WelcomePopup } from "@/components/welcome-popup";
import { FloatingDonateButton } from "@/components/floating-donate-button";
import { ServicesSection } from "@/components/services-section";

// const coreServices = [
//   {
//     icon: BookOpen,
//     title: "Education Initiatives",
//     description: "Establishing Schools, Tuition Centers, and Bible Training Programs for Holistic Development.",
//   },
//   {
//     icon: Stethoscope,
//     title: "Medical Camps",
//     description: "Delivering Free Healthcare in Slums and Remote Communities.",
//   },
//   {
//     icon: Home,
//     title: "Orphan Care",
//     description: "Providing Shelter, Education, and Hope for Children in Need.",
//   },
//   {
//     icon: Users,
//     title: "Youth Development",
//     description: "Offering Mentorship, Vocational Training, and Recovery Programs to Protect Youth from Addiction and Hopelessness.",
//   },
//   {
//     icon: Heart,
//     title: "Outreach Projects",
//     description: "Supplying Clean Water, Food, and Clothing in Underserved Rural Areas.",
//   },
// ];

export default function AboutPage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleDonateClick = () => {
    setIsDonateModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navigation onDonateClick={handleDonateClick} />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Way of Heaven Welfare Organization</h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
                We are a government-registered, Pakistan Centre for Philanthropy (PCP) certified, non-profit welfare organization committed to serving
                humanity without discrimination.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <FadeIn direction="left" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who Are We</h2>
              </FadeIn>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <FadeIn direction="left" delay={0.4}>
                  <p>
                    Way of Heaven Welfare Organization is a registered non-profit welfare support and humanitarian organization based in Pakistan,
                    committed to improving the lives of underserved and vulnerable communities.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.6}>
                  <p>
                    The organization implements a broad range of welfare programs and development initiatives focused on education, vocational and
                    skills training, youth empowerment, women empowerment, healthcare outreach, medical camps, food assistance, rural community
                    support, and emergency relief services. By combining immediate humanitarian response with long-term development strategies, the
                    organization aims to promote self-reliance, community resilience, and sustainable social development across Pakistan.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.6}>
                  <p>
                    Today, Way of Heaven Welfare Organization is steadily growing as a trusted welfare institution dedicated to advancing education,
                    healthcare accessibility, poverty alleviation, and community wellbeing for vulnerable populations throughout Pakistan.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.8}>
                  <div className="flex items-center space-x-2 bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Government Recognized</p>
                      <p className="text-sm">Registration number: DGSW (s) 2532</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <FadeIn direction="right" delay={0.3}>
                <Image
                  src="/images/who-we-are.jpeg"
                  alt="Way of Heaven Team"
                  width={600}
                  height={400}
                  className="rounded-lg m-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-1">
              <FadeIn direction="right" delay={0.3}>
                <Image
                  src="/images/PCP-certificate.jpeg"
                  alt="Way of Heaven Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 m-auto"
                />
              </FadeIn>
            </div>
            <div className="order-2">
              <FadeIn direction="left" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">PCP Recognized Certified from PCP</h2>
              </FadeIn>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <FadeIn direction="left" delay={0.4}>
                  <p>
                    Way of Heaven Welfare Organization has successfully obtained certification from the Pakistan Centre for Philanthropy (PCP), one of
                    Pakistan’s most recognized standards for non-profit credibility and institutional compliance.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.6}>
                  <p>
                    This certification demonstrates that our welfare programs, financial management systems, and organizational policies meet
                    established compliance and accountability requirements. It reflects our commitment to genuine humanitarian work, responsibility
                    towards donor trust, and sustainable community development initiatives serving vulnerable populations across Pakistan.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.6}>
                  <p>
                    Our certification reinforces the trust placed in us by donors, partners, and communities, while reflecting our commitment to
                    ethical humanitarian service and impactful social welfare initiatives.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.8}>
                  <div className="flex items-center space-x-2 bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Government Recognized</p>
                      <p className="text-sm">Registration number: DGSW (s) 2532</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2 flex justify-center">
              <FadeIn direction="left" delay={0.3}>
                <div className="relative w-full max-w-[400px]">
                  <Image
                    src="/images/founder.png"
                    alt="Reverend Zulfiqar Barkat"
                    width={400}
                    height={400}
                    className=" shadow-lg hover:shadow-xl transition-shadow duration-300 border-4"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </FadeIn>
            </div>
            <div className="order-2 lg:order-1">
              <FadeIn direction="right" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Reverend Zulfiqar Barkat</h2>
                <h3 className="text-xl font-semibold text-secondary mb-6">Founder and Chairman</h3>
              </FadeIn>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <FadeIn direction="right" delay={0.4}>
                  <p>
                    At the heart of Way of Heaven Welfare Organization stands its visionary founder, Reverend Zulfiqar Barkat — a distinguished social
                    worker whose life embodies sacrifice, humility, and devotion to humanity.
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.6}>
                  <p>
                    Once leading a princely lifestyle, Rev. Barkat gave up his worldly comforts and possessions, choosing instead a life of simplicity
                    and a heart burning with compassion. His decision was not a loss but a divine calling: to dedicate his life entirely to serving
                    mankind and his beloved country, Pakistan.
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.8}>
                  <p>
                    Starting with nothing but his personal resources and a small room in Karachi's busy business district, he began his mission to
                    comfort the suffering and uplift the poor. His tireless work soon grew into a movement — Way of Heaven Welfare Organization —
                    today recognized for its credibility, transparency, and unwavering humanitarian spirit.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection onDonateClick={handleDonateClick} />
      {/* Core Areas of Service */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Areas of Service</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                We focus on five key areas to create lasting impact in communities across Pakistan.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <FadeIn key={index} direction="up" delay={0.1 * (index + 1)}>
                  <Card className="h-full hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl mb-8 text-secondary-foreground/90 text-pretty">
              Together, we can transform lives, support families, and bring hope to communities across Pakistan. Your support makes a real difference.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleDonateClick}
                className="bg-white text-secondary hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Support Our Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Our Projects
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Welcome Popup */}
      <WelcomePopup onDonateClick={handleDonateClick} />

      {/* Donation Modal */}
      <DonationModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />

      {/* Floating Donate Button */}
      <FloatingDonateButton onClick={handleDonateClick} />
    </main>
  );
}
