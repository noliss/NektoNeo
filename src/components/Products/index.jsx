import ProductsCard from '../ProductsCard';
import ProductsFilters from '../ProductsFilters';
import styles from './Products.module.scss';
import { products } from '../../const/const';
import { useState, useCallback } from 'react';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const selectedFilter = useCallback((price, type) => {
    if (price === 'all') {
      return setFilteredProducts([...products]);
    }
    setFilteredProducts(products.filter((item) => {
      if (item.price === price) {
        return item.forTo.find((item) => item.value === type)
      }
      return false
    }));
  }, []);

  console.log(filteredProducts)

  return <div className={styles.products}>
    <ProductsFilters onClick={(price, type) => selectedFilter(price, type)}/>
    <div className={styles.productsCards}>
      { filteredProducts.map((item) => 
        <ProductsCard 
          key={item.title}
          title={item.title} 
          image={item.img} 
          forTo={item.forTo} 
          devices={item.devices}
          price={item.price}
        /> ) 
      }
    </div>
  </div>
}

export default Products;