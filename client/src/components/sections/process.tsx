export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your vision, market, and technical requirements to define the perfect MVP scope."
    },
    {
      number: "02", 
      title: "Design",
      description: "Create stunning, user-centric designs that embody your brand and optimize for conversion."
    },
    {
      number: "03",
      title: "Develop", 
      description: "High-velocity development using cutting-edge technologies and proven architectural patterns."
    },
    {
      number: "04",
      title: "Launch",
      description: "Deploy to production with comprehensive testing, monitoring, and growth strategy implementation."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Our <span className="text-cosmic">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A refined methodology that ensures exceptional results in record time.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div 
                className="glassmorphism w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 floating-animation"
                style={{animationDelay: `${-index}s`}}
              >
                <span className="text-2xl font-bold text-cosmic">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
