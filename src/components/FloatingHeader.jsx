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
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        {/* Left Side Header Title, Voice Button & Role */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 transition-all duration-300 ease-out ${
              scrolled
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <span className="font-semibold tracking-tight text-sm md:text-base text-foreground">
              {USER.name}
            </span>
            <PronounceMyName name={USER.name} />
            <span className="text-xs text-muted-foreground font-mono hidden sm:inline">
              / {scrollTitle}
            </span>
          </div>
        </div>

        {/* Right Side Command Palette Button */}
        <button
          onClick={onOpenCommand}
          className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-xs text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-all cursor-pointer shrink-0"
        >
          <Command className="size-3.5" />
          <span className="hidden sm:inline font-mono">{shortcutText}</span>
        </button>
      </div>
    </header>
  );
}
