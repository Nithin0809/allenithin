import { Button } from "@/components/ui/button";
import { Mail, Instagram, MessageCircle, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nithin.com",
    href: "mailto:hello@nithin.com",
    color: "primary"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@nithin.edits",
    href: "https://instagram.com/nithin.edits",
    color: "secondary"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "accent"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      
      {/* Animated orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Let's Create Something
          <br />
          <span className="gradient-text">Powerful</span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Ready to bring your vision to life? Let's collaborate and create 
          content that makes an impact.
        </p>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] hover:-translate-y-1"
            >
              <method.icon className="w-8 h-8 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="font-display font-semibold text-foreground mb-1">
                {method.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {method.value}
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="hero" size="xl" className="group" asChild>
          <a href="mailto:hello@nithin.com">
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Get In Touch
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
