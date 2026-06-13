import styles from './JobDetailsDetail.module.css'

function JobDetailsDetail() {
  return (
    <div className={styles.wrapper}> 
      <div>
        <p>Job Details</p>
      </div>

      <div className={styles.right}>
        <p>Home</p>
        <span>/</span>
        <p>Find Job</p>
        <span>/</span>
        <p>Graphics & Design</p>
        <span>/</span>
        <p>Job Details</p>
      </div>
    </div>
  );
}

export default JobDetailsDetail;
