/* eslint-disable react/prop-types */
import { useState } from 'react';
import upgradesData from '../upgrades-data.json';
import UpgradeCard from './UpgradeCard';
import classes from './Upgrades.module.scss';
export default function Upgrade({ upgradeExtra, money }) {
  const [upgradeWindow, setUpgradeWindow] = useState(false);

  function handleUpgradeWindow() {
    setUpgradeWindow((window) => !window);
  }
  return (
    <>
      <button className={classes.upgrades_button} onClick={handleUpgradeWindow}>
        🚀
      </button>
      <div
        className={`${classes.upgrades__container} ${
          upgradeWindow ? classes.visible : ''
        }`}>
        <div className={classes.upgrades__title}>Special Upgrades</div>
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
