
import SectionContainer from "@/components/SectionContainer";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <h2 className="section-title animate-on-scroll">Contacto</h2>
      <p className="text-foreground/70 max-w-3xl mb-10 animate-on-scroll">
        ¿Interesado en trabajar juntos o tienes alguna pregunta? No dudes en ponerte en contacto conmigo.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
          <ContactForm />
        </div>
        
        <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-accent mt-1 mr-3" />
              <div>
                <h4 className="font-medium">Ubicación</h4>
                <p className="text-foreground/70">Santiago, Chile</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-accent mt-1 mr-3" />
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:contacto@carlospena.dev" 
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  contacto@carlospena.dev
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-accent mt-1 mr-3" />
              <div>
                <h4 className="font-medium">Teléfono</h4>
                <a 
                  href="tel:+56912345678" 
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  +56 9 1234 5678
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-medium mb-3">Sígueme en</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/carlospena"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 p-3 rounded-full text-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/carlospena"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 p-3 rounded-full text-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contacto@carlospena.dev"
                className="bg-secondary/50 p-3 rounded-full text-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
