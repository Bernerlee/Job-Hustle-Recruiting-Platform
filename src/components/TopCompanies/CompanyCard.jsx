import { MapPin, PenTool } from "lucide-react";
import styles from "./CompanyCard.module.css";

function CompanyCard({ name, location, openings, featured }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <PenTool size={22} />
        </div>
        <div>
          <div className={styles.nameRow}>
            <h3>{name}</h3>
            {featured && <span className={styles.badge}>Featured</span>}
          </div>
          <div className={styles.location}>
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <button className={styles.openings}>Open Position ({openings})</button>
    </div>
  );
}

export default CompanyCard;
