import styles from "./PopularVacancies.module.css";
function PopularVacancies() {
  const vacancies = [
    {
      title: "Anesthesiologists",
      openings: "45,904 Open Positions",
    },
    {
      title: "Surgeons",
      openings: "50,364 Open Positions",
    },
    {
      title: "Obstetricians-Gynecologists",
      openings: "4,339 Open Positions",
    },
    {
      title: "Orthodontists",
      openings: "20,079 Open Positions",
    },
    {
      title: "Maxillofacial Surgeons",
      openings: "74,875 Open Positions",
    },
    {
      title: "Software Developer",
      openings: "43,359 Open Positions",
    },
    {
      title: "Psychiatrists",
      openings: "18,599 Open Positions",
    },
    {
      title: "Data Scientist",
      openings: "28,200 Open Positions",
      active: true,
    },
    {
      title: "Financial Manager",
      openings: "61,391 Open Positions",
    },
    {
      title: "Management Analysis",
      openings: "93,046 Open Positions",
    },
    {
      title: "IT Manager",
      openings: "50,963 Open Positions",
    },
    {
      title: "Operations Research Analysis",
      openings: "16,627 Open Positions",
    },
  ];
  return (
    <section className={styles.section}>
      <h2>Most Popular Vacancies</h2>
      <div className={styles.grid}>
        {vacancies.map((job) => (
          <div className={styles.item} key={job.title}>
            <h4 className={job.active ? styles.active : ""}>{job.title}</h4>
            <p>{job.openings}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularVacancies;
