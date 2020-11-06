import React from 'react'
import styles from './CartColumns.module.scss';


export default function CartColumns() {
    return (
        <div className={styles.container}>
            <h4>products</h4>
            <h4>model</h4>
            <h4>price</h4>
            <h4>quantity</h4>
            <h4>remove</h4>
            <h4>total</h4>
        </div>
    )
}
