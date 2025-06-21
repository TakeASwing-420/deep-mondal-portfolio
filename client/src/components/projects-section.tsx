import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Private Blockchain Network",
      description: "One-tap application to start a 4 validator QBFT consensus based private network using Besu client with Chainlens explorer setup.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Docker", "Shell", "Hyperledger Besu"],
      link: "#",
      color: "blue"
    },
    {
      title: "Railway Management System",
      description: "Java-based Railway Ticket Booking System with Windows Task Manager GUI inspiration, featuring passenger management and Hibernate integration.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "Spring Boot", "Hibernate"],
      link: "#",
      color: "green"
    },
    {
      title: "DeFi Mobile Application",
      description: "Flutter crypto project allowing users to earn ERC20 tokens through challenges with live location tracking using open-source APIs.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flutter", "Solidity", "Node.js"],
      links: [
        { label: "Frontend", url: "#" },
        { label: "Backend", url: "#" }
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "green":
        return "bg-green-100 text-green-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical expertise across blockchain development, full-stack applications, and system design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className={getColorClasses(project.color)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link ? (
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                  >
                    View on GitHub <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                ) : project.links ? (
                  <div className="flex space-x-4">
                    {project.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.url}
                        className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                      >
                        {link.label} <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
