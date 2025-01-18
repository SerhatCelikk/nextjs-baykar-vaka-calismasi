"use client";
import React, { useState } from "react";
import styles from "../styles/navbar.module.css"; // CSS modülü içe aktarılıyor

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    const handleItemClick = (item: string) => {
      setActiveItem(item); // Tıklanan öğeyi aktif yap
    };

    return (
        <nav className={styles.navbar}>
          <div className={styles.navbarContainer}>
    
            {/* Menü (Masaüstünde Solda) */}
            <ul
              className={`${styles.menuList} ${isOpen ? styles.menuListOpen : ""}`}
            >
              <li className={`${styles.menuItem} ${
                activeItem === 'Home' ? styles.menuItemActive : ""
              }`}
                onClick={() => handleItemClick("Home")}
              >
                <a href="#">Home</a>
              </li>
              <li className={`${styles.menuItem} ${
                activeItem === 'About' ? styles.menuItemActive : ""
              }`}
                onClick={() => handleItemClick("About")}
              >
                <a href="#">About</a>
              </li>
              <li className={`${styles.menuItem} ${
                activeItem === 'Listings' ? styles.menuItemActive : ""
              }`}
                onClick={() => handleItemClick("Listings")}
                >
                <a href="#">Listings</a>
              </li>
              <li className={`${styles.menuItem} ${
                activeItem === 'Services' ? styles.menuItemActive : ""
              }`}
                onClick={() => handleItemClick("Services")}
                >
                <a href="#">Services</a>
              </li>
              <li className={`${styles.menuItem} ${
                activeItem === 'Blogs' ? styles.menuItemActive : ""
              }`}
                onClick={() => handleItemClick("Blogs")}
                >
                <a href="#">Blogs</a>
              </li>
            </ul>

           {/* Logo Ortada */}
            <div className={styles.logo}>
              <img src="/icons/logo.svg" alt="Logo" />
            </div>
    
            {/* Login/Register ve Add Listing (Masaüstünde Sağda) */}
            <div className={styles.authLinksDesktop}>
              <a href="#" className={`${styles.menuItem} ${
                activeItem === 'loginRegister' ? styles.menuItemActive : ""
              }`}
                onClick={() => handleItemClick("loginRegister")}
                >
                <img src="/icons/login.svg" alt="Login" className={styles.loginIcon} />
                Login/Register
              </a>
              <a href="#" className={styles.addListing}>
                <img src="/icons/add-listing.svg" alt="Add Listing" className={styles.addListingIcon}/>
                Add Listing
              </a>
            </div>
    
            {/* Hamburger Menü (Mobilde Sağda) */}
            <button
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>
      );
}
export default Navbar;