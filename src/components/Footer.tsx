export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-display)] text-sm font-semibold">
          Gabriel<span className="text-accent">.</span>
        </p>
        <nav className="flex items-center gap-6">
          <a href="#portfolio" className="text-muted text-xs hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#services" className="text-muted text-xs hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-muted text-xs hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-muted text-xs hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        <p className="text-muted text-xs">
          &copy; {new Date().getFullYear()} Gabriel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
