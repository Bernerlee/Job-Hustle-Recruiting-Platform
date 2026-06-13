import { ArrowRight } from "lucide-react";

import laptop from "../../assets/laptop.png";
import employer from "../../assets/employer.png";

import styles from "./CTASection.module.css";

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      {/* Candidate */}

      <div className={styles.candidateCard}>
        <div className={styles.content}>
          <h2>Become a Candidate</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus
            a dolor convallis efficitur.
          </p>

          <button className={styles.lightBtn}>
            Register Now
            <ArrowRight size={18} />
          </button>
        </div>

        <img src={laptop} alt="Laptop" />
      </div>

      {/* Employer */}

      <div className={styles.employerCard}>
        <div className={styles.content}>
          <h2>Become a Employer</h2>

          <p>
            Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed
            efficitur dolor.
          </p>

          <button className={styles.whiteBtn}>
            Register Now
            <ArrowRight size={18} />
          </button>
        </div>

        <img src={employer} alt="Employer" />
      </div>
    </section>
  );
}

export default CTASection;
