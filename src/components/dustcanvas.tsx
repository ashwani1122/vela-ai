import { useState, useMemo } from 'react';

export const HeroButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Dust Particles (Slow & Constant)
  const dustParticles = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 4 + 6}s`, // Very slow drift
      delay: `-${Math.random() * 10}s`,
      size: `${Math.random() * 1.5 + 0.5}px`,
    }));
  }, []);

  // 2. Comet Rays (The "Action" Layer)
  const cometRays = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 1.5 + 1.5}s`, 
      delay: `-${Math.random() * 5}s`,
      width: `${Math.random() * 60 + 40}px`,
    }));
  }, []);

  return (
    <span 
      className="group relative inline-block cursor-pointer overflow-hidden  px-2 h-30 rounded border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dust Layer */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-20'}`}>
        {dustParticles.map((p) => (
          <span
            key={p.id}
            className="animate-dust absolute rounded-full bg-white"
            style={{
              top: p.top,
              width: p.size,
              height: p.size,
              "--dur": p.duration,
              "--delay": p.delay,
            } as any}
          />
        ))}
      </div>

      {/* Comet Layer */}
      <div className="absolute inset-0">
        {cometRays.map((p) => (
          <span
            key={p.id}
            className={`animate-comet absolute h-[0.7px] transition-all duration-500
              ${isHovered 
                ? 'bg-gradient-to-r from-transparent via-cyan-300 to-white shadow-[0_0_12px_rgba(255,255,255,0.9)]' 
                : 'bg-gradient-to-r from-transparent via-blue-500 to-blue-700 shadow-[0_0_8px_rgba(37,99,235,0.4)]'
              }`}
            style={{
              top: p.top,
              width: isHovered ? `calc(${p.width} * 0.4)` : (parseInt(p.width)*0.5).toString(), // Stretches on hover
              "--dur": p.duration,
              "--delay": p.delay,
              animationDuration: isHovered ? `calc(var(--dur) / 2.5)` : `var(--dur)`,
            } as any}
          />
        ))}
      </div>

      {/* Hero Text */}
      <span className="hover-shake relative z-10 text-zinc-100 text-8xl inline-block transition-transform duration-0 hover:scale-80 hover:duration-[3000ms] rounded">
        scheduling
      </span>
    </span>
  );
};