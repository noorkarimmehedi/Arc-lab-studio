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
    <nav className="glassmorphism fixed w-full top-6 left-1/2 transform -translate-x-1/2 max-w-6xl mx-auto z-50 rounded-2xl shadow-lg">
      <div className="px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 cosmic-gradient rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Arc-Lab</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[hsl(var(--soft-purple))] smooth-fade"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-[hsl(var(--soft-purple))] smooth-fade"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[hsl(var(--soft-purple))] smooth-fade"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="glassmorphism px-6 py-2 rounded-2xl text-[hsl(var(--soft-purple))] font-medium hover-glow bg-transparent hover:bg-transparent"
            >
              Contact
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glassmorphism rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[hsl(var(--soft-purple))] smooth-fade text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-[hsl(var(--soft-purple))] smooth-fade text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[hsl(var(--soft-purple))] smooth-fade text-left"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="glassmorphism px-6 py-2 rounded-2xl text-[hsl(var(--soft-purple))] font-medium hover-glow bg-transparent hover:bg-transparent justify-start"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
