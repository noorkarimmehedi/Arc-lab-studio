import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";

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
    <nav className="neubrutalism-yellow navbar-fixed fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 neubrutalism-purple rounded-none flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl text-neubrutalism">Arc-Lab</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-neubrutalism hover:bg-black hover:text-white px-3 py-2 transition-all duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-neubrutalism hover:bg-black hover:text-white px-3 py-2 transition-all duration-200"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-neubrutalism hover:bg-black hover:text-white px-3 py-2 transition-all duration-200"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="neubrutalism-purple px-6 py-2 font-black text-black hover:bg-transparent"
            >
              CONTACT
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden neubrutalism"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t-4 border-black">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-neubrutalism hover:bg-black hover:text-white px-3 py-2 text-left transition-all duration-200"
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-neubrutalism hover:bg-black hover:text-white px-3 py-2 text-left transition-all duration-200"
              >
                PORTFOLIO
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-neubrutalism hover:bg-black hover:text-white px-3 py-2 text-left transition-all duration-200"
              >
                ABOUT
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="neubrutalism-purple px-6 py-2 font-black text-black hover:bg-transparent justify-start"
              >
                CONTACT
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
