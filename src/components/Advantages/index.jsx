import styles from "./Advantages.module.scss";
import { ReactComponent as ChampSVG } from "../../images/advantages/1.svg";
import { ReactComponent as StarSVG } from "../../images/advantages/2.svg";
import { ReactComponent as PipleSVG } from "../../images/advantages/3.svg";
import { ReactComponent as AutoSVG } from "../../images/advantages/4.svg";
import { ReactComponent as PriseSVG } from "../../images/advantages/5.svg";
import { ReactComponent as GiftSVG } from "../../images/advantages/6.svg";

const Advantages = () => {
  const advList = [
    {
      icon: <ChampSVG />,
      title: "Профессиональная сборка ПК",
      desc: `Качественная сборка компьютеров и индивидуальная настройка от
      инженеров компании VA-PC, исключительно под ваши запросы.`,
    },
    {
      icon: <StarSVG />,
      title: "Фирменная гарантия",
      desc: `Расширенная гарантия на компьютер 1 год. 
      2 года бесплатного сервисного обслуживания от VA-PC`,
    },
    {
      icon: <PipleSVG />,
      title: "Техническая поддержка",
      desc: `Оперативно ответим на любые вопросы по настройке оборудования и программного обеспечения`,
    },
    {
      icon: <AutoSVG />,
      title: "Доставка по всей России",
      desc: `Доставка по всей территории РФ. 100 % страховка груза на полную стоимость. Доставка по Москве проверенной логистической службой`,
    },
    {
      icon: <PriseSVG />,
      title: "Сертифицированные компоненты",
      desc: `Компания VA-PC гарантирует качество своих компьютеров, используя только сертифицированные компоненты от таких производителей, как
      INTEL, AMD, ASUS, GIGABYTE, NVIDIA`,
    },
    {
      icon: <GiftSVG />,
      title: 'Акции, скидки, подарки',
      desc: `Компания VA-PC гарантирует качество своих компьютеров, используя только сертифицированные компоненты от таких производителей, как
      INTEL, AMD, ASUS, GIGABYTE, NVIDIA`,
    },
  ];
  return (
    <div className={styles.advantages}>
      {advList.map((item, index) => {
        return <div key={index} className={styles.advantagesItem}>
          <div className={styles.advantagesIcon}>
              {item.icon}
          </div>
          <p className={styles.advantagesItemTitle}>{item.title}</p>
          <p className={styles.advantagesItemDesc}>{item.desc}</p>
        </div>;
      })}
    </div>
  );
};

export default Advantages;
