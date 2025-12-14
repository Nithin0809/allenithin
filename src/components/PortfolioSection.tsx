import { Play, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const projects = [
  {
    title: "Brand Story: Tech Startup",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    color: "primary"
  },
  {
    title: "Music Video: Electric Dreams",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
    color: "secondary"
  },
  {
    title: "Documentary: Urban Life",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
    color: "accent"
  },
  {
    title: "Product Launch: Fitness App",
    category: "Promotional",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    color: "primary"
  },
  {
    title: "Short Film: Midnight Run",
    category: "Narrative",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
    color: "secondary"
  },
  {
    title: "Social Campaign: Eco Brand",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
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

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer ${colorVariants[project.color as keyof typeof colorVariants]} reveal-scale stagger-${index + 1} ${gridVisible ? 'visible' : ''}`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.6)]">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-3 ${badgeColors[project.color as keyof typeof badgeColors]}`}>
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-foreground/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
