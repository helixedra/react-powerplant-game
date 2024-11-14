import classes from './Stat.module.scss';
import Button from './ui/Button';
export default function Stat({
  level,
  generation,
  money,
  produced,
  resetGame,
}) {
  return (
    <>
      <div className={classes.options}>
        <Button
          type="secondary"
          text="Restart"
          action={resetGame}
          condition={false}
        />
      </div>
      <div className={classes.statistics}>
        <ul className={classes.container}>
          <li title="Level">🏅{level}/100</li>
          <li title="Power">
            &#128268;{parseFloat((generation * 3600) / 1000).toFixed(2)} kW/h
          </li>
          <li title="Money">💸{money}</li>
        </ul>
        <div className={classes.generationStat}>
          <span title="Produced per second" className={classes.generationIcon}>
            ⚡
          </span>
          {produced} watt
        </div>
      </div>
    </>
  );
}
