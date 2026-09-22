// ─────────────────────────────────────────────
// Edit this file to make the site yours.
// Everything personal lives here: name, links,
// bio, stack, projects, status.
// ─────────────────────────────────────────────

import { ElementType } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFramer,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import { FaNetworkWired, FaRobot, FaBrain, FaCubes, FaTools, FaGhost, FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
export const profile = {
  name: "Orlando Junior Fornolles",
  role: "AI & Software Developer · Indie Developer",
  statement: "I build intuitive software at the intersection of AI and modern software development.",
  subStatement: "Bridging theory, technology, and practical software.",
  philosophy: "Build powerful things. Keep them simple.",
  location: "Cebu, Philippines",
  statusLabel: "Currently exploring",
  statusValue: "Agentic AI",
  // Replace with your real URLs:
  github: "https://github.com/orlandojr23",
  linkedin: "https://www.linkedin.com/in/your-username",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
] as const;

export const about = {
  heading: "About",
  paragraphs: [
    "I'm an AI & Software Developer who enjoys turning complex ideas into simple software. My work sits between full-stack development, artificial intelligence, and emerging agentic workflows.",
    "I like understanding how things work, then figuring out how to make them useful. I also enjoy connecting academic concepts with practical software through building, sharing, and speaking.",
  ],
  labels: ["AI", "Software Engineering", "Full-Stack", "Agentic AI", "Developer Tools"],
};

export const techStack: { group: string; items: { name: string; icon: ElementType }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    group: "Backend & DB",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    group: "AI",
    items: [
      { name: "AI Agents", icon: FaGhost },
      { name: "LLMs", icon: FaBrain },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "VS Code", icon: VscVscode },
      { name: "OpenCode", icon: FaCode },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Bin'Go",
    description:
      "A smart waste collection management system designed to streamline community waste disposal. It provides dedicated interfaces for residents to report waste, drivers to navigate collection routes, and administrators to oversee fleet dispatching and community notifications.",
    stack: "Next.js · Supabase · Tailwind CSS · React Leaflet",
    github: "https://github.com/orlandojr23/bingo_website",
    live: "https://simplybingo.vercel.app",
  },
];

export const site = {
  title: "Orlando F. | AI & Software Developer",
  description:
    "Orlando Junior Fornolles is an AI & Software Developer and indie developer building intuitive software at the intersection of AI and modern software development.",
  url: "https://orlandojuniorfornolles.vercel.app",
};
