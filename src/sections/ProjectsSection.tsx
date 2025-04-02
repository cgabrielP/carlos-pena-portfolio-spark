
import { useState } from "react";
import SectionContainer from "@/components/SectionContainer";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.",
    image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/carlospeña/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con asignación de equipos, filtros y estadísticas.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    technologies: ["React", "Redux", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/carlospeña/taskapp",
  },
  {
    title: "Healthcare Dashboard",
    description: "Dashboard para monitoreo de pacientes con visualización de datos en tiempo real.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    technologies: ["React", "D3.js", "Flask", "AWS"],
    liveUrl: "https://healthcare-dashboard.com",
  },
  {
    title: "Social Media Analytics",
    description: "Herramienta de análisis para redes sociales con métricas e informes personalizados.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    technologies: ["Vue.js", "Python", "FastAPI", "Docker"],
    githubUrl: "https://github.com/carlospeña/social-analytics",
    liveUrl: "https://social-analytics-demo.com",
  },
  {
    title: "Fitness Tracker App",
    description: "Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React Native", "Firebase", "Node.js"],
    githubUrl: "https://github.com/carlospeña/fitness-app",
  },
  {
    title: "Real Estate Platform",
    description: "Plataforma para búsqueda y gestión de propiedades inmobiliarias con mapas interactivos.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    technologies: ["Angular", "Django", "PostgreSQL", "Google Maps API"],
    liveUrl: "https://realestate-platform.com",
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };
  
  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <SectionContainer id="projects">
      <h2 className="section-title animate-on-scroll">Mis Proyectos</h2>
      <p className="text-foreground/70 max-w-3xl mb-10 animate-on-scroll">
        Estos son algunos de los proyectos en los que he trabajado. Cada uno representa
        diferentes desafíos y soluciones tecnológicas implementadas.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      
      <div className="mt-10 text-center animate-on-scroll">
        {visibleProjects < projects.length ? (
          <button
            onClick={showMoreProjects}
            className="px-6 py-2 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Ver más proyectos
          </button>
        ) : (
          <button
            onClick={showLessProjects}
            className="px-6 py-2 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Ver menos
          </button>
        )}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
