import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <div key={tshirt._id}>
                    <p >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt)}>X</button> </p> 
                </div>)
            }
        </div>
    );
};

export default Cart;