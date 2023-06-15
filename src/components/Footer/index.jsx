import styles from "./Footer.module.scss";
import { ReactComponent as LogoSVG } from '../../images/svg/logo.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerColumn}>
        <p className={styles.footerData}>
          Москва, метро Румянцево, БП <br /><br /> Румянцево, корпус Е, вход 12, офис 3
        </p>
        <p className={styles.footerData}>
          ИНН: 77123123722680<br /><br /> ОГРНИП: 123123123123
        </p>
      </div>
      <div className={styles.footerColumn}>
        <LogoSVG className={styles.footerLogo} />
      </div>
      <div className={styles.footerColumn}>
        <div className={styles.footerPhone}>
        Телефон для горячей линии
        <p className={styles.footerPhoneItem}>+7(900)123-12-45</p>
        с 10:00 - 23:00 пн-пт
        </div>
      </div>
    </div>
  );
};

export default Footer;
