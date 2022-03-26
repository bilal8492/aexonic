import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = () => {
    const [itemName, setItemName] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7", requestOptions)
            .then(response => response.json())
            .then(result => {
                setItemName(result);
                // console.log(result.item_name)
            })
            .catch(error => console.log('error', error));
    }, [])
    return (
        <>
            {
                itemName?.map((item) => {
                    return (
                        <Product
                            {...item}
                        />
                    )
                })
            }
        </>
    )
}

export default Products