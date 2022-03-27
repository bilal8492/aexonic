import React, { useEffect, useState } from 'react';
import CartPreview from '../CartPreview/CartPreview';
import Product from '../Product/Product';
import './Products.css';
const Products = ({ itemName, addToCart, removeFromCart, getCount, cartItems, clearCart }) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8%' }}>
      <div className='product-left'>
        {
          itemName?.map((item) => {
            return (
              <Product
                key={item.id}
                {...item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                getCount={getCount}
              />
            )
          })
        }
      </div>
      {/* <div>

        {
          cartItems?.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.item_name}</p>
                <p>{item.count}</p>
                <p>{item.price * item.count}</p>
              </div>
            )
          })

        }
      </div> */}
      <div className='right-cart'>
        total: {cartItems?.length}
        <CartPreview
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          btnText={'Checkout →'}
          clearCart={clearCart}
        />
      </div>
    </div>
  )
}

export default Products