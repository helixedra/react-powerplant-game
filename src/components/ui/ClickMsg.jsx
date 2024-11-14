import classes from './ClickMsg.module.scss';
function ClickMsg({ x, y }) {
  return (
    <span
      style={{
        top: y,
        left: x,
      }}
      className={classes.clickMsg}>
      ⚡
    </span>
  );
}
export default ClickMsg;
