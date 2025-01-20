import React from "react";
import styles from "../styles/featureItem.module.css";

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.featureItemContainer}>
      <div className={styles.featureItem}>
        <img src={icon} alt={title} className={styles.icon} />
        <div>
          <h4 className={styles.featureTitle}>{title}</h4>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
