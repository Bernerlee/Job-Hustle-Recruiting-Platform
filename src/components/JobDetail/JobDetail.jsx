import {
  Bookmark,
  ArrowRight,
  Calendar,
  Clock3,
  Layers3,
  GraduationCap,
  Wallet,
  MapPin,
  Link,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

import styles from "./JobDetail.module.css";

const job = {
  title: "Senior UX Designer",
  company: "Facebook",
  type: "FULL-TIME",
  featured: true,

  salary: "$100,000 - $120,000",
  location: "Dhaka, Bangladesh",

  posted: "14 Jun, 2021",
  expire: "14 Aug, 2021",

  level: "Entry Level",
  experience: "$50k-80k/month",
  education: "Graduation",
};

function JobDetail() {
  return (
    <section className={styles.jobDetail}>
      <div className={styles.left}>
        {/* Header */}

        <div className={styles.header}>
          <div className={styles.companyInfo}>
            <div className={styles.logo}>f</div>

            <div>
              <h1>{job.title}</h1>

              <div className={styles.meta}>
                <span>at {job.company}</span>

                <span className={styles.fulltime}>FULL-TIME</span>

                <span className={styles.featured}>Featured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Job Description */}

        <h2>Job Description</h2>

        <p>
          Velstar is a Shopify Plus agency, and we partner with brands to help
          them grow. We also do the same with our own people.
        </p>

        <p>
          Here at Velstar, we don't just make websites, we create exceptional
          digital experiences that consumers love.
        </p>

        <p>
          The role will involve translating project specifications into clean,
          test-driven, easily maintainable code.
        </p>

        <p>Want to work with us? You're in good company!</p>

        {/* Requirements */}

        <h3>Requirements</h3>

        <ul>
          <li>Great troubleshooting and analytical skills.</li>

          <li>3+ years experience in back-end development.</li>

          <li>Experience with HTML, JavaScript, CSS, PHP.</li>

          <li>Working regularly with APIs and Web Services.</li>

          <li>Experience with database management.</li>

          <li>
            Familiarity with version control and project management tools.
          </li>

          <li>
            Great troubleshooting and analytical skills combined with the desire
            to tackle challenges.
          </li>

          <li>Ambitious and hungry to grow your career.</li>
        </ul>

        {/* Desirable */}

        <h3>Desirable</h3>

        <ul>
          <li>Working knowledge of eCommerce platforms.</li>

          <li>Knowledge of payment gateways.</li>

          <li>API platform experience.</li>
        </ul>

        {/* Benefits */}

        <h3>Benefits</h3>

        <ul>
          <li>Early finish on Fridays.</li>

          <li>28 days holiday including bank holidays.</li>

          <li>Generous annual bonus.</li>

          <li>Healthcare package.</li>

          <li>Paid community days.</li>

          <li>£100 contribution for learning and development.</li>

          <li>Free breakfast on Mondays.</li>

          <li>Access to Perkbox with discounts.</li>

          <li>Cycle to Work Scheme.</li>

          <li>Brand new MacBook Pro.</li>

          <li>Joining an agency on the cusp of exponential growth.</li>
        </ul>
      </div>

      {/* Sidebar */}

      <aside className={styles.sidebar}>
        <div className={styles.actions}>
          <button className={styles.bookmark}>
            <Bookmark size={20} />
          </button>

          <button className={styles.applyBtn}>
            Apply Now
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Salary Card */}

        <div className={styles.salaryCard}>
          <div>
            <h4>Salary (USD)</h4>

            <h2>{job.salary}</h2>

            <p>Yearly salary</p>
          </div>

          <div>
            <MapPin size={22} />

            <h4>Job Location</h4>

            <p>{job.location}</p>
          </div>
        </div>

        {/* Overview */}

        <div className={styles.overview}>
          <h3>Job Overview</h3>

          <div className={styles.overviewGrid}>
            <div>
              <Calendar size={20} />
              <span>JOB POSTED:</span>
              <p>{job.posted}</p>
            </div>

            <div>
              <Clock3 size={20} />
              <span>JOB EXPIRE IN:</span>
              <p>{job.expire}</p>
            </div>

            <div>
              <Layers3 size={20} />
              <span>JOB LEVEL:</span>
              <p>{job.level}</p>
            </div>

            <div>
              <Wallet size={20} />
              <span>EXPERIENCE:</span>
              <p>{job.experience}</p>
            </div>

            <div>
              <GraduationCap size={20} />
              <span>EDUCATION:</span>
              <p>{job.education}</p>
            </div>
          </div>

          {/* Share */}

          <div className={styles.share}>
            <h4>Share this job:</h4>

            <div className={styles.shareBtns}>
              <button>
                <Link size={16} />
                Copy Link
              </button>

              <Facebook size={18} />
              <Linkedin size={18} />
              <Twitter size={18} />
              <Mail size={18} />
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default JobDetail;
