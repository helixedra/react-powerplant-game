import classes from './Button.module.scss';

function Button({ type, text, action, condition }) {
  const buttonClass = `button__${type}`;
  return (
    <button
      className={`${classes.button} ${classes[buttonClass]}`}
      onClick={action}
      disabled={condition}>
      {text}
    </button>
  );
}

export default Button;
