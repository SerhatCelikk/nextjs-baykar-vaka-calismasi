import React from "react";
import styles from "../styles/testimonialCard.module.css";

interface TestimonialCardProps {
  text: string;
  name: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, rating, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.quoteIcon}>
        <img src="/icons/apostrophe.svg" alt="quote" />
      </div>
      <p className={styles.text}>{text}</p>
      <hr className={styles.divider} />
      <div className={styles.userContainer}>
        <div className={styles.userInfo}>
          <img src={image} alt={name} className={styles.userImage} />
          <div className={styles.userDetails}>
            <p className={styles.name}>{name}</p>
            <div className={styles.rating}>
              {Array(rating)
                .fill(0)
                .map((_, index) => (
                  <span key={index} className={styles.star}>
                    <img src="/icons/star-filled.svg" alt="filled-star" />
                  </span>
                ))}
              {
                Array(5 - rating)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className={styles.star}>
                      <img src="/icons/star-empty.svg" alt="empty-star" />
                    </span>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
