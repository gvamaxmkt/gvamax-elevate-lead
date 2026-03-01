import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DemoSection = () => (
  <section id="demo" className="py-20">
    <div className="container text-center max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Coordiná una demo con nuestro equipo</h2>
        <p className="mt-4 text-muted-foreground">Te mostramos cómo GVAMax puede transformar la gestión de tu inmobiliaria.</p>
        <Button variant="hero" size="lg" className="mt-8" asChild>
          <a href="https://wa.me/5493516418412?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20GVAMax" target="_blank" rel="noopener noreferrer">
            Quiero que me contacten
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default DemoSection;
