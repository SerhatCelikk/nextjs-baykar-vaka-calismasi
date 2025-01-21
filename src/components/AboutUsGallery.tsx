import React from "react";
import styles from "../styles/aboutUsGallery.module.css";

const AboutUsGallery = () => {
  return (
    <div className={styles.aboutUsGallery}>
      <img src="/images/60x60-circle.png" alt="Decorative Circle" className={styles.circle3} />
      <div className={styles.mainImageWrapper}>
        <img
          src="/images/about-us-gallery/1.png"
          alt="House 1"
          className={styles.mainImage}
        />
      </div>
      <div className={styles.smallImages}>
        <img
          src="/images/about-us-gallery/2.png"
          alt="House 2"
          className={styles.image}
        />
        <img
          src="/images/about-us-gallery/3.png"
          alt="House 3"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutUsGallery;
