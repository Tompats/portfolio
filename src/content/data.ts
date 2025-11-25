export type ProjectCategory = 'Full-Stack' | 'Mobile' | 'Web' | 'Backend' | 'Data Science' | 'Research';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  github?: string;
  website?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'FOOG – Mountaineering Club of Giannitsa',
    description:
      'Static website built with Astro, TypeScript, and Tailwind CSS. Inspired by a Mountain Pine color palette and optimized for speed and accessibility.',
    tags: ['Astro 5', 'TypeScript', 'Tailwind CSS', 'Formspree'],
    category: 'Web',
    github: 'https://github.com/tompats/foog',
    website: 'https://foog.gr',
    featured: true,
  },
  {
    title: 'LifePulse',
    description:
      'Blood-donation mobile platform built with React Native. Sends targeted alerts based on blood type and location. Backend powered by Fastify, PostgreSQL, and AWS.',
    tags: ['React Native', 'Fastify', 'Expo', 'AWS', 'PostgreSQL'],
    category: 'Mobile',
    github: 'https://github.com/tompats/lifepulse-navigator',
    website: 'https://lifepulse.app/demo',
    featured: true,
  },
  {
    title: 'Alphatrots Signalerings App',
    description:
      'React Native app for care assistants to manage tasks, submit welfare reports, track work hours, and send emergency alerts through a REST API backend.',
    tags: ['React Native', 'TypeScript', 'Expo', 'REST API'],
    category: 'Mobile',
    github: '',
    website: 'https://play.google.com/store/apps/details?id=com.alphatrots.signaleringsapp',
    featured: true,
  },
  {
    title: 'Kinvent Physio – Pose Detection Module',
    description:
      'Machine-learning module for real-time pose detection in physiotherapy exercises. Provides instant feedback and automatic performance tracking.',
    tags: ['Machine Learning', 'Pose Detection', 'TensorFlow.js', 'React Native', 'Computer Vision'],
    category: 'Mobile',
    featured: false,
  },
  {
    title: 'Recommendation System',
    description:
      'Movie recommendation engine in Python implementing user-based, item-based, and hybrid collaborative filtering using MovieLens-style datasets.',
    tags: ['Python', 'Recommender Systems', 'Collaborative Filtering', 'MovieLens'],
    category: 'Data Science',
    github: 'https://github.com/Tompats/Recommendation-System',
    featured: false,
  },
  {
    title: 'Link Prediction in Social Networks (Thesis)',
    description:
      'Research project on predicting future user connections using graph-based features, centrality metrics, and Python-based ML techniques.',
    tags: ['Python', 'Graph Theory', 'Network Analysis', 'Link Prediction', 'Machine Learning'],
    category: 'Research',
    featured: false,
  },
];


export const techStack = [
  'React Native',
  'React',
  'Vue',
  'Node.js',
  'Python',
  'JavaScript / TypeScript',
  'Astro',
  'PHP',
  'Modern web & mobile tooling',
];

export const skillGroups = [
  { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'PHP'] },
  { title: 'Frontend', skills: ['Astro', 'React', 'React Native', 'Vue', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Node.js', 'FastAPI', 'Django', 'Symfony', 'Fastify'] },
  { title: 'Databases', skills: ['PostgreSQL', 'Supabase', 'MongoDB'] },
  { title: 'DevOps / Cloud', skills: ['AWS', 'Vercel', 'GitHub Actions', 'Terraform'] },
  { title: 'Tools', skills: ['Figma', 'Expo', 'Storybook', 'Docker'] },
];

export const experienceTimeline = [
  {
    title: 'Full-stack Developer',
    place: 'Code Seed',
    period: 'Dec 2024 – Present',
    location: 'Remote',
  },
  {
    title: 'Co-Founder / Software Developer',
    place: 'LifePulse',
    period: 'Jun 2023 – Present',
    location: 'Remote',
  },
  {
    title: 'Ski Instructor',
    place: 'F.O.O.G',
    period: 'Jan 2021 – Present',
    location: 'Greece & Bulgaria',
  },
  {
    title: 'Mobile Application Developer',
    place: 'KINVENT',
    period: 'Jul 2024 – Jan 2025',
    location: 'Remote',
  },
  {
    title: 'Full-stack Developer',
    place: 'Code Seed',
    period: 'Jun 2022 – Jul 2024',
    location: 'Remote',
  },
  {
    title: 'PHP Web Developer (Intern)',
    place: 'Independent Placement',
    period: 'Apr 2022 – Jun 2022',
    location: 'Thessaloniki',
  },
];

export const education = {
  title: 'Computer Science & Engineering Degree + Integrated MSc (EQF Level 7)',
  school: 'University of Ioannina',
};

export const nowFocus = [
  {
    title: 'Crafting cross-platform systems at Code Seed',
    description:
      'Charting Treasure Planet-scale architectures that juggle data streams, automation, and delightful UX for crews across Europe.',
  },
  {
    title: 'Scaling LifePulse',
    description:
      'Co-leading product, writing code, and piloting new health AI features as if they were etherium sails catching cosmic winds.',
  },
  {
    title: 'Exploring ML & data stories',
    description:
      'Experimenting with snow safety models, wearable analytics, and lightsaber-polished LLM workflows to navigate the unknown.',
  },
  {
    title: 'Teaching on the slopes',
    description:
      'Coaching skiers, reading the mountain, and bringing that alpine flow-state discipline straight back into software missions.',
  },
];
