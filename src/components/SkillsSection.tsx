const skills = [
  { name: "Premiere Pro", level: 95, category: "primary" },
  { name: "After Effects", level: 90, category: "secondary" },
  { name: "CapCut", level: 92, category: "primary" },
  { name: "Sound Design", level: 80, category: "secondary" },
  { name: "Color Grading", level: 88, category: "accent" },
  { name: "Motion Graphics", level: 75, category: "primary" },
  { name: "Visual Effects", level: 70, category: "secondary" },
];

const categoryColors = {
  primary: {
    bg: "bg-primary",
    glow: "shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
  },
  secondary: {
    bg: "bg-secondary",
    glow: "shadow-[0_0_20px_hsl(var(--secondary)/0.5)]"
  },
  accent: {
    bg: "bg-accent",
    glow: "shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
  }
};

const SkillsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Industry-standard software and creative techniques at my fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const colors = categoryColors[skill.category as keyof typeof categoryColors];
            return (
              <div
                key={skill.name}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground font-mono text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${colors.bg} transition-all duration-1000 ease-out group-hover:${colors.glow}`}
                    style={{
                      width: `${skill.level}%`,
                      boxShadow: `0 0 15px hsl(var(--${skill.category})/0.4)`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool logos/badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["Adobe Suite", "Resolve", "Final Cut", "Audition", "Figma"].map((tool) => (
            <span
              key={tool}
              className="px-6 py-3 rounded-full border border-border/50 bg-card/30 text-muted-foreground font-display text-sm uppercase tracking-wider hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
