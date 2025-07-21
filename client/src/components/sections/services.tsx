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
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            High-Velocity <span className="text-cosmic">Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in rapid MVP development without compromising on quality or design excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="glassmorphism rounded-3xl p-8 hover-glow shadow-lg">
                <div className="w-16 h-16 cosmic-gradient rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-[hsl(var(--teal))] mr-2" />
                      {feature}
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
