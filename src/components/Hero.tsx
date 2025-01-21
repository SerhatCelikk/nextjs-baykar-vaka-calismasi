import React from "react";
import styles from "../styles/hero.module.css";
import SearchForm from "./SearchForm";
import TitleBox from "./TitleBox";
import HeroSlider from "./HeroSlider";
import Statistics from "./Statistics";

const Hero = () => {
  return (
    <section className={styles.hero} id='home'>

      <img src="/images/60x60-circle.png" alt="Decorative Circle" className={styles.circle} />
      <div className={styles.heroContainer}>
        <div className={styles.heroLeftSide}>
          {/* Sol Alan */}
          <TitleBox
            upperText="REAL ESTATE"
            titleText="Find a perfect home you love..!"
            titleDescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          />
          {/* Görsel */}
          <HeroSlider
            images={[
              "/images/hero-slider/1.png",
              "/images/hero-slider/2.png",
              "/images/hero-slider/3.png",
            ]}
          />
        </div>
        {/* Arama Formu */}
        <div className={styles.heroRightSide}>
          <SearchForm />
        </div>
      </div>
      <Statistics />
    </section>
  );
}

export default Hero;