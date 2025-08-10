import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm fixed w-full top-0 left-0 z-50 border-b border-black">
      <div className="max-w-6xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center -ml-4 md:-ml-24">
            <div className="flex items-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <path d="M32 32H64V0L63.9961 0.00292969C46.3934 0.154094 32.1541 14.3934 32.0029 31.9961L32 32Z" fill="#FF4502"></path>
                <path d="M32 32V64H64L63.9971 63.9961C63.8459 46.3934 49.6066 32.1541 32.0039 32.0029L32 32Z" fill="#FF4502"></path>
                <path d="M32 32H0V64L0.00390625 63.9971C17.6066 63.8459 31.8459 49.6066 31.9971 32.0039L32 32Z" fill="#FF4502"></path>
                <path d="M0.00292969 0.00390625C0.154093 17.6066 14.3934 31.8459 31.9961 31.9971L32 32V0L0 0L0.00292969 0.00390625Z" fill="#FF4502"></path>
              </svg>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={() => scrollToSection('services')} variant="brutal" className="py-1 px-3 bg-blue-500">
              Services
            </Button>
            <Button onClick={() => scrollToSection('portfolio')} variant="brutal" className="py-1 px-3 bg-purple-500">
              Portfolio
            </Button>
            <Button onClick={() => scrollToSection('about')} variant="brutal" className="py-1 px-3 bg-green-500">
              About
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="brutal" className="py-1 px-3 bg-red-500">
              Contact
            </Button>
          </div>

          <Button
            variant="brutal-normal"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-black">
            <div className="flex flex-col space-y-4">
              <Button onClick={() => scrollToSection('services')} variant="brutal" className="w-full py-1 px-3 bg-blue-500">
                Services
              </Button>
              <Button onClick={() => scrollToSection('portfolio')} variant="brutal" className="w-full py-1 px-3 bg-purple-500">
                Portfolio
              </Button>
              <Button onClick={() => scrollToSection('about')} variant="brutal" className="w-full py-1 px-3 bg-green-500">
                About
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="brutal" className="w-full py-1 px-3 bg-red-500">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
