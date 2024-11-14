import styles from "./Stat.module.scss";
import Button from "./ui/Button";
export default function Stat({ level, generation, money, produced }) {
  function resetGame() {
    console.log("reset");
    localStorage.removeItem("snapshot");
    location.reload();
  }

  return (
    <>
      <Button
        type="secondary"
        text="Restart Game"
        action={resetGame}
        condition={false}
      />
      <div className={styles.statistics}>
        <ul className={styles.container}>
          <li title="Level">🏅{level}/100</li>
          <li title="Power">
            &#128268;{parseFloat((generation * 3600) / 1000).toFixed(2)} kW/h
          </li>
          <li title="Money">&#128184;$ {money}</li>
        </ul>
        <div className={styles.generationStat}>
          <span title="Produced per second" className={styles.generationIcon}>
            ⚡
          </span>
          {produced} watt
        </div>
      </div>
    </>
  );
}
