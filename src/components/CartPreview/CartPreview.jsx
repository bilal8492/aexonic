import React, { useState } from 'react'
import './CartPreview.css'
const CartPreview = () => {
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
        <div className='cart-main'>
            <h1>Cart</h1>
            <p style={{ color: 'gray', fontWeight: 'bold' }}>2 items</p>
            <div className='cart-item'>
                <div className='veg-non'>
                    <div className="cirlcle"></div>
                </div>
                <p className='item-order'>Lorem ipsum dolor sit  amet consectetur adipisicing elit. Tenetur atque fugit rem provident cupiditate, ratione praesentium</p>
                <div className="counter-main-cart">
                    <button onClick={countMinus} className='minus'>-</button>
                    <span style={{ color: '#218d21' }}>{count}</span>
                    <button onClick={countPlus} className='plus'>+</button>
                </div>
                <p className='price'>₹ 625</p>
            </div>
            <div className="subTotal-price">
                <div>
                    <h1 style={{ color: '#444c53' }}>Subtotal</h1>
                    <p style={{ color: 'gray', fontWeight: 'bold' }}>Extra charges may apply</p>
                </div>
                <h1 style={{ color: '#444c53', marginRight: 30 }}>₹ 1727</h1>
            </div>
            <button className='btn-checkout'>Checkout →</button>
        </div>
    )
}

export default CartPreview