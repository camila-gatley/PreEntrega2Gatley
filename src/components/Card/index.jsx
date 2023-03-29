import React from 'react'
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem'
import styles from "./card.module.scss";

const Card = ({product}) => {
  return (
    <Link to={'${product.id}'}>
        <div className={styles["products"]}>
        <div className={styles["product"]}> <ProductItem product={product} /></div>
        </div>
    </Link>
    
  )
}

export default Card
