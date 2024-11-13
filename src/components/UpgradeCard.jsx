/* eslint-disable react/prop-types */
import './UpgradeCard.css';

export default function UpgradeCard({
  upgradeName,
  cost,
  img,
  upgradePower,
  upgradeExtra,
}) {
  return (
    <div className="upgrade-card" onClick={upgradeExtra}>
      <div className="upgrade-name">{upgradeName}</div>
      <div className="upgrade-card-info">
        <div className="price-tag">$ {cost}</div>
        <div className="power-tag">&#128498;+{upgradePower}</div>
      </div>
      <div
        style={{ backgroundImage: `url("/upgrades/${img}")` }}
        className="upgrade-card-image"
        alt={upgradeName}></div>
      {/* <div className="upgrade-card-description">{description}</div> */}
    </div>
  );
}
