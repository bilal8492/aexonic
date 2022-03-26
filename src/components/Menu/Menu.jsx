import React from 'react'
import CartPreview from '../CartPreview/CartPreview'
import Header from '../Header/Header'
import Products from '../Products/Products'
import './Menu.css'
const Menu = () => {
    return (
        <div className='menu-main'>
            <Header />
            <div className='pro-cart'>
                <div className="product">
                    <Products />
                </div>
                <div className="cart">
                    <CartPreview />
                </div>

            </div>

        </div>
    )
}

export default Menu