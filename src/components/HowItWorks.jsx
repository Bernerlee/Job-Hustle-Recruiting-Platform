import { BadgeCheck, Search, Upload, UserPlus } from "lucide-react";
import styles from "./HowItWorks.module.css";
import StepCard from "./StepCard";

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
        <div className={styles.stepWrapper}>
          <StepCard {...steps[0]} />
          <img src="src\assets\Arrows.svg" alt="" className={styles.arrow} />
        </div>

        <div className={styles.stepWrapper}>
          <StepCard {...steps[1]} />
          <img
            src="src\assets\Arrows.svg"
            alt=""
            className={styles.arrowReverse}
          />
        </div>

        <div className={styles.stepWrapper}>
          <StepCard {...steps[2]} />
          <img src="src\assets\Arrows.svg" alt="" className={styles.arrow} />
        </div>

        <div className={styles.stepWrapper}>
          <StepCard {...steps[3]} />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
