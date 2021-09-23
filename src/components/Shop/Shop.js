import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, aetProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Shop;