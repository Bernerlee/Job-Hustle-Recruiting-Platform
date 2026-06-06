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
          <div>
            <h3>{name}</h3>
            {featured && <span>Featured</span>}
          </div>
          <div>
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <button>Open Position ({openings})</button>
    </div>
  );
}

export default CompanyCard;
