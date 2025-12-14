import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    title: "Story-Driven Edits",
    description: "Every cut serves the narrative. I create edits that hold attention from start to finish."
  },
  {
    title: "Platform-Ready Visuals",
    description: "Clean, modern content optimized for every platform—YouTube, Instagram, TikTok, and beyond."
  },
  {
    title: "Fast & Reliable Delivery",
    description: "Clear communication, transparent timelines, and on-time delivery every single time."
  },
  {
    title: "Versatile Experience",
    description: "From brand campaigns to academic content, I adapt my style to match your unique needs."
  }
];

const WhyMeSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Why Work <br />
              <span className="gradient-text-secondary">With Me?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I don't just edit videos—I craft experiences that resonate. 
              With a keen eye for detail and a passion for storytelling, 
              I transform raw footage into compelling content that achieves results.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-primary font-display font-bold text-lg">100+ Projects Delivered</span>
            </div>
          </div>

          {/* Right content - Cards */}
          <div ref={cardsRef} className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] reveal stagger-${index + 1} ${cardsVisible ? 'visible' : ''}`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
                
                {/* Number indicator */}
                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
