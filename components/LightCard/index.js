import styles from "./LightCard.module.scss";

const LightCard = ({ lightValue }) => {
  return (
    <div className={styles.card}>
      <img
        src="images/bg-pattern-card.svg"
        alt="card header"
        className={styles["card-header"]}
      />
      <div className={styles["card-body"]}>
        <img
          src="images/light.png"
          alt="light icon"
          width="100"
          height="100"
          className={styles["card-body-img"]}
        />
        <h2 className={styles["card-body-title"]}>Light</h2>
        <p className={styles["card-body-text"]}>Intensity:</p>
      </div>
      <div className={styles["card-footer"]}>
        <div className={styles["card-footer-variable"]}>
          <p>Value:</p>
          <h3>{lightValue}</h3>
        </div>
      </div>
    </div>
  );
};

export default LightCard;
