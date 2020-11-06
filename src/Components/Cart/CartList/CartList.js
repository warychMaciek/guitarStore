import React from 'react';
import CartItem from './CartItem/CartItem';
import styles from './CartList.module.scss';


export default function CartList({value}) {
    const { cart } = value;

    return (
        <div className={styles.container}>
            {cart.map(item => <CartItem key={item.id} item={item} value={value} />)}
        </div>
    )
}
