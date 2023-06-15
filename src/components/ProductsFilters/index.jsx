import styles from "./ProductsFilters.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

const ProductsFilters = ({ onClick }) => {
  const [price, setPrice] = useState("all");
  const [type, setType] = useState("design");

  useEffect(() => {
    onClick(price, type);
  }, [price, type])

  const rangePrice = [
    {
      type: "all",
      title: "Все",
    },
    {
      type: "50.000",
      title: "50.000р - 100.000р",
    },
    {
      type: "100.000",
      title: "100.000р - 150.000р",
    },
    {
      type: "150.000",
      title: "150.000р - 200.000р",
    },
    {
      type: "200.000",
      title: "200.000р - 250.000р",
    },
  ];
  const rangeTypes = [
    {
      type: "stream",
      title: "Стримера",
    },
    {
      type: "design",
      title: "Дизайнера",
    },
    {
      type: "gamer",
      title: "Геймера",
    },
  ];
  return (
    <div className={styles.productsFilters}>
      <div className={styles.productsFilterPrice}>
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
      <div className={styles.productsFilterType}>
        {rangeTypes.map((item) => {
          return (
            <div
              onClick={() => setType(item.type)}
              key={item.type}
              className={
                classNames(styles.productsFilterTypeItem, {
                [styles.productsFilterTypeItemActive]: type === item.type,
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
