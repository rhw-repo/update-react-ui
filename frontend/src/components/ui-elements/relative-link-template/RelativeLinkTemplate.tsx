import { useLocation, Link } from "react-router-dom";
import type { HomeLink } from "../../../data/homeLinks";
import styles from "./RelativeLinkTemplate.module.css";

type Props = {
  links: readonly HomeLink[];
};

const RelativeLinkTemplate = ({ links }: Props): React.JSX.Element => {
  const { pathname } = useLocation();

  let overlayTextClass = styles.listItemOverlayText;
  switch (pathname) {
    case "/":
      overlayTextClass += ` ${styles["listItemOverlayText--defaultHome"]}`;
      break;
    case "/home-one":
      overlayTextClass += ` ${styles["listItemOverlayText--homeOne"]}`;
      break;
    default:
      break;
  }

  return (
    <section className={styles.linkSection}>
      <ul className={styles.list}>
        {links.map(
          ({ slug, linkTo, heading, imageWebp, imageAvif, imageAlt, imagePosition }) => (
          <li key={slug} className={styles.listItem}>
            <Link
              to={`/${linkTo ?? slug}`}
              className={`${styles.listItemLink} ${styles.listItemGrid}`}
            >
              <div className={styles.listItemImageWrapper}>
                {imageWebp && imageAvif && (
                  <picture>
                    <source srcSet={imageWebp} type="image/webp" />
                    <img
                      fetchPriority="high"
                      src={imageAvif}
                      alt={imageAlt!}
                      className={styles.cardImageWrapperCardImage}
                      style={
                        imagePosition
                          ? { objectPosition: imagePosition }
                          : undefined
                      }
                    />
                  </picture>
                )}
                <div className={styles.listItemOverlay}>
                  <span className={overlayTextClass}>{heading}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelativeLinkTemplate;
