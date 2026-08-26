export interface StatCard {
  text: string;
  subtext?: string;
  imageWebp: string;
  imageAvif: string;
}

export const statCardsContent: StatCard[] = [
  {
    text: "Smarter investing",
    subtext: "Balanced portfolios",
    imageWebp: "/icons/benefits.webp",
    imageAvif: "/icons/benefits.avif",
  },
  {
    text: "Vorlond Profile",
    subtext: "Consistent returns*",
    imageWebp: "/icons/graph.webp",
    imageAvif: "/icons/graph.avif",
  },
  {
    text: "Micro to Macro",
    subtext: "Diverse vehicles",
    imageWebp: "/icons/location.webp",
    imageAvif: "/icons/location.avif",
  },
  {
    text: "Compliant, secure",
    subtext: "Transparent, audited*",
    imageWebp: "/icons/insurance.webp",
    imageAvif: "/icons/insurance.avif",
  },
];
