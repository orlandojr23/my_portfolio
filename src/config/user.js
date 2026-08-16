import { experiences } from './experience';

const USER = {
  firstName: 'Orlando Jr.',
  lastName: 'Fornolles',
  name: 'Orlando Jr. Fornolles',
  email: 'orlandojuniorfornolles@gmail.com',
  domain: 'ojfornolles.dev',
  jobTitle: 'AI & Software Developer',
  username: 'orlandojr23',
  tagline: 'Orlando Jr. | AI & Software Developer',
  twitterHandle: '@ojfornolles',
  location: 'Cebu, Philippines',
  description:
    'AI & Software Developer interning in Software Development at SugboDoc Technologies Inc. and Front-End AI Engineering at FlyRank AI, leveraging Agentic AI to build modern applications.',
  namePronunciationUrl: '',
  social: {
    twitter: '',
    github: 'https://github.com/orlandojr23',
    linkedin: 'https://linkedin.com/in/ojfornolles',
    bluesky: '',
  },
  flipSentences: [
    'Software Developer Intern @ SugboDoc Technologies Inc.',
    'Front-End AI Engineer Intern @ FlyRank AI',
    'Leveraging Agentic & Generative AI to build software.',
    'Building modern healthcare & AI web applications.',
  ],
  image: {
    profile: '/profile-photo.png',
  },
  experiences: experiences,
};

USER.website = `https://${USER.domain}`;

export { USER };
