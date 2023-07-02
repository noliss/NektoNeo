// import ProductsCard from '../ProductsCard';
import ProductsFilters from "../ProductsFilters";
import styles from "./Products.module.scss";
import { products } from "../../const/const";
import { useState, useCallback, lazy, Suspense } from "react";
import Button from "../Button";

const ProductsCard = lazy(() => import("../ProductsCard"));

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 6);
  }

  const selectedFilter = useCallback((price) => {
    console.log(price)
    if (price.minPrice === "all" && price.maxPrice === "all") {
      return setFilteredProducts([...products]);
    }

    const formattedMinPrice = parseInt(price.minPrice.replace(".", ""));
    const formattedMaxPrice = parseInt(price.maxPrice.replace(".", ""));

    return setFilteredProducts(
      products.filter((item) => {
        const itemPrice = parseInt(item.price.replace(".", ""));
        return (itemPrice >= formattedMinPrice) && (itemPrice <= formattedMaxPrice);
      })
    );
  }, []);

  return (
    <div className={styles.products}>
      <ProductsFilters onClick={(price) => selectedFilter(price)} />
      <div  className={styles.productsCards}>
        <Suspense fallback={null}>
        {filteredProducts.slice(0, visibleProducts).map((item, index) => (
          <ProductsCard
            key={item.title}
            title={item.title}
            image={item.img}
            forTo={item.forTo}
            devices={item.devices}
            price={item.price}
          />
        ))}
        </Suspense>
      </div>
      {visibleProducts < filteredProducts.length && (
        <Button
          onClick={showMoreProducts}
          className={styles.productsButton}
        >
          Показать ещё
        </Button>
      )}
    </div>
  );
};

export default Products;
