import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, BookUser, CalendarCheck, ShieldCheck } from "lucide-react";

const perks = [
  { icon: MessageCircle, text: "Atención automática 24/7" },
  { icon: Zap, text: "Más productividad" },
  { icon: BookUser, text: "Centralización de contactos" },
  { icon: CalendarCheck, text: "Agenda automática de visitas" },
  { icon: ShieldCheck, text: "Respuestas claras y uniformes" },
];

const plans = [
  { name: "Esencial", desc: "WhatsApp conectado sin IA" },
  { name: "Avanzado", desc: "WhatsApp + IA hasta 400 conversaciones" },
  { name: "Elite", desc: "WhatsApp + IA hasta 800 conversaciones" },
];

const WhatsAppSection = () => (
  <section id="whatsapp" className="py-20 gradient-section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Potenciá tu atención con <span className="text-primary">WhatsApp + Inteligencia Artificial</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          {perks.map((p) => (
            <div key={p.text} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <p.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-foreground font-medium">{p.text}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {plans.map((p) => (
            <div key={p.name} className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h4 className="font-bold text-foreground">{p.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">* Los planes con IA tienen un costo de instalación único.</p>
          <Button variant="hero" className="w-full" asChild>
            <a href="#contacto">Quiero más información</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default WhatsAppSection;
