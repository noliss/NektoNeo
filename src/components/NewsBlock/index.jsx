import styles from './NewsBlock.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsBlock = () => {
  return (
    <div className={styles.content}>
      <Slider arrows={false} autoplay>
        <div>НОВОСТЬ</div>
        <div>НОВОСТЬ</div>
        <div>НОВОСТЬ</div>
      </Slider>
    </div>
  )
}

export default NewsBlock;