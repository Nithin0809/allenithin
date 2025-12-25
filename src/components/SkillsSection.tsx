const skills = [
  { name: "Premiere Pro", size: "large", description: "Professional video editing", color: "border-violet-500" },
  { name: "After Effects", size: "large", description: "Motion graphics & VFX", color: "border-purple-500" },
  { name: "CapCut", size: "medium", description: "Quick edits & reels", color: "border-pink-500" },
  { name: "DaVinci Resolve", size: "medium", description: "Color grading", color: "border-orange-500" },
  { name: "Sound Design", size: "small", description: "", color: "border-cyan-500" },
  { name: "Color Grading", size: "small", description: "", color: "border-amber-500" },
  { name: "Motion Graphics", size: "small", description: "", color: "border-emerald-500" },
  { name: "Visual Effects", size: "small", description: "", color: "border-rose-500" },
];

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

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
          {skills.map((skill) => {
            const sizeClasses = {
              large: "col-span-2 row-span-2",
              medium: "col-span-2 md:col-span-1 row-span-2",
              small: "col-span-1 row-span-1",
            };

            return (
              <div
                key={skill.name}
                className={`${sizeClasses[skill.size as keyof typeof sizeClasses]} group relative rounded-2xl border ${skill.color} bg-card/50 backdrop-blur-sm p-6 flex flex-col justify-end overflow-hidden hover:bg-card/80 transition-all duration-300`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`font-display font-bold text-foreground group-hover:text-primary transition-colors ${skill.size === 'large' ? 'text-2xl md:text-3xl' : skill.size === 'medium' ? 'text-xl' : 'text-base'}`}>
                    {skill.name}
                  </h3>
                  {skill.description && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
