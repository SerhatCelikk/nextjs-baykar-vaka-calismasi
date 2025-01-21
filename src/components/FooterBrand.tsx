import React from "react";
import styles from "../styles/footer.module.css";

const FooterBrand = () => {
  return (
    <div className={styles.footerBrand}>
      <div className={styles.logo}>
        <img src="/icons/footer-logo.svg" alt="Logo" />
      </div>
      <p className={styles.description}>
        Lorem ipsum has been the industry standard dummy text.
      </p>
      <div className={styles.contactInfo}>
        <a href="tel:+90123 45 67">
        <p>
          <img src="/icons/phone-dark.svg" alt="Phone" /> +90123 45 67
        </p>
        </a>
        <a href="mailto:mail@mail.com">
        <p>
          <img src="/icons/email-dark.svg" alt="Email" /> mail@mail.com
        </p>
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
