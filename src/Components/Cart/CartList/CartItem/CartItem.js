import React from 'react';
import styles from './CartItem.module.scss';
import TrashIcon from '../../../IconComponents/TrashIcon';


export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;


    return (
        <div className={styles.container}>
            <div><img src={img} alt={title} className={styles.photo} /></div>
            <p>{title}</p>
            <p>&#36;{price}</p>
            <p>
                <button className={styles.countButton} onClick={() => decrement(id)}>-</button>
                {count}
                <button className={styles.countButton} onClick={() => increment(id)}>+</button>
            </p>
            <TrashIcon width={30} height={30} fill="rgb(40, 46, 46)" className={styles.icon} onClick={() => removeItem(id)} />
            <p>&#36;{total}</p>
        </div>
    )
}
