export interface AnimatedCounterStatCard {
  id: string;
  number: string;
  duration: string;
  suffix?: string;
  text: string;
  subtext?: string;
  imageWebp: string;
  imageAvif: string;
}

export const animatedCounterStatsCardContent: AnimatedCounterStatCard[] = [
  {
    id: "001",
    duration: "600",
    number: "25.5",
    suffix: "%",
    text: "Typical Equity Allocation",
    subtext: "Balanced",
    imageWebp: "/icons/benefits.webp",
    imageAvif: "/icons/benefits.avif",
  },
  {
    number: "17",
    duration: "1200",
    id: "002",
    text: "Years of Experience",
    subtext: "Established",
    imageWebp: "/icons/graph.webp",
    imageAvif: "/icons/graph.avif",
  },
  {
    number: "20,500",
    duration: "2400",
    id: "003",
    text: "Investors Served",
    subtext: "Worldwide",
    imageWebp: "/icons/location.webp",
    imageAvif: "/icons/location.avif",
  },
  {
    number: "100",
    duration: "3000",
    id: "004",
    suffix: "%",
    text: "Regulatory Compliance",
    subtext: "Audited",
    imageWebp: "/icons/insurance.webp",
    imageAvif: "/icons/insurance.avif",
  },
];
