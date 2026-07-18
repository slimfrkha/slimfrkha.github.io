// Profile + global site metadata.

export const site = {
  name: 'Slim Frikha',
  pronouns: 'he/him',
  role: 'Senior Machine Learning Research & Applied Engineer',
  affiliation: 'Falcon @ Technology Innovation Institute',
  location: 'Abu Dhabi, United Arab Emirates',
  // Short summary used for the meta description / social cards.
  summary:
    "Senior Machine Learning Research & Applied Engineer with 12 years of experience building and scaling production-grade AI systems across early-stage startups, billion-dollar scale-ups, and national AI initiatives.",
  // Bio — verbatim from the resume PROFILE, one string per paragraph.
  about: [
    "I'm a Senior Machine Learning Research & Applied Engineer with 12 years of experience building and scaling production-grade AI systems across early-stage startups, billion-dollar scale-ups, and national AI initiatives.",
    "My core strength lies at the intersection of research and engineering. While my background is rooted in applied ML and system-building, I've also led hands-on research efforts, most recently in lab environments focused on LLMs and generative models. I enjoy taking novel ideas from prototype to production, bridging the gap between experimentation and real-world impact.",
  ],
  links: [
    { label: 'GitHub', url: 'https://github.com/slimfrkha' },
    { label: 'Hugging Face', url: 'https://huggingface.co/slimfrikha' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/slimfrikha' },
  ],
  email: { user: 'slimfrikha.dev', domain: 'outlook.com' },
} as const;

// Technical skills, grouped for display. From the resume SKILLS section.
export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Machine Learning',
    items: ['Machine learning', 'NLP', 'Distributed training'],
  },
  {
    group: 'Frameworks',
    items: ['PyTorch', 'Megatron-LM', 'Torchtitan'],
  },
  {
    group: 'Inference & Serving',
    items: ['FastAPI', 'Triton', 'vLLM'],
  },
  {
    group: 'Infrastructure',
    items: ['Docker', 'SageMaker', 'Kubernetes'],
  },
  {
    group: 'Other',
    items: ['Web', 'Databases'],
  },
];

export const languages: { name: string; level: string }[] = [
  { name: 'English', level: 'Professional' },
  { name: 'French', level: 'Professional' },
  { name: 'Arabic', level: 'Native' },
];
