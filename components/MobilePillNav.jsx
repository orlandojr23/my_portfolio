"use client";

import { useState, useEffect } from "react";

import { User, FolderGit2, Award } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, GoogleCalendarIcon } from "./Icons";

export default function MobilePillNav() {
  const [activeHash, setActiveHash] = useState("");

  // Track active section for highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case "about":
        return User;
      case "awards":
        return Award;
      case "projects":
        return FolderGit2;
      default:
        return User;
    }
  };

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-[var(--border)] sm:hidden"
        style={{
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          paddingTop: "0.5rem",
        }}
        aria-label="Mobile Navigation"
      >
        {navLinks.map((link) => {
          const isActive = activeHash === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center justify-center px-4 py-2 transition-colors active:scale-95 touch-manipulation ${
                isActive
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <span className="text-[13px] font-medium tracking-wide">
                {link.label}
              </span>
            </a>
          );
        })}

        {/* Social & Contact Links */}
        <div className="flex items-center pr-2">
          <a
            href="https://calendar.google.com/calendar/r/eventedit?add=orlandojuniorfornolles@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors active:scale-95 touch-manipulation"
            aria-label="Meet me"
          >
            <GoogleCalendarIcon
              className="h-[18px] w-[18px] opacity-90"
              aria-hidden="true"
            />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 text-[var(--foreground)] hover:opacity-80 transition-opacity active:scale-95 touch-manipulation"
            aria-label="GitHub"
          >
            <GithubIcon
              className="h-[18px] w-[18px] opacity-90"
              aria-hidden="true"
            />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors active:scale-95 touch-manipulation"
            aria-label="LinkedIn"
          >
            <LinkedinIcon
              className="h-[18px] w-[18px] opacity-90"
              aria-hidden="true"
            />
          </a>
        </div>
      </nav>
    </>
  );
}
