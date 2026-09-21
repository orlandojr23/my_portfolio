import { Fredoka } from "next/font/google";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile, navLinks } from "@/data/portfolio";
import VerifiedBadge from "./VerifiedBadge";
import Reveal from "./Reveal";

const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative pb-12 pt-10 sm:pb-28 sm:pt-24">
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
            textShadow: "1px 1px 0px var(--accent), 2px 2px 0px rgba(0,0,0,0.1)"
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

        <nav aria-label="Profile links" className="mt-10 hidden sm:block">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[15px] font-medium underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-1.5 text-[15px] transition-colors hover:text-[var(--foreground)]"
                style={{ color: "var(--muted)" }}
                aria-label="GitHub profile (opens in a new tab)"
              >
                <GithubIcon 
                  width={15} 
                  height={15} 
                  strokeWidth={1.75} 
                  aria-hidden="true" 
                  style={{
                    color: "var(--foreground)",
                    filter: "drop-shadow(1px 1px 0px var(--accent)) drop-shadow(2px 2px 0px rgba(0,0,0,0.1))",
                    transform: "translateY(-1px)"
                  }}
                />
                <span className="underline-offset-4 group-hover:underline">GitHub</span>
                <ArrowUpRight 
                  size={15} 
                  strokeWidth={1.75} 
                  aria-hidden="true" 
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-1.5 text-[15px] transition-colors hover:text-[var(--foreground)]"
                style={{ color: "var(--muted)" }}
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedinIcon 
                  width={15} 
                  height={15} 
                  strokeWidth={1.75} 
                  aria-hidden="true" 
                  style={{
                    color: "var(--foreground)",
                    filter: "drop-shadow(1px 1px 0px var(--accent)) drop-shadow(2px 2px 0px rgba(0,0,0,0.1))",
                    transform: "translateY(-1px)"
                  }}
                />
                <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
                <ArrowUpRight 
                  size={15} 
                  strokeWidth={1.75} 
                  aria-hidden="true" 
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                />
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
          {profile.location && (
            <p className="flex items-center gap-2 font-mono text-xs tracking-wide" style={{ color: "var(--muted)" }}>
              <MapPin 
                size={16} 
                strokeWidth={2.5}
                style={{
                  color: "var(--foreground)",
                  filter: "drop-shadow(1px 1px 0px var(--accent)) drop-shadow(2px 2px 0px rgba(0,0,0,0.1))",
                  transform: "translateY(-1px)"
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
