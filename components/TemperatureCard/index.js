import styles from "./TemperatureCard.module.scss";

const TemperatureCard = ({ tempValue }) => {
  return (
    <div className={styles.card}>
      <img
        src="images/bg-pattern-card.svg"
        alt="card header"
        className={styles["card-header"]}
      />
      <div className={styles["card-body"]}>
        <img
          src="images/temperature.png"
          alt="temperature icon"
          width="100"
          height="100"
          className={styles["card-body-img"]}
        />
        <h2 className={styles["card-body-title"]}>Temperature</h2>
        <p className={styles["card-body-text"]}>Ambient:</p>
      </div>
      <div className={styles["card-footer"]}>
        <div className={styles["card-footer-variable"]}>
          <p>Value</p>
          <h3>{tempValue}</h3>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
