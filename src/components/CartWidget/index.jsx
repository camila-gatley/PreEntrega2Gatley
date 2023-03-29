import styles from "./cartwidget.module.scss"

const CartWidget = () => {
  return (
    <div className={styles.image_container}>
        <img src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"/>
        <a href="https://www.youtube.com/watch?v=xm3YgoEiEDc&t=8s" target={"_blank"}>5</a>
    </div>
    )
}

export default CartWidget