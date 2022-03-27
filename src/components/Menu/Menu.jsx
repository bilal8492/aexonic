import React from 'react'
import CartPreview from '../CartPreview/CartPreview'
import Header from '../Header/Header'
import Products from '../Products/Products'
import './Menu.css'
const Menu = ({ addToCart, removeFromCart, getCount, cartItems, itemName, clearCart }) => {
    return (
        <div className='menu-main'>
            <Products addToCart={addToCart} removeFromCart={removeFromCart} getCount={getCount} cartItems={cartItems} itemName={itemName} clearCart={clearCart} />
        </div>
    )
}

export default Menu