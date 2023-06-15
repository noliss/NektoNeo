import styles from "./Socials.module.scss";
import { ReactComponent as DzenSVG } from "../../images/socials/dzen.svg";
import { ReactComponent as InstSVG } from "../../images/socials/inst.svg";
import { ReactComponent as YtSVG } from "../../images/socials/yt.svg";
import { ReactComponent as TgSVG } from "../../images/socials/tg.svg";
import { ReactComponent as VkSVG } from "../../images/socials/vk.svg";

const Socials = () => {
  const socialItems = [
    {
      img: <DzenSVG />,
      link: '#',
      desc: '',
      alt: 'Дзен'
    },
    {
      img: <InstSVG />,
      link: '#',
      desc: 'Meta признана экстремистской организацией на территории РФ',
      alt: 'Инстаграм'
    },
    {
      img: <YtSVG />,
      link: '#',
      desc: '',
      alt: 'Ютуб'
    },
    {
      img: <TgSVG />,
      link: '#',
      desc: '',
      alt: 'Телеграм'
    },
    {
      img: <VkSVG />,
      link: '#',
      desc: '',
      alt: 'Вконтакте'
    },
  ];
  return (
    <div className={styles.socilas}>
      {socialItems.map((item, index) => {
        return (
          <a key={index} aria-label={item.alt} href={item.link} className={styles.socialsItem}>
            {item.img}
            <div className={styles.socialItemDesc}>{item.desc}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
