import { Button } from "@/components/ui/button";
import { Rocket, Clock } from "lucide-react";

export function Comparison() {
  return (
    <section className="pt-20 pb-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6">
            3× Faster Than Traditional Teams
          </h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto">
            We consistently ship launch-ready MVPs in just 21 days. Traditional teams often take 3 to 6 months to reach the same point.
          </p>
        </div>

        <div className="flex flex-col gap-12 mb-12">
          <div className="grid grid-cols-1 gap-8">
            {/* Arc-Lab Bar */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <Rocket className="w-6 h-6 mr-2" />
                <span className="font-black text-xl">with Arc-Lab</span>
              </div>
              <div className="relative">
                <div className="h-16 bg-blue-500 border-2 border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none flex items-center justify-center w-[50%] md:w-[33%]">
                  <span className="font-black text-white text-xl">21 Days</span>
                </div>
              </div>
            </div>
            
            {/* Others Bar */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <Clock className="w-6 h-6 mr-2" />
                <span className="font-black text-xl">with others</span>
              </div>
              <div className="relative">
                <div className="h-16 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none flex items-center justify-center w-full">
                  <span className="font-black text-black text-xl">180 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm italic max-w-2xl mx-auto border-t-2 border-black pt-4">
            *The Earth moves 54 million kilometers around the Sun in 21 days, our MVPs orbit the market just as fast
          </p>
        </div>
      </div>
    </section>
  );
}
