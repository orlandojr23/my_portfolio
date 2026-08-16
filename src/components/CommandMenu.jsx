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
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-background/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        >
          {/* Search Input */}
          <div className="flex items-center border-b border-border px-3 py-2.5">
            <Search className="size-4 text-muted-foreground mr-2.5 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search projects, actions, or links... (${shortcutText})`}
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 text-muted-foreground hover:text-foreground rounded cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            <div className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-1">
              Appearance Modes
            </div>
            {mode !== 'light' && (
              <button
                onClick={(e) => {
                  setThemeMode('light', e);
                  onClose();
                }}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-colors text-left cursor-pointer"
              >
                <Sun className="size-4 text-amber-400" />
                <span>Switch to Light Mode</span>
              </button>
            )}
            {mode !== 'dark' && (
              <button
                onClick={(e) => {
                  setThemeMode('dark', e);
                  onClose();
                }}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-colors text-left cursor-pointer"
              >
                <Moon className="size-4 text-slate-700" />
                <span>Switch to Dark Mode</span>
              </button>
            )}
            {mode !== 'eyecare' && (
              <button
                onClick={(e) => {
                  setThemeMode('eyecare', e);
                  onClose();
                }}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-colors text-left cursor-pointer"
              >
                <Eye className="size-4 text-amber-700" />
                <span>Switch to Warm Eye Care Reading Mode</span>
              </button>
            )}

            <div className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-1 pt-2">
              Projects
            </div>
            {filteredProjects.map((p) => (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-colors"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.title}
                    className="size-4 rounded-sm object-cover shrink-0"
                  />
                ) : (
                  <FolderGit2 className="size-4 text-muted-foreground shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="font-medium truncate block">{p.title}</span>
                  <p className="text-[10px] text-muted-foreground line-clamp-1">
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
              className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-colors"
            >
              <Globe className="size-4 text-muted-foreground" />
              <span>GitHub Profile</span>
            </a>
            <a
              href={USER.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-colors"
            >
              <Globe className="size-4 text-muted-foreground" />
              <span>X / Twitter</span>
            </a>
          </div>

          <div className="border-t border-border px-3 py-1.5 bg-muted/30 text-[10px] text-muted-foreground font-mono flex items-center justify-between">
            <span>Press ESC to close</span>
            <span>Orlando Jr. Fornolles Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
