import { motion } from 'motion/react';
import { USER } from '@/config/user';

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-2"
      >
        <motion.h1 layoutId="hero-name" className="font-bold text-3xl md:text-4xl tracking-tight">
          {USER.name}
        </motion.h1>
        <motion.p layoutId="hero-role" className="w-fit font-mono text-xs md:text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {USER.jobTitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
