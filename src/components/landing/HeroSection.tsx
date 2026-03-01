import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-dashboard.jpg";

const bullets = [
  "Simplificá tu gestión diaria",
  "Mejor relación costo/beneficio",
  "Mejorá la relación con tus clientes",
  "WhatsApp + IA + CRM: atención 24/7, más leads y más ventas",
];

const HeroSection = () => (
  <section className="pt-28 pb-16 md:pt-36 md:pb-24 gradient-section overflow-hidden">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
          Gestioná tu inmobiliaria{" "}
          <span className="text-primary">desde un solo lugar</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-lg">
          Publicá propiedades, atendé clientes y automatizá tu negocio con un CRM integrado a portales
        </p>

        <ul className="mt-6 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#prueba">Probar gratis ahora</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#demo">Coordinar demo</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-xl overflow-hidden shadow-card"
      >
        <img src={heroImg} alt="Dashboard GVAMax CRM" className="w-full h-auto" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
