"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, FolderGit2, Award, MessageCircle, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, GoogleCalendarIcon } from "./Icons";

export default function MobilePillNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Track active section for highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveHash(current ? `#${current}` : "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    // Prevent scrolling body when sheet is open
    if (isSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "about": return User;
      case "awards": return Award;
      case "projects": return FolderGit2;
      default: return User;
    }
  };

  return (
    <>
      <nav 
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-[var(--border)] sm:hidden"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))", paddingTop: "0.5rem" }}
        aria-label="Mobile Navigation"
      >
        {navLinks.map((link) => {
          const isActive = activeHash === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center justify-center px-4 py-2 transition-colors active:scale-95 touch-manipulation ${
                isActive ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <span className="text-[13px] font-medium tracking-wide">{link.label}</span>
            </a>
          );
        })}
        
        {/* Contact Tab */}
        <button
          type="button"
          onClick={() => setIsSheetOpen(true)}
          className={`flex items-center justify-center px-4 py-2 transition-colors active:scale-95 touch-manipulation ${
            isSheetOpen ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          <span className="text-[13px] font-medium tracking-wide">Contact</span>
        </button>
      </nav>

      {/* Slide-up Sheet */}
      <AnimatePresence>
        {isSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm sm:hidden"
              onClick={() => setIsSheetOpen(false)}
              aria-hidden="true"
            />
            
            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-[2rem] bg-[#121212] border-t border-[var(--border)] px-4 pt-3 pb-8 shadow-2xl sm:hidden"
              style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
            >
              {/* Drag Handle */}
              <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-[#2a2a2a]" />

              <div className="flex flex-col gap-1">
                <a
                  href="https://calendar.google.com/calendar/r/eventedit?add=orlandojuniorfornolles@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                  className="flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-[15px] font-medium text-[var(--foreground)] transition-colors active:bg-[#1a1a1a]"
                >
                  <GoogleCalendarIcon className="h-5 w-5 opacity-90" aria-hidden="true" />
                  <span>Meet me</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                  className="flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-[15px] font-medium text-[var(--foreground)] transition-colors active:bg-[#1a1a1a]"
                >
                  <GithubIcon className="h-5 w-5 opacity-90" aria-hidden="true" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                  className="flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-[15px] font-medium text-[var(--foreground)] transition-colors active:bg-[#1a1a1a]"
                >
                  <LinkedinIcon className="h-5 w-5 opacity-90" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
