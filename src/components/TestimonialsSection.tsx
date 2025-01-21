'use client';
import React from "react";
import styles from "../styles/testimonialsSection.module.css";
import TestimonialCard from "./TestimonialCard";
import TitleBox from "./TitleBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonials from "@/data/testimonials";
const TestimonialsSection = () => {
    return (
        <section className={styles.testimonialsSection} id='services'>
            <div className={styles.testimonialscontainer}>
                <div className={styles.leftSide}>
                    <TitleBox
                        upperText="TESTIMONIALS"
                        titleText="Look What Our Customers Say!"
                        titleDescription="Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque."
                    />
                    <div className={styles.navigationButtonsContainer}>
                        <button className={styles.prevButton}>
                            <img src="/icons/arrow-left.svg" alt="Previous" />
                        </button>
                        <button className={styles.nextButton}>
                            <img src="/icons/arrow-right.svg" alt="Next" />
                        </button>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.sliderContainer}>
                        {/* Swiper Slider */}
                        <Swiper
                            centeredSlides={true}
                            centeredSlidesBounds={true}
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
                            direction={'vertical'}
                            className={styles.mySwiper}
                            autoHeight={true}
                            mousewheel={true}
                            loop={true}
                        >
                            {testimonials.map((data, index) => (
                                <SwiperSlide key={index} className="items-center">
                                    <TestimonialCard
                                        text={data.text}
                                        name={data.name}
                                        rating={data.rating}
                                        image={data.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Özel Navigation Düğmeleri */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
