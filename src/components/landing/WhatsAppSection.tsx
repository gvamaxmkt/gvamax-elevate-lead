import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Zap,
  BookUser,
  CalendarCheck,
  ShieldCheck,
  BrainCircuit,
  Clock,
  Database,
  Check,
} from "lucide-react";

const perks = [
  { icon: Database, text: "Aprende de tu base de datos" },
  { icon: Clock, text: "Atiende a clientes de manera inmediata 24/7" },
  { icon: Zap, text: "Ahorra tiempo y aumenta la productividad" },
  { icon: ShieldCheck, text: "Utiliza mensajes claros y uniformes" },
  { icon: BookUser, text: "Centralización total dentro de GVAMax" },
];

const plans = [
  {
    name: "Esencial",
    price: "$60.000",
    highlight: false,
    desc: "Primer paso para ordenar la atención y no perder consultas",
    features: [
      "WhatsApp conectado a GVAMax (sin IA)",
      "Centralización de todos los contactos",
    ],
  },
  {
    name: "Avanzado",
    price: "$185.000",
    highlight: true,
    desc: null,
    features: [
      "WhatsApp + Inteligencia Artificial",
      "Hasta 400 conversaciones mensuales",
      "Registro automático en GVAMax",
      "Agenda de visitas y resúmenes automáticos",
      "Soporte y capacitación",
    ],
  },
  {
    name: "Elite",
    price: "$295.000",
    highlight: false,
    desc: null,
    features: [
      "WhatsApp + Inteligencia Artificial",
      "Hasta 800 conversaciones mensuales",
      "Registro automático en GVAMax",
      "Agenda de visitas y resúmenes automáticos",
      "Soporte y capacitación",
    ],
  },
];

const WhatsAppSection = () => (
  <section id="whatsapp" className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
    {/* Decorative gradient blobs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

    <div className="container relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
          <BrainCircuit className="h-4 w-4" />
          WhatsApp + IA
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Potencia tu plan
        </h2>
        <p className="text-lg md:text-xl mt-3 text-primary-foreground/70 font-medium">
          Llevá tu atención a otro nivel
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center max-w-2xl mx-auto text-primary-foreground/60 mb-14"
      >
        Ofrecemos una solución innovadora que combina{" "}
        <span className="text-primary font-semibold">WhatsApp + Inteligencia Artificial + CRM</span>{" "}
        especializado en inmobiliarias.
      </motion.p>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {perks.map((p) => (
          <div
            key={p.text}
            className="flex items-center gap-2.5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-5 py-2.5"
          >
            <p.icon className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm font-medium text-primary-foreground/80">{p.text}</span>
          </div>
        ))}
      </motion.div>

      {/* Plan Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className={`rounded-2xl p-7 flex flex-col relative ${
              plan.highlight
                ? "bg-primary text-primary-foreground ring-2 ring-primary shadow-lg shadow-primary/20 scale-[1.03]"
                : "bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-primary text-xs font-bold px-4 py-1 rounded-full shadow">
                Más elegido
              </span>
            )}

            <h3 className="text-lg font-bold">{plan.name}</h3>
            <p className="text-3xl font-extrabold mt-2">
              {plan.price}
              <span className={`text-sm font-medium ml-1 ${plan.highlight ? "text-primary-foreground/70" : "text-primary-foreground/50"}`}>
                /mes
              </span>
            </p>

            {plan.desc && (
              <p className={`text-sm mt-2 ${plan.highlight ? "text-primary-foreground/80" : "text-primary-foreground/50"}`}>
                {plan.desc}
              </p>
            )}

            <ul className="mt-5 space-y-2.5 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
                  <span className={plan.highlight ? "text-primary-foreground/90" : "text-primary-foreground/70"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlight ? "outline" : "hero"}
              className={`w-full mt-6 ${plan.highlight ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90 border-primary-foreground" : ""}`}
              asChild
            >
              <a href="#contacto">Contactanos</a>
            </Button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-primary-foreground/40 mt-8">
        * Los planes con IA tienen un costo de instalación único.
      </p>
    </div>
  </section>
);

export default WhatsAppSection;
