import {
  BriefcaseBusiness,
  ArrowRight,
  FileBraces,
  Inspect,
  TowerControlIcon,
  JapaneseYenIcon,
} from "lucide-react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topFooter}>
        {/* Company Info */}
        <div className={styles.company}>
          <div className={styles.logo}>
            <BriefcaseBusiness size={28} />
            <h2>Jobhustles</h2>
          </div>

          <p className={styles.phone}>
            Call now: <span>(319) 555-0115</span>
          </p>

          <p className={styles.address}>
            6391 Elgin St. Celina, Delaware 10299, New York, United States of
            America
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Link</h3>

          <ul>
            <li>About</li>

            <li className={styles.activeLink}>
              <ArrowRight size={16} />
              Contact
            </li>

            <li>Pricing</li>

            <li>Blog</li>
          </ul>
        </div>

        {/* Candidate */}
        <div>
          <h3>Candidate</h3>

          <ul>
            <li>Browse Jobs</li>
            <li>Browse Employers</li>
            <li>Candidate Dashboard</li>
            <li>Saved Jobs</li>
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h3>Employers</h3>

          <ul>
            <li>Post a Job</li>
            <li>Browse Candidates</li>
            <li>Employers Dashboard</li>
            <li>Applications</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3>Support</h3>

          <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomFooter}>
        <p>© 2021 Jobpilot - Job Portal. All rights reserved</p>

        <div className={styles.socials}>
          <FileBraces size={18} />
          <JapaneseYenIcon size={18} />
          <Inspect size={18} />
          <TowerControlIcon size={18} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
