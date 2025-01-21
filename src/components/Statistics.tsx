import React from "react";
import styles from "../styles/statistics.module.css";

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      {/* Sol Kart */}
      <div className={styles.card1}>
        <div className={styles.avatars}>
          <img src="/images/testimonials/user1.png" alt="User 1" className={styles.avatar} />
          <img src="/images/testimonials/user2.png" alt="User 2" className={styles.avatar} />
          <img src="/images/testimonials/user3.png" alt="User 3" className={styles.avatar} />
          <img src="/images/testimonials/user4.png" alt="User 4" className={styles.avatar} />
          <img src="/images/testimonials/user5.png" alt="User 5" className={styles.avatar} />
          <span className={styles.more}>+</span>
        </div>
        <p className={styles.text}>
          72k+ Happy Customers
        </p>
      </div>

      {/* Sağ Kart */}
      <div className={styles.card2}>
        <img
          src="/images/testimonials/home1.png"
          alt="House Icon"
          className={styles.houseIcon}
        />
        <p className={styles.text}>
          200+ New Listings Everyday!
        </p>
      </div>
    </div>
  );
};

export default Statistics;
