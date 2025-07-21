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
    <footer className="py-16 px-6 border-t-8 border-black bg-orange-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 neubrutalism-purple rounded-none flex items-center justify-center wiggle">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl text-neubrutalism">ARC-LAB</span>
            </div>
            <p className="text-black font-bold mb-6 max-w-md uppercase">
              Award-winning MVP studio crafting digital experiences with UNMATCHED velocity and precision!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                const colors = ['neubrutalism-yellow', 'neubrutalism-pink', 'neubrutalism-teal', 'neubrutalism-green'];
                const colorClass = colors[index % colors.length];
                return (
                  <a key={index} href={social.href} className={`${colorClass} p-3 transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'} hover:rotate-0 transition-all`}>
                    <IconComponent className="w-5 h-5 text-black" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-black text-black mb-4 uppercase">Services</h4>
            <ul className="space-y-3 text-black font-bold">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 transition-all uppercase text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-black mb-4 uppercase">Company</h4>
            <ul className="space-y-3 text-black font-bold">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:bg-black hover:text-white px-2 py-1 transition-all uppercase text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black font-black text-sm uppercase transform -rotate-1">© 2024 ARC-LAB. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item, index) => (
              <a key={index} href="#" className="text-black font-bold hover:bg-black hover:text-white px-2 py-1 text-sm uppercase transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
