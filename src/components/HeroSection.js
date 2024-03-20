import styles from "./HeroSection.module.css";
import pramodImage from "../assets/pramodBhadanaHeroImage@3.jpg";

const HeroSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heroTextAndCTA}>
          <div className={styles.headingAndSupportingText}>
            <h1 className={styles.heading}>
              I turn ideas into digital experiences.
            </h1>
            <div className={styles.supportingText}>
              I am skilled in developing minimalistic yet practical products
              that enhance user engagement.
            </div>
          </div>
          <div className={styles.emailCapture}>
            <div className={styles.inputField}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Email</div>
                <div className={styles.input}>
                  <input
                    className={styles.queryText}
                    placeholder="Enter your query"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.hintText}>
                Your private details will remain confidential.
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.textPadding}>
                <div className={styles.buttonText}>Get started</div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img className={styles.imageIcon} src={pramodImage} loading="lazy" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
