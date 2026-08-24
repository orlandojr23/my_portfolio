import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SplashScreen } from '@/components/SplashScreen';
import { PronounceMyName } from '@/components/PronounceMyName';
import { RevealOnLoad } from '@/components/RevealOnLoad';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { Section } from '@/components/Section';
import Separator from '@/components/Separator';
import { SkillsVenn } from '@/components/SkillsVenn';
import { InfoOverlay } from '@/components/InfoOverlay';
import { TechStack } from '@/components/TechStack';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';
import { BottomDock } from '@/components/BottomDock';
import { USER } from '@/config/user';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen bg-background text-foreground transition-colors overflow-x-hidden ${showSplash ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>
      <InfoOverlay />
      <main>
        {/* Hero Section */}
        <Section>
          <RevealOnLoad delay={0} duration={0.5}>
            <div className="space-y-1.5">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {!showSplash ? (
                    <motion.h1 layoutId="hero-name" className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-foreground">
                      {USER.name}
                    </motion.h1>
                  ) : (
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-foreground opacity-0">
                      {USER.name}
                    </h1>
                  )}
                  <PronounceMyName name={USER.name} />
                </div>
                {!showSplash ? (
                  <motion.p layoutId="hero-role" className="w-fit font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                    {USER.jobTitle}
                  </motion.p>
                ) : (
                  <p className="w-fit font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest text-muted-foreground uppercase opacity-0">
                    {USER.jobTitle}
                  </p>
                )}
              </div>
            </div>
          </RevealOnLoad>

          <RevealOnLoad delay={0.15} duration={0.5}>
            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5 text-foreground/80 text-sm md:text-base leading-relaxed">
              <p>
                I'm an AI &amp; software developer based in Cebu, Philippines. I focus on building intuitive web applications, scalable full-stack projects, and exploring <strong className="text-foreground font-semibold">Agentic AI</strong> workflows to create software that feels powerful yet remarkably simple to use.
              </p>
              <p>
                Whether I'm engineering a web app, setting up autonomous AI workflows, or crafting clean user interfaces, my goal is always the same: to make software that feels simple, fast, and genuinely helpful.
              </p>
            </div>
          </RevealOnLoad>

          <RevealOnLoad delay={0.3} duration={0.6}>
            <SkillsVenn
              skills={{
                top: 'Agentic AI Development',
                left: 'Healthcare Tech & EMR',
                right: 'Software Architecture',
                bottom: 'Web APIs\n& UI Systems',
              }}
              className="mt-8 sm:mt-10"
            />
          </RevealOnLoad>
        </Section>

        <Separator />

        {/* Tech Stack */}
        <Section>
          <RevealOnScroll>
            <TechStack />
          </RevealOnScroll>
        </Section>

        <Separator />

        {/* Projects */}
        <Section id="projects">
          <RevealOnScroll>
            <ProjectsSection />
          </RevealOnScroll>
        </Section>

        <Separator />

        {/* Footer */}
        <Footer brandName={USER.name} />
      </main>

      {!showSplash && <BottomDock />}
    </div>
  );
}
