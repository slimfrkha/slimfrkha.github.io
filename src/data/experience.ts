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
  // Titled highlight groups, rendered after `highlights`.
  groups?: { title: string; items: string[] }[];
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
      'Part of the team building the Falcon LLM family (Falcon 3, Falcon-H1, Falcon-H1R), with released models from 0.5B to 34B parameters. I work across the whole model lifecycle, and when a piece of work keeps coming back, I turn it into a tool the team can reuse.',
    groups: [
      {
        title: 'Building the models',
        items: [
          'Pre-training & scaling: Helped move training from single-GPU experiments to distributed multi-node runs, and helped scale pre-training to the full 1,024-H100 cluster on 14T tokens. Configured tensor, pipeline, data, and FSDP parallelism, tuned batch sizes and learning rates, and prototyped new model architectures in PyTorch.',
          'Post-training: SFT and DPO, reasoning-trace data, tool calling, and Jinja chat template design. Delivered a customer-facing fine-tuning project improving tool calling in Falcon 3 10B, from requirements to deployment.',
          'Evaluation: Reasoning-benchmark recipes (AIME, MATH-Hard, GPQA-Diamond, LiveCodeBench) that reproduce the published scores of open-source models, so comparisons are apples to apples.',
          'Inference & quantization: Served checkpoints with vLLM, validated serving correctness, and tuned sharding for throughput. Quantized Falcon-H1R-7B to FP8 with NVIDIA (weights, activations, and KV cache), cutting weight memory by 44% and raising throughput 1.2–1.5× while staying within 1 percentage point of BF16 on reasoning benchmarks.',
          'Contributor on the Falcon-H1 and Falcon-H1R technical reports.',
        ],
      },
      {
        title: 'Building the systems around them',
        items: [
          'Training infrastructure: Helped migrate the training stack from an internal framework to Megatron-LM, then introduced TorchTitan for fast small-scale research experiments. Moved SFT from single-node TRL to a multi-node Megatron-LM pipeline. Built Kubernetes Helm charts that prepare the environment, mount storage, and launch training jobs, with runs made reproducible through tracked configs, checkpoints, and W&B logs.',
          'Evaluation platform: An automated platform that benchmarks every new checkpoint, with generation served through vLLM endpoints. Each result is stored in SQL alongside its checkpoint and config paths, so any score traces back to the exact model and setup, and results surface in Metabase dashboards and leaderboards.',
          'Training data pipeline: A streaming, resumable, shard-parallel pipeline that normalizes heterogeneous chat and agentic datasets into one canonical schema, with 22 validation checks covering structure, quality, and tool-call consistency. Includes 200+ automated tests and per-row rejection reasons to make data cleaning reliable and auditable.',
          'Open source: Authored four merged PyTorch TorchTitan PRs addressing deterministic multi-epoch data resumption after checkpoint restoration and checkpointable weighted multi-source data loading. Additional contributions to veRL, ChatLearn, lm-evaluation-harness, and evalchemy.',
        ],
      },
    ],
    tech: [
      'PyTorch',
      'Megatron-LM',
      'TorchTitan',
      'veRL',
      'vLLM',
      'Docker',
      'Kubernetes',
      'Helm',
      'W&B',
      'PostgreSQL',
      'Metabase',
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
      'Led a team of 4 ML engineers working on website and page semantic understanding with NLP and LLMs, automating content structuring to replace manual setup and reduce enterprise client onboarding from weeks to days.',
    highlights: [
      'Models: Led the development of deep learning models from experimentation to production, structuring web content at scale for data enrichment and downstream product features.',
      'Team: Hired and mentored ML engineers, set research direction, and coordinated technical priorities and delivery with product goals.',
      'Production: Partnered with product, engineering, and design to bring ML research into production systems, automating content structuring and accelerating customer onboarding.',
      'Research: Guided research strategy through scientific literature reviews and contributed to patent filings.',
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
      'Core R&D AI team, building deep learning systems to extract and structure web content at scale for predictive UX analytics.',
    highlights: [
      'DOM classification: Designed and deployed deep learning models to automatically identify semantic elements of webpages (e.g., navigation menus, product information, forms), enabling content understanding and enrichment. Developed models over DOM trees, first a bidirectional Tree-LSTM combining text and HTML features, then a transformer with tree attention. Improved average classification accuracy by 20+ percentage points over an outsourced solution, bringing the capability in-house and retiring a $200K vendor contract.',
      'URL clustering: Led research on automatically grouping website pages by type (e.g., product pages, category pages), reducing manual configuration during client onboarding. Developed an interpretable approach combining weighted URL similarity, hierarchical clustering, and automatic rule generation. Improved pairwise clustering macro-F1 from 63% to 87% on held-out websites compared with the earlier baseline.',
      'Production: Managed ML pipelines from product requirements through deployment, including model inference serving with TensorFlow Serving on Amazon SageMaker and NVIDIA Triton.',
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
      'Early-stage AI HR SaaS startup (then Riminder). Led ML for intelligent recruiting tools, using deep learning in NLP and computer vision.',
    highlights: [
      'CV parsing: Built and deployed the core parsing models (layout understanding, named-entity recognition, semantic extraction) that turn unstructured CVs into structured candidate profiles for matching and ranking.',
      'Document AI: Designed multi-modal deep learning pipelines that combine text and visual layout to extract structured data from documents.',
      'Product: Worked with the founding team to define the AI roadmap and integrate ML into the SaaS product.',
    ],
  },
  {
    role: 'Data Scientist Consultant',
    company: 'EY',
    companyUrl: 'https://www.ey.com',
    location: 'Paris, France',
    start: 'May 2014',
    end: 'Jul 2016',
    summary:
      'Data-driven consulting across retail and finance: machine learning, data engineering, and visualization.',
  },
];
