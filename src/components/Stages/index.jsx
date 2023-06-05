import styles from './Stages.module.scss';
import { ReactComponent as Step1SVG } from '../../images/steps/1.svg';
import { ReactComponent as Step2SVG } from '../../images/steps/2.svg';
import { ReactComponent as Step3SVG } from '../../images/steps/3.svg';

const Stages = () => {
  return (
    <div className={styles.steps}>
      <p className={styles.step}>
          <Step1SVG className={styles.stepBackground} />
          Оставьте заявку на сайте или позвоните нам. 
      </p>
      <p className={styles.step}>
          <Step2SVG className={styles.stepBackground} />
          Подробно обсудим ход выполнения сборки и подберем необходимые комплектующие под ваш запрос.
      </p>
      <p className={styles.step}>
          <Step3SVG className={styles.stepBackground} />
          Собирем ПК вашей мечты, сделаем все необходимые тесты, бережно упакуем и доставим.
      </p>
    </div>
  )
}

export default Stages;