import { ArrowRight } from "lucide-react";
import styles from "./TopCompanies.module.css";
import CompanyCard from "./CompanyCard";

function TopCompanies() {
  const companies = [
    {
      id: 1,
      name: "Dribbble",
      location: "Dhaka, Bangladesh",
      openings: 3,
      featured: true,
    },

    {
      id: 2,
      name: "Google",
      location: "California, USA",
      openings: 12,
    },

    {
      id: 3,
      name: "Slack",
      location: "New York, USA",
      openings: 5,
    },

    {
      id: 4,
      name: "Airbnb",
      location: "San Francisco, USA",
      openings: 7,
    },

    {
      id: 5,
      name: "Spotify",
      location: "Stockholm, Sweden",
      openings: 9,
    },

    {
      id: 6,
      name: "Figma",
      location: "San Francisco, USA",
      openings: 4,
    },
  ];
  return (
    <section className={styles.topCompanies}>
      <div className={styles.header}>
        <h2>Top Companies</h2>
        <button className={styles.viewAll}>
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.grid}>
        {companies.map((company) => (
          <CompanyCard key={company.id} {...company} />
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;
