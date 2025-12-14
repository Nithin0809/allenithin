const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display text-2xl font-bold gradient-text">
          NITHIN
        </div>
        
        <p className="text-muted-foreground text-sm">
          © {currentYear} Nithin. Crafted with passion.
        </p>
        
        <div className="flex gap-6">
          {["Instagram", "YouTube", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
