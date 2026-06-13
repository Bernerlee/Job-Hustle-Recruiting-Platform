import styles from "./FindJob.module.css";

function FindJob() {
  return (
    <div className={styles.findjobWrapper}>
      <div>
        <p>Find Job</p>
      </div>
      <div className={styles.findjob}>
        <p className={styles.home}>Home</p>
        <span>/</span>
        <p>Find Job</p>
      </div>
    </div>
  );
}

export default FindJob;
