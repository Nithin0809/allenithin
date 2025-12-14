import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&q=80"
      >
        <source 
          src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-in-a-dark-room-3039/1080p.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-primary font-display text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
            Creative Video Editor & Filmmaker
          </p>
        </div>
        
        <h1 
          className="opacity-0 animate-fade-in font-display text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tight mb-6"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="gradient-text">NITHIN</span>
        </h1>
        
        <p 
          className="opacity-0 animate-fade-in text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: "0.6s" }}
        >
          Crafting high-impact videos that captivate audiences and 
          <span className="text-foreground font-medium"> elevate brands</span> to new heights.
        </p>
        
        <div 
          className="opacity-0 animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animationDelay: "0.8s" }}
        >
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection("portfolio")}
          >
            <Play className="w-5 h-5" />
            View My Work
          </Button>
          <Button 
            variant="hero-outline" 
            size="xl"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
