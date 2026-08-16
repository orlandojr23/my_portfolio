import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useOS } from '@/lib/hooks';
import { Home, FolderGit2, Briefcase, Sun, Moon, Eye, Volume2, VolumeX, Command, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { label: 'GitHub', img: 'https://cdn.simpleicons.org/github', href: 'https://github.com/ojfornolles', invertDark: true, disabled: true },
    { label: 'LinkedIn', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg', href: 'https://linkedin.com/in/ojfornolles', disabled: true },
    { label: 'Google Calendar', img: 'https://cdn.simpleicons.org/googlecalendar', href: 'https://calendar.google.com/calendar/render?action=TEMPLATE&add=orlandojr058@gmail.com' },
  ];

  const getThemeIcon = () => {
    if (mode === 'dark') return <Sun className="size-4 text-amber-400" />;
    if (mode === 'light') return <Moon className="size-4 text-slate-700" />;
    return <Eye className="size-4 text-amber-700" />;
  };

  const getThemeTitle = () => {
    if (mode === 'dark') return 'Current: Dark Mode (Click for Light Mode)';
    if (mode === 'light') return 'Current: Light Mode (Click for Eye Care Sepia Mode)';
    return 'Current: Eye Care Reading Mode (Click for Dark Mode)';
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 select-none">
      <AnimatePresence mode="wait">
        {isClosed ? (
          /* Minimized Restore Trigger Button */
          <motion.button
            key="dock-trigger"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            onClick={() => setIsClosed(false)}
            title="Open Navigation"
            className="flex size-11 items-center justify-center rounded-full border border-border/80 bg-background/90 shadow-2xl backdrop-blur-md ring-1 ring-border/30 text-muted-foreground hover:text-foreground hover:bg-muted transition-all cursor-pointer hover:scale-110"
          >
            <Menu className="size-5" />
          </motion.button>
        ) : (
          /* Always-Open Full Navigation Dock */
          <motion.div
            key="dock-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            className="flex items-center gap-1.5 rounded-full border border-border/80 bg-background/90 p-1.5 shadow-2xl backdrop-blur-md ring-1 ring-border/30"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                title={item.label}
                className="group relative flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110"
              >
                <item.icon className="size-4" />
              </a>
            ))}

            <hr className="h-5 w-px border-0 bg-border/60 mx-0.5" />

            {contactItems.map((item) => {
              const Component = item.disabled ? 'div' : 'a';
              return (
                <Component
                  key={item.label}
                  href={item.disabled ? undefined : item.href}
                  target={item.disabled ? undefined : "_blank"}
                  rel={item.disabled ? undefined : "noopener noreferrer"}
                  title={item.disabled ? `${item.label} (Coming Soon)` : item.label}
                  className={`group relative flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all ${item.disabled ? 'cursor-default opacity-60' : 'hover:bg-muted hover:text-foreground hover:scale-110 cursor-pointer'}`}
                >
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className={`size-4 object-contain ${item.invertDark ? 'dark:brightness-0 dark:invert opacity-80' : ''}`} 
                  />
                </Component>
              );
            })}

            <hr className="h-5 w-px border-0 bg-border/60 mx-0.5" />

            {/* Command Menu Button */}
            <button
              onClick={onOpenCommand}
              title={`Command Palette (${shortcutText})`}
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110 cursor-pointer"
            >
              <Command className="size-4" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110 cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
            </button>

            {/* Unified 3-State Theme Toggle (Dark -> Light -> Eye Care -> Dark) */}
            <button
              onClick={(e) => cycleTheme(e)}
              title={getThemeTitle()}
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110 cursor-pointer"
            >
              {getThemeIcon()}
            </button>

            <hr className="h-5 w-px border-0 bg-border/60 mx-0.5" />

            {/* Minimize Dock Button */}
            <button
              onClick={() => setIsClosed(true)}
              title="Minimize Navigation Dock"
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground/70 hover:text-foreground hover:bg-muted/60 transition-all cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
