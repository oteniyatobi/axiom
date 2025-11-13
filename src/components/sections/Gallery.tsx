import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  // Placeholder gallery items - will be replaced with actual images
  const galleryItems = [
    { title: "Smart Farm Prototype", category: "Innovation" },
    { title: "Team Workshop", category: "Collaboration" },
    { title: "Hydroponics System", category: "Technology" },
    { title: "Youth Training Session", category: "Education" },
    { title: "Solar Installation", category: "Sustainability" },
    { title: "Harvest Success", category: "Results" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments from our workshops, prototypes, and community impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all hover:scale-105 duration-300 cursor-pointer group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/30 to-primary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] group-hover:bg-[position:200%_0,0_0] transition-all duration-1000" />
                <div className="text-center z-10">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm text-primary font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More photos and updates coming soon as we continue our journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
