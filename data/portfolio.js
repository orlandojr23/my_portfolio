// ─────────────────────────────────────────────
// Edit this file to make the site yours.
// Everything personal lives here: name, links,
// bio, stack, projects, status.
// ─────────────────────────────────────────────

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
import { FaBrain, FaGhost, FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
export const profile = {
  name: "Orlando Junior Fornolles",
  role: "Software Developer · Indie Developer",
  statement:
    "I build smart, easy-to-use apps by combining modern tech with AI.",
  subStatement: "Turning big ideas into simple, working software.",
  philosophy: "Build things that matter. Keep them simple.",
  location: "",
  statusLabel: "Currently exploring",
  statusValue: "Agentic AI",
  // Replace with your real URLs:
  github: "https://github.com/orlandojr23",
  linkedin: "https://www.linkedin.com/in/your-username",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
];

export const about = {
  heading: "About",
  paragraphs: [
    "Hi, I'm Orlando. I'm an AI, software, and indie developer based in Cebu, Philippines. I love taking complex problems and solving them with simple, effective software. My work blends full-stack web development with the latest in artificial intelligence.",
    "I'm deeply curious about how technology works behind the scenes. Whether I'm building my own independent apps, exploring AI agents, or sharing what I learn, my goal is always to create tools that are actually useful and easy to understand.",
  ],
  labels: [
    "AI",
    "Software Engineering",
    "Full-Stack",
    "Agentic AI",
    "Developer Tools",
  ],
};

export const techStack = [
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

export const projects = [
  {
    name: "Bin'Go",
    description:
      "A smart waste collection app that makes community disposal easy. Residents can quickly report waste, drivers get clear routes, and admins can easily manage the fleet and send community updates.",
    stack: "Next.js · Supabase · Tailwind CSS · React Leaflet",
    github: "https://github.com/orlandojr23/bingo_website",
    live: "https://simplybingo.vercel.app",
  },
];

export const site = {
  title: "Orlando F. | Software Developer",
  description:
    "Orlando Junior Fornolles is a Software Developer and Indie Developer building smart, easy-to-use apps by combining modern tech with AI.",
  url: "https://orlandojuniorfornolles.vercel.app",
};
