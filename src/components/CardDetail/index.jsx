import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProductItem from '../ProductItem'


const cardDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
  
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setProduct(null);
      }
    };
  
    useEffect(() => {
      getProduct();
    }, []);
  

  return (
    <div>
      <div>
        <ProductItem product={product} />
      </div>
    </div>
  )
}

export default cardDetail