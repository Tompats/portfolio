export type ProjectCategory = 'Full-Stack' | 'Mobile' | 'Web' | 'Backend';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'LifePulse Navigator',
    description:
      'Digital health companion that syncs wearables, React Native front-end, and a Node.js/GraphQL API to surface actionable wellness nudges.',
    tags: ['React Native', 'Node.js', 'GraphQL', 'AWS'],
    category: 'Mobile',
    github: 'https://github.com/tompats/lifepulse-navigator',
    demo: 'https://lifepulse.app/demo',
    featured: true,
  },
  {
    title: 'Aurora Trail Guide',
    description:
      'Progressive web app mapping alpine routes with offline vector tiles, ski forecasts, and AI safety summaries built with Astro, Vue, and serverless functions.',
    tags: ['Astro', 'Vue', 'Mapbox', 'Serverless'],
    category: 'Web',
    github: 'https://github.com/tompats/aurora-trail-guide',
    demo: 'https://aurora-trail-guide.app',
    featured: true,
  },
  {
    title: 'SummitOps Control Center',
    description:
      'Operational dashboard for Code Seed teams featuring real-time job queues, audit logs, and automation controls using React, Zustand, and FastAPI.',
    tags: ['React', 'FastAPI', 'PostgreSQL'],
    category: 'Full-Stack',
    github: 'https://github.com/tompats/summitops-control',
    demo: 'https://summitops-control.dev',
    featured: true,
  },
  {
    title: 'Snowpack AI Forecaster',
    description:
      'Python + PyTorch pipeline predicting snowpack stability by merging sensor feeds with NOAA datasets, streaming alerts to ski patrol dashboards.',
    tags: ['Python', 'PyTorch', 'Data Science'],
    category: 'Backend',
    github: 'https://github.com/tompats/snowpack-ai',
    demo: 'https://snowpack-ai.dev',
  },
  {
    title: 'Nebula Deploy Kit',
    description:
      'CLI toolkit automating provisioning for multi-cloud React Native deployments with Node.js, Terraform templates, and typed config schemas.',
    tags: ['Node.js', 'Terraform', 'TypeScript'],
    category: 'Backend',
    github: 'https://github.com/tompats/nebula-deploy-kit',
    demo: 'https://nebula-kit.dev',
  },
  {
    title: 'Glacier Coach',
    description:
      'Personalized ski training companion blending Vue, WebGL motion overlays, and Supabase analytics to mirror in-person lessons remotely.',
    tags: ['Vue', 'Supabase', 'WebGL'],
    category: 'Web',
    github: 'https://github.com/tompats/glacier-coach',
    demo: 'https://glacier-coach.dev',
  },
  {
    title: 'Vector Drift Mobile',
    description:
      'Cross-platform React Native app streaming BLE sensor data for KINVENT devices with offline-first caching and TypeScript domain models.',
    tags: ['React Native', 'BLE', 'TypeScript'],
    category: 'Mobile',
    github: 'https://github.com/tompats/vector-drift',
    demo: 'https://vector-drift.app',
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
