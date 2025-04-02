
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Redux", level: 70 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Otros",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Metodologías Ágiles", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "MySQL/PostgreSQL", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const [selectedTab, setSelectedTab] = useState("Frontend");

  return (
    <SectionContainer id="skills">
      <h2 className="section-title animate-on-scroll">Mis Habilidades</h2>
      <div className="mt-10 animate-on-scroll">
        <Tabs 
          defaultValue="Frontend" 
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="mb-8 mx-auto flex justify-center">
            {skillsData.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillsData.map((category) => (
            <TabsContent 
              key={category.category} 
              value={category.category}
              className="space-y-6 pt-2"
            >
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
