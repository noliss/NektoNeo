import styles from "./Footer.module.scss";
import logo from '../../images/svg/logo.svg'
import policy from '../../files/policy.pdf';
import offerta from '../../files/offerta.pdf'
import Button from "../Button";
import { goToLink } from "../../helpers/helpers";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerColumn}>
      <Button
        className={styles.headerButton}
        onClick={() => {
          goToLink("https://t.me/vapc_m");
        }}
      >
        Связь с менеджером
      </Button>
      <div className={styles.footerPhone}>
        с 10:00 - 22:00 пн-пт
      </div>
        {/* <div className={styles.footerPhone}>
        с 10:00 - 22:00 пн-пт
        <p className={styles.footerPhoneItem}>+7 (977)-877-77-84</p>
        Телефон для горячей линии
        </div> */}
      </div>
        {/* <p className={styles.footerData}>
          Москва, метро Румянцево, БП <br /><br /> Румянцево, корпус Е, вход 12, офис 3
        </p>
        <p className={styles.footerData}>
          ИНН: 77123123722680<br /><br /> ОГРНИП: 123123123123
        </p> */}
      <div className={styles.footerColumn}>
        <img src={logo} alt="логотип" className={styles.footerLogo} />
      </div>
      <div className={styles.footerColumn}>
         <p className={styles.footerData}>
          г. Москва
        </p>
        <a className={styles.footerDocument} download href={policy}>Политика конфиденциальности</a>
        <a className={styles.footerDocument} download href={offerta}>Договор оферта</a>
      </div>
    </div>
  );
};

export default Footer;
