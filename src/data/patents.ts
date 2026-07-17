// Granted US patents (Contentsquare, Inventor). Titles verbatim from the resume;
// issue dates from Google Patents.

export type Patent = {
  title: string;
  number: string; // e.g. "US 11841891"
  issued?: string;
  url: string;
};

export const patents: Patent[] = [
  {
    title: 'Mapping webpages to page groups',
    number: 'US 11841891',
    issued: 'Dec 2023',
    url: 'https://patents.google.com/patent/US11841891',
  },
  {
    title: 'Determining zone types of a webpage',
    number: 'US 11741186',
    issued: 'Aug 2023',
    url: 'https://patents.google.com/patent/US11741186',
  },
  {
    title: 'System and method for automatic detection of webpage zones of interest',
    number: 'US 11727196',
    issued: 'Aug 2023',
    url: 'https://patents.google.com/patent/US11727196',
  },
  {
    title: 'Determining conditions for a set of webpages',
    number: 'US 11681771',
    issued: 'Jun 2023',
    url: 'https://patents.google.com/patent/US11681771',
  },
];
