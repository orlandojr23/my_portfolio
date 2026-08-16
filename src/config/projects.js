export const PROJECTS = [
  {
    id: 'bin-go-website',
    title: "Bin'Go - Smart Waste & Sanitation Platform",
    period: {
      start: 'Aug 2026',
    },
    link: '',
    github: 'https://github.com/orlandojr23/bin-go-website',
    logo: '/project_images/bingo.png',
    inDevelopment: true,
    skills: [
      'Next.js 16',
      'React 19',
      'Supabase',
      'Tailwind CSS v4',
      'Leaflet GIS',
      'Framer Motion',
    ],
    shortDescription:
      'A modern dual-platform municipal waste management and illegal dumping mitigation system for Metro Cebu.',
    description: `A municipal waste management and community sanitation platform built to bridge the gap between citizens and local government units in Metro Cebu.

Features include:
• Real-time GIS interactive mapping with Leaflet for illegal dumping hotspots & collection tracking
• Administrative dispatch dashboard with Supabase CRUD ticket management & Row Level Security (RLS)
• High-performance Next.js App Router architecture styled with Tailwind CSS v4
• Citizen incident reporting workflows and responsive landing page`,
    isExpanded: true,
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    period: {
      start: 'Aug 2026',
    },
    link: 'https://orlandojunior.onrender.com',
    github: 'https://github.com/orlandojr23/my-portfolio',
    logo: '/profile-photo.png',
    inDevelopment: false,
    skills: [
      'JavaScript',
      'React 19',
      'Vite',
      'Tailwind CSS v4',
      'Motion',
    ],
    shortDescription:
      'A sleek, responsive developer portfolio showcasing interactive UI systems, dark mode, and keyboard navigation.',
    description: `Personal developer portfolio designed and engineered from scratch.

Features include:
• Interactive Command Palette (⌘K) for quick project & social navigation
• Dynamic Theme Switcher (Dark/Light mode) powered by OKLCH CSS variables
• Custom Skills Venn diagram visualization & live activity components
• Fully responsive layout with smooth page transitions and micro-animations`,
    isExpanded: false,
  },
];
