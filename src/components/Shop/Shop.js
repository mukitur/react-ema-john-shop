import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCurt] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCurt(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>

            <div className='cart-container'>
                {
                    <Cart
                        cart={cart}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;