// Open source — from github.com/slimfrkha.
// `projects` are original work; `contributions` are upstream repos he contributes to
// (descriptions are the projects' own GitHub descriptions).

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
      'Point a lens at the papers: local agentic RAG over arXiv reports, with grounded, clickable citations.',
    tags: ['Python', 'RAG', 'LLM Agents'],
    url: 'https://github.com/slimfrkha/PaperLens',
  },
];

export const contributions: Repo[] = [
  {
    name: 'torchtitan',
    description: 'A PyTorch native platform for training generative AI models.',
    tags: ['Distributed Training'],
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
