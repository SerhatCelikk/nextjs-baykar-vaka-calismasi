import React from "react";
import styles from "../styles/navigationButtons.module.css";

const NavigationButtons = () => {
  return (
    <div className={styles.navigationButtons}>
      <button className={styles.button}>←</button>
      <button className={styles.button}>→</button>
    </div>
  );
};

export default NavigationButtons;
