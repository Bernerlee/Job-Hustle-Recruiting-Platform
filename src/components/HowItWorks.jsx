import { BadgeCheck, Search, Upload, UserPlus } from "lucide-react";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Aliquam facilisis egestas sapien",
    },
    {
      icon: Upload,
      title: "Upload CV/Resume",
      description: "Curabitur sit amet maximus ligula.",
      active: true,
    },
    {
      icon: Search,
      title: "Find suitable job",
      description: "Phasellus quis eleifend ex.",
    },

    {
      icon: BadgeCheck,
      title: "Apply job",
      description: "Curabitur sit amet maximus ligula.",
    },
  ];
  return (
    <section className={styles.section}>
      <h2>How Jobhustles work</h2>

      <div className={styles.steps}>
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              className={`${styles.card} ${step.active ? styles.activeCard : ""}`}
              key={step.title}
            >
              <div
                className={`${styles.icon} ${step.active ? styles.activeIcon : ""}`}
              >
                <Icon size={28} />
              </div>

              <h4>{step.title}</h4>

              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;
