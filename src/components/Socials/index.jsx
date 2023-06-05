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
    },
    {
      img: <InstSVG />,
      link: '#',
      desc: 'Meta признана экстремистской организацией на территории РФ',
    },
    {
      img: <YtSVG />,
      link: '#',
      desc: '',
    },
    {
      img: <TgSVG />,
      link: '#',
      desc: '',
    },
    {
      img: <VkSVG />,
      link: '#',
      desc: '',
    },
  ];
  return (
    <div className={styles.socilas}>
      {socialItems.map((item) => {
        return (
          <a href={item.link} className={styles.socialsItem}>
            {item.img}
            <div className={styles.socialItemDesc}>{item.desc}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
