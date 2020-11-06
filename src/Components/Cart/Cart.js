import React, { Component } from 'react';
import CartColumns from './CartColumns/CartColumns';
import { ProductConsumer } from '../../context';
import CartList from './CartList/CartList';
import CartTotal from './CartTotal/CartTotal';


export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { cart } = value;

                    if (cart.length === 0) {
                        return (
                            <h1>Your cart is empty.</h1>
                        )
                    } else {
                        return (
                            <div>
                                <h1>Your cart:</h1>
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotal value={value} />
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
