import { Search, MapPin, LocateFixed, SlidersHorizontal } from "lucide-react";

import styles from "./JobSearchBar.module.css";

function JobSearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInput}>
        <Search size={20} />

        <input
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
        />
      </div>

      <div className={styles.locationInput}>
        <MapPin size={20} />

        <input type="text" placeholder="City, state or zip code" />
      </div>

      <button className={styles.locationBtn}>
        <LocateFixed size={18} />
      </button>

      <button className={styles.filterBtn}>
        <SlidersHorizontal size={18} />
        Filters
      </button>

      <button className={styles.findBtn}>Find Job</button>
    </div>
  );
}

export default JobSearchBar;
