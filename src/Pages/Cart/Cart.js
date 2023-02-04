import React from 'react';
import { useSelector } from 'react-redux';
import ServiceCarts from '../Services/ServiceCarts';

const Cart = () => {
    const cart = useSelector((state) => state.service.cart);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  max-w-7xl gap-10 mx-auto my-10 '>
            {
                cart.sort((a, b) => a.cartPosition - b.cartPosition).map((service) => (<ServiceCarts key={service.title} service={service} />))
            }
        </div>
    );
};

export default Cart;