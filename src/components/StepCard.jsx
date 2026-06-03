import clsx from "clsx";
import styles from "./StepCard.module.css";
function StepCard({ icon: Icon, title, description, active }) {
  return (
    <div className={`${styles.card} ${active ? styles.activeCard : ""}`}>
      <div className={clsx(styles.icon, active && styles.activeIcon)}>
        <Icon size={28} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default StepCard;
