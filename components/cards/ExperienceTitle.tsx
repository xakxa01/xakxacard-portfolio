import styles from "../../styles/experienceTitle.module.css";

const ExperienceTitle = () => {
  const title = "experience";
  const titleLength = title.length;
  const halfTitle = Math.ceil(titleLength / 2);

  const sliceFunction = (first: number, second: number) => title.slice(first, second).split("");

  const firstPart = sliceFunction(0, halfTitle);
  const secondPart = sliceFunction(halfTitle, titleLength);
  const combineArray = [
    { textArray: firstPart },
    { textArray: secondPart, styles: styles.secondPart },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {combineArray.map(({ textArray, styles }) =>
          textArray.map((letter, index) => (
            <div
              key={index}
              className={styles}
            >
              {letter}
            </div>
          ))
        )}
      </h1>
    </div>
  );
};

export default ExperienceTitle;
