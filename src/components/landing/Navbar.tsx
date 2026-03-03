import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-gvamax.png";

const navLinks = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Planes", href: "#planes" },
  { label: "WhatsApp + IA", href: "#whatsapp" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground backdrop-blur-lg border-b border-foreground">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="GVAMax" className="h-9" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-primary-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="https://wa.me/5493516418412?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20GVAMax" target="_blank" rel="noopener noreferrer">Probar gratis</a>
          </Button>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground border-b border-foreground pb-4 px-6 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-primary-foreground/70 hover:text-primary py-1">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full" asChild>
            <a href="https://wa.me/5493516418412?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20GVAMax" target="_blank" rel="noopener noreferrer">Probar gratis</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
