import { Timeline } from "@/components/ui/timeline";
import { Check, Zap, Palette, Code, Rocket } from "lucide-react";

export function Process() {
  const data = [
    {
      title: "Discovery",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-bold mb-8 uppercase">
            Deep dive into your vision, market, and technical requirements to define the PERFECT MVP scope. We conduct THOROUGH research to ensure your product meets REAL market needs!
          </p>
          <div className="neubrutalism-yellow p-6 mb-6 transform rotate-1">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-black mr-3" />
              <h4 className="font-black text-black uppercase">Discovery Phase Deliverables</h4>
            </div>
            <div className="space-y-2 text-sm text-black font-bold">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Market research & competitive analysis</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">User persona definition & journey mapping</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Technical architecture planning</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">MVP feature prioritization matrix</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-bold mb-8 uppercase">
            Create STUNNING, user-centric designs that embody your brand and optimize for CONVERSION. Our AWARD-WINNING design team crafts experiences that users LOVE!
          </p>
          <div className="neubrutalism-pink p-6 mb-6 transform -rotate-1">
            <div className="flex items-center mb-4">
              <Palette className="w-6 h-6 text-black mr-3" />
              <h4 className="font-black text-black uppercase">Design System & UI/UX</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Modern UI design mockup showing clean interface elements"
                className="rounded-none object-cover h-20 md:h-32 w-full border-4 border-black" 
              />
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Mobile app design wireframes and prototypes"
                className="rounded-none object-cover h-20 md:h-32 w-full border-4 border-black" 
              />
            </div>
            <div className="space-y-2 text-sm text-black font-bold">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Brand identity & design system</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Interactive prototypes & user flows</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Develop",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-bold mb-8 uppercase">
            HIGH-VELOCITY development using CUTTING-EDGE technologies and proven architectural patterns. Our development team builds SCALABLE, PERFORMANT applications!
          </p>
          <div className="neubrutalism-teal p-6 mb-6 transform rotate-2">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-black mr-3" />
              <h4 className="font-black text-black uppercase">Development Sprint</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Developer working on code with multiple monitors"
                className="rounded-none object-cover h-20 md:h-32 w-full border-4 border-black" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Code editor showing modern development environment"
                className="rounded-none object-cover h-20 md:h-32 w-full border-4 border-black" 
              />
            </div>
            <div className="space-y-2 text-sm text-black font-bold">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Full-stack development & API integration</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Real-time testing & quality assurance</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Performance optimization & security</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Launch",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-bold mb-4 uppercase">
            Deploy to production with COMPREHENSIVE testing, monitoring, and growth strategy implementation. We ensure your MVP launches SUCCESSFULLY and scales EFFORTLESSLY!
          </p>
          <div className="neubrutalism-green p-6 mb-6 transform -rotate-2">
            <div className="flex items-center mb-4">
              <Rocket className="w-6 h-6 text-black mr-3" />
              <h4 className="font-black text-black uppercase">Launch & Growth</h4>
            </div>
            <div className="space-y-2 text-sm text-black font-bold mb-4">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Production deployment & monitoring setup</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Analytics integration & performance tracking</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Post-launch support & optimization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-black mr-2 font-black" />
                <span className="uppercase">Growth strategy implementation</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Analytics dashboard showing growth metrics"
                className="rounded-none object-cover h-20 md:h-32 w-full border-4 border-black" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Successful product launch celebration"
                className="rounded-none object-cover h-20 md:h-32 w-full border-4 border-black" 
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <Timeline data={data} />
    </section>
  );
}
