import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Rocket } from "lucide-react";
import DarkVeil from "@/components/ui/darkveil";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
      {/* Animated WebGL Background */}
      <div className="absolute inset-0 w-full h-full">
        <DarkVeil 
          hueShift={270}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.3}
          scanlineFrequency={0.002}
          warpAmount={0.3}
          resolutionScale={0.8}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
              <span className="text-white drop-shadow-lg">Award-Winning</span><br />
              <span className="text-cosmic drop-shadow-lg">MVP Studio</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-md">
              We craft digital experiences with unmatched velocity and precision. From concept to market in record time, with the highest level of digital craftsmanship.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="glassmorphism px-8 py-4 rounded-2xl text-white font-medium hover-glow shadow-lg bg-[hsl(var(--soft-purple))] hover:bg-[hsl(var(--soft-purple))]"
            >
              Start Your MVP
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </Button>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="glassmorphism px-8 py-4 rounded-2xl text-white font-medium hover:border-[hsl(var(--soft-purple))] smooth-fade bg-transparent hover:bg-transparent border border-white/30"
            >
              View Portfolio
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center glassmorphism rounded-2xl p-4">
              <div className="text-2xl font-bold text-white drop-shadow-lg">200+</div>
              <div className="text-sm text-gray-200">MVPs Launched</div>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-4">
              <div className="text-2xl font-bold text-white drop-shadow-lg">14 Days</div>
              <div className="text-sm text-gray-200">Average Delivery</div>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-4">
              <div className="text-2xl font-bold text-white drop-shadow-lg">98%</div>
              <div className="text-sm text-gray-200">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glassmorphism rounded-3xl p-8 floating-animation shadow-2xl">
            <div className="w-full h-80 bg-gradient-to-br from-[hsl(var(--soft-purple))]/30 to-[hsl(var(--teal))]/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <div className="text-6xl font-bold text-white/80 text-center">
                Arc<br />
                <span className="text-cosmic">Lab</span>
              </div>
            </div>
            
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
