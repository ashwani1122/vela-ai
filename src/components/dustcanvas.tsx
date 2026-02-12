import { useState, useMemo } from 'react';

export const HeroButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Dust Particles
  const dustParticles = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 4 + 6}s`,
      delay: `-${Math.random() * 10}s`,
      size: `${Math.random() * 1.5 + 0.5}px`,
    }));
  }, []);

  // 2. Comet Rays
  const cometRays = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 1.5 + 1.5}s`,
      delay: `-${Math.random() * 5}s`,
      width: Math.random() * 60 + 40,
    }));
  }, []);

  return (
    /* Removed overflow-hidden here so corners can sit on the border edge */
    <span
      className="group relative inline-block cursor-pointer h-28 px-2 rounded bg-neutral-950 border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. CORNER POINTS - Now inside the return and z-indexed */}
      <div className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <span className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-zinc-400 shadow-[0_0_10px_#3b82f6] animate-pulse"></span>
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-zinc-400 shadow-[0_0_10px_#3b82f6] animate-pulse"></span>
        <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-zinc-400 shadow-[0_0_10px_#3b82f6] animate-pulse"></span>
        <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-zinc-400 shadow-[0_0_10px_#3b82f6] animate-pulse"></span>
      </div>

      {/* 2. DUST LAYER (Wrapped in overflow-hidden div) */}
      <div className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {dustParticles.map((p) => (
          <span
            key={p.id}
            className="animate-dust absolute rounded-full bg-white/40"
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

      {/* 3. COMET LAYER (Wrapped in overflow-hidden div) */}
      <div className="absolute inset-0 overflow-hidden">
        {cometRays.map((p) => (
          <span
            key={p.id}
            className={`animate-comet absolute h-[1px] transition-all duration-500
              ${isHovered 
                ? 'bg-gradient-to-r from-transparent via-cyan-300 to-white shadow-[0_0_12px_rgba(255,255,255,0.9)]' 
                : 'bg-gradient-to-r from-transparent via-blue-500 to-blue-700 shadow-[0_0_8px_rgba(37,99,235,0.4)]'
              }`}
            style={{
              top: p.top,
              width: isHovered ? `${p.width * 1.5}px` : `${p.width}px`,
              "--dur": p.duration,
              "--delay": p.delay,
              animationDuration: isHovered ? `calc(var(--dur) / 2.5)` : `var(--dur)`,
            } as any}
          />
        ))}
      </div>

      {/* 4. HERO TEXT */}
      <span className="hover-shake relative z-10 text-zinc-100 text-8xl inline-block transition-transform duration-700 hover:scale-75 hover:duration-[5000ms]">
        scheduling
      </span>
    </span>
  );
};