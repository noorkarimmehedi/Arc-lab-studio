"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10 relative"
      ref={containerRef}
      style={{ backgroundColor: '#3b82f5' }}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-black uppercase">
          Our <span className="inline-block px-3 py-1 bg-white text-blue-500 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">PROCESS</span>
        </h2>
        <p className="text-white text-sm md:text-base max-w-2xl font-bold uppercase">
          A REFINED methodology that ensures EXCEPTIONAL results in RECORD TIME. Every step is designed for MAXIMUM efficiency and QUALITY!
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 neubrutalism-yellow rounded-none flex items-center justify-center border-4 border-black">
                <div className="h-4 w-4 rounded-none neubrutalism-purple border-2 border-black p-2" />
              </div>
              <h3 className="hidden md:block md:pl-20">
                <span className="inline-block px-3 py-1 bg-white text-blue-500 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-xl md:text-3xl uppercase">
                  {item.title}
                </span>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block mb-4 text-left">
                <span className="inline-block px-3 py-1 bg-white text-blue-500 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-xl uppercase">
                  {item.title}
                </span>
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[6px] bg-black"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[6px] bg-gradient-to-t from-yellow-400 via-pink-400 to-transparent from-[0%] via-[10%] rounded-none"
          />
        </div>
      </div>
    </div>
  );
};