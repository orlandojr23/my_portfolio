// ─────────────────────────────────────────────
// Edit this file to make the site yours.
// Everything personal lives here: name, links,
// bio, stack, projects, status.
// ─────────────────────────────────────────────

import { ElementType } from "react";
import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { FaNetworkWired, FaRobot, FaBrain, FaCubes, FaTools } from "react-icons/fa";
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
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
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
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST APIs", icon: FaNetworkWired },
    ],
  },
  {
    group: "AI",
    items: [
      { name: "LLMs", icon: FaBrain },
      { name: "RAG", icon: FaCubes },
      { name: "AI Agents", icon: FaRobot },
      { name: "AI SDKs", icon: FaTools },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
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
    name: "Project One",
    description:
      "I wanted a simpler way to work with long documents, so I built a small reading assistant that answers questions with citations. The interesting part is keeping retrieval honest. It says when it doesn't know.",
    stack: "AI · Next.js · TypeScript",
    github: "https://github.com/your-username/project-one",
    live: "https://project-one.vercel.app",
  },
  {
    name: "Project Two",
    description:
      "I kept repeating the same setup for every new idea, so I built a minimal starter I actually enjoy opening. Nothing clever, just sensible defaults and no clutter.",
    stack: "React · Node.js · PostgreSQL",
    github: "https://github.com/your-username/project-two",
  },
  {
    name: "Project Three",
    description:
      "I was curious how far a small agent could get on boring tasks, so I built one that drafts, checks its own work, and asks before acting. It taught me more about restraint than about autonomy.",
    stack: "AI Agents · Python · REST APIs",
    github: "https://github.com/your-username/project-three",
  },
  {
    name: "Project Four",
    description:
      "I wanted my own quiet corner for notes on things I'm learning, so I built a tiny site generator that stays out of the way. Fast to write, fast to load, easy to keep.",
    stack: "Next.js · Tailwind CSS · Vercel",
    github: "https://github.com/your-username/project-four",
    live: "https://project-four.vercel.app",
  },
];

export const site = {
  title: "Orlando Junior Fornolles | AI & Software Developer",
  description:
    "Orlando Junior Fornolles is an AI & Software Developer and indie developer building intuitive software at the intersection of AI and modern software development.",
  url: "https://your-domain.vercel.app", // Replace with your real domain
};
