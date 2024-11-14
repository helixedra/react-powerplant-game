/* eslint-disable react/prop-types */
import classes from './UpgradeCard.module.scss';

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
      className={`${classes['upgrade__card']} ${
        condition ? classes['disable'] : ''
      }`}
      onClick={upgradeExtra}>
      <div className={classes['upgrade__name']}>{upgradeName}</div>
      <div className={classes['upgrade__card_info']}>
        <div className={classes['price_tag']}>💸{cost}</div>
        <div className={classes['power_tag']}>⚡+{upgradePower}</div>
      </div>
      <div
        style={{ backgroundImage: `url("/upgrades/${img}")` }}
        className={classes['upgrade__card_image']}
        alt={upgradeName}></div>
    </div>
  );
}
