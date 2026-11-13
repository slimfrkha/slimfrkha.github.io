// Open source — from github.com/slimfrkha.
// `projects` are original work; `contributions` are upstream repos he contributes to
// (descriptions are the projects' own GitHub descriptions, plus what he contributed).

export type Repo = {
  name: string;
  description: string;
  tags?: string[];
  url: string;
};

export const projects: Repo[] = [
  {
    name: 'PaperLens',
    description:
      'Open-source agentic RAG over a personal arXiv library. ReAct agent over a two-stage retriever (dense recall, cross-encoder reranking) with hybrid dense/BM25 fusion and swappable embedder, reranker, and LLM backends. Includes an evaluation harness that generates span-anchored QA sets and sweeps chunking and retrieval parameters to emit a tuned config.',
    tags: ['Python', 'RAG', 'LLM Agents'],
    url: 'https://github.com/slimfrkha/PaperLens',
  },
  {
    name: 'rigsmith',
    description:
      'Set up a fresh macOS or Linux machine from a curated, extensible library of 230+ developer tools and the shell config that makes them work. Choose from presets instead of copying old dotfiles; includes a dry-run mode, a scan command, and an uninstall that undoes only what it installed, based on recorded receipts.',
    tags: ['Python', 'Developer Tooling', 'CLI'],
    url: 'https://github.com/slimfrkha/rigsmith',
  },
];

export const contributions: Repo[] = [
  {
    name: 'torchtitan',
    description:
      'A PyTorch native platform for training generative AI models. Contributed a weighted multi-source dataloader for text and chat data (#3063), reproducible training resume across epoch boundaries for map and streaming datasets (#3008), and a fix for shuffling on data-checkpoint resume (#2865).',
    tags: ['Distributed Training', 'Data Loading'],
    url: 'https://github.com/pytorch/torchtitan/issues?q=involves:slimfrkha',
  },
  {
    name: 'verl',
    description: 'Volcano Engine Reinforcement Learning for LLMs.',
    tags: ['RL', 'Post-training'],
    url: 'https://github.com/verl-project/verl/issues?q=involves:slimfrkha',
  },
  {
    name: 'ChatLearn',
    description: 'A flexible and efficient training framework for large-scale alignment tasks.',
    tags: ['Alignment'],
    url: 'https://github.com/alibaba/ChatLearn/issues?q=involves:slimfrkha',
  },
  {
    name: 'lm-evaluation-harness',
    description: 'A framework for few-shot evaluation of language models.',
    tags: ['Evaluation'],
    url: 'https://github.com/EleutherAI/lm-evaluation-harness/issues?q=involves:slimfrkha',
  },
  {
    name: 'evalchemy',
    description: 'Automatic evals for LLMs.',
    tags: ['Evaluation'],
    url: 'https://github.com/mlfoundations/evalchemy/issues?q=involves:slimfrkha',
  },
];
