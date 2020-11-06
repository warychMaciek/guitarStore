import React, { Component } from 'react';
import styles from './Modal.module.scss';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen } = value;
                    const { img, title, price } = value.modalProduct;

                    if (modalOpen) {
                      return (
                          <div className={styles.modal}> 
                            <div className={styles.container}>
                                <h3>Item added to cart!</h3>
                                <img src={img} className={styles.photo} alt={title} />
                                <h3>{title}</h3>
                                <h4>&#36;{price}</h4>
                                <Link to="/">
                                    <button className={styles.button} onClick={value.closeModal}>Back to products</button>
                                </Link>
                                <Link to="/cart">
                                    <button className={styles.cartButton} onClick={value.closeModal}>Go to cart</button>
                                </Link>
                            </div>
                          </div>
                      )  
                    } else {
                        return null;
                    }
                }}
            </ProductConsumer>
        )
    }
}
