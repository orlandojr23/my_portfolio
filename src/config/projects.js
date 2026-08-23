export const PROJECTS = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    period: {
      start: 'Aug 2026',
    },
    link: 'https://orlandojunior.onrender.com',
    github: 'https://github.com/orlandojr23/my-portfolio',
    inDevelopment: false,
    skills: [
      'JavaScript',
      'React 19',
      'Vite',
      'Tailwind CSS v4',
      'Motion',
    ],
    shortDescription:
      'A hyper-minimalist, responsive developer portfolio featuring a floating action menu, multi-theme architecture, and integrated scheduling.',
    description: `Personal developer portfolio engineered from scratch with an uncompromising focus on minimalism and fluid mobile accessibility.

Features include:
• **Floating Action Menu:** A custom-built, Apple HIG-compliant vertical dock anchored to the screen edge to maximize reading space.
• **Advanced Theme Engine:** Seamlessly cycles between Dark, Light, and Eye-Care modes using dynamic OKLCH CSS variables.
• **Frictionless Scheduling:** Integrated direct-to-Google-Calendar links that instantly auto-fill meeting details and guest emails.
• **Responsive Typography:** Fluid font scaling and custom sleek floating scrollbars for a highly polished cross-browser experience.`,
    isExpanded: false,
  },
  {
    id: 'bingo-admin-dashboard',
    title: 'Bin-Go Admin Dashboard',
    period: {
      start: 'Aug 2026',
    },
    link: 'https://simplybingo.onrender.com',
    github: 'https://github.com/orlandojr23/bingo_website',
    inDevelopment: true,
    skills: [
      'Next.js 16.3',
      'React 19',
      'Tailwind CSS v4',
      'Framer Motion',
      'Leaflet',
      'Supabase',
    ],
    shortDescription:
      'An incident reporting and waste management tracking dashboard designed for streamlined oversight of municipal garbage collection and sanitation teams.',
    description: `Built to oversee live reports, this dashboard features interactive mapping for incident locations, real-time KPI tracking, and ticketing workflows to ensure clean and safe communities.

Features include:
• **Interactive Mapping:** Powered by Leaflet to track and display incident locations precisely.
• **Live Oversight:** Real-time KPI tracking and monitoring for municipal garbage collection.
• **Ticketing Workflows:** Streamlined assignment and resolution system for sanitation teams.`,
    isExpanded: false,
  },
];
