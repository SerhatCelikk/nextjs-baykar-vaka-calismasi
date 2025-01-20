'use client';

import React from "react";
import styles from "../styles/footer.module.css";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSubscribe from "./FooterSubscribe";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        
        <div className={styles.footerTop}>
            <FooterBrand />
            <FooterLinks />
            <FooterSubscribe />
        </div>
        <FooterBottom />
    </footer>
  );
};

export default Footer;
