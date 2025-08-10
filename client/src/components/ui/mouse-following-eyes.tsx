"use client" 

import * as React from "react"
import { useState, useRef, useEffect } from "react";
 
interface MouseFollowingEyesProps {
  className?: string;
  title?: string;
}

const MouseFollowingEyes: React.FC<MouseFollowingEyesProps> = ({ className = "", title }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const eye1Ref = useRef<HTMLDivElement>(null);
  const eye2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
 
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);
 
  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      {title && (
        <div className="mb-4 text-center text-xs uppercase tracking-[0.5px] text-black font-semibold">
          {title}
        </div>
      )}
      <div className="flex">
        <Eye
          mouseX={mousePos.x}
          mouseY={mousePos.y}
          selfRef={eye1Ref as React.RefObject<HTMLDivElement>}
          otherRef={eye2Ref as React.RefObject<HTMLDivElement>}
        />
        <Eye
          mouseX={mousePos.x}
          mouseY={mousePos.y}
          selfRef={eye2Ref as React.RefObject<HTMLDivElement>}
          otherRef={eye1Ref as React.RefObject<HTMLDivElement>}
        />
      </div>
    </div>
  );
};
 
interface EyeProps {
  mouseX: number;
  mouseY: number;
  selfRef: React.RefObject<HTMLDivElement>;
  otherRef: React.RefObject<HTMLDivElement>;
}
 
const Eye: React.FC<EyeProps> = ({ mouseX, mouseY, selfRef, otherRef }) => {
  const pupilRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });
 
  const updateCenter = () => {
    if (!selfRef.current) return;
    const rect = selfRef.current.getBoundingClientRect();
    setCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };
 
  useEffect(() => {
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);
 
  useEffect(() => {
    updateCenter();
 
    const isInside = (ref: React.RefObject<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return false;
      return (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
      );
    };
 
    if (isInside(selfRef) || isInside(otherRef)) return;
 
    const dx = mouseX - center.x;
    const dy = mouseY - center.y;
    const angle = Math.atan2(dy, dx);
 
    const maxMove = 20;
    const pupilX = Math.cos(angle) * maxMove;
    const pupilY = Math.sin(angle) * maxMove;
 
    if (pupilRef.current) {
      pupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    }
  }, [mouseX, mouseY]);
 
  return (
    <div
      ref={selfRef}
      className="relative bg-white border-4 border-black rounded-full h-24 w-24 flex items-center justify-center"
    >
      <div
        ref={pupilRef}
        className="absolute bg-black rounded-full h-8 w-8 transition-all duration-[5ms]"
      >
        <div className="w-3 h-3 bg-white rounded-full absolute bottom-1 right-1"></div>
      </div>
    </div>
  );
};
 
export { MouseFollowingEyes };
