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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 transform rotate-1">
            <span className="block sm:inline">RECENT</span>{' '}
            <span className="text-neubrutalism-accent transform -rotate-3 inline-block mt-2 sm:mt-0">SUCCESS STORIES</span>
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
                  <button className="uiverse-btn px-0 text-xs">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front">{project.timeline}</span>
                  </button>
                </div>
                <p className="text-black font-bold mb-6 uppercase text-sm">{project.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2">
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <button key={techIndex} className="uiverse-btn px-0 text-xs uppercase">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">{tech}</span>
                      </button>
                    ))}
                  </div>
                  <div className="w-full sm:w-auto">
                    <button className="uiverse-btn px-0">
                      <span className="shadow"></span>
                      <span className="edge"></span>
                      <span className="front flex flex-col items-center gap-0 text-xs">VIEW<br/><span className="flex items-center gap-1">CASE <ExternalLink className="w-4 h-4" /></span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="uiverse-btn px-0 transform rotate-1 hover:rotate-0 transition-all">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front flex items-center gap-2">VIEW ALL PROJECTS <ArrowRight className="w-5 h-5 inline ml-2" /></span>
          </button>
        </div>
      </div>
    </section>
  );
}
