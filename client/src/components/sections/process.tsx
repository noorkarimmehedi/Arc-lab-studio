import { Timeline } from "@/components/ui/timeline";
import { Check, Zap, Palette, Code, Rocket } from "lucide-react";

export function Process() {
  const data = [
    {
      title: "Discovery",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Deep dive into your vision, market, and technical requirements to define the perfect MVP scope. We conduct thorough research to ensure your product meets real market needs.
          </p>
          <div className="glassmorphism rounded-2xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-[hsl(var(--soft-purple))] mr-3" />
              <h4 className="font-semibold text-gray-900">Discovery Phase Deliverables</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Market research & competitive analysis
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                User persona definition & journey mapping
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Technical architecture planning
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                MVP feature prioritization matrix
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Create stunning, user-centric designs that embody your brand and optimize for conversion. Our award-winning design team crafts experiences that users love.
          </p>
          <div className="glassmorphism rounded-2xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <Palette className="w-6 h-6 text-[hsl(var(--soft-purple))] mr-3" />
              <h4 className="font-semibold text-gray-900">Design System & UI/UX</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Modern UI design mockup showing clean interface elements"
                className="rounded-lg object-cover h-20 md:h-32 w-full shadow-lg" 
              />
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Mobile app design wireframes and prototypes"
                className="rounded-lg object-cover h-20 md:h-32 w-full shadow-lg" 
              />
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Brand identity & design system
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Interactive prototypes & user flows
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            High-velocity development using cutting-edge technologies and proven architectural patterns. Our development team builds scalable, performant applications.
          </p>
          <div className="glassmorphism rounded-2xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-[hsl(var(--soft-purple))] mr-3" />
              <h4 className="font-semibold text-gray-900">Development Sprint</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Developer working on code with multiple monitors"
                className="rounded-lg object-cover h-20 md:h-32 w-full shadow-lg" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Code editor showing modern development environment"
                className="rounded-lg object-cover h-20 md:h-32 w-full shadow-lg" 
              />
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Full-stack development & API integration
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Real-time testing & quality assurance
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Performance optimization & security
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deploy to production with comprehensive testing, monitoring, and growth strategy implementation. We ensure your MVP launches successfully and scales effortlessly.
          </p>
          <div className="glassmorphism rounded-2xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <Rocket className="w-6 h-6 text-[hsl(var(--soft-purple))] mr-3" />
              <h4 className="font-semibold text-gray-900">Launch & Growth</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Production deployment & monitoring setup
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Analytics integration & performance tracking
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Post-launch support & optimization
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                Growth strategy implementation
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Analytics dashboard showing growth metrics"
                className="rounded-lg object-cover h-20 md:h-32 w-full shadow-lg" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                alt="Successful product launch celebration"
                className="rounded-lg object-cover h-20 md:h-32 w-full shadow-lg" 
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <Timeline data={data} />
    </section>
  );
}
