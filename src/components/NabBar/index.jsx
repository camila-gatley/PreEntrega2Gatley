import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget"
import styles from "./navbar.module.scss"
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
    return (
        <>
        <nav className={styles.container_nav}>
            <Link to="/home" >Home</Link>
            <Link to="/products"  >All Products</Link>
            <Link to="/category/electronics" >Jewelry</Link>
            <Link to="/cart" > <FaShoppingCart />  </Link>
        </nav>
        </>
    )
}

export default NavBar