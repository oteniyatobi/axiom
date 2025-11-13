import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import Project from "@/components/sections/Project";
import Journey from "@/components/sections/Journey";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Project />
      <Journey />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
