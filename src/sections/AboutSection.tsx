
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="section-title animate-on-scroll">Sobre mí</h2>
          <div className="space-y-4 text-foreground/80">
            <p className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              Soy Ingeniero en Informática graduado de DuocUC, con una pasión por
              crear soluciones tecnológicas eficientes y atractivas. Mi trayectoria
              profesional me ha permitido combinar mis habilidades técnicas con un
              enfoque orientado a resultados.
            </p>
            <p className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
              Disfruto enfrentando desafíos complejos y aprendiendo continuamente
              nuevas tecnologías. Mi experiencia abarca tanto el desarrollo frontend
              como backend, lo que me permite tener una visión integral de los proyectos
              en los que trabajo.
            </p>
            <p className="animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
              Me especializo en tecnologías como React, Python, y servicios cloud de AWS.
              Mi objetivo es crear aplicaciones que no solo funcionen perfectamente, sino
              que también ofrezcan experiencias de usuario excepcionales.
            </p>
            <div className="pt-4 animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
              <Button asChild>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> 
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
          <div className="rounded-lg overflow-hidden border-2 border-accent relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="Carlos Gabriel Peña" 
              className="w-full h-auto rounded-lg filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-lg z-0"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
