import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    AiOutlineClose
} from "react-icons/ai";
import './Checkout.css'
import CartPreview from '../CartPreview/CartPreview';
const Checkout = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
    const [count, setCount] = useState(0);
    const countPlus = () => {
        // if () {
        setCount(count + 1)
        // }
    }
    const countMinus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className="container">


            <div className='checkout-main'>
                <div className='close'>
                    <Link to={'/'}>
                        <AiOutlineClose color='#000' size={30} />
                    </Link>
                </div>

                <div className='checkout-child'>
                    <CartPreview
                        cartItems={cartItems}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        btnText={'Proced to Pay'}
                        clearCart={clearCart}
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout