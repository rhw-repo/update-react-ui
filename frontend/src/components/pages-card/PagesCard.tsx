import styles from "./PagesCard.module.css";
import type { CardData, ImageItem } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBullhorn,
  faBusinessTime,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const PagesCard = ({
  heading,
  subheading,
  images = [],
  bottomImages = [],
  overlayText,
  text,
  listItems = [],
}: CardData): React.JSX.Element => {
  const listIcons = [faBusinessTime, faLocationDot, faBullhorn, faClipboardCheck];

  const headingElement = heading ? (
    <h2 className={styles.cardWrapperHeading}>{heading}</h2>
  ) : null;

  const subheadingElement = subheading ? (
    <h3 className={styles.cardWrapperSubheading}>{subheading}</h3>
  ) : null;

  const imageListElement = images.length > 0 ? (
    <ul className={styles.imageList}>
      {images.map((img: ImageItem, idx: number) => (
        <li key={img.id} className={styles.imageListItem}>
          <picture className={styles.imageTop}>
            <source srcSet={img.imageWebp} type="image/webp" />
            <img
              src={img.imageAvif}
              alt={img.imageAlt}
              className={`${styles.imageTop} topImage`}
              fetchPriority="high"
              style={
                img.imagePosition
                  ? { objectPosition: img.imagePosition }
                  : undefined
              }
            />
          </picture>
          {overlayText && idx === 0 && (
            <span className={styles.overlayText}>{overlayText}</span>
          )}
        </li>
      ))}
    </ul>
  ) : null;

  const textElement = text
    ? text.split(/\n{2,}/).map((paragraph) => (
        <p key={paragraph} className={styles.cardWrapperText}>
          {paragraph}
        </p>
      ))
    : null;

  const listElement =
    listItems.length > 0 ? (
      <ul className={styles.list}>
        {listItems.map((item, i) => (
          <li key={item.id} className={styles.listItem}>
            <FontAwesomeIcon
              icon={listIcons[i % listIcons.length]}
              className={styles.listIcon}
            />
            {item.text}
          </li>
        ))}
      </ul>
    ) : null;

  const bottomImageElement = bottomImages.length > 0 ? (
    <ul className={`${styles.imageList} ${styles.bottomImageList}`}>
      {bottomImages.map((img: ImageItem) => (
        <li key={img.id} className={styles.imageListItem}>
          <picture className={styles.imageBottom}>
            <source srcSet={img.imageWebp} type="image/webp" />
            <img
              src={img.imageAvif}
              alt={img.imageAlt}
              loading="lazy"
              style={
                img.imagePosition
                  ? { objectPosition: img.imagePosition }
                  : undefined
              }
            />
          </picture>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <section className={styles.pageCardsSection}>
      <div className={styles.pageCardsSectionCardWrapper}>
        {imageListElement}
        {headingElement}
        {subheadingElement}
        <div className={styles.cardWrapperTextGroup}>
          {textElement}
          {listElement}
          {bottomImageElement}
        </div>
      </div>
    </section>
  );
};

export default PagesCard;
