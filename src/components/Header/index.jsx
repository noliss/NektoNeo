import Button from "../Button";
import HeaderMenu from "../HeaderMenu";
import { ReactComponent as Logo } from "../../images/svg/logo.svg";
import styles from "./Header.module.scss";
import { ReactComponent as BurgerSVG } from "../../images/svg/mobileBurger.svg";
import HeaderMobileMenu from "../HeaderMobileMenu";
import { useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const [mobileMenu, showMobileMenu] = useState(false);
  const menuItems = [
    { name: "Главная", link: "#main" },
    { name: "Услуги", link: "#adv" },
    { name: "Сборки", link: "#prod" },
    { name: "Отзывы", link: "#rev" },
  ];
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div
          className={classNames(styles.headerMobileButton, {
            [styles.headerMobileFixed]: mobileMenu,
          })}
        >
          <BurgerSVG onClick={() => showMobileMenu(!mobileMenu)} />
        </div>
        <HeaderMobileMenu
          onClick={(isShow) => showMobileMenu(isShow)}
          isShow={mobileMenu}
          menuItems={menuItems}
        />
        <Logo className={styles.headerLogo} />
        <HeaderMenu menuItems={menuItems} />
      </div>
      <Button className={styles.headerButton}>Связь с менеджером</Button>
    </div>
  );
};
