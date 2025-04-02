
import { useState } from "react";
import SectionContainer from "@/components/SectionContainer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credential: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "DuocUC",
    date: "Dic 2020",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    credential: "https://credentials.duocuc.cl/cert/FSWD20201220",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Mar 2021",
    image: "https://images.unsplash.com/photo-1612564148954-59545876eaa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    credential: "https://www.youracclaim.com/badges/aws-certified-solutions-architect",
  },
  {
    id: 3,
    title: "Certified React Developer",
    issuer: "React Training",
    date: "Jun 2021",
    image: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    credential: "https://reacttraining.com/certification/verify/RXDEV21206",
  },
  {
    id: 4,
    title: "Advanced English Certificate",
    issuer: "Cambridge University",
    date: "Sep 2019",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80",
    credential: "https://verify.cambridgeenglish.org/certs/ADVENG19209",
  },
  {
    id: 5,
    title: "Python for Data Science",
    issuer: "DataCamp",
    date: "Feb 2022",
    image: "https://images.unsplash.com/photo-1515879128891-407a3b1c39ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    credential: "https://www.datacamp.com/certificate/PYDS2202",
  },
  {
    id: 6,
    title: "Scrum Master Certified",
    issuer: "Scrum Alliance",
    date: "Apr 2022",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    credential: "https://www.scrumalliance.org/certification/verify/SMC-22-04-123456",
  }
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <SectionContainer id="certifications">
      <h2 className="section-title animate-on-scroll">Certificaciones</h2>
      <p className="text-foreground/70 max-w-3xl mb-10 animate-on-scroll">
        La formación continua es parte esencial de mi desarrollo profesional.
        Estas certificaciones avalan mis conocimientos en diversas tecnologías y metodologías.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card 
            key={cert.id} 
            className="overflow-hidden cursor-pointer hover-effect animate-on-scroll" 
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-sm text-foreground/70">{cert.issuer}</p>
                </div>
                <Award className="text-accent h-6 w-6 flex-shrink-0" />
              </div>
              <p className="text-xs text-foreground/50 mt-2">{cert.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Dialog>
        <DialogTrigger asChild>
          <span className="hidden">{selectedCert?.title}</span>
        </DialogTrigger>
        {selectedCert && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedCert.title}</DialogTitle>
              <DialogDescription>
                Emitido por {selectedCert.issuer} en {selectedCert.date}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-auto rounded-md mb-4"
              />
              <a 
                href={selectedCert.credential} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-accent"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Verificar credencial
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </SectionContainer>
  );
};

export default CertificationsSection;
