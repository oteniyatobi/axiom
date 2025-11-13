import { Users, Target, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import tobiPhoto from "@/assets/tobi-photo.jpg";
import sosthenePhoto from "@/assets/sosthene-photo.png";
import valentinPhoto from "@/assets/valentin-photo.png";
import vaninaPhoto from "@/assets/vanina-photo.png";
import divinePhoto from "@/assets/divine-photo.png";
import wangPhoto from "@/assets/wang-photo.png";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower African youth through technology and innovation to solve real-world challenges.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We will create tech-driven solutions that make agriculture attractive and sustainable.",
    },
    {
      icon: Users,
      title: "Youth-Led",
      description: "We aim to build a movement of young innovators ready to transform Africa's future.",
    },
    {
      icon: Rocket,
      title: "Scale Impact",
      description: "Our vision: from local solutions to continental transformation through smart technology.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Axiom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are Axiom - a team of six passionate innovators from the African Leadership University, 
            united by our mission to help reduce unemployment in Rwanda by empowering young Africans to 
            integrate technology into agriculture, with a vision to create sustainable jobs for youth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 duration-300"
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six passionate innovators from African Leadership University, united by a vision
              to transform agriculture through technology and empower youth across Rwanda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Oteniya Oluwatobi", role: "Team Leader" },
              { name: "INEZA Ndahirwa Sosthene", role: "Team Member" },
              { name: "Valantin Kabogo Murara", role: "Team Member" },
              { name: "Akimana Vanina", role: "Team Member" },
              { name: "Yamuragiye Niyomubyeyi Divine", role: "Team Member" },
              { name: "Wang Zhuoyue", role: "Team Member" },
            ].map((member, idx) => (
              <Card key={idx} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  {idx === 0 ? (
                    <img 
                      src={tobiPhoto} 
                      alt="Oteniya Oluwatobi - Team Leader"
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : idx === 1 ? (
                    <img 
                      src={sosthenePhoto} 
                      alt="INEZA Ndahirwa Sosthene - Team Member"
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : idx === 2 ? (
                    <img 
                      src={valentinPhoto} 
                      alt="Valantin Kabogo Murara - Team Member"
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : idx === 3 ? (
                    <img 
                      src={vaninaPhoto} 
                      alt="Akimana Vanina - Team Member"
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : idx === 4 ? (
                    <img 
                      src={divinePhoto} 
                      alt="Yamuragiye Niyomubyeyi Divine - Team Member"
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : idx === 5 ? (
                    <img 
                      src={wangPhoto} 
                      alt="Wang Zhuoyue - Team Member"
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="text-primary" size={32} />
                    </div>
                  )}
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary/20 bg-secondary/30">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                Each member of Axiom brings unique skills and perspectives, united by a common goal:
                to leverage technology for sustainable development. Through our journey in the E-Lab
                course, we're learning that the future of Africa lies in the hands of its youth, armed
                with innovation, determination, and smart solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
