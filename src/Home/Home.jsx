import { React, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {

    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);

        if (!exist) {
            setCart([...cart, tshirt]);
        }

        else {
            toast.error('alreday Added!')
        }

    }

    const handleRemoveFromCart = tshirt => {
        const newCart = cart.filter(ts => ts._id !== tshirt._id)
        setCart(newCart);
    }

    return (
        <div className="home-container">
            <div className="tshirts-container">
                {tshirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                ></TShirt>)}
            </div>

            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} ></Cart>
            <Toaster></Toaster>
        </div>
    );
};

export default Home;