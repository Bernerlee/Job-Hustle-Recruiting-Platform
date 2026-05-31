import styles from "./StatCard.module.css";

function StatCard({ icon: Icon, count, label, active }) {
  return (
    <div className={`${styles.card} `}>
      <div
        className={`${styles.iconContainer} ${active ? styles.activeIcon : ""}`}
      >
        <Icon size={32} />
      </div>

      <div>
        <h3>{count}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
