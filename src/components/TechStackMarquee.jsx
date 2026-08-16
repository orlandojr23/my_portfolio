import { useState, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TechStackMarquee() {
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { isThemeChanging } = useTheme();
  const scrollRef = useRef(null);

  const technologies = [
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs', invertDark: true },
    { name: 'PHP', logo: 'https://cdn.simpleicons.org/php', sizeClass: 'w-5 h-3.5 scale-115' },
    { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql', sizeClass: 'w-5 h-3.5 scale-115' },
    { name: 'Generative AI', logo: '/tech_logos/ghost_ai.svg', invertDark: true },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify' },
    { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel', invertDark: true },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git' },
    { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github', invertDark: true },
  ];

  // Doubled items array for seamless 50% infinite CSS keyframe translation
  const items = [...technologies, ...technologies];

  const handleScrollLeft = () => {
    if (isAutoScroll) setIsAutoScroll(false);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (isAutoScroll) setIsAutoScroll(false);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with Title and Toggle Switch */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          Tools I Build With
        </h2>

        {/* Physical Sliding Toggle Switch */}
        <button
          onClick={() => setIsAutoScroll(!isAutoScroll)}
          className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-2.5 py-1 text-[10px] font-mono text-muted-foreground hover:text-foreground hover:border-border transition-all cursor-pointer select-none"
          title={isAutoScroll ? 'Pause Auto-Scroll' : 'Enable Auto-Scroll'}
        >
          <span className="text-[11px] font-medium text-foreground">Auto-Scroll</span>
          <div
            className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
              isAutoScroll ? 'bg-foreground' : 'bg-muted-foreground/30'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-background shadow-xs transition duration-200 ease-in-out ${
                isAutoScroll ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Marquee Viewport Container */}
      <div
        className="relative group/marquee w-full overflow-hidden py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Shadow Arrow Hint */}
        <button
          onClick={handleScrollLeft}
          className="absolute left-0.5 top-1/2 -translate-y-1/2 z-20 flex p-1 text-foreground/50 hover:text-foreground opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer select-none border-none bg-transparent"
          aria-label="Scroll Left"
          title="Scroll Left"
        >
          <ChevronLeft className="size-5 drop-shadow-md hover:scale-125 transition-transform" />
        </button>

        {/* Right Shadow Arrow Hint */}
        <button
          onClick={handleScrollRight}
          className="absolute right-0.5 top-1/2 -translate-y-1/2 z-20 flex p-1 text-foreground/50 hover:text-foreground opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer select-none border-none bg-transparent"
          aria-label="Scroll Right"
          title="Scroll Right"
        >
          <ChevronRight className="size-5 drop-shadow-md hover:scale-125 transition-transform" />
        </button>

        {/* GPU Composited Marquee Container */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto no-scrollbar py-1"
        >
          <div
            className={`flex w-max space-x-3 px-6 ${
              isAutoScroll ? 'animate-marquee' : ''
            }`}
            style={{
              animationPlayState: isAutoScroll && !isHovered && !isThemeChanging ? 'running' : 'paused',
            }}
          >
            {items.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group flex items-center gap-2.5 rounded-lg border border-border/60 bg-card px-3.5 py-2 shadow-xs hover:border-foreground/40 transition-all shrink-0 select-none"
              >
                {tech.logo && (
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`object-contain opacity-85 group-hover:opacity-100 transition-all shrink-0 ${
                      tech.invertDark ? 'dark:brightness-0 dark:invert' : ''
                    } ${tech.sizeClass || 'size-4'}`}
                  />
                )}
                <span className="text-xs md:text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Edge Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
      </div>
    </div>
  );
}
