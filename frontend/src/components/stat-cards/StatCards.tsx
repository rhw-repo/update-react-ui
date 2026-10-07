import styles from "./StatCards.module.css";
import { type StatCard } from "../../data/statCardsContent";
import Card from "../card/Card";
import { cardContent } from "../../data/cardContent";
import { useLocation } from "react-router-dom";

export interface StatCardProps {
  items: StatCard[];
}

export const StatCards = ({ items }: StatCardProps) => {
  const { pathname } = useLocation();

  const explainerCard = cardContent.find(
    (card) => card.id === "explainer-paragraph-01",
  );

  // /home-one: frosted silver badges to match its hero image scrim
  let badgeClass = styles.shapeBadge;
  switch (pathname) {
    case "/home-one":
      badgeClass += ` ${styles.shapeBadgeFrosted}`;
      break;
    case "/home-three":
      badgeClass += ` ${styles.shapeBadgeGold}`;
      break;
    default:
      break;
  }

  return (
    <section className={styles.textbox}>
      <div className={styles.textboxContainer}>
        {items.map((item: StatCard) => (
          <div className={styles.textboxContainerShapes} key={item.id}>
            <span className={badgeClass}>
              <picture className={styles.shapeBadgeImage}>
                <source srcSet={item.imageAvif} type="image/avif" />
                <img
                  src={item.imageWebp}
                  alt=""
                  className={styles.textboxContainerShapesIcon}
                />
              </picture>
            </span>
            <p className={styles.textbox__para}>
              <span className={styles.textbox__text}>{item.text}</span>
              <span className={styles.textbox__subtext}>{item.subtext}</span>
            </p>
          </div>
        ))}
      </div>
      <section className={styles.textboxCardMobileTablets}>
        {explainerCard ? (
          <Card key={explainerCard.id} {...explainerCard} />
        ) : null}
      </section>
    </section>
  );
};
