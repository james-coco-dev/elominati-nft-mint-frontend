import PAGES from './pages';

const TOP_BAR_MENUS = [
  {
    id: 'TOKENOMICS',
    url: PAGES.TOKENOMICS.url,
    text: PAGES.TOKENOMICS.title,
  },
  {
    id: 'NFTS',
    url: PAGES.COLLECTION.url,
    text: PAGES.COLLECTION.title,
  },
  {
    id: 'MINT',
    url: PAGES.MINT.url,
    text: PAGES.MINT.title,
  },
  {
    id: 'ROADMAP',
    url: PAGES.ROADMAP.url,
    text: PAGES.ROADMAP.title,
  },
  {
    id: 'TEAM',
    url: PAGES.TEAM.url,
    text: PAGES.TEAM.title,
  },
];

const MOBILE_MENUS = TOP_BAR_MENUS;

export { TOP_BAR_MENUS, MOBILE_MENUS };
