import { ArrowRight } from "lucide-react";
import styles from "./FeaturedJobs.module.css";
import JobCard from "./JobCard";
function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Technical Support Specialist",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      featured: true,
    },

    {
      id: 2,
      title: "Senior UX Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      featured: true,
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
      title: "Junior Graphics Designer",
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
    {
      id: 7,
      title: "Software Engineer",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 8,
      title: "Visual Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 9,
      title: "Project Manager",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      featured: true,
    },
    {
      id: 10,
      title: "Front-end Developer",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 11,
      title: "Senior UX Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 3,
      title: "Marketing Manager",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <section className={styles.featuredJobs}>
      <div className={styles.header}>
        <h2>Featured Jobs</h2>

        <button className={styles.viewAll}>
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.grid}>
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;
