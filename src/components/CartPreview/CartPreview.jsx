import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './CartPreview.css'
const CartPreview = ({ item_name, count, price, cartItems, addToCart, removeFromCart, btnText, clearCart, position, width, height }) => {

    const calculateSubTotal = () => {
        let total = 0;
        if (cartItems.length > 0) {
            cartItems.map((item) => {
                let subTotal = item.price * item.count;
                total += subTotal;
            })
        }
        return total;
    }

    return (
        <div style={{ position: position, width: width }}>
            <h1>Cart</h1>

            <p style={{ color: 'gray', fontWeight: 'bold' }}>{cartItems?.length} ITEMS</p>
            <div onClick={() => clearCart()} className='' style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 18, cursor: 'pointer', marginRight: 20 }}>Clear Cart</div>
            <div style={{ height: height, overflow: 'auto' }}>
                {
                    cartItems.map((item) => {
                        return (
                            <>
                                <div className='cart-item'>
                                    <div className='veg-non'>
                                        <div className="cirlcle"></div>
                                    </div>
                                    <p className='item-order'>{item.item_name}</p>
                                    <div className="counter-main-cart">
                                        <button onClick={() => removeFromCart(item.id)} className='minus'>-</button>
                                        <span style={{ color: '#218d21' }}>{item.count}</span>
                                        <button onClick={() => addToCart(item.id)} className='plus'>+</button>
                                    </div>
                                    <p className='price'>₹ {item.count * item.price}</p>
                                </div>

                            </>
                        )
                    })
                }
            </div>
            <div className="subTotal-price">
                <div>
                    <h1 style={{ color: '#444c53' }}>Subtotal</h1>
                    <p style={{ color: 'gray', fontWeight: 'bold' }}>Extra charges may apply</p>
                </div>
                <h1 style={{ color: '#444c53', marginRight: 30 }}>₹ {calculateSubTotal()}</h1>
            </div>
            <Link to={'/checkout'}>
                <button className='btn-checkout'>{btnText}</button>
            </Link>
        </div>
    )
}

export default CartPreview