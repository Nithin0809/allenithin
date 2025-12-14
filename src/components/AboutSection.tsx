const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image/Visual */}
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <span className="font-display text-8xl font-bold gradient-text">N</span>
                </div>
              </div>
              
              {/* Floating accents */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "-2s" }} />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Nithin</span>, a creative video editor and filmmaker 
                with a passion for visual storytelling. I specialize in transforming raw footage into 
                <span className="text-primary"> compelling narratives</span> that captivate audiences and deliver results.
              </p>
              <p>
                With experience across brand campaigns, social media content, documentaries, and promotional videos, 
                I bring a versatile skill set and a keen eye for detail to every project.
              </p>
              <p>
                My approach is simple: understand your vision, craft a story that resonates, and 
                deliver content that <span className="text-secondary font-semibold">exceeds expectations</span>—on time, every time.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "100+", label: "Projects" },
                { value: "50+", label: "Happy Clients" },
                { value: "4+", label: "Years Experience" }
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
