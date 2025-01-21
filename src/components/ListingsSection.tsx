'use client';
import React, { useState } from "react";
import styles from "../styles/listingsSection.module.css";
import FilterButton from "./FilterButton";
import ListingCard from "./ListingCard";
import TitleBox from "./TitleBox";
import mockListingData from "../data/listings";

type FilterType = "All"|"Sell"|"Rent";

const filterButtons = ["All", "Sell", "Rent"] as FilterType[];

const ListingsSection = () => {
  const [filter, setFilter] = useState<FilterType>("All");

  // Filtrelenmiş veriyi hesaplama
  const filteredListings = mockListingData.filter((listing: { type: string; }) =>
    filter === "All" ? true : listing.type === filter
  );

  return (
    <section className={styles.listingsSection} id="listings">
      {/* Başlık Alanı */}
      <div className={styles.upperContainer}>
        <div className={styles.leftSide}>
          <TitleBox
            upperText="Checkout Our New"
            titleText="Latest Listed Properties"
            titleDescription="Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus."
          />
        </div>

        {/* Filtre Butonları */}
        <div className={styles.rightSide}>
          <div className={styles.filters}>
            {filterButtons.map((btn) => (
              <FilterButton
                key={btn}
                type={btn}
                isActive={filter === btn}
                onClick={() => setFilter(btn)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Listeleme Kartları */}
      <div className={[styles.cardGrid, 'no-scrollbar'].join(' ')}>
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
        <button
          className={styles.viewMorePropertiesButton}
        >
          View more properties
        </button>
      </div>

    </section>
  );
};

export default ListingsSection;
