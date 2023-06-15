import ServiceIMG1 from '../../images/services/service_1.png';
import ServiceIMG2 from '../../images/services/service_2.png';
import ServiceIMG3 from '../../images/services/service_3.png';
import ServiceIMG4 from '../../images/services/service_4.png';
import Button from '../Button';
import styles from './Services.module.scss';

const Services = () => {
  const services = [
    {
      img: <ServiceIMG1 />,
      title: 'ИНДИВИДУАЛЬАЯ СБОРКА',
      text: <p className={styles.serviceDescription}>
              Подбор комплектующих под ваши пожелания<br/><br/>
              Продуманная установка комплектующих в корпус<br/><br/>
              Аккуратный кабель-менеджмент<br/><br/>
              Настройка BIOS<br/><br/>
              Стресс-тест системы после сборки
            </p>,
    },
    {
      img: <ServiceIMG2 />,
      title: 'РЕМОНТ',
      text: <p className={styles.serviceDescription}>
              Диагностика устройства<br/><br/>
              Консультация по ремонту устройства<br/><br/>
              Замена комплектующих и устранение неисправностей вашего устройства<br/><br/>
              Рекомандации по дальнейшей эксплуатации
            </p>,
    },
    {
      img: <ServiceIMG3 />,
      title: 'АПГРЕЙД',
      text: <p className={styles.serviceDescription}>
              Оценка и анализ возможности апгрейда<br/><br/>
              Подбор комплектующих под ваш бюджет<br/><br/>
              Установка новых компонентов<br/><br/>
              Проверка работоспособности обновленного ПК
            </p>,
    },
    {
      img: <ServiceIMG4 />,
      title: 'ЛИЧНАЯ КОНСУЛЬТАЦИЯ',
      text: <p className={styles.serviceDescription}>
              Предложим оптимальную конфигурацию компьютера<br/><br/>
              Предоставим профессиональную консультацию<br/><br/>
              Учтем вашу периферию и даже расположение вашего ПК
            </p>,
    }
  ]
  return (
    <>
      <div className={styles.services}>
        {services.map((item) =>
          <div key={item.title} className={styles.serviceItem}>
            <img className={styles.serviceImg} src={item.img.type} alt="" />
            <span className={styles.serviceTitle}>{item.title}</span>
            {item.text}
          </div>
        )}
      </div>
      <Button className={styles.serviceButton}>Заказать свой идеальный ПК</Button>
    </>
  )
}

export default Services;