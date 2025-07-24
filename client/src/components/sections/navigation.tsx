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
            <span className="text-xl text-neubrutalism mt-3">OFF-DESIGN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="uiverse-btn">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Services</span>
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="uiverse-btn">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Portfolio</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="uiverse-btn">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">About</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="uiverse-btn">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Contact</span>
            </button>
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
              <button onClick={() => scrollToSection('services')} className="uiverse-btn w-full text-left">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">SERVICES</span>
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="uiverse-btn w-full text-left">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">PORTFOLIO</span>
              </button>
              <button onClick={() => scrollToSection('about')} className="uiverse-btn w-full text-left">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">ABOUT</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="uiverse-btn w-full text-left">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
