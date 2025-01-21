import React from "react";
import styles from "../styles/blogCard.module.css";

const BlogCard = ({ blog }: { blog: { date: string; title: string; description: string; image: string } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={blog.image} alt={blog.title} className={styles.image} />
        <div className={styles.date}>
          <span className={styles.day}>{blog.date.substring(0, 2)} </span>
          <span className={styles.month}>{blog.date.substring(3)}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{blog.title}</h4>
        <p className={styles.description}>{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
