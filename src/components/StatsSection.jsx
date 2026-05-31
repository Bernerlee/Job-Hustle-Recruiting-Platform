import { BriefcaseBusiness, Building2, User } from "lucide-react";
import styles from "./StatsSection.module.css";
import StatCard from "./StatCard";

function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: BriefcaseBusiness,
      count: "1,75,324",
      label: "Live Job",
      active: false,
    },
    {
      id: 2,
      icon: Building2,
      count: "97, 354",
      label: "Companies",
      active: true,
    },
    {
      id: 3,
      icon: User,
      count: "38,47,154",
      label: "Candidates",
      active: false,
    },
    {
      id: 4,
      icon: BriefcaseBusiness,
      count: "38,47,154",
      label: "New Jobs",
      active: false,
    },
  ];
  return (
    <div className={styles.statsContainer}>
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          icon={stat.icon}
          count={stat.count}
          label={stat.label}
          active={stat.active}
        />
      ))}
    </div>
  );
}

export default StatsSection;
