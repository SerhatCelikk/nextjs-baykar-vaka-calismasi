import React from "react";
import styles from "../styles/titleBox.module.css";

const TitleBox = ({ upperText, titleText, titleDescription }: Readonly<{ upperText: string, titleText: string, titleDescription: string }>) => {
  return (
    <div className={styles.titleBox}>
      <div className={styles.upperText}>
        {upperText}
      </div>
      <h1 className={styles.titleText}>
        {titleText}
      </h1>
      <p className={styles.descriptionText}>
        {titleDescription}
      </p>
    </div>
  );
};

export default TitleBox;