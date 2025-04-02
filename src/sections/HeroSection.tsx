
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

const HeroSection = () => {
  return (
    <SectionContainer id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="flex flex-col items-start max-w-3xl">
        <p className="text-accent font-mono mb-5 animate-on-scroll">Hola, mi nombre es</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          Carlos Gabriel Peña.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground/70 mb-6 animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          Construyo experiencias digitales.
        </h2>
        <p className="text-foreground/70 text-lg mb-8 max-w-xl animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
          Soy un desarrollador Full Stack especializado en crear aplicaciones web modernas
          y eficientes. Con experiencia en React, Python y AWS, transformo ideas en soluciones
          digitales de alto rendimiento.
        </p>
        <div className="animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
          <Button asChild className="text-lg px-7 py-6">
            <a href="#about">
              Conoce más 
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-5">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
