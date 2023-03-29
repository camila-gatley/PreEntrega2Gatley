import React from 'react';
import styles from "./productItem.module.scss";

const ProductItem = ({product}) => {
  return (
    <div className={styles["product-card"]}>
        <div className={styles["image"]}>
        <img src={product.image} alt={product.title} />
        </div>
        <div className={styles["title"]}>{product.title}</div>
        <div className={styles["description"]}>{product.description}</div>
        <div className={styles["price"]}>${product.price}</div>
        <button className={styles["add-to-cart-button"]}>Add to Cart</button>
    </div>
  )
}

export default ProductItem
