import { MapPin, Search } from "lucide-react";
import styles from "./HeroSearch.module.css";

function HeroSearch() {
  return (
    <div className={styles.searchBar}>
      {/* Job Input */}

      <div className={styles.inputGroup}>
        <Search size={20} />
        <input type="text" placeholder="Job title, Keyword..." />
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Location Input */}
      <div className={styles.inputGroup}>
        <MapPin size={20} />
        <input type="text" placeholder="Your Location" />
      </div>

      {/* Find Job Button */}
      <button className={styles.searchBtn}>Find Job</button>
    </div>
  );
}

export default HeroSearch;
