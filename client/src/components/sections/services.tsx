import React from "react";
import { Palette, TrendingUp, Check } from "lucide-react";
import { MouseFollowingEyes } from "@/components/ui/mouse-following-eyes";
import { Button } from "@/components/ui/button";

// Define service type for TypeScript
type Service = {
  title: string;
  description: string;
  features: string[];
  useEyes?: boolean;
};

export function Services() {
  const services: Service[] = [
    {
      useEyes: true,
      title: "MVP Development",
      description: "Transform your idea into a market-ready product in just 14 days with our proven development framework.",
      features: [
        "Rapid prototyping",
        "Full-stack development", 
        "Market validation"
      ]
    },
    {
      useEyes: true,
      title: "Design Systems",
      description: "Award-winning design systems that scale with your product and delight your users from day one.",
      features: [
        "Component libraries",
        "Brand identity",
        "User experience"
      ]
    },
    {
      useEyes: true,
      title: "Growth Strategy",
      description: "Beyond development, we help you scale with data-driven growth strategies and performance optimization.",
      features: [
        "Analytics setup",
        "Performance optimization",
        "A/B testing"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: '#ebff00' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            HIGH-VELOCITY <span className="inline-block px-3 py-1 bg-black text-yellow-300 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">DEVELOPMENT</span>
          </h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto uppercase">
            We specialize in RAPID MVP development without compromising on QUALITY or DESIGN EXCELLENCE!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = ['neubrutalism-purple', 'neubrutalism-teal', 'neubrutalism-pink'];
            const colorClass = colors[index % colors.length];
            return (
              <div key={index} className={`${colorClass} p-8 transform rotate-${index % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-all duration-300 border-2 ${index === 0 ? 'border-[#facc14]' : 'border-black'} shadow-[4px_4px_0_0_${index === 0 ? '#facc14' : '#000'}] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`}>
                {service.useEyes && (
                  <div className="mb-4 -mt-4 flex justify-center w-full">
                    <MouseFollowingEyes className="h-[140px] w-[220px]" />
                  </div>
                )}
                <Button 
                  variant={index === 0 ? "brutal" : index === 1 ? "brutal-normal" : "brutal"}
                  className={`mb-4 w-full h-auto py-2 ${index === 0 ? "bg-[#facc14] border-black text-black" : index === 2 ? "bg-pink-500" : ""}`}
                >
                  <h3 className="text-xl font-black uppercase">{service.title}</h3>
                </Button>
                <p className="text-black font-bold mb-6 uppercase text-sm">{service.description}</p>
                <ul className="space-y-2 text-sm text-black font-bold">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2 font-black" />
                      <span className="uppercase">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
