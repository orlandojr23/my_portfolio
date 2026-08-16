import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useOS } from '@/lib/hooks';
import { USER } from '@/config/user';
import { Home, FolderGit2, Briefcase, Sun, Moon, Eye, Volume2, VolumeX, Command, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function DockTooltip({ children }) {
  return (
    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 opacity-0 scale-90 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-active:opacity-100 group-active:scale-100 group-active:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:scale-100 group-focus-visible:translate-y-0 transition-all duration-150 ease-out select-none flex flex-col items-center">
      <span className="flex items-center gap-1 rounded-full bg-foreground px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium text-background shadow-lg ring-1 ring-border/20 whitespace-nowrap">
        {children}
      </span>
      <span className="border-4 border-transparent border-t-foreground -mt-[1px]" />
    </span>
  );
}

export function BottomDock({ onOpenCommand }) {
  const [isClosed, setIsClosed] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { mode, cycleTheme } = useTheme();
  const shortcutText = useOS();

  const navItems = [
    { label: 'Home', icon: Home, href: '#' },
    { label: 'Projects', icon: FolderGit2, href: '#projects' },
    { label: 'Experience', icon: Briefcase, href: '#experience' },
  ];

  const contactItems = [
    { label: 'GitHub', img: 'https://cdn.simpleicons.org/github', href: USER.social?.github || 'https://github.com/orlandojr23', invertDark: true, disabled: false },
    { label: 'LinkedIn', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg', href: USER.social?.linkedin || 'https://linkedin.com/in/ojfornolles', disabled: true },
    { label: 'Calendar', img: 'https://cdn.simpleicons.org/googlecalendar', href: `https://calendar.google.com/calendar/render?action=TEMPLATE&add=${encodeURIComponent(USER.email)}` },
  ];

  const getThemeIcon = () => {
    if (mode === 'dark') return <Sun className="size-3.5 sm:size-4 text-amber-400" />;
    if (mode === 'light') return <Moon className="size-3.5 sm:size-4 text-slate-700" />;
    return <Eye className="size-3.5 sm:size-4 text-amber-700" />;
  };

  const getThemeTooltip = () => {
    if (mode === 'dark') return 'Light Mode';
    if (mode === 'light') return 'Eye Care';
    return 'Dark Mode';
  };

  return (
    <div className="fixed bottom-3 sm:bottom-4 inset-x-0 mx-auto w-fit max-w-[calc(100vw-1rem)] sm:max-w-max z-50 select-none px-1 sm:px-0">
      <AnimatePresence mode="wait">
        {isClosed ? (
          /* Minimized Floating Menu Button */
          <motion.button
            key="dock-trigger"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            onClick={() => setIsClosed(false)}
            title="Open Navigation"
            className="group relative flex size-10 sm:size-11 items-center justify-center rounded-full border border-border/80 bg-background/95 shadow-2xl backdrop-blur-md ring-1 ring-border/30 text-muted-foreground hover:text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer"
          >
            <DockTooltip>Open Menu</DockTooltip>
            <Menu className="size-4.5 sm:size-5" />
          </motion.button>
        ) : (
          /* Full Navigation Dock */
          <motion.div
            key="dock-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            className="flex items-center gap-0.5 sm:gap-1.5 rounded-full border border-border/80 bg-background/95 p-1 sm:p-1.5 shadow-2xl backdrop-blur-md ring-1 ring-border/30 overflow-visible"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex size-7.5 sm:size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95 shrink-0"
              >
                <DockTooltip>{item.label}</DockTooltip>
                <item.icon className="size-3.5 sm:size-4" />
              </a>
            ))}

            <hr className="h-4 sm:h-5 w-px border-0 bg-border/60 mx-0.5 sm:mx-0.5 shrink-0" />

            {contactItems.map((item) => {
              const Component = item.disabled ? 'div' : 'a';
              return (
                <Component
                  key={item.label}
                  href={item.disabled ? undefined : item.href}
                  target={item.disabled ? undefined : "_blank"}
                  rel={item.disabled ? undefined : "noopener noreferrer"}
                  className={`group relative flex size-7.5 sm:size-9 items-center justify-center rounded-full text-muted-foreground transition-all shrink-0 ${
                    item.disabled 
                      ? 'cursor-default opacity-50' 
                      : 'hover:bg-muted hover:text-foreground active:scale-95 cursor-pointer'
                  }`}
                >
                  <DockTooltip>{item.disabled ? `${item.label} (Soon)` : item.label}</DockTooltip>
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className={`size-3.5 sm:size-4 object-contain ${item.invertDark ? 'dark:brightness-0 dark:invert opacity-80' : ''}`} 
                  />
                </Component>
              );
            })}

            <hr className="h-4 sm:h-5 w-px border-0 bg-border/60 mx-0.5 sm:mx-0.5 shrink-0" />

            {/* Command Menu Button */}
            <button
              onClick={onOpenCommand}
              className="group relative flex size-7.5 sm:size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95 cursor-pointer shrink-0"
            >
              <DockTooltip>{shortcutText || 'Search'}</DockTooltip>
              <Command className="size-3.5 sm:size-4" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="group relative flex size-7.5 sm:size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95 cursor-pointer shrink-0"
            >
              <DockTooltip>{soundEnabled ? 'Mute' : 'Sound On'}</DockTooltip>
              {soundEnabled ? <Volume2 className="size-3.5 sm:size-4" /> : <VolumeX className="size-3.5 sm:size-4" />}
            </button>

            {/* Unified 3-State Theme Toggle (Dark -> Light -> Eye Care -> Dark) */}
            <button
              onClick={(e) => cycleTheme(e)}
              className="group relative flex size-7.5 sm:size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95 cursor-pointer shrink-0"
            >
              <DockTooltip>{getThemeTooltip()}</DockTooltip>
              {getThemeIcon()}
            </button>

            <hr className="h-4 sm:h-5 w-px border-0 bg-border/60 mx-0.5 sm:mx-0.5 shrink-0" />

            {/* Minimize Dock Button */}
            <button
              onClick={() => setIsClosed(true)}
              className="group relative flex size-6.5 sm:size-7.5 items-center justify-center rounded-full text-muted-foreground/70 hover:text-foreground hover:bg-muted/60 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <DockTooltip>Minimize</DockTooltip>
              <X className="size-3 sm:size-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
