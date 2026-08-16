import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SplashScreen } from '@/components/SplashScreen';
import { FloatingHeader } from '@/components/FloatingHeader';
import { PronounceMyName } from '@/components/PronounceMyName';
import { RevealOnLoad } from '@/components/RevealOnLoad';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { Section } from '@/components/Section';
import Separator from '@/components/Separator';
import { SkillsVenn } from '@/components/SkillsVenn';
import { InfoOverlay } from '@/components/InfoOverlay';
import { TechStackMarquee } from '@/components/TechStackMarquee';
import { GitHubContribution } from '@/components/GitHubContribution';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { WordmarkFooter } from '@/components/WordmarkFooter';
import { BottomDock } from '@/components/BottomDock';
import { CommandMenu } from '@/components/CommandMenu';
import { USER } from '@/config/user';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Global multi-source scroll listener for intro title handoff
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(scrollPos > 35);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global cross-platform keyboard shortcut listener (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors overflow-x-hidden">
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>
      <InfoOverlay />
      <FloatingHeader
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      <main className="pt-14">
        {/* Hero Section */}
        <Section>
          <RevealOnLoad delay={0} duration={0.5}>
            <div className="space-y-1.5">
              <div
                className={`space-y-1.5 transition-all duration-200 ease-out ${
                  scrolled
                    ? 'opacity-0 -translate-y-2 pointer-events-none'
                    : 'opacity-100 translate-y-0'
                }`}
              >
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
                I'm an AI & software developer who loves crafting intuitive and impactful digital experiences. Currently, I'm building modern healthcare solutions at{' '}
                <a
                  href="https://sugbodoc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-semibold hover:underline"
                >
                  SugboDoc Technologies Inc.
                </a>
                , while actively exploring and applying <strong className="text-foreground font-semibold">Agentic AI Development</strong> and modern AI developer tools to engineer smart, reliable software.
              </p>
              <p>
                Whether I'm designing scalable web apps, agentic workflows, or sleek user interfaces, my goal is always the same: to build software that feels powerful yet completely effortless to use.
              </p>
            </div>
          </RevealOnLoad>

          <RevealOnLoad delay={0.3} duration={0.6}>
            <SkillsVenn
              profileImage={USER.image.profile}
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

        {/* Tech Stack Marquee */}
        <Section>
          <RevealOnScroll>
            <TechStackMarquee />
          </RevealOnScroll>
        </Section>

        <Separator />

        {/* GitHub Contributions */}
        <Section>
          <RevealOnScroll>
            <GitHubContribution />
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

        {/* Work Experience */}
        <Section id="experience">
          <RevealOnScroll>
            <ExperiencesSection />
          </RevealOnScroll>
        </Section>

        <Separator />

        {/* Footer */}
        <WordmarkFooter brandName={USER.name} />
      </main>

      <BottomDock onOpenCommand={() => setIsCommandOpen(true)} />
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </div>
  );
}
