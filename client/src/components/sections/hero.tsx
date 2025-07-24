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
    <section className="min-h-screen flex items-center justify-center pl-3.5 pr-4.5 md:px-6 pt-16 md:pt-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="text-neubrutalism">AWARD-<br />WINNING</span><br />
              <span className="mvp-text inline-block px-4 py-2 border-4 border-black rounded-xl shadow-[4px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-250 relative overflow-hidden hover:after:translate-x-0 after:content-[''] after:absolute after:inset-0 after:bg-pink-300 after:-z-10 after:translate-x-[-100%] after:transition-transform after:duration-250" style={{ backgroundColor: '#ebff00' }}>MVP STUDIO</span>
            </h1>
            <p className="text-xl text-black font-bold leading-relaxed max-w-2xl uppercase">
              We craft digital experiences with UNMATCHED velocity and precision. From concept to market in RECORD TIME!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pr-3 sm:pr-0">
            <button onClick={() => scrollToSection('contact')} className="uiverse-btn px-0">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front flex flex-row items-center justify-center sm:justify-start gap-2 w-full">START YOUR MVP <ArrowRight className="w-5 h-5" /></span>
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="uiverse-btn px-0">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front flex items-center justify-center sm:justify-start w-full">VIEW PORTFOLIO</span>
            </button>
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
          <div className="neubrutalism p-8 neubrutalism-shadow-xl max-w-md mx-auto">
            <div className="flex flex-col gap-1 items-start mb-2">
              <span className="text-2xl font-black text-black">MVP DEVELOPMENT PACKAGE</span>
              <span className="text-2xl font-black text-black">Starting at $3499 <span className='text-base'>(One time Payment)</span></span>
            </div>
            <div className="text-sm font-bold text-red-600 mb-4">Limited availability - Only 5 spots for August.</div>
            <div className="text-black font-medium mb-4">
              <div className="mb-2 font-bold">What's Included:</div>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Complete MVP development in 3-4 weeks</li>
                <li>Web application</li>
                <li>Modern, scalable tech stack</li>
                <li>Seamless integrations (payments, auth, etc.)</li>
                <li>Personalized, founder-led development</li>
                <li>Regular updates and transparent process</li>
              </ul>
            </div>
            <button className="uiverse-btn w-full mt-4">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front flex justify-center items-center">Share Your Vision &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
