import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import styles from './Details.module.scss';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;

                    return (
                        <>
                            <h1>{title}</h1>
                            <div className={styles.container}>
                                <img src={img} alt={title} className={styles.photo} />
                                <div className={styles.textContainer}>
                                    <h3>Model: {title}</h3>
                                    <h3>Producer: {company}</h3>
                                    <h4>Price: &#36;{price}</h4>
                                    <p>Specification: {info}</p>
                                    <Link to="/">
                                        <button className={styles.button}>Back to products</button>
                                    </Link>
                                    <button 
                                        className={styles.addButton} 
                                        disabled={inCart ? true : false} 
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart ? 'In cart' : 'Add to cart'}
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }}
            </ProductConsumer>
        )
    }
}
