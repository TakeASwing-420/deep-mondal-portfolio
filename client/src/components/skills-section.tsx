import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Database } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: ["Python", "JavaScript", "Java", "C", "Rust", "Golang", "Solidity"]
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      color: "green",
      skills: ["Flutter", "Node.js", "Flask", "React", "Spring Boot"]
    },
    {
      title: "DevOps & Databases",
      icon: Database,
      color: "purple",
      skills: ["Docker", "Kubernetes", "MongoDB", "Git", "GitHub Actions"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          badge: "bg-blue-100 text-blue-800"
        };
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-accent",
          badge: "bg-green-100 text-green-800"
        };
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          badge: "bg-purple-100 text-purple-800"
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          badge: "bg-gray-100 text-gray-800"
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple programming languages, frameworks, and development tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`${colors.badge} font-medium`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
