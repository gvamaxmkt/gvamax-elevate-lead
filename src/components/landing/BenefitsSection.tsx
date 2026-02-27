import { motion } from "framer-motion";
import { Building2, Users, MessageSquare, Share2, Globe, BarChart3 } from "lucide-react";

const benefits = [
  { icon: Building2, title: "Gestionar inmuebles", desc: "Cargá tus propiedades una sola vez de forma rápida." },
  { icon: Users, title: "Seguimiento de clientes", desc: "Agenda, eventos, performance de vendedores y cartera." },
  { icon: MessageSquare, title: "Administrar consultas", desc: "Centralizá todas las consultas y mejorá la atención." },
  { icon: Share2, title: "Publicar en portales", desc: "Publicación automática en portales y redes." },
  { icon: Globe, title: "Crear web profesional", desc: "Sitio inmobiliario personalizable." },
  { icon: BarChart3, title: "Reportes y estadísticas", desc: "Datos y alertas para oportunidades de negocio." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Todo desde un solo lugar</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Simplificá la operación de tu inmobiliaria con herramientas pensadas para vos.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
          >
            <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <b.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
