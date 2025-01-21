'Use Client';
import React from "react";
import styles from "../styles/listingCard.module.css";

interface Listing {
  image: string;
  label: 'Popular' | 'New Listing' | 'Discounted Price';
  labelColor: string;
  price: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
}

interface ListingCardProps {
  listing: Listing;
}
//Populer = rgba(255, 225, 225, 1) bg rgba(255, 17, 17, 1) text and Fire icon
const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const ListingsLabelTypes = {
    "Popular": {
      bgColor: "rgba(255, 225, 225, 1)",
      textColor: "rgba(255, 17, 17, 1)",
      icon: "/icons/fire.svg",
    },
    "New Listing": {
      bgColor: "rgba(215, 238, 255, 1)",
      textColor: "rgba(17, 155, 255, 1)",
      icon: "/icons/home.svg",
    },
    "Discounted Price": {
      bgColor: "rgba(241, 255, 241, 1)",
      textColor: "rgba(0, 206, 58, 1)",
      icon: "/icons/dollar.svg",
    },
  };


  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={listing.image} alt={listing.title} className={styles.image} />
        <span
          className={styles.label}
          style={{
            backgroundColor: ListingsLabelTypes[listing.label].bgColor,
            color: ListingsLabelTypes[listing.label].textColor
          }}
        >
          <img
            src={ListingsLabelTypes[listing.label].icon}
            alt={listing.label}
          />
          {listing.label}
        </span>
      </div>
      <div className={styles.cardContent}>
        <h4 className={styles.price}>{listing.price}</h4>
        <h5 className={styles.title}>{listing.title}</h5>
        <p className={styles.address}>{listing.address}</p>
        <div className={styles.features}>
          <img src="/icons/bed.svg" alt="bed" />
          <span>
            {listing.beds} Beds</span>
          <img src="/icons/bathroom.svg" alt="bath" />
          <span>
            {listing.baths} Bath</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
