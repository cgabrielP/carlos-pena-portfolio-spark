
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const delay = `${index * 0.1}s`;

  return (
    <Card className="animate-on-scroll" style={{ transitionDelay: delay }}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{experience.position}</CardTitle>
            <CardDescription className="text-lg font-medium text-foreground/80">
              {experience.company}
            </CardDescription>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {experience.period}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-secondary/50 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
