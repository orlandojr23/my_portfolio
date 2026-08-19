import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { Home, FolderGit2, Sun, Moon, Eye, Menu, X } from 'lucide-react';

export function BottomDock() {
  const [isClosed, setIsClosed] = useState(false);
  const { mode, cycleTheme } = useTheme();

  const getThemeIcon = () => {
    const iconClass = "size-3 sm:size-3.5";
    if (mode === 'dark') return <Sun className={iconClass} />;
    if (mode === 'light') return <Moon className={iconClass} />;
    return <Eye className={iconClass} />;
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 select-none flex flex-col items-end origin-bottom-right">
      <AnimatePresence mode="wait">
        {isClosed ? (
          <motion.button
            key="dock-trigger"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            onClick={() => setIsClosed(false)}
            className="flex items-center justify-center rounded-full border border-border/70 bg-card/95 size-12 sm:size-14 shadow-xl ring-1 ring-border/20 backdrop-blur-md text-foreground/80 hover:text-foreground hover:bg-foreground/5 active:scale-95 transition-all cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu className="size-5 sm:size-6" />
          </motion.button>
        ) : (
          <motion.div
            key="dock-full"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            className="flex flex-col items-center gap-1 rounded-[2.5rem] border border-border/70 bg-card/95 p-1.5 shadow-2xl ring-1 ring-border/20 backdrop-blur-md font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-foreground/80 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] overflow-y-auto no-scrollbar"
          >
            <a href="#" className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 sm:h-14 gap-1 hover:text-foreground hover:bg-foreground/5 transition-colors rounded-full shrink-0">
              <Home className="size-4 shrink-0" strokeWidth={1.5} />
              <span>Home</span>
            </a>
            
            <a href="#projects" className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 sm:h-14 gap-1 hover:text-foreground hover:bg-foreground/5 transition-colors rounded-full shrink-0">
              <FolderGit2 className="size-4 shrink-0" strokeWidth={1.5} />
              <span>Work</span>
            </a>
            
            <a 
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=orlandojuniorfornolles@gmail.com&text=Meeting%20with%20Orlando"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 sm:h-14 gap-1 hover:text-foreground hover:bg-foreground/5 transition-colors rounded-full shrink-0 group"
            >
              <svg className="size-4 fill-current opacity-80 group-hover:opacity-100 transition-opacity shrink-0" viewBox="0 0 24 24">
                <path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"/>
              </svg>
              <span>Meet</span>
            </a>
            
            <span className="h-px w-6 bg-border/60 my-0.5 shrink-0" />
            
            <button onClick={(e) => cycleTheme(e)} className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 sm:h-14 gap-1 hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer rounded-full shrink-0">
              <div className="size-4 flex items-center justify-center shrink-0">
                {getThemeIcon()}
              </div>
              <span>Theme</span>
            </button>

            <button 
              onClick={() => setIsClosed(true)} 
              className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors cursor-pointer rounded-full shrink-0 mt-0.5"
              title="Close Menu"
              aria-label="Close Menu"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
