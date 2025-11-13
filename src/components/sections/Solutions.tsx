import { Smartphone, Cloud, BarChart3, Users, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Solutions = () => {
  const { ref, isVisible } = useScrollAnimation();

  const solutions = [
    {
      icon: Smartphone,
      title: "Smart Farming App",
      description: "Mobile platform connecting farmers with real-time agricultural data, weather forecasts, and market prices.",
    },
    {
      icon: Cloud,
      title: "IoT Sensors",
      description: "Affordable sensor technology for soil monitoring, irrigation control, and crop health tracking.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "AI-powered insights for crop yield prediction, pest detection, and resource optimization.",
    },
    {
      icon: Users,
      title: "Community Platform",
      description: "Connect young farmers, share knowledge, and build a network of agricultural innovators.",
    },
    {
      icon: Zap,
      title: "Training Programs",
      description: "Digital and in-person workshops teaching modern agricultural technology and business skills.",
    },
    {
      icon: Globe,
      title: "Market Access",
      description: "Direct connection between farmers and buyers, eliminating middlemen and increasing profits.",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building a comprehensive technology ecosystem that makes agriculture 
            attractive, profitable, and accessible to young Africans through innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 duration-300 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <solution.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution Demo Video */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              See Our <span className="text-gradient">Solution in Action</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch how our app connects farmers directly to real markets, eliminating middlemen 
              and increasing profits for agricultural communities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[9/16] md:aspect-video rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl bg-card">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jNtgubGA5pc"
                title="Axiom Solution Demo - Connecting Farmers to Real Markets"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://youtube.com/shorts/jNtgubGA5pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Technology-Driven Transformation
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              By combining mobile technology, IoT sensors, AI analytics, and community building, 
              we're creating an integrated solution that addresses the core challenges facing African agriculture. 
              Our approach not only increases productivity but also makes farming an attractive career 
              choice for the next generation of African youth.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Solutions;
