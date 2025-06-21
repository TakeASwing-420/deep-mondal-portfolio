import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Information Data Systems",
      period: "June 2024 – July 2024",
      achievements: [
        "Designed and implemented a private blockchain network using Hyperledger Besu as part of the university-led blockchain lab course.",
        "Developed a standardized reporting framework and configured a blockchain explorer, streamlining processes and reducing project delivery time by 30%.",
        "Gained hands-on experience in DevOps by deploying and managing blockchain nodes on AWS EC2 instances."
      ]
    },
    {
      title: "Open Source Contributor",
      company: "Ethereum.org, Logos Collective, Rareskills Inc.",
      period: "March 2024 – Present",
      achievements: [
        "Contributed to various open source blockchain projects of Ethereum.org, Logos collective and Rareskills Inc.",
        "Active contributions to community-driven blockchain development and documentation projects."
      ],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional experience and contributions to the open-source community.
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-50 border-none">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <div className="space-y-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">{achievement}</p>
                    </div>
                  ))}
                </div>
                {exp.link && (
                  <div className="mt-6">
                    <a 
                      href={exp.link}
                      className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                    >
                      View Contributions <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
