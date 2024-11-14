/* eslint-disable react/prop-types */
import styles from "./UpgradeCard.module.scss";

export default function UpgradeCard({
  upgradeName,
  cost,
  img,
  upgradePower,
  upgradeExtra,
  condition,
}) {
  return (
    <div
      className={`${styles["upgrade__card"]} ${
        condition ? styles["disable"] : ""
      }`}
      onClick={upgradeExtra}
    >
      <div className={styles["upgrade__name"]}>{upgradeName}</div>
      <div className={styles["upgrade__card_info"]}>
        <div className={styles["price_tag"]}>$ {cost}</div>
        <div className={styles["power_tag"]}>&#128498;+{upgradePower}</div>
      </div>
      <div
        style={{ backgroundImage: `url("/upgrades/${img}")` }}
        className={styles["upgrade__card_image"]}
        alt={upgradeName}
      ></div>
    </div>
  );
}
