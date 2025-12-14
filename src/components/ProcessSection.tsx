import { Target, Layout, Scissors, Music, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand the Goal",
    description: "Deep dive into your vision, brand, and objectives",
    icon: Target,
    color: "primary"
  },
  {
    number: "02",
    title: "Structure the Story",
    description: "Craft a compelling narrative arc that resonates",
    icon: Layout,
    color: "secondary"
  },
  {
    number: "03",
    title: "Edit for Impact",
    description: "Precision editing for pacing, flow, and emotion",
    icon: Scissors,
    color: "accent"
  },
  {
    number: "04",
    title: "Sound & Motion",
    description: "Layer audio and motion graphics for depth",
    icon: Music,
    color: "primary"
  },
  {
    number: "05",
    title: "Final Polish",
    description: "Color grade, review, and deliver perfection",
    icon: Sparkles,
    color: "secondary"
  }
];

const stepColors = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    number: "text-primary/20"
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    number: "text-secondary/20"
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    number: "text-accent/20"
  }
};

const ProcessSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text-secondary">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A proven workflow that transforms raw ideas into polished content
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {steps.map((step, index) => {
              const colors = stepColors[step.color as keyof typeof stepColors];
              return (
                <div
                  key={step.number}
                  className="group relative h-full"
                >
                  <div className={`relative p-6 rounded-2xl border ${colors.border} bg-card/50 backdrop-blur-sm text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--${step.color})/0.2)] h-full flex flex-col justify-start`}>
                    {/* Large number background */}
                    <div className={`absolute top-2 right-3 font-display text-6xl font-bold ${colors.number} transition-colors group-hover:text-opacity-30`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`relative z-10 w-14 h-14 mx-auto rounded-xl ${colors.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <step.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>

                    <h3 className="font-display text-lg font-bold mb-2 text-foreground relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector dot */}
                  <div className={`hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${colors.bg} border-2 ${colors.border}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
