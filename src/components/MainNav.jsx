import ReactCountryFlag from "react-country-flag";
import styles from "./MainNav.module.css";
import { BriefcaseBusiness, Search } from "lucide-react";
import { useState } from "react";

function MainNav() {
  const countries = [
    {
      code: "IN",
      flag: "IN",
      name: "India",
    },
    {
      code: "US",
      flag: "US",
      name: "USA",
    },
    {
      code: "NG",
      flag: "NG",
      name: "Nigeria",
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mainNav}>
      {/* Logo */}
      <div className={styles.logo}>
        <BriefcaseBusiness color="#0a65cc" strokeWidth={2.5} size={24} />
        <h2>Jobhustles</h2>
      </div>

      {/* Search Area */}
      <div className={styles.searchWrapper}>
        <div>
          {/* Selected Country */}
          <div className={styles.countrySelect}>
            <span className={styles.flag}>
              <ReactCountryFlag
                countryCode={selectedCountry.code}
                svg
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </span>

            <span className={styles.countryName}>{selectedCountry.name}</span>

            <span className={styles.arrow}>&#9661;</span>
          </div>
        </div>

        {/* Dropdown */}
        {open && (
          <div>
            {countries.map((country) => (
              <div
                key={country.code}
                onClick={() => {
                  setSelectedCountry(country);
                  setOpen(false);
                }}
              >
                <span>
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </span>
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        )}

        <Search
          style={{ marginLeft: "20px" }}
          color="#0a65cc"
          size={24}
          strokeWidth={3}
        />

        <input
          type="text"
          placeholder="Job title, keyword, company"
          className={styles.search}
        />
      </div>

      {/* Buttons */}
      <div className={styles.actions}>
        <button className={styles.signIn}>Sign in</button>
        <button className={styles.postJob}>Post A job</button>
      </div>
    </div>
  );
}

export default MainNav;
