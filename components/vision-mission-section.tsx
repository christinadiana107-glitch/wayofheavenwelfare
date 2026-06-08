import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { Eye, Target } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <FadeIn direction="left">
            <Card className="h-full hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Eye className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To empower individuals, families, and communities to break free from spiritual darkness, poverty, inequality, and suffering by
                  sharing the message of hope, extending compassionate humanitarian assistance, promoting education, healthcare, and sustainable
                  development, and creating opportunities that enable people to build dignified, self-reliant, and purposeful lives. We envision
                  transformed communities where every person has the opportunity to flourish physically, socially, economically, and spiritually,
                  contributing to a more just, compassionate, and prosperous society.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* +92 3325892922 */}

          {/* Mission Card */}
          <FadeIn direction="right" delay={200}>
            <Card className="h-full hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <Target className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-secondary transition-colors duration-300">Our Missions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="group/item hover:bg-muted/50 px-2 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-1 group-hover/item:text-primary transition-colors duration-300">
                      Inclusive Education & Youth Development
                    </h4>
                    <p className="text-muted-foreground">
                      Supporting underserved children and youth through education and skills development initiatives.
                    </p>
                  </div>
                  <div className="group/item hover:bg-muted/50 px-2 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-1 group-hover/item:text-primary transition-colors duration-300">
                      Essential Healthcare Services & Emergency Support
                    </h4>
                    <p className="text-muted-foreground">
                      Improving access to healthcare for vulnerable populations through outreach and medical support programs.
                    </p>
                  </div>
                  <div className="group/item hover:bg-muted/50 px-2 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-1 group-hover/item:text-primary transition-colors duration-300">
                      Sustainable Community Development & Future Preservation
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing transparent and impactful welfare initiatives that address poverty and social inequality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
