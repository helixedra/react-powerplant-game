/* eslint-disable react/prop-types */
import { useState } from "react";
import upgradesData from "../upgrades-data.json";
import UpgradeCard from "./UpgradeCard";
import styles from "./Upgrades.module.scss";
export default function Upgrade({ upgradeExtra, money }) {
  const [upgradeWindow, setUpgradeWindow] = useState(false);

  function handleUpgradeWindow() {
    setUpgradeWindow((window) => !window);
  }
  return (
    <>
      <button className={styles.upgrades_button} onClick={handleUpgradeWindow}>
        Upgrades
      </button>
      <div
        className={`${styles.upgrades__container} ${
          upgradeWindow ? styles.visible : ""
        }`}
      >
        <div className={styles.upgrades__title}>Special Upgrades</div>
        {upgradesData.map((item) => (
          <UpgradeCard
            key={item.id}
            {...item}
            upgradeExtra={() => upgradeExtra(item.id)}
            condition={parseInt(money) >= item.cost ? false : true}
          />
        ))}
      </div>
    </>
  );
}
