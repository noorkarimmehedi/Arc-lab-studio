import { Zap, Twitter, Linkedin, Github, Dribbble } from "lucide-react";

export function Footer() {
  const services = [
    "MVP Development",
    "Design Systems", 
    "Growth Strategy",
    "Technical Consulting"
  ];

  const company = [
    "About",
    "Portfolio", 
    "Process",
    "Contact"
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy"
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
    { icon: Dribbble, href: "#" }
  ];

  return (
    <footer className="py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 cosmic-gradient rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-semibold text-gray-900">Arc-Lab</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Award-winning MVP studio crafting digital experiences with unmatched velocity and precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.href} className="glassmorphism p-3 rounded-xl hover-glow">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3 text-gray-600">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-[hsl(var(--soft-purple))] smooth-fade">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-gray-600">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-[hsl(var(--soft-purple))] smooth-fade">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Arc-Lab. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-[hsl(var(--soft-purple))] text-sm smooth-fade">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
