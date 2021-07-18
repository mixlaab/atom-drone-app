import styles from "./OrientationCard.module.scss";

const OrientationCard = ({ orientation }) => {
  return (
    <div className={styles.card}>
      <img
        src="images/bg-pattern-card.svg"
        alt="card header"
        className={styles["card-header"]}
      />
      <div className={styles["card-body"]}>
        <img
          src="images/orientation.png"
          alt="orientation icon"
          width="100"
          height="100"
          className={styles["card-body-img"]}
        />
        <h2 className={styles["card-body-title"]}>Orientation</h2>
        <p className={styles["card-body-text"]}>Angular position:</p>
      </div>
      <div className={styles["card-footer"]}>
        <div className={styles["card-footer-variable"]}>
          <p>Roll</p>
          <h3>{orientation.roll}</h3>
        </div>
        <div className={styles["card-footer-variable"]}>
          <p>Pitch</p>
          <h3>{orientation.pitch}</h3>
        </div>
        <div className={styles["card-footer-variable"]}>
          <p>Yaw</p>
          <h3>{orientation.yaw}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrientationCard;
