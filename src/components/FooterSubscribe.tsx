import React from "react";
import styles from "../styles/footer.module.css";

const FooterSubscribe = () => {
  return (
    <div className={styles.footerSubscribe}>
      <h3 className={styles.subscribeText}>Subscribe to our Newsletter!</h3>
      <div className={styles.subscribeForm}>
        <input type="email" placeholder="Email Address" />
        <button className={styles.submitButton}>
          <img src="/icons/arrow-subscribe.svg" alt="Submit" />
        </button>
      </div>
      <div className={styles.socialLinks}>
        <h4>Follow Us on</h4>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscribe;
