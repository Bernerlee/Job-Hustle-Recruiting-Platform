import { Star } from "lucide-react";
import styles from "./TestimonialCard.module.css";

function TestimonialCard({ name, role, image, review }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={18} fill="#f59e0b" color="#f59e0b" />
        ))}
      </div>

      <p className={styles.review}>"{review}"</p>
      <div className={styles.footer}>
        <div className={styles.user}>
          <img src={image} alt={name} />

          <div>
            <h4>{name}</h4>

            <span>{role}</span>
          </div>

          <div></div>
        </div>
        <span className={styles.quote}>"</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
