import { experiences } from './experience';

const USER = {
  firstName: 'Orlando Jr.',
  lastName: 'Fornolles',
  name: 'Orlando Jr. Fornolles',
  email: 'orlandojuniorfornolles@gmail.com',
  domain: 'orlandojunior.onrender.com',
  jobTitle: 'AI & Software Developer',
  username: 'orlandojr23',
  tagline: 'Orlando Jr. | AI & Software Developer',
  twitterHandle: '@ojfornolles',
  location: 'Cebu, Philippines',
  description:
    'AI & Software Developer based in Cebu, Philippines. Focused on building intuitive web applications, scalable full-stack projects, and exploring agentic AI workflows to create software that feels powerful yet remarkably simple to use.',
  namePronunciationUrl: '',
  social: {
    twitter: '',
    github: 'https://github.com/orlandojr23',
    linkedin: 'https://linkedin.com/in/ojfornolles',
    bluesky: '',
  },
  flipSentences: [
    'Software Developer Intern @ SugboDoc Technologies Inc.',
    'Leveraging Agentic AI & modern developer tools.',
    'Building modern healthcare & AI-powered web applications.',
    'Crafting intuitive, scalable digital experiences.',
  ],
  image: {
    profile: '/profile-photo.png',
  },
  experiences: experiences,
};

USER.website = `https://${USER.domain}`;

export { USER };
