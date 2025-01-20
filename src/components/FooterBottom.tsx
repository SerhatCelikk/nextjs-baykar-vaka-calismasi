import React from "react";
import styles from "../styles/footer.module.css";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <p>© Company – All rights reserved</p>
      <div className={styles.terms}>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>Disclaimer</span>
      </div>
    </div>
  );
};

export default FooterBottom;
