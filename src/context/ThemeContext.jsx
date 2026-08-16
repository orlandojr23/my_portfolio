import { createContext, useContext, useEffect, useState, useRef } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [mode, setModeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('themeMode');
      if (savedMode) return savedMode;
      const legacyTheme = localStorage.getItem('theme');
      const legacyEye = localStorage.getItem('eyeCare') === 'true';
      if (legacyEye) return 'eyecare';
      if (legacyTheme) return legacyTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [isThemeChanging, setIsThemeChanging] = useState(false);
  const isTransitioningRef = useRef(false);
  const themeTimerRef = useRef(null);

  const notifyThemeChange = () => {
    setIsThemeChanging(true);
    if (themeTimerRef.current) clearTimeout(themeTimerRef.current);
    themeTimerRef.current = setTimeout(() => {
      setIsThemeChanging(false);
    }, 600);
  };

  const triggerWaveAnimation = (e, applyFn) => {
    notifyThemeChange();

    if (!e || !document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      applyFn();
      return;
    }

    if (isTransitioningRef.current) {
      applyFn();
      return;
    }

    isTransitioningRef.current = true;

    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      applyFn();
    });

    transition.finished.finally(() => {
      isTransitioningRef.current = false;
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ],
        },
        {
          duration: 300,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  const cycleTheme = (e) => {
    triggerWaveAnimation(e, () => {
      setModeState((prev) => {
        let next = 'dark';
        if (prev === 'dark') next = 'light';
        else if (prev === 'light') next = 'eyecare';
        else if (prev === 'eyecare') next = 'dark';
        localStorage.setItem('themeMode', next);
        return next;
      });
    });
  };

  const setThemeMode = (targetMode, e) => {
    triggerWaveAnimation(e, () => {
      setModeState(targetMode);
      localStorage.setItem('themeMode', targetMode);
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'eye-care');

    if (mode === 'dark') {
      root.classList.add('dark');
    } else if (mode === 'eyecare') {
      root.classList.add('eye-care');
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, cycleTheme, setThemeMode, isThemeChanging, theme: mode === 'dark' ? 'dark' : 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
