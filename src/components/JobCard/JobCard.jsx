import { MapPin, Bookmark } from "lucide-react";

import styles from "./JobCard.module.css";

function JobCard({ title, type, salary, company, location }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>

      <div className={styles.jobInfo}>
        <span
          className={`${styles.badge}
          ${styles[type.toLowerCase().replace("-", "")]}`}
        >
          {type}
        </span>

        <span>Salary: {salary}</span>
      </div>

      <div className={styles.footer}>
        <div className={styles.company}>
          <img src="/google.png" alt="" />

          <div>
            <h4>{company}</h4>

            <p>
              <MapPin size={14} />
              {location}
            </p>
          </div>
        </div>

        <Bookmark size={18} />
      </div>
    </div>
  );
}

export default JobCard;
