import { Mail} from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated Computer Science student with a passion for blockchain technology and full-stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Currently pursuing B.Tech in Computer Science and Engineering at IIIT Kalyani with a decent CGPA of 9.22/10.0. 
              My academic journey has been complemented by hands-on experience in blockchain development and full-stack applications.
            </p>
            <p className="text-gray-600 mb-6">
              I have a strong foundation in data structures, algorithms, and systems programming, with specialized expertise in 
              blockchain technologies. My experience ranges from developing private blockchain networks to contributing to 
              open-source projects for major organizations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:dm7041979@gmail.com" 
                className="text-primary hover:text-blue-700 transition-colors p-2 rounded-full hover:bg-blue-50"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/deep-mondal-268a93242" 
                className="text-primary hover:text-blue-700 transition-colors p-2 rounded-full hover:bg-blue-50"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/TakeASwing-420" 
                className="text-primary hover:text-blue-700 transition-colors p-2 rounded-full hover:bg-blue-50"
              >
                <SiGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-secondary mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-semibold text-secondary">B.Tech in Computer Science and Engineering</h4>
                <p className="text-primary font-medium">IIIT Kalyani</p>
                <p className="text-gray-600">December 2023 – June 2027</p>
                <p className="text-gray-600">CGPA: 9.22/10.0</p>
                <p className="text-sm text-gray-500 mt-2">
                  Relevant Coursework: Operating Systems, Data Structure and Algorithm, Discrete Mathematics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
