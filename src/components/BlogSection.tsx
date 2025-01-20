'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/blogSection.module.css";

const blogs = [
  {
    id: 1,
    date: "28 Tue",
    title: "Top 10 Home Buying Mistakes to Avoid",
    description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    image: "/images/blog/1.png",
  },
  {
    id: 2,
    date: "08 Mon",
    title: "How to Stage Your Home for a Quick Sale",
    description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    image: "/images/blog/2.png",
  },
  {
    id: 3,
    date: "26 Wed",
    title: "5 Tips for First-Time Home Sellers",
    description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    image: "/images/blog/3.png",
  },
  {
    id: 4,
    date: "14 Fri",
    title: "How to Choose the Right Neighborhood for You",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    image: "/images/blog/2.png",
  }
];

const BlogSection = () => {
  return (
    <section className={styles.blogSection} id="blogs">
      <div className={styles.header}>
        <h3 className={styles.subTitle}>What’s Trending</h3>
        <h2 className={styles.title}>Latest Blogs & Posts</h2>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} ${styles.customBullet}"></span>`,
          }}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={
            {
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1444: {
                slidesPerView: 3,
              },
            }
          }
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}

          className={styles.slider}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className={styles.slide}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left and Right Navigation */}
        <button className={`${styles.prevButton}`}>
          <img src="/icons/arrow-left.svg" alt="Previous" />
        </button>
        <button className={`${styles.nextButton}`}>
          <img src="/icons/arrow-right.svg" alt="Next" />
        </button>
      </div>

      {/*Mobil için*/}
      <div className={styles.mobileBlogCardContainer}>
        {
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
        <button
          className={styles.viewMoreBlogsButton}
        >
          View more blogs
        </button>
      </div>

    </section>
  );
};

export default BlogSection;
