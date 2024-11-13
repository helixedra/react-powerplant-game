/* eslint-disable react/prop-types */
import './Stat.css';
export default function Stat({ level, generation, money, produced }) {
  return (
    <div className="statistics">
      <ul className="container">
        <li title="Level">🏅{level}/100</li>
        <li title="Power">
          &#128268;{parseFloat((generation * 3600) / 1000).toFixed(2)} kW/h
        </li>
        <li title="Money">&#128184;$ {money}</li>
      </ul>
      <div className="generationStat">
        <span className="generationIcon">⚡</span>Produced: {produced} watt
      </div>
    </div>
  );
}
