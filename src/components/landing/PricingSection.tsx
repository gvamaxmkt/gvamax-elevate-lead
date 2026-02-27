import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PlanFeature {
  label: string;
  values: (string | boolean)[];
}

const planNames = ["Starter", "Starter Pro", "Equipo", "Empresa", "Plan Black"];
const planPrices = ["$25.130", "$34.390", "$55.540", "$99.360", "Personalizado"];
const planNotes = ["+ IVA/mes", "+ IVA/mes", "+ IVA/mes", "+ IVA/mes", "Consultá el costo"];
const planBadges = ["Económico", "Más vendido", null, null, null];
const highlightIdx = 1;

const features: PlanFeature[] = [
  { label: "Usuarios", values: ["1", "2", "5", "10", "Personalizado"] },
  { label: "Inmuebles", values: ["50", "150", "500", "Ilimitados", "Ilimitados"] },
  { label: "Página web", values: [true, true, true, true, true] },
  { label: "Integraciones portales", values: [false, true, true, true, true] },
  { label: "Apps móviles", values: [false, false, true, true, true] },
  { label: "API", values: [false, false, false, true, true] },
  { label: "Soporte prioritario", values: [false, false, true, true, true] },
];

const PricingSection = () => (
  <section id="planes" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Elegí el plan ideal para tu inmobiliaria</h2>
        <p className="mt-3 text-muted-foreground">Planes flexibles que crecen con tu negocio.</p>
      </motion.div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr>
              <th className="text-left py-4 px-3 font-medium text-muted-foreground">Característica</th>
              {planNames.map((n, i) => (
                <th key={n} className={`py-4 px-3 text-center relative ${i === highlightIdx ? "bg-accent rounded-t-xl" : ""}`}>
                  {planBadges[i] && (
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-1.5 ${i === highlightIdx ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {planBadges[i]}
                    </span>
                  )}
                  <div className="font-bold text-foreground">{n}</div>
                  <div className="text-lg font-extrabold text-foreground mt-1">{planPrices[i]}</div>
                  <div className="text-[11px] text-muted-foreground">{planNotes[i]}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.label} className="border-t border-border">
                <td className="py-3 px-3 text-muted-foreground">{f.label}</td>
                {f.values.map((v, vi) => (
                  <td key={vi} className={`py-3 px-3 text-center ${vi === highlightIdx ? "bg-accent" : ""}`}>
                    {typeof v === "boolean" ? (
                      v ? <Check className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                    ) : (
                      <span className="font-medium text-foreground">{v}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-border">
              <td className="py-4 px-3" />
              {planNames.map((n, i) => (
                <td key={n} className={`py-4 px-3 text-center ${i === highlightIdx ? "bg-accent rounded-b-xl" : ""}`}>
                  <Button variant={i === highlightIdx ? "hero" : "hero-outline"} size="sm" asChild>
                    <a href="#prueba">{i === 4 ? "Consultar" : "Empezar"}</a>
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default PricingSection;
