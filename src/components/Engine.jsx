/* eslint-disable react/prop-types */
import classes from './Engine.module.scss';
import Button from './ui/Button';
import ClickMsg from './ui/ClickMsg';
export default function Engine({
  statClickHandler,
  upgradeEngine,
  engineImg,
  clickMsg,
  money,
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.engine} onClick={statClickHandler}>
        <div className={classes.engine__container}>
          {clickMsg.map((item) => (
            <ClickMsg x={item.x} y={item.y} key={item.id} />
          ))}
          <div className={classes.engine__base}></div>
          <div
            className={classes.engine__level}
            title="Click to produce⚡"
            style={{ backgroundImage: `url("/levels/${engineImg}")` }}></div>
        </div>
      </div>
      <Button
        type="primary"
        text="⚡ Simple upgrade (cost $20)"
        action={upgradeEngine}
        condition={parseInt(money) >= 20 ? false : true}
      />
    </div>
  );
}
