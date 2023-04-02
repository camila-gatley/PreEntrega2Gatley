import { useState, useEffect } from "react";
import styles from "./electronics.module.scss";
const JewelryCategory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products/category/jewelery"
        );
        const data = await response.json();
        setProducts(data);
    };

        fetchProducts();
    }, []);

return (
    <div>
    <h1>Jewelry</h1>
    <ul>
        {products.map((product) => (
            <div className={styles["products"]}>
            
                <div className={styles["product"]}>
                    <div className={styles["product-card"]}>
                    <div className={styles["image"]}>
                    <img src={product.image} alt={product.title} />
                </div>
            <div className={styles["title"]}>{product.title}</div>
            <div className={styles["description"]}>{product.description}</div>
            <div className={styles["price"]}>${product.price}</div>
            <button className={styles["add-to-cart-button"]}>Add to Cart</button>
    </div>
        </div>
            </div>
        ))}
    </ul>
    </div>
);
};

export default JewelryCategory;
