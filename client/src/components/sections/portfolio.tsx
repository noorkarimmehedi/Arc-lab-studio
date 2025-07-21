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
    <section id="portfolio" className="py-24 px-6 bg-pink-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 transform rotate-1">
            RECENT <span className="text-neubrutalism-accent transform -rotate-3 inline-block">SUCCESS STORIES</span>
          </h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto uppercase">
            Explore our PORTFOLIO of HIGH-IMPACT MVPs that went from concept to MARKET LEADER!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <div key={index} className={`neubrutalism ${index === 0 ? 'transform -rotate-2' : 'transform rotate-2'} hover:rotate-0 transition-all duration-300 overflow-hidden`}>
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover border-b-4 border-black" 
              />
              <div className="p-8 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-black uppercase">{project.title}</h3>
                  <span className="neubrutalism-green px-3 py-1 text-sm font-black text-black">
                    {project.timeline}
                  </span>
                </div>
                <p className="text-black font-bold mb-6 uppercase text-sm">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs neubrutalism-yellow px-2 py-1 font-black text-black uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="neubrutalism-purple px-4 py-2 font-black text-black flex items-center hover:bg-transparent uppercase text-xs">
                    VIEW CASE <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="neubrutalism-teal px-8 py-4 font-black text-black hover:bg-transparent text-lg transform rotate-1 hover:rotate-0 transition-all">
            VIEW ALL PROJECTS
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
