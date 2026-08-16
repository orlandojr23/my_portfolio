import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/context/ThemeContext';

export function PageFlipTransition({ children }) {
  const { theme, eyeCare } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${theme}-${eyeCare}`}
        initial={{
          rotateY: -12,
          opacity: 0.7,
          scale: 0.985,
          transformOrigin: 'left center',
          filter: 'blur(2px)',
        }}
        animate={{
          rotateY: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        }}
        exit={{
          rotateY: 12,
          opacity: 0,
          scale: 0.985,
          filter: 'blur(2px)',
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ perspective: 1200 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
