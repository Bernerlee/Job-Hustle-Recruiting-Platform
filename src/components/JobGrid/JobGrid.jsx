import JobCard from "../JobCard/JobCard";
import styles from "./JobGrid.module.css";

function JobGrid() {
  const jobs = [
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

    {
      id: 7,
      title: "Software Engineer",
      type: "FULL-TIME",
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
    },

    {
      id: 10,
      title: "UI/UX Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 11,
      title: "Product Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 12,
      title: "Networking Engineer",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 13,
      title: "Front End Developer",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 14,
      title: "Senior UX Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },

    {
      id: 15,
      title: "Marketing Manager",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <div className={styles.grid}>
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default JobGrid;
