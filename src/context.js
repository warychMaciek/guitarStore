import React, { Component } from 'react';
import { guitars, guitarDetails } from './data';

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: guitarDetails,
        cart: [],
        modalOpen: false,
        modalProduct: guitarDetails,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let products = [];
        guitars.forEach(item => {
            const singleItem = {...item};
            products = [...products, singleItem];
        })
        this.setState(() => {
            return {products}
        })
    }

    getItem = id => {
        const product = this.state.products.find((item => item.id === id));
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.countCartTotal();
        })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }

    increment = id => {
        const index = this.state.cart.indexOf(this.getItem(id));
        const newCart = [...this.state.cart];
        newCart[index].count++;
        newCart[index].total = newCart[index].price * newCart[index].count;


        this.setState(prev => {
            return {
                cart: newCart,
                cartTotal: prev.cartTotal + newCart[index].price
            }
        })
    }

    decrement = id => {
        const index = this.state.cart.indexOf(this.getItem(id));
        const newCart = [...this.state.cart];

        if (newCart[index].count === 1) {
            this.removeItem(id)
        } else {
            newCart[index].count--;
            newCart[index].total = newCart[index].price * newCart[index].count;


            this.setState(prev => {
                return {
                    cart: newCart,
                    cartTotal: prev.cartTotal - newCart[index].price
                }
            })
        }
    }

    removeItem = id => {
        const product = this.getItem(id);
        const cartIndex = this.state.cart.indexOf(product);
        const productIndex = this.state.products.indexOf(product);
        const tempProducts = [...this.state.products];
        const newCart = [...this.state.cart];
        newCart.splice(cartIndex, 1);
        product.inCart = false;
        tempProducts.splice(productIndex, 1, product);

        this.setState(prev => {
            return {
                cart: newCart,
                products: tempProducts,
                cartTotal: prev.cartTotal - product.total
            }
        })
    }

    clearCart = () => {
        const tempProducts = [...this.state.products];
        tempProducts.map(item => item.inCart = false)
        
        this.setState(() => {
            return {
                cart: [],
                cartTotal: 0,
                products: tempProducts
            }
        })
    }

    countCartTotal = () => {
        let total = 0;
        this.state.cart.map(item => (total += item.total));
        this.setState(() => {
            return {
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
