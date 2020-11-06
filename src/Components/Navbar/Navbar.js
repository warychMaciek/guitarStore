import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Logo from '../IconComponents/LogoIcon';
import Cart from '../IconComponents/CartIcon';
import { ProductConsumer } from '../../context';


const Navbar = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cart } = value;
                let totalCount = 0;
                cart.map(item => {
                    totalCount += item.count;
                })

                return (
                    <nav className={styles.navbar}>
                        <Link to="/" className={styles.navLink}>Products</Link>
                        <Link to="/"><Logo height={120} width={120} fill="goldenrod" /></Link>
                        <Link to="/cart">
                            <button className={styles.navBtn}>
                                <Cart height={40} width={40} fill="goldenrod" />
                                {cart.length !== 0 && <div className={styles.navBtnCount}>{totalCount}</div>}
                            </button>
                        </Link>
                    </nav>
                )

            }}
        </ProductConsumer>
    )
}

export default Navbar;