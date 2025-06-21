import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import profilePic from "@assets/profile_pic_1750523079868.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Hi, I'm <span className="text-primary">Deep Mondal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Computer Science Student & Enthusiastic Hacker
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Passionate about building innovative solutions with cutting-edge technologies. 
              Currently pursuing B.Tech in CSE at IIIT Kalyani with expertise in blockchain development, 
              full-stack applications, and open-source contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src={profilePic} 
                  alt="Deep Mondal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg">
                <Code className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
