import React from 'react';
import './cart.css'

function Cart()
{
    return(
        <a href="#" className="cart"><img src={require('../cart_v2.png')}/></a>
    );
}

export default Cart;