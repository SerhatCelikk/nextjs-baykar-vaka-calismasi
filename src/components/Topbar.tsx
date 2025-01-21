import React from "react";
import styles from "../styles/topbar.module.css";


const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarContainer}>
        {/* Sol taraf */}
        <div className={styles.topbarLeft}>
          <img src="/icons/location.svg" alt="Location Icon" className={styles.topbarIcon} />
          <span>Lorem Ipsum has been the industry's standard dummy </span>
        </div>
        {/* Sağ taraf */}
        <div className={styles.topbarRight}>
          <div className={styles.topbarPhone}>
            <img src="/icons/phone.svg" alt="Phone Icon" className={styles.topbarIcon} />
            <a href="tel:+901234567" className={styles.topbarLink}>
              +90 123 45 67
            </a>
          </div>
          <div className={styles.topbarEmail}>
            <img src="/icons/email.svg" alt="Email Icon" className={styles.topbarIcon} />
            <a href="mailto:mail@mail.com" className={styles.topbarLink}>
              mail@mail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;