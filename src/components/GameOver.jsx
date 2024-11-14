import classes from './GameOver.module.scss';
import Button from './ui/Button';

const GameOver = ({ onRestart }) => {
  return (
    <div className={classes.game_over}>
      <h1>Game Over</h1>
      <p>The game has ended. Better luck next time!</p>
      <br />

      <Button
        type="secondary"
        text="Play Again"
        action={onRestart}
        condition={false}></Button>
    </div>
  );
};

export default GameOver;
