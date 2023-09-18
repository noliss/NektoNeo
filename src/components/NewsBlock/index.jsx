import styles from './NewsBlock.module.scss';
import Slider from "react-slick";
import background from '../../images/news/background_1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsBlock = () => {
  return (
    <div className={styles.content}>
      <Slider arrows={false} autoplay>
          <img src={background} alt="" />
          <img src={background} alt="" />
          <img src={background} alt="" />
      </Slider>
    </div>
  )
}

export default NewsBlock;