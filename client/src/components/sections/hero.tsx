import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Rocket } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="text-neubrutalism">AWARD-WINNING</span><br />
              <span className="text-neubrutalism-accent">MVP STUDIO</span>
            </h1>
            <p className="text-xl text-black font-bold leading-relaxed max-w-2xl uppercase">
              We craft digital experiences with UNMATCHED velocity and precision. From concept to market in RECORD TIME!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="neubrutalism-purple px-8 py-4 font-black text-black hover:bg-transparent text-lg"
            >
              START YOUR MVP
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </Button>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="neubrutalism-teal px-8 py-4 font-black text-black hover:bg-transparent text-lg"
            >
              VIEW PORTFOLIO
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center neubrutalism-pink p-4 transform rotate-2">
              <div className="text-3xl font-black text-black">200+</div>
              <div className="text-sm font-bold text-black uppercase">MVPs Launched</div>
            </div>
            <div className="text-center neubrutalism-yellow p-4 transform -rotate-1">
              <div className="text-3xl font-black text-black">14 DAYS</div>
              <div className="text-sm font-bold text-black uppercase">Average Delivery</div>
            </div>
            <div className="text-center neubrutalism-green p-4 transform rotate-1">
              <div className="text-3xl font-black text-black">98%</div>
              <div className="text-sm font-bold text-black uppercase">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="neubrutalism p-8 floating-animation neubrutalism-shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern design studio workspace with clean desk setup and multiple monitors" 
              className="w-full h-80 object-cover border-4 border-black" 
            />
            
            <div className="absolute top-4 right-4 neubrutalism-green p-3">
              <TrendingUp className="w-6 h-6 text-black" />
            </div>
          </div>

          <div className="absolute -top-6 -left-6 neubrutalism-yellow p-4 floating-animation wiggle" style={{animationDelay: '-2s'}}>
            <Zap className="w-8 h-8 text-black" />
          </div>

          <div className="absolute -bottom-6 -right-6 neubrutalism-pink p-4 floating-animation" style={{animationDelay: '-4s'}}>
            <Rocket className="w-8 h-8 text-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
