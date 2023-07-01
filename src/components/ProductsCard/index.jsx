import Button from "../Button";
import styles from "./ProductsCard.module.scss";
import light from "../../images/backgrounds/light.svg";
import computer from "../../images/products/computer1.png";
import { ReactComponent as CpuSVG } from "../../images/products/cpu.svg";
import { ReactComponent as GpuSVG } from "../../images/products/gpu.svg";
import { ReactComponent as RamSVG } from "../../images/products/ram.svg";
import { ReactComponent as DiskSVG } from "../../images/products/disk.svg";
import { ReactComponent as WaltSVG } from "../../images/products/walt.svg";
import { ReactComponent as CoolSVG } from "../../images/products/cool.svg";
import classNames from "classnames";

const ProductsCard = ({ title, image, forTo, devices, price }) => {
  console.log(title, image);
  const productWhiteTheme = () => {
    return (
      <>
        <img src={light} className={styles.productWhiteShadow} alt="light" />
        <div className={styles.productPlanet} />
        <div className={styles.productWide} />
        <div className={styles.productSpeed} />
      </>
    );
  };
  return (
    <div className={styles.product}>
      <div className={styles.productWidth}>
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productTitleShadow}>{title}</p>
        <div className={styles.productContainer}>
          <div className={styles.productImageContainer}>
            <img
              className={styles.productImage}
              src={image}
              alt="компьютер"
            />
          </div>
          <div className={styles.productStats}>
            <div className={styles.productStatsTitle}>Комплектующие</div>
            <div className={styles.productStatsContainer}>
              <div className={styles.productStatsColumn}>
                <div className={styles.productStatsItem}>
                  <div className={styles.productStatsIcon}>
                    <CpuSVG width="22" height="22" />
                  </div>
                  <p>Ryzen 5 5500</p>
                </div>
                <div className={styles.productStatsItem}>
                  <div className={styles.productStatsIcon}>
                    <GpuSVG width="21" height="21" />
                  </div>
                  <p>GTX 1650</p>
                </div>
                <div className={styles.productStatsItem}>
                  <div className={styles.productStatsIcon}>
                    <RamSVG width="22" height="22" />
                  </div>
                  <p>16GB DDR4</p>
                </div>
              </div>
              <div className={styles.productStatsColumn}>
                <div className={styles.productStatsItem}>
                  <div className={styles.productStatsIcon}>
                    <DiskSVG width="15" height="20" />
                  </div>
                  <p>2TB M2</p>
                </div>
                <div className={styles.productStatsItem}>
                  <div className={styles.productStatsIcon}>
                    <CoolSVG width="19" height="19" />
                  </div>
                  <p>AG200</p>
                </div>
                <div className={styles.productStatsItem}>
                  <div className={styles.productStatsIcon}>
                    <WaltSVG width="17" height="17" />
                  </div>
                  <p>500W</p>
                </div>
              </div>
            </div>
            <div className={styles.productPriceContainer}>
              <div className={styles.productPrice}>{price}Р</div>
              <div className={styles.productPriceShadow}>{price}Р</div>
            </div>
            <div className={styles.productCredit}>
              <p className={styles.productCreditTitle}>В кредит/рассрочку</p>
              <p className={styles.productCreditPrice}>
                ОТ {price / 2} Р. В МЕСЯЦ
              </p>
            </div>
            <Button className={styles.productBuy} type="pink">
              Купить
            </Button>
          </div>
          {productWhiteTheme()}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
