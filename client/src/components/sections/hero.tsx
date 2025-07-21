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
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
              <span className="text-gray-900">Award-Winning</span><br />
              <span className="text-cosmic">MVP Studio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We craft digital experiences with unmatched velocity and precision. From concept to market in record time, with the highest level of digital craftsmanship.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="glassmorphism px-8 py-4 rounded-2xl text-[hsl(var(--soft-purple))] font-medium hover-glow shadow-lg bg-transparent hover:bg-transparent"
            >
              Start Your MVP
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </Button>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              variant="outline"
              className="px-8 py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-medium hover:border-[hsl(var(--soft-purple))] smooth-fade"
            >
              View Portfolio
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic">200+</div>
              <div className="text-sm text-gray-500">MVPs Launched</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic">14 Days</div>
              <div className="text-sm text-gray-500">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic">98%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glassmorphism rounded-3xl p-8 floating-animation shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern design studio workspace with clean desk setup and multiple monitors" 
              className="w-full h-80 object-cover rounded-2xl shadow-lg" 
            />
            
            <div className="absolute top-4 right-4 glassmorphism p-3 rounded-2xl">
              <TrendingUp className="w-6 h-6 text-[hsl(var(--soft-purple))]" />
            </div>
          </div>

          <div className="absolute -top-6 -left-6 glassmorphism p-4 rounded-2xl shadow-lg floating-animation" style={{animationDelay: '-2s'}}>
            <Zap className="w-8 h-8 text-[hsl(var(--teal))]" />
          </div>

          <div className="absolute -bottom-6 -right-6 glassmorphism p-4 rounded-2xl shadow-lg floating-animation" style={{animationDelay: '-4s'}}>
            <Rocket className="w-8 h-8 text-[hsl(var(--soft-purple))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
