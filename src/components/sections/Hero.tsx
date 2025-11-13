import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-smart-farming.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-2 mb-4 rounded-full border border-primary/30 bg-primary/10 animate-fade-in">
          <p className="text-sm font-medium text-primary">Rwanda's Youth Unemployment: 17.5% → Target: Below 10% by 2040</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Transforming Agriculture
          <br />
          <span className="text-gradient">Into Tech Innovation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Making agriculture attractive to Rwanda's youth through smart technology
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          While 54% of Rwanda's workforce is in agriculture, young graduates see it as outdated. 
          We're changing that narrative through hydroponics, IoT, and renewable energy.
        </p>

        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="gradient-gold text-secondary font-semibold" asChild>
            <a href="#project">Explore Our Solution</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Join the Mission</a>
          </Button>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
