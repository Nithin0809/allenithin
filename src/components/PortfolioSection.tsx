import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Nithin Edit",
    category: "Video Edit",
    video: "/nithin3.mp4",
    color: "primary"
  },
  {
    title: "Finalized Project",
    category: "Creative Edit",
    video: "/finalized1.mp4",
    color: "secondary"
  },
  {
    title: "Zentric",
    category: "Brand Video",
    video: "/zentric.mp4",
    color: "accent"
  }
];

const colorVariants = {
  primary: "group-hover:border-primary/60 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]",
  secondary: "group-hover:border-secondary/60 group-hover:shadow-[0_0_40px_hsl(var(--secondary)/0.3)]",
  accent: "group-hover:border-accent/60 group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)]"
};

const badgeColors = {
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  accent: "bg-accent/20 text-accent"
};

const PortfolioSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of projects that demonstrate my range and creative vision
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer ${colorVariants[project.color as keyof typeof colorVariants]} reveal-scale stagger-${index + 1} ${gridVisible ? 'visible' : ''}`}
            >
              {/* Video */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <video
                  src={project.video}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loop
                  playsInline
                  controls
                  onClick={(e) => {
                    // Pause all other videos when this one is clicked
                    document.querySelectorAll('video').forEach(v => {
                      if (v !== e.currentTarget) {
                        v.pause();
                      }
                    });
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
