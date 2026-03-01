import { Mail, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo-gvamax.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="GVAMax" className="h-10 brightness-0 invert mb-4" />
          <p className="text-sm opacity-70">La plataforma todo-en-uno para gestionar y hacer crecer tu inmobiliaria.</p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 opacity-80">
            <Clock className="h-4 w-4" /> Lunes a Viernes 09:00 a 18:00
          </div>
          <div className="flex items-center gap-2 opacity-80">
            <Phone className="h-4 w-4" />
            <a href="https://wa.me/5493516418412" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">
              +54 9 3516418412
            </a>
          </div>
          <div className="flex items-center gap-2 opacity-80">
            <Mail className="h-4 w-4" />
            <a href="mailto:comercial@gvamax.ar" className="hover:opacity-100">comercial@gvamax.ar</a>
          </div>
        </div>

        <div className="text-sm space-y-2">
          <a href="#" className="block opacity-70 hover:opacity-100">Políticas de privacidad</a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-50">
        © 2026 GVAMax. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
