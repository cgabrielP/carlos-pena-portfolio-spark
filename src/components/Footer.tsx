
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/80 text-sm">
              © {currentYear} Carlos Gabriel Peña. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/carlospena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/carlospena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contacto@carlospena.dev"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
