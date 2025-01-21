'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/heroSlider.module.css";

const HeroSlider = ({ images }: { images: string[] }) => {
  return (
    <div className={styles.sliderContainer}>
      {/* Swiper Slider */}
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
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className={styles.mySwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Özel Navigation Düğmeleri */}
      <button className={styles.prevButton}>
        <img src="/icons/left.svg" alt="Previous" />
      </button>
      <button className={styles.nextButton}>
        <img src="/icons/right.svg" alt="Next" />
      </button>
    </div>
  );
};

export default HeroSlider;
