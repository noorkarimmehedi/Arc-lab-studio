import { Zap, Palette, TrendingUp, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Zap,
      title: "MVP Development",
      description: "Transform your idea into a market-ready product in just 14 days with our proven development framework.",
      features: [
        "Rapid prototyping",
        "Full-stack development", 
        "Market validation"
      ]
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Award-winning design systems that scale with your product and delight your users from day one.",
      features: [
        "Component libraries",
        "Brand identity",
        "User experience"
      ]
    },
    {
      icon: TrendingUp,
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
    <section id="services" className="py-24 px-6 bg-yellow-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 transform -rotate-1">
            HIGH-VELOCITY <span className="text-neubrutalism-accent transform rotate-2 inline-block">DEVELOPMENT</span>
          </h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto uppercase">
            We specialize in RAPID MVP development without compromising on QUALITY or DESIGN EXCELLENCE!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = ['neubrutalism-purple', 'neubrutalism-teal', 'neubrutalism-pink'];
            const colorClass = colors[index % colors.length];
            return (
              <div key={index} className={`${colorClass} p-8 transform rotate-${index % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-all duration-300`}>
                <div className={`w-16 h-16 neubrutalism-yellow rounded-none flex items-center justify-center mb-6 transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}>
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">{service.title}</h3>
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
