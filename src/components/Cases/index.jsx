import styles from "./Cases.module.scss";
import { ReactComponent as StarSVG } from "../../images/cases/star.svg";
import computer1 from "../../images/cases/1.jpg";
import computer2 from "../../images/cases/2.jpg";
import computer3 from "../../images/cases/3.jpg";
import computer4 from "../../images/cases/4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button";
import classNames from "classnames";

const Cases = () => {
  const cases = [
    {
      img: computer1,
      adv: "Услуга - сборка ПК",
      name: "Михаил:",
      text: `Все супер) Рекомендую обратиться в эту компанию, 
      если вы ищете надежных специалистов по сборке компьютеров.`,
      rate: 5,
    },
    {
      img: computer2,
      adv: "Услуга - сборка ПК",
      name: "Алексей:",
      text: `Отличная мастерская по сборке ПК!
      Я обратился к ним, чтобы собрать свой первый компьютер, 
      ребята сделали все на высшем уровне`,
      rate: 3,
    },
    {
      img: computer3,
      adv: "Услуга - сборка ПК",
      name: "Василиса:",
      text: `Мне нравятся эти ребята! Я честно говоря полный ноль в компах, 
      но они по ходу сборки максимально доступно смогли объяснить принципы всего этого процесса. 
      Спасибо :)))`,
      rate: 8,
    },
    {
      img: computer4,
      adv: "Услуга - сборка ПК",
      name: "Виталий:",
      text: `Ребята быстро выявили проблему и предложили дешевое решение. 
            Все сделали вовремя, и с тех пор у меня не возникало никаких проблем. Я очень доволен`,
      rate: 9,
    },
  ];

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <StarSVG className={styles.casesStar} key={index} />
  ));

  return (
    <>
      <div className={styles.cases}>
        {cases.map((item, index) => {
          return (
            <div key={index} className={styles.casesItem}>
              <p className={classNames(styles.casesNameMobile, [styles.casesName])}>{item.name}</p>
              <div className={styles.casesLeft}>
                <img src={item.img} alt="" />
                <p className={styles.casesAdvant}>{item.adv}</p>
              </div>
              <div className={styles.casesRight}>
                <p className={styles.casesName}>{item.name}</p>
                <p className={styles.casesText}>{item.text}</p>
                <div className={styles.casesStars}>
                  {stars.map((item) => item)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button className={styles.casesButton}>Показать ещё</Button>
    </>
  );
};

export default Cases;
