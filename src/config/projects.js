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
    id: 'bingo-platform',
    title: 'Bin-Go Smart Waste Management Platform',
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
      'Lucide React',
    ],
    shortDescription:
      'A full-stack, multi-sided community waste collection platform featuring a public landing page with an interactive 3D phone showcase model, citizen live tracking & reporting portal, driver navigation interface, and an admin command dashboard.',
    description: `Comprehensive smart community waste management platform connecting citizens, collection drivers, and local barangay administrators into a single collaborative ecosystem.

Features include:
• **Landing Page & 3D Product Showcase:** Interactive landing page with Home, About, Features, FAQ, and Download sections, featuring an animated 3D phone mockup showcase model and a unified slide-over registration/login sheet.
• **Citizen / User Tracking Portal:** Live GPS tracking of garbage compactor trucks with arrival ETAs, swipeable weekly collection schedules by waste category, and quick-action waste incident reporting.
• **Driver Operations Interface:** Dedicated mobile portal with secure authentication, daily collection route assignments, and interactive navigation mode with real-time GPS tracking and route completion workflows.
• **Community Admin Command Center:** Centralized barangay dashboard featuring real-time KPI metrics, multi-layer live mapping (Pins, Heatmap, Combined), fleet dispatch & staff scheduling, Supabase-backed incident CRUD & ticketing workflows, 6-month historical analytics, and automated alert notifications.`,
    isExpanded: false,
  },
];
