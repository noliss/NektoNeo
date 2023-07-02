import styles from "./HeaderMobileMenu.module.scss";
import classNames from "classnames";
import { ReactComponent as LogoSVG } from "../../images/svg/logo.svg";
import Button from "../Button";

const HeaderMobileMenu = ({ menuItems, isShow, onClick }) => {
  return (
    <div
      className={classNames(styles.mobileMenu, {
        [styles.mobileMenuActive]: isShow,
      })}
    >
      <LogoSVG className={styles.mobileMenuLogo} />
      <ul className={styles.mobileMenuList}>
        {menuItems.map((item) => (
          <li key={item.name} className={styles.mobileMenuItem}>
            <a href={item.link} onClick={() => onClick(!isShow)}>{item.name}</a>
          </li>
        ))}
      </ul>
      <Button className={styles.mobileMenuButton}>Менеджер</Button>
    </div>
  );
};

export default HeaderMobileMenu;
