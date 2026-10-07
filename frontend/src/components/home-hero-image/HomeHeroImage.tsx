import { useLocation } from "react-router-dom";
import styles from "./HomeHeroImage.module.css";
import heroWebp from "../../assets/images/pexels-lukas-dlutko-1278617-2440257.webp";
import heroAvif500 from "../../assets/images/pexels-lukas-dlutko-1278617-2440257_500.avif";
import heroWebp500 from "../../assets/images/pexels-lukas-dlutko-1278617-2440257_500.webp";

const HomeHeroImage = () => {
  const { pathname } = useLocation();

  let overlayTextWrapperClass = styles.heroImageOverlayWrapper;
  let overlayTextClass = styles.heroImageOverlayText;
  let showOverlay = true;

  switch (pathname) {
    case "/home-two":
      showOverlay = false;
      break;
    case "/home-one":
      overlayTextWrapperClass = ` ${styles.heroImageOverlayWrapperTransparent}`;
      overlayTextClass = ` ${styles.heroImageOverlayTextTransparent}`;
      break;
    default:
      overlayTextWrapperClass = styles.heroImageOverlayWrapper;
      overlayTextClass = styles.heroImageOverlayText;
      break;
  }

  return (
    <section>
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageSection}>
          <picture className={styles.heroImagePicture}>
            <source
              srcSet={`${heroWebp500} 500w,${heroWebp} 1200w`}
              type="image/webp"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            {/* Decorative background photo: empty alt so screen readers skip it */}
            <img
              fetchPriority="high"
              className={styles.heroImageBackgroundImage}
              src={heroAvif500}
              alt=""
            />
          </picture>

          {showOverlay && (
            <div className={overlayTextWrapperClass}>
              <h2 className={overlayTextClass}>
                Growth Investing
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroImage;
