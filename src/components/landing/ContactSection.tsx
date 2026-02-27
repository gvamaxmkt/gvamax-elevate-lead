import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", consulta: "Hola, quiero más información" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu consulta! Nos comunicaremos pronto.");
  };

  return (
    <section id="contacto" className="py-20 gradient-section">
      <div className="container max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contactanos</h2>
          <p className="mt-3 text-muted-foreground">Estamos para ayudarte a potenciar tu negocio.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card border border-border space-y-4">
          <Input placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
          <Input type="tel" placeholder="Teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} required />
          <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Textarea placeholder="Consulta" value={form.consulta} onChange={(e) => setForm({ ...form, consulta: e.target.value })} rows={4} required />
          <Button variant="hero" className="w-full" size="lg" type="submit">
            Enviar consulta
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
