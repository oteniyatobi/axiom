import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Journey = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journey" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our ELAB Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Throughout our ELAB journey, we were given challenges and assignments 
              to develop our skills and bring our vision to life. Here's our journey documented.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Introduction",
                description: "Our first challenge was to introduce ourselves and our project vision. Watch our presentation to learn more about Axiom and our mission.",
                videoId: "BaGkWP9KpYM",
              },
              {
                number: "02",
                title: "Discover Africa",
                description: "We explored Makoko, Nigeria to understand the local context and challenges. This challenge helped us connect with communities and discover real-world problems that need innovative solutions.",
                videoId: "XtqOHiu9-bc",
              },
              {
                number: "03",
                title: "Visit to an Orphanage",
                description: "We visited an orphanage to connect with the community and understand the needs of vulnerable children. This experience reinforced our commitment to creating solutions that benefit all members of society, especially the youth who are the future of Africa.",
                videoId: "ItzSBgH87YQ",
              },
              {
                number: "04",
                title: "Visit to Afriyan - Youth Empowerment",
                description: "We visited Afriyan, an organization deeply concerned about youth empowerment. This visit allowed us to understand the critical importance of empowering young Africans and creating opportunities for them to thrive. It strengthened our resolve to build solutions that directly address youth unemployment and create pathways for the next generation of African leaders.",
                videoId: "hrq_JSwRg5M",
              },
              {
                number: "05",
                title: "Challenge 05",
                description: "Continuing our ELAB journey, we tackled new challenges and developed our skills further. This challenge helped us refine our approach and move closer to achieving our mission of transforming agriculture through technology.",
                videoId: "s6Hm7-PNY0Q",
              },
            ].map((challenge) => (
              <div
                key={challenge.number}
                className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary font-bold rounded-full text-sm">
                      Challenge {challenge.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {challenge.description}
                  </p>
                </div>
                
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${challenge.videoId}`}
                    title={`Axiom Challenge ${challenge.number} - ${challenge.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
