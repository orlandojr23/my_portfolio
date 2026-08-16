import { useEffect, useState } from 'react';

export function useTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Asia/Manila',
      });
      setTime(`CEBU, PH • ${formattedTime} PHT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export function useOS() {
  const [shortcutText, setShortcutText] = useState('⌘K');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMacUser = /Mac|iPod|iPhone|iPad/.test(
        navigator.userAgent || navigator.platform || ''
      );
      setShortcutText(isMacUser ? '⌘K' : 'Ctrl+K');
    }
  }, []);

  return shortcutText;
}
