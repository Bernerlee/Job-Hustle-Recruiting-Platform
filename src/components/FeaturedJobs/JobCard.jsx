import clsx from "clsx";
import styles from "./JobCard.module.css";
import { Bookmark, Building2, MapPin } from "lucide-react";

function JobCard({ title, type, salary, company, location, featured }) {
  return (
    <div className={clsx(styles.card, featured && styles.featuredCard)}>
      <h3>{title}</h3>

      <div className={styles.meta}>
        <span className={styles.badge}>{type}</span>
        <span className={styles.salary}>Salary: {salary}</span>
      </div>

      <div className={styles.companyRow}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Building2 size={20} />
          </div>

          <div>
            <h4>{company}</h4>

            <div className={styles.location}>
              <MapPin size={14} />

              <span>{location}</span>
            </div>
          </div>
        </div>

        <Bookmark size={18} />
      </div>
    </div>
  );
}

export default JobCard;
