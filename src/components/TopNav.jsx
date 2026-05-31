import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";
import ReactCountryFlag from "react-country-flag";

function TopNav() {
  return (
    <div className={styles.topnav}>
      <div className={styles.left}>
        <NavLink>Home</NavLink>
        <NavLink>Find Job</NavLink>
        <NavLink>Employers</NavLink>
        <NavLink>Candidates</NavLink>
        <NavLink>Pricing Plans</NavLink>
        <NavLink>Customer Supports</NavLink>
      </div>
      <div className={styles.right}>
        <span className={styles.phone}>📞 +2349046842129</span>
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            width: "20px",
            height: "20px",
          }}
        />
        <select className={styles.language} name="" id="">
          <option value="">English</option>
        </select>
      </div>
    </div>
  );
}

export default TopNav;
