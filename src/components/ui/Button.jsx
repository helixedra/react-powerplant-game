import styles from "./Button.module.scss";

function Button({ type, text, action, condition }) {
  const buttonClass = `button__${type}`;
  // console.log(action);

  return (
    <button
      className={`${styles.button} ${styles[buttonClass]}`}
      onClick={action}
      disabled={condition}
    >
      {text}
    </button>
  );
}

export default Button;
