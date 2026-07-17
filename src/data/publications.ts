// Publications & writing. Titles verbatim from the resume. Newest first.

export type Publication = {
  title: string;
  venue: string; // e.g. "arXiv", "Hugging Face Blog"
  year: number;
  role?: string; // resume role label, e.g. "Contributor", "Co-author"
  links?: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      'Falcon-H1R: Pushing the Reasoning Frontiers with a Hybrid Model for Efficient Test-Time Scaling',
    venue: 'arXiv',
    year: 2026,
    role: 'Contributor',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2601.02346' }],
  },
  {
    title:
      'Falcon-H1: A Family of Hybrid-Head Language Models Redefining Efficiency and Performance',
    venue: 'arXiv',
    year: 2025,
    role: 'Contributor',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2507.22448' }],
  },
  {
    title: 'Welcome to the Falcon 3 Family of Open Models!',
    venue: 'Hugging Face Blog',
    year: 2024,
    role: 'Contributor',
    links: [{ label: 'Blog', url: 'https://huggingface.co/blog/falcon3' }],
  },
  {
    title:
      'How Contentsquare reduced TensorFlow inference latency with TensorFlow Serving on Amazon SageMaker',
    venue: 'AWS Machine Learning Blog',
    year: 2021,
    role: 'Co-author',
    links: [
      {
        label: 'Blog',
        url: 'https://aws.amazon.com/blogs/machine-learning/how-contentsquare-reduced-tensorflow-inference-latency-with-tensorflow-serving-on-amazon-sagemaker/',
      },
    ],
  },
];
