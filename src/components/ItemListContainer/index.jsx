import Card from "../Card";
import styles from "./ItemListContainer.module.scss"

const ItemListContainer = ({products}) => {
  return (
    <div className={styles["products"]}>
      {
        products.map((product) => {
          return <Card product={product} key={product.id} />
        })
      }
    </div>
  )
}

export default ItemListContainer;
