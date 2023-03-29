import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProductItem from '../ProductItem'
import styles from "./cardDetail.module.scss";

const cardDetail = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    const getProducto = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/${id}');
        const data = await response.json();
        setProducto(data);
        setLoading(false);
      } catch (error) {
        setProducto(null);
      }
    };
  
    useEffect(() => {
      getProducto();
    }, []);
  
    if (!producto) {
      return <Navigate to="/404" />;
    }
  
    if (loading) {
      return <h2>Loading...</h2>;
    }

  return (
    <div className={styles["products"]}>
      <div className={styles["product"]}>
        <ProductItem product={product} />
      </div>
    </div>
  )
}

export default cardDetail