import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import Product from './Product/Product';
import styles from './ProductList.module.scss';

export default class ProductList extends Component {

    render() {
        return (
            <div className={styles.container}>
                <h1>Guitars:</h1>
                <div className={styles.productList}>
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}
