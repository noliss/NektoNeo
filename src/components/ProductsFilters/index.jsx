import styles from "./ProductsFilters.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

const ProductsFilters = ({ onClick }) => {
  const [price, setPrice] = useState({
    minPrice: "all",
    maxPrice: "all",
  });

  useEffect(() => {
    onClick({
      minPrice: price.minPrice,
      maxPrice: price.maxPrice,
    });
  }, [price.minPrice, price.maxPrice]);

  const rangePrice = [
    {
      minPrice: "all",
      maxPrice: "all",
      title: "Все",
    },
    {
      minPrice: "42.000",
      maxPrice: "100.000",
      title: "42.000р - 100.000р",
    },
    {
      minPrice: "100.000",
      maxPrice: "150.000",
      title: "100.000р - 150.000р",
    },
    {
      minPrice: "150.000",
      maxPrice: "200.000",
      title: "150.000р - 200.000р",
    },
    {
      minPrice: "200.000",
      maxPrice: "250.000",
      title: "200.000р - 250.000р",
    },
    {
      minPrice: "250.000",
      maxPrice: "325.000",
      title: "250.000р - 325.000р",
    },
    {
      minPrice: "325.000",
      maxPrice: "450.000",
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
              onClick={() =>
                setPrice({
                  minPrice: item.minPrice,
                  maxPrice: item.maxPrice,
                })
              }
              key={item.price}
              className={classNames(styles.productsFilterPriceItem, {
                [styles.productsFilterPriceItemActive]:
                  price.minPrice === item.minPrice &&
                  price.maxPrice === item.maxPrice,
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
