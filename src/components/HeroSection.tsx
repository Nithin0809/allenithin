import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[80px] animate-float" style={{ animationDelay: "-1.5s" }} />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

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
