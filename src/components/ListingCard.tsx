import React from "react";
import styles from "../styles/listingCard.module.css";

interface Listing {
  image: string;
  label: string;
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

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={listing.image} alt={listing.title} className={styles.image} />
        <span
          className={styles.label}
          style={{ backgroundColor: listing.labelColor }}
        >
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
