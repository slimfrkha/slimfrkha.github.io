// Talks & presentations. Titles verbatim from the resume; venues from LinkedIn. Newest first.

export type Talk = {
  title: string;
  venue: string;
  role: string;
  year: number;
  url: string;
};

export const talks: Talk[] = [
  {
    title: 'Web page Tree Node Classification with Deep Learning',
    venue: 'Paris Machine Learning Applications group',
    role: 'Presenter',
    year: 2022,
    url: 'https://www.youtube.com/watch?v=QIfmJHyQIlY',
  },
  {
    title: 'Unsupervised clustering of website URLs and clusters pattern recognition',
    venue: 'Paris NLP Meetup',
    role: 'Presenter',
    year: 2022,
    url: 'https://www.youtube.com/watch?v=TRqIAQnG5JM',
  },
];
