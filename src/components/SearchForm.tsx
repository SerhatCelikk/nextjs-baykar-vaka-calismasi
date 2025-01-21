"use client";
import React, {useState} from "react";
import styles from "../styles/searchForm.module.css";

type SearchType = "sale" | "rent";

const SearchForm = () => {
  const [searchType, setSearchType] = useState<SearchType>("sale");

  const handleSearchType = (type: SearchType) => {
    setSearchType(type);
  };

  return (
    <div className={styles.searchFormContainer}>

      <div className={styles.formBox}>

        {/* For Sale and For Rent two button left sıde and rıght sıde */}
        <div className={styles.searchType}>
            <button 
              className={searchType === "sale" ? [styles.searchTypeButton, styles.searchTypeButtonActive].join(" ") : styles.searchTypeButton}
              onClick={() => handleSearchType("sale")}
            >
              For Sale
            </button>
            <button 
              className={searchType === "rent" ? [styles.searchTypeButton, styles.searchTypeButtonActive].join(" ") : styles.searchTypeButton}
              onClick={() => handleSearchType("rent")}
            >
              For Rent
            </button>
        </div>

        <form className={styles.searchForm}>

        <input
          type="text"
          placeholder="New York, San Francisco, etc"
          className={styles.input}
        />
        <select className={styles.selectionInput}>
          <option>Select Property Type</option>
        </select>
        <select className={styles.selectionInput}>
          <option>Select Rooms</option>
        </select>

        {/* Advance Search */}
        <div className={styles.advanceSearch}>
          <span className={styles.icon}>
            {/* Simge (örneğin bir SVG veya font icon) */}
            <img src="/icons/advanced-settings.svg" alt="Advance Search" />
          </span>
          <a href="#" className={styles.advanceSearchLink}>
            Advance Search
          </a>
        </div>

        <button type="submit" className={styles.searchButton}>
          <img src="/icons/search.svg" alt="Search" className={styles.searchIcon} />
          <p className={styles.searchButtonText}>Search</p>
        </button>
      </form>
      </div>
    </div>
  );
}

export default SearchForm;