'use client';

import React, { useRef, useEffect } from 'react';

// --- TYPE DEFINITIONS & CONSTANTS ---
const CANVAS_WIDTH = 180;
const CANVAS_HEIGHT = 180;
const GLOBAL_SPEED = 0.5;
const MONOCHROME_FILL = (opacity: number) => `rgba(0, 0, 0, ${Math.max(0, Math.min(1, opacity))})`;
const MONOCHROME_STROKE = (opacity: number) => `rgba(0, 0, 0, ${Math.max(0, Math.min(1, opacity))})`;
const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// --- CORNER DECORATION SUB-COMPONENT ---
const Corner = ({ position, rotation, delay }: { position: string; rotation: string; delay: string }) => (
  <div
    className={`absolute z-10 h-4 w-4 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${position}`}
    style={{ transform: rotation, transitionDelay: delay }}
  >
    <svg viewBox="0 0 512 512" className="h-full w-full">
      <path
        fill="currentColor"
        d="M448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288"
      />
    </svg>
  </div>
);

// --- SONAR SWEEP ANIMATION LOGIC ---
const setupSonarSweep = (ctx: CanvasRenderingContext2D) => {
    let frameId: number;
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;
    const fadeTime = 2500;
    const rings: {r: number, angle: number, lastSeen: number}[] = [];
    
    // Generate dots in concentric rings
    for (let r = 20; r <= 80; r += 15) {
        for (let i = 0; i < r / 2; i++) {
            rings.push({ 
                r, 
                angle: (i / (r / 2)) * Math.PI * 2, 
                lastSeen: -fadeTime 
            });
        }
    }
    
    const animate = (timestamp: number) => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
        // Calculate scan line angle
        const scanAngle = (timestamp * 0.001 * (Math.PI / 2) * GLOBAL_SPEED) % (Math.PI * 2);
        
        // Draw scan line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + 85 * Math.cos(scanAngle), centerY + 85 * Math.sin(scanAngle));
        ctx.strokeStyle = MONOCHROME_STROKE(0.5);
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Update and draw dots
        rings.forEach(dot => {
            let angleDiff = Math.abs(dot.angle - scanAngle);
            if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;
            
            // If scan line is close to this dot, mark it as seen
            if (angleDiff < 0.05) dot.lastSeen = timestamp;
            
            const timeSinceSeen = timestamp - dot.lastSeen;
            if (timeSinceSeen < fadeTime) {
                const opacity = 1 - easeInOutCubic(timeSinceSeen / fadeTime);
                const size = 1 + opacity * 1.5;
                const x = centerX + dot.r * Math.cos(dot.angle);
                const y = centerY + dot.r * Math.sin(dot.angle);
                
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = MONOCHROME_FILL(opacity);
                ctx.fill();
            }
        });
        
        frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
};

// --- MAIN SONAR SWEEP COMPONENT ---
interface SonarSweepProps {
  title?: string;
  className?: string;
}

export const SonarSweep: React.FC<SonarSweepProps> = ({ 
  title = "Sonar Sweep",
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cleanup = setupSonarSweep(ctx);
    return cleanup;
  }, []);

  return (
    <div className={`group relative flex h-[220px] w-[220px] flex-col items-center overflow-visible border border-gray-200 bg-white p-2.5 transition-colors duration-300 hover:border-gray-400 ${className}`}>
      <Corner position="top-[-8px] left-[-8px]" rotation="rotate(0deg)" delay="0s" />
      <Corner position="top-[-8px] right-[-8px]" rotation="rotate(90deg)" delay="0.1s" />
      <Corner position="bottom-[-8px] left-[-8px]" rotation="rotate(-90deg)" delay="0.2s" />
      <Corner position="bottom-[-8px] right-[-8px]" rotation="rotate(180deg)" delay="0.3s" />
      
      <div className="mb-[10px] text-center text-xs uppercase tracking-[0.5px] text-black font-semibold">
        {title}
      </div>
      
      <div className="relative flex h-[180px] w-[180px] items-center justify-center">
        <canvas 
          ref={canvasRef} 
          width={CANVAS_WIDTH} 
          height={CANVAS_HEIGHT} 
          className="absolute left-0 top-0" 
        />
      </div>
    </div>
  );
};
