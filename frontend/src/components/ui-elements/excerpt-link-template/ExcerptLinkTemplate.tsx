import { Link, useLocation } from "react-router-dom";
import type { HomeLink } from "../../../data/homeLinks";
import "../../../styles/global.css";
import styles from "./ExerptLinkTemplate.module.css";

type Props = {
  links: readonly HomeLink[];
};

const ExcerptLinkTemplate = ({ links }: Props): React.JSX.Element => {
  const { pathname } = useLocation();

  let imageWrapperClass = styles.listItemCardImageWrapper;
  let showOverlay = false;
  switch (pathname) {
    case "/home-one":
      showOverlay = true;
      break;
    case "/":
    case "/home-three":
      imageWrapperClass += ` ${styles.listItemCardImageWrapperGold}`;
      break;
    default:
      break;
  }

  return (
    <section className={styles.linkSection}>
      <ul className={styles.list}>
        {links.map(
          ({
            slug,
            linkTo,
            heading,
            subheading,
            preview,
            imageWebp,
            imageAvif,
            imageAlt,
            imagePosition,
          }) => (
            <li key={slug} className={styles.listItem}>
              <Link
                to={`/${linkTo ?? slug}`}
                className={`${styles.listItemLink} ${styles.listItemGrid}`}
              >
                {/* Row One */}
                {imageWebp && imageAvif && (
                  <div className={imageWrapperClass}>
                    <picture>
                      <source srcSet={imageWebp} type="image/webp" />
                      <img
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
                    {showOverlay && (
                      <div className={styles.listItemOverlay} aria-hidden="true">
                        <span className={styles.listItemOverlayText}>
                          {heading}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {/* Row Two */}
                <h2
                  className={
                    showOverlay
                      ? `${styles.listItemHeading} sr-only`
                      : styles.listItemHeading
                  }
                >
                  {heading}
                </h2>
                {/* Row Three */}
                {subheading && (
                  <h3 className={styles.listItemSubheading}>{subheading}</h3>
                )}
                {/* Row Four */}
                {preview && <p className={styles.listItemPreview}>{preview}</p>}
              </Link>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default ExcerptLinkTemplate;
