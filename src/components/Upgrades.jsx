/* eslint-disable react/prop-types */
import upgradesData from '../upgrades-data.json';
import UpgradeCard from './UpgradeCard';
export default function Upgrade({ upgradeExtra }) {
  return (
    <div className="upgrades-container">
      <div className="upgrades-title">Special Upgrades</div>
      {upgradesData.map((item) => (
        <UpgradeCard
          key={item.id}
          {...item}
          upgradeExtra={() => upgradeExtra(item.id)}
        />
      ))}
    </div>
  );
}
