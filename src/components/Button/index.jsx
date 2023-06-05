import classNames from "classnames";
import styles from './Button.module.scss';

const Button = (props) => {
  return <div className={classNames(props.className, styles.button)}>{props.children}</div>
}

export default Button;