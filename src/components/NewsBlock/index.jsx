import styles from './NewsBlock.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsBlock = () => {
  return (
    <div className={styles.content}>
      <Slider arrows={false} autoplay>
        <div>БЛОК С НОВОСТЯМИ</div>
        <div>БЛО2 С НОВОСТЯМИ</div>
        <div>БЛО3 С НОВОСТЯМИ</div>
      </Slider>
    </div>
  )
}

export default NewsBlock;