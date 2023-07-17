import styles from "../../styles/aboutMe.module.css";
import ArrowDown from "../ArrowDown";

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.myPhoto} />

    <div className={styles.containerInfo}>
      <div className={styles.mainTitle}>
        <h1 className={styles.title}>open to work</h1>
      </div>

      <div className={styles.info}>
        <h2 className={styles.subtitle}>Web developer</h2>
        <p className={styles.text}>
          👋 Hi! I&apos;m Xavier, I learned how to program on my own, thanks to
          official documentations, YouTube content, and some online courses on
          Platzi.
          <br />
          <br />
          💪 Thanks to YouTube, I was able to dedicate 100% of my time to
          learning how to program developing my skills in both front-end and
          back-end (more front-end than back-end), and gaining experience in the
          world of UX and UI.
        </p>

        <div className={styles.bottomSection}>
          <ul className={styles.languageListContainer}>
            <li>
              <strong className={styles.titleLanguage}>spanish:</strong>
              <span>native language</span>
            </li>
            <li>
              <strong className={styles.titleLanguage}>english:</strong>
              <span>intermediate</span>
            </li>
          </ul>

          <ArrowDown text="swipe down to watch this code" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
