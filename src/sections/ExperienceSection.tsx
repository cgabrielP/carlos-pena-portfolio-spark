
import SectionContainer from "@/components/SectionContainer";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";

const experiences: Experience[] = [
  {
    company: "Candel Medical Company",
    position: "Senior Full Stack Developer",
    period: "2021 - Presente",
    description: [
      "Desarrollo de aplicaciones móviles utilizando React Native para gestión de pacientes.",
      "Implementación de arquitecturas serverless en AWS para optimización de costos y escalabilidad.",
      "Integración de APIs de terceros para procesamiento de datos médicos.",
      "Liderazgo en la migración de aplicaciones legacy a arquitecturas modernas."
    ],
    technologies: ["React Native", "AWS", "Node.js", "MongoDB", "CI/CD"]
  },
  {
    company: "TechSolutions Inc.",
    position: "Full Stack Developer",
    period: "2019 - 2021",
    description: [
      "Desarrollo de aplicaciones web utilizando React y Django.",
      "Implementación de sistemas de autenticación seguros con JWT.",
      "Diseño y desarrollo de APIs RESTful para comunicación entre servicios.",
      "Optimización de rendimiento en bases de datos SQL y NoSQL."
    ],
    technologies: ["React", "Django", "PostgreSQL", "Docker", "RESTful APIs"]
  },
  {
    company: "Innovate Digital",
    position: "Frontend Developer",
    period: "2017 - 2019",
    description: [
      "Desarrollo de interfaces de usuario responsivas con HTML5, CSS3 y JavaScript.",
      "Implementación de buenas prácticas de SEO y accesibilidad web.",
      "Colaboración con equipos de diseño para crear experiencias de usuario intuitivas.",
      "Desarrollo de componentes reutilizables para sistemas de diseño."
    ],
    technologies: ["JavaScript", "HTML/CSS", "Vue.js", "SASS", "Webpack"]
  }
];

const ExperienceSection = () => {
  return (
    <SectionContainer id="experience">
      <h2 className="section-title animate-on-scroll">Mi Experiencia</h2>
      <p className="text-foreground/70 max-w-3xl mb-10 animate-on-scroll">
        A lo largo de mi trayectoria profesional, he tenido la oportunidad de
        trabajar en proyectos desafiantes y equipos multidisciplinarios que han
        enriquecido mi experiencia como desarrollador.
      </p>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.company} experience={experience} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
