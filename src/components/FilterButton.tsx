import React from "react";
import styles from "../styles/filterButton.module.css";

interface FilterButtonProps {
  type: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ type, isActive, onClick }) => {
  return (
    <button
      className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {type}
    </button>
  );
};

export default FilterButton;
