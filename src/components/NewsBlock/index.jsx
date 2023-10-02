import styles from './NewsBlock.module.scss';
import Slider from "react-slick";
import background2 from '../../images/news/background_2.png';
import background3 from '../../images/news/background_3.png';
import background4 from '../../images/news/background_4.png';
import background5 from '../../images/news/background_5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

const NewsBlock = () => {
  const [banners, updateBanners] = useState([]);
  useEffect(() => {
    getBannersData()
  }, [])
  const getBannersData = async () => {
    await fetch('/getBanners/').then( async (response) => {
      let json = await response.json();
      updateBanners(json.sort((a, b) => a.position - b.position))
    })
  }
  return (
    <div className={styles.content}>
      <Slider arrows={false} autoplay autoplaySpeed={6000}>
        {/* Нужен альт тег! */}
        { banners?.map((item) => {
          return <a href={item.link || '#'}>
            <img src={item.image} alt={item.id} />
          </a>
        }) }
      </Slider>
    </div>
  )
}

export default NewsBlock;