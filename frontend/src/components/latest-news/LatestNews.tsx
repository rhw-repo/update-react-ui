import styles from "./LatestNews.module.css";
import AbsoluteLinkTemplate from "../ui-elements/absolute-link-template/AbsoluteLinkTemplate";
import { noIconLinks } from "../../data/absoluteLinks";
import { cardContent } from "../../data/cardContent";

const LatestNews = (): React.JSX.Element => {
  const [latestNewsCard] = cardContent.filter(
    (c) => c.section === "latest-news",
  );

  const latestNewsLinks = noIconLinks.filter(
    (l) => l.section === "latest-news",
  );

  const latestNewsItems = latestNewsLinks.map((link) => {
    const { id, name, url, thumbnailWebp, thumbnailAvif } = link;

    return (
      <li key={id} className={styles.newsListItem}>
        <AbsoluteLinkTemplate
          url={url}
          className={`${styles.newsListLink} interactive--state`}
        >
          <div className={styles.newsListLink}>
            {thumbnailWebp && thumbnailAvif && (
              <picture className={styles.thumbnailWrapper}>
                <source srcSet={link.thumbnailWebp} type="image/webp" />
                <img
                  src={link.thumbnailAvif}
                  className={styles.thumbnail}
                  role="presentation"
                />
              </picture>
            )}
            <span className={styles.linkText}>{name}</span>
          </div>
        </AbsoluteLinkTemplate>
      </li>
    );
  });

  const { heading } = latestNewsCard;

  return (
    <section className={styles.latestNewsSection}>
      <div className={styles.latestNewsCardWrapper}>
        <h2 className={styles.latestNewsHeading}>{heading}</h2>

        <ul className={styles.newsList}>{latestNewsItems}</ul>
      </div>
    </section>
  );
};

export default LatestNews;
