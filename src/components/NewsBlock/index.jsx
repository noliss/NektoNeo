import styles from './NewsBlock.module.scss';
import Slider from "react-slick";
import background1 from '../../images/news/background_1.png';
import background2 from '../../images/news/background_2.png';
import background3 from '../../images/news/background_3.png';
import background4 from '../../images/news/background_4.png';
import background5 from '../../images/news/background_5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsBlock = () => {
  return (
    <div className={styles.content}>
      <Slider arrows={false} autoplay autoplaySpeed={6000}>
          <img src={background1} alt="Полный набор переферии в подарок" />
          <img src={background2} alt="Мы разыгрываем ПК, периферию, скидки и прочее" />
          <img src={background3} alt="У нас есть возможность оплачивать частями" />
          <img src={background4} alt="Подберём идеальный ПК под Ваш запрос" />
          <img src={background5} alt="Собираем ПК по ценам из DNS. Дешевле Вы не найдёте" />
      </Slider>
    </div>
  )
}

export default NewsBlock;