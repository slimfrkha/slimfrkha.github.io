// Profile + global site metadata.

export const site = {
  name: 'Slim Frikha',
  pronouns: 'he/him',
  role: 'Senior Machine Learning Engineer',
  affiliation: 'Falcon @ Technology Innovation Institute',
  location: 'Abu Dhabi, United Arab Emirates',
  // Short summary used for the meta description / social cards.
  summary:
    'Senior Machine Learning Engineer with 12+ years of experience. I build large language models, and the training, evaluation, and data systems that make building them faster and more reliable.',
  // Bio, one string per paragraph.
  about: [
    'I build large language models, and the training, evaluation, and data systems that make building them faster and more reliable.',
    "I'm a Senior Machine Learning Engineer with 12+ years taking AI systems from prototype to production across early-stage startups, billion-dollar scale-ups, and national AI initiatives. At the Technology Innovation Institute, I'm on the foundation models team behind Falcon 3, Falcon-H1, and Falcon-H1R, working across pre-training, post-training, evaluation, and inference. Before that, I led ML work on semantic web understanding at Contentsquare, where three granted US patents came out of our work.",
    "When something slows me down, I tend to build a tool for it, at work and outside it. That habit is behind most of what's on this page: the evaluation and data systems at TII, my upstream contributions to open-source training frameworks, and side projects like PaperLens and rigsmith.",
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
    group: 'Programming',
    items: ['Python', 'SQL'],
  },
  {
    group: 'Machine Learning',
    items: ['LLM pre-training', 'Post-training (SFT, DPO)', 'LLM evaluation', 'Distributed training', 'Inference & quantization', 'NLP', 'Deep learning'],
  },
  {
    group: 'Frameworks',
    items: ['PyTorch', 'Megatron-LM', 'TorchTitan', 'veRL', 'Hugging Face Transformers', 'vLLM', 'lm-evaluation-harness', 'FastAPI'],
  },
  {
    group: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Helm', 'W&B', 'AWS SageMaker', 'CI/CD'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'Metabase'],
  },
];

export const languages: { name: string; level: string }[] = [
  { name: 'English', level: 'Professional' },
  { name: 'French', level: 'Professional' },
  { name: 'Arabic', level: 'Native' },
];
