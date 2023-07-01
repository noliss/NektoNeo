import styles from "./ProductsFilters.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

const ProductsFilters = ({ onClick }) => {
  const [price, setPrice] = useState("all");

  useEffect(() => {
    onClick(price);
  }, [price]);

  const rangePrice = [
    {
      type: "all",
      title: "Все",
    },
    {
      type: "42.000",
      title: "42.000р - 100.000р",
    },
    {
      type: "101.000",
      title: "100.000р - 150.000р",
    },
    {
      type: "100.000",
      title: "150.000р - 200.000р",
    },
    {
      type: "200.000",
      title: "200.000р - 250.000р",
    },
    {
      type: "250.000",
      title: "250.000р - 325.000р",
    },
    {
      type: "325.000",
      title: "325.000р - 450.000р",
    },
  ];
  return (
    <div className={styles.productsFilters}>
      <div className={styles.productsFilterPrice}>
      <div className={styles.productFilterMobileTitle}>Цена</div>
        {rangePrice.map((item) => {
          return (
            <div
              onClick={() => setPrice(item.type)}
              key={item.type}
              className={classNames(styles.productsFilterPriceItem, {
                [styles.productsFilterPriceItemActive]: price === item.type,
              })}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsFilters;
