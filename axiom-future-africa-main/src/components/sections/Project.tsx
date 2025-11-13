import { Droplets, Leaf, Zap, Sprout, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import youthFarmingImage from "@/assets/youth-tech-farming.jpg";
import transformationImage from "@/assets/agriculture-transformation.jpg";

const Project = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: Droplets,
      title: "Smart Hydroponics",
      description: "Soil-free farming systems that use 90% less water while producing higher yields year-round.",
    },
    {
      icon: Sprout,
      title: "Precision Agriculture",
      description: "IoT sensors and data analytics for optimized crop growth and resource management.",
    },
    {
      icon: Zap,
      title: "Green Energy",
      description: "Solar-powered systems ensuring sustainable and cost-effective farm operations.",
    },
    {
      icon: Leaf,
      title: "Climate Resilience",
      description: "Technology-driven solutions to combat climate change effects on African agriculture.",
    },
  ];

  return (
    <section id="project" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Youth-led, tech-driven smart farms transforming African agriculture
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            The <span className="text-gradient">Challenge</span> We're Solving
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg">
              <img 
                src={youthFarmingImage} 
                alt="Young African entrepreneurs using technology in farming"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-destructive">17.5%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Youth Unemployment Crisis</h4>
                      <p className="text-muted-foreground">
                        Youth unemployment in Rwanda remains high, with many graduates unable to find meaningful work.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">54%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Agriculture's Perception Problem</h4>
                      <p className="text-muted-foreground">
                        Agriculture employs over half the workforce but lacks skilled young people who view it as outdated and unprofitable.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sprout className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Untapped Potential</h4>
                      <p className="text-muted-foreground">
                        Agriculture holds tremendous potential for technology and entrepreneurship, yet young people see no future in it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Solution Overview */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Vision: <span className="text-gradient">Rwanda 2040</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform agriculture into a modern, youth-attractive sector to reduce unemployment below 10%
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg order-2 lg:order-1">
              <img 
                src={transformationImage} 
                alt="Agricultural transformation in Rwanda"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Technology-Driven Revolution</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        We aim to revolutionize agriculture by making it irresistible to young Africans through
                        smart technology that combines hydroponics, IoT, and renewable energy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Leaf className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Sustainable & Profitable</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Our goal is to create sustainable, profitable farming opportunities that fight youth unemployment 
                        while ensuring food security for communities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Breaking Barriers</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        We plan to remove traditional obstacles like land access and unpredictable weather, creating 
                        tech-savvy farmers who will see agriculture as a lucrative career.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Powered by Innovation</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/50 transition-all hover:scale-105 duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            From Unemployment to Innovation
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our solution won't just create jobs—it will create entrepreneurs. We aim to build an
            ecosystem where young Africans can own and operate high-tech farms, contributing to
            food security while building sustainable businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
