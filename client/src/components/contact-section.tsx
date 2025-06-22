import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if we're in development mode (has backend)
      const isDevelopment = window.location.hostname === 'localhost' || 
                          window.location.hostname.includes('replit.dev') ||
                          window.location.hostname.includes('replit.app');

      // if (!isDevelopment) {
      //   // Static site fallback
      //   toast({
      //     title: "Thank you for your message!",
      //     description: "Please email me directly at dm7041979@gmail.com as this is a static site.",
      //   });
      //   setFormData({ name: "", email: "", message: "" });
      //   setIsSubmitting(false);
      //   return;
      // }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message sent!",
          description: result.message,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Network error. Please email me directly at dm7041979@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting projects. Let's connect!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Whether you're looking for a passionate developer for your team, want to collaborate on a project, 
                or just want to say hello, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Email</p>
                    <a 
                      href="mailto:dm7041979@gmail.com" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      dm7041979@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Location</p>
                    <p className="text-gray-600">Serampore, West Bengal, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-6 mt-8">
                <a 
                  href="www.linkedin.com/in/deep-mondal-268a93242" 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <SiLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/TakeASwing-420" 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <SiGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        required
                        className="mt-2"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-blue-700 text-white py-3"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
