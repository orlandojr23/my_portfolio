import { Fredoka } from "next/font/google";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, GoogleCalendarIcon } from "./Icons";
import { profile, navLinks } from "@/data/portfolio";
import VerifiedBadge from "./VerifiedBadge";
import Reveal from "./Reveal";

const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pb-12 pt-10 sm:pb-28 sm:pt-24"
    >
      <Reveal className="relative z-10">
        <h1
          id="hero-heading"
          className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">Orlando F.</span>
          <VerifiedBadge className="ml-3 mb-1" />
        </h1>
        <p
          className={`mt-4 text-lg sm:text-xl ${fredoka.className}`}
          style={{
            color: "var(--foreground)",
            textShadow:
              "1px 1px 0px var(--accent), 2px 2px 0px rgba(0,0,0,0.1)",
          }}
        >
          {profile.role}
        </p>
        <p className="mt-8 max-w-[60ch] text-lg leading-relaxed sm:text-xl">
          {profile.statement}
        </p>
        <p className="mt-3 text-base" style={{ color: "var(--muted)" }}>
          {profile.subStatement}
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Section navigation" className="hidden sm:block">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-x-6 sm:gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 py-1.5 text-[15px] font-medium text-[var(--muted)] transition-all duration-150 hover:text-[var(--foreground)] hover:bg-[#161616] active:scale-95 active:bg-[#222222] active:text-[var(--foreground)] touch-manipulation select-none cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons: GitHub, LinkedIn, Google Calendar */}
          <div className="hidden sm:flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[#141414] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-150 hover:border-[#383838] hover:bg-[#1e1e1e] hover:scale-[1.02] active:scale-95 active:bg-[#242424] active:border-[var(--accent)]/50 touch-manipulation select-none cursor-pointer sm:px-3.5 sm:py-2"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--foreground)]"
              />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[#141414] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-150 hover:border-[#383838] hover:bg-[#1e1e1e] hover:scale-[1.02] active:scale-95 active:bg-[#242424] active:border-[var(--accent)]/50 touch-manipulation select-none cursor-pointer sm:px-3.5 sm:py-2"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--foreground)]"
              />
            </a>

            <a
              href="https://calendar.google.com/calendar/r/eventedit?add=orlandojuniorfornolles@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[#141414] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-150 hover:border-[#383838] hover:bg-[#1e1e1e] hover:scale-[1.02] active:scale-95 active:bg-[#242424] active:border-[var(--accent)]/50 touch-manipulation select-none cursor-pointer sm:px-3.5 sm:py-2"
              aria-label="Schedule a meeting on Google Calendar (opens in a new tab)"
            >
              <GoogleCalendarIcon className="h-4 w-4" aria-hidden="true" />
              <span>Meet me</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--foreground)]"
              />
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
          {profile.location && (
            <p
              className="flex items-center gap-2 font-mono text-xs tracking-wide"
              style={{ color: "var(--muted)" }}
            >
              <MapPin
                size={16}
                strokeWidth={2.5}
                style={{
                  color: "var(--foreground)",
                  filter:
                    "drop-shadow(1px 1px 0px var(--accent)) drop-shadow(2px 2px 0px rgba(0,0,0,0.1))",
                  transform: "translateY(-1px)",
                }}
              />

              <span>{profile.location}</span>
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
