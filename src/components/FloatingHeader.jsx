import { useEffect, useState } from 'react';
import { USER } from '@/config/user';
import { PronounceMyName } from '@/components/PronounceMyName';
import { useOS } from '@/lib/hooks';
import { Command } from 'lucide-react';

export function FloatingHeader({ scrollTitle = USER.jobTitle, onOpenCommand }) {
  const [scrolled, setScrolled] = useState(false);
  const shortcutText = useOS();

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

        {/* Right Side Command Palette Button */}
        <button
          onClick={onOpenCommand}
          aria-label="Open Command Menu"
          className="group flex items-center gap-1.5 rounded-lg border border-border/80 bg-card/60 px-2 sm:px-2.5 py-1.5 sm:py-1 text-xs text-muted-foreground hover:border-foreground/40 hover:text-foreground active:scale-95 transition-all cursor-pointer shrink-0 shadow-xs"
        >
          <Command className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="font-mono text-[10px] sm:text-xs hidden xs:inline">{shortcutText}</span>
          <span className="font-mono text-[10px] sm:text-xs inline xs:hidden">Search</span>
        </button>
      </div>
    </header>
  );
}
