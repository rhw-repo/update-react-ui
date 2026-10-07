import type { CardData } from "../types/types";

import hotelBellWebp from "../assets/images/pexels-olly-3771110.webp";
import hotelBellAvif from "../assets/images/pexels-olly-3771110.avif";
import greenCanoesWebp from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.webp";
import greenCanoesAvif from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.avif";
import airportWebp from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.webp";
import airportAvif from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.avif";
import graduationWebP from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.webp";
import graduationAvif from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.avif";
import rollsRoyceWebp from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.webp";
import rollsRoyceAvif from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.avif";
import woodenDeckchairsWebP from "../assets/images/aaron-burden-cEukkv42O40-unsplash.webp";
import woodenDeckChairsAvif from "../assets/images/aaron-burden-cEukkv42O40-unsplash.avif";

export const cardContent: CardData[] = [
  {
    id: "explainer-paragraph-01",
    fullSubtext: `*  The performance of investments can vary, and past results are not
a reliable guide to future returns. Returns depend on a number of factors,
including market conditions, fees, and timing. Vorlond is a professionally
audited firm, fully regulated under applicable financial services
legislation.`,
  },
  {
    id: "explainer-fulltext-01",
    text: `*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id efficitur 
erat. Phasellus eget consectetur magna. Pellentesque nec magna varius, dictum 
dolor a, placerat tellus. Quisque gravida semper rutrum. Vestibulum eget 
sodales velit. Suspendisse in leo tristique, pellentesque magna id, efficitur 
mauris.`,
  },
  {
    id: "page-one-01",
    heading: "Building Wealth Through Smart Investing",
    subheading: "A disciplined approach to long-term returns",
    text: `Investing sensibly means thinking beyond today. By setting clear
    goals, spreading your money across a range of equities, and staying
    invested through market ups and downs, you can steadily work towards
    a more secure future for your family. There are no guarantees and no
    shortcuts, but patience, discipline and regular review can help your
    wealth grow steadily over time.`,
    images: [
      {
        imageWebp: hotelBellWebp,
        imageAvif: hotelBellAvif,
        imageAlt:
          "Antique brass hotel desk bell and reception sign at the front of house desk (photo shown on the link).",
      },
    ],
    overlayText: "Investing wisely pays dividends.",
  },
  {
    id: "page-one-02",
    heading: "Planning for the Future",
    subheading: "A few simple principles for long-term investing",
    listItems: [
      `Start early and let compounding work in your favour.`,
      `Spread your investments across a range of equities.`,
      `We review your portfolio regularly.`,
      `You're backed by a trusted, professionally regulated provider.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "page-two-01",
    heading: "A Portfolio Built Around You",
    subheading: "Diversification designed around your goals",
    text: `A well-built portfolio brings together different types of
    investment, so no single event decides your outcome. We spread your
    money across asset classes, regions and time horizons, adjusting it
    steadily as your circumstances change. There are no guarantees and no
    shortcuts, but a considered, diversified portfolio can support your
    family's wealth for years to come.`,
    images: [
      {
        imageWebp: airportWebp,
        imageAvif: airportAvif,
        imageAlt: "A man sits in an airport lounge watching a plane take off.",
      },
    ],
  },
  {
    id: "page-two-02",
    heading: "How We Manage Your Portfolio",
    subheading: "A few principles that guide every portfolio we build",
    listItems: [
      `Diversified across asset classes and regions.`,
      `Aligned to your goals and appetite for risk.`,
      `We review your portfolio regularly.`,
      `You're backed by a trusted, professionally regulated provider.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "page-three-01",
    heading: "The Role of Dividends in Your Portfolio",
    subheading: "A steady income stream alongside long-term growth",
    text: `Dividends are a share of a company's profits paid out to
    investors, and reinvesting them can add up meaningfully over time.
    They won't turn a modest portfolio into a fortune overnight, but a
    steady stream of dividend income can help smooth returns and support
    your goals through changing markets. As with any investment, dividend
    payments are never guaranteed.`,
    images: [
      {
        imageWebp: rollsRoyceWebp,
        imageAvif: rollsRoyceAvif,
        imageAlt: "A Rolls Royce in front of a hotel door.",
      },
    ],
  },
  {
    id: "page-three-02",
    heading: "Making the Most of Dividends",
    subheading: "How dividend income fits into a considered strategy",
    listItems: [
      `Paid from company profits, never guaranteed.`,
      `Can be reinvested to compound over time.`,
      `We review dividend-paying holdings regularly.`,
      `You're backed by a trusted, professionally regulated provider.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "page-four-01",
    heading: "Why Diversifying Matters",
    subheading: "Spreading risk across your investments",
    text: `Diversifying means not putting all your eggs in one basket. By
    spreading your money across different asset classes, sectors and
    regions, you reduce your exposure to any single event or downturn.
    It won't remove risk altogether, but a well-diversified portfolio
    can help steady your journey towards long-term financial goals.`,
    images: [
      {
        imageWebp: greenCanoesWebp,
        imageAvif: greenCanoesAvif,
        imageAlt: "Green canoes waiting at a lakeside jetty.",
      },
    ],
  },
  {
    id: "page-four-02",
    heading: "How We Diversify Your Investments",
    subheading: "A few principles behind a well-spread portfolio",
    listItems: [
      `Spread across asset classes, sectors and regions.`,
      `Balanced to reduce exposure to any single event.`,
      `We review diversification regularly.`,
      `You're backed by a trusted, professionally regulated provider.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "latest-news-01",
    heading: "Latest News",
    newsHeading: `Chris Temple: Gold, Uranium the Best Stories Now; Plus Silver Outlook`,
    section: "latest-news",
  },
  {
    id: "latest-news-02",
    newsHeading: `Jeffrey Christian: Gold, Silver, PGMs — Short-term Prices and Key 
    Drivers`,
    section: "latest-news",
  },
  {
    id: "latest-news-03",
    newsHeading: `Australia's 5 Most Valuable Mineral Exports`,
    section: "latest-news",
  },
  {
    id: "latest-news-04",
    newsHeading:
      "Germany, Italy Face Pressure to Repatriate US$245 Billion in Gold as Trust in US Custody Wavers",
    section: "latest-news",
  },
  {
    id: "page-five-01",
    heading: "Investing for Growth",
    subheading: "Helping your money grow towards life's milestones",
    text: `Growth investing focuses on assets with the potential to
    increase in value over time, whether that's funding a child's
    education, a first home, or a comfortable retirement. Markets rise
    and fall, and growth is never guaranteed, but staying invested for
    the long term has historically given patient investors the best
    chance of reaching their goals.`,
    images: [
      {
        imageWebp: graduationWebP,
        imageAvif: graduationAvif,
        imageAlt:
          "Rear view of a graduate in gown and cap standing in front of the ocean.",
      },
    ],
  },
  {
    id: "page-five-02",
    heading: "How We Support Your Growth",
    subheading: "A few principles behind a long-term growth strategy",
    listItems: [
      `Focused on assets with long-term growth potential.`,
      `Aligned to the milestones that matter to your family.`,
      `We review your growth strategy regularly.`,
      `You're backed by a trusted, professionally regulated provider.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "wave-section-divider",
    heading: "Our Approach to Investing",
    subheading: "Steady principles, applied consistently",
    listItems: [
      `We build diversified portfolios across equities and other asset classes.`,
      `Dividends and growth are balanced to suit your goals.`,
      `Your portfolio is reviewed regularly by our team.`,
      `Every decision is guided by patience, not speculation.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "shapes-examples",
    heading: "Shapes Can Highlight Key Messages",
  },
];
