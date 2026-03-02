import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import logo from "@/assets/logo-gvamax.png";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
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
              <button onClick={() => setShowPrivacy(true)} className="block opacity-70 hover:opacity-100 underline cursor-pointer">
                Políticas de privacidad
              </button>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-50 space-y-1">
            <p>© 2026 GVAMax. Todos los derechos reservados.</p>
            <p>
              Powered by{" "}
              <a href="https://codeep.com.ar/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
                Codeep
              </a>
            </p>
          </div>
        </div>
      </footer>

      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="GVAMax" className="h-8" />
            </div>
            <DialogTitle className="text-xl font-bold">POLÍTICA DE PRIVACIDAD</DialogTitle>
            <p className="text-xs text-muted-foreground">Última actualización: 10 de abril de 2025</p>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>NET Desarrollos SRL se compromete a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal en relación con el uso de nuestra plataforma.</p>

            <h3 className="font-bold text-foreground">INFORMACIÓN QUE RECOPILAMOS</h3>
            <p>Recopilamos información que usted nos proporciona directamente, como datos de contacto, información de inmuebles, clientes y agenda. También recopilamos datos de uso e información técnica de los dispositivos desde los que accede a nuestra plataforma.</p>

            <h3 className="font-bold text-foreground">USO DE LA INFORMACIÓN</h3>
            <p>La información se utiliza para prestar y mejorar nuestros servicios, facilitar la comunicación con usted, personalizar su experiencia y realizar análisis internos. No compartimos su información con terceros salvo obligación legal.</p>

            <h3 className="font-bold text-foreground">PROTECCIÓN DE LA INFORMACIÓN</h3>
            <p>Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal. Sin embargo, ningún sistema es completamente seguro.</p>

            <h3 className="font-bold text-foreground">COOKIES Y TECNOLOGÍAS SIMILARES</h3>
            <p>Utilizamos cookies para mejorar su experiencia de usuario, obtener estadísticas y reconocerle en futuras visitas. Usted puede rechazar las cookies modificando la configuración de su navegador.</p>

            <h3 className="font-bold text-foreground">ENLACES A TERCEROS</h3>
            <p>Nuestro sitio puede contener enlaces a otras webs. No somos responsables de sus prácticas de privacidad ni de sus contenidos. Recomendamos leer sus políticas de privacidad.</p>

            <h3 className="font-bold text-foreground">CONTROL DE SU INFORMACIÓN PERSONAL</h3>
            <p>Usted tiene derecho a acceder, rectificar, eliminar u oponerse al tratamiento de su información personal. Puede ejercer estos derechos contactándonos a través de los medios que figuran al final de esta política.</p>

            <h3 className="font-bold text-foreground">CAMBIOS A ESTA POLÍTICA</h3>
            <p>Podemos modificar esta política en cualquier momento. Notificaremos los cambios mediante nuestra plataforma u otros medios apropiados.</p>

            <h3 className="font-bold text-foreground">CONTACTO</h3>
            <p>Si tiene preguntas sobre esta política, contáctenos:</p>
            <p className="font-medium text-foreground">
              NET Desarrollos SRL<br />
              soporte@net-desarrollos.com.ar<br />
              54 351 662 1515
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
