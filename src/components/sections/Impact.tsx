import { Briefcase, GraduationCap, Wheat, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Impact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const impacts = [
    {
      icon: Briefcase,
      title: "Job Creation",
      stat: "Goal: 1000+",
      description: "Youth employment opportunities we aim to create through smart farming",
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      stat: "Target: 5000+",
      description: "Young Africans we plan to train in agriculture technology and innovation",
    },
    {
      icon: Wheat,
      title: "Food Security",
      stat: "Vision: 50+",
      description: "Communities we aim to reach with fresh, locally-grown produce",
    },
    {
      icon: TrendingUp,
      title: "Innovation Hub",
      stat: "Target: 20+",
      description: "Tech-driven agricultural projects we plan to launch across Africa",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-card">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The impact we aspire to create across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="text-center border-primary/20 hover:border-primary/50 transition-all hover:scale-105 duration-300"
            >
              <CardContent className="pt-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <impact.icon className="text-primary" size={36} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{impact.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
                <p className="text-muted-foreground text-sm">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Building a <span className="text-gradient">Sustainable Future</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Economic Empowerment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We aim to create high-tech agricultural opportunities that will provide jobs and build
                  wealth and entrepreneurship in rural communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Knowledge Transfer</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our training programs will equip young Africans with the skills to innovate, adapt, and lead
                  the agricultural revolution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wheat className="text-primary" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Environmental Impact</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Smart farming will reduce water usage, minimize waste, and promote sustainable practices that
                  protect our planet for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
