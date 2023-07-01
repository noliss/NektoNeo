import styles from "./Live.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev1 from "../../images/live/prev_svo_1.jpg";
import prev2 from "../../images/live/prev_svo_2.jpg";
import prev3 from "../../images/live/prev_svo_3.jpg";
import prev4 from "../../images/live/prev_svo_4.jpg";

const Live = () => {
  const lives = [
    {
      img: prev2,
      link: "#",
    },
    {
      img: prev2,
      link: "#",
    },
    {
      img: prev3,
      link: "#",
    },
    {
      img: prev4,
      link: "#",
    },
    {
      img: prev4,
      link: "#",
    },
    {
      img: prev4,
      link: "#",
    },
  ];
  const responsive = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    }
];
  return (
    <div className={styles.live}>
      <Slider responsive={responsive} focusOnSelect autoplay  slidesToScroll={1} rows={1} swipeToSlide swipeThreshold={50} slidesToShow={4} centerMode arrows={false} easing>
        {lives.map((item, index) => (
          <a key={index} href={item.link} className={styles.liveItem}>
            <img src={item.img} alt="live" />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Live;
