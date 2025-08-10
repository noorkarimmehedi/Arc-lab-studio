import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center pl-3.5 pr-4.5 md:px-6 pt-16 md:pt-12 pb-0 relative">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
              <span className="text-neubrutalism text-4xl sm:text-5xl lg:text-6xl">Building the</span><br />
              <span className="text-neubrutalism">First Version</span><br />
              <div className="btn-wrapper">
                <button className="btn">
                  <span className="btn-txt">
                    OF THE FUTURE
                  </span>
                </button>
                <div className="dot pulse"></div>
              </div>
            </h1>
            <p className="text-base md:text-xl text-black font-bold leading-relaxed max-w-2xl uppercase">
              We craft digital experiences with UNMATCHED velocity and precision. From concept to market in RECORD TIME!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pr-3 sm:pr-0">
            <a 
              href="https://cal.com/noor-foumnf/15min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full sm:w-auto"
            >
              <span className="flex flex-row items-center justify-center sm:justify-start gap-2 w-full">START YOUR MVP <ArrowRight className="w-5 h-5" /></span>
            </a>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="inline-block px-6 py-3 bg-yellow-300 text-black font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full sm:w-auto"
            >
              <span className="flex items-center justify-center sm:justify-start w-full">VIEW PORTFOLIO</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-nowrap items-center gap-3 md:gap-2 lg:gap-4 pt-8">
            <Button variant="brutal" className="w-full md:min-w-[140px] h-auto py-3">
              <div className="text-center w-full">
                <div className="text-2xl font-black">200+</div>
                <div className="text-xs font-bold uppercase">MVPs Launched</div>
              </div>
            </Button>
            <Button variant="brutal-normal" className="w-full md:min-w-[140px] h-auto py-3">
              <div className="text-center w-full">
                <div className="text-2xl font-black">21 DAYS</div>
                <div className="text-xs font-bold uppercase">Average Delivery</div>
              </div>
            </Button>
            <Button variant="brutal" className="w-full md:min-w-[140px] h-auto py-3 bg-green-500">
              <div className="text-center w-full">
                <div className="text-2xl font-black">98%</div>
                <div className="text-xs font-bold uppercase">Success Rate</div>
              </div>
            </Button>
            <Button variant="brutal" className="w-full md:min-w-[140px] h-auto py-3 bg-blue-500">
              <div className="text-center w-full">
                <div className="text-2xl font-black">100%</div>
                <div className="text-xs font-bold uppercase">AI Development</div>
              </div>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="neubrutalism p-8 border-2 border-black shadow-[4px_4px_0_0_#facc14] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-300 max-w-md mx-auto">
            <div className="flex flex-col gap-1 items-start mb-2">
              <span className="text-xl md:text-2xl font-black text-black">MVP DEVELOPMENT PACKAGE</span>
              <span className="text-xl md:text-2xl font-black text-black">Starting at $3000 <span className='text-sm md:text-base'>(One time Payment)</span></span>
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
            <a 
              href="https://cal.com/noor-foumnf/15min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="uiverse-btn w-full mt-4 block"
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front flex justify-center items-center">Share Your Vision &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
