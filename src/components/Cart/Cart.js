import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    const shippingCost = 15;
    const tax = (total + shippingCost) * 10;
    const GandTotal = total + shippingCost + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Item Ordered: {props.cart.length} </h4>

            <h5>Total: {total.toFixed(2)}</h5>
            <p>Shipping Cost: {shippingCost}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h3>Grand Total: {GandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;