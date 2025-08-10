import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      image: "/my-image-01.webp",
      title: "SaaS Application",
      timeline: "14 days",
      description: "A comprehensive financial dashboard that processes $2M+ in transactions monthly. Built with Next.js and advanced data visualization.",
      technologies: ["React", "TypeScript", "D3.js"]
    },
    {
      image: "/my-image-03.webp",
      title: "E-Commerce Store",
      timeline: "12 days",
      description: "An AI-powered content management platform serving 50K+ users. Features real-time collaboration and smart automation.",
      technologies: ["Vue.js", "Node.js", "OpenAI"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-pink-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6">
            <span className="block sm:inline">RECENT</span>{' '}
            <span className="inline-block px-3 py-1 bg-pink-500 text-white font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all mt-2 sm:mt-0">SUCCESS STORIES</span>
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
                className="w-full h-auto object-contain border-b-4 border-black" 
                style={{ maxHeight: '400px', minHeight: '200px' }}
              />
              <div className="p-8 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-black uppercase">{project.title}</h3>
                  <Button variant="brutal-normal" className="text-xs py-2 px-4">
                    {project.timeline}
                  </Button>
                </div>
                <p className="text-black font-bold mb-6 uppercase text-sm">{project.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2">
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <Button key={techIndex} variant="brutal-normal" className="text-xs py-2 px-4 uppercase">
                        {tech}
                      </Button>
                    ))}
                  </div>
                  <div className="w-full sm:w-auto">
                    <Button variant="brutal" className="text-xs py-2 px-4">
                      <span className="flex flex-col items-center gap-0">VIEW<br/><span className="flex items-center gap-1">CASE <ExternalLink className="w-4 h-4" /></span></span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="brutal" className="transform rotate-1 hover:rotate-0 transition-all py-3 px-6">
            <span className="flex items-center gap-2">VIEW ALL PROJECTS <ArrowRight className="w-5 h-5 inline ml-2" /></span>
          </Button>
        </div>
      </div>
    </section>
  );
}
