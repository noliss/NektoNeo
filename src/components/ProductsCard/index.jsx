import Button from '../Button';
import styles from './ProductsCard.module.scss';

const ProductsCard = ({ title, image, forTo, devices, price }) => {
  return <div className={styles.productCard}>
    <div className={styles.productCardTitle}>{title}</div>
    <div className={styles.productCardContent}>
    <img className={styles.productImage} src={image.type} alt="" />
      <div className={styles.productRow}>
        Идеально подходит для:
        <ul className={styles.productListDotes}>
          { forTo?.length ? forTo.map((forItem) => {
              return <li key={forItem.value} className={styles.productListDotesItem}>{forItem.label}</li>
            }) : null
          }
        </ul>
      </div>
      <div className={styles.productRow}>
      Комплектующие:
      <ul className={styles.productList}>
          { devices?.length ? devices.map((device) => {
              return <li key={device} className={styles.productListItem}>{device}</li>
            }) : null
          }
        </ul>
      </div>
      <div className={styles.productPrice}>{price} Р</div>
      <div className={styles.productButtonCtn}>
          <Button type="pink" className={styles.productButton}>Купить</Button>
      </div>
    </div>
  </div>
}

export default ProductsCard;