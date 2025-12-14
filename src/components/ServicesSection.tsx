import { Film, Video, Megaphone, Tv, Sparkles } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    subtitle: "Short & Long Form",
    description: "Precision cuts, seamless transitions, and pacing that keeps viewers hooked.",
    color: "primary"
  },
  {
    icon: Film,
    title: "Filmmaking",
    subtitle: "Visual Storytelling",
    description: "Cinematic narratives that bring your vision to life with emotion and impact.",
    color: "secondary"
  },
  {
    icon: Megaphone,
    title: "Branding Videos",
    subtitle: "Promotional Content",
    description: "Compelling brand stories that connect with your audience and drive action.",
    color: "accent"
  },
  {
    icon: Tv,
    title: "Social Content",
    subtitle: "Reels, YouTube & Ads",
    description: "Platform-optimized content designed to maximize engagement and reach.",
    color: "primary"
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    subtitle: "& Sound Design",
    description: "Dynamic animations and audio that elevate your content to the next level.",
    color: "secondary"
  }
];

const colorMap = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--secondary)/0.3)]"
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)]"
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end video production services that transform ideas into powerful visual stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <div
                key={service.title}
                className={`group relative p-8 rounded-2xl border ${colors.border} bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${colors.glow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-1 text-foreground">
                  {service.title}
                </h3>
                <p className={`${colors.text} font-medium text-sm uppercase tracking-wider mb-3`}>
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                  style={{ background: `var(--gradient-${service.color === 'accent' ? 'secondary' : 'primary'})` }} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
