import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useOS } from '@/lib/hooks';
import { USER } from '@/config/user';
import { PROJECTS } from '@/config/projects';
import { Search, FolderGit2, Sun, Moon, Eye, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CommandMenu({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const { mode, setThemeMode } = useTheme();
  const shortcutText = useOS();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-start justify-center p-3 pt-12 sm:pt-20 sm:p-4 bg-background/80 backdrop-blur-md select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -8 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg max-h-[85vh] sm:max-h-[80vh] flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-2xl ring-1 ring-border/30"
        >
          {/* Search Input Bar */}
          <div className="flex items-center border-b border-border/70 px-3.5 py-3 sm:py-2.5 shrink-0 bg-muted/10">
            <Search className="size-4 text-muted-foreground mr-2.5 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search projects, actions, or links... (${shortcutText})`}
              className="w-full bg-transparent text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-muted-foreground hover:text-foreground active:scale-90 rounded mr-1 cursor-pointer"
                title="Clear Search"
              >
                <X className="size-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 text-muted-foreground hover:text-foreground active:scale-90 rounded cursor-pointer"
              title="Close Menu"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Results List with Smooth Panning */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-2.5 space-y-1 overscroll-contain touch-pan-y no-scrollbar">
            <div className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-1">
              Appearance Modes
            </div>
            {mode !== 'light' && (
              <button
                onClick={(e) => {
                  setThemeMode('light', e);
                  onClose();
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 sm:py-2 text-xs sm:text-sm text-foreground hover:bg-muted active:bg-muted/80 transition-colors text-left cursor-pointer"
              >
                <Sun className="size-4 text-amber-400 shrink-0" />
                <span>Switch to Light Mode</span>
              </button>
            )}
            {mode !== 'dark' && (
              <button
                onClick={(e) => {
                  setThemeMode('dark', e);
                  onClose();
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 sm:py-2 text-xs sm:text-sm text-foreground hover:bg-muted active:bg-muted/80 transition-colors text-left cursor-pointer"
              >
                <Moon className="size-4 text-slate-700 shrink-0" />
                <span>Switch to Dark Mode</span>
              </button>
            )}
            {mode !== 'eyecare' && (
              <button
                onClick={(e) => {
                  setThemeMode('eyecare', e);
                  onClose();
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 sm:py-2 text-xs sm:text-sm text-foreground hover:bg-muted active:bg-muted/80 transition-colors text-left cursor-pointer"
              >
                <Eye className="size-4 text-amber-700 shrink-0" />
                <span>Switch to Eye Care Reading Mode</span>
              </button>
            )}

            <div className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-1 pt-2">
              Projects
            </div>
            {filteredProjects.map((p) => (
              <a
                key={p.id}
                href={p.github || p.link || '#projects'}
                target={p.github || p.link ? '_blank' : undefined}
                rel={p.github || p.link ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 sm:py-2 text-xs sm:text-sm text-foreground hover:bg-muted active:bg-muted/80 transition-colors"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.title}
                    className="size-4.5 rounded-sm object-cover shrink-0"
                  />
                ) : (
                  <FolderGit2 className="size-4 text-muted-foreground shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="font-medium truncate block text-xs sm:text-sm">{p.title}</span>
                  <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-1">
                    {p.shortDescription}
                  </p>
                </div>
              </a>
            ))}

            <div className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-1 pt-2">
              Social Links
            </div>
            <a
              href={USER.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 sm:py-2 text-xs sm:text-sm text-foreground hover:bg-muted active:bg-muted/80 transition-colors"
            >
              <Globe className="size-4 text-muted-foreground shrink-0" />
              <span>GitHub Profile</span>
            </a>
            {USER.social.twitter && (
              <a
                href={USER.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 sm:py-2 text-xs sm:text-sm text-foreground hover:bg-muted active:bg-muted/80 transition-colors"
              >
                <Globe className="size-4 text-muted-foreground shrink-0" />
                <span>X / Twitter</span>
              </a>
            )}
          </div>

          {/* Footer Bar */}
          <div className="border-t border-border/70 px-3.5 py-2 bg-muted/30 text-[10px] text-muted-foreground font-mono flex items-center justify-between shrink-0">
            <span className="hidden sm:inline">ESC or click outside to close</span>
            <span className="sm:hidden">Tap outside to close</span>
            <span className="truncate">{USER.name}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
