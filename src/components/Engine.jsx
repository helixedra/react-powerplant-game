/* eslint-disable react/prop-types */
import './Engine.css';
export default function Engine({
  statClickHandler,
  upgradeEngine,
  engineImg,
  clickMsg,
}) {
  return (
    <div title="Click to produce⚡">
      <div className="engine-container">
        {clickMsg.map((span) => (
          <span
            key={span.id}
            style={{
              position: 'absolute',
              top: span.y,
              left: span.x,
              pointerEvents: 'none', // Щоб span не заважав події onClick
            }}
            className="clickMsg">
            ⚡
          </span>
        ))}
        <div
          className="engine"
          style={{ backgroundImage: `url("/levels/${engineImg}")` }}
          onClick={statClickHandler}></div>
        <button onClick={upgradeEngine}>⚡ Simple upgrade (cost $20)</button>
      </div>
    </div>
  );
}
