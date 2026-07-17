// Work history. Newest first. Summaries and highlights are verbatim from the resume.

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
  highlights?: string[];
  tech?: string[];
};

export const experience: Experience[] = [
  {
    role: 'Senior ML Research Engineer',
    company: 'Technology Innovation Institute',
    companyUrl: 'https://www.tii.ae',
    location: 'Abu Dhabi, UAE',
    start: 'Jul 2024',
    end: 'Present',
    summary:
      'Core member of the foundational models team, contributing to the development and open-sourcing of Falcon LLMs, spanning Falcon 3, Falcon H1, and Falcon H1R covering the full model lifecycle.',
    highlights: [
      `Full-lifecycle LLM work: pre-training, post-training & alignment, inference, and evaluation`,
      `Development tooling: built tooling streamlining the full LLM cycle (training, data, evaluation, and release). Apply software engineering best practices to a research setting bringing engineering rigor to fast-moving research.`,
      'Open-source contributions: Delivered targeted improvements to key open-source repositories including Torchtitan, ChatLearn, veRL, lm-evaluation-harness, and evalchemy.',
    ],
    tech: [
      'PyTorch',
      'Torchtitan',
      'Megatron-LM',
      'vLLM',
      'Docker',
      'Kubernetes',
      'SageMaker',
      'PostgreSQL',
    ],
  },
  {
    role: 'Senior ML Applied Engineer / Science & Tech Lead',
    company: 'Contentsquare',
    companyUrl: 'https://contentsquare.com',
    location: 'Paris, France',
    start: 'Jan 2022',
    end: 'Jun 2024',
    summary:
      'Led a team of 4 ML engineers advancing semantic web understanding with NLP and LLMs, reducing manual setup time for new clients and enabling potential savings of up to $1 million in 2024.',
    highlights: [
      'Spearheaded design and deployment of deep learning models for large-scale web content structuring, boosting data enrichment and product features.',
      'Oversaw ML projects end-to-end: hiring, mentoring, setting research direction, aligning with product goals, solution development, deployment and improvement on user feedbacks.',
      'Drove cross-functional initiatives with product, engineering, and leadership to translate research into scalable production systems.',
      'Improved internal ML tooling for rapid experimentation and deployment.',
      'Contributed to patent filings and guided research strategy through scientific literature reviews.',
      "Recognized as a top R&D performer for leading innovation projects shaping the team's technical roadmap.",
    ],
  },
  {
    role: 'Senior ML Applied Engineer',
    company: 'Contentsquare',
    companyUrl: 'https://contentsquare.com',
    location: 'Paris, France',
    start: 'Sep 2018',
    end: 'Dec 2021',
    summary:
      'Contributed to the core R&D AI team, building deep learning solutions to extract and structure web content at scale for predictive UX analytics.',
    highlights: [
      'Led projects on DOM tree classification and unsupervised URL clustering for semantic layout analysis.',
      'Managed ML pipelines end-to-end: from product requirements to production deployment.',
      'Applied software engineering best practices: stateless design, packaging, containerization, APIs, CI/CD.',
    ],
  },
  {
    role: 'Lead ML Engineer',
    company: 'HrFlow.ai (formerly Riminder)',
    companyUrl: 'https://hrflow.ai',
    location: 'Paris, France',
    start: 'Oct 2016',
    end: 'Jul 2018',
    summary:
      'Led ML efforts for intelligent recruiting tools using deep learning in NLP and computer vision.',
    highlights: [
      'Developed and deployed core models for resume parsing, layout analysis, and semantic extraction.',
      'Designed multi-modal pipelines for structured data extraction from unstructured CVs.',
      'Collaborated on AI roadmap and SaaS integration in a fast-paced, lean team.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'EY',
    companyUrl: 'https://www.ey.com',
    location: 'Paris, France',
    start: 'Mar 2015',
    end: 'Jul 2016',
    summary:
      'Worked on data-driven consulting projects across retail and finance sectors, delivering insights through machine learning, data engineering, and visualization.',
  },
  {
    role: 'Information Systems Consultant',
    company: 'EY',
    companyUrl: 'https://www.ey.com',
    location: 'Paris, France',
    start: 'May 2014',
    end: 'Feb 2015',
    summary: 'Auditing and consulting in information systems.',
  },
];
