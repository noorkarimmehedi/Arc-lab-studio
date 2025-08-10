import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import { Check, Zap, Palette, Code, Rocket } from "lucide-react";

export function Process() {
  const data = [
    {
      title: "Discovery",
      content: (
        <div>
          <Button variant="brutal-normal" className="min-w-[300px] h-auto py-3 mb-8 w-full whitespace-normal">
            <p className="text-xs md:text-sm font-bold uppercase w-full">
              Deep dive into your vision, market, and technical requirements to define the PERFECT MVP scope. We conduct THOROUGH research to ensure your product meets REAL market needs!
            </p>
          </Button>
          <div className="neubrutalism-yellow p-6 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-white mr-3" />
              <h4 className="font-black text-white uppercase">Discovery Phase Deliverables</h4>
            </div>
            <div className="space-y-2 text-sm text-white font-bold">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Market research & competitive analysis</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">User persona definition & journey mapping</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Technical architecture planning</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
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
          <Button variant="brutal" className="min-w-[300px] h-auto py-3 mb-8 w-full bg-pink-500 whitespace-normal">
            <p className="text-xs md:text-sm font-bold uppercase w-full">
              Create STUNNING, user-centric designs that embody your brand and optimize for CONVERSION. Our AWARD-WINNING design team crafts experiences that users LOVE!
            </p>
          </Button>
          <div className="neubrutalism-pink p-6 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            <div className="flex items-center mb-4">
              <Palette className="w-6 h-6 text-white mr-3" />
              <h4 className="font-black text-white uppercase">Design System & UI/UX</h4>
            </div>

            <div className="space-y-2 text-sm text-white font-bold">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Brand identity & design system</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
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
          <Button variant="brutal" className="min-w-[300px] h-auto py-3 mb-8 w-full whitespace-normal">
            <p className="text-xs md:text-sm font-bold uppercase w-full">
              HIGH-VELOCITY development using CUTTING-EDGE technologies and proven architectural patterns. Our development team builds SCALABLE, PERFORMANT applications!
            </p>
          </Button>
          <div className="neubrutalism-teal p-6 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-white mr-3" />
              <h4 className="font-black text-white uppercase">Development Sprint</h4>
            </div>

            <div className="space-y-2 text-sm text-white font-bold">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Full-stack development & API integration</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Real-time testing & quality assurance</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
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
          <Button variant="brutal" className="min-w-[300px] h-auto py-3 mb-4 w-full bg-green-500 whitespace-normal">
            <p className="text-xs md:text-sm font-bold uppercase w-full">
              Deploy to production with COMPREHENSIVE testing, monitoring, and growth strategy implementation. We ensure your MVP launches SUCCESSFULLY and scales EFFORTLESSLY!
            </p>
          </Button>
          <div className="neubrutalism-green p-6 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            <div className="flex items-center mb-4">
              <Rocket className="w-6 h-6 text-white mr-3" />
              <h4 className="font-black text-white uppercase">Launch & Growth</h4>
            </div>
            <div className="space-y-2 text-sm text-white font-bold mb-4">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Production deployment & monitoring setup</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Analytics integration & performance tracking</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Post-launch support & optimization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-white mr-2 font-black" />
                <span className="uppercase">Growth strategy implementation</span>
              </div>
            </div>

          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-8 px-0" style={{ backgroundColor: '#3b82f5' }}>
      <Timeline data={data} />
    </section>
  );
}
