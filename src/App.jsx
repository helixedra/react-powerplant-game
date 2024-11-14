import { useEffect, useState } from 'react';
import Engine from './components/Engine';
import Stat from './components/Stat';
import Upgrades from './components/Upgrades';
import upgradesData from './upgrades-data.json';
import GameOver from './components/GameOver';

function App() {
  const [level, setLevel] = useState(() =>
    getInitialState().level !== null ? getInitialState().level : 1
  );
  const [generation, setGeneration] = useState(() =>
    getInitialState().generation !== null ? getInitialState().generation : 1
  );
  const [money, setMoney] = useState(() =>
    getInitialState().money !== null ? getInitialState().money : 0
  );
  const [produced, setProduced] = useState(() =>
    getInitialState().produced !== null ? getInitialState().produced : 0
  );
  const [clickMsg, setClickMsg] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGameEnd = () => {
    setIsGameOver(true);
  };

  const handleRestart = () => {
    setIsGameOver(false);
    resetGame();
    // Reset your game state here
  };

  function resetGame() {
    if (
      confirm(
        'Are you sure you want to restart this game? All progress will be lost'
      )
    ) {
      localStorage.removeItem('snapshot');
      location.reload();
    } else {
      return;
    }
  }

  function getInitialState() {
    const localStorageSnapshot = localStorage.getItem('snapshot');
    if (localStorageSnapshot) {
      //Calculate data from last snapshot
      const snapshot = JSON.parse(localStorageSnapshot);
      //Defining time snapshots
      const lastSnapshot = snapshot.timeSnapshot;
      const currentSnapshot = Date.now();
      const diffSnapshots = parseInt((currentSnapshot - lastSnapshot) / 1000); //difference between snapshots in secons
      //Calculating money by the difference between the last and current time snapshots
      const currentMoney = parseFloat(snapshot.money);
      const currentGeneration = parseInt(snapshot.generation);
      const newMoney = parseFloat(
        (diffSnapshots * currentGeneration) / 10 + currentMoney
      ).toFixed(2);
      const newSnapshot = {
        level: snapshot.level,
        produced: 0,
        generation: snapshot.generation,
        money: newMoney,
      };
      return newSnapshot;
    } else {
      return { level: 1, produced: 0, generation: 1, money: 0 };
    }
  }

  function saveToLocalStorage(level, produced, generation, money) {
    const currentSnapshot = {
      level: level,
      produced: produced,
      generation: generation,
      money: parseFloat(money),
      timeSnapshot: Date.now(),
    };
    localStorage.setItem('snapshot', JSON.stringify(currentSnapshot));
  }

  let upgradeCost = 20; //simple upgrade

  function calculateWattsPerDollar(level) {
    if (level > 1) {
      return 10 + 0.9 * level;
    } else {
      return 10;
    }
  }

  let wattPerDollar = calculateWattsPerDollar(level); // Watt per 1 Dollar

  function statClickHandler(event) {
    productionTime();
    generateClickMsg(event);
  }

  const generateClickMsg = (event) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newMsg = {
      id: Date.now(),
      x: x,
      y: y,
    };

    setClickMsg((prevMsg) => [...prevMsg, newMsg]);

    setTimeout(() => {
      setClickMsg((prevMsg) => prevMsg.filter((span) => span.id !== newMsg.id));
    }, 2000);
  };

  function productionTime() {
    if (produced >= 10) {
      setProduced(0);
      const rawValue = produced / wattPerDollar;

      let currentProducedValue = +parseFloat(rawValue).toFixed(2);
      let currentMoney = +parseFloat(money).toFixed(2);

      setMoney(parseFloat(currentMoney + currentProducedValue).toFixed(2));

      let genPerHour = (generation * 3600) / 1000;

      if (genPerHour >= 1000) {
        let calcLevel = Math.ceil(genPerHour / 1000);

        setLevel(calcLevel);
      }
    } else {
      setProduced(produced + generation);
    }
    saveToLocalStorage(level, produced, generation, money);
  }

  useEffect(() => {
    const interval = setInterval(productionTime, 1000);
    if (level >= 2) {
      handleGameEnd();
      return clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generation, money, produced, level]);

  function upgradeEngine() {
    if (money >= upgradeCost) {
      spendMoney(upgradeCost);
      setGeneration(generation + 1);
    } else {
      alert('Not enought money!');
    }
  }

  function upgradeExtra(id) {
    const upgadeElement = upgradesData.find((item) => item.id === id);

    if (money >= upgadeElement.cost) {
      spendMoney(upgadeElement.cost);
      setGeneration(generation + upgadeElement.upgradePower);
    } else {
      alert('Not enought money!');
    }
  }

  function spendMoney(cost) {
    let initial = +parseFloat(money).toFixed(2);
    let spend = +parseFloat(cost).toFixed(2);
    let amount = +parseFloat(initial - spend).toFixed(2);
    setMoney(amount);
  }

  function engineImg() {
    if (level <= 2) {
      return `plant1.png`;
    } else if (level > 2 && level <= 6) {
      return `plant2.png`;
    } else if (level > 6 && level <= 11) {
      return `plant3.png`;
    } else if (level > 11 && level <= 18) {
      return `plant4.png`;
    } else if (level > 18 && level <= 23) {
      return `plant5.png`;
    } else if (level > 23 && level <= 28) {
      return `plant6.png`;
    } else if (level > 28 && level <= 34) {
      return `plant7.png`;
    } else if (level > 34 && level <= 39) {
      return `plant8.png`;
    } else if (level > 39 && level <= 44) {
      return `plant9.png`;
    } else if (level > 44 && level <= 69) {
      return `plant10.png`;
    } else if (level > 69) {
      return `plant11.png`;
    }
  }

  return (
    <>
      {isGameOver ? (
        <GameOver onRestart={handleRestart} />
      ) : (
        ''
        // <div>
        //   {/* Game components go here */}
        //   <h1>Welcome to the Game!</h1>
        //   <button onClick={handleGameEnd}>End Game</button>{' '}
        //   {/* Placeholder for actual game end logic */}
        // </div>
      )}
      <header>
        <Stat
          level={level}
          generation={generation}
          money={money}
          produced={produced}
          resetGame={resetGame}
        />
      </header>
      <main>
        <Engine
          statClickHandler={statClickHandler}
          upgradeEngine={upgradeEngine}
          engineImg={engineImg()}
          clickMsg={clickMsg}
          money={money}
        />
        <Upgrades upgradeExtra={upgradeExtra} money={money} />
      </main>
    </>
  );
}

export default App;
