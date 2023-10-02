import ProductsFilters from "../ProductsFilters";
import styles from "./Products.module.scss";
import { useState, useCallback, lazy, Suspense, useEffect } from "react";
import Button from "../Button";
import { Animate } from "react-simple-animate";
const ProductsCard = lazy(() => import("../ProductsCard"));

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isShowProducts, setShowProducts] = useState(true);

  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 6);
  };

  useEffect(() => {
    getProductsData();
  }, [])

  useEffect(() => {
    if (!isShowProducts) {
      return setShowProducts(true);
    }
  }, [isShowProducts])

  const selectedFilter = useCallback((price) => {
    setShowProducts(false)
    if (price.filterFrom === "Все" && price.filterTo === "Все") {
      return setFilteredProducts([...products]);
    }

    const formattedfilterFrom = parseInt(price.filterFrom?.replace(".", ""));
    const formattedfilterTo = parseInt(price.filterTo?.replace(".", ""));
    return setFilteredProducts(
      products.filter((item) => {
        const itemPrice = parseInt(item.price.replace(".", ""));
        return itemPrice >= formattedfilterFrom && itemPrice <= formattedfilterTo;
      })
    );
  }, [products]);

  const getProductsData = async () => {
    await fetch('/getProducts/').then( async (response) => {
      let json = await response.json();
      setProducts(json.sort((a, b) => a.price - b.price))
      setFilteredProducts(json.sort((a, b) => a.price - b.price))
    })
  }

  return (
    <div className={styles.products}>
      <ProductsFilters onClick={(price) => selectedFilter(price)} />
      <div className={styles.productsCards}>
        <Suspense fallback={null}>
          {isShowProducts && filteredProducts?.slice(0, visibleProducts).map((item, index) => (
            <>
              <Animate
                key={item.id}
                easeType="linear"
                play={products}
                start={{ opacity: 0 }}
                delay={0.3}
                end={{ opacity: 1 }}
              >
                <ProductsCard
                  // key={item.id}
                  title={item.title}
                  image={item.img}
                  forTo={item.forTo}
                  devices={item.devices}
                  price={item.price}
                />
              </Animate>
            </>
          ) || null)}
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
