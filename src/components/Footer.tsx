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
          {[
            { name: "Instagram", href: "https://www.instagram.com/edit.with.nithin/" },
            { name: "YouTube", href: "https://www.youtube.com/@Editwithnithin" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/nithinalle/" }
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
