"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import Topbar from "./Topbar";

type NavbarProps = "Home" | "About" | "Listings" | "Services" | "Blogs";

const navbarItems = ["Home", "About", "Listings", "Services", "Blogs"] as NavbarProps[];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<NavbarProps>("Home");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  const handleItemClick = (item: NavbarProps) => {
    setActiveItem(item);
  };

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.navbarVisible : styles.navbarHidden
      }`}
    >
      <Topbar />
      <div className={styles.navbarContainer}>
        {/* Menü (Masaüstünde Solda) */}
        <ul
          className={`${styles.menuList} ${isOpen ? styles.menuListOpen : ""}`}
        >
          {navbarItems.map((item) => (
            <li
              key={item}
              className={`${styles.menuItem} ${activeItem === item ? styles.menuItemActive : ""
                }`}
              onClick={() => handleItemClick(item)}
            >
              <a href={`#${item.toLowerCase()}`}
              >{item}</a>
            </li>
          ))}
        </ul>

        {/* Logo Ortada */}
        <div className={styles.logo}>
          <img src="/icons/logo.svg" alt="Logo" />
        </div>

        {/* Login/Register ve Add Listing (Masaüstünde Sağda) */}
        <div className={styles.authLinksDesktop}>
          <a
            href="#"
            className={styles.menuItem}
            onClick={() => handleItemClick("Home")}
          >
            <img
              src="/icons/login.svg"
              alt="Login"
              className={styles.loginIcon}
            />
            Login/Register
          </a>
          <a href="#" className={styles.addListing}>
            <img
              src="/icons/add-listing.svg"
              alt="Add Listing"
              className={styles.addListingIcon}
            />
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
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
