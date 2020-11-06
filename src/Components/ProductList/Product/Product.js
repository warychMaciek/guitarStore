import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../../context';
import styles from './Product.module.scss';
import Cart from '../../IconComponents/CartIcon';
import Logo from '../../IconComponents/LogoIcon';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;

        return (
            
            <ProductConsumer>
                {value => {
                    return (
                        <div className={styles.container} onClick={() => value.handleDetail(id)}>
                            <div className={styles.photoWrapper}>
                                <Link to="/details" className={styles.link}>    
                                    <img src={img} alt={title} className={styles.photo} />
                                </Link>
                                <button 
                                    disabled={inCart ? true : false} 
                                    className={styles.addToCart} 
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    {inCart ? 
                                        (<><Logo height={50} width={50} fill="goldenrod" /><p>In cart</p></>)
                                        :
                                        (<><Cart height={50} width={50} fill="goldenrod" /><p>Add</p></>)
                                    }
                                </button>
                            </div>
                            <Link to="/details">
                                <div className={styles.textWrapper}>
                                    <h3>{title}</h3>
                                    <h5>&#36;{price}</h5>
                                </div>
                            </Link>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
