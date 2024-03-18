import styles from "./NavigationBar.module.css";
import logo from "../assets/pbLogoWordmark.svg";
import { useState } from "react";

const NavigationBar = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => setActive(!isActive);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <a href="#" className={styles.logo}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src={logo}
              />
          </a>
        <nav className={styles.navigationActions}>
          <ul onClick={handleClick} className={`${styles.navigation}${isActive ? " " + styles.active: ""}`}>
            <li className={styles.navButton}>
              <a href="#" className={styles.text}>Blog</a>
            </li>
            <li className={styles.navButton}>
              <a href="#" className={styles.text}>Projects</a>
            </li>
            <li className={styles.navButton}>
              <a href="#"className={styles.text}>Abilities</a>
            </li>
            <li className={styles.navButton}>
              <a href="#" className={styles.text}>Technologies</a>
            </li>
          </ul>
        </nav>
        <button className={styles.button}>
            <div className={styles.textPadding}>
              <div className={styles.buttonText}>Contact</div>
            </div>
        </button>
        <div onClick={handleClick} className={`${styles.hamburger}${isActive ? " " + styles.active: ""}`}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
