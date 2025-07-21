import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "FinTech Dashboard",
      timeline: "14 days",
      description: "A comprehensive financial dashboard that processes $2M+ in transactions monthly. Built with Next.js and advanced data visualization.",
      technologies: ["React", "TypeScript", "D3.js"]
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "SaaS Platform",
      timeline: "12 days",
      description: "An AI-powered content management platform serving 50K+ users. Features real-time collaboration and smart automation.",
      technologies: ["Vue.js", "Node.js", "OpenAI"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Recent <span className="text-cosmic">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of high-impact MVPs that went from concept to market leader.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="glassmorphism rounded-3xl overflow-hidden hover-glow shadow-lg">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover" 
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="glassmorphism px-3 py-1 rounded-xl text-sm text-[hsl(var(--soft-purple))]">
                    {project.timeline}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-[hsl(var(--soft-purple))] font-medium flex items-center hover:text-[hsl(var(--teal))] smooth-fade">
                    View Case Study <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="glassmorphism px-8 py-4 rounded-2xl text-[hsl(var(--soft-purple))] font-medium hover-glow shadow-lg bg-transparent hover:bg-transparent">
            View All Projects
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
