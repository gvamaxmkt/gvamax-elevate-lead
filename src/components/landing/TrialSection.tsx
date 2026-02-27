import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const TrialSection = () => {
  const [form, setForm] = useState({ empresa: "", nombre: "", email: "", telefono: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por registrarte! Te enviaremos los datos de acceso.");
  };

  return (
    <section id="prueba" className="py-20 gradient-section">
      <div className="container max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Probá GVAMax gratis ahora mismo</h2>
          <p className="mt-3 text-muted-foreground">Sin tarjeta de crédito. Empezá en minutos.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card border border-border space-y-4">
          <Input placeholder="Empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} required />
          <Input placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
          <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Input type="tel" placeholder="Teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} required />
          <Input type="password" placeholder="Contraseña" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <Button variant="hero" className="w-full" size="lg" type="submit">
            Registrarme gratis
          </Button>
        </form>
      </div>
    </section>
  );
};

export default TrialSection;
