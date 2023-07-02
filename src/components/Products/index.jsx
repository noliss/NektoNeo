import ProductsFilters from "../ProductsFilters";
import styles from "./Products.module.scss";
import { products } from "../../const/const";
import { useState, useCallback, lazy, Suspense, useEffect } from "react";
import Button from "../Button";
import { Animate } from "react-simple-animate";
const ProductsCard = lazy(() => import("../ProductsCard"));

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isShowProducts, setShowProducts] = useState(true);

  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 6);
  };

  useEffect(() => {
    if (!isShowProducts) {
      return setShowProducts(true);
    }
  }, [isShowProducts])

  const selectedFilter = useCallback((price) => {
    setShowProducts(false)
    console.log(filteredProducts);
    if (price.minPrice === "all" && price.maxPrice === "all") {
      return setFilteredProducts([...products]);
    }

    const formattedMinPrice = parseInt(price.minPrice.replace(".", ""));
    const formattedMaxPrice = parseInt(price.maxPrice.replace(".", ""));
    return setFilteredProducts(
      products.filter((item) => {
        const itemPrice = parseInt(item.price.replace(".", ""));
        return itemPrice >= formattedMinPrice && itemPrice <= formattedMaxPrice;
      })
    );
  }, []);

  return (
    <div className={styles.products}>
      <ProductsFilters onClick={(price) => selectedFilter(price)} />
      <div className={styles.productsCards}>
        <Suspense fallback={null}>
          {isShowProducts && filteredProducts.slice(0, visibleProducts).map((item, index) => (
            <>
              <Animate
                easeType="linear"
                play={filteredProducts}
                start={{ opacity: 0 }}
                delay={0.3}
                end={{ opacity: 1 }}
              >
                <ProductsCard
                  key={item.title}
                  title={item.title}
                  image={item.img}
                  forTo={item.forTo}
                  devices={item.devices}
                  price={item.price}
                />
              </Animate>
            </>
          ))}
        </Suspense>
      </div>
      {visibleProducts < filteredProducts.length && (
        <Button onClick={showMoreProducts} className={styles.productsButton}>
          Показать ещё
        </Button>
      )}
    </div>
  );
};

export default Products;
