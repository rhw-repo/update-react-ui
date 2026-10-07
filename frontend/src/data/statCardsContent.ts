export interface StatCard {
  id: string;
  text: string;
  subtext?: string;
  imageWebp: string;
  imageAvif: string;
}

export const statCardsContent: StatCard[] = [
  {
    id: "stat-card-01",
    text: "Smarter investing",
    subtext: "Balanced portfolios",
    imageWebp: "/icons/benefits.webp",
    imageAvif: "/icons/benefits.avif",
  },
  {
    id: "stat-card-02",
    text: "Vorlond Profile",
    subtext: "Consistent returns*",
    imageWebp: "/icons/graph.webp",
    imageAvif: "/icons/graph.avif",
  },
  {
    id: "stat-card-03",
    text: "Micro to Macro",
    subtext: "Diverse vehicles",
    imageWebp: "/icons/location.webp",
    imageAvif: "/icons/location.avif",
  },
  {
    id: "stat-card-04",
    text: "Compliant, secure",
    subtext: "Transparent, audited*",
    imageWebp: "/icons/insurance.webp",
    imageAvif: "/icons/insurance.avif",
  },
];
