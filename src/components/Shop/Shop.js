import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    //console.log(products[0]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) =>{
        console.log('clicked');
        console.log(product);
        //cart.push(product);  // shavabik niyom  
        const newCart = [...cart, product]  // ager gulo copy korbe then add korbe
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            {/* .products-container+.cart-container */}

            <div className="products-container">
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;