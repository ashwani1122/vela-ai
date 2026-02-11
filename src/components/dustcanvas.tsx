import { useState, useMemo } from 'react';
import "@/index.css"
export const SchedulingButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const particleCount = 100; // Adjust for density

  const particles = useMemo(() => {
  return Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    // CHANGE THIS: Increased from 0.5s-1.5s to 3s-6s
    duration: `${Math.random() * 3 + 3}s`, 
    delay: `${Math.random() * 2}s`,
    size: `${Math.random() * 2 + 1}px`,
  }));
}, []);

  return (
    <span 
      className="group relative inline-block cursor-pointer overflow-hidden h-28 rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-dust absolute rounded-full bg-white/40"
          style={{
            top: p.top,
            width: p.size,
            height: p.size,
            "--dur": p.duration ,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}
        </div>
          <span className="hover-shake flex relative z-10 text-zinc-100 font-medium inline-block transition-transform duration-0 hover:scale-85 hover:duration-[3000ms]">
            scheduling
        </span>
      </span>
  );
};