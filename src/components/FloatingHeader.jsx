import { useEffect, useState } from 'react';
import { USER } from '@/config/user';
import { PronounceMyName } from '@/components/PronounceMyName';

export function FloatingHeader({ scrollTitle = USER.jobTitle }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(scrollPos > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 w-full backdrop-blur-md bg-background/85 border-b border-border/40 transition-colors select-none">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4 sm:px-6">
        {/* Left Side Header Title, Voice Button & Role */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div
            className={`flex items-center gap-1.5 sm:gap-2 transition-all duration-300 ease-out min-w-0 ${
              scrolled
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <span className="font-semibold tracking-tight text-sm sm:text-base text-foreground truncate">
              {USER.name}
            </span>
            <PronounceMyName name={USER.name} />
            <span className="text-xs text-muted-foreground font-mono hidden md:inline truncate">
              / {scrollTitle}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
