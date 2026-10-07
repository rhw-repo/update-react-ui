import hotelBellWebp from "../assets/images/pexels-olly-3771110.webp";
import hotelBellAvif from "../assets/images/pexels-olly-3771110.avif";
import airportWebp from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.webp";
import airportAvif from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.avif";
import rollsRoyceWebp from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.webp";
import rollsRoyceAvif from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.avif";
import greenCanoesWebp from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.webp";
import greenCanoesAvif from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.avif";
import graduationWebp from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.webp";
import graduationAvif from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.avif";

export interface HomeLink {
  slug:
    | "page-one-01"
    | "page-two-01"
    | "page-three-01"
    | "page-four-01"
    | "page-five-01"
    | "latest-news-01";
  linkTo?: HomeLink["slug"];
  heading?: string;
  subheading?: string;
  preview?: string;
  imageWebp?: string;
  imageAvif: string;
  imageAlt?: string;
  imagePosition?: string;
  newsHeading?: string;
}

export const homeLinks: readonly HomeLink[] = [
  {
    slug: "page-one-01",
    heading: "Equities",
    subheading: "A disciplined approach to long-term returns",
    preview: `Investing sensibly means thinking beyond today. By setting
    clear goals, spreading your money across a range of equities, and
    staying invested through market ups and downs, you can steadily work
    towards a more secure future ... `,
    imageWebp: hotelBellWebp,
    imageAvif: hotelBellAvif,
    imageAlt:
      "Antique brass hotel desk bell and reception sign at the front of house desk (photo shown on the link).",
  },
  {
    slug: "page-two-01",
    linkTo: "page-one-01",
    heading: "Portfolio",
    subheading: "Diversification designed around your goals",
    preview: `A well-built portfolio brings together different types of
    investment, so no single event decides your outcome. We spread your
    money across asset classes, regions and time horizons, adjusting it
    steadily as your circumstances ...`,
    imageWebp: airportWebp,
    imageAvif: airportAvif,
    imageAlt:
      "A man sits in an airport departures lounge watching a plane take off (photo shown on the link).",
  },
  {
    slug: "page-three-01",
    linkTo: "page-one-01",
    heading: "Dividends",
    subheading: "A steady income stream alongside long-term growth",
    preview: `Dividends are a share of a company's profits paid out to
    investors, and reinvesting them can add up meaningfully over time.
    They won't turn a modest portfolio into a fortune overnight, but a
    steady stream of dividend income ...`,
    imageWebp: rollsRoyceWebp,
    imageAvif: rollsRoyceAvif,
    imageAlt:
      "A Rolls Royce in front of a hotel door (photo shown on the link).",
  },
  {
    slug: "page-four-01",
    linkTo: "page-one-01",
    heading: "Diversify",
    subheading: "Spreading risk across your investments",
    preview: `Diversifying means not putting all your eggs in one basket.
    By spreading your money across different asset classes, sectors and
    regions, you reduce your exposure to any single event or downturn.
    It won't remove risk ... `,
    imageWebp: greenCanoesWebp,
    imageAvif: greenCanoesAvif,
    imageAlt:
      "Green canoes waiting at a lakeside jetty (photo shown on the link).",
  },
  {
    slug: "page-five-01",
    linkTo: "page-one-01",
    heading: "Growth",
    subheading: "Helping your money grow towards life's milestones",
    preview: `Growth investing focuses on assets with the potential to
    increase in value over time, whether that's funding a child's
    education, a first home, or a comfortable retirement. Markets rise
    and fall ... `,
    imageWebp: graduationWebp,
    imageAvif: graduationAvif,
    imagePosition: "50% 15%",
    imageAlt:
      "Rear view of a graduate in gown and cap looking out to sea (photo shown on the link).",
  },
] as const;
