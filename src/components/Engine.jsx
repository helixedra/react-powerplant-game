/* eslint-disable react/prop-types */
import styles from "./Engine.module.scss";
import Button from "./ui/Button";
export default function Engine({
  statClickHandler,
  upgradeEngine,
  engineImg,
  clickMsg,
  money,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.engine} onClick={statClickHandler}>
        <div className={styles.engine__container}>
          {clickMsg.map((span) => (
            <span
              key={span.id}
              style={{
                top: span.y,
                left: span.x,
              }}
              className={styles.clickMsg}
            >
              ⚡
            </span>
          ))}
          <div className={styles.engine__base}></div>
          <div
            className={styles.engine__level}
            title="Click to produce⚡"
            style={{ backgroundImage: `url("/levels/${engineImg}")` }}
          ></div>
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
