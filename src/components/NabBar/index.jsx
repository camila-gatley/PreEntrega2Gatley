import { Link } from "react-router-dom"
import CartWidget from "../CartWidget"
import styles from "./navbar.module.scss"

const NavBar = () => {
    return (
        <>
        <nav className={styles.container_nav}>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <CartWidget />
            
        </nav>
        </>
    )
}

export default NavBar