import React from "react";
import styles from "../styles/footer.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.linksSection}>
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Listings</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Become a Agent</li>
        </ul>
      </div>
      <div className={styles.linksSection}>
        <h3>Discovery</h3>
        <ul>
          <li>Canada</li>
          <li>United States</li>
          <li>Germany</li>
          <li>Africa</li>
          <li>India</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
