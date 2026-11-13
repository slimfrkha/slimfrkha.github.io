// Slide decks shown on /writing. Each deck is a self-contained HTML file in
// public/presentations/, embedded on its own page at /writing/<slug>/.
// Title, context and summary are taken from each deck's title slide.

export type Presentation = {
  slug: string;
  title: string;
  context: string;
  summary: string;
  deck: string; // path under public/
};

export const presentations: Presentation[] = [
  {
    slug: 'zone-taxonomy',
    title: 'Zone Taxonomy',
    context: 'Contentsquare · 2018 – 2024',
    summary: 'Automatically naming the zones of any web page, straight from its DOM.',
    deck: '/presentations/zone-taxonomy.html',
  },
  {
    slug: 'auto-mapping',
    title: 'Auto-mapping',
    context: 'Contentsquare · 2021 – 2024',
    summary: "Proposing a website's page groups, their rules and their page categories, straight from its URLs.",
    deck: '/presentations/auto-mapping.html',
  },
];
