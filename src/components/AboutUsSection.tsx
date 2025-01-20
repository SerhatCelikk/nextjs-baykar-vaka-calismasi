import React from "react";
import AboutUsGallery from "./AboutUsGallery";
import styles from "../styles/aboutUsSection.module.css";
import TitleBox from "./TitleBox";
import FeatureItem from "./FeatureItem";

const AboutUsSection = () => {
  return (
    <section className={styles.aboutUsSection} id="about">
    <img src="/images/100x100-circle.png" alt="Decorative Circle" className={styles.circle2} />
      
      <div className={styles.aboutUscontainer}>
        <div className={styles.leftSide}>
        <TitleBox
            upperText="WHO ARE WE"
            titleText="Assisting individuals in locating the appropriate real estate."
            titleDescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it "
         />
        <FeatureItem
          icon="/icons/smart-home.svg"
          title="Lorem ipsum has been the"
          description="when an unknown printer took a galley"
         />
         <FeatureItem
          icon="/icons/user-octagon.svg"
          title="Lorem ipsum has been the"
          description="when an unknown printer took a galley"
         />

        </div>
        <div className={styles.rightSide}>
          <AboutUsGallery />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
