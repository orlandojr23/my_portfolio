"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the nav when scrolled past the hero section (approx 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!isVisible}
    >
      <nav
        className="flex items-center gap-4 rounded-full border px-5 py-2.5 shadow-sm backdrop-blur-md sm:gap-6 sm:px-6"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--border)",
        }}
      >
        <ul className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium underline-offset-4 transition-all hover:text-[var(--foreground)] hover:underline"
                style={{ color: "var(--muted)" }}
                tabIndex={isVisible ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-4 w-px" style={{ backgroundColor: "var(--border)" }} />

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-sm transition-colors hover:text-[var(--foreground)]"
            style={{ color: "var(--muted)" }}
            aria-label="GitHub profile (opens in a new tab)"
            tabIndex={isVisible ? 0 : -1}
          >
            <GithubIcon 
              width={16} 
              height={16} 
              strokeWidth={2} 
              aria-hidden="true" 
              className="opacity-80 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100" 
            />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-sm transition-colors hover:text-[var(--foreground)]"
            style={{ color: "var(--muted)" }}
            aria-label="LinkedIn profile (opens in a new tab)"
            tabIndex={isVisible ? 0 : -1}
          >
            <LinkedinIcon 
              width={16} 
              height={16} 
              strokeWidth={2} 
              aria-hidden="true" 
              className="opacity-80 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100" 
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
