import React from 'react';
import styles from './CartTotal.module.scss';


export default function CartTotal({value}) {
    const { cartTotal, clearCart } = value;


    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => clearCart()}>Clear cart</button>
            <h2>Total: &#36;{cartTotal}</h2>
            <button className={styles.payButton} onClick={() => {alert('Thank you for shopping!')}}>Finish shopping and pay</button>
        </div>
    )
}
