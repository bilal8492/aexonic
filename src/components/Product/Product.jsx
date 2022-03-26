import React, { useEffect, useState } from 'react'
import './Product.css'
const Product = ({ item_name, price }) => {
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
        <>
            <div className='product-main'>
                <div className="left-section">
                    <div className='veg-non'>
                        <div className="cirlcle"></div>
                    </div>
                    <p className='product-name'>{item_name}</p>
                    <span style={{ marginTop: 10 }}>₹ {price}</span>
                    <p className='stay-home'>{item_name}</p>
                </div>
                <div className="right-section">
                    <div className="img-back">
                        <img height={120} width={120} src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="food-img" />
                    </div>
                    <div className="counter-main">
                        <button onClick={countMinus} className='minus'>-</button>
                        <span style={{ color: '#218d21' }}>{count}</span>
                        <button onClick={countPlus} className='plus'>+</button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Product