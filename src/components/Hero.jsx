import styles from "./Hero.module.css";
import HeroSearch from "./HeroSearch";
import StatsSection from "./StatsSection";
import Suggestions from "./Suggestions";
function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.left}>
            <h1>Find a job that suits your interest & skills.</h1>

            <p>Aliquam vitae turpis in diam convallis finibus in at risus.</p>
            {/* Search Bar */}
            <HeroSearch />

            {/* Suggestion */}
            <Suggestions />
          </div>
          <div className={styles.right}>
            <img src="/images/hero-image.png" alt="Job Search Illustration" />
          </div>
        </div>

        {/* Stats Cards */}
        <StatsSection />
      </section>
    </div>
  );
}

export default Hero;
