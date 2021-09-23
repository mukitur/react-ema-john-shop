import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Products.css"

const Products = (props) => {
    //console.log(props)
    const { name, img, price, stock, seller } = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <h2><small>by: {seller}</small></h2>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} > {cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;