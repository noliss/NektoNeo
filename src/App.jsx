import { Header } from "./components/Header";
import './styles/reset.scss';
import './styles/global.scss';
import styles from "./App.module.scss"
import NewsBlock from "./components/NewsBlock";
import Typography from "./components/Typography/Typography";
import Services from "./components/Services";
import Products from "./components/Products";
import Payment from "./components/Payment";
import Stages from "./components/Stages";
import Gifts from "./components/Gifts";
import Advantages from "./components/Advantages";
import Socials from "./components/Socials";
import Cases from "./components/Cases";
import Live from "./components/Live";
import Form from "./components/Form";
import Footer from "./components/Footer";
import light from "./images/backgrounds/light.svg";
import miniCross from "./images/backgrounds/miniCross.svg";

const App = () => {
  return (
    <div className={styles.background}>
      <section className={styles.mainBlock}>
        <div className={styles.container}>
          <Header/>
        </div>
      </section>
      <section className={styles.newsBlock}>
        <div className={styles.container}>
          <NewsBlock />
        </div>
      </section>
      <section className={styles.services}>
        <img className={styles.servicesLightRight} src={light} alt="Правое свечение" />
        <img className={styles.servicesLightLeft} src={light} alt="Левое свечение" />
        <div className={styles.container}>
          <Typography className={styles.servicesTitle} type="h2" text="НАШИ УСЛУГИ" />
          <Services />
        </div>
      </section>
      <section className={styles.products}>
        <div className={styles.container}>
          <Typography className={styles.productsTypography} type="h2" text="ЛУЧШЕЕ РЕШЕНИЕ ДЛЯ" />
          <Products/>
        </div>
      </section>
      <section className={styles.payment}>
        <div className={styles.container}>
          <Payment />
        </div>
      </section>
      <section className={styles.steps}>
        <div className={styles.container}>
          <img className={styles.stepsMiniCross} src={miniCross} alt="крестик" />
          <Typography className={styles.productsTypography} type="h2" text="ЭТАПЫ РАБОТЫ" />
          <Stages />
        </div>
      </section>
      <section className={styles.gifts}>
        <div className={styles.container}>
          <Typography className={styles.productsTypography} type="h2" text="ВМЕСТЕ С ПК ВЫ ПОЛУЧИТЕ" />
          <Gifts />
        </div>
      </section>
      <section className={styles.advantages}>
        <div className={styles.container}>
          <Typography className={styles.productsTypography} type="h2" text="НАШИ ПРЕИМУЩЕСТВА" />
          <Advantages />
        </div>
      </section>
      <section className={styles.social}>
        <div className={styles.container}>
          <Typography className={styles.productsTypography} type="h2" text="НАШИ СОЦИАЛЬНЫЕ СЕТИ" />
          <Socials />
        </div>
      </section>
      <section className={styles.cases}>
        <div className={styles.container}>
          <Typography className={styles.productsTypography} type="h2" text="НАШИ КЕЙСЫ" />
          <Cases />
        </div>
      </section>
      <section className={styles.live}>
        <div className={styles.container}>
          <Typography className={styles.productsTypography} type="h2" text="LIVE ЛЕНТА" />
          <Live />
        </div>
      </section>
      <section className={styles.form}>
        <div className={styles.container}>
          <Form />
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
