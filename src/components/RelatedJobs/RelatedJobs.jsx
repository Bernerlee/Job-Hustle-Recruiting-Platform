import JobCard from "../JobCard/JobCard";
import styles from "./RelatedJobs.module.css";

function RelatedJobs() {
  const relatedJobs = [
    {
      id: 1,
      title: "Technical Support Specialist",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 2,
      title: "Senior UX Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 3,
      title: "Marketing Officer",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 4,
      title: "Junior Graphic Designer",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 5,
      title: "Interaction Designer",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 6,
      title: "Project Manager",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
  ];

  return (
    <section className={styles.relatedJobs}>
      <div className={styles.container}>
        <h2>Related Jobs</h2>

        <div className={styles.grid}>
          {relatedJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedJobs;
